<template>
  <div class="row mb-2">
    <div class="col-1 mb-3">
        <router-link to="/simple-chat">
            <b-button class="i-post-image-chats d-flex align-items-center" :style="$image"></b-button>
        </router-link>
    </div>
    <div class="col-11 mb-3">
        <p>Nombre</p>
        <div class="i-border-bottom"></div>
        <p>Título trueque</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "https://via.placeholder.com/500",
    },
  },
  computed: {
    $image() {
      const { image } = this;
      return { "background-image": `url(${image})` };
    },
  },
}
</script>

<style>
.i-post-image-chats {
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
}
.i-image-chat-btn{
    text-align: center;
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
    display: block;
}
</style>