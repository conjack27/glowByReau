<template>
  <div class="home">
    <div class="home__hero" style="background-image: url('/images/test.avif')">
      <img
        class="home__logo"
        src="../assets/images/logo-full-white.svg"
        alt="Glow By Reau logo"
      />
      <h1 class="home__heading">Enhancing the beauty you were born with</h1>
      <div class="home__links">
        <hr class="home__hr" />
        <NuxtLink class="home__link" to="behandelingen">Brows</NuxtLink>
        <hr class="home__hr" />
        <NuxtLink class="home__link" to="behandelingen">Wax</NuxtLink>
        <hr class="home__hr" />
        <NuxtLink class="home__link" to="behandelingen">Beauty</NuxtLink>
        <hr class="home__hr" />
      </div>
    </div>
    <div class="home__content page">
      <h2 class="home__content-heading">Behandelingen</h2>
      <div class="home__content-blocks">
        <div class="home__content-block">
          <h3 class="home__content-block-heading">Beauty</h3>
          <p class="home__content-block-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
        </div>
        <div class="home__content-block">
          <h3 class="home__content-block-heading">Brows & lashes</h3>
          <p class="home__content-block-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
        </div>
        <div class="home__content-block">
          <h3 class="home__content-block-heading">Wax</h3>
          <p class="home__content-block-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
        </div>
      </div>
      <nuxtLink to="behandelingen" class="home__content-btn"
        >Alle behandelingen</nuxtLink
      >
    </div>
  </div>
</template>

<style lang="scss">
  @import '../assets/css/variables.scss';
  .home {
    &__hero {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: white;
      font-size: 24px;
      font-family: Nunito Extra Light, sans-serif;
      font-weight: 100;
      padding-top: 1em;
      padding-bottom: 1em;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      @media (min-width: 600px) {
        padding-top: 7em;
        padding-bottom: 3em;
      }
    }

    &__logo {
      max-width: 800px;
      margin: 5em 1em;

      @media (min-width: 600px) {
        margin: 4em 1em 2em 1em;
      }
    }

    &__heading {
      color: white;
      text-align: center;
      font-size: 24px;
      font-family: Nunito Extra Light, sans-serif;
      font-weight: 100;

      @media (min-width: 600px) {
        margin-bottom: 2em;
      }
    }

    &__links {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      color: white;
      font-family: Nunito Extra Light, sans-serif;
      font-weight: 100;
    }

    &__link {
      color: white;
      text-decoration: none;
      margin-left: 8px;
      margin-right: 8px;

      &:hover {
        text-decoration: underline;
      }
    }

    &__hr {
      border: none;
      border-bottom: 1px solid $white;
      width: 20px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 600px) {
        // Styles for desktop
      }
    }

    &__content-heading {
      font-size: 32px;
      color: $brown;
    }

    &__content-blocks {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 600px) {
        margin: 3em 1em;
        flex-direction: row;
      }
    }

    &__content-block {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0 1 30%;
      align-items: center;
      margin-top: 1em;
      margin-bottom: 1em;
      outline: 1px solid black;

      @media (min-width: 600px) {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &__content-block-heading {
      font-size: 32px;
      color: $brown;
      margin-bottom: 8px;
    }

    &__content-block-text {
      font-size: 18px;
      color: $brown;
      text-align: center;
    }

    &__content-btn {
      margin-top: 1em;
      margin-bottom: 1em;
      padding: 1em 2em;
      background-color: $brown;
      color: white;
      text-decoration: none;
      font-size: 24px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 100;
      border: none;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
