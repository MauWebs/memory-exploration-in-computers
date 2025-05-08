import { Link as LinkIcon, Microchip, Gem, Cpu } from "lucide-react";

const TRENDS_TEXTS = [
    {
        title: "Memoria GDDR7",
        description:
            "La memoria GDDR7 entrará en producción en masa en Q1 de 2025 por parte de SK Hynix. Ofrece hasta 40 Gbps, ideal para gráficas de nueva generación.",
        source: "Profesional Review - Gustavo Gamarra",
        link: "https://www.profesionalreview.com/2024/06/13/sk-hynix-produccion-masa-gddr7-2025/",
        icon: Microchip,
    },
    {
        title: "Cristal de Memoria 5D",
        description:
            "Investigadores han creado un cristal capaz de almacenar 360 TB por disco durante miles de millones de años. Utiliza grabado en 5 dimensiones con láseres de femtosegundo.",
        source: "Cadena SER",
        link: "https://cadenaser.com/nacional/2024/09/20/crean-un-cristal-eterno-e-irrompible-con-nuestro-genoma-en-su-interior-para-rescatar-a-la-humanidad-si-nos-extinguimos-cadena-ser/",
        icon: Gem,
    },
    {
        title: "Memoria HBM3E",
        description:
            "SK Hynix comenzó la producción masiva de HBM3E de 12 capas en septiembre de 2024. Altamente demandada para IA y HPC, ya casi agotada para 2025.",
        source: "Reuters",
        link: "https://www.reuters.com/technology/sk-hynix-start-mass-producing-hbm3e-12-layer-chips-this-month-2024-09-04/",
        icon: Cpu,
    },
];

export default function MemoryTrends() {
    return (
        <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Futuro y tendencias de las memorias</h3>
            <div className="space-y-4">
                {TRENDS_TEXTS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.title}
                            className="border border-gray-200 rounded-xl bg-white overflow-hidden"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                {Icon && <Icon className="w-4 h-4 text-[#6F6BD9]" />}
                                    <h4 className="text-md font-semibold">{item.title}</h4>
                                </div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline"
                                >
                                    <LinkIcon className="w-4 h-4" />
                                    Ver más
                                </a>
                            </div>

                            <div className="bg-gray-50 px-4 py-3">
                                <p className="text-sm text-gray-800">{item.description}</p>
                                <div className="mt-2 text-xs text-gray-600">{item.source}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};