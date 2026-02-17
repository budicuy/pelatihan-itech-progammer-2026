"use server";

import { count } from "drizzle-orm";
import { db } from "@/db";
import { registrations } from "@/db/schema";

/**
 * Get the current total number of registrations
 */
export async function getRegistrationCount() {
  try {
    const [result] = await db.select({ value: count() }).from(registrations);
    return result.value;
  } catch (error) {
    console.error("Error fetching registration count:", error);
    return 0;
  }
}
