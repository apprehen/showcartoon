var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 返回数据是 0--->代表第0个tab的数据   1-----> 代表的第一屏
router.get('/api/index_list/0/data/1',(req,res)=>{
  res.send({
    code:0,
    data: {
      topBar: [
        {id:1, label: 'Megumi'},
        {id:2, label: 'Komi'},
        {id:3, label: 'toka'},
        {id:4, label: 'kurumi'},
        {id:5, label: 'Miku'},
        {id:6, label: '七罪'},
        {id:7, label: '祈妹'},
        {id:8, label: 'saber'}
      ],
      data: [
        // 这是swiper
        {
          id:0,
          type: 'SwiperList',
          data: [
            {
              id: 1,
              imgurl: ('../public/images')
            },
            {
              id: 2,
              imgurl: ('../public/images/Swiper/2.jpg')
            },
            {
              id: 3,
              imgurl: ('../public/images/Swiper/3.jpg')
            },
            {
              id: 4,
              imgurl: ('../public/images/Swiper/4.jpg')
            }
          ]
        },
        // Icons
        {
          id:1,
          type: 'IconsList',
          data: [
            {
              id: 1,
              title: '栗帽',
              imgUrl: ('../public/images/Icons/1.png')
            },
            {
              id: 2,
              title: '不中嘞',
              imgUrl: ('../public/images/Icons/2.jpg')
            },
            {
              id: 3,
              title: '寄寄子',
              imgUrl: ('../public/images/Icons/3.jpg')
            },
            {
              id: 4,
              title: 'Komi桑',
              imgUrl: ('../public/images/Icons/4.jpg')
            },
            {
              id: 5,
              title: '可爱捏',
              imgUrl: ('../public/images/Icons/5.jpg')
            }
          ]
        },
        // 爆款推荐
        {
          id:3,
          type:'RecommendList',
          data: [
            {
              id: 1,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('../public/images/Recommend/3.jpg')
            },
            {
              id: 2,
              name: '铃',
              content: 'Explosion',
              age: 18,
              imgUrl: ('../public/images/Recommend/4.jpg')
            },
            {
              id: 3,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('../public/images/Recommend/5.jpg')
            },
            {
              id: 4,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('../public/images/Recommend/6.jpg')
            },
            {
              id: 5,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('../public/images/Recommend/7.jpg')
            },
            {
              id: 6,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('../public/images/Recommend/8.jpg')
            }
          ]
        },
        // 猜你喜欢
        {
          id:4,
          type:'LikeList',
          data: [
            {
              id: 1,
              title: '兔兔娘',
              content: 'FF14性感兔娘',
              imgUrl: ('../public/images/Likes/1.jpg')
            },
            {
              id: 2,
              title: '丽贝卡',
              content: '亚当重锤',
              imgUrl: ('../public/images/Likes/2.jpg')
            },
            {
              id: 3,
              title: 'Miku',
              content: 'fufu可爱捏',
              imgUrl: ('../public/images/Likes/3.jpg')
            }
          ]
        }
      ]
    }
  })
})

module.exports = router;
