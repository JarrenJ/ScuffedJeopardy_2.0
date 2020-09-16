import React, { useState } from 'react';
import {
    CategoryCard,
    ColumnContainer,
    GameContainer, ScoreBoardCard,
    ScoreBoardContainer, StyledCard, Title, FinalContainer
} from './Components/Custom/CustomComponents';

// import finalPhoto from './assets/dev/final.jpeg';

import { cards, categories, teams, cards2, categories2 } from './data.json';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const sweetAlert = withReactContent(Swal);

// eslint-disable-next-line max-lines-per-function,max-statements
const App = () => {

    const [teamOneScore, setTeamOneScore] = useState(0);
    const [teamTwoScore, setTeamTwoScore] = useState(0);
    const [teamThreeScore, setTeamThreeScore] = useState(0);
    const [teamFourScore, setTeamFourScore] = useState(0);
    const [teamFiveScore, setTeamFiveScore] = useState(0);

    const teamIDs = [
        teamOneScore,
        teamTwoScore,
        teamThreeScore,
        teamFourScore,
        teamFiveScore
    ];

    const [usedCards, setUsedCards] = useState([]);

    // eslint-disable-next-line max-params
    const updateScore = (teamOne, teamTwo, teamThree, teamFour, teamFive, points) => {
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamOnePoints = teamOne ? (setTeamOneScore(teamOneScore + points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamTwoPoints = teamTwo ? (setTeamTwoScore(teamTwoScore + points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamThreePoints = teamThree ? (setTeamThreeScore(teamThreeScore + points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamFourPoints = teamFour ? (setTeamFourScore(teamFourScore + points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamFivePoints = teamFive ? (setTeamFiveScore(teamFiveScore + points)) : null;

        // eslint-disable-next-line no-sequences
        return teamOnePoints, teamTwoPoints, teamThreePoints, teamFourPoints, teamFivePoints;
    };

    // eslint-disable-next-line max-params
    const removeScore = (teamOne, teamTwo, teamThree, teamFour, teamFive, points) => {
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamOnePoints = teamOne ? (setTeamOneScore(teamOneScore - points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamTwoPoints = teamTwo ? (setTeamTwoScore(teamTwoScore - points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamThreePoints = teamThree ? (setTeamThreeScore(teamThreeScore - points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamFourPoints = teamFour ? (setTeamFourScore(teamFourScore - points)) : null;
        // eslint-disable-next-line multiline-ternary,no-ternary
        const teamFivePoints = teamFive ? (setTeamFiveScore(teamFiveScore - points)) : null;

        // eslint-disable-next-line no-sequences
        return teamOnePoints, teamTwoPoints, teamThreePoints, teamFourPoints, teamFivePoints;
    };

    // const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    // const testArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    const setOfUsedCards = new Set(usedCards);
    // const setOfUsedCards = new Set(testArray);
    // const setOfUsedCards = new Set(testArray2);

    return (
        <>
            {/* eslint-disable-next-line no-ternary */}
            {setOfUsedCards.size === 50
                // eslint-disable-next-line multiline-ternary
                ? <FinalContainer>
                    {/* eslint-disable-next-line max-lines-per-function */}
                    <StyledCard onClick={() => {
                        sweetAlert.fire({
                            allowOutsideClick: false,
                            // eslint-disable-next-line react/prop-types
                            title: 'What town did I grow up in?\nWhat sports did I play in HS and Middle School / Pop-warner league?\nHow many different schools have i attended?\nWas I a bully and/or was I ever bullied?',
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
                                title: "Onsted\nFootball, Soccor\n3\nYes and yes, I actually had to move schools.",
                                // html: <img style={{ width: '55em',
                                //     // eslint-disable-next-line sort-keys
                                //     height: '45em' }} src={finalPhoto} alt="Picture"/>,
                                // eslint-disable-next-line sort-keys
                                width: 1500,
                                confirmButtonText: 'Continue',
                                // eslint-disable-next-line max-lines-per-function
                            });
                        });
                    }}>
                        {/* eslint-disable-next-line react/prop-types,multiline-ternary,no-ternary */}
                        <Title>Jarren Jackson</Title>
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
                            html: card.picture ? (<img style={{ width: '25em',
                                // eslint-disable-next-line sort-keys
                                height: '30em;' }} src={card.picture} alt="Picture"/>) : '',
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
                                    html: '<h3>Aaron Bopp <input type="checkbox" id="a"  /></h3>' +
                                        '<h3>Alan Joseph Hagemann <input type="checkbox" id="b"  /></h3>' +
                                        '<h3>Christian Jackson <input type="checkbox" id="c"  /></h3>' +
                                        '<h3>Thomas Rudkin <input type="checkbox" id="d"  /></h3>' +
                                        '<h3>Patrick Trani <input type="checkbox" id="e"  /></h3>',
                                    // eslint-disable-next-line sort-keys
                                    confirmButtonText: 'Confirm',
                                    preConfirm: () => {
                                        const team0 = sweetAlert.getPopup().querySelector('#a').checked;
                                        const team1 = sweetAlert.getPopup().querySelector('#b').checked;
                                        const team2 = sweetAlert.getPopup().querySelector('#c').checked;
                                        const team3 = sweetAlert.getPopup().querySelector('#d').checked;
                                        const team4 = sweetAlert.getPopup().querySelector('#e').checked;
                                        // console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);

                                        return { team0, team1, team2, team3, team4 };
                                    }
                                    // eslint-disable-next-line multiline-ternary,no-ternary
                                }).then(result => {
                                    updateScore(result.value.team0, result.value.team1, result.value.team2, result.value.team3, result.value.team4, card.double ? card.points*2 : card.points);
                                })
                                    .then(() => {
                                        sweetAlert.fire({
                                            allowOutsideClick: false,
                                            title: 'Who got it wrong?',
                                            // eslint-disable-next-line sort-keys
                                            html: '<h3>Aaron Bopp <input type="checkbox" id="a"  /></h3>' +
                                                '<h3>Alan Joseph Hagemann <input type="checkbox" id="b"  /></h3>' +
                                                '<h3>Christian Jackson <input type="checkbox" id="c"  /></h3>' +
                                                '<h3>Thomas Rudkin <input type="checkbox" id="d"  /></h3>' +
                                                '<h3>Patrick Trani <input type="checkbox" id="e"  /></h3>',
                                            // eslint-disable-next-line sort-keys
                                            confirmButtonText: 'Confirm',
                                            preConfirm: () => {
                                                const team0 = sweetAlert.getPopup().querySelector('#a').checked;
                                                const team1 = sweetAlert.getPopup().querySelector('#b').checked;
                                                const team2 = sweetAlert.getPopup().querySelector('#c').checked;
                                                const team3 = sweetAlert.getPopup().querySelector('#d').checked;
                                                const team4 = sweetAlert.getPopup().querySelector('#e').checked;
                                                // console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);

                                                return { team0, team1, team2, team3, team4 };
                                            }
                                            // eslint-disable-next-line multiline-ternary,no-ternary
                                        }).then(result => {
                                            removeScore(result.value.team0, result.value.team1, result.value.team2, result.value.team3, result.value.team4, card.points);
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
                                height: '15em;' }} src={card.picture} alt="Picture"/>) : card.video ? (
                                <iframe width="450" height="315" src="https://www.youtube.com/embed/qqAiNyS03Zs"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>) : '',
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
                                    html: '<h3>Aaron Bopp <input type="checkbox" id="a"  /></h3>' +
                                        '<h3>Alan Joseph Hagemann <input type="checkbox" id="b"  /></h3>' +
                                        '<h3>Christian Jackson <input type="checkbox" id="c"  /></h3>' +
                                        '<h3>Thomas Rudkin <input type="checkbox" id="d"  /></h3>' +
                                        '<h3>Patrick Trani <input type="checkbox" id="e"  /></h3>',
                                    // eslint-disable-next-line sort-keys
                                    confirmButtonText: 'Confirm',
                                    preConfirm: () => {
                                        const team0 = sweetAlert.getPopup().querySelector('#a').checked;
                                        const team1 = sweetAlert.getPopup().querySelector('#b').checked;
                                        const team2 = sweetAlert.getPopup().querySelector('#c').checked;
                                        const team3 = sweetAlert.getPopup().querySelector('#d').checked;
                                        const team4 = sweetAlert.getPopup().querySelector('#e').checked;
                                        // console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);

                                        return { team0, team1, team2, team3, team4 };
                                    }
                                    // eslint-disable-next-line multiline-ternary,no-ternary
                                }).then(result => {
                                    updateScore(result.value.team0, result.value.team1, result.value.team2, result.value.team3, result.value.team4, card.points);
                                })
                                    .then(() => {
                                        sweetAlert.fire({
                                            allowOutsideClick: false,
                                            title: 'Who got it wrong?',
                                            // eslint-disable-next-line sort-keys
                                            html: '<h3>Aaron Bopp <input type="checkbox" id="a"  /></h3>' +
                                                '<h3>Alan Joseph Hagemann <input type="checkbox" id="b"  /></h3>' +
                                                '<h3>Christian Jackson <input type="checkbox" id="c"  /></h3>' +
                                                '<h3>Thomas Rudkin <input type="checkbox" id="d"  /></h3>' +
                                                '<h3>Patrick Trani <input type="checkbox" id="e"  /></h3>',
                                            // eslint-disable-next-line sort-keys
                                            confirmButtonText: 'Confirm',
                                            preConfirm: () => {
                                                const team0 = sweetAlert.getPopup().querySelector('#a').checked;
                                                const team1 = sweetAlert.getPopup().querySelector('#b').checked;
                                                const team2 = sweetAlert.getPopup().querySelector('#c').checked;
                                                const team3 = sweetAlert.getPopup().querySelector('#d').checked;
                                                const team4 = sweetAlert.getPopup().querySelector('#e').checked;
                                                // console.log(`Barth = ${teamBarth} Davis = ${teamDavis} Branch = ${teamBranch}`);

                                                return { team0, team1, team2, team3, team4 };
                                            }
                                            // eslint-disable-next-line multiline-ternary,no-ternary
                                        }).then(result => {
                                            removeScore(result.value.team0, result.value.team1, result.value.team2, result.value.team3, result.value.team4, card.points);
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
