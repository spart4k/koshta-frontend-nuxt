<template>
  <nav :class="$style.nav" :style="{
    'mix-blend-mode': isShowWrap && layoutShowWrap? 'unset' : 'difference'
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
            <nuxt-link v-for="(item, index) in sections" :to="`/sections/${item.id}`" @click.native="openSection(item.id)">{{ item.attributes.name }}</nuxt-link>
          </div>
        </transition>
      </div>
      <div :class="$style.button">
        <nuxt-link to="/about" @click.native="openContacts()">
          <span>
            About
          </span>
        </nuxt-link>
      </div>
    </div>
    <div :class="$style.mobile">
      <div :class="$style.trigger">
        <IconsNavOpen v-if="!layoutShowWrap" @click="openNav" class="icon"></IconsNavOpen>
        <IconsClose v-else @click="closeNavWrap" class="icon"></IconsClose>
      </div>
      <div v-if="isShowWrap && layoutShowWrap" :class="$style.wrap">
        <div :class="$style.mobileWrap">
          <div :class="$style.projects">
            <p :class="$style.subtitle">Projects</p>
            <div :class="$style.list">
              <nuxt-link v-for="(item, index) in sections" :to="`/sections/${item.id}`" @click.native="openSection(item.id)">{{ item.attributes.name }}</nuxt-link>
            </div>
          </div>
          <nuxt-link to="/about" @click.native="openContacts()" :class="[$style.subtitle, $style.contacts]">
            About
          </nuxt-link>
          <p 
          :class="$style.provide"
          >PROVIDED BY OUR <span>DREAMS</span> ©2022</p>
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script src="./setup.js"></script>
<style lang="scss" module scoped src="./style.scss"></style>
