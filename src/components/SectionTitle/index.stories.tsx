import type { Meta, StoryObj } from '@storybook/react';

import SectionTitle from '.';

const meta: Meta<typeof SectionTitle> = {
  component: SectionTitle,
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Primary: Story = {
  args: {
    headline: "Section Title",
    subheadline: "Lorem Ipsum dolor sit amet consectetur."
  }
};
