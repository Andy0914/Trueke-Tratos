<template>
    <IContainer>
        <IContainer>
            <ISearch/>
        </IContainer>
        <IListChats class="mb-4"/>
        <IListChats class="mb-4"/>
        <IListChats class="mb-4"/>
        <IListChats/>
    </IContainer>
</template>

<script>
import ISearch from "@/components/ISearch";
import IContainer from "@/components/IContainer";
import IListChats from "@/components/IListChats";
export default {
    components: {ISearch, IContainer, IListChats}
}
</script>

<style>

</style>