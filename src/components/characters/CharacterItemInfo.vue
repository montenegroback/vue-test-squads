<template>
  <div class="wrapper__charater-info">
    <div class="character-header">
      <div class="header-bg"></div>
      <div class="header-profile">
        <div class="image-profile">
          <va-image :src="getCharacter.image" />
          <div class="star">
            <favorite-star />
          </div>
        </div>
        <div class="info-profile">
          <p class="status">{{ getCharacter.status }}</p>
          <p class="name">{{ getCharacter.name }}</p>
          <p class="species">{{ getCharacter.species }}</p>
        </div>
      </div>
    </div>

    <div class="px-5 py-5">
      <div class="character-info">
        <p class="label-section">Información</p>
        <div class="layout gutter--md">
          <div class="row">
            <div class="flex xs12 md4">
              <card-basic-item title="Gender:" iconInfo>
                <p class="item-info-title">{{ getCharacter.gender }}</p>
              </card-basic-item>
            </div>
            <div class="flex xs12 md4">
              <card-basic-item title="Origin:" iconInfo>
                <p class="item-info-title">{{ getCharacter.origin.name }}</p>
              </card-basic-item>
            </div>
            <div class="flex xs12 md4">
              <card-basic-item title="Type:" iconInfo>
                <p class="item-info-title">{{ getCharacter.species }}</p>
              </card-basic-item>
            </div>
          </div>
        </div>
      </div>

      <div class="my-5">
        <va-divider />
      </div>

      <div class="episode-info">
        <p class="label-section">Episodios</p>
        <div class="layout gutter--md">
          <div class="row">
            <div
              class="flex xs12 sm12 md3"
              v-for="(episode, index) in getEpisodes"
              :key="index"
            >
              <card-basic-item :title="episode.name">
                <p class="item-info-title">{{ episode.episode }}</p>
                <p class="item-info-subtitle">{{ episode.air_date }}</p>
              </card-basic-item>
            </div>
          </div>
        </div>
      </div>

      <div class="my-5">
        <va-divider />
      </div>

      <div class="character-destacated-info">
        <p class="label-section">Personajes interesantes</p>
        <character-random />
      </div>

      <div class="button-share-character my-5">
        <va-button> Compartir personaje </va-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import CardBasicItem from "@/components/CardBasicItem.vue";
import FavoriteStar from "@/components/FavoriteStar.vue";
import CharacterRandom from "@/components/characters/CharacterRandom.vue";
import axios from "axios";

const props = defineProps({
  character: {
    type: Object,
    default: () => null,
  },
});

const getCharacter = ref(props.character);
const characterEpisodes = computed(
  () => getCharacter.value?.episode.filter((e, i) => i < 8) || []
);
const getEpisodes = ref([]);

const getCharacterEpisodes = async () => {
  try {
    const data = await axios.all(
      characterEpisodes.value.map((e) => axios.get(e))
    );
    getEpisodes.value = data.map(({ data }) => data);
  } catch (error) {}
};

onMounted(() => {
  getCharacterEpisodes();
});
</script>

<style lang="scss">
.wrapper__charater-info {
  .character-header {
    .header-bg {
      background-image: url("@/assets/images/characters-bg.png") !important;
      background-position: top center;
      background-repeat: no-repeat !important;
      background-size: cover;
      height: 200px;
    }

    .header-profile {
      background-color: var(--vt-c-white-mute);
      padding-bottom: 2rem;
      .image-profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        .va-image {
          width: 155px;
          height: 155px;
          border-radius: 50%;
          margin-top: -75px;

          .va-image__img {
            background-color: var(--vt-c-white);
            padding: 5px;

            img {
              border-radius: 50% !important;
            }
          }
        }
        .star {
          margin-top: -25px;
          height: 50px;
          width: 50px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-bottom: 1rem;
        }
      }
      .info-profile {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        .name {
          font-size: 20px;
          font-weight: 600;
        }
        .status,
        .species {
          font-size: 12px;
          text-transform: uppercase;
        }
      }
    }
  }

  .label-section {
    font-size: 20px !important;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .item-info-title {
    font-size: 17px;
    font-weight: 600;
    text-transform: capitalize;
  }
  .item-info-subtitle {
    color:  var(--color-custom-gray-1);
    font-size: 12px;
    text-transform: uppercase;
  }

  .button-share-character {
    float: right;
  }
}
</style>
