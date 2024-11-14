const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/data/:id', (req, res) => {
    console.log("Reached uncached endpoint");
    res.send('This is uncached data');
});

app.get('/data/:id/:value', (req, res) => {
    console.log("Reached cached endpoint");
    res.send('This is cached data');
});


app.post('/data', (req, res) => {
    const receivedData = req.body;
    res.json({
        message: 'Data received successfully!',
        receivedData: receivedData
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});