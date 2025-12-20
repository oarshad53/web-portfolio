import Header from '@/components/header.js';
import Tag from '@/components/tag.js';

export const metadata = {
  title: "Custom Macropad",
  description: "Mechanical Keyboard and PCB Design Project",
};

export default function Macropad() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header className="text-3xl font-bold font-outfit pt-10 pb-3">Custom 9-Key Macropad: PCB, Firmware, and Enclosure Design</Header>

      <div className = "flex flex-row pb-5">
        {/*Project Tags*/}
        <Tag bgClassName="bg-blue-400/30 backdrop-blur-md me-3" textClassName="text-blue-900">KiCad</Tag>
        <Tag bgClassName="bg-purple-400/30 backdrop-blur-md me-3" textClassName="text-purple-900">Python: KMK</Tag>
        <Tag bgClassName="bg-green-400/30 backdrop-blur-md me-3" textClassName="text-green-900">Autodesk Inventor</Tag>
      </div>

      <p className="font-outfit text-lg">
        This project is a fully custom-designed 9-key mechanical macropad developed from the schematic level
        through PCB layout, firmware, and enclosure design. I designed the complete electrical schematic and
        routed the PCB to support direct pin scanning, USB connectivity, and an SSD1306 OLED display over I²C.
        The finished board runs KMK firmware and provides real-time feedback via the OLED, displaying the most
        recently pressed key.
      </p>

      <Header className = "text-2xl font-bold font-outfit pt-10 ">Key Features</Header>

      <div className="mt-2 p-5 bg-white/30 backdrop-blur-md rounded-xl shadow-lg ">
                <ul className = "font-outfit list-disc pl-5 space-y-1 text-md">
                    <li>Designed the full electrical schematic including switch inputs, microcontroller I/O, and I²C display connections</li>
                    <li>Routed a custom PCB with attention to trace clearance, via placement, and manufacturability</li>
                    <li>Implemented a direct-pin key scanning approach to simplify routing and firmware logic</li>
                    <li>Integrated an SSD1306 OLED display on the PCB for live firmware-driven feedback</li>
                    <li>Developed KMK firmware in Python to handle key scanning and dynamic display updates</li>
                    <li>Designed a custom enclosure and switch plate in CAD and prepared it for 3D printing</li>
                </ul>
      </div>

      <p className = "font-outfit text-lg pt-5 pb-5">
        This project strengthened my understanding of the full PCB design workflow, from translating functional
        requirements into a schematic to resolving routing constraints and validating designs with DRC checks.
        I also gained experience integrating firmware with custom hardware and coordinating mechanical and
        electrical constraints. Overall, the macropad design and assembly was a fun way to gain some experience
        making a mini mechanical keyboard and I certainly learned a lot about electronics design, manufacturing, and assembly.
      </p>

      {/*<div className = "flex justify-center">
      <video autoPlay muted loop width="w-fill" height="240" controls preload="auto">
        <source src="/videos/macropad.mov" type="video/mp4" />

        Your browser does not support playback of this video.
      </video>
      </div>*/}

    </div>
  );
}
