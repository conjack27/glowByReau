<template>
  <div class="treatment">
    <div class="treatment__headings">
      <h2
        class="treatment__heading"
        :class="{ 'active-heading': selectedSection === 'beauty' }"
        @click="selectedSection = 'beauty'"
      >
        Beauty
      </h2>
      <h2
        class="treatment__heading"
        :class="{ 'active-heading': selectedSection === 'brows' }"
        @click="selectedSection = 'brows'"
      >
        Brows & Lashes
      </h2>
      <h2
        class="treatment__heading"
        :class="{ 'active-heading': selectedSection === 'wax' }"
        @click="selectedSection = 'wax'"
      >
        Wax
      </h2>
    </div>
    <div class="treatment__content">
      <div>
        <div
          :key="'beauty'"
          class="treatment__section"
          v-show="selectedSection === 'beauty'"
        >
          <h2 class="treatment__section-heading">Facials</h2>
          <p class="treatment__section-intro">
            Bij alle gezichtsbehandelingen worden de producten aangepast op
            basis van uw wensen en huidtype.
          </p>
          <div class="treatment__treatments">
            <treatment
              title="Mini glow"
              price="€45"
              time="45 min."
              text="• Reiniging  
• Peeling
• Epileren/ waxen wenkbrauwen
• Masker
• Serum
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Basic glow"
              price="€59"
              time="60 min."
              text="• Reiniging
• Peeling
• Reinigende massage
• Onzuiverheden verwijderen
• Serum
• Masker
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Full glow"
              price="€75"
              time="90 min."
              text="• Reiniging 
• Peeling
• Epileren/ waxen wenkbrauwen
• Reinigende massage
• Onzuiverheden verwijderen
• Gezicht-, hals- & nekmassage 
• Serum
• Masker
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Men treatment"
              price="€65"
              time="75 min."
              text="• Reiniging
• Peeling
• Reinigende massage 
• Onzuiverheden verwijderen 
• Gezicht- hals- & nekmassage 
• Serum
• Masker
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Detox treatment"
              price="€65"
              time="75 min."
              text="Een ontgiftende en zuiverende behandeling met behulp van zilverpoeder. Geschikt voor de onreine/acné huid.
• Reiniging
• Peeling
• Reinigende massage
• Onzuiverheden verwijderen
• Serum
• Detox masker
• Ph balancer 
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Acid peel treatment"
              price="€85"
              time="75 min."
              text="De hoornlaag wordt met deze behandeling verdund.
Dode huidcellen verdwijnen en de huid krijgt een mooiere kleur. Er ontstaat een betere doorbloeding en opname van werkzame stoffen.
De huid wordt gelift en strakker. Pigmentvlekken worden minder zichtbaar. De huid ziet er egaler en jonger uit met verfijnde poriën.

• Reiniging
• Peeling
• Skin prep
• Acid Peel (verschillende beschikbaar)
• Neutralisator
• Serum
• Masker
• Eindverzorging
• Solar skin shield SPF 30
"
            ></treatment>
            <treatment
              title="Hydrolage treatment"
              price="€80"
              time="75 min."
              text="Ideaal voor de vochtarme huid, voor intensieve hydratatie. De cellen krijgen een energiestoot en het gebruik van de hydrolage verbetert de hydratatie van de huid en heeft een mooi liftend effect. Vochtrimpels verdwijnen en de huid wordt rozig, zacht en stralend.
• Reiniging
• Peeling
• Doorbloeding stimulerend masker
• Reinigende massage
• Onzuiverheden verwijderen
• Werkstoffenconcentraat
• Hydrolage (collageenvlies- & gipsmasker)
• Serum
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Microdermabrasie treatment"
              price="€105"
              time="70 min."
              text="Microdermabrasie is een zéér effectieve behandelmethode voor huiden met specifieke problemen. In feite is microdermabrasie een mechanische superpeeling waarmee de bovenste huidlaag op een pijnloze manier wordt verwijderd en het lichaam wordt gestimuleerd tot de aanmaak van nieuwe en jonge huidcellen.
(U kunt kiezen uit: een losse behandeling of een kuur van drie of zes behandelingen.)

• Reiniging
• Peeling
• Doorbloeding stimulererend masker
• Reinigende massage
• Onzuiverheden verwijderen
• Skin prep
• Microdermabrasie
• Serum
• Masker
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Anti-aging treatment"
              price="€125"
              time="90 min."
              text="Microdermabrasie behandeling inclusief hydrolage voor vochtherstel en de stimulatie van de celregeneratie.
• Reiniging
• Peeling
• Doorbloeding stimulerend masker
• Reinigende massage 
• Onzuiverheden verwijderen
• Skin prep
• Microdermabrasie
• Werkstoffenconcentraat
• Hydrolage (collageenvlies- + gipsmasker)
• Serum
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Oxygen treatment"
              price="€110"
              time="90 min."
              text="Intensieve behandeling om de aanmaak van zuurstof in de huid te stimuleren. De               ideale behandeling als uw huid een oppepper nodig heeft. De huid wordt zacht, roze en krijgt een jeugdige uitstraling.
