<template>
  <div class="wrapper__home-view">
    <poster-main>
      <div class="home-view-search">
        <va-input
          class="mb-4 custom-input mt-4"
          v-model="queryParams.name"
          placeholder="Buscar personaje..."
          outline
        />
      </div>
    </poster-main>
    <va-tabs
      v-model="queryParams.gender"
      stateful
      grow
      class="tabs-categories mb-5"
      color="success"
    >
      <template #tabs>
        <va-tab v-for="category in categories" :name="category" :key="category">
          {{ category }}
        </va-tab>
      </template>
    </va-tabs>

    <div class="wrapper__character-items">
      <div class="layout gutter--lg">
        <p class="star-favorites mb-4">
          Mostrar favoritos
          <favorite-star />
        </p>
        <div
          class="has-request-error d-flex align--center justify--center"
          v-if="hasRequestError"
        >
          <h1>Uh-oh!</h1>
          <h2>¡Pareces perdido en tu viaje!</h2>
          <va-button @click="onResetQueryParams" class="mt-5">
            Eliminar filtros
          </va-button>
        </div>

        <div class="items" v-else>
          <div class="layout gutter--md">
            <div class="row">
              <div
                class="flex xs12 sm12 md6 lg4 mb-2"
                v-for="(character, index) in characters"
                :key="index"
              >
                <character-item :character="character"></character-item>
              </div>
            </div>
          </div>
          <div class="paginator my-5 d-flex align--center justify--center">
            <va-pagination
              v-model="queryParams.page"
              :pages="infoPages"
              :visible-pages="4"
            />
          </div>
        </div>
      </div>
    </div>
    <footer-main />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import PosterMain from "@/components/PosterMain.vue";
import CharacterItem from "@/components/characters/CharacterItem.vue";
import FooterMain from "@/components/FooterMain.vue";
import FavoriteStar from "@/components/FavoriteStar.vue";
import api from "@/services/api";

const localStorageDefaultQueryParams = JSON.parse(
  localStorage.getItem("getCharacterQueryParams")
);

const defaultQueryParams = {
  name: null,
  gender: null,
  page: 1,
};

const hasRequestError = ref(false);
const categories = reactive(["All", "Unknown", "Female", "Male", "Genderless"]);
const resultData = ref([]);
const characters = computed(() => resultData.value?.results || []);
const infoPages = computed(() => resultData.value?.info?.pages);

const queryParams = reactive(localStorageDefaultQueryParams || defaultQueryParams);

const formatQueryParams = computed(() => {
  let query = queryParams;
  if (query && query.gender === "All") {
    query.gender = null;
  }
  return query;
});

const onResetQueryParams = () => {
  queryParams.name = null;
  queryParams.gender = null;
  queryParams.page = 1;
};

const getCharacters = async () => {
  try {
    hasRequestError.value = false;
    const response = await api.getCharacters({
      params: formatQueryParams.value,
    });
    const { data } = response;
    resultData.value = data;
  } catch (error) {
    hasRequestError.value = true;
  }
};

watch(
  queryParams,
  () => {
    localStorage.setItem(
      "getCharacterQueryParams",
      JSON.stringify(queryParams)
    );
    getCharacters();
  },
  { deep: true }
);

onMounted(() => {
  getCharacters();
});
</script>

<style lang="scss" scope>
.wrapper__home-view {
  height: 100vh;
  max-height: 450px;

  .star-favorites {
    display: flex;
    gap: 1em;
    align-items: center;
  }

  .has-request-error {
    margin-top: 3rem;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 32px;
      font-weight: 700;
    }

    h2 {
      font-size: 20px;
      font-weight: 500;
    }
  }
}
</style>
