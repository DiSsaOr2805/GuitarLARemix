import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
import { useOutletContext } from '@remix-run/react'

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
    rel: 'preload',
    href: imagen,
    as: 'image'
    }
  ]
}

function Nosotros() {

  const data = useOutletContext()

  console.log(data);
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros