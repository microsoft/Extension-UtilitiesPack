const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Configure webpack to copy folders from  Utilities folder  to dist folder
module.exports = {
    entry: "./tmp.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "./Utilites/images", to: "./images"},
                { from: "./Utilites/Powershell++", to: "./Powershell++" },
                { from: "./Utilites/Rollback", to: "./RollBack" },
                { from: "./Utilites/Shell++", to: "./Shell++" },
                { from: "./Utilites/Tokenizer", to: "./Tokenizer" },
                { from: "./Utilites/UnZip", to: "./Unzip" },
                { from: "./Utilites/Zip", to: "./Zip" },
                { from: "./Utilites/overview.md", to: "./" },
                { from: "./Utilites/azure-devops-extension.json", to: "./" },
            ],
        }),
    ],
    };

