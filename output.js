NAME = "传拾好聚";
VALY = ["zshj"];
CK = "";
let _0x55631d = process.env.weixinToken,
  _0x53af93 = process.env.xqkdddl,
  _0x7dc23b = "https://cshj.ycswly.com";
const _0x309079 = ["\n", "@"],
  _0x3ffc8b = 0;
usid = 0;
class _0x2e95e3 {
  constructor(_0x4e25bb) {
    this.token = _0x4e25bb.split("#")[0];
    this.ua = _0x4e25bb.split("#")[1];
    this.num = ++usid;
    this.headers = {
      "User-Agent": this.ua,
      "sec-ch-ua-platform": "\"Android\"",
      "sec-ch-ua": "\"Chromium\";v=\"130\", \"Android WebView\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?1",
      "x-requested-with": "com.xsb.cshjjj",
      "referer": "https://cshj.ycswly.com/web/",
      "priority": "u=1, i"
    };
    this.headers1 = {
      "User-Agent": "okhttp/5.0.0-alpha.3",
      "devicetype": "Android",
      "token": this.token
    };
  }
  async ["hqdl"]() {
    let _0x1872da = await $.task("get", _0x53af93, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x1872da.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await $.wait($.RT(1000, 3000));
    await this.qingdaokingkuang();
    await $.wait($.RT(1000, 3000));
  }
  async ["login"]() {
    let _0x272dd2 = await _0x1d7615("get", _0x7dc23b + "/game/user/getUserinfo?token=" + this.token + "&device_type=Android", this.headers);
    _0x272dd2 = JSON.parse(_0x272dd2);
    let _0x2f0e4c = _0x272dd2.headers["set-cookie"][0];
    this.headers.Cookie = _0x2f0e4c.substring(_0x2f0e4c.indexOf("PHPSESSID"), _0x2f0e4c.indexOf("; path=/"));
    let _0x43cb3c = _0x272dd2.body,
      _0x18dd66 = JSON.parse(_0x43cb3c);
    if (_0x18dd66.code == 0) {
      this.login = true;
      this.num = _0x18dd66.data.nickname;
      let _0x1fa7b2 = _0x18dd66.data.withdraw_price;
      console.log(this.num + " 金币：" + _0x18dd66.data.personal_coin + " 等于金额：" + _0x1fa7b2);
    } else {
      this.login = false;
      let _0x43a4b7 = _0x18dd66.msg;
      console.log(this.num + " ：" + _0x43a4b7);
      _0x55631d !== undefined && (await this.wxpusher(_0x43a4b7));
      return;
    }
  }
  async ["wxpusher"](_0x144d27) {
    let _0x11a7d0 = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x1177d4 = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + _0x55631d.split("#")[0] + "&content=" + encodeURI("" + _0x55631d.split("#")[2] + NAME + "账号[" + this.num + "]:" + _0x144d27) + "&uid=" + _0x55631d.split("#")[1], _0x11a7d0);
    _0x1177d4.code == 1000 ? console.log("微信通知" + _0x1177d4.msg) : console.log("微信通知失败");
  }
  async ["xinxi"]() {
    let _0x271abc = await this.task("get", _0x7dc23b + "/game/user/getUserinfo", this.headers1);
    if (_0x271abc.code == 0) {
      let _0x26febd = _0x271abc.data.withdraw_price;
      console.log(this.num + " 金币：" + _0x271abc.data.personal_coin + " 等于金额：" + _0x26febd);
      _0x26febd >= 0.3 && (await $.wait($.RT(1000, 3000)), await this.tixian());
    } else {
      this.login = false;
      let _0x549e75 = _0x271abc.msg;
      console.log(this.num + " ：" + _0x549e75);
      _0x55631d !== undefined && (await this.wxpusher(_0x549e75));
      return;
    }
  }
  async ["qingdaokingkuang"]() {
    let _0x55431c = "签到情况",
      _0x2686f1 = await this.task("post", _0x7dc23b + "/game/sign/isSign?token=" + this.token + "&device_type=Android", this.headers);
    if (_0x2686f1.code == 0) {
      _0x2686f1.data.is_sign == 0 && (await $.wait($.RT(1000, 3000)), await this.qiandao());
    } else {
      let _0x5aeab1 = _0x2686f1.msg;
      console.log(this.num + " " + _0x55431c + "：" + _0x5aeab1);
    }
  }
  async ["qiandao"]() {
    let _0x55e327 = "签到",
      _0x4e5f83 = await this.task("get", _0x7dc23b + "/game/sign/inSign?token=" + this.token + "&device_type=Android", this.headers);
    if (_0x4e5f83.code == 0) console.log(this.num + "  " + _0x55e327 + "：" + _0x4e5f83.data.coin + "金币");else {
      let _0x449dc3 = _0x4e5f83.msg;
      console.log(this.num + " " + _0x55e327 + "：" + _0x449dc3);
    }
  }
  async ["tixian"]() {
    let _0x280d39 = "提现",
      _0x1f284a = await this.task("post", _0x7dc23b + "/game/Withdraw/withdraw", this.headers1, "withdraw_type=weixin&coin_type=personal_coin&state=1&coin=0.3");
    if (_0x1f284a.code == 200) console.log(this.num + "  " + _0x280d39 + "：" + _0x1f284a.msg);else {
      let _0x37bc2c = _0x1f284a.msg;
      console.log(this.num + " " + _0x280d39 + "：" + _0x37bc2c);
    }
  }
  async ["task"](_0x3c76b6, _0x65064c, _0x46933d, _0xfc8dd8) {
    if (_0x3c76b6 == "delete") {
      _0x3c76b6 = _0x3c76b6.toUpperCase();
    } else _0x3c76b6 = _0x3c76b6;
    const _0x4857d7 = require("request");
    if (_0x3c76b6 == "post") {
      delete _0x46933d["Content-Type"];
      delete _0x46933d["content-type"];
      delete _0x46933d["Content-Length"];
      delete _0x46933d["content-length"];
      if ($.safeGet(_0xfc8dd8)) {
        _0x46933d["content-type"] = "application/json;charset=utf-8";
      } else _0x46933d["content-type"] = "application/x-www-form-urlencoded";
      if (_0xfc8dd8) {
        _0x46933d["content-length"] = $.lengthInUtf8Bytes(_0xfc8dd8);
      }
    }
    if (_0x3c76b6 == "get") {
      delete _0x46933d["Content-Type"];
      delete _0x46933d["content-length"];
      delete _0x46933d["content-type"];
      delete _0x46933d["Content-Length"];
    }
    _0x46933d.Host = _0x65064c.replace("//", "/").split("/")[1];
    if (_0x53af93 == undefined) {
      if (_0x3c76b6.indexOf("T") < 0) var _0x421fea = {
        "url": _0x65064c,
        "headers": _0x46933d,
        "body": _0xfc8dd8,
        "timeout": 20000
      };else var _0x421fea = {
        "url": _0x65064c,
        "headers": _0x46933d,
        "form": JSON.parse(_0xfc8dd8),
        "timeout": 20000
      };
    } else {
      if (_0x3c76b6.indexOf("T") < 0) {
        var _0x421fea = {
          "url": _0x65064c,
          "headers": _0x46933d,
          "body": _0xfc8dd8,
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      } else var _0x421fea = {
        "url": _0x65064c,
        "headers": _0x46933d,
        "form": JSON.parse(_0xfc8dd8),
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };
    }
    return new Promise(async _0x15745e => {
      _0x4857d7[_0x3c76b6.toLowerCase()](_0x421fea, async (_0xdcd29c, _0x16d819, _0x14ce46) => {
        try {
          _0x3ffc8b == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x421fea)), console.log("==================返回=================="), console.log(_0x14ce46));
        } catch (_0xdcb6a) {} finally {
          if (!_0xdcd29c) {
            if ($.safeGet(_0x14ce46)) {
              _0x14ce46 = JSON.parse(_0x14ce46);
            } else _0x14ce46 = _0x14ce46;
          } else {
            _0x53af93 == undefined ? (console.log("请检查网络设置"), _0x14ce46 = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0x14ce46 = await this.task(_0x3c76b6, _0x65064c, _0x46933d, _0xfc8dd8));
          }
          return _0x15745e(_0x14ce46);
        }
      });
    });
  }
}
$ = _0x500a41();
!(async () => {
  console.log("[" + NAME + "] " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  console.log("📢 请认真阅读以下声明\n【免责声明】\n📌 脚本文件仅用于测试和学习研究\n📌 脚本文件任何人不得用于商业以及非法用途\n📌 禁止任何公众号、自媒体进行任何形式的转发\n📌 脚本文件请在下载试用后24小时内自行删除\n📌 因使用脚本造成软件平台的一切损失皆由使用者承担\n📌 脚本文件如有不慎被破解或修改由破解或修改者承担\n📌 如不接受此条款请立即删除脚本文件");
  await $.ExamineCookie();
  if (_0x53af93 == undefined) {
    console.log("当前使用本地网络运行脚本");
    for (let _0x34c766 of $.cookie_list) {
      if (_0x3ffc8b == 0) {
        let _0x339daa = $.RT(15000, 49000);
        console.log("随机延迟" + Math.round(_0x339daa * 0.001) + "秒");
        await $.wait(_0x339daa);
      }
      console.log("\n-------- 用户信息 --------");
      await _0x34c766.login();
      _0x34c766.login && (await _0x34c766.user_task_list(), await _0x34c766.xinxi());
    }
  } else {
    console.log("当前使用代理网络运行脚本");
    await $.Multithreading("hqdl");
    console.log("\n-------- 用户信息 --------");
    await $.Multithreading("login");
    let _0x5ae824 = $.cookie_list.filter(_0x265a71 => _0x265a71.login == true);
    if (_0x5ae824.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else for (let _0x3d104e of _0x5ae824) {
      await _0x3d104e.user_task_list();
    }
    for (let _0x67ab79 of $.cookie_list) {
      _0x67ab79.xinxi();
    }
  }
})().catch(_0x22779e => {
  console.log(_0x22779e);
}).finally(() => {});
function _0x500a41() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x453494, _0x4f7d91, _0x7536d5) {
      let _0x5279d1 = [];
      !_0x7536d5 && (_0x7536d5 = 1);
      while (_0x7536d5--) {
        for (let _0x5e4593 of $.cookie_list) {
          _0x5279d1.push(_0x5e4593[_0x453494](_0x4f7d91));
        }
      }
      await Promise.allSettled(_0x5279d1);
    }
    ["ExamineCookie"]() {
      let _0x397429 = process.env[VALY] || CK,
        _0x2f9bfd = 0;
      if (_0x397429) {
        for (let _0x43fffd of _0x309079) {
          if (_0x397429.includes(_0x43fffd)) {
            this.splitor = _0x43fffd;
            break;
          }
        }
        for (let _0x2fe5c8 of _0x397429.split(this.splitor).filter(_0x3f8a0d => !!_0x3f8a0d)) {
          $.cookie_list.push(new _0x2e95e3(_0x2fe5c8));
        }
        _0x2f9bfd = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x2f9bfd + "个账号"), $.cookie_list;
    }
    ["task"](_0x71e8f9, _0x189ebc, _0x3491a7, _0x325f82, _0x551af4) {
      _0x71e8f9 == "delete" ? _0x71e8f9 = _0x71e8f9.toUpperCase() : _0x71e8f9 = _0x71e8f9;
      if (_0x71e8f9 == "post") {
        delete _0x3491a7["content-type"];
        delete _0x3491a7["Content-type"];
        delete _0x3491a7["content-Type"];
        $.safeGet(_0x325f82) ? _0x3491a7["Content-Type"] = "application/json;charset=UTF-8" : _0x3491a7["Content-Type"] = "application/x-www-form-urlencoded";
        _0x325f82 && (_0x3491a7["Content-Length"] = $.lengthInUtf8Bytes(_0x325f82));
      }
      if (_0x71e8f9 == "get") {
        delete _0x3491a7["content-type"];
        delete _0x3491a7["Content-type"];
        delete _0x3491a7["content-Type"];
        delete _0x3491a7["Content-Length"];
      }
      return _0x3491a7.Host = _0x189ebc.replace("//", "/").split("/")[1], new Promise(async _0x3286cc => {
        if (_0x71e8f9.indexOf("T") < 0) var _0x15f0b4 = {
          "url": _0x189ebc,
          "headers": _0x3491a7,
          "body": _0x325f82,
          "proxy": "http://" + _0x551af4
        };else {
          var _0x15f0b4 = {
            "url": _0x189ebc,
            "headers": _0x3491a7,
            "form": JSON.parse(_0x325f82),
            "proxy": "http://" + _0x551af4
          };
        }
        !_0x551af4 && delete _0x15f0b4.proxy;
        this.request[_0x71e8f9.toLowerCase()](_0x15f0b4, (_0x11f737, _0x387784, _0x4b9451) => {
          try {
            _0x4b9451 && _0x3ffc8b == 1 && (console.log("================ 请求 ================"), console.log(_0x15f0b4), console.log("================ 返回 ================"), $.safeGet(_0x4b9451) ? console.log(JSON.parse(_0x4b9451)) : console.log(_0x4b9451));
          } catch (_0x1d6b38) {
            console.log(_0x1d6b38, _0x189ebc + "\n" + _0x3491a7);
          } finally {
            let _0x2c77ef = "";
            if (!_0x11f737) {
              if ($.safeGet(_0x4b9451)) {
                _0x2c77ef = JSON.parse(_0x4b9451);
              } else {
                if (_0x4b9451.indexOf("/") != -1 && _0x4b9451.indexOf("+") != -1) {
                  _0x2c77ef = $.decrypts(_0x4b9451);
                } else _0x2c77ef = _0x4b9451;
              }
            } else _0x2c77ef = _0x189ebc + "   API请求失败，请检查网络重试\n" + _0x11f737;
            return _0x3286cc(_0x2c77ef);
          }
        });
      });
    }
    ["task2"](_0x55c374, _0xb8f15f, _0x24ce4e, _0x1b2e56, _0x5052bc) {
      if (_0x55c374 == "delete") _0x55c374 = _0x55c374.toUpperCase();else {
        _0x55c374 = _0x55c374;
      }
      if (_0x55c374 == "post") {
        delete _0x24ce4e["content-type"];
        delete _0x24ce4e["Content-type"];
        delete _0x24ce4e["content-Type"];
        if ($.safeGet(_0x1b2e56)) {
          _0x24ce4e["Content-Type"] = "application/json;charset=UTF-8";
        } else _0x24ce4e["Content-Type"] = "application/x-www-form-urlencoded";
        _0x1b2e56 && (_0x24ce4e["Content-Length"] = $.lengthInUtf8Bytes(_0x1b2e56));
      }
      _0x55c374 == "get" && (delete _0x24ce4e["content-type"], delete _0x24ce4e["Content-type"], delete _0x24ce4e["content-Type"], delete _0x24ce4e["Content-Length"]);
      _0x24ce4e.Host = _0xb8f15f.replace("//", "/").split("/")[1];
      if (_0x55c374.indexOf("T") < 0) var _0x3f60e2 = {
        "url": _0xb8f15f,
        "headers": _0x24ce4e,
        "body": _0x1b2e56
      };else var _0x3f60e2 = {
        "url": _0xb8f15f,
        "headers": _0x24ce4e,
        "form": JSON.parse(_0x1b2e56)
      };
      return new Promise(async _0x237314 => {
        this.request[_0x55c374.toLowerCase()](_0x3f60e2, (_0xedf365, _0x3e055b, _0xd5a8c3) => {
          try {
            if (_0xd5a8c3) {
              _0x3ffc8b == 1 && (console.log("================ 请求 ================"), console.log(_0x3f60e2), console.log("================ 返回 ================"), $.safeGet(_0xd5a8c3) ? console.log(JSON.parse(_0xd5a8c3)) : console.log(_0xd5a8c3));
            }
          } catch (_0x21da9d) {
            console.log(_0x21da9d, _0xb8f15f + "\n" + _0x24ce4e);
          } finally {
            let _0x1f2bdd = "";
            if (!_0xedf365) {
              if ($.safeGet(_0xd5a8c3)) _0x1f2bdd = _0xd5a8c3;else _0xd5a8c3.indexOf("/") != -1 && _0xd5a8c3.indexOf("+") != -1 ? _0x1f2bdd = $.decrypts(_0xd5a8c3) : _0x1f2bdd = _0xd5a8c3;
            } else {
              _0x1f2bdd = _0xb8f15f + "   API请求失败，请检查网络重试\n" + _0xedf365;
            }
            return _0x237314(_0x1f2bdd);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0xad2544) {
      let _0x1d27c6 = encodeURIComponent(_0xad2544).match(/%[89ABab]/g);
      return _0xad2544.length + (_0x1d27c6 ? _0x1d27c6.length : 0);
    }
    ["randomArr"](_0x181ff7) {
      return _0x181ff7[parseInt(Math.random() * _0x181ff7.length, 10)];
    }
    ["wait"](_0x1d967a) {
      return new Promise(_0x1a0ec6 => setTimeout(_0x1a0ec6, _0x1d967a));
    }
    ["time"](_0x20ff78) {
      return _0x20ff78 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x4437ef) {
      let _0x192034 = new Date();
      if (_0x4437ef == undefined) {
        let _0x1c3391 = new Date(),
          _0xec5f60 = _0x1c3391.getFullYear() + "-",
          _0x329a95 = (_0x1c3391.getMonth() + 1 < 10 ? "0" + (_0x1c3391.getMonth() + 1) : _0x1c3391.getMonth() + 1) + "-",
          _0x2cb34e = _0x1c3391.getDate() < 10 ? "0" + _0x1c3391.getDate() : _0x1c3391.getDate() + " ",
          _0x239ff1 = _0x1c3391.getHours() + ":",
          _0x305205 = _0x1c3391.getMinutes() + ":",
          _0xa3b591 = _0x1c3391.getSeconds() + 1 < 10 ? "0" + _0x1c3391.getSeconds() : _0x1c3391.getSeconds();
        return _0xec5f60 + _0x329a95 + _0x2cb34e + _0x239ff1 + _0x305205 + _0xa3b591;
      } else {
        if (_0x4437ef == 0) {
          return _0x192034.getFullYear();
        } else {
          if (_0x4437ef == 1) return _0x192034.getMonth() + 1 < 10 ? "0" + (_0x192034.getMonth() + 1) : _0x192034.getMonth() + 1;else {
            if (_0x4437ef == 2) return _0x192034.getDate() < 10 ? "0" + _0x192034.getDate() : _0x192034.getDate();else {
              if (_0x4437ef == 3) return _0x192034.getHours();else {
                if (_0x4437ef == 4) return _0x192034.getMinutes();else {
                  if (_0x4437ef == 5) {
                    return _0x192034.getSeconds() + 1 < 10 ? "0" + _0x192034.getSeconds() : _0x192034.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x53ab75) {
      try {
        if (typeof JSON.parse(_0x53ab75) == "object") return true;
      } catch (_0x312016) {
        return false;
      }
    }
    ["SJS"](_0xc2d506, _0x4814a2) {
      if (_0x4814a2 == 0) {
        let _0x14bb11 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x210abd = _0x14bb11.length,
          _0x5da41d = "";
        for (let _0x1b6bc8 = 0; _0x1b6bc8 < _0xc2d506; _0x1b6bc8++) {
          _0x5da41d += _0x14bb11.charAt(Math.floor(Math.random() * _0x210abd));
        }
        return _0x5da41d;
      } else {
        if (_0x4814a2 == 1) {
          let _0x5b0016 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x4db690 = _0x5b0016.length,
            _0x534012 = "";
          for (let _0x5be110 = 0; _0x5be110 < _0xc2d506; _0x5be110++) {
            _0x534012 += _0x5b0016.charAt(Math.floor(Math.random() * _0x4db690));
          }
          return _0x534012;
        } else {
          let _0x5597b0 = "0123456789",
            _0x5a34cc = _0x5597b0.length,
            _0x5960e4 = "";
          for (let _0x5e5d43 = 0; _0x5e5d43 < _0xc2d506; _0x5e5d43++) {
            _0x5960e4 += _0x5597b0.charAt(Math.floor(Math.random() * _0x5a34cc));
          }
          return _0x5960e4;
        }
      }
    }
    ["udid"](_0x5880e0) {
      function _0x4afa71() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x11da9b = _0x4afa71() + _0x4afa71() + "-" + _0x4afa71() + "-" + _0x4afa71() + "-" + _0x4afa71() + "-" + _0x4afa71() + _0x4afa71() + _0x4afa71();
      return _0x5880e0 == 0 ? _0x11da9b.toUpperCase() : _0x11da9b.toLowerCase();
    }
    ["encodeUnicode"](_0x5d5dc4) {
      var _0x2e64c0 = [];
      for (var _0x26c561 = 0; _0x26c561 < _0x5d5dc4.length; _0x26c561++) {
        _0x2e64c0[_0x26c561] = ("00" + _0x5d5dc4.charCodeAt(_0x26c561).toString(16)).slice(-4);
      }
      return "\\u" + _0x2e64c0.join("\\u");
    }
    ["decodeUnicode"](_0x21c2fe) {
      return _0x21c2fe = _0x21c2fe.replace(/\\u/g, "%u"), unescape(unescape(_0x21c2fe));
    }
    ["RT"](_0x14d91a, _0x54e64a) {
      return Math.round(Math.random() * (_0x54e64a - _0x14d91a) + _0x14d91a);
    }
    ["arrNull"](_0xcbfe59) {
      var _0x4d18e4 = _0xcbfe59.filter(_0x3b1184 => {
        return _0x3b1184 && _0x3b1184.trim();
      });
      return _0x4d18e4;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x3c4656 = $.nowtime();
      return JSON.stringify(_0x3c4656).indexOf(" ") >= 0 && (_0x3c4656 = _0x3c4656.replace(" ", "T")), new Date(_0x3c4656).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x5e7741, _0x57947e, _0x2ab959, _0x2e3d36) {
      if (_0x2e3d36 == 0) {
        return JSON.stringify(_0x5e7741.split(_0x57947e).reduce((_0x5b9ef6, _0x26022e) => {
          let _0x112ab8 = _0x26022e.split(_0x2ab959);
          return _0x5b9ef6[_0x112ab8[0].trim()] = _0x112ab8[1].trim(), _0x5b9ef6;
        }, {}));
      } else {
        return _0x5e7741.split(_0x57947e).reduce((_0x5583ec, _0x3cff3e) => {
          let _0x4fcaea = _0x3cff3e.split(_0x2ab959);
          return _0x5583ec[_0x4fcaea[0].trim()] = _0x4fcaea[1].trim(), _0x5583ec;
        }, {});
      }
    }
    ["MD5Encrypt"](_0x263f91, _0x1c7d1d) {
      if (_0x263f91 == 0) {
        return this.CryptoJS.MD5(_0x1c7d1d).toString().toLowerCase();
      } else {
        if (_0x263f91 == 1) return this.CryptoJS.MD5(_0x1c7d1d).toString().toUpperCase();else {
          if (_0x263f91 == 2) {
            return this.CryptoJS.MD5(_0x1c7d1d).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x263f91 == 3) return this.CryptoJS.MD5(_0x1c7d1d).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x44da9a, _0x2a2cf8, _0xa92fe7) {
      return _0x44da9a == 0 ? this.CryptoJS[_0x2a2cf8](_0xa92fe7).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2a2cf8](_0xa92fe7).toString();
    }
    ["HmacSHA_Encrypt"](_0x128967, _0x2d916f, _0x5384eb, _0x4750d4) {
      return _0x128967 == 0 ? this.CryptoJS[_0x2d916f](_0x5384eb, _0x4750d4).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2d916f](_0x5384eb, _0x4750d4).toString();
    }
    ["Base64"](_0xb61929, _0x52c289) {
      return _0xb61929 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x52c289)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x52c289));
    }
    ["DecryptCrypto"](_0xa3e3b1, _0x57b7b2, _0x1baf84, _0x4c751f, _0x5a7fc8, _0x2a9024, _0x1fc8d3) {
      if (_0xa3e3b1 == 0) {
        const _0x3e8f93 = this.CryptoJS[_0x57b7b2].encrypt(this.CryptoJS.enc.Utf8.parse(_0x5a7fc8), this.CryptoJS.enc.Utf8.parse(_0x2a9024), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x1fc8d3),
          "mode": this.CryptoJS.mode[_0x1baf84],
          "padding": this.CryptoJS.pad[_0x4c751f]
        });
        return _0x3e8f93.toString();
      } else {
        const _0x13a1c8 = this.CryptoJS[_0x57b7b2].decrypt(_0x5a7fc8, this.CryptoJS.enc.Utf8.parse(_0x2a9024), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x1fc8d3),
          "mode": this.CryptoJS.mode[_0x1baf84],
          "padding": this.CryptoJS.pad[_0x4c751f]
        });
        return _0x13a1c8.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x12dcf1, _0x257619) {
      const _0x39e568 = require("node-rsa");
      let _0x257861 = new _0x39e568("-----BEGIN PUBLIC KEY-----\n" + _0x257619 + "\n-----END PUBLIC KEY-----");
      return _0x257861.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x257861.encrypt(_0x12dcf1, "base64", "utf8");
    }
    ["SHA_RSA"](_0x58b4cc, _0x107731) {
      let _0x5ac14d = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x107731, 76) + "\n-----END PRIVATE KEY-----"),
        _0x281d96 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x281d96.init(_0x5ac14d);
      _0x281d96.updateString(_0x58b4cc);
      let _0x1017dd = _0x281d96.sign(),
        _0x273eef = this.Sha_Rsa.hextob64u(_0x1017dd);
      return _0x273eef;
    }
  }();
}
async function _0x153d59(_0x2b8a2f, _0x287c02) {
  const _0xa8625b = require("node-rsa");
  let _0x2c253b = new _0xa8625b("-----BEGIN PUBLIC KEY-----\n" + _0x287c02 + "\n-----END PUBLIC KEY-----");
  return _0x2c253b.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x2c253b.encrypt(_0x2b8a2f, "base64", "utf8");
}
async function _0x1d7615(_0x2965d9, _0x3db56d, _0x3cb3a8, _0x1181df) {
  if (_0x2965d9 == "delete") {
    _0x2965d9 = _0x2965d9.toUpperCase();
  } else _0x2965d9 = _0x2965d9;
  const _0x1b0a92 = require("request");
  if (_0x2965d9 == "post") {
    delete _0x3cb3a8["Content-Type"];
    delete _0x3cb3a8["content-type"];
    delete _0x3cb3a8["Content-Length"];
    delete _0x3cb3a8["content-length"];
    if ($.safeGet(_0x1181df)) _0x3cb3a8["content-type"] = "application/json;charset=utf-8";else {
      _0x3cb3a8["content-type"] = "application/x-www-form-urlencoded";
    }
    _0x1181df && (_0x3cb3a8["content-length"] = $.lengthInUtf8Bytes(_0x1181df));
  }
  _0x2965d9 == "get" && (delete _0x3cb3a8["Content-Type"], delete _0x3cb3a8["content-length"], delete _0x3cb3a8["content-type"], delete _0x3cb3a8["Content-Length"]);
  _0x3cb3a8.Host = _0x3db56d.replace("//", "/").split("/")[1];
  if (_0x53af93 == undefined) {
    if (_0x2965d9.indexOf("T") < 0) var _0x23a3b6 = {
      "url": _0x3db56d,
      "headers": _0x3cb3a8,
      "body": _0x1181df,
      "timeout": 20000
    };else var _0x23a3b6 = {
      "url": _0x3db56d,
      "headers": _0x3cb3a8,
      "form": JSON.parse(_0x1181df),
      "timeout": 20000
    };
  } else {
    if (_0x2965d9.indexOf("T") < 0) var _0x23a3b6 = {
      "url": _0x3db56d,
      "headers": _0x3cb3a8,
      "body": _0x1181df,
      "proxy": "http://" + this.dlip,
      "timeout": 20000
    };else var _0x23a3b6 = {
      "url": _0x3db56d,
      "headers": _0x3cb3a8,
      "form": JSON.parse(_0x1181df),
      "proxy": "http://" + this.dlip,
      "timeout": 20000
    };
  }
  return new Promise(async _0xc20d5d => {
    _0x1b0a92[_0x2965d9.toLowerCase()](_0x23a3b6, async (_0x51e62a, _0x4321d8, _0x31862c) => {
      try {
        if (_0x3ffc8b == 1) {
          console.log("==================请求==================");
          console.log(JSON.stringify(_0x23a3b6));
          console.log("==================返回==================");
          console.log(_0x51e62a);
          console.log(JSON.stringify(_0x4321d8));
        }
      } catch (_0x44e907) {} finally {
        if (!_0x51e62a) $.safeGet(_0x31862c) ? _0x31862c = JSON.stringify(_0x4321d8) : _0x31862c = _0x31862c;else {
          if (_0x53af93 == undefined) {
            console.log("请检查网络设置");
            _0x31862c = JSON.parse("{\"code\":\"99\"}");
          } else await this.hqdl(), _0x31862c = await this.task(_0x2965d9, _0x3db56d, _0x3cb3a8, _0x1181df);
        }
        return _0xc20d5d(_0x31862c);
      }
    });
  });
}