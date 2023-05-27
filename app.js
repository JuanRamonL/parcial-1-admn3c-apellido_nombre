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
        
        inicioSesion(){
            this.login= true;
            //localStorage cambio de valor
            localStorage.setItem('login','true');
            this.estadologin= false
        }, 

        mostrarpanellogin(){
            this.estadologin= true
           },
        cerrarPanelLogin(){
            this.estadologin= false
        },
        envio(){
            console.log("se envio")
        },


        
    }
        
  }) 


