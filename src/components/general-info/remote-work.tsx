import { Globe } from "../ui/globe";
import { Card, CardHeader } from "@/components/ui/card";
import { AuroraText } from "../ui/aurora-text";
export function RemoteWork() {
  return (
    <Card className="relative md:w-110 w-full h-100 mx-auto shadow-none border-y-0 rounded-none border-t-1 overflow-hidden p-4">
      <CardHeader className="flex flex-row items-center gap-2 md:ml-2 ml-0 pl-2 pb-0">
        <span className="font-semibold text-lg text-gray-700">
          <AuroraText>7+ years</AuroraText> delivering remotely
        </span>
      </CardHeader>

      <Globe className="top-14" />
    </Card>
  );
}
