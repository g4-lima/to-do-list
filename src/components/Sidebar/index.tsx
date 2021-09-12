import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <Image src="/user.svg" alt="user avatar" width={41} height={41} />
                    <div className={styles.description}>
                        <h3>Gabriel</h3>
                        <p>Developer</p>
                    </div>
                </div>
                <div className={styles.divisor} />
                <nav>
                    <Link href="/">
                        <a>
                            <Image src="/list.svg" alt="lista de tarefas" width={24} height={24} />
                            <h3>Tarefas</h3>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a>
                            <Image src="/info.svg" alt="informações" width={24} height={24} />
                            <h3>Sobre</h3>
                        </a>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;