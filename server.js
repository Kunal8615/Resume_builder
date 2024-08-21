const express = require('express');
const app = express();
const port = 4000; // You can change the port number if needed


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//demo check