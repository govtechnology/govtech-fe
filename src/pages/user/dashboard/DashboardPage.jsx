import { Skeleton } from "@/components/cnc/ui/skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/cnc/ui/tabs";
import CheckTab from "./tabs/CheckTab";
import OverviewTab from "./tabs/OverviewTab";
import RequestTab from "./tabs/RequestTab";
import { useGetUserProfileQuery } from "@/redux/api/userProfileApi";

function DashboardPage() {
  const { data: userProfileData, isSuccess: userProfileSuccess } =
    useGetUserProfileQuery();

  return (
    <div
      data-aos="fade-down"
      className="container max-w-screen-xl mt-32 mb-8 px-8"
    >
      <div className="mb-4">
        {userProfileSuccess ? (
          <h3 className="font-bold text-2xl">
            {"Halo, " + userProfileData.profile.name}
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
          <OverviewTab />
        </TabsContent>
        <TabsContent value="request">
          <RequestTab />
        </TabsContent>
        <TabsContent value="check">
          <CheckTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DashboardPage;
