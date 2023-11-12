function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-[42px]">
      <img className="md:max-w-[32rem]" src="/assets/images/home_ill.png" />
      <div className="flex flex-col gap-8 justify-center">
        <div>
          <h1 className="font-bold text-2xl">
            Layanan Administrasi Persuratan
          </h1>
          <p className="text-xl">
            Ajukan surat yang akan anda inginkan dengan menginputkan data diri
            dengan mudah.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Cetak surat dengan cepat</h1>
          <p className="text-xl">
            Surat yang anda ajukan dapat anda dapatkan tanpa harus mendatangi
            langsung kantor kami.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
