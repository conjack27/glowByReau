<template>
  <nav class="navigation">
    <div class="navigation__logo">Logo</div>
    <div class="navigation__menu">
      <div class="navigation__menu-icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        class="navigation__menu-items"
        :class="{ 'navigation__menu-items--open': isMenuOpen }"
      >
        <li class="navigation__menu-item">About</li>
        <li class="navigation__menu-item">Behandeling</li>
        <li class="navigation__menu-item">Producten</li>
        <li class="navigation__menu-item">Contact</li>
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
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f2f2f2;
  }

  .navigation__logo {
    font-weight: bold;
  }

  .navigation__menu {
    position: relative;
  }

  .navigation__menu-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 20px;
    cursor: pointer;
  }

  .navigation__menu-icon span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #333;
  }

  .navigation__menu-items {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: #f2f2f2;
    list-style: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .navigation__menu-items--open {
    opacity: 1;
    visibility: visible;
    transform: translateY(100%);
  }

  .navigation__menu-item {
    margin-bottom: 1rem;
  }

  @media (min-width: 600px) {
    .navigation__menu {
      display: flex;
      align-items: center;
    }

    .navigation__menu-items {
      position: static;
      opacity: 1;
      visibility: visible;
      transform: none;
      background-color: transparent;
      padding: 0;
      display: flex;
    }

    .navigation__menu-item {
      margin-right: 1rem;
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    .navigation__menu-item:hover {
      opacity: 1;
    }
  }
</style>
