// vue.config.js file to be place in the root of your repository

// // 1. Static build
// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production"
//       ? // ? '/my-project/'
//       "./"
//       : "/",
// };

// 2. Git hub gh-pages
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? // ? '/my-project/'
      "/fuse8-demo/dist/"
      : "/",
};
