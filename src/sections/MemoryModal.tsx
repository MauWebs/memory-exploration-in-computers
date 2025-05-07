import { X, Trash, Plus } from "lucide-react";
import { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";

export default function MemoryModal({
    isOpen,
    setIsOpen,
    memories,
    setMemories,
}: {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    memories: any[];
    setMemories: (val: any[]) => void;
}) {
    const [form, setForm] = useState({
        type: "",
        price: "",
        speedMHz: "",
        latencyCL: "",
        bandwidthGBs: "",
    });

    const addMemory = () => {
        if (!form.type || !form.speedMHz || !form.latencyCL || !form.bandwidthGBs) return;

        const newMemory = {
            ...form,
            price: +form.price,
            speedMHz: +form.speedMHz,
            latencyCL: +form.latencyCL,
            bandwidthGBs: +form.bandwidthGBs,
        };

        const updated = [...memories, newMemory];
        setMemories(updated);
        localStorage.setItem("memories", JSON.stringify(updated));

        setForm({ type: "", speedMHz: "", latencyCL: "", bandwidthGBs: "", price: "" });
    };

    const deleteMemory = (index: number) => {
        const updated = memories.filter((_, i) => i !== index);
        setMemories(updated);
        localStorage.setItem("memories", JSON.stringify(updated));
    };

    return (
<Dialog open={isOpen} onClose={() => setIsOpen(false)} as={Fragment}>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
        <Dialog.Panel className="bg-white rounded p-6 max-w-3xl w-full shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center">
                <Dialog.Title className="text-xl font-bold">Lista de memorias:</Dialog.Title>
                <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">
                    <X size={24} />
                </button>
            </div>

            <article>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-6">
                    {[
                        { label: "Tipo", key: "type" },
                        { label: "Precio", key: "price" },
                        { label: "Velocidad", key: "speedMHz" },
                        { label: "Latencia", key: "latencyCL" },
                        { label: "Ancho", key: "bandwidthGBs" },
                    ].map(({ label, key }) => (
                        <label key={key} className="flex flex-col gap-1 max-w-full">
                            <span className="text-sm font-semibold text-gray-800">{label}</span>
                            {key === "price" ? (
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={
                                        form.price
                                            ? new Intl.NumberFormat("es-AR").format(parseInt(form.price))
                                            : ""
                                    }
                                    onChange={(e) => {
                                        const raw = e.target.value.replace(/\./g, "").replace(/\D/g, "");
                                        setForm({ ...form, price: raw });
                                    }}
                                    className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            ) : (
                                <input
                                    type={key === "type" ? "text" : "number"}
                                    value={form[key as keyof typeof form]}
                                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                                    className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            )}
                        </label>
                    ))}
                </div>

                <button
                    onClick={addMemory}
                    className="w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center rounded mt-4"
                >
                    <Plus size={20} className="mr-2" />
                    Agregar memoria
                </button>
            </article>

            <hr className="border-t border-gray-200 my-5 -mx-6" />

            <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {memories.map((mem, index) => (
                    <div
                        key={index}
                        className="border rounded p-4 border-gray-300 flex justify-between items-center"
                    >
                        <div>
                            <p>
                                <strong>Tipo:</strong>{" "}
                                <span className="text-gray-600">{mem.type}</span>
                            </p>
                            <p>
                                <strong>Precio:</strong>{" "}
                                <span className="text-gray-600">
                                    ${new Intl.NumberFormat("es-AR").format(mem.price)}
                                </span>
                            </p>
                            <p>
                                <strong>Latencia:</strong>{" "}
                                <span className="text-gray-600">{mem.latencyCL} CL</span>
                            </p>
                            <p>
                                <strong>Velocidad:</strong>{" "}
                                <span className="text-gray-600">{mem.speedMHz} MHz</span>
                            </p>
                            <p>
                                <strong>Ancho de banda:</strong>{" "}
                                <span className="text-gray-600">{mem.bandwidthGBs} GB/s</span>
                            </p>
                        </div>
                        <button
                            onClick={() => deleteMemory(index)}
                            className="text-red-600 hover:text-red-800"
                        >
                            <Trash size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </Dialog.Panel>
    </div>
</Dialog>
    );
};