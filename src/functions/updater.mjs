import { runCommand } from "../services/command.mjs";

/**
 * @typedef {import('../classes/settings.mjs').ProjectSettings} ProjectSettings
 */

const testFolder = "";

/**
 * @param {ProjectSettings} settings
 */
export const updateProject = async function (settings) {
  await removeOldProject.pLogger(settings.folder);
  await cloneProject.pLogger(settings.folder, settings.repo);
  await runProject.pLogger(settings.folder, settings.command);
};

/**
 * @param {string} folder
 * @param {string} test
 * @returns
 */
export const removeOldProject = function (folder, test = testFolder) {
  return runCommand(`rm -r --force ../${test}${folder}`);
};

/**
 * @param {string} folder
 * @param {string} repo
 * @param {string} test
 * @returns
 */
export const cloneProject = function (folder, repo, test = testFolder) {
  return runCommand(`git clone ${repo} ../${test}${folder}`);
};

/**
 * @param {string} folder
 * @param {string} command
 * @param {string} test
 * @returns
 */
export const runProject = function (folder, command, test = testFolder) {
  return runCommand(`cd ../${test}${folder} && ${command} &`);
};
