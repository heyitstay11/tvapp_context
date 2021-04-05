import React from 'react'
import Show from './Show'
import Loader from './Loader'
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Grid = styled.div`
   min-height: 95vh;
   display: flex;
   flex-wrap: wrap;
   gap: 1.6rem;
   align-items: center;
   justify-content: center;
   margin: 2rem auto;
   align-items: baseline;
   margin-bottom: 0;
   padding-bottom:1.5rem ;
`;

const ShowGrid = () => {
   const {items, loading } = useGlobalContext();
   
      return loading  ?  
         ( <Loader />)
         :
         (
            <Grid>
                { items.map(item => (
              <Show  key={item.show.id} {...item.show} />
                )) }
            </Grid>
           ) 
}

export default ShowGrid
