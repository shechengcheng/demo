 s(t, [{
            key: "render",
            value: function() {
                var e = this.props.data.data.videoUrl;
                return e && -1 === e.indexOf("swf") ? f.default.createElement("div", {
                    className: "item-desc-video"
                }, f.default.createElement(d.default, {
                    id: "itemVideo",
                    width: "790",
                    height: "388",
                    videoUrl: e
                })) : null
            }
        }]),
        t



        <div id="itemVideo" class="item-video" data-reactid="654">
            <video class="video" controls="" poster="" preload="meta" width="790" height="388" data-reactid="655">
                <source src="//cloud.video.taobao.com/play/u/3031469256/p/2/e/6/t/1/50010478365.mp4" type="video/mp4" data-reactid="656"/>
                <p class="video-nosupport" width="790" height="388" data-reactid="657">抱歉，您的浏览器不支持内嵌视频！</p>
            </video>
        </div>
