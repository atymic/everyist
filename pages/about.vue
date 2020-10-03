<template>
  <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-6">

    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
      <h3 class="text-2xl">Why I Built This Tool</h3>
    </div>
    <div class="px-4 py-5 sm:p-6 leading-normal">
      <p>
        I built this tool after getting annoyed at the way reoccurring tasks work by default in todoist. Here's a quick
        summary of my gripes:
      </p>
      <ul class="list-disc my-3">
        <li class="mb-1">You can only see the next occurrence once you tick the existing one</li>
        <li class="mb-1">If you have a daily task and you miss a day, you don't end up with one overdue and one for
          today.
        </li>
        <li class="mb-1">You can't get a good idea of tasks on dates in the future as the next occurrence may not have
          appeared yet
        </li>
      </ul>
      <p class="mt-2">
        For example, if you have a Lecture that happens every week on Tue and Thu, it would be nice to see that in
        advance, and if you missed watching a lecture to have it stick around in overdue until you do.
      </p>
      <p class="mt-4">
        This tool works by automatically creating each reoccurrence, so every one is an actual dedicated task.
      </p>
    </div>
    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
      <h3 class="text-2xl">About</h3>
    </div>
    <div class="px-4 py-5 sm:p-6 leading-normal">
      <h3 class="text-xl font-semibold">We're open source & don't save/share your data</h3>
      <p class="mt-2">
        Your Todoist token never leaves your browser, so we can't access you account. Everything is performed locally.
        Check out the source code on <a href="https://github.com/atymic/everyist" target="_blank"
                                        class="text-indigo-500 font-semibold">Github</a>. Feel free to report issues
        there, or
        help out and fix some bugs or add a new feature.
      </p>
      <h3 class="text-xl font-semibold mt-6">Who Built This?</h3>
      <p class="mt-2">
        <span class="mr-1">👋</span> I'm <a href="https://atymic.dev" class="text-indigo-500 font-semibold">atymic</a>, a
        seasoned
        web developer &amp; open source contributor. You can check out my contributions on <a
          href="https://github.com/atymic" class="text-indigo-500 ">GitHub</a>.
        Want to get in touch, or have a question about the service? Send me an <a href="mailto:hello@atymic.dev"
                                                                                  class="text-indigo-500 font-semibold">email
        here</a>.
      </p>
    </div>
  </div>
</template>

<script>
import tailwindConfig from '~tailwind.config'

export default {
  data () {
    return {
      tailwindConfig,
    }
  },
}
</script>
