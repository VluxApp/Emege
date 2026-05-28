import React, { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles, Layers, Send, CheckCircle2, Menu, X, LockKeyhole } from "lucide-react";

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

const methodSteps = [
  {
    title: "Diagnóstico",
    desc: "Analizamos la marca, el objetivo del proyecto, el público y las referencias para definir una dirección clara desde el inicio.",
  },
  {
    title: "Dirección creativa",
    desc: "Construimos el enfoque visual, el tono, la estructura y la experiencia que mejor conectan con la identidad del proyecto.",
  },
  {
    title: "Diseño + IA",
    desc: "Desarrollamos la web, app, identidad o contenido combinando criterio visual, herramientas IA y ejecución digital ágil.",
  },
  {
    title: "Lanzamiento",
    desc: "Preparamos la entrega final, revisamos detalles técnicos y dejamos el proyecto listo para publicarse, compartirse o escalar.",
  },
];

const heroVideoUrl = "https://res.cloudinary.com/dezbnvvdc/video/upload/v1779515951/download_1_yrazie.mp4";

function EmegeLogo({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2751 344"
      role="img"
      aria-label="EMEGE"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2372 273L2372 331L2748 331L2748 273ZM1199 273L1199 331L1587 331L1587 273ZM2 274L2 331L376 331L376 273L375 274L372 274L371 273L5 273L4 274ZM1991 143L1991 200L2134 200L2135 201L2135 340L2202 340L2202 143ZM2 143L2 200L376 200L376 143ZM1199 142L1199 200L1587 200L1587 142ZM2372 141L2372 198L2748 198L2748 141ZM516 13L516 331L584 331L585 106L587 106L682 202L773 298L959 107L961 107L962 331L1030 331L1030 13L959 13L864 109L774 205L772 205L656 82L587 13ZM2 13L2 70L376 70L376 13ZM1199 12L1199 69L1587 69L1587 12ZM2372 10L2372 67L2748 67L2748 10ZM1774 71L1760 91L1751 109L1746 124L1741 149L1741 188L1746 216L1758 247L1773 270L1794 292L1816 308L1833 317L1864 329L1888 335L1941 341L2066 340L2066 281L1952 282L1916 279L1892 274L1875 268L1858 259L1844 249L1824 227L1815 210L1810 194L1808 179L1808 163L1811 144L1816 129L1827 110L1839 97L1850 88L1861 81L1879 73L1909 65L1951 61L2024 61L2025 62L2079 62L2080 63L2202 66L2202 8L2096 5L2095 4L2011 3L2010 2L1948 2L1901 6L1865 14L1845 21L1820 33L1794 51Z"
      />
    </svg>
  );
}

