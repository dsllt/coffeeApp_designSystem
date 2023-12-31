/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",    
    defaultName: 'Documentation',
  },  
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/coffeeApp_designSystem/'
    }

    return config
  }
};
export default config;
