<template>
  <div class="bg-login w-full flex items-center justify-center h-screen">
    <div
        class="flex items-center px-12 justify-center flex-col max-w-[500px] w-full bg-white h-full max-h-[600px] border-t-8 rounded-xl border-blue-300 ">
      <div class="w-[180px] h-[180px] bg-gray-200 rounded-full">

      </div>
      <h1 class="text-xl mt-4 font-black">Login to Billing System</h1>
      <div class="w-full mt-8">
        <a-form>
          <a-form-item>
            <label>User Name</label>
            <a-input size="large"/>
          </a-form-item>
          <a-form-item>
            <label>Password</label>
            <a-input-password size="large"/>
          </a-form-item>
          <a-form-item>
            <a-button size="large" type="primary" class="w-full">
              Login <span class="ml-4"><i class="fal fa-long-arrow-right"></i></span>
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.bg-login {
  background: rgba(30, 144, 255, 0.3);
}
</style>