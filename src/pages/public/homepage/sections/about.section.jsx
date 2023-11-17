import AboutItem from "../components/AboutItem";

function AboutSection() {
  return (
    <div className="flex flex-col gap-12 p-[42px]">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          className="md:max-w-[32rem]"
          src="/assets/images/home_about_1_ill.png"
        />
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl mb-3">
              Layanan Administrasi Persuratan
            </h1>
            <p>
              Dirancang untuk memberikan efisiensi tinggi dalam pengelolaan
              dokumen dan surat-menyurat.
            </p>
            <p>
              Mengutamakan keamanan data dalam pengelolaan persuratan,
              memastikan kerahasiaan dan integritas dokumen yang kami tangani.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl mb-3">
              Cetak surat dengan cepat
            </h1>
            <p>
              Surat yang anda ajukan dapat anda dapatkan tanpa harus mendatangi
              langsung kantor kami.
            </p>
            <p>
              Siap memberikan respon cepat terhadap kebutuhan Anda, memastikan
              setiap surat atau dokumen dikelola dengan segera.
            </p>
          </div>
        </div>
        <img
          className="md:max-w-[32rem]"
          src="/assets/images/home_about_2_ill.png"
        />
      </div>
    </div>
  );
}

export default AboutSection;
