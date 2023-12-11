import RHFTextField from "@/components/hook-form/RHFTextField";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RHFProvider from "@/components/hook-form/RHFProvider";
import { useState } from "react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/cnc/ui/button";
import RHFTextArea from "@/components/hook-form/RHFTextArea";
import { useRequestUserCertificateMutation } from "@/redux/api/certificateApi";
import RHFDatePicker from "@/components/hook-form/RHFDatePicker";
import { formatDateNoTime } from "@/utils/dateFormatter";
import { useSnackbar } from "notistack";
import { useGetUserProfileQuery } from "@/redux/api/userProfileApi";

const SKMSSchema = Yup.object().shape({
  nik: Yup.string().required("NIK is required"),
  nama: Yup.string().required("Nama is required"),
  tempatLahir: Yup.string().required("Tempat Lahir is required"),
  tanggalLahir: Yup.date().required("Tanggal Lahir is required"),
  alamat: Yup.string().required("Alamat is required"),
  usaha: Yup.string().required("Pekerjaan is required"),
  jenisAlat: Yup.string().required("Jenis Alat is required"),
  jumlahAlat: Yup.string().required("Jumlah Alat is required"),
  fungsiAlat: Yup.string().required("Fungsi Alat is required"),
  jenisBBM: Yup.string().required("Jenis BBM is required"),
  kodeSPBU: Yup.string().required("Kode SPBU is required"),
  tglBerlaku: Yup.date().required("Tanggal Berlaku is required"),
  lokasiSPBU: Yup.string().required("Tanggal Berlaku is required"),
});

function SKMSFormContainer() {
  const { data: userProfile } = useGetUserProfileQuery();
  const [requestCertificate] = useRequestUserCertificateMutation();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const defaultValues = {
    nik: userProfile.profile.nik,
    nama: userProfile.profile.name,
    tempatLahir: userProfile.profile.tempatLahir,
    tanggalLahir: userProfile.profile.tanggalLahir,
    jenisKelamin: "",
    alamat: "",
    usaha: "",
    jenisAlat: "",
    jumlahAlat: "",
    fungsiAlat: "",
    jenisBBM: "",
    kodeSPBU: "",
    tglBerlaku: "",
    lokasiSPBU: "",
  };

  const methods = useForm({
    resolver: yupResolver(SKMSSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    setButtonLoading(true);
    requestCertificate({
      skType: "SKMS",
      skData: {
        nik: data.nik,
        nama: data.nama,
        ttl: `${data.tempatLahir}, ${formatDateNoTime(data.tanggalLahir)}`,
        alamat: data.alamat,
        usaha: data.usaha,
        jenisAlat: data.jenisAlat,
        jumlahAlat: data.jumlahAlat,
        fungsiAlat: data.fungsiAlat,
        jenisBBM: data.jenisBBM,
        kodeSPBU: data.kodeSPBU,
        lokasiSPBU: data.lokasiSPBU,
        tglBerlaku: data.tglBerlaku,
      },
    })
      .then((res) => {
        if (res.data.success) {
          enqueueSnackbar("Permintaan Surat berhasil Diterima", {
            variant: "success",
            autoHideDuration: 1800,
          });
        } else {
          enqueueSnackbar(`Error: ${res}`);
        }
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  return (
    <div>
      <div>
        <h6 className="font-bold text-2xl mb-1">Masukkan Data</h6>
        <p className="text-gray-500">
          Isi data sesuai dengan identitas diri anda
        </p>
      </div>
      <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <RHFTextField
              name="nik"
              helperText="NIK anda"
              label="NIK / No KTP"
            />
            <RHFTextField
              name="nama"
              helperText="Nama lengkap anda"
              label="Nama Lengkap"
            />
            <div className="grid grid-cols-2 gap-6">
              <RHFTextField
                name="tempatLahir"
                helperText="Tempat lahir anda"
                label="Tempat Lahir"
              />
              <RHFDatePicker
                name="tanggalLahir"
                helperText="dd/mm/yy"
                label="Tanggal Lahir"
              />
            </div>
            <RHFTextArea
              name="alamat"
              helperText="Alamat anda"
              label="Alamat Anda"
            />
          </div>
          <div>
            <RHFTextField
              name="usaha"
              helperText="Jenis Usaha Anda"
              label="Jenis Usaha"
            />
            <RHFTextField
              name="jenisAlat"
              helperText="Jenis Alat "
              label="Jenis Alat"
            />

            <RHFTextField
              name="jumlahAlat"
              helperText="Jumlah Alat "
              label="Jumlah Alat"
            />

            <RHFTextField
              name="fungsiAlat"
              helperText="Fungsi Alat "
              label="Fungsi Alat"
            />

            <RHFTextField
              name="jenisBBM"
              helperText="Jenis BBM yang diperlukan "
              label="Jenis BBM"
            />

            <div className="grid grid-cols-2 gap-6">
              <RHFTextField
                name="kodeSPBU"
                helperText="Tempat lahir anda"
                label="Kode SPBU"
              />
              <RHFDatePicker
                name="tglBerlaku"
                helperText="dd/mm/yy"
                label="Tanggal Berlaku"
              />
            </div>
            <RHFTextField
              name="lokasiSPBU"
              helperText="Lokasi SPBUnya "
              label="Lokasi SPBU"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="align-end w-full mt-8"
          disabled={buttonLoading}
        >
          {buttonLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Kirim Data
        </Button>
      </RHFProvider>
    </div>
  );
}

export default SKMSFormContainer;
