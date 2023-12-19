/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import AboutSection from "./sections/about.section";
import HeroSection from "./sections/hero.section";
import StepSection from "./sections/step.section";

function HomePage() {

  useEffect(() => {
    if (!document.getElementById('watson-assistant-script')) {
      window.watsonAssistantChatOptions = {
        integrationID: "e7deb3aa-60ec-4c37-a30f-cba67182d6ba",
        region: "us-south",
        serviceInstanceID: "fe614854-67f6-4e56-b49b-99e54b50d9f2",
        onLoad: async (instance) => { await instance.render(); }
      };
  
      const script = document.createElement('script');
      script.id = 'watson-assistant-script';
      script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  
      document.head.appendChild(script);
    }
  }, []);
  

  return (
    <div className="flex flex-col container max-w-screen-xl overflow-hidden md:overflow-visible">
      <HeroSection />
      <StepSection />
      <AboutSection />
    </div>
  );
}

export default HomePage;
