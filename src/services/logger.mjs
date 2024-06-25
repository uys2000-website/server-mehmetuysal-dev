import { addDoc } from "./firebase.mjs";
import { LOGS } from "../keys/constants.mjs";

/**
 * @param {"info" | "warn" | "error"} level
 * @param {"Function" | "Promise"} type
 * @param {"Run" | "Res" | "Err"} status
 * @param {string} name
 * @param  {...any} args
 * @returns
 */
export const logger = function (level, type, status, name, ...args) {
  console.log(Date.now(), level, type, status, name, ...args);
  const data = { level, type, status, name, data: args, timestamp: Date.now() };
  return addDoc(LOGS, data);
};

/**
 * @param {"Function" | "Promise"} type
 * @param {"Run" | "Res" | "Err"} status
 * @param {string} name
 * @param  {...any} args
 * @returns
 */
export const info = function (type, status, name, ...args) {
  return logger("info", type, status, name, ...args);
};

/**
 * @param {"Function" | "Promise"} type
 * @param {"Run" | "Res" | "Err"} status
 * @param {string} name
 * @param  {...any} args
 * @returns
 */
export const warn = function (type, status, name, ...args) {
  return logger("warn", type, status, name, ...args);
};

/**
 * @param {"Function" | "Promise"} type
 * @param {"Run" | "Res" | "Err"} status
 * @param {string} name
 * @param  {...any} args
 * @returns
 */
export const error = function (type, status, name, ...args) {
  return logger("error", type, status, name, ...args);
};
