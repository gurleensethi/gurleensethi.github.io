const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = ({ mode }) => {
  return merge(
    {
      mode,
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
    },
    require(`./webpack.config.${mode}`)
  );
};
