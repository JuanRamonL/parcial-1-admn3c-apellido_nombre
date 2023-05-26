

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
      };
    },
    watch: {
      listaTareas() {
        this.actualizarContenedorColor();
      },
      checkboxMarcado() {
        this.tacharTexto();
        this.ordenarLista();
      },
    },
    methods: {
      agregarTarea() {
        if (this.nuevoTexto !== '') {
          if (this.listaTareas.length < 10) {
            this.listaTareas.push({ texto: this.nuevoTexto, tachado: false });
            this.nuevoTexto = '';
          } else {
            // Aquí puedes mostrar un mensaje o tomar alguna acción cuando se alcance el límite de 10 elementos
            console.log('Se ha alcanzado el límite de 10 elementos');
          }
        }
      },
      borrarTarea(index) {
        this.listaTareas.splice(index, 1);
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
    },
    template: `
      <div>
        <div class="card mx-2" :style="{ backgroundColor: contenedorColor }">
          <div class="card-body">
            <div class="d-flex justify-content-between p-2">
              <h5 class="card-title">{{ texto }}</h5>
              <button class="btn btn-outline-danger" @click="borrarElemento">X</button>
            </div>
            <div class="d-flex justify-content-around">
              <input class="form-control" v-model="nuevoTexto" rows="3" placeholder="Agregar apuntes" maxlength="30" />
              <button class="btn btn-outline-primary mx-2" @click="agregarTarea">Agregar</button>
            </div>
  
            <button class="btn btn-link mt-2" @click="listaDesplegada = !listaDesplegada">
              {{ listaDesplegada ? 'Cerrar lista' : 'Mostrar lista' }}
            </button>
  
            <ul class="list-group my-1 text-center" v-show="listaDesplegada">
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
                  <button class="btn btn-outline-success btn-sm" @click="editarTarea(index)">
                    {{ editarIndice !== index ? 'MODIFICAR' : 'GUARDAR' }}
                  </button>
                  <button class="btn btn-outline-danger btn-sm" @click="borrarTarea(index)">BORRAR</button>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="listaTareas[index].tachado" :id="'checkbox-' + index" />
                    <label class="form-check-label" :for="'checkbox-' + index">Tachar texto</label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
  });
  

  
  
  

  
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
          <button class="btn btn-outline-success" type="submit">Agregar tarea</button>
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
  
//==================== hasta acá===========================



const app = new Vue({
    el:'#contenedor',
    data:{

        //------------datos---------- 
        texto:'hola',
        login: false,

        link:[
            { text: 'home', url:'#/home', enable: true},  
            { text: 'mis tareas', url:'#/abaut', enable: false},
            { text: 'configuración', url:'#/configuración', enable: false},

        ],
        estadologin: false,
    },

     //metodo que vue ejecuta cuando está listo para mostrar la pagina 
    mounted() {
        const islogin= JSON.parse(localStorage.getItem('login'));
        if(islogin){
            this.login = true
        }
        console.log("se  montó ")
    },

    methods: {

        //------------metodos y funciones---------- 

        sesion(){
            if(!this.login){
                
                this.mostrarpanellogin();
            }else{
                
            this.login = !this.login;
            //localStorage cambio de valor 
            localStorage.setItem('login','false');
            }
        },

        close(){
            this.login=false;
            
        },
        
        iniciosesion(){
            this.login= true;
            //localStorage cambio de valor
            localStorage.setItem('login','true');
            this.estadologin= false
        }, 

        mostrarpanellogin(){
            this.estadologin= true
           },
        cerrarpanellogin(){
            this.estadologin= false
        },
        envio(){
            console.log("se envio")
        },


        
    }
        
  }) 



Vue.component('ventana-modal',{
    data: function(){
        return{

            estadologin: false,
        }
    },
    methods:{

    },
    template:`
    <div>
        <div v-if="estadologin" class="modal" tabindex="-1" style="display: block;">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                    <h5 class="modal-title">Inicio de sesión</h5>
                    <button type="button" class="btn-close" aria-label="Close"  @click="cerrarpanellogin" ></button>
                    </div>

                    <div class="modal-body">
                    <p>ingrese sus datos</p>
                    <form action="">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="usuario" placeholder="Usuario">
                            <label for="usuario">Usuario</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" autocomplete="contraseña" name="contraseña" class="form-control" id="contraseña" placeholder="contraseña" @keyup.enter="iniciosesion">
                            <label for="contraseña">contraseña</label>
                        </div>
                    </form>
                    </div>
                    
                    <div class="modal-footer">  
                    <button type="button" class="btn btn-outline-success"  @click="iniciosesion">Iniciar sesión</button>
                    <button type="button" class="btn btn-outline-danger"  @click="cerrarpanellogin">cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
});

Vue.component('barra-Navegacion',{
    data: function(){
        return{

        }
    },
    methods:{

    },
    template:/*`
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">

                <ul class="navbar-nav">

                  <li v-for="item in link" class="nav-item" v-if="item.enable || login">
                    <a class="nav-link active" aria-current="page" href="#">{{item.text}}</a>
                  </li>

                </ul>

                <form class="d-flex" @submit.prevent="envio">

                    <button type="submit" :class="`btn btn-outline-${login ?'danger':'success'}`" @click="sesion"  >
                        {{ login ? 'Cerrar sesión' : 'Iniciar sesión'}}
                    </button>

                </form>

              </div>
            </div>
          </nav>
    </div>
    
    `,*/``
})