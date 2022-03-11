<template>
  <va-card class="wrapper__card-basic-item">
    <va-card-title
      ><va-icon name="info" v-if="iconInfo" />
      <span class="ml-2">{{ title }}</span></va-card-title
    >
    <va-card-content>
      <slot></slot>
    </va-card-content>
  </va-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    defaul: null,
  },
  iconInfo: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.wrapper__card-basic-item {
  .va-card__title {
    font-size: 11px;
    color: var(--color-custom-gray-1);
    text-transform: capitalize !important;
    padding-bottom: 0px !important;
  }
}
</style>
