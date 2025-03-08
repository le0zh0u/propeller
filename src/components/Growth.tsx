import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Growth = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Bridging China & the World
          </h2>
          <p className="text-gray-400 mb-8">
            Innovation thrives at intersections. Our proprietary China Sci-Tech
            Startup Database unlocks local insights, while curated Innovation
            Exploration Tours immerse global leaders in China&apos;s tech
            ecosystem. Need precise connections? Our Point-to-Point Match-Making
            turns cross-border potential into partnerships. Driven by curiosity,
            powered by data, we propel brands beyond borders. Let&apos;s build
            what&apos;s next.
          </p>
          <Link href="/innovation">
            <Button
              variant="default"
              size="lg"
              className="group bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Learn More
              <ArrowRight
                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </Link>
        </div>
        <div className="relative">
          <div className="w-full aspect-square bg-gradient-primary rounded-lg transform rotate-3"></div>
          <div className="absolute inset-0 bg-black/20 rounded-lg transform -rotate-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
