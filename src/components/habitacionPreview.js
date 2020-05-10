import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

//Este Boton nos permitira acceder a las paginas de cada habitacion(creadas dinamicamente con el 
//actions.createPage del archivo gatsby-node) de forma dinamica mediante el ruteo de su slug
const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const HabitacionPreview = ( { habitacion } ) => {
    
    //Extraemos los datos da la habitacion
    const { contenido, imagen, titulo, slug } = habitacion;

    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Image
                fluid={imagen.fluid}
            />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{titulo}</h3>
                <p>{contenido}</p>

                <Boton to={slug}>Ver Habitación</Boton>
            </div>
        </div>
     );
}
 
export default HabitacionPreview;