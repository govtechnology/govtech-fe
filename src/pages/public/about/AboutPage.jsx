import PeopleCard from "./components/PeopleCard";

const AboutPage = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="container max-w-screen-xl mt-32 mb-8 px-8 flex flex-col">
        <div className="text-black text-[45px] md:text-8xl font-black max-w-screen-xl mt-32 mb-8 md:px-8 leading-none">
          Temui Tim
          <br />
          Kami
        </div>
        <div className="flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
          <PeopleCard
            img="/assets/images/Foto_Dini.png"
            nama="Dini Puspitasari"
            role="Hustler"
            univ="Universitas Bina Sarana Informatika"
            ig="https://instagram.com/dinipsptaa"
            linkedin="https://www.linkedin.com/in/dini-puspitasari"
            github="https://github.com/dinipuspitasari"
          />
          <PeopleCard
            img="/assets/images/Foto_Rosa.png"
            nama="Rosa Agnelia Rahmawati"
            role="Hipster"
            univ="Universitas Ahmad Dahlan"
            ig="https://instagram.com/ocaa.ishere______"
            linkedin="https://www.linkedin.com/in/rosaagnelia"
            github="https://github.com/rossaagnelia"
          />
          <PeopleCard
            img="/assets/images/Foto_Amel.png"
            nama="Amelia Dewi Puspita"
            role="Hipster"
            univ="Universitas Maritim Raja Ali Haji"
            ig="https://www.instagram.com/ameliadpspita/"
            linkedin="https://www.linkedin.com/in/amelia-dewi-puspita-709852298/"
            github="https://github.com/AmeliaDewiPuspita16"
          />
          <PeopleCard
            img="/assets/images/Foto_Jody.png"
            nama="Jody Yuantoro"
            role="Hipster & Hacker"
            univ="Universitas Muhammadiyah Malang"
            ig="https://www.instagram.com/jodyyuan/"
            linkedin="https://www.linkedin.com/in/xyzuan/"
            github="https://github.com/xyzuan"
          />
          <PeopleCard
            img="/assets/images/Foto_Gigih.png"
            nama="M.B. Gigih"
            role="Hacker"
            univ="Universitas Muhammadiyah Ponorogo"
            ig="https://www.instagram.com/toro.rii"
            linkedin=" https://www.linkedin.com/in/gigihbaskoro01"
            github="https://github.com/mbgigs03"
          />
          <PeopleCard
            img="/assets/images/Foto_Yovi.png"
            nama="Rafidhiya Bagus F."
            role="Hacker"
            univ="Universitas Muhammadiyah Malang"
            ig="https://www.instagram.com/yoviyovi47/"
            linkedin="https://www.linkedin.com/in/rafidhiya-bagus-farizki-038058263/"
            github="https://www.linkedin.com/in/rafidhiya-bagus-farizki-038058263/"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
