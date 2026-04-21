// import Header from "@/components/header.js";
// import Typewriter from "@/components/typewriter.js";
// import HoverButton from "@/components/hoverbutton.js";
// import ProjectButton from "@/components/projectbutton.js";
// import GitHubButton from "@/components/githubbutton.js";

// const welcomeParagraph = `Hello and welcome to my portfolio. I am a second year Computer Engineering student at McMaster University. 
// My primary interests in ECE are in embedded systems, both low and high level programming, and PCB design, to name a few. I also
// enjoy programming, mostly backend work, but I am also able to do frontend. My projects, skillset, and relevant courses are outlined below and I hope to showcase some of my skills here.`

// const skills = [
//     { iconPath: "/icons/pythonicon.png", text: "Python"},
//     { iconPath: "/icons/arduinoicon.png", text: "Arduino"},
//     { iconPath: "/icons/autodeskicon.png", text: "Autodesk Inventor"},
//     { iconPath: "/icons/kicadicon.png", text: "KiCad"},
//     { iconPath: "/icons/luauicon.png", text: "Luau"},
//     { iconPath: "/icons/javaicon.png", text: "Java"},
//     { iconPath: "/icons/nexticon.png", text: "Next.js and JavaScript"},
//     { iconPath: "/icons/tailwindicon.png", text: "Tailwind CSS"},
//     { iconPath: "/icons/cppicon.png", text: "C++"}
// ];

// const courses = [
//     "COMPENG 2DI4 - Logic Design",
//     "COMPENG 2DX3 - Microprocessor Systems Project",
//     "COMPENG 2SH4 - Principles of Programming",
//     "COMPENG 2SI3 - Data Structures and Algorithms",
//     "ELECENG 2CI4 - Introduction to Electrical Engineering",
//     "ELECENG 2CF3 - Circuits and Waves",
//     "ELECENG 2EI4 - Electronic Devices and Circuits I"
// ];

// export default function Home() {
//     return (
        
//         <div className = "max-w-3xl mx-auto px-4">

//             <Typewriter className = "text-5xl font-bold font-outfit pt-25 pb-0">Omar Arshad</Typewriter>
            
//             <p className = "font-outfit text-lg pt-10 pb-0">{welcomeParagraph}</p>

//             <Header className = "text-3xl font-bold font-outfit pt-10 pb-5">Skills and Technologies</Header>

//             <div className = "grid grid-cols-3 gap-6">
                
//                 {skills.map((skill, index) =>
//                 <HoverButton 
//                 key={index}
//                 iconPath = {skill.iconPath}
//                 text = {skill.text}
//                 textClassName = "text-2x1 font-bold font-outfit text-black"
//                 className = "mx-3">
//                 </HoverButton>

//                 )}
//             </div>

//             <div>
//                 <Header className = "text-3xl font-bold font-outfit pt-10 pb-5">Projects</Header>
//                 <ProjectButton 
//                 iconPath = "/icons/macropadicon.png" 
//                 text = "Macropad"
//                 textClassName = "text-2x1 font-bold font-outfit text-black"
//                 href = "/projects/macropad/">
//                 </ProjectButton>
//                 <div className = "p-3"></div>

//                 <ProjectButton 
//                 iconPath = "/icons/roblox.png" 
//                 text = "Game on ROBLOX Platform"
//                 textClassName = "text-2x1 font-bold font-outfit text-black"
//                 href = "/projects/roblox-game/">
//                 </ProjectButton>
//                 <div className = "p-3"></div>

//                 <ProjectButton 
//                 iconPath = "/icons/deltahacks.png" 
//                 text = "Deltahacks 2025: Gesture Controlled Passcode System"
//                 textClassName = "text-2x1 font-bold font-outfit text-black"
//                 href = "/projects/deltahacks-2025/">
//                 </ProjectButton>
//                 <div className = "p-3"></div>

//                 <ProjectButton 
//                 iconPath = "/icons/snakeicon.png" 
//                 text = "Terminal-Based Snake Game"
//                 textClassName = "text-2x1 font-bold font-outfit text-black"
//                 href = "/projects/snake-game/">
//                 </ProjectButton>

//             </div>

//             <Header className = "text-3xl font-bold font-outfit pt-10 pb-2">Relevant Courses</Header>
//             <div className="mt-2 p-5 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
//                 <ul className = "list-disc pl-5 space-y-1">
//                     {courses.map((course, index) => {
//                         return <li className = "font-outfit text-lg" key={index}>{course}</li>
//                     })}
//                 </ul>
//             </div>

//             <div className = "flex justify-center pt-10 pb-5">
//                  <GitHubButton iconPath = "/icons/github.png" alt="GitHub Icon" href="https://github.com/oarshad53/"></GitHubButton>
//             </div>

//         </div>
//     )
// }

