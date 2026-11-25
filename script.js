
/* ============================================================
   Lógica interactiva. Los datos (nodos, eventosTiempo, fuentes)
   están en datos.js (tu script.js original, sin las funciones).
   ============================================================ */
// Datos integrados para que el sitio funcione sin un archivo datos.js aparte.
const nodos = [
 {id:"versalles",nombre:"Tratado de Versalles",tipo:"causa",descripcion:"Las condiciones impuestas a Alemania alimentaron el resentimiento nacionalista y fueron aprovechadas por el nazismo.",conexiones:["weimar","nazismo","crisis"]},
 {id:"crisis",nombre:"Crisis económica de 1929",tipo:"causa",descripcion:"La Gran Depresión agravó el desempleo y la desconfianza en las democracias, favoreciendo a movimientos extremistas.",conexiones:["nazismo","fascismo","weimar"]},
 {id:"weimar",nombre:"República de Weimar",tipo:"causa",descripcion:"La inestabilidad política y económica debilitó la democracia alemana y facilitó el ascenso nazi.",conexiones:["nazismo","versalles","crisis"]},
 {id:"mussolini",nombre:"Benito Mussolini",tipo:"actor",descripcion:"Líder fascista italiano que llegó al gobierno en 1922 y consolidó una dictadura.",conexiones:["fascismo","roma","etiopia"]},
 {id:"hitler",nombre:"Adolf Hitler",tipo:"actor",descripcion:"Líder del Partido Nazi, nombrado canciller en 1933, que instauró una dictadura en Alemania.",conexiones:["nazismo","polonia","munich"]},
 {id:"fascismo",nombre:"Fascismo italiano",tipo:"acontecimiento",descripcion:"Régimen autoritario ultranacionalista instaurado por Mussolini, caracterizado por represión y militarismo.",conexiones:["mussolini","roma","etiopia"]},
 {id:"nazismo",nombre:"Nazismo",tipo:"acontecimiento",descripcion:"Dictadura totalitaria alemana basada en racismo, antisemitismo, expansionismo y represión.",conexiones:["hitler","versalles","polonia"]},
 {id:"roma",nombre:"Marcha sobre Roma (1922)",tipo:"acontecimiento",descripcion:"La presión fascista llevó al rey a encargar a Mussolini la formación de gobierno.",conexiones:["mussolini","fascismo"]},
 {id:"etiopia",nombre:"Invasión de Etiopía (1935)",tipo:"acontecimiento",descripcion:"La agresión italiana mostró el expansionismo del régimen y la incapacidad internacional para frenarlo.",conexiones:["mussolini","fascismo"]},
 {id:"munich",nombre:"Conferencia de Múnich (1938)",tipo:"acontecimiento",descripcion:"Francia y Reino Unido aceptaron la cesión de los Sudetes a Alemania bajo la política de apaciguamiento.",conexiones:["hitler","nazismo","polonia"]},
 {id:"polonia",nombre:"Invasión de Polonia (1939)",tipo:"acontecimiento",descripcion:"La invasión alemana el 1 de septiembre de 1939 desencadenó las declaraciones de guerra de Francia y Reino Unido.",conexiones:["hitler","nazismo","munich"]},
 {id:"guerra",nombre:"Segunda Guerra Mundial",tipo:"consecuencia",descripcion:"La expansión militar y la agresión de las dictaduras contribuyeron decisivamente al inicio de la guerra en Europa.",conexiones:["polonia","nazismo","fascismo"]}
];

const eventosTiempo = [
 {anio:"1919",pais:"Alemania",titulo:"Tratado de Versalles",descripcion:"El tratado impuso reparaciones, límites militares y pérdidas territoriales a Alemania."},
 {anio:"1922",pais:"Italia",titulo:"Marcha sobre Roma",descripcion:"El rey Víctor Manuel III encargó a Mussolini formar gobierno."},
 {anio:"1923",pais:"Alemania",titulo:"Hiperinflación",descripcion:"La crisis económica erosionó los ahorros y la confianza en el sistema político."},
 {anio:"1929",pais:"Ambos",titulo:"Crisis económica mundial",descripcion:"La Gran Depresión agravó el desempleo y la crisis de las democracias."},
 {anio:"1933",pais:"Alemania",titulo:"Hitler es nombrado canciller",descripcion:"El 30 de enero Hitler llegó al cargo y después desmanteló las instituciones democráticas."},
 {anio:"1935",pais:"Italia",titulo:"Invasión de Etiopía",descripcion:"Italia inició una guerra de conquista en octubre."},
 {anio:"1936",pais:"Alemania",titulo:"Remilitarización de Renania",descripcion:"Alemania volvió a desplegar tropas en la zona desmilitarizada."},
 {anio:"1938",pais:"Alemania",titulo:"Anexión de Austria y Múnich",descripcion:"El Anschluss y la cesión de los Sudetes aumentaron la expansión alemana."},
 {anio:"1939",pais:"Alemania",titulo:"Invasión de Polonia",descripcion:"El 1 de septiembre comenzó la guerra en Europa; Francia y Reino Unido declararon la guerra el 3 de septiembre."},
 {anio:"1940",pais:"Italia",titulo:"Italia entra en la guerra",descripcion:"Italia declaró la guerra a Francia y Reino Unido el 10 de junio."}
];

