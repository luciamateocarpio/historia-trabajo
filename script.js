/* ============================================================
   Página histórica interactiva
   Todo el contenido de esta página sale del documento entregado.
   ============================================================ */

/* Cada objeto es un nodo de la red histórica. */
const nodos = [
  {
    id: "primera-guerra",
    nombre: "Herencia de la Primera Guerra Mundial",
    tipo: "causa",
    descripcion: "La guerra dejó cerca de 10 millones de militares muertos, economías devastadas, deudas enormes y cuatro imperios desaparecidos.",
    conexiones: ["versalles", "crisis-italia", "weimar"]
  },
  {
    id: "versalles",
    nombre: "Tratado de Versalles (1919)",
    tipo: "causa",
    descripcion: "Firmado el 28 de junio de 1919, impuso a Alemania la responsabilidad por la guerra, pérdidas territoriales, límites militares, reparaciones de 132.000 millones de marcos oro y la prohibición de unirse a Austria.",
    conexiones: ["weimar", "crisis-1923", "hitler", "expansion-alemana"]
  },
  {
    id: "crisis-1923",
    nombre: "Crisis e hiperinflación de 1923",
    tipo: "causa",
    descripcion: "Francia y Bélgica ocuparon el Ruhr por el incumplimiento de las reparaciones. La hiperinflación destruyó los ahorros de la clase media y debilitó la confianza en las instituciones.",
    conexiones: ["weimar", "hitler", "partido-nazi"]
  },
  {
    id: "crisis-1929",
    nombre: "Gran Depresión de 1929",
    tipo: "causa",
    descripcion: "El crack de Wall Street provocó el retiro de préstamos estadounidenses y el hundimiento de la economía alemana. La producción industrial cayó, aumentó el desempleo y crecieron las opciones extremistas.",
    conexiones: ["partido-nazi", "hitler", "crisis-democracias"]
  },
  {
    id: "miedo-comunismo",
    nombre: "Miedo al comunismo",
    tipo: "causa",
    descripcion: "La Revolución Rusa, la creación de la Internacional Comunista y las revueltas de posguerra llevaron a empresarios, terratenientes y sectores conservadores a apoyar movimientos de extrema derecha.",
    conexiones: ["fascismo", "partido-nazi", "mussolini"]
  },
  {
    id: "crisis-democracias",
    nombre: "Crisis de las democracias",
    tipo: "causa",
    descripcion: "En las décadas de 1920 y 1930 muchos países pasaron a regímenes autoritarios. Esto redujo la confianza en el sistema parlamentario y facilitó el avance de soluciones autoritarias.",
    conexiones: ["weimar", "fascismo", "partido-nazi"]
  },
  {
    id: "weimar",
    nombre: "República de Weimar",
    tipo: "actor",
    descripcion: "Fue la democracia alemana establecida después de la caída del Imperio en noviembre de 1918. Tuvo violencia política, inestabilidad, hiperinflación y dependencia del capital extranjero.",
    conexiones: ["versalles", "crisis-1923", "crisis-1929", "hitler"]
  },
  {
    id: "mussolini",
    nombre: "Benito Mussolini",
    tipo: "actor",
    descripcion: "Fundó en marzo de 1919 los Fasci Italiani di Combattimento y lideró el fascismo italiano. Fue encargado de formar gobierno después de la Marcha sobre Roma en octubre de 1922.",
    conexiones: ["fascismo", "marcha-roma", "dictadura-italia", "expansion-italia"]
  },
  {
    id: "fascismo",
    nombre: "Fascismo italiano",
    tipo: "actor",
    descripcion: "Movimiento basado en nacionalismo extremo, autoritarismo, disciplina militar, obediencia al líder, violencia, propaganda, anticomunismo e imperialismo colonial.",
    conexiones: ["mussolini", "camisas-negras", "marcha-roma", "dictadura-italia", "expansion-italia"]
  },
  {
    id: "camisas-negras",
    nombre: "Camisas Negras",
    tipo: "actor",
    descripcion: "Grupos organizados que atacaban y amenazaban a adversarios políticos. La violencia y la intimidación fueron instrumentos del movimiento fascista.",
    conexiones: ["fascismo", "marcha-roma", "dictadura-italia"]
  },
  {
    id: "hitler",
    nombre: "Adolf Hitler",
    tipo: "actor",
    descripcion: "Principal dirigente del Partido Nacionalsocialista Obrero Alemán. Defendía el nacionalismo extremo, el autoritarismo, el antisemitismo, el racismo y la expansión territorial alemana.",
    conexiones: ["partido-nazi", "weimar", "canciller", "reichstag", "ley-habilitante", "expansion-alemana"]
  },
  {
    id: "partido-nazi",
    nombre: "Partido Nazi (NSDAP)",
    tipo: "actor",
    descripcion: "Partido que aprovechó el descontento de la población alemana. Subió del 2,6 % de los votos en 1928 al 37,3 % en julio de 1932.",
    conexiones: ["crisis-1929", "hitler", "weimar", "reichstag", "ley-habilitante"]
  },
  {
    id: "marcha-roma",
    nombre: "Marcha sobre Roma (1922)",
    tipo: "acontecimiento",
    descripcion: "Los fascistas ocuparon estaciones, edificios públicos y otros puntos estratégicos. El rey Víctor Manuel III encargó a Mussolini formar un nuevo gobierno el 29 de octubre.",
    conexiones: ["mussolini", "camisas-negras", "fascismo", "dictadura-italia"]
  },
  {
    id: "dictadura-italia",
    nombre: "Dictadura fascista italiana (1925-1926)",
    tipo: "acontecimiento",
    descripcion: "Después del asesinato de Giacomo Matteotti, Mussolini asumió la responsabilidad política. Las leyes fascistísimas restringieron la prensa, eliminaron partidos y concentraron el poder.",
    conexiones: ["mussolini", "marcha-roma", "fascismo", "matteotti"]
  },
  {
    id: "matteotti",
    nombre: "Asesinato de Giacomo Matteotti (1924)",
    tipo: "acontecimiento",
    descripcion: "Matteotti denunció públicamente la violencia y las irregularidades electorales. Fue secuestrado y asesinado el 10 de junio de 1924 por un grupo de fascistas.",
    conexiones: ["dictadura-italia", "mussolini"]
  },
  {
    id: "canciller",
    nombre: "Hitler canciller (30 de enero de 1933)",
    tipo: "acontecimiento",
    descripcion: "Paul von Hindenburg nombró canciller a Hitler después de negociaciones con dirigentes conservadores. No llegó mediante una elección directa ni obtuvo una mayoría absoluta.",
    conexiones: ["hitler", "partido-nazi", "reichstag", "ley-habilitante"]
  },
  {
    id: "reichstag",
    nombre: "Incendio y decreto del Reichstag (1933)",
    tipo: "acontecimiento",
    descripcion: "El incendio del 27 de febrero fue usado para justificar el Decreto para la Protección del Pueblo y del Estado, que suspendió libertades como expresión, prensa, reunión y privacidad.",
    conexiones: ["hitler", "partido-nazi", "ley-habilitante", "tercer-reich"]
  },
  {
    id: "ley-habilitante",
    nombre: "Ley Habilitante (23 de marzo de 1933)",
    tipo: "acontecimiento",
    descripcion: "Permitió al gobierno aprobar normas sin la aprobación del Parlamento, incluso contra la Constitución. Eliminó los controles parlamentarios y concentró el poder en Hitler y sus ministros.",
    conexiones: ["hitler", "reichstag", "tercer-reich"]
  },
  {
    id: "tercer-reich",
    nombre: "Instauración del Tercer Reich (1933-1934)",
    tipo: "consecuencia",
    descripcion: "El régimen nazi centralizó el poder, eliminó partidos y sindicatos independientes, utilizó la Gestapo y las SS, y difundió el Führerprinzip. Tras la muerte de Hindenburg en 1934, Hitler reunió las funciones de presidente y canciller.",
    conexiones: ["hitler", "ley-habilitante", "control-social", "expansion-alemana"]
  },
  {
    id: "control-social",
    nombre: "Propaganda y represión",
    tipo: "consecuencia",
    descripcion: "Alemania e Italia controlaron la educación, la cultura, la prensa y el tiempo libre. Utilizaron organizaciones juveniles, propaganda, censura, vigilancia policial y castigo de la oposición.",
    conexiones: ["fascismo", "tercer-reich", "mussolini", "hitler"]
  },
  {
    id: "expansion-italia",
    nombre: "Invasión de Etiopía (1935-1936)",
    tipo: "acontecimiento",
    descripcion: "Italia invadió Etiopía en octubre de 1935 y ocupó Addis Abeba en mayo de 1936. Las sanciones internacionales no detuvieron la agresión y la Sociedad de Naciones quedó desacreditada.",
    conexiones: ["mussolini", "fascismo", "eje-roma-berlin", "debilidad-internacional"]
  },
  {
    id: "debilidad-internacional",
    nombre: "Debilidad de la Sociedad de Naciones",
    tipo: "causa",
    descripcion: "La Sociedad de Naciones no contó con Estados Unidos ni con un ejército propio. Sus decisiones requerían unanimidad y no logró frenar las agresiones de Japón, Italia y Alemania.",
    conexiones: ["expansion-italia", "expansion-alemana", "apaciguamiento"]
  },
  {
    id: "expansion-alemana",
    nombre: "Expansionismo alemán (1935-1939)",
    tipo: "acontecimiento",
    descripcion: "Alemania reintrodujo el servicio militar en 1935, remilitarizó Renania en 1936, anexó Austria en marzo de 1938 y ocupó el resto de Checoslovaquia en marzo de 1939.",
    conexiones: ["hitler", "versalles", "debilidad-internacional", "apaciguamiento", "invasion-polonia"]
  },
  {
    id: "eje-roma-berlin",
    nombre: "Eje Roma-Berlín y Pacto de Acero",
    tipo: "acontecimiento",
    descripcion: "Alemania e Italia establecieron el Eje Roma-Berlín en octubre de 1936. El Pacto de Acero, firmado el 22 de mayo de 1939, convirtió su relación en una alianza política y militar formal.",
    conexiones: ["mussolini", "hitler", "expansion-italia", "expansion-alemana", "invasion-polonia"]
  },
  {
    id: "apaciguamiento",
    nombre: "Política de apaciguamiento",
    tipo: "acontecimiento",
    descripcion: "En septiembre de 1938, Alemania, Italia, Francia y Reino Unido acordaron en Múnich que Checoslovaquia cediera los Sudetes. La política evitó temporalmente la guerra, pero no detuvo a Hitler.",
    conexiones: ["expansion-alemana", "debilidad-internacional", "invasion-polonia"]
  },
  {
    id: "invasion-polonia",
    nombre: "Invasión de Polonia (1 de septiembre de 1939)",
    tipo: "acontecimiento",
    descripcion: "Alemania invadió Polonia mediante la Blitzkrieg. Francia y Reino Unido declararon la guerra a Alemania el 3 de septiembre, iniciando oficialmente la Segunda Guerra Mundial.",
    conexiones: ["hitler", "expansion-alemana", "eje-roma-berlin", "guerra-europa"]
  },
  {
    id: "guerra-europa",
    nombre: "Estallido de la Segunda Guerra Mundial",
    tipo: "consecuencia",
    descripcion: "El conflicto iniciado en 1939 se amplió durante los primeros años con las campañas militares y políticas expansionistas de Alemania, Italia y Japón.",
    conexiones: ["invasion-polonia", "eje-roma-berlin", "caida-regimenes"]
  },
  {
    id: "caida-regimenes",
    nombre: "Caída del fascismo y del nazismo (1943-1945)",
    tipo: "consecuencia",
    descripcion: "Los fracasos militares debilitaron a ambos regímenes. Mussolini fue destituido y arrestado el 25 de julio de 1943; Alemania se rindió el 7 de mayo de 1945 y Hitler se suicidó el 30 de abril.",
    conexiones: ["guerra-europa", "mussolini", "hitler", "onu"]
  },
  {
    id: "onu",
    nombre: "Creación de la ONU (octubre de 1945)",
    tipo: "consecuencia",
    descripcion: "Después de la guerra se fundó la Organización de las Naciones Unidas para promover la paz, la seguridad, la cooperación entre países y evitar otra guerra mundial.",
    conexiones: ["caida-regimenes", "nuevo-orden"]
  },
  {
    id: "nuevo-orden",
    nombre: "Nuevo orden mundial",
    tipo: "consecuencia",
    descripcion: "Estados Unidos y la Unión Soviética se convirtieron en las dos principales superpotencias. Alemania quedó dividida en cuatro zonas de ocupación y Europa perdió parte de su influencia política y económica.",
    conexiones: ["caida-regimenes", "onu"]
  }
];

