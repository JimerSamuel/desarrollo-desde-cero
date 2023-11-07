import styles from '@/styles/sideMenu.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { HomeIcon, UserIcon, MagnifyingGlassIcon, PlusIcon, BellIcon, PaperAirplaneIcon, BookmarkIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'

const SideMenu = () => {
  return (
    <aside className={styles.sideBar}>
      <h1 className={styles.logo}>Nameless</h1>
      <div className={styles.userInfo}>
        <fugure className={styles.image}>
          <Image src='/images/profilePictures/DanielaMelchior.png' alt='Foto de perfil de Daniela Melchior' width={100} height={100} />
        </fugure>
        <div className={styles.labels}>
          <h2 className={styles.name}>Daniela Melchior</h2>
          <p className={styles.label}>Front-End Developer</p>
        </div>
      </div>
      <hr className={styles.separationLine} />
      <nav className={styles.menu}>
        <Link href='/' className={styles.link}>
          <HomeIcon className={styles.icon} />
          Inicio
        </Link>
        <Link href='/' className={styles.link}>
          <UserIcon className={styles.icon} />
          Perfil
        </Link>
        <Link href='/' className={styles.link}>
          <MagnifyingGlassIcon className={styles.icon} />
          Buscar
        </Link>
        <Link href='/' className={styles.link}>
          <PlusIcon className={styles.icon} />
          Publicar
        </Link>
        <Link href='/' className={styles.link}>
          <BellIcon className={styles.icon} />
          Notificaciones
        </Link>
        <Link href='/' className={styles.link}>
          <PaperAirplaneIcon className={styles.icon} />
          Mensajes
        </Link>
        <Link href='/' className={styles.link}>
          <ChatBubbleLeftRightIcon className={styles.icon} />
          Foros
        </Link>
        <Link href='/' className={styles.link}>
          <BookmarkIcon className={styles.icon} />
          Guardado
        </Link>
        <Link href='/' className={styles.link}>
          <Cog6ToothIcon className={styles.icon} />
          Configuración
        </Link>
      </nav>
    </aside>
  )
}
export default SideMenu
