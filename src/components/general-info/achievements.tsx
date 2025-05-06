import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BorderBeam } from "../ui/border-beam";
import { articles } from "@/data/articles";

export function Achievements() {
  return (
    <div className="relative overflow-hidden grid md:grid-cols-2 gap-[1px] bg-border border ">
      {articles.map((article) => (
        <Card
          key={article.title}
          className="shadow-none border-none rounded-none"
        >
          <CardHeader>
            <span className="text-gray-400 text-sm border-l pl-3 border-gray-200">
              {article.date}
            </span>
          </CardHeader>

          <CardContent>
            <div className="mb-2 flex flex-col items-center">
              {article.image && (
                <img
                  src={article.image.src}
                  alt={article.title}
                  className={article.image.className}
                />
              )}
              <h3 className="w-full font-semibold text-lg text-black leading-[1.4] mb-2">
                {article.title}
              </h3>
              <div className="w-full text-gray-400 text-base">
                {article.summary}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <BorderBeam duration={5} size={600} />
    </div>
  );
}
