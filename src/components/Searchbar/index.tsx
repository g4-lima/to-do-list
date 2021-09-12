import Image from 'next/image';
import { ChangeEvent } from 'react';

import styles from './styles.module.scss';

interface iSearch {
    onSearch: (text: string | null) => void;
}

const Searchbar = ({ onSearch }: iSearch) => {
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length === 0) {
            onSearch(null);
        } else {
            onSearch(event.target.value);
        }
    }

    return (
        <>
        <div className="container">
            <input 
                className={styles.search} 
                placeholder="Procurar tarefas" 
                type="search"
                onChange={onChangeInput} 
            />
            <Image 
                className={styles.img} 
                src="/search.svg" 
                alt="Prucurar" 
                width={21} 
                height={40} 
            />
        </div>
        </>
    );
};

export default Searchbar;