import React from 'react';
import styled from 'styled-components';

import myImage from '../../assets/dev/JarrenSeniorPicFixed.jpg';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const sweetAlert = withReactContent(Swal);


export const Title = styled.h2`
  color: #000;
  font-weight: 600;
`;

export const StyledPoints = styled.h2`
  color: violet;
  font-weight: 600;
  font-size: 2em;
`;


export const TeamTitle = styled.h3`
  color: #000;
  font-weight: 500;
  width: 100%;
  padding: 0em 5em 0em 5em;
`;

export const Description = styled.p`
  color: #000;  
  font-weight: 300;
`;

export const StyledCard = styled.button`
  position: relative;
  min-width: 24.9em;
  width: auto;
  height: 10em;
  cursor: pointer;
  background-color: #dcbeee;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

export const StyledCategoryCard = styled.button`
  position: relative;
  min-height: 15em;
  max-height: 25em;
  min-width: 24.9em;
  // cursor: pointer;
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
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    justify-items: center;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding: 2em 0em 2em 0em;
`;

export const StyledScoreBoardCard = styled.div`
    padding: 2em;
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: auto;
    height: auto;
`;
// eslint-disable-next-line no-unused-vars
// const StyledScoreBoardCardFooter = styled.div`
//     display: grid;
//     grid-template-columns: auto auto;
//     column-gap: 7em;
//     justify-items: center;
//     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//     width: auto;
// `;

// eslint-disable-next-line no-unused-vars
// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   padding: 1em;
//   cursor: pointer;
//   &:hover {
//     background-color: palevioletred;
//     color: white;
//   }
// `;

export const TeamAvatar = styled.img`
    width: 15em;
    height: 10em;
`;


// const addPoints = value => (
//      console.log(value)
// );

// const Card = props => (
//     <StyledCard onClick={() => {
//         sweetAlert.fire({
//             // eslint-disable-next-line react/prop-types
//             title: props.question,
//             // eslint-disable-next-line sort-keys
//             text: 'Do you want to continue',
//             // eslint-disable-next-line sort-keys
//             icon: 'question',
//             // eslint-disable-next-line sort-keys
//             confirmButtonText: 'See Answer'
//         }).then(() => {
//             sweetAlert.fire({
//                 // eslint-disable-next-line react/prop-types
//                 title: props.answer,
//                 // eslint-disable-next-line sort-keys
//                 confirmButtonText: 'Continue',
//             // }).then(() => {
//             //     sweetAlert.fire({
//             //         title: 'Testing Checkbox Functionality',
//             //         // eslint-disable-next-line sort-keys
//             //         html: '<h3>The Barth\'s <input type="checkbox" id="Barth"  /></h3>' +
//             //             '<h3>The Davis\' <input type="checkbox" id="Davis"  /></h3>' +
//             //             '<h3>The Branch\'s <input type="checkbox" id="Branch"  /></h3>',
//             //         // eslint-disable-next-line sort-keys
//             //         confirmButtonText: 'Confirm',
//             //         preConfirm: () => {
//             //             const teamBarth = sweetAlert.getPopup().querySelector('#Barth').checked;
//             //             const teamDavis = sweetAlert.getPopup().querySelector('#Davis').checked;
//             //             const teamBranch = sweetAlert.getPopup().querySelector('#Branch').checked;
//             //             console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);
//             //
//             //
//             //             return { teamBarth,
//             //                 teamDavis,
//             //                 // eslint-disable-next-line sort-keys
//             //                 teamBranch };
//             //         }
//             //     }).then(result => {
//             //         sweetAlert.fire(`Barth?: ${result.value.teamBarth}\nDavis?: ${result.value.teamDavis}\nBranch?: ${result.value.teamBranch}`);
//             //     });
//             });
//         });
//     }}>
//         {/* eslint-disable-next-line react/prop-types */}
//         <Title>{props.title}</Title>
//         {/* <Description>Lorem Ipsum...</Description>*/}
//     </StyledCard>
// );

const CategoryCard = props => (
    <StyledCategoryCard>
        {/* eslint-disable-next-line react/prop-types */}
        <Title>{props.title}</Title>
    </StyledCategoryCard>
);

export const ScoreBoardCard = props => (
        <StyledScoreBoardCard>
            {/* eslint-disable-next-line react/prop-types */}
            <TeamAvatar src={myImage}/>
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
