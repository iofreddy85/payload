import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'stock_control',
      label: 'Stock Control?',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'sock_waste',
      label: 'Stock Waste (%)',
      type: 'number',
      defaultValue: 0,
      admin: {
        condition: (data): boolean => {
          console.log('condition', data)
          return !!data.stock_control
        },
      },
    },
  ],
}
