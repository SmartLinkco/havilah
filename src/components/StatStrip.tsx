import { stats } from "@/content/stats";

export function StatStrip() {
  return (
    <section className="bg-green-900 text-white" aria-labelledby="figures-heading">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 id="figures-heading" className="font-heading text-2xl font-semibold sm:text-3xl">
          Headline figures
        </h2>
        <p className="mt-3 max-w-2xl text-green-100">
          Only the export aim is taken from the project brief. The other figures stay blank until the farm confirms them.
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="rounded-2xl bg-white/5 p-5">
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-100">{stat.label}</dt>
              <dd className={`mt-3 font-heading font-semibold ${stat.pending ? "text-xl text-white" : "text-4xl text-white"}`}>
                {stat.value}
              </dd>
              <p className="mt-3 text-sm leading-relaxed text-green-100">{stat.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
