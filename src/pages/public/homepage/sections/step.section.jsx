import React from "react";

function StepSection() {
  return (
    <div data-aos="fade-down" className="flex justify-center">
      <div className="grid grid-cols-3 gap-6 md:gap-32">
        <div className="flex flex-col w-[98px] md:w-[162px] text-center">
          <img
            className="h-[132px] md:h-[224px]"
            src="/assets/svgs/home_step_1_ill.svg"
          />
          <h3 className="font-bold text-2xl">Cari</h3>
          <p>Cari surat yang ingin anda ajukan</p>
        </div>
        <div className="flex flex-col w-[98px] md:w-[162px] text-center">
          <img
            className="h-[132px] md:h-[224px]"
            src="/assets/svgs/home_step_2_ill.svg"
          />
          <h3 className="font-bold text-2xl">Isi Data</h3>
          <p>Isi data diri anda sesuai dengan format yang tersedia</p>
        </div>
        <div className="flex flex-col w-[98px] md:w-[162px] text-center">
          <img
            className="h-[132px] md:h-[224px]"
            src="/assets/svgs/home_step_3_ill.svg"
          />
          <h3 className="font-bold text-2xl">Unduh</h3>
          <p>Unduh surat anda jika telah selesai diverifikasi data</p>
        </div>
      </div>
    </div>
  );
}

export default StepSection;
