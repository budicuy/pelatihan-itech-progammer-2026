"use server";

import { count, eq } from "drizzle-orm";
import { db } from "@/db";
import { registrations } from "@/db/schema";

export async function registerAction(formData: {
  nama: string;
  nim: string;
  prodi: string;
  motivasi: string;
  quote: string;
}) {
  try {
    // 1. Cek total kuota (Limit 30)
    const [registrationCount] = await db
      .select({ value: count() })
      .from(registrations);

    if (registrationCount.value >= 30) {
      return {
        success: false,
        error: "Maaf, kuota pendaftaran sudah penuh (maksimal 30 orang).",
      };
    }

    // 2. Cek apakah NIM sudah terdaftar
    const existingEntry = await db
      .select()
      .from(registrations)
      .where(eq(registrations.nim, formData.nim))
      .limit(1);

    if (existingEntry.length > 0) {
      return {
        success: false,
        error: "NIM ini sudah terdaftar. Kamu hanya bisa mendaftar satu kali.",
      };
    }

    // 3. Simpan data
    await db.insert(registrations).values({
      nama: formData.nama,
      nim: formData.nim,
      prodi: formData.prodi,
      motivasi: formData.motivasi,
      quote: formData.quote,
    });
    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, error: "Gagal menyimpan data ke database" };
  }
}
