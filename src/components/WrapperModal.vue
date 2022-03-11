<template>
  <va-modal
    ref="wrapperModal"
    v-model="openModal"
    hide-default-actions
    size="large"
    @update:model-value="onClose"
  >
    <va-icon name="cancel" @click="$refs.wrapperModal.toggle()" />
    <slot></slot>
  </va-modal>
</template>

<script setup>
import { ref, watch } from "vue";
const emit = defineEmits(['onClose'])

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});

const openModal = ref(props.showModal);

const onClose = () => emit('onClose')

watch(
  () => props.showModal,
  (v) => {
    openModal.value = v;
  }
);
</script>

<style lang="scss" scoped>
.va-icon {
  font-size: 30px !important;
  float: right;
  z-index: 999;
  color: #fff;
  padding: 0.5rem 1rem;
}
</style>
