import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely flattens a Supabase join result.
 * If the result is an array, it returns the first element.
 * If it's already an object, it returns it directly.
 */
export function flatten<T>(data: T | T[] | null | undefined): T | null | undefined {
  if (!data) return null;
  return Array.isArray(data) ? data[0] : data;
}