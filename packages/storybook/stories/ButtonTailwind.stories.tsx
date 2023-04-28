import ButtonTailwind from '@newline-ds/react/src/ButtonTailwind';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@newline-ds/react/lib/output.css';

export default {
  title: 'Newline/ButtonTalwind',
  component: ButtonTailwind,
} as ComponentMeta<typeof ButtonTailwind>;

const Template: ComponentStory<typeof ButtonTailwind> = (args) => (
  <ButtonTailwind {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Demo Button',
};
