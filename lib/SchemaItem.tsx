import { computed, defineComponent, PropType } from 'vue'
//import NumberField from './fields/NumberField'
// import StringField from './fields/StringField'
import NumberField from './fields/NumberField.vue'
import StringField from './fields/StringField.vue'
import ObjectField from './fields/ObjectField'
import { Schema, SchemaTypes, FiledPropsDefine } from './types'
import { retrieveSchema } from './utils'

export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })
    return () => {
      const { schema, rootSchema, value } = props
      const retrievedSchema = retrievedSchemaRef.value
      //TODO:如果type未指定，需猜测type
      const type = schema.type
      let Component: any
      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        default: {
          console.log(`${type} is not supported`)
        }
      }
      return <Component {...props} schema={retrievedSchema} />
    }
  },
})
