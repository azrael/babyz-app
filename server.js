const express = require('express'),
    app = express(),
    port = 8000;

app.use(express.static('docs'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
