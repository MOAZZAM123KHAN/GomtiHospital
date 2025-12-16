// src/lib/publicAppointmentApi.ts
import axios from "@/lib/axios";

export const publicAppointmentApi = {
  // Book a new appointment
  bookAppointment: (data: {
    name: string;
    phone: string;
    email?: string;
    appointmentDate: string;
    appointmentTime?: string;
    disease?: string;
  }) => axios.post("/appointments", data).then(res => res.data),

  // Get appointment status by phone
  getAppointmentStatus: (phone: string) =>
    axios.get("/appointments/status", { params: { phone } }).then(res => res.data),
};
