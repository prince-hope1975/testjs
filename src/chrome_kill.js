import {schedule} from "node-cron";
import { exec } from "child_process";
// Define the process name (you can change this if you're looking for Chromium or a specific Chrome variant)
const processName = "chrome";

// Define a cron schedule (every 1 hours)
const cronSchedule = "30 */1 * * *";

// Function to check and terminate Chrome processes
function checkAndTerminateProcesses() {
  exec(`pkill -f ${processName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error terminating Chrome processes: ${error}`);
    } else {
      console.log(stdout);
    }
  });
}

// Schedule the function to run periodically
schedule(cronSchedule, checkAndTerminateProcesses, {
  scheduled: true,
  timezone: "your-timezone",
});

console.log("Cron job scheduled to run every 2 hours.");
