import Image from "next/image";

export default function ServiceHero({
  backgroundImage,
  tagCategory,
  tagConsole,
  title,
  subtitle
}) {
  return (
    <section className="w-full relative min-h-[50vh] flex items-center bg-slate-950 overflow-hidden text-left">
      {/* 1. Contenedor Superior de Imagen (Fondo con next/image fill e priority) */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* 2. Capa de superposición oscurecida (50% overlay) */}
      <div className="absolute inset-0 bg-slate-950/50 z-10" />

      {/* 3. Contenido alineado a la izquierda */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-16 md:py-24">
        <div className="max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            {tagCategory && (
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/95 px-3 py-1.5 rounded-sm border border-[#074875]/50">
                {tagCategory}
              </span>
            )}
            {tagConsole && (
              <span className="font-mono text-[10px] text-slate-300 bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded-sm tracking-wider">
                {tagConsole}
              </span>
            )}
          </div>

          <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

