import { PROJECTSETTINGS } from "../keys/constants.mjs";
import { runCommand } from "../services/command.mjs";
import { updateDoc } from "../services/firebase.mjs";

/**
 * @typedef {import('../classes/settings.mjs').ProjectSettings} ProjectSettings
 */

const testFolder = "";

/**
 * @param {string} id
 * @param {ProjectSettings} settings
 */
export const projectRunner = async function (id, settings) {
  await updateProjectStatus.pLogger(id);
  await cleanProject.pLogger(settings.folder);
  await updateProject.pLogger(settings.folder, settings.repo);
  await loadEnvironment.pLogger(settings.folder, settings.env);
  await runProject.pLogger(settings.folder, settings.command);
};

/**
 * @param {string} folder
 * @param {string} test
 * @returns
 */
export const cleanProject = function (folder, test = testFolder) {
  return runCommand(`rm -r --force ../${test}${folder}`);
};

/**
 * @param {string} folder
 * @param {string} repo
 * @param {string} test
 * @returns
 */
export const updateProject = function (folder, repo, test = testFolder) {
  return runCommand(`git clone ${repo} ../${test}${folder}`);
};

/**
 * @param {string} folder
 * @param {string} env
 * @param {string} test
 * @returns
 */
export const loadEnvironment = function (folder, env, test = testFolder) {
  return runCommand(`echo "${env}" > ../${test}${folder}/.env`);
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

/**
 * @param {string} id
 * @returns
 */
export const updateProjectStatus = function (id) {
  return updateDoc(PROJECTSETTINGS, id, { outdated: false });
};
