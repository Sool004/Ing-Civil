// Datos de ejemplo de materias
const materias = [
  { nombre: "Matemáticas I", desc: "Álgebra y trigonometría.", aprobada: false },
  { nombre: "Física I", desc: "Fundamentos de mecánica.", aprobada: false },
  { nombre: "Química", desc: "Química general y aplicada.", aprobada: false },
  { nombre: "Dibujo Técnico", desc: "Principios de dibujo técnico.", aprobada: false },
  { nombre: "Introducción a la Ingeniería", desc: "Conceptos básicos de ingeniería civil.", aprobada: false },
  { nombre: "Matemáticas II", desc: "Cálculo diferencial e integral.", aprobada: false },
  { nombre: "Física II", desc: "Electricidad y magnetismo.", aprobada: false },
  { nombre: "Materiales de Construcción", desc: "Propiedades y usos.", aprobada: false },
  { nombre: "Topografía", desc: "Levantamientos y mediciones.", aprobada: false },
  { nombre: "Estática", desc: "Equilibrio de fuerzas.", aprobada: false }
  // Agrega más materias según tu malla real
];

const grid = document.getElementById('grid');

// Renderiza la malla
function renderMalla() {
  grid.innerHTML = '';
  materias.forEach((materia, idx) => {
    const div = document.createElement('div');
    div.className = 'materia' + (materia.aprobada ? ' aprobada' : '');
    div.textContent = materia.nombre;
    div.onclick = () => mostrarModal(idx);
    grid.appendChild(div);
  });
}

// Modal de detalles
const modal = document.getElementById('modal');
const materiaTitulo = document.getElementById('materiaTitulo');
const materiaDesc = document.getElementById('materiaDesc');
const toggleBtn = document.getElementById('toggleAprobada');
let materiaActualIdx = null;

function mostrarModal(idx) {
  materiaActualIdx = idx;
  materiaTitulo.textContent = materias[idx].nombre;
  materiaDesc.textContent = materias[idx].desc;
  toggleBtn.textContent = materias[idx].aprobada ? "Desmarcar como aprobada" : "Marcar como aprobada";
  modal.style.display = 'block';
}

document.getElementById('closeBtn').onclick = () => {
  modal.style.display = 'none';
};

toggleBtn.onclick = () => {
  if (materiaActualIdx !== null) {
    materias[materiaActualIdx].aprobada = !materias[materiaActualIdx].aprobada;
    renderMalla();
    mostrarModal(materiaActualIdx);
  }
};

// Cierra el modal al hacer clic fuera del contenido
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

renderMalla();
