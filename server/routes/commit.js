const express = require('express');
const api = require('./api')
const router = express.Router();
router.get('/commit', async (req, res) => {
    console.log('/commit 처리 라우팅')
    
    const paramId = req.query.id;
    const paramToken = req.query.token;
    const data = await api.fetchEvents(paramId, paramToken);
    const date = api.getDate();
    let count = 0;
    data.map((_data) => 
        _data.created_at.includes("2020-03-27") ? count += 1 : _data
    );
    const resData = {
        count: count,
        isCommited: `${count!==0}`,
        lastCommit: data[0].created_at
    };
    res.json(resData);
});
// 미들웨어에서 파라미터 확인

module.exports = router;




