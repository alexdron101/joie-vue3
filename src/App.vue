<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'




</script>




<template>
  <header>

    <span class="day-night">
      <img src="/src/assets/images/day.png">
      <b></b>
      <img src="/src/assets/images/night.png">
    </span>

    <div class="menu">
      <a href="/" class="logo"><img src="/src/assets/images/logo-small.png"></a>

      <li class="call-top"><a href="#." class="call-top"><img src="/src/assets/images/call.png"></a>
        <ul>
          <li><a href="tel:+380984543099"><img src="/src/assets/images/call.png"> +38-098-4543-099</a></li>
          <li><a href="tel:+380505739439"><img src="/src/assets/images/call.png"> +38-050-5739-439</a></li>
          <li><a href="viber://chat?number=+380984543099"><img src="/src/assets/images/viber.png"> Viber Call</a></li>
          <li><a target="blank" href="https://t.me/webjoie" rel="noopener noreferrer"><img
                src="/src/assets/images/telegram.png"> Telegram Call</a></li>
          <li><a target="blank" href="https://wa.me/380984543099" rel="noopener noreferrer"><img
                src="/src/assets/images/whatsapp.png"> WhatsApp Call</a></li>
          <li><a><img src="/src/assets/images/mail.png"> info@joie.com.ua</a></li>
        </ul>
      </li>
      <a class="a23 magic-hover magic-hover__square forma-up"><span>Залишити заявку</span></a>
      <a class="b-menu magic-hover magic-hover__square"><s>Меню</s>
        <b></b>
        <b></b>
        <b></b>
      </a>
    </div>

    <div class="widget widget_polylang">
      <ul>
        <li class="current-lang">
          <RouterLink to="/ua">UA</RouterLink>
        </li>
        <li class="">
          <RouterLink to="/ru">RU</RouterLink>
        </li>
        <li class="">
          <RouterLink to="/en">EN</RouterLink>
        </li>
      </ul>

    </div>

  </header>


  <RouterView />


</template>


