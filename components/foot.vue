<template>
  <footer class="foot">
    <nav class="foot__nav">
      <ul class="foot__list">
        <li class="foot__item"><a href="#" class="foot__link">Home</a></li>
        <li class="foot__item"><a href="#" class="foot__link">About</a></li>
        <li class="foot__item"><a href="#" class="foot__link">Services</a></li>
        <li class="foot__item"><a href="#" class="foot__link">Contact</a></li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss">
  .foot {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media (min-width: 600px) {
      // Add desktop styles here
    }

    &__nav {
      // Add navigation styles here
      margin-top: auto;
      flex: 1;
    }

    &__list {
      // Add list styles here
    }

    &__item {
      // Add list item styles here
    }

    &__link {
      // Add link styles here
    }
  }
</style>
