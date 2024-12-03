import { useDebounce } from "@uidotdev/usehooks";
import { ComponentProps, FC, useEffect, useState } from "react";

interface DebouncedInputProps extends Omit<ComponentProps<"input">, 'onChange'> {
  debounceTime?: number;
  onChange: (value: string) => void;
}

export const DebouncedInput: FC<DebouncedInputProps> = ({
  value,
  onChange,
  debounceTime = 300,
  ...rest
}) => {
  const [localValue, setLocalValue] = useState(value);

  const debouncedValue = useDebounce(localValue, debounceTime);

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange?.(debouncedValue as string);
    }
  }, [debouncedValue, onChange, value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={localValue}
      onChange={handleInputChange}
      {...rest}
    />
  );
};
