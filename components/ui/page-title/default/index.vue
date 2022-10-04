<template>
  <div :class="$style.header">
    <div :class="$style.title">
      {{ $props.options.title }}
    </div>
    <div :class="$style.subtitle">
      {{ $props.options.subtitle }}
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"></style>