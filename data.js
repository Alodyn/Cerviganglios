/* Límites de los niveles Ia–Xb.
   Cadenas tomadas sin cambios de la revisión interna del consenso
   Grégoire 2014 (tablas 2 a 9). No modificar estos textos. */
export const LEVELS = [
  {
    "id": "Ia",
    "name": "Submentoniano",
    "group": "cuello",
    "table": "Tabla 2",
    "cranial": "M. milohioideo",
    "caudal": "M. platisma (borde caudal de los vientres anteriores de los mm. digástricos)",
    "anterior": "Sínfisis mentoniana",
    "posterior": "Cuerpo del hioides / m. milohioideo",
    "lateral": "Borde medial del vientre anterior del m. digástrico",
    "medial": "No aplica: límite virtual, continuo con el Ia contralateral",
    "risk": "Suelo de boca, lengua oral anterior, reborde alveolar mandibular anterior y labio inferior."
  },
  {
    "id": "Ib",
    "name": "Submandibular",
    "group": "cuello",
    "table": "Tabla 2",
    "cranial": "Borde craneal de la glándula submandibular; anteriormente, m. milohioideo",
    "caudal": "Plano por el borde caudal del hioides y el borde caudal de la mandíbula, o borde caudal de la glándula submandibular (el más caudal) / m. platisma",
    "anterior": "Sínfisis mentoniana",
    "posterior": "Borde posterior de la glándula submandibular (caudalmente) / vientre posterior del m. digástrico (cranealmente)",
    "lateral": "Cara medial (interna) de la mandíbula hasta su borde caudal / m. platisma (caudalmente) / m. pterigoideo medial (posteriormente)",
    "medial": "Borde lateral del vientre anterior del m. digástrico (caudalmente) / vientre posterior del m. digástrico (cranealmente)",
    "risk": "Cavidad oral, fosa nasal anterior, partes blandas de la mediocara y glándula submandibular."
  },
  {
    "id": "II",
    "name": "Yugular superior",
    "group": "cuello",
    "table": "Tabla 3",
    "cranial": "Borde caudal de la apófisis transversa de C1",
    "caudal": "Borde caudal del cuerpo del hioides",
    "anterior": "Borde posterior de la glándula submandibular / borde posterior del vientre posterior del m. digástrico",
    "posterior": "Borde posterior del ECM",
    "lateral": "Cara profunda (medial) del ECM / m. platisma / glándula parótida / vientre posterior del m. digástrico",
    "medial": "Borde medial de la a. carótida interna / mm. escalenos",
    "risk": "Fosa nasal, cavidad oral, nasofaringe, orofaringe, hipofaringe, laringe y glándulas salivales mayores.",
    "note": "Se divide en IIa y IIb con una línea artificial en el borde posterior de la vena yugular interna."
  },
  {
    "id": "IIa",
    "name": "Yugular superior, anterior a la VYI",
    "group": "cuello",
    "table": "Tabla 3 y su nota",
    "cranial": "Borde caudal de la apófisis transversa de C1",
    "caudal": "Borde caudal del cuerpo del hioides",
    "anterior": "Borde posterior de la glándula submandibular / borde posterior del vientre posterior del m. digástrico",
    "posterior": "Línea artificial en el borde posterior de la vena yugular interna",
    "lateral": "Cara profunda (medial) del ECM / m. platisma / glándula parótida / vientre posterior del m. digástrico",
    "medial": "Borde medial de la a. carótida interna / mm. escalenos",
    "derived": [
      "posterior"
    ],
    "risk": "Mismos sitios que el nivel II.",
    "note": "El artículo da los límites del nivel II completo; IIa hereda todos menos el posterior, que es la línea de división."
  },
  {
    "id": "IIb",
    "name": "Yugular superior, posterior a la VYI",
    "group": "cuello",
    "table": "Tabla 3 y su nota",
    "cranial": "Borde caudal de la apófisis transversa de C1",
    "caudal": "Borde caudal del cuerpo del hioides",
    "anterior": "Línea artificial en el borde posterior de la vena yugular interna",
    "posterior": "Borde posterior del ECM",
    "lateral": "Cara profunda (medial) del ECM / m. platisma / glándula parótida / vientre posterior del m. digástrico",
    "medial": "Borde medial de la a. carótida interna / mm. escalenos",
    "derived": [
      "anterior"
    ],
    "risk": "Más asociado a orofaringe y nasofaringe; menos a cavidad oral, laringe e hipofaringe.",
    "note": "El artículo da los límites del nivel II completo; IIb hereda todos menos el anterior, que es la línea de división."
  },
  {
    "id": "III",
    "name": "Yugular medio",
    "group": "cuello",
    "table": "Tabla 3",
    "cranial": "Borde caudal del cuerpo del hioides",
    "caudal": "Borde caudal del cartílago cricoides",
    "anterior": "Borde anterior del ECM / tercio posterior del m. tirohioideo",
    "posterior": "Borde posterior del ECM",
    "lateral": "Cara profunda (medial) del ECM",
    "medial": "Borde medial de la a. carótida común / mm. escalenos",
    "risk": "Cavidad oral, nasofaringe, orofaringe, hipofaringe y laringe."
  },
  {
    "id": "IVa",
    "name": "Yugular inferior",
    "group": "cuello",
    "table": "Tabla 3",
    "cranial": "Borde caudal del cartílago cricoides",
    "caudal": "2 cm craneal al manubrio esternal",
    "anterior": "Borde anterior del ECM (cranealmente) / cuerpo del ECM (caudalmente)",
    "posterior": "Borde posterior del ECM (cranealmente) / mm. escalenos (caudalmente)",
    "lateral": "Cara profunda (medial) del ECM (cranealmente) / borde lateral del ECM (caudalmente)",
    "medial": "Borde medial de la a. carótida común / borde lateral de la glándula tiroides / mm. escalenos (cranealmente) / borde medial del ECM (caudalmente)",
    "risk": "Hipofaringe, laringe, tiroides y esófago cervical.",
    "note": "El texto del artículo difiere de su tabla en dos puntos: límite caudal a 2 cm de la articulación esternoclavicular y borde medial (no lateral) del tiroides."
  },
  {
    "id": "IVb",
    "name": "Supraclavicular medial",
    "group": "cuello",
    "table": "Tabla 3",
    "cranial": "Borde caudal del IVa (2 cm craneal al manubrio esternal)",
    "caudal": "Borde craneal del manubrio esternal",
    "anterior": "Cara profunda del ECM / cara profunda de la clavícula",
    "posterior": "Borde anterior de los mm. escalenos (cranealmente) / vértice pulmonar, v. braquiocefálica, tronco braquiocefálico (derecha) y a. carótida común y a. subclavia (izquierda) (caudalmente)",
    "lateral": "Borde lateral del m. escaleno",
    "medial": "Borde lateral del nivel VI (componente pretraqueal) / borde medial de la a. carótida común",
    "risk": "Hipofaringe, laringe subglótica, tráquea, tiroides y esófago cervical."
  },
  {
    "id": "V",
    "name": "Triángulo posterior (Va + Vb)",
    "group": "cuello",
    "table": "Tabla 4",
    "cranial": "Plano por el borde craneal del cuerpo del hioides",
    "caudal": "Plano justo por debajo de los vasos cervicales transversos",
    "anterior": "Borde posterior del ECM",
    "posterior": "Borde anterior del m. trapecio",
    "lateral": "M. platisma / piel",
    "medial": "M. elevador de la escápula (cranealmente) / mm. escalenos (caudalmente)",
    "risk": "Nasofaringe, orofaringe, piel del cuero cabelludo posterior y tiroides (sobre todo Vb).",
    "note": "Va y Vb se separan por el borde caudal del cartílago cricoides."
  },
  {
    "id": "Va",
    "name": "Triángulo posterior superior",
    "group": "cuello",
    "table": "Tabla 4, su nota y texto",
    "cranial": "Plano por el borde craneal del cuerpo del hioides",
    "caudal": "Borde caudal del cartílago cricoides",
    "anterior": "Borde posterior del ECM",
    "posterior": "Borde anterior del m. trapecio",
    "lateral": "M. platisma / piel",
    "medial": "M. elevador de la escápula (cranealmente) / mm. escalenos (caudalmente)",
    "derived": [
      "caudal"
    ],
    "risk": "Mismos sitios que el nivel V.",
    "note": "El artículo da los límites del nivel V completo; Va hereda todos menos el caudal, que es la línea de división."
  },
  {
    "id": "Vb",
    "name": "Triángulo posterior inferior",
    "group": "cuello",
    "table": "Tabla 4, su nota y texto",
    "cranial": "Borde caudal del cartílago cricoides",
    "caudal": "Plano justo por debajo de los vasos cervicales transversos",
    "anterior": "Borde posterior del ECM",
    "posterior": "Borde anterior del m. trapecio",
    "lateral": "M. platisma / piel",
    "medial": "M. elevador de la escápula (cranealmente) / mm. escalenos (caudalmente)",
    "derived": [
      "cranial"
    ],
    "risk": "Mismos sitios que el nivel V; el tiroides se asocia sobre todo a Vb.",
    "note": "El artículo da los límites del nivel V completo; Vb hereda todos menos el craneal, que es la línea de división."
  },
  {
    "id": "Vc",
    "name": "Supraclavicular lateral",
    "group": "cuello",
    "table": "Tabla 4",
    "cranial": "Plano justo por debajo de los vasos cervicales transversos (borde caudal del nivel V)",
    "caudal": "2 cm craneal al manubrio esternal (borde caudal del IVa)",
    "anterior": "Piel",
    "posterior": "Borde anterior del m. trapecio (cranealmente) / ±1 cm anterior al m. serrato anterior (caudalmente)",
    "lateral": "M. trapecio (cranealmente) / clavícula (caudalmente)",
    "medial": "Mm. escalenos / borde lateral del ECM / borde lateral del IVa",
    "risk": "Más asociado a tumores de nasofaringe."
  },
  {
    "id": "VIa",
    "name": "Yugulares anteriores",
    "group": "cuello",
    "table": "Tabla 5",
    "cranial": "Borde caudal del hioides o borde caudal de la glándula submandibular (el más caudal)",
    "caudal": "Borde craneal del manubrio esternal",
    "anterior": "Piel / m. platisma",
    "posterior": "Cara anterior de los mm. infrahioideos",
    "lateral": "Bordes anteriores de ambos ECM",
    "medial": "No aplica",
    "risk": "Solo labio inferior y carcinomas gingivomandibulares avanzados que invaden partes blandas del mentón."
  },
  {
    "id": "VIb",
    "name": "Prelaríngeos, pretraqueales y paratraqueales",
    "group": "cuello",
    "table": "Tabla 5",
    "cranial": "Borde caudal del cartílago tiroides (en suelo de boca anterior, punta de lengua y labio inferior: borde caudal del cuerpo del hioides)",
    "caudal": "Borde craneal del manubrio esternal",
    "anterior": "Cara posterior de los mm. infrahioideos",
    "posterior": "Cara anterior de laringe, tiroides y tráquea (prelaríngeos y pretraqueales) / m. prevertebral (lado derecho) / esófago (lado izquierdo)",
    "lateral": "A. carótida común de ambos lados",
    "medial": "Cara lateral de tráquea y esófago (caudalmente)",
    "risk": "Labio inferior, suelo de boca y punta de lengua, tiroides, laringe glótica y subglótica, vértice del seno piriforme y esófago cervical."
  },
  {
    "id": "VIIa",
    "name": "Retrofaríngeos",
    "group": "retro",
    "table": "Tabla 6",
    "cranial": "Borde superior del cuerpo de C1 / paladar duro",
    "caudal": "Borde craneal del cuerpo del hioides",
    "anterior": "Borde posterior del m. constrictor faríngeo superior o medio",
    "posterior": "M. largo de la cabeza y m. largo del cuello",
    "lateral": "Borde medial de la a. carótida interna",
    "medial": "Línea paralela al borde lateral del m. largo de la cabeza",
    "risk": "Nasofaringe, pared faríngea posterior y orofaringe (fosa amigdalina y paladar blando).",
    "note": "Solo incluye los retrofaríngeos laterales. Con el cuello en hiperextensión, el borde superior de C1 representa mejor el límite craneal que el paladar duro."
  },
  {
    "id": "VIIb",
    "name": "Retroestíleos",
    "group": "retro",
    "table": "Tabla 6",
    "cranial": "Base del cráneo (foramen yugular)",
    "caudal": "Borde caudal de la apófisis transversa de C1 (límite superior del nivel II)",
    "anterior": "Borde posterior del espacio parafaríngeo preestíleo",
    "posterior": "Cuerpo vertebral de C1, base del cráneo",
    "lateral": "Apófisis estiloides / lóbulo profundo de la parótida",
    "medial": "Borde medial de la a. carótida interna",
    "risk": "Nasofaringe, y cualquier primario con infiltración masiva del nivel II alto (flujo retrógrado)."
  },
  {
    "id": "VIII",
    "name": "Parotídeos",
    "group": "cara",
    "table": "Tabla 7",
    "cranial": "Arco cigomático, conducto auditivo externo",
    "caudal": "Ángulo de la mandíbula",
    "anterior": "Borde posterior de la rama mandibular y del m. masetero (lateralmente) / m. pterigoideo medial (medialmente)",
    "posterior": "Borde anterior del ECM (lateralmente) / vientre posterior del m. digástrico (medialmente)",
    "lateral": "Capa SMAS del tejido subcutáneo",
    "medial": "Apófisis estiloides y musculatura estiloidea",
    "risk": "Piel frontal y temporal, órbita, conducto auditivo externo, fosas nasales y parótida."
  },
  {
    "id": "IX",
    "name": "Buccofaciales",
    "group": "cara",
    "table": "Tabla 8",
    "cranial": "Borde caudal de la órbita",
    "caudal": "Borde caudal de la mandíbula",
    "anterior": "Capa SMAS del tejido subcutáneo",
    "posterior": "Borde anterior del m. masetero y bola adiposa de Bichat",
    "lateral": "Capa SMAS del tejido subcutáneo",
    "medial": "M. buccinador",
    "risk": "Piel de la cara, nariz, seno maxilar que infiltra partes blandas de la mejilla y mucosa yugal."
  },
  {
    "id": "Xa",
    "name": "Retroauriculares y subauriculares",
    "group": "cara",
    "table": "Tabla 9",
    "cranial": "Borde craneal del conducto auditivo externo",
    "caudal": "Punta de la mastoides",
    "anterior": "Borde anterior de la mastoides (caudalmente) / borde posterior del conducto auditivo externo (cranealmente)",
    "posterior": "Borde anterior de los ganglios occipitales / borde posterior del ECM",
    "lateral": "Tejido subcutáneo",
    "medial": "M. esplenio de la cabeza (caudalmente) / hueso temporal (cranealmente)",
    "risk": "Sobre todo cáncer de piel de la región retroauricular."
  },
  {
    "id": "Xb",
    "name": "Occipitales",
    "group": "cara",
    "table": "Tabla 9",
    "cranial": "Protuberancia occipital externa",
    "caudal": "Borde craneal del nivel V",
    "anterior": "Borde posterior del ECM",
    "posterior": "Borde anterior (lateral) del m. trapecio",
    "lateral": "Tejido subcutáneo",
    "medial": "M. esplenio de la cabeza",
    "risk": "Cáncer de piel del área occipital."
  }
];

