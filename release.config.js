module.exports = {
    branch: 'master',
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'angular',
                releaseRules: [
                    { breaking: true, release: 'major' },
                    { revert: true, release: 'patch' },
                    // MAJOR
                    { type: 'major', release: 'major' },
                    { type: 'breaking', release: 'major' },
                    // MINOR
                    { type: 'minor', release: 'minor' },
                    { type: 'feat', release: 'minor' },
                    { type: 'feature', release: 'minor' },
                    // PATCH
                    { type: 'patch', release: 'patch' },
                    { type: 'fix', release: 'patch' },
                    { type: 'bugfix', release: 'patch' },
                    { type: 'hotfix', release: 'patch' },
                    { type: 'perf', release: 'patch' },
                    { type: 'docs', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'improvement', release: 'patch' },
                    { type: 'chore', release: 'patch' },
                    { type: 'revert', release: 'patch' },
                    { type: 'ci', release: 'patch' },
                    { type: 'style', release: 'patch' },
                    { type: 'test', release: 'patch' },
                    // NO RELEASE
                    // { scope: 'no-release', release: false },
                ],
            },
        ],
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
        '@semantic-release/git',
    ],
    verifyConditions: [
        '@semantic-release/npm',
        '@semantic-release/git',
        '@semantic-release/github',
    ],
    prepare: [
        '@semantic-release/changelog',
        '@semantic-release/npm',
        {
            path: '@semantic-release/git',
            message:
                'release: <%= nextRelease.version %> - <%= new Date().toISOString() %> [skip ci]\n\n<%= nextRelease.notes %>',
        },
    ],
};
