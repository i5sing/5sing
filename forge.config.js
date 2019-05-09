module.exports = {
    "packagerConfig": {
        "asar": true,
        "icon": "./src/assets/icon",
        "ignore": [
            /^out$/,
            /^src\/((?!assets).)*/,
            /^\.gitignore$/,
            /^\.git$/,
            /^\.idea$/,
            /^forge\.config\.js$/,
            /^tsconfig\.json$/,
            /^webpack\.main.config\.js$/,
            /^webpack\.renderer\.config\.js$/,
            /^yarn\.lock$/,
            /^\.DS_Store$/,
        ],
        prune: true,
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "i5sing"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
            "name": '@electron-forge/maker-dmg',
            "config": {
                "background": './src/assets/dmg-background@2x.png',
                "format": 'ULFO',
                "icon": "./src/assets/dmg-icon.icns",
                "iconSize": 128,
                "contents": options => {
                    return [
                        {"x": 530, "y": 245, "type": "link", "path": "/Applications"},
                        {"x": 259, "y": 245, "type": "file", "path": options.appPath},
                    ];
                },
                "overwrite": true,
                "additionalDMGOptions": {
                    "window": {"size": {"width": 780, "height": 435}}
                }
            }
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        }
    ],
    plugins: [
        ['@electron-forge/plugin-webpack', {
            mainConfig: './webpack.main.config.js',
            renderer: {
                config: './webpack.renderer.config.js',
                entryPoints: [{
                    html: './src/views/index.html',
                    js: './src/main.tsx',
                    name: 'main_window'
                }, {
                    html: './src/views/login.html',
                    js: './src/login.tsx',
                    name: 'login_window'
                }]
            }
        }]
    ]

};