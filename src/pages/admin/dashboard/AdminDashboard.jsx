import { Skeleton } from "@/components/cnc/ui/skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/cnc/ui/tabs";
import { useGetUserProfileQuery } from "@/redux/api/userApi";
import AdminOverviewTab from "./tabs/AdminOverviewTab";
import VerificationPanelTab from "./tabs/VerificationPanelTab";

function AdminDashboard() {
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
          <TabsTrigger value="verification">Panel Verifikasi</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <AdminOverviewTab />
        </TabsContent>
        <TabsContent value="verification">
          <VerificationPanelTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdminDashboard;
