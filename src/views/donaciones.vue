<template>
  <div class="container">
    <div class="card-header">
      <div class="container">
        <form @submit.prevent="addEmpleado">
          <div class="card-body">
            <div>
             <br>
              <div class="form-group">
                <label>
                  Usuario a Donar
                </label>
              </div>
              <input
                v-model="nuevoDato.usuario"
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
                v-model="nuevoDato.donar"
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
                v-model="nuevoDato.socio"
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
                class="btn btn-success btn-lg"
                value="Agregar Donacion"
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
export default {
  name: "Donaciones",
  data() {
    return {
      nuevoDato: {
        usuario: "",
        donar: 0,
        socio: 0,
        aportes: 0
      }
    };
  },
  methods: {
    addEmpleado() {
      db.ref("ingresos")
        .push({
          usuarios: this.nuevoDato.usuario,
          donacion: this.nuevoDato.donar,
          socios: this.nuevoDato.socio,
          aportes: this.nuevoDato.aportes
        })
        .then(() => {
          this.nuevoDato.usuario = "";
          this.nuevoDato.donar = "";
          this.nuevoDato.socio = "";
          this.nuevoDato.aportes = "";
          this.$router.push("/acciones");
          alert("Ha sido guardada su informacion en aportes al Hogar San Jose");
        });
    }
  }
};
</script>
<style>
body {
  background-image: url(https://professor-falken.com/wp-content/uploads/2017/11/Como-cambiar-la-imagen-de-fondo-del-inicio-de-sesion-en-tu-Mac-professor-falken.com_.jpg);
  background-attachment: fixed;
  background-size: 100% 100%;
}
.container {
  background-image: url(https://i.pinimg.com/originals/4a/47/45/4a474562d79225e7f107ddeae120ef4f.gif);
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>