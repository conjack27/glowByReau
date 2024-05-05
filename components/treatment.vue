<template>
  <div class="showhide">
    <div class="showhide__header" @click="toggleContent">
      <h3 class="showhide__heading">{{ title }}</h3>
      <span class="showhide__price">{{ price }}</span>
      <p class="showhide__time">{{ time }}</p>
      <i
        :class="[
          'showhide__arrow',
          { 'showhide__arrow--up': isOpen },
          { 'showhide__arrow--hide': noExtraContent },
        ]"
      ></i>
    </div>
    <transition name="slide">
      <div
        class="showhide__content"
        :style="{ maxHeight: isOpen ? '600px' : '0' }"
      >
        <p class="showhide__text" v-html="formattedText"></p>
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
        required: false,
      },
      noExtraContent: {
        type: Boolean,
        required: false,
      },
    },
    data() {
      return {
        isOpen: false,
      };
    },
    mounted() {
      // this.$emit('content-loaded');
    },
    computed: {
      formattedText() {
        // Convert line breaks to HTML breaks
        return this.text ? this.text.replace(/\n/g, '<br>') : '';
      },
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
    @media (min-width: 600px) {
      flex: 0 1 33%;
    }
    &__header {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 8px;
    }

    &__heading {
      font-size: 18px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      margin: 0;
      color: $brown;
      flex: 0 1 50%;
    }

    &__price {
      font-size: 18px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 700;
      letter-spacing: 1px;
      color: $brown;
      flex: 0 1 50%;
      text-align: end;
    }

    &__time {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 18px;
      color: $brown;
      margin-top: 4px;
    }

    &__arrow {
      width: 30px;
      height: 30px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23847463" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10l5 5 5-5"/></svg>');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: transform 0.3s;
      margin-top: -10px;
    }

    &__arrow--hide {
      display: none;
    }

    &__content {
      margin: 8px;
    }

    &__text {
      margin: 0;
      color: $brown;
    }

    &__arrow--up {
      transform: rotate(180deg);
    }

    &__content {
      overflow: hidden;
      transition: max-height 0.1s ease-in;
    }

    .slide-enter-active,
    .slide-leave-active {
      transition: height 0.1s;
    }
  }
</style>
