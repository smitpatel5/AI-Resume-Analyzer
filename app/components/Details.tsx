import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordion";

const ScoreBadge = ({ score }: { score: number }) => {
  return (
      <div
          className={cn(
              "flex flex-row gap-2 items-center px-4 py-2 rounded-full text-base font-bold",
              score > 69
                  ? "bg-green-100 text-green-700"
                  : score > 39
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
          )}
      >
        {score}/100
      </div>
  );
};

const CategoryHeader = ({
                          title,
                          categoryScore,
                        }: {
  title: string;
  categoryScore: number;
}) => {
  return (
      <div className="flex flex-row gap-4 items-center py-6">
        <p className="text-2xl font-bold text-gray-800">{title}</p>
        <ScoreBadge score={categoryScore} />
      </div>
  );
};

const CategoryContent = ({
                           tips,
                         }: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) => {
  return (
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {tips.map((tip, index) => (
              <div className="flex flex-row gap-4 items-start p-4 bg-gray-50 rounded-lg" key={index}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1 ${
                  tip.type === "good" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                }`}>
                  {tip.type === "good" ? "✓" : "⚠"}
                </div>
                <p className="text-gray-700 font-medium text-base">{tip.tip}</p>
              </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 w-full">
          {tips.map((tip, index) => (
              <div
                  key={index + tip.tip}
                  className={cn(
                      "flex flex-col gap-4 rounded-xl p-6 border-l-4",
                      tip.type === "good"
                          ? "bg-green-50 border-green-400 text-green-800"
                          : "bg-yellow-50 border-yellow-400 text-yellow-800"
                  )}
              >
                <div className="flex flex-row gap-4 items-center">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    tip.type === "good" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                  }`}>
                    {tip.type === "good" ? "✓" : "⚠"}
                  </div>
                  <p className="text-lg font-semibold">{tip.tip}</p>
                </div>
                <p className="text-base leading-relaxed ml-11 text-gray-700">{tip.explanation}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
      <div className="modern-resume-review">
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Detailed Analysis</h3>
        <div className="flex flex-col gap-10 w-full">
          <Accordion allowMultiple={true}>
            <AccordionItem id="tone-style">
              <AccordionHeader itemId="tone-style">
                <CategoryHeader
                    title="Tone & Style"
                    categoryScore={feedback.toneAndStyle.score}
                />
              </AccordionHeader>
              <AccordionContent itemId="tone-style">
                <div className="py-6">
                  <CategoryContent tips={feedback.toneAndStyle.tips} />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id="content">
              <AccordionHeader itemId="content">
                <CategoryHeader
                    title="Content"
                    categoryScore={feedback.content.score}
                />
              </AccordionHeader>
              <AccordionContent itemId="content">
                <div className="py-6">
                  <CategoryContent tips={feedback.content.tips} />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id="structure">
              <AccordionHeader itemId="structure">
                <CategoryHeader
                    title="Structure"
                    categoryScore={feedback.structure.score}
                />
              </AccordionHeader>
              <AccordionContent itemId="structure">
                <div className="py-6">
                  <CategoryContent tips={feedback.structure.tips} />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id="skills">
              <AccordionHeader itemId="skills">
                <CategoryHeader
                    title="Skills"
                    categoryScore={feedback.skills.score}
                />
              </AccordionHeader>
              <AccordionContent itemId="skills">
                <div className="py-6">
                  <CategoryContent tips={feedback.skills.tips} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
  );
};

export default Details;
