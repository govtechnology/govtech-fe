import MarqueeElement from "../../../components/Marquee";
import MapsIllustration from "../components/MapsIllustration";

const sliderItems = [
  "SKIK",
  "SKTM",
  "SKMS",
  "SKCK",
  "SKU",
  "SKK",
  "SKD",
  "SKDI",
  "SKPB",
  "SKKM",
];

function HeroSection() {
  return (
    <div
      data-aos="fade-down"
      className="container max-w-screen-xl flex flex-col justify-center items-center w-screen h-screen relative"
    >
      <MapsIllustration color="#EEEEEE" />
      <div data-aos="fade-down" className="absolute text-center mb-12">
        <h1 className="text-[78px] leading-none font-extrabold">
          Sistem Administrasi Digital
          <br />
          Desa Ngubalan
        </h1>
        <h3 className="text-[24px] mt-[18px]">
          Mengurus surat online dengan mudah, cepat dan efisien
        </h3>
        <button
          data-aos="fade-up"
          className="bg-primary py-4 px-12 text-white text-[19px] rounded-full mt-10"
        >
          Urus sekarang
        </button>
      </div>
      <div className="absolute bottom-14 w-full overflow-x-hidden">
        {Array.from({ length: 2 }, (_, index) => (
          <MarqueeElement
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            {sliderItems.map((name, index) => (
              <div
                data-aos="zoom-in"
                className="py-4 px-12 mx-6 bg-[#515151] rounded-full text-white text-[24px]"
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
