
import Link from 'next/link';
import Image from 'next/image';

import styles from "../../styles/navbar.module.css";

export default function Navbar() {

  return (
    <nav className={styles.Navbar}>
      <div className={styles.Container}>
        <div className={styles.ContentNav}>
          <div>
            <Image src="/images/pokeball.png" width="30" height="30" alt="pokenext" />
          </div>
          <div className={styles.Menu}>
            <ul>
              <li>
                <Link href="/"><a>Home</a></Link>
              </li>
              <li>
                <Link href="/about"><a>Sobre</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

