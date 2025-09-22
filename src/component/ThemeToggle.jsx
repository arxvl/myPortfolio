import { Moon, Sun } from "lucide-react"; 
import { useState, useEffect } from "react"; 
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "light") {
            setIsDarkMode(true);
            document.documentElement.classList.add("light");
        } else {
            localStorage.setItem("theme", "dark");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("light"); 
            localStorage.setItem("theme", "dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("light"); 
            localStorage.setItem("theme", "light");
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-6 right-6 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        > 
            {isDarkMode ? (
            <Moon className="h-6 w-6 text-blue-900"/> 
            ) : (
            <Sun className = "h-6 w-6 text-yellow-500" />  
            )} 
        </button>
    );
};