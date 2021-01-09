<template>
  <div class="w-full flex items-center justify-start">
    <!-- Title -->
    <div class="hidden sm:block ml-8 lg:ml-48 relative kaushanScript text-4xl lg:text-7xl text-gray-800">
      About <span class="text-green-500">me</span>
    </div>
    <div class="sm:hidden fixed top-0 left-0 right-0 text-4xl kaushanScript mt-1 text-gray-800">
      About <span class="text-green-500">me</span>
    </div>

    <!-- Content -->
    <div
      class="fixed mt-16 sm:mt-0 top-0 bottom-0 right-0 left-0 sm:left-auto sm:w-2/3 lg:w-100 rounded-t-2xl sm:rounded-tr-none bg-white border-l shadow-xl overflow-y-auto"
      :class="{
        'page-animated-bottom': $vssWidth < 640,
        'page-animated-right': $vssWidth >= 640
      }"
    >
      <div class="element-fade flex flex-col items-center py-10">
        <!-- Profile Image -->
        <img
          class="w-48 h-48 object-cover rounded-full bg-gray-300"
          src="~/assets/images/profile.jpg"
          alt="profile"
        >

        <!-- Short bio -->
        <div class="courgette px-6 text-xl leading-6 text-gray-800 mt-10">
          My name is Stelios Kamnakis, I live in Greece and
          I work as a Software Developer, I love creating apps and
          websites.
        </div>

        <!-- Work -->
        <NuxtLink
          to="/work"
          class="mt-8 courgette text-blue-700 hover:text-blue-900"
        >
          Check some of my projects out!
        </NuxtLink>

        <!-- Quote -->
        <div class="px-4 sm:px-8 mt-8 courgette leading-6 text-blue-900">
          <span class="text-lg">
            “Live as if you were to die tomorrow.<br>
            Learn as if you were to live forever.”
          </span><br>
          <span class="text-left font-medium">
            –Mahatma Gandhi
          </span>
        </div>

        <!-- Contact -->
        <NuxtLink
          to="/contact"
          class="mt-8 courgette text-blue-700 hover:text-blue-900"
        >
          Contact me here!
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

export default defineComponent({
  name: 'About',
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin]
})
</script>

<style lang="scss" scoped>
$slide-duration: 500ms;

.page-animated-bottom {
  animation: slideup $slide-duration ease-in forwards;
}

@keyframes slideup {
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0);
  }
}

.page-animated-right {
  animation: slidein $slide-duration ease-in forwards;
}

@keyframes slidein {
  from {
    transform: translateX(26rem);
  }

  to {
    transform: translateX(0);
  }
}

$fade-duration: 750ms;

.element-fade {
  opacity: 0;
  animation-name: fadein;
  animation-duration: $fade-duration;
  animation-delay: $slide-duration + 250ms;
  animation-fill-mode: forwards;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
