import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Layers, MonitorSmartphone, Palette, Send, CheckCircle2, Menu, X } from "lucide-react";

const projects = [
  {
    type: "Landing Page",
    title: "MAD11",
    desc: "Landing page informativa con formulario de contacto, diseñada para dar a conocer el proyecto y facilitar la captación de posibles clientes.",
    tags: ["Landing", "Captación", "Formulario", "Web"],
    url: "https://mad11.netlify.app/",
    featured: true,
  },
  {
    type: "App + IA",
    title: "Shoelace Lab",
    desc: "Aplicación web creada con IA para el control de una academia de fútbol: rendimiento, preparación física, control de asistencia y gestión del staff.",
    tags: ["App", "IA", "Producto digital", "Web App"],
    url: "https://shoelacelab.netlify.app/",
    featured: true,
  },
  {
    type: "Identidad Visual",
    title: "Casas Nobles",
    desc: "Manual de identidad corporativa para una marca de gestión patrimonial inmobiliaria premium: estrategia, tono verbal, paleta cromática, tipografías y sistema visual.",
    tags: ["Branding", "Identidad corporativa", "Manual de marca", "Premium"],
    url: "https://drive.google.com/file/d/1_G7ARja9hrjyx9RUqaKtiTxu-RUBbAtJ/view?usp=sharing",
    featured: true,
  },
  {
    type: "Contenido Audiovisual",
    title: "Pieza audiovisual de marca",
    desc: "Producción y edición de contenido audiovisual principalmente para redes sociales, adaptable a cualquier perfil de marca o cliente, con piezas pensadas para comunicar con impacto y reforzar la identidad visual.",
    tags: ["Vídeo", "Redes sociales", "Edición", "Marca"],
    url: "https://res.cloudinary.com/dezbnvvdc/video/upload/f_mp4,vc_h264,ac_aac,q_auto/v1779452102/copy_76E7712B-4F5F-4658-B065-4D6C492341F9_txt1sz.mp4",
    video: "https://res.cloudinary.com/dezbnvvdc/video/upload/f_mp4,vc_h264,ac_aac,q_auto/v1779452102/copy_76E7712B-4F5F-4658-B065-4D6C492341F9_txt1sz.mp4",
    featured: false,
  },
  {
    type: "Contenido Audiovisual",
    title: "Contenido para redes sociales",
    desc: "Pieza audiovisual diseñada para perfiles de marca, negocios y clientes que necesitan comunicar de forma rápida, visual y efectiva en canales sociales.",
    tags: ["Social Media", "Vídeo", "Edición", "Marca"],
    url: "https://res.cloudinary.com/dezbnvvdc/video/upload/f_mp4,vc_h264,ac_aac,q_auto/v1779514936/copy_82A932A2-C51A-4923-8D5C-ECF433432422_ivgdsn.mp4",
    video: "https://res.cloudinary.com/dezbnvvdc/video/upload/f_mp4,vc_h264,ac_aac,q_auto/v1779514936/copy_82A932A2-C51A-4923-8D5C-ECF433432422_ivgdsn.mp4",
    featured: false,
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const audiovisualProjects = projects.filter((project) => !project.featured);

const rebrands = [
  "Estrategia de marca",
  "Identidad visual",
  "Sistema gráfico",
  "Aplicaciones digitales",
  "Rediseño web",
  "Dirección de arte",
];

const heroVideoUrl = "https://res.cloudinary.com/dezbnvvdc/video/upload/v1779515951/download_1_yrazie.mp4";

function ProjectCard({ project }) {
  const ctaLabel = project.video
    ? "Reproducir vídeo"
    : project.type === "Identidad Visual"
      ? "Ver dossier"
      : project.type === "App + IA"
        ? "Ver app"
        : "Ver proyecto";

  return (
    <article className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10">
      {project.video && (
        <video
          key={project.video}
          src={project.video}
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full bg-black object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-14 flex min-h-10 items-start justify-between sm:mb-16">
          <span className="rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white">{project.type}</span>
          <a href={project.url || "#work"} target="_blank" rel="noopener noreferrer" aria-label={`${ctaLabel}: ${project.title}`} className="rounded-full p-1 transition hover:bg-black/5">
            <ArrowUpRight className="text-black/30 transition group-hover:text-black" />
          </a>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">{project.desc}</p>
        </div>
        <div className="mt-8 flex min-h-[76px] flex-wrap content-start gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/55">{tag}</span>
          ))}
        </div>
        <a href={project.url || "#work"} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-black/70 transition hover:text-black hover:underline hover:underline-offset-8">
          {ctaLabel}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

function validateProjectData() {
  console.assert(projects.length >= 4, "Debe haber al menos cuatro trabajos visibles.");
  console.assert(featuredProjects.length === 3, "La primera fila debe tener Landing Page, App + IA e Identidad Visual.");
  console.assert(audiovisualProjects.length >= 2, "Debe haber al menos dos piezas audiovisuales debajo.");
  console.assert(projects.every((project) => project.title && project.desc && project.url), "Cada proyecto debe tener título, descripción y URL.");
}

validateProjectData();

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBriefSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nombre = formData.get("nombre") || "";
    const email = formData.get("email") || "";
    const marca = formData.get("marca") || "";
    const necesidad = formData.get("necesidad") || "";
    const presupuesto = formData.get("presupuesto") || "";
    const mensaje = formData.get("mensaje") || "";

    const subject = encodeURIComponent(`Nuevo brief web/app - ${marca || nombre || "EMEGE"}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}
Email: ${email}
Marca o empresa: ${marca}
Necesidad: ${necesidad}
Presupuesto aproximado: ${presupuesto}

Proyecto:
${mensaje}`
    );

    window.location.href = `mailto:jmmaldo@icloud.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#111111] selection:bg-lime-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-lime-300/20 blur-3xl" />
        <div className="absolute bottom-[-16rem] right-[-12rem] h-[36rem] w-[36rem] rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-semibold tracking-tight text-white">EM</div>
            <span className="text-sm font-semibold tracking-[0.28em]">EMEGE</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-black/70 md:flex">
            <a href="#work" className="transition hover:text-black">Trabajos</a>
            <a href="#rebranding" className="transition hover:text-black">Rebranding</a>
            <a href="#method" className="transition hover:text-black">Método</a>
            <a href="#brief" className="transition hover:text-black">Brief</a>
          </nav>

          <a href="#contact" className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-lime-400 hover:text-black md:inline-flex">
            Contactar
          </a>

          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Abrir menú">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 bg-[#f5f3ee] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <a onClick={() => setMenuOpen(false)} href="#work">Trabajos</a>
              <a onClick={() => setMenuOpen(false)} href="#rebranding">Rebranding</a>
              <a onClick={() => setMenuOpen(false)} href="#method">Método</a>
              <a onClick={() => setMenuOpen(false)} href="#brief">Brief</a>
              <a onClick={() => setMenuOpen(false)} href="#contact" className="rounded-full bg-black px-5 py-3 text-center text-white">Contactar</a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:pb-20 sm:pt-32 md:px-8 md:pt-28">
          <video
            src={heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55 sm:opacity-60"
          />
          <div className="absolute inset-0 -z-10 bg-[#f5f3ee]/55" />
          <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 sm:gap-12 md:min-h-[calc(100vh-8rem)] md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs text-black/70 shadow-sm backdrop-blur sm:mb-8 sm:text-sm">
                <Sparkles size={16} />
                Webs, apps e identidades creadas con inteligencia artificial
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-black sm:text-6xl md:text-8xl md:leading-[0.9] lg:text-9xl">
                Webs, apps y contenido digital con IA.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/70 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
                Diseño, identidad visual y contenido audiovisual en un solo flujo de trabajo digital.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                <a href="#work" className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-lime-400 hover:text-black">
                  Ver casos de estudio
                  <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                </a>
                <a href="#brief" className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-sm font-medium text-black transition hover:border-black hover:bg-white/60">
                  Completar cuestionario
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="rounded-[2rem] border border-black/10 bg-black p-3 shadow-2xl shadow-black/20 sm:p-4">
                <div className="rounded-[1.4rem] bg-[#171717] p-5 text-white">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-300" />
                      <span className="h-3 w-3 rounded-full bg-lime-300" />
                    </div>
                    <span className="text-xs text-white/40">EMEGE / LAB</span>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white p-5 text-black">
                      <p className="text-xs uppercase tracking-[0.24em] text-black/40">Caso destacado</p>
                      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">IA aplicada a marca, producto y conversión.</h3>
                      <div className="mt-8 h-2 rounded-full bg-black/10">
                        <div className="h-2 w-4/5 rounded-full bg-lime-300" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <MonitorSmartphone size={22} />
                        <p className="mt-8 text-3xl font-semibold">Webs</p>
                        <p className="text-sm text-white/50">Apps + IA</p>
                      </div>
                      <div className="rounded-2xl border border-lime-300/30 bg-lime-300 p-4 text-black">
                        <Palette size={22} />
                        <p className="mt-8 text-3xl font-semibold">Brand</p>
                        <p className="text-sm text-black/60">Contenido</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 md:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-black/45">Casos de estudio</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.055em] sm:text-4xl md:text-6xl">Proyectos digitales con intención, estética y velocidad.</h2>
            </div>
            <p className="max-w-sm text-black/60">Cada proyecto combina estrategia, diseño visual, experiencia de usuario y tecnología IA para lanzar antes y mejorar después.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {audiovisualProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="rebranding" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 md:px-8">
          <div className="grid gap-10 rounded-[2.5rem] bg-black p-6 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10 lg:p-14">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-lime-300">Rebranding</p>
              <h2 className="text-3xl font-semibold tracking-[-0.055em] sm:text-4xl md:text-6xl">Marcas más claras, memorables y preparadas para crecer.</h2>
              <p className="mt-6 max-w-lg leading-8 text-white/60">Rediseñamos identidades para que funcionen en entornos digitales: web, social, presentaciones, producto, campañas y contenidos.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {rebrands.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="text-lime-300" size={20} />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 md:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-black/45">Método EMEGE</p>
            <h2 className="text-3xl font-semibold tracking-[-0.055em] sm:text-4xl md:text-6xl">Del brief a un producto visualmente sólido.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {["Diagnóstico", "Dirección creativa", "Diseño + IA", "Lanzamiento"].map((step, index) => (
              <div key={step} className="rounded-[1.75rem] border border-black/10 bg-white/45 p-6">
                <span className="text-sm text-black/35">0{index + 1}</span>
                <Layers className="mt-10" size={24} />
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">Proceso ágil, decisiones claras y entregables preparados para crecer con la marca.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="brief" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 md:px-8">
          <div className="grid gap-8 rounded-[2.5rem] border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur md:grid-cols-[0.85fr_1.15fr] md:p-10 lg:p-14">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-black/45">Cuestionario</p>
              <h2 className="text-3xl font-semibold tracking-[-0.055em] sm:text-4xl md:text-5xl">Cuéntanos qué quieres construir.</h2>
              <p className="mt-5 leading-8 text-black/60">Este formulario permite cualificar proyectos de web, app o rebranding y entender objetivos, alcance, presupuesto y plazos.</p>
            </div>

            <form className="grid gap-4" onSubmit={handleBriefSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <input name="nombre" className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-black" placeholder="Nombre" required />
                <input name="email" type="email" className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-black" placeholder="Email" required />
              </div>
              <input name="marca" className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-black" placeholder="Marca o empresa" />
              <select name="necesidad" className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-black/60 outline-none transition focus:border-black" defaultValue="">
                <option value="" disabled>¿Qué necesitas?</option>
                <option>Web corporativa</option>
                <option>Landing page</option>
                <option>Aplicación web</option>
                <option>Rebranding</option>
                <option>Web + identidad visual</option>
              </select>
              <select name="presupuesto" className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-black/60 outline-none transition focus:border-black" defaultValue="">
                <option value="" disabled>Presupuesto aproximado</option>
                <option>Menos de 1.000 €</option>
                <option>1.000 € - 3.000 €</option>
                <option>3.000 € - 6.000 €</option>
                <option>Más de 6.000 €</option>
              </select>
              <textarea name="mensaje" className="min-h-36 rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-black" placeholder="Describe el proyecto, objetivos, referencias y plazo ideal" required />
              <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-lime-400 hover:text-black">
                Enviar brief
                <Send size={17} className="transition group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:pb-24 sm:pt-10 md:px-8">
          <div className="rounded-[2.5rem] bg-lime-300 p-8 text-black md:p-14">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-black/50">Contacto</p>
                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.065em] sm:text-5xl md:text-7xl">Construyamos algo que parezca del futuro.</h2>
              </div>
              <div className="flex w-full flex-col gap-3 md:w-auto md:items-end">
                <a href="mailto:jmmaldo@icloud.com" className="whitespace-nowrap text-[clamp(1rem,5vw,1.25rem)] font-semibold underline decoration-black/20 underline-offset-8 transition hover:decoration-black">jmmaldo@icloud.com</a>
                <p className="whitespace-nowrap text-[clamp(0.9rem,4vw,1rem)] text-black/60">Webs · Apps · IA · Rebranding</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
