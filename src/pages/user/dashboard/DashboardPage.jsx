import { Badge } from "@/components/cnc/ui/badge";
import { Skeleton } from "@/components/cnc/ui/skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/cnc/ui/tabs";
import { useGetUserProfileQuery } from "@/redux/api/userApi";
import { cn } from "@/utils/cnc";
import RecentCertificateItem from "./components/RecentCertificateItem";

function DashboardPage() {
  const { data: userData, isSuccess: userSuccess } = useGetUserProfileQuery();

  return (
    <div
      data-aos="fade-down"
      className="container max-w-screen-xl mt-32 mb-8 px-8"
    >
      <div className="mb-4">
        {userSuccess ? (
          <h3 className="font-bold text-2xl">
            {"Halo, " + userData.user.name}
          </h3>
        ) : (
          <Skeleton className="h-12 w-[224px] rounded-lg" />
        )}
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="request">Urus Surat</TabsTrigger>
          <TabsTrigger value="check">Cek Status</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="flex justify-center items-center flex-col w-full h-full max-w-4xl border border-gray-100 rounded-lg p-16">
              <img
                className="max-w-[284px]"
                src="/assets/images/dashboard_user_empty.png"
              />
              <h4 className="font-bold text-xl text-center">
                Tidak Ada Permintaan <br />
                Surat Keterangan
              </h4>
            </div>
            <div className="flex justify-center flex-col w-full h-full border border-gray-100 rounded-lg p-8">
              <div>
                <h6 className="font-bold text-lg">Riwayat Permintaan Surat</h6>
                <h6>Riwayat surat yang telah di verifikasi</h6>
              </div>
              <div className="flex flex-col gap-8 mt-8">
                <RecentCertificateItem
                  requestDate="8 Agustus 2023"
                  approveDate="10 Agustus 2023"
                  skType="SKTM"
                />
                <RecentCertificateItem
                  requestDate="24 November 2023"
                  approveDate="30 November 2023"
                  skType="SKCK"
                />
                <RecentCertificateItem
                  requestDate="18 Januari 2023"
                  approveDate="20 Januari 2023"
                  skType="SKIK"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="request">Container Urus Surat</TabsContent>
        <TabsContent value="check">Container Cek Status</TabsContent>
      </Tabs>
    </div>
  );
}

export default DashboardPage;
