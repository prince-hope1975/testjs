/**
 *
 * @param time This will be in seconds
 * @param func The func is any function you want to execute over an interval
 * @returns void
 */
export const makeInterval = (time = 1000, func) => {
    let count = 1;
    var inter;
    const asyncTimeout = async () => {
        await new Promise((resolve) => {
            inter = setTimeout(async () => {
                resolve(null);
            }, time * 1000);
        });
    };
    let bool = false;
    const fetchBool = () => bool;
    const interval = async () => {
        bool = true;
        while (fetchBool()) {
            await asyncTimeout();
            try {
                console.log("trying ", count, " times");
                func && (await func());
                console.log(count++);
                // if (count > 10) {
                //   clearInterval(inter);
                // }
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    const stopInterval = () => {
        bool = false;
    };
    return { interval, stopInterval };
};
