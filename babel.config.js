module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    assets: "./src/assets",
                    dist: "./src/assets/dist",
                    components: "./src/components",
                    screens: "./src/screens",
                    models: "../src/models",
                    reduxsaga: "./src/redux",
                    modules: "./src/modules",
                    navigators: "./src/navigators",
                },
            },
        ],
    ],
};

