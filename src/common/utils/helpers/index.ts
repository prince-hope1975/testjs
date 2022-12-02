
export const getFileName = (str: string) => {
  return str.split(/(\\|\/)/g).pop();
};

export function HandleDate(date: Date): [number, number, number] {
  return [date.getDate(), date.getMonth(), date.getFullYear()];
}


export async function setAsyncTimeout(ms: number, func?: <T>(T: T) => T) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      func && func(true);
      resolve(null);
    }, ms)
  );
}

function _hasPopupBlocker(poppedWindow:any) {
  var result = false;

  try {
    if (typeof poppedWindow == "undefined") {
      // Safari with popup blocker... leaves the popup window handle undefined
      result = true;
    } else if (poppedWindow && poppedWindow.closed) {
      // This happens if the user opens and closes the client window...
      // Confusing because the handle is still available, but it's in a "closed" state.
      // We're not saying that the window is not being blocked, we're just saying
      // that the window has been closed before the test could be run.
      result = false;
    } else if (poppedWindow && poppedWindow.test) {
      // This is the actual test. The client window should be fine.
      result = false;
    } else {
      // Else we'll assume the window is not OK
      result = true;
    }
  } catch (err) {
    //if (console) {
    //    console.warn("Could not access popup window", err);
    //}
  }

  return result;
}

