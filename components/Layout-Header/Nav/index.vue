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
          <button @click.prevent="openSection()">Spaces & Instalation</button>
          <button @click.prevent="openSection()">Art-direction</button>
          <button @click.prevent="openSection()">NFT & Metaverse</button>
          <button @click.prevent="openSection()">Video & CGI</button>
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
