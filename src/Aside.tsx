import { MonitorSmartphone, Book, MemoryStick, MonitorCog, TrendingUp, TextSearch } from "lucide-react";
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
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10 block md:hidden">
                <div className="container mx-auto px-6 py-5 flex items-center justify-between">

                    <div className="text-lg font-bold text-black-800">
                        <span className="flex items-center">
                            <MonitorSmartphone className="mr-3 text-gray-500" />
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

            <aside className={`w-full md:w-60 bg-[#FFFFFF] border-r border-gray-200 p-4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:fixed top-0 left-0 h-full overflow-y-auto z-20 border-b md:border-b-0`}>
                <div className="sticky top-0">
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
                                        href="#authentication"
                                        onClick={() => handleNavClick('authentication')}
                                        className={`text-sm block transition-colors ${activeSection === 'authentication' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
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
                                        href="#payments"
                                        onClick={() => handleNavClick('payments')}
                                        className={`text-sm block transition-colors ${activeSection === 'payments' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria Virtual
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#orders"
                                        onClick={() => handleNavClick('orders')}
                                        className={`text-sm block transition-colors ${activeSection === 'orders' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria Caché
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#products"
                                        onClick={() => handleNavClick('products')}
                                        className={`text-sm block transition-colors ${activeSection === 'products' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria ROM
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#users"
                                        onClick={() => handleNavClick('users')}
                                        className={`text-sm block transition-colors ${activeSection === 'users' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Memoria RAM
                                    </a>
                                </li>           <li>
                                    <a
                                        href="#users"
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
                                <MonitorCog className="mr-1.5 h-5 w-5" /> Rendimiento
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#rateLimits"
                                        onClick={() => handleNavClick('rateLimits')}
                                        className={`text-sm block transition-colors ${activeSection === 'rateLimits' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Arquitectura en canales
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#webhooks"
                                        onClick={() => handleNavClick('webhooks')}
                                        className={`text-sm block transition-colors ${activeSection === 'webhooks' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Velocidad en MHz
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#pagination"
                                        onClick={() => handleNavClick('pagination')}
                                        className={`text-sm block transition-colors ${activeSection === 'pagination' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Latencia (CL)
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
                                        href="#introduction"
                                        onClick={() => handleNavClick('introduction')}
                                        className={`text-sm block transition-colors ${activeSection === 'introduction' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Lorem Ipsum is simply
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#authentication"
                                        onClick={() => handleNavClick('authentication')}
                                        className={`text-sm block transition-colors ${activeSection === 'authentication' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Lorem Ipsum is sim
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#errors"
                                        onClick={() => handleNavClick('errors')}
                                        className={`text-sm block transition-colors ${activeSection === 'errors' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Lorem Ipsum
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
                                        href="#introduction"
                                        onClick={() => handleNavClick('introduction')}
                                        className={`text-sm block transition-colors ${activeSection === 'introduction' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
                                    >
                                        Vista general
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#errors"
                                        onClick={() => handleNavClick('errors')}
                                        className={`text-sm block transition-colors ${activeSection === 'errors' ? 'text-[#3a4fff] font-medium' : 'text-gray-600 hover:text-[#3a4fff]'}`}
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