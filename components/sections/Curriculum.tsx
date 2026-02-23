import {
  MdBolt,
  MdBugReport,
  MdConstruction,
  MdDesignServices,
  MdRocketLaunch,
  MdTerminal,
} from "react-icons/md";

export default function Curriculum() {
  const curriculumItems = [
    {
      icon: <MdConstruction className="text-2xl" />,
      title: "Tools AI Gratis",
      description:
        "Eksplorasi tools gratis yang powerful untuk coding tanpa biaya langganan.",
      colorClass: "bg-blue-500/10 text-blue-400",
    },
    {
      icon: <MdDesignServices className="text-2xl" />,
      title: "Design to Code",
      description:
        "Mengubah prototype UI menjadi kode fungsional dalam hitungan menit.",
      colorClass: "bg-pink-500/10 text-pink-400",
    },
    {
      icon: <MdBolt className="text-2xl" />,
      title: "Vibe Coding",
      description:
        "Technic coding flow state. Fokus pada logika bisnis, biarkan AI menangani syntax.",
      colorClass: "bg-accent/10 text-accent",
      extraClass: "border-accent/30 glow-accent",
    },
    {
      icon: <MdTerminal className="text-2xl" />,
      title: "Prompt Engineering",
      description:
        "Seni memberikan instruksi yang tepat kepada AI untuk output kode terbaik.",
      colorClass: "bg-green-500/10 text-green-400",
    },
    {
      icon: <MdBugReport className="text-2xl" />,
      title: "Testing & Debugging",
      description:
        "Menggunakan AI untuk menemukan bug dan menulis unit test otomatis.",
      colorClass: "bg-orange-500/10 text-orange-400",
    },
    {
      icon: <MdRocketLaunch className="text-2xl" />,
      title: "Deployment",
      description:
        "Publish aplikasi kamu ke internet menggunakan Vercel secara mudah.",
      colorClass: "bg-purple-500/10 text-purple-400",
    },
  ];

  return (
    <section className="py-20 relative" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient">
            Kurikulum Vibe Coding
          </h2>
          <p className="text-gray-400">
            Materi disusun untuk membawamu dari dasar hingga siap deployment
            dengan tools modern.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {curriculumItems.map((item) => (
            <div
              key={item.title}
              className={`glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group ${
                item.extraClass || ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.colorClass}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
