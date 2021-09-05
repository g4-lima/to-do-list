import type { NextPage } from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

const Sidebar: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className="info">
                    <Image src="/user.svg" alt="user avatar" width={41} height={41} />
                </div>
                <div className="divisor"></div>
                <div className="buttons"></div>
            </div>
        </div>
    );
};

export default Sidebar;