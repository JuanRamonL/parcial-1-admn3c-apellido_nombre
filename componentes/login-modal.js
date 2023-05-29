const vsva710 = "root",
      cacatua = "12345" 

Vue.component('ventana-modal', {
  template: `
    <form @keyup.enter="inicioDeSesion">
      <div v-if="estadologin" class="modal" tabindex="-1" style="display: block;">
        <p>estoy vivo</p>
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title">Inicio de sesión</h5>
              <button type="button" class="btn-close" aria-label="Close" @click="cerrarPanelLogin"></button>
            </div>
            
            <div class="modal-body">
              <p>ingrese sus datos</p>
              <form action="">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="usuario" placeholder="Usuario" v-model="usuario">
                  <label for="usuario">usuario</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" autocomplete="contraseña" name="contraseña" class="form-control" id="contraseña" placeholder="contraseña" v-model="contraseña" @keyup.enter="inicioDeSesion">
                  <label for="contraseña">contraseña</label>
                </div>
              </form>
            </div>

            <div class="errores mx-2 my-1 p-2">
              <div v-for="error in errores" class="alert alert-danger" role="alert">
                {{error}}
              </div>
            </div>

            <div class="modal-footer">  
              <button type="button" class="btn btn-outline-success" @click="inicioDeSesion">Iniciar sesión</button>
              <button type="button" class="btn btn-outline-danger" @click="cerrarPanelLogin">cancelar</button>
            </div>

            

          </div>
        </div>
      </div>
    </form>`,
        
  props: ['estadologin', 'cerrarPanelLogin', 'inicioSesion'],

  methods: {
    inicioDeSesion() {
      this.errores= [];

      if (this.contraseña !== cacatua) {
        this.errores.push("la contraseña es incorrecta")
        return;
      };
      if (this.usuario !== vsva710) {
        this.errores.push("el usuario es incorrecto")
        return;
      };

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

  data() {
    return {
      usuario: "",
      contraseña: "",
      errores:[]
    };

  },

  // Muestra si el componente se montó en la aplicación
  beforeMount() {
    console.log("Se montó login-modal");
  }
});
