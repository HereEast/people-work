import { useState } from "react";

import { Card } from "./Card";
import { SharePersonForm } from "./SharePersonForm";

import { cn } from "~/utils/handlers";

interface SharePersonCardProps {
  className?: string;
}

export function SharePersonCard({ className = "" }: SharePersonCardProps) {
  const [name, setName] = useState("");

  return (
    <Card className={cn("p-10", className)}>
      <div id="share" className="mb-10 grow space-y-8">
        <h5 className="text-center text-4xl font-bold leading-[100%] text-stone-50">
          Know anyone cool 🦍 who does amazing work✨?
        </h5>

        {name && (
          <div>
            <p className="bg-animate-gradient bg-clip-text text-center text-base leading-tight text-transparent">
              <span className="inline-block">Thaaaanks!!!</span>
              <span className="inline-block">You shared {name}</span>
            </p>
          </div>
        )}
      </div>

      <SharePersonForm setName={setName} />
    </Card>
  );
}
