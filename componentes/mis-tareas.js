Vue.component('mis-tareas', {
  data: function() {
    return {
      misTareas: [],
      contadorId: 1,
      nuevaTarea: {
        name: '',
      },
    };
  },
  created() {
    this.recuperarTareas();
  },
  template: `
    <div>
      <h4>Agregar tareas</h4>
      <form @submit.prevent="addItem">
        <div class="col-auto">
          <label for="name" class="visually-hidden">text</label>
          <input type="text" class="form-control" id="name" v-model="nuevaTarea.name" maxlength="30" required>
        </div>
        <button class="btn btn-outline-success m-2" type="submit">Agregar tarea</button>
      </form>

      <div class="d-flex flex-wrap py-2 my-2">
        <contenedor-card :texto="item.name" v-for="(item, index) in misTareas" :key="item.id" @borrar-contenedor="borrarContenedor(index)"></contenedor-card>
      </div>
    </div>
  `,
  methods: {
    borrarContenedor(index) {
      this.misTareas.splice(index, 1);
      this.guardarTareas();
    },
    addItem() {
      this.misTareas.push({ id: this.contadorId++, ...this.nuevaTarea });
      this.nuevaTarea.name = '';
      this.guardarTareas();
    },
    borrarPrimerItem() {
      this.misTareas.splice(0, 1);
      this.guardarTareas();
    },
    borrarUltimoItem() {
      this.misTareas.splice(-1, 1);
      this.guardarTareas();
    },
    guardarTareas() {
      localStorage.setItem('tareas', JSON.stringify(this.misTareas));
    },
    recuperarTareas() {
      const tareas = localStorage.getItem('tareas');
      if (tareas) {
        this.misTareas = JSON.parse(tareas);
      }
    },
  },
});
