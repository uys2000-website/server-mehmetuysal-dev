export class Script {
  constructor(name, script, pending, timestamp = Date.now()) {
    this.name = name;
    this.script = script;
    this.pending = pending;
    this.timestamp = timestamp;
  }
}
