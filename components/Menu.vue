<template>
  <div class="fixed left-0 top-0 bottom-0 text-gray-800 z-10">
    <!-- Open Menu Button -->
    <button
      v-if="!isOpen"
      class="focus:outline-none m-4 sm:m-6"
      @click="toggle()"
    >
      <fa-icon icon="bars" class="text-3xl" />
    </button>

    <!-- Menu -->
    <div
      class="fixed top-0 bottom-0 left-0 rounded-tr-xl bg-white border-r transform duration-200 shadow-xl sm:shadow-none"
      :style="{
        width: '18rem',
        transform: `translateX(${isOpen ? 0 : -19 + 'rem'})`
      }"
    >
      <div
        class="absolute inset-0 flex flex-col justify-start items-start py-4 text-blue-900"
      >
        <!-- Close Menu Button -->
        <button
          class="self-end focus:outline-none mx-4"
          @click="toggle()"
        >
          <fa-icon icon="times" class="text-xl opacity-50 hover:opacity-100 transition-opacity duration-200" />
        </button>

        <div class="flex-grow flex flex-col items-start space-y-4 mt-4 ml-4">
          <NuxtLink class="navlink" to="/" @click.native="toggle()">
            <fa-icon icon="home" />
            <span>Home</span>
          </NuxtLink>
          <NuxtLink class="navlink" to="/about" @click.native="toggle()">
            <fa-icon icon="user-ninja" />
            <span>About</span>
          </NuxtLink>
          <NuxtLink class="navlink" to="/work" @click.native="toggle()">
            <fa-icon icon="briefcase" />
            <span>Work</span>
          </NuxtLink>
          <NuxtLink class="navlink" to="/contact" @click.native="toggle()">
            <fa-icon icon="address-card" />
            <span>Contact</span>
          </NuxtLink>
        </div>
        <div class="ml-4">
          designed by me!
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Menu',
  setup () {
    const isOpen = ref(false)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      toggle
    }
  }
})
</script>

<style lang="scss" scoped>
.navlink {
  @apply relative w-full grid grid-flow-row grid-cols-5 items-center text-blue-900;
}

.navlink.nuxt-link-exact-active {
  @apply text-green-600 transition-colors duration-200;
}

.navlink.nuxt-link-exact-active::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 3px;
  animation: grow 200ms ease-in forwards;

  @apply bg-green-500;
}

@keyframes grow {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(100%);
  }
}

.navlink:first-child {
  @apply text-lg col-span-1;
}

.navlink > span {
  @apply text-xl text-left col-span-1;
}
</style>
