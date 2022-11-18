<template>
  <form class="row">
      <b-form-group label="Título" class="col-12 mb-3">
        <b-form-input required></b-form-input>
      </b-form-group>
      <b-form-group label="Descripción" class="col-12 mb-5">
        <b-form-input type="textarea" required></b-form-input>
      </b-form-group>
      <b-form-checkbox
      id="checkbox-1"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
      class="col-12 mb-4">
    Evaluar (solo membresía)
    </b-form-checkbox>
      <div class="col-12 mb-3">
        <b-button variant="primary" class="i-login-btn" to="/"
          >Publicar</b-button>
      </div>
      </form>
</template>

<script>
export default {

}
</script>

<style>

</style>