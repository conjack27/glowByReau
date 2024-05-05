<template>
  <div class="home">
    <div
      class="home__hero"
      style="background-image: url('/images/Homepage.jpg')"
    >
      <img
        class="home__logo"
        src="../assets/images/logo-full-white.svg"
        alt="Glow By Reau logo"
      />
      <h1 class="home__heading">Enhancing the beauty you were born with</h1>
      <div class="home__links">
        <hr class="home__hr" />

        <p class="home__link" @click="goToBehandelingen('brows')">Brows</p>
        <hr class="home__hr" />
        <p class="home__link" @click="goToBehandelingen('wax')">Wax</p>
        <hr class="home__hr" />
        <p class="home__link" @click="goToBehandelingen('beauty')">Beauty</p>

        <hr class="home__hr" />
      </div>
    </div>
    <div class="home__content page">
      <h2 class="home__content-heading">Treatments</h2>
      <div class="home__content-blocks">
        <div class="home__content-block">
          <h3 class="home__content-block-heading">Beauty</h3>
          <p class="home__content-block-text">
            Het brede scala aan behandelingen zorgt ervoor dat er voor iedere
            huidwens en -conditie een passende behandeling is. Komt u er niet
            helemaal uit welke behandeling voor u geschikt is? Laat u dan vooral
            adviseren. Ik sta graag voor u klaar met een huidanalyse en
            huidadvies. Uw huid, mijn zorg.
          </p>
        </div>
        <div class="home__content-block">
          <h3 class="home__content-block-heading">Brows & lashes</h3>
          <p class="home__content-block-text">
            Wenkbrauwen en wimpers zijn zeer bepalend voor uw gezicht, daarom is
            het zeker de moeite waard om er extra aandacht aan te besteden. Er
            wordt samen met u gekeken naar de juiste vorm en kleur die bij uw
            gezicht past.
          </p>
        </div>
        <div class="home__content-block">
          <h3 class="home__content-block-heading">Wax</h3>
          <p class="home__content-block-text">
            Hairless is Careless. Want om eerlijk te zijn, helemaal niemand
            houdt van scheren. Laat u daarom waxen met de fijne wax van Glow by
            Reau. Zo bent u zeker van alle ongewenste haartjes af en kunt u
            genieten van een stralende gladde huid.
          </p>
        </div>
      </div>
      <nuxtLink to="behandelingen" class="home__content-btn"
        >Alle behandelingen</nuxtLink
      >
      <p class="home__content-cadeau">
        Cadeaubon: Laat iemand anders eens stralen bij Glow by Reau beautysalon.
        U kunt zelf het bedrag of de behandeling bepalen.
      </p>
      <p class="home__content-cadeau">De cadeaubonnen worden leuk verpakt!</p>

      <!-- <div
        id="wahanda-online-booking-widget-iframe"
        data-widget-url="https://widget.treatwell.nl/salon/432540/menu/"
      ></div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedSection: this.$route.params.section || 'beauty',
      };
    },

    methods: {
      goToBehandelingen(section) {
        this.$router.push({ name: 'behandelingen', query: { section } });
      },
    },
  };
</script>

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
        padding-top: 114px;
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
      align-items: center;
    }

    &__link {
      color: white;
      text-decoration: none;
      margin: 0 8px;
      font-size: 24px;
      cursor: pointer;
      margin-top: 0;

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
      align-items: flex-start;

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

    &__content-cadeau {
      font-size: 16px;
      color: #847463;
      text-align: center;
      margin: 0;
      padding: 0 20%;
    }
  }
</style>
