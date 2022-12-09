<template>
  <a-upload
      list-type="picture-card"
      v-model:file-list="imageList"
      @change="handleChange"
      @preview="handlePreview"
  >
    <div v-if="imageList.length < limit">
      <i class="fal fa-plus"></i>
      <div class="ant-upload-text">
        {{ title}}
      </div>
    </div>
  </a-upload>
  <a-modal centered v-model:visible="previewVisible" :closable="false" :footer="null" :bodyStyle="{ padding: 0 }">
    <img alt="example" style="width: 100%" :src="previewImage"/>
  </a-modal>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['update:imageList']);
defineProps({
  imageList: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String
  },
  limit: {
    type: Number,
    default: () => 1,
  }
})

const previewVisible = ref(false);
const previewImage = ref('')
const handlePreview = async file => {
  previewImage.value = file.url || file.thumbUrl

  previewVisible.value = true;
}

const handleChange = ({fileList}) => {
  const imageList = [...fileList].map(item => {
    const {response = null, ...other} = item
    if (response) {
      const {ossUrl: url} = response.data || {}
      return {
        ...other,
        url,
      }
    } else {
      return item
    }
  })
  emit('update:imageList', imageList)
}
</script>

<style scoped>

</style>
