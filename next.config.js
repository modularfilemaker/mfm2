const withSass = require("@zeit/next-sass");
const withMDX = require("@zeit/next-mdx")();
module.exports = withMDX(
  withSass({
    includePaths: ["./node_modules/coreui/coreui/scss"]
  })
);
