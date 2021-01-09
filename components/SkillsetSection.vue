<template>
  <div class="px-6 py-8 grid grid-cols-3 grid-flow-row-dense col-gap-2 row-gap-2 sm:grid-flow-col-dense sm:grid-rows-2 sm:px-4 sm:py-6">
    <img
      v-for="(img, index) in skillset"
      :key="img.slug"
      class="skill-icon opacity-0"
      :src="require(`~/assets/images/skillset/${img.src}`)"
      :alt="img.slug"
      :title="img.slug"
      :style="{
        'animation-delay': `${(Math.random() * (650 - 200) + 200).toFixed(2)}ms`,
        'width': `${(Math.random() * (3.5 - 3) + 3).toFixed(2)}rem`,
        'margin-bottom': (index + 1) % 3 === 0 ? `${(Math.random() < 0.5 ? 1 : -1) * ((Math.random() * (3 - 0) ) + 0).toFixed(2)}rem` : '0px',
        'margin-left': `${(Math.random() < 0.5 ? 1 : -1) * (Math.random() * (1.2 - 0.5) + 0.5).toFixed(2)}rem`
      }"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SkillsetSection',
  setup () {
    const skillset = ref([
      {
        src: 'html.svg',
        slug: 'html5'
      },
      {
        src: 'tailwindcss-icon.svg',
        slug: 'tailwindcss'
      },
      {
        src: 'sass.svg',
        slug: 'scss'
      },
      {
        src: 'js.svg',
        slug: 'javascript'
      },
      {
        src: 'typescript-icon.svg',
        slug: 'typescript'
      },
      {
        src: 'react-js.svg',
        slug: 'react'
      },
      {
        src: 'vue-js.svg',
        slug: 'vue'
      },
      {
        src: 'nuxt.svg',
        slug: 'nuxt'
      },
      {
        src: 'quasar-logo.svg',
        slug: 'quasar'
      },
      {
        src: 'node-js.svg',
        slug: 'nodejs'
      },
      {
        src: 'expressjs.svg',
        slug: 'expressjs'
      },
      {
        src: 'gql-icon.svg',
        slug: 'gql'
      },
      {
        src: 'mysql.svg',
        slug: 'mysql'
      },
      {
        src: 'strapi.svg',
        slug: 'strapi'
      }
    ])

    return {
      skillset
    }
  }
})
</script>

<style lang="scss" scoped>
.skill-icon {
  @apply transition-transform duration-200 ease-in-out;

  animation-name: fadeIn;
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  -webkit-filter: drop-shadow(7.5px 7.5px 1px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(7.5px 7.5px 1px rgba(0, 0, 0, 0.3));
}

.skill-icon:nth-child(3n+3) {
  @apply row-span-2 self-center;
}

.skill-icon:hover {
  @apply transform scale-110;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
