type Memory = {
    type: string;
    price: number;
    latencyCL: number;
    speedMHz: number;
    bandwidthGBs: number;
};

export default function RankedMemoriesTable({ memories }: { memories: Memory[] }) {
    const ranked = [...memories]
        .map((m) => {
            const rawScore = ((m.speedMHz + m.bandwidthGBs * 100) / m.latencyCL) / m.price * 100;
            return {
                ...m,
                rawScore,
                score: Math.min(rawScore, 100),
            };
        })
        .sort((a, b) => b.rawScore - a.rawScore);

    return (
        <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Ranking rendimiento / precio</h3>
            <div className="overflow-auto rounded border border-gray-200">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 font-semibold">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Tipo</th>
                            <th className="px-4 py-2">Precio</th>
                            <th className="px-4 py-2">
                                <span className="hidden md:inline">Velocidad (MHz)</span>
                                <span className="md:hidden">Velocidad</span>
                            </th>
                            <th className="px-4 py-2">
                                <span className="hidden md:inline">Ancho de banda (GB/s)</span>
                                <span className="md:hidden">Ancho</span>
                            </th>
                            <th className="px-4 py-2">
                                <span className="hidden md:inline">Latencia (CL)</span>
                                <span className="md:hidden">Latencia</span>
                            </th>
                            <th className="px-4 py-2">Puntaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranked.map((m, idx) => (
                            <tr key={m.type} className="border-t border-gray-200">
                                <td className="px-4 py-2">{idx + 1}</td>
                                <td className="px-4 py-2">{m.type}</td>
                                <td className="px-4 py-2">${m.price.toLocaleString("es-AR")}</td>
                                <td className="px-4 py-2">{m.speedMHz.toLocaleString("es-AR")}</td>
                                <td className="px-4 py-2">{m.bandwidthGBs.toLocaleString("es-AR")}</td>
                                <td className="px-4 py-2">{m.latencyCL.toLocaleString("es-AR")}</td>
                                <td className="px-4 py-2 text-green-600 font-medium">
                                    {Number.isInteger(m.score) ? `${m.score}%` : `${m.score.toFixed(2)}%`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};