import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from '@/lib/utils';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-2 px-4 relative bg-secondary mb-15">
            <div className="container mx-auto max-w-5xl mt-10">
                <h2 className="text-4xl md:text-5xl font-bold font-livvic mb-12 text-center">
                    Let's <span className="text-foreground-secondary">Connect</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-source-code">
                    I’d love to hear from you! Whether you have a question, an opportunity, or simply want to connect, feel free to reach out. I’ll do my best to respond as soon as possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-35 mt-5">
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold mb-6 font-lexend">Contact Information</h3>

                        <div className="space-y-8 font-source-code max-w-md mx-auto">
                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-card">
                                <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                <h4 className="font-medium">Email</h4>
                                    <p>ankcrisvl@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-card">
                                <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                <h4 className="font-medium">Phone</h4>
                                <p>+63 951 145 3764</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-card">
                                <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                <h4 className="font-medium">Location</h4>
                                <p>Legazpi City, Albay</p>
                                </div>
                            </div>
                        </div>

                        {/*Social Media Links */}
                        <div className="pt-8">
                            <h4 className="font-medium font-source-code mb-4">Find Me On Social Media</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" className="text-foreground-link transition-colors duration-300"><Facebook /></a>
                                <a href="#" className="text-foreground-link transition-colors duration-300"><Instagram /></a>
                                <a href="#" className="text-foreground-link transition-colors duration-300"><Linkedin /></a>
                            </div>
                        </div>
                    </div>

                    {/*Send a Message */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-10 font-lexend">Send a Message</h3>

                        <form className="space-y-6" target="_blank" action="https://formsubmit.co/lakusuhi@mailgolem.com" method="POST">
                            <div className="text-start">
                                <label htmlFor="name" className="font-source-code mb-4">Your Name</label>
                                <input type="text" id="name" name="name" required 
                                className="font-source-code w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 ring-foreground-secondary"
                                placeholder="John Doe"/>
                            </div>
                            <div className="text-start">
                                <label htmlFor="email" className="font-source-code mb-4">Email</label>
                                <input type="email" id="email" name="email" required 
                                className="font-source-code w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 ring-foreground-secondary"
                                placeholder="johndoe@gmail.com"/>
                            </div>
                            <div className="text-start">
                                <label htmlFor="message" className="font-source-code mb-4">Message</label>
                                <input type="message" id="message" name="message" required 
                                className="font-source-code w-full  px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 ring-foreground-secondary"
                                placeholder="Hello, I'd like to talk about..."/>
                            </div>

                            <button typeof="submit" className={cn("my-button w-full flex items-center justify-center gap-2 font-source-code",

                            )}>
                                Send Message
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}