<template>
  <div class="row">
    <div class="col-1 mb-1 text-align-center">
        <div class="i-post-image-simple-chat d-flex align-items-center" :style="$image"></div>
    </div>
    <div class="col-11 mb-3">
        <b-form-input
            type="text"
            class="w-100"
            placeholder="Escribir un comentario"
            required
          ></b-form-input>
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

</style>