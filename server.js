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

app.use('/admin', express.static(path.join(__dirname, 'admin', 'scripts')));
app.use('/client', express.static(path.join(__dirname, 'client', 'scripts')));

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

app.get('/admin/denuncias', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'denuncias.html'));
});

app.get('/client', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/client/denunciar', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'denunciar.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
