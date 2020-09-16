import React from 'react';
import styled from 'styled-components';

export const Title = styled.h2`
  color: #000;
  font-weight: 600;
  font-size: 1.9rem;
`;

export const StyledPoints = styled.h2`
  color: violet;
  font-weight: 600;
  font-size: 2em;
`;

export const TeamTitle = styled.h3`
  color: #000;
  font-weight: 600;
  width: 100%;
  padding: 0em 5em 0em 5em;
`;

// export const Description = styled.p`
//   color: #000;
//   font-weight: 300;
// `;

export const StyledCard = styled.button`
  position: relative;
  min-width: 20vw;
  min-height: 12vh;
  cursor: pointer;
  background-color: #dcbeee;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

export const StyledCategoryCard = styled.button`
  position: relative;
  min-height: 15vh;
  min-width: 20vw;
  background-color: #c293e2;
`;

export const GameContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto;
`;

export const ColumnContainer = styled.div`
    display: grid;
    width: auto;
    grid-template-columns: auto auto auto auto auto;
`;

export const FinalContainer = styled.div`
    display: grid;
    width: auto;
    justify-items: center;
    grid-template-columns: auto;
`;

export const ScoreBoardContainer = styled.div`
    position: absolute;
    left: 50%;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-items: center;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding: 1em;
`;

export const StyledScoreBoardCard = styled.div`
    padding: 2em;
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    min-height: 1vh;
    width: auto;
`;

// export const TeamAvatar = styled.img`
//     width: 15em;
//     height: 10em;
// `;

const CategoryCard = props => (
    <StyledCategoryCard>
        {/* eslint-disable-next-line react/prop-types */}
        <Title>{props.title}</Title>
    </StyledCategoryCard>
);

export const ScoreBoardCard = props => (
        <StyledScoreBoardCard>
            {/* eslint-disable-next-line react/prop-types */}
            <TeamTitle
                style={{ textAlign: 'center' }}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {props.title}
            </TeamTitle>
            {/* eslint-disable-next-line react/prop-types */}
            <StyledPoints>{props.score}</StyledPoints>
        </StyledScoreBoardCard>
);

export { CategoryCard };
