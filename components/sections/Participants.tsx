import { desc } from "drizzle-orm";
import { MdFormatQuote } from "react-icons/md";
import { db } from "@/db";
import { registrations } from "@/db/schema";

const CARD_COLORS = [
  {
    theme: "purple",
    border: "border-primary/30",
    glow: "bg-primary/20",
    icon: "text-primary",
    bg: "group-hover:bg-primary/10",
    shadow: "shadow-primary/20",
  },
  {
    theme: "cyan",
    border: "border-accent/30",
    glow: "bg-accent/20",
    icon: "text-accent",
    bg: "group-hover:bg-accent/10",
    shadow: "shadow-accent/20",
  },
  {
    theme: "emerald",
    border: "border-emerald-500/30",
    glow: "bg-emerald-500/20",
    icon: "text-emerald-400",
    bg: "group-hover:bg-emerald-500/10",
    shadow: "shadow-emerald-500/20",
  },
  {
    theme: "amber",
    border: "border-amber-500/30",
    glow: "bg-amber-500/20",
    icon: "text-amber-400",
    bg: "group-hover:bg-amber-500/10",
    shadow: "shadow-amber-500/20",
  },
];

export default async function Participants() {
  const allParticipants = await db
    .select({
      id: registrations.id,
      nama: registrations.nama,
      nim: registrations.nim,
      prodi: registrations.prodi,
      quote: registrations.quote,
    })
    .from(registrations)
    .orderBy(desc(registrations.createdAt));

  if (allParticipants.length === 0) return null;

  return (
    <section
      className="py-24 bg-background-dark relative overflow-hidden"
      id="participants"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-4 tracking-tight">
              Daftar <span className="text-gradient">Peserta</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Programmer yang sudah siap "Vibe Coding" bersama kami. Mereka
              adalah pionir yang akan menguasai era AI.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">
              Total Pendaftar
            </div>
            <div className="text-3xl font-bold font-display text-white">
              <span className="text-primary">{allParticipants.length}</span>
              <span className="text-gray-600 self-end text-xl ml-1">/ 30</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allParticipants.map((p, index) => {
            const color = CARD_COLORS[index % CARD_COLORS.length];
            return (
              <div
                key={p.id}
                className={`group relative bg-[#15121a] border ${color.border} p-5 rounded-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full shadow-xl overflow-hidden`}
              >
                {/* Visual Flair */}
                <div
                  className={`absolute -top-10 -right-10 size-32 ${color.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`size-10 shrink-0 ${color.glow} rounded-xl flex items-center justify-center ${color.icon} border border-white/5`}
                    >
                      <span className="text-sm font-black font-display tracking-tighter">
                        {p.nama.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-white leading-none truncate mb-1">
                        {p.nama}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-tighter">
                        <span className="truncate">{p.nim}</span>
                        <span className="text-white/10">•</span>
                        <span className="truncate">{p.prodi}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-auto relative p-3 bg-white/5 border border-white/5 rounded-xl ${color.bg} transition-colors duration-300`}
                  >
                    <p className="text-gray-400 text-xs italic leading-snug line-clamp-2 group-hover:text-gray-200 transition-colors">
                      "{p.quote}"
                    </p>
                    <MdFormatQuote
                      className={`absolute -right-1 -bottom-1 text-2xl opacity-10 ${color.icon}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
