import SiteHeader from "@/components/site-header";
import ProjectIndex from "@/components/project-index";
import ProjectStage from "@/components/project-stage";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6">
      <SiteHeader />

      <section className="pt-8">
        <div className="flex justify-center">
          <ProjectIndex />
        </div>

        <ProjectStage />
      </section>
    </main>
  );
}