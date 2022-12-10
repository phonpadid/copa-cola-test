<template>
  <div class="base-form">
    <a-form
        class="mt-8"
        :form="form"
        :ref='setRef'
        :model='form'
        :rules='rules'
        :label-col='labelCol'
        :wrapper-col='wrapperCol'>
      <a-form-item label="Event Name">
        <a-input v-model:value="form.title"/>
      </a-form-item>
      <a-form-item label="Select Activity">
        <a-select v-model:value="form.activities">
          <a-select-option v-for="item in activity" :key="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Start Date">
        <a-date-picker :show-time="true"  @change="selectedDate($event)" class="w-full"/>
      </a-form-item>
      <a-form-item label="Description">
        <a-textarea v-model:value="form.body" :rows="6"/>
      </a-form-item>
      <a-form-item label=' '>
        <a-button class="bg-blue-500" type='primary' @click='onSubmit'>save change</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'
import {NotEmpty} from '@/utils/validate'
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import bodyHelpers from "@/utils/BodyHelpers";
import moment from "moment"

const store = useStore();
const route = useRoute();
const labelCol = {
  xl: 4,
  md: 6,
  xs: 8,
}
const activity = ref({});
const wrapperCol = {
  xl: 12,
  md: 14,
  xs: 16,
}
const ruleForm = ref(null);
const form = reactive({
  name: "",
});
const setRef = el => {
  ruleForm.value = el
};

function selectedDate(date) {
  console.log(moment(date).format("YYYY-MM-DD"))
}

function fetchActivity() {
  store.dispatch("data-resources/listing", {
    actionUri: 'variable',
    options_request: bodyHelpers([
      {type: "activity"},
    ])
  }).then((res) => {
    if (res.code === 200) {
      activity.value = res.data;
    }
  }).catch((error) => {
    console.log(error)
  })
}

const onSubmit = () => {
  ruleForm.value
      .validate()
      .then((res) => {
        console.log(form, 555)
      })
      .catch(error => {
      })
}
const rules = {
  name: [NotEmpty('name')],
};
onMounted(() => {
  fetchActivity();
})
</script>

<style scoped>
</style>