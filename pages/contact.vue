<template>
  <div class="contact">
    <div
      class="contact__hero"
      style="background-image: url('/images/test.avif')"
    >
      <div class="contact__block">
        <h2 class="contact__heading">Contact</h2>
        <p class="contact__text">T: +31 6 52344487</p>
        <p class="contact__text">robinruijs@gmail.com</p>
      </div>
      <div class="contact__block">
        <h2 class="contact__heading">Locatie</h2>
        <p class="contact__text">Gooise Kant 276,</p>
        <p class="contact__text">1104 MM Amsterdam, Nederland</p>
        <p class="contact__text">(Gratis parkeren)</p>
      </div>
    </div>
    <div class="contact__content">
      <h1>+ Annulerings voorwarde</h1>
      <p>
        Het annuleren van een afspraak dient 24 uur van te voren doorgegeven te
        worden, anders ben ik genoodzaakt 50% van de totale behandelprijs in
        rekening te brengen. Restitutie is niet mogelijk, maar u kunt wel de
        afspraak verzetten naar een andere dag en tijdstip.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
        height: 600px;
        flex-direction: row;
      }
    }

    &__content {
      padding: 8px;
    }

    &__block {
      display: flex;
      flex-direction: column;
      background-color: $beige;

      @media (min-width: 600px) {
      }
    }

    &__heading {
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      color: $brown;
      font-size: 38px;
      text-align: center;
    }

    &__text {
      color: $white;
      font-size: 16px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      padding: 8px;
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
  }
</style>
