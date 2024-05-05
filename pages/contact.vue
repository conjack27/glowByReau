<template>
  <div class="contact">
    <div
      class="contact__hero"
      style="background-image: url('/images/Contact photo 1.jpg')"
    >
      <div class="contact__blocks contact__blocks--desktop">
        <div class="contact__block">
          <h2 class="contact__heading">Contact</h2>
          <p class="contact__text">T: +31 6 52344487</p>
          <a href="mailto:info@glowbyreau.nl" class="contact__link">
            info@glowbyreau.nl</a
          >
          <p class="contact__text">&nbsp;</p>
        </div>
        <div class="contact__block">
          <h2 class="contact__heading">Locatie</h2>
          <p class="contact__text">
            <a
              target="_blank"
              class="contact__link"
              href="https://maps.app.goo.gl/SsonetcbaPpqQWVS9"
            >
              Gooise Kant 276,
            </a>
          </p>
          <p class="contact__text">
            <a
              target="_blank"
              class="contact__link"
              href="https://maps.app.goo.gl/SsonetcbaPpqQWVS9"
              >1104 MM Amsterdam, Nederland</a
            >
          </p>
          <p class="contact__text">(Gratis parkeren)</p>
        </div>
      </div>
    </div>
    <div class="contact__blocks contact__blocks--mobile">
      <div class="contact__block">
        <h2 class="contact__heading">Contact</h2>
        <p class="contact__text">T: +31 6 52344487</p>
        <p class="contact__text">info@glowbyreau.nl</p>
      </div>
      <div class="contact__block">
        <h2 class="contact__heading">Locatie</h2>
        <p class="contact__text">
          <a
            target="_blank"
            class="contact__link"
            href="https://maps.app.goo.gl/SsonetcbaPpqQWVS9"
          >
            Gooise Kant 276,
          </a>
        </p>
        <p class="contact__text">
          <a
            target="_blank"
            class="contact__link"
            href="https://maps.app.goo.gl/SsonetcbaPpqQWVS9"
            >1104 MM Amsterdam, Nederland</a
          >
        </p>
        <p class="contact__text">(Gratis parkeren)</p>
      </div>
    </div>
    <div class="contact__content">
      <div class="contact__content-header" @click="toggleContent">
        <h3 class="contact__content-heading">Annulerings voorwaarde</h3>
        <i :class="['contact__arrow', { 'contact__arrow--up': isOpen }]"></i>
      </div>
      <transition name="slide">
        <p
          class="contact__revealed-text"
          :style="{ maxHeight: isOpen ? '300px' : '0' }"
        >
          Het annuleren van een afspraak dient 24 uur van te voren doorgegeven
          te worden, anders ben ik genoodzaakt 50% van de totale behandelprijs
          in rekening te brengen. Restitutie is niet mogelijk, maar u kunt wel
          de afspraak verzetten naar een andere dag en tijdstip.
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleContent() {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/variables.scss';
  .contact {
    &__hero {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      height: 300px;

      @media (min-width: 600px) {
        height: 700px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }

    &__content {
      padding: 8px;
    }

    &__blocks {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &--desktop {
        display: none;

        @media (min-width: 600px) {
          display: flex;
          flex-direction: row;
        }
      }

      &--mobile {
        display: flex;
        color: $white;

        @media (min-width: 600px) {
          display: none;
        }
      }
    }

    &__block {
      display: flex;
      flex-direction: column;
      background-color: rgba(119, 120, 95, 0.7);
      padding: 50px;

      @media (min-width: 600px) {
        margin: 0 200px;
      }
    }

    &__heading {
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      color: $white;
      font-size: 38px;
      text-align: center;

      @media (min-width: 600px) {
        margin-top: 0;
      }
    }

    &__text {
      font-size: 18px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      padding: 0;
      color: $brown;
      margin: 0;
      text-align: center;

      @media (min-width: 600px) {
        color: $white;
      }
    }

    &__link {
      font-size: 18px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      padding: 0;
      margin: 0;
      text-align: center;
      color: $white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &__images {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media (min-width: 600px) {
        flex-direction: row;
        padding: 50px;
        justify-content: space-around;
      }
    }

    &__image {
      width: 200px;
      margin-top: 20px;
      height: auto;
    }

    &__content {
      padding: 8px;
      min-height: 180px;

      @media (min-width: 600px) {
        padding: 0 200px;
      }
    }

    &__content-header {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      text-align: center;
    }

    &__arrow {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23847463" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10l5 5 5-5"/></svg>');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: transform 0.3s;
    }

    &__arrow--up {
      transform: rotate(180deg);
    }

    &__revealed-text {
      font-size: 18px;
      text-align: center;
      color: $brown;
      margin-top: 8px;
      margin-bottom: 8px;
      overflow: hidden;
      transition: max-height 0.5s;
    }
  }
</style>
