(window.webpackJsonp = window.webpackJsonp || []).push([[6, 2], {
  14: function (_0x2527c5, _0xb60666) {
    var _0x998d1 = {
        development: "https://k8s-api-test.fenxianglife.com/test1",
        test: "https://k8s-api-test.fenxianglife.com",
        pre: "https://api-pre.fenxianglife.com",
        prod: "https://api".concat("-1", ".fenxianglife.com")
      },
      _0x9a66d2 = _0x998d1.prod || "";
    "prod".includes("test") ? _0x9a66d2 = "".concat(_0x998d1.test, "/").concat("prod") : "prod".includes("dev") && (_0x9a66d2 = "".concat(_0x998d1.dev, "/").concat("prod"));
    var _0x25a496 = "".concat(_0x9a66d2, "/njia"),
      _0x106855 = "https://cms.fenxianglife.com/njia-cms",
      _0x41efae = "https://fenxiang-find-api.fenxianglife.com/fenxiang-find",
      _0x1274b2 = "https://njia-live-api.fenxianglife.com/njia-live",
      _0x2a564e = "https://wx-robot-api.fenxianglife.com/fenxiang-wxrobot",
      _0x458667 = "https://self-api".concat("-1", ".fenxianglife.com/njia-self"),
      _0x1d6041 = _0x998d1.prod || _0x998d1.development,
      _0x4a61cd = {
        host: _0x998d1,
        curHost: _0x1d6041,
        apiNjia: _0x25a496,
        apiWxRobot: _0x2a564e,
        apiNjiaLive: _0x1274b2,
        apiNjiaSelf: _0x458667,
        apiFind: _0x41efae,
        curCrmHost: _0x106855
      };
    _0x2527c5.exports = _0x4a61cd;
  },
  21: function (_0x3ca539, _0xd0dad2, _0x3ec2b8) {
    'use strict';

    var _0x242532 = {
      business: "njia",
      prodDomin: "https://api.fenxianglife.com"
    };
    var _0x3ac11c = {
      business: "njia",
      prodDomin: "https://api-1.fenxianglife.com"
    };
    var _0x427041 = {
      business: "njia-self",
      prodDomin: "https://self-api.fenxianglife.com"
    };
    var _0x46c9b3 = {
      business: "njia-self",
      prodDomin: "https://self-api-1.fenxianglife.com"
    };
    var _0x3ad738 = {
      business: "ilu-self",
      prodDomin: "https://api.kuaidandan.com"
    };
    var _0x661dd3 = {
      business: "njia-live",
      prodDomin: "https://njia-live-api.fenxianglife.com"
    };
    var _0x3b81c2 = {
      business: "fenxiang-find",
      prodDomin: "https://fenxiang-find-api.fenxianglife.com"
    };
    var _0x215819 = {
      business: "fenxiang-wxrobot",
      prodDomin: "https://wx-robot-api.fenxianglife.com"
    };
    var _0x5c9d95 = {
      business: "ibuy-tdd",
      prodDomin: "https://api.tuandongdong.cn"
    };
    var _0x2ad24d = {
      business: "ibuy-tdd-cms",
      prodDomin: "https://api.tuandongdong.cn"
    };
    var _0x1e3cd3 = {
      business: "ggyp-cms",
      prodDomin: "https://api.guaguayoupin.com"
    };
    var _0x5b76a9 = {
      business: "ibuy-tdd-saas",
      prodDomin: "https://api.tuandongdong.com.cn"
    };
    var _0x2ef454 = {
      business: "ggyp-scm",
      prodDomin: "https://api.guaguayoupin.com"
    };
    var _0x1fb1a5 = {
      business: "ggyp-note",
      prodDomin: "https://api.guaguayoupin.com"
    };
    var _0x3cde31,
      _0x137fc1 = _0x3ec2b8(45),
      _0x545be5 = _0x3ec2b8(14),
      _0x564e6a = _0x3ec2b8(138),
      _0x5cf021 = (_0x3ec2b8(62), _0x3ec2b8(13)),
      _0x286dd9 = _0x3ec2b8.n(_0x5cf021),
      _0x3d00ee = _0x3ec2b8(16),
      _0xd2d7c1 = {
        localEnv: "test2",
        buildEnv: "prod"
      },
      _0x586cfd = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x242532)),
      _0x4c29ff = "secretKey",
      _0x49e95a = "requestValidationMode",
      _0x397675 = new _0x3d00ee.b({
        baseURL: _0x586cfd
      }, (_0x3cde31 = {}, Object(_0x564e6a.a)(_0x3cde31, _0x4c29ff, "03226195a6664725a3372595ab474937"), Object(_0x564e6a.a)(_0x3cde31, _0x49e95a, "h5"), Object(_0x564e6a.a)(_0x3cde31, "requestFailCallBack", function (_0x2dc003) {
        var _0x8eeaf4 = (_0x2dc003 || {}).message;
        _0x286dd9.a.hide();
        _0x286dd9.a.info(_0x8eeaf4 || "系统开小差了，请稍后再试～");
      }), _0x3cde31)),
      _0x48d9e6 = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x3ac11c)),
      _0x551b18 = new _0x3d00ee.a(_0x48d9e6, "h5"),
      _0xfa2bb4 = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x427041)),
      _0x36e499 = new _0x3d00ee.a(_0xfa2bb4, "h5"),
      _0xe331d9 = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x46c9b3)),
      _0x3bee6e = (new _0x3d00ee.a(_0xe331d9, "h5"), Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x3ad738))),
      _0x185024 = new _0x3d00ee.a(_0x3bee6e, "h5"),
      _0x86b180 = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x661dd3)),
      _0x122185 = (new _0x3d00ee.a(_0x86b180, "h5"), Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x3b81c2))),
      _0x4a7ca7 = (new _0x3d00ee.a(_0x122185, "h5"), Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x215819))),
      _0x43b080 = new _0x3d00ee.a(_0x4a7ca7, "h5"),
      _0x277b43 = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x5c9d95)),
      _0x488bf5 = new _0x3d00ee.a(_0x277b43, "h5"),
      _0x48efee = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x2ad24d)),
      _0x4e51be = new _0x3d00ee.a(_0x48efee, "h5"),
      _0x334b91 = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x1e3cd3)),
      _0x38d452 = new _0x3d00ee.a(_0x334b91, "h5"),
      _0x1c4e80 = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x5b76a9)),
      _0x5759b6 = new _0x3d00ee.a(_0x1c4e80, "h5"),
      _0x3f5429 = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x2ef454)),
      _0x48060d = new _0x3d00ee.a(_0x3f5429, "h5"),
      _0x4def1d = Object(_0x3d00ee.d)(Object(_0x137fc1.a)({}, _0xd2d7c1, _0x1fb1a5)),
      _0x3ed91f = new _0x3d00ee.a(_0x4def1d, "h5"),
      _0x3afc63 = {
        getTopicInfoV2: _0x397675.get("/topic/info"),
        topicGoods: _0x397675.get("/topic/v2/goods"),
        getTopicGoods: _0x397675.get("/topic/goods")
      },
      _0x5f242b = _0x3ec2b8(64),
      _0x498c8 = _0x3ec2b8.n(_0x5f242b),
      _0x45c8a7 = _0x3ec2b8(151),
      _0x55511f = _0x3ec2b8(32),
      _0x2ee4c2 = _0x3ec2b8.n(_0x55511f),
      _0x4bdab6 = _0x3ec2b8(188),
      _0x21f9be = _0x3ec2b8.n(_0x4bdab6),
      _0x1be13c = _0x3ec2b8(10),
      _0xb2f791 = _0x3ec2b8(26),
      _0x4083f9 = _0x3ec2b8.n(_0xb2f791);
    function _0x478cd7(_0x1c3e13) {
      return {}.toString.call(_0x1c3e13).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
    function _0x26b05c(_0x3532d6) {
      _0x21f9be.a.forEach(_0x3532d6, function (_0x35324f, _0x3b7e3b) {
        null === _0x35324f && delete _0x3532d6[_0x3b7e3b];
        "string" === _0x478cd7(_0x35324f) ? _0x3532d6[_0x3b7e3b] = _0x35324f.trim() : "object" === _0x478cd7(_0x35324f) ? _0x3532d6[_0x3b7e3b] = _0x26b05c(_0x35324f) : "array" === _0x478cd7(_0x35324f) && (_0x3532d6[_0x3b7e3b] = _0x26b05c(_0x35324f));
      });
      return _0x3532d6;
    }
    _0x2ee4c2.a.defaults.baseURL = _0x545be5.apiNjia;
    var _0x5e9ff5 = function () {
        var _0x48e14f = Object(_0x45c8a7.a)(_0x498c8.a.mark(function _0x2a8929(_0x53c3d5, _0x5c0dcb, _0x1bb9bc, _0x455eff) {
          var _0x1f5109, _0x324280;
          return _0x498c8.a.wrap(function (_0x4d1fbb) {
            for (;;) {
              switch (_0x4d1fbb.prev = _0x4d1fbb.next) {
                case 0:
                  var _0xfa53c7 = {
                    "Content-Type": "application/json"
                  };
                  _0x1f5109 = _0xfa53c7;
                  _0x1bb9bc && _0x1bb9bc.headers && (Object.assign(_0x1f5109, JSON.parse(JSON.stringify(_0x1bb9bc.headers))), delete _0x1bb9bc.headers);
                  _0x1f5109.traceId || (_0x1f5109.traceId = "h5-".concat(new Date().getTime(), "-").concat(Math.random().toString(36).substring(2)));
                  _0x4d1fbb.next = 5;
                  return _0x1be13c.a.utils.getH5Finger();
                case 5:
                  if (_0x4d1fbb.t0 = _0x4d1fbb.sent, _0x4d1fbb.t0) {
                    _0x4d1fbb.next = 8;
                    break;
                  }
                  _0x4d1fbb.t0 = "";
                case 8:
                  _0x324280 = _0x4d1fbb.t0;
                  return _0x4d1fbb.abrupt("return", new Promise(function (_0x993fb4, _0xa6873e) {
                    var _0x41577b = _0x4083f9.a.parse(window.location.search),
                      _0x817b32 = _0x41577b.uid,
                      _0x176cf1 = _0x41577b.token,
                      _0x46ed37 = _0x41577b.platform,
                      _0x14cc0d = _0x41577b.did,
                      _0x2084bb = _0x41577b.v,
                      _0xb5908d = 8000;
                    if (_0x817b32 && _0x176cf1 && (_0x1f5109["h5-tk"] = JSON.stringify({
                      token: _0x176cf1,
                      uid: _0x817b32,
                      did: _0x14cc0d,
                      finger: _0x324280,
                      ver: _0x2084bb
                    })), _0x455eff && (!_0x176cf1 || !_0x817b32)) {
                      ["ios", "android"].includes(_0x46ed37) && _0x1be13c.a.brige.openLogin();
                      !_0x46ed37 && _0x286dd9.a.info("请先登录");
                      return void _0xa6873e();
                    }
                    _0x1bb9bc && "object" == typeof _0x1bb9bc && (_0x1bb9bc = _0x26b05c(_0x1bb9bc));
                    _0x1bb9bc && _0x1bb9bc.timeout && _0x1bb9bc.timeout > 8000 && (_0xb5908d = _0x1bb9bc.timeout, delete _0x1bb9bc.timeout);
                    _0x2ee4c2()({
                      method: _0x53c3d5,
                      url: _0x5c0dcb,
                      data: "POST" === _0x53c3d5 || "PUT" === _0x53c3d5 ? JSON.stringify(_0x1bb9bc) : null,
                      params: "GET" === _0x53c3d5 || "DELETE" === _0x53c3d5 ? _0x1bb9bc : null,
                      headers: _0x1f5109,
                      timeout: _0xb5908d
                    }).then(function (_0x5c4106) {
                      var _0x5dc4ca = _0x5c4106.data.code,
                        _0x3a1ff9 = {
                          "45011": 1,
                          "45012": 2
                        };
                      200 === _0x5dc4ca ? _0x993fb4(_0x5c4106.data) : _0x3a1ff9[_0x5dc4ca] ? (_0x1be13c.a.brige.buildRelationId({
                        showBindView: 1,
                        pubType: _0x3a1ff9[_0x5dc4ca]
                      }), _0xa6873e(_0x5c4106.data)) : (_0x5c4106.data.message && _0x286dd9.a.info(_0x5c4106.data.message, 3), _0xa6873e(_0x5c4106.data));
                    }).catch(function () {
                      var _0x2e1af6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        _0x18b481 = _0x2e1af6.response || {};
                      ("ECONNABORTED" === _0x2e1af6.code && -1 !== _0x2e1af6.message.indexOf("timeout") || _0x18b481.status >= 500) && _0x286dd9.a.offline("很抱歉，当前访问人数太多啦，请稍后再试", 1);
                      _0xa6873e(_0x2e1af6);
                    });
                  }));
                case 10:
                case "end":
                  return _0x4d1fbb.stop();
              }
            }
          }, _0x2a8929);
        }));
        return function (_0x1fb66c, _0x55711e, _0x159873, _0x6c14c9) {
          return _0x48e14f.apply(this, arguments);
        };
      }(),
      _0x45f7af = {
        get: function (_0x310c5b, _0x100e8b) {
          return function (_0x2194bd) {
            return _0x5e9ff5("GET", _0x310c5b, _0x2194bd, _0x100e8b);
          };
        },
        getById: function (_0x4f180f, _0x21573d) {
          return function (_0x2a426d) {
            return _0x5e9ff5("GET", "".concat(_0x4f180f, "/").concat(_0x2a426d.id), null, _0x21573d);
          };
        },
        post: function (_0x2030ac, _0x1d0a14, _0x5b3d94) {
          return function (_0x4b6882) {
            return _0x5e9ff5("POST", _0x2030ac, _0x4b6882, _0x1d0a14, _0x5b3d94);
          };
        },
        postById: function (_0x3e783e, _0x1a8bac) {
          return function (_0x1b20eb) {
            return _0x5e9ff5("POST", "".concat(_0x3e783e, "/").concat(_0x1b20eb.id), _0x1b20eb, _0x1a8bac);
          };
        }
      },
      _0x56d87d = {
        getItemConvert: _0x397675.get("/util/item/info"),
        getWxToken: _0x397675.get("/wx/mp/oAuth2Info"),
        wxSign: _0x397675.post("/wx/mp/wechat/sign"),
        trackLog: _0x45f7af.post("/util/track/log"),
        wifi: _0x45f7af.get("/util/wfs"),
        buildRelationId: _0x397675.get("/relation/buildRelationId"),
        getModule: _0x397675.get("/util/point/center/module"),
        convertUrl: _0x397675.get("/util/convert/url", !0),
        getBanner: _0x397675.get("/util/banner"),
        convertUrlv2: _0x397675.get("/util/convert/url/v2", !0),
        getDynamicDomain: _0x397675.get("/util/domain"),
        getPID: _0x45f7af.get("/util/userPid/3"),
        getConvertBatchUrl: _0x397675.post("/util/convertBatchUrl", !0),
        getExtensionLink: _0x397675.post("/util/extension/link", !0),
        convertUrlNoLogin: _0x397675.get("/util/convert/nologin/url"),
        convertUrlV3: _0x397675.get("/util/convert/url/v3"),
        getDomain: _0x397675.get("/util/domain/v2"),
        getNormalConfig: _0x397675.get("/config"),
        uploadApi: _0x397675.post("/util/upload"),
        getTkl: _0x397675.post("/util/convert/item/tpwd", !1),
        getTBProduct: _0x397675.get("/goods/getTBItem"),
        getShortLink: _0x397675.post("/util/tklToShortLink", !0),
        getShortLinkV2: _0x397675.post("/privatecoop/tklToLink", !0),
        getWechatSchemeUrl: _0x397675.get("/util/wechat/scheme"),
        getJDShortLink: _0x397675.post("/util/jDToShortLink"),
        getCnggShortLink: _0x397675.get("/util/convert/cnggUrl"),
        pddConvertUrlApi: _0x397675.post("/privateLinks/pddConvertUrl"),
        jdConvertUrlApi: _0x397675.post("/privateLinks/jdConvertUrl"),
        getAliAuth: _0x397675.post("/alipay/cluster/auth", !0)
      },
      _0x37f87c = {
        pricesCategory: _0x45f7af.post("/mmz/item/category", !0),
        pricesList: _0x45f7af.post("/mmz/item/list", !0)
      },
      _0x107be1 = {
        orderDonateCreate: _0x397675.post("/order/donate/create", !0),
        orderDonateSubmit: _0x397675.post("/order/donate/submit", !0),
        orderDonateSubmitV2: _0x397675.post("/order/donate/submit/v2", !0),
        needVerificationOrders: _0x397675.post("/order/needVerification/orders"),
        verifyOrders: _0x397675.post("/order/verify/orders", !0),
        searchOrders: _0x397675.post("/order/search/orders", !0),
        cancelZhunaOrder: _0x397675.post("/order/search/cancelOrder/zhunaer", !0),
        thirdOrders: _0x397675.get("/order/third/orders", !0),
        getCardOrderList: _0x397675.get("/order/card/orders", !0),
        getCardOrderCount: _0x397675.get("/order/card/order/count", !0),
        deleteCardOrder: _0x397675.post("/order/card/order/delete", !0),
        getCardOrderTip: _0x397675.get("/card/order/tips", !0)
      },
      _0x56507f = {
        donationCertificate: _0x551b18.get("/donation/certificate", !0),
        donationCount: _0x551b18.get("/donation/count", !0),
        donationDetail: _0x551b18.post("/donation/certificate/details", !0),
        donationOrderDetail: _0x551b18.post("/donation/order/details", !0),
        donationIndex: _0x551b18.get("/donation/index", !1),
        donationHeadPics: _0x551b18.get("/donation/headPics", !1),
        donationRanklist: _0x551b18.get("/donation/rankList", !1),
        donationSwitch: _0x551b18.post("/donation/switch/v2", !0)
      },
      _0x494fc9 = {
        taoCategory: _0x397675.get("/index/category"),
        goodsDetail: _0x45f7af.get("/goods/detail"),
        goodsClickUrl: _0x397675.post("/goods/clickUrl", !0),
        goodsSearchMulti: _0x397675.post("/goods/search/multi"),
        goodsSearchExtra: _0x397675.post("/goods/search/extra"),
        goodsSearchItem: _0x397675.post("/search/item"),
        goodsSelection: _0x397675.post("/goods/selection"),
        getPddoAuthLink: _0x397675.get("/goods/pdd/oauth", !0),
        getBrandPavilion: _0x397675.get("/brandPavilion/index")
      },
      _0x5ea000 = {
        scoreIndex: _0x397675.post("/rewardPoints/scoreIndex", !0),
        getScoreChangeList: _0x397675.post("/rewardPoints/getScoreChangeList", !0),
        socreInfo: _0x397675.get("/rewardPoints/scoreInfo", !0),
        exchangeRecordList: _0x397675.get("/rewardPoints/list"),
        notifyGetScoreEvent: _0x397675.post("/rewardPoints/notifyGetScoreEvent", !0),
        checkFinishTask: _0x397675.post("/rewardPoints/checkFinishTask", !0),
        getCurrencyIndexInfo: _0x397675.post("/rewardPoints/V2/scoreIndex", !0),
        getCurrencyInfoAndTask: _0x397675.get("/rewardPoints/scoreTask", !0),
        getCurrencyUserWheelCount: _0x397675.get("/winners/haveDrawChance", !0),
        getCurrencyTljExchangeList: _0x397675.post("/rewardPoints/item/list", !0),
        getCurrencyTljExchangeDetail: _0x397675.get("/rewardPoints/item/detail", !0),
        toCurrencyExchange: _0x397675.post("/rewardPoints/item/clickUrl", !0),
        createCurrencyHelpTask: _0x397675.post("/rewardPoints/share/task/info", !0),
        complateCurrencyHelpTask: _0x397675.post("/rewardPoints/share/task/assist", !1),
        signCurrencyV2Seckill: _0x397675.post("/rewardPoints/seckill/subscribe", !0),
        getCurrencyV2Seckill: _0x397675.get("/rewardPoints/seckill/list")
      },
      _0x3f2cd6 = {
        userInfo: _0x397675.get("/users/info", !0),
        userRelationInfo: _0x397675.get("/users/relation/info", !0),
        simpleUserInfo: _0x397675.get("/users/info/simple"),
        userTutor: _0x397675.post("/users/recommend/tutor", !0),
        makeUserLogoutSure: _0x397675.post("/users/logout/sure", !0),
        getUserLogoutDetail: _0x397675.get("/users/logout/detail", !0),
        getUserPid: _0x397675.get("/users/users/getUserPid", !0),
        getRelationInfo: _0x397675.get("users/relation/info", !0),
        getUserPidInfoApi: _0x397675.get("/users/pid/info", !0),
        getWxBindApi: _0x397675.get("/game/userWechatBind", !0)
      },
      _0x4efa92 = {
        currencyList: _0x45f7af.post("".concat(_0x545be5.apiNjiaSelf, "/coupon/user/currencyList"), !0),
        exchangecoupon: _0x45f7af.post("".concat(_0x545be5.apiNjiaSelf, "/coupon/user/exchangecoupon"), !0),
        channelItemList: _0x45f7af.post("".concat(_0x545be5.apiNjiaSelf, "/channel/channelItemList"), !0),
        rewardCouponInfo: _0x45f7af.post("".concat(_0x545be5.apiNjiaSelf, "/coupon/user/rewardCouponInfo"), !0),
        getSelfTopicGoods: _0x45f7af.post("".concat(_0x545be5.apiNjiaSelf, "/topic/findTopicItemsV2")),
        getSelfSeckillGoods: _0x45f7af.post("".concat(_0x545be5.apiNjiaSelf, "/topic/topicItemsSeckill")),
        getGiftDetail: _0x45f7af.get("".concat(_0x545be5.apiNjiaSelf, "/item/giftDetail")),
        getOrderCount: _0x36e499.get("".concat(_0x545be5.apiNjiaSelf, "/order/h5/orderCount"), !0),
        addSelfItemShare: _0x45f7af.get("".concat(_0x545be5.apiNjiaSelf, "/item/share")),
        getDonationRecord: _0x45f7af.post("".concat(_0x545be5.apiNjiaSelf, "/wuhan/donationRecord")),
        getDonationActivity: _0x45f7af.post("".concat(_0x545be5.apiNjiaSelf, "/wuhan/donationActivity"), !0),
        getShareImg: _0x45f7af.get("".concat(_0x545be5.apiNjiaSelf, "/wx/getShareImg"), !0),
        createQrcode: _0x36e499.get("".concat(_0x545be5.apiNjiaSelf, "/wx/wechatMin/createQrcode"), !0),
        getServiceTabInfo: _0x36e499.post("".concat(_0x545be5.apiNjiaSelf, "/customerService/list")),
        getQuestionDetail: _0x36e499.get("".concat(_0x545be5.apiNjiaSelf, "/customerService/detail")),
        getItemFindGiftItems: _0x45f7af.get("".concat(_0x545be5.apiNjiaSelf, "/item/findGiftItems/v3")),
        vipRights: _0x36e499.post("".concat(_0x545be5.apiNjiaSelf, "/vip/discount/list"), !0),
        vipRightsLog: _0x36e499.post("".concat(_0x545be5.apiNjiaSelf, "/vip/discount/order/list"), !0),
        getNewsItems: _0x36e499.get("/item/findChannelItems", !0),
        getCoupon: _0x36e499.post("/coupon/user/get", !0)
      },
      _0x3e8151 = {
        getWphIndex: _0x397675.get("/activity/vip/popularize", !0),
        getWphFans: _0x397675.get("/activity/vip/popularize/fans", !0),
        signUpWphAct: _0x397675.post("/activity/sign/up", !0),
        getActSceneIndex: _0x397675.get("/activity/scene"),
        getS11DrawIndex: _0x397675.get("/conquer/index", !0),
        getS11DrawPrize: _0x397675.get("/conquer/prize/list"),
        getS11DrawRes: _0x397675.post("/conquer/draw", !0),
        getS11DrawRecord: _0x397675.get("/conquer/win/prize/list", !0),
        getFreeVipIndex: _0x397675.get("/vipBenefitTask/index", !0),
        setFreeVipReminder: _0x397675.post("/vipBenefitTask/reminder", !0),
        getGiveFansIndex: _0x397675.get("/giveFans/index", !0),
        getFansDayPreInfo: _0x397675.get("/fansFestival/preheat/index"),
        setFansDayPreState: _0x397675.post("/fansFestival/preheat/reminder", !0),
        getFansDayInfo: _0x397675.get("/fansFestival/index"),
        getFansDaySubVenue: _0x397675.get("/fansFestival/subVenue"),
        getFansDayTljUrl: _0x397675.post("/fansFestival/tlj/clickUrl"),
        getFansDayGuessLike: _0x397675.get("/fansFestival/guess/like"),
        getMaterialActIndex: _0x397675.get("/invite/index", !0),
        joinMaterialAct: _0x397675.post("/invite/join", !0),
        getMaterialActFans: _0x397675.get("/invite/fans/detail", !0),
        getMifenIndex: _0x397675.post("/xiaomi/activity/section/home"),
        startMifenDrawing: _0x397675.post("/xiaomi/activity/draw"),
        getMifenRecord: _0x397675.post("/xiaomi/activity/winningRecord"),
        getMifenOrders: _0x397675.post("/xiaomi/activity/third/order"),
        getYearEndDrawInfo: _0x397675.get("/winners/year/draw"),
        drawList: _0x397675.get("/prize/drawList"),
        prizeUserList: _0x397675.post("/winners/prizeUserList", !0),
        scoreDrawing: _0x397675.post("/winners/scoreDrawing", !0),
        getTbUrl: _0x397675.get("/official/activity/getActivityLink"),
        getElmUrl: _0x397675.get("/official/activity/aliLife/getActivityLink"),
        signUp: _0x45f7af.post("/signup/users/createOrModify"),
        getSignUpInfo: _0x45f7af.get("/signup/users/list"),
        getCustomerManagerWX: _0x45f7af.post("/vipTrade/payWechat"),
        getTeamOrderRank: _0x45f7af.get("/activity/team/order/rank"),
        getTeamOrderStatistics: _0x45f7af.get("/activity/team/order/statistics", !0),
        getTljGoodsV2: _0x397675.get("/tlj/activity/itemsNewV2"),
        receiveTljRedEnvelope: _0x397675.post("/tlj/activity/receiveRedEnvelope", !0),
        getTljInfo: _0x397675.get("/tlj/activity/index"),
        receiveTljRedNew: _0x397675.post("/tlj/activity/receive", !0),
        getTljBroadcast: _0x397675.get("/tlj/activity/broadcast"),
        getCpsBroadcast: _0x45f7af.get("/cps/user/list"),
        getCpsUserSaleData: _0x45f7af.get("/cps/user/detail", !0),
        getCpsAwardDetail: _0x45f7af.get("/cps/user/award/detail", !0),
        getCpsGoodsList: _0x45f7af.get("/cps/goods/list"),
        getNjiaSeckillGoods: _0x397675.post("/tlj/activity/activity618"),
        getS12RedEnvelopeData: _0x397675.get("/activity/super/envelope", !0),
        getRedEnvelopeBaseInfo: _0x45f7af.get("/activity/get/invite/red/envelope", !0),
        receiveRedEnvelope: _0x45f7af.post("/activity/receive/invite/red/envelope", !0),
        getRedEnvelopeBroadcast: _0x45f7af.get("/activity/invite/red/envelope/list"),
        recognizeRedEnvelopeInvite: _0x45f7af.post("/activity/invite/red/envelope/recognize", !0),
        getJingdongOrder: _0x45f7af.get("/free/activity/orders/v2"),
        getGoodsUrl: _0x45f7af.get("/util/convert/url"),
        getRewardDetail: _0x45f7af.get("/activity/jd/reward/detail"),
        punchCard: _0x397675.post("/activity/clocking/in", !0),
        clockSignUp: _0x397675.post("/activity/clocking/in/sign/up", !0),
        getPunchCardDetail: _0x397675.get("/activity/get/clocking/in/detail"),
        getPunchCardList: _0x397675.post("/activity/get/clocking/in/list", !0),
        getPunchCardStatistics: _0x397675.get("/activity/get/clocking/in/statistics"),
        getPID: _0x45f7af.get("/util/userPid/3"),
        getTklTokenNewSingle: _0x397675.post("/util/v3/convert/tpwd"),
        getTklTokenNewList: _0x397675.post("/util/convert/tpwd/list", !0),
        getWalkDetail: _0x397675.get("/activity/walk/index/detail", !0),
        getWalkEXList: _0x397675.get("/activity/walk/ex/list"),
        getWalkDiary: _0x397675.get("/activity/walk/my/diary", !0),
        collectWalk: _0x397675.post("/activity/walk/collect", !0),
        addIOSWalk: _0x397675.post("/activity/walk/add/ios", !0),
        getTour: _0x45f7af.get("/activity/tour/index", !0),
        getTourList: _0x45f7af.get("/activity/tour/list", !0),
        getTourMobileSave: _0x45f7af.post("/activity/tour/mobile/save", !0),
        getCategoryAdvance: _0x45f7af.get("/goods/category/advance"),
        getItemAdvance: _0x45f7af.post("/search/item/advance"),
        getGoodsClickUrl: _0x397675.post("/goods/clickUrl", !0),
        veriUserLogin: _0x45f7af.post("".concat(_0x545be5.curCrmHost, "/user/login")),
        getSignUpUserInfo: _0x45f7af.post("".concat(_0x545be5.curCrmHost, "/activity/getSignUpUserInfo")),
        signUpVerification: _0x45f7af.post("".concat(_0x545be5.curCrmHost, "/activity/signUpVerification")),
        getVeriCode: _0x45f7af.post("/util/sms/code"),
        loginByMobile: _0x45f7af.post("/register/gift"),
        tbInviteProfit: _0x45f7af.get("/tbInvite/Profit/statistics", !0),
        tbInviteDetail: _0x45f7af.get("/tbInvite/detail/page", !0),
        concertIndex: _0x45f7af.get("/concertActivity/index", !0),
        concertList: _0x45f7af.post("/concertActivity/list"),
        findMobile: _0x45f7af.get("/concertActivity/mobile/find", !0),
        saveMobile: _0x45f7af.post("/concertActivity/mobile/save", !0),
        getShoppingList: _0x397675.post("/activity/shopping/list"),
        getItemChain: _0x397675.get("/activity/shopping/spinChain"),
        findConcertUserInfo: _0x397675.get("/concertActivity/userInfo/find", !0),
        saveConcertUserInfo: _0x397675.post("/concertActivity/userInfo/save", !0),
        ticketIndex: _0x45f7af.get("/activity/ticket/index", !0),
        ticketSecondList: _0x45f7af.get("/activity/ticket/second/list", !0),
        necklaceList: _0x45f7af.get("/concertActivity/necklace/list", !0),
        get2019summary: _0x45f7af.get("/user/annual/2019/detail", !0),
        get2020summary: _0x397675.get("/user/annual/V2/detail", !0),
        getTbSpecialPriceInviteDetail: _0x45f7af.get("/tbSpecialPriceInvite/detail/page", !0),
        getTbSpecialPriceInviteStatistics: _0x45f7af.get("/tbSpecialPriceInvite/profit/statistics", !0),
        getFirstOrderIndex: _0x397675.get("/first/order/index", !0),
        getFirstOrderTask: _0x397675.post("/first/order/list", !0),
        getFirstOrderReward: _0x397675.post("/first/order/reward/detail/list", !0),
        receiveFirstOrderAct: _0x397675.post("/first/order/receive", !0),
        getTencentLiveInfo: _0x45f7af.get("/activity/tencent/live"),
        getTencentLiveList: _0x45f7af.post("/activity/tencent/live/list"),
        getMiniCode: _0x45f7af.post("/wx/defalut/codeUnlimit"),
        getTencentLiveGoods: _0x45f7af.post("/activity/tencent/live/itemList/v2"),
        getDoubleCardIndex: _0x397675.get("/doubleReward/index", !0),
        getDoubleCardBroadcast: _0x397675.get("/doubleReward/broadcast"),
        useDoubleCard: _0x397675.post("/doubleReward/order/double", !0),
        doubleCardCheckShare: _0x397675.post("/doubleReward/shareCheck", !0),
        doubleCardInvitation: _0x397675.post("/doubleReward/invitation"),
        getDoubleRewardCard: _0x397675.get("/doubleReward/card", !0),
        getDoubleRewardOrder: _0x397675.get("/doubleReward/order", !0),
        getRankList: _0x45f7af.get("/activity/live/preheat/ranking", !0),
        getMinQrCode: _0x45f7af.get("".concat(_0x545be5.apiNjiaSelf, "/wx/wechatMin/createQrcode"), !0),
        getCityCode: _0x45f7af.post("/util/location", !1),
        getCategories: _0x45f7af.get("/eleme/517/category", !1),
        getProducts: _0x45f7af.post("/eleme/517/goods/list", !1),
        getConvertInfo: _0x45f7af.post("/eleme/517/goods/convertUrl", !1),
        getActivityLink: _0x45f7af.get("/official/activity/getActivityLink/1571715733668", !1),
        getWxRobotActInfo: _0x45f7af.get("/wxRobotActivity/index", !0),
        receiveRobotTask: _0x45f7af.post("/wxRobotActivity/task/receive", !0),
        receiveRobot: _0x45f7af.post("/wxRobotActivity/benefits/receive", !0),
        winnersScoreDrawing: _0x397675.post("/winners/scoreDrawing", !0),
        winnersDrawing: _0x397675.post("/winners/drawing", !0),
        prizeDrawList: _0x397675.get("/prize/drawList", !0),
        winnersDrawCount: _0x397675.get("/winners/draw/count", !0),
        winnersAddCount: _0x397675.post("/winners/add/count", !0),
        getVipInviteInfo: _0x397675.get("/vipInviteActivity/index", !0),
        joinVipInviteAct: _0x397675.post("/vipInviteActivity/join", !0),
        getVVVipInviteInfo: _0x45f7af.get("/unionInviteActivity/index", !0),
        get618PersonalData: _0x397675.get("/activity/super/envelope", !0),
        get618TeamData: _0x397675.get("/activity/team/super/envelope", !0),
        getUserInfoByInviteCode: _0x397675.get("/activity/inviteCode", !0),
        join618Team: _0x397675.post("/activity/team", !0),
        getVipsActivityOrder: _0x397675.get("/vipsActivity/orderInfo", !0),
        getSepActivityOrder: _0x397675.get("/vipsActivity/orders", !0),
        getSepDynamicList: _0x397675.get("/vipsActivity/orderList"),
        getSepOrderProfit: _0x397675.get("/vipsActivity/order/profit", !0),
        getSepConvertUrl: _0x397675.get("/vipsActivity/convert/url"),
        getOutsideClickUrl: _0x397675.post("/goods/outside/clickUrl"),
        getHotSprintProducts: _0x45f7af.get("/activity/hotStyle/goodsList", !1),
        getHotSprintRanking: _0x45f7af.get("/activity/hotStyle/spreadRank", !0),
        getHotSprintRecord: _0x45f7af.get("/activity/hotStyle/myRecord", !0),
        saveHotSprintPrizeInfo: _0x45f7af.post("/activity/hotStyle/prizeWinning", !0),
        getHotSprintRobotStock: _0x45f7af.get("".concat(_0x545be5.apiNjiaSelf, "/active/wxRobotStock"), !1),
        getLuckyDrawList: _0x397675.get("/luckyDraw/items", !0),
        getMyLuckyDrawList: _0x397675.get("/luckyDraw/items/myself", !0),
        getLuckyDrawDetail: _0x397675.get("/luckyDraw/items/detail"),
        signUpLuckyDraw: _0x397675.post("/luckyDraw/signUp", !0),
        completeLuckyDrawShare: _0x397675.post("/luckyDraw/completeTask", !0),
        assistLuckyDraw: _0x397675.post("/luckyDraw/assistance", !0),
        modifyLuckyDrawAddress: _0x397675.post("/luckyDraw/modifyConsigneeInfo", !0),
        getLuckyDrawShareDetail: _0x397675.get("/luckyDraw/items/detail/share"),
        clickLuckyDrawTask: _0x397675.post("/luckyDraw/click"),
        getNewUserTaskInfoV2: _0x397675.get("/newcomerTask/index", !0),
        joinNewUserTask: _0x397675.post("/newcomerTask/join", !0),
        completeNewUserTaskV2: _0x397675.post("/newcomerTask/complete", !0),
        newUserWithdraw: _0x397675.post("/newcomerTask/withdraw", !0),
        getNewUserDrawIndex: _0x397675.get("/newcomerTask/luckyDraw/index", !0),
        getNewUserDrawRecord: _0x397675.get("/newcomerTask/luckyDraw/winningRecord", !0),
        getNewUserDrawResult: _0x397675.post("/newcomerTask/luckyDraw", !0),
        getNewUserTaskInfo: _0x397675.get("/newUserTask/index", !0),
        getNewUserBroadcast: _0x397675.get("/newUserTask/broadcast", !1),
        completeNewUserTask: _0x397675.post("/newUserTask/complete", !0),
        getBillionSubsidyInfo: _0x397675.get("/billionSubsidy/info"),
        receiveBillionSubsidy: _0x397675.post("/billionSubsidy/receive", !0),
        getBillionSubsidyCategory: _0x397675.get("/billionSubsidy/categories"),
        getBillionSubsidyGoods: _0x397675.get("/billionSubsidy/items"),
        getBillionSubsidyGoodsDetail: _0x397675.get("/billionSubsidy/items/detail"),
        getBillionSubsidyUrl: _0x397675.post("/billionSubsidy/items/clickUrl", !0),
        getBillionSubsidyTKL: _0x397675.post("/billionSubsidy/external/items/clickUrl"),
        getBillionSubsidyFreeItems: _0x397675.get("/billionSubsidy/free/items"),
        getBillionSubsidyFreeItemsUrl: _0x397675.post("/billionSubsidy/free/items/clickUrl"),
        getBillionSubsidyFreeOrders: _0x397675.get("/billionSubsidy/free/orders"),
        billionSubsidySign: _0x397675.post("/activity/billion/subsidy/sign"),
        billionSubsidyData: _0x397675.post("/activity/billion/subsidy/data"),
        getLotterySubsidyInfo: _0x397675.get("/lotterySubsidy/index"),
        getLotterySubsidyFreeItems: _0x397675.get("/lotterySubsidy/free/items"),
        getLotterySubsidyFreeItemsUrl: _0x397675.post("/lotterySubsidy/free/items/clickUrl"),
        getLotterySubsidyFreeOrders: _0x397675.get("/lotterySubsidy/free/orders"),
        peachSelfRecord: _0x45f7af.get("/activity/salesData/selfRecord", !0),
        getRedmiOrder: _0x45f7af.post("/xiaomi/activity/redmi/order", !0),
        getRedmiHome: _0x45f7af.get("/xiaomi/activity/redmi/url", !0),
        getLmUserProfit: _0x397675.get("/activity/sell/talent/user/profit", !0),
        getLmHotGoods: _0x397675.get("/activity/sell/talent/hot/good", !1),
        getLmRanking: _0x397675.post("/activity/sell/talent/user/ranking", !1),
        getVipUserInfo: _0x397675.get("/vipCenter/userInfo", !0),
        toJljDetail: _0x397675.post("/tlj/activity/receiveLj", !1),
        promotionRecord: _0x45f7af.get("".concat(_0x545be5.apiNjiaSelf, "/promotion/orderReward/info"), !0),
        getUpgradeVip: _0x397675.get("/activity/upgrade/vip", !0),
        inviteRedEnvelopeIndex: _0x397675.get("/inviteRedEnvelope/index", !0),
        newReceiveRedEnvelope: _0x397675.post("/inviteRedEnvelope/receive", !0),
        shareRedEnvelope: _0x397675.post("/inviteRedEnvelope/share", !0),
        receiveSurpriseReward: _0x397675.post("/inviteRedEnvelope/surpriseReward/receive", !0),
        gameAdTaskId: _0x397675.get("/game/advert"),
        getRewardRank: _0x45f7af.get("/activity/reward/rank"),
        getSanYuanSelfData: _0x45f7af.get("/activity/sanyuan/selfData"),
        getDouble202011TeamScore: _0x397675.get("/activity/doubleTwelve/achievement", !0),
        get202011SuperRedData: _0x397675.get("/activity/super/envelope", !0),
        conunt202011Share: _0x397675.post("/activity/share/super/envelope", !0),
        get202011Reward: _0x397675.post("/activity/super/envelope/amount", !0),
        getRewardCount: _0x397675.post("/winners/add/count", !0),
        drawing1212: _0x397675.post("/winners/drawing", !0),
        get1212DrawList: _0x397675.get("/prize/drawList"),
        doubleTwelveDrawData: _0x397675.get("/activity/doubleTwelve/info", !0),
        orderGetRedHome: _0x397675.get("/order/reward/accountInfo", !0),
        orderGetRedList: _0x397675.get("/order/reward/detail", !0),
        getOneYuanItems: _0x45f7af.get("/tlj/activity/oneYuan/items", !0),
        getOneYuanItemDetail: _0x45f7af.get("/tlj/activity/oneYuan/items/detail", !0),
        getOneYuanClickUrl: _0x45f7af.post("/tlj/activity/oneYuan/items/clickUrl", !0),
        getOneYuanTkl: _0x45f7af.get("/tlj/activity/oneYuan/items/tpwd", !0),
        getSeckillShowInfo: _0x397675.get("/meituanSeckill/showInfo", !0),
        getSeckillProductList: _0x397675.get("/meituanSeckill/list", !0),
        getSeckillCoupon: _0x397675.get("/meituanSeckill/getCoupon", !0),
        getSeckillParameters: _0x397675.get("/meituanSeckill/getParameters", !0),
        meituanSeckillToPush: _0x397675.post("/meituanSeckill/goods/remind", !0),
        getMeituanYxOrders: _0x397675.get("/meituan/cpa/orderList", !0),
        getODetail: _0x397675.get("/goods/special/tlj0YuanDetail"),
        getMiniPromotionInfo: _0x397675.get("/wxmini/activity/pdd/index"),
        getMiniPromotionProfit: _0x397675.get("/wxmini/activity/pdd/income"),
        getMiniPromotionOrder: _0x397675.get("/wxmini/activity/pdd/orderList"),
        getMiniPddRankingConfig: _0x397675.get("/activity/pdd/sale/index"),
        getMiniPddRanking: _0x397675.get("/activity/reward/rank"),
        setSuperEnvelopeNeminder: _0x397675.post("/activity/update/subscribe/log"),
        getSuperEnvelopeNeminder: _0x397675.get("/activity/subscribe/log"),
        getBFDetail: _0x397675.get("/benefitBag/index", !0),
        joinBF: _0x397675.post("/benefitBag/join", !0),
        receiveBFReward: _0x397675.post("/benefitBag/receiveReward", !0),
        getBFBalance: _0x397675.get("/benefitBag/balance", !0),
        getBFRewardRecords: _0x397675.get("/benefitBag/rewardRecords", !0),
        getBFOrders: _0x397675.get("/benefitBag/orders", !0),
        getBFInviteRecords: _0x397675.get("/benefitBag/invitationRecords", !0),
        setBFReminder: _0x397675.post("/benefitBag/reminder", !0),
        getOldBFDetail: _0x397675.get("/benefit/preferential/index", !0),
        startOldBFTask: _0x397675.post("/benefit/preferential/startTask", !0),
        getOldBFPopup: _0x397675.post("/benefit/preferential/popup", !0),
        getOldBFHelp: _0x397675.post("/benefit/preferential/help", !0),
        getOldBFConsume: _0x397675.post("/benefit/preferential/consume", !0),
        buyOldBFSeckill: _0x397675.post("/benefit/preferential/seckill/buy", !0),
        subscribeOldBFSeckill: _0x397675.post("/benefit/preferential/seckill/subscribe", !0),
        getOldBFLifeGoods: _0x397675.get("/benefit/preferential/life/index", !0),
        getOldBFans: _0x397675.get("/benefit/preferential/fans", !0),
        getOrderList: _0x397675.get("/benefit/preferential/seckill/orderList", !0),
        getSuperEnvelopeIndex: _0x397675.get("/activity/super/envelope/index"),
        getSuperEnvelope: _0x397675.get("/activity/super/envelope"),
        getKuaishoucpsBase: _0x397675.get("/kuaishou/cps/liveRooms"),
        getKuaishoucpsShareCode: _0x397675.get("/kuaishou/cps/shareCode", !0),
        getVipByTask: _0x397675.get("/vipUpgrade/index", !0),
        getVipByTaskFans: _0x397675.get("/vipUpgrade/fans", !0),
        getVipByTaskIncome: _0x397675.get("/vipUpgrade/income", !0),
        getTmSuperCategories: _0x397675.get("/tmall/market/config"),
        getTmSuperProByCategory: _0x397675.get("/tmall/market/goods/list"),
        getSellRewardDetail: _0x397675.get("/activity/sell/reward/detail"),
        getSellItemList: _0x397675.get("/activity/sell/reward/itemList"),
        getSellRewardIndex: _0x397675.get("/activity/sell/reward/index"),
        tokyoOlympic: _0x397675.post("/activity/tokyo/olympic"),
        getCircleGoods: _0x397675.get("/discover/goods"),
        sellRewardRank: _0x397675.get("/activity/sell/reward/activity"),
        getZsVip: _0x397675.get("/giveVip/index", !0),
        getGiveVipUsers: _0x397675.get("/giveVip/subUser", !0),
        getSelfCardSum: _0x397675.get("/activity/self/card/index", !0),
        getSelfCardOrderDetail: _0x397675.post("/activity/self/card/order/detail", !0),
        getBrandShopCategory: _0x397675.get("/brandShop/category"),
        getBrandShopList: _0x397675.get("/brandShop/list"),
        getBrandShopGoods: _0x397675.get("/brandShop/goods", !0),
        shareBrandShop: _0x397675.post("/brandShop/share"),
        getBrandShopUrl: _0x397675.post("/brandShop/clickUrl", !0),
        getAuthorizeInfo: _0x397675.get("/brandShop/authorizeInfo"),
        toSignBy20211212Draw: _0x397675.post("/sell/sign/up", !0),
        get20211212Draw: _0x397675.get("/sell/index", !0),
        get20211212DrawGoods: _0x397675.get("/goods/selection", !0),
        get20211212DrawPrize: _0x397675.get("/prize/drawList", !0),
        get20211212DrawPrizeResult: _0x397675.post("/sell/draw", !0),
        get20211212DrawPrizeRecord: _0x397675.get("/sell/win/prize/list", !0),
        get20211212HighCommission: _0x397675.post("/high/commission/sign/up", !0),
        getMpWechatStatus: _0x397675.post("/wechat/mp/check", !0),
        cancleMpWechatSubscribe: _0x397675.post("/wechat/mp/unsubscribe", !0),
        convertTakeawayExternal: _0x397675.post("/util/external/takeaway/convert"),
        getLaunchActivity: _0x397675.post("/activity/launch/get"),
        getWphBrandsIndex: _0x397675.get("/vip/brand/index"),
        getWphBrandsGoods: _0x397675.get("/vip/brand/goods"),
        getWphBrandInfo: _0x397675.get("/vip/brand/detail"),
        getCharityIndexApi: _0x397675.get("/alipay/charity/index"),
        alipayCharitysUploadApi: _0x397675.post("/alipay/charity/upload", !0),
        get22618PrizeList: _0x397675.get("/conquer/win/prize/list", !0),
        get22618ConquerIndex: _0x397675.get("/conquer/index", !0),
        get22618DrawList: _0x397675.get("/conquer/prize/list", !0),
        get22618RedDouble: _0x397675.get("/conquer/red/double", !0),
        get22618DrawNews: _0x397675.get("/conquer/good/news"),
        get22618ConquerDraw: _0x397675.post("/conquer/draw", !0),
        get22618SingUp: _0x397675.post("/activity/sign/up", !0),
        getUserSuperEnvelopeSignUp: _0x397675.post("/activity/user/super/envelope/signUp", !0),
        getUserSuperEnvelopeIndex: _0x397675.get("/activity/user/super/envelope/index", !0),
        getPinduoduoUrl: _0x397675.get("/util/convert/url/v3", !0),
        getpddPromUrl: _0x397675.post("/util/convert/pddPromUrl", !0),
        getActiveVipApi: _0x397675.post("/activity/vipActive/activeVip", !0),
        getVipStatusApi: _0x397675.post("/activity/vipActive/getVipStatus"),
        getSuperCollectListApi: _0x397675.get("/activity/h5/super/collect/index"),
        getJdSaleRewardIndex: _0x397675.get("/activity/jd/sale/reward/index", !0),
        getJdAuthData: _0x397675.get("/activity/jd/auth", !0)
      },
      _0x3e2b65 = {
        getArticleDetail: _0x397675.get("/commercial/getArticle"),
        getArticleComments: _0x397675.get("/commercial/findComments"),
        addArticleLike: _0x397675.post("/commercial/addLike"),
        addArticleComment: _0x397675.post("/commercial/addComment")
      },
      _0xdf7d9b = {
        getCashInfo: _0x397675.post("/redEnvelopesAccount/baseInfo", !0),
        getCashChangeList: _0x397675.post("/redEnvelopesAccount/getChangeList", !0),
        getWithdrawCardList: _0x397675.post("/withdrawCard/list", !0),
        getMyWithdrawCardList: _0x397675.post("/withdrawCard/me", !0),
        receiveWithdrawCard: _0x397675.post("/withdrawCard/receive", !0),
        useWithdrawCard: _0x397675.post("/withdrawCard/consume", !0),
        getWithdrawCardUsers: _0x397675.get("/withdrawCard/nameList")
      },
      _0x2d31b0 = {
        fruiterList: _0x397675.get("/orchard/fruiter/list", !0),
        userFruiterPlant: _0x397675.post("/orchard/user/fruiter/plant", !0),
        friendFriendList: _0x397675.post("/orchard/friend/friendList", !0),
        userInteractionRecordList: _0x397675.post("/orchard/user/interactionRecord/list", !0),
        userQualificationList: _0x397675.get("/orchard/user/qualification/list", !0),
        userFruiterDetail: _0x397675.get("/orchard/user/fruiter/detail", !0),
        userWaterTotal: _0x397675.get("/orchard/user/water/totalNew", !0),
        userFruiterWater: _0x397675.post("/orchard/user/fruiter/water", !0),
        friendVisitFriendOrchard: _0x397675.post("/orchard/friend/visitFriendOrchard", !0),
        friendStealWater: _0x397675.post("/orchard/friend/stealWater", !0),
        userFruiterAcquireWater: _0x397675.post("/orchard/user/fruiter/acquireWater", !0),
        taskList: _0x397675.get("/orchard/task/list", !0),
        taskFinish: _0x397675.post("/orchard/task/finish", !0),
        userLoginWaterAcquire: _0x397675.post("/orchard/user/login/water/acquire", !0),
        userInviteRecord: _0x397675.post("/orchard/user/inviteRecord/insert"),
        bannerList: _0x397675.get("/orchard/user/banner/list"),
        loginAwardReceive: _0x397675.post("/orchard/loginAward/receive", !0),
        loginAwardDetail: _0x397675.get("/orchard/loginAward/user/detail", !0),
        turntableDraw: _0x397675.post("/orchard/turntable/draw", !0),
        turntablePrizeList: _0x397675.get("/orchard/turntable/prize/list", !0),
        turntableDrawCount: _0x397675.get("/orchard/turntable/draw/count", !0),
        getUserOrchardPopupCheck: _0x397675.get("/orchard/user/popupCheck"),
        turntableAddCount: _0x397675.post("/winners/add/count", !0),
        taskPushFinish: _0x397675.post("/orchard/task/push/finish", !0)
      },
      _0x2f0288 = {
        wxrobotInfo: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/robotInfo"), !0),
        wxRobotLogin: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/robot/login"), !0),
        wxrobotGroupList: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/groupList"), !0),
        wxrobotAccount: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/account"), !0),
        wxrobotAccountDetail: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/accountDetail"), !0),
        wxrobotGroupCheck: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/groupCheck"), !0),
        wxrobotLogout: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/logout"), !0),
        wxrobotUpdateSendType: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/updateSendType"), !0),
        changeRobotRenew: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/autoPay"), !0),
        checkGroupDetail: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/checkGroupDetail"), !0),
        checkFriendMoment: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/checkFriendMoment"), !0),
        getSourceGroup: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/getSourceGroup"), !0),
        updateSendType: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/updateSendType"), !0),
        deleteGroup: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/deleteGroup"), !0),
        deleteRobot: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/deleteRobot"), !0),
        wxrobotRepeatLogin: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/repeatLogin"), !0),
        payPageData: _0x43b080.get("".concat(_0x545be5.apiWxRobot, "/pay/page/index"), !0),
        payPageRobotList: _0x43b080.get("".concat(_0x545be5.apiWxRobot, "/pay/page/robot/list"), !0),
        payPageAddRobot: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/pay/page/robot/add"), !0),
        payPageRemoveRobot: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/pay/page/robot/remove"), !0),
        robotRecharge: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/pay/page/robot/recharge"), !0),
        robotBindFans: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/bindFans"), !0),
        robtoRefreshGroupApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/refreshGroup"), !0),
        robotSaveSelfGroupApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/saveSelfGroup"), !0),
        robotGroupUserApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/group/detail/list"), !0),
        robotSaveUserApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/group/source/host/modify"), !0),
        robotSelfCustomInfoApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/selfRobotInfo"), !0),
        robotOpenStartApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/openStart"), !0),
        robotDelSelfGroupApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/deleteSelfGroup"), !0),
        robotTargetGroupApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/getSelfTargetGroup"), !0),
        robotSourceGroupApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatGroup/getSelfSourceGroup"), !0),
        robotOfflineApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wxrobot/offline"), !0),
        submitVerifyCodeApi: _0x43b080.post("".concat(_0x545be5.apiWxRobot, "/wechatRobot/submitVerifyCode"), !0)
      },
      _0x5f277e = {
        getNewsList: _0x45f7af.post("/website/news/getList"),
        getNewsDetail: _0x45f7af.get("/website/news/detail")
      },
      _0x2b9ed7 = {
        getGrowthList: _0x397675.post("/users/growth/list", !0),
        getGrowthDetail: _0x397675.get("/users/growth/detail", !0)
      },
      _0x3bdabe = {
        getGrowthList: _0x551b18.post("/users/growth/list", !0),
        getGrowthDetail: _0x551b18.get("/users/growth/detail", !0),
        getVipFansList: _0x551b18.post("/vipCenter/task/detail/vipPlus", !0),
        getVipChoicenessList: _0x551b18.get("/vipCenter/v2/area", !1),
        getVipBroadcast: _0x551b18.post("/vipCenter/vipBroadcast", !1),
        getVipCardActInfo: _0x551b18.get("/vipBenefits/activity/info", !0),
        jionVipCardAct: _0x551b18.get("/vipBenefits/activity/join", !0),
        useVipCard: _0x551b18.post("/vipBenefits/consume/card", !0),
        getVipCard: _0x551b18.post("/vipBenefits/receive", !0)
      },
      _0x2b636b = {
        freeActivityItems: _0x551b18.get("/free/activity/items/v2"),
        freeActivityGetClickUrl: _0x551b18.get("/free/activity/getClickUrl", !0),
        freeActivityPastSelect: _0x551b18.get("/free/activity/pastSelect"),
        freeActivityOrders: _0x551b18.get("/free/activity/orders"),
        freeActivityOrdersV2: _0x551b18.get("/free/activity/orders/v2"),
        freeActivityOrdersStatistics: _0x551b18.get("/free/activity/order/statistics"),
        freeActivityVerify: _0x551b18.post("/free/activity/verify"),
        freeActivityGetAccount: _0x551b18.get("/free/activity/getAccount"),
        getFreeItems: _0x551b18.get("/rebate/items"),
        getFreeItemUrl: _0x551b18.post("/rebate/items/clickUrl", !0),
        getFreeOrdersInfo: _0x551b18.get("rebate/profit", !0),
        getFreeItemOrders: _0x551b18.get("/rebate/orders", !0),
        freeItemOrderVerify: _0x551b18.post("/rebate/orders/verify"),
        getSnFreeItems: _0x551b18.get("/free/activity/sn/items"),
        getSnFreeItemUrl: _0x551b18.get("/free/activity/sn/getClickUrl", !0),
        getSnFreeItemOrders: _0x551b18.get("/free/activity/sn/orders", !0)
      },
      _0x42e890 = {
        getLiveConfig: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/live/config")),
        getLiveList: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/live/getLiveList")),
        getLiveListNew: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/live/getLiveListNew")),
        getAnthorInfo: _0x397675.post("".concat(_0x545be5.apiNjiaLive, "/anchor/getIdentity")),
        checkEnableLive: _0x397675.post("".concat(_0x545be5.apiNjiaLive, "/anchor/checkEnableLive")),
        getRecommendLiveList: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/live/getRecommendLiveList")),
        getCatetory: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/live/getCatetory")),
        getLiveBanner: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/banner/list")),
        getVipRankList: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/vipshop/rankList")),
        applyVipAnchorPK: _0x397675.post("".concat(_0x545be5.apiNjiaLive, "/vipshop/add"), !0),
        getRewardData: _0x397675.post("".concat(_0x545be5.apiNjiaLive, "/sellGoodsReward/data"), !0),
        getRewardDetail: _0x397675.post("".concat(_0x545be5.apiNjiaLive, "/sellGoodsReward/data/detail"), !0),
        getRewardCategory: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/sellGoodsReward/goods/category")),
        getRewardGood: _0x397675.post("".concat(_0x545be5.apiNjiaLive, "/sellGoodsReward/goods"), !0),
        getLuckyBagTask: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/lucky/bag/task"), !0),
        getLuckyBagShareInfo: _0x397675.get("".concat(_0x545be5.apiNjiaLive, "/lucky/bag/shareInfo"), !0),
        receiveLuckyBagTask: _0x397675.post("".concat(_0x545be5.apiNjiaLive, "/lucky/bag/task/receive"), !0),
        receiveLuckyBagReward: _0x397675.post("".concat(_0x545be5.apiNjiaLive, "/lucky/bag/reward/receive2"), !0)
      },
      _0x5442f0 = {
        egElephantInfo: _0x397675.get("/elephant/info", !0),
        egMammonList: _0x397675.get("/elephant/mammon/current/list", !0),
        egMammonInvite: _0x397675.post("/elephant/mammon/invite", !0),
        egWelfareList: _0x397675.get("/elephant/welfare/list", !0),
        egWignDetail: _0x397675.get("/elephant/sign/detail", !0),
        egExchangeRewardAmount: _0x397675.post("/elephant/item/exchangeRewardAmount", !0),
        egExchangeUserList: _0x397675.get("/elephant/user/exchangeUserList"),
        egItemListV2: _0x397675.get("/elephant/item/listV2", !0),
        egItemList: _0x397675.get("/elephant/item/list", !0),
        egFinishOnceVisit: _0x397675.get("/elephant/item/finishOnceVisit", !0),
        egOnceVisit: _0x397675.get("/elephant/item/onceVisit", !0),
        egTaskList: _0x397675.post("/game/task/list", !0),
        egCoinReceive: _0x397675.post("/elephant/coin/receive", !0),
        egSign: _0x397675.post("/elephant/sign", !0),
        egWelfareReceive: _0x397675.post("/elephant/welfare/receive", !0),
        egTaskFinish: _0x397675.post("/game/task/finish", !0),
        taskSpecialFinish: _0x397675.post("/game/task/special/finish", !0),
        egMammonPopup: _0x397675.post("/elephant/mammon/popup", !0),
        egMammonHelp: _0x397675.post("/elephant/mammon/help", !0),
        egOrderList: _0x397675.post("/elephant/order/list", !0),
        egBannerList: _0x397675.get("/elephant/banner/list", !0),
        egLimitedTimeShow: _0x397675.get("elephant/activity/limitedTime/show", !0),
        egLimitedTimeComplete: _0x397675.post("/elephant/activity/limitedTime/complete", !0),
        egMedalShare: _0x397675.post("/elephant/medal/share"),
        egLandingPageShare: _0x397675.post("elephant/mammon/landingPage/share"),
        egMedalList: _0x397675.get("/elephant/medal/list"),
        egMedalHold: _0x397675.post("/elephant/medal/hold"),
        egMedalInfo: _0x397675.post("/elephant/medal/info"),
        egMedalBeckon: _0x397675.post("/elephant/medal/beckon"),
        egLuckyPoolDraw: _0x397675.get("/elephant/activity/lucky/pool/draw"),
        egTljExchangeList: _0x397675.post("/elephant/item/tljItem/list"),
        egTljExchangeDetail: _0x397675.get("/elephant/item/tljItem/detail"),
        egExchangeUrl: _0x397675.post("/elephant/item/tljItem/clickUrl")
      },
      _0x563a7c = {
        meetingLists: _0x551b18.get("/meeting/lists", !0),
        meetingDetail: _0x551b18.get("/meeting/detail", !0),
        meetingCreateMetting: _0x551b18.post("/meeting/createMeeting", !0),
        meetingMeetingUsers: _0x551b18.get("/meeting/meetingUsers", !0),
        meetingSignMeeting: _0x551b18.post("/meeting/signMeeting", !0),
        meetingShare: _0x551b18.get("/meeting/meetingShare"),
        meetingCancel: _0x551b18.post("/meeting/cancelMeeting", !0)
      },
      _0x3d8470 = {
        vipRewardTask: _0x45f7af.get("/activity/vip/reward/task"),
        vipInvitationDetailList: _0x45f7af.get("/activity/vip/invitation/detailList")
      },
      _0x19bd4e = {
        phoneBillUserInfo: _0x551b18.get("/phone/bill/loading", !0),
        phoneBillIndex: _0x551b18.get("/phone/bill/index", !0),
        phoneBillRecharge: _0x551b18.post("/phone/bill/recharge", !0),
        phoneBillOrderList: _0x551b18.post("/phone/bill/order/list", !0),
        phoneBillModifyMobile: _0x551b18.post("/phone/bill/modify/mobile", !0),
        phoneBillShare: _0x551b18.post("/phone/bill/landingPage/share", !1),
        phoneBillLuckyDraw: _0x551b18.post("/phone/bill/luckyDraw", !0),
        phoneBillFansList: _0x551b18.post("/phone/bill/fans/list", !0)
      },
      _0x2565b6 = {
        phoneChargesHome: _0x397675.get("/phoneBill/recharge/index", !0),
        getPhoneChargeCounponUrl: _0x397675.get("/phoneBill/recharge/grabCoupons", !0)
      },
      _0x39064c = {
        benefitIvitationLoading: _0x551b18.get("/benefit/invitation/loading", !0),
        benefiIivitationIndex: _0x551b18.get("/benefit/invitation/index", !0),
        benefiIivitationMobilemModify: _0x551b18.post("/benefit/invitation/modify/mobile", !0),
        benefitIvitationRecharge: _0x551b18.post("/benefit/invitation/recharge", !0),
        benefitIvitationOrderList: _0x551b18.post("/benefit/invitation/receive/record", !0),
        benefitIvitationLandingPage: _0x551b18.post("/benefit/invitation/landingPage/share"),
        benefitIvitationFansList: _0x551b18.post("/benefit/invitation/fans/list", !0),
        benefitIvitationNoviceShare: _0x551b18.post("/benefit/invitation/novice/share", !0)
      },
      _0x5b9df6 = {
        getNoviceTutorialTags: _0x397675.get("/tutorial/tag/list", !1),
        getNoviceTutorial: _0x397675.get("/tutorial/content/list", !1),
        getNoviceTutorialDetail: _0x397675.get("/tutorial/content/detail", !1)
      },
      _0x1a2694 = {
        getInformationList: _0x45f7af.post(_0x545be5.apiFind + "/content/v2/list"),
        getThemeTopicList: _0x45f7af.post(_0x545be5.apiFind + "/activity/topic/imageText/contents"),
        getTopicList: _0x45f7af.post(_0x545be5.apiFind + "/activity/topic/content/list")
      },
      _0xdc759 = {
        mtLocalDiscount: _0x397675.post("/localDiscount/mt/deal", !0),
        mtLocalDiscount2: _0x397675.post("/localDiscount/mt/deal")
      },
      _0x5c81ab = {
        getFansInfo: _0x397675.post("/fans/rank/fanLists", !0),
        getFansUserDetail: _0x397675.get("/users/team/detail", !0),
        getHotInfo: _0x397675.post("/fans/rank/itemLists", !0),
        getTROrders: _0x397675.post("/fans/rank/fansOrder", !0)
      },
      _0x501c93 = {
        memberCardIndex: _0x551b18.get("/member/card/index", !0),
        memberCardItemCategories: _0x551b18.get("/member/card/item/category"),
        memberCardItemLayouts: _0x551b18.post("/member/card/item/layouts"),
        memberCardItemDetail: _0x551b18.get("/member/card/item/detail", !0),
        memberCardItemExchange: _0x551b18.get("/member/card/item/exchange", !0),
        memberCardCharge: _0x551b18.post("/member/card/charge/prepaid", !0),
        memberCardChargeLog: _0x551b18.get("/member/card/charge/log", !0),
        memberCardEnjoyLog: _0x551b18.post("/member/card/use/log", !0),
        memberCardSaveMoneyLog: _0x551b18.post("/member/card/save/money/log", !0),
        memberCardPhoneCoupon: _0x551b18.get("/member/card/receive/benefit", !0),
        memberCardAccount: _0x551b18.get("/member/card/account", !0),
        memberCardPhoneLog: _0x551b18.get("/member/card/third/phone/charge/log", !0)
      },
      _0x3f4412 = {
        getRedeem: _0x397675.post("/vipCenter/getRedeem"),
        fetchNewRedeem: _0x397675.post("/vipCenter/fetchNewRedeem")
      },
      _0x231320 = {
        channelIndex: _0x397675.get("/channel/index")
      },
      _0x1da174 = {
        pddPriceIndex: _0x551b18.get("/pdd/activity/subsidy/index", !0),
        pddPriceGoods: _0x551b18.get("/pdd/activity/subsidy/goodsList"),
        pddPriceOrder: _0x551b18.get("/pdd/activity/subsidy/orderList", !0)
      },
      _0x34c520 = {
        vphPriceIndex: _0x551b18.get("/subsidy/activity/index", !0),
        vphPriceGoods: _0x551b18.get("/subsidy/activity/goodsList")
      },
      _0x5a9179 = {
        getWxGroup: _0x397675.post("/wechat/group/list"),
        getWxGroupDetail: _0x397675.get("/wechat/group/detail")
      },
      _0x4c2059 = {
        getDooleenInfo: _0x185024.post("/activity/duoling/getRewardInfo"),
        getDooleenSoldList: _0x185024.post("/activity/duoling/getRewardList "),
        getDooleenGoods: _0x185024.post("/activity/duoling/getGoodsInfo"),
        getActiveList: _0x185024.get("/activity/list"),
        getActiveRewardInfo: _0x185024.post("/activity/mhjl/getRewardInfo"),
        getActiveOrderList: _0x185024.post("/activity/mhjl/getOrderList"),
        getActivityRewardInfo: _0x185024.post("/activity/getRewardInfo"),
        getInviteStatisticsList: _0x185024.post("/activity/invite/getInviteStatisticsList"),
        getInviteSixMonthGoods: _0x185024.post("/activity/getGoodsInfo")
      },
      _0x419600 = {
        userAgreement: _0x397675.post("/privacy/policy/list")
      },
      _0x4a4732 = {
        getShareLink: _0x488bf5.post("/wx/ma/shareLink", !1),
        getWxUserInfoByCode: _0x4e51be.post("/thirdAuth/user/info", !1),
        confirmWxAuth: _0x4e51be.post("/thirdAuth/user/confirm", !1)
      },
      _0x16c168 = {
        getMeituanShopList: _0x397675.get("/meituan/shop/list"),
        getMeituanShopLink: _0x397675.get("/meituan/shop/link")
      },
      _0x4b8614 = {
        getCutPriceList: _0x397675.get("/cutPrice/list"),
        getCutPriceConvert: _0x397675.get("/cutPrice/convert")
      },
      _0x1170d5 = {
        getLiveListApi: _0x397675.get("/douyin/hotLiveIndex"),
        getLivingList: _0x397675.get("/douyin/liveList"),
        getGoodsTab: _0x397675.get("/douyin/tags"),
        getGoodsListApi: _0x397675.get("/douyin/goodShop"),
        getLiveDklApi: _0x397675.get("/douyin/getLiveDkl"),
        getLiveGoodsApi: _0x397675.get("/douyin/live/item"),
        getBannerApi: _0x397675.get("/douyin/banner"),
        getGoodsDklApi: _0x397675.get("/douyin/getItemDkl"),
        getLiveTabApi: _0x397675.get("/douyin/live/tags"),
        getTalentListApi: _0x397675.get("/douyin/kol/recommend/list"),
        getTalentRecommendApi: _0x397675.get("/douyin/kol/recommend/goods"),
        getGoodsTabV2: _0x397675.get("/douyin/tags/V3"),
        getGoodsListV2Api: _0x397675.get("/douyin/rank/V2"),
        getTalentBannerApi: _0x397675.get("/douyin/kol/banner"),
        dyZeroOrderLimitApi: _0x397675.get("/douyinZero/orderLimit", !0),
        dyZeroLinkApi: _0x397675.post("/douyinZero/getLinkInfo", !0),
        dyZeroOrderListApi: _0x397675.post("/douyinZero/getZeroOrderList", !0),
        dyZeroOrderStatisticsApi: _0x397675.post("/douyinZero/order/statistics", !0),
        dyZeroOrderItemlistApi: _0x397675.get("/douyinZero/itemList", !1),
        dyWxZeroOrderListApi: _0x397675.post("/douyinZero/wechat/getZeroOrderList", !1),
        dyWxZeroAccountApi: _0x397675.post("/dyWxZero/account/index", !1),
        dyWxZeroTransferApi: _0x397675.post("/dyWxZero/account/transfer", !1),
        dySecillListApi: _0x397675.get("/douyin/secill/ItemList"),
        dySecillLinkApi: _0x397675.post("/douyin/secill/convert", !0)
      },
      _0xb1272a = {
        getItemDetail: _0x38d452.post("/shelves/getItemDetail"),
        thirdAuthConfig: _0x48060d.get("/third/auth/config"),
        thirdAuthCode: _0x48060d.post("/third/auth/code")
      },
      _0x3d8795 = Object(_0xb2f791.parseUrl)(location.href).query,
      _0xdf135b = void 0 === _0x3d8795 ? {} : _0x3d8795;
    _0x5759b6.axios.defaults.headers.platform = "miniapp";
    _0x5759b6.axios.defaults.headers.merchantid = _0xdf135b.merchantId || "";
    var _0x258621 = {
      curHost: _0x545be5.curHost
    };
    var _0x45486d = {
        getAuthUrlApi: _0x5759b6.post("/wx/open/getAuthUrl", !1),
        postAuthEndApi: _0x5759b6.post("/wx/open/auth", !1),
        getReleaseAuditedApi: _0x5759b6.post("/maAgent/code/releaseAudited", !1),
        commitWxappApi: _0x5759b6.post("/maAgent/code/codeCommit", !1),
        getTestQrcodeApi: _0x5759b6.post("/maAgent/code/getTestQrcode", !1),
        getCategoryListApi: _0x5759b6.post("/maAgent/category/getCategoryList", !1),
        getTesterListApi: _0x5759b6.post("/maAgent/tester/getTesterList", !1),
        bindTesterApi: _0x5759b6.post("/maAgent/tester/bindTester", !1),
        submitAuditApi: _0x5759b6.post("/maAgent/code/submitAudit", !1),
        undoCodeAuditApi: _0x5759b6.post("/maAgent/code/undoCodeAudit", !1),
        revertCodeReleaseApi: _0x5759b6.post("/maAgent/code/revertCodeRelease", !1),
        setSupportVersionInfoApi: _0x5759b6.post("/maAgent/code/setSupportVersionInfo", !1),
        modifyDomainApi: _0x5759b6.post("/maAgent/domain/modifyDomain", !1),
        setWebViewDomainApi: _0x5759b6.post("/maAgent/domain/setWebViewDomain", !1),
        unbindTesterApi: _0x5759b6.post("/maAgent/tester/unbindTester", !1),
        getPrivacyInterfaceApi: _0x5759b6.post("/maAgent/security/getPrivacyInterface", !1),
        applyPrivacyInterfaceApi: _0x5759b6.post("/maAgent/security/applyPrivacyInterface", !1),
        setPrivacySettingApi: _0x5759b6.post("/maAgent/security/setPrivacySetting", !1),
        getCodePrivacyInfoApi: _0x5759b6.post("/maAgent/security/getCodePrivacyInfo", !1),
        getAuditStatusApi: _0x5759b6.post("/maAgent/code/getAuditStatus", !1),
        getLatestAuditStatusApi: _0x5759b6.post("/maAgent/code/getLatestAuditStatus", !1),
        queryQuotaApi: _0x5759b6.post("/maAgent/code/queryQuota", !1),
        getVersionInfoApi: _0x5759b6.post("/maAgent/code/getVersionInfo", !1),
        getPrivacySettingApi: _0x5759b6.post("/maAgent/security/getPrivacySetting", !1),
        applyPluginApi: _0x5759b6.post("/maAgent/plugin/applyPlugin", !1),
        unbindPluginApi: _0x5759b6.post("/maAgent/plugin/unbindPlugin", !1),
        getPluginListApi: _0x5759b6.post("/maAgent/plugin/getPluginList", !1),
        saasCollectMerchantInfoApi: _0x5759b6.post("/merchant/info/collect", !1),
        saasUploadApi: _0x5759b6.post("/util/upload", !1),
        tddRobotInfoApi: _0x5759b6.post("/robot/robotInfo", !0),
        tddRobotPayPageGiftApi: _0x5759b6.get("/robot/pay/page/gift/index", !0),
        tddRobotPayPageRobotListApi: _0x5759b6.get("/robot/pay/page/robot/list", !0),
        tddRobotRechargeApi: _0x5759b6.post("/robot/pay/page/recharge", !0),
        tddRobotSelfCustomInfoApi: _0x5759b6.post("/robot/selfRobotInfo", !0),
        tddRobotTargetGroupApi: _0x5759b6.post("/robot/getSelfTargetGroup", !0),
        tddRobotSourceGroupApi: _0x5759b6.post("/robot/getSelfSourceGroup", !0),
        tddRobotSaveSelfGroupApi: _0x5759b6.post("/robot/saveSelfGroup", !0),
        tddRobotRefreshGroupApi: _0x5759b6.post("/robot/refreshGroup", !0),
        tddRobotRefreshGroupDetailApi: _0x5759b6.post("/robot/refreshGroupDetail", !0),
        tddRobotDeleteGroupApi: _0x5759b6.post("/robot/deleteTargetGroup", !0),
        tddRobotGroupUserApi: _0x5759b6.post("/robot/detail/list", !0),
        tddRobotSaveUserApi: _0x5759b6.post("/robot/source/host/modify", !0),
        tddRobotOpenStartApi: _0x5759b6.post("/robot/openStart", !0),
        tddRobotLoginApi: _0x5759b6.post("/robot/login", !0),
        tddRobotLogoutApi: _0x5759b6.post("/robot/logout", !0),
        tddRobotOfflineApi: _0x5759b6.post("/robot/offline", !0)
      },
      _0x4b10b1 = {
        getNoteWxUserInfoByCode: _0x3ed91f.post("/thirdAuth/user/info", !1),
        confirmNoteWxAuth: _0x3ed91f.post("/thirdAuth/user/confirm", !1),
        getWdAuthConfig: _0x3ed91f.get("/third/auth/config", !1),
        confirmWdAuth: _0x3ed91f.post("/third/auth/code", !1),
        uploadFile: _0x3ed91f.post("/util/upload", !1)
      },
      _0x32df84 = Object(_0x137fc1.a)(_0x258621, _0x3afc63, _0x56d87d, _0x37f87c, _0x107be1, _0x56507f, _0x494fc9, _0x5ea000, _0x3f2cd6, _0x4efa92, _0x3e8151, _0x3e2b65, _0xdf7d9b, _0x2d31b0, _0x2f0288, _0x5f277e, _0x2b9ed7, _0x3bdabe, _0x42e890, _0x5442f0, _0x2b636b, _0x563a7c, _0x3d8470, _0x19bd4e, _0x39064c, _0x5b9df6, _0x2565b6, _0x39064c, _0x1a2694, _0x5c81ab, _0x501c93, _0xdc759, _0x3f4412, _0x231320, _0x1da174, _0x34c520, _0x5a9179, _0x4c2059, _0x1170d5, _0x419600, _0x4a4732, _0x16c168, _0x4b8614, _0xb1272a, _0x45486d, _0x4b10b1);
    _0xd0dad2.a = _0x32df84;
  },
  212: function (_0x283604, _0x224f41, _0x1833a2) {
    'use strict';

    var _0x85c1e8 = _0x1833a2(45),
      _0x184ad9 = (_0x1833a2(658), _0x1833a2(21)),
      _0x5f012e = _0x1833a2(26),
      _0x4b48de = _0x1833a2.n(_0x5f012e),
      _0x386235 = _0x1833a2(106),
      _0x86f2dd = _0x1833a2.n(_0x386235),
      _0x52c247 = _0x1833a2(16),
      _0x28da40 = window;
    function _0x4b0bd1(_0x51c02a) {
      this.name = "FxError";
      this.type = _0x51c02a;
    }
    _0x4b0bd1.prototype = new Error();
    var _0x5abfd0 = {
      imgFilter: function (_0x424f04) {
        var _0x21f1db = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return "string" != typeof _0x424f04 ? _0x424f04 : (_0x424f04 = (_0x424f04 = _0x424f04.replace(/_m2\.ss2.*/gi, "")).match(/(.*?\.(jpe?g|png)(_|@))?/gi)[0] ? _0x424f04.match(/(.*?\.(jpe?g|png))?/gi)[0] : _0x424f04, _0x424f04 = /\.(t(b|aobao)|ali)cdn\./gi.test(_0x424f04) ? "".concat(_0x424f04, "_300x300q80").concat(this.isSupportWebp && !_0x21f1db ? "_.webp" : "") : _0x424f04, _0x424f04 = /\.lanlanlife\./gi.test(_0x424f04) ? "".concat(_0x424f04, "@!2-w300-80-jpg") : _0x424f04, _0x424f04 = /\.jingtuitui\./gi.test(_0x424f04) ? "".concat(_0x424f04, "?imageView2/2/w/300/h/300/q/80/imageMogr2/strip/format/jpg") : _0x424f04, _0x424f04 = /\.360buyimg\./gi.test(_0x424f04) ? _0x424f04.replace("/jfs/", "/s300x300_jfs/") : _0x424f04, _0x424f04 = /\.yangkeduo\./gi.test(_0x424f04) ? "".concat(_0x424f04, "@300w_1l_80Q.src") : _0x424f04);
      },
      imgFormat: function (_0x56e356, _0x343b6a, _0x3af094, _0x2df352) {
        if (!_0x56e356) {
          return "";
        }
        var _0x4a2a65 = Math.floor(1.3 * (_0x343b6a || 0) * 2),
          _0x39e13c = Math.floor(1.3 * (_0x3af094 || 0) * 2);
        return _0x56e356.indexOf("fenxianglife.com") > -1 ? _0x2df352 ? "".concat(_0x56e356, "?x-oss-process=image/auto-orient,1/resize,m_fill,w_").concat(_0x4a2a65, ",h_").concat(_0x39e13c, "/quality,q_90") : _0x56e356 + "?x-oss-process=image/auto-orient,1/resize,m_lfit,w_" + _0x4a2a65 : _0x56e356.indexOf("yangkeduo.com") > -1 ? (_0x56e356 = _0x56e356.replace(/(@[0-9]+w_[0-9]l_[0-9]+Q.src)$/g, "")) + "@" + _0x4a2a65 + "w_1l_99Q.src" : _0x56e356.indexOf("vpimg") > -1 ? (_0x56e356 = _0x56e356.replace(/(_[0-9]+x[0-9]+_[0-9]+)/g, "")).replace(/(.jpe?g|png)$/g, "_" + _0x4a2a65 + "x" + _0x39e13c + "_99$1") : _0x56e356.indexOf("360buyimg") > -1 ? _0x56e356.replace("/jfs/", "/s" + _0x4a2a65 + "x" + _0x39e13c + "_jfs/") : _0x56e356.indexOf("geilicdn") > -1 ? _0x56e356 + "?w=" + _0x4a2a65 + "&h=" + _0x39e13c + "&cp=1" : _0x56e356.indexOf("alicdn") > -1 ? "".concat(_0x56e356, "_").concat(_0x4a2a65, "x").concat(_0x39e13c, "q90.jpg") : _0x56e356;
      },
      setTitle: function (_0x54aa94) {
        "string" == typeof _0x54aa94 && (window.document.title = _0x54aa94);
      },
      pxToRem: function (_0x16534e) {
        return "".concat(_0x16534e / 16, "rem");
      },
      reportError: function (_0xbf6b4d) {
        throw new _0x4b0bd1(_0xbf6b4d);
      },
      debounce: function (_0x4af6cb, _0x511118) {
        var _0x5a44aa = null;
        return function () {
          for (var _0x5979f4 = arguments.length, _0x330f37 = new Array(_0x5979f4), _0x2b6444 = 0; _0x2b6444 < _0x5979f4; _0x2b6444++) {
            _0x330f37[_0x2b6444] = arguments[_0x2b6444];
          }
          var _0x275692 = this;
          _0x5a44aa && (clearTimeout(_0x5a44aa), _0x5a44aa = null);
          _0x5a44aa = setTimeout(function () {
            _0x4af6cb.apply(_0x275692, _0x330f37);
          }, _0x511118);
        };
      },
      checkPastTime: function (_0x9d0d7d) {
        var _0x26f03c = new Date().getTime() - 1000 * _0x9d0d7d;
        return _0x26f03c < 60000 ? "".concat(parseInt(_0x26f03c / 1000), "秒") : _0x26f03c >= 60000 && _0x26f03c < 3600000 ? "".concat(parseInt(_0x26f03c / 60000), "分钟") : _0x26f03c >= 3600000 && _0x26f03c < 86400000 ? "".concat(parseInt(_0x26f03c / 3600000), "小时") : _0x26f03c >= 86400000 ? "".concat(parseInt(_0x26f03c / 86400000), "天") : void 0;
      },
      checkPastTime2: function (_0x3bcbde) {
        var _0x2b095b = _0x86f2dd()().endOf("day").valueOf() + 1,
          _0x6dd20d = _0x2b095b - 86400000,
          _0x42cc69 = _0x6dd20d - 86400000,
          _0x50b298 = _0x2b095b + 86400000,
          _0x371405 = _0x6dd20d - 172800000;
        return _0x3bcbde > new Date().getTime() ? _0x3bcbde >= _0x6dd20d && _0x3bcbde < _0x2b095b ? "今天" + _0x86f2dd.a.unix(_0x3bcbde / 1000).format("HH:mm") : _0x3bcbde >= _0x2b095b && _0x3bcbde < _0x50b298 ? "明天" + _0x86f2dd.a.unix(_0x3bcbde / 1000).format("HH:mm") : _0x86f2dd.a.unix(_0x3bcbde / 1000).format("MM-DD HH:mm") : new Date().getTime() - _0x3bcbde < 86400000 && _0x6dd20d < _0x3bcbde ? this.checkPastTime(_0x3bcbde / 1000) + "前" : _0x3bcbde >= _0x42cc69 && _0x3bcbde < _0x6dd20d ? "昨天" + _0x86f2dd.a.unix(_0x3bcbde / 1000).format("HH:mm") : _0x3bcbde >= _0x371405 && _0x3bcbde < _0x42cc69 ? "前天" + _0x86f2dd.a.unix(_0x3bcbde / 1000).format("HH:mm") : _0x86f2dd.a.unix(_0x3bcbde / 1000).format("MM-DD");
      },
      dealPrice: function (_0x542ed8) {
        return 0 === _0x542ed8 ? _0x542ed8 : +(_0x542ed8 / 100).toFixed(2);
      },
      throttle: function (_0x2fc3c7, _0x222ba7) {
        var _0x194afa = 0;
        return function () {
          var _0x228402 = +new Date();
          if (_0x228402 - _0x194afa > _0x222ba7) {
            for (var _0x24067f = arguments.length, _0x51a91f = new Array(_0x24067f), _0x44b7f6 = 0; _0x44b7f6 < _0x24067f; _0x44b7f6++) {
              _0x51a91f[_0x44b7f6] = arguments[_0x44b7f6];
            }
            _0x2fc3c7.apply(this, _0x51a91f);
            _0x194afa = _0x228402;
          }
        };
      },
      sevenService: function () {
        !function (_0x5a9ee1, _0x596109, _0xb8e59a, _0x5af0ca, _0x3248bf) {
          _0x5a9ee1[_0xb8e59a] = _0x5a9ee1[_0xb8e59a] || function () {
            (_0x5a9ee1[_0xb8e59a].a = _0x5a9ee1[_0xb8e59a].a || []).push(arguments);
          };
          (_0x3248bf = _0x596109.createElement("script")).async = !0;
          _0x3248bf.src = "https://qiyukf.com/script/bd4f9e4c1ee4e638bc7d6fc08bc164cd.js";
          _0x596109.body.appendChild(_0x3248bf);
        }(window, document, "ysf");
      },
      countdown: function (_0x3e1bb1, _0x55b08e) {
        var _0x509246 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          _0x19e6da = arguments.length > 3 ? arguments[3] : void 0,
          _0xc0c83c = new Date().getTime(),
          _0x573d65 = -1;
        if ((_0x573d65 = _0x19e6da ? _0x19e6da - _0xc0c83c : _0x55b08e - (_0xc0c83c - _0x3e1bb1)) < 0) {
          return !1;
        }
        var _0x53db40,
          _0x1de00e,
          _0x142b27,
          _0xfcebdf,
          _0x4e6f33 = 0;
        _0x53db40 = parseInt(_0x573d65 / 86400000);
        _0x1de00e = parseInt((_0x573d65 - 86400000 * _0x53db40) / 3600000);
        _0x142b27 = parseInt((_0x573d65 - 86400000 * _0x53db40 - 60 * _0x1de00e * 60 * 1000) / 60000);
        _0xfcebdf = parseInt((_0x573d65 - 86400000 * _0x53db40 - 60 * _0x1de00e * 60 * 1000 - 60000 * _0x142b27) / 1000);
        _0x509246 && (_0x4e6f33 = parseInt((_0x573d65 - 86400000 * _0x53db40 - 60 * _0x1de00e * 60 * 1000 - 60000 * _0x142b27 - 1000 * _0xfcebdf) / 100));
        return {
          dd: this.addZero(_0x53db40),
          hh: this.addZero(_0x1de00e),
          mm: this.addZero(_0x142b27),
          ss: this.addZero(_0xfcebdf),
          ms: _0x4e6f33
        };
      },
      addZero: function (_0x41bc12) {
        return _0x41bc12 < 10 ? "0" + _0x41bc12 : _0x41bc12;
      },
      shouldUpdate: function (_0x32a28a, _0x202a73) {
        return _0x32a28a < _0x202a73;
      },
      formatNum: function (_0x56e8d8) {
        var _0x567901 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          _0x5b924 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          _0x476404 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          _0x5ec3ed = Math.pow(10, _0x567901),
          _0x1723de = Math.pow(10, _0x5b924);
        return _0x56e8d8 >= _0x5ec3ed ? Math.round(_0x56e8d8 / 10000 * _0x1723de) / _0x1723de + "".concat(_0x476404 ? "W" : "万") : String(_0x56e8d8);
      },
      formatStr: function (_0x34439c, _0x4953de) {
        return _0x34439c && _0x34439c.length > _0x4953de ? _0x34439c.substring(0, _0x4953de).concat("...") : _0x34439c;
      },
      filterTime: function (_0x50ccc8) {
        if (!_0x50ccc8) {
          return "";
        }
        var _0x8776b9 = _0x86f2dd()().endOf("day").valueOf() + 1,
          _0x16600f = _0x8776b9 - 86400000,
          _0x4c85e6 = _0x16600f - 86400000,
          _0x53503b = _0x8776b9 + 86400000;
        return _0x50ccc8 >= _0x16600f && _0x50ccc8 < _0x8776b9 ? "今天 " + _0x86f2dd.a.unix(_0x50ccc8 / 1000).format("HH:mm") : _0x50ccc8 >= _0x8776b9 && _0x50ccc8 < _0x53503b ? "明天 " + _0x86f2dd.a.unix(_0x50ccc8 / 1000).format("HH:mm") : _0x50ccc8 >= _0x4c85e6 && _0x50ccc8 < _0x16600f ? "昨天 " + _0x86f2dd.a.unix(_0x50ccc8 / 1000).format("HH:mm") : _0x86f2dd.a.unix(_0x50ccc8 / 1000).format("MM/DD HH:mm");
      },
      drawCanvasElement: function (_0x2be110, _0x4f7697, _0x11e2f9, _0x3df6bf, _0x17cce6) {
        var _0x4f8ecb = this;
        arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        _0x11e2f9.forEach(function (_0x1a3d9c) {
          if ("text" === _0x1a3d9c.type && _0x1a3d9c.content) {
            if (_0x4f7697.beginPath(), _0x4f7697.fillStyle = _0x1a3d9c.color, _0x4f7697.font = "".concat(_0x1a3d9c.size * _0x3df6bf, "px ").concat(_0x1a3d9c.fontStyle), _0x4f7697.textAlign = _0x1a3d9c.align || "left", _0x1a3d9c.wrap && _0x1a3d9c.wrap > 1 && _0x1a3d9c.width) {
              for (var _0x3024f6 = Math.floor(_0x1a3d9c.width / _0x1a3d9c.size), _0x2899ef = Math.ceil(_0x1a3d9c.content.length / _0x3024f6), _0x37c431 = Math.min(_0x2899ef, _0x1a3d9c.wrap), _0x975ebb = 0; _0x975ebb < _0x37c431; _0x975ebb++) {
                var _0x4adbc2 = _0x1a3d9c.content.substring(_0x975ebb * _0x3024f6, (_0x975ebb + 1) * _0x3024f6),
                  _0x191f2a = _0x1a3d9c.top + _0x975ebb * (_0x1a3d9c.size * (_0x1a3d9c.lineHeight || 1.2));
                _0x2899ef > _0x1a3d9c.wrap && _0x975ebb === _0x1a3d9c.wrap - 1 ? (_0x4adbc2 = _0x4adbc2.substring(0, _0x3024f6 - 2) + "...", _0x4f8ecb.fillTextDecoration(_0x4f7697, _0x1a3d9c, _0x3df6bf, _0x4adbc2, _0x191f2a)) : _0x4f8ecb.fillTextDecoration(_0x4f7697, _0x1a3d9c, _0x3df6bf, _0x4adbc2, _0x191f2a);
              }
            } else {
              _0x4f8ecb.fillTextDecoration(_0x4f7697, _0x1a3d9c, _0x3df6bf);
            }
          }
          "line" === _0x1a3d9c.type && (_0x4f7697.beginPath(), _0x4f7697.lineWidth = 1, _0x4f7697.moveTo(_0x1a3d9c.startLeft * _0x3df6bf, _0x1a3d9c.startTop * _0x3df6bf), _0x4f7697.lineTo(_0x1a3d9c.left * _0x3df6bf, _0x1a3d9c.top * _0x3df6bf), _0x4f7697.strokeStyle = _0x1a3d9c.color, _0x4f7697.stroke());
          "rect" === _0x1a3d9c.type && (_0x4f7697.beginPath(), _0x4f7697.lineWidth = _0x1a3d9c.lineWidth * _0x3df6bf, _0x4f7697.strokeStyle = _0x1a3d9c.color, _0x4f7697.rect(_0x1a3d9c.left * _0x3df6bf, _0x1a3d9c.top * _0x3df6bf, _0x1a3d9c.width * _0x3df6bf, _0x1a3d9c.height * _0x3df6bf), _0x4f7697.fillStyle = _0x1a3d9c.fillStyle, _0x4f7697.fill(), _0x4f7697.stroke());
          "circle" === _0x1a3d9c.type && (_0x4f7697.beginPath(), _0x4f7697.lineWidth = _0x1a3d9c.lineWidth * _0x3df6bf, _0x4f7697.strokeStyle = _0x1a3d9c.color, _0x4f7697.arc(_0x1a3d9c.left * _0x3df6bf + _0x1a3d9c.radiusSize * _0x3df6bf, _0x1a3d9c.top * _0x3df6bf + _0x1a3d9c.radiusSize * _0x3df6bf, _0x1a3d9c.radiusSize * _0x3df6bf, _0x1a3d9c.sAngle || 0, _0x1a3d9c.eAngle || 2 * Math.PI, _0x1a3d9c.counterclockwise || !1), _0x1a3d9c.fillStyle && (_0x4f7697.fillStyle = _0x1a3d9c.fillStyle, _0x4f7697.fill()), _0x4f7697.stroke());
          "image" === _0x1a3d9c.type && _0x1a3d9c.url && (_0x1a3d9c.radius ? (_0x4f7697.save(), _0x4f7697.beginPath(), _0x4f7697.arc(_0x1a3d9c.left * _0x3df6bf + _0x1a3d9c.width * _0x3df6bf / 2, _0x1a3d9c.top * _0x3df6bf + _0x1a3d9c.height * _0x3df6bf / 2, _0x1a3d9c.width * _0x3df6bf / 2, 0, 2 * Math.PI), _0x4f7697.clip(), _0x4f7697.drawImage(_0x1a3d9c.url, _0x1a3d9c.left * _0x3df6bf, _0x1a3d9c.top * _0x3df6bf, _0x1a3d9c.width * _0x3df6bf, _0x1a3d9c.height * _0x3df6bf), _0x4f7697.restore()) : (_0x4f7697.beginPath(), _0x4f7697.drawImage(_0x1a3d9c.url, _0x1a3d9c.left * _0x3df6bf, _0x1a3d9c.top * _0x3df6bf, _0x1a3d9c.width * _0x3df6bf, _0x1a3d9c.height * _0x3df6bf)));
        });
      },
      fillTextDecoration: function (_0x519178, _0x5c7adc, _0x48458b, _0x197d5a, _0x337aa2) {
        var _0x5637a8 = _0x337aa2 || _0x5c7adc.top,
          _0x3b1f0d = _0x197d5a || _0x5c7adc.content;
        switch (_0x519178.fillText(_0x3b1f0d, _0x5c7adc.left * _0x48458b, _0x5637a8 * _0x48458b), _0x5c7adc.bold && _0x519178.fillText(_0x3b1f0d, _0x5c7adc.left * _0x48458b - 0.5, _0x5637a8 * _0x48458b), _0x5c7adc.textDecoration) {
          case "line-through":
            _0x519178.lineWidth = 1;
            _0x519178.moveTo((_0x5c7adc.left - _0x5c7adc.size / 3) * _0x48458b, (_0x5637a8 - _0x5c7adc.size / 3) * _0x48458b);
            _0x519178.lineTo((_0x5c7adc.left + _0x5c7adc.size / 3) * _0x48458b + _0x519178.measureText(_0x3b1f0d).width, (_0x5637a8 - _0x5c7adc.size / 3) * _0x48458b);
            _0x519178.strokeStyle = _0x5c7adc.color;
            _0x519178.stroke();
        }
      },
      handleUrlByEnv: function (_0x278769) {
        if (_0x278769.includes("http")) {
          return _0x278769;
        }
        var _0x116ba0 = (location.pathname.split("/")[1].match(/(\d+)$/g) || [])[0];
        if (!_0x116ba0) {
          return location.origin + _0x278769;
        }
        var _0x585e02 = _0x278769.split("/");
        _0x585e02[1] += _0x116ba0;
        return location.origin + _0x585e02.join("/");
      },
      callupWxAuth: function () {
        var _0x18e98c = _0x4b48de.a.parse(window.location.search);
        if (_0x18e98c.code) {
          _0x184ad9.a.getWxToken({
            code: _0x18e98c.code,
            type: 2
          }).then(function (_0x5a3556) {});
        } else {
          var _0x2d8af6 = window.location,
            _0x12d1e3 = _0x2d8af6.pathname,
            _0x19395c = _0x2d8af6.search,
            _0x4ef53e = _0x2d8af6.hash,
            _0x333ab1 = encodeURIComponent("http://m.fenxianglife3.com".concat(_0x12d1e3).concat(_0x19395c).concat(_0x4ef53e));
          location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb128ea6544cf8e50&redirect_uri=".concat(_0x333ab1, "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect");
        }
      },
      downloadUrl: "https://m.fenxianglife7.com/act/persistent/download/index.html",
      downloadAPP: function () {
        var _0x2a5a5c = window.navigator.userAgent,
          _0x1a2d8a = "",
          _0x396dae = {
            ios: "https://itunes.apple.com/cn/app/id1383296825?mt=8",
            android: "https://m.fenxianglife7.com/act/persistent/download/index.html"
          };
        (_0x2a5a5c.match(/iphone/gi) || _0x2a5a5c.match(/ipad/gi)) && (_0x1a2d8a = "ios");
        _0x2a5a5c.match(/android/gi) && (_0x1a2d8a = "android");
        _0x1a2d8a && (window.location.href = _0x396dae[_0x1a2d8a]);
      },
      bindSwiperEvent: function (_0x2d6e44, _0x48b07c) {
        var _0x2a76cf = {
          swipeLeft: function () {},
          swipeRight: function () {},
          swipeDown: function () {},
          swipeUp: function () {},
          drag: function () {}
        };
        var _0x5711e9 = !1,
          _0x56e89a = 0,
          _0x1bc032 = 0,
          _0x758263 = 0,
          _0x1d0134 = 0,
          _0x532dbe = 0,
          _0x459634 = 0,
          _0x14f52e = Object(_0x85c1e8.a)({}, _0x2a76cf, _0x48b07c);
        _0x2d6e44 && (_0x2d6e44.ontouchstart = function (_0x53ea8a) {
          _0x56e89a = _0x53ea8a.touches[0].pageX;
          _0x1bc032 = _0x53ea8a.touches[0].pageY;
          _0x532dbe = _0x56e89a - _0x2d6e44.offsetLeft;
          _0x459634 = _0x1bc032 - _0x2d6e44.offsetTop;
        }, _0x2d6e44.ontouchmove = function (_0x22fd35) {
          _0x5711e9 = !0;
          _0x758263 = _0x22fd35.touches[0].pageX;
          _0x1d0134 = _0x22fd35.touches[0].pageY;
          _0x22fd35.mation = {
            startX: _0x56e89a,
            startY: _0x1bc032,
            moveX: _0x758263,
            moveY: _0x1d0134,
            disX: _0x532dbe,
            disY: _0x459634
          };
          _0x14f52e.drag.call(_0x2d6e44, _0x22fd35);
        }, _0x2d6e44.ontouchend = function (_0x424839) {
          _0x5711e9 && (Math.abs(_0x758263 - _0x56e89a) > Math.abs(_0x1d0134 - _0x1bc032) ? _0x758263 - _0x56e89a > 60 ? _0x14f52e.swipeRight.call(_0x2d6e44, _0x424839) : _0x758263 - _0x56e89a < -60 && _0x14f52e.swipeLeft.call(_0x2d6e44, _0x424839) : _0x1d0134 - _0x1bc032 > 60 ? _0x14f52e.swipeDown.call(_0x2d6e44, _0x424839) : _0x1d0134 - _0x1bc032 < -60 && _0x14f52e.swipeUp.call(_0x2d6e44, _0x424839));
          _0x5711e9 = !1;
        });
      },
      compareVersion: function (_0x5f1ca9, _0x34ed55) {
        _0x5f1ca9 = _0x5f1ca9.split(".");
        _0x34ed55 = _0x34ed55.split(".");
        for (var _0x67ae88 = Math.max(_0x5f1ca9.length, _0x34ed55.length); _0x5f1ca9.length < _0x67ae88;) {
          _0x5f1ca9.push("0");
        }
        for (; _0x34ed55.length < _0x67ae88;) {
          _0x34ed55.push("0");
        }
        for (var _0x4ef004 = 0; _0x4ef004 < _0x67ae88; _0x4ef004++) {
          var _0x52b50b = parseInt(_0x5f1ca9[_0x4ef004]),
            _0x3f8a33 = parseInt(_0x34ed55[_0x4ef004]);
          if (_0x52b50b > _0x3f8a33) {
            return 1;
          }
          if (_0x52b50b < _0x3f8a33) {
            return -1;
          }
        }
        return 0;
      },
      formatName: function (_0x358c16) {
        if (!_0x358c16) {
          return _0x358c16;
        }
        var _0x453b50 = Array.from(_0x358c16),
          _0x39134c = _0x453b50.length;
        return _0x39134c > 2 ? _0x453b50[0] + "**" + _0x453b50[_0x39134c - 1] : _0x453b50[0] + "***";
      },
      getCurrentHost: function () {
        var _0x1eaa1 = window.location.pathname.match(/\/act(\d)*/g)[0].match(/(\d)/);
        return _0x1eaa1 && _0x1eaa1[0] || "";
      },
      isFunction: function (_0x509c07) {
        return _0x509c07 && "[object Function]" === Object.prototype.toString.call(_0x509c07);
      },
      getIosVersion: function () {
        return navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)[1].replace(/_/g, ".");
      },
      getWxVersion: function () {
        return navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i) || [];
      },
      openMiniApp: function (_0x3d4373, _0x33d863, _0xc65aeb) {
        var _0x1472e6,
          _0x234d7a,
          _0x5abf8f,
          _0x12d8f7 = encodeURIComponent(_0x33d863),
          _0x5917d7 = "sdk://wechat/openMiniPro?userName=".concat(_0x3d4373, "&path=").concat(_0x12d8f7);
        if (_0x5917d7 = _0xc65aeb ? "".concat(_0x5917d7, "&env=").concat(_0xc65aeb) : _0x5917d7, _0x52c247.i) {
          null === (_0x1472e6 = _0x28da40.webkit) || void 0 === _0x1472e6 || null === (_0x234d7a = _0x1472e6.messageHandlers) || void 0 === _0x234d7a || null === (_0x5abf8f = _0x234d7a.openMiniApp) || void 0 === _0x5abf8f || _0x5abf8f.postMessage({
            url: _0x5917d7
          });
        } else {
          if (_0x52c247.h) {
            var _0x2c1f64;
            null === (_0x2c1f64 = _0x28da40.nplusapp) || void 0 === _0x2c1f64 || _0x2c1f64.openMiniApp(_0x5917d7);
          } else {
            console.warn("请在客户端中调用");
          }
        }
      },
      getAppHeader: function (_0x504a20) {
        return new Promise(function (_0x5267df, _0x557eb3) {
          _0x28da40.FXJSBridge ? _0x28da40.FXJSBridge.invoke("constructReqHeader", _0x504a20, function (_0x5e4c24) {
            if ("string" == typeof _0x5e4c24) {
              try {
                _0x5e4c24 = JSON.parse(_0x5e4c24.replace(/\\/g, "").replace(/\"{/g, "{").replace(/\}"/g, "}"));
              } catch (_0x502f62) {
                _0x557eb3(_0x502f62);
              }
            }
            _0x5267df(_0x5e4c24);
          }) : (console.error("很抱歉，由于您的手机系统太低暂不支持该功能！"), _0x557eb3("很抱歉，由于您的手机系统太低暂不支持该功能！"));
        });
      },
      isHuaWei: function () {
        var _0x155b3c = window.navigator.userAgent;
        return !!(_0x155b3c.match(/HUAWEI/i) || _0x155b3c.match(/HUAWEI P20/i) || _0x155b3c.match(/HUAWEI Mate 10/i) || _0x155b3c.match(/HUAWEI Mate RS Porsche Design/i));
      }
    };
    _0x224f41.a = _0x5abfd0;
  },
  622: function (_0x3ce7b5, _0x5cfd9d, _0x5f862b) {
    'use strict';

    _0x5f862b(92);
    var _0x56d9a8 = _0x5f862b(30),
      _0x2d40d2 = _0x5f862b.n(_0x56d9a8),
      _0x320004 = (_0x5f862b(62), _0x5f862b(13)),
      _0x465236 = _0x5f862b.n(_0x320004),
      _0x4dfe45 = _0x5f862b(0),
      _0x381fba = _0x5f862b.n(_0x4dfe45),
      _0x1f0831 = _0x5f862b(16),
      _0x515eac = _0x5f862b(26),
      _0xdaee2d = _0x5f862b.n(_0x515eac),
      _0x5eb7cd = (_0x5f862b(664), "https://static.fenxianglife.com/ui/h5-official/components/jdAuth/"),
      _0x413c98 = _0xdaee2d.a.parse(location.search);
    _0x5cfd9d.a = function (_0x4cd0fe) {
      var _0x4b56bb = {
        visible: !0,
        transparent: !0,
        maskClosable: !1
      };
      var _0x68f6e1 = {
        className: "com-JdAuth"
      };
      var _0x28f60c = {
        className: "container"
      };
      var _0x2ba40d = {
        className: "auth-title"
      };
      var _0x2f9b49 = {
        className: "auth-txt"
      };
      var _0x1d05fe = {
        className: "auth-bottom"
      };
      return _0x381fba.a.createElement(_0x2d40d2.a, _0x4b56bb, _0x381fba.a.createElement("div", _0x68f6e1, _0x381fba.a.createElement("div", _0x28f60c, _0x381fba.a.createElement("h5", _0x2ba40d, "申请京东绑定备案"), _0x381fba.a.createElement("p", _0x2f9b49, "应京东官方要求，获取返利前需先进行京东账号绑定备案。自用省钱，分享赚钱！"), _0x381fba.a.createElement("div", _0x1d05fe, _0x381fba.a.createElement("img", {
        className: "btn",
        src: "".concat(_0x5eb7cd, "btn1.png"),
        alt: "",
        onClick: function () {
          var _0x18c200 = {
            url: "https://m.fenxianglife.com/better-m/previewCustomservice/index.html?articleId=506",
            webType: 1
          };
          Object(_0x1f0831.f)("openPage", _0x18c200);
          _0x4cd0fe.closeAuth();
        }
      }), _0x381fba.a.createElement("img", {
        className: "btn",
        src: "".concat(_0x5eb7cd, "btn2.png"),
        alt: "",
        onClick: function () {
          var _0x274c1e = _0x4cd0fe.authInfo || {},
            _0x2949ba = _0x274c1e.appOauthUrl,
            _0x4128f4 = _0x274c1e.h5OauthUrl,
            _0x4eead3 = -1 !== Object(_0x1f0831.c)(_0x413c98.v, "5.1.1") && _0x1f0831.j;
          if (_0x4eead3) {
            if (!_0x2949ba) {
              return _0x465236.a.info("授权链接获取失败～");
            }
            var _0x4ff755 = {
              url: _0x2949ba,
              isClosePageAfterOpeningThirdAPP: _0x4eead3
            };
            Object(_0x1f0831.f)("openPage", _0x4ff755);
          } else {
            if (!_0x4128f4) {
              return _0x465236.a.info("授权链接获取失败～");
            }
            var _0x5edaaa = {
              url: _0x4128f4,
              isClosePageAfterOpeningThirdAPP: _0x4eead3
            };
            Object(_0x1f0831.f)("openPage", _0x5edaaa);
          }
          _0x4cd0fe.closeAuth();
        }
      })), _0x381fba.a.createElement("img", {
        className: "btn-close",
        src: "".concat(_0x5eb7cd, "btn_close.png"),
        alt: "",
        onClick: _0x4cd0fe.closeAuth
      }))));
    };
  },
  623: function (_0x591a78, _0x3e571c, _0x4ef02b) {
    'use strict';

    _0x4ef02b.d(_0x3e571c, "a", function () {
      return _0x4abc38;
    });
    _0x4ef02b(92);
    var _0x3f7ab3 = _0x4ef02b(30),
      _0x4bb378 = _0x4ef02b.n(_0x3f7ab3),
      _0x5ee3a1 = _0x4ef02b(12),
      _0x5526df = _0x4ef02b(0),
      _0x5c6761 = _0x4ef02b.n(_0x5526df),
      _0x494873 = _0x4ef02b(16),
      _0x2b1d61 = (_0x4ef02b(666), "https://static.fenxianglife.com/ui/h5/thirdPartyEntry"),
      _0x5ac246 = {
        P: "拼多多"
      },
      _0x57e8b8 = {
        P: "pdd_icon_jump.png"
      };
    function _0x4abc38(_0x242952) {
      var _0xfd0317 = _0x242952.visible,
        _0x2674f9 = _0x242952.onHide,
        _0x43eb8b = _0x242952.oauthInfo,
        _0x2904a4 = void 0 === _0x43eb8b ? {} : _0x43eb8b,
        _0x12ae22 = Object(_0x5526df.useState)(!1),
        _0x4f4da3 = Object(_0x5ee3a1.a)(_0x12ae22, 2),
        _0x3d4220 = _0x4f4da3[0],
        _0x324660 = _0x4f4da3[1],
        _0x413f08 = {
          transparent: !0,
          visible: _0xfd0317,
          className: "model-pdd-outer",
          maskClosable: !0,
          onClose: _0x2674f9
        };
      var _0xdb0d4b = {
        className: "modal-main-info"
      };
      var _0x431527 = {
        className: "loding-bar"
      };
      return _0x5c6761.a.createElement(_0x4bb378.a, _0x413f08, _0x5c6761.a.createElement("div", {
        className: "".concat(_0x3d4220 ? "modal-main modal-main-loading" : "modal-main")
      }, _0x5c6761.a.createElement("div", _0xdb0d4b, _0x3d4220 ? _0x5c6761.a.createElement(_0x5c6761.a.Fragment, null, _0x5c6761.a.createElement("h1", null, "正在跳转", _0x5ac246[_0x2904a4.oauthType]), _0x5c6761.a.createElement("div", _0x431527, _0x5c6761.a.createElement("img", {
        className: "loading-bar-icon",
        alt: "",
        src: "".concat(_0x2b1d61, "/logo.png")
      }), _0x5c6761.a.createElement("img", {
        className: "loading-bar-loading",
        alt: "",
        src: "".concat(_0x2b1d61, "/loading.gif")
      }), _0x5c6761.a.createElement("img", {
        className: "loading-bar-icon",
        alt: "",
        src: "".concat(_0x2b1d61, "/").concat(_0x57e8b8[_0x2904a4.oauthType])
      }))) : _0x5c6761.a.createElement("div", null, _0x5c6761.a.createElement("h1", null, "申请", _0x5ac246[_0x2904a4.oauthType], "授权"), _0x5c6761.a.createElement("p", null, "授权", _0x5c6761.a.createElement("span", null, "粉象生活"), "后即可", _0x5c6761.a.createElement("span", null, "购买特价好物")), _0x5c6761.a.createElement("p", null, "· 粉象生活APP是淘宝联盟官方合作伙伴"))), !_0x3d4220 && _0x5c6761.a.createElement("button", {
        className: "modal-main-btn",
        onClick: function () {
          return function () {
            var _0x4f3b94 = _0x2904a4.oauthType,
              _0x5608b5 = _0x2904a4.oauthUrl,
              _0x4c7a0d = _0x2904a4.appOauthUrl,
              _0x1e3328 = {
                url: _0x5608b5 || _0x4c7a0d,
                popRefresh: !0,
                directType: "redirect",
                backRefresh: !0
              };
            _0x324660(!0);
            setTimeout(function () {
              _0x2674f9();
              _0x324660(!1);
            }, 2000);
            "P" === _0x4f3b94 && Object(_0x494873.f)("openPage", _0x1e3328);
          }();
        }
      }, _0x5c6761.a.createElement("img", {
        alt: "",
        src: "".concat(_0x2b1d61, "/pdd_icon.png")
      }), "前往", _0x5ac246[_0x2904a4.oauthType], "授权")), _0x5c6761.a.createElement("img", {
        alt: "",
        className: "modal-close",
        onClick: _0x2674f9,
        src: "".concat(_0x2b1d61, "/icon_pop_close.png")
      }));
    }
  },
  664: function (_0x13777f, _0x38ca73, _0x4c983e) {},
  666: function (_0x2a6826, _0x5a58f4, _0x4541ae) {},
  753: function (_0x6ebc39, _0x4f1811, _0x2db93c) {
    'use strict';

    _0x2db93c.r(_0x4f1811);
    _0x2db93c(62);
    var _0x1aea30 = _0x2db93c(13),
      _0x11dbd9 = _0x2db93c.n(_0x1aea30),
      _0x487051 = _0x2db93c(12),
      _0x549a9d = _0x2db93c(0),
      _0x32671c = _0x2db93c.n(_0x549a9d),
      _0x59c0af = _0x2db93c(10),
      _0x2c3e37 = _0x2db93c(16),
      _0x108f06 = _0x2db93c(21),
      _0x31255f = _0x2db93c(851),
      _0x3066d4 = (_0x2db93c(762), _0x2db93c(757)),
      _0x4ea638 = (_0x2db93c(92), _0x2db93c(30)),
      _0x344e11 = _0x2db93c.n(_0x4ea638),
      _0x394ddf = _0x2db93c(212),
      _0x1d9049 = _0x2db93c(26),
      _0x1494b3 = _0x2db93c.n(_0x1d9049),
      _0x4a71ae = (_0x2db93c(764), _0x2db93c(138)),
      _0x2776ff = _0x2db93c(64),
      _0x1a7bd9 = _0x2db93c.n(_0x2776ff),
      _0x167c51 = _0x2db93c(151);
    _0x2db93c(766);
    _0x2db93c(768);
    var _0x1155af = Object(_0x549a9d.forwardRef)(function (_0x48bb1a, _0x1c5a21) {
      var _0x1851db = Object(_0x549a9d.useState)(!1),
        _0x5957a1 = Object(_0x487051.a)(_0x1851db, 2),
        _0x51607b = _0x5957a1[0],
        _0x4f6396 = _0x5957a1[1],
        _0x2995e7 = Object(_0x549a9d.useState)(_0x48bb1a.type),
        _0x384af0 = Object(_0x487051.a)(_0x2995e7, 2),
        _0x27287c = _0x384af0[0],
        _0x32c370 = (_0x384af0[1], Object(_0x549a9d.useState)(0)),
        _0x4acc3d = Object(_0x487051.a)(_0x32c370, 2),
        _0x2e5eee = _0x4acc3d[0],
        _0x3041e4 = _0x4acc3d[1],
        _0x14da8f = function (_0x2ca5f0) {
          Object(_0x3066d4.e)(0);
          _0x3041e4(_0x2ca5f0);
          _0x4f6396(!0);
        },
        _0x6b5f9b = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
      var _0x13158d = {
        className: "success-modal transparent-modal",
        visible: _0x51607b,
        transparent: !0,
        maskClosable: !1,
        transitionName: "modal-ani",
        maskStyle: _0x6b5f9b
      };
      var _0x4eadc1 = {
        className: "success-con"
      };
      var _0x1eea08 = {
        className: "success-bg"
      };
      var _0x364b12 = {
        className: "success-wrap"
      };
      var _0x2a48a6 = {
        className: "success-top"
      };
      var _0x4888e4 = {
        className: "success-con-num"
      };
      var _0x196fb0 = {
        src: 1 === _0x27287c ? _0x3066d4.h + "reward_coin.png" : 2 === _0x27287c ? _0x3066d4.h + "reward_godfortune.png" : "",
        alt: ""
      };
      var _0x1b7908 = {
        className: "success-con-text"
      };
      var _0x190124 = {
        className: "success-tip"
      };
      Object(_0x549a9d.useImperativeHandle)(_0x1c5a21, function () {
        var _0x4bfad8 = {
          showModal: _0x14da8f
        };
        return _0x4bfad8;
      }, []);
      return _0x32671c.a.createElement(_0x344e11.a, _0x13158d, _0x32671c.a.createElement("div", _0x4eadc1, _0x32671c.a.createElement("div", _0x1eea08), _0x32671c.a.createElement("div", _0x364b12, _0x32671c.a.createElement("div", _0x2a48a6, _0x32671c.a.createElement("div", _0x4888e4, _0x32671c.a.createElement("img", _0x196fb0), _0x32671c.a.createElement("div", _0x1b7908, 1 === _0x27287c ? "".concat(_0x2e5eee, "金币") : 2 === _0x27287c ? "体验财神" : ""))), _0x32671c.a.createElement("div", {
        className: 1 === _0x27287c ? "success-btn" : 2 === _0x27287c ? "success-btn success-btn-goto" : "",
        onClick: function () {
          2 === _0x27287c && _0x48bb1a.getCurrentFriends("refresh");
          _0x4f6396(!1);
          Object(_0x3066d4.e)(1);
        },
        onTouchStart: function (_0x3b31de) {
          _0x3b31de.currentTarget.classList.add("btn-scale");
        },
        onTouchEnd: function (_0x2d950a) {
          _0x2d950a.currentTarget.classList.remove("btn-scale");
        }
      }), _0x32671c.a.createElement("div", _0x190124, 1 === _0x27287c ? "金币可以兑换免费商品哦～" : 2 === _0x27287c ? "赚钱速度直接翻倍～" : ""))));
    });
    _0x2db93c(770);
    var _0x11673a = Object(_0x549a9d.forwardRef)(function (_0x5962ae, _0x44f39f) {
      var _0x3379a0 = Object(_0x549a9d.useState)(!1),
        _0x20dc1a = Object(_0x487051.a)(_0x3379a0, 2),
        _0x1330bf = _0x20dc1a[0],
        _0x4bcdd7 = _0x20dc1a[1],
        _0x9e547c = Object(_0x549a9d.useState)(0),
        _0x2d6bba = Object(_0x487051.a)(_0x9e547c, 2),
        _0x47dd8c = _0x2d6bba[0],
        _0x2fe21f = _0x2d6bba[1],
        _0x316ea5 = Object(_0x549a9d.useState)(0),
        _0x2398e8 = Object(_0x487051.a)(_0x316ea5, 2),
        _0x3d3e6a = _0x2398e8[0],
        _0x457eb5 = _0x2398e8[1],
        _0x37c0ae = function () {
          _0x11dbd9.a.loading("加载中...");
          _0x59c0af.a.request.trackLog("push_h5activity_goldenelephant_page_invite_friends_popwin");
          _0x108f06.a.egMammonInvite().then(function (_0x4049ec) {
            _0x11dbd9.a.hide();
            _0x2fe21f(_0x4049ec.data.mammonLevelOld);
            _0x457eb5(_0x4049ec.data.mammonLevelNew);
            Object(_0x3066d4.e)(0);
            _0x4bcdd7(!0);
          }).catch(function () {
            _0x11dbd9.a.hide();
          });
        },
        _0x52219f = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
      var _0x3d6e37 = {
        className: "share-modal transparent-modal",
        visible: _0x1330bf,
        transparent: !0,
        maskClosable: !1,
        transitionName: "modal-ani",
        maskStyle: _0x52219f
      };
      var _0x124a57 = {
        className: "shareModal-con"
      };
      var _0x23392e = {
        className: "shareModal-head"
      };
      var _0x519b22 = {
        className: "shareModal-wrap"
      };
      var _0x11cf7a = {
        className: "shareModal-wrap-con"
      };
      var _0x557a18 = {
        className: "shareModal-title"
      };
      var _0x4bf7b5 = {
        className: "shareModal-item shareModal-item-new"
      };
      var _0x1cd552 = {
        className: "shareModal-item-info"
      };
      var _0x1c3078 = {
        className: "shareModal-info-title"
      };
      var _0x1fe6f5 = {
        className: "newAward-info-desc"
      };
      var _0x905519 = {
        className: "img-coin"
      };
      var _0x3be896 = {
        className: "shareModal-item-num numberotf"
      };
      var _0x312ec7 = {
        className: "shareModal-item shareModal-item-old"
      };
      var _0x5c98dd = {
        className: "shareModal-item-info"
      };
      var _0x3b5089 = {
        className: "shareModal-info-title"
      };
      var _0x561627 = {
        className: "newAward-info-desc"
      };
      var _0x3b5f37 = {
        className: "img-coin"
      };
      var _0x21294b = {
        className: "shareModal-item-num numberotf"
      };
      var _0x3c7128 = {
        className: "shareModal-btn-con"
      };
      var _0x13bd1a = {
        className: "shareModal-btn-fri-peo"
      };
      var _0x4c451d = {
        className: "shareModal-tips"
      };
      var _0x333c09 = {
        className: "shareModal-tips-con"
      };
      Object(_0x549a9d.useImperativeHandle)(_0x44f39f, function () {
        var _0x23e1aa = {
          showModal: _0x37c0ae
        };
        return _0x23e1aa;
      }, []);
      return _0x32671c.a.createElement(_0x344e11.a, _0x3d6e37, _0x32671c.a.createElement("div", _0x124a57, _0x32671c.a.createElement("div", _0x23392e), _0x32671c.a.createElement("div", {
        className: "shareModal-close close-btn",
        onClick: function () {
          var _0x2576f5 = {
            operation: "关闭"
          };
          _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_invite_friends_popwin", _0x2576f5);
          Object(_0x3066d4.e)(1);
          _0x4bcdd7(!1);
        }
      }), _0x32671c.a.createElement("div", _0x519b22, _0x32671c.a.createElement("div", _0x11cf7a, _0x32671c.a.createElement("div", _0x557a18, "邀请好友自动赚钱吧"), _0x32671c.a.createElement("div", _0x4bf7b5, _0x32671c.a.createElement("div", _0x1cd552, _0x32671c.a.createElement("div", _0x1c3078, "新用户 ", _0x32671c.a.createElement("span", null, "金币每秒+2")), _0x32671c.a.createElement("div", _0x1fe6f5, "每位奖", _0x32671c.a.createElement("i", _0x905519), "30万金币")), _0x32671c.a.createElement("div", _0x3be896, _0x3d3e6a, "/15")), _0x32671c.a.createElement("div", _0x312ec7, _0x32671c.a.createElement("div", _0x5c98dd, _0x32671c.a.createElement("div", _0x3b5089, "老用户 ", _0x32671c.a.createElement("span", null, "金币每秒+1")), _0x32671c.a.createElement("div", _0x561627, "每位奖", _0x32671c.a.createElement("i", _0x3b5f37), "10万金币")), _0x32671c.a.createElement("div", _0x21294b, _0x47dd8c, "/5")), _0x32671c.a.createElement("div", _0x3c7128, _0x32671c.a.createElement("div", {
        className: "shareModal-btn-item shareModal-btn-fri",
        onClick: function () {
          return function (_0x5439ea) {
            var _0x4ce14c = {
              operation: 1 === _0x5439ea ? "点击朋友圈分享" : "点击微信好友分享"
            };
            var _0x1e8756 = {
              type: "jxzq"
            };
            _0x11dbd9.a.loading("加载中...");
            _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_invite_friends_popwin", _0x4ce14c);
            _0x108f06.a.getDynamicDomain(_0x1e8756).then(function (_0x146110) {
              _0x11dbd9.a.hide();
              var _0x278959 = "".concat(_0x146110.data).concat(window.location.pathname, "?invite=").concat(_0x5962ae.userInfo.userInfo.invitationCode, "&inviteId=").concat(_0x5962ae.userInfo.userInfo.id, "#/share"),
                _0x492454 = {
                  actionType: 2,
                  shareType: 1,
                  title: "【金象赚钱】拜托帮我点下赚金币啦~",
                  subTitle: "帮我你也有奖励哦~",
                  picUrl: "https://static.fenxianglife.com/ui/h5-activity/shareMini/jxzq.png",
                  shareUrl: _0x278959
                };
              Object(_0x2c3e37.f)("share", _0x492454);
            });
          }(1);
        },
        onTouchStart: function (_0x80fe36) {
          _0x80fe36.currentTarget.classList.add("btn-scale");
        },
        onTouchEnd: function (_0x56803f) {
          _0x56803f.currentTarget.classList.remove("btn-scale");
        }
      }, _0x32671c.a.createElement("div", _0x13bd1a, "邀好友自动赚钱吧"))), _0x32671c.a.createElement("div", _0x4c451d, _0x32671c.a.createElement("div", {
        className: "shareModal-tips-len",
        onClick: function (_0x33fd64) {
          _0x33fd64.currentTarget.parentNode.classList.toggle("tips-show");
        }
      }, _0x32671c.a.createElement("i", null), " 新用户定义"), _0x32671c.a.createElement("div", _0x333c09, _0x32671c.a.createElement("p", null, "1、新用户定义：从未注册下载过粉象的用户，且此活动带来的新用户不与其他活动重复计算；"), _0x32671c.a.createElement("p", null, "2、邀请新人好友助力定义：粉象新人通过你的金象邀请链接进入金象帮你助力，仅邀请但好友未帮你助力，则无任何奖励哦；"), _0x32671c.a.createElement("p", null, "3、若非你邀请的金象活动新人用户帮你助力，仅能得到财神位的金币加速奖励哦。")))))));
    });
    _0x2db93c(772);
    var _0x252383 = Object(_0x549a9d.forwardRef)(function (_0x2b13da, _0x459159) {
      var _0x324d37 = Object(_0x549a9d.useState)(!1),
        _0x1721c1 = Object(_0x487051.a)(_0x324d37, 2),
        _0x361a67 = _0x1721c1[0],
        _0x56068a = _0x1721c1[1],
        _0x3baf8f = Object(_0x549a9d.useState)(0),
        _0x1309a9 = Object(_0x487051.a)(_0x3baf8f, 2),
        _0x118baa = _0x1309a9[0],
        _0x48d136 = _0x1309a9[1],
        _0x67e6d9 = function (_0x80569b) {
          Object(_0x3066d4.e)(0);
          _0x48d136(_0x80569b);
          _0x56068a(!0);
        },
        _0x1feeea = Object(_0x549a9d.useRef)(null),
        _0x2880a4 = function () {
          Object(_0x3066d4.e)(1);
          _0x56068a(!1);
        },
        _0x4ff612 = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
      var _0x407d1a = {
        className: "fupack-modal transparent-modal",
        visible: _0x361a67,
        transparent: !0,
        maskClosable: !1,
        transitionName: "modal-ani",
        maskStyle: _0x4ff612
      };
      var _0x4876ea = {
        className: "fupack-con"
      };
      var _0x1a7a17 = {
        className: "fupack-close close-btn",
        onClick: _0x2880a4
      };
      var _0x362e8a = {
        className: "fupack-img",
        src: _0x3066d4.h + "pop_luckybag.png",
        alt: ""
      };
      Object(_0x549a9d.useImperativeHandle)(_0x459159, function () {
        var _0x1460cb = {
          showModal: _0x67e6d9
        };
        return _0x1460cb;
      }, []);
      return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement(_0x344e11.a, _0x407d1a, _0x32671c.a.createElement("div", _0x4876ea, _0x32671c.a.createElement("div", _0x1a7a17), _0x32671c.a.createElement("img", _0x362e8a), _0x32671c.a.createElement("div", {
        className: "fupack_btn",
        onClick: function () {
          var _0x30c687 = {
            taskId: _0x118baa,
            gameType: 2
          };
          _0x11dbd9.a.loading("正在开启...");
          _0x108f06.a.egTaskFinish(_0x30c687).then(function (_0x208513) {
            _0x11dbd9.a.hide();
            _0x2880a4();
            _0x1feeea.current.showModal(_0x208513.data.awardCount);
            _0x2b13da.getBaseInfo("refresh");
            _0x2b13da.taskList && _0x2b13da.getTaskList("refresh");
          }).catch(function () {
            _0x11dbd9.a.hide();
          });
        },
        onTouchStart: function (_0x5a907d) {
          _0x5a907d.currentTarget.classList.add("btn-scale");
        },
        onTouchEnd: function (_0x42a096) {
          _0x42a096.currentTarget.classList.remove("btn-scale");
        }
      }))), _0x32671c.a.createElement(_0x1155af, {
        ref: _0x1feeea,
        type: 1
      }));
    });
    _0x2db93c(774);
    var _0x5c1e12 = Object(_0x549a9d.forwardRef)(function (_0x2e10e7, _0x1a8073) {
        var _0x33bc55 = Object(_0x549a9d.useState)(!1),
          _0x490bf3 = Object(_0x487051.a)(_0x33bc55, 2),
          _0x350b47 = _0x490bf3[0],
          _0x2426fb = _0x490bf3[1],
          _0x157930 = Object(_0x549a9d.useState)(0),
          _0x2395b9 = Object(_0x487051.a)(_0x157930, 2),
          _0x1a125d = _0x2395b9[0],
          _0x37b0b2 = _0x2395b9[1],
          _0x4e3889 = function (_0x334071) {
            Object(_0x3066d4.e)(0);
            _0x37b0b2(_0x334071);
            _0x2426fb(!0);
          },
          _0x4d9d19 = {
            backgroundColor: "rgba(0,0,0,.7)"
          };
        var _0xfa8ce2 = {
          className: "success11-modal transparent-modal",
          visible: _0x350b47,
          transparent: !0,
          maskClosable: !1,
          transitionName: "modal-ani",
          maskStyle: _0x4d9d19
        };
        var _0x2d3ed6 = {
          className: "success11-con"
        };
        var _0x5c63d5 = {
          className: "success11-info"
        };
        var _0xdf12f6 = {
          className: "success11-info-title"
        };
        var _0x28cec8 = {
          className: "success11-info-p"
        };
        var _0x114b69 = {
          className: "success11-info-img",
          src: _0x3066d4.h + "reward_coin.png",
          alt: ""
        };
        var _0x38528f = {
          className: "success11-info-coin"
        };
        var _0x53461e = {
          className: "success11-tips"
        };
        Object(_0x549a9d.useImperativeHandle)(_0x1a8073, function () {
          var _0x3ad5c7 = {
            showModal: _0x4e3889
          };
          return _0x3ad5c7;
        }, []);
        return _0x32671c.a.createElement(_0x344e11.a, _0xfa8ce2, _0x32671c.a.createElement("div", _0x2d3ed6, _0x32671c.a.createElement("div", _0x5c63d5, _0x32671c.a.createElement("div", _0xdf12f6, "恭喜获得"), _0x32671c.a.createElement("div", _0x28cec8, "今日双11专属额外奖励"), _0x32671c.a.createElement("img", _0x114b69), _0x32671c.a.createElement("div", _0x38528f, _0x1a125d, "金币")), _0x32671c.a.createElement("div", {
          className: "success11-btn",
          onClick: function () {
            _0x2426fb(!1);
            Object(_0x3066d4.e)(1);
          },
          onTouchStart: function (_0x44db0a) {
            _0x44db0a.currentTarget.classList.add("btn-scale");
          },
          onTouchEnd: function (_0x32d046) {
            _0x32d046.currentTarget.classList.remove("btn-scale");
          }
        }), _0x32671c.a.createElement("div", _0x53461e, "明天还可以继续领取哦～")));
      }),
      _0x2b1d1b = _0x2db93c(622),
      _0x5e5270 = _0x2db93c(623);
    _0x2db93c(776);
    var _0x1f780d = function (_0x3a4947) {
      var _0x10be41 = Object(_0x549a9d.useState)(!0),
        _0x580dd0 = Object(_0x487051.a)(_0x10be41, 2),
        _0x2fe55a = _0x580dd0[0],
        _0x4a5b80 = _0x580dd0[1],
        _0x183d5a = Object(_0x549a9d.useState)(!0),
        _0x7cfd6e = Object(_0x487051.a)(_0x183d5a, 2),
        _0x4c8add = _0x7cfd6e[0],
        _0x5269d1 = _0x7cfd6e[1],
        _0x25761f = Object(_0x549a9d.useState)(!1),
        _0x24c9a8 = Object(_0x487051.a)(_0x25761f, 2),
        _0x17c3dc = _0x24c9a8[0],
        _0x54c47f = _0x24c9a8[1],
        _0x46ca73 = Object(_0x549a9d.useState)(""),
        _0xd7a529 = Object(_0x487051.a)(_0x46ca73, 2),
        _0x2994ee = _0xd7a529[0],
        _0x4294e5 = _0xd7a529[1],
        _0x17785b = Object(_0x549a9d.useState)("去完成"),
        _0x3a5848 = Object(_0x487051.a)(_0x17785b, 2),
        _0x33b7db = _0x3a5848[0],
        _0x3e8aa7 = _0x3a5848[1],
        _0x2c76a2 = Object(_0x549a9d.useState)(null),
        _0x421137 = Object(_0x487051.a)(_0x2c76a2, 2),
        _0x56770e = _0x421137[0],
        _0x1ad1fe = _0x421137[1],
        _0xe9b2dc = Object(_0x549a9d.useState)(!1),
        _0x4b2538 = Object(_0x487051.a)(_0xe9b2dc, 2),
        _0x1715fb = _0x4b2538[0],
        _0x331eff = _0x4b2538[1],
        _0x2ee00e = Object(_0x549a9d.useState)(1),
        _0x45e931 = Object(_0x487051.a)(_0x2ee00e, 2),
        _0x1d321d = _0x45e931[0],
        _0x4c01d6 = _0x45e931[1],
        _0x55ee08 = Object(_0x549a9d.useRef)(null);
      Object(_0x549a9d.useEffect)(function () {
        var _0x4f43d0 = _0x3a4947.task;
        if (3 === _0x4f43d0.taskType) {
          _0x4a5b80(_0x4f43d0.fuPackCanget);
          _0x3e8aa7(_0x4f43d0.fuPackStr);
          return void (_0x4f43d0.fuPackCanget ? _0x4c01d6(2) : (_0x4c01d6(3), _0x4a5b80(!1)));
        }
        if (1 !== _0x4f43d0.taskType && 4 !== _0x4f43d0.taskType && 5 !== _0x4f43d0.taskType) {
          if (10 !== _0x4f43d0.taskType && 6 !== _0x4f43d0.taskType) {
            if (100 !== _0x4f43d0.taskType && 101 !== _0x4f43d0.taskType) {
              if (9 !== _0x4f43d0.taskType) {
                if (7 !== _0x4f43d0.taskType && 8 !== _0x4f43d0.taskType) {
                  if (102 !== _0x4f43d0.taskType && 107 !== _0x4f43d0.taskType) {
                    if (104 !== _0x4f43d0.taskType && 105 !== _0x4f43d0.taskType && 106 !== _0x4f43d0.taskType) {
                      if (103 !== _0x4f43d0.taskType && 501 !== _0x4f43d0.taskType && 502 !== _0x4f43d0.taskType && 503 !== _0x4f43d0.taskType) {
                        return function () {
                          window.clearInterval(_0x55ee08.current);
                        };
                      }
                      _0x4f43d0.finish ? 116 === _0x4f43d0.taskId || 125 === _0x4f43d0.taskId || 126 === _0x4f43d0.taskId ? (_0x4c01d6(3), _0x3e8aa7("已完成"), _0x5269d1(!1), _0x4a5b80(!1)) : (_0x4c01d6(1), _0x3e8aa7("再逛逛"), _0x4294e5("今日已完成"), _0x5269d1(!1)) : (_0x5269d1(!0), _0x4c01d6(1), _0x3e8aa7(_0x4f43d0.buttonName || "去完成"));
                    } else {
                      0 === _0x4f43d0.directGet ? (_0x4c01d6(1), _0x3e8aa7("去完成")) : 1 === _0x4f43d0.directGet ? (_0x4c01d6(2), _0x3e8aa7("领取")) : (_0x4c01d6(3), _0x3e8aa7("已完成"), _0x5269d1(!1), _0x4a5b80(!1));
                    }
                  } else {
                    0 === _0x4f43d0.directGet ? (_0x4c01d6(1), _0x3e8aa7("去关注")) : 1 === _0x4f43d0.directGet ? (_0x4c01d6(2), _0x3e8aa7("领取")) : (_0x4c01d6(3), _0x3e8aa7("已完成"), _0x5269d1(!1), _0x4a5b80(!1));
                  }
                } else {
                  _0x4f43d0.finish && (_0x4c01d6(1), _0x3e8aa7("再逛逛"), _0x4294e5("今日已完成"), _0x5269d1(!1), _0x54c47f(!0));
                }
              } else {
                _0x4f43d0.finish ? (_0x4c01d6(1), _0x3e8aa7("再逛逛"), _0x4294e5("今日已完成"), _0x5269d1(!1), _0x54c47f(!0)) : (_0x5269d1(!0), _0x4c01d6(1), _0x3e8aa7("去完成"));
              }
            } else {
              _0x4f43d0.finish ? (_0x4c01d6(1), _0x3e8aa7("再逛逛"), _0x4294e5("今日已完成"), _0x5269d1(!1), _0x54c47f(!0), _0x1ad1fe("订单退款奖励扣除")) : 1 === _0x4f43d0.directGet ? (_0x5269d1(!0), _0x4c01d6(2), _0x3e8aa7("领取"), _0x1ad1fe("订单退款奖励扣除")) : 0 === _0x4f43d0.directGet && (_0x5269d1(!0), _0x4c01d6(1), _0x3e8aa7("去完成"), _0x1ad1fe("订单退款奖励扣除"));
            }
          } else {
            if (_0x4f43d0.finish) {
              _0x3e8aa7("再逛逛");
              _0x4294e5("今日已完成");
              _0x5269d1(!1);
              _0x54c47f(!0);
            } else {
              if (1 === _0x4f43d0.directGet && (_0x3e8aa7("领取"), _0x4c01d6(2)), 2 === _0x4f43d0.directGet) {
                _0x5269d1(!1);
                _0x3e8aa7("再逛逛");
                var _0x44a9b7 = _0x4f43d0.cd;
                _0x4294e5(Object(_0x3066d4.n)(_0x44a9b7, !0) + "后再次完成");
                _0x54c47f(!0);
                _0x55ee08.current = window.setInterval(function () {
                  _0x44a9b7 -= 1;
                  _0x4294e5(Object(_0x3066d4.n)(_0x44a9b7, !0) + "后再次完成");
                  _0x44a9b7 <= 0 && (_0x5269d1(!0), _0x3e8aa7("去完成"), _0x4c01d6(1), _0x54c47f(!1), window.clearInterval(_0x55ee08.current));
                }, 1000);
              }
            }
          }
        } else {
          if (_0x4f43d0.finish) {
            116 === _0x4f43d0.taskId ? (_0x4c01d6(3), _0x3e8aa7("已完成"), _0x5269d1(!1), _0x4a5b80(!1)) : (_0x3e8aa7("再逛逛"), _0x4294e5("今日已完成"), _0x54c47f(!0), _0x5269d1(!1));
          } else {
            if (_0x4f43d0.cd > 0) {
              _0x5269d1(!1);
              _0x3e8aa7("再逛逛");
              var _0x32ff03 = _0x4f43d0.cd;
              _0x4294e5(Object(_0x3066d4.n)(_0x32ff03, !0) + "后再次领取");
              _0x54c47f(!0);
              _0x55ee08.current = window.setInterval(function () {
                _0x32ff03 -= 1;
                _0x4294e5(Object(_0x3066d4.n)(_0x32ff03, !0) + "后再次领取");
                _0x32ff03 <= 0 && (_0x5269d1(!0), _0x3e8aa7("去完成"), _0x54c47f(!1), window.clearInterval(_0x55ee08.current));
              }, 1000);
            }
          }
        }
      }, [_0x3a4947.task]);
      var _0x55b651 = function (_0xe43562) {
          _0x331eff(_0xe43562);
        },
        _0x406172 = {
          className: "task-item"
        };
      var _0x15b056 = {
        className: "task-item-img"
      };
      var _0x3d7e10 = {
        src: _0x3a4947.task.picUrl,
        alt: ""
      };
      var _0xe2d87 = {
        className: "task-item-info"
      };
      var _0x43a503 = {
        className: "task-item-info-title"
      };
      var _0x29e2e3 = {
        className: "task-item-info-len"
      };
      var _0x36a04e = {
        className: "task-item-btn"
      };
      var _0x495a0b = {
        className: "task-item-btn-len"
      };
      var _0x51d4b5 = {
        src: "https://static.fenxianglife.com/ui/h5-activity/persistent/orchard/img_icon_ts.png",
        className: "btn-icon"
      };
      var _0x308c17 = {
        backgroundColor: "rgba(0,0,0,1)"
      };
      var _0x51552a = {
        className: "btn-tip-modal",
        visible: _0x1715fb,
        transparent: !0,
        maskClosable: !1,
        maskStyle: _0x308c17
      };
      var _0x442024 = {
        className: "title"
      };
      return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("div", _0x406172, _0x32671c.a.createElement("div", _0x15b056, _0x32671c.a.createElement("img", _0x3d7e10)), _0x32671c.a.createElement("div", _0xe2d87, _0x32671c.a.createElement("div", _0x43a503, _0x3a4947.task.title), _0x32671c.a.createElement("div", _0x29e2e3, _0x3a4947.task.desc)), _0x32671c.a.createElement("div", _0x36a04e, _0x17c3dc && _0x32671c.a.createElement("div", _0x495a0b, _0x2994ee), _0x32671c.a.createElement("div", {
        className: 1 === _0x1d321d ? "task-item-btn-con" : 2 === _0x1d321d ? "task-item-btn-con task-item-btn-green" : "task-item-btn-con task-item-btn-gray",
        onClick: function () {
          _0x2fe55a && _0x3a4947.taskClick(_0x3a4947.task, _0x4c8add);
        },
        onTouchStart: function (_0x43fdfd) {
          _0x2fe55a && _0x43fdfd.currentTarget.classList.add("btn-scale");
        },
        onTouchEnd: function (_0x2ab7b2) {
          _0x2fe55a && _0x2ab7b2.currentTarget.classList.remove("btn-scale");
        }
      }, _0x33b7db), _0x56770e && _0x32671c.a.createElement("div", {
        className: "task-item-btn-goto-tip",
        onClick: function () {
          return _0x55b651(!0);
        }
      }, _0x32671c.a.createElement("img", _0x51d4b5), _0x56770e))), _0x32671c.a.createElement(_0x344e11.a, _0x51552a, _0x32671c.a.createElement("h2", _0x442024, "- 温馨提示 -"), _0x32671c.a.createElement("p", null, "完成下单任务并领取奖励后，若订单退款，奖励将会扣除哦~超过3次退款，后续将无法参与下单任务。"), _0x32671c.a.createElement("div", {
        className: "btn-ok",
        onClick: function () {
          return _0x55b651(!1);
        }
      }, "知道了")));
    };
    _0x2db93c(778);
    _0x1494b3.a.parse(window.location.search).v;
    var _0xc1238 = window.location.origin,
      _0x2d1b9a = (_0x394ddf.a.getCurrentHost(), {
        10: {
          name: "砍价任务",
          scene: "bargin",
          link: "".concat(_0xc1238, "/h5-self/activities/bargain/index.html")
        }
      }),
      _0x2d8c8c = _0x394ddf.a.getCurrentHost(),
      _0x1c8cc5 = _0x1494b3.a.parse(window.location.search),
      _0x481a05 = _0x1c8cc5.v,
      _0xa4c0a3 = _0x1c8cc5.platform,
      _0x384ed7 = function (_0x4240ed) {
        var _0x2f477a = {
          visible: !1
        };
        var _0x8f3f6a = Object(_0x549a9d.useState)([]),
          _0x462fcd = Object(_0x487051.a)(_0x8f3f6a, 2),
          _0xf98b28 = _0x462fcd[0],
          _0x188140 = _0x462fcd[1],
          _0x13dd71 = Object(_0x549a9d.useState)(!1),
          _0x3c8429 = Object(_0x487051.a)(_0x13dd71, 2),
          _0x445f79 = _0x3c8429[0],
          _0x593408 = _0x3c8429[1],
          _0x5ebd65 = Object(_0x549a9d.useState)(_0x2f477a),
          _0x264fe2 = Object(_0x487051.a)(_0x5ebd65, 2),
          _0x1d7446 = _0x264fe2[0],
          _0x3426fa = _0x264fe2[1],
          _0x39363f = Object(_0x549a9d.useState)({}),
          _0xc33e07 = Object(_0x487051.a)(_0x39363f, 2),
          _0x5d1509 = _0xc33e07[0],
          _0x30da30 = _0xc33e07[1],
          _0x41a575 = Object(_0x549a9d.useState)(!1),
          _0x444dab = Object(_0x487051.a)(_0x41a575, 2),
          _0x2d5937 = _0x444dab[0],
          _0x32ccff = _0x444dab[1],
          _0xd4dafe = Object(_0x549a9d.useState)({}),
          _0x590955 = Object(_0x487051.a)(_0xd4dafe, 2),
          _0xce70b0 = _0x590955[0],
          _0x5ca8ce = _0x590955[1],
          _0x1abc0a = Object(_0x549a9d.useRef)(null),
          _0xc1286c = Object(_0x549a9d.useRef)(null),
          _0x473af8 = Object(_0x549a9d.useRef)(null),
          _0x209f18 = Object(_0x549a9d.useRef)(null),
          _0x20ab6c = Object(_0x549a9d.useState)(!1),
          _0x5d713d = Object(_0x487051.a)(_0x20ab6c, 2),
          _0xfa6b64 = _0x5d713d[0],
          _0x2d9937 = _0x5d713d[1],
          _0xcd87c0 = Object(_0x549a9d.useRef)(null),
          _0x4781bd = Object(_0x549a9d.useCallback)(Object(_0x167c51.a)(_0x1a7bd9.a.mark(function _0x13fae5() {
            var _0x575b90;
            return _0x1a7bd9.a.wrap(function (_0x5d8689) {
              for (;;) {
                switch (_0x5d8689.prev = _0x5d8689.next) {
                  case 0:
                    _0x5d8689.next = 2;
                    return _0x108f06.a.getRelationInfo();
                  case 2:
                    if (_0x5d8689.t0 = _0x5d8689.sent.data, _0x5d8689.t0) {
                      _0x5d8689.next = 5;
                      break;
                    }
                    _0x5d8689.t0 = {};
                  case 5:
                    _0x575b90 = _0x5d8689.t0;
                    _0x30da30(_0x575b90);
                  case 7:
                  case "end":
                    return _0x5d8689.stop();
                }
              }
            }, _0x13fae5);
          })), []);
        Object(_0x549a9d.useEffect)(function () {
          _0x4781bd();
          window.onRestart = function () {
            _0x4781bd();
          };
        }, [_0x4781bd]);
        var _0x1012cc = function (_0x2b9864, _0x7cf1c1, _0x176101) {
            var _0x3bc981 = {
              taskId: _0x2b9864.taskId,
              gameType: 2
            };
            _0x108f06.a.egTaskFinish(_0x3bc981).then(function (_0x53dcf6) {
              _0x4240ed.getTaskList("refresh");
              _0x7cf1c1 && (Object(_0x3066d4.e)(0), "双11" === _0x176101 ? (_0xc1286c.current.showModal(_0x53dcf6.data.awardCount), _0x4240ed.getBaseInfo("refresh")) : _0x1abc0a.current.showModal(_0x53dcf6.data.awardCount), "一亿补贴下单" !== _0x176101 && "猫超下单" !== _0x176101 && "私域进群" !== _0x176101 && "支付宝进群" !== _0x176101 || _0x4240ed.getBaseInfo("refresh"));
            });
          },
          _0x5325c7 = function () {
            var _0x1073e3 = _0x5d1509.jdOauthResult,
              _0x365288 = void 0 === _0x1073e3 ? {} : _0x1073e3,
              _0x5bbd4f = {
                visible: !0,
                appOauthUrl: _0x365288.appOauthUrl,
                h5OauthUrl: _0x365288.h5OauthUrl
              };
            return Object(_0x2c3e37.c)(_0x481a05 || "0", "5.1.6") >= 0 ? void Object(_0x2c3e37.f)("goJdongAuth", {}, !0).then(function (_0x27e49f) {
              _0x27e49f.result && (_0x11dbd9.a.show("授权成功"), _0x4781bd());
            }) : _0x3426fa(_0x5bbd4f);
          },
          _0x417add = function () {
            var _0x15f867 = Object(_0x167c51.a)(_0x1a7bd9.a.mark(function _0x473ccc(_0x51623d, _0xb5dd90) {
              var _0x422985, _0x56f3ed, _0x492531, _0x1e4da1, _0x4a7bbf, _0x534083, _0x475a7f, _0x96a632, _0x1cc0d6, _0x588567, _0x42a53f, _0x126751, _0x53377f, _0x14e94b, _0x146a6f, _0x2c8360, _0x59edb8, _0x5560fc, _0x3fe4b2, _0x31dd9e, _0x68a33, _0x475e9b, _0x45338a, _0x4faf00, _0x2f59a2, _0x4eb475;
              return _0x1a7bd9.a.wrap(function (_0x5d1f3a) {
                for (;;) {
                  switch (_0x5d1f3a.prev = _0x5d1f3a.next) {
                    case 0:
                      if (Object(_0x3066d4.o)(_0x51623d), !(_0x51623d.needVersion && (!_0x481a05 || Object(_0x3066d4.c)(_0x481a05, _0x51623d.needVersion)) < 0)) {
                        _0x5d1f3a.next = 4;
                        break;
                      }
                      _0x59c0af.a.brige.openUpdate();
                      return _0x5d1f3a.abrupt("return");
                    case 4:
                      if (_0x422985 = _0x5d1509.fxRelationResult, _0x56f3ed = void 0 === _0x422985 ? {} : _0x422985, _0x492531 = _0x5d1509.jdOauthResult, _0x1e4da1 = void 0 === _0x492531 ? {} : _0x492531, _0x4a7bbf = _0x5d1509.pddOauthResult, _0x534083 = void 0 === _0x4a7bbf ? {} : _0x4a7bbf, 1 !== _0x51623d.handleType && !_0x51623d.needAuthorization || _0x56f3ed.buildRelation) {
                        _0x5d1f3a.next = 7;
                        break;
                      }
                      var _0x57e94c = {
                        showBindView: 1,
                        url: null === _0x56f3ed || void 0 === _0x56f3ed ? void 0 : _0x56f3ed.relationUrl
                      };
                      return _0x5d1f3a.abrupt("return", Object(_0x2c3e37.f)("bindChannelId", _0x57e94c));
                    case 7:
                      if (3 !== _0x51623d.handleType || _0x1e4da1.oauth) {
                        _0x5d1f3a.next = 9;
                        break;
                      }
                      return _0x5d1f3a.abrupt("return", _0x5325c7());
                    case 9:
                      if (5 !== _0x51623d.handleType || _0x534083.oauth) {
                        _0x5d1f3a.next = 15;
                        break;
                      }
                      _0x534083.oauthType = "P";
                      _0x5ca8ce(_0x534083);
                      _0x32ccff(!0);
                      window.onRestart = function () {
                        _0x4781bd();
                      };
                      return _0x5d1f3a.abrupt("return");
                    case 15:
                      if (116 !== _0x51623d.taskId) {
                        _0x5d1f3a.next = 18;
                        break;
                      }
                      var _0x522ec9 = {
                        action: 2,
                        type: 1,
                        taskType: 0
                      };
                      Object(_0x2c3e37.f)("systemSetting", _0x522ec9).then(function () {
                        _0x2c3e37.i ? (clearInterval(_0xcd87c0.current), _0xcd87c0.current = setInterval(_0x3559b7, 1000)) : _0x400147();
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 18:
                      if (501 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 22;
                        break;
                      }
                      _0xb5dd90 && window.setTimeout(function () {
                        return _0x1012cc(_0x51623d, !0);
                      }, 500);
                      Object(_0x2c3e37.f)("openPage", {
                        url: _0x51623d.url
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 22:
                      if (503 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 34;
                        break;
                      }
                      if (125 !== _0x51623d.taskId && 126 !== _0x51623d.taskId) {
                        _0x5d1f3a.next = 26;
                        break;
                      }
                      var _0x143f57 = {
                        url: _0x51623d.url
                      };
                      Object(_0x2c3e37.f)("openPage", _0x143f57);
                      return _0x5d1f3a.abrupt("return");
                    case 26:
                      _0x475a7f = _0x51623d.url.split("?");
                      _0x96a632 = Object(_0x487051.a)(_0x475a7f, 2);
                      _0x1cc0d6 = _0x96a632[0];
                      _0x588567 = _0x96a632[1];
                      _0x42a53f = _0x588567.split("=");
                      _0x126751 = Object(_0x487051.a)(_0x42a53f, 2);
                      _0x53377f = _0x126751[1];
                      _0x14e94b = decodeURIComponent(decodeURIComponent(_0x53377f));
                      _0x146a6f = "channel=fxapp&fxUserId=".concat(_0x1c8cc5.uid, "&taskSource=2&taskId=").concat(null === _0x51623d || void 0 === _0x51623d ? void 0 : _0x51623d.taskId);
                      _0x2c8360 = "".concat(_0x14e94b, "&query=").concat(encodeURIComponent(_0x146a6f));
                      _0x59edb8 = "".concat(_0x1cc0d6, "?url=").concat(encodeURIComponent(encodeURIComponent(_0x2c8360)));
                      Object(_0x2c3e37.f)("openPage", {
                        url: _0x59edb8
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 34:
                      if (502 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 37;
                        break;
                      }
                      var _0x57b29a = {
                        taskType: 0,
                        leftText: _0x51623d.leftText || "",
                        middleText: _0x51623d.middleText || "",
                        rightText: _0x51623d.rightText || "",
                        millis: _0x51623d.millis,
                        taskId: _0x51623d.taskId,
                        url: _0x51623d.url,
                        gameType: _0x51623d.gameType,
                        delay: _0x51623d.delay || 0
                      };
                      var _0x2ee52e = {
                        url: _0x51623d.url
                      };
                      _0xb5dd90 ? _0x59c0af.a.appInvoke.invoke("browseTask", _0x57b29a) : Object(_0x2c3e37.f)("openPage", _0x2ee52e);
                      return _0x5d1f3a.abrupt("return");
                    case 37:
                      if (1 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 40;
                        break;
                      }
                      window.localStorage.getItem("gotoAdVideo") ? _0x86c32c(_0x51623d, _0xb5dd90) : (window.localStorage.setItem("gotoAdVideo", 1), Object(_0x3066d4.e)(0), _0x593408(!0));
                      return _0x5d1f3a.abrupt("return");
                    case 40:
                      if (10 === _0x51623d.taskType && _0x86c32c(_0x51623d, _0xb5dd90, 9), 2 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 44;
                        break;
                      }
                      _0x473af8.current.showModal();
                      return _0x5d1f3a.abrupt("return");
                    case 44:
                      if (6 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 47;
                        break;
                      }
                      var _0x52e385 = {
                        url: _0x51623d.url,
                        backRefresh: !1,
                        directType: "redirect"
                      };
                      _0xb5dd90 ? (_0x59c0af.a.appInvoke.invoke("openPage", _0x52e385), window.setTimeout(function () {
                        _0x1012cc(_0x51623d, !0);
                      }, 500)) : _0x59c0af.a.appInvoke.invoke("openPage", {
                        url: _0x51623d.url,
                        backRefresh: !1,
                        directType: "redirect"
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 47:
                      if (7 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 50;
                        break;
                      }
                      _0xb5dd90 ? ((_0x5560fc = _0x51623d.url).indexOf("?") > 0 ? _0x5560fc += "&taskCango=true&&taskType=elephant" : _0x5560fc += "?taskCango=true&&taskType=elephant", _0x59c0af.a.appInvoke.invoke("browseTask", {
                        taskType: 1,
                        leftText: _0x51623d.leftText || "",
                        middleText: _0x51623d.middleText || "",
                        rightText: _0x51623d.rightText || "",
                        millis: _0x51623d.millis,
                        taskId: _0x51623d.taskId,
                        url: _0x5560fc,
                        gameType: 2,
                        delay: _0x51623d.delay
                      })) : Object(_0x2c3e37.f)("openPage", {
                        url: _0x51623d.url
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 50:
                      if (3 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 53;
                        break;
                      }
                      _0x209f18.current.showModal(_0x51623d.taskId);
                      return _0x5d1f3a.abrupt("return");
                    case 53:
                      if (11 !== _0x51623d.taskId && 12 !== _0x51623d.taskId) {
                        _0x5d1f3a.next = 56;
                        break;
                      }
                      _0xb5dd90 ? ((_0x3fe4b2 = _0x51623d.url).indexOf("?") > 0 ? _0x3fe4b2 += "&egTaskCango=true&orchardTaskInfoId=".concat(_0x51623d.taskId) : _0x3fe4b2 += "?egTaskCango=true&orchardTaskInfoId=".concat(_0x51623d.taskId), _0x59c0af.a.appInvoke.invoke("browseTask", {
                        taskType: 1,
                        leftText: _0x51623d.leftText || "",
                        middleText: _0x51623d.middleText || "",
                        rightText: _0x51623d.rightText || "",
                        millis: _0x51623d.millis,
                        taskId: _0x51623d.taskId,
                        url: _0x3fe4b2,
                        gameType: 2,
                        delay: _0x51623d.delay
                      })) : _0x59c0af.a.brige.openWebview(_0x51623d.url);
                      return _0x5d1f3a.abrupt("return");
                    case 56:
                      if (4 !== _0x51623d.taskType && 5 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 59;
                        break;
                      }
                      _0xb5dd90 ? ((_0x31dd9e = _0x51623d.url).indexOf("?") > 0 ? _0x31dd9e += "&orchardTaskCango=true&egTaskCango=true&orchardTaskInfoId=".concat(_0x51623d.taskId) : _0x31dd9e += "?orchardTaskCango=true&egTaskCango=true&orchardTaskInfoId=".concat(_0x51623d.taskId), _0x59c0af.a.appInvoke.invoke("browseTask", {
                        taskType: 5 === _0x51623d.taskType ? 1 : 0,
                        leftText: _0x51623d.leftText || "",
                        middleText: _0x51623d.middleText || "",
                        rightText: _0x51623d.rightText || "",
                        millis: _0x51623d.millis,
                        taskId: _0x51623d.taskId,
                        url: _0x31dd9e,
                        gameType: 2,
                        delay: _0x51623d.delay
                      })) : _0x59c0af.a.brige.openWebview(_0x51623d.url);
                      return _0x5d1f3a.abrupt("return");
                    case 59:
                      if (100 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 62;
                        break;
                      }
                      1 === _0x51623d.directGet ? _0x1012cc(_0x51623d, !0, "一亿补贴下单") : _0x51623d.finish ? _0x59c0af.a.appInvoke.invoke("openPage", {
                        url: "".concat(window.location.origin, "/act/persistent/billionSubsidy/index.html?hidNav=1#/home"),
                        backRefresh: !1,
                        directType: "redirect"
                      }) : _0x59c0af.a.appInvoke.invoke("openPage", {
                        url: "".concat(window.location.origin, "/act/persistent/billionSubsidy/index.html?hidNav=1&gotoOrder=1#/home"),
                        backRefresh: !1,
                        directType: "redirect"
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 62:
                      if (101 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 65;
                        break;
                      }
                      1 === _0x51623d.directGet ? _0x1012cc(_0x51623d, !0, "猫超下单") : _0x51623d.finish ? _0x59c0af.a.appInvoke.invoke("openPage", {
                        url: "".concat(window.location.origin, "/act").concat(_0x2d8c8c, "/persistent/tmSuper/index.html"),
                        backRefresh: !1,
                        directType: "redirect"
                      }) : _0x59c0af.a.appInvoke.invoke("openPage", {
                        url: "".concat(window.location.origin, "/act").concat(_0x2d8c8c, "/persistent/tmSuper/index.html?gotoOrder=1"),
                        backRefresh: !1,
                        directType: "redirect"
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 65:
                      if (8 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 68;
                        break;
                      }
                      _0x51623d.finish ? _0x59c0af.a.appInvoke.invoke("openPage", {
                        url: "".concat(window.location.origin, "/h5-lottery/index.html?hideBack=1"),
                        backRefresh: !1,
                        directType: "redirect"
                      }) : _0x59c0af.a.appInvoke.invoke("openPage", {
                        url: "".concat(window.location.origin, "/h5-lottery/index.html?hideBack=1&taskCango=true&taskTime=").concat(_0x51623d.millis, "&taskSource=1&taskId=").concat(_0x51623d.taskId, "&taskAward=").concat(_0x51623d.award),
                        backRefresh: !1,
                        directType: "redirect"
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 68:
                      if (9 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 71;
                        break;
                      }
                      _0x59c0af.a.appInvoke.invoke("openPage", {
                        url: "".concat(_0x2d1b9a[_0x51623d.taskId].link).concat(_0x51623d.finish ? "" : "?taskSource=2&taskScene=".concat(_0x2d1b9a[_0x51623d.taskId].scene, "&taskId=").concat(_0x51623d.taskId, "&taskAward=").concat(_0x51623d.award)),
                        backRefresh: !1,
                        directType: "redirect"
                      });
                      return _0x5d1f3a.abrupt("return");
                    case 71:
                      if (102 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 74;
                        break;
                      }
                      1 === _0x51623d.directGet ? _0x1012cc(_0x51623d, !0) : (_0x68a33 = encodeURIComponent("https://mp.weixin.qq.com/s/LcyJFq56m4QfRUUzrbIy7g"), _0x475e9b = "/pages/common/webview/index?url=".concat(_0x68a33), _0x475e9b = "ios" === _0xa4c0a3 ? encodeURIComponent(_0x475e9b) : _0x475e9b, _0x59c0af.a.brige.openMiniApp("gh_e8f306b8b695", _0x475e9b));
                      return _0x5d1f3a.abrupt("return");
                    case 74:
                      if (107 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 77;
                        break;
                      }
                      1 === _0x51623d.directGet ? _0x1012cc(_0x51623d, !0) : (_0x45338a = encodeURIComponent("https://mp.weixin.qq.com/s/Q9MjXrgi9irWAFG3H7waFQ"), _0x4faf00 = "/pages/common/webview/index?url=".concat(_0x45338a), _0x4faf00 = "ios" === _0xa4c0a3 ? encodeURIComponent(_0x4faf00) : _0x4faf00, _0x59c0af.a.brige.openMiniApp("gh_e8f306b8b695", _0x4faf00));
                      return _0x5d1f3a.abrupt("return");
                    case 77:
                      if (103 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 81;
                        break;
                      }
                      var _0x49ece8 = {
                        url: _0x51623d.url,
                        backRefresh: !0,
                        directType: "redirect"
                      };
                      Object(_0x2c3e37.f)("openPage", _0x49ece8);
                      window.onRestart = function () {
                        return _0x4240ed.getTaskList("refresh");
                      };
                      return _0x5d1f3a.abrupt("return");
                    case 81:
                      var _0x32661d = {
                        url: "nplus://nativePage/bindWechat"
                      };
                      if (104 === _0x51623d.taskType && (1 === _0x51623d.directGet ? _0x1012cc(_0x51623d, !0, "私域进群") : _0x481a05 && Object(_0x3066d4.c)(_0x481a05, "4.9.8") >= 0 && !_0x51623d.wechatBind ? (Object(_0x2c3e37.l)(_0x32661d, "app"), _0x4240ed.closeModal()) : Object(_0x2c3e37.f)("openPage", {
                        url: _0x51623d.url
                      })), 105 !== _0x51623d.taskType) {
                        _0x5d1f3a.next = 88;
                        break;
                      }
                      _0x5d1f3a.next = 85;
                      return _0x108f06.a.getAliBindApi().then(function (_0x2d6726) {
                        return _0x2d6726.data;
                      });
                    case 85:
                      _0x2f59a2 = _0x5d1f3a.sent;
                      _0x4eb475 = _0x2f59a2.alipayBind;
                      1 === _0x51623d.directGet && _0x4eb475 ? _0x1012cc(_0x51623d, !0, "支付宝进群") : Object(_0x3066d4.a)();
                    case 88:
                      var _0x3b5393 = {
                        visible: !0
                      };
                      106 === _0x51623d.taskType && _0x3426fa(Object(_0x4a71ae.a)(_0x3b5393, _0x51623d.url.includes("snsapi_alliance_app_base") ? "appOauthUrl" : "h5OauthUrl", _0x51623d.url));
                    case 89:
                    case "end":
                      return _0x5d1f3a.stop();
                  }
                }
              }, _0x473ccc);
            }));
            return function (_0x149760, _0x50ab81) {
              return _0x15f867.apply(this, arguments);
            };
          }(),
          _0x3559b7 = function () {
            var _0x569463 = {
              action: 1,
              type: 1,
              taskType: 0
            };
            Object(_0x2c3e37.f)("systemSetting", _0x569463, !0).then(function (_0x47c277) {
              3 === _0x47c277.result && (_0x400147(), clearInterval(_0xcd87c0.current));
            });
          },
          _0x400147 = function () {
            var _0x368314 = Object(_0x167c51.a)(_0x1a7bd9.a.mark(function _0x38e086() {
              return _0x1a7bd9.a.wrap(function (_0x51928a) {
                for (;;) {
                  switch (_0x51928a.prev = _0x51928a.next) {
                    case 0:
                      _0x51928a.prev = 0;
                      _0x51928a.next = 3;
                      return _0x108f06.a.taskSpecialFinish({});
                    case 3:
                      _0x1abc0a.current.showModal(5000);
                      _0x4240ed.getBaseInfo("refresh");
                      _0x51928a.next = 9;
                      break;
                    case 7:
                      _0x51928a.prev = 7;
                      _0x51928a.t0 = _0x51928a.catch(0);
                    case 9:
                    case "end":
                      return _0x51928a.stop();
                  }
                }
              }, _0x38e086, null, [[0, 7]]);
            }));
            return function () {
              return _0x368314.apply(this, arguments);
            };
          }();
        Object(_0x549a9d.useEffect)(function () {
          var _0x2c4530 = {
            action: 1,
            type: 1,
            taskType: 0
          };
          _0x2c3e37.i && _0xf98b28.find(function (_0x5cd210) {
            return 116 === _0x5cd210.taskId && !_0x5cd210.finish;
          }) && Object(_0x2c3e37.f)("systemSetting", _0x2c4530, !0).then(function (_0x56fce7) {
            var _0x2a4ff4 = _0x56fce7.result;
            _0x2d9937(3 === _0x2a4ff4);
          });
          return function () {
            clearInterval(_0xcd87c0.current);
          };
        }, [_0xf98b28]);
        var _0x86c32c = function (_0x279ec1, _0x36ea41) {
            var _0x2b23bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6,
              _0x560c59 = {
                type: _0x2b23bb,
                version: _0x481a05,
                platform: _0xa4c0a3
              };
            _0x11dbd9.a.loading("内容加载中...", 5);
            _0x108f06.a.gameAdTaskId(_0x560c59).then(function (_0x5d7066) {
              var _0x1a028e = "ios" === _0x59c0af.a.utils.getUA();
              if (_0x5d7066.data.versionLimit) {
                _0x11dbd9.a.hide();
                return void _0x59c0af.a.brige.openUpdate();
              }
              if (_0x5d7066.data.iosThirdAdvertId) {
                var _0x190f7c = _0x1a028e ? _0x5d7066.data.iosThirdAdvertId : _0x5d7066.data.androidThirdAdvertId,
                  _0x24494b = {
                    platform: _0x5d7066.data.platform,
                    codeId: _0x190f7c
                  };
                if (6 === _0x2b23bb) {
                  Object(_0x2c3e37.f)("ttRewardVideoAd", _0x24494b, !0).then(function (_0x5a079a) {
                    _0x5a079a && "success" === _0x5a079a.result && (_0x36ea41 && _0x1012cc(_0x279ec1, !0), _0x11dbd9.a.hide());
                  });
                } else {
                  var _0x4f5766 = _0x279ec1 || {},
                    _0x3c5b16 = _0x4f5766.title,
                    _0xbb2d6f = _0x4f5766.leftText,
                    _0x5e2c57 = _0x4f5766.rightText,
                    _0x4535ee = _0x4f5766.finishText,
                    _0x17a8b0 = _0x4f5766.middleText;
                  Object(_0x2c3e37.f)("unionAdStream", {
                    platform: _0x5d7066.data.platform,
                    channelId: _0x190f7c,
                    duration: parseInt(_0x17a8b0),
                    taskTitle: _0x3c5b16,
                    leftText: _0xbb2d6f,
                    rightText: _0x5e2c57,
                    doneText: _0x4535ee,
                    isDone: !_0x36ea41
                  }, !0).then(function (_0x2a3e12) {
                    _0x2a3e12 && "success" === _0x2a3e12.result && (_0x36ea41 && _0x1012cc(_0x279ec1, !0), _0x11dbd9.a.hide());
                  });
                  _0x36ea41 || _0x11dbd9.a.hide();
                }
              } else {
                _0x11dbd9.a.info("暂无广告内容，请稍后再试。");
              }
            });
          },
          _0x57057a = {
            className: "taskcon"
          };
        var _0x5c3d42 = {
          className: "task-list"
        };
        var _0x505d2f = {
          ref: _0x1abc0a,
          type: 1
        };
        var _0xfcac99 = {
          ref: _0xc1286c
        };
        var _0x3d7c88 = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
        var _0x13e76c = {
          className: "checkAdViode-modal",
          visible: _0x445f79,
          transparent: !0,
          maskClosable: !1,
          maskStyle: _0x3d7c88
        };
        var _0x317ec4 = {
          className: "checkAdViode-con"
        };
        var _0x15eb92 = {
          className: "checkAdViode-title"
        };
        var _0x556782 = {
          className: "checkAdViode-btn"
        };
        Object(_0x549a9d.useEffect)(function () {
          var _0x363060 = [],
            _0x51b0d3 = [],
            _0xb609c8 = [];
          _0x4240ed.taskList.forEach(function (_0x273195) {
            var _0x153f5c = Object(_0x3066d4.l)(_0x273195);
            if (2 === _0x153f5c.taskType) {
              _0x363060.push(_0x153f5c);
              return !1;
            }
            if (3 === _0x153f5c.taskType) {
              var _0x55e945 = Object(_0x3066d4.f)(_0x153f5c);
              _0x55e945.fuPackDown ? _0xb609c8.push(_0x55e945) : _0x55e945.fuPackCanget ? _0x363060.push(_0x55e945) : _0x55e945.cdGoDown ? _0x51b0d3.push(_0x55e945) : _0x363060.push(_0x55e945);
              return !1;
            }
            _0x153f5c.finish ? _0xb609c8.push(_0x153f5c) : _0x153f5c.cd <= 0 ? _0x363060.push(_0x153f5c) : _0x153f5c.cdGoDown ? _0x51b0d3.push(_0x153f5c) : _0x363060.push(_0x153f5c);
          });
          _0x188140([].concat(_0x363060, _0x51b0d3, _0xb609c8));
        }, [_0x4240ed.taskList]);
        return _0x32671c.a.createElement("div", _0x57057a, _0x32671c.a.createElement("div", _0x5c3d42, _0xf98b28.map(function (_0x49b50a) {
          return 116 === _0x49b50a.taskId && _0xfa6b64 ? null : _0x32671c.a.createElement(_0x1f780d, {
            task: _0x49b50a,
            key: _0x49b50a.taskId,
            taskClick: _0x417add
          });
        })), _0x32671c.a.createElement(_0x1155af, _0x505d2f), _0x32671c.a.createElement(_0x5c1e12, _0xfcac99), _0x32671c.a.createElement(_0x11673a, {
          ref: _0x473af8,
          userInfo: _0x4240ed.userInfo
        }), _0x32671c.a.createElement(_0x252383, {
          ref: _0x209f18,
          taskList: !0,
          getTaskList: _0x4240ed.getTaskList,
          getBaseInfo: _0x4240ed.getBaseInfo
        }), _0x32671c.a.createElement(_0x344e11.a, _0x13e76c, _0x32671c.a.createElement("div", _0x317ec4, _0x32671c.a.createElement("p", _0x15eb92, "看短视频，必须看完，中途无法返回"), _0x32671c.a.createElement("div", _0x556782, _0x32671c.a.createElement("div", {
          className: "checkAdViode-btn-close",
          onClick: function () {
            Object(_0x3066d4.e)(1);
            _0x593408(!1);
          }
        }, "取消"), _0x32671c.a.createElement("div", {
          className: "checkAdViode-btn-goto",
          onClick: function () {
            Object(_0x3066d4.e)(1);
            _0x593408(!1);
            var _0x7c9ab1 = _0xf98b28.filter(function (_0x5c6904) {
              return 1 === _0x5c6904.taskType;
            });
            _0x86c32c(_0x7c9ab1[0], !0);
          }
        }, "去观看")))), _0x1d7446.visible && _0x32671c.a.createElement(_0x2b1d1b.a, {
          authInfo: _0x1d7446,
          closeAuth: function () {
            var _0x5d44e2 = {
              visible: !1
            };
            return _0x3426fa(_0x5d44e2);
          }
        }), _0x32671c.a.createElement(_0x5e5270.a, {
          oauthInfo: _0xce70b0,
          visible: _0x2d5937,
          onHide: function () {
            return _0x32ccff(!1);
          }
        }));
      },
      _0x4e45b3 = _0x1494b3.a.parse(location.search),
      _0x4acfc9 = Object(_0x549a9d.forwardRef)(function (_0x1448fa, _0x2b497b) {
        var _0x536373 = Object(_0x549a9d.useState)([]),
          _0x5078bd = Object(_0x487051.a)(_0x536373, 2),
          _0x4d5b53 = _0x5078bd[0],
          _0x540642 = _0x5078bd[1],
          _0x691977 = Object(_0x549a9d.useState)([]),
          _0x5dd44e = Object(_0x487051.a)(_0x691977, 2),
          _0x1fa58e = _0x5dd44e[0],
          _0xfa6302 = (_0x5dd44e[1], Object(_0x549a9d.useState)(!1)),
          _0xa3b225 = Object(_0x487051.a)(_0xfa6302, 2),
          _0x470c51 = _0xa3b225[0],
          _0x7c6072 = _0xa3b225[1],
          _0x45bf18 = function () {
            _0x7c6072(!1);
            5 === _0x1448fa.nowStep && _0x1448fa.changeNowStep(6);
          },
          _0x476bb8 = function (_0x84e4a5) {
            _0x84e4a5.currentTarget.classList.add("btn-scale");
          },
          _0x4973b7 = function (_0x248e07) {
            _0x248e07.currentTarget.classList.remove("btn-scale");
          },
          _0x410717 = function (_0x2c1c46) {
            var _0x12385b = {
              operation: "点击做任务领金币"
            };
            "refresh" !== _0x2c1c46 && (_0x11dbd9.a.loading("加载中..."), _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_goldexchange_button", _0x12385b));
            _0x108f06.a.egTaskList({
              gameType: 2,
              platform: Object(_0x2c3e37.e)(),
              version: _0x4e45b3.v || "1.0.0"
            }).then(function (_0xee1b17) {
              _0x11dbd9.a.hide();
              _0x540642(_0xee1b17.data || []);
              "refresh" !== _0x2c1c46 && (window.localStorage.setItem("egOpenTaskModal", new Date().setHours(0, 0, 0, 0)), _0x7c6072(!0));
            });
          },
          _0x49739c = Object(_0x549a9d.useCallback)(function () {
            _0x470c51 && !document.hidden && (_0x410717("refresh"), _0x1448fa.getBaseInfo("refresh"));
          }, [_0x470c51, _0x1448fa]),
          _0x4e7de9 = {
            className: "btmButtom"
          };
        var _0x54d06e = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
        var _0x378ffc = {
          popup: !0,
          animationType: "slide-up",
          className: "task-modal transparent-modal",
          visible: _0x470c51,
          transparent: !0,
          wrapClassName: "contribute-mask",
          maskStyle: _0x54d06e,
          onClose: _0x45bf18
        };
        var _0x578290 = {
          className: "taskModal-con"
        };
        var _0x370607 = {
          className: "taskModal-title"
        };
        var _0x25a09 = {
          className: "taskModal-close close-btn",
          onClick: _0x45bf18
        };
        var _0x1302e4 = {
          className: "taskModal-wrap"
        };
        var _0x5d9de7 = {
          className: "taskModal-tips"
        };
        Object(_0x549a9d.useEffect)(function () {
          document.addEventListener("visibilitychange", _0x49739c);
          return function () {
            document.removeEventListener("visibilitychange", _0x49739c);
          };
        }, [_0x49739c]);
        Object(_0x549a9d.useImperativeHandle)(_0x2b497b, function () {
          var _0x10a27d = {
            showTaskModal: _0x410717
          };
          return _0x10a27d;
        }, []);
        return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("div", _0x4e7de9, _0x32671c.a.createElement("div", {
          className: "btm-btn exchangeBtn",
          onClick: function (_0x48b835) {
            var _0x4c73b7 = {
              operation: "点击金币兑换"
            };
            _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_goldexchange_button", _0x4c73b7);
            _0x59c0af.a.appInvoke.invoke("openPage", {
              url: "".concat(window.location.origin).concat(window.location.pathname, "#/exchange"),
              backRefresh: !1,
              directType: "redirect"
            });
          },
          onTouchStart: _0x476bb8,
          onTouchEnd: _0x4973b7
        }, "兑换商城"), _0x32671c.a.createElement("div", {
          className: "btm-btn taskBtn",
          onClick: _0x410717,
          onTouchStart: _0x476bb8,
          onTouchEnd: _0x4973b7
        }, "金币任务")), _0x32671c.a.createElement(_0x344e11.a, _0x378ffc, _0x32671c.a.createElement("div", _0x578290, _0x32671c.a.createElement("div", _0x370607), _0x32671c.a.createElement("div", _0x25a09), _0x32671c.a.createElement("div", _0x1302e4, _0x32671c.a.createElement("div", _0x5d9de7, "完成任务获取的金币奖励，仅限当日领取哦"), _0x32671c.a.createElement(_0x384ed7, {
          taskList: _0x4d5b53,
          userInfo: _0x1448fa.userInfo,
          getTaskList: _0x410717,
          closeModal: _0x45bf18,
          getBaseInfo: _0x1448fa.getBaseInfo,
          list11: _0x1fa58e
        })))));
      });
    _0x2db93c(780);
    var _0x2e4a43 = Object(_0x549a9d.forwardRef)(function (_0x5b85e8, _0x2c9be7) {
      var _0x5f1982 = Object(_0x549a9d.useState)(!_0x5b85e8.signStatus),
        _0x4fc14e = Object(_0x487051.a)(_0x5f1982, 2),
        _0xa2af91 = _0x4fc14e[0],
        _0x2bce2f = _0x4fc14e[1],
        _0xd1a268 = Object(_0x549a9d.useState)(0),
        _0x4f9937 = Object(_0x487051.a)(_0xd1a268, 2),
        _0x1a1996 = _0x4f9937[0],
        _0x43ec85 = _0x4f9937[1],
        _0x46b6ca = Object(_0x549a9d.useState)([]),
        _0x555feb = Object(_0x487051.a)(_0x46b6ca, 2),
        _0x4e0c32 = _0x555feb[0],
        _0x4139e4 = _0x555feb[1],
        _0x32ef7c = Object(_0x549a9d.useState)(!1),
        _0x5cd249 = Object(_0x487051.a)(_0x32ef7c, 2),
        _0x340180 = _0x5cd249[0],
        _0x4a6113 = _0x5cd249[1],
        _0x298219 = Object(_0x549a9d.useRef)(null),
        _0x528fa8 = Object(_0x549a9d.useCallback)(function () {
          var _0x3f1106 = {
            operation: "点击每日好礼"
          };
          _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_goldexchange_button", _0x3f1106);
          _0x4e0c32.length > 0 ? _0x4a6113(!0) : _0x4cc8e2();
        }, [_0x4e0c32.length]),
        _0x4cc8e2 = function (_0x1adeda) {
          "refresh" !== _0x1adeda && _0x11dbd9.a.loading("加载中...", 0);
          _0x108f06.a.egWignDetail().then(function (_0x1e6d74) {
            _0x11dbd9.a.hide();
            _0x1e6d74.data.list.forEach(function (_0x5a3097) {
              1 === _0x5a3097.state && _0x43ec85(_0x5a3097.reward);
            });
            _0x4139e4(_0x1e6d74.data.list);
            "refresh" !== _0x1adeda && _0x4a6113(!0);
          }).catch(function () {
            _0x11dbd9.a.hide();
          });
        },
        _0x50c8da = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
      var _0xf6544d = {
        className: "dailyPrice-modal transparent-modal",
        visible: _0x340180,
        transparent: !0,
        maskClosable: !1,
        transitionName: "modal-ani",
        wrapClassName: "contribute-mask",
        maskStyle: _0x50c8da
      };
      var _0x568c7c = {
        className: "dailyPrice-con"
      };
      var _0x4a4e11 = {
        className: "dailyPrice-list"
      };
      Object(_0x549a9d.useEffect)(function () {
        _0x2bce2f(!_0x5b85e8.signStatus);
      }, [_0x5b85e8.signStatus]);
      Object(_0x549a9d.useImperativeHandle)(_0x2c9be7, function () {
        var _0x5120c3 = {
          showDailyPrice: _0x528fa8
        };
        return _0x5120c3;
      }, [_0x528fa8]);
      return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("div", {
        className: _0x5b85e8.signStatus ? "dailyPrice-icon dailyPrice-icon-btm" : "dailyPrice-icon",
        onClick: _0x528fa8
      }), _0x32671c.a.createElement(_0x344e11.a, _0xf6544d, _0x32671c.a.createElement("div", _0x568c7c, _0x32671c.a.createElement("div", {
        className: "dailyPrice-close close-btn",
        onClick: function () {
          _0x4a6113(!1);
          4 === _0x5b85e8.nowStep && _0x5b85e8.changeNowStep(5);
        }
      }), _0x32671c.a.createElement("div", _0x4a4e11, _0x4e0c32.map(function (_0x298c5d, _0x41c2a2) {
        var _0x1425cf = _0x298c5d.state,
          _0x2628fb = _0x298c5d.reward,
          _0x64b14d = {
            className: "canget-bg"
          };
        var _0x5d4eb7 = {
          className: "item-con"
        };
        var _0x17310a = {
          className: "item-title"
        };
        var _0x551fc3 = {
          className: "item-coin img-coin"
        };
        var _0x492244 = {
          className: "item-text"
        };
        var _0x4da2b3 = {
          className: "item-check"
        };
        var _0x1e7bbd = {
          className: "item-title"
        };
        var _0x1abe08 = {
          className: "item-text"
        };
        var _0x1513e4 = {
          className: "item-check"
        };
        var _0x58400b = {
          className: "item-box-bg"
        };
        var _0x4eddba = {
          className: "item-box"
        };
        return 6 !== _0x41c2a2 ? _0x32671c.a.createElement("div", {
          className: 1 === _0x1425cf ? "dailyPrice-normal dailyPrice-nowSign" : 0 === _0x1425cf ? "dailyPrice-normal dailyPrice-afterSign" : "dailyPrice-normal",
          key: _0x41c2a2
        }, _0x32671c.a.createElement("div", _0x64b14d), _0x32671c.a.createElement("div", _0x5d4eb7, _0x32671c.a.createElement("div", _0x17310a, 1 === _0x1425cf ? "可领取" : 2 === _0x1425cf ? "第".concat(_0x41c2a2 + 1, "天") : "已领取"), _0x32671c.a.createElement("div", _0x551fc3), 1 === _0x1425cf || 2 === _0x1425cf ? _0x32671c.a.createElement("div", _0x492244, Object(_0x3066d4.j)(_0x2628fb), "金币") : _0x32671c.a.createElement("div", _0x4da2b3))) : _0x32671c.a.createElement("div", {
          className: 1 === _0x1425cf ? "dailyPrice-final dailyPrice-nowSign" : 0 === _0x1425cf ? "dailyPrice-final dailyPrice-afterSign" : "dailyPrice-final",
          key: _0x41c2a2
        }, _0x32671c.a.createElement("div", _0x1e7bbd, 1 === _0x1425cf ? "可领取" : 2 === _0x1425cf ? "第7天" : "已领取"), 1 === _0x1425cf || 2 === _0x1425cf ? _0x32671c.a.createElement("div", _0x1abe08, "神秘宝箱") : _0x32671c.a.createElement("div", _0x1513e4), _0x32671c.a.createElement("div", _0x58400b), _0x32671c.a.createElement("div", _0x4eddba));
      })), _0x32671c.a.createElement("div", {
        className: _0xa2af91 ? "dailyPrice-sign" : "dailyPrice-sign dailyPrice-sign-fin",
        onClick: function () {
          _0xa2af91 && (_0x11dbd9.a.loading("签到中...", 0), _0x108f06.a.egSign().then(function (_0x58fe3d) {
            _0x11dbd9.a.hide();
            _0x2bce2f(!1);
            _0x5b85e8.getBaseInfo("refresh");
            _0x4cc8e2("refresh");
            Object(_0x3066d4.e)(0);
            _0x298219.current.showModal(_0x1a1996);
          }).catch(function () {
            _0x11dbd9.a.hide();
          }));
        },
        onTouchStart: function (_0x3fce0e) {
          _0xa2af91 && _0x3fce0e.currentTarget.classList.add("btn-scale");
        },
        onTouchEnd: function (_0x2be378) {
          _0xa2af91 && _0x2be378.currentTarget.classList.remove("btn-scale");
        }
      }))), _0x32671c.a.createElement(_0x1155af, {
        ref: _0x298219,
        type: 1
      }));
    });
    _0x2db93c(782);
    _0x2db93c(784);
    var _0x12f746 = Object(_0x549a9d.forwardRef)(function (_0x2652e6, _0x2ac1fe) {
        var _0x3f72ad = Object(_0x549a9d.useState)(!1),
          _0x55828a = Object(_0x487051.a)(_0x3f72ad, 2),
          _0x23ad43 = _0x55828a[0],
          _0x40d76a = _0x55828a[1],
          _0x54b1ec = Object(_0x549a9d.useState)(0),
          _0x18896c = Object(_0x487051.a)(_0x54b1ec, 2),
          _0x15ba67 = _0x18896c[0],
          _0x13945c = _0x18896c[1],
          _0x376c69 = Object(_0x549a9d.useState)(0),
          _0x13f16f = Object(_0x487051.a)(_0x376c69, 2),
          _0x113547 = _0x13f16f[0],
          _0x7133f1 = _0x13f16f[1],
          _0xaa2bd = Object(_0x549a9d.useState)(0),
          _0x3442c2 = Object(_0x487051.a)(_0xaa2bd, 2),
          _0x4f91ae = _0x3442c2[0],
          _0x3bd2fb = _0x3442c2[1],
          _0x3106aa = Object(_0x549a9d.useRef)(null),
          _0x4df0d0 = function (_0x49ea19, _0xe0db4b, _0x2c4f16) {
            Object(_0x3066d4.e)(0);
            _0x13945c(_0x49ea19);
            _0x7133f1(_0xe0db4b);
            _0x3bd2fb(_0x2c4f16);
            _0x40d76a(!0);
          },
          _0x543131 = {
            backgroundColor: "rgba(0,0,0,.7)"
          };
        var _0x272419 = {
          className: "levelUp-modal transparent-modal",
          visible: _0x23ad43,
          transparent: !0,
          maskClosable: !1,
          transitionName: "modal-ani",
          maskStyle: _0x543131
        };
        var _0x16edab = {
          className: "levelUp-con"
        };
        var _0x40ba35 = {
          className: "levelUp-top"
        };
        var _0x2913fd = {
          className: "levelUp-bg"
        };
        var _0x528a59 = {
          className: "levelUp-level"
        };
        var _0x2c7e2c = {
          className: "numberotf"
        };
        var _0x13126f = {
          className: "levelUp-len"
        };
        var _0x28acbb = {
          className: "levelUp-up"
        };
        var _0x5942ea = {
          className: "levelUp-coin img-coin"
        };
        var _0x32e270 = {
          className: "levelUp-lock"
        };
        Object(_0x549a9d.useImperativeHandle)(_0x2ac1fe, function () {
          var _0xc0806d = {
            showModal: _0x4df0d0
          };
          return _0xc0806d;
        });
        return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement(_0x344e11.a, _0x272419, _0x32671c.a.createElement("div", _0x16edab, _0x32671c.a.createElement("div", _0x40ba35, _0x32671c.a.createElement("div", _0x2913fd), _0x32671c.a.createElement("div", _0x528a59, _0x32671c.a.createElement("span", _0x2c7e2c, _0x15ba67), "级")), _0x32671c.a.createElement("div", _0x13126f, _0x32671c.a.createElement("p", null, "存钱罐容量上升到：", _0x32671c.a.createElement("i", _0x28acbb), Object(_0x3066d4.j)(_0x4f91ae)), _0x32671c.a.createElement("p", null, "获得奖励：", _0x32671c.a.createElement("i", _0x5942ea), _0x113547, "金币"), 2 === _0x15ba67 || 3 === _0x15ba67 || 4 === _0x15ba67 || 10 === _0x15ba67 ? _0x32671c.a.createElement("p", null, "解锁：", _0x32671c.a.createElement("i", _0x32e270), "财神位+", 3 === _0x15ba67 ? 2 : 1) : null), _0x32671c.a.createElement("div", {
          className: "levelUp-btn",
          onClick: function () {
            Object(_0x3066d4.e)(1);
            _0x40d76a(!1);
            3 === _0x15ba67 && _0x3106aa.current.showModal();
          },
          onTouchStart: function (_0x431876) {
            _0x431876.currentTarget.classList.add("btn-scale");
          },
          onTouchEnd: function (_0x2d8801) {
            _0x2d8801.currentTarget.classList.remove("btn-scale");
          }
        }))), _0x32671c.a.createElement(_0x1155af, {
          ref: _0x3106aa,
          type: 2,
          getCurrentFriends: _0x2652e6.getCurrentFriends
        }));
      }),
      _0x256ebe = ["攒金币，免费兑换豪礼", "点击金象就可以收金币啦", "金象满了后，将停止生产金币", "离开时，金象也会攒钱哦", "邀请好友，金币增长速度翻倍", "邀请新人好友，金币增长速度翻2倍"],
      _0x5a3833 = Object(_0x549a9d.forwardRef)(function (_0x256872, _0x11974a) {
        var _0x59f040 = Object(_0x549a9d.useState)(0),
          _0xeb846 = Object(_0x487051.a)(_0x59f040, 2),
          _0x4d5934 = _0xeb846[0],
          _0x4c0d4f = _0xeb846[1],
          _0x4aaa30 = Object(_0x549a9d.useState)(_0x256ebe[0]),
          _0x38ccb5 = Object(_0x487051.a)(_0x4aaa30, 2),
          _0x5245c7 = _0x38ccb5[0],
          _0x173183 = _0x38ccb5[1],
          _0x407c37 = Object(_0x549a9d.useState)(0),
          _0x5db99e = Object(_0x487051.a)(_0x407c37, 2),
          _0x97e279 = (_0x5db99e[0], _0x5db99e[1], Object(_0x549a9d.useRef)(null)),
          _0x1ae313 = Object(_0x549a9d.useRef)(!1),
          _0x4bef76 = Object(_0x549a9d.useRef)(null),
          _0x5610b9 = Object(_0x549a9d.useRef)(null),
          _0x5e64dc = Object(_0x549a9d.useRef)(null),
          _0x38f6c8 = Object(_0x549a9d.useRef)(null),
          _0xc8d7c2 = Object(_0x549a9d.useRef)(null),
          _0x48abbc = Object(_0x549a9d.useRef)(null),
          _0x11bbe7 = Object(_0x549a9d.useRef)(null),
          _0x43f6ee = function (_0x222538) {
            if (!_0x1ae313.current) {
              try {
                _0xc8d7c2.current.play().then(null, function () {});
                _0xc8d7c2.current.pause();
              } catch (_0x15b129) {
                _0xc8d7c2.current.play();
                _0xc8d7c2.current.pause();
              }
              _0x1ae313.current = !0;
              _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_getgold");
              _0x11bbe7.current.style.display = "none";
              _0x108f06.a.egCoinReceive().then(function (_0x99c498) {
                window.clearInterval(_0x48abbc.current);
                var _0x25b56f = document.querySelector(".topContent");
                document.querySelector(".friendsList").classList.remove("pauseAni");
                _0xc8d7c2.current.play();
                _0x4bef76.current.classList.add("anigo");
                _0x25b56f.classList.add("anigo");
                _0x5610b9.current = window.setTimeout(function () {
                  1 === _0x222538 && _0x256872.changeNowStep(2);
                  _0x4bef76.current.classList.remove("anigo");
                  _0x25b56f.classList.remove("anigo");
                  _0x99c498.data && _0x5e64dc.current.showModal(_0x99c498.data.level, _0x99c498.data.coinReward, _0x99c498.data.coinVolume);
                  _0x1ae313.current = !1;
                }, 2500);
                _0x256872.getBaseInfo("refresh");
              }).catch(function () {
                _0x1ae313.current = !1;
              });
            }
          },
          _0x31c6d8 = {
            className: "elephantBox",
            ref: _0x4bef76
          };
        var _0x23dd18 = {
          className: "num-wrap"
        };
        var _0x4c7ab2 = {
          className: "num-con"
        };
        var _0x4d2962 = {
          className: "num-con-progress-wrap"
        };
        var _0x13907a = {
          className: "num-con-mask"
        };
        var _0xc223b5 = {
          className: "num-con-number numbertype"
        };
        var _0x4f2298 = {
          className: "num-con-number-now numberotf"
        };
        var _0x27386b = {
          className: "num-con-gold-icon"
        };
        var _0x383144 = {
          className: "num-con-gold-icon-self"
        };
        var _0x29946f = {
          className: "num-con-gold-icon-ani-content"
        };
        var _0x39352d = {
          className: "num-con-gold-icon-item"
        };
        var _0x1421f8 = {
          className: "num-con-gold-icon-item"
        };
        var _0x2e0c1c = {
          className: "num-con-gold-icon-item"
        };
        var _0x27f9ba = {
          className: "num-con-gold-icon-item"
        };
        var _0x52ba12 = {
          className: "num-con-gold-icon-item"
        };
        var _0x33568b = {
          className: "num-con-gold-icon-item"
        };
        var _0x38c753 = {
          className: "num-con-gold-icon-item"
        };
        var _0x5cc119 = {
          className: "num-con-gold-icon-item"
        };
        var _0x239f22 = {
          ref: _0x11bbe7,
          className: "getGoldBtn-finger newcomer-finger newcomer-finger-right"
        };
        var _0x42ea41 = {
          ref: _0xc8d7c2
        };
        Object(_0x549a9d.useEffect)(function () {
          var _0x3ddd06 = 0,
            _0x7f9595 = 0,
            _0x1a029c = _0x256ebe.length;
          _0x38f6c8.current.classList.add("tipsAni");
          _0x4c0d4f(_0x256872.coinUnCollect.coin);
          _0x48abbc.current = window.setInterval(function () {
            _0x256872.coinUnCollect.coin < _0x256872.coinVolume ? (document.querySelector(".friendsList").classList.remove("pauseAni"), _0x4c0d4f(function (_0x53cc57) {
              return _0x53cc57 >= _0x256872.coinVolume ? (document.querySelector(".friendsList").classList.add("pauseAni"), _0x256872.coinVolume) : Math.min(_0x53cc57 + _0x256872.coinSecond, _0x256872.coinVolume);
            })) : (_0x4c0d4f(_0x256872.coinVolume), document.querySelector(".friendsList").classList.add("pauseAni"));
            ++_0x3ddd06 % 8 == 5 && _0x38f6c8.current.classList.remove("tipsAni");
            0 !== _0x3ddd06 && _0x3ddd06 % 8 == 0 && (_0x173183(_0x256ebe[_0x7f9595 = _0x7f9595 + 1 >= _0x1a029c ? 0 : _0x7f9595 + 1]), _0x38f6c8.current.classList.add("tipsAni"));
          }, 1000);
          return function () {
            window.clearInterval(_0x48abbc.current);
          };
        }, [_0x256872.coinSecond, _0x256872.coinUnCollect, _0x256872.coinVolume]);
        Object(_0x549a9d.useEffect)(function () {
          "ios" === _0x256872.platform && document.querySelector(".home").classList.add("topfix");
          return function () {
            window.clearInterval(_0x5610b9.current);
          };
        }, [_0x256872.platform]);
        Object(_0x549a9d.useImperativeHandle)(_0x11974a, function () {
          var _0x558d7b = {
            getGoldClick: _0x43f6ee
          };
          return _0x558d7b;
        }, []);
        return _0x32671c.a.createElement("div", _0x31c6d8, _0x32671c.a.createElement("div", {
          className: "tips",
          ref: _0x38f6c8
        }, _0x5245c7), _0x32671c.a.createElement("div", {
          className: "elephant",
          onClick: _0x43f6ee
        }), _0x32671c.a.createElement("div", _0x23dd18, _0x32671c.a.createElement("div", _0x4c7ab2, _0x32671c.a.createElement("div", _0x4d2962, _0x32671c.a.createElement("div", {
          className: "num-con-progress",
          style: {
            width: _0x4d5934 / _0x256872.coinVolume * 100 + "%"
          }
        })), _0x32671c.a.createElement("div", _0x13907a), _0x32671c.a.createElement("div", _0xc223b5, _0x32671c.a.createElement("span", _0x4f2298, _0x4d5934), _0x32671c.a.createElement("div", _0x27386b, _0x32671c.a.createElement("div", _0x383144), _0x32671c.a.createElement("div", _0x29946f, _0x32671c.a.createElement("div", _0x39352d), _0x32671c.a.createElement("div", _0x1421f8), _0x32671c.a.createElement("div", _0x2e0c1c), _0x32671c.a.createElement("div", _0x27f9ba), _0x32671c.a.createElement("div", _0x52ba12), _0x32671c.a.createElement("div", _0x33568b), _0x32671c.a.createElement("div", _0x38c753), _0x32671c.a.createElement("div", _0x5cc119))), _0x32671c.a.createElement("span", null, " / 容量", Object(_0x3066d4.j)(_0x256872.coinVolume), "金币")))), _0x32671c.a.createElement("div", {
          ref: _0x97e279,
          className: "getGold",
          onTouchStart: function () {
            _0x97e279.current.classList.add("getGold-active");
          },
          onTouchEnd: function () {
            _0x97e279.current.classList.remove("getGold-active");
          },
          onClick: _0x43f6ee
        }, _0x32671c.a.createElement("div", _0x239f22)), _0x32671c.a.createElement(_0x12f746, {
          ref: _0x5e64dc,
          getCurrentFriends: _0x256872.getCurrentFriends
        }), _0x32671c.a.createElement("audio", _0x42ea41, _0x32671c.a.createElement("source", {
          src: _0x3066d4.h + "getCoinMusic.ogg",
          type: "audio/ogg"
        }), _0x32671c.a.createElement("source", {
          src: _0x3066d4.h + "getCoinMusic.mp3",
          type: "audio/mpeg"
        })));
      });
    _0x2db93c(786);
    _0x2db93c(788);
    var _0x592f29 = function (_0x55ae4b) {
        var _0x13cc7b = _0x55ae4b.item,
          _0x1fe0b8 = Object(_0x549a9d.useState)(0),
          _0x1b3d7d = Object(_0x487051.a)(_0x1fe0b8, 2),
          _0x510750 = _0x1b3d7d[0],
          _0x25e258 = _0x1b3d7d[1],
          _0x1addb7 = Object(_0x549a9d.useRef)(null),
          _0x195dbe = {
            className: "friendsItem"
          };
        var _0x39dc21 = {
          className: "friends-had"
        };
        var _0x1a3367 = {
          className: "friends-circ"
        };
        var _0x161b6c = {
          width: "3rem",
          height: "3rem",
          viewBox: "0 0 100 100",
          className: "friends-circ-svg"
        };
        var _0x2f78e6 = {
          cx: "50",
          cy: "50",
          r: "46.875",
          strokeWidth: "6.25",
          stroke: "#FABF84",
          fill: "none"
        };
        var _0x35699a = {
          cx: "50",
          cy: "50",
          r: "46.875",
          strokeWidth: "6.25",
          stroke: "#FFE75D",
          fill: "none",
          className: "friends-svg-circle"
        };
        var _0x3457c2 = {
          className: "friends-circ-coin img-coin"
        };
        var _0x810265 = {
          className: "friends-len"
        };
        var _0x551dd3 = {
          className: "friends-num"
        };
        var _0x4cb86f = {
          className: "friends-coin img-coin"
        };
        var _0x14060e = {
          className: "friends-circ"
        };
        var _0x5588c7 = {
          className: "friends-circ-coin img-coin"
        };
        var _0x33d35d = {
          className: "friends-len"
        };
        var _0x56f03c = {
          className: "friends-len friends-invite"
        };
        Object(_0x549a9d.useEffect)(function () {
          if (!_0x13cc7b.self && _0x13cc7b.friend) {
            var _0x1bd21f = _0x13cc7b.friend.timeRemain;
            _0x25e258(_0x1bd21f);
            _0x1addb7.current = window.setInterval(function () {
              --_0x1bd21f <= 0 && (window.clearInterval(_0x1addb7.current), _0x55ae4b.getCurrentFriends("refresh"));
              _0x25e258(_0x1bd21f);
            }, 1000);
          }
          return function () {
            window.clearInterval(_0x1addb7.current);
          };
        }, [_0x13cc7b, _0x55ae4b]);
        return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("div", _0x195dbe, _0x13cc7b.friend ? _0x32671c.a.createElement("div", _0x39dc21, _0x32671c.a.createElement("div", _0x1a3367, _0x32671c.a.createElement("img", {
          className: "friends-header",
          src: _0x13cc7b.self ? _0x55ae4b.userInfo.userInfo.headPic : _0x13cc7b.friend.picUrl || _0x3066d4.h + "logo.png",
          alt: ""
        }), _0x32671c.a.createElement("svg", _0x161b6c, _0x32671c.a.createElement("circle", _0x2f78e6), _0x32671c.a.createElement("circle", _0x35699a)), _0x32671c.a.createElement("i", _0x3457c2)), _0x32671c.a.createElement("div", _0x810265, _0x13cc7b.self ? "我" : Object(_0x3066d4.n)(_0x510750)), _0x32671c.a.createElement("div", _0x551dd3, _0x32671c.a.createElement("i", _0x4cb86f), "+", _0x13cc7b.self ? "1" : _0x13cc7b.friend.mammonCoinBless)) : _0x32671c.a.createElement("div", {
          className: "friends-null",
          onClick: function () {
            _0x13cc7b.friend || (_0x13cc7b.level > _0x55ae4b.level ? _0x11dbd9.a.info("".concat(_0x13cc7b.level, "级才能开启哦~，快去收金币升级吧！"), 2) : (_0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_invite_friends"), _0x55ae4b.showShareModal()));
          }
        }, _0x32671c.a.createElement("div", _0x14060e, _0x32671c.a.createElement("i", _0x5588c7), _0x32671c.a.createElement("div", {
          className: _0x13cc7b.level > _0x55ae4b.level ? "friends-circ-lock" : "friends-circ-invite"
        })), _0x13cc7b.level > _0x55ae4b.level ? _0x32671c.a.createElement("div", _0x33d35d, _0x13cc7b.level, "级开启") : _0x32671c.a.createElement("div", _0x56f03c, "去邀请"))));
      },
      _0x1fae8b = function (_0x403aba) {
        var _0x4b86f7 = Object(_0x549a9d.useState)([]),
          _0x2d5c32 = Object(_0x487051.a)(_0x4b86f7, 2),
          _0x473221 = _0x2d5c32[0],
          _0x3ed2fd = _0x2d5c32[1],
          _0x498972 = Object(_0x549a9d.useState)(1),
          _0x43e7f8 = Object(_0x487051.a)(_0x498972, 2),
          _0x4b2c32 = _0x43e7f8[0],
          _0x4ca7b7 = _0x43e7f8[1],
          _0x1a82e5 = Object(_0x549a9d.useRef)(null),
          _0x2c840a = Object(_0x549a9d.useCallback)(function () {
            if (_0x403aba.userInfo) {
              var _0x3c3bf6 = {
                self: !1,
                level: 2,
                friend: null
              };
              var _0xf2c35d = {
                self: !1,
                level: 3,
                friend: null
              };
              var _0x53b711 = {
                self: !1,
                level: 3,
                friend: null
              };
              var _0x5a3086 = {
                self: !1,
                level: 4,
                friend: null
              };
              var _0x36da7b = {
                self: !1,
                level: 10,
                friend: null
              };
              var _0x2844d8 = [_0x3c3bf6, _0xf2c35d, _0x53b711, _0x5a3086, _0x36da7b],
                _0x2879fb = {
                  self: !0,
                  level: 0,
                  friend: !0
                };
              _0x403aba.currentFriends.list && _0x2844d8.map(function (_0x42c1ad, _0x1e0961) {
                _0x403aba.currentFriends.list[_0x1e0961] && (_0x42c1ad.friend = _0x403aba.currentFriends.list[_0x1e0961]);
                return _0x42c1ad;
              });
              _0x2844d8.unshift(_0x2879fb);
              _0x4ca7b7(_0x403aba.coinSecond);
              _0x3ed2fd(_0x2844d8);
            }
          }, [_0x403aba.coinSecond, _0x403aba.currentFriends, _0x403aba.userInfo]),
          _0x6d789f = function () {
            _0x1a82e5.current.showModal(5, 3);
          },
          _0x2829c0 = {
            className: "friendsList pauseAni"
          };
        var _0x12df63 = {
          className: "friendsList-con"
        };
        var _0x3c80a6 = {
          className: "friendsList-cur"
        };
        Object(_0x549a9d.useEffect)(function () {
          _0x2c840a();
        }, [_0x2c840a]);
        return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("div", _0x2829c0, _0x32671c.a.createElement("div", _0x12df63, _0x473221.map(function (_0x2b70b5, _0x4464d8) {
          var _0x53fad1 = {
            userInfo: _0x403aba.userInfo,
            item: _0x2b70b5,
            key: _0x4464d8,
            level: _0x403aba.level,
            showShareModal: _0x6d789f,
            getCurrentFriends: _0x403aba.getCurrentFriends
          };
          return _0x32671c.a.createElement(_0x592f29, _0x53fad1);
        })), _0x32671c.a.createElement("div", _0x3c80a6, "当前赚钱速度：", _0x4b2c32, "倍 邀请好友赚钱速度加倍哦～")), _0x32671c.a.createElement(_0x11673a, {
          ref: _0x1a82e5,
          userInfo: _0x403aba.userInfo
        }));
      };
    _0x2db93c(790);
    var _0x3012ab = Object(_0x549a9d.forwardRef)(function (_0xe93e8, _0x25bab8) {
      var _0x47a5c8 = Object(_0x549a9d.useState)(0),
        _0x350d77 = Object(_0x487051.a)(_0x47a5c8, 2),
        _0x11321c = _0x350d77[0],
        _0x51f804 = _0x350d77[1],
        _0x48523a = Object(_0x549a9d.useRef)(null),
        _0x3d0622 = Object(_0x549a9d.useCallback)(function () {
          window.clearInterval(_0x48523a.current);
          _0x51f804(100);
          window.setTimeout(function () {
            _0xe93e8.closeLoading();
          }, 200);
        }, [_0xe93e8]),
        _0x44e6e5 = {
          className: "loading"
        };
      var _0x16d15a = {
        className: "loading-img"
      };
      var _0x1fde4d = {
        src: _0x3066d4.h + "img_load_chunjie.png",
        alt: ""
      };
      var _0x157ea3 = {
        className: "loading-wrap"
      };
      var _0x31da6f = {
        className: "loading-con"
      };
      var _0x1e1899 = {
        className: "loading-con-progress-wrap"
      };
      var _0x1f4577 = {
        width: _0x11321c + "%"
      };
      var _0x3f6cc3 = {
        className: "loading-con-progress",
        style: _0x1f4577
      };
      var _0x33ea4f = {
        className: "loading-con-mask"
      };
      var _0x4b21e9 = {
        className: "loading-elep"
      };
      var _0x434dec = {
        left: _0x11321c + "%"
      };
      var _0x303e59 = {
        className: "loading-elep-con",
        style: _0x434dec
      };
      var _0x3b2a63 = {
        left: _0x11321c + "%"
      };
      var _0x4b27c9 = {
        className: "loading-elep-num numbertype",
        style: _0x3b2a63
      };
      Object(_0x549a9d.useEffect)(function () {
        var _0x52b1c3 = 0;
        _0x48523a.current = window.setInterval(function () {
          _0x52b1c3 >= 99 && window.clearInterval(_0x48523a.current);
          _0x51f804(_0x52b1c3);
          _0x52b1c3++;
        }, 17);
        return function () {
          window.clearInterval(_0x48523a.current);
        };
      }, []);
      Object(_0x549a9d.useImperativeHandle)(_0x25bab8, function () {
        var _0x3f179c = {
          endLoading: _0x3d0622
        };
        return _0x3f179c;
      }, [_0x3d0622]);
      return _0x32671c.a.createElement("div", _0x44e6e5, _0x32671c.a.createElement("div", _0x16d15a, _0x32671c.a.createElement("img", _0x1fde4d)), _0x32671c.a.createElement("div", _0x157ea3, _0x32671c.a.createElement("div", _0x31da6f, _0x32671c.a.createElement("div", _0x1e1899, _0x32671c.a.createElement("div", _0x3f6cc3)), _0x32671c.a.createElement("div", _0x33ea4f)), _0x32671c.a.createElement("div", _0x4b21e9, _0x32671c.a.createElement("div", _0x303e59), _0x32671c.a.createElement("div", _0x4b27c9, _0x11321c, "%"))));
    });
    _0x2db93c(792);
    var _0x2a59fb = function (_0x449fda, _0xe8a284) {
        var _0x5b493f = Object(_0x549a9d.useState)(null),
          _0x5c5f2d = Object(_0x487051.a)(_0x5b493f, 2),
          _0x3b2af5 = _0x5c5f2d[0],
          _0x4d9ef6 = _0x5c5f2d[1],
          _0x2f18ca = Object(_0x549a9d.useState)([]),
          _0x5543e2 = Object(_0x487051.a)(_0x2f18ca, 2),
          _0x37c212 = _0x5543e2[0],
          _0x40e7e0 = _0x5543e2[1],
          _0x4f89ab = Object(_0x549a9d.useCallback)(function () {
            _0x449fda.v && _0x108f06.a.egBannerList({
              curVersion: _0x449fda.v
            }).then(function (_0x39a90d) {
              _0x4d9ef6(_0x39a90d.data.bar);
              _0x40e7e0(_0x39a90d.data.rightIconList.slice(0, 3));
            });
          }, [_0x449fda.v]),
          _0x24f6d5 = function (_0x4385b3, _0x3d33eb, _0x170f25) {
            var _0x26dc9c = {
              location: "中间",
              title: _0x4385b3.title
            };
            "center" === _0x3d33eb ? _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_banner_icon", _0x26dc9c) : "right" === _0x3d33eb && _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_banner_icon", {
              location: _0x386bb0(_0x170f25),
              title: _0x4385b3.title
            });
            _0x59c0af.a.brige.openWebview(_0x4385b3.url);
          },
          _0x386bb0 = function (_0x16c400) {
            var _0x477577 = "";
            switch (_0x16c400) {
              case 0:
                _0x477577 = "右1";
                break;
              case 1:
                _0x477577 = "右2";
                break;
              case 2:
                _0x477577 = "右3";
                break;
              default:
                _0x477577 = "";
            }
            return _0x477577;
          },
          _0x195755 = {
            className: "right-banner"
          };
        Object(_0x549a9d.useEffect)(function () {
          _0x4f89ab();
        }, [_0x4f89ab]);
        return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x3b2af5 && _0x32671c.a.createElement("div", {
          className: "center-banner",
          onClick: function () {
            return _0x24f6d5(_0x3b2af5, "center");
          }
        }, _0x32671c.a.createElement("img", {
          src: _0x3b2af5.picUrl,
          alt: ""
        })), _0x37c212.length > 0 && _0x32671c.a.createElement("div", _0x195755, _0x37c212.map(function (_0x5e3956, _0x59511f) {
          return _0x32671c.a.createElement("div", {
            key: _0x59511f,
            className: "right-banner-item",
            onClick: function () {
              return _0x24f6d5(_0x5e3956, "right", _0x59511f);
            }
          }, _0x32671c.a.createElement("img", {
            src: _0x5e3956.picUrl,
            alt: ""
          }));
        })));
      },
      _0x3c2751 = (_0x2db93c(794), !1);
    Object(_0x549a9d.forwardRef)(function (_0x344980, _0x59ca94) {
      var _0x2b33fa = Object(_0x549a9d.useState)(!1),
        _0x3fdd78 = Object(_0x487051.a)(_0x2b33fa, 2),
        _0x243aaf = _0x3fdd78[0],
        _0x468716 = _0x3fdd78[1],
        _0x2e27c2 = Object(_0x549a9d.useState)([]),
        _0x24a0ac = Object(_0x487051.a)(_0x2e27c2, 2),
        _0x477109 = _0x24a0ac[0],
        _0x484521 = _0x24a0ac[1],
        _0x4d24e7 = Object(_0x549a9d.useState)(0),
        _0x10765b = Object(_0x487051.a)(_0x4d24e7, 2),
        _0xf881d8 = (_0x10765b[0], _0x10765b[1]),
        _0x131fc0 = Object(_0x549a9d.useRef)(null),
        _0x1c9c27 = Object(_0x549a9d.useRef)(null),
        _0x4f37f = Object(_0x549a9d.useCallback)(function () {
          var _0x25fba0 = {
            operation: "点击新人有礼"
          };
          _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_goldexchange_button", _0x25fba0);
          _0x4651bc();
        }, []),
        _0x35bd19 = function () {
          _0x3c2751 && (_0x344980.getBaseInfo("refresh"), _0x3c2751 = !1);
          7 === _0x344980.nowStep && _0x344980.changeNowStep(100);
          _0x468716(!1);
        },
        _0x4651bc = function (_0x5b4f3c) {
          "refresh" !== _0x5b4f3c && _0x11dbd9.a.loading("加载中...", 0);
          _0x108f06.a.egWelfareList().then(function (_0x764131) {
            _0x11dbd9.a.hide();
            _0x484521(_0x764131.data.list);
            "refresh" !== _0x5b4f3c && _0x468716(!0);
          }).catch(function () {
            _0x11dbd9.a.hide();
          });
        },
        _0x356f9c = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
      var _0x355a25 = {
        className: "newAward-modal transparent-modal",
        visible: _0x243aaf,
        transparent: !0,
        maskClosable: !1,
        transitionName: "modal-ani",
        wrapClassName: "contribute-mask",
        maskStyle: _0x356f9c
      };
      var _0x3ef26d = {
        className: "newAward-con"
      };
      var _0x1026b4 = {
        className: "newAward-close close-btn",
        onClick: _0x35bd19
      };
      var _0x21e20b = {
        className: "newAward-list"
      };
      Object(_0x549a9d.useImperativeHandle)(_0x59ca94, function () {
        var _0x386b8c = {
          showNewAward: _0x4f37f
        };
        return _0x386b8c;
      }, [_0x4f37f]);
      return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("div", {
        className: "newAward-icon",
        onClick: _0x4f37f
      }), _0x32671c.a.createElement(_0x344e11.a, _0x355a25, _0x32671c.a.createElement("div", _0x3ef26d, _0x32671c.a.createElement("div", _0x1026b4), _0x32671c.a.createElement("ul", _0x21e20b, _0x477109.map(function (_0x4f26f2, _0x2763e1) {
        var _0x42f0b8 = {
          className: 2 === _0x4f26f2.progressState ? "newAward-item newAward-item-fin" : "newAward-item",
          key: _0x2763e1
        };
        var _0xd3e502 = {
          className: "newAward-info"
        };
        var _0x3a48a8 = {
          className: "newAward-info-title"
        };
        var _0x28cde0 = {
          className: "newAward-info-desc"
        };
        var _0x164f1d = {
          className: "img-coin"
        };
        return _0x32671c.a.createElement("li", _0x42f0b8, _0x32671c.a.createElement("div", _0xd3e502, _0x32671c.a.createElement("div", _0x3a48a8, _0x4f26f2.name), _0x32671c.a.createElement("div", _0x28cde0, "奖励：", _0x32671c.a.createElement("i", _0x164f1d), _0x4f26f2.coinReward, "金币")), _0x32671c.a.createElement("div", {
          className: 0 === _0x4f26f2.progressState ? "newAward-btn" : 1 === _0x4f26f2.progressState ? "newAward-btn newAward-btn-get" : "newAward-btn newAward-btn-fin",
          onClick: function () {
            return function (_0x444ca1) {
              var _0x2928e3 = {
                type: "完成一次升级",
                operation: "去完成"
              };
              var _0x1f5e7b = {
                type: "完成一次金币任务",
                operation: "去完成"
              };
              var _0x50e1cf = {
                type: "完成一次邀请",
                operation: "去完成"
              };
              var _0x5a0596 = {
                type: "逛逛金币兑换",
                operation: "去完成"
              };
              2 !== _0x444ca1.progressState && (0 === _0x444ca1.progressState ? (_0x35bd19(), 1 === _0x444ca1.type && (_0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_newuser_gift", _0x2928e3), _0x344980.getGold(_0x344980.nowStep)), 2 === _0x444ca1.type && (_0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_newuser_gift", _0x1f5e7b), _0x344980.openTask()), 3 === _0x444ca1.type && (_0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_newuser_gift", _0x50e1cf), _0x1c9c27.current.showModal()), 4 === _0x444ca1.type && (_0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_newuser_gift", _0x5a0596), _0x59c0af.a.appInvoke.invoke("openPage", {
                url: "".concat(window.location.origin).concat(window.location.pathname, "#/exchange"),
                backRefresh: !1,
                directType: "redirect"
              }))) : 1 === _0x444ca1.progressState && (_0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_newuser_gift", {
                type: 1 === _0x444ca1.type ? "完成一次升级" : 2 === _0x444ca1.type ? "完成一次金币任务" : 3 === _0x444ca1.type ? "完成一次邀请" : "逛逛金币兑换",
                operation: "领取"
              }), _0x11dbd9.a.loading("领取中...", 0), _0x108f06.a.egWelfareReceive({
                type: _0x444ca1.type
              }).then(function (_0x382f3b) {
                _0x11dbd9.a.hide();
                _0x3c2751 = !0;
                _0xf881d8(_0x444ca1.coinReward);
                _0x4651bc("refresh");
                Object(_0x3066d4.e)(0);
                _0x131fc0.current.showModal(_0x444ca1.coinReward);
              }).catch(function () {
                _0x11dbd9.a.hide();
              })));
            }(_0x4f26f2);
          },
          onTouchStart: function (_0x1498b2) {
            return function (_0x25a3e0, _0x1cdafc) {
              2 !== _0x1cdafc.progressState && _0x25a3e0.currentTarget.classList.add("btn-scale");
            }(_0x1498b2, _0x4f26f2);
          },
          onTouchEnd: function (_0x3f6ed0) {
            return function (_0xb65326, _0x5ee32d) {
              2 !== _0x5ee32d.progressState && _0xb65326.currentTarget.classList.remove("btn-scale");
            }(_0x3f6ed0, _0x4f26f2);
          }
        }, 2 === _0x4f26f2.progressState ? "已完成" : ""));
      })))), _0x32671c.a.createElement(_0x1155af, {
        ref: _0x131fc0,
        type: 1
      }), _0x32671c.a.createElement(_0x11673a, {
        ref: _0x1c9c27,
        userInfo: _0x344980.userInfo
      }));
    });
    _0x2db93c(796);
    _0x2db93c(798);
    var _0x1fe68c = Object(_0x549a9d.forwardRef)(function (_0xccf6dd, _0x1e7ab0) {
        var _0x950c83 = Object(_0x549a9d.useState)(!1),
          _0xbc900 = Object(_0x487051.a)(_0x950c83, 2),
          _0x5eaf80 = _0xbc900[0],
          _0x27f417 = _0xbc900[1],
          _0x3b9856 = Object(_0x549a9d.useState)(1),
          _0x22640d = Object(_0x487051.a)(_0x3b9856, 2),
          _0x3e2e26 = _0x22640d[0],
          _0x2968b6 = _0x22640d[1],
          _0x56737e = Object(_0x549a9d.useCallback)(function (_0x1ea1c8) {
            window.localStorage.setItem("egOutModalShow", new Date().setHours(0, 0, 0, 0));
            _0x2968b6(_0x1ea1c8);
            _0x27f417(!0);
          }, []),
          _0x45bf7e = function () {
            var _0x4ca99c = {
              type: 1 === _0x3e2e26 ? "新人礼包" : 2 === _0x3e2e26 ? "签到" : "任务",
              operation: "暂时退出"
            };
            _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_newuser_guide", _0x4ca99c);
            _0x27f417(!1);
          },
          _0x7d71a0 = function (_0x3b0258) {
            _0x3b0258.currentTarget.classList.add("btn-scale");
          },
          _0x5ef63b = function (_0x1f7dbe) {
            _0x1f7dbe.currentTarget.classList.remove("btn-scale");
          },
          _0x3d25ad = {
            backgroundColor: "rgba(0,0,0,.7)"
          };
        var _0x1348e9 = {
          className: "out-modal transparent-modal",
          visible: _0x5eaf80,
          transparent: !0,
          maskClosable: !1,
          transitionName: "modal-ani",
          maskStyle: _0x3d25ad
        };
        var _0x31b934 = {
          className: "outModal-con"
        };
        var _0x31809c = {
          className: "outModal-head"
        };
        var _0x3815fd = {
          className: "outModal-close close-btn",
          onClick: _0x45bf7e
        };
        var _0xd6cfd1 = {
          className: "outModal-wrap"
        };
        var _0x2b5713 = {
          className: "outModal-wrap-con"
        };
        var _0x106899 = {
          className: "outModal-title"
        };
        var _0x2a0873 = {
          className: "outModal-info"
        };
        var _0x1fdd71 = {
          className: "outModal-btn"
        };
        Object(_0x549a9d.useImperativeHandle)(_0x1e7ab0, function () {
          var _0x3b9a60 = {
            showModal: _0x56737e
          };
          return _0x3b9a60;
        }, [_0x56737e]);
        return _0x32671c.a.createElement(_0x344e11.a, _0x1348e9, _0x32671c.a.createElement("div", _0x31b934, _0x32671c.a.createElement("div", _0x31809c), _0x32671c.a.createElement("div", _0x3815fd), _0x32671c.a.createElement("div", _0xd6cfd1, _0x32671c.a.createElement("div", _0x2b5713, _0x32671c.a.createElement("div", _0x106899, "确认退出吗？"), _0x32671c.a.createElement("div", _0x2a0873, 1 === _0x3e2e26 ? _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("p", null, "有新人好礼 ", _0x32671c.a.createElement("span", null, "10000金币"), " 忘记"), _0x32671c.a.createElement("p", null, "领取啦，快去查收一下吧")) : 2 === _0x3e2e26 ? _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("p", null, "有签到奖励 ", _0x32671c.a.createElement("span", null, "10000金币"), " 忘记"), _0x32671c.a.createElement("p", null, "领取啦，快去查收一下吧")) : 3 === _0x3e2e26 ? _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("p", null, "有每日任务奖励 ", _0x32671c.a.createElement("span", null, "百万金币"), " 忘记"), _0x32671c.a.createElement("p", null, "领取啦，快去查收一下吧")) : ""), _0x32671c.a.createElement("div", _0x1fdd71, _0x32671c.a.createElement("div", {
          className: "outModal-do",
          onClick: function () {
            var _0x4cc939 = {
              type: 1 === _0x3e2e26 ? "新人礼包" : 2 === _0x3e2e26 ? "签到" : "任务",
              operation: "去领取"
            };
            _0x45bf7e();
            _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_newuser_guide", _0x4cc939);
            1 === _0x3e2e26 && _0xccf6dd.showNewAward();
            2 === _0x3e2e26 && _0xccf6dd.showDailyPrice();
            3 === _0x3e2e26 && _0xccf6dd.openTask();
          },
          onTouchStart: _0x7d71a0,
          onTouchEnd: _0x5ef63b
        }), _0x32671c.a.createElement("div", {
          className: "outModal-out",
          onClick: function () {
            _0x59c0af.a.brige.closeWebview();
          },
          onTouchStart: _0x7d71a0,
          onTouchEnd: _0x5ef63b
        }))))));
      }),
      _0x12c879 = function (_0x40e653) {
        var _0x2f95ff = Object(_0x549a9d.useRef)(null),
          _0x23818b = {
            className: "topContent"
          };
        var _0x3563b0 = {
          className: "exp"
        };
        var _0xd5ced7 = {
          className: "exp-progress"
        };
        var _0x1e69b1 = {
          className: "exp-progress-con"
        };
        var _0xf5c4d2 = {
          className: "exp-progress-mask"
        };
        var _0x4244cb = {
          className: "exp-progress-number numberotf numbertype"
        };
        var _0x2b9efc = {
          className: "exp-level numberotf"
        };
        var _0x2261a0 = {
          className: "gold"
        };
        var _0x55e170 = {
          className: "gold-bg"
        };
        var _0x30ef8c = {
          className: "gold-number numberotf numbertype"
        };
        var _0x37a191 = {
          className: "gold-img"
        };
        return _0x32671c.a.createElement("div", _0x23818b, _0x32671c.a.createElement("div", {
          className: "back",
          onClick: function () {
            var _0x44a3e8 = +window.localStorage.getItem("egOutModalShow"),
              _0x41ed94 = +window.localStorage.getItem("egOpenTaskModal");
            !_0x44a3e8 || Date.now() - _0x44a3e8 >= 86400000 ? _0x40e653.welfareReceive ? _0x40e653.signStatus ? !_0x41ed94 || Date.now() - _0x41ed94 >= 86400000 ? _0x2f95ff.current.showModal(3) : _0x59c0af.a.brige.closeWebview() : _0x2f95ff.current.showModal(2) : _0x2f95ff.current.showModal(1) : _0x59c0af.a.brige.closeWebview();
          }
        }), _0x32671c.a.createElement("div", _0x3563b0, _0x32671c.a.createElement("div", _0xd5ced7, _0x32671c.a.createElement("div", _0x1e69b1, _0x32671c.a.createElement("div", {
          className: "exp-progress-pro",
          style: {
            width: 60 === _0x40e653.level ? "100%" : _0x40e653.score
          }
        }), _0x32671c.a.createElement("div", _0xf5c4d2), _0x32671c.a.createElement("div", _0x4244cb, 60 === _0x40e653.level ? "100%" : _0x40e653.score))), _0x32671c.a.createElement("div", _0x2b9efc, _0x40e653.level)), _0x32671c.a.createElement("div", _0x2261a0, _0x32671c.a.createElement("div", _0x55e170, _0x32671c.a.createElement("div", _0x30ef8c, _0x32671c.a.createElement("span", null, Object(_0x3066d4.i)(_0x40e653.coinCurrent)))), _0x32671c.a.createElement("div", _0x37a191), _0x32671c.a.createElement("div", {
          className: "gold-exchange",
          onClick: function () {
            var _0x9df9c6 = {
              operation: "点击兑换"
            };
            _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_goldexchange_button", _0x9df9c6);
            _0x59c0af.a.appInvoke.invoke("openPage", {
              url: "".concat(window.location.origin).concat(window.location.pathname, "#/exchange"),
              backRefresh: !1,
              directType: "redirect"
            });
          },
          onTouchStart: function (_0x18e5ec) {
            _0x18e5ec.currentTarget.classList.add("btn-scale");
          },
          onTouchEnd: function (_0x5a3a8c) {
            _0x5a3a8c.currentTarget.classList.remove("btn-scale");
          }
        })), _0x32671c.a.createElement(_0x1fe68c, {
          ref: _0x2f95ff,
          showNewAward: _0x40e653.showNewAward,
          showDailyPrice: _0x40e653.showDailyPrice,
          openTask: _0x40e653.openTask
        }));
      };
    _0x2db93c(800);
    _0x2db93c(802);
    var _0x596afe = Object(_0x549a9d.forwardRef)(function (_0x2d8222, _0x4ed50e) {
        var _0x3b4585 = Object(_0x549a9d.useState)(!1),
          _0xa6959f = Object(_0x487051.a)(_0x3b4585, 2),
          _0x4df433 = _0xa6959f[0],
          _0x2cf16a = _0xa6959f[1],
          _0x14da8b = Object(_0x549a9d.useState)(0),
          _0xe641b5 = Object(_0x487051.a)(_0x14da8b, 2),
          _0x351b61 = _0xe641b5[0],
          _0x828983 = _0xe641b5[1],
          _0x3c08e8 = Object(_0x549a9d.useState)(!1),
          _0x33c8c8 = Object(_0x487051.a)(_0x3c08e8, 2),
          _0x405749 = _0x33c8c8[0],
          _0x482f8e = _0x33c8c8[1],
          _0x504390 = Object(_0x549a9d.useState)(""),
          _0x5e7e71 = Object(_0x487051.a)(_0x504390, 2),
          _0x4f8423 = _0x5e7e71[0],
          _0x5bfab0 = _0x5e7e71[1],
          _0x1188b4 = Object(_0x549a9d.useState)(""),
          _0x1dff6e = Object(_0x487051.a)(_0x1188b4, 2),
          _0x4769ec = _0x1dff6e[0],
          _0x22ae04 = _0x1dff6e[1],
          _0x42151c = Object(_0x549a9d.useState)(""),
          _0x2fe45e = Object(_0x487051.a)(_0x42151c, 2),
          _0x579426 = _0x2fe45e[0],
          _0x3a2807 = _0x2fe45e[1],
          _0x23d951 = Object(_0x549a9d.useState)(0),
          _0x2b6ec7 = Object(_0x487051.a)(_0x23d951, 2),
          _0x226ce9 = _0x2b6ec7[0],
          _0x3a3ec3 = _0x2b6ec7[1],
          _0x5e880c = Object(_0x549a9d.useState)(0),
          _0x3e6be2 = Object(_0x487051.a)(_0x5e880c, 2),
          _0x197d0a = _0x3e6be2[0],
          _0x5603e0 = _0x3e6be2[1],
          _0x22df7f = Object(_0x549a9d.useState)(0),
          _0x3c46c1 = Object(_0x487051.a)(_0x22df7f, 2),
          _0x235917 = _0x3c46c1[0],
          _0x133a97 = _0x3c46c1[1],
          _0x4de42c = function (_0x5ccb9f, _0x3b0163) {
            _0x828983(_0x3b0163);
            _0x5bfab0(_0x5ccb9f.picUrl);
            _0x22ae04(_0x5ccb9f.title);
            _0x3a2807(_0x5ccb9f.description);
            _0x3a3ec3(_0x5ccb9f.reward);
            _0x5603e0(_0x5ccb9f.holdTime);
            _0x133a97(_0x5ccb9f.id);
            Object(_0x3066d4.e)(0);
            _0x2cf16a(!0);
            _0x59c0af.a.request.trackLog("click_h5activity_achievement_taskpage_decoration_operation", {
              type: 1 === _0x3b0163 ? "分享" : "收下",
              title: _0x5ccb9f.title
            });
          },
          _0x1ced4d = function () {
            _0x2cf16a(!1);
            _0x482f8e(!1);
            Object(_0x3066d4.e)(1);
          },
          _0x562061 = function () {
            _0x482f8e(!0);
          },
          _0x309f6c = function (_0x348573) {
            var _0x9ef0cf = {
              type: "jxzq"
            };
            _0x11dbd9.a.loading("加载中...");
            _0x108f06.a.getDynamicDomain(_0x9ef0cf).then(function (_0x298242) {
              _0x11dbd9.a.hide();
              var _0x39e1a4 = "".concat(_0x298242.data).concat(window.location.pathname, "?invite=").concat(_0x2d8222.userInfo.userInfo.invitationCode, "&inviteId=").concat(_0x2d8222.userInfo.userInfo.id, "&medalId=").concat(_0x235917, "#/shareScore");
              _0x59c0af.a.appInvoke.invoke("share", {
                actionType: 2,
                shareType: _0x348573,
                title: "我解锁了".concat(_0x4769ec, "成就，快来一起吧~"),
                subTitle: "玩游戏还能免费兑换商品，领到简直赚翻了！",
                picUrl: _0x4f8423,
                shareUrl: _0x39e1a4
              });
            });
          },
          _0x1b131f = {
            backgroundColor: "rgba(0,0,0,.7)"
          };
        var _0x5c0a3a = {
          className: "score-modal transparent-modal",
          visible: _0x4df433,
          transparent: !0,
          maskClosable: !1,
          transitionName: "modal-ani",
          maskStyle: _0x1b131f
        };
        var _0x4c60fd = {
          className: "scoreModal-con"
        };
        var _0x582156 = {
          className: "scoreModal-con-close close-btn",
          onClick: _0x1ced4d
        };
        var _0x1515c6 = {
          className: "scoreModal-newImg"
        };
        var _0x559035 = {
          src: _0x3066d4.h + "img_ReachAchievement.png",
          alt: ""
        };
        var _0x179259 = {
          className: "scoreModal-img"
        };
        var _0x31dcd6 = {
          src: _0x4f8423,
          alt: ""
        };
        var _0x5d9a52 = {
          className: "scoreModal-title"
        };
        var _0x17b0cc = {
          className: "scoreModal-tips"
        };
        var _0x438782 = {
          className: "scoreModal-price",
          src: _0x3066d4.h + "img_AchievementReward.png",
          alt: ""
        };
        var _0x2d7707 = {
          className: "scoreModal-price-info"
        };
        var _0x47f246 = {
          src: _0x3066d4.h + "pop_day7rwd_opened.png",
          alt: ""
        };
        var _0x29d7c8 = {
          className: "scoreModal-time"
        };
        var _0x1b962b = {
          className: _0x405749 ? "scoreModal-share scoreModal-share-active" : "scoreModal-share"
        };
        var _0xeafe9e = {
          className: "scoreModal-share-title"
        };
        var _0x3d96aa = {
          className: "scoreModal-share-btn"
        };
        Object(_0x549a9d.useImperativeHandle)(_0x4ed50e, function () {
          var _0x7acab3 = {
            showModal: _0x4de42c
          };
          return _0x7acab3;
        }, []);
        return _0x32671c.a.createElement(_0x344e11.a, _0x5c0a3a, _0x32671c.a.createElement("div", _0x4c60fd, 2 !== _0x351b61 && _0x32671c.a.createElement("div", _0x582156), 2 === _0x351b61 && _0x32671c.a.createElement("div", _0x1515c6, _0x32671c.a.createElement("img", _0x559035)), _0x32671c.a.createElement("div", _0x179259, _0x32671c.a.createElement("img", _0x31dcd6)), _0x32671c.a.createElement("div", _0x5d9a52, _0x4769ec), 2 !== _0x351b61 && _0x32671c.a.createElement("div", _0x17b0cc, _0x579426), _0x32671c.a.createElement("img", _0x438782), _0x32671c.a.createElement("div", _0x2d7707, _0x32671c.a.createElement("img", _0x47f246), _0x32671c.a.createElement("p", null, 1 === _0x235917 ? "4 x 10000" : _0x226ce9, "金币")), 0 !== _0x351b61 && _0x32671c.a.createElement("div", {
          className: "scoreModal-btn",
          onTouchStart: function (_0x1f8b86) {
            _0x1f8b86.currentTarget.classList.add("btn-scale");
          },
          onTouchEnd: function (_0x5dab79) {
            _0x5dab79.currentTarget.classList.remove("btn-scale");
          },
          onClick: function () {
            1 === _0x351b61 ? _0x562061() : _0x1ced4d();
          }
        }, 1 === _0x351b61 ? "炫耀一下" : "收下"), 1 === _0x351b61 && _0x32671c.a.createElement("div", _0x29d7c8, "于", Object(_0x3066d4.b)(_0x197d0a), "获得"), _0x32671c.a.createElement("div", _0x1b962b, _0x32671c.a.createElement("div", _0xeafe9e, "分享至"), _0x32671c.a.createElement("div", _0x3d96aa, _0x32671c.a.createElement("div", {
          className: "scoreModal-share-btn-item",
          onClick: function () {
            _0x309f6c(1);
          }
        }, _0x32671c.a.createElement("img", {
          src: _0x3066d4.h + "img_share_wechat.png",
          alt: ""
        }), _0x32671c.a.createElement("p", null, "微信好友")), _0x32671c.a.createElement("div", {
          className: "scoreModal-share-btn-item",
          onClick: function () {
            _0x309f6c(2);
          }
        }, _0x32671c.a.createElement("img", {
          src: _0x3066d4.h + "img_share_pyq.png",
          alt: ""
        }), _0x32671c.a.createElement("p", null, "朋友圈"))), _0x32671c.a.createElement("div", {
          className: "scoreModal-share-cannel",
          onClick: function () {
            _0x482f8e(!1);
          }
        }, "取消"))));
      }),
      _0x30f3e8 = Object(_0x549a9d.forwardRef)(function (_0x92c2fd, _0x1f0721) {
        var _0x31d8b6 = Object(_0x549a9d.useState)(!0),
          _0x20d8f3 = Object(_0x487051.a)(_0x31d8b6, 2),
          _0x5ddb0d = _0x20d8f3[0],
          _0xf6c554 = _0x20d8f3[1],
          _0x5cea34 = Object(_0x549a9d.useState)([]),
          _0x6c7682 = Object(_0x487051.a)(_0x5cea34, 2),
          _0x321411 = _0x6c7682[0],
          _0x5a1e69 = _0x6c7682[1],
          _0x234506 = Object(_0x549a9d.useState)([]),
          _0x5eced8 = Object(_0x487051.a)(_0x234506, 2),
          _0x5e915a = _0x5eced8[0],
          _0x1ce7ad = _0x5eced8[1],
          _0x36b3ba = Object(_0x549a9d.useState)(0),
          _0x3584e8 = Object(_0x487051.a)(_0x36b3ba, 2),
          _0x529246 = _0x3584e8[0],
          _0x9542b0 = _0x3584e8[1],
          _0x27f5c6 = Object(_0x549a9d.useState)([]),
          _0x5651c8 = Object(_0x487051.a)(_0x27f5c6, 2),
          _0x16741f = _0x5651c8[0],
          _0x2e7990 = _0x5651c8[1],
          _0x4dbf35 = Object(_0x549a9d.useRef)(null),
          _0x1a5b0d = Object(_0x549a9d.useRef)(null),
          _0x3daae7 = Object(_0x549a9d.useCallback)(function () {
            var _0x14f0b9 = {
              flushCache: 1
            };
            _0x108f06.a.egMedalBeckon(_0x14f0b9).then(function (_0x5293a9) {
              _0x108f06.a.egMedalList().then(function (_0x4514ce) {
                _0x11dbd9.a.hide();
                var _0x23a841 = _0x4514ce.data,
                  _0x34c27e = _0x23a841.taskResults,
                  _0x56966e = _0x23a841.honorWalls,
                  _0x2b8218 = _0x23a841.holdMedals,
                  _0x49d754 = _0x23a841.showLastMedals;
                _0x5a1e69(function (_0x2c0bef) {
                  var _0x4c56df = [],
                    _0x192cbc = [];
                  _0x2c0bef.forEach(function (_0x5015a3) {
                    2 === _0x5015a3.progressStatus && 1 === _0x5015a3.intervalStatus ? _0x192cbc.push(_0x5015a3) : _0x4c56df.push(_0x5015a3);
                  });
                  return _0x4c56df.concat(_0x192cbc);
                }(_0x34c27e));
                _0x1ce7ad(_0x56966e);
                _0x9542b0(_0x2b8218);
                _0x2e7990(_0x49d754.slice(0, 3));
                _0x92c2fd.setShowScore(!0);
              });
            });
          }, []),
          _0x31c6c5 = function (_0x1b08e9) {
            2 !== _0x1b08e9.progressStatus && (1 === _0x1b08e9.id && _0x59c0af.a.request.trackLog("click_h5activity_achievement_taskpage_task", {
              type: 0 === _0x1b08e9.progressStatus ? "新人任务升级-点击去完成" : "新人任务升级-点击领取奖励"
            }), 2 === _0x1b08e9.id && _0x59c0af.a.request.trackLog("click_h5activity_achievement_taskpage_task", {
              type: 0 === _0x1b08e9.progressStatus ? "新人任务金币任务-点击去完成" : "新人任务金币任务-点击领取奖励"
            }), 3 === _0x1b08e9.id && _0x59c0af.a.request.trackLog("click_h5activity_achievement_taskpage_task", {
              type: 0 === _0x1b08e9.progressStatus ? "新人任务邀请-点击去完成" : "新人任务邀请-点击领取奖励"
            }), 4 === _0x1b08e9.id && _0x59c0af.a.request.trackLog("click_h5activity_achievement_taskpage_task", {
              type: 0 === _0x1b08e9.progressStatus ? "新人任务兑换-点击去完成" : "新人任务兑换-点击领取奖励"
            }), 0 !== _0x1b08e9.progressStatus ? (_0x11dbd9.a.loading("加载中..."), _0x108f06.a.egMedalHold({
              id: _0x1b08e9.id
            }).then(function (_0x55719a) {
              _0x11dbd9.a.hide();
              _0x3daae7();
              _0x55719a.data.picUrl ? _0x4dbf35.current.showModal(_0x55719a.data, 2) : _0x1a5b0d.current.showModal(_0x55719a.data.reward);
            })) : _0x92c2fd.closeScoreList());
          },
          _0x19c4bd = function (_0x3f5296) {
            _0xf6c554(function (_0x5d709d) {
              return !_0x5d709d;
            });
            _0x59c0af.a.request.trackLog("click_h5activity_achievement_taskpage_broadheading", {
              type: 1 === _0x3f5296 ? "成就任务栏" : "成就勋章栏"
            });
          },
          _0x49eea6 = {
            className: "scoreList"
          };
        var _0x3e7c0c = {
          className: "scoreList-top"
        };
        var _0x5a65cb = {
          src: _0x3066d4.h + "header_achievement.png",
          alt: ""
        };
        var _0x1170ce = {
          className: "scoreList-con"
        };
        var _0xbb142e = {
          className: !0 === _0x5ddb0d ? "scoreList-task active" : "scoreList-task"
        };
        var _0x49d599 = {
          className: "scoreList-title-icon"
        };
        var _0x3235da = {
          className: "scoreList-title-name"
        };
        var _0x376614 = {
          className: "scoreList-title-tip"
        };
        var _0x9070e7 = {
          className: "score-task-con"
        };
        var _0x3cc63f = {
          className: "score-task-list"
        };
        var _0x4f218d = {
          className: !1 === _0x5ddb0d ? "scoreList-medal active" : "scoreList-medal"
        };
        var _0x407f6e = {
          className: "scoreList-medal-mask"
        };
        var _0x43488e = {
          className: "scoreList-title-l"
        };
        var _0x45f807 = {
          className: "scoreList-title-icon"
        };
        var _0x42e31b = {
          className: "scoreList-title-name"
        };
        var _0x324762 = {
          className: "scoreList-title-tip"
        };
        var _0x1f66da = {
          className: "scoreList-title-r"
        };
        var _0x64051 = {
          className: "score-medal-con"
        };
        var _0x4348cb = {
          className: "score-medal-list"
        };
        var _0x4009db = {
          ref: _0x1a5b0d,
          type: 1
        };
        Object(_0x549a9d.useImperativeHandle)(_0x1f0721, function () {
          var _0x4af41c = {
            getMedalList: _0x3daae7
          };
          return _0x4af41c;
        }, []);
        Object(_0x549a9d.useEffect)(function () {
          var _0x7b904b = document.querySelector(".scoreList-con"),
            _0x235850 = document.querySelector(".scoreList-title");
          document.querySelector(".score-task-list").style.height = _0x7b904b.getBoundingClientRect().height - _0x235850.getBoundingClientRect().height + "px";
        }, []);
        return _0x32671c.a.createElement("div", _0x49eea6, _0x32671c.a.createElement("div", _0x3e7c0c, _0x32671c.a.createElement("img", _0x5a65cb)), _0x32671c.a.createElement("div", _0x1170ce, _0x32671c.a.createElement("div", _0xbb142e, _0x32671c.a.createElement("div", {
          className: "scoreList-title",
          onClick: function () {
            return _0x19c4bd(1);
          }
        }, _0x32671c.a.createElement("i", _0x49d599), _0x32671c.a.createElement("span", _0x3235da, "成就任务"), _0x32671c.a.createElement("span", _0x376614, "完成任务得勋章")), _0x32671c.a.createElement("div", _0x9070e7, _0x32671c.a.createElement("ul", _0x3cc63f, _0x321411.map(function (_0x54d517) {
          var _0x18d3f9 = _0x54d517.subTasks.length > 0,
            _0x2dc2bb = {
              className: "score-task-item",
              key: _0x54d517.id
            };
          var _0x2fa9ca = {
            className: "score-task-info"
          };
          var _0x4ac5b4 = {
            className: "score-task-img",
            src: _0x54d517.medalPicUrl,
            alt: ""
          };
          var _0x5bf8f2 = {
            className: "score-task-info-desc"
          };
          var _0x4e5f56 = {
            className: "score-task-info-title"
          };
          var _0x48cbe7 = {
            className: "score-task-info-price"
          };
          var _0x3af843 = {
            className: "score-task-info-price"
          };
          var _0x577ab1 = {
            className: "score-task-second"
          };
          return _0x32671c.a.createElement("li", _0x2dc2bb, _0x32671c.a.createElement("div", _0x2fa9ca, _0x32671c.a.createElement("img", _0x4ac5b4), _0x32671c.a.createElement("div", _0x5bf8f2, _0x32671c.a.createElement("p", _0x4e5f56, _0x54d517.title), _0x18d3f9 ? _0x32671c.a.createElement("p", _0x48cbe7, "奖励：", _0x54d517.rewardDescription) : _0x32671c.a.createElement("p", _0x3af843, "奖励：", _0x32671c.a.createElement("i", null), _0x54d517.reward, "金币，", _0x54d517.rewardDescription)), (!_0x18d3f9 || _0x18d3f9 && 0 !== _0x54d517.progressStatus) && _0x32671c.a.createElement("div", {
            className: 0 === _0x54d517.progressStatus ? "score-task-btn nofinish" : 1 === _0x54d517.progressStatus ? "score-task-btn canget" : "score-task-btn finish",
            onClick: function () {
              return _0x31c6c5(_0x54d517);
            }
          })), _0x18d3f9 && 2 !== _0x54d517.progressStatus && _0x32671c.a.createElement("ul", _0x577ab1, _0x54d517.subTasks.map(function (_0x79e786) {
            var _0x3d116a = {
              className: "score-task-item",
              key: _0x79e786.id
            };
            var _0x19740a = {
              className: "score-task-info"
            };
            var _0x1b6438 = {
              className: "score-task-img",
              src: _0x3066d4.h + "img_TaskBranches.png",
              alt: ""
            };
            var _0x45056a = {
              className: "score-task-info-desc"
            };
            var _0x5cc2ea = {
              className: "score-task-info-title"
            };
            var _0x39f580 = {
              className: "score-task-info-price"
            };
            return _0x32671c.a.createElement("li", _0x3d116a, _0x32671c.a.createElement("div", _0x19740a, _0x32671c.a.createElement("img", _0x1b6438), _0x32671c.a.createElement("div", _0x45056a, _0x32671c.a.createElement("p", _0x5cc2ea, _0x79e786.title), _0x32671c.a.createElement("p", _0x39f580, "奖励：", _0x32671c.a.createElement("i", null), _0x79e786.reward, "金币")), _0x32671c.a.createElement("div", {
              className: 0 === _0x79e786.progressStatus ? "score-task-btn nofinish" : 1 === _0x79e786.progressStatus ? "score-task-btn canget" : "score-task-btn finish",
              onClick: function () {
                return _0x31c6c5(_0x79e786);
              }
            })));
          })));
        })))), _0x32671c.a.createElement("div", _0x4f218d, _0x32671c.a.createElement("div", _0x407f6e), _0x32671c.a.createElement("div", {
          className: "scoreList-title",
          onClick: function () {
            return _0x19c4bd(2);
          }
        }, _0x32671c.a.createElement("div", _0x43488e, _0x32671c.a.createElement("i", _0x45f807), _0x32671c.a.createElement("span", _0x42e31b, "成就勋章"), _0x32671c.a.createElement("span", _0x324762, _0x529246 > 0 ? "已获得 ".concat(_0x529246, " 枚勋章") : "尚未获得勋章")), _0x32671c.a.createElement("div", _0x1f66da, !0 === _0x5ddb0d && _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x16741f.length > 0 ? _0x16741f.map(function (_0x3ff2fa, _0x1d6c4d) {
          var _0x36c60b = {
            className: "scoreList-title-r-img",
            src: _0x3ff2fa,
            alt: "",
            key: _0x1d6c4d
          };
          return _0x32671c.a.createElement("img", _0x36c60b);
        }) : _0x32671c.a.createElement("img", {
          src: _0x3066d4.h + "img_MedalPreview_default.png",
          alt: ""
        }), _0x32671c.a.createElement("img", {
          className: "scoreList-title-r-img",
          src: _0x3066d4.h + "img_MedalPreview_more.png",
          alt: ""
        })))), _0x32671c.a.createElement("div", _0x64051, _0x32671c.a.createElement("ul", _0x4348cb, _0x5e915a.map(function (_0x5c2a74) {
          var _0x50e919 = {
            className: "score-medal-img"
          };
          var _0x4b8c5b = {
            className: "score-medal-name"
          };
          var _0x588d80 = {
            className: "score-medal-new"
          };
          return _0x32671c.a.createElement("li", {
            className: "score-medal-item",
            key: _0x5c2a74.id,
            onClick: function () {
              !function (_0x41770a) {
                var _0x5b93b8 = {
                  id: _0x41770a.id
                };
                _0x11dbd9.a.loading("加载中...");
                _0x108f06.a.egMedalInfo(_0x5b93b8).then(function (_0x4eb0b3) {
                  _0x11dbd9.a.hide();
                  var _0x5a186c = _0x5e915a.map(function (_0x331408) {
                    _0x41770a.id === _0x331408.id && (_0x331408.enjoyStatus = 1);
                    return _0x331408;
                  });
                  _0x1ce7ad(_0x5a186c);
                  _0x4dbf35.current.showModal(_0x4eb0b3.data, _0x41770a.hold);
                });
              }(_0x5c2a74);
            }
          }, _0x32671c.a.createElement("div", _0x50e919, _0x32671c.a.createElement("img", {
            src: 1 === _0x5c2a74.hold ? _0x5c2a74.picUrlLight : _0x5c2a74.picUrlOriginal,
            alt: ""
          })), _0x32671c.a.createElement("p", _0x4b8c5b, _0x5c2a74.title), 0 === _0x5c2a74.enjoyStatus && 1 === _0x5c2a74.hold && _0x32671c.a.createElement("div", _0x588d80));
        }))))), _0x32671c.a.createElement(_0x596afe, {
          ref: _0x4dbf35,
          userInfo: _0x92c2fd.userInfo
        }), _0x32671c.a.createElement(_0x1155af, _0x4009db));
      }),
      _0x2ff708 = (_0x2db93c(804), _0x1494b3.a.parse(window.location.search)),
      _0x2f18b3 = _0x2ff708.v,
      _0x36eaf3 = _0x2ff708.platform,
      _0x33f121 = Object(_0x549a9d.forwardRef)(function (_0x43b71d, _0x19b634) {
        var _0x3ba1c4 = Object(_0x549a9d.useState)(!1),
          _0x2bbe0d = Object(_0x487051.a)(_0x3ba1c4, 2),
          _0x1a8b68 = _0x2bbe0d[0],
          _0x52c44e = _0x2bbe0d[1],
          _0x357c4a = Object(_0x549a9d.useState)("00:00"),
          _0xd15b1a = Object(_0x487051.a)(_0x357c4a, 2),
          _0xd8c28f = _0xd15b1a[0],
          _0x5e8c25 = _0xd15b1a[1],
          _0x3283e8 = Object(_0x549a9d.useState)(!1),
          _0x4965b0 = Object(_0x487051.a)(_0x3283e8, 2),
          _0x22f09f = _0x4965b0[0],
          _0x545a84 = _0x4965b0[1],
          _0x2360a8 = Object(_0x549a9d.useState)(!1),
          _0x36f095 = Object(_0x487051.a)(_0x2360a8, 2),
          _0x38933d = _0x36f095[0],
          _0x551e67 = _0x36f095[1],
          _0x4455a0 = Object(_0x549a9d.useRef)(null),
          _0x28451e = Object(_0x549a9d.useRef)(null),
          _0x34afa7 = function () {
            _0x4455a0.current && window.clearInterval(_0x4455a0.current);
            _0x108f06.a.egLimitedTimeShow().then(function (_0x446e63) {
              if (_0x446e63.data.number > 0) {
                if (_0x52c44e(!0), _0x446e63.data.countdown > 0) {
                  _0x545a84(!1);
                  var _0x3195e3 = _0x446e63.data.countdown;
                  _0x5e8c25(Object(_0x3066d4.n)(_0x3195e3, !0));
                  _0x4455a0.current = window.setInterval(function () {
                    --_0x3195e3 < 0 ? (_0x545a84(!0), _0x5e8c25("收下"), window.clearInterval(_0x4455a0.current)) : _0x5e8c25(Object(_0x3066d4.n)(_0x3195e3, !0));
                  }, 1000);
                } else {
                  _0x545a84(!0);
                  _0x5e8c25("收下");
                }
              } else {
                _0x52c44e(!1);
              }
            });
          },
          _0x3eb17 = function () {
            var _0x58998a = {
              type: "关闭按钮"
            };
            _0x551e67(!1);
            _0x59c0af.a.request.trackLog("click_h5activity_limitedtime_reward_popwin", _0x58998a);
          },
          _0x293817 = function (_0x232ca4) {
            var _0x1190ea = {
              type: "direct" === _0x232ca4 ? "直接领取" : "翻倍领取"
            };
            var _0x17f024 = {
              doublingKey: _0x232ca4
            };
            _0x11dbd9.a.info("领取中...");
            _0x59c0af.a.request.trackLog("click_h5activity_limitedtime_reward_popwin", _0x1190ea);
            _0x108f06.a.egLimitedTimeComplete(_0x17f024).then(function (_0x1ffff7) {
              _0x11dbd9.a.hide();
              _0x34afa7();
              _0x3eb17();
              _0x43b71d.getBaseInfo("refresh");
              _0x28451e.current.showModal(_0x1ffff7.data.reward);
            });
          },
          _0x3bfe05 = function (_0xa2be3f) {
            _0xa2be3f.currentTarget.classList.add("btn-scale");
          },
          _0x2ff965 = function (_0x59788d) {
            _0x59788d.currentTarget.classList.remove("btn-scale");
          },
          _0x531fbb = {
            className: "limitReward-len"
          };
        var _0x3f6230 = {
          ref: _0x28451e,
          type: 1
        };
        var _0x312921 = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
        var _0x2cb83d = {
          className: "limit-modal transparent-modal",
          visible: _0x38933d,
          transparent: !0,
          maskClosable: !1,
          transitionName: "modal-ani",
          maskStyle: _0x312921
        };
        var _0x5fdcc3 = {
          className: "limitModal-con"
        };
        var _0x33bb3e = {
          className: "limitModal-head"
        };
        var _0x10dbc0 = {
          className: "limitModal-close close-btn",
          onClick: _0x3eb17
        };
        var _0x46d189 = {
          className: "limitModal-wrap"
        };
        var _0x39fccf = {
          className: "limitModal-wrap-con"
        };
        var _0x372251 = {
          className: "limitModal-title"
        };
        var _0x196508 = {
          className: "limitModal-img",
          src: _0x3066d4.h + "index_LimitTime_Opened.png",
          alt: ""
        };
        var _0x2d37ff = {
          className: "limitModal-btn"
        };
        Object(_0x549a9d.useEffect)(function () {
          _0x34afa7();
        }, []);
        Object(_0x549a9d.useImperativeHandle)(_0x19b634, function () {
          var _0x4a2b32 = {
            getLimitData: _0x34afa7
          };
          return _0x4a2b32;
        }, []);
        return _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x1a8b68 && _0x32671c.a.createElement("div", {
          className: "limitReward",
          onClick: function () {
            var _0x174ff3 = {
              operation: "点击限时奖励"
            };
            _0x22f09f ? (_0x551e67(!0), _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_goldexchange_button", _0x174ff3)) : _0x11dbd9.a.info("等会儿再来哦~", 1);
          }
        }, _0x32671c.a.createElement("div", {
          className: _0x22f09f ? "limitReward-img-active limitReward-img" : "limitReward-img"
        }), _0x32671c.a.createElement("div", _0x531fbb, _0xd8c28f)), _0x32671c.a.createElement(_0x1155af, _0x3f6230), _0x32671c.a.createElement(_0x344e11.a, _0x2cb83d, _0x32671c.a.createElement("div", _0x5fdcc3, _0x32671c.a.createElement("div", _0x33bb3e), _0x32671c.a.createElement("div", _0x10dbc0), _0x32671c.a.createElement("div", _0x46d189, _0x32671c.a.createElement("div", _0x39fccf, _0x32671c.a.createElement("div", _0x372251, "限时奖励"), _0x32671c.a.createElement("img", _0x196508), _0x32671c.a.createElement("div", _0x2d37ff, _0x32671c.a.createElement("div", {
          className: "limitModal-get",
          onTouchStart: _0x3bfe05,
          onTouchEnd: _0x2ff965,
          onClick: function () {
            return _0x293817("direct");
          }
        }), _0x32671c.a.createElement("div", {
          className: "limitModal-video",
          onTouchStart: _0x3bfe05,
          onTouchEnd: _0x2ff965,
          onClick: function () {
            var _0x48b465 = {
              type: 6,
              version: _0x2f18b3,
              platform: _0x36eaf3
            };
            !_0x43b71d.v || Object(_0x3066d4.c)(_0x43b71d.v, "2.6.2") < 0 ? _0x59c0af.a.brige.openUpdate() : (_0x11dbd9.a.loading("内容加载中...", 5), _0x108f06.a.gameAdTaskId(_0x48b465).then(function (_0x27ea75) {
              var _0x31dcb8 = "ios" === _0x59c0af.a.utils.getUA();
              if (_0x27ea75.data.versionLimit) {
                _0x11dbd9.a.hide();
                return void _0x59c0af.a.brige.openUpdate();
              }
              _0x27ea75.data.iosThirdAdvertId ? _0x59c0af.a.appInvoke.invoke("ttRewardVideoAd", {
                platform: _0x27ea75.data.platform,
                codeId: _0x31dcb8 ? _0x27ea75.data.iosThirdAdvertId : _0x27ea75.data.androidThirdAdvertId
              }, !0).then(function (_0x242e98) {
                _0x11dbd9.a.hide();
                _0x242e98 && "success" === _0x242e98.result && _0x293817("doubling");
              }) : _0x11dbd9.a.info("暂无广告内容，请稍后再试。");
            }));
          }
        })))))));
      });
    _0x2db93c(806);
    Object(_0x549a9d.forwardRef)(function (_0x351947, _0xad2691) {
      var _0x19632b = Object(_0x549a9d.useState)(!1),
        _0x2c6929 = Object(_0x487051.a)(_0x19632b, 2),
        _0xfb969b = _0x2c6929[0],
        _0x3e6cd2 = _0x2c6929[1],
        _0x45d7c6 = Object(_0x549a9d.useState)(4),
        _0x21f52b = Object(_0x487051.a)(_0x45d7c6, 2),
        _0x2eb450 = _0x21f52b[0],
        _0x4b7404 = _0x21f52b[1],
        _0x3f69b3 = Object(_0x549a9d.useState)(0),
        _0x5da644 = Object(_0x487051.a)(_0x3f69b3, 2),
        _0x38a7a3 = _0x5da644[0],
        _0x4bf95c = _0x5da644[1],
        _0x469250 = function (_0x397b5d) {
          _0x397b5d.currentTarget.classList.add("btn-scale");
        },
        _0x4186d5 = function (_0x4a48af) {
          _0x4a48af.currentTarget.classList.remove("btn-scale");
        },
        _0x3a6e61 = {
          className: "redpackRain"
        };
      var _0x17d666 = {
        className: "redpackRain-pack"
      };
      var _0x450e09 = {
        className: "redpackRain-yun"
      };
      var _0x47a6e2 = {
        className: "redpackRain-con"
      };
      var _0x5c9313 = {
        className: "redpackRain-info"
      };
      var _0x5d3cd1 = {
        className: "redpackRain-info-no-title"
      };
      var _0x19af7b = {
        className: "redpackRain-info-no-p"
      };
      var _0x1ee7d1 = {
        className: "redpackRain-title"
      };
      var _0x48d7a2 = {
        className: "redpackRain-p"
      };
      var _0x12af31 = {
        className: "redpackRain-info-con"
      };
      var _0x5e0c2a = {
        className: "redpackRain-info-coin"
      };
      var _0x49ddd4 = {
        className: "redpackRain-info-coin-info"
      };
      var _0x3d39e6 = {
        className: "redpackRain-info-coin-tips"
      };
      var _0x2df22d = {
        className: "redpackRain-info-quan"
      };
      var _0x433c6c = {
        className: "redpackRain-info-quan-info"
      };
      var _0x34dd63 = {
        className: "redpackRain-info-quan-info-l"
      };
      var _0x47f291 = {
        className: "redpackRain-info-quan-info-l-t"
      };
      var _0x1d4d99 = {
        className: "redpackRain-info-quan-info-l-b"
      };
      var _0x34dd2a = {
        className: "redpackRain-info-quan-info-r"
      };
      var _0x2dfd93 = {
        className: "redpackRain-info-quan-tips"
      };
      var _0x485dab = {
        className: "redpackRain-info-cash"
      };
      var _0x404e25 = {
        className: "redpackRain-info-cash-info"
      };
      var _0x27de6b = {
        className: "redpackRain-info-cash-tips"
      };
      var _0x113cdc = {
        className: "redpackRain-tips"
      };
      Object(_0x549a9d.useEffect)(function () {
        return function () {};
      }, []);
      Object(_0x549a9d.useImperativeHandle)(_0xad2691, function () {
        return {};
      }, []);
      return _0x32671c.a.createElement("div", _0x3a6e61, _0x32671c.a.createElement("div", _0x17d666, Object(_0x3066d4.d)(17).map(function (_0x57bf8d, _0x58277c) {
        var _0x519227 = {
          "--scale": _0x57bf8d.scale,
          left: _0x57bf8d.left,
          animationDelay: _0x57bf8d.delay,
          animationDuration: _0x57bf8d.time
        };
        var _0x519723 = {
          key: _0x58277c,
          className: "redpackRain-packitem",
          style: _0x519227
        };
        return _0x32671c.a.createElement("div", _0x519723);
      })), _0x32671c.a.createElement("div", _0x450e09), _0xfb969b ? _0x32671c.a.createElement("div", _0x47a6e2, _0x32671c.a.createElement("div", _0x5c9313, 4 === _0x2eb450 ? _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("div", _0x5d3cd1, "今日红包雨已抢光"), _0x32671c.a.createElement("div", _0x19af7b, "每晚20:00-20:05准点抢红包雨，明天记得早点来哦～")) : _0x32671c.a.createElement(_0x32671c.a.Fragment, null, _0x32671c.a.createElement("div", _0x1ee7d1, "你被超大红包砸中啦"), _0x32671c.a.createElement("div", _0x48d7a2, "恭喜中奖"), _0x32671c.a.createElement("div", _0x12af31, 8 === _0x2eb450 && _0x32671c.a.createElement("div", _0x5e0c2a, _0x32671c.a.createElement("div", _0x49ddd4, _0x32671c.a.createElement("span", null, _0x38a7a3), "金币"), _0x32671c.a.createElement("div", _0x3d39e6, "金币发放至金象游戏账户中")), 2 === _0x2eb450 && _0x32671c.a.createElement("div", _0x2df22d, _0x32671c.a.createElement("div", _0x433c6c, _0x32671c.a.createElement("div", _0x34dd63, _0x32671c.a.createElement("div", _0x47f291, "自营优惠券"), _0x32671c.a.createElement("div", _0x1d4d99, "满88可用")), _0x32671c.a.createElement("div", _0x34dd2a, "￥", _0x32671c.a.createElement("span", null, "20"))), _0x32671c.a.createElement("div", _0x2dfd93, "券发放至【我的】-【优选优惠券】")), 5 === _0x2eb450 && _0x32671c.a.createElement("div", _0x485dab, _0x32671c.a.createElement("div", _0x404e25, "￥", _0x32671c.a.createElement("span", null, (_0x38a7a3 / 100).toFixed(2))), _0x32671c.a.createElement("div", _0x27de6b, "奖励发放至【我的】-【可提现】-【活动奖励】")))), _0x32671c.a.createElement("div", {
        className: 4 === _0x2eb450 ? "redpackRain-info-btn btn-ok" : "redpackRain-info-btn",
        onClick: function () {
          _0x351947.closeRedpackRain(!1);
        },
        onTouchStart: _0x469250,
        onTouchEnd: _0x4186d5
      })), 4 !== _0x2eb450 && _0x32671c.a.createElement("div", _0x113cdc, "明晚20:00继续抢红包雨～")) : _0x32671c.a.createElement("div", {
        className: "redpackRain-btn",
        onClick: function () {
          _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_get1111red");
          _0x11dbd9.a.loading("正在抢红包...");
          _0x108f06.a.egLuckyPoolDraw().then(function (_0x164297) {
            var _0x33e70d = {
              type: "金币奖励"
            };
            var _0x4d66ea = {
              type: "优惠券奖励"
            };
            var _0x4a79bb = {
              type: "红包雨抢光了"
            };
            var _0x6e7bbd = {
              type: "现金奖励"
            };
            _0x11dbd9.a.hide();
            8 === _0x164297.data.type && (_0x351947.getBaseInfo("refresh"), _0x59c0af.a.request.trackLog("push_h5activity_goldenelephant_page_get1111red_popwin", _0x33e70d));
            2 === _0x164297.data.type && _0x59c0af.a.request.trackLog("push_h5activity_goldenelephant_page_get1111red_popwin", _0x4d66ea);
            4 === _0x164297.data.type && _0x59c0af.a.request.trackLog("push_h5activity_goldenelephant_page_get1111red_popwin", _0x4a79bb);
            5 === _0x164297.data.type && _0x59c0af.a.request.trackLog("push_h5activity_goldenelephant_page_get1111red_popwin", _0x6e7bbd);
            _0x4b7404(_0x164297.data.type);
            _0x4bf95c(_0x164297.data.prize);
            _0x3e6cd2(!0);
          });
        },
        onTouchStart: _0x469250,
        onTouchEnd: _0x4186d5
      }));
    });
    _0x2db93c(808);
    var _0x3eb0dd = function (_0x516f97) {
      var _0x5754d3 = {
        className: "edu-con"
      };
      var _0x4cfcf0 = {
        src: _0x3066d4.h + "img_guidance_1.png",
        alt: ""
      };
      var _0x2de850 = {
        src: _0x3066d4.h + "img_guidance_2.png",
        alt: ""
      };
      var _0x5e31a9 = {
        src: _0x3066d4.h + "img_guidance_3.png",
        alt: ""
      };
      var _0x4a6c82 = {
        src: _0x3066d4.h + "img_guidance_4.png",
        alt: ""
      };
      return _0x32671c.a.createElement("div", _0x5754d3, _0x32671c.a.createElement("img", _0x4cfcf0), _0x32671c.a.createElement("img", _0x2de850), _0x32671c.a.createElement("img", _0x5e31a9), _0x32671c.a.createElement("img", _0x4a6c82));
    };
    _0x2db93c(810);
    var _0x44db99 = Object(_0x549a9d.forwardRef)(function (_0x19b421, _0x15941e) {
      var _0x129517 = Object(_0x549a9d.useState)(!1),
        _0x3f9bf1 = Object(_0x487051.a)(_0x129517, 2),
        _0x4d5493 = _0x3f9bf1[0],
        _0x547eb5 = _0x3f9bf1[1],
        _0x464e0d = Object(_0x549a9d.useState)(0),
        _0x4aef82 = Object(_0x487051.a)(_0x464e0d, 2),
        _0x7b38ce = _0x4aef82[0],
        _0xb6dbb2 = _0x4aef82[1],
        _0x2ac528 = Object(_0x549a9d.useState)(""),
        _0x536ebf = Object(_0x487051.a)(_0x2ac528, 2),
        _0x1a217d = _0x536ebf[0],
        _0x575126 = _0x536ebf[1],
        _0x5a6cd0 = Object(_0x549a9d.useState)(""),
        _0x1730e6 = Object(_0x487051.a)(_0x5a6cd0, 2),
        _0x39d337 = _0x1730e6[0],
        _0x4631c5 = _0x1730e6[1],
        _0x33bb8c = Object(_0x549a9d.useState)(0),
        _0x17514b = Object(_0x487051.a)(_0x33bb8c, 2),
        _0x2ab6f9 = _0x17514b[0],
        _0x3556e5 = _0x17514b[1],
        _0x11912f = function (_0x4e6a49) {
          var _0x477c39 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            _0x13b446 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            _0x367b86 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            _0x5edf50 = {
              type: 0 === _0x4e6a49 ? "今日助力次数已达上限" : 1 === _0x4e6a49 ? "好友人气爆棚" : 2 === _0x4e6a49 ? "来晚啦" : 3 === _0x4e6a49 ? "助力弹窗" : ""
            };
          Object(_0x3066d4.e)(0);
          _0x59c0af.a.request.trackLog("push_h5activity_goldenelephant_outpage_invite_getmygold_popwin", _0x5edf50);
          _0xb6dbb2(_0x4e6a49);
          _0x575126(_0x477c39);
          _0x4631c5(_0x13b446);
          _0x3556e5(_0x367b86);
          _0x547eb5(!0);
        },
        _0x2b70fc = function () {
          Object(_0x3066d4.e)(1);
          _0x547eb5(!1);
          _0x19b421.showNewComer();
          (!window.localStorage.getItem("egGo11TaskModal") || Date.now() - parseInt(window.localStorage.getItem("egGo11TaskModal")) >= 86400000) && (window.localStorage.setItem("egGo11TaskModal", new Date().setHours(0, 0, 0, 0)), _0x19b421.showGo11taskModal());
        },
        _0x131955 = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
      var _0x2803b6 = {
        className: "invite-modal transparent-modal",
        visible: _0x4d5493,
        transparent: !0,
        maskClosable: !1,
        transitionName: "modal-ani",
        maskStyle: _0x131955
      };
      var _0x5b423a = {
        className: "inviteModal-con"
      };
      var _0x32a288 = {
        className: "inviteModal-head"
      };
      var _0x2da7b1 = {
        className: "inviteModal-close close-btn",
        onClick: _0x2b70fc
      };
      var _0x384fa8 = {
        className: 3 === _0x7b38ce ? "inviteModal-wrap inviteModal-wrap-height" : "inviteModal-wrap"
      };
      var _0x2a5362 = {
        className: "inviteModal-wrap-con"
      };
      var _0x5241e6 = {
        className: "inviteModal-nickname"
      };
      var _0x4ac6c3 = {
        className: "inviteModal-title"
      };
      var _0x56a986 = {
        className: "inviteModal-text"
      };
      var _0x37f6f6 = {
        className: "inviteModal-text"
      };
      var _0x15dc5b = {
        className: "inviteModal-text"
      };
      var _0x5b348c = {
        className: "inviteModal-headerpic",
        src: _0x39d337,
        alt: ""
      };
      var _0x4de8ec = {
        className: "inviteModal-tips"
      };
      Object(_0x549a9d.useImperativeHandle)(_0x15941e, function () {
        var _0x3dd645 = {
          showModal: _0x11912f
        };
        return _0x3dd645;
      }, []);
      return _0x32671c.a.createElement(_0x344e11.a, _0x2803b6, _0x32671c.a.createElement("div", _0x5b423a, _0x32671c.a.createElement("div", _0x32a288), _0x32671c.a.createElement("div", _0x2da7b1), _0x32671c.a.createElement("div", _0x384fa8, _0x32671c.a.createElement("div", _0x2a5362, 3 === _0x7b38ce && _0x32671c.a.createElement("div", _0x5241e6, _0x1a217d), _0x32671c.a.createElement("div", _0x4ac6c3, 0 === _0x7b38ce ? "今日助力次数已达上限" : 1 === _0x7b38ce ? "好友人气爆棚啦" : 2 === _0x7b38ce || 4 === _0x7b38ce ? "你来晚啦" : 3 === _0x7b38ce ? "的助力邀请" : ""), 0 === _0x7b38ce ? _0x32671c.a.createElement("div", _0x56a986, _0x32671c.a.createElement("p", null, "每天只能帮好友助力一次哦"), _0x32671c.a.createElement("p", null, "金币要溢出来啦，快来收金币兑换豪礼吧")) : 1 === _0x7b38ce ? _0x32671c.a.createElement("div", _0x37f6f6, _0x32671c.a.createElement("p", null, "你的好友助力人数已经满啦"), _0x32671c.a.createElement("p", null, "过段时间再来为他助力吧")) : 2 === _0x7b38ce || 4 === _0x7b38ce ? _0x32671c.a.createElement("div", _0x15dc5b, _0x32671c.a.createElement("p", null, "很遗憾，好友今日的", 2 === _0x7b38ce ? "老" : "新", "用户"), _0x32671c.a.createElement("p", null, "助力次数已经满啦")) : 3 === _0x7b38ce ? _0x32671c.a.createElement("img", _0x5b348c) : null, 3 === _0x7b38ce && _0x32671c.a.createElement("div", _0x4de8ec, "快来帮我助力收金币，兑豪礼吧"), _0x32671c.a.createElement("div", {
        className: 3 === _0x7b38ce ? "inviteModal-btn inviteModal-btn-help" : "inviteModal-btn",
        onClick: function () {
          var _0x3da394 = {
            type: "点击助力"
          };
          var _0xab373 = {
            initiatorId: _0x2ab6f9
          };
          3 === _0x7b38ce ? (_0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_outpage_invite_getmygold_popwin", _0x3da394), _0x11dbd9.a.loading("助力中..."), _0x108f06.a.egMammonHelp(_0xab373).then(function (_0x5ee2e8) {
            _0x11dbd9.a.info("助力成功", 2);
            _0x2b70fc();
          })) : _0x2b70fc();
        },
        onTouchStart: function (_0x30fcad) {
          _0x30fcad.currentTarget.classList.add("btn-scale");
        },
        onTouchEnd: function (_0x1069b0) {
          _0x1069b0.currentTarget.classList.remove("btn-scale");
        }
      })))));
    });
    _0x2db93c(812);
    var _0x5ab307 = Object(_0x549a9d.forwardRef)(function (_0xa07126, _0xc3822c) {
      var _0x42aa96 = Object(_0x549a9d.useState)(!1),
        _0x5771de = Object(_0x487051.a)(_0x42aa96, 2),
        _0x41648a = _0x5771de[0],
        _0x224316 = _0x5771de[1],
        _0x56db30 = function () {
          Object(_0x3066d4.e)(0);
          _0x224316(!0);
        },
        _0x32506a = function () {
          _0x224316(!1);
          Object(_0x3066d4.e)(1);
        },
        _0x451569 = {
          backgroundColor: "rgba(0,0,0,.7)"
        };
      var _0x63a802 = {
        className: "go11task-modal transparent-modal",
        visible: _0x41648a,
        transparent: !0,
        maskClosable: !1,
        transitionName: "modal-ani",
        maskStyle: _0x451569
      };
      var _0x38c0e3 = {
        className: "go11task-con"
      };
      var _0x2eda70 = {
        className: "go11task-close close-btn",
        onClick: _0x32506a
      };
      var _0x5a5ffc = {
        className: "go11task-img",
        src: _0x3066d4.h + "pop_exclusivetask.png",
        alt: ""
      };
      Object(_0x549a9d.useImperativeHandle)(_0xc3822c, function () {
        var _0x2876aa = {
          showModal: _0x56db30
        };
        return _0x2876aa;
      }, []);
      return _0x32671c.a.createElement(_0x344e11.a, _0x63a802, _0x32671c.a.createElement("div", _0x38c0e3, _0x32671c.a.createElement("div", _0x2eda70), _0x32671c.a.createElement("img", _0x5a5ffc), _0x32671c.a.createElement("div", {
        className: "go11task-btn",
        onClick: function () {
          _0x32506a();
          _0xa07126.openTask();
        },
        onTouchStart: function (_0x54515d) {
          _0x54515d.currentTarget.classList.add("btn-scale");
        },
        onTouchEnd: function (_0xdf44bd) {
          _0xdf44bd.currentTarget.classList.remove("btn-scale");
        }
      })));
    });
    _0x4f1811.default = function (_0x3d0a74) {
      var _0x57bd46 = {
        coin: 0
      };
      var _0x3a5ed5 = Object(_0x549a9d.useState)(null),
        _0x5d0ce0 = Object(_0x487051.a)(_0x3a5ed5, 2),
        _0x3399ad = _0x5d0ce0[0],
        _0x1dfe5f = _0x5d0ce0[1],
        _0x579faf = Object(_0x549a9d.useState)(_0x57bd46),
        _0x445661 = Object(_0x487051.a)(_0x579faf, 2),
        _0x176a70 = _0x445661[0],
        _0x5aaba5 = _0x445661[1],
        _0x52d053 = Object(_0x549a9d.useState)(1),
        _0x11bed9 = Object(_0x487051.a)(_0x52d053, 2),
        _0x3c53f8 = _0x11bed9[0],
        _0x5595c8 = _0x11bed9[1],
        _0x3edcd4 = Object(_0x549a9d.useState)(0),
        _0x2fe451 = Object(_0x487051.a)(_0x3edcd4, 2),
        _0x2ac325 = _0x2fe451[0],
        _0x5f53eb = _0x2fe451[1],
        _0x28106c = Object(_0x549a9d.useState)(1),
        _0x279efb = Object(_0x487051.a)(_0x28106c, 2),
        _0x10c5d2 = _0x279efb[0],
        _0x265635 = _0x279efb[1],
        _0x1d6951 = Object(_0x549a9d.useState)(1),
        _0x21ae9e = Object(_0x487051.a)(_0x1d6951, 2),
        _0x3bb286 = _0x21ae9e[0],
        _0x3ac6fd = _0x21ae9e[1],
        _0x2924d3 = Object(_0x549a9d.useState)("0%"),
        _0x593c8e = Object(_0x487051.a)(_0x2924d3, 2),
        _0x4ec126 = _0x593c8e[0],
        _0x324a9d = _0x593c8e[1],
        _0xb88207 = Object(_0x549a9d.useState)(0),
        _0x437a0d = Object(_0x487051.a)(_0xb88207, 2),
        _0x4afac7 = _0x437a0d[0],
        _0x4f5972 = _0x437a0d[1],
        _0x1134ae = Object(_0x549a9d.useState)(0),
        _0x152da5 = Object(_0x487051.a)(_0x1134ae, 2),
        _0x14b1b7 = _0x152da5[0],
        _0x3bc43e = _0x152da5[1],
        _0x3c00b1 = Object(_0x549a9d.useState)([]),
        _0x40447d = Object(_0x487051.a)(_0x3c00b1, 2),
        _0x75865 = _0x40447d[0],
        _0x4be254 = _0x40447d[1],
        _0x168c5c = Object(_0x549a9d.useState)(!0),
        _0xe4475e = Object(_0x487051.a)(_0x168c5c, 2),
        _0x2ff151 = _0xe4475e[0],
        _0x3a3a8f = _0xe4475e[1],
        _0x48df2e = Object(_0x549a9d.useState)(!1),
        _0x18eb92 = Object(_0x487051.a)(_0x48df2e, 2),
        _0x408ffa = _0x18eb92[0],
        _0x290ba0 = _0x18eb92[1],
        _0x21afa2 = Object(_0x549a9d.useState)(0),
        _0x5bbe44 = Object(_0x487051.a)(_0x21afa2, 2),
        _0x4f2ab1 = _0x5bbe44[0],
        _0x59197b = _0x5bbe44[1],
        _0xa22d29 = Object(_0x549a9d.useState)(!1),
        _0x4993c0 = Object(_0x487051.a)(_0xa22d29, 2),
        _0x3b85b2 = (_0x4993c0[0], _0x4993c0[1], Object(_0x549a9d.useState)(1)),
        _0x210b8e = Object(_0x487051.a)(_0x3b85b2, 2),
        _0x4350b5 = _0x210b8e[0],
        _0x5d8e8e = (_0x210b8e[1], Object(_0x549a9d.useState)(!1)),
        _0x35f97e = Object(_0x487051.a)(_0x5d8e8e, 2),
        _0x1e85df = _0x35f97e[0],
        _0x4fccf1 = _0x35f97e[1],
        _0x38e860 = Object(_0x549a9d.useState)(!1),
        _0x5f38b3 = Object(_0x487051.a)(_0x38e860, 2),
        _0x31029d = _0x5f38b3[0],
        _0x469c16 = _0x5f38b3[1],
        _0x423192 = Object(_0x549a9d.useState)(!1),
        _0x10991d = Object(_0x487051.a)(_0x423192, 2),
        _0x747f70 = (_0x10991d[0], _0x10991d[1]),
        _0x286ebe = Object(_0x549a9d.useState)(!1),
        _0x47f35c = Object(_0x487051.a)(_0x286ebe, 2),
        _0x57e446 = (_0x47f35c[0], _0x47f35c[1], Object(_0x549a9d.useState)(0)),
        _0x1c773f = Object(_0x487051.a)(_0x57e446, 2),
        _0x66d76 = _0x1c773f[0],
        _0x17371c = _0x1c773f[1],
        _0x7d6b50 = Object(_0x549a9d.useRef)(null),
        _0x551e15 = Object(_0x549a9d.useRef)(null),
        _0x4f7bb5 = Object(_0x549a9d.useRef)(null),
        _0x2cb1a9 = Object(_0x549a9d.useRef)(null),
        _0x419bd1 = Object(_0x549a9d.useRef)(null),
        _0x140aef = (Object(_0x549a9d.useRef)(null), Object(_0x549a9d.useRef)(null)),
        _0x27d60a = (Object(_0x549a9d.useRef)(null), Object(_0x549a9d.useRef)(null)),
        _0x59bd39 = Object(_0x549a9d.useRef)(null),
        _0x4773e6 = Object(_0x549a9d.useRef)(null),
        _0x197c7d = Object(_0x549a9d.useCallback)(function (_0x203417) {
          _0x108f06.a.egMammonList().then(function (_0x2d2553) {
            var _0x53b146 = 1;
            _0x2d2553.data.list.forEach(function (_0x1dc290) {
              _0x53b146 += _0x1dc290.mammonCoinBless;
            });
            _0x265635(_0x53b146);
            _0x4be254(_0x2d2553.data);
            "refresh" !== _0x203417 && _0x108f06.a.userInfo().then(function (_0xa2df3e) {
              _0x1dfe5f(_0xa2df3e.data);
              window.setTimeout(function () {
                _0x4f7bb5.current && _0x4f7bb5.current.endLoading();
              }, 500);
            });
          });
        }, []),
        _0x1d8cb0 = Object(_0x549a9d.useCallback)(function (_0x2c48b9) {
          _0x108f06.a.egElephantInfo().then(function (_0x13f217) {
            var _0x1a618c = _0x13f217.data;
            _0x5f53eb(_0x1a618c.coinCurrent);
            _0x5595c8(_0x1a618c.coinVolume);
            _0x3ac6fd(_0x1a618c.level);
            _0x324a9d(Object(_0x3066d4.k)(_0x1a618c.score, _0x1a618c.scoreVolume));
            _0x4f5972(_0x1a618c.welfareReceive);
            _0x3bc43e(_0x1a618c.signStatus);
            _0x5aaba5({
              coin: _0x1a618c.coinUnCollect
            });
            "refresh" !== _0x2c48b9 && (_0x1a618c.coinUnCollect >= _0x1a618c.coinVolume && document.querySelector(".friendsList").classList.add("pauseAni"), _0x1a618c.openLuckyBag && _0x1a618c.level >= 10 && (_0x290ba0(!0), _0x59197b(_0x1a618c.luckyBagId)), _0x197c7d(), _0x747f70(_0x1a618c.openLuckyDrawPool));
          });
        }, [_0x197c7d]),
        _0x5aa49f = function (_0x1d1c62) {},
        _0x5aa3c6 = function () {
          var _0x529d32 = {
            flushCache: 1
          };
          _0x469c16(!1);
          _0x1d8cb0("refresh");
          _0x108f06.a.egMedalBeckon(_0x529d32).then(function (_0x4818c3) {
            _0x17371c(_0x4818c3.data.available);
          });
        },
        _0x84cf5 = function () {
          _0x2cb1a9.current.showTaskModal();
        };
      Object(_0x549a9d.useEffect)(function () {
        _0x1d8cb0();
      }, [_0x1d8cb0, _0x197c7d, _0x3d0a74]);
      var _0x12795b = Object(_0x549a9d.useCallback)(function () {
          !document.hidden && _0x3d0a74.query.token && (_0x1d8cb0("refresh"), _0x59bd39.current.getLimitData());
        }, [_0x1d8cb0, _0x3d0a74.query.token]),
        _0x2f131a = {
          className: "home"
        };
      var _0x46c6cc = {
        className: "home-wrapper"
      };
      var _0x9690cb = {
        className: "left-wrapper"
      };
      var _0x21b1a4 = {
        ref: _0x7d6b50,
        showNewComer: function () {},
        showGo11taskModal: function () {}
      };
      var _0x347053 = {
        ref: _0x551e15
      };
      var _0x10430b = {
        in: _0x1e85df,
        timeout: 500,
        classNames: "home-edu"
      };
      var _0x42005c = {
        className: "home-edu-wrapper"
      };
      var _0x165ccf = {
        in: _0x31029d,
        timeout: 500,
        classNames: "home-score"
      };
      var _0xd8f23 = {
        className: "home-score-wrapper"
      };
      Object(_0x549a9d.useEffect)(function () {
        document.addEventListener("visibilitychange", _0x12795b);
        return function () {
          document.removeEventListener("visibilitychange", _0x12795b);
        };
      }, [_0x12795b]);
      return _0x32671c.a.createElement("div", _0x2f131a, _0x32671c.a.createElement("div", _0x46c6cc, _0x32671c.a.createElement(_0x12c879, {
        coinCurrent: _0x2ac325,
        level: _0x3bb286,
        score: _0x4ec126,
        route: _0x3d0a74.history,
        showNewAward: function () {
          _0x27d60a.current.getMedalList();
        },
        showDailyPrice: function () {
          _0x140aef.current.showDailyPrice();
        },
        openTask: _0x84cf5,
        welfareReceive: _0x4afac7,
        signStatus: _0x14b1b7
      }), _0x32671c.a.createElement(_0x5a3833, {
        coinUnCollect: _0x176a70,
        coinVolume: _0x3c53f8,
        coinSecond: _0x10c5d2,
        getBaseInfo: _0x1d8cb0,
        getCurrentFriends: _0x197c7d,
        level: _0x3bb286,
        platform: _0x3d0a74.query.platform,
        ref: _0x419bd1,
        nowStep: _0x4350b5,
        changeNowStep: _0x5aa49f
      }), _0x32671c.a.createElement("div", _0x9690cb, _0x32671c.a.createElement(_0x2e4a43, {
        signStatus: _0x14b1b7,
        getBaseInfo: _0x1d8cb0,
        ref: _0x140aef,
        nowStep: _0x4350b5,
        changeNowStep: _0x5aa49f
      }), _0x32671c.a.createElement("div", {
        className: _0x66d76 ? "score-icon score-icon-active" : "score-icon",
        onClick: function () {
          var _0x5324cd = {
            operation: "点击成就奖励"
          };
          _0x11dbd9.a.loading("加载中...");
          _0x27d60a.current.getMedalList();
          _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_page_goldexchange_button", _0x5324cd);
        }
      }), _0x3bb286 <= 20 && _0x32671c.a.createElement("div", {
        className: "edu-icon",
        onClick: function () {
          _0x59c0af.a.request.trackLog("click_h5activity_goldenelephant_research");
          _0x4fccf1(!0);
        }
      })), _0x32671c.a.createElement(_0x2a59fb, {
        v: _0x3d0a74.query.v
      }), _0x32671c.a.createElement(_0x33f121, {
        ref: _0x59bd39,
        getBaseInfo: _0x1d8cb0,
        v: _0x3d0a74.query.v
      }), _0x32671c.a.createElement(_0x1fae8b, {
        userInfo: _0x3399ad,
        level: _0x3bb286,
        coinSecond: _0x10c5d2,
        currentFriends: _0x75865,
        getCurrentFriends: _0x197c7d
      }), _0x32671c.a.createElement(_0x4acfc9, {
        userInfo: _0x3399ad,
        getBaseInfo: _0x1d8cb0,
        ref: _0x2cb1a9,
        nowStep: _0x4350b5,
        changeNowStep: _0x5aa49f
      }), _0x32671c.a.createElement(_0x44db99, _0x21b1a4), _0x32671c.a.createElement(_0x252383, _0x347053), _0x32671c.a.createElement(_0x5ab307, {
        ref: _0x4773e6,
        openTask: _0x84cf5
      }), _0x2ff151 && _0x32671c.a.createElement(_0x3012ab, {
        ref: _0x4f7bb5,
        closeLoading: function () {
          _0x3a3a8f(!1);
          var _0x5559a8 = Object(_0x3066d4.g)(".topContent .gold-img"),
            _0x490d66 = document.querySelector(".elephantBox .num-con-gold-icon"),
            _0x24a104 = _0x490d66.getBoundingClientRect(),
            _0x6de67b = parseInt(_0x24a104.top - _0x5559a8.top - _0x5559a8.height + 10),
            _0x3c716b = parseInt(_0x5559a8.left - _0x24a104.left + (_0x5559a8.width - _0x24a104.width) / 2),
            _0x40585d = {
              type: "平时进入"
            };
          var _0x5dd486 = {
            flushCache: 0
          };
          _0x490d66.style.setProperty("--iconAniTop", "".concat(-_0x6de67b, "px"));
          _0x490d66.style.setProperty("--iconAniLeft", "".concat(_0x3c716b, "px"));
          _0x59c0af.a.request.trackLog("into_h5activity_goldenelephant_page", _0x40585d);
          Object(_0x2c3e37.c)(_0x3d0a74.query.v, "4.1.6") < 0 ? _0x59c0af.a.brige.getClipboard().then(function (_0x1c2511) {
            var _0x5dd80f = _0x1c2511.match(/ρσ([A-Z]{4})σρʊə(.*)əʊδε(.*)εδ/);
            _0x5dd80f && "JXZQ" === _0x5dd80f[1] ? _0x108f06.a.egMammonPopup({
              initiatorId: _0x5dd80f[3]
            }).then(function (_0x2d7e9e) {
              _0x2d7e9e.data.state >= 0 && _0x7d6b50.current.showModal(_0x2d7e9e.data.state, _0x2d7e9e.data.username, _0x2d7e9e.data.picUrl, _0x5dd80f[3]);
              _0x59c0af.a.brige.clearClipboard();
            }) : _0x408ffa && (_0x551e15.current.showModal(_0x4f2ab1, "auto"), _0x59c0af.a.request.trackLog("push_h5activity_goldenelephant_three_meals_task_popwin", {
              type: 3 === _0x4f2ab1 ? "第一次" : 4 === _0x4f2ab1 ? "第二次" : 5 === _0x4f2ab1 ? "第三次" : ""
            }));
          }, function (_0x1977ee) {
            console.log(_0x1977ee);
          }) : Object(_0x2c3e37.f)("copyClipboard", null, !0).then(function (_0x4de095) {
            var _0x38b4e3 = _0x4de095.str.match(/ρσ([A-Z]{4})σρʊə(.*)əʊδε(.*)εδ/);
            _0x38b4e3 && "JXZQ" === _0x38b4e3[1] ? _0x108f06.a.egMammonPopup({
              initiatorId: _0x38b4e3[3]
            }).then(function (_0x2241ed) {
              _0x2241ed.data.state >= 0 && _0x7d6b50.current.showModal(_0x2241ed.data.state, _0x2241ed.data.username, _0x2241ed.data.picUrl, _0x38b4e3[3]);
              _0x59c0af.a.brige.clearClipboard();
            }) : _0x408ffa && (_0x551e15.current.showModal(_0x4f2ab1, "auto"), _0x59c0af.a.request.trackLog("push_h5activity_goldenelephant_three_meals_task_popwin", {
              type: 3 === _0x4f2ab1 ? "第一次" : 4 === _0x4f2ab1 ? "第二次" : 5 === _0x4f2ab1 ? "第三次" : ""
            }));
          });
          _0x108f06.a.egMedalBeckon(_0x5dd486).then(function (_0xc5929) {
            _0x17371c(_0xc5929.data.available);
          });
        }
      }), _0x32671c.a.createElement("img", {
        className: "check-rule",
        alt: "",
        src: _0x3066d4.h + "check_rule.png",
        onClick: function () {
          var _0x1edf62 = {
            url: "https://m.fenxianglife.com/fms/100012/fa739786/index.html"
          };
          Object(_0x2c3e37.l)(_0x1edf62, "app");
        }
      })), _0x32671c.a.createElement(_0x31255f.a, _0x10430b, _0x32671c.a.createElement("div", _0x42005c, _0x32671c.a.createElement(_0x3eb0dd, null), _0x32671c.a.createElement("div", {
        className: "home-edu-close close-btn",
        onClick: function () {
          _0x4fccf1(!1);
        }
      }))), _0x32671c.a.createElement(_0x31255f.a, _0x165ccf, _0x32671c.a.createElement("div", _0xd8f23, _0x32671c.a.createElement(_0x30f3e8, {
        closeScoreList: _0x5aa3c6,
        userInfo: _0x3399ad,
        ref: _0x27d60a,
        setShowScore: _0x469c16
      }), _0x32671c.a.createElement("div", {
        className: "scoreList-close",
        onClick: _0x5aa3c6
      }))));
    };
  },
  757: function (_0xa887db, _0x4f41b6, _0x2e060b) {
    'use strict';

    _0x2e060b.d(_0x4f41b6, "k", function () {
      return _0x4f93cc;
    });
    _0x2e060b.d(_0x4f41b6, "i", function () {
      return _0x2d645e;
    });
    _0x2e060b.d(_0x4f41b6, "j", function () {
      return _0x5a4125;
    });
    _0x2e060b.d(_0x4f41b6, "n", function () {
      return _0x2975e1;
    });
    _0x2e060b.d(_0x4f41b6, "m", function () {
      return _0x130b3d;
    });
    _0x2e060b.d(_0x4f41b6, "b", function () {
      return _0x36c1aa;
    });
    _0x2e060b.d(_0x4f41b6, "e", function () {
      return _0x34a835;
    });
    _0x2e060b.d(_0x4f41b6, "f", function () {
      return _0x16191f;
    });
    _0x2e060b.d(_0x4f41b6, "c", function () {
      return _0x1c992f;
    });
    _0x2e060b.d(_0x4f41b6, "l", function () {
      return _0x1b2273;
    });
    _0x2e060b.d(_0x4f41b6, "o", function () {
      return _0x33b2b1;
    });
    _0x2e060b.d(_0x4f41b6, "g", function () {
      return _0x569ca2;
    });
    _0x2e060b.d(_0x4f41b6, "h", function () {
      return _0x2feb94;
    });
    _0x2e060b.d(_0x4f41b6, "d", function () {
      return _0x127ef3;
    });
    _0x2e060b.d(_0x4f41b6, "a", function () {
      return _0x3bf4e0;
    });
    _0x2e060b(10);
    var _0x8bc321 = _0x2e060b(26),
      _0x13c00b = _0x2e060b.n(_0x8bc321),
      _0x4dd170 = _0x2e060b(16),
      _0x4f93cc = function (_0x330f95, _0x2b5a91) {
        var _0x1e8d49 = _0x330f95 / _0x2b5a91 * 100;
        _0x1e8d49 < 100 && "100.0" === _0x1e8d49.toFixed(1) && (_0x1e8d49 = 99.9);
        return _0x1e8d49.toFixed(1) + "%";
      },
      _0x2d645e = function (_0x49b8f) {
        return _0x49b8f.toString().replace(/(\d+?)(?=(?:\d{3})+$)/g, "$1,");
      },
      _0x5a4125 = function (_0x3f1573) {
        return _0x3f1573 >= 10000 ? _0x3f1573 / 10000 + "万" : _0x3f1573;
      },
      _0x2975e1 = function (_0x55b22f, _0x29689d) {
        var _0xcc526d = parseInt(_0x55b22f / 3600) < 10 ? "0" + parseInt(_0x55b22f / 3600) : parseInt(_0x55b22f / 3600),
          _0x530be3 = parseInt(_0x55b22f / 60 % 60) < 10 ? "0" + parseInt(_0x55b22f / 60 % 60) : parseInt(_0x55b22f / 60 % 60),
          _0x360a2a = parseInt(_0x55b22f / 60) < 10 ? "0" + parseInt(_0x55b22f / 60) : parseInt(_0x55b22f / 60),
          _0x1eedd7 = parseInt(_0x55b22f % 60) < 10 ? "0" + parseInt(_0x55b22f % 60) : parseInt(_0x55b22f % 60);
        return _0x29689d ? "".concat(_0x360a2a, ":").concat(_0x1eedd7) : "".concat(_0xcc526d, ":").concat(_0x530be3, ":").concat(_0x1eedd7);
      },
      _0x130b3d = function (_0x418dc1) {
        var _0x35d2ca = new Date(1000 * _0x418dc1);
        return "".concat(_0x35d2ca.getFullYear(), "年").concat(_0x35d2ca.getMonth() + 1, "月").concat(_0x35d2ca.getDate(), "日 ").concat(_0x35d2ca.getHours() > 9 ? _0x35d2ca.getHours() : "0" + _0x35d2ca.getHours(), ":").concat(_0x35d2ca.getMinutes() > 9 ? _0x35d2ca.getMinutes() : "0" + _0x35d2ca.getMinutes(), ":").concat(_0x35d2ca.getSeconds() > 9 ? _0x35d2ca.getSeconds() : "0" + _0x35d2ca.getSeconds());
      },
      _0x36c1aa = function (_0xedbe8c) {
        var _0x139d7c = new Date(1000 * _0xedbe8c);
        return "".concat(_0x139d7c.getFullYear(), ".").concat(_0x139d7c.getMonth() + 1 > 9 ? _0x139d7c.getMonth() + 1 : "0" + (_0x139d7c.getMonth() + 1), ".").concat(_0x139d7c.getDate() > 9 ? _0x139d7c.getDate() : "0" + _0x139d7c.getDate());
      },
      _0x34a835 = function (_0x4c1932) {
        var _0x420d99 = document.querySelector(".contribute-mask");
        _0x420d99 && (_0x420d99.style.transform = "translateZ(".concat(_0x4c1932, "px)"));
      },
      _0x16191f = function (_0x3f703a) {
        var _0x2195b9 = [3, 4, 5];
        _0x3f703a.fuPackCanget = !0;
        _0x3f703a.fuPackDown = !1;
        _0x3f703a.fuPackStr = "领取";
        _0x3f703a.taskId === _0x2195b9[0] && _0x3f703a.cd > 0 && (_0x3f703a.fuPackCanget = !1, _0x3f703a.fuPackStr = "07:00开启");
        _0x3f703a.taskId === _0x2195b9[1] && _0x3f703a.cd > 0 && (_0x3f703a.fuPackCanget = !1, _0x3f703a.fuPackStr = "12:00开启");
        _0x3f703a.taskId === _0x2195b9[2] && (2 === _0x3f703a.directGet && (_0x3f703a.fuPackCanget = !1, _0x3f703a.fuPackDown = !0, _0x3f703a.fuPackStr = "明日再来"), _0x3f703a.cd > 0 && (_0x3f703a.fuPackCanget = !1, _0x3f703a.fuPackStr = "18:00开启"));
        return _0x3f703a;
      },
      _0x1c992f = function (_0x56399d, _0xf6c978) {
        _0x56399d = _0x56399d.split(".");
        _0xf6c978 = _0xf6c978.split(".");
        for (var _0xc06601 = Math.max(_0x56399d.length, _0xf6c978.length); _0x56399d.length < _0xc06601;) {
          _0x56399d.push("0");
        }
        for (; _0xf6c978.length < _0xc06601;) {
          _0xf6c978.push("0");
        }
        for (var _0x5ed43 = 0; _0x5ed43 < _0xc06601; _0x5ed43++) {
          var _0x170965 = parseInt(_0x56399d[_0x5ed43]),
            _0x1cf593 = parseInt(_0xf6c978[_0x5ed43]);
          if (_0x170965 > _0x1cf593) {
            return 1;
          }
          if (_0x170965 < _0x1cf593) {
            return -1;
          }
        }
        return 0;
      },
      _0x1b2273 = function (_0x51b59e) {
        var _0x4974ef = {
            gameType: 2,
            taskId: _0x4a3ef0.id,
            award: _0x4a3ef0.rewards[0].rewardMin,
            taskType: _0x4a3ef0.clientType,
            title: _0x4a3ef0.name,
            desc: _0x4a3ef0.description,
            picUrl: _0x4a3ef0.picUrl,
            directGet: _0x4a3ef0.taskCompleteProgressState,
            finish: _0x4a3ef0.taskChanceUse >= _0x4a3ef0.taskChance,
            cd: _0x4a3ef0.countDown,
            cdGoDown: _0x51b59e.intervalStatus,
            needVersion: _0x4a3ef0.needVersion,
            needAuthorization: _0x4a3ef0.needAuthorization,
            leftText: _0x4a3ef0.leftText,
            middleText: _0x4a3ef0.middleText,
            rightText: _0x4a3ef0.rightText,
            finishText: _0x4a3ef0.finishText,
            millis: _0x4a3ef0.taskDuration,
            url: _0x4a3ef0.targetUrl,
            delay: _0x4a3ef0.delayTime,
            taskTimeList: _0x4a3ef0.taskTimeList,
            wechatBind: _0x4a3ef0.wechatBind,
            buttonName: _0x4a3ef0.buttonName,
            handleType: _0x4a3ef0.handleType
          },
          _0x4a3ef0 = _0x51b59e.item;
        return _0x4974ef;
      },
      _0x33b2b1 = function (_0x21fa08) {
        var _0x11bc15 = {
          operation: _0x21fa08.title || ""
        };
        Object(_0x4dd170.m)("click_h5activity_goldenelephant_page_tasklist", _0x11bc15);
      },
      _0x569ca2 = function (_0x4268c9) {
        return document.querySelector(_0x4268c9).getBoundingClientRect();
      },
      _0x2feb94 = "https://static.fenxianglife.com/ui/h5-activity/persistent/goldenElephant/",
      _0x127ef3 = function (_0x5b92fb) {
        for (var _0xc78a5 = [], _0x409ca5 = 0; _0x409ca5 < _0x5b92fb; _0x409ca5++) {
          var _0x3d0ea6 = {
            left: parseInt(90 * Math.random() - 5) + "%",
            scale: 0.6 * Math.random() + 0.7,
            time: 3.5 * Math.random() + 2 + "s",
            delay: 13 * Math.random() + "s"
          };
          _0xc78a5.push(_0x3d0ea6);
        }
        return _0xc78a5;
      },
      _0x3bf4e0 = function () {
        var _0x4c64e7 = _0x13c00b.a.parse(window.location.search),
          _0x47e043 = encodeURIComponent("channel=fxly&fxUserId=".concat(_0x4c64e7.uid)),
          _0x10252c = encodeURIComponent("aliGroup2"),
          _0x55e2df = "alipays://platformapi/startapp?appId=".concat("2021003161604296", "&page=pages/excitingGoods/excitingGoods?jumpType=").concat(_0x10252c, "&query=").concat(_0x47e043);
        location.href = _0x55e2df;
      };
  },
  762: function (_0x3d4cc3, _0x2caa03, _0x34f173) {},
  764: function (_0x48bb9b, _0x27682f, _0x50dc9e) {},
  766: function (_0x134918, _0x2ab84e, _0x51ad7) {},
  768: function (_0x66a049, _0x3c550f, _0xf334ff) {},
  770: function (_0xfcd6c8, _0x2730a5, _0x336417) {},
  772: function (_0x2e8e3, _0x36fa22, _0x47fc0c) {},
  774: function (_0x2ddb31, _0x11023b, _0x4cb6f7) {},
  776: function (_0x4ce31a, _0x3b2bd4, _0x1afb54) {},
  778: function (_0x49de3e, _0x8654d6, _0x56982e) {},
  780: function (_0x32566e, _0x1119c7, _0x399a06) {},
  782: function (_0x6592e6, _0x1fc6cb, _0x566b95) {},
  784: function (_0x3d208b, _0x501a7c, _0x54d4ea) {},
  786: function (_0x9fc5ee, _0x1f64f6, _0x1b3fc9) {},
  788: function (_0x421841, _0x45dabf, _0xb36bca) {},
  790: function (_0x325ff2, _0x2423b2, _0x47c9f5) {},
  792: function (_0x5347fc, _0x3f6492, _0x3b86f3) {},
  794: function (_0x4fa5d9, _0xf5c2cf, _0xb2a27c) {},
  796: function (_0x5db459, _0x13367e, _0x1c62ad) {},
  798: function (_0x3cbc30, _0x178888, _0x2818db) {},
  800: function (_0x87a35e, _0x2329ad, _0x143821) {},
  802: function (_0x5cc6bc, _0x3202a0, _0x585fd1) {},
  804: function (_0x437710, _0x44c396, _0x532391) {},
  806: function (_0x447b9a, _0x3fd7ac, _0x45a389) {},
  808: function (_0x1f087e, _0x28e785, _0x5a46b1) {},
  810: function (_0x463fb8, _0x6ef7d2, _0xfd702f) {},
  812: function (_0x3fee84, _0x8c901d, _0x240b2d) {}
}]);