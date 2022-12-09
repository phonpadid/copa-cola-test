<template>
  <a-form-item
      :form="form"
      :ref='setRef'
      :model='form'
      :rules='rules'
      :label-col='labelCol'
      :wrapper-col='wrapperCol'
  >
    <a-modal
        title="Post Content"
        :visible="modalVisible"
        :width="920"
        :footer="false"
        @cancel="setModalVisible(false)">
      <div class="w-full flex flex-col min-h-[300px]">
        <a-form-item>
          <UploadImage :title="'image'"/>
        </a-form-item>
        <a-form-item>
          <label for="">Post Title</label>
          <a-input/>
        </a-form-item>
        <a-form-item>
          <label for="">Post Content</label>
          <QuillEditor theme="snow"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" class="base-color-theme">
            save change
          </a-button>
        </a-form-item>
      </div>

    </a-modal>
  </a-form-item>
</template>

<script setup>
import {reactive, ref, watch} from 'vue'
import {NotEmpty} from '@/utils/validate'
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const emit = defineEmits(['change']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
})


const store = useStore();
const route = useRoute();
const labelCol = {
  xl: 4,
  md: 6,
  xs: 8,
}
const wrapperCol = {
  xl: 12,
  md: 14,
  xs: 16,
}
const modalVisible = ref(false);
const ruleForm = ref(null);
const form = reactive({
  name: "",
});
const setRef = el => {
  ruleForm.value = el
}
const onSubmit = () => {
  ruleForm.value
      .validate()
      .then((res) => {
        console.log(res)
      })
      .catch(error => {
      })
}
const rules = {
  name: [NotEmpty('name')],
};

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