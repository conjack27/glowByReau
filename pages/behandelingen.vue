<template>
  <div class="treatment">
    <div class="treatment__headings">
      <h2 class="treatment__heading" @click="selectedSection = 'beauty'">
        Beauty
      </h2>
      <h2 class="treatment__heading" @click="selectedSection = 'brows'">
        Brows & Lashes
      </h2>
      <h2 class="treatment__heading" @click="selectedSection = 'wax'">Wax</h2>
    </div>
    <div class="treatment__content">
      <transition name="fade">
        <div
          :key="selectedSection"
          class="treatment__section"
          v-show="selectedSection === 'beauty'"
        >
          <h2>Beauty Content</h2>
        </div>
      </transition>
      <transition name="fade">
        <div
          :key="selectedSection"
          class="treatment__section"
          v-show="selectedSection === 'brows'"
        >
          <p>Brows Content</p>
        </div>
      </transition>
      <transition name="fade">
        <div
          :key="selectedSection"
          class="treatment__section"
          v-show="selectedSection === 'wax'"
        >
          <div>Wax Content</div>
        </div>
      </transition>
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
      padding: 8px;

      @media (min-width: 600px) {
        flex-direction: column;
      }
    }

    &__heading {
      cursor: pointer;
      font-size: 24px;

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
      @media (max-width: 600px) {
        width: 100%; // Add this line to ensure the section takes full width on mobile
        box-sizing: border-box; // Include padding and border in the element's total width
        margin: 0; // Remove any default margins
      }

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