const fuentes = [
 {autor:"United States Holocaust Memorial Museum.",titulo:"Holocaust Encyclopedia: Nazi Germany",editorial:"USHMM",url:"https://encyclopedia.ushmm.org/"},
 {autor:"Encyclopaedia Britannica.",titulo:"World War II; Fascism; Benito Mussolini",editorial:"Britannica",url:"https://www.britannica.com/"},
 {autor:"Imperial War Museums.",titulo:"Second World War",editorial:"IWM",url:"https://www.iwm.org.uk/history"}
];

const nombresTipos = { causa: "Causa", actor: "Actor", acontecimiento: "Acontecimiento", consecuencia: "Consecuencia" };
const coloresTipos = { causa: "#b9770e", actor: "#1e6b5c", acontecimiento: "#8b3a2f", consecuencia: "#44546a" };

/* Galería */
const galeria = [
  { src: "./img/versalles.jpg", anio: "1919", titulo: "Tratado de Versalles", texto: "Firma del tratado el 28 de junio de 1919: reparaciones, límites militares y responsabilidad de Alemania." },
  { src: "./img/marcha.jpg", anio: "1922", titulo: "Marcha sobre Roma", texto: "La presión fascista culminó con el encargo de formar gobierno a Mussolini." },
  { src: "./img/cancilleria.jpg", anio: "1933", titulo: "Hitler, canciller", texto: "Hitler fue nombrado canciller el 30 de enero de 1933." },
  { src: "./img/reichstag.jpg", anio: "1933", titulo: "Incendio del Reichstag", texto: "El incendio fue utilizado para justificar medidas represivas y la suspensión de libertades." },
  { src: "./img/etiopia.jpg", anio: "1935", titulo: "Invasión de Etiopía", texto: "Italia invadió Etiopía en octubre de 1935, en una campaña expansionista." },
  { src: "./img/munich.jpg", anio: "1938", titulo: "Conferencia de Múnich", texto: "El acuerdo de Múnich permitió la cesión de los Sudetes a Alemania." },
  { src: "./img/polonia.jpg", anio: "1939", titulo: "Invasión de Polonia", texto: "La invasión alemana de Polonia el 1 de septiembre de 1939 inició la guerra en Europa." },
  { src: "./img/normandia.jpg", anio: "1944", titulo: "Desembarco de Normandía", texto: "El 6 de junio de 1944 comenzó el desembarco aliado en Normandía." }
];

let filtroActivo = "todos", nodoSeleccionado = null, paisActivo = "todos";
const $ = function (s) { return document.querySelector(s); };
const buscarNodo = function (id) { return nodos.find(function (n) { return n.id === id; }); };

/* ---------- Red ---------- */
function renderNodos() {
  const c = $("#redContenedor"); c.innerHTML = "";
  const sel = buscarNodo(nodoSeleccionado);
  nodos.forEach(function (n) {
    if (filtroActivo !== "todos" && n.tipo !== filtroActivo) return;
    const b = document.createElement("button");
    b.type = "button"; b.className = "nodo nodo-" + n.tipo; b.textContent = n.nombre;
    if (sel) {
      if (n.id === sel.id) b.classList.add("seleccionado");
      else b.classList.add(sel.conexiones.indexOf(n.id) > -1 || n.conexiones.indexOf(sel.id) > -1 ? "conectado" : "atenuado");
    }
    b.addEventListener("click", function () { seleccionarNodo(n.id); });
    c.appendChild(b);
  });
}

