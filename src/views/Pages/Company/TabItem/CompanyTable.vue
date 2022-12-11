<template>
  <div>
    <a-form
        :form="companyInfo"
        :ref="setRef"
        :model="companyInfo"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
    >
      <a-form-item label=" ">
        <div class="choose-image">
          <div class="show-image">
            profile
            <input
                @change="PreviewImage"
                type="file"
                class="input-file-image"
            />
            <img v-if="showImage" :src="showImage" alt=""/>
          </div>
        </div>
      </a-form-item>
      <a-form-item label="Company Name" name="name">
        <a-input size="large" v-model:value="companyInfo.name"/>
      </a-form-item>
      <a-form-item label="Joinable Code" name="code">
        <a-input size="large" v-model:value="companyInfo.joinable_code"/>
      </a-form-item>
      <a-form-item label="Slogan" name="=slogan">
        <a-input size="large" v-model:value="companyInfo.slogan"/>
      </a-form-item>
      <a-form-item label=" ">
        <div class="w-full h-[200px]">
          <img
              class="w-full h-full object-cover"
              :src="showGallery"
              alt
          />
        </div>
      </a-form-item>
      <!--      gallery-->
      <a-form-item label=" ">
        <div class="image-main-box">
          <div class="group-image-slip">
            <div class="group-show-image" v-for="(item,index) in preview_list" :key="index">
              <img
                  @click="previewMultiImage(item)"
                  class="hover-image"
                  :src="item.url || item"
                  alt
              />
              <div class="icon-delete-image" @click="deleteImage(item.uuid)">
                <i class="fal fa-times-circle"></i>
              </div>
            </div>
            <div class="image-upload">
              <input type="file" @change="previewMultiImage($event)" multiple/>
              <div class="image-box d-flex flex-column justify-center align-center">
                <i class="fal fa-plus"></i>
                <p>gallery</p>
              </div>
            </div>
          </div>
        </div>
      </a-form-item>
      <a-form-item label=" ">
        <a-button class="bg-blue-500" type="primary" @click="onSubmitInfo">save change</a-button>
      </a-form-item>

      <!--     content -->
      <a-form-item label=" ">
        <a-divider>Manage Post Content</a-divider>
        <a-button
            @click="onCreatePostContent"
            type="primary"
            shape="circle"
            class="absolute z-10 base-color-theme right-0"
        >
          <i class="fal fa-plus"></i>
        </a-button>
        <div class="relative flex flex-col w-full min-h-[300px]" v-for="item in companyContent" :key="item.id">

          <div class="w-full mt-10 h-[200px]">
            <img
                v-if="item.image_content"
                class="w-full h-full object-cover"
                :src="item.image_content.url"
                alt
            />
          </div>
          <h3 class="mt-2 font-bold">{{ item.title }}</h3>
          <p class="text-justify">
            {{ item.body }}
          </p>
        </div>
      </a-form-item>
    </a-form>
    <ModalAddPostContent @success="fetchCompanyContent" :visible="modalVisible" @change="(val) => modalVisible = val"/>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {NotEmpty} from "@/utils/validate";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {notificationSuccess, notificationWarning} from "@/utils/message";
import company from "@/store/models/CompanyInfo"


const store = useStore();
const showGallery = ref();
const route = useRoute();
const modalVisible = ref(false);
const labelCol = {
  xl: 4,
  md: 6,
  xs: 8
};
const wrapperCol = {
  xl: 18,
  md: 18,
  xs: 18
};
const image_list = ref([]);
const preview_list = ref([]);
const showImage = ref();
const imageFile = ref();
const ruleForm = ref(null);
const form = reactive(new company());
const companyInfo = ref({});
const companyContent = ref({});
const loading = ref(false);

const setRef = el => {
  ruleForm.value = el;
};

function deleteImage(id) {
  const body = {
    actionUri: `image/${id}`,
    method: "delete"
  };
  store.dispatch("data-resources/manage", body)
      .then((res) => {
        if (res) {
          notificationSuccess({
            title: "Delete Image Successfully",
            description: "data created !!",
            position: "topRight"
          });
          fetchCompanyInfo();
        }
      })
      .catch((firstErrorBag) => {
        notificationWarning({
          title: "Delete failed",
          description: firstErrorBag.errors().join('\n'),
          position: "topRight"
        })
      });
}

const onSubmitInfo = () => {
  ruleForm.value
      .validate()
      .then(res => {
        handleSubmit();
      })
      .catch(error => {
      });
};

