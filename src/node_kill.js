import { schedule } from "node-cron";
import { exec } from "child_process";
// const exec = util.promisify(_exec); // Define// import {} from "";
// Define the process name (you can change this if you're looking for Chromium or a specific Chrome variant)
const processName = "chrome";
// Define a cron schedule (every 1 hours)
const cronSchedule = "*/10 * * * *";
export function findAndKillAllActiveChromeProcesses() {
    // Use shell commands to find all active Chrome processes
    const cmd = "pgrep 'chrome|chromium'";
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error finding Chrome processes: ${error.message}`);
            return;
        }
        const chromePIDs = stdout.trim().split("\n");
        if (chromePIDs.length > 0) {
            console.log(`Terminating ${chromePIDs.length} active Chrome processes:`);
            chromePIDs.forEach((pid) => {
                exec(`kill -9 ${pid}`, (killError) => {
                    if (killError) {
                        console.error(`Error killing Chrome process ${pid}: ${killError.message}`);
                    }
                });
                console.log(`Killed Chrome process with PID ${pid}`);
            });
        }
        else {
            console.log("No active Chrome processes found.");
        }
    });
}
// Function to check and terminate Chrome processes
async function checkAndTerminateProcesses() {
    try {
        await exec(`pkill -f -x ${processName}`);
    }
    catch (error) {
        console.error(`Error terminating Chrome processes: ${error}`);
    }
}
// Schedule the function to run periodically
schedule(cronSchedule, async () => {
    try {
        console.log("Cron job scheduled to run every 30th  minuite.", console.log(new Date().toLocaleTimeString()));
        findAndKillAllActiveChromeProcesses();
    }
    catch (error) {
        console.error(error);
    }
});