function seleccionarNodo(id) {
  const n = buscarNodo(id);
  if (filtroActivo !== "todos" && n.tipo !== filtroActivo) {
    filtroActivo = "todos";
    document.querySelectorAll("#filtros .filtro-btn").forEach(function (b) { b.classList.toggle("activo", b.dataset.tipo === "todos"); });
  }
  nodoSeleccionado = id; renderNodos(); mostrarInfoNodo(id);
}

function mostrarInfoNodo(id) {
  const panel = $("#panelNodo"), nodo = buscarNodo(id);
  if (!nodo) { panel.innerHTML = '<p class="panel-placeholder">Nodo no encontrado.</p>'; return; }
  const lista = nodo.conexiones.map(buscarNodo).filter(Boolean).map(function (c) {
    return '<li><button class="chip" data-id="' + c.id + '">' + c.nombre + "</button>: " + c.descripcion + "</li>";
  }).join("");
  panel.innerHTML = '<span class="tipo-etiqueta" style="background-color:' + coloresTipos[nodo.tipo] + '">' + nombresTipos[nodo.tipo] + "</span>" +
    "<h4>" + nodo.nombre + "</h4><p>" + nodo.descripcion + "</p>" +
    "<p><strong>¿Por qué se conecta con estos elementos?</strong> (haz clic en uno para saltar a él)</p>" +
    '<ul class="conexiones-lista">' + lista + "</ul>";
  panel.querySelectorAll(".chip").forEach(function (ch) {
    ch.addEventListener("click", function () { seleccionarNodo(ch.dataset.id); });
  });
}

/* ---------- Línea de tiempo ---------- */
const observador = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visible"); observador.unobserve(e.target); } });
}, { threshold: 0.12 }) : null;

function observar(el) { if (observador) observador.observe(el); else el.classList.add("visible"); }

function renderLineaTiempo() {
  const lista = $("#lineaTiempo"); lista.innerHTML = "";
  eventosTiempo.forEach(function (ev) {
    if (paisActivo !== "todos" && ev.pais !== paisActivo && ev.pais !== "Ambos") return;
    const li = document.createElement("li"); li.className = "evento-tiempo";
    li.innerHTML = '<span class="anio">' + ev.anio + '</span><span class="pais-tag pais-' + ev.pais + '">' + ev.pais + "</span><h4>" + ev.titulo + "</h4><p>" + ev.descripcion + "</p>";
    li.addEventListener("click", function () { li.classList.toggle("abierto"); });
    lista.appendChild(li); observar(li);
  });
}

/* ---------- Fuentes ---------- */
function renderFuentes() {
  const lista = $("#listaFuentes"); lista.innerHTML = "";
  fuentes.forEach(function (f) {
    const li = document.createElement("li");
    li.innerHTML = "<strong>" + f.autor + "</strong> " + f.titulo + " " + f.editorial + (f.url ? ' <a href="' + f.url + '" target="_blank" rel="noopener">Consultar enlace</a>' : "");
    lista.appendChild(li);
  });
}

/* ---------- Galería y visor ---------- */
let fotoActual = 0;

function crearImagen(g) {
  const cont = document.createElement("div"); cont.style.height = "100%";
  const img = new Image(); img.alt = g.titulo; img.src = g.src;
  img.onerror = function () { cont.innerHTML = '<div class="sin-foto"><strong>' + g.anio + '</strong><span>' + g.titulo + '</span><small>Imagen no disponible</small></div>'; };
  cont.appendChild(img); return cont;
}

function renderGaleria() {
  const grid = $("#galeria-grid");
  galeria.forEach(function (g, i) {
    const b = document.createElement("button"); b.type = "button"; b.className = "foto";
    b.appendChild(crearImagen(g));
    const pie = document.createElement("div"); pie.className = "pie"; pie.textContent = g.anio + " · " + g.titulo;
    b.appendChild(pie);
    b.addEventListener("click", function () { abrirVisor(i); });
    grid.appendChild(b);
  });
}

function abrirVisor(i) {
  fotoActual = (i + galeria.length) % galeria.length;
  const g = galeria[fotoActual];
  $("#lbImg").innerHTML = ""; $("#lbImg").appendChild(crearImagen(g));
  $("#lbTxt").innerHTML = "<strong>" + g.anio + " · " + g.titulo + "</strong><br>" + g.texto;
  $("#lightbox").hidden = false;
}

function cerrarVisor() { $("#lightbox").hidden = true; }

