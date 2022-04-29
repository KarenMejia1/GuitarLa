import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='contenedor'>
                <div className={styles.barra}>
                    <Link href='/'>
                        <Image src='/img/logo.svg' width={300} height={80} alt='Imagen logo' />
                    </Link>

                    <nav className={styles.navegacion}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/nosotros'>Nosotros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/tienda'>Tienda</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header