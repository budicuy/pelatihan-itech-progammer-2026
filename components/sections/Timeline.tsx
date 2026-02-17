export default function Timeline() {
  const phases = [
    {
      marker: "bg-primary",
      month: "Maret",
      tagColor: "text-primary bg-primary/10",
      title: "Phase 1: Foundation & AI Setup",
      description:
        "Membangun fondasi teknis dan integrasi AI dalam workflow development.",
      meetings: [
        "Pertemuan 1 : Technical Meeting",
        "Pertemuan 2 : Installasi setup dan Struktur Dasar Project",
        "Pertemuan 3 : Belajar Tools dan Promting AI",
        "Pertemuan 4 : Belajar Desain dan Prototiping dengan AI",
      ],
    },
    {
      marker: "bg-accent",
      month: "April",
      tagColor: "text-accent bg-accent/10",
      title: "Phase 2: Development & Integration",
      description:
        "Implementasi desain, deployment, dan integrasi database dinamis.",
      meetings: [
        "Pertemuan 5 : Slicing Desain ke Project",
        "Pertemuan 6 : Deploy App Ke Gitbub dan Hosting ke Vercel",
        "Pertemuan 7 : Integrasikan Ke database dan Data dinamis",
        "Pertemuan 8 : Pengujian Peforma dan Testing Otomatis",
      ],
    },
    {
      marker: "bg-white",
      month: "Mei",
      tagColor: "text-white bg-white/10",
      title: "Phase 3: Polishing & Launch",
      description:
        "Uji coba studi kasus nyata, review akhir, dan dokumentasi portofolio.",
      meetings: [
        "Pertemuan 9 : Tes Implementasikan Studi Kasus 1 Web E-Commerce dan Studi Kasus Poliklinik",
        "Pertemuan 10 : Tes Implementasikan Studi Kasus 2 Web E-Commerce dan Studi Kasus Poliklinik",
        "Pertemuan 11 : Review Hasil Web yang di kerjakan",
        {
          text: "Pertemuan 12 : Dokumentasi Project untuk Portofolio dan Evaluasi",
          highlight: true,
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-background-dark" id="timeline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient">
            Timeline Pelatihan
          </h2>
          <p className="text-gray-400">12 Pertemuan Intensif (Maret - Mei)</p>
        </div>
        <div className="relative border-l-2 border-border-dark ml-4 md:ml-0 md:space-y-12 space-y-8">
          {phases.map((phase) => (
            <div key={phase.title} className="relative md:pl-12 pl-6">
              <div
                className={`absolute -left-[11px] top-0 h-5 w-5 rounded-full ${phase.marker} border-4 border-background-dark`}
              />
              <div className="bg-card-dark border border-border-dark rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white font-display">
                    {phase.title}
                  </h3>
                  <span
                    className={`text-[10px] uppercase tracking-widest font-bold ${phase.tagColor} px-2 py-1 rounded w-fit shrink-0`}
                  >
                    {phase.month}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {phase.description}
                </p>
                <div className="flex flex-col gap-2">
                  {phase.meetings.map((meeting) => {
                    const meetingText =
                      typeof meeting === "string" ? meeting : meeting.text;
                    if (typeof meeting === "string") {
                      return (
                        <span
                          key={meetingText}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit"
                        >
                          {meeting}
                        </span>
                      );
                    }
                    return (
                      <span
                        key={meetingText}
                        className="text-xs bg-primary text-white px-2 py-1 rounded w-fit font-bold"
                      >
                        {meeting.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
