import { CodeXml } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 -px4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold font-livvic mb-12 text-center">
                    About <span className="text-foreground-secondary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-35 mt-10">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold font-source-code">Front-End Developer | Future Full-Stack Developer</h3>
                        <p className="text-muted-foreground font-source-code">
                        I’m a 2nd-year Computer Science student and a passionate Front-End Developer who enjoys creating responsive, interactive, and user-friendly websites. 
                        I specialize in turning ideas into real, functional web experiences by building clean and modern interfaces, while constantly learning new tools and frameworks to refine my craft.
                        </p>
                        <p className="text-muted-foreground font-source-code">
                        Looking ahead, my goal is to expand my expertise into back-end technologies and grow into a Full-Stack Developer, combining a strong foundation in front-end design with broader development skills to build complete and efficient applications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center font-lexend">
                            <a href="#contact" className="my-button">
                                {" "}
                                Let's Connect
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 font-source-code">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-icon-bg">
                                    <CodeXml className="h-6 w-6 text-foreground-secondary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Building responsive and dynamic websites that bring ideas to life through clean code and modern practices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-icon-bg">
                                    <CodeXml className="h-6 w-6 text-foreground-secondary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Designing intuitive and visually appealing interfaces that prioritize user experience and accessibility.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-icon-bg">
                                    <CodeXml className="h-6 w-6 text-foreground-secondary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Future Full-Stack Growth</h4>
                                    <p className="text-muted-foreground">Expanding my skills beyond front-end development to work with back-end technologies and create complete applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};