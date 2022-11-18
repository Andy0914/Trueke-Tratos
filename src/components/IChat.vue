<template>
  <div class="row mb-2">
    <div class="col-1 mb-1 text-align-center">
        <div class="i-post-image-simple-chat d-flex align-items-center" :style="$image"></div>
    </div>
    <div class="col-11 mb-1">
        <div class="bg-secondary text-white rounded-pill">
            <p>ola</p>
        </div>
        <p class="i-texto">Nombre</p>
    </div>
    <div class="col-3"></div>
    <div class="col-9 bg-primary text-white rounded-pill">adios</div>
    <div class="i-mensaje row">
        <div class="col-9">
            <b-form-input placeholder="Mensaje"></b-form-input>
        </div>
        <div class="col-1">
            <font-awesome-icon icon="fa-solid fa-microphone"/>
        </div>
        <div class="col-1">
            <font-awesome-icon icon="fa-solid fa-paperclip"/>
        </div>
        <div class="col-1">
            <font-awesome-icon icon="fa-solid fa-paper-plane"/>
        </div>
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
.i-post-image-simple-chat {
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
}
.i-texto{
    font-size: small;
}
.i-mensaje{
    position: absolute;
    bottom: 7px;
}
</style>