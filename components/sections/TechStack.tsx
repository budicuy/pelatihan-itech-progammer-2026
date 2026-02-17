import Image from "next/image";
import { HiOutlineDatabase } from "react-icons/hi";
import {
  SiGithub,
  SiGooglecloud,
  SiNextdotjs,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";

export default function TechStack() {
  const techs = [
    { name: "Google IDX", icon: <SiGooglecloud className="text-2xl" /> },
    {
      name: "Antigravity",
      logo: "/antigravittlogo.png",
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-2xl" /> },
    {
      name: "Neon DB",
      icon: <HiOutlineDatabase className="text-2xl" />,
      className: "text-green-400",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-2xl" />,
      className: "text-green-600",
    },
    { name: "Vercel", icon: <SiVercel className="text-2xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-2xl" /> },
  ];

  return (
    <section className="py-10 border-y border-border-dark bg-[#0f0c13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest">
          Powered by Modern Stack
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className={`flex items-center gap-2 text-xl font-bold ${
                tech.className || "text-white"
              }`}
            >
              {tech.logo ? (
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              ) : (
                tech.icon
              )}
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
