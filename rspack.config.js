const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.jsx",
  },
  builtins: {
    html: [{ template: "./src/index.html" }],
  },
  devServer: {
    hot: true,
    port: 3000,
  },
};
