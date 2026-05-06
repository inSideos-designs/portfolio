import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Hero />

      <section id="work" className="pb-20">
        <div className="mx-auto max-w-[980px] px-5 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">Selected Work</h2>
        </div>

        <BentoGrid>
          <ProjectCard
            title="NPPG Predictive Analytics"
            category="Data Engineering & ML"
            description="Production ML platform generating 53,000 predictions per nightly run across 13,905 financial plans. 0.911 AUC risk model, graph-based analytics, used daily by 10 senior executives."
            imageUrl={`${basePath}/projects/nppg-pipelines.jpeg`}
          />
          <ProjectCard
            title="Plan Matrix"
            category="AI & Full-Stack"
            description="Cross-document field comparison and IRS-compliance review for 401(k) adoption agreements. Three-backend extraction pipeline (PyMuPDF, OpenCV, Ollama vision) with a YAML rule engine."
            imageUrl={`${basePath}/projects/plan-matrix-upload.png`}
          />
          <ProjectCard
            title="Biotech Unicorns Intelligence"
            category="AI & Full-Stack"
            description="Real-time platform for Riceberg Ventures tracking 112 biotech unicorns worth $526B with cohort-network views and Gemini-powered patent and SEC analysis."
            imageUrl={`${basePath}/projects/biotech-demo.gif`}
          />
          <ProjectCard
            title="EV Charging Optimization"
            category="Optimization & Geospatial"
            description="Recommends 100 optimal heavy-duty truck DC fast-charging sites across the lower 48 using a ~200K-edge GRAPE network and four Gurobi facility-location formulations. Georgia Tech CSE 6242 capstone."
            imageUrl={`${basePath}/projects/ev-charging-map.gif`}
          />
          <ProjectCard
            title="Midpoint"
            category="Full-Stack Development"
            description="Find the perfect meeting spot between two locations with drive times and nearby restaurant recommendations."
            imageUrl={`${basePath}/projects/midpoint.png`}
          />
        </BentoGrid>

        <div className="mx-auto max-w-[980px] px-5 mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent-blue hover:underline"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
