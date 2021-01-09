<template>
  <div class="courgette">
    <div class="font-light text-4xl sm:text-7xl text-gray-800">
      Stelios <span class="text-green-600">Kamnakis</span>
    </div>
    <div class="font-medium text-left text-xl sm:text-4xl text-gray-800 ml-6 -mt-2 sm:-mt-6">
      Software Developer
    </div>
    <div class="mt-8 flex justify-center space-x-10 text-3xl text-gray-700">
      <a href="https://github.com/kamnakis" target="_blank">
        <fa-icon class="tr-colors hover:text-black" :icon="['fab', 'github']" />
      </a>
      <a href="https://www.linkedin.com/in/kamnakis/" target="_blank">
        <fa-icon class="tr-colors hover:text-blue-700" :icon="['fab', 'linkedin']" />
      </a>
      <a href="mailto:kamnis1997@gmail.com" target="_blank">
        <fa-icon class="tr-colors hover:text-red-700" icon="envelope" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss">
.tr-colors {
  @apply transition-colors duration-200;
}
</style>