/* Eventos de la línea de tiempo, tomados del documento. */
const eventosTiempo = [
  { anio: "1918", pais: "Ambos", titulo: "Fin de la Primera Guerra Mundial", descripcion: "La derrota alemana deja una Europa devastada, con deudas, pérdidas humanas y cuatro imperios desaparecidos." },
  { anio: "1919", pais: "Alemania", titulo: "Tratado de Versalles y República de Weimar", descripcion: "Se firma el Tratado de Versalles el 28 de junio y nace una democracia alemana con problemas de estabilidad." },
  { anio: "1919", pais: "Italia", titulo: "Fundación de los Fasci Italiani di Combattimento", descripcion: "En marzo, Benito Mussolini funda en Milán el movimiento que dará origen al Partido Nacional Fascista." },
  { anio: "1922", pais: "Italia", titulo: "Marcha sobre Roma", descripcion: "El rey Víctor Manuel III encarga a Mussolini formar gobierno el 29 de octubre." },
  { anio: "1923", pais: "Alemania", titulo: "Crisis e hiperinflación", descripcion: "La ocupación del Ruhr y la hiperinflación destruyen los ahorros de la clase media. Hitler fracasa en el Putsch de Múnich." },
  { anio: "1924", pais: "Italia", titulo: "Asesinato de Giacomo Matteotti", descripcion: "Matteotti es secuestrado y asesinado el 10 de junio por un grupo de fascistas." },
  { anio: "1925-1926", pais: "Italia", titulo: "Instauración de la dictadura fascista", descripcion: "Las leyes fascistísimas restringen la libertad de prensa, eliminan partidos opositores y concentran el poder." },
  { anio: "1929", pais: "Alemania", titulo: "Gran Depresión", descripcion: "La crisis mundial hunde la economía alemana y favorece el crecimiento del Partido Nazi." },
  { anio: "1933", pais: "Alemania", titulo: "Hitler canciller, Reichstag y Ley Habilitante", descripcion: "Hitler es nombrado canciller el 30 de enero. El incendio del Reichstag y la Ley Habilitante permiten destruir la democracia." },
  { anio: "1934", pais: "Alemania", titulo: "Consolidación del Führer", descripcion: "Muere Hindenburg el 2 de agosto. Hitler reúne las funciones de presidente y canciller." },
  { anio: "1935-1936", pais: "Italia", titulo: "Invasión y ocupación de Etiopía", descripcion: "Italia invade Etiopía en octubre de 1935 y ocupa Addis Abeba en mayo de 1936." },
  { anio: "1935", pais: "Alemania", titulo: "Rearme alemán", descripcion: "Alemania reintroduce el servicio militar y rompe las cláusulas militares de Versalles." },
  { anio: "1936", pais: "Alemania", titulo: "Remilitarización de Renania", descripcion: "El 7 de marzo, las tropas alemanas entran en Renania sin una respuesta militar británica o francesa." },
  { anio: "1936", pais: "Ambos", titulo: "Eje Roma-Berlín", descripcion: "Alemania e Italia establecen un acuerdo de cooperación política en octubre." },
  { anio: "1938", pais: "Alemania", titulo: "Anschluss y Conferencia de Múnich", descripcion: "Alemania anexa Austria en marzo y obtiene los Sudetes mediante el acuerdo de Múnich en septiembre." },
  { anio: "1939", pais: "Alemania", titulo: "Ocupación de Checoslovaquia e invasión de Polonia", descripcion: "Alemania ocupa el resto de Checoslovaquia en marzo e invade Polonia el 1 de septiembre." },
  { anio: "1939", pais: "Ambos", titulo: "Inicio de la Segunda Guerra Mundial", descripcion: "Francia y Reino Unido declaran la guerra a Alemania el 3 de septiembre. El Pacto de Acero se había firmado el 22 de mayo." },
  { anio: "1940", pais: "Italia", titulo: "Entrada de Italia en la guerra", descripcion: "Italia declara la guerra a Francia y Reino Unido el 10 de junio y se incorpora al conflicto junto a Alemania." },
  { anio: "1941", pais: "Alemania", titulo: "Invasión de la Unión Soviética", descripcion: "El 22 de junio Alemania rompe el pacto de no agresión e inicia la Operación Barbarroja." },
  { anio: "1943", pais: "Italia", titulo: "Destitución de Mussolini", descripcion: "Los Aliados desembarcan en Sicilia. Mussolini es destituido y arrestado el 25 de julio." },
  { anio: "1944", pais: "Alemania", titulo: "Desembarco de Normandía", descripcion: "El 6 de junio comienza la liberación de Europa occidental del dominio alemán." },
  { anio: "1945", pais: "Alemania", titulo: "Rendición alemana", descripcion: "Hitler se suicida el 30 de abril y Alemania firma la rendición militar incondicional el 7 de mayo." },
  { anio: "1945", pais: "Ambos", titulo: "Consecuencias y creación de la ONU", descripcion: "Caen el fascismo y el nazismo. En octubre se funda la Organización de las Naciones Unidas." }
];

