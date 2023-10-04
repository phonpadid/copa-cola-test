<template>
   <div class="form-content">
    <!-- From Expert User -->
    <a-form v-bind="layout" ref="refForm">
      <a-form-item label=" ">
        <h1 class="text-xl base-title-form">
          <span><i class="fal fa-edit"></i></span>
          ຈັດການແມັດ
        </h1>
      </a-form-item>
      <a-form-item label="team_a_id">
        <a-select
          ref="select"
          v-model:value="value1"
          style="width: 150%" 
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="jack">Team_A</a-select-option>
          <a-select-option value="lucy">Team_B</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="team_b_id">
        <a-select
          ref="select"
          v-model:value="value1"
          :options="options1"
          style="width: 150%" 
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="jack">Team_A</a-select-option>
          <a-select-option value="lucy">Team_B</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="match_time">
        <a-date-picker show-time style="width: 150%" ></a-date-picker>
      </a-form-item>
      <a-form-item label="activity_time">
        <a-date-picker show-time style="width: 150%" ></a-date-picker>
      </a-form-item>
      <a-form-item label="is_enable">
        <a-checkbox v-model:checked="isChecked">{{ status }}</a-checkbox>
      </a-form-item>
      <a-form-item label=" ">
        <a-button class="bg-blue-500" type="primary">ບັນທຶກແມັດ</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue';
import { ref, computed } from 'vue';


const value1 = ref('Team');
const checked = ref(false);
const isChecked = ref(false);
const status = computed(() => isChecked.value ? 'open' : 'off');


const options1 = ref<SelectProps['options']>([
  {
    value: 'Team_A',
    label: 'Team_A',
  },
  {
    value: 'Team_B',
    label: 'Team_B',
  },
]);

const focus = () => {
  console.log('focus');
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
</script>

<style scoped>
/* Add responsive CSS here */
.form-content {
  max-width: 600px; /* Adjust the maximum width as needed */
  margin: 0 auto; /* Center the form horizontally */
}

/* For smaller screens, you can adjust the layout */
@media (max-width: 768px) {
  .form-content {
    max-width: 100%; /* Use full width on smaller screens */
    padding: 10px; /* Add some padding for better mobile view */
  }

  a-form-item {
    margin-bottom: 10px; /* Add spacing between form items */
  }

  /* You can customize the styles further for smaller screens */
}
</style>