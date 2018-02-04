var tabs = ['为你推荐', '女装', '男装', '男女内衣', '女鞋', '男鞋', '箱包皮具', '手表配饰', '美妆个护', '母婴', '运动户外', '手机数码', '家用电器', '家居家纺', '家具家装', '生活超市', '唯品国际', '唯品优选', '唯品·奢']

Page({
  data: {
    tabs: tabs,
    isChoose: 0
  },
  onLoad: function () {

  },
  chooseSort: function (e) {
    this.setData({
      isChoose: e.target.dataset.key
    })
  }
})