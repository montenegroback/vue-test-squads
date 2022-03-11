<template>
  <div class="wrapper__welcome-landing">
    <poster-main>
      <h1>Bienvenido a Rick and Morty</h1>
      <p>
        En esta prueba, evaluaremos su capacidad para construir la aplicación
        mediante el análisis de código y la reproducción del siguiente diseño.
      </p>
      <va-button @click="$router.push('/home')" class="mt-5"> Continuar </va-button>
    </poster-main>
  </div>
</template>

<script setup>
import PosterMain from "@/components/PosterMain.vue";
</script>

<style lang="scss" scoped>
.wrapper__welcome-landing {
  height: 100vh;
  h1 {
    font-size: 36px;
    font-weight: 400;
  }

  p {
    font-size: 18px;
    max-width: 960px;
    text-align: center;
  }

  .el-button {
    margin-top: 3rem;
  }
}
</style>
