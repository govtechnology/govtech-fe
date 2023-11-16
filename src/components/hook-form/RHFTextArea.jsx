import { Textarea } from "../cnc/ui/textarea";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { Label } from "../cnc/ui/label";

RHFTextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextArea({ name, label, helperText }) {
  const { control } = useFormContext();

  return (
    <div className="mt-3">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="mb-1">
              <Label>{label}</Label>
            </div>
            <Textarea
              {...field}
              className="resize-none"
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
    </div>
  );
}
