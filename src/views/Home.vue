<template>
  <div class="container">
    <div class="card-header">
      <div class="row">
        <div id="donar" class="col-6">
          <h1 class="donando">Donaciones</h1>
        </div>
        <div class="col-6">
          <router-link to="/finalizar"
            ><p class="btn btn-primary btn-outline btn-lg btn-block">
              CERRAR_SESION
            </p></router-link
          >
        </div>
      </div>
      <table colspan="2" class="table table-info table table.striped col">
        <div>
          <table class="table table-info">
            <thead>
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Donacion efectivo</th>
                <th scope="col">Donacion Socio</th>
                <th scope="col">Aportes</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Actualizar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item['.key']">
                <td v-text="item.usuarios"></td>
                <td v-text="item.donacion"></td>
                <td v-text="item.socios"></td>
                <td v-text="item.aportes"></td>
                <td>
                  <button
                    @click="borrarEmpleado(item['.key'])"
                    class="btn btn-primary"
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <router-link
                    :to="{ name: 'cambiar', params: { key: item['.key'] } }"
                    class="btn btn-warning"
                    >Actualizar</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "../config/db";
export default {
  name: "Lista",
  data() {
    return {
      items: [],
      arreglo: 0
    };
  },
  firebase: {
    items: db.ref("ingresos")
  },
  methods: {
    borrarEmpleado(key) {
      db.ref(`ingresos/${key}`)
        .remove()
        .then(() => alert("Han sido borrado sus datos del ancianato"));
    }
  }
};
</script>
<style>
.donando {
  color: black;
}
#donar {
  box-shadow: 6px 5px 5px 5px aquamarine;
  background-color: aqua;
}
</style>


