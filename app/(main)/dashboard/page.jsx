import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return (
    <div>
      <h1>IndustryInsightsPage</h1>
    </div>
  );
};

export default IndustryInsightsPage;
