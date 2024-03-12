const process = require("process")
const path = require("path")
const viteTsconfig = require("vite-tsconfig-paths")
const tsconfigPaths = viteTsconfig.default

const { mergeConfig } = require("vite")

const config = {
  stories: [
    "../src/stories/README.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-deep-controls",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "localboast/*",
            replacement: path.resolve(__dirname, "../src/*"),
          },
        ],
      },
    })
  },
}
export default config
