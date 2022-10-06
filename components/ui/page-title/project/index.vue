<template>
  <div class="">
    <ui-page-title-default :class="$style.header" :options="$props.options"></ui-page-title-default>
    <div :class="$style.authorInfo">
      <div :class="$style.author">
        <p>
          by JOANNA OVERTON
        </p>
        <p>
          STUDIO LEAD
        </p>
      </div>
      <div :class="$style.date">
        <p>NFT & Metavers</p>
        <p>14.07.2022</p>
      </div>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"></style>