<template>
  <div class="leading-normal">
    <nav class="bg-gray-800">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <button @click="menuOpen = !menuOpen"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                      aria-label="Main menu" aria-expanded="false">
                <svg :class="{hidden: menuOpen, block: !menuOpen}" class="block h-6 w-6"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg :class="{hidden: !menuOpen, block: menuOpen}" class="hidden h-6 w-6"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="flex-shrink-0 flex items-center mr-12">
              <h1 class="text-white font-light mr-2">Everyist for</h1>
              <img class="hidden lg:block h-16 w-auto" src="~/assets/img/todoist.png" alt="Workflow logo">
            </div>
            <div class="hidden md:ml-6 md:flex md:items-center">
              <n-link to="/" :class="menuClasses('index')">Create Tasks</n-link>
              <n-link to="/about" class="ml-4" :class="menuClasses('about')">About</n-link>
            </div>
          </div>
          <div class="ml-16 flex items-center">
            <div class="flex-shrink-0">
              <a href="https://www.buymeacoffee.com/slashdev" target="_blank"><img class="h-10"
                                                                                   src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"
                                                                                   alt="Buy Me A Coffee"/></a>
            </div>
          </div>
        </div>
      </div>
      <div :class="{block: menuOpen, hidden: !menuOpen}" class=" md:hidden">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a href="#"
             class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
          <a href="#"
             class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
          <a href="#"
             class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
          <a href="#"
             class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5 sm:px-6">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt="">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-6 text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-5 text-gray-400">tom@example.com</div>
            </div>
          </div>
          <div class="mt-3 px-2 sm:px-3">
            <a href="#"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Your
              Profile</a>
            <a href="#"
               class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Settings</a>
            <a href="#"
               class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign
              out</a>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Everyist For Todoist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Create better reoccurring tasks for Todoist',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data () {
    return {
      menuOpen: false,
    }
  },
  methods: {
    menuClasses (page) {
      return this.$nuxt.$route.name === page
          ? 'px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 transition duration-150 ease-in-out'
          : 'px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out'
    },
  },
}
</script>
