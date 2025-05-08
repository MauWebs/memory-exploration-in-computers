import { useEffect, useState } from "react";

type Question = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
};

const QUESTIONS: Question[] = [
    {
        id: 1,
        question: "¿Cuál es la principal ventaja de una memoria DDR5?",
        options: ["Mayor velocidad", "Menor latencia", "Más barata", "Compatibilidad universal"],
        correctAnswer: "Mayor velocidad",
    },
    {
        id: 2,
        question: "¿Qué tipo de memoria es volátil?",
        options: ["RAM", "SSD", "HDD", "ROM"],
        correctAnswer: "RAM",
    },
    {
        id: 3,
        question: "¿Qué tipo de memoria almacena datos incluso sin energía?",
        options: ["RAM", "ROM", "Cache", "DRAM"],
        correctAnswer: "ROM",
    },
    {
        id: 4,
        question: "¿Cuál de las siguientes es una memoria secundaria?",
        options: ["Disco duro", "RAM", "Cache", "Registro"],
        correctAnswer: "Disco duro",
    },
    {
        id: 5,
        question: "¿Cuál es la función de la memoria caché?",
        options: ["Almacenar temporalmente datos de uso frecuente", "Guardar archivos", "Ejecutar programas", "Mostrar gráficos"],
        correctAnswer: "Almacenar temporalmente datos de uso frecuente",
    },
];

export default function MemoryQuiz() {
    const [answered, setAnswered] = useState<string | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [current, setCurrent] = useState(0);

    function shuffleArray<T>(array: T[]): T[] {
        return [...array].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const savedScore = localStorage.getItem("quizScore");
        if (savedScore) {
            setScore(parseInt(savedScore));
            setIsFinished(true);
        } else {
            const shuffledQuestions = shuffleArray(QUESTIONS)
                .slice(0, 5)
                .map((q) => ({
                    ...q,
                    options: shuffleArray(q.options),
                }));
            setQuestions(shuffledQuestions);
        };
    }, []);

    const handleAnswer = (option: string) => {
        if (answered || isFinished) return;

        setAnswered(option);
        if (option === questions[current].correctAnswer) {
            setScore((prev) => prev + 1);
        }

        setTimeout(() => {
            setAnswered(null);
            setCurrent((prev) => prev + 1);
        }, 1000);
    };

    const handleRetry = () => {
        localStorage.removeItem("quizScore");
        setScore(0);
        setCurrent(0);
        setIsFinished(false);
        const shuffled = shuffleArray(QUESTIONS)
            .slice(0, 5)
            .map((q) => ({
                ...q,
                options: shuffleArray(q.options),
            }));
        setQuestions(shuffled);
    };

    useEffect(() => {
        if (current === 5) {
            localStorage.setItem("quizScore", score.toString());
            setIsFinished(true);
        }
    }, [current, score]);

    const progress = ((current + 1) / 5) * 100;

    if (questions.length === 0 && !isFinished) {
        return (
            <div className="text-center p-4">
                <div className="loader">Cargando preguntas...</div>
            </div>
        );
    };

    if (isFinished || current >= 5) {
        return (
            <div className="bg-white border border-gray-200 rounded-[5px] p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">¡Quiz finalizado!</h2>
                <p className="text-lg text-gray-700">
                    Tu puntaje: <span className="text-blue-600 font-bold">{score} / 5</span>
                </p>
                <button
                    onClick={handleRetry}
                    className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Reintentar
                </button>
            </div>
        );
    };

    return (
        <div className="bg-white border border-gray-200 rounded-[5px] p-6">
            <div className="mb-4">
                <p className="text-xs font-medium text-gray-500">{current + 1}/5 - Pregunta</p>
                <div className="mt-2 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-blue-500" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <h3 className="text-lg font-semibold mb-3">{questions[current].question}</h3>

            <div className="space-y-2">
                {questions[current].options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        className={`w-full text-left px-4 py-2 border rounded-[5px] transition ${answered
                            ? opt === questions[current].correctAnswer
                                ? "border-green-500 bg-green-50 text-green-700"
                                : opt === answered
                                    ? "border-red-500 bg-red-50 text-red-700"
                                    : "border-gray-200"
                            : "border-gray-200 hover:bg-gray-100"
                            }`}
                        disabled={!!answered}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
};