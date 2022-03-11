<template>
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
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import api from "@/services/api";
import { arrayRandomN } from "@/assets/utils";
import CharacterItem from "@/components/characters/CharacterItem.vue";

const characterIds = ref(arrayRandomN(3));
const characters = ref([]);

const getCharacters = async () => {
  try {
    const response = await api.getCharactersRandom(characterIds.value);
    const { data } = response;
    characters.value = data;
  } catch (error) {}
};

onMounted(() => getCharacters());
</script>

<style lang="scss" scoped></style>
