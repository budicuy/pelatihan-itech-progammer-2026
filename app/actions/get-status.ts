"use server";

export async function getRegistrationStatus() {
  return process.env.REGISTRATION?.toUpperCase() === "TRUE";
}
