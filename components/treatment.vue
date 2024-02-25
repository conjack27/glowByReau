<template>
  <div class="showhide">
    <div class="showhide__header" @click="toggleContent">
      <h3 class="showhide__heading">{{ title }}</h3>
      <p class="showhide__time">{{ time }}</p>
      <span class="showhide__price">{{ price }}</span>
      <i :class="['showhide__arrow', { 'showhide__arrow--up': isOpen }]"></i>
    </div>
    <transition name="slide">
      <div
        class="showhide__content"
        :style="{ maxHeight: isOpen ? '200px' : '0' }"
      >
        <p class="showhide__text">
          {{ text }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleContent() {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '../assets/css/variables.scss';

  .showhide {
    // Your styles for the show/hide component container

    &__header {
      // Your styles for the header section
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    &__heading {
      font-size: 18px;
      margin: 0;
      color: $brown;
      flex: 0 1 50%;
    }

    &__arrow {
      // Your styles for the arrow
      width: 20px;
      height: 20px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10l5 5 5-5"/></svg>');
      background-size: contain;
      background-repeat: no-repeat;
      transition: transform 0.3s;
    }

    &__arrow--up {
      transform: rotate(180deg);
    }

    &__content {
      overflow: hidden; // Ensure the content doesn't overflow
      transition: max-height 0.1s ease-in; // Use max-height for the transition
    }

    .slide-enter-active,
    .slide-leave-active {
      transition: height 0.1s;
    }
  }
</style>
