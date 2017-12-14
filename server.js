const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'node_modules')));
app.use(express.static(path.resolve(__dirname, 'public')));

// import routes

app.get('*', (req, res) => {
	console.log('req received')
	res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.use((err, req, res, next) => {
	console.log('err received!!!', err)
})

app.listen(8080, () => {
	console.log('Server is listening on port 8080...')
})