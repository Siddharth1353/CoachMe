"use client";

import { onboardingSchema } from "@/app/lib/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";

const OnboardingForm = ({ industries }) => {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });
  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className="bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2  md:text-4xl text-4xl">
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            {" "}
            Select your industry to get personalized career insights and
            recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
