import Link from 'next/link' // Link is used instead of the react router

const Navegacion = () => (
  <div>
    <ul>
      <h1>Nombre del sitio</h1>
      <li><Link href="/"><a>Inicio</a></Link></li>
      <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
    </ul>
    <style jsx>{`
      h1{
        color: red;
      }
      ul {
        background-color: #333;
        list-style: none;
        display: flex;
      }
      ul li {
        padding: .5rem 0;
        margin-right: 1rem;
      }
      ul li a {
        font-size: 1.2rem;
        color: white;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Navegacion;
