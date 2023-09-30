import { estudiante} from "./estudiante";
import { personaldeservicio} from "./personaldeservicio";
import { profesor } from "./profesor";

const profesor1 = new profesor("Pedro", "Quiroz, Alcivar", 1391140156, "Soltero", 2016, 116, "Lengua y literatura");
const personaldeservicio1 = new personaldeservicio("Mariana", "Ramirez, Anchundia", 1328180156, "Casada", 2019, 19, "baños");
const estudiante1 = new estudiante("Sol", "Martinez, Triviño", 1381120196, "Soltera", "Física General");

estudiante1.matriculación_de_curso("Fundamentos de programación");
estudiante1.datos_estudiante();

profesor1.cambio_del_departamento("Matemáticas discretas");
profesor1.datos_profesor();

personaldeservicio1.traslado_de_seccion("Sala de estudio") 
personaldeservicio1.datos_personalservicio();



