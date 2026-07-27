import Reveal from "./Reveal";

/** Inner-page header: copper rule, title, optional subtitle. */
export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-[var(--border-soft)] bg-[var(--navy-deep)] pt-[110px] pb-12">
      <div className="amoud-container">
        <Reveal>
          <div className="h-1 w-[60px] bg-[var(--copper)]" />
          <h1 className="mt-5 text-[30px] font-black leading-[1.4] text-white sm:text-[38px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-[15px] leading-[2.1] text-[var(--text-secondary)]">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
