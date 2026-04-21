import Header from '@/components/header.js';
import Tag from '@/components/tag.js';

export const metadata = {
  title: "Custom Macropad",
  description: "Mechanical Keyboard and PCB Design Project",
};

export default function Macropad() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-white">

      <Header className="text-3xl font-bold pt-10 pb-3 text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.25)]">
        Custom 9-Key Macropad: PCB, Firmware, and Enclosure Design
      </Header>

      {/* TAGS */}
      <div className="flex flex-row pb-6 flex-wrap gap-2">

        <Tag
          bgClassName="bg-blue-500/20 backdrop-blur-md border border-blue-400/20"
          textClassName="text-blue-200"
        >
          KiCad
        </Tag>

        <Tag
          bgClassName="bg-purple-500/20 backdrop-blur-md border border-purple-400/20"
          textClassName="text-purple-200"
        >
          Python: KMK
        </Tag>

        <Tag
          bgClassName="bg-emerald-500/20 backdrop-blur-md border border-emerald-400/20"
          textClassName="text-emerald-200"
        >
          Autodesk Inventor
        </Tag>

      </div>

      <p className="text-lg leading-relaxed text-white/80">
        This project is a fully custom-designed 9-key mechanical macropad developed from the schematic level
        through PCB layout, firmware, and enclosure design. I designed the complete electrical schematic and
        routed the PCB to support direct pin scanning, USB connectivity, and an SSD1306 OLED display over I²C.
        The finished board runs KMK firmware and provides real-time feedback via the OLED, displaying the most
        recently pressed key.
      </p>

      <Header className="text-2xl font-bold pt-10 text-white/90 drop-shadow-[0_0_8px_rgba(168,85,247,0.15)]">
        Key Features
      </Header>

      <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">

        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Designed the full electrical schematic including switch inputs, microcontroller I/O, and I²C display connections</li>
          <li>Routed a custom PCB with attention to trace clearance, via placement, and manufacturability</li>
          <li>Implemented a direct-pin key scanning approach to simplify routing and firmware logic</li>
          <li>Integrated an SSD1306 OLED display on the PCB for live firmware-driven feedback</li>
          <li>Developed KMK firmware in Python to handle key scanning and dynamic display updates</li>
          <li>Designed a custom enclosure and switch plate in CAD and prepared it for 3D printing</li>
        </ul>

      </div>

      <p className="text-lg leading-relaxed pt-6 pb-10 text-white/80">
        This project strengthened my understanding of the full PCB design workflow, from translating functional
        requirements into a schematic to resolving routing constraints and validating designs with DRC checks.
        I also gained experience integrating firmware with custom hardware and coordinating mechanical and
        electrical constraints. Overall, the macropad design and assembly was a fun way to gain experience
        making a mini mechanical keyboard and I learned a lot about electronics design, manufacturing, and assembly.

        The videos below showcase the keyboard working, as well as an oscilloscope test I conducted to verify voltage
        levels when switching.
      </p>

      <div className="flex justify-center mt-6">
        <video autoPlay muted loop controls preload="auto" className="rounded-xl border border-white/10 shadow-lg">
          <source src="/videos/macropad-1.mp4" type="video/mp4" />
          Your browser does not support playback of this video.
        </video>
      </div>

      <div className="flex justify-center mt-6">
        <video autoPlay muted loop controls preload="auto" className="rounded-xl border border-white/10 shadow-lg">
          <source src="/videos/macropad-2.mp4" type="video/mp4" />
          Your browser does not support playback of this video.
        </video>
      </div>

      <div className="flex justify-center mt-6">
        <video autoPlay muted loop controls preload="auto" className="rounded-xl border border-white/10 shadow-lg">
          <source src="/videos/macropad-3.mp4" type="video/mp4" />
          Your browser does not support playback of this video.
        </video>
      </div>

    </div>
  );
}