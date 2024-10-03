const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const app = express();

// Configuração do livereload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});

app.use(connectLiveReload());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

app.get('/admin/denuncias', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'denuncias.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
