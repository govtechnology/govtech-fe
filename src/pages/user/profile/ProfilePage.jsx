import {
  VTabs,
  VTabsContent,
  VTabsList,
  VTabsTrigger,
} from "@/components/VerticalTabs";
import GeneralTab from "./tabs/GeneralTab";

export default function ProfilePage() {
  return (
    <div
      data-aos="fade-down"
      className="container max-w-screen-xl gap-8 px-8 mt-32"
    >
      <div className="ml-3 mb-6">
        <h6 className="font-bold text-2xl">Profil Saya</h6>
        <p className="text-gray-500">
          Isi data sesuai dengan identitas diri anda
        </p>
      </div>
      <VTabs defaultValue="general">
        <VTabsList>
          <VTabsTrigger value="general">Informasi Umum</VTabsTrigger>
        </VTabsList>
        <VTabsContent value="general">
          <GeneralTab />
        </VTabsContent>
      </VTabs>
    </div>
  );
}
