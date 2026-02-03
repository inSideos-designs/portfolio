'use client';

import { useState } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

// Featured personal projects with screenshots
const featuredProjects = [
  {
    title: 'Capitol Trades',
    description: 'Congressional stock trading tracker aggregating STOCK Act disclosures to analyze trading patterns of US lawmakers. Features real-time data scraping, ROI calculations, and party-level comparisons with interactive visualizations.',
    image: `${basePath}/projects/capitol-trades.png`,
    tags: ['React', 'TypeScript', 'Vite', 'Recharts', 'Tailwind CSS', 'Node.js', 'REST API'],
    features: ['Live API Integration', 'Top Performer Rankings', 'Sector Analysis', 'Party Comparison'],
    category: 'engineering',
  },
  {
    title: 'Geopolitical Marketing Dashboard',
    description: 'Real-time monitoring system for political context and marketing campaign performance. Uses ML-based salience scoring to optimize ad spend timing based on geopolitical events and sentiment analysis.',
    image: `${basePath}/projects/geopolitical-dashboard.png`,
    tags: ['Python', 'Flask', 'Plotly', 'GDELT API', 'BigQuery', 'Machine Learning', 'XGBoost'],
    features: ['Real-time Salience Tracking', 'Campaign Simulation', 'Engagement Analytics', 'Alert System'],
    category: 'ai',
  },
  {
    title: 'Biotech & Healthcare Unicorns Dashboard',
    description: 'Interactive analytics platform tracking 112 biotech unicorn companies worth $526B in total value. Features advanced filtering by category, valuation range, patent portfolio, and company status with deep-dive analysis capabilities.',
    image: `${basePath}/projects/biotech-v2.png`,
    tags: ['Python', 'Streamlit', 'Data Visualization', 'BigQuery', 'Pandas'],
    features: ['Company Deep Dives', 'Patent Analysis', 'Funding Journey Tracking', 'News Aggregation'],
    category: 'analytics',
  },
  {
    title: '401k Work Tracker Dashboard',
    description: 'Power BI dashboard for tracking retirement plan administration workflows. Monitors work units across multiple compliance stages with real-time supervisor and employee performance metrics.',
    image: `${basePath}/projects/401k-v2.png`,
    tags: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
    features: ['Multi-dimensional Filtering', 'Supervisor Analytics', 'Plan Status Tracking', 'Completion Metrics'],
    category: 'analytics',
  },
];

const projects = [
  {
    title: 'Enterprise Power BI Analytics Platform',
    description: 'Partnered with CFO to deliver enterprise analytics platform for ERISA 3(16) fiduciary operations. Engineered 40+ DAX measures tracking 13K+ work units across 8 compliance stages.',
    impact: 'Reduced reporting prep by 80%, supporting $500M+ in retirement plan assets',
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
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
