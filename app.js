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
        close(){
            this.login=false
        },
        iniciosesion(){
            this.login= true;
            this.estadologin= false
        },

        envio(){
            console.log("se fue")
        },
       
        mostrarpanellogin(){
            this.estadologin= true
           },
        cerrarpanellogin(){
            this.estadologin= false
        }
    }
        
  })