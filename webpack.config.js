const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  entry: './App.js',
  //...
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
  }
  return config;
};

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].bundle.js",
    clean: true
    // path: path.resolve(__dirname, "docs"), //깃허브 페이지 배포를 위해 docs로 설정해주었다.
    // filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: { 
     stream: require.resolve('stream-browserify'),
     buffer : require.resolve("buffer/") 
    }
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: process.env.PORT,
    historyApiFallback : true, // html5 History API를 쓸 때 어떤 404요청에 대해서도 index.html을 제공한다 > 기본값을 false이고 true로 설정할 때 못찾은 리소스에 대해서 항상 index.html을 제공하는 옵션 >> 서버에서 페이지를 하나만 제공하는 방식으로 바꿈
    //ex. /cart라는 경로로 웹팩 서버에 요청 > 리소스에 있는지 정적 폴더인 public에서 찾음 > 없음 > 404응답을 해야하는데 서버옵션중에 historyfallback옵션을 주었기 떄문에 index.html 을 주도록 설정 (페이지 하나만 제공하는 방식으로 변경)> index.html 파일을 탐색하기 시작 > index.html에 main.bundle.js에 app.js가 포함되어있음 > app.js 탐색 시작 > pathname을 보고 찾기 시작 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.geojson$/, //json 파일관련 loader설정
        include: [ //정확한 파일경로를 입력해 오류를 방지
        path.resolve(__dirname, "./src/json/category.json")], 
        type: 'json',
    },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};