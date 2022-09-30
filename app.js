const express = require('express');
const { request } = require('http');
const app = express();
const port = 3000; // 서버 포트 번호

app.use(express.urlencoded({extended: true}));

app.get('/', function(req,res){
  res.sendFile(__dirname +'/index.html')
})

// 클라이언트에서 HTTP 요청 메소드 중 GET을 이용해서 'host:port'로 요청을 보내면 실행되는 라우트
// app.post('/store-data', function(req, res){
//   const userName = req.body.name;
//   const userEmail = req.body.email;
//   const userMessage = req.body.message;
//   res.send('확인 후 연락 드리겠습니다. 감사합니다!');
// });

const qs = require('querystring');
if(request.method == 'POST'){
  const body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    const post = qs.parse(body);
    const name = post.name;
    const email = post.email;
    const message = post.message;
  });
}

// app.listen()함수를 사용해서 서버를 실행해준다.
// 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있다.
app.listen(port);