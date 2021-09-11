import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const OptionsOverlay = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.buttons}>
                    <Link href="/editTask" passHref={true} >
                        <a>
                            <Image className={styles.icon} src="/pencil.svg" alt="editar" width={12} height={12} />
                            Atualizar tarefa
                        </a>                        
                    </Link>
                    <Link href="/" passHref={true} >
                        <a>
                            <Image className={styles.icon} src="/trash.svg" alt="remover" width={12} height={11} />
                            Remover tarefa
                        </a>                        
                    </Link>
                </div>
            </div>
        </>
    );
};

export default OptionsOverlay;