import { Globe2 } from "lucide-react";
import { Globe } from "../ui/globe";
import { Card, CardHeader } from "@/components/ui/card";

export function RemoteWork() {
  return (
    <Card className="relative md:w-110 w-full h-100 mx-auto mt-10 shadow-none overflow-hidden  p-4">
      <CardHeader className="flex flex-row items-center gap-2 md:ml-2 ml-0 pl-2 pb-0">
        <Globe2 className="w-4 h-4 text-gray-400" />
        <span className="font-semibold text-lg text-gray-700">
          7+ Years delivering remotely
        </span>
      </CardHeader>

      <Globe className="top-14" />
    </Card>
  );
}
