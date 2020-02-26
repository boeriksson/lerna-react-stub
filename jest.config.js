module.exports = {
    verbose: true,
    transform: {"\\.js$": ['babel-jest', {rootMode: "upward"}]},
    moduleFileExtensions: [
        "js",
        "json",
        "jsx"
    ],
    transformIgnorePatterns: [
        "/node_modules/(?!test-component).+\\.js$"
    ]
};