import {
  MdAutoFixHigh,
  MdLayers,
  MdPerson,
  MdRocketLaunch,
  MdSmartToy,
  MdTipsAndUpdates,
} from "react-icons/md";

export default function Philosophy() {
  return (
    <section
      className="py-24 bg-[#0f0c13] relative overflow-hidden"
      id="vision"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-medium mb-2 uppercase tracking-widest text-sm">
            Paradigma Baru
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
            Filosofi Vibe Coding
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pelatian ini tidak hanya mengajarkan cara menulis kode, tapi
            bagaimana cara{" "}
            <span className="text-white font-semibold">
              menciptakan masa depan
            </span>{" "}
            dengan harmoni antara intuisi manusia dan presisi mesin.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-primary hover:translate-x-2 transition-transform duration-300">
              <div className="flex gap-5">
                <div className="shrink-0 size-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-lg shadow-primary/10">
                  <MdPerson className="text-3xl" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-display">
                    The Visionary Pilot
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Anda adalah otak di balik layar. Fokus pada{" "}
                    <span className="text-accent">
                      arsitektur, logika bisnis, dan pengalaman pengguna
                    </span>
                    . Biarkan insting kreatif Anda memandu arah proyek tanpa
                    terhambat oleh hambatan teknis yang repetitif.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-accent hover:translate-x-2 transition-transform duration-300">
              <div className="flex gap-5">
                <div className="shrink-0 size-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent border border-accent/30 shadow-lg shadow-accent/10">
                  <MdSmartToy className="text-3xl" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-display">
                    The Neural Co-Pilot
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    AI bertugas sebagai asisten super cerdas yang{" "}
                    <span className="text-primary-light">
                      mengeliminasi boilerplate, melakukan debugging instan, dan
                      mereferensikan dokumentasi
                    </span>{" "}
                    secara real-time. Kecepatan eksekusi Anda akan meningkat
                    hingga 10x lipat.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-purple-500 hover:translate-x-2 transition-transform duration-300">
              <div className="flex gap-5">
                <div className="shrink-0 size-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/10">
                  <MdLayers className="text-3xl" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-display">
                    The Flow Ecosystem
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Transformasi dari sekadar koding menjadi{" "}
                    <span className="text-purple-300">orchestration</span>. Kami
                    membangun ekosistem dimana tools, AI, dan kreativitas Anda
                    menyatu tanpa hambatan, menciptakan lingkungan kerja yang
                    suportif bagi inovasi tanpa batas.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MdAutoFixHigh className="text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Intuitive Prompting
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MdTipsAndUpdates className="text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Rapid Innovation
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-linear-to-br from-primary via-purple-900 to-black p-1 shadow-2xl shadow-primary/20 overflow-hidden">
              <div className="h-full w-full bg-[#1e1a24] rounded-[calc(1.5rem-1px)] overflow-hidden flex flex-col font-mono text-xs sm:text-sm border border-white/5">
                {/* Terminal Header */}
                <div className="bg-[#2a2433] px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500/50" />
                    <div className="size-3 rounded-full bg-yellow-500/50" />
                    <div className="size-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                    vibe-coding-session.tsx
                  </div>
                  <div className="w-10" />
                </div>
                {/* Terminal Body */}
                <div className="p-6 space-y-3 min-h-[350px]">
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none">01</span>
                    <span>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-white">AI</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-400">"antigravity"</span>
                      <span className="text-white">;</span>
                    </span>
                  </div>
                  <div className="flex gap-3 border-l-2 border-primary/30 pl-3 -ml-3 bg-primary/5">
                    <span className="text-gray-600 select-none">02</span>
                    <span className="text-gray-500 italic">
                      {'// @prompt: "Buat arsitektur synergy"'}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none">03</span>
                    <span>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">Success</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-white">()</span>{" "}
                      <span className="text-purple-400">=&gt;</span>{" "}
                      <span className="text-white">{"{"}</span>
                    </span>
                  </div>
                  <div className="flex gap-3 pl-4">
                    <span className="text-gray-600 select-none">04</span>
                    <span>
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-white">(</span>
                    </span>
                  </div>
                  <div className="flex gap-3 pl-8">
                    <span className="text-gray-600 select-none">05</span>
                    <span>
                      <span className="text-white">&lt;</span>
                      <span className="text-blue-400">PilotMode</span>
                    </span>
                  </div>
                  <div className="flex gap-3 pl-12 text-accent">
                    <span className="text-gray-600 select-none">06</span>
                    <span>control="human"</span>
                  </div>
                  <div className="flex gap-3 pl-12 text-accent">
                    <span className="text-gray-600 select-none">07</span>
                    <span>speed="10x"</span>
                  </div>
                  <div className="flex gap-3 pl-8 text-white">
                    <span className="text-gray-600 select-none">08</span>
                    <span>/&gt;</span>
                  </div>
                  <div className="flex gap-3 pl-4">
                    <span className="text-gray-600 select-none">09</span>
                    <span className="text-white">);</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none">10</span>
                    <span className="text-white">{"}"};</span>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-primary font-bold animate-pulse">
                      <span className="size-2 rounded-full bg-primary" />
                      <span className="text-[10px] tracking-tighter uppercase">
                        Neural Engine Generating...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-white/10 shadow-2xl animate-float z-20">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <MdRocketLaunch className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                    Production Speed
                  </p>
                  <p className="text-lg font-bold text-white leading-none">
                    +300%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
