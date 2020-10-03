<template>
  <div class="max-w-3xl text-center mx-auto pt-8 sm:px-6 lg:px-8">
    <p class="text-gray-400">Logging you in...</p>
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
