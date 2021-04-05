import React from 'react'
import styled from 'styled-components';

const Foot = styled.footer`
    position: sticky;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(6,24,68,0.85);
    color: white;
    font-family:  sans-serif;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Para = styled.p`
    font-size: 1.2rem;
    margin: 0 2.5rem;
    letter-spacing: 1px;
`;
const Hightlighted = styled.a`
    text-decoration: none;
    font-size: 1.4rem;
    color: aqua;
`;

const Footer = () => {
    return (<Foot> 
        <Para>
            TVi APP &copy; 2021
        </Para>
        <Para>
             Created by 20078 <Hightlighted href="https://github.com/heyitstay11/" target="_blank" class="highlight">Tayyab</Hightlighted> 
        </Para>
    </Foot>)
}

export default Footer