import AuroraBackground from "@/components/AuroraBackground"
import SnowBackground from "@/components/SnowBackground"
import ThreeOrb from "@/components/ThreeOrb"
import ProjectButton from "@/components/projectbutton.js";

export default function Home() {
  return (
    <div className="text-white">

      {/*main profile*/}
      <section className="relative h-screen overflow-hidden">

        <AuroraBackground />
        <SnowBackground />

        <div className="relative z-30 flex h-full items-center px-10 lg:px-24">

          {/* LEFT: IDENTITY */}
          <div className="w-1/2">

            <h1 className="text-6xl font-bold leading-tight">
              Omar Arshad
            </h1>

            <p className="mt-6 text-lg opacity-80 max-w-md leading-relaxed">
              Hello and welcome to my portfolio. I am a third year Computer Engineering student at McMaster University. 
                My primary interests within ECE are in embedded systems, firmware, and PCB design, to name a few.  My projects and skillset are outlined below and I hope to demonstrate my abilities here!
            </p>

            <div className="mt-6 text-sm opacity-60">
              Embedded Systems • PCB Design • Hardware
            </div>

          </div>

          {/* RIGHT: 3D ORB */}
          <div className="w-1/2 flex justify-center">
            <div className="w-[420px] h-[420px]">
              <ThreeOrb />
            </div>
          </div>

        </div>

        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-20" />
      </section>

{/* SKILLS */}
<section className="bg-black px-10 lg:px-24 py-20">

  <h2 className="text-3xl font-bold mb-8 text-white">
    Skills & Technologies
  </h2>

  <div className="grid grid-cols-3 gap-5">

    {[
      { icon: "/icons/pythonicon.png", text: "Python" },
      { icon: "/icons/arduinoicon.png", text: "Arduino" },
      { icon: "/icons/autodeskicon.png", text: "Autodesk Inventor" },

      { icon: "/icons/kicadicon.png", text: "KiCad" },
      { icon: "/icons/luauicon.png", text: "Luau" },
      { icon: "/icons/javaicon.png", text: "Java" },

      { icon: "/icons/nexticon.png", text: "Next.js" },
      { icon: "/icons/tailwindicon.png", text: "Tailwind CSS" },
      { icon: "/icons/cppicon.png", text: "C++" }
    ].map((skill, i) => (
      <div
        key={i}
        className="
          flex items-center gap-4 p-5 rounded-xl
          bg-white/5 border border-white/10 backdrop-blur-md

          hover:bg-white/10 hover:scale-[1.03]
          transition duration-200 cursor-pointer

          /* ✨ neon underglow */
          hover:shadow-[0_0_25px_rgba(168,85,247,0.25),0_0_45px_rgba(59,130,246,0.12)]
        "
      >
        {/* 🧊 fixed icon box (prevents stretching but keeps size consistent) */}
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            src={skill.icon}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* cards*/}
        <span className="
          text-white font-semibold tracking-wide
          drop-shadow-[0_0_6px_rgba(168,85,247,0.35)]
        ">
          {skill.text}
        </span>

      </div>
    ))}

  </div>
</section>

      {/* PROJECTS  */}
<section className="bg-black px-10 lg:px-24 py-20">

  <h2 className="text-3xl font-bold mb-10 text-white">
    Projects
  </h2>

  <div className="space-y-3">

    <ProjectButton
      iconPath="/icons/macropadicon.png"
      text="Macropad"
      textClassName="text-lg font-bold text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]"
      className="
        bg-white/5 border border-white/10 backdrop-blur-md
        hover:bg-white/10
        hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]
        transition duration-200 rounded-xl
      "
      href="/projects/macropad/"
    />
    <div className = "p-0.005"></div>

    <ProjectButton
      iconPath="/icons/deltahacks.png"
      text="Deltahacks 2025: Gesture Controlled System"
      textClassName="text-lg font-bold text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.25)]"
      className="
        bg-white/5 border border-white/10 backdrop-blur-md
        hover:bg-white/10
        hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]
        transition duration-200 rounded-xl
      "
      href="/projects/deltahacks-2025/"
    />
    <div className = "p-0.005"></div>

    <ProjectButton
      iconPath="/icons/snakeicon.png"
      text="Terminal-Based Snake Game"
      textClassName="text-lg font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.18)]"
      className="
        bg-white/5 border border-white/10 backdrop-blur-md
        hover:bg-white/10
        hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]
        transition duration-200 rounded-xl
      "
      href="/projects/snake-game/"
    />

  </div>

</section>

      {/* GITHUB */}
      <section className="bg-black px-10 lg:px-24 py-20 flex justify-center">

        <a
          href="https://github.com/oarshad53/"
          target="_blank"
          className="
            px-7 py-1.5 rounded-full
            bg-purple-500/20 border border-purple-400/30
            hover:bg-purple-500/30 hover:scale-105
            hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
            transition duration-200
          "
        >
          View GitHub
        </a>

      </section>

    </div>
  )
}