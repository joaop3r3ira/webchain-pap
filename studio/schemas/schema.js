// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      tittle: 'Moedas',
      name: 'moedas',
      type: 'document',
      fields: [
        {
          title: 'Nome',
          name: 'nome',
          type: 'string',
        },
        {
          title: 'Simbolo',
          name: 'simbolo',
          type: 'string',
        },
        {
          title: 'Contract Address',
          name: 'contractAddress',
          type: 'string',
        },
        {
          title: 'Preco EUR',
          name: 'precoEUR',
          type: 'string',
        },
        {
          title: 'Logo',
          name: 'logo',
          type: 'image',
        },
          ],
        },
    ]),
})
