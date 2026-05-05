'use client';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const experiences = [
  {
    title: 'Data Analyst',
    company: 'NPPG (Pinnacle)',
    location: 'Shrewsbury, NJ | Remote',
    period: 'July 2025 - Present',
    type: 'Data Engineering & ML',
    description: 'Sole technical hire who built the firm\'s analytics capability from zero using AI-driven development workflows (Claude Code, spec-driven prompting, agentic refactors). Platform is used daily by 10 senior executives for risk triage of 13,905 financial plans managing $500M+ in assets, replacing manual spreadsheet workflows.',
    achievements: [
      'Engineered 24 automated Dagster pipelines (88 assets, 24 scheduled jobs) producing curated / ADS-style datasets that feed downstream risk scoring, Markov chain modeling, graph network analysis, and workload optimization; instrumented unit tests, data validation checks, and structured logging so pipeline failures surface with actionable root-cause context',
      'Developed 7 production ML models (GradientBoosting, RandomForest, XGBoost) with automated 3-model shootout and 5-fold CV. Risk classifier hits 0.911 AUC / 82% recall; churn model hits 0.986 AUC / 92% recall; system generates 53K predictions per nightly run',
      'Out-of-time backtesting showed reviewing just 12% of plans catches 39% of failures, a 3.3x triage lift',
      'Shipped full-stack triage dashboard (Next.js, FastAPI, SQL Server) with interactive graph-network views; built Power BI platform giving the CFO first-ever visibility into bottlenecks across 13K+ work units, cutting board reporting prep 80%',
      'Codified regulatory logic into an automated rules engine with audit trails (each miss = up to $500K penalty)',
    ],
    tags: ['Python', 'Dagster', 'scikit-learn', 'FastAPI', 'Next.js', 'SQL Server', 'Power BI', 'NetworkX'],
  },
  {
    title: 'Software Engineer',
    company: 'Handshake (Project Helix)',
    location: 'Remote',
    period: 'April 2026 - Present',
    type: 'Agentic Coding Evaluation',
    description: 'Build reproducible Docker-based evaluation harnesses for agentic-coding model training across major OSS codebases.',
    achievements: [
      'Build reproducible Docker-based evaluation harnesses (helix-validation) for agentic-coding model training across major OSS codebases (bevyengine/bevy, cashapp/misk, excalidraw, graphql-java) spanning Rust, Kotlin/JVM, TypeScript, and Python toolchains',
      'Author golden-solution implementations and pin per-task test scopes (Gradle subprojects, Cargo packages); harden CI seeding by switching base images, baking Gradle deps into image build, and rewriting multi-module runners for monorepo path layouts',
    ],
    tags: ['Docker', 'Rust', 'Kotlin/JVM', 'TypeScript', 'Python', 'Gradle', 'Cargo', 'CI'],
  },
  {
    title: 'Implementation Specialist',
    company: 'NPPG (Pinnacle)',
    location: 'East Brunswick, NJ',
    period: 'December 2024 - July 2025',
    type: 'Technical Implementation',
    description: 'Architected document processing infrastructure and internal tooling for retirement plan services.',
    achievements: [
      'Architected document parsing + comparison engine processing 100+ retirement plan documents in 200s (99.7% cycle-time reduction from manual 1,000+ minutes, 1,800 plans/hour); CFO estimated combined parser + compliance integration delivers ~3 FTE reclaimed and ~5% net revenue uplift',
      'Deployed internal audit tools with Python GUIs so non-technical users could run data validation and reporting independently',
    ],
    tags: ['Python', 'Document Parsing', 'GUI Tools', 'Process Automation'],
  },
  {
    title: 'Bulk Fuel Operations Specialist',
    company: 'United States Marine Corps',
    location: 'Various Locations',
    period: 'May 2020 - 2024',
    type: 'Logistics & Operations Analytics',
    description: 'Managed large-scale fuel logistics operations with emphasis on data accuracy and performance tracking.',
    achievements: [
      'Managed inventory tracking and accountability for up to 1 million gallons of fuel across multiple systems',
      'Built performance tracking and corrective-action documentation processes for the unit',
    ],
    tags: ['Logistics', 'Data Management', 'Operations'],
  },
];

const education = [
  {
    degree: 'Master of Science (M.S.)',
    field: 'Computational Data Analytics',
    school: 'Georgia Institute of Technology',
    period: 'Expected May 2027',
    status: 'In Progress',
  },
  {
    degree: 'Bachelor of Science (B.S.)',
    field: 'Business Management',
    school: 'Stockton University',
    period: '2024',
    status: 'Completed',
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
            A journey through data analytics, military service, and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-in-up ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-8 z-10 animate-pulse-glow"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="glass-card p-6 card-hover">
                  {/* Header */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-blue-400 text-sm font-medium mb-1">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-gray-400 mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                  </div>

                  {/* Type badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    exp.type.includes('Analytics') || exp.type.includes('ERISA')
                      ? 'bg-blue-500/20 text-blue-400'
                      : exp.type.includes('Technical')
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {exp.type}
                  </span>

                  {/* Description */}
                  <p className={`text-gray-400 mb-4 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className={`text-blue-400 mt-1 flex-shrink-0 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                          •
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-6 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'In Progress'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                <p className="text-blue-400 mb-1">{edu.field}</p>
                <p className="text-gray-400 text-sm mb-1">{edu.school}</p>
                <p className="text-gray-500 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 inline-block">
            <p className="text-gray-400 mb-4">
              Interested in my full resume?
            </p>
            <a
              href={`${basePath}/resume.pdf`}
              className="btn-primary inline-flex items-center gap-2"
              download
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
