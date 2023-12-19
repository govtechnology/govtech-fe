import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { FormLabel } from "../cnc/ui/form";
import { Input } from "../cnc/ui/input";

RHFFilePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFFilePicker({ name, label, helperText }) {
  const { control } = useFormContext();

  return (
    <div className="mt-3">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="mb-1">
              <FormLabel>{label}</FormLabel>
            </div>
            <Input
              {...field}
              placeholder={helperText}
              value={
                typeof field.value === "number" && field.value === 0
                  ? ""
                  : field.value
              }
              type="file"
              error={!!error}
            />
          </>
        )}
      />
    </div>
  );
}
