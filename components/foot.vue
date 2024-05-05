<template>
  <footer class="foot">
    <h3 class="foot__heading">Enhancing the beauty you were born with</h3>
    <div class="foot__blocks">
      <ul class="foot__list">
        <li class="foot__item">
          <NuxtLink class="foot__link" to="behandelingen"
            >Behandelingen</NuxtLink
          >
        </li>
        <li class="foot__item">
          <NuxtLink class="foot__link" to="producten">Producten</NuxtLink>
        </li>
        <li class="foot__item">
          <NuxtLink class="foot__link" to="contact">Contact</NuxtLink>
        </li>
        <li class="foot__item">
          <NuxtLink class="foot__link" to="about">Over</NuxtLink>
        </li>
      </ul>
      <div class="foot__contact">
        <div class="foot__contact-block">
          <p class="foot__contact-block-heading">Contact</p>
          <p class="foot__contact-block-detail">T: +31 6 52344487</p>
          <p class="foot__contact-block-detail">
            <a
              class="foot__contact-block-detail-link"
              target="_blank"
              href="mailto:info@glowbyreau.nl"
              >info@glowbyreau.nl</a
            >
          </p>
        </div>
        <div class="foot__contact-block">
          <p class="foot__contact-block-heading">Adres</p>
          <p class="foot__contact-block-detail">
            <a
              class="foot__contact-block-detail-link"
              href="https://maps.app.goo.gl/SsonetcbaPpqQWVS9"
            >
              Gooise Kant 276
            </a>
          </p>
          <p class="foot__contact-block-detail">
            <a
              class="foot__contact-block-detail-link"
              target="_blank"
              href="https://maps.app.goo.gl/SsonetcbaPpqQWVS9"
            >
              1104 MM</a
            >
          </p>
          <p class="foot__contact-block-detail">
            <a
              class="foot__contact-block-detail-link"
              target="_blank"
              href="https://maps.app.goo.gl/SsonetcbaPpqQWVS9"
            >
              Amsterdam</a
            >
          </p>
        </div>
      </div>
    </div>
    <a href="https://www.instagram.com/glowbyreau/">
      <i class="foot__social-icon instagram"></i>
    </a>
  </footer>
</template>

<style lang="scss">
  @import '../assets/css/variables.scss';
  .foot {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
    bottom: 0;
    background-color: $beige;
    opacity: 1;
    padding: 8px;
    position: relative;

    @media (min-width: 600px) {
      // Add desktop styles here
    }

    &__heading {
      font-size: 24px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      color: $brown;
      text-align: center;
      margin: 16px 0;

      @media (min-width: 600px) {
      }
    }

    &__blocks {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 100%;
      max-width: 1200px;
      margin-top: 16px;

      @media (min-width: 600px) {
      }
    }

    &__list {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;
      margin-bottom: 16px;
      margin-top: 27px;

      @media (min-width: 600px) {
        margin-top: 10px;
      }
    }

    &__item {
      margin: 16px 0;

      @media (max-width: 600px) {
      }
    }

    &__link {
      font-size: 18px;
      text-transform: uppercase;
      font-family: Georgia, 'Times New Roman', Times, serif;
      color: $brown;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }

    &__contact {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      @media (max-width: 600px) {
      }
    }

    &__contact-block {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      @media (max-width: 600px) {
      }
    }

    &__contact-block-heading {
      font-size: 18px;
      color: $brown;
      margin-bottom: 0px;
      text-transform: uppercase;
      text-align: right;
      margin-top: 0px;
    }

    &__contact-block-detail {
      text-align: right;
      font-size: 18px;
      color: $brown;
      margin: 0;
    }

    &__contact-block-detail-link {
      color: $brown;
      text-decoration: none;

      &:hover {
        color: $white;
      }
    }

    &__social-icon {
      color: $brown;
      cursor: pointer;
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: 50px;

      &.instagram {
        background-image: url('../assets/images/instagram.svg');
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
      }
    }
  }
</style>
