<template>
  <p :class="[className, defaultClass]" class="inline-block">Code with ❤️ by {{ name }}</p>
</template>

<script setup lang="ts">
interface Props {
  name: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: ''
})

const className = props.class
const defaultClass = 'text-sm font-mono text-purple-600 dark:text-purple-400 px-3 py-2 transition-all duration-300 ease-in-out  hover:-translate-y-0.5'
</script>