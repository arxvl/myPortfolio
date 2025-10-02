import { ArrowDown } from "lucide-react"

export const HomeSection = () => {
return (
<section id="home" className="min-h-screen grid grid-cols-[2fr_1fr] gap-2">
    <div className="my-50 mt-60 ml-25 p-10 h-auto text-left">
        <div>
            <p className="mb-3 text-xl font-lexend">
                <span className="text-2xl">HELLO, </span>
                <span>I am Ankcris Letada</span>
            </p>
            <p className="text-6xl font-extrabold mb-3 font-livvic">
                <span className="text-foreground-secondary">Front-End</span> Developer</p>
            <p className="mr-50 text-xl font-source-code mb-6">
                I craft websites that are responsive, accessible, and visually appealing. 
                Every project I take on aims to balance usability with design excellence.
            </p>
        </div>   
        <div className="flex gap-4">
            <button className="my-button font-lexend">
                <a href="#projects">View my Projects</a>
            </button>
            <button className="font-lexend px-6 py-2 rounded-full border border-foreground text-primary hover:bg-button-hover transition-colors duration-300">
                <a href="src\assets\Ankcris_Letada_CV.pdf" download="Ankcris_Letada_CV.pdf">Download CV</a>
            </button>
        </div>
    </div>
    <div className="my-30 mt-30 mr-20 p-5 h-auto flex justify-center items-center">
        {/* Picture will go here */}
        <img src="/images/portfolio_pfp.png" alt="About Me" className="w-90 h-120"/>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="font-lexend text-sm">Scroll</span>
        <ArrowDown className="h-5 w-5 text-foreground" />
    </div>
</section>
)
}