<template>
  <div :class="{'opacity-50': disabled, 'pointer-events-none': disabled}" class="mt-6">
    <div v-if="loading" class="flex justify-center items-center p-8">
      <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="text-gray-300">Creating Todoist Tasks</p>
    </div>
    <template v-else>
      <div v-if="status ==='editing'">
        <div v-if="error" class="rounded-md bg-red-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm leading-5 font-medium text-white">
                {{ error }}
              </h3>
            </div>
          </div>
        </div>

        <label class="block">
          <span class="form-label">Task Name</span>
          <input v-model="task" type="text" class="form-input form-input-dark mt-1 block w-full"
                 placeholder="My Awesome Task">
          <span class="form-help">You can use use #projectname and @label here</span>
        </label>
        <div class="sm:flex mt-4">
          <label class="block flex-grow mr-4">
            <span class="form-label">Schedule</span>
            <input v-model="schedule" type="text" class="form-input form-input-dark mt-1 block w-full"
                   placeholder="every tue at 9am">
          </label>
          <label class="block sm:w-24  mr-4">
            <span class="form-label">Occurrences</span>
            <input v-model="occurrences" type="text" class="form-input form-input-dark mt-1 block w-full"
                   placeholder="30">
          </label>
          <label class="block sm:w-24">
            <span class="form-label">Time</span>
            <input v-model="time" type="text" class="form-input form-input-dark mt-1 block w-full" placeholder="hh:mm">
          </label>
        </div>
        <span class="form-help">
        You can use similar natural language string to Todoist here. For example "every week".
        <br>
        You can also set a time (in 24hr format hh:mm, for example 09:00 or 15:00)
      </span>
        <div class="mt-4">
          <h3 class="text-xl mb-2">Example Dates</h3>
          <p v-if="!scheduleExamples.length" class="text-gray-400">
            <span v-if="!scheduleError">You didn't enter a schedule string</span>
            <span v-else>Your schedule is invalid: {{ scheduleError }}</span>
          </p>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <example-time :dates="scheduleExamples.slice(0, 5)"></example-time>
            </div>
            <div>
              <example-time :dates="scheduleExamples.slice(5, 10)"></example-time>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center mt-8">
          <span class="inline-flex rounded-md shadow-sm">
            <button @click="confirm" type="button"
                    class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
              Create Tasks
            </button>
          </span>
          <p class="max-w-sm mt-2 text-sm text-center text-gray-500">When you hit "Create", we'll create the first occurrence only
            (so you can check it's correct), then you'll be able to continue to create the remaining ones.</p>
        </div>
      </div>
      <div v-if="status ==='confirming'">
        <div class="flex flex-col items-center mt-8">
          <h3 class="text-xl font-semibold mb-4">First task created</h3>
          <p class="max-w-sm mb-6 text-center text-sm">Check the task was created & looks like you expect. Once you hit
            "Create Tasks" we'll create the {{ tasks.length }} remaining tasks.</p>
          <span class="inline-flex rounded-md shadow-sm">
            <button @click="create" type="button"
                    class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
              Create Tasks
            </button>
          </span>
          <button @click="edit" class="text-gray-500 hover:text-gray-400 mt-8">
            Made a mistake? Go back and edit
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center" v-if="status ==='finished'">
        <div>
          <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mt-2">{{ scheduleDates.length }} Tasks created</h3>
        <p class="max-w-sm text-center text-sm">Your tasks have been created. Check your todoist!</p>
        <button @click="reset" class="bg-gray-700 py-2 px-4 rounded shadow hover:bg-gray-600 mt-8">
          Create More
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import TButton from '~/components/TButton'
import { RRule } from 'rrule'
import { chunk, debounce } from 'lodash'
import { DateTime } from 'luxon'
import ExampleTime from '~/components/tool/ExampleTime'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ScheduleTool',
  components: {
    ExampleTime,
    TButton,
  },
  props: {
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      error: null,
      task: null,
      schedule: null,
      time: null,
      occurrences: 10,
      scheduleExamples: [],
      scheduleDates: [],
      scheduleError: null,
      status: 'editing',
      tasks: [],
    }
  },
  methods: {
    parseSchedule () {
      if (!this.schedule) {
        return;
      }

      let schedule
      try {
        schedule = RRule.fromText(this.schedule)
      } catch (e) {
        this.scheduleError = e.message
        this.scheduleExamples = []
        return
      }

      if (schedule.count === null || schedule.count < 2) {
        this.scheduleError = `Invalid Schedule String`
        this.scheduleExamples = []
        return
      }

      this.scheduleError = null

      let time = null

      if (this.time) {
        try {
          time = DateTime.fromFormat(this.time, 'HH:mm')
        } catch (e) {
          this.scheduleError = `Invalid time string ${this.time}`
          return
        }
      }

      this.scheduleExamples = schedule.all((date, i) => i < 10).map(date => {
        const d = DateTime.fromJSDate(date)

        if (time && time.hour) {

          return d.set({ hour: time.hour, minute: time.minute }).toFormat('EEE, ff')
        }

        return d.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
      })

      this.scheduleDates = schedule.all((date, i) => i < this.occurrences).map(date => {
        const d = DateTime.fromJSDate(date)

        if (time && time.hour) {
          return d.set({ hour: time.hour, minute: time.minute })
        }

        return d.set({ hour: 0, minute: 0 })
      })
    },
    edit () {
      this.loading = false
      this.tasks = []
      this.schedule = null
      this.status = 'editing'
    },
    reset () {
      this.task = null
      this.schedule = null
      this.occurrences = 10
      this.scheduleExamples = []
      this.scheduleDates = []
      this.tasks = []
      this.status = 'editing'

    },
    confirm () {
      this.error = null;

      if (!this.task) {
        this.error = 'You need to add a task name'
        return;
      }

      if (!this.occurrences) {
        this.error = 'You need to set the occurrence count'
        return;
      }

      if (!this.schedule) {
        this.error = 'You need to set the schedule'
        return;
      }

      this.tasks = this.scheduleDates.map(this.createTaskPayload)

      const first = this.tasks.shift()

      this.loading = true
      this.$axios.post('https://api.todoist.com/sync/v8/sync', `commands=${JSON.stringify([first])}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(res => {
        this.loading = false
        this.status = 'confirming'
      })
    },
    create () {
      this.loading = true
      const promises = chunk(this.tasks, 50).map(chunk => {
        return this.$axios.post('https://api.todoist.com/sync/v8/sync', `commands=${JSON.stringify(chunk)}`, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
      })

      Promise.all(promises).then(() => {
        this.loading = false
        this.status = 'finished'
      })
    },
    createTaskPayload (date) {
      const due = date.hour !== 0
          ? { date: date.toFormat(`kkkk-LL-dd'T'HH:mm:00`) }
          : { date: date.toFormat('kkkk-LL-dd') }

      return {
        type: 'item_add',
        temp_id: uuidv4(),
        uuid: uuidv4(),
        args: {
          content: this.task,
          due,
          auto_parse_labels: true,
        },
      }
    },
  },
  watch: {
    schedule: debounce(function () {this.parseSchedule()}, 200),
    time: debounce(function () {this.parseSchedule()}, 200),
    occurrences: debounce(function () {this.parseSchedule()}, 200),
  },
}
</script>
