Vue.component('ventana-modal',{
    template:`
        <div v-if="estadologin" class="modal" tabindex="-1" style="display: block;">
            <p>estoy vivo</p>
            
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Inicio de sesión</h5>
                  
                  <button type="button" class="btn-close" aria-label="Close"  @click="cerrarPanelLogin" ></button>
                  
                  </div>
                <div class="modal-body">
                  <p>ingrese sus datos</p>
                  <form action="">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="usuario" placeholder="Usuario">
                        <label for="usuario">Usuario</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="password" autocomplete="contraseña" name="contraseña" class="form-control" id="contraseña" placeholder="contraseña" @keyup.enter="inicioDeSesion">
                        <label for="contraseña">contraseña</label>
                      </div>
                  </form>
                </div>
                
                <div class="modal-footer">  
                  <button type="button" class="btn btn-outline-success"  @click="inicioDeSesion">Iniciar sesión</button>
                  <button type="button" class="btn btn-outline-danger"  @click="cerrarPanelLogin">cancelar</button>
                </div>
                
              </div>
            </div>
        </div>`,
        
        props:[
            'estadologin','cerrarPanelLogin','inicioSesion',
        ],

        methods: {
          inicioDeSesion() {
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 1000);
            })
              .then(() => {
                console.log("Autenticando al servidor");
                this.inicioSesion();
                this.$emit('autenticar', true);
              })
              .catch(() => {
                console.log("No se autenticó");
                this.$emit('autenticar', false);
              });
          }
        },
        data: function(){
            return{
                
            }
        },

        //muestra si el componenete se monto en la aplicacion
        beforeMount(){
            console.log("se monto login-modal")
        }
})