import { defineComponent, inject } from 'vue'
import { FiledPropsDefine } from '../types'
import { SchemaFormContextKey } from '../context'

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup(props) {
    const context = inject(SchemaFormContextKey)
    console.log(context)
    return () => {
      return <div>Object filed</div>
    }
  },
})
