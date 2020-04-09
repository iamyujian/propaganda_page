$(function () {
	// 获取屏幕的高度
	let k = $(window).height()
// 点击next
	$('.next').click(function (ecent) {
		$.fn.fullpage.moveSectionDown()
	})

	$('#fullpage').fullpage({
		// 是否显示导航
		navigation: true,
		// 设置导航的位置
		// navigationPosition: 'left'
		// 滚动到最后可以返回首页
		loopBottom: true,
		// 设置滚动的时间,毫秒
		// scrollingSpeed: 1200

		// 滚动完毕之后执行
		afterLoad: function (anchorLink, index, nextIndex) {
			if (index === 2) {
				$('.next').hide()
				// 搜索框移动
				$('.search').show().animate({ 'right': 370 }, 1000, "easeOutBack",function () {
					// 显示搜索框文字
					$('.search-word').animate({ 'opacity': 1 }, 500, function () {
						// 替换搜索框并移动
						$('.search').hide()
						$('.search-copy').show().animate({ "height": 30, "width": 148, "right": 250, "bottom": 450 }, 1000)
						// 商品同时移动
						$(".sofas").show().animate({ "height": 218 }, 1000)
						// 更换标题
						$('.word2').fadeIn(function () {
							$('.next').fadeIn()
						})
					})
				})
			}
		},

		// 刚开始滚动屏幕就触发的回调
		onLeave: function (index, nextIndex, direction) {
			$('.next').hide()
			if (index === 2 && nextIndex === 3) {
				// 第三屏沙发动画
				$('.small-sofas-two').show().animate({ "bottom": -(k - 250), "width": 207, "left": 260 }, 2000, function () {
					$('.size-a,.btn-a').fadeIn(function () {
						$('.next').fadeIn()
					})
				})
				$('.cover').show()
			}

			if (index === 3 && nextIndex === 4) {
			
				$('.next').hide()
				$('.small-sofas-two').hide()
				// 第四屏购物车动画
				if ($('.car').position().left < 1000) {
					$('.tilt-sofas').show().animate({ "bottom": -(k - 205), "left": 250 }, 2000, function () {
						$(this).hide()
						$('.car-sofa').show()
						$('.car').animate({ "left": "150%" }, 2000, "easeInElastic", function () {
							$(".note,.word4").fadeIn()
							$(".note-img").animate({ "opacity": 1 }, 3000)
						})
					})
				}
				let timer = setTimeout(() => {
					$('.next').fadeIn()
				},4000)
			}

			// 第五屏动画
			if (index === 4 && nextIndex === 5) { 
				$('.next').hide()
				$('.mouse').show()
				$('.hand-five').animate({ "bottom": "18%" }, 1000, function () {
					$(".mouse-a").fadeIn()
					$(".sofa-five").show().animate({ "bottom": "30%" }, 1000, function () {
						$('.order').animate({ "top": "25%" }, 1000, function () {
							$('.word5').addClass('word5-a')
							$('.next').fadeIn()
						})
					})
				})
			}

			// 第六屏
			if (index === 5 && nextIndex === 6) { 
				$('.next').hide()
				$('.sofa-five').animate({ "bottom": -(k * 0.2), "left": "40%", "width": 65 }, 1500, function () {
					$(this).hide()
				})

				$('.box').animate({ "left": "38%" }, 1500, function () {
					$(this).animate({ "bottom": "5%" }, 1000, function () {
						$(this).hide()

						// 背景移动，有点麻烦,backgroundPositionX修改 x坐标
						$('.section6').animate({ "backgroundPositionX": "100%" }, 2000, function () {
							$('.man').animate({ "height": 305, "bottom": 116 }, 1000, function () {
								$(this).animate({ "right": "30%" }, 500, function () {
									$('.door').animate({ "opacity": 1 }, 300, function () {
										$('.women').show().animate({ "height": 305, "right": 400 }, 500, function () {
											$('.receipt').fadeIn()
											$('.word6').fadeIn(2000)
											$('.next').fadeIn()
										})
									})
								})
							})
						})
						$('.pop').fadeIn()
					})
				})
			}

			// 第七屏
			if (index === 6 && nextIndex === 7) { 
				$('.next').hide()
				setTimeout(function () {
					$('.star').animate({ 'width': 120 }, 500, function () {
						$('.praise').fadeIn()
						$('.next').fadeIn()
					})
				},1500)
			}

			// 第八屏
			// $('.begin-shoping').mouseenter(function (event) {
			// 	$('.btn-eight').show()
			// }).mouseleave(function)

			$('.begin-shoping').hover(function () {
				$('.btn-eight-a').toggle()
			})

			$(document).mousemove(function (e) {
				let x = e.pageX - $('.hand-eight').width() / 2
				let y = e.pageY + 10
				let minY = k - 449
				if (y < minY) {
					y = minY
				}
				$('.hand-eight').css({"left": x, 'top': y})
			});

			// 再来一次
			$('.again').click(function (event) {
			// 1.返回第一屏
				$.fn.fullpage.moveTo(1)
			// 2.所有动画复原(清除行内样式)
				$('img,.move').attr('style', '')
				flag = false
			})

		}
	});
})