import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { FormLabel } from "../cnc/ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../cnc/ui/select";

RHFSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
  children: PropTypes.any,
};

export default function RHFSelect({ name, label, helperText, children }) {
  const { control } = useFormContext();

  return (
    <div className="mt-3">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="z-1">
            <div className="mb-1">
              <FormLabel>{label}</FormLabel>
            </div>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder={helperText} />
              </SelectTrigger>
              <SelectContent>{children}</SelectContent>
            </Select>
            {error && (
              <>
                {console.log(field)}
                <p className="mt-2 text-sm font-medium text-red-500 dark:text-red-900">
                  {error.message}
                </p>
              </>
            )}
          </div>
        )}
      />
    </div>
  );
}
