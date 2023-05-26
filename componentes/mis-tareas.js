Vue.component('mis-tareas', {
    data: function() {
      return {
        misTareas: [],
        nuevaTarea: {
          id: 1,
          name: '',
        },
      };
    },
    template: `
      <div>
        <h2>Agregar tareas</h2>
        <form @submit.prevent="addItem">
          <div class="col-auto">
            <label for="name" class="visually-hidden">text</label>
            <input type="text" class="form-control" id="name" v-model="nuevaTarea.name" maxlength="30" required>
          </div>
          <button class="btn btn-outline-success m-2" type="submit">Agregar tarea</button>
        </form>
  
        <div class="d-flex flex-wrap py-2 my-2">
          <contenedor-card :texto="item.name" v-for="(item, index) in misTareas" :key="index" @borrar-contenedor="borrarContenedor(index)"></contenedor-card>
        </div>
      </div>
    `,
    methods: {
      borrarContenedor(index) {
        this.misTareas.splice(index, 1); // Eliminar el contenedor del array 'misTareas' en la posición 'index'
      },
      addItem() {
        this.misTareas.push({ ...this.nuevaTarea });
        this.nuevaTarea.id++;
        this.nuevaTarea.name = '';
      },
      borrarPrimerItem() {
        this.misTareas.splice(0, 1); // Eliminar el primer elemento del array 'misTareas'
      },
      borrarUltimoItem() {
        this.misTareas.splice(-1, 1); // Eliminar el último elemento del array 'misTareas'
      },
    },
  });
  