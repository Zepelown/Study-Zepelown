const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.locals.pretty = true;
//템플릿 엔진 사용
app.set('view engine', 'jade');

// 사실 윗 코드만 입력하더라도 자동으로 views 폴더를 찾지만
// 처음이니 확인하기 쉽게 하기 위해 이렇게 했다.
app.set('views', './views');

app.use(express.static('public'));

//POST방식을 사용할 떄 바디 파서가 사용자의 요청을 이 모듈이 처리하도록 함.
app.use(bodyParser.urlencoded({ extended: false}));


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

//GET방식 값 전달
//URL을 통하여 값을 전달
app.get('/form', (req, res) => {
    res.render('form');
})

app.get('/form_receiver', (req, res) => {
    var title = req.query.title;
    var description = req.query.description;
    res.send(title + ''+description);

})

//POST방식 값 전달
app.post('/form_receiver', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;

    res.send(title + ", " + description);
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