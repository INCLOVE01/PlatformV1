import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Field, FieldLabel, FieldError, FieldDescription } from "@/components/ui/field";
import { InputGroup, InputGroupTextarea, InputGroupAddon, InputGroupText } from "@/components/ui/input-group";

interface TextareaFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  maxLength: number;
  description?: string;
  showCharCount?: boolean;
  showWordCount?: boolean;
}

export function TextAreaField<T extends FieldValues>({ 
  control, 
  name, 
  label, 
  maxLength, 
  description,
  showCharCount = true,
  showWordCount = false
}: TextareaFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const charCount = field.value?.length || 0;
        const wordCount = field.value?.trim() ? field.value.trim().split(/\s+/).length : 0;

        return (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>{label}</FieldLabel>
            <InputGroup>
              <InputGroupTextarea 
                {...field} 
                className="h-24 max-h-32 scroll-auto text-sm" 
                maxLength={maxLength}
              />
              {(showCharCount || showWordCount) && (
                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">
                    {showCharCount && `${charCount}/${maxLength} chars`}
                    {showCharCount && showWordCount && " | "}
                    {showWordCount && `${wordCount} words`}
                  </InputGroupText>
                </InputGroupAddon>
              )}
            </InputGroup>
            {description && <FieldDescription>{description}</FieldDescription>}
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
}