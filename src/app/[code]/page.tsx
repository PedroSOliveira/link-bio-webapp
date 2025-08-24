"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { LandingPage } from "@/components/ui/landing-page";
import { LandingPageModel } from "@/models/landing-page/LandingPageData";
import { allDefaulThemes, DefaultThemes } from "@/models/theme/ThemeData";
import { apiService } from "@/services/resources/apiService";

export default function Page() {
  const params = useParams();
  const code = params.code;

  const [landingPageData, setLandingPageData] =
    useState<LandingPageModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof code === "string" && code) {
      const fetchLandingPage = async () => {
        try {
          setIsLoading(true);
          const data = await apiService.landingPage.getByCode(code);
          setLandingPageData(data);
          setError(null);
        } catch (err) {
          console.error("Failed to fetch landing page:", err);
          setError("Página não encontrada ou um erro ocorreu.");
        } finally {
          setIsLoading(false);
        }
      };

      fetchLandingPage();
    }
  }, [code]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!landingPageData) {
    return <div>Página não encontrada.</div>;
  }

  return (
    <LandingPage
      landingPage={landingPageData}
      theme={
        allDefaulThemes.find((theme) => theme.name === landingPageData.theme) ??
        DefaultThemes.pureWhite
      }
      isEditing={false}
    />
  );
}
