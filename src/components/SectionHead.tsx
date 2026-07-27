import Reveal from "./Reveal";

/** Section title with the copper 3px underline and optional index number. */
export default function SectionHead({
  title,
  index,
  withLogo = true,
}: {
  title: string;
  index?: string;
  withLogo?: boolean;
}) {
  return (
    <Reveal>
      <div className="section-head">
        <div className="flex items-center gap-3">
          {withLogo && (
            <img
              src="/brand/logo.png"
              alt=""
              aria-hidden="true"
              className="logo-white h-7 w-auto"
            />
          )}
          <h2 className="text-[22px] font-extrabold text-white sm:text-[28px]">
            {title}
          </h2>
        </div>
        {index && (
          <span className="text-sm font-bold text-[var(--copper)]">{index}</span>
        )}
      </div>
    </Reveal>
  );
}
