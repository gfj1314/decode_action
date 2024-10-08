const defaultTappingPrompt = "功德 + 1，佛祖保佑你";
let tappingPrompt = localStorage.getItem("tappingPrompt");
!tappingPrompt && (tappingPrompt = defaultTappingPrompt);
const siteUrl = "https://fish.leixf.cn",
  instructionsHtml = "\n  <p>敲木鱼通常是佛教和道教仪式中的一部分。它是一种传统乐器，形状像木鱼，通常由木头制成。</p>\n  <p>复制以下地址，分享给你的好友吧！</p>\n  <div class=\"ui-input ui-input-search\" align=\"right\">\n    <input type=\"search\" readonly value=\"" + siteUrl + "\">\n    <svg onclick=\"instructionsCopy()\" class=\"ui-icon-search\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4271\" width=\"200\" height=\"200\"><path d=\"M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z\" fill=\"#000000\" p-id=\"4272\"></path></svg>\n  </div>\n  <p>联系作者（微信）</p>\n  <p><img style=\"width: 100%; max-width: 200px; max-height: 200px; display: block; margin: 0 auto;\" src=\"./assets/images/wx_qrcode.jpg\"></p>\n",
  shareText = "电子木鱼，功德无量，进入 " + siteUrl + " 敲电子木鱼，积累功德，自动功德机",
  setDiyHtml = "\n  <div class=\"diy-main\">\n    <div class=\"diy-item\">\n      <input type=\"radio\" id=\"radio1\" name=\"tappingPrompt\">\n      <label for=\"radio1\" class=\"ui-radio\"></label><label class=\"ui-radio-text\" for=\"radio1\">" + defaultTappingPrompt + "</label>\n    </div>\n    <div class=\"diy-item\">\n      <input type=\"radio\" id=\"radio2\" name=\"tappingPrompt\">\n      <label for=\"radio2\" class=\"ui-radio\"></label><label class=\"ui-radio-text\" for=\"radio2\">平安喜乐，功德 + 1</label>\n    </div>\n    <div class=\"diy-item\">\n      <input type=\"radio\" id=\"radio3\" name=\"tappingPrompt\">\n      <label for=\"radio3\" class=\"ui-radio\"></label><label class=\"ui-radio-text\" for=\"radio3\">烦恼 - 1，功德 + 1</label>\n    </div>\n    <div class=\"diy-item\">\n      <input type=\"radio\" id=\"radioCustom\" name=\"tappingPrompt\">\n      <label for=\"radioCustom\" class=\"ui-radio\"></label><label class=\"ui-radio-text\" for=\"radioCustom\">自定义</label>\n    </div>\n    <div class=\"diy-item\">\n      <input id=\"diyContent\" class=\"ui-input\" value=\"\" placeholder=\"请输入不超过15字节的内容\">\n    </div>\n  </div>\n",
  autoClickHtml = "\n  <p>如想开启自动敲击能力，希望您完成以下操作：</p>\n  <p>1.复制以下内容，分享至3个以上群聊</p>\n  <p>\n    <div class=\"ui-input ui-input-search\" align=\"right\">\n      <input type=\"search\" readonly value=\"" + siteUrl + "\">\n      <svg onclick=\"autoClickCopy()\" class=\"ui-icon-search\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4271\" width=\"200\" height=\"200\"><path d=\"M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z\" fill=\"#000000\" p-id=\"4272\"></path></svg>\n    </div>\n  </p>\n  <p>\n    <input type=\"checkbox\" id=\"autoClickCheckbox\" name=\"autoClickCheckbox\">\n    <label for=\"autoClickCheckbox\" class=\"ui-checkbox\"></label><label for=\"autoClickCheckbox\">确认开启自动敲木鱼</label>\n  </p>\n";
function instructionsCopy() {
  copyTextToClipboard(siteUrl, function () {
    new LightTip().success("复制成功");
  }, function () {
    new LightTip().error("复制失败");
  });
}
function autoClickCopy() {
  copyTextToClipboard(shareText, function () {
    new LightTip().success("复制成功");
  }, function () {
    new LightTip().error("复制失败");
  });
}
const sound = new Howl({
    "src": ["./assets/video/sound.mp3"]
  }),
  bgm = new Howl({
    "src": ["./assets/video/bgm.mp3"],
    "html5": true,
    "loop": true,
    "volume": 0.2
  });
