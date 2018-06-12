let Packager = require('parcel-bundler/lib/packagers/JSPackager');
let spawn = require('cross-spawn');

class FlowPackager extends Packager {
  async start() {
    await super.start();
    return spawn('./node_modules/.bin/flow', ['status'], { stdio: 'inherit' });
  }
}

module.exports = FlowPackager;
