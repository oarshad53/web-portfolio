import Header from '@/components/header.js';
import Tag from '@/components/tag.js';

export const metadata = {
  title: "ROBLOX Game",
  description: "Using Lua",
};

export default function RobloxGamePage() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header className="text-3xl font-bold font-outfit pt-10 pb-3">ROBLOX PvP Combat Game</Header>

      <div className = "flex flex-row pb-5">
        {/*Project Tags*/}
        <Tag bgClassName = "bg-blue-500/20 backdrop-blur-md me-5" textClassName = "text-blue-800">Luau</Tag>
      </div>

      <p className="font-outfit text-lg">
          A simple, yet fun multiplayer combat game built in Luau using the ROBLOX engine. Features dynamic player
         abilities, UI cooldown indicators, and a client-server combat architecture designed to reduce latency and exploitability.
      </p>

      <Header className = "text-2xl font-bold font-outfit pt-10 ">Key Features</Header>

      <div className="mt-2 p-5 bg-white/30 backdrop-blur-md rounded-xl shadow-lg ">
                <ul className = "font-outfit list-disc pl-5 space-y-1 text-md">
                    <li>Designed and implemented a player-vs-player combat system with hit detection and state-based interactions (e.g., blocking, invulnerability)</li>
                    <li>Created UI cooldown indicators tied to player abilities for clear visual feedback</li>
                    <li>Used RemoteEvents to delegate core combat logic to the server-side, minimizing the risk of client-side exploits</li>
                    <li>Leveraged client-side scripts for visual and non-critical feedback to reduce server load</li>
                    <li>Tuned ability cooldowns and damage timing to balance gameplay</li>
                    <li>Implemented modular scripts for easier future scalability (e.g., ability expansion)</li>
                </ul>
      </div>

      <p className = "font-outfit text-lg pt-5 pb-5">This project was a valuable opportunity to apply my programming skills in a new context. While my prior experience
         was primarily focused on data structures and foundational programming, working with the ROBLOX Engine allowed me to explore game development through a physics-based lens. 
         I gained hands-on experience solving complex, real-time problems involving physics interactions and gameplay systems, which expanded both my technical versatility and 
         understanding of applied programming.
      </p>

      <video autoPlay muted loop width="w-fill" height="240" controls preload="auto">
        <source src="/videos/roblox-project-video.mp4" type="video/mp4" />

        Your browser does not support playback of this video.
      </video>

    </div>
  );
}