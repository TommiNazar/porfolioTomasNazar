/*----------------colores bg------------*/

const color1 = document.getElementById("color1");
color1.addEventListener(`click`, () =>{
    
    const body = document.getElementById("body");
    body.style.background = "red"
    });

const color2 = document.getElementById("color2");
color2.addEventListener(`click`, () =>{
        
    const body = document.getElementById("body");
    body.style.background = "blue"
});

const color3 = document.getElementById("color3");
color3.addEventListener(`click`, () =>{
        
    const body = document.getElementById("body");
    body.style.background = "green"
});

const color4 = document.getElementById("color4");
color4.addEventListener(`click`, () =>{
        
    const body = document.getElementById("body");
    body.style.background = "whitesmoke"
});

const color5 = document.getElementById("color5");
color5.addEventListener(`click`, () =>{
        
    const body = document.getElementById("body");
    body.style.background = "black"
});





/*----------------home------------*/
const navHome = document.getElementById("navHome");

navHome.addEventListener(`click`, () =>{
    home();
    });

function home (){
    
    const contenido = document.getElementById("contenido");

    contenido.innerHTM = "";
    contenido.innerHTML=`
        <div class="home" id="home">
            <h1>Bienvenido!!!</h1>
            <p> Soy Tomas Nazar, mucho gusto! programador frontend, actualmente estoy incursionando en el backend,
                de animo emprendedor, me gusta crear, planificar y ejecutar una idea de proyecto junto a personas que apuestan a lo mismo.
                En este porfolio podras ver algunos de los proyectos tanto como freelance como personales he realizado.
                El entusiasmo, el compromiso, el seguir aprendiendo, la honestidad y el esfuerzo son algunos de los aportes que estoy dispuesta a dar en mi día a día.
                
            </p>

        </div>`;


}

/*----------------sobre  mi------------*/

const navSobreMi = document.getElementById("navSobreMi");

navSobreMi.addEventListener(`click`, () =>{
    sobreMi();
    });

function sobreMi(){
    const contenido = document.getElementById("contenido");

    contenido.innerHTM = "";
    contenido.innerHTML=`
    <div class="sobreMi" id="sobreMi">
    <h1>Hola soy Tommi</h1>
    <p>programador frontend, actualmente estoy incursionando en el backend,
        soy un apacionado por la tecnologia y la programacion, 
        actualmente estoy buscando ingresar a un equipo de trabajo donde
        pueda crecer y dar lo mejor de mi. Mi experiencia ademas del estudio son algunos trabajos
        freelance y proyectos propios.<br>
        
    </p>
    <p><strong>Algunos lenguajes que trabajo son</strong></p>
        <div class="lenguajes">
                <div class="colLenguaje">
                    <div class="lenguaje">html <img src="./imagenes/html.png" alt=""></div>
                    <div class="lenguaje">css <img src="./imagenes/css.png" alt=""></div>
                    <div class="lenguaje">javascript <img src="./imagenes/javascript.png" alt=""></div>
                </div>
                <div class="colLenguaje">
                    <div class="lenguaje">bootstrap <img src="./imagenes/Bootstrap.png" alt=""style="width: 20%;"></div>
                    <div class="lenguaje">python <img src="./imagenes/Python.png" alt=""style="width: 13%;"></div>
                    <div class="lenguaje">react <img src="./imagenes/react.png" alt="" style="width: 13%;"></div>
                </div>
                <div class="colLenguaje">
                    <div class="lenguaje">arduino <img src="./imagenes/arduino.png" alt=""style="width: 20%;"></div>
                    <div class="lenguaje">django <img src="./imagenes/django.png" alt=""style="width: 30%;"></div>
                    <div class="lenguaje">sass <img src="./imagenes/sass.png" alt=""style="width: 30%;"></div>
                </div>
            
        </div>

    <p>dejo me CV donde podran ver tambien mi experienza fuera del rubro <a href="">CV</a></p>
    <p>tambien les dejo a mano mi pag de github donde podran ver varios trabajos <a href="https://github.com/TommiNazar" target="_blank"><img src="./imagenes/git.png" alt="" style="width: 3%;"></a></p>


</div>`;


}


