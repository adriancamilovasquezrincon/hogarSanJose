<template>
  <div class="container">
    <div class="col-12">
      <form @submit.prevent="Registro">
        <h3>Crear Cuenta Hogar</h3>
        <br />
        <div class="form-group">
          <label class="label-cols-xl">Nombre</label><br />
          <input
            type="text"
            v-model="hogarSanJose.nombre"
            class="form-group form-control-lg"
          />
        </div>
        <div class="form-group">
          <label class="label-cols-xl">email</label><br />
          <input
            type="text"
            v-model="hogarSanJose.correo"
            class="form-group form-control-lg "
          />
        </div>
        <div class="form-group">
          <label class="label-cols-xl">clave</label><br />
          <input
            type="text"
            v-model="hogarSanJose.clave"
            class="form-group form-control-lg"
          />
        </div>
        <button @click="agregarUsuario" class="btn btn-primary btn-lg">
          Agregar: Datos Usuario
        </button>
        <br /><br />
        <router-link to="/comenzar"
          ><button class="btn btn-primary btn-lg">Ingresar</button></router-link
        >
      </form>
    </div>
  </div>
</template>
<script>
import { firebase, db } from "../config/db";
export default {
  name: "RegistroHogar",
  data() {
    return {
      hogarSanJose: {
        nombre: "",
        correo: "",
        clave: ""
      }
    };
  },
  methods: {
    Registro() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.hogarSanJose.correo,
          this.hogarSanJose.clave
        )
        .then(res => {
          res.user
            .updateProfile({
              displayName: this.hogarSanJose.nombre
            })
            .then(() => alert("Registrad@ con exito"));
        })
        .catch(error => alert(error.message));
    },
    agregarUsuario() {
      db.ref("Administracion")
        .push({
          usuario: this.hogarSanJose.nombre,
          correo: this.hogarSanJose.correo,
          clave: this.hogarSanJose.clave
        })
        .then(() => {
          alert("Informacion del Hogar San Jose guardada con éxito");
        });
    }
  }
};
</script>
<style>
#reg {
  text-transform: uppercase;
  font-size: 20px;
  font-family: "Times New Roman";
}
body {
  background-image: url(https://i.pinimg.com/originals/4a/47/45/4a474562d79225e7f107ddeae120ef4f.gif);
  background-attachment: fixed;
  background-size: 100% 100%;
}
.label-cols-xl {
  text-transform: uppercase;
  color: white;
}
label {
  color: black;
}
h3 {
  color: black;
  text-transform: uppercase;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 35px;
}
</style>