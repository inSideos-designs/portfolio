'use client';

import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Advanced SQL (CTEs, window fns)', level: 95 },
      { name: 'TypeScript / JavaScript', level: 85 },
      { name: 'R / VBA', level: 75 },
    ],
  },
  {
    title: 'ML & AI',
    skills: [
      { name: 'XGBoost / Scikit-learn', level: 90 },
      { name: 'TensorFlow / PyTorch', level: 80 },
      { name: 'NLP & Document Parsing', level: 85 },
      { name: 'Local LLM Inference (Ollama)', level: 85 },
    ],
  },
  {
    title: 'AI-Driven Development',
    skills: [
      { name: 'Claude Code / Cursor', level: 95 },
      { name: 'Agentic Coding Workflows', level: 90 },
      { name: 'LLM Evaluation Harnesses', level: 85 },
      { name: 'Spec / Test-Driven AI', level: 85 },
    ],
  },
  {
    title: 'Data Engineering',
    skills: [
      { name: 'Dagster / Airflow', level: 90 },
      { name: 'FastAPI / Flask / Next.js', level: 85 },
      { name: 'ETL/ELT + Data Modeling', level: 95 },
      { name: 'pytest / Validation', level: 85 },
    ],
  },
  {
    title: 'Databases & BI',
    skills: [
      { name: 'BigQuery / SQL Server', level: 90 },
      { name: 'Postgres / Redshift', level: 85 },
      { name: 'Power BI (DAX)', level: 90 },
      { name: 'Tableau / Looker', level: 80 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'GCP (BigQuery, Cloud Run, WIF)', level: 85 },
      { name: 'AWS (S3, Lambda, Redshift)', level: 80 },
      { name: 'Docker / Kubernetes', level: 80 },
      { name: 'GitHub Actions / Jenkins', level: 80 },
    ],
  },
];

const tools = [
  'Python', 'SQL', 'TypeScript', 'R', 'VBA', 'Rust',
  'XGBoost', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Ollama', 'OpenAI API',
  'Claude Code', 'Cursor', 'NetworkX', 'Markov Chains',
  'Dagster', 'Airflow', 'FastAPI', 'Flask', 'Next.js', 'pytest',
  'BigQuery', 'SQL Server', 'PostgreSQL', 'Redshift', 'MongoDB', 'SpatiaLite', 'Trino',
  'Power BI', 'Tableau', 'Looker', 'Matplotlib', 'Seaborn',
  'GCP', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Gurobi',
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-text-primary">{name}</span>
        <span className="text-sm text-text-secondary">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-bar-fill ${animate ? 'animate' : ''}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateSkills(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[980px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 animate-fade-in-scale">
            Technical <span className="text-accent-blue">Skills</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto animate-fade-in-scale [animation-delay:100ms] opacity-0">
            A comprehensive toolkit spanning data analytics, machine learning,
            and cloud technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 animate-fade-in-scale"
              style={{ animationDelay: `${(index + 2) * 100}ms`, opacity: 0 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-text-primary">{category.title}</h3>
              {category.skills.map((skill, idx) => (
                <SkillBar
                  key={idx}
                  name={skill.name}
                  level={skill.level}
                  animate={animateSkills}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Tools & <span className="text-accent-blue">Technologies</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 glass-card text-sm text-text-secondary hover:text-text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">
            <span className="text-accent-blue">Education</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-6 card-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary">M.S. Computational Data Analytics</h3>
                  <p className="text-text-secondary text-sm">Georgia Tech</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-blue/20 text-accent-blue">
                  In Progress
                </span>
              </div>
            </div>
            <div className="glass-card p-6 card-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary">B.S. Business Management</h3>
                  <p className="text-text-secondary text-sm">Stockton University</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                  2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
