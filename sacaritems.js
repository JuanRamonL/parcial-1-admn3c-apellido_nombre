Vue.component( 'prueba-array', {
    data: function(){
        return{
            lank:[]
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