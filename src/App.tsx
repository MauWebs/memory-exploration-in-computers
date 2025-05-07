import MemorySectionComparative from "./sections/MemorySectionComparative";
import { useState, useRef, useEffect } from "react";
import Aside from "./Aside";

const App = () => {
  const [, setActiveSection] = useState("introduction");
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
    rateLimits: useRef<HTMLElement>(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const [sectionId, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetBottom = offsetTop + ref.current.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col md:flex-row">
        <Aside />
        <div className="flex-grow p-6 md:p-8 max-w-8xl ml-0 md:ml-60">

          <section id="introduction" className="mb-10">
            <h2 className="text-xl font-semibold mb-4">¿Qué es la memoria de una computadora?</h2>
            <p className="text-gray-700 mb-6">
              La memoria de una computadora es un componente esencial que permite almacenar datos e instrucciones de manera temporal o permanente, para que el procesador pueda acceder a ellos rápidamente.
              Sin ella, una computadora no podría ejecutar programas ni retener información durante su funcionamiento.
            </p>
            <p className="text-gray-700 mb-6">
              Existen varios tipos de memoria: la <strong>RAM</strong> (memoria de acceso aleatorio), que es volátil y se borra al apagar el equipo; y la <strong>ROM</strong> (memoria de solo lectura), que contiene instrucciones fundamentales del sistema.
              También se incluyen unidades de almacenamiento como los discos duros (HDD/SSD), que conservan la información incluso cuando el sistema está apagado.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#3a4fff] p-4 rounded mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3a4fff]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-700"> <strong>Dato útil</strong></h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>La <strong>RAM</strong> es clave para el rendimiento: a mayor cantidad y velocidad, <strong>más fluida</strong> será la ejecución de programas y juegos.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-t border-gray-200 my-5" />

          <section id="function" className="mb-10">
            <h2 className="text-xl font-semibold mb-4">¿Cuál es su función?</h2>
            <p className="text-gray-700 mb-6">
              La memoria permite que el sistema operativo, los programas y los datos en uso estén disponibles de forma inmediata para el procesador. Actúa como un espacio de trabajo temporal
              que influye directamente en la velocidad de respuesta del equipo.
            </p>
            <p className="text-gray-700 mb-6">
              Cuando abres una aplicación, esta se carga desde el disco a la <strong>RAM</strong>, donde se ejecuta. Si la memoria disponible es insuficiente, el sistema puede volverse lento
              o incluso colapsar. Por eso, es importante contar con una cantidad adecuada de memoria para el uso que le des a tu computadora.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800"><strong>Importante</strong></h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>Si tu <strong>PC</strong> se queda <strong>sin RAM</strong>, empezará a usar el disco como memoria virtual, lo que puede hacer que todo funcione <strong>mucho más lento</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <MemorySectionComparative />
        </div>
      </main>
    </div>
  );
};

export default App;