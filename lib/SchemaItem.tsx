import { defineComponent, PropType } from 'vue'
//import NumberField from './fields/NumberField'
// import StringField from './fields/StringField'
import NumberField from './fields/NumberField.vue'
import StringField from './fields/StringField.vue'
import { Schema, SchemaTypes, FieldPropsDefine } from './types'

export default defineComponent({
  name: 'SchemaItem',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props
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
        default: {
          console.log(`${type} is not supported`)
        }
      }
      return <Component {...props} />
    }
  },
})
