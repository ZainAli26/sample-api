import { server } from "../app";

/**
 * https://mochajs.org/#root-hook-plugins
 */
export function mochaHooks(): Mocha.RootHookObject {
  return {
    async afterAll() {
      server.close();
    },
  };
}
