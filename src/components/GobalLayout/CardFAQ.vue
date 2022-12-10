<template>
  <div class="w-full relative flex flex-col p-8 h-[180px] border-2 border-gray-200">
    <h1 class="base-title-2">Question ?</h1>
    <p class="mt-2 text-xl">Answer</p>

    <div
        class="w-[30px] text-white cursor-pointer flex justify-center items-center absolute right-12 h-[30px] bg-blue-500">
      <i class="far fa-pencil-alt"></i>
    </div>
    <div
        class="w-[30px] text-white cursor-pointer flex justify-center items-center absolute  right-2 h-[30px] bg-red-500">
      <i class="fas fa-trash"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFAQ"
}
</script>

<style scoped>

</style>