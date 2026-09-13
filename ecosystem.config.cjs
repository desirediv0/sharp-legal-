module.exports = {
  apps: [
    {
      name: "sharp-legal",
      script: "pnpm",
      args: "start",
      cwd: "/root/sharp-legal-",
      env: {
        NODE_ENV: "production",
        PORT: 7000
      }
    }
  ]
};
