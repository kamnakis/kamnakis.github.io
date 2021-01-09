<template>
  <div
    class="px-10 py-8 focus:outline-none"
  >
    <div
      class="w-100 h-64 bg-gradient-to-br from-green-200 via-green-500 to-green-800 grid grid-flow-row grid-cols-2 rounded-2xl transform transition-transform duration-200 hover:shadow-lg hover:scale-105 overflow-hidden hover:z-10"
    >
      <img
        :src="require(`~/assets/images/projects/${project.imgUrl}`)"
        class="h-full object-cover object-center rounded-r-2xl"
      >
      <div class="flex flex-col items-center justify-center text-gray-100 text-2xl courgette">
        <div>{{ project.title }}</div>
        <div class=" w-full flex items-center justify-evenly mt-4">
          <a :href="project.github"><fa-icon :icon="['fab', 'github']" class="transition-colors duration-200 hover:text-black" /></a>
          <a :href="project.link"><fa-icon icon="globe" class="transition-colors duration-200 hover:text-blue-700" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object as () => {
        title: string
        imgUrl: string
        link: string
        github: string
      },
      required: true
    }
  }
})
</script>