function PreviewImage(event) {
  const input = event.target;
  const file = input.files[0];
  const fileType = file["type"];
  const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!validImageTypes.includes(fileType)) {
  } else if (input.files && input.files[0]) {
    imageFile.value = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      showImage.value = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function previewMultiImage(event) {
  showGallery.value = event.url;
  const input = event.target
  let count = input.files.length
  let index = 0
  if (input.files) {
    while (count--) {
      const reader = new FileReader()
      reader.onload = e => {
        preview_list.value.push(e.target.result);
      }
      image_list.value.push(input.files[index])
      reader.readAsDataURL(input.files[index])
      index++
    }
  }
}

function handleSubmit() {
  let uri;
  let method;
  uri = "company";
  method = "post";
  const data = JSON.parse(JSON.stringify(companyInfo.value));
  data.image_profile = imageFile.value;
  data.image_galleries = image_list.value;
  const body = {
    method: "post",
    _method: method,
    actionUri: uri,
    formData: true,
    ...data
  };
  finalSaveItem(body);
}

function finalSaveItem(body) {
  loading.value = true;
  store.dispatch("data-resources/manage", body)
      .then(res => {
        if (res.code === 200) {
          companyInfo.image_profile = null;
          notificationSuccess({
            title: "Create Data Successfully",
            description: "data created !!",
            position: "topRight"
          });
          loading.value = false;
          router.push({
            name: "company.index"
          }).catch(() => {
          });
        }
      })
      .catch((firstErrorBag) => {
        notificationWarning({
          title: "Save failed",
          description: firstErrorBag.errors().join('\n'),
          position: "topRight"
        })
        loading.value = false
      }).finally(() => {
    loading.value = false;
    fetchCompanyInfo();
  });
}


const rules = {
  name: [NotEmpty("name")]
};

function fetchCompanyInfo() {
  store
      .dispatch("data-resources/listing", {
        actionUri: "company"
      })
      .then(res => {
        if (res.code === 200) {
          companyInfo.value = res.data;
          showImage.value = companyInfo.value.image_profile.url;
          preview_list.value = companyInfo.value.image_galleries;
          showGallery.value = companyInfo.value.image_galleries[0].url
        }
      })
      .catch((firstErrorBag) => {
        notificationWarning({
          title: "fetch failed",
          description: firstErrorBag.errors().join('\n'),
          position: "topRight"
        })
        loading.value = false
      })
}

function fetchCompanyContent() {
  store
      .dispatch("data-resources/listing", {
        actionUri: "company-content"
      })
      .then(res => {
        if (res.code === 200) {
          companyContent.value = res.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
}

//create new post content with modal
function onCreatePostContent() {
  modalVisible.value = true;
}

onMounted(() => {
  fetchCompanyInfo();
  fetchCompanyContent();
})

</script>

<style scoped lang="scss">
.image-upload {
  width: 100px;
  height: 100px;
  background-color: #eeeeee;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 0.2px dashed #b8b8b8;

  &:hover {
    border: 0.5px dashed #52a5ea;
    cursor: pointer;
    background-color: #f5f1f1;

  }


  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 3;

  }

  .image-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: 2;
      cursor: pointer;
    }

    i {
      font-size: 2rem;
      color: #A3A9B9;
    }

    p {
      font-size: 12px;
    }
  }
}


.image-main-box {
  width: 100%;
  height: auto;
  display: block;
  flex-wrap: wrap;

  .group-image-slip {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;

    .group-show-image {
      display: flex;
      margin: 4px 8px;
      position: relative;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border: 1px solid #0088ff;
        border-radius: 4px;
        position: relative;
        z-index: 1;
      }

      .hover-image {
        cursor: pointer;
      }

      .icon-delete-image {
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        z-index: 3;
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          font-size: 20px;

          &:hover {
            color: red;
          }
        }
      }
    }
  }

}

.choose-image {
  width: 120px;
  height: 120px;
  position: relative;
  overflow: hidden;
  cursor: pointer;


  .show-image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 2px solid #eeeeee;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    i {
      font-size: 2rem;
      color: #1976D2;
    }

    .input-file-image {
      position: absolute;
      bottom: 100px;
      height: 100%;
      left: 0;
      opacity: 0;
      outline: none;
      top: 0;
      width: 100%;
      cursor: pointer;
      background-color: red;
      z-index: 9;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    position: absolute;
  }

  .embed-pdf {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    position: absolute;
    overflow-x: hidden;
  }

  .show-remove-image {
    position: absolute;
    font-size: 1.5rem;
    color: red;
    top: 5px;
    right: 10px;
    z-index: 10;
    cursor: pointer;
  }
}


</style>