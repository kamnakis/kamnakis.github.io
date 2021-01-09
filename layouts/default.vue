<template>
  <div class="background">
    <div class="wrapper">
      <transition
        name="fade"
        mode="out-in"
      >
        <Nuxt />
      </transition>
      <Menu />
    </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'KaushanScript';
  src: url('~assets/fonts/KaushanScript-Regular.ttf') format('truetype');
}

.kaushanScript {
  font-family: 'KaushanScript', Arial, Helvetica, sans-serif;
}

@font-face {
  font-family: 'Courgette-Regular';
  src: url('~assets/fonts/Courgette-Regular.ttf') format('truetype');
}

.courgette {
  font-family: 'Courgette-Regular', Arial, Helvetica, sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

html {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrapper {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;

  font-size: 1rem !important;
}

.background {
  background-image: url("~assets/images/Black-Animation-Background.svg");
  color: transparent;
}
</style>
