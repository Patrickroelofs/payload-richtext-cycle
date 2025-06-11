import type { Block } from 'payload'

const RelationshipBlock: Block = {
  slug: 'relationship',
  interfaceName: 'RelationshipBlockType',
  fields: [
    {
      name: 'relationship',
      type: 'relationship',
      relationTo: ["shared-blocks"],
    },
  ],
}

export { RelationshipBlock }
