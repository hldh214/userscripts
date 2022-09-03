// ==UserScript==
// @name         Video SpeedUp
// @namespace    https://github.com/sffxzzp
// @version      0.01
// @description  try to extract m3u8 address from <video>.
// @author       sffxzzp
// @include      /^https?://(www\.age|www\.zzzfun|www\.5dm|play\.age|omofun\.tv).*/
// @match        *://play.omofun.tv/m3u8.php?url=*
// @include      /^https?:\/\/(www\.)?houda[sf]k\.com\/site\/hd\/resources\/views\/free\/.*/
// @match        *://zj.jsjinfu.com*/?url=*
// @grant        GM_openInTab
// @grant        unsafeWindow
// @updateURL    https://github.com/sffxzzp/userscripts/raw/master/h5player/videospeedup.user.js
// ==/UserScript==

//Function.prototype.constructor=function(){}

(function() {
    if (location.href.indexOf('omofun.tv') > 0 || location.href.indexOf('www.age') > 0 || location.href.indexOf('houda') > 0 || location.href.indexOf('zj.jsjinfu.com') > 0) {
        document.onkeydown = function () {
            var v = document.querySelector('video');
            if (event.key == ">" && event.shiftKey) {
                v.currentTime += 85;
            }
            if (event.key == "<" && event.shiftKey) {
                v.currentTime -= 85;
            }
            if (event.key == ".") {
                v.currentTime += 30;
            }
            if (event.key == ",") {
                v.currentTime -= 30;
            }
            if (event.key == "+" && event.shiftKey) {
                v.playbackRate += 0.5;
            }
            if (event.key == "_" && event.shiftKey) {
                v.playbackRate -= 0.5;
            }
            if (event.key == "!" && event.shiftKey) {
                v.playbackRate = 1;
            }
            if (event.key == "@" && event.shiftKey) {
                v.playbackRate = 2;
            }
            if (event.key == "#" && event.shiftKey) {
                v.playbackRate = 3;
            }
            if (event.key == "$" && event.shiftKey) {
                v.playbackRate = 4;
            }
            if (event.key == "%" && event.shiftKey) {
                v.playbackRate = 5;
            }
            if (event.key == "^" && event.shiftKey) {
                v.playbackRate = 6;
            }
            if (event.key == "&" && event.shiftKey) {
                v.playbackRate = 7;
            }
            if (event.key == "*" && event.shiftKey) {
                v.playbackRate = 8;
            }
            console.log(`当前播放速度：${v.playbackRate}x`);
        }
    } else {
        setTimeout(function () {
            var src = document.querySelector('video').src || '';
            if (src.indexOf('http') == 0) {
                if (confirm(`检测到地址：${src}\n\n是否在新标签页打开？`)) {
                    GM_openInTab('https://tools.kanojo.ml/video/?'+src, {active: true});
                }
            }
        }, 3000);
    }
})();
