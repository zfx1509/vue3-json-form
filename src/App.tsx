import { createApp, defineComponent, h, reactive, ref, Ref } from 'vue'
import MonacoEditor from './components/MonacoEditor'
import { createUseStyles } from 'vue-jss'

function toJSON(data: any) {
  return JSON.stringify(data, null, 2)
}
const schema = {
  type: 'string',
}

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)
    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {
        schemaRef.value = schema
      }
    }

    const classesRef = useStyles()
    return () => {
      const classes = classesRef.value
      const code = toJSON(schemaRef.value)
      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="Schema"
            class={classes.editor}
          />
        </div>
      )
    }
  },
})
