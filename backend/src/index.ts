import express from 'express';
import cors from 'cors';

const app = express();
app.use(
	cors({
		origin: '*'
	})
);
const PORT = 5000;

app.get('/api/hello', (req, res) => {
	res.send({ message: ':3' });
});

app.listen(PORT, () => {
	console.log('The application is listening ' + 'on port http://localhost/' + PORT);
});
