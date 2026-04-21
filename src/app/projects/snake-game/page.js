import Header from '@/components/header.js';
import Tag from '@/components/tag.js';

export const metadata = {
  title: "Snake Game",
  description: "Using C++",
};

export default function SnakeGamePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-white">

      <Header className="text-3xl font-bold pt-10 pb-3 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]">
        Terminal-based Snake Game
      </Header>

      {/* TAGS */}
      <div className="flex flex-row flex-wrap gap-2 pb-6">

        <Tag
          bgClassName="bg-blue-500/20 backdrop-blur-md border border-blue-400/20"
          textClassName="text-blue-200"
        >
          C++
        </Tag>

        <Tag
          bgClassName="bg-blue-500/20 backdrop-blur-md border border-blue-400/20"
          textClassName="text-blue-200"
        >
          Object-Oriented Design
        </Tag>

      </div>

      <p className="text-lg leading-relaxed text-white/80">
        A terminal-based Snake game implemented in C++ using object-oriented design principles.
        The game features real-time keyboard input, collision detection, dynamic food generation, and a
        fully modular class structure separating gameplay, mechanics, player movement, and spawning logic.
      </p>

      <Header className="text-2xl font-bold pt-10 text-white/90 drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]">
        Key Features
      </Header>

      <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">

        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Implemented an object-oriented architecture with separate player, game mechanics, and object position classes</li>
          <li>Created a custom array list class to simplify and reliably implement other classes that used the list as a composition</li>
          <li>Wrote clear inline comments to succinctly explain class methods, maintain readability, and follow standard C++ naming conventions</li>
          <li>Ensured code had no memory leaks using Valgrind</li>
        </ul>

      </div>

      <p className="text-lg leading-relaxed pt-6 pb-10 text-white/80">
        This project helped me strengthen my C++ fundamentals by applying OOP,
        state-based logic, and structured game-loop design. Implementing collision checks, coordinate updates, and dynamic snake
        growth improved my low-level problem-solving and gave me practical experience building a complete system from simple components.
      </p>

    </div>
  );
}