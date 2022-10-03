<template>
  <header :class="$style.header">
    <LayoutHeaderLogotype/>
    <LayoutHeaderNav/>
  </header>
</template>

<script>
export default {
  name: 'HeaderDefault'
}
</script>
<style lang="scss" module src="./style.scss"></style>
