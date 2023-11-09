import Accordion from "../../components/Accordion";

const FaqPage = () => {
  return (
    <div
      data-aos="fade-down"
      className="container max-w-screen-xl mt-32 mb-8 px-8"
    >
      <div className="gap-12 grid md:grid-cols-2">
        <div>
          <h1 className="font-bold text-3xl mb-4">Pertanyaan umum</h1>
          <Accordion
            title="Apakah Sistem Administrasi Digital aman?"
            summary="Ya, sebagian besar Sistem Administrasi Digital dilengkapi dengan fitur keamanan yang kuat untuk melindungi data surat elektronik Anda. Ini mencakup enkripsi data, otentikasi pengguna, dan akses terbatas."
          />
          <Accordion
            title="Apakah Sistem Administrasi Digital aman?"
            summary="Ya, sebagian besar Sistem Administrasi Digital dilengkapi dengan fitur keamanan yang kuat untuk melindungi data surat elektronik Anda. Ini mencakup enkripsi data, otentikasi pengguna, dan akses terbatas."
          />
          <Accordion
            title="Apakah Sistem Administrasi Digital aman?"
            summary="Ya, sebagian besar Sistem Administrasi Digital dilengkapi dengan fitur keamanan yang kuat untuk melindungi data surat elektronik Anda. Ini mencakup enkripsi data, otentikasi pengguna, dan akses terbatas."
          />
        </div>
        <div>
          <img src="/assets/images/faq_ill.png" />
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
