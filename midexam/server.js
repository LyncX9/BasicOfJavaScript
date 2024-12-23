const express = require('express');
const app = express();
const port = 8000;

const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

app.get('/', (req, res) => {
    res.send(motoGP);
});

app.get('/country', (req, res) => {
    const groupedByCountry = {};
    motoGP.forEach(race => {
        const country = race.winner.country;
        if (!groupedByCountry[country]) {
            groupedByCountry[country] = [];
        }
        groupedByCountry[country].push(race);
    });
    res.send(groupedByCountry);
});

app.get('/name', (req, res) => {
    const groupedByName = {};
    motoGP.forEach(race => {
        const name = `${race.winner.firstName} ${race.winner.lastName}`;
        if (!groupedByName[name]) {
            groupedByName[name] = [];
        }
        groupedByName[name].push(race);
    });
    res.send(groupedByName);
});

app.use((req, res) => {
    res.status(400).send('Bad Request');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});