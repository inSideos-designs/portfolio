"use client";

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    imageUrl?: string;
}

const ProjectCard = ({
    title,
    category,
    description,
    imageUrl,
}: ProjectCardProps) => {
    return (
        <div className="group glass-card overflow-hidden card-hover">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden bg-bg-secondary">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="h-full w-full bg-gradient-to-br from-accent-blue/20 to-purple-500/20 flex items-center justify-center">
                        <svg className="w-12 h-12 text-accent-blue/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-accent-blue mb-2">
                    {category}
                </p>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
