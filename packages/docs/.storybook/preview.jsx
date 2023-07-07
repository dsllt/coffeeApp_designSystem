import { themes } from '@storybook/theming'
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks'
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#343434'
        }
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  docs: {
    theme: themes.dark,
    page:  () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />
      </>
    ),
  }
};

export default preview;
