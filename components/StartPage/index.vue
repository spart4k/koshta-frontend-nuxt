<template>
  <div :class="$style.start_page">
    <div ref="center" :class="$style.center">
      Koshta is a collective of art-director, media artists, designers, producers and curators. We truly believe in boundless imagination and realize our works beyond the limits of conventional reality.
    </div>
    <matter-main
    v-if="true"
    :centerOptions="options"
    :class="$style.matter"
    />
  </div>
</template>

<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"></style>
