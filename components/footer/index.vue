<template>
  <div :class="$style.footer">
    <div :class="$style.footerContent">
      <div ref="center" 
      :class="$style.title"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      >
        We collaborate with ambitious brands and people. Are you with us?
      </div>
      <div 
      :class="$style.center"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      >
        <div :class="$style.contacts">
          <!-- <p :class="$style.subtitle">Headquarters</p> -->
          <div class="">
            <p :class="$style.text">{{ footerInfo.city }}</p>
            <p :class="$style.text">{{ footerInfo.address }}</p>
            <!-- <p :class="$style.text">{{ footerInfo.country }}</p> -->
          </div>
          <div class="">
            <!-- <button class="link" :class="$style.text">
              <a href="tel:8 800 773 3445">{{ footerInfo.phone }}</a>
            </button> -->
            <br>
            <button class="link" :class="$style.text">
              <a href="mailto:HELLO@KOSHTA.STUDIO">{{ footerInfo.main_email }}</a>
            </button>
            <p></p>
          </div>
        </div>
        <div :class="$style.feedback">
          <!-- <p :class="$style.subtitle">NEW BUSINESS</p> -->
          <button class="link" :class="$style.text">
            <a href="mailto:NEWBIZAMS@KOSHTA.STUDIO">{{ footerInfo.new_business_email }}</a>
          </button>
        </div>
        <div :class="$style.join">
          <!-- <p :class="$style.subtitle">JOIN US</p> -->
          <button class="link" :class="$style.text">
            <a href="mailto:CAREERS@KOSHTA.STUDIOS">{{ footerInfo.join_us_email }}</a>
          </button>
        </div>
      </div>
      <div :class="$style.bottom">
        <!-- <p 
        :class="$style.name"
        :style="{
          'pointer-events': noClickedMatter ? 'none' : 'unset'
        }"
        >KOSHTA ©2022</p> -->
        <!-- <p 
        :class="$style.provide"
        :style="{
          'pointer-events': noClickedMatter ? 'none' : 'unset'
        }"
        >PROVIDED BY OUR <span>DREAMS</span></p> -->
        <p 
        :class="$style.policy"
        :style="{
          'pointer-events': noClickedMatter ? 'none' : 'unset'
        }"
        >PRIVACY POLICY </p>
      </div>
      <matter-footer :class="$style.matter"></matter-footer>
    </div>
  </div>
</template> 
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>