import { useState } from 'react';
import Image from 'next/image';
import OptionsOverlay from '../OptionsOverlay';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../../redux/todoSlice';

import styles from './styles.module.scss';

interface iTodo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const Taskbox = (props: iTodo) => {
    const [openOptions, setOpenOptions] = useState(false);

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({
            id: props.id,
            completed: !props.completed
        }))
    }

    return (
            <div className={styles.container}>
                    <div className={styles.content} key={props.id}>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <button 
                            className={styles.statusButton}
                            onClick={handleCompleteClick}
                        >
                            {props.completed ? 
                                <a>
                                    <Image src="/check.svg" alt="completa" width={24} height={24} />
                                    <p>Concluído</p>
                                </a>
                                :
                                <p>
                                    Em progresso
                                </p>
                            }
                        </button>
                    </div>
                <button className={styles.optionsButton} onClick={() => setOpenOptions(!openOptions)}>
                    <Image src="/dots.svg" alt="Opções" width={24} height={24} />
                </button>
                <OutsideClickHandler
                onOutsideClick={() => (setOpenOptions(false))}
                >
                    {openOptions && <OptionsOverlay id={props.id}/>}
                </OutsideClickHandler>            
            </div>
    );
};

export default Taskbox;