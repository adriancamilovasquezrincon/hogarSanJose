<template>
  <div class="container">
    <div class="card-header">
      <form @submit.prevent="hogarInicio" class="form group">
        <div>
          <h3>Iniciar Sesion Hogar San José</h3><br>
          <div class="form-group">
            <label>email</label><br />
            <input
              type="text"
              v-model="hogarSanJose.correo"
              class=" form-group form-control-lg"
            />
          </div>
          <div class="form-group">
            <label class="con">contraseña</label><br />
            <input
              type="text"
              v-model="hogarSanJose.contraseña"
              class=" form-group form-control-lg"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg">Entrar al Hogar San Jose</button>
      </form>
    </div>
  </div>
</template>
<script>
import { firebase } from "../config/db";
export default {
  name: "inicioHogar",
  data() {
    return {
      hogarSanJose: {
        correo: "",
        contraseña: ""
      }
    };
  },
  methods: {
    hogarInicio() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.hogarSanJose.correo,
          this.hogarSanJose.contraseña
        )
        .then(() => this.$router.push("/donar"))
        .catch(error => alert(error.message));
    }
  }
};
</script>
<style>
body {
  background-image: url(https://i.pinimg.com/originals/4a/47/45/4a474562d79225e7f107ddeae120ef4f.gif);
  background-attachment: fixed;
  background-size: 100% 100%;
}
label {
    text-transform:uppercase;
    color:white;
}
</style>