import { schedule } from "node-cron";
import { exec as _exec } from "child_process";
import util from "node:util";
const exec = util.promisify(_exec); // Define// import {} from "";
// Define the process name (you can change this if you're looking for Chromium or a specific Chrome variant)
const processName = "chrome";

// Define a cron schedule (every 1 hours)
const cronSchedule = "26 */1 * * *";

// Function to check and terminate Chrome processes
async function checkAndTerminateProcesses() {
  try {
    await exec(`pkill -f -x ${processName}`);
    console.log("Code ran after process");
  } catch (error) {
    console.error(`Error terminating Chrome processes: ${error}`);
  }
}

// Schedule the function to run periodically
console.log(
  "Cron job scheduled to run every 30th  minuite.",
  console.log(new Date().toLocaleTimeString())
);
let cnt = 0;

schedule(cronSchedule, async () => {
  console.log("running cron ", cnt);
  cnt++;

  await checkAndTerminateProcesses()
    .then(() => {
      console.log("Finishing Cron Job");
    })
    .catch(console.error);
});
