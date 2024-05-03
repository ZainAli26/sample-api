
module.exports = {
  "check-leaks": true,
  "enable-source-maps": true,
  exit: true,
  recursive: true,
  extensions: ["ts"],
  require: ["ts-node/register", "src/tests/mocha-hooks.ts"],
  spec: ["src/tests/**/*.spec.ts"],
  timeout: "10s",
  ui: "bdd",
};
