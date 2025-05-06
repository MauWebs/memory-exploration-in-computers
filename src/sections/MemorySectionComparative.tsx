import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { useState, useEffect } from "react";
import MemoryModal from "./MemoryModal";

export default function MemorySectionComparative() {
    const [memories, setMemories] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("memories");
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
                setMemories(parsed);
            }
        }
    }, []);

    return (
        <section className="mb-10 bg-white border border-gray-200 p-6 rounded-xl">
            <MemoryModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                memories={memories}
                setMemories={setMemories}
            />

            <article className="mb-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Comparativas</h2>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                    >
                        Ver lista
                    </button>
                </div>
            </article>

            <hr className="border-t border-gray-200 my-5 -mx-6" />

            <article>
                {memories.length === 0 ? (
                    <p className="text-gray-600 text-center">
                        Añade memorias para poder compararlas
                        <br />
                        dirígete a la parte de{" "}
                        <span
                            onClick={() => setIsModalOpen(true)}
                            className="text-blue-600 font-semibold cursor-pointer underline underline-offset-4"
                        >
                            ver lista
                        </span>{" "}
                        para añadir memorias
                    </p>
                ) : (
                    <>
                        <h3 className="text-lg font-medium mb-4">Rendimiento comparado</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={memories}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <XAxis dataKey="type" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="speedMHz" fill="#8884d8" name="Velocidad (MHz)" />
                                <Bar dataKey="bandwidthGBs" fill="#82ca9d" name="Ancho de banda (GB/s)" />
                                <Bar dataKey="latencyCL" fill="#ff7300" name="Latencia (CL)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </>
                )}
            </article>

        </section>
    );
};