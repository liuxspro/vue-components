<template>
  <p>Code with ❤️ by {{ name }}</p>
</template>

<script setup lang="ts">
export interface Props {
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Liuxspro'
})


</script>