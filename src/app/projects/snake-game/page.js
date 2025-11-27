import Header from '@/components/header.js';
import Tag from '@/components/tag.js';

export const metadata = {
  title: "Snake Game",
  description: "Using C++",
};

export default function SnakeGamePage() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header className="text-3xl font-bold font-outfit pt-10 pb-3">Terminal-based Snake Game</Header>

      <div className = "flex flex-row pb-5">
        {/*Project Tags*/}
        <Tag bgClassName = "bg-blue-500/20 backdrop-blur-md me-5" textClassName = "text-blue-800">C++</Tag>
        <Tag bgClassName = "bg-blue-500/20 backdrop-blur-md me-5" textClassName = "text-blue-800">Object-Oriented Design</Tag>
      </div>

      <p className="font-outfit text-lg">
          A terminal-based Snake game implemented in C++ using object-oriented design principles.
          The game features real-time keyboard input, collision detection, dynamic food generation, and a
          fully modular class structure separating gameplay, mechanics, player movement, and spawning logic.
      </p>

      <Header className = "text-2xl font-bold font-outfit pt-10 ">Key Features</Header>

      <div className="mt-2 p-5 bg-white/30 backdrop-blur-md rounded-xl shadow-lg ">
                <ul className = "font-outfit list-disc pl-5 space-y-1 text-md">
                    <li>Implemented an object-oriented architecture with separate player, game mechanics, and object position classes</li>
                    <li>Created a custom array list class to simplify and reliably implement other classes that used the list as a composition</li>
                    <li>Wrote clear inline comments to succinctly explain class methods, maintain readability, and follow standard C++ naming conventions</li>
                    <li>Ensured code had no memory leaks using Valgrind</li>
                </ul>
      </div>

      <p className = "font-outfit text-lg pt-5 pb-5">This project helped me strengthen my C++ fundamentals by applying OOP, 
        state-based logic, and structured game-loop design. Implementing collision checks, coordinate updates, and dynamic snake 
        growth improved my low-level problem-solving and gave me practical experience building a complete system from simple components.
      </p>

      <video autoPlay muted loop width="w-fill" height="240" controls preload="auto">
        <source src="/videos/roblox-project-video.mp4" type="video/mp4" />

        Your browser does not support playback of this video.
      </video>

    </div>
  );
}