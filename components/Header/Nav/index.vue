<template>
  <nav :class="$style.nav">
    <div :class="[$style.button, $style.projects, isOpenProjectsDrop ? $style.opened : '']">
      <button @click.prevent="openProjectsDrop">
        <span>
          projects
        </span>
        <IconsDropArrow/>
      </button>
      <transition name="expand">
        <div v-if="isOpenProjectsDrop" :class="[$style.projectsDrop]">
          <p>Spaces & Instalation</p>
          <p>Art-direction</p>
          <p>NFT & Metaverse</p>
          <p>Video & CGI</p>
        </div>
      </transition>
      
    </div>
    <div :class="$style.button">
      <button>
        <span>
          Contacts
        </span>
      </button>
    </div>
  </nav>
</template>

<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"></style>
