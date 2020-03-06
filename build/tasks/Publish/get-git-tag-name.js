'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = getGitTagName;

var _child_process = require('child_process');

var _normalisePackageName = require('./normalise-package-name');

function getGitTagName(pkg) {
  const latestGitSha = (0, _child_process.execSync)('git rev-parse --short HEAD').toString().trim();
  const gitpkgPackageName = `${(0, _normalisePackageName.normalisePackageNameNpm)(
    pkg.name
  )}-v${pkg.version}-${latestGitSha}`;
  return gitpkgPackageName;
}
//# sourceMappingURL=get-git-tag-name.js.map
