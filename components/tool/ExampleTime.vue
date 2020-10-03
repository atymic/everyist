<template>
  <div>
    <p class="w-full border border-gray-600 mb-2 py-1 px-4 rounded text-gray-300" v-for="date in dates">
      {{ date }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ExampleTime',
  props: {
    dates: Array
  }
}
</script>