/* Referencias bibliográficas incluidas en el documento. */
const fuentes = [
  { autor: "Hobsbawm, E. (1998).", titulo: "Historia del siglo XX.", editorial: "Crítica.", url: "https://www2.fba.unlp.edu.ar/introduccionyanalisis/wp-content/uploads/sites/32/2023/03/Historia-del-Siglo-XX-Hobsbawm.pdf" },
  { autor: "MacMillan, M. (2017).", titulo: "París, 1919: Seis meses que cambiaron el mundo.", editorial: "Tusquets Editores.", url: "https://proassetsdlc.com.cdnstatic2.com/usuarios/libros_contenido/arxius/37/36159_Paris_1919.pdf" },
  { autor: "Keynes.", titulo: "Las consecuencias económicas de la paz.", editorial: "Fuente de la época y crítica de las reparaciones.", url: "" },
  { autor: "Kershaw, I. (2002).", titulo: "Hitler 1889-1936.", editorial: "Ediciones Península.", url: "" },
  { autor: "Evans, R. J. (2005).", titulo: "La llegada del Tercer Reich.", editorial: "Ediciones Península.", url: "" },
  { autor: "German Bundestag. (s. f.).", titulo: "The Weimar Republic (1918–1933).", editorial: "", url: "https://www.bundestag.de/en/parliament/history/parliamentarism/weimar" },
  { autor: "German History in Documents and Images. (s. f.).", titulo: "The Enabling Act (March 24, 1933).", editorial: "", url: "https://germanhistorydocs.org/en/nazi-germany-1933-1945/ghd:3A/document-1496" },
  { autor: "United States Holocaust Memorial Museum. (2026).", titulo: "Adolf Hitler and the Nazi rise to power, 1918–1933.", editorial: "Holocaust Encyclopedia.", url: "https://encyclopedia.ushmm.org/content/en/article/the-nazi-rise-to-power" },
  { autor: "United States Holocaust Memorial Museum. (2026).", titulo: "The Enabling Act.", editorial: "Holocaust Encyclopedia.", url: "https://encyclopedia.ushmm.org/content/en/article/the-enabling-act" },
  { autor: "United States Holocaust Memorial Museum. (2026).", titulo: "Foundations of the Nazi State.", editorial: "Holocaust Encyclopedia.", url: "https://encyclopedia.ushmm.org/content/en/article/foundations-of-the-nazi-state" },
  { autor: "Bartov, O. (2017).", titulo: "El ejército de Hitler: soldados, nazis y guerra en el Tercer Reich.", editorial: "La Esfera de los Libros.", url: "https://share.google/k7CpuB5XxCxPmfJ" },
  { autor: "Rodríguez Iturbe, J. (2019).", titulo: "El nazismo y el Tercer Reich: intento de una revisión cultural y política de un tiempo trágico.", editorial: "Universidad de La Sabana.", url: "https://hdl.handle.net/10818/35510" },
  { autor: "The Editors of Encyclopaedia Britannica. (s. f.).", titulo: "Fascism.", editorial: "Encyclopaedia Britannica.", url: "https://www.britannica.com/topic/fascism" },
  { autor: "The Editors of Encyclopaedia Britannica. (2026, 29 de octubre).", titulo: "March on Rome.", editorial: "Encyclopaedia Britannica.", url: "https://www.britannica.com/event/March-on-Rome" },
  { autor: "United States Holocaust Memorial Museum. (2018, 17 de septiembre).", titulo: "Benito Mussolini.", editorial: "Holocaust Encyclopedia.", url: "https://encyclopedia.ushmm.org/content/en/article/benito-mussolini" },
  { autor: "Abel, G. M. (2020, 30 de octubre).", titulo: "La marcha sobre Roma. Mussolini toma el poder.", editorial: "Historia National Geographic.", url: "https://historia.nationalgeographic.com.es/a/marcha-sobre-roma-mussolini-toma-poder_15791" },
  { autor: "Pisauro, A., & Fantoni, G. (2024, 28 de abril).", titulo: "El asesinato de Giacomo Matteotti: la sombra de Mussolini en el caso más tristemente célebre de Italia.", editorial: "Historia National Geographic.", url: "https://historia.nationalgeographic.com.es/a/asesinato-giacomo-matteotti-sombra-mussolini-caso-mas-tristemente-celebre-italia_21257" },
  { autor: "Viñeta Cerbera, F. (2025, 4 de septiembre).", titulo: "Los últimos meses de la Segunda Guerra Mundial.", editorial: "Historia National Geographic.", url: "https://historia.nationalgeographic.com.es/a/ultimos-meses-segunda-guerra-mundial_24466" },
  { autor: "Viñeta Naciones Unidas. (2005, 9 de mayo).", titulo: "La Asamblea General recuerda el fin de la Segunda Guerra Mundial.", editorial: "Noticias ONU.", url: "https://news.un.org/es/story/2005/05/1055981" },
  { autor: "Viñeta Reyes, V. (2020, 1 de diciembre).", titulo: "Núremberg: una mirada en perspectiva 75 años después.", editorial: "IDEHPUCP.", url: "https://idehpucp.pucp.edu.pe/boletin-eventos/nuremberg-una-mirada-en-perspectiva-75-anos-despues-23268/" },
  { autor: "Viñeta Sadurní, J. M. (2025, 24 de abril).", titulo: "La muerte de Mussolini: fusilado junto a su amante.", editorial: "Historia National Geographic.", url: "https://historia.nationalgeographic.com.es/a/muerte-mussolini-fusilado-junto-su-amante_15259" },
  { autor: "Viñeta United States Holocaust Memorial Museum. (2025, 16 de diciembre).", titulo: "Invasión de Polonia, otoño de 1939.", editorial: "Enciclopedia del Holocausto.", url: "https://encyclopedia.ushmm.org/content/es/article/invasion-of-poland-fall-1939" },
  { autor: "Viñeta United States Holocaust Memorial Museum. (2025, 18 de diciembre).", titulo: "La Segunda Guerra Mundial a profundidad.", editorial: "Enciclopedia del Holocausto.", url: "https://encyclopedia.ushmm.org/content/es/article/world-war-ii-in-depth" }
];

