<template>
  <div class="w-full min-h-screen pt-2 sm:pt-6 flex flex-col items-center overflow-x-hidden">
    <div class="w-full flex flex-col items-center justify-center pb-8">
      <!-- Title -->
      <div class="px-6 text-4xl sm:text-7xl kaushanScript text-gray-800">
        <span class="text-teal-500">My</span> Projects
      </div>

      <!-- <input
        type="text"
        placeholder="Search"
        class="w-full sm:w-100 mt-4 p-1 text-center text-lg text-white bg-gray-700 transition-opacity duration-200 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none rounded-lg"
      > -->

      <div class="w-full mt-6">
        <VueSlickCarousel v-bind="settings">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :project="project"
          />
        </VueSlickCarousel>
      </div>

      <!-- Title -->
      <div class="px-6 text-4xl sm:text-7xl mt-2 kaushanScript text-gray-800">
        Skill<span class="text-teal-500">set</span>
      </div>

      <!-- Skillset -->
      <div class="mt-8 w-11/12 max-w-4xl flex items-center justify-center bg-white border rounded-2xl shadow-xl">
        <SkillsetSection />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import myprojects from '~/assets/projects'

export default defineComponent({
  name: 'Projects',
  components: {
    VueSlickCarousel
  },
  setup () {
    const projects = ref(myprojects)
    const settings = reactive({
      centerMode: true,
      infinite: true,
      focusOnSelect: true,
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })

    return {
      settings,
      projects
    }
  }
})
</script>
