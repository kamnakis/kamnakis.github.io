<template>
  <div
    class="px-2 py-6 max-w-sm focus:outline-none"
  >
    <div
      class="w-full mx-auto h-64 group flex bg-gradient-to-br from-teal-200 via-teal-500 to-teal-800 rounded-2xl transform transition-transform duration-200 hover:shadow-lg hover:scale-105 overflow-hidden hover:z-10"
    >
      <img
        :src="require(`~/assets/images/projects/${project.imgUrl}`)"
        class="h-full object-cover object-center rounded-r-2xl w-full group-hover:w-1/2 transition-width"
      >
      <div class="opacity-0 group-hover:opacity-100 w-1/2 flex flex-col items-center justify-center text-gray-100 text-lg md:text-2xl courgette transition-opacity duration-200 delay-300">
        <div>{{ project.title }}</div>
        <div class="w-full flex items-center justify-evenly mt-4">
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

<style lang="scss" scoped>
.transition-width {
  transition: width 200ms ease-in;
}
</style>