function ProjectCard({ project, index = 0 }) {
  const ctaLabel = project.video
    ? "Reproducir vídeo"
    : project.type === "Identidad Visual"
      ? "Ver dossier"
      : project.type === "App + IA"
        ? "Ver app"
        : "Ver proyecto";

  return (
    <article className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#1B1B1E]/82 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#F56E0F]/35 hover:bg-[#262626] hover:shadow-xl hover:shadow-black/30">
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
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#F56E0F]/35 bg-[#F56E0F]/10 px-3 py-1.5 text-xs font-medium text-[#F56E0F]">
              0{index + 1}
            </span>
            <span className="rounded-full bg-[#F56E0F] px-3 py-1.5 text-xs font-medium text-[#151419]">
              {project.type}
            </span>
          </div>

          <a
            href={project.url || "#work"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${ctaLabel}: ${project.title}`}
            className="rounded-full p-1 transition hover:bg-[#F56E0F]/10"
          >
            <ArrowUpRight className="text-[#878787] transition group-hover:text-[#F56E0F]" />
          </a>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#FBFBFB] sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#878787] sm:text-base">
            {project.desc}
          </p>
        </div>

        <div className="mt-8 flex min-h-[76px] flex-wrap content-start gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#878787]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.url || "#work"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-[#F56E0F] transition hover:text-[#FBFBFB] hover:underline hover:underline-offset-8"
        >
          {ctaLabel}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

function validateProjectData() {
  console.assert(projects.length === 5, "Debe haber cinco trabajos visibles.");
  console.assert(featuredProjects.length === 3, "La primera fila debe tener Landing Page, App + IA e Identidad Visual.");
  console.assert(audiovisualProjects.length === 2, "Debe haber dos piezas audiovisuales debajo.");
  console.assert(methodSteps.length === 4, "El método EMEGE debe tener cuatro pasos.");
  console.assert(new Set(methodSteps.map((step) => step.desc)).size === 4, "Cada paso del método debe tener una descripción distinta.");
  console.assert(projects.every((project) => project.title && project.desc && project.url), "Cada proyecto debe tener título, descripción y URL.");
}

validateProjectData();

export default function EmegeLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const encodeFormData = (data) => new URLSearchParams(data).toString();

  const handleBriefSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "brief-emege",
          ...Object.fromEntries(formData),
        }),
      });

      setFormStatus("success");
      form.reset();
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#151419] text-[#FBFBFB] selection:bg-[#F56E0F] selection:text-[#151419]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#FBFBFB_1px,transparent_1px),linear-gradient(to_bottom,#FBFBFB_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#F56E0F]/20 blur-3xl" />
        <div className="absolute bottom-[-16rem] right-[-12rem] h-[36rem] w-[36rem] rounded-full bg-[#878787]/10 blur-3xl" />
      </div>

      <div className="pointer-events-none fixed right-0 top-0 z-40 h-screen w-[3px] bg-white/5">
        <div
          className="w-full rounded-b-full bg-[#F56E0F] shadow-[0_0_24px_rgba(245,110,15,0.65)] transition-[height] duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#151419]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="group flex items-center gap-3 text-[#FBFBFB]" aria-label="EMEGE - Inicio">
            <EmegeLogo className="h-5 w-auto text-[#FBFBFB] sm:h-6" />
            <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#878787] transition group-hover:border-[#F56E0F]/40 group-hover:text-[#FBFBFB] sm:inline-flex">
              IA Solutions
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#FBFBFB]/65 md:flex">
            <a href="#work" className="transition hover:text-[#FBFBFB]">Trabajos</a>
            <a href="#rebranding" className="transition hover:text-[#FBFBFB]">Rebranding</a>
            <a href="#method" className="transition hover:text-[#FBFBFB]">Método</a>
            <a href="#brief" className="transition hover:text-[#FBFBFB]">Brief</a>
            <a href="/briefing.html" className="transition hover:text-[#FBFBFB]">Área cliente</a>
          </nav>

          <a href="#contact" className="hidden rounded-full bg-[#F56E0F] px-5 py-2.5 text-sm font-medium text-[#151419] transition hover:scale-[1.02] hover:bg-[#FBFBFB] md:inline-flex">
            Contactar
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FBFBFB] md:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#151419] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-[#FBFBFB]/75">
              <a onClick={() => setMenuOpen(false)} href="#work">Trabajos</a>
              <a onClick={() => setMenuOpen(false)} href="#rebranding">Rebranding</a>
              <a onClick={() => setMenuOpen(false)} href="#method">Método</a>
              <a onClick={() => setMenuOpen(false)} href="#brief">Brief</a>
              <a onClick={() => setMenuOpen(false)} href="/briefing.html">Área cliente</a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#contact"
                className="rounded-full bg-[#F56E0F] px-5 py-3 text-center font-medium text-[#151419]"
              >
                Contactar
              </a>
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
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40 sm:opacity-50"
          />
          <div className="absolute inset-0 -z-10 bg-[#151419]/76" />

          <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center gap-10 text-center sm:gap-12 md:min-h-[calc(100vh-8rem)]">
            <div className="flex w-full max-w-6xl flex-col items-center">
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-[#1B1B1E]/75 px-4 py-2 text-xs text-[#878787] shadow-sm backdrop-blur sm:mb-8 sm:text-sm">
                <Sparkles size={16} />
                IA aplicada a diseño, marca y producto digital
              </div>

              <EmegeLogo className="w-full max-w-[980px] text-[#FBFBFB]" />

              <p className="mt-8 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.04em] text-[#FBFBFB]/78 sm:text-3xl md:text-4xl">
                Webs, apps y contenido digital con IA.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row">
                <a href="#work" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F56E0F] px-7 py-4 text-sm font-medium text-[#151419] transition hover:bg-[#FBFBFB]">
                  Ver casos de estudio
                  <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                </a>

                <a href="/briefing.html" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#1B1B1E]/60 px-7 py-4 text-sm font-medium text-[#FBFBFB] backdrop-blur transition hover:border-[#F56E0F]/70 hover:bg-[#262626]">
                  <LockKeyhole size={17} />
                  Área cliente
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 md:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-[#878787]">Casos de estudio</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.055em] text-[#FBFBFB] sm:text-4xl md:text-6xl">
                Proyectos digitales con intención, estética y velocidad.
              </h2>
            </div>
            <p className="max-w-sm text-[#878787]">
              Cada proyecto combina estrategia, diseño visual, experiencia de usuario y tecnología IA para lanzar antes y mejorar después.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {audiovisualProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={featuredProjects.length + index} />
            ))}
          </div>
        </section>

        <section id="rebranding" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 md:px-8">
          <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-[#0f0f12] p-6 text-[#FBFBFB] md:grid-cols-[0.9fr_1.1fr] md:p-10 lg:p-14">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#F56E0F]">Rebranding</p>
              <h2 className="text-3xl font-semibold tracking-[-0.055em] text-[#FBFBFB] sm:text-4xl md:text-6xl">
                Marcas más claras, memorables y preparadas para crecer.
              </h2>
              <p className="mt-6 max-w-lg leading-8 text-[#878787]">
                Rediseñamos identidades para que funcionen en entornos digitales: web, social, presentaciones, producto, campañas y contenidos.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {rebrands.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1B1B1E] p-4">
                  <CheckCircle2 className="text-[#F56E0F]" size={20} />
                  <span className="text-sm text-[#FBFBFB]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 md:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-[#878787]">Método EMEGE</p>
            <h2 className="text-3xl font-semibold tracking-[-0.055em] text-[#FBFBFB] sm:text-4xl md:text-6xl">
              Del brief a un producto visualmente sólido.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {methodSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.75rem] border border-white/10 bg-[#1B1B1E]/82 p-6">
                <span className="text-sm text-[#878787]">0{index + 1}</span>
                <Layers className="mt-10 text-[#FBFBFB]" size={24} />
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-[#FBFBFB]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#878787]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="brief" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 md:px-8">
          <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-[#1B1B1E]/88 p-6 shadow-xl shadow-black/5 backdrop-blur md:grid-cols-[0.85fr_1.15fr] md:p-10 lg:p-14">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-[#878787]">Cuestionario</p>
              <h2 className="text-3xl font-semibold tracking-[-0.055em] text-[#FBFBFB] sm:text-4xl md:text-5xl">
                Cuéntanos qué quieres construir.
              </h2>
              <p className="mt-5 leading-8 text-[#878787]">
                Este formulario permite cualificar proyectos de web, app o rebranding y entender objetivos, alcance, presupuesto y plazos.
              </p>
            </div>

            <form
              name="brief-emege"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="grid gap-4"
              onSubmit={handleBriefSubmit}
            >
              <input type="hidden" name="form-name" value="brief-emege" />
              <p className="hidden">
                <label>
                  No rellenar: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <input name="nombre" className="rounded-2xl border border-white/10 bg-[#151419] px-5 py-4 text-[#FBFBFB] placeholder:text-[#878787] outline-none transition focus:border-[#F56E0F]" placeholder="Nombre" required />
                <input name="email" type="email" className="rounded-2xl border border-white/10 bg-[#151419] px-5 py-4 text-[#FBFBFB] placeholder:text-[#878787] outline-none transition focus:border-[#F56E0F]" placeholder="Email" required />
              </div>
              <input name="marca" className="rounded-2xl border border-white/10 bg-[#151419] px-5 py-4 text-[#FBFBFB] placeholder:text-[#878787] outline-none transition focus:border-[#F56E0F]" placeholder="Marca o empresa" />
              <select name="necesidad" className="rounded-2xl border border-white/10 bg-[#151419] px-5 py-4 text-[#878787] outline-none transition focus:border-[#F56E0F]" defaultValue="">
                <option value="" disabled>¿Qué necesitas?</option>
                <option>Web corporativa</option>
                <option>Landing page</option>
                <option>Aplicación web</option>
                <option>Rebranding</option>
                <option>Web + identidad visual</option>
              </select>
              <select name="presupuesto" className="rounded-2xl border border-white/10 bg-[#151419] px-5 py-4 text-[#878787] outline-none transition focus:border-[#F56E0F]" defaultValue="">
                <option value="" disabled>Presupuesto aproximado</option>
                <option>Menos de 1.000 €</option>
                <option>1.000 € - 3.000 €</option>
                <option>3.000 € - 6.000 €</option>
                <option>Más de 6.000 €</option>
              </select>
              <textarea name="mensaje" className="min-h-36 rounded-2xl border border-white/10 bg-[#151419] px-5 py-4 text-[#FBFBFB] placeholder:text-[#878787] outline-none transition focus:border-[#F56E0F]" placeholder="Describe el proyecto, objetivos, referencias y plazo ideal" required />
              <button type="submit" disabled={formStatus === "sending"} className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F56E0F] px-7 py-4 text-sm font-medium text-[#151419] transition hover:bg-[#FBFBFB] disabled:cursor-not-allowed disabled:opacity-60">
                {formStatus === "sending" ? "Enviando..." : "Enviar brief"}
                <Send size={17} className="transition group-hover:translate-x-0.5" />
              </button>
              {formStatus === "success" && (
                <p className="rounded-2xl bg-[#F56E0F]/15 px-5 py-4 text-sm font-medium text-[#FBFBFB]">
                  Brief enviado correctamente. Te responderemos lo antes posible.
                </p>
              )}
              {formStatus === "error" && (
                <p className="rounded-2xl bg-red-500/15 px-5 py-4 text-sm font-medium text-red-200">
                  No se ha podido enviar. Inténtalo de nuevo o escribe a infoemege@proton.me.
                </p>
              )}
            </form>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:pb-24 sm:pt-10 md:px-8">
          <div className="rounded-[2.5rem] border border-[#F56E0F]/25 bg-[#1B1B1E] p-8 text-[#FBFBFB] shadow-2xl shadow-black/25 md:p-14">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#F56E0F]">Contacto</p>
                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.065em] text-[#FBFBFB] sm:text-5xl md:text-7xl">
                  Construyamos algo que parezca del futuro.
                </h2>
              </div>
              <div className="flex w-full flex-col gap-3 md:w-auto md:items-end">
                <a href="mailto:infoemege@proton.me" className="whitespace-nowrap rounded-full border border-[#F56E0F]/30 px-5 py-3 text-[clamp(1rem,5vw,1.25rem)] font-semibold text-[#F56E0F] transition hover:border-[#F56E0F] hover:bg-[#F56E0F] hover:text-[#151419]">
                  infoemege@proton.me
                </a>
                <a href="https://www.instagram.com/emegeia" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full border border-white/10 px-5 py-3 text-[clamp(1rem,5vw,1.25rem)] font-semibold text-[#FBFBFB] transition hover:border-[#F56E0F]/60 hover:text-[#F56E0F]">
                  @emegeia
                </a>
                <p className="whitespace-nowrap text-[clamp(0.9rem,4vw,1rem)] text-[#878787]">
                  Webs · Apps · IA · Rebranding
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-8 text-xs uppercase tracking-[0.22em] text-[#878787] sm:flex-row sm:items-center sm:justify-between md:px-8">
          <span>© EMEGE IA Solutions — 2026</span>
          <span>Diseño digital · IA · Identidad visual</span>
        </footer>
      </main>
    </div>
  );
}
