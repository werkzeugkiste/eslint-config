module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'major',
                'breaking',
                'minor',
                'feat',
                'feature',
                'patch',
                'fix',
                'bugfix',
                'hotfix',
                'perf',
                'docs',
                'refactor',
                'improvement',
                'chore',
                'revert',
                'ci',
                'style',
                'test',
            ],
        ],
    },
};
