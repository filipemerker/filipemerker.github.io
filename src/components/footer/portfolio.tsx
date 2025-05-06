import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SparklesText } from "../ui/sparkles-text";

export function Portfolio() {
  return (
    <Card className="w-full lg:w-110 shadow-none rounded-none m-0 border-t-0">
      <CardHeader className="flex flex-row items-center gap-2 pb-0">
        <span className="font-semibold text-lg text-black">
          This website was completely{" "}
          <SparklesText className="-mt-2">custom made</SparklesText>
        </span>
      </CardHeader>

      <CardContent>
        <p className="text-md text-gray-400 -mt-2">
          Handcrafted from scratch by me—drawing inspiration from across the web
          and built with open-source projects and AI tools. An attempt to
          showcase my skills and knowledge.
        </p>
      </CardContent>
    </Card>
  );
}
