import { ReactNode } from "react";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

const BentoGrid = ({ children, className = "" }: BentoGridProps) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-[980px] px-5 ${className}`}>
            {children}
        </div>
    );
};

export default BentoGrid;
