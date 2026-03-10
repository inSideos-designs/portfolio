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
            description="End-to-end data platform with 24 automated pipelines, 6 ML models, and real-time dashboards for 14K+ pension plans."
            imageUrl={`${basePath}/projects/nppg-analytics.png`}
          />
          <ProjectCard
            title="Biotech Unicorns Intelligence"
            category="AI & Full-Stack"
            description="AI-enriched platform tracking 112 biotech unicorns worth $526B with Gemini-powered patent and SEC analysis."
            imageUrl={`${basePath}/projects/biotech-v2.png`}
          />
          <ProjectCard
            title="OilSight"
            category="AI & Geospatial Analytics"
            description="ML platform predicting oil & gas hotspots using USGS elevation models and terrain feature extraction across 8 US basins."
            imageUrl={`${basePath}/projects/oilsight.png`}
          />
          <ProjectCard
            title="Capitol Trades"
            category="Full-Stack Development"
            description="Congressional stock trading tracker with real-time API integration, ROI calculations, and party-level analytics."
            imageUrl={`${basePath}/projects/capitol-trades.png`}
          />
          <ProjectCard
            title="Midpoint"
            category="Full-Stack Development"
            description="Find the perfect meeting spot between two locations with drive times and nearby restaurant recommendations."
            imageUrl={`${basePath}/projects/midpoint.png`}
          />
          <ProjectCard
            title="Geopolitical Marketing"
            category="Machine Learning"
            description="Real-time ML-powered salience scoring to optimize ad spend based on geopolitical events."
            imageUrl={`${basePath}/projects/geopolitical-dashboard.png`}
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
