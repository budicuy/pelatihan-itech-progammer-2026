import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  nama: varchar("nama", { length: 255 }).notNull(),
  nim: varchar("nim", { length: 50 }).notNull().unique(),
  prodi: varchar("prodi", { length: 255 }).notNull(),
  motivasi: text("motivasi").notNull(),
  quote: text("quote").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
