const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Gurleen Sethi",
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              name: "[name].[ext]",
            },
          },
          {
            loader: "img-loader",
          },
        ],
      },
    ],
  },
};
