const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Andrew",
      role: "General Manager",
      image: "/images/andrew.png",
    },
    {
      name: "Jessica",
      role: "Marketing Manager",
      image: "/images/jessica.png",
    },
    {
      name: "Jonathan",
      role: "Operation Manage",
      image: "/images/jonathan.png",
    },
    {
      name: "Charlos",
      role: "Head Barista",
      image: "/images/charlos.png",
    },
  ];

  return (
    <main>
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-8 space-y-10">
          {/* Hero Section */}
          <section className="relative flex h-[90vh] items-center justify-center text-center md:h-[70vh]">
            <div className="absolute inset-0 bg-[url('/images/hero-section-about.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" />
            <div className="relative z-10 text-white max-w-3xl mx-auto">
              <h1 className="mb-6 text-[28px] font-bold md:text-5xl lg:text-[56px] leading-tight">
                About Us
              </h1>
            </div>
          </section>

          <div className="space-y-10 max-w-3xl mx-auto">
            {/* Sejarah Perkembangan */}
            <div className="bg-[#fcf0f0] border rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-4 text-amber-900">
                Sejarah Perkembangan
              </h2>
              <p className="text-[#693D3D] text-sm leading-relaxed">
                Mr. Coffee berdiri sejak tahun 1970, dimulai dari sebuah kedai
                kopi kecil namun klasik yang dikenal karena pesonanya yang unik
                dan aroma kopi segar yang diseduh. Seiring waktu, kami
                berkembang menjadi jaringan kedai kopi yang dikenal di seluruh
                Indonesia dengan komitmen terhadap kualitas dan kepuasan
                pelanggan.
              </p>
            </div>

            {/* Visi */}
            <div className="bg-[#fcf0f0] border rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-4 text-amber-900">Visi</h2>
              <p className="text-[#693D3D] text-sm leading-relaxed">
                Menjadi kedai kopi terkemuka yang dikenal tidak hanya karena
                kualitas kopi yang luar biasa, tetapi juga sebagai tempat yang
                menginspirasi koneksi, kreativitas, dan komunitas di antara para
                pecinta kopi.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-[#fcf0f0] border rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-4 text-amber-900">Misi</h2>
              <p className="text-[#693D3D] text-sm leading-relaxed mb-4">
                Menyediakan lingkungan yang nyaman dan ramah, di mana setiap
                orang dapat merasa diterima, berbagi ide, dan terhubung dengan
                orang lain.
              </p>
              <p className="text-[#693D3D] text-sm leading-relaxed">
                Selalu berinovasi dalam menu dan layanan, serta memberikan
                platform bagi seniman dan kreator untuk mengekspresikan diri
                mereka di dalam kedai.
              </p>
            </div>

            {/* Founder Section */}
            <div className="bg-[#fcf0f0] border rounded-xl shadow p-6">
              <div className="text-center mb-6">
                <img
                  src="/images/liman-susanto.png"
                  alt="Liman Susanto"
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-bold text-gray-900 text-lg">
                  Liman Susanto
                </h3>
                <p className="text-amber-600 text-sm">MR COFFEE Founder</p>
              </div>

              <p className="text-[#693D3D] text-sm leading-relaxed mb-4">
                Liman Susanto mendirikan MR.COFFEE pada tahun 2020 dengan visi
                untuk menciptakan kedai kopi yang tidak hanya menyajikan kopi
                berkualitas tinggi, tetapi juga menjadi tempat yang
                menginspirasi koneksi dan kreativitas.
              </p>
              <p className="text-[#693D3D] text-sm leading-relaxed mb-4">
                Dengan latar belakang sebagai barista berpengalaman dan seorang
                pengusaha yang berorientasi pada komunitas, Liman telah berhasil
                mengubah MR.COFFEE menjadi tempat yang dicintai oleh banyak
                orang di kota.
              </p>
              <p className="text-[#693D3D] text-sm leading-relaxed">
                Perjalanan dan tantangan yang dihadapi Liman dalam membangun
                MR.COFFEE menjadi pusat kreativitas dan interaksi sosial telah
                menginspirasi banyak pecinta kopi dan pengusaha muda untuk
                mengejar impian mereka.
              </p>
            </div>

            {/* Team Management */}
            <div>
              <h2 className="text-xl font-bold mb-6 text-center text-amber-900">
                Team Management
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
