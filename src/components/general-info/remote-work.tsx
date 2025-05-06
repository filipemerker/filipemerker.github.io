import { Globe } from "../ui/globe";
import { Card, CardHeader } from "@/components/ui/card";
import { AuroraText } from "../ui/aurora-text";
import { BorderBeam } from "../ui/border-beam";

export function RemoteWork() {
  return (
    <Card className="relative md:w-100 w-full h-90 mx-auto shadow-none rounded-none overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-2 pb-0">
        <span className="font-semibold text-lg text-gray-700">
          <AuroraText>7+ years</AuroraText> delivering remotely
        </span>
      </CardHeader>

      <Globe className="top-14 z-10 lg:opacity-70" />

      <div className="absolute overflow-hidden top-[94px] left-1/2 -translate-x-1/2 w-[calc(100%-76px)] aspect-square rounded-full">
        <BorderBeam
          duration={2}
          size={500}
          colorFrom="#00FFFF"
          colorTo="#4169E1"
          className="opacity-70"
        />
      </div>
    </Card>
  );
}
