var express = require('express');
var router = express.Router();
const connectdb = require('../public/javascripts/connect.js')
/* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// connectdb.content()
// console.log(connectdb)
// console.log(connectdb.query('SELECT * FROM PUBLIC.good_list'))
// const res = await connectdb.query('SELECT * FROM PUBLIC.good_list')
// console.log(res)
// connectdb.query('SELECT * FROM PUBLIC.good_list',(err,res)=>{
//   console.log(res)
// })

// 返回分类页面的数据为三层数据捏
router.get('/api/list',(req,res,next)=>{
  res.send({
    code:0,
    data:[
      {
        // first
        id:0,
        name: '推荐',
        data: [
          {
            // seconed
            id:0,
            name: '推荐',
            list: [
              {
                //third
                id:0,
                name: '凉门',
                imgUrl: 'static/images/list/suki.png'
              },
              {
                //third
                id:1,
                name: '山田凉',
                imgUrl: 'static/images/list/suki.png'
              },
              {
                //third
                id:2,
                name: '屑凉',
                imgUrl: 'static/images/list/suki.png'
              },
              {
                //third
                id:3,
                name: '贝斯',
                imgUrl: 'static/images/list/suki.png'
              },
              {
                //third
                id:4,
                name: '蓝发',
                imgUrl: 'static/images/list/suki.png'
              },
              {
                //third
                id:5,
                name: 'SUKI',
                imgUrl: 'static/images/list/suki.png'
              } 
            ]
          }
        ]
      },
      {
        // first
        id:1,
        name: '虹夏',
        data: [
          {
            // seconed
            id:0,
            name: '虹夏',
            list: [
              {
                //third
                id:0,
                name: '虹门',
                imgUrl: 'static/images/list/mama.jpg'
              },
              {
                //third
                id:1,
                name: '下北泽の天使',
                imgUrl: 'static/images/list/mama.jpg'
              },
              {
                //third
                id:2,
                name: '小天使',
                imgUrl: 'static/images/list/mama.jpg'
              },
              {
                //third
                id:3,
                name: '架子鼓',
                imgUrl: 'static/images/list/mama.jpg'
              },
              {
                //third
                id:4,
                name: '黄发',
                imgUrl: 'static/images/list/mama.jpg'
              },
              {
                //third
                id:5,
                name: 'SUKI',
                imgUrl: 'static/images/list/mama.jpg'
              } 
            ]
          }
        ]
      },
      {
        // first
        id:2,
        name: '喜多',
        data: [
          {
            // seconed
            id:0,
            name: '喜多',
            list: [
              {
                //third
                id:0,
                name: '喜多！',
                imgUrl: 'static/images/list/xiduoxiduo.jpg'
              },
              {
                //third
                id:1,
                name: '下北泽の天使',
                imgUrl: 'static/images/list/xiduoxiduo.jpg'
              },
              {
                //third
                id:2,
                name: '小天使',
                imgUrl: 'static/images/list/xiduoxiduo.jpg'
              },
              {
                //third
                id:3,
                name: '主唱',
                imgUrl: 'static/images/list/xiduoxiduo.jpg'
              },
              {
                //third
                id:4,
                name: '红发',
                imgUrl: 'static/images/list/xiduoxiduo.jpg'
              },
              {
                //third
                id:5,
                name: 'SUKI',
                imgUrl: 'static/images/list/xiduoxiduo.jpg'
              } 
            ]
          }
        ]
      },
      {
        // first
        id:3,
        name: '波奇酱',
        data: [
          {
            // seconed
            id:0,
            name: '波奇酱',
            list: [
              {
                //third
                id:0,
                name: '波门！',
                imgUrl: 'static/images/list/boqi.jpg'
              },
              {
                //third
                id:1,
                name: '小孤独',
                imgUrl: 'static/images/list/boqi.jpg'
              },
              {
                //third
                id:2,
                name: '吉他英雄',
                imgUrl: 'static/images/list/boqi.jpg'
              },
              {
                //third
                id:3,
                name: '吉他',
                imgUrl: 'static/images/list/boqi.jpg'
              },
              {
                //third
                id:4,
                name: '粉发',
                imgUrl: 'static/images/list/boqi.jpg'
              },
              {
                //third
                id:5,
                name: 'SUKIKKKKK',
                imgUrl: 'static/images/list/boqi.jpg'
              } 
            ]
          }
        ]
      },
      {
        // first
        id:4,
        name: '02',
        data: [
          {
            // seconed
            id:0,
            name: '02',
            list: [
              {
                //third
                id:0,
                name: 'darling！',
                imgUrl: 'static/images/list/02.jpg'
              },
              {
                //third
                id:1,
                name: '002',
                imgUrl: 'static/images/list/02.jpg'
              },
              {
                //third
                id:2,
                name: '国家队',
                imgUrl: 'static/images/list/02.jpg'
              },
              {
                //third
                id:3,
                name: '望鹤兰',
                imgUrl: 'static/images/list/02.jpg'
              },
              {
                //third
                id:4,
                name: '粉发',
                imgUrl: 'static/images/list/02.jpg'
              },
              {
                //third
                id:5,
                name: 'SUKIKKKKK',
                imgUrl: 'static/images/list/02.jpg'
              } 
            ]
          }
        ]
      }
    ]
  })
})

// 返回shoplist的数据
router.get('/api/goods/shopList',async (req,res,next)=>{
  let searchName = req.query.searchName
  let type = req.query.type
  let ordermethod = req.query.ordermethod
  const result = await connectdb()
  let results
  if (type) {
    results = await result.query(`SELECT * FROM PUBLIC.good_list where name like '%${searchName}%' order by ${type} ${ordermethod} `)
  } else {
    results = await result.query(`SELECT * FROM PUBLIC.good_list where name like '%${searchName}%'`)
  }
  res.send({
    code:0,
    data:results.rows
  })
})

// 这是首页推荐的数据
// 返回数据是 0--->代表第0个tab的数据   1-----> 代表的第一屏
router.get('/api/index_list/0/data/1',(req,res,next)=>{
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
              imgurl: 'static/images/Swiper/1.jpg'
            },
            {
              id: 2,
              imgurl: ('static/images/Swiper/2.jpg')
            },
            {
              id: 3,
              imgurl: ('static/images/Swiper/3.jpg')
            },
            {
              id: 4,
              imgurl: ('static/images/Swiper/4.jpg')
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
              imgUrl: ('static/images/Icons/1.png')
            },
            {
              id: 2,
              title: '不中嘞',
              imgUrl: ('static/images/Icons/2.jpg')
            },
            {
              id: 3,
              title: '寄寄子',
              imgUrl: ('static/images/Icons/3.jpg')
            },
            {
              id: 4,
              title: 'Komi桑',
              imgUrl: ('static/images/Icons/4.jpg')
            },
            {
              id: 5,
              title: '可爱捏',
              imgUrl: ('static/images/Icons/5.jpg')
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
              imgUrl: ('static/images/Recommend/3.jpg')
            },
            {
              id: 2,
              name: '铃',
              content: 'Explosion',
              age: 18,
              imgUrl: ('static/images/Recommend/4.jpg')
            },
            {
              id: 3,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('static/images/Recommend/5.jpg')
            },
            {
              id: 4,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('static/images/Recommend/6.jpg')
            },
            {
              id: 5,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('static/images/Recommend/7.jpg')
            },
            {
              id: 6,
              name: 'Megumi',
              content: 'Explosion',
              age: 18,
              imgUrl: ('static/images/Recommend/8.jpg')
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
              imgUrl: ('static/images/Likes/1.jpg')
            },
            {
              id: 2,
              title: '丽贝卡',
              content: '亚当重锤',
              imgUrl: ('static/images/Likes/2.jpg')
            },
            {
              id: 3,
              title: 'Miku',
              content: 'fufu可爱捏',
              imgUrl: ('static/images/Likes/3.jpg')
            }
          ]
        }
      ]
    }
  })
})

// 这是第一个tab Komi的数据
router.get('/api/index_list/1/data/1',(req,res,next)=>{
  res.send({
    code:1,
    data: [
      // adList
      // 广告
      {
        id:1,
        type: 'AdList',
        data: [
          {
            id:1,
            imgUrl: 'static/images/Other/1.jpg'
          },
          {
            id:2,
            imgUrl: 'static/images/Other/2.jpg'
          }
        ]
      },
      // 猜你喜欢
      {
        id:2,
        type:'LikeList',
        data: [
          {
            id: 1,
            title: '兔兔娘',
            content: 'FF14性感兔娘',
            imgUrl: ('static/images/Likes/4.jpg')
          },
          {
            id: 2,
            title: '丽贝卡',
            content: '亚当重锤',
            imgUrl: ('static/images/Likes/5.jpg')
          },
          {
            id: 3,
            title: 'Miku',
            content: 'fufu可爱捏',
            imgUrl: ('static/images/Likes/6.jpg')
          }
        ]
      }
    ]
  })
})

// 这是第二个tab toka的数据
router.get('/api/index_list/2/data/1',(req,res,next)=>{
  res.send({
    code: 2,
    data: [
      // 广告 AdList
      {
        id:1,
        type: 'AdList',
        data: [
          {
            id:1,
            imgUrl: 'static/images/Other/3.jpg'
          },
          {
            id:2,
            imgUrl: 'static/images/Other/4.jpg'
          }
        ]
      },
      // 喜欢列表 like
      {
        id:2,
        type:'LikeList',
        data: [
          {
            id: 1,
            title: '兔兔娘',
            content: 'FF14性感兔娘',
            imgUrl: ('static/images/Likes/7.jpg')
          },
          {
            id: 2,
            title: '丽贝卡',
            content: '亚当重锤',
            imgUrl: ('static/images/Likes/8.jpg')
          },
          {
            id: 3,
            title: 'Miku',
            content: 'fufu可爱捏',
            imgUrl: ('static/images/Likes/9.jpg')
          }
        ]
      }
    ]
  })
})

// 这是第三个tab kurumi的数据
router.get('/api/index_list/3/data/1',(req,res,next)=>{
  res.send({
    code: 2,
    data: [
      // 广告 AdList
      {
        id:1,
        type: 'AdList',
        data: [
          {
            id:1,
            imgUrl: 'static/images/Other/5.jpg'
          },
          {
            id:2,
            imgUrl: 'static/images/Other/6.jpg'
          }
        ]
      },
      // 喜欢列表 like
      {
        id:2,
        type:'LikeList',
        data: [
          {
            id: 1,
            title: '兔兔娘',
            content: 'FF14性感兔娘',
            imgUrl: ('static/images/Likes/10.jpg')
          },
          {
            id: 2,
            title: '丽贝卡',
            content: '亚当重锤',
            imgUrl: ('static/images/Likes/11.jpg')
          },
          {
            id: 3,
            title: 'Miku',
            content: 'fufu可爱捏',
            imgUrl: ('static/images/Likes/12.jpg')
          }
        ]
      }
    ]
  })
})

// 
module.exports = router;
