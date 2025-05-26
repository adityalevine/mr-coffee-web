import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RewardPage = () => {
  const promoCards = [
    {
      id: 1,
      title: "BUY 1 GET 1 FREE COFFEE&PASTRY",
      description:
        "Beli satu cangkir kopi dan dapatkan gratis, pembeli satu kopi jenis apapun dan pastry gratis untuk setiap pembelian yang dipilih.",
      image: "/images/coffee-and-pastry.png",
      buttonText: "Gunakan Promo Ini",
    },
    {
      id: 2,
      title: "Promo Spesial",
      description:
        "Dapatkan diskon hingga 50% dengan berapa pun pembelian kopi yang kamu beli. Promo berlaku hingga 31 Desember 2024.",
      image: "/images/promo-spesial.png",
      buttonText: "Gunakan Promo Ini",
    },
    {
      id: 3,
      title: "Happy Hour",
      description:
        "Happy Hour dari jam 15 setiap hari dari Senin - Jumat. Dapatkan diskon 30% untuk semua menu kopi.",
      image: "/images/happy-hour.png",
      buttonText: "Gunakan Promo Ini",
    },
    {
      id: 4,
      title: "Free Delivery",
      description:
        "Gratis ongkir di MR COFFEE. Cukup klik tombol pesan dan nikmati kopi favoritmu tanpa biaya tambahan.",
      image: "/images/free-delivery.png",
      buttonText: "Gunakan Promo Ini",
    },
    {
      id: 5,
      title: "Cashback 20%",
      description:
        "Cashback dalam 30% untuk setiap pembelian minimal Rp 100.000. Berlaku hingga 5 Januari 2025.",
      image: "/images/cashback.png",
      buttonText: "Gunakan Promo Ini",
    },
  ];

  const appFeatures = [
    "Akses mudah ke semua menu",
    "Promo eksklusif member",
    "Sistem poin reward",
    "Notifikasi promo terbaru",
    "Pemesanan lebih mudah",
  ];

  return (
    <main>
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-8 space-y-6">
          <div className="w-full">
            {/* Hero Section Start */}
            <section className="relative flex h-[90vh] items-center justify-center px-4 text-center md:h-[70vh]">
              <div className="absolute inset-0 bg-[url('/images/hero-section-reward.png')] bg-cover bg-center bg-no-repeat" />
              <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" />
              <div className="relative z-10 text-white max-w-3xl mx-auto">
                <h1 className="mb-6 text-[28px] font-bold md:text-5xl lg:text-[56px] leading-tight">
                  Special Reward
                </h1>
                <p className="mb-8 text-lg md:text-xl lg:text-2xl">
                  Nikmati berbagai penawaran eksklusif spesial hanya untuk Anda.
                </p>
              </div>
            </section>
            {/* Hero Section End */}
          </div>

          {/* Promo Terbaru Section Start */}
          <section>
            <div className="container mx-auto">
              <h2 className="text-xl font-bold text-[#693D3D] mb-4">
                Promo Terbaru
              </h2>

              <div className="flex flex-wrap gap-4">
                {promoCards.map((promo) => (
                  <Card
                    key={promo.id}
                    className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.75rem)] overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={promo.image || "/placeholder.svg"}
                        alt={promo.title}
                        className="w-full h-24 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h3 className="text-white font-bold text-center text-sm md:text-base px-4">
                          {promo.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[#693D3D] text-sm mb-4 leading-relaxed">
                        {promo.description}
                      </p>
                      <Button
                        className="w-full bg-[#693D3D] hover:bg-[#8A5A5A] text-white rounded-full"
                        size="sm"
                      >
                        {promo.buttonText}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          {/* Promo Terbaru Section End */}

          {/* Download App Section */}
          <section className="bg-[#c09999] text-[#693D3D] p-6 rounded-lg">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">
                UNDUH APLIKASI MR.COFFEE
              </h2>
            </div>

            <div className="space-y-3 mb-6">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#693D3D] rounded-full"></div>
                  <span className="text-[#693D3D] text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center text-center space-y-3">
              <div className="space-y-3">
                <img src="/images/app-store.png" alt="App Store" />
                <img src="/images/play-store.png" alt="Play Store" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default RewardPage;
