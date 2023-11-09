import MapsIllustration from "../components/MapsIllustration";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen relative">
      <MapsIllustration color="#EEEEEE" />
      <div className="absolute text-center">
        <h1 className="text-[78px] leading-none font-extrabold">
          Sistem Administrasi Digital
          <br />
          Desa Ngubalan
        </h1>
        <h3 className="text-[24px] mt-[18px]">
          Mengurus surat online dengan mudah, cepat dan efisien
        </h3>
        <button className="bg-primary py-4 px-12 text-white rounded-full mt-10">
          Urus sekarang
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
