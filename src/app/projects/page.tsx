'use client';

import { useState } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/20 via-accent-blue/10 to-purple-500/20">
        <svg className="w-20 h-20 text-accent-blue/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    );
  }

  if (images.length <= 1) {
    return (
      <img src={images[0]} alt={alt} className="w-full h-full object-cover object-top" />
    );
  }

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[current]}
        alt={`${alt} - ${current + 1}`}
        className="w-full h-full object-cover object-top transition-opacity duration-300"
      />

      {/* Previous */}
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((current - 1 + images.length) % images.length); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((current + 1) % images.length); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              idx === current ? 'bg-white w-3' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Featured personal projects with screenshots
const featuredProjects = [
  {
    title: 'NPPG Predictive Analytics',
    description: 'Production ML platform scoring 13,905 financial plans managing $500M+ in assets. 7 models (0.911 AUC risk prediction, 0.986 AUC churn) generate 53,000 predictions per nightly run. Graph-based risk propagation using NetworkX/Louvain community detection surfaces hidden failure patterns across linked entities. Out-of-time backtesting confirms reviewing 12% of plans catches 39% of failures (3.3x triage lift). Used daily by 10 senior executives.',
    images: [
      `${basePath}/projects/nppg-pipelines.jpeg`,
      `${basePath}/projects/nppg-analytics.png`,
      `${basePath}/projects/nppg-models.png`,
      `${basePath}/projects/nppg-season-analytics.jpeg`,
      `${basePath}/projects/nppg-compliance.png`,
      `${basePath}/projects/nppg-network.png`,
      `${basePath}/projects/nppg-analytics-view.png`,
    ],
    tags: ['Python', 'Dagster', 'scikit-learn', 'FastAPI', 'Next.js', 'React', 'SQL Server'],
    features: ['53K Predictions/Run', '0.911 AUC Risk Model', 'Graph Network Analysis', '3.3x Triage Lift'],
    category: 'ai',
  },
  {
    title: 'Plan Matrix',
    description: 'Cross-document field comparison and IRS-compliance review for retirement plan adoption agreements. Ingests AcroForm, flattened, and scanned PDFs through a three-backend extraction pipeline (PyMuPDF widgets, OpenCV checkbox detection, local Ollama vision), normalizes them onto a single canonical schema, and surfaces real discrepancies in a unified matrix and drag-and-drop A/B compare. Compliance engine runs a declarative YAML rule catalog against IRC, Treasury Regs, and the NPPG base plan document with inline citations and PDF deep-links. Sponsor-aware canonicalization auto-detects ADP/Empower/FIS/NPPG templates and proposes equivalent NPPG elections for restatement.',
    images: [
      `${basePath}/projects/plan-matrix-upload.png`,
      `${basePath}/projects/plan-matrix-compare.png`,
    ],
    tags: ['Python 3.12', 'FastAPI', 'Next.js 16', 'TypeScript', 'PyMuPDF', 'OpenCV', 'Ollama', 'shadcn/ui'],
    features: ['3 Extraction Backends', 'Side-by-Side Diff', 'YAML Rule Engine', 'IRC / CFR / BPD Citations'],
    category: 'ai',
    github: 'https://github.com/spatadenppg/googlyeyes',
  },
  {
    title: 'Electric Truck Charging Point Optimization',
    description: 'End-to-end pipeline recommending 100 optimal new heavy-duty truck DC fast-charging sites across the lower 48, joining 10 public datasets (FAF5 freight flows, HPMS highway geometry, AFDC stations, EIA grid, NLCD land cover, OSM, Census TIGER, BTS CFS) into SpatiaLite via a four-layer Dagster asset DAG. Built a ~200K-edge weighted freight network in GRAPE; ran four Gurobi facility-location formulations (CFLP, P-Median, Set Cover, Flow-Refueling) under shared budget and vehicle-range constraints to produce a consensus ranking, validated against the AFDC baseline. Georgia Tech CSE 6242 capstone.',
    images: [
      `${basePath}/projects/ev-charging-map.gif`,
      `${basePath}/projects/ev-charging-notebook.gif`,
    ],
    tags: ['Python', 'Dagster', 'SpatiaLite', 'Gurobi', 'GRAPE', 'Leafmap', 'Facility Location'],
    features: ['10 Public Datasets', '~200K-Edge Freight Graph', '4 Gurobi Formulations', '100 Site Consensus'],
    category: 'ai',
    github: 'https://github.com/inSideos-designs/ChargingPointOptimization',
  },
  {
    title: 'Biotech Unicorns Intelligence Platform',
    description: 'Real-time intelligence platform built for Riceberg Ventures tracking 112 biotech unicorns worth $526B in aggregate value ($4.7B avg). Cohort network view surfaces 169 co-investor and shared-condition edges across sub-categories like AI Drug Discovery, Cancer Detection, and Cell Therapy. AI-enriched patent analysis, SEC filing insights, clinical trials, and news sentiment powered by Gemini 2.5 Flash with automated enrichment pipelines on Google Cloud.',
    images: [
      `${basePath}/projects/biotech-demo.gif`,
      `${basePath}/projects/biotech-cohort-network.png`,
      `${basePath}/projects/biotech-v2.png`,
    ],
    tags: ['Next.js', 'React', 'Flask', 'BigQuery', 'Gemini AI', 'Google Cloud', 'Recharts'],
    features: ['Cohort Network Graph', 'AI-Enriched Patent Analysis', 'SEC Filing Insights', 'Clinical Trials Tracking'],
    category: 'ai',
    link: 'https://frontend-chi-five-99.vercel.app/',
  },
  {
    title: 'Midpoint',
    description: 'Web app that finds the perfect meeting spot between two locations. Calculates geographic midpoints, displays drive times from each person, and recommends nearby restaurants with ratings and reviews using Google Maps and Places APIs.',
    images: [`${basePath}/projects/midpoint.png`],
    tags: ['React', 'Vite', 'Google Maps API', 'Google Places API', 'JavaScript'],
    features: ['Midpoint Calculation', 'Restaurant Discovery', 'Drive Time Estimates', 'Interactive Map'],
    category: 'engineering',
  },
];

