function cambiarTitulo() {
  console.log("Llamamos a la funcion cambiarTitulo");
  // seleccionar el titulo h1 y cambiar el color de texto
  // let tituloH1 = document.querySelector('p');
  // let tituloH1 = document.getElementById('titulo');
  // let tituloH1 = document.getElementsByClassName('display-1');
  // let tituloH1 = document.getElementsByTagName('a');
  let tituloH1 = document.querySelector("#titulo");
  console.log(tituloH1);
  tituloH1.innerHTML = "Un nuevo titulo de prueba";
  // tituloH1.className += ' text-primary';
  tituloH1.className = "display-1 text-center text-primary";
}

function verMas() {
  console.log("Desde la funcion verMas");
  let btnVerMas =
    document.querySelector(
      "#btnVerMas"
    ); /*no es necesario que coincida la clase con el id*/
  let articulosPadre = document.getElementsByTagName("article");
  if (btnVerMas.className === "btn btn-primary") {
    // // crear parrafo
    // let parrafoNuevo = document.createElement("p"); /*crea --> <p></p>*/
    // console.log(parrafoNuevo);
    // // agregar texto al parrafo
    // parrafoNuevo.innerHTML =
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis error, modi consectetur provident esse nostrum libero minima sequi? Optio neque doloribus soluta eos porro ipsum nam in provident, praesentium cum esse facere ea inventore, cumque voluptates reprehenderit cupiditate pariatur natus illo. Quia minus sunt blanditiis quaerat mollitia odio facilis? Quisquam consequuntur ad laboriosam magnam, explicabo harum veritatis sed incidunt error optio consequatur voluptatem qui quas quis aperiam nihil, beatae libero est atque quia, minus excepturi asperiores! Culpa ducimus quae illum, ipsam tenetur nobis laudantium sequi accusantium dolor et minima impedit neque velit nam magnam maiores debitis harum facere, dolore atque perspiciatis error. Rem hic iste eaque reprehenderit facilis repellendus incidunt qui, autem enim dolorum recusandae corrupti eveniet labore saepe blanditiis corporis, nulla dignissimos facere minima. Placeat ea dolores recusandae. Iure corporis repellat ducimus ab voluptates possimus voluptas odio asperiores quia dolor vero, sapiente fuga similique culpa illo necessitatibus aspernatur.";
    // parrafoNuevo.className = "lead";

    // // insertar ese parrafo en el html
    // console.log(articulosPadre[1]);
    // articulosPadre[1].appendChild(parrafoNuevo);  //agregar un nuevo hijo es appendChild

    //2 - forma de crear elementos hijos (mas compacta)
    let parrafoNuevo = `<p class="lead">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam ipsam animi suscipit nostrum ea autem, consequuntur in? Dolore maiores sapiente possimus labore adipisci sequi qui quidem consectetur distinctio natus aspernatur eius, aut voluptates neque quo accusantium, pariatur ullam et cumque recusandae? Consequatur facere pariatur earum excepturi dolores dicta nemo tenetur sed fugit, reprehenderit exercitationem officiis eaque necessitatibus repellat praesentium numquam, quis, ea corporis expedita. Quasi, blanditiis soluta odit corrupti nesciunt ipsa delectus minus quo, sequi et optio! Nisi sequi eligendi voluptatibus cum non iste commodi neque quas fugit, ea molestiae assumenda saepe impedit veritatis dolore eaque aut molestias, libero perspiciatis quis sunt deleniti sint ratione! Ipsum tempora, perspiciatis magni consequuntur accusamus facere cumque praesentium et eaque? Neque officiis dignissimos perspiciatis soluta laboriosam dicta, consequatur natus. Modi officiis necessitatibus, veniam optio vitae, illum eveniet placeat laudantium explicabo neque nemo voluptate voluptatem amet laboriosam reiciendis rem quam, repudiandae voluptas officia enim.</p>`;

    articulosPadre[1].innerHTML = parrafoNuevo;
    //   traer el boton
    console.log(btnVerMas);
    btnVerMas.innerHTML = "Ocultar";
    btnVerMas.className = "btn  btn-danger";
  } else {
    console.log("La clase del boton es la danger");
    // eliminar el nodo del parrafo (nuevo)
    console.log(articulosPadre[1].hasChildNodes());
    console.log(articulosPadre[1].children);
    // eliminamos efectivamente el nodo
    if (articulosPadre[1].hasChildNodes()) {
      //if(true)
      articulosPadre[1].removeChild(articulosPadre[1].children[2]); //eliminar un nodo es removeChild
    }

    // cambiar el texto y la estetica del boton
    btnVerMas.innerHTML = "Ver mas";
    btnVerMas.className = "btn  btn-primary";
  }
}
