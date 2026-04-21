import Header from '@/components/header.js';
import Tag from '@/components/tag.js';

export const metadata = {
  title: "ROBLOX Game",
  description: "Using Lua",
};

export default function RobloxGamePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-white">

      <Header className="text-3xl font-bold pt-10 pb-3 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]">
        ROBLOX PvP Combat Game
      </Header>

      {/* TAGS */}
      <div className="flex flex-row flex-wrap gap-2 pb-6">

        <Tag
          bgClassName="bg-blue-500/20 backdrop-blur-md border border-blue-400/20"
          textClassName="text-blue-200"
        >
          Luau
        </Tag>

      </div>

      <p className="text-lg leading-relaxed text-white/80">
        A simple, yet fun multiplayer combat game built in Luau using the ROBLOX engine. Features dynamic player
        abilities, UI cooldown indicators, and a client-server combat architecture designed to reduce latency and exploitability.
      </p>

      <Header className="text-2xl font-bold pt-10 text-white/90 drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]">
        Key Features
      </Header>

      <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">

        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Designed and implemented a player-vs-player combat system with hit detection and state-based interactions (e.g., blocking, invulnerability)</li>
          <li>Created UI cooldown indicators tied to player abilities for clear visual feedback</li>
          <li>Used RemoteEvents to delegate core combat logic to the server-side, minimizing the risk of client-side exploits</li>
          <li>Leveraged client-side scripts for visual and non-critical feedback to reduce server load</li>
          <li>Tuned ability cooldowns and damage timing to balance gameplay</li>
          <li>Implemented modular scripts for easier future scalability (e.g., ability expansion)</li>
        </ul>

      </div>

      <p className="text-lg leading-relaxed pt-6 pb-10 text-white/80">
        This project was a valuable opportunity to apply my programming skills in a new context. While my prior experience
        was primarily focused on data structures and foundational programming, working with the ROBLOX Engine allowed me to explore game development through a physics-based lens.
        I gained hands-on experience solving complex, real-time problems involving physics interactions and gameplay systems, which expanded both my technical versatility and
        understanding of applied programming.
      </p>

      <div className="flex justify-center mt-6">
        <video autoPlay muted loop controls preload="auto" className="rounded-xl border border-white/10 shadow-lg">
          <source src="/videos/roblox-project-video.mp4" type="video/mp4" />
          Your browser does not support playback of this video.
        </video>
      </div>

    </div>
  );
}