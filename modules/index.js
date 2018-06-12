module.exports = function (bundler) {
  bundler.addPackager('js', require.resolve('./FlowPackager'));
};
