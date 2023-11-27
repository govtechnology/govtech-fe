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

const SKIKSchema = Yup.object().shape({
  nikOrtu: Yup.string().required("NIK Ortu is required"),
  namaOrtu: Yup.string().required("Nama Orang Tua is required"),
  tempat_lahir_ortu: Yup.string().required(
    "Tempat Lahir Orang Tua is required"
  ),
  tanggal_lahir_ortu: Yup.string().required(
    "Tanggal Lahir Orang Tua is required"
  ),
  alamatOrtu: Yup.string().required("Alamat Orang Tua is required"),
  nik: Yup.string().required("NIK is required"),
  nama: Yup.string().required("Nama is required"),
  tempat_lahir: Yup.string().required("Tempat Lahir is required"),
  tanggal_lahir: Yup.date().required("Tanggal Lahir is required"),
  alamat: Yup.string().required("Alamat is required"),
  destination: Yup.string().required("Destination is required"),
});

const defaultValues = {
  nikOrtu: "",
  namaOrtu: "",
  tempat_lahir_ortu: "",
  tanggal_lahir_ortu: "",
  alamatOrtu: "",
  nik: "",
  nama: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  alamat: "",
  destination: "",
};

function SKIKFormContainer() {
  const [requestCertificate] = useRequestUserCertificateMutation();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    resolver: yupResolver(SKIKSchema),
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
      skType: "SKIK",
      skData: {
        nikOrtu: data.nikOrtu,
        namaOrtu: data.namaOrtu,
        ttlOrtu: `${data.tempat_lahir_ortu}, ${formatDateNoTime(
          data.tanggal_lahir_ortu
        )}`,
        alamatOrtu: data.alamatOrtu,
        nik: data.nik,
        nama: data.nama,
        ttl: `${data.tempat_lahir}, ${formatDateNoTime(data.tanggal_lahir)}`,
        alamat: data.alamat,
        destination: data.destination,
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
              name="nikOrtu"
              helperText="NIK orang tua anda"
              label="NIK Orang Tua / KTP"
            />
            <RHFTextField
              name="namaOrtu"
              helperText="Nama orang tua"
              label="Nama Orang Tua"
            />
            <div className="grid grid-cols-2 gap-6">
              <RHFTextField
                name="tempat_lahir_ortu"
                helperText="Tempat lahir orang tua"
                label="Tempat Lahir Orang Tua"
              />
              <RHFDatePicker
                name="tanggal_lahir_ortu"
                helperText="dd/mm/yy"
                label="Tanggal Lahir"
              />
            </div>
            <RHFTextArea
              name="alamatOrtu"
              helperText="Alamat orang tua"
              label="Alamat Orang Tua"
            />
          </div>
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
                name="tempat_lahir"
                helperText="Tempat lahir anda"
                label="Tempat Lahir"
              />
              <RHFDatePicker
                name="tanggal_lahir"
                helperText="dd/mm/yy"
                label="Tanggal Lahir"
              />
            </div>
            <RHFTextArea
              name="alamat"
              helperText="Alamat anda"
              label="Alamat Anda"
            />
            <RHFTextField
              name="destination"
              helperText="Negara tujuan anda"
              label="Negara Tujuan"
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

export default SKIKFormContainer;
