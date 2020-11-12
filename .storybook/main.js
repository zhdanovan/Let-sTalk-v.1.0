module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    '../src/**/*.stories.js' 
  ],
  "addons": [
  	'@storybook/preset-create-react-app', // + для проектов CRA
   	'@storybook/addon-actions',
   	'@storybook/addon-docs'
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}