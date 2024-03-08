import type { Meta, StoryObj } from '@storybook/react';

import Spacer from '.';

const meta: Meta<typeof Spacer> = {
  component: Spacer,
  argTypes: {
    size: { options: ["500", "i500", "i600"], control: { type: 'select' }, },
  },
  decorators: [
    (Story) => (
      <div className="flex bg-neutral-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Primary: Story = {};
