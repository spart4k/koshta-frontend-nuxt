<template>
  <div :class="$style.footer">
    <div :class="$style.footerContent">
      <div ref="center" 
      :class="$style.title"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      >
        <p> We collaborate with ambitious brands and people. </p>
        <p>Are you with us?</p> 
      </div>
      <div 
      :class="$style.center"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      >
        <div :class="$style.contacts">
          <!-- <p :class="$style.subtitle">Headquarters</p> -->
          <div :class="$style.office" v-if="footerInfo.Office" v-for="(item, index) in footerInfo.Office">
            <p v-if="item.address"> {{ item.address }} </p>
            <p v-if="item.City"> {{ item.City }} </p>
            <p v-if="item.Country"> {{ item.Country }} </p>
            <!-- <p v-if="item.phone"> {{ item.phone }} </p> -->
            <a href="tel:8 800 773 3445"> 88007733445 </a>
            <a :href="`mailto:${item.Email}`" v-if="item.Email"> {{ item.Email }} </a>
          </div>
          <!-- <div class="">
            <p :class="$style.text">{{ footerInfo.city }}</p>
            <p :class="$style.text">{{ footerInfo.address }}</p>
            <p :class="$style.text">{{ footerInfo.country }}</p>
          </div> -->
          <!-- <div class="">
            <button class="link" :class="$style.text">
              <a href="tel:8 800 773 3445">{{ footerInfo.phone }}</a>
            </button> -->
            <!-- <br>
            <button class="link" :class="$style.text">
              <a href="mailto:HELLO@KOSHTA.STUDIO">{{ footerInfo.main_email }}</a>
            </button>
            <p></p>
          </div> -->
        </div>
        <!-- <div :class="$style.feedback">
          <p :class="$style.subtitle">NEW BUSINESS</p>
          <button class="link" :class="$style.text">
            <a href="mailto:NEWBIZAMS@KOSHTA.STUDIO">{{ footerInfo.new_business_email }}</a>
          </button>
        </div> -->
        <!-- <div :class="$style.join">
          <p :class="$style.subtitle">JOIN US</p>
          <button class="link" :class="$style.text">
            <a href="mailto:CAREERS@KOSHTA.STUDIOS">{{ footerInfo.join_us_email }}</a>
          </button>
        </div> -->
        <div :class="$style.linkeds">
          <a href="https://www.instagram.com/koshta.collective/">Instagram: @koshta.collective</a>
          <a href="#">LinkedIn: Koshta.Collective</a>
        </div>
      </div>
      <div :class="$style.bottom">
        <LayoutFooterProvided
        :class="$style.provided"
        />
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