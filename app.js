Vue.component('contenedor-card',{

    data:function(){
        return{
            texto:"hola",

        }
    },
    methods: {
        
    },
    template:`
    <div>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{texto }}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    
    `
})

Vue.component( 'prueba-array', {
    data: function(){
        return{
            lank:[
                { text: 'home', url:'#/home', enable: true},  
                { text: 'mi info', url:'#/abaut', enable: false},
                { text: 'configuración', url:'#/configuración', enable: false},
    
            ]
        }
    },

    template:`
        <div>
            <li v-for="item in lank" class="nav-item" >
                <a class="nav-link active" aria-current="page" href="#">{{item.text}}</a>
            </li>

            <button  class="btn btn-outline-danger" type="submit" @click="borrarprimeritem" >borrar primer item</button>
            <button  class="btn btn-outline-danger" type="submit" @click="borrarultimoitem" >borrar ultimo item</button>
            <button  class="btn btn-outline-success" type="submit" @click="agregaritem" >agregar item</button>
        </div>
    `,

    methods:{
        /* 
        Borra el primer item del array 
        */
        borrarprimeritem(){
            this.lank.splice(0,1);
            console.log("se borro el primer item")
        },

        /* 
        Borra el ultimo item del array
        */
        borrarultimoitem(){
            this.lank.splice(-1)[0];
            console.log("se borro el ultimo item")

        },

        /* 
        Agrega un item al final
        */

        agregaritem(){
            const items = { text: 'home', url:'#/home', enable: true};
            this.lank.push(items);
            console.log("se agregó   un item")

        }
    }


})

const app = new Vue({
    el:'#contenedor',
    data:{

        //------------datos---------- 
        texto:'hola',
        login: false,

        link:[
            { text: 'home', url:'#/home', enable: true},  
            { text: 'mi info', url:'#/abaut', enable: false},
            { text: 'configuración', url:'#/configuración', enable: false},

        ],

        

        estadologin: false,
    },


    methods: {

        //------------metodos y funciones---------- 

        sesion(){
            if(!this.login){
                this.mostrarpanellogin();
            }else{
                
            this.login = !this.login;
            }
        },

        close(){
            this.login=false
        },
        
        iniciosesion(){
            this.login= true;
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