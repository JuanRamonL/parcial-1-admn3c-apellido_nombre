Vue.component('contenedor-card', {
  props: ['texto'],
  data() {
    return {
      nuevoTexto: '',
      listaTareas: [],
      editarIndice: -1,
      contenedorColor: '#f2f2f2', // Gris claro
      listaDesplegada: false,
      checkboxMarcado: false,
      localStorageKey: `listaTareas_${this._uid}`, // Clave única para el localStorage
    };
  },
  created() {
    this.recuperarElementos();
  },
  watch: {
    listaTareas() {
      this.actualizarContenedorColor();
      this.guardarElementos();
    },
    checkboxMarcado() {
      this.tacharTexto();
      this.ordenarLista();
      this.guardarElementos();
    },
  },
  methods: {
    agregarTarea() {
      if (this.nuevoTexto !== '') {
        if (this.listaTareas.length < 10) {
          this.listaTareas.push({ texto: this.nuevoTexto, tachado: false });
          this.nuevoTexto = '';
          this.guardarElementos();
        } else {
          console.log('Se ha alcanzado el límite de 10 elementos');
        }
      }
    },
    borrarTarea(index) {
      this.listaTareas.splice(index, 1);
      this.guardarElementos();
    },
    editarTarea(index) {
      if (this.editarIndice !== index) {
        this.editarIndice = index;
      } else {
        this.editarIndice = -1;
      }
    },
    borrarElemento() {
      this.$emit('borrar-contenedor');

      // Eliminar los elementos del localStorage generados dentro del elemento borrado
      localStorage.removeItem(this.localStorageKey);

      // Eliminar los elementos <li> generados dentro del elemento borrado
      const contenedor = this.$el;
      const elementosLi = contenedor.querySelectorAll('li');
      elementosLi.forEach((li) => {
        li.parentNode.removeChild(li);
      });
    },
    actualizarContenedorColor() {
      const totalTareas = this.listaTareas.length;

      if (totalTareas < 3) {
        this.contenedorColor = '#f2f2f2'; // Gris claro
      } else if (totalTareas < 5) {
        this.contenedorColor = '#c9e6c9'; // Verde claro
      } else if (totalTareas < 8) {
        this.contenedorColor = '#ffe680'; // Amarillo claro
      } else {
        this.contenedorColor = '#ff9999'; // Rojo claro
      }
    },
    tacharTexto() {
      const contenedor = this.$el.querySelector('.card-title');

      if (contenedor) {
        if (this.checkboxMarcado) {
          contenedor.style.textDecoration = 'line-through';
        } else {
          contenedor.style.textDecoration = 'none';
        }
      }
    },
    ordenarLista() {
      this.listaTareas.sort((a, b) => {
        if (a.tachado && !b.tachado) {
          return 1;
        } else if (!a.tachado && b.tachado) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    guardarElementos() {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.listaTareas));
    },
    recuperarElementos() {
      const elementos = localStorage.getItem(this.localStorageKey);
      if (elementos) {
        this.listaTareas = JSON.parse(elementos);
      }
    },
  },
  template: `
    <div>
      <div class="card m-2" :style="{ backgroundColor: contenedorColor }">
        <div class="card-body">
          <div class="d-flex justify-content-between p-2">
            <h5 class="card-title">{{ texto }}</h5>
            <button class="btn btn-outline-danger" @click="borrarElemento">X</button>
          </div>
          <div class="d-flex justify-content-around">
            <input class="form-control"  v-model="nuevoTexto" rows="3" placeholder="Agregar apuntes" maxlength="30" @keyup.enter="agregarTarea" />
            <button class="btn btn-outline-success mx-2" @click="agregarTarea">Agregar</button>
          </div>

          <button class="btn btn-outline-secondary btn-sm mt-2" @click="listaDesplegada = !listaDesplegada">
            {{ listaDesplegada ? 'Cerrar lista' : 'Mostrar lista' }}
          </button>

          <ul class="list-group my-1 " v-show="listaDesplegada">
            <li class="list-group-item" v-for="(tarea, index) in listaTareas" :key="index">
              <div v-if="!tarea.tachado">
                <p v-if="editarIndice !== index">{{ tarea.texto }}</p>
                <input v-else class="form-control" v-model="listaTareas[index].texto" maxlength="30" />
              </div>

              <div v-else>
                <p v-if="editarIndice !== index" :style="{ textDecoration: 'line-through' }">{{ tarea.texto }}</p>
                <input v-else class="form-control" v-model="listaTareas[index].texto" maxlength="30" />
              </div>

              <div class="d-flex justify-content-between">
                <button class="btn btn-outline-warning btn-sm" @click="editarTarea(index)">
                  {{ editarIndice !== index ? 'MODIFICAR' : 'GUARDAR' }}
                </button>
                <button class="btn btn-outline-danger btn-sm" @click="borrarTarea(index)">BORRAR</button>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="listaTareas[index].tachado" :id="'checkbox-' + index" />
                  <label class="form-check-label" :for="'checkbox-' + index">listo</label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
});
