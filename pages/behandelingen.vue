<template>
  <div class="treatment">
    <div class="treatment__headings">
      <h2 class="treatment__heading" @click="selectedSection = 'beauty'">
        Beauty
      </h2>
      <h2 class="treatment__heading" @click="selectedSection = 'brows'">
        Brows & Lashes
      </h2>
      <h2 class="treatment__heading" @click="selectedSection = 'wax'">Wax</h2>
    </div>
    <div class="treatment__content">
      <transition name="fade">
        <div
          :key="selectedSection"
          class="treatment__section"
          v-show="selectedSection === 'beauty'"
        >
          <h2>Facials</h2>
          <p class="treatment__section-intro">
            Bij alle gezichtsbehandelingen worden de producten aangepast op
            basis van jouw huidtype en wens!
          </p>
          <div class="treatment__treatments">
            <treatment
              title="Mini glow"
              price="€45"
              time="45 mins"
              text="•	Reiniging&nbsp;
•	Peeling&nbsp;
•	Epileren/ waxen wenkbrauwen&nbsp;
•	Masker&nbsp;
•	Serum&nbsp;
•	Eindverzorging
"
            ></treatment>
            <treatment
              title="Basic"
              price="€59"
              time="60 mins"
              text="•	Reiniging
•	Peeling
•	Reinigende massage
•	Onzuiverheden verwijderen
•	Serum
•	Masker
•	Eindverzorging
"
            ></treatment>
            <treatment
              title="Compleet"
              price="€75"
              time="90 mins"
              text="•	Reiniging 
•	Peeling
•	Epileren/ waxen wenkbrauwen
•	Reinigende massage
•	Onzuiverheden verwijderen
•	Gezicht-, hals- & nekmassage 
•	Serum
•	Masker
•	Eindverzorging
"
            ></treatment>
            <treatment
              title="Men treatment"
              price="€65"
              time="75 mins"
              text="•	Reiniging
•	Peeling
•	Reinigende massage 
•	Onzuiverheden verwijderen 
•	Gezicht- hals- & nekmassage 
•	Serum
•	Masker
•	Eindverzorging
"
            ></treatment>
            <treatment
              title="Detox"
              price="€65"
              time="75 mins"
              text="Een ontgiftende en zuiverende behandeling met behulp van zilverpoeder. Geschikt voor de onreine/acné huid.
•	Reiniging
•	Peeling
•	Reinigende massage
•	Onzuiverheden verwijderen
•	Serum
•	Detox masker
•	Ph balancer 
•	Eindverzorging
"
            ></treatment>
            <treatment
              title="Acid Peel Treatment"
              price="€85"
              time="75 mins"
              text="De hoornlaag wordt met deze behandeling verdund.
Dode huidcellen verdwijnen en de huid krijgt een mooiere kleur. Er ontstaat een betere doorbloeding en opname van werkzame stoffen.
De huid wordt gelift en strakker. Pigmentvlekken worden minder zichtbaar. De huid ziet er egaler en jonger uit met verfijnde poriën.
•	Reiniging
•	Peeling
•	Reinigende massage 
•	Onzuiverheden verwijderen 
•	Skin prep 
•	Acid Peel (verschillende beschikbaar)
•	Neutralisator
•	Eindverzorging
•	Solar skin shield SPF 30
"
            ></treatment>
            <treatment
              title="Hydrolage treatment"
              price="€80"
              time="75 mins"
              text="Ideaal voor de vochtarme huid, voor intensieve hydratatie. De cellen krijgen een energiestoot en het gebruik van de hydrolage verbetert de hydratatie van de huid en heeft een mooi liftend effect. Vochtrimpels verdwijnen en de huid wordt rozig, zacht en stralend.
•	reiniging
•	peeling
•	doorbloeding stimulerend masker
•	reinigende massage
•	onzuiverheden verwijderen
•	werkstoffenconcentraat
•	Hydrolage (collageenvlies- & gipsmasker)
•	serum
•	Eindverzorging

"
            ></treatment>
            <treatment
              title="Microdermabrasie"
              price="€105"
              time="70 mins"
              text="Microdermabrasie is een zéér effectieve behandelmethode voor huiden met specifieke problemen. In feite is microdermabrasie een mechanische superpeeling waarmee de bovenste huidlaag op een pijnloze manier wordt verwijderd en het lichaam wordt gestimuleerd tot de aanmaak van nieuwe en jonge huidcellen.
