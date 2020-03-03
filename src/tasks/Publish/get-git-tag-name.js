import { execSync } from 'child_process';
import { normalisePackageNameNpm } from './normalise-package-name';

export default function getGitTagName(pkg) {
  const latestGitSha = execSync('git rev-parse --short HEAD').toString().trim();
  const gitpkgPackageName = `${normalisePackageNameNpm(pkg.name)}-v${pkg.version}-${latestGitSha}`;
  return gitpkgPackageName;
}
