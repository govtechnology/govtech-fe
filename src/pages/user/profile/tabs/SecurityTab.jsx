import { useGetUserQuery } from "@/redux/api/userApi";
import IBMFAModal from "../components/IBMFAModal";
import IBMFADisableModal from "../components/IBMFADisableModal";

function SecurityTab() {
  const { data: userData } = useGetUserQuery();

  return (
    <div>
      <div>
        <h6 className="font-bold text-2xl mb-1">Keamanan Akun</h6>
        <p className="text-gray-500">Pengaturan tentang keamanan akun anda</p>
      </div>
      <div className="mt-8">
        {userData.ibmfa.enabled && userData.ibmfa.verified ? (
          <IBMFADisableModal />
        ) : (
          <IBMFAModal />
        )}
      </div>
    </div>
  );
}

export default SecurityTab;
