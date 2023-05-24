Vue.component('contenedor-card', {
    props: ['texto'],
    template: `
      <div>
        <div class="card mx-2" style="width: 18rem;">
          <div class="card-body">
            <h3 class="card-title">{{texto}}</h3>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Agregar apuntes"></textarea>
            <ul class="list-group">
              <li class="list-group-item">Texto modificado</li>
            </ul>
            <div class="d-flex justify-content-around">
              <button href="#" class="btn btn-outline-primary">MODIFICAR</button>
              <button href="#" class="btn btn-outline-danger" @click="borraTAREA">BORRAR</button>
            </div>
          </div>
        </div>
      </div>
    `,
    methods: {
      borraTAREA() {
        this.$emit('borrar-tarea', this.texto); // Emitir evento personalizado 'borrar-tarea' con el valor de la prop 'texto'
      },
    },
  });


//==================== desde acá===========================

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
        <h2>Agregar Materia</h2>
        <form @submit.prevent="addItem">
          <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">text</label>
            <input type="text" class="form-control" id="name" v-model="nuevaTarea.name" maxlength="30" required>
          </div>
          <button class="btn btn-outline-success" type="submit">Agregar tarea</button>
          <button class="btn btn-outline-danger" type="button" @click="borrarPrimerItem" :disabled="misTareas.length === 0">Borrar primer item</button>
          <button class="btn btn-outline-danger" type="button" @click="borrarUltimoItem" :disabled="misTareas.length === 0">Borrar último item</button>
        </form>
  
        <div class="d-flex flex-wrap p-2 mx-2">
          <contenedor-card :texto="item.name" v-for="(item, index) in misTareas" :key="index" @borrar-tarea="borrarTarea(index)"></contenedor-card>
        </div>
      </div>
    `,
    methods: {
      borrarTarea(index) {
        this.misTareas.splice(index, 1); // Eliminar el elemento del array 'misTareas' en la posición 'index'
        console.log('Se borró el elemento en la posición', index);
      },
      addItem() {
        this.misTareas.push({ ...this.nuevaTarea });
        this.nuevaTarea.id++;
        this.nuevaTarea.name = '';
        console.log(this.misTareas);
      },
      borrarPrimerItem() {
        this.misTareas.splice(0, 1); // Eliminar el primer elemento del array 'misTareas'
        console.log('Se borró el primer item');
      },
      borrarUltimoItem() {
        this.misTareas.splice(-1, 1); // Eliminar el último elemento del array 'misTareas'
        console.log('Se borró el último item');
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