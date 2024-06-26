import { setULogger } from "u-logger";
import "./services/firebase.mjs";
import "./services/command.mjs";
import { info, warn, error } from "./services/logger.mjs";
import {
  settingsListener,
  settingsLoader,
  settingsController,
  projectListener,
  scriptListener,
  startupLoader,
} from "./functions/core.mjs";

console.clear();
globalThis.reboot = true;
setULogger(true, false, info, warn, error);

(async function () {
  const settings = await settingsLoader();

  settingsController(settings, true);
  await startupLoader();

  settingsListener();
  projectListener();
  scriptListener();
})();
