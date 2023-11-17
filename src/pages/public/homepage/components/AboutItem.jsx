import React from "react";

function AboutItem({ ill, title, summary, summary2 }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img className="md:max-w-[32rem]" src={ill} />
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl mb-3">{title}</h1>
          <p>{summary}</p>
          <p>{summary2}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutItem;
