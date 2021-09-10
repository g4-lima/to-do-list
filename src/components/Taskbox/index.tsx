import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import OptionsOverlay from '../OptionsOverlay';
import OutsideClickHandler from 'react-outside-click-handler';

import styles from './styles.module.scss';

const Taskbox: NextPage = () => {
    const [openOptions, setOpenOptions] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3>Nome</h3>
                <p>Descrição da tarefa</p>
                <button className={styles.statusButton}>Em progresso</button>
            </div>
            <button className={styles.optionsButton} onClick={() => setOpenOptions(!openOptions)}>
                <Image src="/dots.svg" alt="Opções" width={24} height={24} />
            </button>
            <OutsideClickHandler
              onOutsideClick={() => (setOpenOptions(false))}
            >
                {openOptions && <OptionsOverlay />}
            </OutsideClickHandler>

            
        </div>
    );
};

export default Taskbox;