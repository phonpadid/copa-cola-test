<template>
  <div class="base-form">

    <div class="form-content">
      <a-form
          layout="vertical"
          :rules='rules'
          :model="form"
          ref="refForm"

      >
        <a-row :gutter="[16,16]">
          <a-col :sm="24" :md="24" :lg="24">
            <a-form-item label=" ">
              <h1 class="text-xl base-title-form">
                <span><i class="fal fa-edit"></i></span>
                Auto Number
              </h1>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label=" ">
              <a-checkbox/>
              <span class="ml-4">Auto Number Of Statement</span>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input  class="bg-yellow-100"/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input  default-value="/ອປທ. ສອຊ"/>
            </a-form-item>
          </a-col>

          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label=" ">
              <a-checkbox/>
              <span class="ml-4">Auto Number Of Statement</span>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input  class="bg-yellow-100"/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input default-value="/ສມຖ"/>
            </a-form-item>
          </a-col>

          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label=" ">
              <a-checkbox/>
              <span class="ml-4">Auto Number Of Statement</span>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input  class="bg-yellow-100"/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input/>
            </a-form-item>
          </a-col>

          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label=" ">
              <a-checkbox/>
              <span class="ml-4">Auto Number Of Statement</span>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input  class="bg-yellow-100"/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input/>
            </a-form-item>
          </a-col>

          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label=" ">
              <a-checkbox/>
              <span class="ml-4">Auto Number Of Statement</span>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input  class="bg-yellow-100"/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="7" :lg="7">
            <a-form-item label=" ">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="6" :lg="6"></a-col>
          <a-col :sm="24" :md="6" :lg="6" >
            <a-form-item label=" ">
              <a-button class="bg-blue-500 w-full" type="primary">
                {{ isEdit ? "Update" : "Create" }}
              </a-button>
            </a-form-item>
          </a-col>
        </a-row>


      </a-form>
    </div>
  </div>
</template>

<script setup>
import AutoNumberUseCase from "@/usecases/autoNumberUseCase";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
} = AutoNumberUseCase;
onMounted(async () => {

})
</script>

<style scoped lang="scss">
.ant-form-item {
  margin-bottom: 0;
}
</style>