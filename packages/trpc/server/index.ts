import { z } from "zod";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  userList: publicProcedure
    .input(z.optional(z.object({ id: z.number() })))
    .query(async () => {
      return [];
    }),
});

export type AppRouter = typeof appRouter;
