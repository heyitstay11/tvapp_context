import React, {useState} from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Search = styled.input`
    font-size: 1.4rem;
    border: none;
    outline: none;
    border-bottom: 3px solid rgb(92, 0, 184);
    margin-top: 1.4rem;
    background-color: transparent;
`;

const Searchbar = () => {
    const {setSearch} = useGlobalContext();

    const [term, setTerm] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        if(term){
            setSearch(term);
            setTerm('');
        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <Search type="text" value={term} onChange={(e) => setTerm(e.target.value) } placeholder="Search" autoComplete="off" />
            </form>
    )
}

export default Searchbar
