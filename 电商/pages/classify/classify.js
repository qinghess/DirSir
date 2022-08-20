// pages/classify/classify.js
import newList from "../../utils/product"
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		w:"全部",
		newList,//初始化
		isFull:false,
		index:0,//获取下标


	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {},
	onClick(){
		this.setData({
			isFull:!this.data.isFull,
		});
		if(this.data.isFull == true){
			this.setData({
				w:"x"
			});
			console.log("111111");
		}else{
			this.setData({
				w:"全部"
			});
		};
	},
	click(e){
		const index = e.mark.index;
		console.log(index);
		this.setData({
			index,
		})
	},
})