<template>
  <input type="number" @input="handleChange" :value="value" />
</template>

<script lang="ts" setup="props">
import { FiledPropsDefine, Schema } from '../types'

export default {
  props: FiledPropsDefine,
}
declare const props: {
  value: any
  schema: Schema
  onChange: (e: any) => void
}

export const handleChange = (e: any) => {
  console.log(e)
  const value = e.target.value
  const num = Number(value)
  if (Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>
