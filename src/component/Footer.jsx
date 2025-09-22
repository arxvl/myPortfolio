import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-3 px-4 bg-card relative mt-20 pt-8 flex flex-wrap justify-between">
            {" "}
            <p className="font-source-code">
                {" "}
                &copy; {new Date().getFullYear()} Ankcris Letada. All rights reserved.
            </p>
            
            <a href="#home" className="p-3 mr-15 rounded-full bg-primary text-white transition-colors">
                <ArrowUp size={20}/>
            </a>
        </footer>
    );
}