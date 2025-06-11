import type { CollectionConfig } from 'payload'
import { RichTextBlock } from '@/blocks/Richtext.block'

export const SharedBlocksCollection: CollectionConfig = {
  slug: 'shared-blocks',
  access: {},
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [RichTextBlock],
      minRows: 1,
      maxRows: 1,
      required: true,
    },
  ],
}
