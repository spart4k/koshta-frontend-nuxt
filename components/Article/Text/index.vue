<template>
  <ui-container class="noPaddingTop">
    <div v-if="richText" :class="$style.infoText">
      <p v-for="(block, index) in richText">
        {{ block.data.text }}
      </p>
    </div>
  </ui-container>
</template> 
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>