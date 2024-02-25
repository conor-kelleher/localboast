import type { Meta, StoryObj } from "@storybook/react"
import Code from ".."
import SampleCode from "./SampleCode"
import { merge } from "utils"
import { getStoryMeta } from "storybook_utils/helpers"
import storyConfig from "./config"

let meta = {
  title: "Components/Code",
  tags: ["autodocs"],
} as Meta<typeof Code>

meta = merge(meta, getStoryMeta(storyConfig))
export default meta

type Story = StoryObj<typeof Code>

export const CodeBasic: Story = {
  args: {
    children: SampleCode,
    colorScheme: "dark",
  },
}
