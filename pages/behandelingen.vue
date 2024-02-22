<template>
  <div class="treatment">
    <div class="treatment__headings">
      <h2 class="treatment__heading" @click="selectedSection = 'beauty'">
        Beauty
      </h2>
      <h2 class="treatment__heading" @click="selectedSection = 'brows'">
        Brows
      </h2>
      <h2 class="treatment__heading" @click="selectedSection = 'wax'">Wax</h2>
    </div>
    <div class="treatment__content">
      <div
        :key="selectedSection"
        class="treatment__section fade"
        :class="{
          'fade-enter': selectedSection,
          'fade-leave-to': !selectedSection,
        }"
      >
        <h2>{{ selectedSection }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedSection: 'beauty',
      };
    },
  };
</script>

<style lang="scss">
  .treatment {
    &__headings {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 600px) {
        flex-direction: column;
      }
    }

    &__heading {
      cursor: pointer;
      @media (max-width: 600px) {
        margin-bottom: 10px;
      }
    }

    &__content {
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
    }

    &__section {
      display: none;
      &.fade-enter-active,
      &.fade-leave-active {
        transition: opacity 0.5s;
      }
      &.fade-enter,
      &.fade-leave-to {
        opacity: 1;
        display: block;
      }
    }
  }
</style>
