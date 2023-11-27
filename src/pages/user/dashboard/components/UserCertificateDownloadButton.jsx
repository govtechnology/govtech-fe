/* eslint-disable react/prop-types */
import { Button } from "@/components/cnc/ui/button";
import { useGetUserLinkCertificateMutation } from "@/redux/api/certificateApi";

function UserCertificateDownloadButton({ skDir }) {
  const [getCertificateLink] = useGetUserLinkCertificateMutation();

  const handleGenerate = async () => {
    const link = await getCertificateLink({
      remotePath: skDir,
    }).unwrap();
    window.location.href = link.url;
  };

  return <Button onClick={handleGenerate}>Download</Button>;
}

export default UserCertificateDownloadButton;
