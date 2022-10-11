<template>
  <transition :name="transition">
    <div v-if="isShow && isShowInterface" :class="$style.cookies">
      <p>
        This site uses third-party website tracking technologies to provide and continually improve your experience.
        <button class="active">
          More
        </button>
      </p>
      <br>
      <br>
      <p>
        <button @click.prevent="close" class="active">
          Accept all
        </button>
      </p>
    </div>
</transition>
</template>
<style lang="scss" module src="./style.scss"></style>
<script src="./setup.js"></script>
