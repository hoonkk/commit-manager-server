const express = require('express');
const commitRouter = require('./routes/commit');
const userinfoRouter = require('./routes/userinfo');
const userEventRouter = require('./routes/userevent');
const loginRouter = require('./routes/login');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3001);
app.use(express.static('public'));
app.use(cors());

app.use('/', commitRouter);
app.use('/', userinfoRouter);
app.use('/', userEventRouter);
app.use('/', loginRouter);
app.listen(app.get('port'), () => { 
    console.log('익스프레스 서버를 시작합니다, Port : ' + app.get('port'));
});