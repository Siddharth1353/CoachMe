import { getAssessments } from "@/actions/interview";
import StatsCards from "./_componets/stats-cards";
import PerformanceChart from "./_componets/performance-chart";
import QuizList from "./_componets/quiz-list";
export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold  bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 tracking-tighter text-transparent bg-clip-text pb-2 pr-2  md:text-6xl ">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
}
