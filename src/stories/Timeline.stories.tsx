import { Timeline } from './Timeline';
import type { Meta, StoryObj } from '@storybook/react-vite';
import TeaIcon from '../Icons/TeaIcon';

const meta = {
  title: 'Example/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  args: {
    title: '10:00 - 11:00',
    text: 'A beautiful and intimate traditional ceremony to honor our families.',
  }
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: '10:00 - 11:00',
    text: 'A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families.',
    heartIcon: false,
    icon: <TeaIcon className="w-30 h-30" />
  }
};

export const Multiple: Story = {
  args: {
    title: '10:00 - 11:00',
    text: 'A beautiful and intimate traditional ceremony to honor our families.',
    heartIcon: false,
    icon: <TeaIcon className="w-30 h-30" />
  },
  render: () => (
    <>
      <Timeline
        title="10:00 - 11:00"
        text="A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families."
        icon={<TeaIcon className="w-30 h-30" />}

      />
      <Timeline
        title="11:00 - 12:00"
        text="A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families."
        icon={<TeaIcon className="w-30 h-30" />}
      />
      <Timeline
        title="12:00 - 14:00"
        text="A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families. A beautiful and intimate traditional ceremony to honor our families."
        icon={<TeaIcon className="w-30 h-30" />}
      />
    </>
  ),
};