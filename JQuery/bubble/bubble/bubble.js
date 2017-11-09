		var bubblePlugin = {
			$curControl:null,//当前获得焦点的控件
			$curControlIndex:null,
			$bubbleDom:null,//气泡dom
			bubbleDomHtml:null,//气泡dom的内容
			outInfo:"",//要输出的提示信息
			args:{
				pluginOption:{
					width: null,//宽度,不传入则自动宽(未用)
					height: null,//高度(未用)
					baseColor: null,//基本字体颜色(未用)
					baseBgColor: null//基本的背景颜色
				},
				datas:null
				// [{
				// 	id: null, //要进行提示的id
				// 	baseInfo: null, //提示的基本
				// }]
			},
			init:function(args){
				this.args = args;
				this.bubbleDomBuild();
				this.addListener();
			},
			addListener:function(){
				for(var i in this.args.datas){
					$("#"+this.args.datas[i].id).attr('data-index', i);
					//获得焦点
					$("#"+this.args.datas[i].id).on("focus",function(){
						var $this =  bubblePlugin.$curControl = $(this);
						//显示提示框
						bubblePlugin.$bubbleDom.removeClass('hidden');
						//获取数据索引
						var index = bubblePlugin.$curControlIndex = $this.attr('data-index');
						//构建要显示信息
						bubblePlugin.buildOutInfo();
						//定位新的位置
						bubblePlugin.calcCurrentPostion();
					});
					//失去焦点
					$("#"+this.args.datas[i].id).on("blur",function(){
						//隐藏 提示框
						bubblePlugin.$bubbleDom.addClass('hidden');
					});
					//更改内容
					$("#"+this.args.datas[i].id).on("keyup",function(){
						bubblePlugin.buildOutInfo('change');
					});
				}
			},
			//构建要输出的文本
			buildOutInfo:function(status){//status有focus和change状态
				//检测一下目前是否已经存在文本了。
				if(this.$curControl.val().length>0) status = 'change';
				switch(status+''){
					case 'change':
						bubblePlugin.outInfo = bubblePlugin.args.datas[this.$curControlIndex].baseInfo + this.buildLenLimitText();
					break;
					case 'focus':
					default:
						bubblePlugin.outInfo = bubblePlugin.args.datas[this.$curControlIndex].baseInfo;
					break;
				}
				//输出要显示的信息
				bubblePlugin.writeHtmlOutInfo();
			},
			//构建长度限制文本
			buildLenLimitText:function(){
				//console.info(this.args.datas[this.$curControlIndex].text);
				var check = this.args.datas[this.$curControlIndex];
				if(!(check.text && check.text.limitMaxCount)) return '';
				//要返回的消息
				var msg = "&nbsp;&nbsp;";
				//获取实际内容的个数
				var actualTotal = this.$curControl.val().length;
				//和限制长度的参数比较
				var residueCount = this.args.datas[this.$curControlIndex].text.limitMaxCount - actualTotal;
				if(residueCount<=-1){
					if(residueCount<=-1) this.handleLimit();
					msg+="<br/><span style='color:red;font-weight:bold'>你已经不能输入更多的内容了！<span>";
				} else {
					msg += "你还能输入" + residueCount + "个字符";
				}
				return msg;
			},
			//处理超越限制的控件
			handleLimit:function(){
				//截取超出的长度
				this.$curControl.val(this.$curControl.val().substring(0,this.args.datas[this.$curControlIndex].text.limitMaxCount));
			},
			//计算当前提示框的位置
			calcCurrentPostion:function(){
				var $dom = bubblePlugin.$curControl;
				console.info($dom.offset().top+","+$dom.offset().left);
				var new_top = $dom.offset().top;
				var new_left = $dom.offset().left + $dom.width();
				this.$bubbleDom.offset({
					top:new_top,
					left:new_left
				});
			},
			//构建输出气泡框
			bubbleDomBuild:function(){
				this.bubbleDomHtml = '<div id="bubble" class="bubble hidden"><div class="content clearfix"><span class="triangle"></span><div class="article"></div></div></div>';
				this.$bubbleDom = $(this.bubbleDomHtml).appendTo(document.body);
			},
			//输出html气泡信息
			writeHtmlOutInfo:function(){
				this.$bubbleDom.find(".article").html(this.outInfo);
			}
		};