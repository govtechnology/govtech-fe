import { Input } from "@/components/cnc/ui/input";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { Label } from "../cnc/ui/label";

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextField({ name, label, helperText }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Label>{label}</Label>
          <Input
            {...field}
            placeholder={helperText}
            value={
              typeof field.value === "number" && field.value === 0
                ? ""
                : field.value
            }
            error={!!error}
          />
        </>
      )}
    />
  );
}
