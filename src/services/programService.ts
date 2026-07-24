import { Program } from "@/types/program";

export async function getPrograms(): Promise<Program[]> {
  const response = await fetch("/api/programs");

  if (!response.ok) {
    throw new Error("Failed to fetch programs");
  }

  return response.json();
}