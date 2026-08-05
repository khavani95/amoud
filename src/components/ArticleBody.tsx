import type { Block } from "@/data/articles";

/** Renders an article's structured blocks as semantic HTML. */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="pt-6 text-2xl font-black text-[var(--ink)] sm:text-3xl"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="pt-2 text-lg font-bold text-[var(--ink)] sm:text-xl"
              >
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="leading-9 text-[var(--ink-soft)]">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3 leading-8 text-[var(--ink-soft)]">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {b.items.map((it, n) => (
                  <li key={it} className="flex gap-4 leading-8 text-[var(--ink-soft)]">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40 text-xs font-bold text-[var(--gold)]">
                      {toFa(n + 1)}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <aside
                key={i}
                className="rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold-glow)] p-6 leading-8 text-[var(--ink-soft)]"
              >
                {b.text}
              </aside>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-sm">
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th
                          key={h}
                          className="border-b border-[var(--line-strong)] px-4 py-3 text-right font-bold text-[var(--gold)]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className="border-b border-[var(--line)] px-4 py-3 leading-7 text-[var(--ink-soft)]"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}

const faDigits = "۰۱۲۳۴۵۶۷۸۹";
const toFa = (n: number) =>
  String(n).replace(/\d/g, (d) => faDigits[Number(d)]);
