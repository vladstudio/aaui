// src/middleware/index.ts

import { defineMiddleware } from 'astro/middleware';
import { Database } from "bun:sqlite"

const dbPath = import.meta.env.MODE == 'development' ? "db/test.sqlite" : "/srv/aaui/db/test.sqlite"
console.log(dbPath)

export const onRequest = defineMiddleware(async ({ locals }: any, next: () => any) => {
  locals.db = new Database(dbPath)
  locals.db.exec("PRAGMA journal_mode = WAL;")
  const response = await next();
  return response;
});