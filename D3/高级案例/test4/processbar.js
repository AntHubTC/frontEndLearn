//进度条
function ProcessBar(args) {
    if (args) for (arg in args) {
        this[arg] = args[arg];
    }
    this.render();
}
ProcessBar.prototype.parentPBar = null;//父进度条
ProcessBar.prototype.render = function(){
    var _this = this;
    var processNum = Math.ceil(_this.process * 100 / _this.procItems.length) + "%";
    /**
     *
     <div class="loading-container">
     <div class="loading-bar">
     <div class="amount blue" style="width: 60%">
     <div class="loaded">
     60%
     </div>
     <div class="lines"></div>
     </div>
     </div>
     </div>
     */
    var loadingContainer = _this.rootD3Ele.append("div");
    loadingContainer.classed("hide");//进度条渲染开始隐藏
    loadingContainer.attr("class", "loading-container");
    loadingContainer.style("position", "absolute");
    loadingContainer.style("right", "5px");
    loadingContainer.style("top", _this.top);

    _this.loadingContainer = loadingContainer;

    //进度条标题
    var processTitleTxt = _this.procItems[_this.process].info;
    var processTitle = loadingContainer.append("div")
//				.style("text-align","center")
        .text(processTitleTxt);
    _this.processTitle = processTitle;

    //进度条
    var loadingBar = loadingContainer.append("div").attr("class", "loading-bar");
    var processBar = loadingBar.append("div").style("width", processNum);
    var skin = _this.skin ? _this.skin : "blue";
    processBar.attr("class", "amount " + skin);//设置皮肤
    _this.processBar = processBar;

    //进度条百分比
    var loadedPanel = processBar.append("div").attr("class", "loaded").text(processNum);
    _this.loadedPanel = loadedPanel;

    processBar.append("div").attr("class", "lines");
    loadingContainer.classed("hide");//进度条渲染完毕显示
};
//进度加1
ProcessBar.prototype.nextProcess = function(){
    var _this = this;
    if(_this.process+1 > _this.procItems.length) return;
    _this.process++;
    //更新标题
    var proItem = _this.procItems[_this.process - 1];
    var processTitleTxt = proItem.info;
    _this.processTitle.text(processTitleTxt);
    //更新进度方块
    var processNum = Math.ceil(_this.process * 100 / _this.procItems.length) + "%";
    _this.processBar.style("width", processNum);
    //更新进度条百分比
    _this.loadedPanel.text(processNum);

    //如果有父容器，该进度位置设置了要告知父容器
    if(_this.parentPBar && proItem.noticePBar){
        _this.parentPBar.nextProcess();
    }
};
//设置父进度条
ProcessBar.prototype.setParentPBar = function(pBar){
    this.parentPBar = pBar;
}
//重设值
ProcessBar.prototype.reset = function(args){
    if(args) for(arg in args){
        this[arg] = args[arg];
    }
    this.nextProcess();
}