/*----------------contacto------------*/
const navContacto = document.getElementById("navContacto");

navContacto.addEventListener(`click`, () =>{
    contacto();
    });

function contacto (){
    
    const contenido = document.getElementById("contenido");

    contenido.innerHTM = "";
    contenido.innerHTML=`
            <div class="contacto">
                <h3><strong>Contacto</strong></h3>
                <p>Gracias por tu tiempo</p>
                <p>Estoy a disposicion</p>
                
                <ul>
                    <li>+54 9 351 5942866</li>
                    <li>tomminazar@gmail</li>
                </ul>
             </div>`;


}



/*----------------proyectos------------*/

const navProyectos = document.getElementById("navProyectos");

navProyectos.addEventListener(`click`, () =>{
    proyectos1();
    });


function proyectos1 (){
    
    const contenido = document.getElementById("contenido");
    
    contenido.innerHTM = "";
    contenido.innerHTML=`
            <div class="proyectosconteiner">
                <div class="">
                    <div class="proyecto" >
                        <h3>Pagina Magica</h3>
                        <p>Pagina interactiva que le realiza al usuario trucos de magia, realizada con HTML, CSS y Javascript</p>
                        <button id="proyecto2">ir al proyeto</button>
                    </div>
                    <div class="proyecto">
                        <h3>Escuela BD</h3>
                        <p>AppWeb de una escuela de cursos con CRUD, donde se manipula la BD de la misma, realizada con Django, HTML, CSS, Bootstrap</p>
                        <button id="proyecto2">ir al proyeto</button>
                    </div>
                </div>
                <div>
                    <div class="proyecto">
                        <h3>JureArquitectura</h3>
                        <p>Pagina informativa del estudio de arquitectura Jure, realizada con HTML, CSS, SASS, Bootstrap</p>
                        <button id="proyecto3">ir al proyeto</button>
                    </div>
                    <div class="proyecto">
                        <h3>Este Porfolio</h3>
                        <p>Pagina dinamica donde muestra el Porfilio que esta mirando, realizada con HTML, CSS y Javascript</p>
                        <button id="proyecto4">ir al proyeto</button>
                    </div>
                </div>
            <button class="siguienteproy" id="siguienteProy">Siguiente</button>`;





    
            const siguienteProy = document.getElementById("siguienteProy");

            siguienteProy.addEventListener(`click`, () =>{
                    proyectos2();
                    });
            
            function proyectos2 (){
                
                    const contenido = document.getElementById("contenido");
                        
                    contenido.innerHTM = "";
                    contenido.innerHTML=`
                                <div class="proyectosconteiner">
                                    <div class="">
                                        <div class="proyecto">
                                            <h3>Mago Tommi</h3>
                                            <p>Pagina informativa del artista "Mago Tommi", realizada con HTML, CSS, SASS, Bootstrap</p>
                                            <button id="proyecto5">ir al proyeto</button>
                                        </div>
                                        <div class="proyecto">
                                            <h3>Sherlock Holmes</h3>
                                            <p>Pagina estatica cuyo fin es mostrar la coleccion de libros y cuentos de sherlock holmes, relizado con HTML, CSS, REACT</p>
                                            <button id="proyecto6">ir al proyeto</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="proyecto">
                                            <h3>Encuentra el Tesoro</h3>
                                            <p>Juego encuentra el tesoro utilizando frio / caliente deacuerdo a la proximidad del click, realizado con Canvas, HTML, CSS, Javascript</p>
                                            <button id="proyecto7">ir al proyeto</button>
                                        </div>
                                        <div class="proyecto">
                                            <h3>Juego de Tragos</h3>
                                            <p>clasico juego de tragos realizado con una wheel spin, realizado con HTML, CSS, Javascript</p>
                                            <button id="proyecto8">ir al proyeto</button>
                                        </div>
                                    </div>
                                <button class="anteriorProy" id="anteriorProy">Atras</button>`;
                    
                    
                    
                    
                    
                    
                    const anteriorProy = document.getElementById("anteriorProy");
                    anteriorProy.addEventListener(`click`, () =>{
                            proyectos1();
                    });
                        
             }
            
             
    }

