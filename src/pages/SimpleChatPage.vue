<template>
    <div>
        <ISimpleChatHeader/>
        <IContainer>
            <IChat></IChat>
        </IContainer>
    </div>
</template>

<script>
import ISimpleChatHeader from "@/components/ISimpleChatHeader";
import IContainer from "@/components/IContainer.vue";
import IChat from "@/components/IChat.vue";
export default {
    components: { ISimpleChatHeader, IContainer, IChat }
}
</script>

<style>

</style>