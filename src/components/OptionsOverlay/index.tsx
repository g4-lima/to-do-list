import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { deleteTodoAsync } from '../../redux/todoSlice';

import styles from './styles.module.scss';

interface iOptionsOverlay {
    guid: string;
}

const OptionsOverlay = (props: iOptionsOverlay) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteTodoAsync({
            guid: props.guid
        }))
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.buttons}>
                    <Link href={`${props.guid}`} passHref={true} >
                        <a className={styles.button}>
                            <div className={styles.icon}>
                                <Image className={styles.icon} src="/pencil.svg" alt="editar" width={12} height={12} />
                            </div>
                            Atualizar tarefa
                        </a>                        
                    </Link>
                    <Link href="/" passHref={true} >
                        <button className={styles.button} type="button" onClick={handleDeleteClick}>
                            <div className={styles.icon}>
                                <Image src="/trash.svg" alt="remover" width={12} height={11} />
                            </div>
                            Remover tarefa
                        </button>                        
                    </Link>
                </div>
            </div>
        </>
    );
};

export default OptionsOverlay;