function hideLoading() {
  const _0xf4e14b = document.querySelector("#loading");
  _0xf4e14b && _0xf4e14b.remove();
}
window.onload = () => {
  hideLoading();
  let _0x3c19c3 = 0,
    _0x2b95e6 = 0,
    _0x24592b = 0,
    _0x15b752 = false,
    _0x78250b = false,
    _0x485a04 = null,
    _0x2b80f2 = document.querySelector(".count"),
    _0x60b8a7 = document.querySelector(".wooden-fish"),
    _0x36d879 = document.querySelector("#autoClick"),
    _0x49d4b8 = document.querySelector("#center"),
    _0x46b762 = document.querySelector("#instructions"),
    _0x2dc4f0 = document.querySelector("#share"),
    _0xd2ac1 = document.querySelector("#immersionSwitch"),
    _0x54362a = document.querySelector("#wishDiy"),
    _0x21bad4 = document.querySelector("#woodenHammer");
  const _0x5cb100 = localStorage.getItem("count");
  if (_0x5cb100) {
    _0x24592b = Number(_0x5cb100);
    _0x2b80f2.innerHTML = String(_0x24592b);
  }
  function _0x5c2b69() {
    _0x2b80f2.style.transform = "scale(1.1)";
    _0x60b8a7.style.transform = "scale(.95)";
    _0x21bad4.classList.add("hammer-start");
    _0x49d4b8.appendChild(_0x21bad4);
    const _0x3180b7 = document.createElement("div");
    _0x3180b7.classList.add("subtitle-countTip");
    _0x3180b7.innerText = tappingPrompt;
    _0x49d4b8.appendChild(_0x3180b7);
    setTimeout(() => {
      _0x3180b7.remove();
    }, 1000);
  }
  function _0x3dc934() {
    _0x2b80f2.style.transform = "scale(1)";
    _0x60b8a7.style.transform = "scale(1)";
  }
  function _0x2a1534() {
    _0x15b752 = true;
    _0x24592b++;
    _0x2b80f2.innerHTML = String(_0x24592b);
    _0x5c2b69();
    _0x3c19c3 !== 0 ? (sound.playing() && sound.stop(_0x3c19c3), sound.play(_0x3c19c3)) : _0x3c19c3 = sound.play();
    localStorage.setItem("count", String(_0x24592b));
  }
  document.onkeyup = _0x28f54f => {
    _0x28f54f.key === " " && !_0x15b752 && _0x2a1534();
  };
  document.onkeydown = _0x42460b => {
    _0x42460b.key === " " && (_0x15b752 = false, _0x3dc934());
  };
  _0x60b8a7.addEventListener("mouseup", () => {
    _0x2a1534();
  });
  _0x60b8a7.addEventListener("mousedown", () => {
    setTimeout(() => {
      _0x3dc934();
    }, 200);
  });
  _0x36d879.addEventListener("click", () => {
    _0x78250b ? (_0x78250b = false, _0x36d879.classList.remove("confirm"), clearInterval(_0x485a04)) : new Dialog({
      "title": "VIP自动敲",
      "content": autoClickHtml,
      "buttons": [{
        "value": "确定",
        "events": function (_0x8e9532) {
          const _0x3a043c = document.querySelector("#autoClickCheckbox");
          _0x3a043c.checked ? (_0x36d879.classList.add("confirm"), clearInterval(_0x485a04), _0x485a04 = setInterval(() => {
            _0x2a1534();
            setTimeout(() => {
              _0x3dc934();
            }, 200);
          }, 500), LA.track("autoCick")) : (_0x36d879.classList.remove("confirm"), clearInterval(_0x485a04));
          _0x78250b = _0x3a043c.checked;
          _0x8e9532.dialog.remove();
        }
      }],
      "onShow": () => {
        const _0x173c9d = document.querySelector("#autoClickCheckbox");
        _0x173c9d.checked = _0x78250b;
      }
    });
  });
  _0x46b762.addEventListener("click", () => {
    new Dialog({
      "title": "说明",
      "content": instructionsHtml,
      "buttons": [{
        "value": "好的"
      }]
    });
    LA.track("instructionsButton");
  });
  _0x2dc4f0.addEventListener("click", () => {
    copyTextToClipboard(shareText, function () {
      new Dialog().alert("复制链接成功，分享给好友，佛祖保佑你", {
        "type": "",
        "buttons": [{
          "value": "好的"
        }]
      });
      LA.track("shareButton");
    }, function () {
      new LightTip().error("复制失败");
    });
  });
  _0xd2ac1.addEventListener("input", () => {
    _0xd2ac1.checked ? (_0x2b95e6 !== 0 ? bgm.play(_0x2b95e6) : _0x2b95e6 = bgm.play(), LA.track("immersionSwitch")) : bgm.pause(_0x2b95e6);
  });
  _0x54362a.addEventListener("click", () => {
    new Dialog({
      "title": "心愿DIY",
      "content": setDiyHtml,
      "buttons": [{
        "value": "确定",
        "events": function (_0x381ab7) {
          const _0x30ab2c = document.querySelectorAll("input[name=\"tappingPrompt\"]"),
            _0x2a582a = Array.from(_0x30ab2c).find(_0x4cc910 => _0x4cc910.checked),
            _0x5531e0 = document.querySelector("#diyContent");
          if (_0x2a582a) {
            const _0x18288b = document.querySelectorAll("label[for=\"" + _0x2a582a.id + "\"]")[1].innerText;
            if (_0x18288b === "自定义") {
              if (_0x5531e0.value) {
                if (_0x5531e0.value.length > 15) return new LightTip().error("自定义内容过长，请删减"), false;else tappingPrompt = _0x5531e0.value;
              } else return new LightTip().error("请输入自定义内容"), false;
            } else tappingPrompt = _0x18288b;
            localStorage.setItem("tappingPrompt", tappingPrompt);
          } else {
            return new LightTip().error("请选择DIY内容"), false;
          }
          _0x381ab7.dialog.remove();
          LA.track("wishDiy");
        }
      }],
      "onShow": () => {
        let _0x3f618e = localStorage.getItem("tappingPrompt");
        !_0x3f618e && (_0x3f618e = defaultTappingPrompt);
        const _0x352105 = document.querySelectorAll("label[class=\"ui-radio-text\"]"),
          _0x342da2 = Array.from(_0x352105).find(_0x14e7d7 => {
            return _0x14e7d7.innerHTML === _0x3f618e;
          });
        let _0x4c9587 = null;
        if (_0x342da2) _0x4c9587 = document.querySelector("input[id=\"" + _0x342da2.getAttribute("for") + "\"]");else {
          _0x4c9587 = document.querySelector("input[id=\"radioCustom\"]");
          const _0x4fd4ad = document.querySelector("#diyContent");
          _0x4fd4ad.value = _0x3f618e;
        }
        _0x4c9587.checked = true;
      }
    });
  });
};
function remChange(_0x59de28, _0x2b59dc) {
  let _0x1c01e2 = _0x59de28.documentElement,
    _0x476283 = "orientationchange" in window ? "orientationchange" : "resize",
    _0xe1a46b = function () {
      var _0x99c6ea = _0x1c01e2.clientWidth;
      if (!_0x99c6ea) return;
      _0x99c6ea >= 640 ? _0x1c01e2.style.fontSize = "100px" : _0x1c01e2.style.fontSize = 100 * (_0x99c6ea / 640) + "px";
    };
  if (!_0x59de28.addEventListener) return;
  _0x2b59dc.addEventListener(_0x476283, _0xe1a46b, false);
  _0x59de28.addEventListener("DOMContentLoaded", _0xe1a46b, false);
  _0xe1a46b();
}
remChange(document, window);
function copyTextToClipboard(_0x3c651c, _0x2aa175, _0x58c1a9) {
  const _0x4360c7 = document.createElement("textarea");
  _0x4360c7.value = _0x3c651c;
  _0x4360c7.setAttribute("readonly", "");
  _0x4360c7.style.position = "absolute";
  _0x4360c7.style.left = "-9999px";
  document.body.appendChild(_0x4360c7);
  _0x4360c7.select();
  try {
    const _0xa4521c = document.execCommand("copy");
    if (_0xa4521c) {
      typeof _0x2aa175 === "function" && _0x2aa175();
    } else typeof _0x58c1a9 === "function" && _0x58c1a9();
  } catch (_0x1b1f07) {
    typeof _0x58c1a9 === "function" && _0x58c1a9();
  }
  document.body.removeChild(_0x4360c7);
}