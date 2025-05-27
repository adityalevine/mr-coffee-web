import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Espresso", "Frappe", "Brewed", "Snack"];

  const menuItems = [
    {
      id: 1,
      name: "Hot Espresso",
      price: "Rp22.000",
      image: "/images/hot-expresso.png",
      category: "Espresso",
    },
    {
      id: 2,
      name: "Frappuccino",
      price: "Rp23.000",
      image: "/images/frappuccino.png",
      category: "Frappe",
    },
    {
      id: 3,
      name: "Cold Brewed",
      price: "Rp29.000",
      image: "/images/cold-brewed.png",
      category: "Brewed",
    },
    {
      id: 4,
      name: "Hot Americano",
      price: "Rp24.000",
      image: "/images/hot-americano.png",
      category: "Espresso",
    },
    {
      id: 5,
      name: "Ice Americano",
      price: "Rp26.000",
      image: "/images/ice-americano.png",
      category: "Espresso",
    },
    {
      id: 6,
      name: "Cafe au Lait",
      price: "Rp37.000",
      image: "/images/cafe-au-lait.png",
      category: "Espresso",
    },
    {
      id: 7,
      name: "Croissant",
      price: "Rp15.000",
      image: "/images/croissant.png",
      category: "Snack",
    },
    {
      id: 8,
      name: "Muffin",
      price: "Rp9.000",
      image: "/images/muffin.png",
      category: "Snack",
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          {/* Search Input */}
          <div className="relative my-4">
            <div className="flex items-center border border-[#693D3D] rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-[#693D3D] mr-2" />
              <input
                type="text"
                placeholder="Search Menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full outline-none text-sm text-[#693D3D] placeholder-gray-400 bg-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-[#693D3D] hover:bg-[#8A5A5A] text-white rounded-full"
                    : "border-[#693D3D] text-[#693D3D] hover:bg-[#f5eaea] rounded-full"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-3 flex gap-3 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-sm text-[#693D3D] mb-1">
                    {item.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#693D3D] font-semibold text-sm">
                      {item.price}
                    </span>
                    <Button
                      size="sm"
                      className="w-6 h-6 p-0 bg-[#693D3D] hover:bg-[#8A5A5A] rounded-sm"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-8">
              <p className="text-[#693D3D]">
                No items found for "{searchTerm}" in {selectedCategory} category
              </p>
            </div>
          )}

          <div className="pt-6">
            <Link to="/order">
              <Button className="w-full bg-[#693D3D] hover:bg-[#8A5A5A] text-white rounded-full py-3 text-lg font-semibold">
                ORDER
              </Button>
            </Link>
          </div>
        </div>
        {/* Menu Items */}
      </section>
    </main>
  );
};

export default MenuPage;
