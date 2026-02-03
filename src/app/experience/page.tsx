'use client';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const experiences = [
  {
    title: 'Data Analyst',
    company: 'NPPG (Pinnacle)',
    location: 'Shrewsbury, NJ | Remote',
    period: 'Aug 2025 - Present',
    type: 'Operations & ERISA',
    description: 'Led advanced analytics initiatives for regulatory compliance and business intelligence, managing datasets exceeding 700K records and driving strategic decision-making through data-driven insights.',
    achievements: [
      'Partnered with CFO to deliver enterprise Power BI analytics platform for ERISA 3(16) fiduciary operations, engineered 40+ DAX measures tracking 13K+ work units across 8 compliance stages',
      'Developed automated Python ETL pipelines processing 700+ daily extracts from cloud storage, reducing manual effort by 6+ hours daily and improving reporting accuracy 35%',
      'Designed executive-level dashboards and KPIs using Tableau and advanced Excel analytics for leadership team and external partners (Transamerica, Empower, Principal, Lincoln Financial)',
      'Built data validation workflows using SQL-based transformations against large-scale datasets in SSMS, ensuring data integrity for regulatory reporting',
      'Developed and consumed Model Context Protocol (MCP) services for AI agent integration with enterprise data systems',
    ],
    tags: ['Power BI', 'Python', 'SQL', 'ETL', 'Tableau', 'DAX', 'MCP'],
  },
  {
    title: 'Implementation Specialist',
    company: 'NPPG (Pinnacle)',
    location: 'East Brunswick, NJ',
    period: 'Dec 2024 - Aug 2025',
    type: 'Technical Implementation',
    description: 'Architected and deployed scalable document processing solutions while coordinating client implementations for retirement plan services.',
    achievements: [
      'Architected scalable document comparison algorithm processing 100+ plan documents in 200 seconds (99.7% cycle time reduction from manual 1,000+ minutes), achieving 1,800 plans/hour throughput capacity',
      'Conducted regular client calls to guide plan sponsors through implementation steps, address questions, and provide clear timelines for successful plan launch',
    ],
    tags: ['Python', 'Algorithm Design', 'Client Relations', 'Process Automation'],
  },
  {
    title: 'Bulk Fuel Operations Specialist',
    company: 'United States Marine Corps',
    location: 'Various Locations',
    period: 'May 2020 - May 2024',
    type: 'Logistics & Operations Analytics',
    description: 'Managed large-scale fuel logistics operations with emphasis on data accuracy, quality assurance, and performance tracking systems.',
    achievements: [
      'Managed inventory tracking and accountability for up to 1 million gallons of fuel, ensuring accurate data logging and reporting across multiple systems',
      'Conducted quality assurance testing on petroleum products, analyzing samples for contamination, temperature variance, and API compliance',
      'Maintained and updated training records database for 50+ personnel, ensuring data accuracy and regulatory compliance for mission readiness',
      'Developed and implemented performance tracking systems, providing data-driven counseling and corrective action plans',
    ],
    tags: ['Logistics', 'Data Management', 'Quality Assurance', 'Team Leadership'],
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
