import React, { useEffect, useRef } from "react";

const TECH_STACK = {
  frontEnd: [
    "HTML5",
    "CSS3 / SASS",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backEnd: ["Node.js", "Express", "REST APIs", "MongoDB / PostgreSQL"],
  tools: ["Git & GitHub", "Figma", "Vite / CRA", "Jest / Testing Library"],
};

const PROJECTS = [
  {
    badge: "Dashboard web",
    title: "Painel de indicadores para empresa X",
    description:
      "Dashboard interativo para acompanhamento de métricas em tempo real, com filtros avançados e gráficos responsivos.",
    techs: ["React", "TypeScript", "Chart.js"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    badge: "Landing page",
    title: "Landing page para produto SaaS",
    description:
      "Página de venda otimizada para conversão, com animações suaves, layout responsivo e SEO básico.",
    techs: ["Next.js", "Tailwind", "SEO"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    badge: "Aplicação fullstack",
    title: "Aplicação de tarefas colaborativa",
    description:
      "App web para times organizarem tarefas, com autenticação, permissões e atualização quase em tempo real.",
    techs: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

// Hook para animação de entrada (scroll)
function useRevealOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const elements = ref.current?.querySelectorAll(".js-reveal");
    if (!elements || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-700/60 bg-slate-950/80 backdrop-blur-xl">
     <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-2.5">
          {/* TROCAR “D” PELA SUA INICIAL */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-slate-900 text-sm font-bold text-slate-100 shadow-[0_0_0_1px_rgba(129,140,248,0.7),0_14px_35px_rgba(15,23,42,0.9)]">
            R
          </div>
          <div className="flex flex-col leading-tight">
            {/* TROCAR PELO SEU NOME */}
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
             Ramsés Henrique 
            </span>
            <span className="text-[0.7rem] text-slate-400">
              Desenvolvedor Web
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-5 text-xs text-slate-300 md:flex">
          <a
            href="#sobre"
            className="relative pb-0.5 text-slate-400 transition hover:text-slate-100"
          >
            Sobre
            <span className="absolute left-0 top-full h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all group-hover:w-full" />
          </a>
          <a
            href="#skills"
            className="relative pb-0.5 text-slate-400 transition hover:text-slate-100"
          >
            Skills
          </a>
          <a
            href="#projetos"
            className="relative pb-0.5 text-slate-400 transition hover:text-slate-100"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="relative pb-0.5 text-slate-400 transition hover:text-slate-100"
          >
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/80 bg-gradient-to-r from-indigo-500 to-indigo-600 px-3 py-1 text-xs font-medium text-slate-50 shadow-[0_12px_30px_rgba(79,70,229,0.7)] transition hover:from-indigo-400 hover:to-indigo-500"
        >
          <span className="text-[0.8rem]">●</span>
          Disponível para vagas
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid gap-10 py-10 md:grid-cols-[1.4fr_minmax(0,1fr)] md:py-14">
      {/* Coluna esquerda */}
      <div className="js-reveal opacity-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/50 bg-gradient-to-r from-indigo-500/20 via-slate-900 to-slate-900 px-2 py-1 text-[0.7rem] text-slate-300 shadow-soft">
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)]" />
          </span>
          Em busca de oportunidades na área de desenvolvimento web e Segurança da informação
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-[2.3rem]">
          Desenvolvedor Web focado em{"back-end"}
          <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
            interfaces modernas
          </span>{" "}
          , soluções de impacto e segurança.
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-[0.95rem]">
          Ajudo empresas a transformarem ideias em{" "}
          <span className="font-medium text-slate-100">
            produtos digitais funcionais, performáticos e visualmente
            atraentes
          </span>
          , com foco em experiência do usuário e código bem estruturado.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* TROCAR LINK DO CURRÍCULO */}
          <a
            href="SEU_LINK_CV_AQUI"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-400/80 bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2 text-xs font-medium text-slate-50 shadow-[0_18px_40px_rgba(55,48,163,0.9)] transition hover:from-indigo-400 hover:to-indigo-500"
          >
            Baixar CV <span className="text-sm">⬇</span>
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.9)] transition hover:border-slate-400 hover:bg-slate-900"
          >
            Ver projetos em destaque <span className="text-sm">↗</span>
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-7 text-[0.75rem] text-slate-400">
          <div className="flex flex-col gap-1">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
              Stack principal
            </span>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {["JavaScript", "TypeScript", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-600 bg-slate-950/80 px-2 py-0.5 text-[0.7rem] text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
              Disponibilidade
            </span>
            <span className="text-[0.8rem] text-slate-200">
              CLT · PJ · Remoto / Híbrido
            </span>
          </div>
        </div>
      </div>

      {/* Card lateral */}
      <div className="relative js-reveal opacity-0">
        <div className="pointer-events-none absolute -inset-[1px] rounded-xl2 bg-[conic-gradient(from_140deg,rgba(99,102,241,0)_0,rgba(99,102,241,0.9),rgba(236,72,153,0.9),rgba(34,197,94,0.9),rgba(99,102,241,0)_100%)] opacity-80 blur-lg" />
        <article className="relative rounded-xl2 border border-slate-600/80 bg-gradient-to-br from-indigo-500/15 via-slate-900 to-slate-950 p-4 shadow-soft animate-floatCard">
          <header className="mb-4 flex items-center justify-between">
            {/* TROCAR PELA SUA INICIAL */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-400/80 bg-gradient-to-br from-slate-100 to-slate-600 text-xl font-bold text-slate-950 shadow-[0_12px_35px_rgba(15,23,42,0.9)]">
              D
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 bg-emerald-900/80 px-2.5 py-1 text-[0.7rem] text-emerald-100 shadow-[0_10px_30px_rgba(16,185,129,0.7)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)]" />
              Aberto a propostas
            </div>
          </header>

          <div className="mb-3 rounded-xl border border-slate-600 bg-slate-950/80 p-3">
            {/* TROCAR PELO SEU NOME */}
            <div className="text-sm font-medium text-slate-100">
              Ramsés Henrique Neri Gomes Lima 
            </div>
            <div className="mb-2 text-[0.75rem] text-slate-400">
              Desenvolvedor Web · Front-end / Fullstack
            </div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {["React", "Next.js", "Node.js", "REST APIs"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-600 bg-slate-950 px-2 py-0.5 text-[0.7rem] text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Gráfico fake */}
            <div className="relative h-16 overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-t from-indigo-500/25 via-slate-950 to-slate-950">
              <svg
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                className="h-full w-full opacity-90"
              >
                <defs>
                  <linearGradient
                    id="graphLine"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,45 20,40 40,35 60,38 80,30 100,28 120,20 140,24 160,18 180,15 200,10"
                  fill="none"
                  stroke="url(#graphLine)"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="pointer-events-none absolute inset-y-4 -left-20 w-40 animate-[graphMove_8s_ease-in-out_infinite_alternate] bg-[radial-gradient(circle_at_0_50%,rgba(129,140,248,0.7),transparent_70%)] opacity-60" />
            </div>
          </div>

          <footer className="flex items-center justify-between gap-3 text-[0.72rem]">
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">
                Últimos projetos
              </span>
              <span className="text-[0.8rem] text-slate-100">
                Dashboards, landing pages e aplicações SPA
              </span>
            </div>
            <div className="flex gap-1.5">
              {/* TROCAR PELOS SEUS LINKS */}
              <a
                href="https://github.com/RamsesH1s"
                target="_blank"
                rel="noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500 bg-slate-950 text-[0.8rem] text-slate-100 transition hover:border-indigo-400 hover:text-indigo-300"
                title="GitHub"
              >
                ⌂
              </a>
              <a
                href="https://www.linkedin.com/in/seuusuario"
                target="_blank"
                rel="noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500 bg-slate-950 text-[0.8rem] text-slate-100 transition hover:border-indigo-400 hover:text-indigo-300"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="mailto:ramsescyb@gmail.com"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500 bg-slate-950 text-[0.8rem] text-slate-100 transition hover:border-indigo-400 hover:text-indigo-300"
                title="E-mail"
              >
                ✉
              </a>
            </div>
          </footer>

          <p className="mt-3 flex items-center gap-2 text-[0.7rem] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
            Focado em criar experiências digitais modernas, acessíveis e de alta
            performance.
          </p>
        </article>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mt-4 space-y-5">
      <header className="js-reveal flex items-baseline justify-between gap-4 opacity-0">
        <h2 className="text-lg font-semibold text-slate-50">Sobre mim</h2>
        <p className="text-[0.8rem] text-slate-400">
          Quem sou, como penso e como posso contribuir
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-[1.6fr_minmax(0,1fr)]">
        <div className="js-reveal space-y-3 text-sm leading-relaxed text-slate-400 opacity-0">
          <p>
            Sou{" "}
            <span className="font-medium text-slate-100">
              Desenvolvedor Web
            </span>{" "}
            com foco em interfaces modernas, responsivas e centradas no usuário.
            Gosto de transformar problemas de negócio em soluções digitais
            claras, eficientes e visualmente bem resolvidas.
          </p>
          <p>
            Tenho experiência com{" "}
            <span className="font-medium text-slate-100">
              desenvolvimento front-end
            </span>{" "}
            utilizando React, TypeScript, Next.js e Tailwind, além de atuar
            também no{" "}
            <span className="font-medium text-slate-100">back-end</span> com
            Node.js e bancos de dados.
          </p>
          <p>
            Busco boas práticas como código limpo, componentização, versionamento
            com Git e integração com APIs. Meu objetivo é agregar valor ao time,
            entregando software de qualidade e evoluindo junto com a empresa.
          </p>
        </div>

        <div className="js-reveal grid gap-3 text-sm opacity-0 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-600 bg-slate-950/90 p-3.5">
            <span className="text-[0.7rem] text-slate-400">
              Tempo de experiência
            </span>
            <div className="mt-1 text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text">
              X anos
            </div>
            <p className="mt-1 text-[0.8rem] text-slate-400">
              Atuando em projetos web, freelas, estudos e contribuições.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-600 bg-slate-950/90 p-3.5">
            <span className="text-[0.7rem] text-slate-400">
              Projetos entregues
            </span>
            <div className="mt-1 text-xl font-semibold text-slate-100">+X</div>
            <p className="mt-1 text-[0.8rem] text-slate-400">
              Entre landing pages, dashboards e aplicações completas.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-600 bg-slate-950/90 p-3.5">
            <span className="text-[0.7rem] text-slate-400">Foco atual</span>
            <div className="mt-1 text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text">
              Front-end
            </div>
            <p className="mt-1 text-[0.8rem] text-slate-400">
              UX, performance e integração com APIs modernas.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-600 bg-slate-950/90 p-3.5">
            <span className="text-[0.7rem] text-slate-400">Idiomas</span>
            <div className="mt-1 text-xl font-semibold text-slate-100">
              PT · EN
            </div>
            <p className="mt-1 text-[0.8rem] text-slate-400">
              Documentação, comunicação com times e comunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// === SEÇÃO DE SKILLS – TECNOLOGIAS SEPARADAS ===
function Skills() {
  return (
    <section id="skills" className="mt-10 space-y-5">
      <header className="js-reveal flex items-baseline justify-between gap-4 opacity-0">
        <h2 className="text-lg font-semibold text-slate-50">Skills & Stack</h2>
        <p className="text-[0.8rem] text-slate-400">
          Tecnologias organizadas por área (Front-end, Back-end, Ferramentas)
        </p>
      </header>

      <div className="grid gap-7 md:grid-cols-[1.5fr_minmax(0,1.1fr)]">
        {/* Coluna esquerda – listas separadas */}
        <div className="js-reveal space-y-6 opacity-0">
          <div className="grid gap-4 text-[0.8rem] text-slate-200 sm:grid-cols-2">
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
                Front-end
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {TECH_STACK.frontEnd.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-600 bg-slate-950/90 px-2.5 py-1 text-[0.75rem]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
                Back-end
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {TECH_STACK.backEnd.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-600 bg-slate-950/90 px-2.5 py-1 text-[0.75rem]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
              Ferramentas & Outros
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5 text-[0.75rem] text-slate-200">
              {TECH_STACK.tools.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-600 bg-slate-950/90 px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-[0.8rem] text-slate-400">
            <div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
              Diferenciais
            </div>
            <ul className="mt-2 space-y-1.5">
              <li>• Código organizado, componentização e padrões de projeto.</li>
              <li>
                • Atenção a detalhes visuais, responsividade e experiência do
                usuário.
              </li>
              <li>• Facilidade para aprender tecnologias novas rapidamente.</li>
              <li>• Noção básica em segurança da informação.</li>
            </ul>
          </div>
        </div>

        {/* Coluna direita – barras de nível */}
        <div className="js-reveal space-y-3 opacity-0">
          {[
            {
              label: "Front-end (React, Next.js)",
              level: "Avançado",
              percent: 70,
            },
            {
              label: "Back-end (Node.js, APIs)",
              level: "Intermediário",
              percent: 50,
            },
            {
              label: "UI & UX (Layout, responsividade)",
              level: "Avançado",
              percent: 40,
            },
            {
              label: "Boas práticas (Git, Clean Code)",
              level: "Avançado",
              percent: 60,
            },
          ].map((item) => (
            <div key={item.label} className="space-y-1 text-[0.8rem]">
              <div className="flex items-center justify-between text-slate-200">
                <span>{item.label}</span>
                <span className="text-slate-400">{item.level}</span>
              </div>
              <div className="h-1.5 rounded-full border border-slate-700 bg-slate-950">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-emerald-400"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}

          <p className="mt-2 text-[0.7rem] text-slate-500">
            * Níveis estimados para dar contexto técnico às empresas – ajuste
            conforme sua realidade.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="mt-10 space-y-5">
      <header className="js-reveal flex items-baseline justify-between gap-4 opacity-0">
        <h2 className="text-lg font-semibold text-slate-50">
          Projetos selecionados
        </h2>
        <p className="text-[0.8rem] text-slate-400">
          Alguns trabalhos que demonstram minha forma de pensar produto
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="js-reveal group flex flex-col rounded-2xl border border-slate-600 bg-gradient-to-br from-indigo-500/10 via-slate-950 to-slate-950 p-3 shadow-soft opacity-0 transition hover:border-indigo-400/80 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)]"
          >
            <div className="mb-3 h-36 overflow-hidden rounded-xl border border-slate-600 bg-gradient-to-br from-slate-950 to-slate-900">
              <div className="flex h-full items-end bg-[radial-gradient(circle_at_0_0,rgba(129,140,248,0.2),transparent_60%),linear-gradient(to_top,rgba(15,23,42,0.95),transparent_45%)] px-3 pb-2">
                <span className="rounded-full border border-slate-500 bg-slate-950/90 px-2 py-0.5 text-[0.7rem] text-slate-100">
                  {project.badge}
                </span>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-slate-50">
              {project.title}
            </h3>
            <p className="mt-1 text-[0.8rem] text-slate-400">
              {project.description}
            </p>

            <div className="mt-3 flex items-center justify-between gap-2 text-[0.7rem]">
              <div className="flex flex-wrap gap-1">
                {project.techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-600 bg-slate-950/90 px-2 py-0.5 text-[0.7rem] text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 text-[0.7rem]">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-transparent text-indigo-300 transition hover:border-indigo-300"
                  >
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-transparent text-indigo-300 transition hover:border-indigo-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="mt-10 space-y-5">
      <header className="js-reveal flex items-baseline justify-between gap-4 opacity-0">
        <h2 className="text-lg font-semibold text-slate-50">
          Experiência & forma de trabalho
        </h2>
        <p className="text-[0.8rem] text-slate-400">
          Como atuo em equipe e entrego valor
        </p>
      </header>

      <div className="js-reveal grid gap-5 rounded-2xl border border-slate-700 bg-slate-950/95 p-4 text-[0.8rem] text-slate-200 opacity-0 md:grid-cols-[1.4fr_minmax(0,1.3fr)]">
        <div className="relative pl-4">
          <span className="absolute left-1 top-1 bottom-1 w-px bg-gradient-to-b from-indigo-500 via-pink-500 to-slate-500/60" />
          <div className="space-y-4">
            <div className="relative pl-3">
              <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_0_4px_rgba(129,140,248,0.35)]" />
              <div className="text-[0.85rem] font-medium text-slate-100">
                Desenvolvedor Web
              </div>
              <div className="text-[0.75rem] text-slate-400">
                Freelancer · Projetos diversos
              </div>
              <div className="mt-1 text-[0.7rem] text-slate-500">
                20XX — atual
              </div>
              <p className="mt-1 text-[0.78rem] text-slate-400">
                Desenvolvimento de landing pages, sistemas internos, integrações
                com APIs e refino de interfaces já existentes.
              </p>
            </div>

            <div className="relative pl-3">
              <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_0_4px_rgba(129,140,248,0.35)]" />
              <div className="text-[0.85rem] font-medium text-slate-100">
                Estudos focados em Front-end
              </div>
              <div className="text-[0.75rem] text-slate-400">
                Cursos, bootcamps e projetos pessoais
              </div>
              <div className="mt-1 text-[0.7rem] text-slate-500">
                Linha contínua
              </div>
              <p className="mt-1 text-[0.78rem] text-slate-400">
                Foco em React, Next.js, padrões de projeto, responsividade,
                acessibilidade e performance.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-950/90 p-3 text-[0.8rem] text-slate-300">
          <span className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
            Como posso contribuir
          </span>
          <p className="mt-2 leading-relaxed">
            <span className="font-semibold text-slate-100">
              • Construção e manutenção de interfaces modernas e responsivas.
            </span>
            <br />
            • Integração com APIs e colaboração com times de produto, design e
            back-end.
            <br />
            • Evolução contínua do código, refatorações e melhoria de UX.
            <br />
            • Compromisso com prazos, comunicação clara e foco em resultado.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="mt-10 space-y-5">
      <header className="js-reveal flex items-baseline justify-between gap-4 opacity-0">
        <h2 className="text-lg font-semibold text-slate-50">Contato</h2>
        <p className="text-[0.8rem] text-slate-400">
          Vamos conversar sobre como posso ajudar sua equipe
        </p>
      </header>

      <div className="grid gap-7 md:grid-cols-[1.3fr_minmax(0,1.1fr)]">
        <div className="js-reveal space-y-3 text-[0.85rem] leading-relaxed text-slate-400 opacity-0">
          <p>
            Se você está em busca de alguém para fortalecer o time de tecnologia
            com foco em front-end e experiência do usuário, vou ficar feliz em
            conversar.
          </p>
          <p>
            Estou aberto a posições{" "}
            <span className="font-medium text-slate-100">
              Júnior / Pleno
            </span>
            , CLT ou PJ, em modelo{" "}
            <span className="font-medium text-slate-100">
              remoto ou híbrido
            </span>
            .
          </p>
          <div className="mt-3 rounded-2xl border border-dashed border-slate-600 bg-slate-950/90 p-3 text-[0.8rem]">
            <p>
              <span className="font-semibold text-slate-100">E-mail:</span>{" "}
              seuemail@exemplo.com
            </p>
            <p>
              <span className="font-semibold text-slate-100">
                LinkedIn:
              </span>{" "}
              linkedin.com/in/seuusuario
            </p>
            <p>
              <span className="font-semibold text-slate-100">GitHub:</span>{" "}
              github.com/seuusuario
            </p>
          </div>
        </div>

        <form
          className="js-reveal space-y-3 rounded-2xl border border-slate-600 bg-gradient-to-br from-indigo-500/15 via-slate-950 to-slate-950 p-4 text-[0.8rem] opacity-0 shadow-soft"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Formulário de demonstração. Substitua por seu backend ou serviço de e-mail (Formspree, Getform, etc.)."
            );
          }}
        >
          <div>
            <label className="mb-1 block text-[0.75rem] text-slate-400">
              Nome
            </label>
            <input
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-[0.8rem] text-slate-100 outline-none transition focus:border-indigo-400 focus:shadow-[0_0_0_1px_rgba(79,70,229,0.9),0_0_20px_rgba(55,48,163,0.7)]"
              placeholder="Nome da pessoa ou empresa"
            />
          </div>
          <div>
            <label className="mb-1 block text-[0.75rem] text-slate-400">
              E-mail
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-[0.8rem] text-slate-100 outline-none transition focus:border-indigo-400 focus:shadow-[0_0_0_1px_rgba(79,70,229,0.9),0_0_20px_rgba(55,48,163,0.7)]"
              placeholder="contato@empresa.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-[0.75rem] text-slate-400">
              Mensagem
            </label>
            <textarea
              className="min-h-[110px] w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-[0.8rem] text-slate-100 outline-none transition focus:border-indigo-400 focus:shadow-[0_0_0_1px_rgba(79,70,229,0.9),0_0_20px_rgba(55,48,163,0.7)]"
              placeholder="Conte um pouco sobre o projeto, vaga ou ideia."
            />
          </div>
          <button
            type="submit"
            className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-400/80 bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2 text-xs font-medium text-slate-50 shadow-[0_18px_40px_rgba(55,48,163,0.9)] transition hover:from-indigo-400 hover:to-indigo-500"
          >
            Enviar mensagem <span className="text-sm">➤</span>
          </button>
          <p className="text-[0.7rem] text-slate-500">
            * Integre com seu backend ou serviço de formulário favorito para
            receber os contatos.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-slate-800 pt-4 text-[0.75rem] text-slate-500">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-6">
        <span>© {year} Seu Nome — Portfólio de Desenvolvedor Web.</span>
        <span>Construído com React + Tailwind.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const revealRef = useRevealOnScroll();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#111827_0,#020617_45%,#000_80%)] text-slate-50">
      {/* Blobs de fundo */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-80 w-80 animate-blob rounded-full bg-[radial-gradient(circle_at_30%_30%,#6366f1,transparent_60%)] opacity-60 mix-blend-screen" />
        <div className="absolute -right-32 top-1/3 h-72 w-72 animate-blob rounded-full bg-[radial-gradient(circle_at_70%_20%,#ec4899,transparent_60%)] opacity-60 mix-blend-screen animation-delay-1000" />
        <div className="absolute bottom-[-120px] left-1/4 h-72 w-72 animate-blob rounded-full bg-[radial-gradient(circle_at_40%_80%,#22c55e,transparent_60%)] opacity-60 mix-blend-screen animation-delay-[2000ms]" />
      </div>

      <Navbar />

      <main
        ref={revealRef}
        className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,#111827_0,#020617_45%,#000_80%)] text-slate-50"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
