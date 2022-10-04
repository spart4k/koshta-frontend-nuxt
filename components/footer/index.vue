<template>
  <div :class="$style.footer">
    <div class="">
      <div ref="center" :class="$style.center">
        We collaborate with ambitious brands and people. Are you with us?
      </div>
      <div class="">
        <div :class="$style.contacts">
          <p :class="$style.subtitle">Headquarters</p>
          <div class="">
            <p :class="$style.text">Obraztsova st. 7</p>
            <p :class="$style.text">Moscow</p>
            <p :class="$style.text">Russian Federation</p>
          </div>
          <div class="">
            <button class="link" :class="$style.text">
              <a href="">8 800 773 3445</a>
            </button>
            <br>
            <button class="link" :class="$style.text">
              <a href="">HELLO@KOSHTA.STUDIO</a>
            </button>
            <p></p>
          </div>
        </div>
        <div :class="$style.feedback">
          <p :class="$style.subtitle">NEW BUSINESS</p>
          <button class="link" :class="$style.text">
            <a href="">NEWBIZAMS@KOSHTA.STUDIO</a>
          </button>
        </div>
        <div :class="$style.join">
          <p :class="$style.subtitle">JOIN US</p>
          <button class="link" :class="$style.text">
            <a href="">CAREERS@KOSHTA.STUDIOS</a>
          </button>
        </div>
      </div>
      <div :class="$style.bottom">
        <p>KOSHTA ©2022</p>
        <p>PROVIDED BY OUR <span>DREAMS</span></p>
        <p>PRIVACY POLICY </p>
      </div>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"></style>