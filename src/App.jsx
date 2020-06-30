import React, { useState } from 'react';
import {
    CategoryCard,
    ColumnContainer,
    GameContainer, ScoreBoardCard,
    ScoreBoardContainer, StyledCard, Title,
} from './Components/Custom/CustomComponents';

import { cards, categories, teams, cards2, categories2 } from './data.json';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const sweetAlert = withReactContent(Swal);

// eslint-disable-next-line max-lines-per-function
const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [teamOneScore, setTeamOneScore] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [teamTwoScore, setTeamTwoScore] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [teamThreeScore, setTeamThreeScore] = useState(0);
    const teamIDs = [
        teamOneScore,
        teamTwoScore,
        teamThreeScore
    ];

    const [usedCards, setUsedCards] = useState([]);
    const [usedCards2, setUsedCards2] = useState([]);

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

    const setOfUsedCards = new Set(usedCards);

    return (
        <>
            <ColumnContainer>
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
                        text: card.description && card.description,
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
            </GameContainer>
            <ScoreBoardContainer>
                {teams.map(team => <ScoreBoardCard key={team.id} idx={team.id} title={team.name} score={teamIDs[team.id - 1]} avatar={'/Users/jarrenj/scuffedjeopardy/src/assets/dev/JarrenSeniorPicFixed.jpg'}/>)}
            </ScoreBoardContainer>
    </>
    );
};

export default App;
