import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/cnc/ui/accordion";
import { cn } from "@/utils/cnc";

const FaqPage = () => {
  return (
    <div
      data-aos="fade-down"
      className="container max-w-screen-xl mt-32 mb-8 px-8"
    >
      <div className="gap-12 grid md:grid-cols-2">
        <div>
          <h1 className="font-bold text-3xl mb-4">Pertanyaan umum</h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className={`${cn("text-start")}`}>
                Apakah Sistem Administrasi Digital aman?
              </AccordionTrigger>
              <AccordionContent>
                Ya, sebagian besar Sistem Administrasi Digital dilengkapi dengan
                fitur keamanan yang kuat untuk melindungi data surat elektronik
                Anda. Ini mencakup enkripsi data, otentikasi pengguna, dan akses
                terbatas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className={`${cn("text-start")}`}>
                Apa keunggulan sistem ini dibandingkan dengan metode manual?
              </AccordionTrigger>
              <AccordionContent>
                Sistem Administrasi Digital menghemat waktu, mengurangi
                kesalahan, meningkatkan aksesibilitas data, dan memungkinkan
                kolaborasi tim yang lebih baik.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className={`${cn("text-start")}`}>
                Apa kebijakan privasi dan keamanan yang diterapkan oleh layanan
                ini?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <img src="/assets/images/faq_ill.png" />
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
