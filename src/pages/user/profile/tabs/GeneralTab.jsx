import { Icons } from "@/components/Icons";
import { Button } from "@/components/cnc/ui/button";
import { Input } from "@/components/cnc/ui/input";
import { Skeleton } from "@/components/cnc/ui/skeleton";
import RHFDatePicker from "@/components/hook-form/RHFDatePicker";
import RHFProvider from "@/components/hook-form/RHFProvider";
import RHFTextArea from "@/components/hook-form/RHFTextArea";
import RHFTextField from "@/components/hook-form/RHFTextField";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/userProfileApi";
import { BASE_API_URL } from "@/redux/config";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

function GeneralTab() {
  const { data: userProfileData, isSuccess: userProfileDataSuccess } =
    useGetUserProfileQuery();
  const [userProfileUpdate] = useUpdateUserProfileMutation();
  const [buttonLoading, setButtonLoading] = useState(false);
  const ProfileSchema = Yup.object().shape({});

  const defaultValues = {
    name:
      userProfileData && userProfileData.profile && userProfileData.profile.name
        ? userProfileData.profile.name
        : null,
    nik:
      userProfileData && userProfileData.profile && userProfileData.profile.nik
        ? userProfileData.profile.nik
        : null,
    tempatLahir:
      userProfileData &&
      userProfileData.profile &&
      userProfileData.profile.tempatLahir
        ? userProfileData.profile.tempatLahir
        : null,
    tanggalLahir:
      userProfileData &&
      userProfileData.profile &&
      userProfileData.profile.tanggalLahir
        ? userProfileData.profile.tanggalLahir
        : null,
    alamat:
      userProfileData &&
      userProfileData.profile &&
      userProfileData.profile.alamat
        ? userProfileData.profile.alamat
        : null,
    ktp:
      userProfileData && userProfileData.profile && userProfileData.profile.ktp
        ? userProfileData.profile.ktp
        : null,
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    setButtonLoading(true);
    userProfileUpdate({ data })
      .unwrap()
      .finally(() => {
        setButtonLoading(false);
      });
  };

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${BASE_API_URL}/ktp/process`, {
        // const response = await fetch(`http://localhost:5000/process`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      methods.setValue("name", result.data.fullname);
      methods.setValue("nik", result.data.identity_number);
      methods.setValue("tempatLahir", result.data.birth_place);
      methods.setValue("tanggalLahir", result.data.birth_date);
      methods.setValue("alamat", result.data.address);
      enqueueSnackbar(`Berhasil mendapatkan data dari KYC KTP`, {
        variant: "success",
        autoHideDuration: 1800,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div>
      <div>
        <h6 className="font-bold text-2xl mb-1">Masukkan Data</h6>
        <p className="text-gray-500">
          Isi data sesuai dengan identitas diri anda
        </p>
      </div>
      {userProfileDataSuccess ? (
        <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <RHFTextField
                name="name"
                helperText="Nama lengkap anda"
                label="Nama Lengkap"
              />
              <RHFTextField
                name="nik"
                helperText="NIK anda"
                label="NIK / No KTP"
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
              <Input
                placeholder="Masukkan KTP"
                type="file"
                onChange={onFileChange}
              />
            </div>
            {buttonLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
          </div>
          <Button className="align-end w-full mt-8" disabled={buttonLoading}>
            {buttonLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Kirim Data
          </Button>
        </RHFProvider>
      ) : (
        <Skeleton className="h-12 w-[224px] rounded-lg" />
      )}
    </div>
  );
}

export default GeneralTab;
