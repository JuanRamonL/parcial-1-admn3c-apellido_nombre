Vue.component('pantalla-inicio', {
    data: function() {
      return {
        titulo: "Tus tareas en un solo lugar",
        descripcion: "Aquí puedes gestionar y organizar tus tareas diarias.",
        textoCards: [
          {
            titulo: "Ingresá",
            descripcion: "ingresar y crea nuevas tareas y organizarlas según tus necesidades.",
          },
          {
            titulo: "Creá",
            descripcion: "puedes crear nuevas tareas personalizadas y asignarles diferentes categorías.",
          },
          {
            titulo: "Modificá",
            descripcion: "puedes modificar y actualizar tus tareas existentes en cuanto quieras",
          }
        ]
      }
    },
    template: `
      <div>
        <section class="container">
          <div class="container px-4 p-2 text-center" id="custom-cards">
            <h2 class="pt-5 fw-bold">{{ titulo }}</h2>
            <h3 class="fs-5">{{ descripcion }}</h3>
            <div class="row row-cols-1 row-cols-lg-3 d-flex justify-content-center align-items-center py-5">
              <div class="col my-2" v-for="item in textoCards" :key="item.titulo">
                <div class="h-100 overflow-hidden text-white bg-dark rounded-5" id="card1">
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="mb-4 fw-bold">{{ item.titulo }}</h3>
                    <p>{{ item.descripcion }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    `,
  });
  