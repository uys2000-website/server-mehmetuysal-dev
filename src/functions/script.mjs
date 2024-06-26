import { SCRIPTS } from "../keys/constants.mjs";
import { runCommand } from "../services/command.mjs";
import { updateDoc } from "../services/firebase.mjs";

/**
 * @typedef {import('../classes/scripts.mjs').Script} Script
 */

/**
 * @param {string} id
 * @param {Script} script
 */
export const scriptRunner = async function (id, script) {
  await runScript.pLogger(script.name, script.script);
  await updateScriptStatus.pLogger(id);
};

/**
 * @param {string} name
 * @param {string} script
 */
export const runScript = function (name, script) {
  return runCommand(`echo ${name} && ${script} &`);
};

/**
 * @param {string} id
 * @returns
 */
export const updateScriptStatus = function (id) {
  return updateDoc(SCRIPTS, id, { pending: false });
};
