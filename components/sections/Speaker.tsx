import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { MdMilitaryTech, MdVerified, MdWork } from "react-icons/md";

export default function Speaker() {
  const experiences = [
    { company: "Indofood CBP Sukses Makmur Tbk.", role: "IT Support" },
    { company: "CV. Birran Cipta informatika.", role: "Programmer" },
  ];

  const organizations = [
    { org: "Itech Poliban", role: "Ketua Umum", period: "2024 - 2026" },
    { org: "BEM Poliban", role: "Menteri Kominfo", period: "2024/2025" },
    { org: "KSR PMI Unit Poliban", role: "Divisi Humas", period: "2025/2026" },
  ];

  return (
    <section
      className="py-20 bg-background-dark border-t border-white/5"
      id="speaker"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient">
            Meet Your Mentor
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Belajar langsung dari mentor yang berpengalaman dan aktif dalam
            organisasi.
          </p>
        </div>

        <div className="bg-white/2 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
            {/* Profile Avatar */}
            <div className="size-32 rounded-2xl bg-linear-to-br from-primary to-accent p-0.5 shrink-0 overflow-hidden shadow-2xl shadow-primary/20">
              <div className="size-full rounded-[0.9rem] bg-background-dark overflow-hidden relative">
                <Image
                  src="/pemateri.png"
                  alt="Budiannor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  Budiannor
                </h3>
                <MdVerified className="text-blue-400" />
              </div>
              <p className="text-accent font-bold text-sm uppercase mb-1 tracking-widest">
                Ketua Umum Itech Poliban
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Fullstack Web Developer
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                <a
                  href="https://budiannor.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-white transition-all uppercase tracking-widest"
                >
                  <FaGlobe className="text-accent" /> Portfolio
                </a>
                <a
                  href="https://github.com/budicuy/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-white transition-all uppercase tracking-widest"
                >
                  <FaGithub className="text-primary" /> GitHub
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 text-left">
                {/* Exp List */}
                <div>
                  <h4 className="flex items-center gap-2 text-white font-bold mb-4 text-sm uppercase tracking-wider">
                    <MdWork className="text-primary" /> Pengalaman
                  </h4>
                  <ul className="space-y-3">
                    {experiences.map((exp) => (
                      <li key={exp.company}>
                        <div className="text-xs text-white font-semibold leading-tight">
                          {exp.company}
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase">
                          {exp.role}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Org List */}
                <div>
                  <h4 className="flex items-center gap-2 text-white font-bold mb-4 text-sm uppercase tracking-wider">
                    <MdMilitaryTech className="text-accent" /> Organisasi
                  </h4>
                  <ul className="space-y-3">
                    {organizations.map((org) => (
                      <li key={org.org}>
                        <div className="text-xs text-white font-semibold leading-tight">
                          {org.org}
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase">
                          {org.role} • {org.period}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
