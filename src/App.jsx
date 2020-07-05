import React, { useState } from 'react';
import {
    CategoryCard,
    ColumnContainer,
    GameContainer, ScoreBoardCard,
    ScoreBoardContainer, StyledCard, Title, FinalContainer
} from './Components/Custom/CustomComponents';

import finalPhoto from './assets/dev/final.jpeg';

import { cards, categories, teams, cards2, categories2 } from './data.json';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const sweetAlert = withReactContent(Swal);

// eslint-disable-next-line max-lines-per-function
const App = () => {

    const [teamOneScore, setTeamOneScore] = useState(0);
    const [teamTwoScore, setTeamTwoScore] = useState(0);
    const [teamThreeScore, setTeamThreeScore] = useState(0);
    const teamIDs = [
        teamOneScore,
        teamTwoScore,
        teamThreeScore
    ];

    const [usedCards, setUsedCards] = useState([]);

    // eslint-disable-next-line max-params
    const updateScore = (teamOne, teamTwo, teamThree, points) => {
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamOnePoints = teamOne ? (setTeamOneScore(teamOneScore + points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamTwoPoints = teamTwo ? (setTeamTwoScore(teamTwoScore + points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamThreePoints = teamThree ? (setTeamThreeScore(teamThreeScore + points)) : null;

        // eslint-disable-next-line no-sequences
        return teamOnePoints, teamTwoPoints, teamThreePoints;
    };

    // eslint-disable-next-line max-params
    const removeScore = (teamOne, teamTwo, teamThree, points) => {
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamOnePoints = teamOne ? (setTeamOneScore(teamOneScore - points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamTwoPoints = teamTwo ? (setTeamTwoScore(teamTwoScore - points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamThreePoints = teamThree ? (setTeamThreeScore(teamThreeScore - points)) : null;

        // eslint-disable-next-line no-sequences
        return teamOnePoints, teamTwoPoints, teamThreePoints;
    };

    // const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    // const testArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    const setOfUsedCards = new Set(usedCards);
    // const setOfUsedCards = new Set(testArray);
    // const setOfUsedCards = new Set(testArray2);

    return (
        <>
            {setOfUsedCards.size === 50
                // eslint-disable-next-line multiline-ternary
                ? <FinalContainer>
                    {/* eslint-disable-next-line max-lines-per-function */}
                    <StyledCard onClick={() => {
                        sweetAlert.fire({
                            allowOutsideClick: false,
                            // eslint-disable-next-line react/prop-types
                            title: 'Name from the left to the right the order of family members in the famous Virginia Beach topless photo',
                            // eslint-disable-next-line sort-keys,multiline-ternary,no-ternary
                            // eslint-disable-next-line sort-keys
                            icon: 'question',
                            // eslint-disable-next-line sort-keys
                            confirmButtonText: 'See Answer'
                            // eslint-disable-next-line max-lines-per-function
                        }).then(() => {
                            sweetAlert.fire({
                                allowOutsideClick: false,
                                icon: 'success',
                                // eslint-disable-next-line react/prop-types
                                title: "Brent, Marc, Geri, G'pa, Tim, Cyrelle",
                                html: <img style={{ width: '55em',
                                    // eslint-disable-next-line sort-keys
                                    height: '45em' }} src={finalPhoto} alt="Picture"/>,
                                // eslint-disable-next-line sort-keys
                                width: 1500,
                                confirmButtonText: 'Continue',
                                // eslint-disable-next-line max-lines-per-function
                            });
                        });
                    }}>
                        {/* eslint-disable-next-line react/prop-types,multiline-ternary,no-ternary */}
                        <Title>Family Photos</Title>
                        {/* eslint-disable-next-line max-lines-per-function,react/jsx-key */}
                    </StyledCard>
                </FinalContainer> : <> <ColumnContainer>
                {setOfUsedCards.size >= 25 ? categories2.map(category => <CategoryCard key={category.id} title={category.category}/>) : categories.map(category => <CategoryCard key={category.id} title={category.category}/>)}
            </ColumnContainer>
                <GameContainer>
                    {/* eslint-disable-next-line react/jsx-key,max-lines-per-function */}
                    {setOfUsedCards.size >= 25 ? cards2.map(card => <StyledCard onClick={() => {
                        sweetAlert.fire({
                            allowOutsideClick: false,
                            // eslint-disable-next-line react/prop-types
                            title: card.question,
                            // eslint-disable-next-line sort-keys
                            text: card.double ? 'DOUBLE POINTS!' : '',
                            // eslint-disable-next-line sort-keys,multiline-ternary,no-ternary
                            html: card.picture ? (<img style={{ width: '15em',
                                // eslint-disable-next-line sort-keys
                                height: '15em;' }} src={card.picture} alt="Picture"/>) : '',
                            // eslint-disable-next-line sort-keys
                            icon: 'question',
                            // eslint-disable-next-line sort-keys
                            confirmButtonText: 'See Answer'
                            // eslint-disable-next-line max-lines-per-function
                        }).then(() => {
                            sweetAlert.fire({
                                allowOutsideClick: false,
                                icon: 'success',
                                // eslint-disable-next-line react/prop-types
                                title: card.answer,
                                // eslint-disable-next-line sort-keys
                                confirmButtonText: 'Continue',
                                // eslint-disable-next-line max-lines-per-function
                            }).then(() => {
                                sweetAlert.fire({
                                    allowOutsideClick: false,
                                    title: 'Who got it right?',
                                    // eslint-disable-next-line sort-keys
                                    html: '<h3>The Barth\'s <input type="checkbox" id="Barth"  /></h3>' +
                                        '<h3>The Davis\' <input type="checkbox" id="Davis"  /></h3>' +
                                        '<h3>The Branch\'s <input type="checkbox" id="Branch"  /></h3>',
                                    // eslint-disable-next-line sort-keys
                                    confirmButtonText: 'Confirm',
                                    preConfirm: () => {
                                        const teamBarth = sweetAlert.getPopup().querySelector('#Barth').checked;
                                        const teamDavis = sweetAlert.getPopup().querySelector('#Davis').checked;
                                        const teamBranch = sweetAlert.getPopup().querySelector('#Branch').checked;
                                        // console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);

                                        return { teamBarth,
                                            teamDavis,
                                            // eslint-disable-next-line sort-keys
                                            teamBranch };
                                    }
                                    // eslint-disable-next-line multiline-ternary,no-ternary
                                }).then(result => {
                                    updateScore(result.value.teamBarth, result.value.teamDavis, result.value.teamBranch, card.double ? card.points*2 : card.points);
                                })
                                    .then(() => {
                                        sweetAlert.fire({
                                            allowOutsideClick: false,
                                            title: 'Who got it wrong?',
                                            // eslint-disable-next-line sort-keys
                                            html: '<h3>The Barth\'s <input type="checkbox" id="Barth"  /></h3>' +
                                                '<h3>The Davis\' <input type="checkbox" id="Davis"  /></h3>' +
                                                '<h3>The Branch\'s <input type="checkbox" id="Branch"  /></h3>',
                                            // eslint-disable-next-line sort-keys
                                            confirmButtonText: 'Confirm',
                                            preConfirm: () => {
                                                const teamBarth = sweetAlert.getPopup().querySelector('#Barth').checked;
                                                const teamDavis = sweetAlert.getPopup().querySelector('#Davis').checked;
                                                const teamBranch = sweetAlert.getPopup().querySelector('#Branch').checked;
                                                // console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);

                                                return { teamBarth,
                                                    teamDavis,
                                                    // eslint-disable-next-line sort-keys
                                                    teamBranch };
                                            }
                                            // eslint-disable-next-line multiline-ternary,no-ternary
                                        }).then(result => {
                                            removeScore(result.value.teamBarth, result.value.teamDavis, result.value.teamBranch, card.points);
                                        })
                                            .then(() => setUsedCards([...usedCards, card.id]));
                                    });
                            });
                        });
                    }}>
                        {/* eslint-disable-next-line react/prop-types,multiline-ternary,no-ternary */}
                        <Title>{usedCards.includes(card.id) ? '\u2717' : card.points}</Title>
                        {/* eslint-disable-next-line max-lines-per-function,react/jsx-key */}
                    </StyledCard>) : cards.map(card => <StyledCard onClick={() => {
                        sweetAlert.fire({
                            allowOutsideClick: false,
                            // eslint-disable-next-line react/prop-types
                            title: card.question,
                            // eslint-disable-next-line sort-keys,multiline-ternary,no-ternary
                            html: card.picture ? (<img style={{ width: '15em',
                                // eslint-disable-next-line sort-keys
                                height: '15em;' }} src={card.picture} alt="Picture"/>) : '',
                            // eslint-disable-next-line sort-keys
                            icon: 'question',
                            // eslint-disable-next-line sort-keys
                            confirmButtonText: 'See Answer'
                            // eslint-disable-next-line max-lines-per-function
                        }).then(() => {
                            sweetAlert.fire({
                                allowOutsideClick: false,
                                icon: 'success',
                                // eslint-disable-next-line react/prop-types
                                title: card.answer,
                                // eslint-disable-next-line sort-keys
                                confirmButtonText: 'Continue',
                                // eslint-disable-next-line max-lines-per-function
                            }).then(() => {
                                sweetAlert.fire({
                                    allowOutsideClick: false,
                                    title: 'Who got it right?',
                                    // eslint-disable-next-line sort-keys
                                    html: '<h3>The Barth\'s <input type="checkbox" id="Barth"  /></h3>' +
                                        '<h3>The Davis\' <input type="checkbox" id="Davis"  /></h3>' +
                                        '<h3>The Branch\'s <input type="checkbox" id="Branch"  /></h3>',
                                    // eslint-disable-next-line sort-keys
                                    confirmButtonText: 'Confirm',
                                    preConfirm: () => {
                                        const teamBarth = sweetAlert.getPopup().querySelector('#Barth').checked;
                                        const teamDavis = sweetAlert.getPopup().querySelector('#Davis').checked;
                                        const teamBranch = sweetAlert.getPopup().querySelector('#Branch').checked;
                                        // console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);

                                        return { teamBarth,
                                            teamDavis,
                                            // eslint-disable-next-line sort-keys
                                            teamBranch };
                                    }
                                    // eslint-disable-next-line multiline-ternary,no-ternary
                                }).then(result => {
                                    updateScore(result.value.teamBarth, result.value.teamDavis, result.value.teamBranch, card.points);
                                })
                                    .then(() => {
                                        sweetAlert.fire({
                                            allowOutsideClick: false,
                                            title: 'Who got it wrong?',
                                            // eslint-disable-next-line sort-keys
                                            html: '<h3>The Barth\'s <input type="checkbox" id="Barth"  /></h3>' +
                                                '<h3>The Davis\' <input type="checkbox" id="Davis"  /></h3>' +
                                                '<h3>The Branch\'s <input type="checkbox" id="Branch"  /></h3>',
                                            // eslint-disable-next-line sort-keys
                                            confirmButtonText: 'Confirm',
                                            preConfirm: () => {
                                                const teamBarth = sweetAlert.getPopup().querySelector('#Barth').checked;
                                                const teamDavis = sweetAlert.getPopup().querySelector('#Davis').checked;
                                                const teamBranch = sweetAlert.getPopup().querySelector('#Branch').checked;
                                                // console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);

                                                return { teamBarth,
                                                    teamDavis,
                                                    // eslint-disable-next-line sort-keys
                                                    teamBranch };
                                            }
                                            // eslint-disable-next-line multiline-ternary,no-ternary
                                        }).then(result => {
                                            removeScore(result.value.teamBarth, result.value.teamDavis, result.value.teamBranch, card.points);
                                        })
                                            .then(() => setUsedCards([...usedCards, card.id]));
                                    });
                            });
                        });
                    }}>
                        {/* eslint-disable-next-line react/prop-types,multiline-ternary,no-ternary */}
                        <Title>{usedCards.includes(card.id) ? '\u2717' : card.points}</Title>
                    </StyledCard>)}
                </GameContainer> </>}
            <ScoreBoardContainer>
                {teams.map(team => <ScoreBoardCard key={team.id} idx={team.id} title={team.name} score={teamIDs[team.id - 1]} avatar={'/Users/jarrenj/scuffedjeopardy/src/assets/dev/JarrenSeniorPicFixed.jpg'}/>)}
            </ScoreBoardContainer>
    </>
    );
};

export default App;
