<template>
  <IContainer>
    <IPostImage/>
    <IContainer>
      <IPostInformation/>
    </IContainer>
    <IComments/>
  </IContainer>
</template>

<script>
import IContainer from "@/components/IContainer";
import IPostImage from "@/components/IPostImage.vue";
import IPostInformation from "@/components/IPostInformation.vue";
import IComments from "@/components/IComments.vue"

export default {
  components: { IPostImage,IPostInformation, IContainer,IComments }
}
</script>

<style>

</style>