• Reiniging
• Peeling
• Reinigende massage
• Onzuiverheden verwijderen
• Step I oxygen ( de huid wakker maken)
• Step II (werkstoffen inmasseren)
• Step III (diverse zuren zetten de huid aan het werk)
• Hydrolage masker
• Serum
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Ultimate Lift treatment"
              price="€130"
              time="90 min."
              text="De oxygen treatment in combinatie met microdermabrasie en de hydrolage. Voor de ultieme Glow Behandeling.

• Reiniging
• Peeling
• Reinigende massage 
• Onzuiverheden verwijderen
• Skin prep
• Microdermabrasie
• Step II (werkstoffen inmasseren)
• Step III (diverse zuren)
• Hydrolage masker
• Serum
• Eindverzorging
"
            ></treatment>
            <treatment
              title="Microdermabrasie en Acid peel treatment"
              price="€120"
              time="90 min."
              text="In combinatie met microdermabrasie is het een uitstekende behandeling om de huid te verfrissen en te revitaliseren. Ideaal voor pigmentstoornissen en acné-gepigmenteerde littekens.

• Reiniging
• Peeling
• Skin prep
• Microdermabrasie
• Acid peel (meerdere beschikbaar) 
• Neutralisator
• Serum
• Masker 
• Eindverzorging
• Solar skin shield SPF 30
"
            ></treatment>
            <treatment
              title="Micro-needling treatment "
              price="€100"
              time="45 min."
              text="De skinNeedler zorgt voor een trigger in de huid, waardoor er celvernieuwing gaat plaatsvinden en de aanmaak van collageen, elastine en hyaluronzuur wordt geactiveerd. Hierdoor is de SkinNeedler een effectief middel tegen rimpeltjes, huidverslapping en algehele huidveroudering.

• Reiniging
• Peeling
• Skin prep
• Formule aanbrengen 
• Micro-needling
• Herstellend masker
• Eindverzorging
• Solar skin shield SPF 30
"
            ></treatment>
          </div>
        </div>
      </div>
      <div>
        <div
          :key="'brows'"
          class="treatment__section"
          v-show="selectedSection === 'brows'"
        >
          <h2 class="treatment__section-heading">Wimpers en Wenkbrauwen</h2>
          <p class="treatment__section-intro">
            Laat mij u helpen om uw gezichtskenmerken in balans te brengen en uw
            ogen meer te laten spreken!
          </p>
          <div class="treatment__treatments">
            <treatment
              title="Brow shaping"
              price="€15"
              time="10 min."
              text="Waxen is een snelle ontharingsmethode om uw wenkbrauwen in de perfecte vorm te krijgen. U geniet van een langdurig resultaat want de haartjes worden met wortel en al verwijderd, waardoor ze ook nog eens dunner terugkomen. U kunt ook kiezen voor epileren i.p.v. waxen!"
            ></treatment>
            <treatment
              title="Basic Brow"
              price="€13,50"
              time="10 min."
              text="Tijdens deze Basic Brow behandeling worden de wenkbrauw haartjes alleen geverfd. Resultaat zal een mooie natuurlijke look zijn."
            ></treatment>
            <treatment
              title="Classic Brow"
              price="€27"
              time="20 min."
              text="Tijdens de  Classic Brow behandeling  worden de wenkbrauw haartjes geverfd, geëpilieerd of gewaxt  en geknipt."
            ></treatment>
            <treatment
              title="Henna Brow"
              price="€39,50"
              time="40 min."
              text="Tijdens de henna Brow behandeling worden uw wenkbrauw haartjes geverfd met henna,       
           geharst of geëpileerd en geknipt.
           Henna is fijn als u liever wilt verven zonder ammoniak of waterstofperoxide. Standaard      
            wenkbrauwverf  kleurt alleen de haartjes maar henna neemt zowel de haartjes als de huid mee.              
           Henna zorgt voor een extra strak resultaat, waardoor uw wenkbrauwen optisch voller lijken."
            ></treatment>
            <treatment
              title="Brow Lift"
              price="€30"
              time="30 min."
              text="Tijdens deze behandeling worden de wenkbrauw haartjes in een andere positie gezet waardoor er optisch vollere wenkbrauwen gecreëerd worden en gaatjes in de wenkbrauwen worden gecamoufleerd. Het resultaat van deze behandeling zal mooie gelifte wenkbrauwen geven."
            ></treatment>
            <treatment
              title="Brow Lift & Basic Brow"
              price="€42,50"
              time="45 min."
              text="Tijdens deze behandeling worden de wenkbrauw haartjes in een andere positie gezet waardoor er optisch vollere wenkbrauwen gecreëerd worden en gaatjes in de wenkbrauwen worden gecamoufleerd. Ook zullen de haartjes worden geverfd zodat de wenkbrauwen nog meer worden geaccentueerd."
            ></treatment>
            <treatment
              title="Brow Lift & Classic Brow"
              price="€55"
              time="60 min."
              text="Tijdens deze behandeling worden de wenkbrauw haartjes in een andere positie gezet waardoor er optisch vollere wenkbrauwen gecreëerd worden en gaatjes in de wenkbrauwen worden gecamoufleerd. Ook zullen de haartjes worden geverfd, geëpileerd en/of gewaxt zodat de wenkbrauwen nog meer worden geaccentueerd.
