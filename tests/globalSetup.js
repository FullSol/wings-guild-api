const { execSync } = require("child_process");
const path = require("path");

function runMigrations() {
  console.log("Running migrations...");

  const migrateCommand = `sequelize db:migrate --config ${path.join(
    __dirname,
    "../src/config/config.js"
  )} --env test`;
  execSync(migrateCommand);

  console.log("Migrations completed.");
}

runMigrations();
