// src/app/pages/[code]/page.tsx
'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { LandingPage } from "@/components/ui/landing-page";
import { LandingPageModel } from "@/models/landing-page/LandingPageData";
import { allDefaulThemes } from "@/models/theme/ThemeData";
import { apiService } from "@/services/resources/apiService";

export default function Page() {
  const params = useParams();
  const code = params.code;

  const [landingPageData, setLandingPageData] = useState<LandingPageModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const themeData = allDefaulThemes[11];

  useEffect(() => {
    if (typeof code === "string" && code) {
      const fetchLandingPage = async () => {
        try {
          setIsLoading(true);
          const data = await apiService.landingPage.getByCode(code);
          console.log(data);
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
      theme={themeData}
      isEditing={false}
    />
  );
}