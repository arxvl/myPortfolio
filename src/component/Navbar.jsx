import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#home" },
    {name: "About", href: "#about" },
    {name: "Skills", href: "#skills" },
    {name: "Projects", href: "#projects" },
    {name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="nav-container flex items-center justify-between">
                {/* My Name */}
                <a 
                    className="text-base font-bold flex items-center"
                    href="#home"
                >
                    <span className="text-glow text-primary-foreground font-livvic">ANKCRIS LETADA</span>
                </a>

                {/* Desktop Navigation */}
                <div className="text-sm hidden md:flex space-x-12 ml-auto font-lexend">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="shimmerUnderline text-foreground/80 transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn("md:hidden", isMenuOpen ? "menu-open" : "")}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Navigation Menu */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}>            
                    <div className="flex flex-col space-y-8 text-2xl text-center">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-foreground transition-colors duration-300 py-2"
                                onClick={handleNavClick}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};