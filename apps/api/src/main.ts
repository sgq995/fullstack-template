import fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "@project/trpc/server";

const envToLogger = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
};

type Environment = keyof typeof envToLogger;

const environment: Environment =
  (process.env["NODE_ENV"] as Environment) ?? "production";

const app = fastify({ logger: envToLogger[environment], maxParamLength: 5000 });

app.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter },
});

app.get("/", async function handler(request, reply) {
  return { hello: "world!" };
});

app.get("/test", async function handler(request, reply) {
  return { test: "test" };
});

app.listen({ port: 3000 }).catch((reason) => {
  app.log.error(reason);
  process.exit(1);
});
