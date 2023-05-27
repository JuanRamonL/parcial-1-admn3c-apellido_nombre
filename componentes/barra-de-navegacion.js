Vue.component('barra-de-navegacion', {
    template: `
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid " id="bgColor">
          <a class="navbar-brand" href="#"><img src="img/logo.png" alt="logo" width="50px"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 p-3 " >
              <li v-for="item in link" class="nav-item" v-if="item.enable || login">
                <a class="nav-link active" aria-current="page" href="#">{{item.text}}</a>
              </li>        
            </ul>
            <button type="submit" :class="'btn btn-outline-' + (login ? 'danger' : 'success')" @click="sesion">
              {{ login ? 'Cerrar sesión' : 'Iniciar sesión'}}
            </button>
          </div>
        </div>
      </nav>
    `,
    props:[
        'login','link','sesion',
    ],
  })