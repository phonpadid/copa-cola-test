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
        <a-select
            v-model:value="form.activities"
            mode="tags"
            style="width: 100%"
            placeholder="Tags Mode"
        >
          <a-select-option v-for="item in activity" :key="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Start Date">
        <a-date-picker :show-time="true" @change="selectedDate" class="w-full"/>
      </a-form-item>
      <a-form-item label="Description">
        <a-textarea v-model:value="form.body" :rows="6"/>
      </a-form-item>
      <a-form-item label=' '>
        <a-button :loading="loading" class="bg-blue-500" type='primary' @click='onSubmit'>save change</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'
import {NotEmpty} from '@/utils/validate'
import {useStore} from "vuex";
import {useRoute,useRouter} from "vue-router";
import bodyHelpers from "@/utils/BodyHelpers";
import moment from "moment";
import Event from "@/store/models/Event.js"
import {notificationSuccess, notificationWarning} from "@/utils/message";

const store = useStore();
const route = useRoute();
const router = useRouter();
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
const form = reactive(new Event());
const loading = ref(false)
const setRef = el => {
  ruleForm.value = el
};

function selectedDate(date) {
  if (date) {
    form.schedule = moment(date.$d).format("YYYY-MM-DD hh:mm:ss");
  }
}

//fetch activity for select in event create
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
        if (res) {
          handleSubmit();
        }
      })
      .catch(error => {
      })
}

function handleSubmit() {
  let uri;
  let method;
  uri = `event`;
  method = "post";


  const data = JSON.parse(JSON.stringify(form))
  const body = {
    method: "post",
    _method: method,
    actionUri: uri,
    formData: false,
    ...data
  }
  finalSaveItem(body);
}


function finalSaveItem(body) {
  loading.value = true;
  store.dispatch("data-resources/manage", body)
      .then((res) => {
        if (res.code === 200) {
          loading.value = false;
          notificationSuccess({
            title: "Create Data Successfully",
            description: "data created !!",
            position: "topRight"
          })
          router.push({
            name: "event.index"
          }).catch(() => {

          })
        }
      })
      .catch((firstErrorBag) => {
        notificationWarning({
          title: "Save failed",
          description: firstErrorBag.errors().join('\n'),
          position: "topRight"
        })
        loading.value = false;
      }).finally(() => {
    loading.value = false;
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