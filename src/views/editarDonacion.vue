<template>
  <div class="container">
    <div class="card-header">
      <div class="container">
        <form @submit.prevent="editarEmpleado">
          <div class="card-body">
            <div>
              <div class="form-group">
                <label>
                  Usuario a Donar
                </label>
              </div>
              <input
                v-model="nuevoDato.usuarios"
                type="text"
                class="form-group form-control-lg"
                placeholder="Usuario a Donar"
              />
            </div>
            <div>
              <div class="form-group">
                <label>
                  Donaciones en Efectivo
                </label>
              </div>
              <input
                v-model="nuevoDato.donacion"
                type="text"
                class="form-group form-control-lg"
                placeholder="Efectivo"
              />
            </div>
            <div>
              <div class="form-group">
                <label>
                  Asociados
                </label>
              </div>
              <input
                v-model="nuevoDato.socios"
                type="text"
                class="form-group form-control-lg"
                placeholder="Donacion a asociados"
              />
            </div>
            <div>
              <div class="form-group">
                <label>
                  Aportes
                </label>
              </div>
              <input
                v-model="nuevoDato.aportes"
                type="text"
                class="form-group form-control-lg"
                placeholder="Aportes"
              />
            </div>
            <div class="form-group">
              <input
                type="submit"
                class="btn btn-dark btn-lg"
                value="Actualizar Informacion"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../config/db";
const items = db.ref("ingresos");
export default {
  name: "editarDonacion",
  data() {
    return {
      keyRoute: this.$route.params.key,
      nuevoDato: null
    };
  },
  firebase() {
    return { nuevoDato: items.child(this.keyRoute) };
  },
  methods: {
    editarEmpleado() {
      db.ref(`ingresos/${this.keyRoute}`)
        .set(this.nuevoDato)
        .then(() => {
          this.$router.push("/acciones");
          alert("Actualizado con exito datos del Hogar San Jose");
        });
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
</style>