(U kunt kiezen uit: een losse behandeling of een kuur van drie of zes behandelingen.)

•	reiniging
•	peeling
•	doorbloeding stimulererend masker
•	reinigende massage
•	onzuiverheden verwijderen
•	skin prep
•	microdermabrasie
•	serum
•	masker
•	eindverzorging
"
            ></treatment>
            <treatment
              title="Celgeneratie treatment"
              price="€125"
              time="90 mins"
              text="Microdermabrasie behandeling inclusief hydrolage voor vochtherstel en de stimulatie van de celregeneratie.
•	reiniging
•	peeling
•	doorbloeding stimulerend masker
•	reinigende massage 
•	onzuiverheden verwijderen
•	skin prep
•	microdermabrasie
•	werkstoffenconcentraat
•	Hydrolage (collageenvlies- + gipsmasker)
•	serum
•	Eindverzorging

"
            ></treatment>
            <treatment
              title="Oxygen treatment"
              price="€110"
              time="90 mins"
              text="Intensieve behandeling om de aanmaak van zuurstof in de huid te stimuleren. De               ideale behandeling als uw huid een oppepper nodig heeft. De huid wordt zacht, roze en krijgt een jeugdige uitstraling.
•	reiniging
•	peeling
•	reinigende massage
•	onzuiverheden verwijderen
•	step I oxygen ( de huid wakker maken)
•	step II (werkstoffen inmasseren)
•	step III (diverse zuren zetten de huid aan het werk)
•	hydrolage masker
•	serum
•	eindverzorging
"
            ></treatment>
            <treatment
              title="Wellness Lift treatment"
              price="€140"
              time="100 mins"
              text="De oxygen treatment in combinatie met microdermabrasie en de hydrolage.

•	reiniging
•	peeling
•	reinigende massage 
•	onzuiverheden verwijderen
•	skin prep
•	microdermabrasie
•	step II (werkstoffen inmasseren)
•	step III (diverse zuren)
•	hydrolage masker
•	serum
•	eindverzorging
"
            ></treatment>
            <treatment
              title="Microdermabrasie en Acid peel treatment"
              price="€135"
              time="90 mins"
              text="In combinatie met microdermabrasie is het een uitstekende behandeling om de huid te verfrissen en te revitaliseren. Ideaal voor pigmentstoornissen en acné-gepigmenteerde littekens.

