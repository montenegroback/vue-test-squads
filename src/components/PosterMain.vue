<template>
  <div class="wrapper__poster-main">
    <div class="wrapper__filtering">
      <logo-suazo />
      <logo-app />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import LogoApp from "@/components/logos/App.vue";
import LogoSuazo from "@/components/logos/Suazo.vue";
</script>

<style lang="scss" scoped>
.wrapper__poster-main {
  background-image: url("@/assets/images/portal-morty-smith-rick.svg") !important;
  background-color: #000;

  background-position: center center;
  background-repeat: no-repeat !important;
  background-size: cover;
  height: 100%;

  .wrapper__filtering {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }
}
</style>
