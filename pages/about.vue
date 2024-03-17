<template>
  <div class="about">
    <div
      class="about__hero"
      style="background-image: url('/images/About orbin phtoo.jpg')"
    ></div>
    <div class="about__content">
      <h1 class="about__heading">Over Glow By Reau</h1>
      <p class="about__text">
        Welkom op de site van Glow By Reau. Mijn naam is Robin Ruijs,
        schoonheidsspecialiste sinds 2007.
      </p>
      <p class="about__text">
        Na 17 jaar ben ik gestopt met mijn salon in Amsterdam centrum en begon
        ik een nieuw hoofdstuk met mijn thuissalon in Amsterdam-Zuidoost.
      </p>
      <p class="about__text">
        Als gecertificeerd skinexpert, wimper- en wenkbrauwstyliste help ik u
        graag om uw huid te laten stralen. Let’s glow by Reau!
      </p>
      <p class="about__text">
        Ik ben gespecialiseerd in de volgende behandelingen:
      </p>
      <ul class="about__list">
        <li>Huidverbetering op maat met de producten van Reviderm.</li>
        <li>Waxbehandelingen van gezicht en lichaam.</li>
        <li>Diverse wimper & wenkbrauwbehandelingen</li>
      </ul>
      <p class="about__text">
        Ik blijf mijzelf constant bijscholen, zodat mijn behandelingen voldoen
        aan de nieuwe ontwikkelingen en technieken.
      </p>
      <p class="about__text">
        Volg mij op Instagram om meer van mijn werk te zien.
      </p>
      <p class="about__text">
        Heeft u nog vragen? Neem gerust contact op. Ik hoop u zo spoedig
        mogelijk te verwelkomen in de salon.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../assets/css/variables.scss';
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
      flex-direction: row;
      align-items: flex-start;
    }

    &__hero {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 300px;

      @media (min-width: 600px) {
        height: 94vh;
        flex: 0 1 50%;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      padding: 8px;
      margin: 8px;

      @media (min-width: 600px) {
        padding: 114px 80px 0 80px;
        flex: 0 1 50%;
      }
    }

    &__heading {
      text-transform: uppercase;
    }

    &__list {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 18px;
      color: $brown;
      padding-bottom: 8px;
      margin-top: 0;
    }

    &__text {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 18px;
      padding: 0;
      margin-top: 4px;
      color: $brown;
      text-align: center;
    }
  }
</style>
