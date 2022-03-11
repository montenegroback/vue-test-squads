<template>
  <va-card class="wrapper__character-item" @click="onInfoCharacterInfo">
    <va-image :src="character.image" style="height: 200px" />
    <va-card-content>
      <small
        ><span class="icon-color"></span> {{ character.status }} -
        {{ character.species }}</small
      >
      <p class="name">{{ character.name }}</p>

      <small>Last known location:</small>
      <p class="location">{{ character.location.name }}</p>

      <small>First seen in:</small>
      <p class="seen">{{ character.origin.name }}</p>
    </va-card-content>
  </va-card>
  <wrapper-modal :showModal="showInfoCharacter" @onClose="onCloseInfoCharacter">
    <character-item-info :character="character" />
  </wrapper-modal>
</template>

<script setup>
import { ref } from "vue";
import CharacterItemInfo from "@/components/characters/CharacterItemInfo.vue";
import WrapperModal from "@/components/WrapperModal.vue";

const showInfoCharacter = ref(false);

const onInfoCharacterInfo = () => {
  showInfoCharacter.value = true;
};

const onCloseInfoCharacter = () => {
  showInfoCharacter.value = false;
};

defineProps({
  character: {
    type: Object,
    default: () => null,
  },
});
</script>

<style lang="scss" scope>
@import "@/assets/styles/base.css";

.wrapper__character-item {
  cursor: pointer;

  .va-card__inner {
    display: flex;

    .va-image {
      width: 160px;
      border-bottom-left-radius: var(--va-card-border-radius);
      border-top-left-radius: var(--va-card-border-radius);
    }

    .name {
      font-size: 16px;
    }

    .location,
    .seen {
      font-size: 12px;
    }

    small {
      font-size: 10px;
      color: var(--color-custom-gray-1);
    }

    .icon-color {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: red;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}

.va-modal {
  .va-modal__inner {
    padding: 0 !important;
  }
}
</style>
