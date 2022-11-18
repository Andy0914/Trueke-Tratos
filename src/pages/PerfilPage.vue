<template>
  <div>
    <IPerfilHeader>
    </IPerfilHeader>
    
    <IContainer>
        <IPerfilInformation></IPerfilInformation>
    </IContainer>
    <IContainer>
        <h5>Mis publicaciones</h5>
        <IPost class="mb-5" />
      <IPost />
    </IContainer>
  </div>
</template>

<script>
import IPerfilHeader from "@/components/IPerfilHeader.vue";
import IContainer from "@/components/IContainer.vue";
import IPerfilInformation from "@/components/IPerfilInformation.vue";
import IPost from "@/components/IPost.vue";

export default {
  components: { IPerfilHeader, IContainer, IPerfilInformation, IPost},
};
</script>

<style>

</style>