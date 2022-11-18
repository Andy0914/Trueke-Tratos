<template>
  <IContainer>
    <IPostImage></IPostImage>
    <ICreatePostForm></ICreatePostForm>
  </IContainer>
</template>

<script>
import IContainer from "@/components/IContainer.vue";
import IPostImage from "@/components/IPostImage.vue";
import ICreatePostForm from "@/components/ICreatePostForm.vue";

export default { components: { IContainer, IPostImage, ICreatePostForm} };
</script>

<style>
</style>