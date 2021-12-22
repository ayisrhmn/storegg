import {Meta} from '@storybook/react';
import Input, {Props} from '../../../../components/atoms/input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template = (args: Props) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Full Name',
  placeholder: 'Enter your name',
};
