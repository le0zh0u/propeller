import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Operations = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-3 gap-4 relative">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-full ${
                  i === 4 ? "bg-gradient-primary" : "bg-gray-800"
                } transition-all hover:scale-110`}
              ></div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-6">
            Content & Marketing Engine
          </h2>
          <p className="text-gray-400 mb-8">
            From the first brainstorm to the moment your campaign goes viral, we
            handle it all: content planning, production, China-specific growth
            strategies, and global digital amplification. Think of us as your
            multilingual, multi-platform powerhouse—turning ideas into
            measurable impact.
          </p>
          <Link href="/content">
            <Button
              variant="default"
              size="lg"
              className="group bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Explore Our Process
              <ArrowRight
                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Operations;
