import AlPrincipio from "../AlPrincipio";
import FiltrosVivero from '../FiltrosVivero';
import CartasVivero from '../CartasVivero'
import './Vivero.css'

const Vivero = () => {
  const filtros = [
    "Semillas",
    "Macetas",
    "Fertilizantes",
    "Accesorios"
  ]
  const arrayVivero = [
    {
      ID: 1,
      NOMBRE: "Special title treatment1",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      ID: 2,
      NOMBRE: "Special title treatment2",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      ID: 3,
      NOMBRE: "Special title treatment3",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      ID: 4,
      NOMBRE: "Special title treatment4",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      NOMBRE: "Special title treatment5",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      NOMBRE: "Special title treatment6",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
  ];
  return (
    <>
      <AlPrincipio />
      <div className="containerGlobalVivero">
        <FiltrosVivero options={filtros} />
        <div className='containerCartasSearch'>
          <CartasVivero productos={arrayVivero} />
        </div>
      </div>
    </>
  );
};

export default Vivero;
