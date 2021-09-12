import { useEffect, useState } from 'react';
import Image from 'next/image';
import OptionsOverlay from '../OptionsOverlay';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync } from '../../redux/todoSlice';

import styles from './styles.module.scss';

interface iTodo {
    guid: string;
    title: string;
    description: string;
    situation: "completed" | "uncompleted";
}

const Taskbox = (props: iTodo) => {
    const [openOptions, setOpenOptions] = useState(false);

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleCompleteAsync({
            guid: props.guid,
            title: props.title,
            description: props.description,
            situation: props.situation,
        }))
    }

    return (
            <div className={styles.container}>
                    <div className={styles.content} key={props.guid}>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <button 
                            className={styles.statusButton}
                            onClick={handleCompleteClick}
                        >
                            {(props.situation === "completed") ?
                                <a className={styles.concludedButton}>
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
                    {openOptions && <OptionsOverlay guid={props.guid}/>}
                </OutsideClickHandler>            
            </div>
    );
};

export default Taskbox;