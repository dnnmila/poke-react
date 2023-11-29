const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001; // Asegúrate de que este puerto no esté en uso

app.use(express.json());

const db = new sqlite3.Database('./pokimon.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado a la base de datos SQLite.');
});

app.get('/pokemons', (req, res) => {
    db.all('SELECT * FROM pokemons', [], (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
