import { date, z } from "zod";

export const bookingSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone_number: z.string().min(1, { message: "Phone number is required" }),
    started_at: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date'),
    office_space_id: z.number().min(1, { message: "Office space id is required" }),
})

// untuk melihat booking yang sudah ada
export const viewBookingSchema = z.object({
    booking_trx_id: z.string().min(1, { message: "Booking transaction id is required" }),
    phone_number: z.string().min(1, { message: "Phone number is required" })
})