import Header from "@/components/header.js";
import Typewriter from "@/components/typewriter.js";
import HoverButton from "@/components/hoverbutton.js";
import ProjectButton from "@/components/projectbutton.js";
import GitHubButton from "@/components/githubbutton.js";

const welcomeParagraph = `Hello and welcome to my portfolio. I am a second year Computer Engineering student at McMaster University. 
My primary interests in ECE are in embedded systems, both low and high level programming, and PCB design, to name a few. I also
enjoy programming, mostly backend work, but I am also able to do frontend. My projects, skillset, and relevant courses are outlined below and I hope to showcase some of my skills here.`

const skills = [
    { iconPath: "/icons/pythonicon.png", text: "Python"},
    { iconPath: "/icons/arduinoicon.png", text: "Arduino"},
    { iconPath: "/icons/autodeskicon.png", text: "Autodesk Inventor"},
    { iconPath: "/icons/giticon.png", text: "Git"},
    { iconPath: "/icons/luauicon.png", text: "Luau"},
    { iconPath: "/icons/javaicon.png", text: "Java"},
    { iconPath: "/icons/nexticon.png", text: "Next.js and JavaScript"},
    { iconPath: "/icons/tailwindicon.png", text: "Tailwind CSS"},
    { iconPath: "/icons/cppicon.png", text: "C++"}
];

const courses = [
    "COMPENG 2DI4 - Logic Design",
    "COMPENG 2DX3 - Microprocessor Systems Project",
    "COMPENG 2SH4 - Principles of Programming",
    "COMPENG 2SI3 - Data Structures and Algorithms",
    "ELECENG 2CI4 - Introduction to Electrical Engineering",
    "ELECENG 2CF3 - Circuits and Waves",
    "ELECENG 2EI4 - Electronic Devices and Circuits I"
];

export default function Home() {
    return (
        
        <div className = "max-w-3xl mx-auto px-4">

            <Typewriter className = "text-5xl font-bold font-outfit pt-25 pb-0">Omar Arshad</Typewriter>
            
            <p className = "font-outfit text-lg pt-10 pb-0">{welcomeParagraph}</p>

            <Header className = "text-3xl font-bold font-outfit pt-10 pb-5">Skills and Technologies</Header>

            <div className = "grid grid-cols-3 gap-6">
                
                {skills.map((skill, index) =>
                <HoverButton 
                key={index}
                iconPath = {skill.iconPath}
                text = {skill.text}
                textClassName = "text-2x1 font-bold font-outfit text-black"
                className = "mx-3">
                </HoverButton>

                )}
            </div>

            <div>
                <Header className = "text-3xl font-bold font-outfit pt-10 pb-5">Projects</Header>
                <ProjectButton 
                iconPath = "/icons/roblox.png" 
                text = "Game on ROBLOX Platform"
                textClassName = "text-2x1 font-bold font-outfit text-black"
                href = "/projects/roblox-game/">
                </ProjectButton>
                <div className = "p-3"></div>

                <ProjectButton 
                iconPath = "/icons/deltahacks.png" 
                text = "Deltahacks 2025: Gesture Controlled Passcode System"
                textClassName = "text-2x1 font-bold font-outfit text-black"
                href = "/projects/deltahacks-2025/">
                </ProjectButton>

            </div>

            <Header className = "text-3xl font-bold font-outfit pt-10 pb-2">Relevant Courses</Header>
            <div className="mt-2 p-5 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
                <ul className = "list-disc pl-5 space-y-1">
                    {courses.map((course, index) => {
                        return <li className = "font-outfit text-lg" key={index}>{course}</li>
                    })}
                </ul>
            </div>

            <div className = "flex justify-center pt-10 pb-5">
                 <GitHubButton iconPath = "/icons/github.png" alt="GitHub Icon" href="https://github.com/oarshad53/"></GitHubButton>
            </div>

        </div>
    )
}