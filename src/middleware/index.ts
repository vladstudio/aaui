// src/middleware/index.ts

import { defineMiddleware } from 'astro/middleware';
import { Database } from "bun:sqlite"

export const onRequest = defineMiddleware(async ({ locals }: any, next: () => any) => {
  locals.db = new Database("db/test.sqlite")
  locals.db.exec("PRAGMA journal_mode = WAL;")
  const response = await next();
  return response;
});