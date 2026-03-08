import { Control } from "react-hook-form"

export interface BaseFieldProps {
  control: Control<any>
  name: string
  label: string
  className?: string
  placeholder?: string
  maxLength?: number
}