import {
  VTabs,
  VTabsContent,
  VTabsList,
  VTabsTrigger,
} from "@/components/VerticalTabs";
import SKIKFormContainer from "../form/SKIKFormContainer";
import SKTMFormContainer from "../form/SKTMFormContainer";
import SKPBFormContainer from "../form/SKPBFormContainer";
import SKKFormContainer from "../form/SKKFormContainer";

function RequestTab() {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col-reverse md:flex-row gap-8">
      <VTabs defaultValue="SKIK">
        <VTabsList>
          <VTabsTrigger value="SKIK">SK Izin Keluarga</VTabsTrigger>
          <VTabsTrigger value="SKTM">SK Tidak Mampu</VTabsTrigger>
          <VTabsTrigger value="SKMS">SK Membeli Solar</VTabsTrigger>
          <VTabsTrigger value="SKCK">SK Catatan Kepolisian</VTabsTrigger>
          <VTabsTrigger value="SKU">SK Usaha</VTabsTrigger>
          <VTabsTrigger value="SKHIL">SK Kehilangan</VTabsTrigger>
          <VTabsTrigger value="SKD">SK Domisili</VTabsTrigger>
          <VTabsTrigger value="SKDI">SK Domisili Instansi</VTabsTrigger>
          <VTabsTrigger value="SKPB">SK Pengajuan Bank</VTabsTrigger>
          <VTabsTrigger value="SKK">SK Kematian</VTabsTrigger>
        </VTabsList>
        <VTabsContent value="SKIK">
          <SKIKFormContainer />
        </VTabsContent>
        <VTabsContent value="SKTM">
          <SKTMFormContainer />
        </VTabsContent>
        <VTabsContent value="SKMS">
          <>T3</>
        </VTabsContent>
        <VTabsContent value="SKCK">
          <>T3</>
        </VTabsContent>
        <VTabsContent value="SKU">
          <>T3</>
        </VTabsContent>
        <VTabsContent value="SKHIL">
          <>T3</>
        </VTabsContent>
        <VTabsContent value="SKD">
          <>T3</>
        </VTabsContent>
        <VTabsContent value="SKDI">
          <>T3</>
        </VTabsContent>
        <VTabsContent value="SKPB">
          <SKPBFormContainer />
        </VTabsContent>
        <VTabsContent value="SKK">
          <SKKFormContainer />
        </VTabsContent>
      </VTabs>
    </div>
  );
}

export default RequestTab;
