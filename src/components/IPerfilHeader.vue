<template>
  <div class="i-header-perfil bg-primary" >
    <div class="i-return-btn-perfil text-white" @click="returnModal">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </div>
    <div class="i-post-image-perfil" :style="$image"></div>
    <div class="">
      <router-link to="/chats" class=" text-white i-chats-btn">
        <font-awesome-icon icon="fa-solid fa-comments" />
      </router-link>
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
.i-header-perfil{
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.i-return-btn-perfil {
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 1.2rem;
}

.i-post-image-perfil {
  position: absolute;
  top: 130px;
  width: 100%;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.i-chats-btn{
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 1.2rem;
}

</style>