<template>
  <div class="i-home-header row bg-primary text-white">
    <div class="col-2  text-center">
      <font-awesome-icon icon="fa-solid fa-bars" class="i-menu-btn" />
    </div>
    <div class="col-8">
      <span class="d-block text-center">Trueke-tratos</span>
    </div>
    <div class="col-2 d-flex align-items-end justify-content-end">
      <router-link
    to="/perfil"
    class="bg-white rounded-circle text-muted i-menu-btn"
  >
      <font-awesome-icon icon="fa-solid fa-user" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.i-home-header {
  padding: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.i-menu-btn {
  text-align: center;
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
  display: block;
}

</style>