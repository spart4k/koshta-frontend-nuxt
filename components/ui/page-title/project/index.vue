<template>
  <div class="">
    <ui-page-title-default :class="$style.header" :options="$props.options"></ui-page-title-default>
    <div :class="$style.authorInfo">
      <!-- <div :class="$style.author">
        <p>
          by {{ $props.options.author }}
        </p>
        <p>
          {{ $props.options.job }}
        </p>
      </div> -->
      <div :class="$style.date">
        <p>{{ $props.options.section }}</p>
        <!-- <p>{{ $props.options.date }}</p> -->
      </div>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>