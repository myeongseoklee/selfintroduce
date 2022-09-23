const express = require('express');
const app = express();
const port = 3000; // 서버 포트 번호

app.use(express.urlencoded({extended: false}));

app.get('/selfintroduce', function(req, res){
  res.send('<form method="POST" action="/store-data"><div><lable for="name">성함 : </lable><input type="text"  placeholder="본명을 적어주세요" name="name"></div><div><lable for="email">e-mail : </lable><input type="text"  placeholder="회신 받을 e-mail을 정확히 적어주세요" name="email"></div><div><lable for="message">내용 : </lable><textarea name="message" cols="100" rows="10" placeholder="자세한 내용을 적어주세요" ></textarea></div><div><input type="button" oncdtck="mailSend();" value="제출하기"></div><div style="display:none;" id="thankyou_message"><h3><em>연락해주셔서 감사합니다.</em>24시간이내에 회신드리도록 하겠습니다. :)</h3></div></form>');
});

// 클라이언트에서 HTTP 요청 메소드 중 GET을 이용해서 'host:port'로 요청을 보내면 실행되는 라우트
app.post('/store-data', function(req, res){
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userMessage = req.body.message;
  res.send('확인 후 연락 드리겠습니다. 감사합니다!');
});

// app.listen()함수를 사용해서 서버를 실행해준다.
// 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있다.
app.listen(port);
