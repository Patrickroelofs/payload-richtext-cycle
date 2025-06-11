import type { CollectionConfig } from 'payload'
import {RelationshipBlock} from "@/blocks/Relationship.block";
import {RichTextBlock} from "@/blocks/Richtext.block";

export const NewsCollection: CollectionConfig = {
  slug: 'news',
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [RelationshipBlock, RichTextBlock],
    },
  ],
}
