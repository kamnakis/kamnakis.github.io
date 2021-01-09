<template>
  <div class="w-full min-h-screen pt-2 sm:pt-6 flex flex-col items-center overflow-x-hidden">
    <div class="w-full flex flex-col items-center justify-center">
      <!-- Title -->
      <div class="px-6 text-4xl sm:text-7xl mt-2 kaushanScript text-gray-800">
        <span class="text-green-500">My</span> Projects
      </div>

      <!-- <input
        type="text"
        placeholder="Search"
        class="w-full sm:w-100 mt-4 p-1 text-center text-lg text-white bg-gray-700 transition-opacity duration-200 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none rounded-lg"
      > -->

      <!-- Skillset
      <div class="mt-8 w-full max-w-4xl flex items-center justify-center bg-white border rounded-2xl shadow-xl">
        <SkillsetSection />
      </div> -->

      <div class="w-full mt-10">
        <VueSlickCarousel v-bind="settings">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :project="project"
          />
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default defineComponent({
  name: 'Projects',
  components: {
    VueSlickCarousel
  },
  setup () {
    const settings = reactive({
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 0,
      pauseOnHover: true,
      focusOnSelect: true,
      cssEase: 'ease-in-out',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
    const projects = ref([
      {
        title: 'Task Manager',
        imgUrl: 'task-manager.png',
        link: 'https://kamnakis.github.io/kamnakis-task-manager/',
        github: 'https://github.com/kamnakis/kamnakis-task-manager'
      },
      {
        title: 'The Gallery',
        imgUrl: 'the-gallery.png',
        link: 'https://kamnakis.github.io/the-gallery/',
        github: 'https://github.com/kamnakis/the-gallery'
      },
      {
        title: 'Chat App',
        imgUrl: 'chat-app.png',
        link: 'https://kamnakis-chat-app.herokuapp.com/',
        github: 'https://github.com/kamnakis/chat-app'
      },
      {
        title: 'Weather App',
        imgUrl: 'weather-app.png',
        link: 'https://kamnakis-weather-app.herokuapp.com/',
        github: 'https://github.com/kamnakis/weather-app'
      }
    ])

    const changeSpeed = (to: number) => {
      settings.speed = to
    }

    return {
      settings,
      projects,
      changeSpeed
    }
  }
})
</script>
