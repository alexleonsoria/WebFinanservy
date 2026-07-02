import Image from "next/image";

export default function ServiceHero({
  backgroundImage,
  tagCategory,
  tagConsole,
  title,
  subtitle
}) {
  return (
    <section className="w-full relative min-h-[50vh] flex items-center bg-slate-950 overflow-hidden">
      {/* 1. Contenedor Superior de Imagen (Fondo con next/image fill e priority) */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* 2. Capa de superposición oscurecida */}
      <div className="absolute inset-0 bg-slate-950/50 z-10" />

      {/* 3. Contenido alineado a la izquierda */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            {tagCategory && (
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/90 px-3 py-1 rounded-sm border border-[#074875]/50">
                {tagCategory}
              </span>
            )}
            {tagConsole && (
              <span className="font-mono text-[10px] text-[#E2E8F0] bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm tracking-wider">
                {tagConsole}
              </span>
            )}
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed max-w-2xl font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
