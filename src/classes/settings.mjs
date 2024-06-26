export class Settings {
  /**
   * @param {string} name
   * @param {boolean} connected
   */
  constructor(name, connected) {
    this.name = name ?? "server-mehmetuysal.dev-listener";
    this.connected = connected != undefined ? connected : false;
  }
}

export class ProjectSettings {
  /**
   * @param {string} name
   * @param {string} repo
   * @param {string} folder
   * @param {string} command
   * @param {boolean} outdated
   */
  constructor(name, repo, folder, command, outdated, timestamp = Date.now()) {
    this.name = name;
    this.repo = repo;
    this.folder = folder;
    this.command = command;
    this.outdated = outdated;
    this.timestamp = timestamp;
  }
}
