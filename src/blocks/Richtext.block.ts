import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const RichTextBlock: Block = {
  slug: 'rich-text',
  interfaceName: 'RichTextBlockType',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
    },
  ],
}

export { RichTextBlock }
