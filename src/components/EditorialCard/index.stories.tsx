import type { Meta, StoryObj } from '@storybook/react';

import EditorialCard from '.';

const meta: Meta<typeof EditorialCard> = {
  component: EditorialCard,
  argTypes: {
    direction: { options: ["vertical", "horizontal"], control: { type: 'select' }, },
  },
};

export default meta;
type Story = StoryObj<typeof EditorialCard>;

export const Primary: Story = {
  args: {
    imageSrc: "https://via.placeholder.com/640x360",
    headline: "Design 1",
    subheadline: "Lorem ipsum dolor",
    authorAvatarSrc: "https://via.placeholder.com/40x40",
    authorName: "John Doe 1"
  }
};

export const Horizonal: Story = {
  args: {
    imageSrc: "https://via.placeholder.com/640x360",
    headline: "Design 1",
    subheadline: "Lorem ipsum dolor",
    authorAvatarSrc: "https://via.placeholder.com/40x40",
    authorName: "John Doe 1",
    direction: "horizontal"
  }
};
