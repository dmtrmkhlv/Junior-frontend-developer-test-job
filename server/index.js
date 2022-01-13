const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 3001
const goodList_path = path.resolve(__dirname, './data/goodsList.json');

const app = express();

app.use(express.json());

app.get('/catalog', (req, res) => {
    fs.readFile(goodList_path, 'utf8', (err, data) => {
        res.send(data);
    })
});

app.post('/catalog', (req, res) => {

    fs.readFile(goodList_path, 'utf8', (err, data) => {
        let goodList = JSON.parse(data);
        let good = req.body;
        goodList.push(good);
        
        fs.writeFile(goodList_path, JSON.stringify(goodList), (err) => {
            res.send(goodList);
            res.end();
        });
    });

});

app.delete('/catalog/:id', (req, res) => {
    fs.readFile(goodList_path, 'utf8', (err, data) => {
        let goodList = JSON.parse(data);
        const itemId = req.params.id;
        let index = goodList.findIndex((item) => item.product_id == itemId);
        goodList.splice(index, 1);

        fs.writeFile(goodList_path, JSON.stringify(goodList), (err) => {
            res.send(goodList);
            res.end();
        });
    });
});


app.listen(port, function () {
    console.log('server is running on port ' + port + '!')
})