const nombresTipos = {
  causa: "Causa",
  actor: "Actor",
  acontecimiento: "Acontecimiento",
  consecuencia: "Consecuencia"
};

const coloresTipos = {
  causa: "#b9770e",
  actor: "#1e6b5c",
  acontecimiento: "#8b3a2f",
  consecuencia: "#44546a"
};

let filtroActivo = "todos";
let nodoSeleccionado = null;
let paisActivo = "todos";

/* Dibuja los nodos que corresponden al filtro elegido. */
function renderNodos() {
  const contenedor = document.getElementById("redContenedor");
  contenedor.innerHTML = "";

  nodos.forEach(function(nodo) {
    if (filtroActivo !== "todos" && nodo.tipo !== filtroActivo) return;

    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "nodo nodo-" + nodo.tipo;
    boton.textContent = nodo.nombre;
    boton.dataset.id = nodo.id;

    if (nodo.id === nodoSeleccionado) boton.classList.add("seleccionado");

    boton.addEventListener("click", function() {
      nodoSeleccionado = nodo.id;
      renderNodos();
      mostrarInfoNodo(nodo.id);
    });

    contenedor.appendChild(boton);
  });
}

/* Muestra la descripción y explica las conexiones del nodo seleccionado. */
function mostrarInfoNodo(id) {
  const panel = document.getElementById("panelNodo");
  const nodo = nodos.find(function(elemento) { return elemento.id === id; });

  if (!nodo) {
    panel.innerHTML = '<p class="panel-placeholder">Nodo no encontrado.</p>';
    return;
  }

  const conexiones = nodo.conexiones.map(function(idConexion) {
    return nodos.find(function(elemento) { return elemento.id === idConexion; });
  }).filter(Boolean);

  const lista = conexiones.map(function(conexion) {
    return "<li><strong>" + conexion.nombre + "</strong>: " + conexion.descripcion + "</li>";
  }).join("");

  panel.innerHTML =
    '<span class="tipo-etiqueta" style="background-color:' + coloresTipos[nodo.tipo] + '">' + nombresTipos[nodo.tipo] + "</span>" +
    "<h4>" + nodo.nombre + "</h4>" +
    "<p>" + nodo.descripcion + "</p>" +
    "<p><strong>¿Por qué se conecta con estos elementos?</strong></p>" +
    '<ul class="conexiones-lista">' + lista + "</ul>";
}

