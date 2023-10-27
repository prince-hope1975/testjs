import { schedule } from "node-cron";
import { exec } from "child_process";
// Define the process name (you can change this if you're looking for Chromium or a specific Chrome variant)
const processName = "chrome";

// Define a cron schedule (every 1 hours)
const cronSchedule = "*/2 * * * *";

// Function to check and terminate Chrome processes
function checkAndTerminateProcesses() {
  exec(`pgrep -f ${processName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running pgrep: ${error.message}`);
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    } else {
      const pids = stdout.trim().split("\n");
      pids.forEach((pid) => {
        exec(`kill -9 ${pid}`, (err, stdout, stderr) => {
          console.error({ err, stdout, stderr });
        });
      });
    }
  });
}

// Schedule the function to run periodically
schedule(cronSchedule, () => {
  try {
    checkAndTerminateProcesses();
  } catch (error) {
    console.error(error);
  }
});

console.log(
  "Cron job scheduled to run every 30th  minuite.",
  console.log(new Date().toLocaleTimeString())
);
