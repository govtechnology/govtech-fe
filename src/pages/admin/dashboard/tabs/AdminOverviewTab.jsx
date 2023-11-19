import { Skeleton } from "@/components/cnc/ui/skeleton";
import { useGetUserCertificateQuery } from "@/redux/api/certificateApi";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import RecentRequestCertificateItem from "./RecentRequestCertificateItem";

function AdminOverviewTab() {
  const { data: certificateData, isSuccess } = useGetUserCertificateQuery();

  const splitByMonth = (req, data) => {
    let total = 0;

    data.forEach((item) => {
      const requestDate = new Date(item.requestDate);
      const month = requestDate.getMonth() + 1;

      if (month === req) {
        total += 1;
      }
    });
    return total;
  };

  const data = [
    {
      name: "Jan",
      total: isSuccess ? splitByMonth(1, certificateData.certificate) : 0,
    },
    {
      name: "Feb",
      total: isSuccess ? splitByMonth(2, certificateData.certificate) : 0,
    },
    {
      name: "Mar",
      total: isSuccess ? splitByMonth(3, certificateData.certificate) : 0,
    },
    {
      name: "Apr",
      total: isSuccess ? splitByMonth(4, certificateData.certificate) : 0,
    },
    {
      name: "Mei",
      total: isSuccess ? splitByMonth(5, certificateData.certificate) : 0,
    },
    {
      name: "Jun",
      total: isSuccess ? splitByMonth(6, certificateData.certificate) : 0,
    },
    {
      name: "Jul",
      total: isSuccess ? splitByMonth(7, certificateData.certificate) : 0,
    },
    {
      name: "Agu",
      total: isSuccess ? splitByMonth(8, certificateData.certificate) : 0,
    },
    {
      name: "Sep",
      total: isSuccess ? splitByMonth(9, certificateData.certificate) : 0,
    },
    {
      name: "Okt",
      total: isSuccess ? splitByMonth(10, certificateData.certificate) : 0,
    },
    {
      name: "Nov",
      total: isSuccess ? splitByMonth(11, certificateData.certificate) : 0,
    },
    {
      name: "Des",
      total: isSuccess ? splitByMonth(12, certificateData.certificate) : 0,
    },
  ];

  return (
    <div data-aos="fade-down" className="flex flex-col md:flex-col gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex justify-center flex-col w-full  border border-gray-100 rounded-lg p-8">
          <h4 className="text-lg mb-5">Total Surat Keterangan</h4>
          <p className="text-4xl font-bold">40</p>
        </div>
        <div className="flex justify-center flex-col w-full  border border-gray-100 rounded-lg p-8">
          {" "}
          <h4 className="text-lg mb-5">Surat Perlu Di Verifikasi</h4>
          <p className="text-4xl font-bold">11</p>
        </div>
        <div className="flex justify-center flex-col w-full  border border-gray-100 rounded-lg p-8">
          {" "}
          <h4 className="text-lg mb-5">Surat Perlu Di Revisi</h4>
          <p className="text-4xl font-bold">23</p>
        </div>
        <div className="flex justify-center flex-col w-full  border border-gray-100 rounded-lg p-8">
          {" "}
          <h4 className="text-lg mb-5">Surat Berhasil</h4>
          <p className="text-4xl font-bold">43</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex justify-center items-center flex-col w-full md:w-[60%] h-full max-w-4xl border border-gray-100 rounded-lg p-8">
          <div className="w-full mb-8">
            <h6 className="font-bold text-lg text-start">
              Statistik Permintaan Surat
            </h6>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => Math.floor(value)}
              />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center flex-col w-full md:w-[40%] h-full border border-gray-100 rounded-lg p-8">
          <div>
            <h6 className="font-bold text-lg">Permintaan Surat Terbaru</h6>
            <h6>Permintaan surat yang belum di verifikasi</h6>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            {isSuccess ? (
              certificateData.certificate
                .slice(0, 4)
                .map((certificate, index) => (
                  <>
                    <RecentRequestCertificateItem
                      key={index}
                      skType={certificate.skType}
                      name={certificate.skData.nama}
                      email="xyzuannihboss@gmail.com"
                      requestDate={certificate.requestDate}
                    />
                  </>
                ))
            ) : (
              <Skeleton className="h-12 w-[224px] rounded-lg" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOverviewTab;
