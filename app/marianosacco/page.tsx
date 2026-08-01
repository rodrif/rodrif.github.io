import HeaderSection from "@/components/HeaderSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import { marianoCVData } from "@/app/data/mariano-cv-data";

export default function MarianoSaccoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <HeaderSection data={marianoCVData} />
        <ExperienceSection data={marianoCVData} />
        <EducationSection data={marianoCVData} />
        <SkillsSection data={marianoCVData} />
        <CertificationsSection data={marianoCVData} />
      </main>
    </div>
  );
}
