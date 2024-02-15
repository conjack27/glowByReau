<template>
  <div class="home">
    <div class="home__hero">
      <!-- Hero image content goes here -->
    </div>
    <div class="home__content">
      <h1 class="home__heading">Welcome to our Beauty Salon</h1>
      <p class="home__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, justo ac tincidunt ultrices, mauris nunc consequat lacus,
        ac tincidunt nunc nunc id nunc. Sed euismod, mauris vitae aliquam
        consectetur, nunc nunc consequat lacus, ac tincidunt nunc nunc id nunc.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
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
  }
</style>
