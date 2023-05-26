
//==================== desde acá===========================

Vue.component( 'mis-tareas', {
    data: function(){
        return{
            misTareas:[],
            nuevaTarea:{
                id: 1,
                name: "",  
            },
            tablas:[{titulo:'mis materias'},{titulo:'mis cursos'}]
        }
    },
    props: ['MIS MATERIAS','MIS  CURSOS'],

    template:`
        <div>

        <div v-for="elemento in tablas" >
            <h2 >Agregar {{texto}}</h2>
            <form @submit.prevent="addItem">
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">text</label>
                    <input type="text" class="form-control" id="name" v-model="nuevaTarea.name" maxlength="30" required>
                </div>
                <button  class="btn btn-outline-success" type="submit" >Agregar tarea</button>
                <button  class="btn btn-outline-danger" type="submit" @click="borrarprimeritem" >borrar primer item</button>
                <button  class="btn btn-outline-danger" type="submit" @click="borrarultimoitem" >borrar ultimo item</button>
    
            </form>
            
            <div class="d-flex flex-wrap p-2 mx-2">
                <contenedor-card :texto="item.name" v-for="item in misTareas"></contenedor-card> <!-- Pasamos item.name como prop texto -->
            </div>
                
        </div>

        </div>
    `,

    methods:{
        /* 
        Borra el primer item del array 
        */
        borrarprimeritem(){
            this.misTareas.splice(0,1);
            console.log("se borro el primer item")
        },

        /* 
        Borra el ultimo item del array
        */
        borrarultimoitem(){
            this.misTareas.splice(-1)[0];
            console.log("se borro el ultimo item")

        },

        /* 
        Agrega un item al final
        */

        agregaritem(){
            const items = { text: 'home', };
            this.misTareas.push(items);
            console.log("se agregó   un item")
        },
        addItem() {
            this.misTareas.push({...this.nuevaTarea});
            this.nuevaTarea.id++;
            this.nuevaTarea.name = '';
            console.log(this.misTareas)
          }

    }


})

//==================== hasta acá===========================


//==================== card ==========================
Vue.component('contenedor-card',{

    props: ['texto'], // Definimos la prop texto
    template:`
    <div>
        <div class="card mx-2" style="width: 18rem;">
                <div class="card-body ">
                <h3 class="card-title">{{texto}}</h3>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Agregar apuntes"></textarea>

                <ul class="list-group">
                    <li class="list-group-item">An item</li>

                </ul>
                <div class="d-flex justify-content-around">
                    <button href="#" class="btn btn-outline-primary">modificar</button>
                    <button href="#" class="btn btn-outline-danger">quitar</button>
                </div>

                
                
                </div>
                
            </div>
        </div>
    </div>
    
    `
})