const app = new Vue({
    el:'#contenedor',
    data:{
        texto:'hola',


        login: true,

        link:[
            { text: 'home', url:'#/home', enable: true},  
            { text: 'mi info', url:'#/abaut', enable: false},
            { text: 'configuración', url:'#/configuración', enable: false},

        ]
    },


    methods: {
        textochau(){
            this.texto= 'chau'
        },
        
        open(){
            this.login=false
        },
        close(){
            this.login= true
        },

        envio(){
            console.log("se fue")
        }
    },
        
  })