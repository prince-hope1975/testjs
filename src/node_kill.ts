import { schedule } from "node-cron";
import { exec as _exec } from "child_process";
import util from "node:util";
const exec = util.promisify(_exec);
// const exec = util.promisify(_exec); // Define// import {} from "";
// Define the process name (you can change this if you're looking for Chromium or a specific Chrome variant)
const processName = "chrome";

// Define a cron schedule (every 1 hours)
const cronSchedule = "1 */1 * * *";
export async function findAndKillAllActiveChromeProcesses() {
  // Use shell commands to find all active Chrome processes
  const cmd = "pgrep 'chrome|chromium'";
  try {
    const ret = await exec(cmd);
    const chromePIDs = ret.stdout.trim().split("\n");

    if (chromePIDs.length > 0) {
      console.log(`Terminating ${chromePIDs.length} active Chrome processes:`);
      for (let pid of chromePIDs) {
        await exec(`kill -9 ${pid}`).catch((killError) => {
          if (killError) {
            console.error(
              `Error killing Chrome process ${pid}: ${killError.message}`
            );
          }
        });
      }
    } else {
      console.log("No active Chrome processes found.");
    }
  } catch (error) {
    if (error) {
      // @ts-ignore
      console.error(`Error finding Chrome processes: ${error?.message}`);
      return;
    }
  }
}
// Function to check and terminate Chrome processes
async function checkAndTerminateProcesses() {
  try {
    await exec(`pkill -f -x ${processName}`);
  } catch (error) {
    console.error(`Error terminating Chrome processes: ${error}`);
  }
}

// Schedule the function to run periodically
schedule(cronSchedule, async () => {
  try {
    console.log(
      "Cron job scheduled to run every 30th  minuite.",
      console.log(new Date().toLocaleTimeString())
    );
    await findAndKillAllActiveChromeProcesses();
  } catch (error) {
    console.error(error);
  }
});
