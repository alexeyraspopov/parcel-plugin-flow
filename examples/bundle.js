const Bundler = require('parcel-bundler');
const PluginFlow = require('../modules');

let bundler = new Bundler('./index.html', { watch: true });

PluginFlow(bundler);

bundler.serve();
