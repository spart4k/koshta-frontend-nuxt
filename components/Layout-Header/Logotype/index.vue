<template>
  <nuxt-link to="/">
    <Logotype
    :class="$style.logotype"
    />
  </nuxt-link>
</template>

<script>
import Logotype from '../../Logotype/index.vue';
export default {
    name: "HeaderLogotype",
    components: { Logotype }
}
</script>
<style lang="scss" module src="./style.scss"></style>
