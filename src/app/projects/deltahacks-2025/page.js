import Header from '@/components/header.js';
import Tag from '@/components/tag.js';

export const metadata = {
  title: "Deltahacks 2025",
  description: "Hackathon Project",
};

export default function RobloxGamePage() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header className="text-3xl font-bold font-outfit pt-10 pb-3">Deltahacks 2025: Gesture Controlled Passcode System</Header>

      <div className = "flex flex-row pb-5">
        {/*Project Tags*/}
        <Tag bgClassName="bg-yellow-300/30 backdrop-blur-md me-3" textClassName="text-yellow-800">JavaScript</Tag>
        <Tag bgClassName="bg-orange-400/30 backdrop-blur-md me-3" textClassName="text-orange-800">MongoDB</Tag>
        <Tag bgClassName="bg-blue-400/30 backdrop-blur-md me-3" textClassName="text-blue-900">C++</Tag>
        <Tag bgClassName="bg-green-400/30 backdrop-blur-md me-3" textClassName="text-green-900">Python</Tag>
        <Tag bgClassName="bg-teal-400/30 backdrop-blur-md me-3" textClassName="text-teal-900">Arduino</Tag>
      </div>

      <p className="font-outfit text-lg">
        Air-Key is a gesture-based password entry system built using the Ultraleap (Leap Motion) Controller. It detects hand poses and swipe gestures
        to allow users to “type” a password in mid-air, enabling touchless and intuitive authentication. The system achieves over 95% accuracy in controlled tests
        and includes a connected website for logging and setting passwords.
      </p>

      <Header className = "text-2xl font-bold font-outfit pt-10 ">Key Features</Header>

      <div className="mt-2 p-5 bg-white/30 backdrop-blur-md rounded-xl shadow-lg ">
                <ul className = "font-outfit list-disc pl-5 space-y-1 text-md">
                    <li>Used Ultraleap API in Python to detect number of fingers extended and interpret hand swiping gestures</li>
                    <li>Mapped gesture sequences to numeric passwords with real-time tracking and feedback</li>
                    <li>Developed a full web interface in JavaScript/HTML/CSS for users to log password attempts and configure entries</li>
                    <li>Integrated MongoDB to validate password entries and store user access history</li>
                    <li>Connected Arduino to display database responses on an LCD for physical feedback</li>
                    <li>Achieved 95% accuracy in gesture recognition under test conditions</li>
                </ul>
      </div>

      <p className = "font-outfit text-lg pt-5 pb-5">Air-Key allowed me to bridge physical interaction and software by integrating hardware, gesture recognition, and web systems into a unified tool.
        I learned how to work with real-time sensor input, connect it to backend authentication logic, and deliver responsive feedback to both web and physical displays.
        The project strengthened my understanding of full-stack development, data handling, and human-computer interaction.
      </p>

      <div className = "flex justify-center">
      <video autoPlay muted loop width="w-fill" height="240" controls preload="auto">
        <source src="/videos/dh25project.mov" type="video/mp4" />

        Your browser does not support playback of this video.
      </video>
      </div>

    </div>
  );
}