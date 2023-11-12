import MarqueeElement from "../../../components/Marquee";
import MapsIllustration from "../components/MapsIllustration";

const sliderItems = [
  "SK Izin Keluarga",
  "SK Tidak Mampu",
  "SK Membeli Solar",
  "SK Catatan Kepolisian",
  "SK Usaha",
  "SK Kehilangan",
  "SK Domisili",
  "SK Domisili Instansi",
  "SK Pengajuan Bank",
  "SK Kematian",
];

function HeroSection() {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col justify-center items-center relative"
    >
      <MapsIllustration color="#EEEEEE" />
      <div
        data-aos="fade-down"
        className="absolute md:text-center mb-12 px-8 z-10"
      >
        <h1 className="text-4xl md:text-6xl leading-none font-extrabold">
          Sistem Administrasi Digital
          <br />
          Desa Ngubalan
        </h1>
        <h3 className="text-xl mt-[18px]">
          Mengurus surat online dengan mudah, cepat dan efisien
        </h3>
        <button
          data-aos="fade-up"
          className="bg-primary py-4 px-12 text-white text-lg rounded-full mt-10"
        >
          Urus sekarang
        </button>
      </div>
      <div className="absolute mt-3 bottom-14 w-full">
        {Array.from({ length: 2 }, (_, index) => (
          <MarqueeElement
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            {sliderItems.map((name, index) => (
              <div
                data-aos="zoom-in"
                className="py-4 px-8 mx-4 bg-[#515151] rounded-full text-white text-lg font-medium"
                key={index}
              >
                {name}
              </div>
            ))}
          </MarqueeElement>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