/* ---------- Arranque ---------- */
document.addEventListener("DOMContentLoaded", function () {
  renderNodos(); renderLineaTiempo(); renderFuentes(); renderGaleria();

  document.querySelectorAll("[data-cuenta]").forEach(function (el) {
    const meta = el.dataset.cuenta === "nodos" ? nodos.length : eventosTiempo.length;
    el.textContent = meta;
  });

  document.querySelectorAll(".reveal").forEach(observar);

  const bn = document.querySelectorAll("#filtros .filtro-btn");
  bn.forEach(function (b) {
    b.addEventListener("click", function () {
      bn.forEach(function (x) { x.classList.remove("activo"); });
      b.classList.add("activo");
      filtroActivo = b.dataset.tipo;
      renderNodos();
    });
  });

  const bp = document.querySelectorAll("#filtrosPais .filtro-btn");
  bp.forEach(function (b) {
    b.addEventListener("click", function () {
      bp.forEach(function (x) { x.classList.remove("activo"); });
      b.classList.add("activo");
      paisActivo = b.dataset.pais;
      renderLineaTiempo();
    });
  });

  const nav = $("#mainNav");
  $("#menuToggle").addEventListener("click", function () { nav.classList.toggle("abierto"); });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("abierto"); });
  });

  $(".lb-cerrar").addEventListener("click", cerrarVisor);
  $(".lb-prev").addEventListener("click", function () { abrirVisor(fotoActual - 1); });
  $(".lb-next").addEventListener("click", function () { abrirVisor(fotoActual + 1); });
  $("#lightbox").addEventListener("click", function (e) {
    if (e.target.id === "lightbox") cerrarVisor();
  });

  document.addEventListener("keydown", function (e) {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") cerrarVisor();
    if (e.key === "ArrowLeft") abrirVisor(fotoActual - 1);
    if (e.key === "ArrowRight") abrirVisor(fotoActual + 1);
  });

  const arriba = $("#arriba"), prog = $("#progreso");
  const enlaces = Array.prototype.slice.call(nav.querySelectorAll("a"));

  window.addEventListener("scroll", function () {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (h > 0 ? window.scrollY / h * 100 : 0) + "%";
    arriba.hidden = window.scrollY < 600;
    let actual = null;
    enlaces.forEach(function (a) {
      const s = $(a.getAttribute("href"));
      if (s && s.getBoundingClientRect().top < 140) actual = a;
    });
    enlaces.forEach(function (a) { a.classList.toggle("activo", a === actual); });
  });

  arriba.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* ============ Preguntas (quiz) ============ */
const preguntasQuiz = [
  {
    pregunta: "¿Qué tratado impuso a Alemania la responsabilidad de la guerra, pérdidas territoriales y reparaciones?",
    opciones: ["Tratado de Brest-Litovsk", "Tratado de Versalles", "Tratado de Locarno", "Pacto de Múnich"],
    correcta: 1,
    explicacion: "Fue el Tratado de Versalles (28 de junio de 1919). Sus condiciones alimentaron el resentimiento que el nazismo aprovechó después."
  },
  {
    pregunta: "¿Qué hecho de octubre de 1922 llevó al rey Víctor Manuel III a encargar a Mussolini formar gobierno?",
    opciones: ["El asesinato de Matteotti", "La invasión de Etiopía", "La Marcha sobre Roma", "La Ley Acerbo"],
    correcta: 2,
    explicacion: "Fue la Marcha sobre Roma. Los fascistas ocuparon puntos estratégicos y presionaron al rey; el 29 de octubre Mussolini recibió el encargo. El asesinato de Matteotti ocurrió en 1924."
  },
  {
    pregunta: "¿Qué ley de marzo de 1933 permitió a Hitler aprobar normas sin la aprobación del Parlamento?",
    opciones: ["La Ley Habilitante", "El Decreto del Reichstag", "Las leyes de Núremberg", "La Constitución de Weimar"],
    correcta: 0,
    explicacion: "Fue la Ley Habilitante (23 de marzo de 1933). Eliminó los controles parlamentarios y concentró el poder en Hitler y sus ministros. El Decreto del Reichstag suspendió libertades, pero no dio poderes legislativos."
  },
  {
    pregunta: "En 1938, Francia y Reino Unido aceptaron en Múnich que Checoslovaquia cediera los Sudetes. ¿Cómo se llama esta política?",
    opciones: ["Contención", "Aislacionismo", "Blitzkrieg", "Apaciguamiento"],
    correcta: 3,
    explicacion: "Se llama política de apaciguamiento. Buscaba evitar la guerra cediendo ante Hitler, pero solo la retrasó: en marzo de 1939 Alemania ocupó el resto de Checoslovaquia."
  },
  {
    pregunta: "¿Qué acontecimiento marcó el inicio oficial de la Segunda Guerra Mundial en Europa?",
    opciones: ["La anexión de Austria", "La invasión alemana de Polonia", "La entrada de Italia en la guerra", "La remilitarización de Renania"],
    correcta: 1,
    explicacion: "Fue la invasión de Polonia el 1 de septiembre de 1939. Francia y Reino Unido declararon la guerra a Alemania el 3 de septiembre. Italia entró recién el 10 de junio de 1940."
  }
];

