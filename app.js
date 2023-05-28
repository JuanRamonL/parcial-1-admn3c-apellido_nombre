const home = {
    template:`
    <div id="contenedor">
        <h1>hola mundo, estoy vivo y en home</h1>
    </div>
    `,
};


const mis_tareas = {
    template:`
        <mis-tareas></mis-tareas>

    `,
};

/*
    const configuración = {
        template:`
        <h1>hola mundo, y en configuracion</h1>`,
    };
*/



const router = new VueRouter({
    routes:
    [
        {path:'/home', component: home },
        {path:'/mis_tareas', component: mis_tareas },
        //{path:'/configuración', component: configuración },


    ]
});



const app = new Vue({
    el:'#contenedor',
    router,
    data:{

        //------------datos---------- 
        texto:'hola',
        login: false,

        link:[
            { text: 'home', url:'/home', enable: true},  
            { text: 'mis tareas', url:'/mis_tareas', enable: false},
            //{ text: 'configuración', url:'/configuración', enable: false},

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

        autenticar(status){
            if(status)
            console.log('se autenticó')
        },

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


