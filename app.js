let app = new Vue({
    el:'#contenedor',
    data:{
        texto:'hola',


        login: true,


        link:[
            { text: 'home', url:'/home', enable: true},  
            { text: 'abaut', url:'/abaut', enable: false}, 
        ]


    }

  })