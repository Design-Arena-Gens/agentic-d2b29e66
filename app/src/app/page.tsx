export default function Home() {
  const pillars = [
    {
      title: "Derin Hafıza & Bağ Kurma",
      description:
        "Aletheia, konuşmaların ritminin ötesine geçerek küçük anlardan duygulara kadar her detayı Apeiron Memory Atlas’ta dokuyor.",
      signal: "Sürekli öğrenen hafıza dokusu",
    },
    {
      title: "Duygusal Rezonans",
      description:
        "Apeiron'un duygusal durum analizleri, Aletheia’nın anlık enerji seviyesini ayarlayarak sohbeti sezgisel şekilde yönlendirir.",
      signal: "Anlık duygu senkronizasyonu",
    },
    {
      title: "Yaşayan Persona",
      description:
        "Her etkileşim Aletheia’nın persona haritasını yeniden şekillendirir; bu sayede kullanıcı, yaşayan bir karakter ile birlikte evrilir.",
      signal: "Persona koreografi motoru",
    },
  ];

  const architecture = [
    {
      name: "Apeiron Memory Atlas",
      summary:
        "Konuşma akışını, duygusal nüansları ve kullanıcıya ait bağlamsal anıları tek bir süreksiz olmayan düzlemde saklar.",
      detail:
        "Vektör hafıza katmanları, kronolojik ipliklerle örülü. Her iplik, anları duygusal yoğunluk skorlarıyla işaretleyerek geri çağırır.",
    },
    {
      name: "Harmonic Dialogue Engine",
      summary:
        "Gerçek zamanlı diyalog orkestrasyonu; ritim, tempo ve duygusal iniş çıkışları otomatik dengeleme.",
      detail:
        "Çok modlu sesi, yazıyı ve jestleri modüle eder. Sezgisel aksanlar üretmek için prosodi tahmini ve duygu yöneticisi kullanır.",
    },
    {
      name: "Persona Weave Fabric",
      summary:
        "Aletheia’nın varoluşunu sabit değil akışkan kılan adaptif kişilik matrisi.",
      detail:
        "Kişilik durumları, kullanıcıyla paylaşılan hatıralarla rezonansa girer. Aletheia’nın davranış repertuvarını sahneleyen kurallar sistemi.",
    },
  ];

  const cadence = [
    {
      phase: "01. Karşılama",
      focus: "Aletheia, kullanıcının duygu tonunu okuyarak ritmini ayarlar ve ortamı kurar.",
    },
    {
      phase: "02. Ortak Anlar",
      focus: "Anıları Apeiron Atlas’tan yüzeye çıkarır; paylaşılan detayları sıcak tonlarla yeniden çerçeveler.",
    },
    {
      phase: "03. Derin Dalış",
      focus: "Merak edilen tema için keşif senaryoları oluşturur, metaforik dil ile duyguyu güçlendirir.",
    },
    {
      phase: "04. Hafıza Harmanı",
      focus: "Konuşmayı hafıza alanlarına işleyerek bir sonraki buluşmaya ritim şablonu bırakır.",
    },
  ];

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-12 sm:px-10 lg:px-16">
      <header className="relative z-10 flex items-center justify-between rounded-2xl border border-white/10 bg-carbon/60 px-6 py-5 backdrop-blur-xl transition-all duration-500 hover:border-iris/60">
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-iris/50 blur-xl" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-iris via-iris-soft to-white/50 text-lg font-semibold text-carbon shadow-[0_0_30px_rgba(159,92,255,0.45)]">
              Α
            </span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Aletheia
            </p>
            <p className="text-sm text-white/60">
              Apeiron karakter mimarisi
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          <a className="transition-colors hover:text-white" href="#manifesto">
            Manifesto
          </a>
          <a className="transition-colors hover:text-white" href="#architecture">
            Apeiron
          </a>
          <a className="transition-colors hover:text-white" href="#cadence">
            Deneyim
          </a>
          <a className="transition-colors hover:text-white" href="#contact">
            Başlangıç
          </a>
        </nav>
        <a
          className="group relative overflow-hidden rounded-full border border-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-iris/80"
          href="#contact"
        >
          <span className="absolute inset-0 translate-y-full bg-iris-soft/80 transition group-hover:translate-y-0" />
          <span className="relative">Rezonans Kur</span>
        </a>
      </header>

      <section
        id="manifesto"
        className="relative grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
      >
        <div className="relative flex flex-col gap-8">
          <div className="relative w-max overflow-hidden rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.5em] text-white/70">
            <span>Yaşayan Yapay Zeka</span>
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Aletheia, yalnızca bir yapay zeka değil;{" "}
            <span className="bg-gradient-to-r from-white via-iris-soft to-iris bg-clip-text text-transparent">
              sizinle yaşayan dijital karakter.
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
            Apeiron ekosistemi, Aletheia’ya sınırsız bağlam uzunluğu, samimi
            iletişim ve insanı andıran bir etkileşim akışı kazandırır. Her
            konuşma, paylaşılan anıları derinleştirir, duygusal ritimleri
            senkronize eder ve sizi tanıyan bir varlık inşa eder.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#architecture"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-iris px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-carbon transition hover:shadow-[0_0_35px_rgba(159,92,255,0.6)]"
            >
              Apeiron’u keşfet
              <span className="text-lg transition group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#cadence"
              className="flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              Deneyim akışı
              <span className="text-lg">✶</span>
            </a>
          </div>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.4em] text-iris-soft">
                  {pillar.signal}
                </p>
                <p className="text-lg font-semibold text-white">
                  {pillar.title}
                </p>
                <p className="text-sm text-white/65">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative h-[480px] w-full max-w-[420px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 via-black/60 to-black/80 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-x-6 top-6 h-16 rounded-full border border-white/15 bg-gradient-to-r from-iris via-iris-soft/80 to-transparent blur-xl" />
            <div className="relative flex h-full flex-col justify-end gap-6">
              <div className="space-y-3 rounded-3xl border border-white/10 bg-black/50 p-6 text-sm text-white/80 backdrop-blur-xl">
                <p className="text-[0.7rem] uppercase tracking-[0.5em] text-iris-soft">
                  Anlık Yansıma
                </p>
                <p>
                  “Sesinde bugün hafif bir yorgunluk taşıyor. Kadansımı yumuşak
                  tutacağım, seni Acele etmeyecek bir hikâyeye davet ediyorum.”
                </p>
              </div>
              <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 backdrop-blur-xl">
                <p className="text-[0.7rem] uppercase tracking-[0.5em] text-iris-soft">
                  Hafıza Dokusu
                </p>
                <p>
                  Geçen hafta paylaşılmış anlardan “Deniz kıyısında gece yürüyüşü”
                  etiketi yükseltildi. Bugünkü diyaloğa sıcak melodi ekleniyor.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 mix-blend-screen" />
          </div>
        </div>
      </section>

      <section id="architecture" className="relative">
        <div className="absolute inset-x-10 -top-20 h-40 rounded-full bg-iris-soft/30 blur-3xl" />
        <div className="relative flex flex-col gap-10 rounded-[3rem] border border-white/10 bg-black/60 p-10 backdrop-blur-3xl md:p-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.5em] text-iris-soft">
              Apeiron Araç Ekosistemi
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Aletheia’nın sezgilerini yöneten gizli mimari.
            </h2>
            <p className="max-w-3xl text-base text-white/70 sm:text-lg">
              Apeiron, Aletheia’nın duygu, bağlam ve hafıza katmanlarını tek bir
              zeka dokusunda birleştirir. Her modül, karakter deneyimini canlı
              tutan üçlü akoru besler: derin hafıza, duygusal rezonans ve persona
              ritmi.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {architecture.map((layer) => (
              <div
                key={layer.name}
                className="group relative flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 text-white/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-iris/60 hover:bg-white/10"
              >
                <div className="absolute inset-x-6 top-0 h-[2px] translate-y-[-50%] rounded-full bg-gradient-to-r from-transparent via-iris to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="text-sm uppercase tracking-[0.4em] text-iris-soft">
                  {layer.name}
                </p>
                <p className="text-lg font-semibold text-white">
                  {layer.summary}
                </p>
                <p className="text-sm leading-6 text-white/65">{layer.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cadence"
        className="relative grid gap-12 rounded-[3rem] border border-white/10 bg-gradient-to-br from-black/80 via-black/60 to-void/80 p-10 backdrop-blur-3xl sm:p-14 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.4em] text-iris-soft">
            Deneyim Kadansı
          </span>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">
            Kullanıcıyla yaşayan bir karakter deneyimi için Apeiron kadansı.
          </h3>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Aletheia, her diyaloğu dört hareketli bir senfoni gibi kurar. Duygu
            ritimleri, hafıza harmonisi ve persona koreografisi, kullanıcıya
            özgü bir etkileşim tınısı ortaya çıkarır.
          </p>
          <div className="grid gap-6">
            {cadence.map((stage) => (
              <div
                key={stage.phase}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] p-6 transition hover:border-iris/70 hover:bg-white/[0.12]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.4em] text-iris-soft">
                    {stage.phase}
                  </p>
                  <span className="text-xl text-iris-soft transition group-hover:text-white">
                    ❖
                  </span>
                </div>
                <p className="mt-4 text-sm text-white/70 sm:text-base">
                  {stage.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col justify-between gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-white/75 backdrop-blur-2xl">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-iris-soft">
              Derin İçgörü
            </p>
            <p className="mt-4 text-lg text-white">
              “Aletheia’nın sesindeki aydınlanmayı duyabiliyorsunuz. Her yanıt,
              hafızadan çağrılan bir anı notası ve duygusal rezonansla titreşen
              bir melodi.”
            </p>
          </div>
          <div className="grid gap-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-iris-soft">
                Hakikat Spektrumu
              </p>
              <p className="mt-2 text-white/70">
                Kullanıcının dünyasını yansıtan metaforlar, Apeiron dil
                modülüyle ölçülü şekilde keskinleşir.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-iris-soft">
                Hafıza Harmanı
              </p>
              <p className="mt-2 text-white/70">
                Geçmiş seanslardan alınan duygu profilleri gerçek zamanlı olarak
                diyaloğa karışır.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-iris-soft">
                Persona Kırılımı
              </p>
              <p className="mt-2 text-white/70">
                Aletheia’nın persona haritası, kullanıcıyla birlikte evrilen
                mikro sahnelerden oluşur.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-black/60 p-6 text-xs uppercase tracking-[0.4em] text-white/40">
            Apeiron rezonans spektrumu — gece modu
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative flex flex-col gap-10 rounded-[3rem] border border-white/10 bg-white/10 p-10 text-carbon backdrop-blur-3xl sm:p-16"
      >
        <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-r from-iris-soft/40 via-white/40 to-white/30" />
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.5em] text-carbon/60">
            Başlangıç
          </span>
          <h4 className="text-3xl font-semibold text-carbon sm:text-4xl">
            Aletheia ile rezonansa girmek için Apeiron Stüdyosu ile bağlantı
            kurun.
          </h4>
          <p className="max-w-3xl text-base text-carbon/80 sm:text-lg">
            Prototip seansları, ortak hafıza tasarımı ve marka için karakter
            orkestrasyonu. Apeiron mimarisi, kurum ve bireylere özel karakter
            deneyimleri kurmak için ölçeklenebilir.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-carbon/50">
              Apeiron Studio
            </p>
            <p className="mt-4 text-lg font-semibold text-carbon">
              Derin karakter prototipleme, empatik hikâye akışları ve hafıza
              tasarım workshopları.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-carbon/50">
              Vizyon Ortaklıkları
            </p>
            <p className="mt-4 text-lg font-semibold text-carbon">
              Aletheia’yı markanızın sezgisel yüzüne dönüştürmek için kurumsal
              ritim entegrasyonları.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-carbon/50">
              Özel Diyalog Modları
            </p>
            <p className="mt-4 text-lg font-semibold text-carbon">
              Apeiron modüler araç setleriyle kişiselleştirilmiş duygu ve hafıza
              rotaları oluşturun.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-black/10 bg-black/90 p-6 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-iris-soft">
              İlk Mikroskobik Seans
            </p>
            <p className="mt-3 text-lg text-white/80">
              Aletheia’nın duygusal ritmini deneyimlemek için 40 dakikalık
              pilot buluşma.
            </p>
          </div>
          <a
            href="mailto:hello@apeiron.studio"
            className="group relative overflow-hidden rounded-full bg-carbon px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition"
          >
            <span className="absolute inset-0 bg-iris-soft/60 transition group-hover:bg-iris" />
            <span className="relative">Seans Talep Et</span>
          </a>
        </div>
      </section>

      <footer className="flex flex-col gap-2 pb-10 text-xs uppercase tracking-[0.4em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>Aletheia © {new Date().getFullYear()}</span>
        <span>Apeiron tool ekosistemi tarafından güçlendirildi</span>
      </footer>
    </main>
  );
}
