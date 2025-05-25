import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <img src="/images/illustration.png" alt="Illustration" className="" />
      <p className="text-center text-xl font-bold text-black sm:text-2xl">
        Ups, halaman tidak ditemukan
      </p>
      <div className="text-center text-xs text-neutral_500 sm:text-base">
        <p>Kopi kamu mungkin tumpah dan arah jalannya jadi melenceng.</p>
        <p>Yuk balik ke halaman utama Mr Coffee</p>
      </div>
      <Link to="/">
        <Button className="rounded-lg text-xs font-medium sm:text-sm">
          Kembali
        </Button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
