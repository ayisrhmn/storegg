import {Meta} from '@storybook/react';
import GameItem, {Props} from '../../../../components/molecules/game-item';

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as Meta;

const Template = (args: Props) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  thumbnail: '/img/Thumbnail-1.png',
  title: 'Super Mechs',
  platform: 'Mobile',
};
