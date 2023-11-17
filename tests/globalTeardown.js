const { execSync } = require("child_process");
const path = require("path");

function undoMigrations() {
  console.log("Running cleanup...");

  const migrateCommand = `sequelize db:migrate:undo:all --config ${path.join(
    __dirname,
    "../src/config/config.js"
  )} --env test`;
  execSync(migrateCommand);

  console.log("Cleanup completed.");
}

undoMigrations();
