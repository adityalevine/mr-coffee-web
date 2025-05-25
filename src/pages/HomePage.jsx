import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="pt-20 pb-10">
      <div className="container mx-auto px-8 space-y-6">
        <div className="w-full">
          {/* Hero Section Start */}
          <section className="relative flex h-[90vh] items-center justify-center px-4 text-center md:h-[70vh]">
            {/* Background Hero Section */}
            <div className="absolute inset-0 bg-[url('/images/hero-section-home.png')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" />
            {/* Content */}
            <div className="relative z-10 text-white max-w-3xl mx-auto">
              <h1 className="mb-6 text-[28px] font-bold md:text-5xl lg:text-[56px] leading-tight">
                Rasakan Cita Rasa Kopi Yang Telah Hadir Di Indonesia
              </h1>
              <p className="mb-8 text-lg md:text-xl lg:text-2xl">
                Cita rasa kopi terbaik dari biji pilihan
                <br className="hidden sm:block" />
                yang siap memanjakan harimu.
              </p>
              <Link to="/order">
                <Button className="rounded-full bg-[#693D3D] hover:bg-[#8A5A5A] text-base md:text-lg">
                  Pesan Sekarang <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </section>
          {/* Hero Section End */}
        </div>

        {/* Most Ordered Section Start */}
        <section>
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#693D3D]">Most Ordered</h2>
              <Link to="/menu">
                <Button variant="link" className="text-[#693D3D] p-0">
                  View All &gt;
                </Button>
              </Link>
            </div>

            <div className="space-y-3">
              {[
                {
                  name: "Caramel Macchiato",
                  price: "Rp35.000",
                  image: "/images/caramel-macchiato.png",
                },
                {
                  name: "Cappuccino Espresso",
                  price: "Rp35.000",
                  image: "/images/cappuccino-espresso.png",
                },
                {
                  name: "Vanilla Sweet Cream Cold Brew",
                  price: "Rp40.000",
                  image: "/images/vanilla-sweet-cream-cold-brew.png",
                },
                {
                  name: "Cafe Latte",
                  price: "Rp35.000",
                  image: "/images/cafe-latte.png",
                },
                {
                  name: "Ice Americano",
                  price: "Rp30.000",
                  image: "/images/ice-americano.png",
                },
              ].map((item, index) => (
                <Card key={index} className="p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 rounded-lg object-cover md:w-40 md:h-40"
                    />
                    <div className="flex-1">
                      <h3 className="text-xs md:text-base font-bold text-[#693D3D]">
                        {item.name}
                      </h3>
                      <p className="font-semibold text-[#693D3D]">
                        {item.price}
                      </p>
                    </div>
                    <Link to="/order">
                      <Button
                        size="sm"
                        className="bg-[#693D3D] hover:bg-[#8A5A5A] text-white px-4 py-2 rounded-full text-xs"
                      >
                        Order Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Most Ordered Section End */}

        {/* Reward Section Start */}
        <section>
          <div className="container mx-auto">
            <h2 className="text-xl font-bold text-[#693D3D] mb-4">Reward</h2>
            <Card className="overflow-hidden mx-auto">
              <div className="relative">
                <img
                  src="/images/coffee-and-pastry.png"
                  alt="Coffee and Pastry"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-1">BUY 1 GET 1</h3>
                    <h3 className="text-lg font-bold">FREE COFFEE & PASTRY</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#693D3D] text-sm mb-3">
                  Beli satu cangkir kopi dan dapatkan gratis. Pembelian kopi
                  jenis apa pun disertai pastry gratis untuk setiap pembelian
                  yang dipilih.
                </p>
                <p className="text-[#693D3D] text-xs mb-3">
                  Berlaku hingga jam 13.45
                </p>
                <Link to="/reward">
                  <Button
                    className="w-full bg-[#693D3D] hover:bg-[#8A5A5A] text-white rounded-full"
                    size="sm"
                  >
                    View All Reward
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Reward Section End */}

        {/* Meet Our Founder Section Start */}
        <section>
          <div className="container mx-auto">
            <h2 className="text-xl font-bold text-[#693D3D] mb-4">
              Meet Our Founder
            </h2>
            <Card className="p-4">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/images/liman-susanto.png"
                  alt="Liman Susanto"
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />
                <h3 className="font-bold text-[#693D3D] mb-1">Liman Susanto</h3>
                <p className="text-[#693D3D] font-semibold text-sm mb-3">
                  MR.COFFEE Founder
                </p>
                <p className="text-[#693D3D] text-sm leading-relaxed">
                  Dengan semangat yang berkobar pada kualitas, keunggulan, dan
                  inovasi, Liman Susanto berusaha untuk membuat Mr Coffee
                  menjadi nama yang dikenal yang mewakili kehangatan, menjaga
                  hubungan-hubungan momen yang dibagikan atas secangkir kopi
                  yang sempurna.
                </p>
              </div>
            </Card>
          </div>
        </section>
        {/* Meet Our Founder Section End */}
      </div>
    </main>
  );
};

export default HomePage;
