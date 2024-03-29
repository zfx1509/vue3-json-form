import { defineComponent, PropType, provide } from 'vue'
import { Schema, SchemaTypes } from './types'
import { SchemaFormContextKey } from './context'
import SchemaItem from './SchemaItem'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  name: 'SchemaForm',
  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }
    const context = {
      SchemaItem,
    }
    provide(SchemaFormContextKey, context)
    return () => {
      const { schema, value } = props
      return (
        <SchemaItem
          rootSchema={schema}
          schema={schema}
          value={value}
          onChange={handleChange}
        />
      )
    }
  },
})
