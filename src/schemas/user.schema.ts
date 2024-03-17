import { z } from "zod";

export const carsSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(255),
  description: z.string().max(255).optional(),
  brand: z.string().min(1).max(255),
  year: z.number().min(1),
  km: z.number().min(1),
});

export const carsCreateSchema = carsSchema.omit({ id: true });

export const carsUpdateSchema = carsCreateSchema.partial();

export type TCarsCreate = z.infer<typeof carsCreateSchema>;

export type TCarsUpdate = z.infer<typeof carsUpdateSchema>;

export type TCars = z.infer<typeof carsSchema>;
