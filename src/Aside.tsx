import { MonitorSmartphone, Book, MemoryStick, TrendingUp, TextSearch } from "lucide-react";
import { useState, useRef } from "react";

export default function Aside() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("introduction");

    const sectionRefs = {
        introduction: useRef<HTMLElement>(null),
        authentication: useRef<HTMLElement>(null),
        errors: useRef<HTMLElement>(null),
        users: useRef<HTMLElement>(null),
        products: useRef<HTMLElement>(null),
        orders: useRef<HTMLElement>(null),
        payments: useRef<HTMLElement>(null),
        webhooks: useRef<HTMLElement>(null),
        pagination: useRef<HTMLElement>(null),
        rateLimits: useRef<HTMLElement>(null),
    };

    const handleNavClick = (sectionId: string) => {
        setActiveSection(sectionId);
        sectionRefs[sectionId as keyof typeof sectionRefs]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="bg-white border-b border-gray-200 sticky top-0 z-30 block md:hidden">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="text-base font-bold text-black-800">
                        <span className="flex items-center">
                            <MonitorSmartphone className="mr-2 text-gray-500" />
                            <span>Las Memorias en un PC</span>
                        </span>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            <aside className={`w-full md:w-60 bg-[#FFFFFF] border-r border-gray-200 p-4 ${isMobileMenuOpen ? 'fixed top-9' : 'hidden'} md:block md:fixed top-0 left-0 h-screen overflow-y-auto z-20 border-b md:border-b-0`}>
                <div className="top-0">
                    <div className="mb-2">
                        <div className="relative"></div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xs font-semibold text-black-500 uppercase tracking-wider mb-3 flex items-center">
                                <Book className="mr-1.5 h-5 w-5" /> Introducción
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#introduction"
                                        onClick={() => handleNavClick('introduction')}
                                        className={`text-sm block transition-colors ${activeSection === 'introduction' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        ¿Qué es la memoria?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#función"
                                        onClick={() => handleNavClick('función')}
                                        className={`text-sm block transition-colors ${activeSection === 'función' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        ¿Cuál es su función?
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-t border-gray-200 my-5 -mx-4" />

                        <div>
                            <h3 className="text-xs font-semibold text-black-500 uppercase tracking-wider mb-3 flex items-center">
                                <MemoryStick className="mr-1.5 h-5 w-5" /> Tipos de memoria
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#memoriaRAM"
                                        onClick={() => handleNavClick('memoriaRAM')}
                                        className={`text-sm block transition-colors ${activeSection === 'memoriaRAM' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria RAM
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#memoriaROM"
                                        onClick={() => handleNavClick('memoriaROM')}
                                        className={`text-sm block transition-colors ${activeSection === 'memoriaROM' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria ROM
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#memoriaCache"
                                        onClick={() => handleNavClick('memoriaCache')}
                                        className={`text-sm block transition-colors ${activeSection === 'memoriaCache' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria Caché
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#memoriaVirtual"
                                        onClick={() => handleNavClick('memoriaVirtual')}
                                        className={`text-sm block transition-colors ${activeSection === 'memoriaVirtual' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria Virtual
                                    </a>
                                </li>           <li>
                                    <a
                                        href="#Comparativa"
                                        onClick={() => handleNavClick('users')}
                                        className={`text-sm block transition-colors ${activeSection === 'users' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Comparativa
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-t border-gray-200 my-5 -mx-4" />

                        <div>
                            <h3 className="text-xs font-semibold text-black-500 uppercase tracking-wider mb-3 flex items-center">
                                <TrendingUp className="mr-1.5 h-5 w-5" /> Tendencias
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#GDDR7"
                                        onClick={() => handleNavClick('GDDR7')}
                                        className={`text-sm block transition-colors ${activeSection === 'GDDR7' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria GDDR7
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#GDDR7"
                                        onClick={() => handleNavClick('authentication')}
                                        className={`text-sm block transition-colors ${activeSection === 'authentication' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Cristal de Memoria 5D
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#GDDR7"
                                        onClick={() => handleNavClick('errors')}
                                        className={`text-sm block transition-colors ${activeSection === 'errors' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria HBM3E
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-t border-gray-200 my-5 -mx-4" />

                        <div>
                            <h3 className="text-xs font-semibold text-black-500 uppercase tracking-wider mb-3 flex items-center">
                                <TextSearch className="mr-1.5 h-5 w-5" /> Conclusión
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#conclusion"
                                        onClick={() => handleNavClick('conclusion')}
                                        className={`text-sm block transition-colors ${activeSection === 'conclusion' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Vista general
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#evaluacion"
                                        onClick={() => handleNavClick('evaluacion')}
                                        className={`text-sm block transition-colors ${activeSection === 'evaluacion' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Evaluación
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};