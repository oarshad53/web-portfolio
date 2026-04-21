import Header from '@/components/header.js';
import Tag from '@/components/tag.js';

export const metadata = {
  title: "Deltahacks 2025",
  description: "Hackathon Project",
};

export default function RobloxGamePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-white">

      <Header className="text-3xl font-bold pt-10 pb-3 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]">
        Deltahacks 2025: Gesture Controlled Passcode System
      </Header>

      {/* TAGS */}
      <div className="flex flex-row flex-wrap gap-2 pb-6">

        <Tag bgClassName="bg-yellow-500/20 backdrop-blur-md border border-yellow-400/20" textClassName="text-yellow-200">
          JavaScript
        </Tag>

        <Tag bgClassName="bg-orange-500/20 backdrop-blur-md border border-orange-400/20" textClassName="text-orange-200">
          MongoDB
        </Tag>

        <Tag bgClassName="bg-blue-500/20 backdrop-blur-md border border-blue-400/20" textClassName="text-blue-200">
          C++
        </Tag>

        <Tag bgClassName="bg-green-500/20 backdrop-blur-md border border-green-400/20" textClassName="text-green-200">
          Python
        </Tag>

        <Tag bgClassName="bg-teal-500/20 backdrop-blur-md border border-teal-400/20" textClassName="text-teal-200">
          Arduino
        </Tag>

      </div>

      <p className="text-lg leading-relaxed text-white/80">
        Air-Key is a gesture-based password entry system built using the Ultraleap (Leap Motion) Controller. It detects hand poses and swipe gestures
        to allow users to “type” a password in mid-air, enabling touchless and intuitive authentication. The system achieves over 95% accuracy in controlled tests
        and includes a connected website for logging and setting passwords.
      </p>

      <Header className="text-2xl font-bold pt-10 text-white/90 drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]">
        Key Features
      </Header>

      <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">

        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Used Ultraleap API in Python to detect number of fingers extended and interpret hand swiping gestures</li>
          <li>Mapped gesture sequences to numeric passwords with real-time tracking and feedback</li>
          <li>Developed a full web interface in JavaScript/HTML/CSS for users to log password attempts and configure entries</li>
          <li>Integrated MongoDB to validate password entries and store user access history</li>
          <li>Connected Arduino to display database responses on an LCD for physical feedback</li>
          <li>Achieved 95% accuracy in gesture recognition under test conditions</li>
        </ul>

      </div>

      <p className="text-lg leading-relaxed pt-6 pb-10 text-white/80">
        Air-Key allowed me to bridge physical interaction and software by integrating hardware, gesture recognition, and web systems into a unified tool.
        I learned how to work with real-time sensor input, connect it to backend authentication logic, and deliver responsive feedback to both web and physical displays.
        The project strengthened my understanding of full-stack development, data handling, and human-computer interaction.
      </p>

      <div className="flex justify-center mt-6">
        <video autoPlay muted loop controls preload="auto" className="rounded-xl border border-white/10 shadow-lg">
          <source src="/videos/dh25project.mov" type="video/mp4" />
          Your browser does not support playback of this video.
        </video>
      </div>

    </div>
  );
}