import MemorySectionComparative from "./sections/MemorySectionComparative";
import { useState, useRef, useEffect } from "react";
import MemoryTrends from "./sections/MemoryTrends";
import MemoryQuiz from "./sections/MemoryQuiz";
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

            <hr className="border-t border-gray-200 my-5" />

          </section>
          <section id="memoriaRAM" className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Memoria RAM</h2>
            <p className="text-gray-700 mb-6">
              La memoria RAM (memoria de acceso aleatorio) almacena de forma temporal datos e instrucciones en ejecución. Cuando el CPU necesita dicha información, la solicita a la RAM, que los entrega en nanosegundos; tras su uso, esos valores pueden ser modificados o descartados.
            </p>
            <h3 className="text-x font-semibold mb-4">Características principales</h3>
            <p className="text-gray-700 mb-6">
              <strong>Volatilidad:</strong> la RAM es volátil, lo que significa que pierde su contenido cuando se corta la alimentación eléctrica.
              <br /> <br />
              <strong>Acceso aleatorio:</strong> permite al procesador leer o escribir información en cualquier posición de memoria con el mismo tiempo de acceso, a diferencia de memorias secuenciales como las cintas magnéticas.
              <br /> <br />
              <strong>Velocidad:</strong> ofrece velocidades de acceso muy superiores a las de los discos duros o memorias flash, típicamente expresadas en <strong>MHz</strong> o frecuencia de <strong>BUS</strong> (interfaz de comunicación entre componentes) y MT/s (millones de transferencias por segundo).
            </p>
            <h3 className="text-x font-semibold mb-4">Rendimiento</h3>
            <p className="text-gray-700 mb-6">
              La memoria RAM (memoria de acceso aleatorio) almacena de forma temporal datos e instrucciones en ejecución. Cuando el CPU necesita dicha información, la solicita a la RAM, que los entrega en nanosegundos; tras su uso, esos valores pueden ser modificados o descartados.
              <br />
              Para medir su velocidad y rendimiento existen 4 parámetros muy importantes:
              <br /> <br />
              <strong>Velocidad de transferencia: </strong> La tasa de transferencia en RAM, medida en MT/s (millones de transferencias por segundo), indica cuántos millones de datos (palabras) puede enviar o recibir la memoria cada segundo. Es el producto de la frecuencia de reloj real por el número de transferencias que hace por ciclo (ej. DDR transfiere 2 veces por ciclo), y determina el ancho de banda efectivo de la memoria.
              <br /> <br />
              <strong>Frecuencia: </strong>La frecuencia de la RAM, expresada en MHz, es el número de ciclos de reloj que el módulo realiza por segundo. Define la velocidad básica de sincronización con el controlador de memoria: a mayor MHz, más rápido pueden ocurrir las operaciones de lectura/escritura por ciclo.
              <br /> <br />
              <strong>Latencia (CL): </strong>La latencia (por ejemplo, CL‑16) es el número de ciclos de reloj (medido en nanosegundos) que transcurren entre que el controlador solicita un dato y éste está disponible. Menor valor de CL significa respuesta más rápida tras la petición.
              <br /> <br />
              <strong>Bancos / Arquitectura: </strong>La arquitectura define cómo está organizada internamente para optimizar la transferencia de datos.A partir de la invención del DDR, esta está organizada por bancos, cuanto mayor sea la cantidad de bancos,  más velocidad, ya que, cada banco tiene su propio decodificador, permitiendo tener varios canales por los que la RAM puede trabajar en paralelo mejorando así el rendimiento.

              <div className="bg-blue-50 border-l-4 border-[#3a4fff] p-4 rounded-[5px] mt-6 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3a4fff]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-700"> <strong>Dato útil</strong></h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>Si aplicamos<strong> Dual Channel o Tri Channel </strong> (osea, tener dos o 3 memorias RAM en lugar de una) permitiremos el acceso simultáneo a dos/tres módulos de memoria, aumentando el ancho de banda y mejorando el rendimiento del sistema</p>
                    </div>
                  </div>
                </div>
              </div>


              Si te interesa, acá te dejamos un cuadro para comparar y comprender mejor el avance en memorias RAM!
            </p>

            <div className="table-responsive mb-6">
              <table className="ram-table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Frec. bus (MHz)</th>
                    <th>Transferencia (MT/s)</th>
                    <th>Latencia CL típica</th>
                    <th>Arquitectura</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Tipo">SDR</td>
                    <td data-label="Frec. bus (MHz)">100–133</td>
                    <td data-label="Transferencia (MT/s)">100–133</td>
                    <td data-label="Latencia CL típica">CL2–3</td>
                    <td data-label="Bancos / Arquitectura">síncronía básica (168 pines)</td>
                  </tr>
                  <tr>
                    <td data-label="Tipo">DDR</td>
                    <td data-label="Frec. bus (MHz)">100–200</td>
                    <td data-label="Transferencia (MT/s)">200–400</td>
                    <td data-label="Latencia CL típica">CL3–5</td>
                    <td data-label="Bancos / Arquitectura">2 bancos</td>
                  </tr>
                  <tr>
                    <td data-label="Tipo">DDR2</td>
                    <td data-label="Frec. bus (MHz)">100–200</td>
                    <td data-label="Transferencia (MT/s)">400–800</td>
                    <td data-label="Latencia CL típica">CL5–6</td>
                    <td data-label="Bancos / Arquitectura">4 bancos</td>
                  </tr>
                  <tr>
                    <td data-label="Tipo">DDR3</td>
                    <td data-label="Frec. bus (MHz)">100–200</td>
                    <td data-label="Transferencia (MT/s)">800–1600</td>
                    <td data-label="Latencia CL típica">CL9–11</td>
                    <td data-label="Bancos / Arquitectura">8 bancos</td>
                  </tr>
                  <tr>
                    <td data-label="Tipo">DDR4</td>
                    <td data-label="Frec. bus (MHz)">200–400</td>
                    <td data-label="Transferencia (MT/s)">1600–3200</td>
                    <td data-label="Latencia CL típica">CL16–18</td>
                    <td data-label="Bancos / Arquitectura">16 bancos en 4 grupos de bancos</td>
                  </tr>
                  <tr>
                    <td data-label="Tipo">DDR5</td>
                    <td data-label="Frec. bus (MHz)">200–450</td>
                    <td data-label="Transferencia (MT/s)">3200–6400+</td>
                    <td data-label="Latencia CL típica">CL36–40</td>
                    <td data-label="Bancos / Arquitectura">32 bancos en 8 grupos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-t border-gray-200 my-5" />

          <section id="memoriaROM" className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Memoria ROM</h2>
            <p className="text-gray-700 mb-6">
              Por otra parte, este tipo de memoria es opuesta a la RAM, ya que, la función principal de la misma es almacenar de forma permanente el firmware esencial que el sistema necesita al arrancar, como el BIOS o UEFI, incluyendo las rutinas de auto‑test (POST) y la inicialización del hardware antes de cargar el sistema operativo. Sus 2 principales características son:
              <br /><br />
              <strong>No volátil: </strong>Conserva los datos incluso sin alimentación eléctrica, mediante el almacenamiento de celdas de memoria individuales usando código binario (0, 1).
              <br /> <br />
              <strong>Almacenamiento permanente: </strong>el contenido se graba en fábrica o con pulsos eléctricos muy especiales y no cambia durante la vida útil normal del dispositivo.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-[5px] mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800"><strong>¡Aclaración!</strong></h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>Conserva los datos en código binario que se graba de fábrica y no cambia en la vida útil del dispositivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Existen <strong>4 tipos de memorias ROM</strong>, caracterizadas principalmente por su capacidad de eliminar/modificar información una vez ya instalada, a continuación, ¡mostramos un cuadro para recordar mejor estos 4 tipos!
            </p>
            <div className="table-responsive2">
              <table className="rom-table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Descripción</th>
                    <th>Mecanismo de borrado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Tipo">PROM</td>
                    <td data-label="Descripción">Programmable ROM: se programa una sola vez tras su fabricación.</td>
                    <td data-label="Mecanismo de borrado">Ninguno</td>
                  </tr>
                  <tr>
                    <td data-label="Tipo">EPROM</td>
                    <td data-label="Descripción">Erasable PROM: puede borrarse con luz UV y reprogramearse.</td>
                    <td data-label="Mecanismo de borrado">Luz ultravioleta</td>
                  </tr>
                  <tr>
                    <td data-label="Tipo">EEPROM</td>
                    <td data-label="Descripción">Electrically Erasable PROM: borrado y reprogramación eléctricos.</td>
                    <td data-label="Mecanismo de borrado">Señales eléctricas</td>
                  </tr>
                  <tr>
                    <td data-label="Tipo">Flash ROM</td>
                    <td data-label="Descripción">Variante de EEPROM con borrado por bloques, alta velocidad y densidad.</td>
                    <td data-label="Mecanismo de borrado">Borrado por bloques eléctricos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-t border-gray-200 my-5" />

          <section id="memoriaCache" className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Memoria Caché</h2>
            <p className="text-gray-700 mb-6">
              La memoria caché es un pequeño bloque de memoria muy rápida que se sitúa entre el CPU y la RAM principal. Su propósito es almacenar temporalmente las instrucciones y datos que el procesador usa con mayor frecuencia, de modo que puedan recuperarse en nanosegundos en lugar de los decenas de nanosegundos que tarda la RAM . Al reducir el tiempo de espera del CPU, la caché acelera el rendimiento global del sistema
            </p>
            <h3 className="text-x font-semibold mb-4">Jerarquía</h3>
            <p className="text-gray-700 mb-6">
              La memoria caché tiene un sistema de jerarquía (L1, L2 y L3) que se ordena de acuerdo a la velocidad y a la cantidad de información situada dentro de cada núcleo, siendo L1 la más veloz, pero la que contiene menos información y L3 la más lenta pero con una mayor cantidad de información.
            </p>
            <h3 className="text-x font-semibold mb-4">Principios de localidad</h3>
            <p className="text-gray-700 mb-6">
              <strong>Localidad temporal: </strong>Los datos o instrucciones recientemente usados tienen alta probabilidad de volver a usarse pronto. La caché los retiene tras el primer acceso para atender rápidamente futuros requerimientos
              <br /><br />
              <strong>Localidad espacial: </strong>Los accesos a una dirección de memoria tienden a “agrupase” cerca de direcciones contiguas. Al cargar un bloque de memoria, la caché trae también sus vecinos, anticipándose a accesos inmediatos
            </p>
          </section>

          <hr className="border-t border-gray-200 my-5" />

          <section id="memoriaVirtual" className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Memoria Virtual</h2>
            <p className="text-gray-700 mb-6">
              La memoria virtual es un mecanismo del sistema operativo que extiende la memoria RAM usando espacio en disco, de modo que cada proceso crea la ilusión de disponer de un gran bloque contiguo de memoria privada.
            </p>
            <h3 className="text-x font-semibold mb-4">¿Cómo funciona?</h3>
            <p className="text-gray-700 mb-6">
              Direcciones virtuales vs. físicas
              Cada programa trabaja con direcciones “virtuales”.
              Un componente del procesador (la MMU) traduce esas direcciones a “físicas” (la RAM real) mediante tablas de páginas. Paginación y swap
              La memoria se divide en bloques fijos llamados páginas (por ejemplo, 4 KB).
              Cuando la RAM está llena, páginas poco usadas se escriben (“swappean”) a un archivo o partición de intercambio en disco.
              Si un proceso pide una página que está en disco, se produce una “falla de página”: el SO la trae de vuelta a RAM, expulsando otra si es necesario.
              Ventajas
              Aislamiento: cada proceso cree tener su propio espacio, mejora estabilidad y seguridad.
              Multitarea: permite ejecutar más programas de los que cabrían físicamente en RAM.
              Flexibilidad: el SO gestiona dinámicamente qué permanece en RAM y qué va al disco según necesidad.
              En esencia, la memoria virtual abstrae y amplía la memoria física, mezclando RAM y disco para optimizar el uso de recursos y facilitar la ejecución concurrente de múltiples procesos.

            </p>
          </section>

          <MemorySectionComparative />

          <hr className="border-t border-gray-200 my-5" />
          
          <MemoryTrends />

          <hr className="border-t border-gray-200 my-5" />

          <MemoryQuiz />

        </div>
      </main>
    </div>
  );
};

export default App;