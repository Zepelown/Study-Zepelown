const express = require('express');
const app = express();
const port = 3000;

app.locals.pretty = true;
//템플릿 엔진 사용
app.set('view engine', 'jade');

// 사실 윗 코드만 입력하더라도 자동으로 views 폴더를 찾지만
// 처음이니 확인하기 쉽게 하기 위해 이렇게 했다.
app.set('views', './views');

app.use(express.static('public'));


app.get('/template', (req, res) => {
    res.render('temp', {time:Date(), _title:'JADE'});
})
//여기까지가 템플릿

//쿼리 스트링
app.get('/topic', (req, res) => {
    var topics = [
        'JavaScript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
     <a href="/topic?id=0">JavaScript</a><br>
     <a href="/topic?id=1">Nodejs</a><br>
     <a href="/topic?id=2">Express</a><br><br>
     ${topics[req.query.id]}
    `
    res.send(output);
})

//시멘틱 URL
app.get('/route/:id', (req, res) => {
    res.send('Hello Router'+ req.params.id + '!!!')
})

app.get('route/:id/:mode', (req, res) => {
    res.send(req.params.id+','+ req.params.mode)
})



app.get('dynamic', (req, res) => {
    var output = ``
    res.send('')
})

app.get('/', (req, res) => {
    res.send('HELLO WORLD!!');
});

app.get('/login', (req, res) => {
    res.send('Login plz');
});

app.listen(port, () => {
    console.log(`Connected ${port}!`);
});