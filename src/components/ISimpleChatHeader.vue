<template>
  <div class="i-simple-chat-header row bg-primary text-white">
    <div class=" i-return-simple-chat-btn text-white" @click="returnModal">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </div>
    <div class="">
      <H4 class="d-block text-center">Nombre</H4>
    </div>
    <div class="">
      <font-awesome-icon icon="fa-solid fa-search" class="i-search-simple-chat-btn"/>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    returnModal() {
      this.$router.back();
    },
  },
}
</script>

<style>
.i-simple-chat-header {
  padding: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.i-return-simple-chat-btn {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 1.2rem;
}

.i-search-simple-chat-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 1.2rem;
}
</style>