const projects = [
  {
    title: 'Enterprise Power BI Analytics Platform',
    description: 'Engineered executive reporting layer with 40+ custom DAX measures modeling a full 8-stage operational lifecycle. Gave CFO first-ever visibility into workflow bottlenecks across 13K+ work units.',
    impact: 'Reduced monthly board reporting prep by 80%, supporting $500M+ in managed assets',
    tags: ['Power BI', 'DAX', 'ETL', 'Data Modeling'],
    category: 'analytics',
  },
  {
    title: 'Automated Python ETL Pipeline',
    description: 'Developed automated ETL pipelines that ingest 700+ daily asset-reconciliation, valuation, and Form 5500 extracts from cloud storage with QA delta checks.',
    impact: 'Reduced manual effort by 6+ hours daily and improved reporting accuracy by 35%',
    tags: ['Python', 'pandas', 'NumPy', 'Cloud Storage', 'ETL'],
    category: 'engineering',
  },
  {
    title: 'Document Comparison Algorithm',
    description: 'Architected scalable document comparison algorithm processing 100+ plan documents with unprecedented efficiency and throughput.',
    impact: '99.7% cycle time reduction from 1,000+ minutes to 200 seconds',
    tags: ['Python', 'Algorithm Design', 'NLP', 'Automation'],
    category: 'engineering',
  },
  {
    title: 'Executive Dashboards & KPIs',
    description: 'Designed executive-level dashboards and KPIs using Tableau and advanced Excel analytics for leadership team and external partners.',
    impact: 'Enabled data-driven strategic decisions for Transamerica, Empower, Principal, Lincoln Financial',
    tags: ['Tableau', 'Excel', 'Data Visualization', 'KPIs'],
    category: 'analytics',
  },
  {
    title: 'MCP Services Integration',
    description: 'Developed and consumed Model Context Protocol (MCP) services to enable seamless integration between AI agents and enterprise data systems.',
    impact: 'Created reusable tool interfaces for automated compliance workflows',
    tags: ['MCP', 'AI Integration', 'Python', 'APIs'],
    category: 'ai',
  },
  {
    title: 'Data Validation Workflows',
    description: 'Built data validation workflows using SQL-based transformations against large-scale datasets in SSMS, ensuring data integrity for regulatory reporting.',
    impact: 'Significantly reduced error rates in compliance reporting',
    tags: ['SQL', 'SSMS', 'Data Quality', 'Validation'],
    category: 'engineering',
  },
];

