'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

let cacheNpmClient = null;

exports.default = async function getNpmClient() {
  if (cacheNpmClient) {
    return cacheNpmClient;
  }

  const useYarn = await shouldUseYarn();
  const npmClient = useYarn ? 'yarn' : 'npm';
  cacheNpmClient = npmClient;

  return npmClient;
};

async function shouldUseYarn() {
  try {
    await (0, _execa2.default)('yarn', ['--version']);
    return true;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=get-npm-client.js.map
