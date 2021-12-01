import {Meta} from '@storybook/react';
import StepItem, {Props} from '../../../../components/molecules/step-item';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

const Template = (args: Props) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: '/icon/step-1.svg',
  title: '1. Start',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