const inProgressProjects = [
  {
    title: 'Velox',
    description: 'Fast LLM inference framework optimized for Apple Silicon. Leverages the Neural Engine and Metal GPU acceleration to run large language models efficiently on macOS with an interactive CLI and HTTP API server.',
    tags: ['Swift', 'MLX', 'Core ML', 'Metal', 'Swift NIO'],
    category: 'ai',
  },
  {
    title: 'AutoClip',
    description: 'Fully automated pipeline for generating and publishing viral short-form videos. Scrapes trending topics, generates scripts with Gemini AI, creates voiceovers via ElevenLabs, produces visuals, and auto-publishes to TikTok, YouTube Shorts, and Instagram Reels.',
    tags: ['Python', 'Google Gemini', 'ElevenLabs', 'MoviePy', 'Playwright', 'SQLite'],
    category: 'ai',
  },
  {
    title: 'MetalDiffuser',
    description: 'Metal GPU-accelerated diffusion model for high-performance image generation natively on Apple Silicon. Implements Stable Diffusion inference using Metal compute shaders and Core ML optimizations.',
    tags: ['Swift', 'Metal', 'Core ML', 'Diffusion Models'],
    category: 'ai',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'engineering', label: 'Data Engineering' },
  { id: 'ai', label: 'AI & ML' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[980px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 animate-fade-in-scale">
            My <span className="text-accent-blue">Projects</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto animate-fade-in-scale [animation-delay:100ms] opacity-0">
            A showcase of data analytics, ETL engineering, and AI integration projects
            that drive business value and operational efficiency.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 animate-fade-in-scale [animation-delay:200ms] opacity-0">
            Featured Projects
          </h2>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden card-hover animate-fade-in-scale"
                style={{ animationDelay: `${(index + 2) * 100}ms`, opacity: 0 }}
              >
                <div className="grid md:grid-cols-2">
                  {/* Project Image */}
                  <div className="h-64 md:h-72 bg-bg-secondary overflow-hidden">
                    <ImageCarousel images={project.images} alt={project.title} />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col justify-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit ${
                      project.category === 'analytics'
                        ? 'bg-accent-blue/20 text-accent-blue'
                        : project.category === 'engineering'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {project.category === 'analytics' ? 'Analytics' : project.category === 'engineering' ? 'Data Engineering' : 'AI & ML'}
                    </span>

                    <h3 className="text-xl font-semibold mb-2 text-text-primary">{project.title}</h3>
                    <p className="text-text-secondary text-sm mb-4">{project.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-1 mb-4">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                          <span className="w-1.5 h-1.5 bg-accent-blue rounded-full flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 5).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-bg-primary/50 rounded-full text-xs text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {('link' in project || 'github' in project) && (
                      <div className="flex gap-3 mt-4">
                        {'link' in project && project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-accent-blue hover:underline"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        )}
                        {'github' in project && project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-2 animate-fade-in-scale [animation-delay:300ms] opacity-0">
            In Progress
          </h2>
          <p className="text-text-secondary text-sm mb-8 animate-fade-in-scale [animation-delay:350ms] opacity-0">
            Currently building
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {inProgressProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden card-hover animate-fade-in-scale relative"
                style={{ animationDelay: `${(index + 4) * 100}ms`, opacity: 0 }}
              >
                {/* In Progress Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                    In Progress
                  </span>
                </div>

                <div className={`h-28 flex items-center justify-center ${
                  project.category === 'ai'
                    ? 'bg-gradient-to-br from-purple-500/20 to-purple-500/5'
                    : project.category === 'engineering'
                    ? 'bg-gradient-to-br from-green-500/20 to-green-500/5'
                    : 'bg-gradient-to-br from-accent-blue/20 to-accent-blue/5'
                }`}>
                  <svg className="w-12 h-12 text-purple-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">{project.title}</h3>
                  <p className="text-text-secondary text-xs mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-bg-primary/50 rounded-full text-xs text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <h2 className="text-2xl font-semibold mb-8 animate-fade-in-scale [animation-delay:400ms] opacity-0">
          Professional Work
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-scale [animation-delay:500ms] opacity-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-accent-blue text-white'
                  : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden card-hover animate-fade-in-scale"
              style={{ animationDelay: `${(index + 3) * 100}ms`, opacity: 0 }}
            >
              {/* Icon Header */}
              <div className={`h-32 flex items-center justify-center ${
                project.category === 'analytics'
                  ? 'bg-gradient-to-br from-accent-blue/20 to-accent-blue/5'
                  : project.category === 'engineering'
                  ? 'bg-gradient-to-br from-green-500/20 to-green-500/5'
                  : 'bg-gradient-to-br from-purple-500/20 to-purple-500/5'
              }`}>
                {project.category === 'analytics' ? (
                  <svg className="w-16 h-16 text-accent-blue/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ) : project.category === 'engineering' ? (
                  <svg className="w-16 h-16 text-green-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ) : (
                  <svg className="w-16 h-16 text-purple-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>

              <div className="p-6">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  project.category === 'analytics'
                    ? 'bg-accent-blue/20 text-accent-blue'
                    : project.category === 'engineering'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {project.category === 'analytics' ? 'Analytics' : project.category === 'engineering' ? 'Data Engineering' : 'AI & ML'}
                </span>

                <h3 className="text-xl font-semibold mb-3 text-text-primary">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{project.description}</p>

                {/* Impact */}
                <div className="bg-bg-primary/50 rounded-xl p-4 mb-4 border-l-2 border-accent-blue">
                  <p className="text-sm">
                    <span className="text-accent-blue font-medium">Impact: </span>
                    <span className="text-text-secondary">{project.impact}</span>
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bg-primary/50 rounded-full text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/inSideos-designs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-blue hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
