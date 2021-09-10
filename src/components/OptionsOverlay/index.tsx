import type { NextPage } from 'next';

import styles from './styles.module.scss';

const OptionsOverlay: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <a href="">
                    <p>Atualizar tarefa</p>
                </a>
                <a href="">
                    <p>Remover tarefa</p>
                </a>
            </div>
        </div>
    );
};

export default OptionsOverlay;