export const LADDER = [
  [
    "Base del cráneo (foramen yugular)",
    "Techo del VIIb"
  ],
  [
    "Borde superior del cuerpo de C1 / paladar duro",
    "Techo del VIIa"
  ],
  [
    "Borde caudal de la apófisis transversa de C1",
    "Fin del VIIb, techo del II"
  ],
  [
    "Borde craneal del cuerpo del hioides",
    "Fin del VIIa, techo del V"
  ],
  [
    "Borde caudal del cuerpo del hioides",
    "Paso de II a III"
  ],
  [
    "Borde caudal del cartílago cricoides",
    "Paso de III a IVa y de Va a Vb"
  ],
  [
    "Plano justo bajo los vasos cervicales transversos",
    "Paso de V a Vc"
  ],
  [
    "2 cm craneal al manubrio esternal",
    "Paso de IVa a IVb; fin del Vc"
  ],
  [
    "Borde craneal del manubrio esternal",
    "Fin de IVb, VIa y VIb"
  ]
];

export const LADDER_RULE = "Regla para recordarla: hioides, cricoides y manubrio cortan la cadena yugular en II, III, IV; el nivel V empieza más abajo, en el hioides, no en la base del cráneo.";

export const NOTES = [
  "IIa/IIb y Va/Vb no tienen tabla propia: comparten los límites de II y V, y solo cambia la línea de división (marcada en su tarjeta).",
  "IVa: la tabla dice 2 cm craneal al manubrio y borde lateral del tiroides; el texto dice 2 cm craneal a la articulación esternoclavicular y borde medial del tiroides.",
  "VIb: el techo es el borde caudal del cartílago tiroides, salvo en suelo de boca anterior, punta de lengua y labio inferior (borde caudal del hioides).",
  "VIIa: solo retrofaríngeos laterales; los mediales son inconstantes y no se incluyen.",
  "Los límites valen con la cabeza en posición neutra; en hiperextensión pueden cambiar las relaciones entre niveles.",
  "Cada nivel es un grupo ganglionar sin margen: hay que añadir los márgenes de CTV y PTV que correspondan."
];
