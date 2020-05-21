import { Plugin } from "@nuxt/types";
import Redis from "ioredis";

const client = Redis({
  host: "localhost",
  port: 6379
});

declare module "@nuxt/types" {
  interface Context {
    $redis: Redis.Redis;
  }
}

const redisPlugin: Plugin = context => {
  context.$redis = client;
};

export default redisPlugin;
