import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

/*Array of my Projects */
const projects = [
    {
        id: 1,
        title: "MOODify App",
        description: "Emotion-Driven UI Mood Tracker App",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "JavaScript"],
        demoURL: "https://moodify-app-flax.vercel.app/",
        github: "https://github.com/arxvl/moodify-app.git",
    },
    {
        id: 2,
        title: "project 2",
        description: "project description",
        image: "/projects/project2.png",
        tags: ["React", "TailwindCSS"],
        demoURL: "#",
        github: "#",
    },
    {
        id: 3,
        title: "project 3",
        description: "project description",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS"],
        demoURL: "#",
        github: "#",
    },
];


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl mt-10">
                <h2 className="text-4xl md:text-5xl font-bold font-livvic mb-12 text-center">
                    My{" "}
                    <span className="text-foreground-secondary">
                    Projects
                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-source-code">
                    Here are a few of my recent projects, each designed with a strong focus on detail, efficiency, and delivering a smooth user experience.
                </p>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-35">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "/>
                            </div>
                            <div className="p-6 ">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-icon-bg text-foreground font-source-code">
                                            {tag}
                                        </span>
                                    ))}
                            </div>
                            <h3 className="text-base font-semibold mb-1 font-lexend">{project.title}</h3>
                            <p className="text-sm text-muted-foreground mb-5 font-source-code">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-5">
                                    <a href={project.demoURL} className="text-foreground-link transition-colors duration-300">
                                        <ExternalLink size={22}/>
                                    </a>
                                    <a href={project.github} className="text-foreground-link transition-colors duration-300">
                                        <Github size={22}/>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/arxvl" className="my-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}