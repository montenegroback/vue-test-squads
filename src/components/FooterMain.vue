<template>
  <div class="wrapper__footer-main">
    <div class="wrapper__filtering">
      <logo-suazo />
    </div>
  </div>
</template>

<script setup>
import LogoSuazo from '@/components/logos/Suazo.vue';
</script>

<style lang="scss" scoped>
.wrapper__footer-main {
  background-image: url("@/assets/images/portal-morty-smith-rick.svg") !important;
  background-color: #000;

  background-position: top center;
  background-repeat: no-repeat !important;
  background-size: cover;
  height: 140px;

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
