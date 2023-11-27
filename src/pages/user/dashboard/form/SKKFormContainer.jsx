import RHFTextField from "@/components/hook-form/RHFTextField";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RHFProvider from "@/components/hook-form/RHFProvider";
import { useState } from "react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/cnc/ui/button";
import RHFDatePicker from "@/components/hook-form/RHFDatePicker";
import { useRequestUserCertificateMutation } from "@/redux/api/certificateApi";
import { useSnackbar } from "notistack";

const SKKSchema = Yup.object().shape({
  nama: Yup.string().required("Nama is required"),
  jenisKelamin: Yup.string().required("Jenis Kelamin is reqired"),
  alamat: Yup.string().required("Alamat is required"),
  umur: Yup.string().required("Umur is required"),
  hariMeninggal: Yup.string().required("Hari Meniggal is required"),
  tanggalMeninggal: Yup.date().required("Tanggal Meninggal is required"),
  lokasiMeninggal: Yup.string().required("Lokasi Meninggal is required"),
  sebab: Yup.string().required("Sebab Meninggal is required"),
});

const defaultValues = {
  nama: "",
  jenisKelamin: "",
  alamat: "",
  umur: "",
  hariMeninggal: "",
  tanggalMeninggal: "",
  lokasiMeninggal: "",
  sebab: "",
};

function SKKFormContainer() {
  const [requestCertificate] = useRequestUserCertificateMutation();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    resolver: yupResolver(SKKSchema),
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
      skType: "SKK",
      skData: {
        nama: data.nama,
        jenisKelamin: data.jenisKelamin,
        alamat: data.alamat,
        umur: data.umur,
        hariMeninggal: data.hariMeninggal,
        tanggalMeninggal: data.tanggalMeninggal,
        lokasiMeninggal: data.lokasiMeninggal,
        sebab: data.sebab,
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
          Isi data sesuai dengan identitas diri mendiang
        </p>
      </div>
      <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <RHFTextField
              name="nama"
              helperText="Nama lengkap mendiang"
              label="Nama Lengkap"
            />
            <RHFTextField
              name="jenisKelamin"
              helperText="Jenis Kelamin"
              label="Jenis Kelamin"
            />
            <RHFTextField
              name="alamat"
              helperText="Alamat terakhir"
              label="Alamat Terakhir"
            />
            <RHFTextField
              name="umur"
              helperText="Meninggal pada umur"
              label="Umur"
            />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6">
              <RHFTextField
                name="hariMeninggal"
                helperText="Hari meninggal"
                label="Hari Meninggal"
              />
              <RHFDatePicker
                name="tanggalMeninggal"
                helperText="dd/mm/yy"
                label="Tanggal Meninggal"
              />
            </div>
            <RHFTextField
              name="lokasiMeninggal"
              helperText="Lokasi meninggal"
              label="Lokasi Meninggal"
            />
            <RHFTextField
              name="sebab"
              helperText="Sebab meninggal"
              label="Sebab Meninggal"
            />
          </div>
        </div>
        <Button className="align-end w-full mt-8" disabled={buttonLoading}>
          {buttonLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Kirim Data
        </Button>
      </RHFProvider>
    </div>
  );
}

export default SKKFormContainer;
