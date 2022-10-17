<template>
  <div :class="$style.header">
    <div v-if="$props.options.title" :class="$style.title">
      {{ $props.options.title }}
    </div>
    <div v-if="$props.options.subtitle" :class="$style.subtitle">
      {{ $props.options.subtitle }}
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>