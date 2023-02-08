<template>
  <div class="base-form">
    <div class="form-content">
      <a-form
          v-bind="layout"
          :rules='rules'
          :model="form"
          ref="refForm"
      >
        <a-modal
            title="Re-Run InterConnect Report"
            :visible="modalVisible"
            :width="600"
            :footer="false"
            @cancel="setModalVisible(false)">
          <div class="w-full ">
            <a-form-item label="Start Date">
              <a-date-picker class="w-full"/>
            </a-form-item>
            <a-form-item label="End Date">
              <a-date-picker class="w-full"/>
            </a-form-item>
            <a-form-item label=" ">
              <a-button type="primary" class="base-color-theme">
                Re-Run InterConnect Report
              </a-button>
            </a-form-item>
          </div>

        </a-modal>

      </a-form>
    </div>
  </div>
</template>
<script setup>
import ReRunSMSUseCase from "@/usecases/reRunSMSUseCase";
import {ref, watch} from "vue";

const {
  layout,
  rules,
  refForm,
  form,
} = ReRunSMSUseCase;

const modalVisible = ref(false);
const emit = defineEmits(['change', 'success']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
})

function setModalVisible(isVisible) {
  modalVisible.value = isVisible;
  emit("change", isVisible);
}

watch(() => props.visible, (value) => {
      modalVisible.value = value;
    }, {deep: true}
);
</script>

<style scoped>

</style>