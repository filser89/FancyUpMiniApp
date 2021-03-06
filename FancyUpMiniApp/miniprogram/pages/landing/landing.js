// pages/landing/landing.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    const page = this
    wx.request({
      url: 'http://localhost:3000/api/v1/rentals',
      success: (res) => {
        // console.log(res)
        page.setData(res.data)
      },
    })
  },
  goToShow: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/rentalshow/rentalshow?id=${id}`,
    })
  },
  // searchForm: function(e) {
  //   let page = this;
  //   wx.request({
  //     url: `localhost:3000/movies?query=${e.detail.value.query}`,
  //     method: "get", 
  //     success: (res) {
  //       page.setData({
  //         movies: movies
  //       })
  //     }
  //   })
  // }

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  goToLogin: function (){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})