Het resultaat van deze behandeling zal gelifte wenkbrauwen geven in een mooie en strakke shape."
            ></treatment>
            <treatment
              title="Lash Tint"
              price="€14,50"
              time="15 min."
              text="Tijdens deze behandeling worden de natuurlijke wimpers geverfd. Dit zorgt voor een intensere blik zonder dat u make-up hoeft te gebruiken"
            ></treatment>
            <treatment
              title="Lash Lift"
              price="€37,50"
              time="45 min."
              text="Lash lifting is een behandeling die de eigen wimpers lift en krult. Het is voor mensen die geen wimperextensions kunnen of willen dragen. Het blijft ongeveer 4 tot 6 weken zitten, u zult geen mascara of wimperkrultang meer nodig hebben. Lash lifting is onschadelijk voor de eigen wimpers!"
            ></treatment>
            <treatment
              title="Lash Lift & Tint"
              price="€50"
              time="60 min."
              text="Lash lifting is een behandeling die de eigen wimpers lift en krult. Ook wordt er tijdens deze behandeling de wimpers geverfd waardoor ze nog meer op zullen vallen."
            ></treatment>
          </div>
        </div>
      </div>
      <div>
        <div
          :key="'wax'"
          class="treatment__section"
          v-show="selectedSection === 'wax'"
        >
          <h2 class="treatment__section-heading">Wax</h2>
          <p class="treatment__section-intro">
            Ik ben gespecialiseerd in ontharing van gezicht en lichaam door
            middel van waxen met Italwax!
          </p>
          <div class="treatment__section-items">
            <div class="treatment__section-item">
              <p>Bovenlip of kin wax</p>
              <p>€10</p>
            </div>
            <div class="treatment__section-item">
              <p>Bovenlip en kin wax</p>
              <p>€18,50</p>
            </div>
            <div class="treatment__section-item">
              <p>Gezicht wax</p>
              <p>€25</p>
            </div>
            <div class="treatment__section-item">
              <p>Oksel wax</p>
              <p>€20</p>
            </div>
            <div class="treatment__section-item">
              <p>Onderarmen wax</p>
              <p>€22,50</p>
            </div>
            <div class="treatment__section-item">
              <p>Armen wax</p>
              <p>€30</p>
            </div>
            <div class="treatment__section-item">
              <p>Rug wax</p>
              <p>€35</p>
            </div>
            <div class="treatment__section-item">
              <p>Bikinilijn wax</p>
              <p>€20</p>
            </div>
            <div class="treatment__section-item">
              <p>Onder of boven-benen wax</p>
              <p>€25</p>
            </div>
            <div class="treatment__section-item">
              <p>Brazilian wax</p>
              <p>€32,50</p>
            </div>
            <div class="treatment__section-item">
              <p>Full Brazilian wax</p>
              <p>€37,50</p>
            </div>
            <div class="treatment__section-item">
              <p>Benen wax</p>
              <p>€40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Treatment from '~/components/treatment.vue';
  export default {
    mounted() {
      console.log(this.$route);
    },
    components: {
      Treatment,
    },
    data() {
      return {
        selectedSection: this.$route.query.section || 'beauty',
      };
    },
    methods: {
      contentLoaded() {
        this.loading = false;
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/variables.scss';

  .treatment {
    padding: 8px;
    min-height: 600px;
    @media (min-width: 600px) {
      padding-top: 114px;
      display: flex;
    }
    &__headings {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;

      @media (min-width: 600px) {
        padding-left: 40px;
        flex-direction: column;
        width: 250px;
        min-width: 250px;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }

    &__heading {
      cursor: pointer;
      font-size: 28px;
      text-transform: uppercase;
      text-align: center;
      color: $beige;

      @media (min-width: 600px) {
        font-size: 38px;
        text-align: left;
        margin-bottom: 50px;
      }
    }

    &__treatments {
      @media (min-width: 600px) {
        display: flex;
        flex-wrap: wrap;
      }
    }

    &__treatment {
      @media (min-width: 600px) {
        flex: 0 1 33%;
      }
    }

    &__content {
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
    }

    &__section {
      @media (min-width: 600px) {
        width: 100%;
        margin: 0;
        padding-top: 20px;
      }

      &.fade-enter-active,
      &.fade-leave-active {
        transition: opacity 0.5s;
      }
      &.fade-enter,
      &.fade-leave-to {
        opacity: 1;
        display: block;
      }
    }

    &__section-intro {
      color: $brown;
    }

    &__section-heading {
      font-size: 24px;
      color: $brown;
      text-transform: uppercase;
    }

    &__section-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      padding: 8px;
      @media (min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }

    &__section-item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 8px;
      @media (min-width: 600px) {
        flex: 0 1 30%;
      }

      p {
        color: $brown;
      }
    }
  }

  h2.active-heading {
    color: darken($brown, 10%);
  }
</style>
