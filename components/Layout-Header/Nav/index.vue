<template>
  <nav :class="$style.nav" :style="{
    'mix-blend-mode': isShowWrap ? 'unset' : 'difference'
  }">
    <div :class="$style.desktop">
      <div :class="[$style.button, $style.projects, $style.desktop, isOpenProjectsDrop ? $style.opened : '']">
        <button @click.prevent="openProjectsDrop">
          <span>
            projects
          </span>
          <IconsDropArrow/>
        </button>
        <transition name="expand">
          <div v-if="isOpenProjectsDrop" :class="[$style.projectsDrop]">
            <button v-for="(item, index) in sections" @click.prevent="openSection(item.id)">{{ item.attributes.name }}</button>
          </div>
        </transition>
      </div>
      <div :class="$style.button">
        <button @click.prevent="openContacts()">
          <span>
            Contacts
          </span>
        </button>
      </div>
    </div>
    <div :class="$style.mobile">
      <div :class="$style.trigger">
        <IconsNavOpen v-if="!isShowWrap" @click="openNav" class="icon"></IconsNavOpen>
        <IconsClose v-else @click="closeNav" class="icon"></IconsClose>
      </div>
      <div v-if="isShowWrap" :class="$style.wrap">
        <div :class="$style.projects">
          <p :class="$style.subtitle">Projects</p>
          <div :class="$style.list">
            <button v-for="(item, index) in sections" @click.prevent="openSection(item.id)">{{ item.attributes.name }}</button>
          </div>
        </div>
        <button @click.prevent="openContacts()" :class="$style.subtitle">
          Contacts
        </button>
      </div>
    </div>
  </nav>
</template>

<script src="./setup.js"></script>
<style lang="scss" module scoped src="./style.scss"></style>
