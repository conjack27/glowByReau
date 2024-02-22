<template>
  <div class="home">
    <div class="home__hero">
      <!-- Hero image content goes here -->
    </div>
    <div class="home__content">
      <img src="/images/test.avif" alt="Glow By Reau logo" />
      <h1 class="home__heading">Enhancing the beauty you were born with</h1>
      <div class="home__links">
        <NuxtLink to="behandelingen">Brows</NuxtLink>
        <NuxtLink to="behandelingen">Wax</NuxtLink>
        <NuxtLink to="behandelingen">Beauty</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../assets/css/main.scss';
  .home {
    // Styles for the main container

    &__hero {
      // Styles for the hero section
    }

    &__content {
      // Styles for the content section

      @media (min-width: 600px) {
        // Styles for desktop
      }
    }

    &__heading {
      // Styles for the heading
    }

    &__text {
      // Styles for the text
    }

    &__links {
      display: flex;
      color: $white;
      justify-content: space-between;
    }
  }
</style>
