import React from "react";

function PeopleCard({ img, nama, role, univ, ig, linkedin, github }) {
  return (
    <div className="w-[348px] min-w-[348px] bg-white rounded-[36px] shadow-2xl flex flex-col items-center pb-[32px] mb-16">
      <img
        className="w-[175px] h-[175px] object-center mt-10 mb-12"
        src={img}
        alt={nama}
      />
      <div className="text-center text-black text-3xl font-extrabold font-['Manrope'] px-[18px] leading-normal">
        {nama}
      </div>
      <div className="text-center text-black text-xl font-medium font-['Manrope'] px-[32px] leading-loose">
        {role}
        <br />
        {univ}
      </div>
      <div className="flex justify-center mt-8">
        <a href={ig} className="mx-4">
          <img src="/assets/svgs/instagram.svg" alt="instagram" />
        </a>
        <a href={linkedin} className="mx-4">
          <img src="/assets/svgs/linkedin.svg" alt="linkedin" />
        </a>
        <a href={github} className="mx-4">
          <img src="/assets/svgs/github.svg" alt="github" />
        </a>
      </div>
    </div>
  );
}

export default PeopleCard;
