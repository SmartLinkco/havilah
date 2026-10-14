import { ProduceCard } from "@/components/ProduceCard";
import { Reveal } from "@/components/Reveal";
import { produceGroups } from "@/content/produce";

export function ProductGroups({ heading = "h2" }: { heading?: "h2" | "h3" }) {
  const Heading = heading;
  return (
    <div className="space-y-14">
      {produceGroups.map((group) => (
        <section key={group.id} aria-labelledby={`${group.id}-heading`}>
          <Reveal>
            <Heading id={`${group.id}-heading`} className="font-heading text-2xl font-semibold text-green-900 sm:text-3xl">
              {group.title}
            </Heading>
            <div className="mt-4 h-0.5 w-16 bg-gold-500" />
          </Reveal>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {group.products.map((product, index) => (
              <li key={product.id}>
                <Reveal delay={index * 70} className="h-full">
                  <ProduceCard product={product} />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
