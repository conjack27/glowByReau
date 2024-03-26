<template>
  <div class="main">
    <navigation />
    <div class="content">
      <div>
        <slot>
          <p>This is the default content for the slot.</p>
        </slot>
      </div>
      <a
        href="https://www.treatwell.nl/"
        id="wahanda-online-booking-widget"
        onclick='wahanda.openOnlineBookingWidget("https://widget.treatwell.nl/salon/432540/menu/"); return false;'
        target="_blank"
      >
        <span>Boek nu!</span>
      </a>
    </div>
    <foot />
  </div>
</template>

<script>
  export default {
    mounted() {
      let treatwellScript = document.createElement('script');
      treatwellScript.setAttribute(
        'src',
        'https://widget.treatwell.nl/common/venue-menu/javascript/widget-button.js?v1'
      );
      document.head.appendChild(treatwellScript);
      // Create a link element
      var link = document.createElement('link');
      link.type = 'text/css';
      link.href =
        'https://widget.treatwell.nl/common/venue-menu/css/widget-button.css';
      link.rel = 'stylesheet';
      link.media = 'screen';

      // Append the link element to the head of the document
      document.getElementsByTagName('head')[0].appendChild(link);
    },
  };
</script>

<style>
  #wahanda-online-booking-widget {
    background: #77785f !important;
    position: Fixed;
    bottom: 50px;
    right: 50px;
    z-index: 999999;

    * {
      color: white;
    }
  }
</style>
