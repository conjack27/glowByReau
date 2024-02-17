<template>
  <nav class="nav">
    <div class="nav__logo mb">Logo</div>
    <div class="nav__menu">
      <div class="nav__menu-icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        class="nav__menu-items"
        :class="{ 'nav__menu-items--open': isMenuOpen }"
      >
        <li class="nav__menu-item">About</li>
        <li class="nav__menu-item">Behandeling</li>
        <li class="nav__menu-item">Producten</li>
        <li class="nav__menu-item">Contact</li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/main.scss';
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: $beige;
    position: relative;

    @media (min-width: 600px) {
      flex-direction: column;
    }

    &__logo {
      font-weight: bold;
      @media (min-width: 600px) {
      }
    }

    &__menu {
      @media (min-width: 600px) {
        display: flex;
        align-items: center;
        outline: 1px solid black;
        width: 100%;
      }
    }

    &__menu-icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 20px;
      cursor: pointer;

      @media (min-width: 600px) {
        display: none;
      }
    }

    &__menu-icon span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: #333;
    }

    &__menu-items {
      position: absolute;
      top: 15px;
      left: 0;
      width: 92%;
      padding: 1rem;
      color: $white;
      list-style: none;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      background-color: $beige;

      @media (min-width: 600px) {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        padding: 0;
        display: flex;
        outline: 1px solid white;
        width: 100%;
        justify-content: space-between;
        // change to margin horizontal mixin
        margin: 0 15%;
      }
    }

    &__menu-items--open {
      opacity: 1;
      visibility: visible;
      transform: translateY(10%);
    }

    &__menu-item {
      margin-bottom: 1rem;

      @media (min-width: 600px) {
        margin-right: 1rem;
        opacity: 0.8;
        transition: opacity 0.3s ease;
        font-size: 32px;
        text-transform: uppercase;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
