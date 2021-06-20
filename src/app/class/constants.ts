export const Constants = {
    COUNTRIES: [
        {
            name: 'india',
            played: '2',
            won: '2',
            points: 4
        },
        {
            name: 'newZealand',
            played: '1',
            won: '1',
            points: 0
        },
        {
            name: 'southAfrica',
            played: '1',
            won: '1',
            points: 0
        },
        {
            name: 'austraila',
            played: '0',
            won: '0',
            points: 0
        },
        {
            name: 'westIndies',
            played: '0',
            won: '0',
            points: 0
        }

    ],
    TEAMS: {
        india : {
            players: [
                {
                    name: 'Rohit',
                    skill: 'Batting',
                    age: '30',
                    country : 'India'
                },
                {
                    name: 'Virat',
                    skill: 'Batting',
                    age: '33',
                    country : 'India'
                },
                {
                    name: 'Sachin',
                    skill: 'Batting',
                    age: '40',
                    country : 'India'
                },
                {
                    name: 'Bumrah',
                    skill: 'Bowling',
                    age: '30',
                    country : 'India'
                },
                {
                    name: 'Shami',
                    skill: 'Bowling',
                    age: '34',
                    country : 'India'
                }
            ],
            country: 'india'
        },
        newZealand: {
            players: [
                {
                    name: 'kane',
                    skill: 'Batting',
                    age: '30',
                    country : 'NewZealand'
                },
                {
                    name: 'Taylor',
                    skill: 'Batting',
                    age: '33',
                    country : 'NewZealand'
                },
                {
                    name: 'Macculum',
                    skill: 'Batting',
                    age: '40',
                    country : 'NewZealand'
                },
                {
                    name: 'Boult',
                    skill: 'Bowling',
                    age: '30',
                    country : 'NewZealand'
                },
                {
                    name: 'Bond',
                    skill: 'Bowling',
                    age: '34',
                    country : 'NewZealand'
                }
            ],
            country: 'NewZealand'
        },
        austraila: {
            players: [
                {
                    name: 'Smith',
                    skill: 'Batting',
                    age: '30',
                    country : 'Austraila'
                },
                {
                    name: 'Glicrist',
                    skill: 'Batting',
                    age: '33',
                    country : 'Austraila'
                },
                {
                    name: 'Don',
                    skill: 'Batting',
                    age: '60',
                    country : 'Austraila'
                },
                {
                    name: 'Shane',
                    skill: 'Bowling',
                    age: '30',
                    country : 'Austraila'
                },
                {
                    name: 'Starc',
                    skill: 'Bowling',
                    age: '34',
                    country : 'Austraila'
                }
            ],
            country: 'Austraila'
            
        },
        southAfrica: {
            players: [
                {
                    name: 'ABD',
                    skill: 'Batting',
                    age: '30',
                    country : 'South Africa'
                },
                {
                    name: 'Smith',
                    skill: 'Batting',
                    age: '33',
                    country : 'South Africa'
                },
                {
                    name: 'Kallis',
                    skill: 'Batting',
                    age: '60',
                    country : 'South Africa'
                },
                {
                    name: 'Steyn',
                    skill: 'Bowling',
                    age: '30',
                    country : 'South Africa'
                },
                {
                    name: 'Morkel',
                    skill: 'Bowling',
                    age: '34',
                    country : 'South Africa'
                }
            ],
            country: 'South Africa'

        },
        westIndies: {
            players: [
                {
                    name: 'Gayle',
                    skill: 'Batting',
                    age: '30',
                    country : 'West Indies'
                },
                {
                    name: 'Garry Sobers',
                    skill: 'Batting',
                    age: '33',
                    country : 'West Indies'
                },
                {
                    name: 'Vivan Richards',
                    skill: 'Batting',
                    age: '60',
                    country : 'West Indies'
                },
                {
                    name: 'Holder',
                    skill: 'Bowling',
                    age: '30',
                    country : 'West Indies'
                },
                {
                    name: 'Holding',
                    skill: 'Bowling',
                    age: '34',
                    country : 'West Indies'
                }
            ],
            country: 'West Indies'

        },
    },

    MATCHES: [
        {
            country: 'India vs New Zealand',
            played: true,
            summary: {
                winner: 'india',
                losser: 'newZealand',
                mom: 'sachin',
                bom: 'bumrah',
                bestFielder: 'virat',
            },
            firstTeam: 'india',
            secondTeam: 'newZealand'
        },
        {
            country: 'India vs South Africa',
            played: true,
            summary: {
                winner: 'india',
                losser: 'southAfrica',
                mom: 'sachin',
                bom: 'bumrah',
                bestFielder: 'rohit',
            },
            firstTeam: 'india',
            secondTeam: 'southAfrica'
        },
        {
            country: 'New Zealand vs Australia',
            played: false,
            summary: {},
            firstTeam: 'australia',
            secondTeam: 'newZealand'
        },
        {
            country: 'West Indies vs South Africa',
            played: false,
            summary: {},
            firstTeam: 'westIndies',
            secondTeam: 'southAfrica'
        }
    ],
    
    TABLE: [
        {
           
            details: {
                country: 'India',
                played: 2,
                won: 2,
                lost: 0,
                points: 4
            }
        },
        {
            details: {
                country: 'New Zealand',
                played: 1,
                won: 0,
                lost: 1,
                points: 0
            }
        },
        {
            details: {
                country: 'Australia',
                played: 0,
                won: 0,
                lost: 0,
                points: 0
            }
        },
        {
            details: {
                country: 'West Indies',
                played: 0,
                won: 0,
                lost: 0,
                points: 0
            }
        },
        {
            details: {
                country: 'South Africa',
                played: 1,
                won: 0,
                lost: 1,
                points: 0
            }
        }
    ]

}