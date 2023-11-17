import { Button } from "@/components/cnc/ui/button";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div
      data-aos="fade-down"
      className="h-screen w-screen flex flex-col align-center justify-center items-center"
    >
      <img className="w-[243px] mb-8" src="/assets/images/main_logo.png" />
      <img className="h-[372px] w-[372px]" src="/assets/images/404_ill.png" />
      <h1 className="font-bold text-[36px]">Halaman Tidak Tersedia</h1>
      <p className="text-medium text-center">
        Hubungi melalui email desangubalan@gmail.com / <br />
        telp 084 73679 5442
      </p>
      <Link to="/">
        <Button className="mt-8">Kembali ke halaman utama</Button>
      </Link>
    </div>
  );
};

export default NoPage;
