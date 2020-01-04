import Link from 'next/link' // Link is used instead of the react router

const Navegacion = () => (
  <ul>
    <li><Link href="/"><a>Inicio</a></Link></li>
    <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
  </ul>
);

export default Navegacion;