(function () {
  let actual = 0;
  let puntos = 0;
  let respondida = false;

  function montar() {
    const caja = document.getElementById("quizContenedor");
    if (!caja) return;

    if (actual >= preguntasQuiz.length) {
      mostrarResultado(caja);
      return;
    }

    const p = preguntasQuiz[actual];
    respondida = false;
    caja.innerHTML = "";

    const barra = document.createElement("div");
    barra.className = "quiz-barra";
    barra.innerHTML = '<div class="quiz-barra-relleno" style="width:' + (actual / preguntasQuiz.length * 100) + '%"></div>';
    caja.appendChild(barra);

    const info = document.createElement("p");
    info.className = "quiz-info";
    info.textContent = "Pregunta " + (actual + 1) + " de " + preguntasQuiz.length + " · Puntos: " + puntos;
    caja.appendChild(info);

    const titulo = document.createElement("h3");
    titulo.className = "quiz-pregunta";
    titulo.textContent = p.pregunta;
    caja.appendChild(titulo);

    const lista = document.createElement("div");
    lista.className = "quiz-opciones";
    p.opciones.forEach(function (texto, i) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-opcion";
      b.textContent = texto;
      b.addEventListener("click", function () {
        responder(i, lista, retro, siguiente);
      });
      lista.appendChild(b);
    });
    caja.appendChild(lista);

    const retro = document.createElement("div");
    retro.className = "quiz-retro";
    retro.setAttribute("aria-live", "polite");
    caja.appendChild(retro);

    const siguiente = document.createElement("button");
    siguiente.type = "button";
    siguiente.className = "quiz-siguiente";
    siguiente.style.display = "none";
    siguiente.textContent = actual === preguntasQuiz.length - 1 ? "Ver resultado" : "Siguiente pregunta";
    siguiente.addEventListener("click", function () {
      actual++;
      montar();
    });
    caja.appendChild(siguiente);
  }

  function responder(i, lista, retro, siguiente) {
    if (respondida) return;
    respondida = true;
    const p = preguntasQuiz[actual];
    const botones = lista.querySelectorAll(".quiz-opcion");
    botones.forEach(function (b) { b.disabled = true; });
    botones[p.correcta].classList.add("correcta");

    if (i === p.correcta) {
      puntos++;
      retro.className = "quiz-retro ok";
      retro.innerHTML = "<strong>¡Correcto! +1 punto.</strong> " + p.explicacion;
    } else {
      botones[i].classList.add("incorrecta");
      retro.className = "quiz-retro mal";
      retro.innerHTML = "<strong>No es correcto.</strong> " + p.explicacion;
    }
    siguiente.style.display = "inline-block";
  }

  function mostrarResultado(caja) {
    let mensaje = "Repasa la red de relaciones y la línea de tiempo, ¡y vuelve a intentarlo!";
    if (puntos === preguntasQuiz.length) mensaje = "¡Excelente! Dominas el tema.";
    else if (puntos >= 3) mensaje = "¡Muy bien! Ya casi lo dominas.";

    caja.innerHTML =
      '<div class="quiz-final">' +
      "<h3>Tu puntaje: " + puntos + " / " + preguntasQuiz.length + "</h3>" +
      "<p>" + mensaje + "</p>" +
      '<button type="button" class="quiz-siguiente" id="quizReiniciar">Intentar de nuevo</button>' +
      "</div>";

    document.getElementById("quizReiniciar").addEventListener("click", function () {
      actual = 0;
      puntos = 0;
      montar();
    });
  }

  document.addEventListener("DOMContentLoaded", montar);
})();

