import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardButton from './CardButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shared/UI/CardButton',
  component: CardButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CardButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardButton> = (args) => (
  <CardButton {...args} />
);

export const Negative = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Negative.args = {
  title: 'Negative',
  details: 30,
  negative: true,
  click: () => console.log('Negative'),
};

export const Positive = Template.bind({});
Positive.args = {
  title: 'Positive',
  details: 30,
  negative: false,
  click: () => console.log('Positive'),
};
