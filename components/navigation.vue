<template>
  <nav
    class="nav"
    :class="{ 'nav--scrolled': isScrolled, 'nav--transparent': !isScrolled }"
  >
    <NuxtLink class="nav__logo" to="/">
      <img
        class="nav__logo--mobile"
        src="../assets/images/logo-large-white.svg"
      />
      <img
        class="nav__logo--desktop"
        src="../assets/images/logo-small-white.svg"
      />
    </NuxtLink>
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
        <li class="nav__menu-item">
          <NuxtLink @click="closeMenu" class="nav__menu-link" to="about"
            >Over</NuxtLink
          >
        </li>
        <li class="nav__menu-item">
          <NuxtLink @click="closeMenu" class="nav__menu-link" to="behandelingen"
            >Behandelingen</NuxtLink
          >
        </li>
        <li class="nav__menu-item">
          <NuxtLink @click="closeMenu" class="nav__menu-link" to="producten"
            >Producten</NuxtLink
          >
        </li>
        <li class="nav__menu-item">
          <NuxtLink @click="closeMenu" class="nav__menu-link" to="contact"
            >Contact</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        isScrolled: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 0;
      },
    },
    mounted() {
      // Attach the scroll event listener when the component is mounted
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      // Remove the scroll event listener when the component is destroyed
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/variables.scss';
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: $beige;
    position: relative;
    transition: background-color 0.2s ease;

    @media (min-width: 600px) {
      flex-direction: column;
      position: fixed;
      width: 100%;

      &--transparent {
        background-color: transparent;
      }

      &--scrolled {
        background-color: $brown;

        .nav__menu-link {
          color: $white;
        }

        .nav__menu {
          border-bottom: none;
          border-top: 1px solid $white;
        }
      }
    }

    &__logo {
      width: 200px;
      height: auto;
      margin-left: 25%;

      @media (min-width: 600px) {
        width: 50px;
        margin-left: 0;
      }
    }

    &__logo--mobile {
      display: block;
      @media (min-width: 600px) {
        display: none;
      }
    }

    &__logo--desktop {
      display: none;
      @media (min-width: 600px) {
        display: block;
        width: 30px;
        height: auto;
        padding-bottom: 8px;
      }
    }

    &__menu {
      @media (min-width: 600px) {
        display: flex;
        align-items: center;
        width: 100%;
        border-top: 1px solid $brown;
        border-bottom: 1px solid $brown;
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
      top: 3px;
      left: 0;
      width: 100%;
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
        width: 100%;
        justify-content: space-between;
        // change to margin horizontal mixin
        margin: 0 15%;
        background-color: transparent;
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

    &__menu-link {
      color: #fff;
      text-decoration: none;
      font-size: 24px;
      text-transform: uppercase;

      @media (min-width: 600px) {
        &.router-link-active {
          color: #70604f;
        }
      }
    }
  }
</style>
