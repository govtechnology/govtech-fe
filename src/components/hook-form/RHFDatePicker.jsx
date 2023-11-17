import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { FormLabel } from "../cnc/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../cnc/ui/popover";
import { Button } from "../cnc/ui/button";
import { cn } from "@/utils/cnc";
import { CalendarIcon } from "lucide-react";
import { formatDateNoTime } from "@/utils/dateFormatter";
import { Calendar } from "../Calendar";

RHFDatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFDatePicker({ name, label, helperText }) {
  const { control } = useFormContext();

  return (
    <div className="mt-3">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <div className="mb-1">
              <FormLabel>{label}</FormLabel>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {console.log(field.value)}
                  {field.value ? (
                    <span>{formatDateNoTime(field.value)}</span>
                  ) : (
                    <span>{helperText}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  captionLayout="dropdown-buttons"
                  fromYear={1960}
                  toYear={2030}
                  value={
                    typeof field.value === "number" && field.value === 0
                      ? ""
                      : field.value
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </>
        )}
      />
    </div>
  );
}
