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

const SKDSchema = Yup.object().shape({
  nik: Yup.string().required("NIK is required"),
  nama: Yup.string().required("Nama is required"),
  tempatLahir: Yup.string().required("Tempat Lahir is required"),
  tanggalLahir: Yup.date().required("Tanggal Lahir is required"),
  alamat: Yup.string().required("Alamat is required"),
  agama: Yup.string().required("Agama is required"),
  kelamin: Yup.string().required("Kelamin is required"),
  status: Yup.string().required("Status is required"),
  pekerjaan: Yup.string().required("Pekerjaan is required"),
});

const defaultValues = {
  nik: "",
  nama: "",
  tempatLahir: "",
  tanggaLahir: "",
  alamat: "",
  kelamin: "",
  agama: "",
  status: "",
  pekerjaan: "",
};

function SKDFormContainer() {
  const [requestCertificate] = useRequestUserCertificateMutation();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    resolver: yupResolver(SKDSchema),
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
      skType: "SKD",
      skData: {
        nik: data.nik,
        nama: data.nama,
        ttl: `${data.tempatLahir}, ${formatDateNoTime(data.tanggalLahir)}`,
        alamat: data.alamat,
        agama: data.agama,
        kelamin: data.kelamin,
        status: data.status,
        pekerjaan: data.pekerjaan,
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
            <RHFTextField name="agama" helperText="Agama anda" label="Agama" />

            <RHFTextField
              name="kelamin"
              helperText="Kelamin anda"
              label="Kelamin"
            />

            <RHFTextField
              name="status"
              helperText="Status anda"
              label="Status"
            />

            <RHFTextField
              name="pekerjaan"
              helperText="Pekerjaan anda"
              label="Pekerjaan"
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

export default SKDFormContainer;
