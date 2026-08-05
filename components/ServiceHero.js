import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServiceHero({
  backgroundImage,
  tagCategory,
  tagConsole,
  title,
  subtitle,
  breadcrumbs = [],
  children
}) {
  const hasImage = !!backgroundImage;

  return (
    <section className="w-full relative min-h-[55vh] flex items-center bg-slate-950 overflow-hidden text-left">
      
      {hasImage ? (
        <>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Elegant horizontal gradient overlay: dark corporative on left (85% opacity), fading to right (30% opacity) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          </div>
        </>
      ) : (
        <>
          {/* Background elegant gradient and cyber grid pattern (text-only hero) */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#074875] to-slate-950 z-0">
            <div className="absolute inset-0 grid-pattern-dark opacity-35 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient-to-tr from-transparent via-[#96C11F]/5 to-transparent opacity-50" />
          </div>
        </>
      )}

      {/* Hero content wrapper with top padding to prevent header collision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-3xl space-y-5">
          
          {/* Dynamic Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono mb-4 uppercase tracking-wider">
              {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {crumb.link ? (
                    <Link href={crumb.link} className="hover:text-white transition-colors">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className={idx === breadcrumbs.length - 1 ? "text-[#96C11F] font-semibold" : "text-slate-300"}>
                      {crumb.name}
                    </span>
                  )}
                  {idx < breadcrumbs.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                </div>
              ))}
            </div>
          )}

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

          {children && (
            <div className="pt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

