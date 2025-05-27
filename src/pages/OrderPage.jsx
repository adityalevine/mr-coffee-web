import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const OrderPage = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    catatan: "",
  });

  const cart = [];
  const sampleCart =
    cart.length > 0
      ? cart
      : [
          {
            id: 1,
            name: "Frappuccino",
            price: 23000,
            image: "/images/frappuccino.png",
            quantity: 1,
          },
          {
            id: 2,
            name: "Ice Americano",
            price: 26000,
            image: "/images/ice-americano.png",
            quantity: 2,
          },
          {
            id: 3,
            name: "Muffin",
            price: 9000,
            image: "/images/muffin.png",
            quantity: 1,
          },
        ];

  const groupedCart = sampleCart.reduce((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      acc.push({ ...item, quantity: item.quantity || 1 });
    }
    return acc;
  }, []);

  const calculateTotal = () => {
    return groupedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", {
      formData,
      cart: groupedCart,
      total: calculateTotal(),
    });
    alert("Pesanan berhasil dikirim!");
  };

  return (
    <main>
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-xl font-bold mb-4 text-[#693D3D]">
              Form Pemesanan
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nama" className="text-[#693D3D] font-medium">
                  Nama
                </Label>
                <Input
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  className="mt-1 bg-gray-200 border-0 rounded-lg"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#693D3D] font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 bg-gray-200 border-0 rounded-lg"
                  required
                />
              </div>

              <div>
                <Label htmlFor="telepon" className="text-[#693D3D] font-medium">
                  No. Telepon
                </Label>
                <Input
                  id="telepon"
                  name="telepon"
                  value={formData.telepon}
                  onChange={handleInputChange}
                  className="mt-1 bg-gray-200 border-0 rounded-lg"
                  required
                />
              </div>

              <div>
                <Label htmlFor="alamat" className="text-[#693D3D] font-medium">
                  Alamat
                </Label>
                <Textarea
                  id="alamat"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  className="mt-1 bg-gray-200 border-0 rounded-lg resize-none"
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="catatan" className="text-[#693D3D] font-medium">
                  Catatan Pemesanan
                </Label>
                <Textarea
                  id="catatan"
                  name="catatan"
                  value={formData.catatan}
                  onChange={handleInputChange}
                  placeholder="Tambahkan catatan khusus untuk pesanan Anda..."
                  className="mt-1 bg-gray-200 border-0 rounded-lg resize-none"
                  rows={3}
                  required
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#693D3D] hover:bg-[#8A5A5A] text-white rounded-full py-3 text-lg font-semibold"
                >
                  ORDER NOW
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderPage;
