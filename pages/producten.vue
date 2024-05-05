<template>
  <div class="product">
    <div
      class="product__hero"
      style="background-image: url('/images/Product banner.jpg')"
    ></div>
    <div class="product__content">
      <h1 class="product__heading">Over Reviderm</h1>
      <p class="product__text">
        Reviderm combineert de resultaten van dermatologie en cosmetologie
        onderzoeken met krachtige werkstoffen uit de natuur, voor het produceren
        van effectieve hoogwaardige producten.
      </p>
      <p class="product__text">
        Reviderm is met name gespecialiseerd in anti-aging. Met de producten en
        de behandelingen worden de eerste tekenen van huidveroudering bestreden
        en vertraagd. Ook wordt het herstelmechanisme van de huid sneller
        geactiveerd. De huid wordt hierdoor jeugdiger, steviger en egaler.
      </p>
      <p class="product__text">
        Naast de anti-aging producten biedt Reviderm ook producten aan voor
        huidproblemen zoals roodheid, rosacea, vermoeide huid, pigmentvlekken,
        huidirritatie en een onzuivere huid.
      </p>
      <p class="product__text">
        De huid is net zo individueel en uniek als elk mens. Een gezonde huid
        geneest en regenereert zichzelf voor een dagelijks leven in schoonheid.
        Afhankelijk van aanleg, levensstijl en leeftijd, heeft de huid hierbij
        ondersteuning nodig. Deze ondersteuning wordt door Reviderm optimaal
        gegeven.
      </p>
      <div class="product__images">
        <img
          src="/images/Product little photo 4.jpg"
          alt="reviderm bottle"
          class="product__image"
        />
        <img
          src="/images/product little foto.jpg"
          alt="reviderm bottle"
          class="product__image"
        />
        <img
          src="/images/Product lttle photo 2.jpg"
          alt="reviderm bottle"
          class="product__image"
        />
        <img
          src="/images/Product little photo 3.jpg"
          alt="reviderm bottle"
          class="product__image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
  @import '../assets/css/variables.scss';
  .product {
    &__hero {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 300px;

      @media (min-width: 600px) {
        height: 600px;
      }
    }

    &__content {
      padding: 8px;

      @media (min-width: 600px) {
        padding: 8px 10%;
      }
    }

    &__heading {
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-align: center;
    }

    &__text {
      color: $brown;
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