/* Dibuja los acontecimientos filtrados por país. */
function renderLineaTiempo() {
  const lista = document.getElementById("lineaTiempo");
  lista.innerHTML = "";

  eventosTiempo.forEach(function(evento) {
    if (paisActivo !== "todos" && evento.pais !== paisActivo && evento.pais !== "Ambos") return;

    const item = document.createElement("li");
    item.className = "evento-tiempo";
    item.innerHTML =
      '<span class="anio">' + evento.anio + "</span>" +
      '<span class="pais-tag pais-' + evento.pais + '">' + evento.pais + "</span>" +
      '<h4 style="margin:6px 0">' + evento.titulo + "</h4>" +
      "<p>" + evento.descripcion + "</p>";

    lista.appendChild(item);
  });
}

/* Dibuja las referencias bibliográficas del documento. */
function renderFuentes() {
  const lista = document.getElementById("listaFuentes");
  lista.innerHTML = "";

  fuentes.forEach(function(fuente) {
    const item = document.createElement("li");
    const enlace = fuente.url
      ? ' <a href="' + fuente.url + '" target="_blank" rel="noopener">Consultar enlace</a>'
      : "";
    item.innerHTML = "<strong>" + fuente.autor + "</strong> " + fuente.titulo + " " + fuente.editorial + enlace;
    lista.appendChild(item);
  });
}

/* Configura los clics de filtros y el menú móvil. */
document.addEventListener("DOMContentLoaded", function() {
  renderNodos();
  renderLineaTiempo();
  renderFuentes();

  const botonesNodos = document.querySelectorAll("#filtros .filtro-btn");
  botonesNodos.forEach(function(boton) {
    boton.addEventListener("click", function() {
      botonesNodos.forEach(function(elemento) { elemento.classList.remove("activo"); });
      boton.classList.add("activo");
      filtroActivo = boton.dataset.tipo;
      renderNodos();
    });
  });

  const botonesPais = document.querySelectorAll("#filtrosPais .filtro-btn");
  botonesPais.forEach(function(boton) {
    boton.addEventListener("click", function() {
      botonesPais.forEach(function(elemento) { elemento.classList.remove("activo"); });
      boton.classList.add("activo");
      paisActivo = boton.dataset.pais;
      renderLineaTiempo();
    });
  });

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("abierto");
  });

  document.querySelectorAll(".main-nav a").forEach(function(enlace) {
    enlace.addEventListener("click", function() {
      mainNav.classList.remove("abierto");
    });
  });
});
