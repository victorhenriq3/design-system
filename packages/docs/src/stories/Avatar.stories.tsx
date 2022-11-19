import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@victor-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/victorhenriq3.png',
    alt: 'logo',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
