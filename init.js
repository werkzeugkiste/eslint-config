#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

const checkForPackageJson = () => {
    if (fs.existsSync(path.join(process.cwd(), 'package.json')) === false) {
        console.error(
            "ERROR: Could not generate ESLint config because package.json does not exist. Run this command from within your project's root folder"
        );
        process.exit(1);
    }
};

checkForPackageJson();

const configFilePath = path.join(process.cwd(), '/.eslintrc.json');
const configFileExists = fs.existsSync(configFilePath);

if (configFileExists) {
    console.warn('WARNING: ESLint config (.eslintrc.js) already exists. Doing nothing.');
    console.warn('Check https://github.com/werkzeugkiste/eslint-config for more infos.');
    process.exit(0);
}

const alternativeConfigFilenames = [
    '.eslintrc',
    '.eslintrc.js',
    '.eslintrc.cjs',
    '.eslintrc.yaml',
    '.eslintrc.yml',
];

const checkAlternativeConfigFilenames = () => {
    const existingConfigs = alternativeConfigFilenames.reduce((acc, filename) => {
        if (fs.existsSync(path.join(process.cwd(), filename))) {
            return acc.concat(filename);
        }
        return acc;
    }, []);

    return existingConfigs;
};

const doesPackageJsonConfigExist = () => {
    const pkg = require(path.join(process.cwd(), 'package.json'));
    if (pkg && pkg.eslintConfig) {
        return true;
    }
    return false;
};

if (doesPackageJsonConfigExist()) {
    console.warn(
        'WARNING: ESLint config found in package.json. Please remove the "eslint" property to avoid conflicts.'
    );
}

const alternativeConfigs = checkAlternativeConfigFilenames();
const alternativeConfigFileExists = alternativeConfigs.length > 0;

if (alternativeConfigFileExists) {
    console.warn('WARNING: Alternative eslint config file(s) exist:');
    alternativeConfigs.forEach((file) => {
        console.warn(`- ${file}`);
    });
    console.warn('Please delete all config files other than .eslintrc.js to avoid conflicts.');
}

try {
    console.log('');
    console.log('Writing config to', configFilePath);
    fs.writeFileSync(
        configFilePath,
        JSON.stringify(
            {
                extends: [
                    '@werkzeugkiste',
                    '@werkzeugkiste/eslint-config/react',
                    '@werkzeugkiste/eslint-config/node',
                    '@werkzeugkiste/eslint-config/typescript',
                ],
            },
            null,
            2
        )
    );

    console.log('ESLint config written successfully! ✅');
    process.exit(0);
} catch (_error) {
    console.error(
        'ERROR: Failed to write config file. Please try again or create config manually.'
    );
    process.exit(1);
}
