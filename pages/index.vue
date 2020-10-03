<template>
  <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
    <p class="font-light mt-4">Welcome to Everyist. This tool creates reoccuring Todoist tasks automatically.</p>
    <p class="mt-1">Want to learn more? Read the <n-link class="text-indigo-400" to="about">about page</n-link> to learn how this tool works.</p>

    <login v-if="!$auth.user"></login>
    <schedule-tool :disabled="!$auth.user"></schedule-tool>
  </div>

</template>

<script>
import TButton from '~/components/TButton'
import ScheduleTool from '~/components/tool/ScheduleTool'
import Login from '~/components/tool/Login'

export default {
  components: {
    Login,
    ScheduleTool,
    TButton,
  },
  data () {
    return {}
  },
}
</script>
