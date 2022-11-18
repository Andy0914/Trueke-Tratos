<template>
    <div class="i-post-image" :style="$image"></div>
    
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
};
</script>

<style>
.i-post-image {
  display: block;
  width: 100%;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>