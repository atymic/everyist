<template>
  <div class="flex justify-center my-6">
    <div>
      <button @click="login" class="flex items-center hover:bg-gray-700 border border-gray-600 rounded px-4">
        <span class="mr-4">Login with Todoist</span>
        <img class="hidden lg:block h-16 w-auto" src="~/assets/img/todoist.png" alt="todoist logo">
      </button>
      <p class="text-gray-400 text-xs text-center mt-1">Your Todoist token never leaves your browser.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login', methods: {
    login () {
      this.$auth.loginWith('todoist')
    },
  },
}
</script>