•	reiniging
•	peeling
•	doorbloeding stimulerend masker
•	reinigende massage
•	onzuiverheden verwijderen
•	skin prep
•	microdermabrasie
•	acid peel ( meerdere beschikbaar) 
•	neutralisator
•	eindverzorging
•	Solar skin shield SPF 30
"
            ></treatment>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div
          :key="selectedSection"
          class="treatment__section"
          v-show="selectedSection === 'brows'"
        >
          <h2>Brows</h2>
          <p class="treatment__section-intro">
            Bij alle gezichtsbehandelingen worden de producten aangepast op
            basis van jouw huidtype en wens!
          </p>
          <div class="treatment__treatments">
            <treatment
              title="Brow shaping"
              price="€15"
              time="10 mins"
              text="Waxen is een snelle ontharingsmethode om uw wenkbrauwen in de perfecte vorm te krijgen. U geniet van een langdurig resultaat want de haartjes worden met wortel en al verwijderd, waardoor ze ook nog eens dunner terugkomen. U kunt ook kiezen voor epileren i.p.v. waxen!"
            ></treatment>
            <treatment
              title="Basic Brow"
              price="€13,50"
              time="10 mins"
              text="Tijdens deze Basic Brow behandeling worden de wenkbrauw haartjes alleen geverfd. Resultaat zal een mooie natuurlijke look zijn."
            ></treatment>
            <treatment
              title="Classic Brow"
              price="€27"
              time="20 mins"
              text="Tijdens de  Classic Brow behandeling  worden de wenkbrauw haartjes geverfd, geëpilieerd of gewaxt  en geknipt."
            ></treatment>
            <treatment
              title="Henna Brow"
              price="€39,50"
              time="30 mins"
              text="Tijdens de henna Brow behandeling worden uw wenkbrauw haartjes geverfd met henna,       
           geharst of geëpileerd en geknipt.
           Henna is fijn als u liever wilt verven zonder ammoniak of waterstofperoxide. Standaard      
            wenkbrauwverf  kleurt alleen de haartjes maar henna neemt zowel de haartjes als de huid mee.              
           Henna zorgt voor een extra strak resultaat, waardoor je wenkbrauwen optisch voller lijken."
            ></treatment>
            <treatment
              title="Brow Lift"
              price="€27,50"
              time="30 mins"
              text="Tijdens deze behandeling worden de wenkbrauw haartjes in een andere positie gezet waardoor er optisch vollere wenkbrauwen gecreëerd worden en gaatjes in de wenkbrauwen worden gecamoufleerd. Het resultaat van deze behandeling zal mooie gelifte wenkbrauwen geven."
            ></treatment>
            <treatment
              title="Brow Lift & Basic Brow"
              price="€42,50"
              time="45 mins"
              :noExtraContent="true"
              text=""
            ></treatment>
            <treatment
              title="Brow Lift & Classic Brow"
              price="€55"
              time="60 mins"
              :noExtraContent="true"
              text=""
            ></treatment>
            <treatment
              title="Lash Tint"
              price="€14,50"
              time="15 mins"
              text="Tijdens deze behandeling worden de natuurlijke wimpers geverfd. Dit zorgt voor een intensere blik zonder dat u make-up hoeft te gebruiken"
            ></treatment>
            <treatment
              title="Lash Lift"
              price="€37,50"
              time="45 mins"
              text="Lash lifting is een behandeling die de eigen wimpers lift en krult. Het is voor mensen die geen wimperextensions kunnen of willen dragen. Het blijft ongeveer 4 tot 6 weken zitten, u zult geen mascara of wimperkrultang meer nodig hebben. Lash lifting is onschadelijk voor de eigen wimpers!"
            ></treatment>
            <treatment
              title="Lash Lift & Tint"
              price="€50"
              time="60 mins"
              :noExtraContent="true"
              text=""
            ></treatment>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div
          :key="selectedSection"
          class="treatment__section"
          v-show="selectedSection === 'wax'"
        >
          <h2>Wax</h2>
          <table>
            <tr>
              <th>Behandeling</th>
              <th>Prijs</th>
            </tr>
            <tr>
              <td>Bovenlip of kin wax</td>
              <td>€10</td>
            </tr>
            <tr>
              <td>Bovenlip en kin wax</td>
              <td>€18,50</td>
            </tr>
            <tr>
              <td>Gezicht wax</td>
              <td>€25</td>
            </tr>
            <tr>
              <td>Oksel wax</td>
              <td>€20</td>
            </tr>
            <tr>
              <td>Onderarmen wax</td>
              <td>€22,50</td>
            </tr>
            <tr>
              <td>Armen wax</td>
              <td>€30</td>
            </tr>
            <tr>
              <td>Rug wax</td>
              <td>€35</td>
            </tr>
            <tr>
              <td>Bikinilijn wax</td>
              <td>€20</td>
            </tr>
            <tr>
              <td>Onder of boven-benen wax</td>
              <td>€25</td>
            </tr>
            <tr>
              <td>Brazilian wax</td>
              <td>€32,50</td>
            </tr>
            <tr>
              <td>Full Brazilian wax</td>
              <td>€37 ,50</td>
            </tr>
            <tr>
              <td>Benen wax</td>
              <td>€40</td>
            </tr>
          </table>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Treatment from '~/components/treatment.vue';
  export default {
    components: {
      Treatment,
    },
    data() {
      return {
        selectedSection: 'beauty',
      };
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/variables.scss';
  .treatment {
    padding: 8px;
    min-height: 600px;
    @media (min-width: 600px) {
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
        min-width: 250px;
        margin-top: 100px;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }

    &__heading {
      cursor: pointer;
      font-size: 24px;
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
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
    @media (min-width: 600px) {
      margin-left: 100px;
    }
  }

  th {
    font-weight: 400;
    font-size: 18px;
    color: $brown;
  }

  th,
  td {
    border: 1px solid #ddd;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
</style>
