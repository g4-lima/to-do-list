import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todoSlice';

import styles from './styles.module.scss';

interface iOptionsOverlay {
    id: number;
}

const OptionsOverlay = (props: iOptionsOverlay) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteTodo({
            id: props.id
        }))
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.buttons}>
                    <Link href={`${props.id}`} passHref={true} >
                        <a>
                            <Image className={styles.icon} src="/pencil.svg" alt="editar" width={12} height={12} />
                            Atualizar tarefa
                        </a>                        
                    </Link>
                    <Link href="/" passHref={true} >
                        <button type="button" onClick={handleDeleteClick}>
                            <Image className={styles.icon} src="/trash.svg" alt="remover" width={12} height={11} />
                            Remover tarefa
                        </button>                        
                    </Link>
                </div>
            </div>
        </>
    );
};

export default OptionsOverlay;