// const { peerDependencies } = require('./package.json');

// const install = Object.entries(peerDependencies).map(([pkg, version]) => {
//     return [pkg, version].join('@');
// });

// console.log(install.join(' '));

// console.log(`
// Package '@werkzeugkiste/eslint-config' was installed successfully. Please make sure to also install its peerDependencies:
// (
//   export PKG=@werkzeugkiste/eslint-config;
//   yarn info "$PKG@latest" peerDependencies --json | command sed 's/[{},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
// );

// # or:
// npx install-peerdeps --dev eslint-config-wiremore

// `);
