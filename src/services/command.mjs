import { exec } from "child_process";

/**
 * @param {string} command
 * @param {(stdout:string, stderr:string) => any} callback
 * @param {(error:ExecException, stdout:string, stderr:string) => any} onError
 * @returns
 */
export const runCommand = function (command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) reject(err, stdout, stderr);
      else resolve(stdout, stderr);
    });
  });
};
