import { useState } from "react";
import { cn } from "@/lib/utils";

/*Array of my skills*/
const skills = [
//Frontend
{ name: "HTML5", level: 95, category: "frontend" },
{ name: "CSS3", level: 95, category: "frontend" },
{ name: "JavaScript", level: 90, category: "frontend" },
{ name: "Tailwind CSS", level: 85, category: "frontend" },
{ name: "React", level: 75, category: "frontend" },

//Backend
{ name: "Node.js", level: 75, category: "backend" },
{ name: "Python", level: 70, category: "backend" },
{ name: "Java", level: 40, category: "backend" },
{ name: "C", level: 90, category: "backend" },

//Tools
{ name: "Git/Github", level: 70, category: "tools" },
{ name: "Figma", level: 55, category: "tools" },
{ name: "VS Code", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
const [activeCategory, setActiveCategory] = useState("all");

const filteredSkills =
activeCategory === "all"
    ? [...skills].sort((a, b) => a.name.localeCompare(b.name)) // sorted alphabetically
    : skills.filter((skill) => skill.category === activeCategory);

return (
<section id="skills" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl mt-10">
    <h2 className="text-4xl md:text-5xl font-bold font-livvic mb-12 text-center">
        My{" "}
        <span className="text-foreground-secondary">
        Skills
        </span>
    </h2>

    {/* Wrapper for category bar + skills */}
    <div className="space-y-12 mx-35">
        {/* Category Bar */}
        <div className="flex flex-wrap justify-center gap-4 border-b border-muted-foreground pb-6">
        {categories.map((category, key) => (
            <button
            key={key}
            onClick={() => setActiveCategory(category)}
            className={cn(
                "cursor-pointer px-5 py-2 rounded-full transition-colors duration-300 capitalize font-lexend",
                activeCategory === category
                ? "bg-background text-foreground"
                : "bg-card text-foreground hover:bg-primary/20"
            )}
            >
            {category}
            </button>
        ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-source-code">
        {filteredSkills.map((skill, key) => (
            <div
            key={key}
            className="bg-card p-6 rounded-lg shadow-sm card-hover"
            >
            <div className="text-left mb-4">
                <h3 className="font-semibold text-primary text-sm">
                {skill.name}
                </h3>
            </div>
            <div className="w-full bg-background h-2 rounded-full overflow-hidden">
                <div
                className="bg-blue-900 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                style={{ width: skill.level + "%" }}
                />
            </div>
            <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                {skill.level}%
                </span>
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
</section>
);
};
