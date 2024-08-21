(window.webpackJsonp = window.webpackJsonp || []).push([[9, 2], {
  14: function (_0x5d8701, _0x17b110) {
    var _0x2f76e6 = {
        development: "https://k8s-api-test.fenxianglife.com/test1",
        test: "https://k8s-api-test.fenxianglife.com",
        pre: "https://api-pre.fenxianglife.com",
        prod: "https://api".concat("-1", ".fenxianglife.com")
      },
      _0x16810b = _0x2f76e6.prod || "";
    "prod".includes("test") ? _0x16810b = "".concat(_0x2f76e6.test, "/").concat("prod") : "prod".includes("dev") && (_0x16810b = "".concat(_0x2f76e6.dev, "/").concat("prod"));
    var _0x3d5add = "".concat(_0x16810b, "/njia"),
      _0x26fa56 = "https://cms.fenxianglife.com/njia-cms",
      _0x466743 = "https://fenxiang-find-api.fenxianglife.com/fenxiang-find",
      _0x355e70 = "https://njia-live-api.fenxianglife.com/njia-live",
      _0x23c8d6 = "https://wx-robot-api.fenxianglife.com/fenxiang-wxrobot",
      _0x1f50d3 = "https://self-api".concat("-1", ".fenxianglife.com/njia-self"),
      _0x3c5f75 = _0x2f76e6.prod || _0x2f76e6.development,
      _0x561275 = {
        host: _0x2f76e6,
        curHost: _0x3c5f75,
        apiNjia: _0x3d5add,
        apiWxRobot: _0x23c8d6,
        apiNjiaLive: _0x355e70,
        apiNjiaSelf: _0x1f50d3,
        apiFind: _0x466743,
        curCrmHost: _0x26fa56
      };
    _0x5d8701.exports = _0x561275;
  },
  21: function (_0x2987d6, _0x83144f, _0x9a0de) {
    'use strict';

    var _0x554573 = {
      business: "njia",
      prodDomin: "https://api.fenxianglife.com"
    };
    var _0x43c1b9 = {
      business: "njia",
      prodDomin: "https://api-1.fenxianglife.com"
    };
    var _0x3c8fd5 = {
      business: "njia-self",
      prodDomin: "https://self-api.fenxianglife.com"
    };
    var _0x3477ac = {
      business: "njia-self",
      prodDomin: "https://self-api-1.fenxianglife.com"
    };
    var _0xf0ab52 = {
      business: "ilu-self",
      prodDomin: "https://api.kuaidandan.com"
    };
    var _0x27775b = {
      business: "njia-live",
      prodDomin: "https://njia-live-api.fenxianglife.com"
    };
    var _0x45700e = {
      business: "fenxiang-find",
      prodDomin: "https://fenxiang-find-api.fenxianglife.com"
    };
    var _0x45dab8 = {
      business: "fenxiang-wxrobot",
      prodDomin: "https://wx-robot-api.fenxianglife.com"
    };
    var _0x1dc9dc = {
      business: "ibuy-tdd",
      prodDomin: "https://api.tuandongdong.cn"
    };
    var _0x9f401b = {
      business: "ibuy-tdd-cms",
      prodDomin: "https://api.tuandongdong.cn"
    };
    var _0x37906e = {
      business: "ggyp-cms",
      prodDomin: "https://api.guaguayoupin.com"
    };
    var _0x5b16d5 = {
      business: "ibuy-tdd-saas",
      prodDomin: "https://api.tuandongdong.com.cn"
    };
    var _0x4e82ed = {
      business: "ggyp-scm",
      prodDomin: "https://api.guaguayoupin.com"
    };
    var _0x2e31a7 = {
      business: "ggyp-note",
      prodDomin: "https://api.guaguayoupin.com"
    };
    var _0xb937f4,
      _0x201340 = _0x9a0de(45),
      _0x2048bb = _0x9a0de(14),
      _0x23850f = _0x9a0de(138),
      _0x15d858 = (_0x9a0de(62), _0x9a0de(13)),
      _0x36aab4 = _0x9a0de.n(_0x15d858),
      _0x3e6a23 = _0x9a0de(16),
      _0x535cca = {
        localEnv: "test2",
        buildEnv: "prod"
      },
      _0x5a9212 = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x554573)),
      _0x80e692 = "secretKey",
      _0x1da60d = "requestValidationMode",
      _0x321864 = new _0x3e6a23.b({
        baseURL: _0x5a9212
      }, (_0xb937f4 = {}, Object(_0x23850f.a)(_0xb937f4, _0x80e692, "03226195a6664725a3372595ab474937"), Object(_0x23850f.a)(_0xb937f4, _0x1da60d, "h5"), Object(_0x23850f.a)(_0xb937f4, "requestFailCallBack", function (_0x58da25) {
        var _0x8c4433 = (_0x58da25 || {}).message;
        _0x36aab4.a.hide();
        _0x36aab4.a.info(_0x8c4433 || "系统开小差了，请稍后再试～");
      }), _0xb937f4)),
      _0x788824 = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x43c1b9)),
      _0x5f02b7 = new _0x3e6a23.a(_0x788824, "h5"),
      _0x547951 = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x3c8fd5)),
      _0x10602c = new _0x3e6a23.a(_0x547951, "h5"),
      _0xfd9e4e = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x3477ac)),
      _0x15f294 = (new _0x3e6a23.a(_0xfd9e4e, "h5"), Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0xf0ab52))),
      _0xb85e6e = new _0x3e6a23.a(_0x15f294, "h5"),
      _0x54aead = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x27775b)),
      _0xa67b93 = (new _0x3e6a23.a(_0x54aead, "h5"), Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x45700e))),
      _0x252a3f = (new _0x3e6a23.a(_0xa67b93, "h5"), Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x45dab8))),
      _0x349262 = new _0x3e6a23.a(_0x252a3f, "h5"),
      _0x385280 = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x1dc9dc)),
      _0x4c85c8 = new _0x3e6a23.a(_0x385280, "h5"),
      _0x32bc0e = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x9f401b)),
      _0x25085d = new _0x3e6a23.a(_0x32bc0e, "h5"),
      _0x23fb73 = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x37906e)),
      _0x535a66 = new _0x3e6a23.a(_0x23fb73, "h5"),
      _0x84ceb5 = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x5b16d5)),
      _0x32faa8 = new _0x3e6a23.a(_0x84ceb5, "h5"),
      _0x41c551 = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x4e82ed)),
      _0x4bd6cc = new _0x3e6a23.a(_0x41c551, "h5"),
      _0x7079c3 = Object(_0x3e6a23.d)(Object(_0x201340.a)({}, _0x535cca, _0x2e31a7)),
      _0x26c786 = new _0x3e6a23.a(_0x7079c3, "h5"),
      _0x4747f1 = {
        getTopicInfoV2: _0x321864.get("/topic/info"),
        topicGoods: _0x321864.get("/topic/v2/goods"),
        getTopicGoods: _0x321864.get("/topic/goods")
      },
      _0xfa8359 = _0x9a0de(64),
      _0x4ebfbe = _0x9a0de.n(_0xfa8359),
      _0x5dd34a = _0x9a0de(151),
      _0xe88b23 = _0x9a0de(32),
      _0x2b4978 = _0x9a0de.n(_0xe88b23),
      _0xa1234 = _0x9a0de(188),
      _0x40ed11 = _0x9a0de.n(_0xa1234),
      _0xb9d70c = _0x9a0de(10),
      _0x2d8a14 = _0x9a0de(26),
      _0xfb4626 = _0x9a0de.n(_0x2d8a14);
    function _0x20173e(_0x552e80) {
      return {}.toString.call(_0x552e80).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
    function _0x33465e(_0x57ffb2) {
      _0x40ed11.a.forEach(_0x57ffb2, function (_0x4d0fb6, _0x1490bc) {
        null === _0x4d0fb6 && delete _0x57ffb2[_0x1490bc];
        "string" === _0x20173e(_0x4d0fb6) ? _0x57ffb2[_0x1490bc] = _0x4d0fb6.trim() : "object" === _0x20173e(_0x4d0fb6) ? _0x57ffb2[_0x1490bc] = _0x33465e(_0x4d0fb6) : "array" === _0x20173e(_0x4d0fb6) && (_0x57ffb2[_0x1490bc] = _0x33465e(_0x4d0fb6));
      });
      return _0x57ffb2;
    }
    _0x2b4978.a.defaults.baseURL = _0x2048bb.apiNjia;
    var _0x5092a0 = function () {
        var _0x186541 = Object(_0x5dd34a.a)(_0x4ebfbe.a.mark(function _0x878c2(_0x49196f, _0x22ac4f, _0x3cb7ca, _0x57677b) {
          var _0x340f75, _0x2a25cb;
          return _0x4ebfbe.a.wrap(function (_0x24e8c7) {
            for (;;) {
              switch (_0x24e8c7.prev = _0x24e8c7.next) {
                case 0:
                  var _0x285175 = {
                    "Content-Type": "application/json"
                  };
                  _0x340f75 = _0x285175;
                  _0x3cb7ca && _0x3cb7ca.headers && (Object.assign(_0x340f75, JSON.parse(JSON.stringify(_0x3cb7ca.headers))), delete _0x3cb7ca.headers);
                  _0x340f75.traceId || (_0x340f75.traceId = "h5-".concat(new Date().getTime(), "-").concat(Math.random().toString(36).substring(2)));
                  _0x24e8c7.next = 5;
                  return _0xb9d70c.a.utils.getH5Finger();
                case 5:
                  if (_0x24e8c7.t0 = _0x24e8c7.sent, _0x24e8c7.t0) {
                    _0x24e8c7.next = 8;
                    break;
                  }
                  _0x24e8c7.t0 = "";
                case 8:
                  _0x2a25cb = _0x24e8c7.t0;
                  return _0x24e8c7.abrupt("return", new Promise(function (_0x4a98ed, _0x42e85b) {
                    var _0x37e4dc = _0xfb4626.a.parse(window.location.search),
                      _0x1be872 = _0x37e4dc.uid,
                      _0x5640d7 = _0x37e4dc.token,
                      _0x42fba4 = _0x37e4dc.platform,
                      _0x195292 = _0x37e4dc.did,
                      _0x482bea = _0x37e4dc.v,
                      _0x1e9e7d = 8000;
                    if (_0x1be872 && _0x5640d7 && (_0x340f75["h5-tk"] = JSON.stringify({
                      token: _0x5640d7,
                      uid: _0x1be872,
                      did: _0x195292,
                      finger: _0x2a25cb,
                      ver: _0x482bea
                    })), _0x57677b && (!_0x5640d7 || !_0x1be872)) {
                      ["ios", "android"].includes(_0x42fba4) && _0xb9d70c.a.brige.openLogin();
                      !_0x42fba4 && _0x36aab4.a.info("请先登录");
                      return void _0x42e85b();
                    }
                    _0x3cb7ca && "object" == typeof _0x3cb7ca && (_0x3cb7ca = _0x33465e(_0x3cb7ca));
                    _0x3cb7ca && _0x3cb7ca.timeout && _0x3cb7ca.timeout > 8000 && (_0x1e9e7d = _0x3cb7ca.timeout, delete _0x3cb7ca.timeout);
                    _0x2b4978()({
                      method: _0x49196f,
                      url: _0x22ac4f,
                      data: "POST" === _0x49196f || "PUT" === _0x49196f ? JSON.stringify(_0x3cb7ca) : null,
                      params: "GET" === _0x49196f || "DELETE" === _0x49196f ? _0x3cb7ca : null,
                      headers: _0x340f75,
                      timeout: _0x1e9e7d
                    }).then(function (_0x3fac23) {
                      var _0x490da0 = _0x3fac23.data.code,
                        _0x124e08 = {
                          "45011": 1,
                          "45012": 2
                        };
                      200 === _0x490da0 ? _0x4a98ed(_0x3fac23.data) : _0x124e08[_0x490da0] ? (_0xb9d70c.a.brige.buildRelationId({
                        showBindView: 1,
                        pubType: _0x124e08[_0x490da0]
                      }), _0x42e85b(_0x3fac23.data)) : (_0x3fac23.data.message && _0x36aab4.a.info(_0x3fac23.data.message, 3), _0x42e85b(_0x3fac23.data));
                    }).catch(function () {
                      var _0x4bb9ea = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        _0x531a75 = _0x4bb9ea.response || {};
                      ("ECONNABORTED" === _0x4bb9ea.code && -1 !== _0x4bb9ea.message.indexOf("timeout") || _0x531a75.status >= 500) && _0x36aab4.a.offline("很抱歉，当前访问人数太多啦，请稍后再试", 1);
                      _0x42e85b(_0x4bb9ea);
                    });
                  }));
                case 10:
                case "end":
                  return _0x24e8c7.stop();
              }
            }
          }, _0x878c2);
        }));
        return function (_0x2ecd06, _0x1cb462, _0x489deb, _0x458447) {
          return _0x186541.apply(this, arguments);
        };
      }(),
      _0x46b506 = {
        get: function (_0x3099bf, _0x3de863) {
          return function (_0x1688d1) {
            return _0x5092a0("GET", _0x3099bf, _0x1688d1, _0x3de863);
          };
        },
        getById: function (_0x3c16f7, _0x285695) {
          return function (_0x53ff06) {
            return _0x5092a0("GET", "".concat(_0x3c16f7, "/").concat(_0x53ff06.id), null, _0x285695);
          };
        },
        post: function (_0x3d9f30, _0x1d15f1, _0x56a83f) {
          return function (_0x41f7b2) {
            return _0x5092a0("POST", _0x3d9f30, _0x41f7b2, _0x1d15f1, _0x56a83f);
          };
        },
        postById: function (_0xcdd4e, _0x3cfea4) {
          return function (_0xf14b5d) {
            return _0x5092a0("POST", "".concat(_0xcdd4e, "/").concat(_0xf14b5d.id), _0xf14b5d, _0x3cfea4);
          };
        }
      },
      _0x1a8d54 = {
        getItemConvert: _0x321864.get("/util/item/info"),
        getWxToken: _0x321864.get("/wx/mp/oAuth2Info"),
        wxSign: _0x321864.post("/wx/mp/wechat/sign"),
        trackLog: _0x46b506.post("/util/track/log"),
        wifi: _0x46b506.get("/util/wfs"),
        buildRelationId: _0x321864.get("/relation/buildRelationId"),
        getModule: _0x321864.get("/util/point/center/module"),
        convertUrl: _0x321864.get("/util/convert/url", !0),
        getBanner: _0x321864.get("/util/banner"),
        convertUrlv2: _0x321864.get("/util/convert/url/v2", !0),
        getDynamicDomain: _0x321864.get("/util/domain"),
        getPID: _0x46b506.get("/util/userPid/3"),
        getConvertBatchUrl: _0x321864.post("/util/convertBatchUrl", !0),
        getExtensionLink: _0x321864.post("/util/extension/link", !0),
        convertUrlNoLogin: _0x321864.get("/util/convert/nologin/url"),
        convertUrlV3: _0x321864.get("/util/convert/url/v3"),
        getDomain: _0x321864.get("/util/domain/v2"),
        getNormalConfig: _0x321864.get("/config"),
        uploadApi: _0x321864.post("/util/upload"),
        getTkl: _0x321864.post("/util/convert/item/tpwd", !1),
        getTBProduct: _0x321864.get("/goods/getTBItem"),
        getShortLink: _0x321864.post("/util/tklToShortLink", !0),
        getShortLinkV2: _0x321864.post("/privatecoop/tklToLink", !0),
        getWechatSchemeUrl: _0x321864.get("/util/wechat/scheme"),
        getJDShortLink: _0x321864.post("/util/jDToShortLink"),
        getCnggShortLink: _0x321864.get("/util/convert/cnggUrl"),
        pddConvertUrlApi: _0x321864.post("/privateLinks/pddConvertUrl"),
        jdConvertUrlApi: _0x321864.post("/privateLinks/jdConvertUrl"),
        getAliAuth: _0x321864.post("/alipay/cluster/auth", !0)
      },
      _0x10f419 = {
        pricesCategory: _0x46b506.post("/mmz/item/category", !0),
        pricesList: _0x46b506.post("/mmz/item/list", !0)
      },
      _0x4fbb26 = {
        orderDonateCreate: _0x321864.post("/order/donate/create", !0),
        orderDonateSubmit: _0x321864.post("/order/donate/submit", !0),
        orderDonateSubmitV2: _0x321864.post("/order/donate/submit/v2", !0),
        needVerificationOrders: _0x321864.post("/order/needVerification/orders"),
        verifyOrders: _0x321864.post("/order/verify/orders", !0),
        searchOrders: _0x321864.post("/order/search/orders", !0),
        cancelZhunaOrder: _0x321864.post("/order/search/cancelOrder/zhunaer", !0),
        thirdOrders: _0x321864.get("/order/third/orders", !0),
        getCardOrderList: _0x321864.get("/order/card/orders", !0),
        getCardOrderCount: _0x321864.get("/order/card/order/count", !0),
        deleteCardOrder: _0x321864.post("/order/card/order/delete", !0),
        getCardOrderTip: _0x321864.get("/card/order/tips", !0)
      },
      _0x483840 = {
        donationCertificate: _0x5f02b7.get("/donation/certificate", !0),
        donationCount: _0x5f02b7.get("/donation/count", !0),
        donationDetail: _0x5f02b7.post("/donation/certificate/details", !0),
        donationOrderDetail: _0x5f02b7.post("/donation/order/details", !0),
        donationIndex: _0x5f02b7.get("/donation/index", !1),
        donationHeadPics: _0x5f02b7.get("/donation/headPics", !1),
        donationRanklist: _0x5f02b7.get("/donation/rankList", !1),
        donationSwitch: _0x5f02b7.post("/donation/switch/v2", !0)
      },
      _0x1ebf15 = {
        taoCategory: _0x321864.get("/index/category"),
        goodsDetail: _0x46b506.get("/goods/detail"),
        goodsClickUrl: _0x321864.post("/goods/clickUrl", !0),
        goodsSearchMulti: _0x321864.post("/goods/search/multi"),
        goodsSearchExtra: _0x321864.post("/goods/search/extra"),
        goodsSearchItem: _0x321864.post("/search/item"),
        goodsSelection: _0x321864.post("/goods/selection"),
        getPddoAuthLink: _0x321864.get("/goods/pdd/oauth", !0),
        getBrandPavilion: _0x321864.get("/brandPavilion/index")
      },
      _0x4ae8a6 = {
        scoreIndex: _0x321864.post("/rewardPoints/scoreIndex", !0),
        getScoreChangeList: _0x321864.post("/rewardPoints/getScoreChangeList", !0),
        socreInfo: _0x321864.get("/rewardPoints/scoreInfo", !0),
        exchangeRecordList: _0x321864.get("/rewardPoints/list"),
        notifyGetScoreEvent: _0x321864.post("/rewardPoints/notifyGetScoreEvent", !0),
        checkFinishTask: _0x321864.post("/rewardPoints/checkFinishTask", !0),
        getCurrencyIndexInfo: _0x321864.post("/rewardPoints/V2/scoreIndex", !0),
        getCurrencyInfoAndTask: _0x321864.get("/rewardPoints/scoreTask", !0),
        getCurrencyUserWheelCount: _0x321864.get("/winners/haveDrawChance", !0),
        getCurrencyTljExchangeList: _0x321864.post("/rewardPoints/item/list", !0),
        getCurrencyTljExchangeDetail: _0x321864.get("/rewardPoints/item/detail", !0),
        toCurrencyExchange: _0x321864.post("/rewardPoints/item/clickUrl", !0),
        createCurrencyHelpTask: _0x321864.post("/rewardPoints/share/task/info", !0),
        complateCurrencyHelpTask: _0x321864.post("/rewardPoints/share/task/assist", !1),
        signCurrencyV2Seckill: _0x321864.post("/rewardPoints/seckill/subscribe", !0),
        getCurrencyV2Seckill: _0x321864.get("/rewardPoints/seckill/list")
      },
      _0x25df9d = {
        userInfo: _0x321864.get("/users/info", !0),
        userRelationInfo: _0x321864.get("/users/relation/info", !0),
        simpleUserInfo: _0x321864.get("/users/info/simple"),
        userTutor: _0x321864.post("/users/recommend/tutor", !0),
        makeUserLogoutSure: _0x321864.post("/users/logout/sure", !0),
        getUserLogoutDetail: _0x321864.get("/users/logout/detail", !0),
        getUserPid: _0x321864.get("/users/users/getUserPid", !0),
        getRelationInfo: _0x321864.get("users/relation/info", !0),
        getUserPidInfoApi: _0x321864.get("/users/pid/info", !0),
        getWxBindApi: _0x321864.get("/game/userWechatBind", !0)
      },
      _0x14b4b5 = {
        currencyList: _0x46b506.post("".concat(_0x2048bb.apiNjiaSelf, "/coupon/user/currencyList"), !0),
        exchangecoupon: _0x46b506.post("".concat(_0x2048bb.apiNjiaSelf, "/coupon/user/exchangecoupon"), !0),
        channelItemList: _0x46b506.post("".concat(_0x2048bb.apiNjiaSelf, "/channel/channelItemList"), !0),
        rewardCouponInfo: _0x46b506.post("".concat(_0x2048bb.apiNjiaSelf, "/coupon/user/rewardCouponInfo"), !0),
        getSelfTopicGoods: _0x46b506.post("".concat(_0x2048bb.apiNjiaSelf, "/topic/findTopicItemsV2")),
        getSelfSeckillGoods: _0x46b506.post("".concat(_0x2048bb.apiNjiaSelf, "/topic/topicItemsSeckill")),
        getGiftDetail: _0x46b506.get("".concat(_0x2048bb.apiNjiaSelf, "/item/giftDetail")),
        getOrderCount: _0x10602c.get("".concat(_0x2048bb.apiNjiaSelf, "/order/h5/orderCount"), !0),
        addSelfItemShare: _0x46b506.get("".concat(_0x2048bb.apiNjiaSelf, "/item/share")),
        getDonationRecord: _0x46b506.post("".concat(_0x2048bb.apiNjiaSelf, "/wuhan/donationRecord")),
        getDonationActivity: _0x46b506.post("".concat(_0x2048bb.apiNjiaSelf, "/wuhan/donationActivity"), !0),
        getShareImg: _0x46b506.get("".concat(_0x2048bb.apiNjiaSelf, "/wx/getShareImg"), !0),
        createQrcode: _0x10602c.get("".concat(_0x2048bb.apiNjiaSelf, "/wx/wechatMin/createQrcode"), !0),
        getServiceTabInfo: _0x10602c.post("".concat(_0x2048bb.apiNjiaSelf, "/customerService/list")),
        getQuestionDetail: _0x10602c.get("".concat(_0x2048bb.apiNjiaSelf, "/customerService/detail")),
        getItemFindGiftItems: _0x46b506.get("".concat(_0x2048bb.apiNjiaSelf, "/item/findGiftItems/v3")),
        vipRights: _0x10602c.post("".concat(_0x2048bb.apiNjiaSelf, "/vip/discount/list"), !0),
        vipRightsLog: _0x10602c.post("".concat(_0x2048bb.apiNjiaSelf, "/vip/discount/order/list"), !0),
        getNewsItems: _0x10602c.get("/item/findChannelItems", !0),
        getCoupon: _0x10602c.post("/coupon/user/get", !0)
      },
      _0x1a4605 = {
        getWphIndex: _0x321864.get("/activity/vip/popularize", !0),
        getWphFans: _0x321864.get("/activity/vip/popularize/fans", !0),
        signUpWphAct: _0x321864.post("/activity/sign/up", !0),
        getActSceneIndex: _0x321864.get("/activity/scene"),
        getS11DrawIndex: _0x321864.get("/conquer/index", !0),
        getS11DrawPrize: _0x321864.get("/conquer/prize/list"),
        getS11DrawRes: _0x321864.post("/conquer/draw", !0),
        getS11DrawRecord: _0x321864.get("/conquer/win/prize/list", !0),
        getFreeVipIndex: _0x321864.get("/vipBenefitTask/index", !0),
        setFreeVipReminder: _0x321864.post("/vipBenefitTask/reminder", !0),
        getGiveFansIndex: _0x321864.get("/giveFans/index", !0),
        getFansDayPreInfo: _0x321864.get("/fansFestival/preheat/index"),
        setFansDayPreState: _0x321864.post("/fansFestival/preheat/reminder", !0),
        getFansDayInfo: _0x321864.get("/fansFestival/index"),
        getFansDaySubVenue: _0x321864.get("/fansFestival/subVenue"),
        getFansDayTljUrl: _0x321864.post("/fansFestival/tlj/clickUrl"),
        getFansDayGuessLike: _0x321864.get("/fansFestival/guess/like"),
        getMaterialActIndex: _0x321864.get("/invite/index", !0),
        joinMaterialAct: _0x321864.post("/invite/join", !0),
        getMaterialActFans: _0x321864.get("/invite/fans/detail", !0),
        getMifenIndex: _0x321864.post("/xiaomi/activity/section/home"),
        startMifenDrawing: _0x321864.post("/xiaomi/activity/draw"),
        getMifenRecord: _0x321864.post("/xiaomi/activity/winningRecord"),
        getMifenOrders: _0x321864.post("/xiaomi/activity/third/order"),
        getYearEndDrawInfo: _0x321864.get("/winners/year/draw"),
        drawList: _0x321864.get("/prize/drawList"),
        prizeUserList: _0x321864.post("/winners/prizeUserList", !0),
        scoreDrawing: _0x321864.post("/winners/scoreDrawing", !0),
        getTbUrl: _0x321864.get("/official/activity/getActivityLink"),
        getElmUrl: _0x321864.get("/official/activity/aliLife/getActivityLink"),
        signUp: _0x46b506.post("/signup/users/createOrModify"),
        getSignUpInfo: _0x46b506.get("/signup/users/list"),
        getCustomerManagerWX: _0x46b506.post("/vipTrade/payWechat"),
        getTeamOrderRank: _0x46b506.get("/activity/team/order/rank"),
        getTeamOrderStatistics: _0x46b506.get("/activity/team/order/statistics", !0),
        getTljGoodsV2: _0x321864.get("/tlj/activity/itemsNewV2"),
        receiveTljRedEnvelope: _0x321864.post("/tlj/activity/receiveRedEnvelope", !0),
        getTljInfo: _0x321864.get("/tlj/activity/index"),
        receiveTljRedNew: _0x321864.post("/tlj/activity/receive", !0),
        getTljBroadcast: _0x321864.get("/tlj/activity/broadcast"),
        getCpsBroadcast: _0x46b506.get("/cps/user/list"),
        getCpsUserSaleData: _0x46b506.get("/cps/user/detail", !0),
        getCpsAwardDetail: _0x46b506.get("/cps/user/award/detail", !0),
        getCpsGoodsList: _0x46b506.get("/cps/goods/list"),
        getNjiaSeckillGoods: _0x321864.post("/tlj/activity/activity618"),
        getS12RedEnvelopeData: _0x321864.get("/activity/super/envelope", !0),
        getRedEnvelopeBaseInfo: _0x46b506.get("/activity/get/invite/red/envelope", !0),
        receiveRedEnvelope: _0x46b506.post("/activity/receive/invite/red/envelope", !0),
        getRedEnvelopeBroadcast: _0x46b506.get("/activity/invite/red/envelope/list"),
        recognizeRedEnvelopeInvite: _0x46b506.post("/activity/invite/red/envelope/recognize", !0),
        getJingdongOrder: _0x46b506.get("/free/activity/orders/v2"),
        getGoodsUrl: _0x46b506.get("/util/convert/url"),
        getRewardDetail: _0x46b506.get("/activity/jd/reward/detail"),
        punchCard: _0x321864.post("/activity/clocking/in", !0),
        clockSignUp: _0x321864.post("/activity/clocking/in/sign/up", !0),
        getPunchCardDetail: _0x321864.get("/activity/get/clocking/in/detail"),
        getPunchCardList: _0x321864.post("/activity/get/clocking/in/list", !0),
        getPunchCardStatistics: _0x321864.get("/activity/get/clocking/in/statistics"),
        getPID: _0x46b506.get("/util/userPid/3"),
        getTklTokenNewSingle: _0x321864.post("/util/v3/convert/tpwd"),
        getTklTokenNewList: _0x321864.post("/util/convert/tpwd/list", !0),
        getWalkDetail: _0x321864.get("/activity/walk/index/detail", !0),
        getWalkEXList: _0x321864.get("/activity/walk/ex/list"),
        getWalkDiary: _0x321864.get("/activity/walk/my/diary", !0),
        collectWalk: _0x321864.post("/activity/walk/collect", !0),
        addIOSWalk: _0x321864.post("/activity/walk/add/ios", !0),
        getTour: _0x46b506.get("/activity/tour/index", !0),
        getTourList: _0x46b506.get("/activity/tour/list", !0),
        getTourMobileSave: _0x46b506.post("/activity/tour/mobile/save", !0),
        getCategoryAdvance: _0x46b506.get("/goods/category/advance"),
        getItemAdvance: _0x46b506.post("/search/item/advance"),
        getGoodsClickUrl: _0x321864.post("/goods/clickUrl", !0),
        veriUserLogin: _0x46b506.post("".concat(_0x2048bb.curCrmHost, "/user/login")),
        getSignUpUserInfo: _0x46b506.post("".concat(_0x2048bb.curCrmHost, "/activity/getSignUpUserInfo")),
        signUpVerification: _0x46b506.post("".concat(_0x2048bb.curCrmHost, "/activity/signUpVerification")),
        getVeriCode: _0x46b506.post("/util/sms/code"),
        loginByMobile: _0x46b506.post("/register/gift"),
        tbInviteProfit: _0x46b506.get("/tbInvite/Profit/statistics", !0),
        tbInviteDetail: _0x46b506.get("/tbInvite/detail/page", !0),
        concertIndex: _0x46b506.get("/concertActivity/index", !0),
        concertList: _0x46b506.post("/concertActivity/list"),
        findMobile: _0x46b506.get("/concertActivity/mobile/find", !0),
        saveMobile: _0x46b506.post("/concertActivity/mobile/save", !0),
        getShoppingList: _0x321864.post("/activity/shopping/list"),
        getItemChain: _0x321864.get("/activity/shopping/spinChain"),
        findConcertUserInfo: _0x321864.get("/concertActivity/userInfo/find", !0),
        saveConcertUserInfo: _0x321864.post("/concertActivity/userInfo/save", !0),
        ticketIndex: _0x46b506.get("/activity/ticket/index", !0),
        ticketSecondList: _0x46b506.get("/activity/ticket/second/list", !0),
        necklaceList: _0x46b506.get("/concertActivity/necklace/list", !0),
        get2019summary: _0x46b506.get("/user/annual/2019/detail", !0),
        get2020summary: _0x321864.get("/user/annual/V2/detail", !0),
        getTbSpecialPriceInviteDetail: _0x46b506.get("/tbSpecialPriceInvite/detail/page", !0),
        getTbSpecialPriceInviteStatistics: _0x46b506.get("/tbSpecialPriceInvite/profit/statistics", !0),
        getFirstOrderIndex: _0x321864.get("/first/order/index", !0),
        getFirstOrderTask: _0x321864.post("/first/order/list", !0),
        getFirstOrderReward: _0x321864.post("/first/order/reward/detail/list", !0),
        receiveFirstOrderAct: _0x321864.post("/first/order/receive", !0),
        getTencentLiveInfo: _0x46b506.get("/activity/tencent/live"),
        getTencentLiveList: _0x46b506.post("/activity/tencent/live/list"),
        getMiniCode: _0x46b506.post("/wx/defalut/codeUnlimit"),
        getTencentLiveGoods: _0x46b506.post("/activity/tencent/live/itemList/v2"),
        getDoubleCardIndex: _0x321864.get("/doubleReward/index", !0),
        getDoubleCardBroadcast: _0x321864.get("/doubleReward/broadcast"),
        useDoubleCard: _0x321864.post("/doubleReward/order/double", !0),
        doubleCardCheckShare: _0x321864.post("/doubleReward/shareCheck", !0),
        doubleCardInvitation: _0x321864.post("/doubleReward/invitation"),
        getDoubleRewardCard: _0x321864.get("/doubleReward/card", !0),
        getDoubleRewardOrder: _0x321864.get("/doubleReward/order", !0),
        getRankList: _0x46b506.get("/activity/live/preheat/ranking", !0),
        getMinQrCode: _0x46b506.get("".concat(_0x2048bb.apiNjiaSelf, "/wx/wechatMin/createQrcode"), !0),
        getCityCode: _0x46b506.post("/util/location", !1),
        getCategories: _0x46b506.get("/eleme/517/category", !1),
        getProducts: _0x46b506.post("/eleme/517/goods/list", !1),
        getConvertInfo: _0x46b506.post("/eleme/517/goods/convertUrl", !1),
        getActivityLink: _0x46b506.get("/official/activity/getActivityLink/1571715733668", !1),
        getWxRobotActInfo: _0x46b506.get("/wxRobotActivity/index", !0),
        receiveRobotTask: _0x46b506.post("/wxRobotActivity/task/receive", !0),
        receiveRobot: _0x46b506.post("/wxRobotActivity/benefits/receive", !0),
        winnersScoreDrawing: _0x321864.post("/winners/scoreDrawing", !0),
        winnersDrawing: _0x321864.post("/winners/drawing", !0),
        prizeDrawList: _0x321864.get("/prize/drawList", !0),
        winnersDrawCount: _0x321864.get("/winners/draw/count", !0),
        winnersAddCount: _0x321864.post("/winners/add/count", !0),
        getVipInviteInfo: _0x321864.get("/vipInviteActivity/index", !0),
        joinVipInviteAct: _0x321864.post("/vipInviteActivity/join", !0),
        getVVVipInviteInfo: _0x46b506.get("/unionInviteActivity/index", !0),
        get618PersonalData: _0x321864.get("/activity/super/envelope", !0),
        get618TeamData: _0x321864.get("/activity/team/super/envelope", !0),
        getUserInfoByInviteCode: _0x321864.get("/activity/inviteCode", !0),
        join618Team: _0x321864.post("/activity/team", !0),
        getVipsActivityOrder: _0x321864.get("/vipsActivity/orderInfo", !0),
        getSepActivityOrder: _0x321864.get("/vipsActivity/orders", !0),
        getSepDynamicList: _0x321864.get("/vipsActivity/orderList"),
        getSepOrderProfit: _0x321864.get("/vipsActivity/order/profit", !0),
        getSepConvertUrl: _0x321864.get("/vipsActivity/convert/url"),
        getOutsideClickUrl: _0x321864.post("/goods/outside/clickUrl"),
        getHotSprintProducts: _0x46b506.get("/activity/hotStyle/goodsList", !1),
        getHotSprintRanking: _0x46b506.get("/activity/hotStyle/spreadRank", !0),
        getHotSprintRecord: _0x46b506.get("/activity/hotStyle/myRecord", !0),
        saveHotSprintPrizeInfo: _0x46b506.post("/activity/hotStyle/prizeWinning", !0),
        getHotSprintRobotStock: _0x46b506.get("".concat(_0x2048bb.apiNjiaSelf, "/active/wxRobotStock"), !1),
        getLuckyDrawList: _0x321864.get("/luckyDraw/items", !0),
        getMyLuckyDrawList: _0x321864.get("/luckyDraw/items/myself", !0),
        getLuckyDrawDetail: _0x321864.get("/luckyDraw/items/detail"),
        signUpLuckyDraw: _0x321864.post("/luckyDraw/signUp", !0),
        completeLuckyDrawShare: _0x321864.post("/luckyDraw/completeTask", !0),
        assistLuckyDraw: _0x321864.post("/luckyDraw/assistance", !0),
        modifyLuckyDrawAddress: _0x321864.post("/luckyDraw/modifyConsigneeInfo", !0),
        getLuckyDrawShareDetail: _0x321864.get("/luckyDraw/items/detail/share"),
        clickLuckyDrawTask: _0x321864.post("/luckyDraw/click"),
        getNewUserTaskInfoV2: _0x321864.get("/newcomerTask/index", !0),
        joinNewUserTask: _0x321864.post("/newcomerTask/join", !0),
        completeNewUserTaskV2: _0x321864.post("/newcomerTask/complete", !0),
        newUserWithdraw: _0x321864.post("/newcomerTask/withdraw", !0),
        getNewUserDrawIndex: _0x321864.get("/newcomerTask/luckyDraw/index", !0),
        getNewUserDrawRecord: _0x321864.get("/newcomerTask/luckyDraw/winningRecord", !0),
        getNewUserDrawResult: _0x321864.post("/newcomerTask/luckyDraw", !0),
        getNewUserTaskInfo: _0x321864.get("/newUserTask/index", !0),
        getNewUserBroadcast: _0x321864.get("/newUserTask/broadcast", !1),
        completeNewUserTask: _0x321864.post("/newUserTask/complete", !0),
        getBillionSubsidyInfo: _0x321864.get("/billionSubsidy/info"),
        receiveBillionSubsidy: _0x321864.post("/billionSubsidy/receive", !0),
        getBillionSubsidyCategory: _0x321864.get("/billionSubsidy/categories"),
        getBillionSubsidyGoods: _0x321864.get("/billionSubsidy/items"),
        getBillionSubsidyGoodsDetail: _0x321864.get("/billionSubsidy/items/detail"),
        getBillionSubsidyUrl: _0x321864.post("/billionSubsidy/items/clickUrl", !0),
        getBillionSubsidyTKL: _0x321864.post("/billionSubsidy/external/items/clickUrl"),
        getBillionSubsidyFreeItems: _0x321864.get("/billionSubsidy/free/items"),
        getBillionSubsidyFreeItemsUrl: _0x321864.post("/billionSubsidy/free/items/clickUrl"),
        getBillionSubsidyFreeOrders: _0x321864.get("/billionSubsidy/free/orders"),
        billionSubsidySign: _0x321864.post("/activity/billion/subsidy/sign"),
        billionSubsidyData: _0x321864.post("/activity/billion/subsidy/data"),
        getLotterySubsidyInfo: _0x321864.get("/lotterySubsidy/index"),
        getLotterySubsidyFreeItems: _0x321864.get("/lotterySubsidy/free/items"),
        getLotterySubsidyFreeItemsUrl: _0x321864.post("/lotterySubsidy/free/items/clickUrl"),
        getLotterySubsidyFreeOrders: _0x321864.get("/lotterySubsidy/free/orders"),
        peachSelfRecord: _0x46b506.get("/activity/salesData/selfRecord", !0),
        getRedmiOrder: _0x46b506.post("/xiaomi/activity/redmi/order", !0),
        getRedmiHome: _0x46b506.get("/xiaomi/activity/redmi/url", !0),
        getLmUserProfit: _0x321864.get("/activity/sell/talent/user/profit", !0),
        getLmHotGoods: _0x321864.get("/activity/sell/talent/hot/good", !1),
        getLmRanking: _0x321864.post("/activity/sell/talent/user/ranking", !1),
        getVipUserInfo: _0x321864.get("/vipCenter/userInfo", !0),
        toJljDetail: _0x321864.post("/tlj/activity/receiveLj", !1),
        promotionRecord: _0x46b506.get("".concat(_0x2048bb.apiNjiaSelf, "/promotion/orderReward/info"), !0),
        getUpgradeVip: _0x321864.get("/activity/upgrade/vip", !0),
        inviteRedEnvelopeIndex: _0x321864.get("/inviteRedEnvelope/index", !0),
        newReceiveRedEnvelope: _0x321864.post("/inviteRedEnvelope/receive", !0),
        shareRedEnvelope: _0x321864.post("/inviteRedEnvelope/share", !0),
        receiveSurpriseReward: _0x321864.post("/inviteRedEnvelope/surpriseReward/receive", !0),
        gameAdTaskId: _0x321864.get("/game/advert"),
        getRewardRank: _0x46b506.get("/activity/reward/rank"),
        getSanYuanSelfData: _0x46b506.get("/activity/sanyuan/selfData"),
        getDouble202011TeamScore: _0x321864.get("/activity/doubleTwelve/achievement", !0),
        get202011SuperRedData: _0x321864.get("/activity/super/envelope", !0),
        conunt202011Share: _0x321864.post("/activity/share/super/envelope", !0),
        get202011Reward: _0x321864.post("/activity/super/envelope/amount", !0),
        getRewardCount: _0x321864.post("/winners/add/count", !0),
        drawing1212: _0x321864.post("/winners/drawing", !0),
        get1212DrawList: _0x321864.get("/prize/drawList"),
        doubleTwelveDrawData: _0x321864.get("/activity/doubleTwelve/info", !0),
        orderGetRedHome: _0x321864.get("/order/reward/accountInfo", !0),
        orderGetRedList: _0x321864.get("/order/reward/detail", !0),
        getOneYuanItems: _0x46b506.get("/tlj/activity/oneYuan/items", !0),
        getOneYuanItemDetail: _0x46b506.get("/tlj/activity/oneYuan/items/detail", !0),
        getOneYuanClickUrl: _0x46b506.post("/tlj/activity/oneYuan/items/clickUrl", !0),
        getOneYuanTkl: _0x46b506.get("/tlj/activity/oneYuan/items/tpwd", !0),
        getSeckillShowInfo: _0x321864.get("/meituanSeckill/showInfo", !0),
        getSeckillProductList: _0x321864.get("/meituanSeckill/list", !0),
        getSeckillCoupon: _0x321864.get("/meituanSeckill/getCoupon", !0),
        getSeckillParameters: _0x321864.get("/meituanSeckill/getParameters", !0),
        meituanSeckillToPush: _0x321864.post("/meituanSeckill/goods/remind", !0),
        getMeituanYxOrders: _0x321864.get("/meituan/cpa/orderList", !0),
        getODetail: _0x321864.get("/goods/special/tlj0YuanDetail"),
        getMiniPromotionInfo: _0x321864.get("/wxmini/activity/pdd/index"),
        getMiniPromotionProfit: _0x321864.get("/wxmini/activity/pdd/income"),
        getMiniPromotionOrder: _0x321864.get("/wxmini/activity/pdd/orderList"),
        getMiniPddRankingConfig: _0x321864.get("/activity/pdd/sale/index"),
        getMiniPddRanking: _0x321864.get("/activity/reward/rank"),
        setSuperEnvelopeNeminder: _0x321864.post("/activity/update/subscribe/log"),
        getSuperEnvelopeNeminder: _0x321864.get("/activity/subscribe/log"),
        getBFDetail: _0x321864.get("/benefitBag/index", !0),
        joinBF: _0x321864.post("/benefitBag/join", !0),
        receiveBFReward: _0x321864.post("/benefitBag/receiveReward", !0),
        getBFBalance: _0x321864.get("/benefitBag/balance", !0),
        getBFRewardRecords: _0x321864.get("/benefitBag/rewardRecords", !0),
        getBFOrders: _0x321864.get("/benefitBag/orders", !0),
        getBFInviteRecords: _0x321864.get("/benefitBag/invitationRecords", !0),
        setBFReminder: _0x321864.post("/benefitBag/reminder", !0),
        getOldBFDetail: _0x321864.get("/benefit/preferential/index", !0),
        startOldBFTask: _0x321864.post("/benefit/preferential/startTask", !0),
        getOldBFPopup: _0x321864.post("/benefit/preferential/popup", !0),
        getOldBFHelp: _0x321864.post("/benefit/preferential/help", !0),
        getOldBFConsume: _0x321864.post("/benefit/preferential/consume", !0),
        buyOldBFSeckill: _0x321864.post("/benefit/preferential/seckill/buy", !0),
        subscribeOldBFSeckill: _0x321864.post("/benefit/preferential/seckill/subscribe", !0),
        getOldBFLifeGoods: _0x321864.get("/benefit/preferential/life/index", !0),
        getOldBFans: _0x321864.get("/benefit/preferential/fans", !0),
        getOrderList: _0x321864.get("/benefit/preferential/seckill/orderList", !0),
        getSuperEnvelopeIndex: _0x321864.get("/activity/super/envelope/index"),
        getSuperEnvelope: _0x321864.get("/activity/super/envelope"),
        getKuaishoucpsBase: _0x321864.get("/kuaishou/cps/liveRooms"),
        getKuaishoucpsShareCode: _0x321864.get("/kuaishou/cps/shareCode", !0),
        getVipByTask: _0x321864.get("/vipUpgrade/index", !0),
        getVipByTaskFans: _0x321864.get("/vipUpgrade/fans", !0),
        getVipByTaskIncome: _0x321864.get("/vipUpgrade/income", !0),
        getTmSuperCategories: _0x321864.get("/tmall/market/config"),
        getTmSuperProByCategory: _0x321864.get("/tmall/market/goods/list"),
        getSellRewardDetail: _0x321864.get("/activity/sell/reward/detail"),
        getSellItemList: _0x321864.get("/activity/sell/reward/itemList"),
        getSellRewardIndex: _0x321864.get("/activity/sell/reward/index"),
        tokyoOlympic: _0x321864.post("/activity/tokyo/olympic"),
        getCircleGoods: _0x321864.get("/discover/goods"),
        sellRewardRank: _0x321864.get("/activity/sell/reward/activity"),
        getZsVip: _0x321864.get("/giveVip/index", !0),
        getGiveVipUsers: _0x321864.get("/giveVip/subUser", !0),
        getSelfCardSum: _0x321864.get("/activity/self/card/index", !0),
        getSelfCardOrderDetail: _0x321864.post("/activity/self/card/order/detail", !0),
        getBrandShopCategory: _0x321864.get("/brandShop/category"),
        getBrandShopList: _0x321864.get("/brandShop/list"),
        getBrandShopGoods: _0x321864.get("/brandShop/goods", !0),
        shareBrandShop: _0x321864.post("/brandShop/share"),
        getBrandShopUrl: _0x321864.post("/brandShop/clickUrl", !0),
        getAuthorizeInfo: _0x321864.get("/brandShop/authorizeInfo"),
        toSignBy20211212Draw: _0x321864.post("/sell/sign/up", !0),
        get20211212Draw: _0x321864.get("/sell/index", !0),
        get20211212DrawGoods: _0x321864.get("/goods/selection", !0),
        get20211212DrawPrize: _0x321864.get("/prize/drawList", !0),
        get20211212DrawPrizeResult: _0x321864.post("/sell/draw", !0),
        get20211212DrawPrizeRecord: _0x321864.get("/sell/win/prize/list", !0),
        get20211212HighCommission: _0x321864.post("/high/commission/sign/up", !0),
        getMpWechatStatus: _0x321864.post("/wechat/mp/check", !0),
        cancleMpWechatSubscribe: _0x321864.post("/wechat/mp/unsubscribe", !0),
        convertTakeawayExternal: _0x321864.post("/util/external/takeaway/convert"),
        getLaunchActivity: _0x321864.post("/activity/launch/get"),
        getWphBrandsIndex: _0x321864.get("/vip/brand/index"),
        getWphBrandsGoods: _0x321864.get("/vip/brand/goods"),
        getWphBrandInfo: _0x321864.get("/vip/brand/detail"),
        getCharityIndexApi: _0x321864.get("/alipay/charity/index"),
        alipayCharitysUploadApi: _0x321864.post("/alipay/charity/upload", !0),
        get22618PrizeList: _0x321864.get("/conquer/win/prize/list", !0),
        get22618ConquerIndex: _0x321864.get("/conquer/index", !0),
        get22618DrawList: _0x321864.get("/conquer/prize/list", !0),
        get22618RedDouble: _0x321864.get("/conquer/red/double", !0),
        get22618DrawNews: _0x321864.get("/conquer/good/news"),
        get22618ConquerDraw: _0x321864.post("/conquer/draw", !0),
        get22618SingUp: _0x321864.post("/activity/sign/up", !0),
        getUserSuperEnvelopeSignUp: _0x321864.post("/activity/user/super/envelope/signUp", !0),
        getUserSuperEnvelopeIndex: _0x321864.get("/activity/user/super/envelope/index", !0),
        getPinduoduoUrl: _0x321864.get("/util/convert/url/v3", !0),
        getpddPromUrl: _0x321864.post("/util/convert/pddPromUrl", !0),
        getActiveVipApi: _0x321864.post("/activity/vipActive/activeVip", !0),
        getVipStatusApi: _0x321864.post("/activity/vipActive/getVipStatus"),
        getSuperCollectListApi: _0x321864.get("/activity/h5/super/collect/index"),
        getJdSaleRewardIndex: _0x321864.get("/activity/jd/sale/reward/index", !0),
        getJdAuthData: _0x321864.get("/activity/jd/auth", !0)
      },
      _0x1c0a94 = {
        getArticleDetail: _0x321864.get("/commercial/getArticle"),
        getArticleComments: _0x321864.get("/commercial/findComments"),
        addArticleLike: _0x321864.post("/commercial/addLike"),
        addArticleComment: _0x321864.post("/commercial/addComment")
      },
      _0x435d7b = {
        getCashInfo: _0x321864.post("/redEnvelopesAccount/baseInfo", !0),
        getCashChangeList: _0x321864.post("/redEnvelopesAccount/getChangeList", !0),
        getWithdrawCardList: _0x321864.post("/withdrawCard/list", !0),
        getMyWithdrawCardList: _0x321864.post("/withdrawCard/me", !0),
        receiveWithdrawCard: _0x321864.post("/withdrawCard/receive", !0),
        useWithdrawCard: _0x321864.post("/withdrawCard/consume", !0),
        getWithdrawCardUsers: _0x321864.get("/withdrawCard/nameList")
      },
      _0x17c741 = {
        fruiterList: _0x321864.get("/orchard/fruiter/list", !0),
        userFruiterPlant: _0x321864.post("/orchard/user/fruiter/plant", !0),
        friendFriendList: _0x321864.post("/orchard/friend/friendList", !0),
        userInteractionRecordList: _0x321864.post("/orchard/user/interactionRecord/list", !0),
        userQualificationList: _0x321864.get("/orchard/user/qualification/list", !0),
        userFruiterDetail: _0x321864.get("/orchard/user/fruiter/detail", !0),
        userWaterTotal: _0x321864.get("/orchard/user/water/totalNew", !0),
        userFruiterWater: _0x321864.post("/orchard/user/fruiter/water", !0),
        friendVisitFriendOrchard: _0x321864.post("/orchard/friend/visitFriendOrchard", !0),
        friendStealWater: _0x321864.post("/orchard/friend/stealWater", !0),
        userFruiterAcquireWater: _0x321864.post("/orchard/user/fruiter/acquireWater", !0),
        taskList: _0x321864.get("/orchard/task/list", !0),
        taskFinish: _0x321864.post("/orchard/task/finish", !0),
        userLoginWaterAcquire: _0x321864.post("/orchard/user/login/water/acquire", !0),
        userInviteRecord: _0x321864.post("/orchard/user/inviteRecord/insert"),
        bannerList: _0x321864.get("/orchard/user/banner/list"),
        loginAwardReceive: _0x321864.post("/orchard/loginAward/receive", !0),
        loginAwardDetail: _0x321864.get("/orchard/loginAward/user/detail", !0),
        turntableDraw: _0x321864.post("/orchard/turntable/draw", !0),
        turntablePrizeList: _0x321864.get("/orchard/turntable/prize/list", !0),
        turntableDrawCount: _0x321864.get("/orchard/turntable/draw/count", !0),
        getUserOrchardPopupCheck: _0x321864.get("/orchard/user/popupCheck"),
        turntableAddCount: _0x321864.post("/winners/add/count", !0),
        taskPushFinish: _0x321864.post("/orchard/task/push/finish", !0)
      },
      _0x281cb7 = {
        wxrobotInfo: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/robotInfo"), !0),
        wxRobotLogin: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/robot/login"), !0),
        wxrobotGroupList: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/groupList"), !0),
        wxrobotAccount: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/account"), !0),
        wxrobotAccountDetail: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/accountDetail"), !0),
        wxrobotGroupCheck: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/groupCheck"), !0),
        wxrobotLogout: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/logout"), !0),
        wxrobotUpdateSendType: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/updateSendType"), !0),
        changeRobotRenew: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/autoPay"), !0),
        checkGroupDetail: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/checkGroupDetail"), !0),
        checkFriendMoment: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/checkFriendMoment"), !0),
        getSourceGroup: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/getSourceGroup"), !0),
        updateSendType: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/updateSendType"), !0),
        deleteGroup: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/deleteGroup"), !0),
        deleteRobot: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/deleteRobot"), !0),
        wxrobotRepeatLogin: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/repeatLogin"), !0),
        payPageData: _0x349262.get("".concat(_0x2048bb.apiWxRobot, "/pay/page/index"), !0),
        payPageRobotList: _0x349262.get("".concat(_0x2048bb.apiWxRobot, "/pay/page/robot/list"), !0),
        payPageAddRobot: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/pay/page/robot/add"), !0),
        payPageRemoveRobot: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/pay/page/robot/remove"), !0),
        robotRecharge: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/pay/page/robot/recharge"), !0),
        robotBindFans: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/bindFans"), !0),
        robtoRefreshGroupApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/refreshGroup"), !0),
        robotSaveSelfGroupApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/saveSelfGroup"), !0),
        robotGroupUserApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/group/detail/list"), !0),
        robotSaveUserApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/group/source/host/modify"), !0),
        robotSelfCustomInfoApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/selfRobotInfo"), !0),
        robotOpenStartApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/openStart"), !0),
        robotDelSelfGroupApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/deleteSelfGroup"), !0),
        robotTargetGroupApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/getSelfTargetGroup"), !0),
        robotSourceGroupApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatGroup/getSelfSourceGroup"), !0),
        robotOfflineApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wxrobot/offline"), !0),
        submitVerifyCodeApi: _0x349262.post("".concat(_0x2048bb.apiWxRobot, "/wechatRobot/submitVerifyCode"), !0)
      },
      _0x32ef0c = {
        getNewsList: _0x46b506.post("/website/news/getList"),
        getNewsDetail: _0x46b506.get("/website/news/detail")
      },
      _0x362008 = {
        getGrowthList: _0x321864.post("/users/growth/list", !0),
        getGrowthDetail: _0x321864.get("/users/growth/detail", !0)
      },
      _0x170702 = {
        getGrowthList: _0x5f02b7.post("/users/growth/list", !0),
        getGrowthDetail: _0x5f02b7.get("/users/growth/detail", !0),
        getVipFansList: _0x5f02b7.post("/vipCenter/task/detail/vipPlus", !0),
        getVipChoicenessList: _0x5f02b7.get("/vipCenter/v2/area", !1),
        getVipBroadcast: _0x5f02b7.post("/vipCenter/vipBroadcast", !1),
        getVipCardActInfo: _0x5f02b7.get("/vipBenefits/activity/info", !0),
        jionVipCardAct: _0x5f02b7.get("/vipBenefits/activity/join", !0),
        useVipCard: _0x5f02b7.post("/vipBenefits/consume/card", !0),
        getVipCard: _0x5f02b7.post("/vipBenefits/receive", !0)
      },
      _0x4e2d3e = {
        freeActivityItems: _0x5f02b7.get("/free/activity/items/v2"),
        freeActivityGetClickUrl: _0x5f02b7.get("/free/activity/getClickUrl", !0),
        freeActivityPastSelect: _0x5f02b7.get("/free/activity/pastSelect"),
        freeActivityOrders: _0x5f02b7.get("/free/activity/orders"),
        freeActivityOrdersV2: _0x5f02b7.get("/free/activity/orders/v2"),
        freeActivityOrdersStatistics: _0x5f02b7.get("/free/activity/order/statistics"),
        freeActivityVerify: _0x5f02b7.post("/free/activity/verify"),
        freeActivityGetAccount: _0x5f02b7.get("/free/activity/getAccount"),
        getFreeItems: _0x5f02b7.get("/rebate/items"),
        getFreeItemUrl: _0x5f02b7.post("/rebate/items/clickUrl", !0),
        getFreeOrdersInfo: _0x5f02b7.get("rebate/profit", !0),
        getFreeItemOrders: _0x5f02b7.get("/rebate/orders", !0),
        freeItemOrderVerify: _0x5f02b7.post("/rebate/orders/verify"),
        getSnFreeItems: _0x5f02b7.get("/free/activity/sn/items"),
        getSnFreeItemUrl: _0x5f02b7.get("/free/activity/sn/getClickUrl", !0),
        getSnFreeItemOrders: _0x5f02b7.get("/free/activity/sn/orders", !0)
      },
      _0x817720 = {
        getLiveConfig: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/live/config")),
        getLiveList: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/live/getLiveList")),
        getLiveListNew: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/live/getLiveListNew")),
        getAnthorInfo: _0x321864.post("".concat(_0x2048bb.apiNjiaLive, "/anchor/getIdentity")),
        checkEnableLive: _0x321864.post("".concat(_0x2048bb.apiNjiaLive, "/anchor/checkEnableLive")),
        getRecommendLiveList: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/live/getRecommendLiveList")),
        getCatetory: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/live/getCatetory")),
        getLiveBanner: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/banner/list")),
        getVipRankList: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/vipshop/rankList")),
        applyVipAnchorPK: _0x321864.post("".concat(_0x2048bb.apiNjiaLive, "/vipshop/add"), !0),
        getRewardData: _0x321864.post("".concat(_0x2048bb.apiNjiaLive, "/sellGoodsReward/data"), !0),
        getRewardDetail: _0x321864.post("".concat(_0x2048bb.apiNjiaLive, "/sellGoodsReward/data/detail"), !0),
        getRewardCategory: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/sellGoodsReward/goods/category")),
        getRewardGood: _0x321864.post("".concat(_0x2048bb.apiNjiaLive, "/sellGoodsReward/goods"), !0),
        getLuckyBagTask: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/lucky/bag/task"), !0),
        getLuckyBagShareInfo: _0x321864.get("".concat(_0x2048bb.apiNjiaLive, "/lucky/bag/shareInfo"), !0),
        receiveLuckyBagTask: _0x321864.post("".concat(_0x2048bb.apiNjiaLive, "/lucky/bag/task/receive"), !0),
        receiveLuckyBagReward: _0x321864.post("".concat(_0x2048bb.apiNjiaLive, "/lucky/bag/reward/receive2"), !0)
      },
      _0x3b78fa = {
        egElephantInfo: _0x321864.get("/elephant/info", !0),
        egMammonList: _0x321864.get("/elephant/mammon/current/list", !0),
        egMammonInvite: _0x321864.post("/elephant/mammon/invite", !0),
        egWelfareList: _0x321864.get("/elephant/welfare/list", !0),
        egWignDetail: _0x321864.get("/elephant/sign/detail", !0),
        egExchangeRewardAmount: _0x321864.post("/elephant/item/exchangeRewardAmount", !0),
        egExchangeUserList: _0x321864.get("/elephant/user/exchangeUserList"),
        egItemListV2: _0x321864.get("/elephant/item/listV2", !0),
        egItemList: _0x321864.get("/elephant/item/list", !0),
        egFinishOnceVisit: _0x321864.get("/elephant/item/finishOnceVisit", !0),
        egOnceVisit: _0x321864.get("/elephant/item/onceVisit", !0),
        egTaskList: _0x321864.post("/game/task/list", !0),
        egCoinReceive: _0x321864.post("/elephant/coin/receive", !0),
        egSign: _0x321864.post("/elephant/sign", !0),
        egWelfareReceive: _0x321864.post("/elephant/welfare/receive", !0),
        egTaskFinish: _0x321864.post("/game/task/finish", !0),
        taskSpecialFinish: _0x321864.post("/game/task/special/finish", !0),
        egMammonPopup: _0x321864.post("/elephant/mammon/popup", !0),
        egMammonHelp: _0x321864.post("/elephant/mammon/help", !0),
        egOrderList: _0x321864.post("/elephant/order/list", !0),
        egBannerList: _0x321864.get("/elephant/banner/list", !0),
        egLimitedTimeShow: _0x321864.get("elephant/activity/limitedTime/show", !0),
        egLimitedTimeComplete: _0x321864.post("/elephant/activity/limitedTime/complete", !0),
        egMedalShare: _0x321864.post("/elephant/medal/share"),
        egLandingPageShare: _0x321864.post("elephant/mammon/landingPage/share"),
        egMedalList: _0x321864.get("/elephant/medal/list"),
        egMedalHold: _0x321864.post("/elephant/medal/hold"),
        egMedalInfo: _0x321864.post("/elephant/medal/info"),
        egMedalBeckon: _0x321864.post("/elephant/medal/beckon"),
        egLuckyPoolDraw: _0x321864.get("/elephant/activity/lucky/pool/draw"),
        egTljExchangeList: _0x321864.post("/elephant/item/tljItem/list"),
        egTljExchangeDetail: _0x321864.get("/elephant/item/tljItem/detail"),
        egExchangeUrl: _0x321864.post("/elephant/item/tljItem/clickUrl")
      },
      _0x320d5c = {
        meetingLists: _0x5f02b7.get("/meeting/lists", !0),
        meetingDetail: _0x5f02b7.get("/meeting/detail", !0),
        meetingCreateMetting: _0x5f02b7.post("/meeting/createMeeting", !0),
        meetingMeetingUsers: _0x5f02b7.get("/meeting/meetingUsers", !0),
        meetingSignMeeting: _0x5f02b7.post("/meeting/signMeeting", !0),
        meetingShare: _0x5f02b7.get("/meeting/meetingShare"),
        meetingCancel: _0x5f02b7.post("/meeting/cancelMeeting", !0)
      },
      _0xa4ff92 = {
        vipRewardTask: _0x46b506.get("/activity/vip/reward/task"),
        vipInvitationDetailList: _0x46b506.get("/activity/vip/invitation/detailList")
      },
      _0x5cdef2 = {
        phoneBillUserInfo: _0x5f02b7.get("/phone/bill/loading", !0),
        phoneBillIndex: _0x5f02b7.get("/phone/bill/index", !0),
        phoneBillRecharge: _0x5f02b7.post("/phone/bill/recharge", !0),
        phoneBillOrderList: _0x5f02b7.post("/phone/bill/order/list", !0),
        phoneBillModifyMobile: _0x5f02b7.post("/phone/bill/modify/mobile", !0),
        phoneBillShare: _0x5f02b7.post("/phone/bill/landingPage/share", !1),
        phoneBillLuckyDraw: _0x5f02b7.post("/phone/bill/luckyDraw", !0),
        phoneBillFansList: _0x5f02b7.post("/phone/bill/fans/list", !0)
      },
      _0x1b588e = {
        phoneChargesHome: _0x321864.get("/phoneBill/recharge/index", !0),
        getPhoneChargeCounponUrl: _0x321864.get("/phoneBill/recharge/grabCoupons", !0)
      },
      _0x51437a = {
        benefitIvitationLoading: _0x5f02b7.get("/benefit/invitation/loading", !0),
        benefiIivitationIndex: _0x5f02b7.get("/benefit/invitation/index", !0),
        benefiIivitationMobilemModify: _0x5f02b7.post("/benefit/invitation/modify/mobile", !0),
        benefitIvitationRecharge: _0x5f02b7.post("/benefit/invitation/recharge", !0),
        benefitIvitationOrderList: _0x5f02b7.post("/benefit/invitation/receive/record", !0),
        benefitIvitationLandingPage: _0x5f02b7.post("/benefit/invitation/landingPage/share"),
        benefitIvitationFansList: _0x5f02b7.post("/benefit/invitation/fans/list", !0),
        benefitIvitationNoviceShare: _0x5f02b7.post("/benefit/invitation/novice/share", !0)
      },
      _0x4885b8 = {
        getNoviceTutorialTags: _0x321864.get("/tutorial/tag/list", !1),
        getNoviceTutorial: _0x321864.get("/tutorial/content/list", !1),
        getNoviceTutorialDetail: _0x321864.get("/tutorial/content/detail", !1)
      },
      _0xb47779 = {
        getInformationList: _0x46b506.post(_0x2048bb.apiFind + "/content/v2/list"),
        getThemeTopicList: _0x46b506.post(_0x2048bb.apiFind + "/activity/topic/imageText/contents"),
        getTopicList: _0x46b506.post(_0x2048bb.apiFind + "/activity/topic/content/list")
      },
      _0x41a30d = {
        mtLocalDiscount: _0x321864.post("/localDiscount/mt/deal", !0),
        mtLocalDiscount2: _0x321864.post("/localDiscount/mt/deal")
      },
      _0x264465 = {
        getFansInfo: _0x321864.post("/fans/rank/fanLists", !0),
        getFansUserDetail: _0x321864.get("/users/team/detail", !0),
        getHotInfo: _0x321864.post("/fans/rank/itemLists", !0),
        getTROrders: _0x321864.post("/fans/rank/fansOrder", !0)
      },
      _0xf501c4 = {
        memberCardIndex: _0x5f02b7.get("/member/card/index", !0),
        memberCardItemCategories: _0x5f02b7.get("/member/card/item/category"),
        memberCardItemLayouts: _0x5f02b7.post("/member/card/item/layouts"),
        memberCardItemDetail: _0x5f02b7.get("/member/card/item/detail", !0),
        memberCardItemExchange: _0x5f02b7.get("/member/card/item/exchange", !0),
        memberCardCharge: _0x5f02b7.post("/member/card/charge/prepaid", !0),
        memberCardChargeLog: _0x5f02b7.get("/member/card/charge/log", !0),
        memberCardEnjoyLog: _0x5f02b7.post("/member/card/use/log", !0),
        memberCardSaveMoneyLog: _0x5f02b7.post("/member/card/save/money/log", !0),
        memberCardPhoneCoupon: _0x5f02b7.get("/member/card/receive/benefit", !0),
        memberCardAccount: _0x5f02b7.get("/member/card/account", !0),
        memberCardPhoneLog: _0x5f02b7.get("/member/card/third/phone/charge/log", !0)
      },
      _0x4a279f = {
        getRedeem: _0x321864.post("/vipCenter/getRedeem"),
        fetchNewRedeem: _0x321864.post("/vipCenter/fetchNewRedeem")
      },
      _0x187f0f = {
        channelIndex: _0x321864.get("/channel/index")
      },
      _0x1e254d = {
        pddPriceIndex: _0x5f02b7.get("/pdd/activity/subsidy/index", !0),
        pddPriceGoods: _0x5f02b7.get("/pdd/activity/subsidy/goodsList"),
        pddPriceOrder: _0x5f02b7.get("/pdd/activity/subsidy/orderList", !0)
      },
      _0x26fd38 = {
        vphPriceIndex: _0x5f02b7.get("/subsidy/activity/index", !0),
        vphPriceGoods: _0x5f02b7.get("/subsidy/activity/goodsList")
      },
      _0x1bab9d = {
        getWxGroup: _0x321864.post("/wechat/group/list"),
        getWxGroupDetail: _0x321864.get("/wechat/group/detail")
      },
      _0x1dbdb5 = {
        getDooleenInfo: _0xb85e6e.post("/activity/duoling/getRewardInfo"),
        getDooleenSoldList: _0xb85e6e.post("/activity/duoling/getRewardList "),
        getDooleenGoods: _0xb85e6e.post("/activity/duoling/getGoodsInfo"),
        getActiveList: _0xb85e6e.get("/activity/list"),
        getActiveRewardInfo: _0xb85e6e.post("/activity/mhjl/getRewardInfo"),
        getActiveOrderList: _0xb85e6e.post("/activity/mhjl/getOrderList"),
        getActivityRewardInfo: _0xb85e6e.post("/activity/getRewardInfo"),
        getInviteStatisticsList: _0xb85e6e.post("/activity/invite/getInviteStatisticsList"),
        getInviteSixMonthGoods: _0xb85e6e.post("/activity/getGoodsInfo")
      },
      _0x35ab77 = {
        userAgreement: _0x321864.post("/privacy/policy/list")
      },
      _0x1a3952 = {
        getShareLink: _0x4c85c8.post("/wx/ma/shareLink", !1),
        getWxUserInfoByCode: _0x25085d.post("/thirdAuth/user/info", !1),
        confirmWxAuth: _0x25085d.post("/thirdAuth/user/confirm", !1)
      },
      _0x2dbc37 = {
        getMeituanShopList: _0x321864.get("/meituan/shop/list"),
        getMeituanShopLink: _0x321864.get("/meituan/shop/link")
      },
      _0xbf0fa1 = {
        getCutPriceList: _0x321864.get("/cutPrice/list"),
        getCutPriceConvert: _0x321864.get("/cutPrice/convert")
      },
      _0x5dbc65 = {
        getLiveListApi: _0x321864.get("/douyin/hotLiveIndex"),
        getLivingList: _0x321864.get("/douyin/liveList"),
        getGoodsTab: _0x321864.get("/douyin/tags"),
        getGoodsListApi: _0x321864.get("/douyin/goodShop"),
        getLiveDklApi: _0x321864.get("/douyin/getLiveDkl"),
        getLiveGoodsApi: _0x321864.get("/douyin/live/item"),
        getBannerApi: _0x321864.get("/douyin/banner"),
        getGoodsDklApi: _0x321864.get("/douyin/getItemDkl"),
        getLiveTabApi: _0x321864.get("/douyin/live/tags"),
        getTalentListApi: _0x321864.get("/douyin/kol/recommend/list"),
        getTalentRecommendApi: _0x321864.get("/douyin/kol/recommend/goods"),
        getGoodsTabV2: _0x321864.get("/douyin/tags/V3"),
        getGoodsListV2Api: _0x321864.get("/douyin/rank/V2"),
        getTalentBannerApi: _0x321864.get("/douyin/kol/banner"),
        dyZeroOrderLimitApi: _0x321864.get("/douyinZero/orderLimit", !0),
        dyZeroLinkApi: _0x321864.post("/douyinZero/getLinkInfo", !0),
        dyZeroOrderListApi: _0x321864.post("/douyinZero/getZeroOrderList", !0),
        dyZeroOrderStatisticsApi: _0x321864.post("/douyinZero/order/statistics", !0),
        dyZeroOrderItemlistApi: _0x321864.get("/douyinZero/itemList", !1),
        dyWxZeroOrderListApi: _0x321864.post("/douyinZero/wechat/getZeroOrderList", !1),
        dyWxZeroAccountApi: _0x321864.post("/dyWxZero/account/index", !1),
        dyWxZeroTransferApi: _0x321864.post("/dyWxZero/account/transfer", !1),
        dySecillListApi: _0x321864.get("/douyin/secill/ItemList"),
        dySecillLinkApi: _0x321864.post("/douyin/secill/convert", !0)
      },
      _0x2f3bcd = {
        getItemDetail: _0x535a66.post("/shelves/getItemDetail"),
        thirdAuthConfig: _0x4bd6cc.get("/third/auth/config"),
        thirdAuthCode: _0x4bd6cc.post("/third/auth/code")
      },
      _0x50cf62 = Object(_0x2d8a14.parseUrl)(location.href).query,
      _0x1635b3 = void 0 === _0x50cf62 ? {} : _0x50cf62;
    _0x32faa8.axios.defaults.headers.platform = "miniapp";
    _0x32faa8.axios.defaults.headers.merchantid = _0x1635b3.merchantId || "";
    var _0x245171 = {
      curHost: _0x2048bb.curHost
    };
    var _0x160db0 = {
        getAuthUrlApi: _0x32faa8.post("/wx/open/getAuthUrl", !1),
        postAuthEndApi: _0x32faa8.post("/wx/open/auth", !1),
        getReleaseAuditedApi: _0x32faa8.post("/maAgent/code/releaseAudited", !1),
        commitWxappApi: _0x32faa8.post("/maAgent/code/codeCommit", !1),
        getTestQrcodeApi: _0x32faa8.post("/maAgent/code/getTestQrcode", !1),
        getCategoryListApi: _0x32faa8.post("/maAgent/category/getCategoryList", !1),
        getTesterListApi: _0x32faa8.post("/maAgent/tester/getTesterList", !1),
        bindTesterApi: _0x32faa8.post("/maAgent/tester/bindTester", !1),
        submitAuditApi: _0x32faa8.post("/maAgent/code/submitAudit", !1),
        undoCodeAuditApi: _0x32faa8.post("/maAgent/code/undoCodeAudit", !1),
        revertCodeReleaseApi: _0x32faa8.post("/maAgent/code/revertCodeRelease", !1),
        setSupportVersionInfoApi: _0x32faa8.post("/maAgent/code/setSupportVersionInfo", !1),
        modifyDomainApi: _0x32faa8.post("/maAgent/domain/modifyDomain", !1),
        setWebViewDomainApi: _0x32faa8.post("/maAgent/domain/setWebViewDomain", !1),
        unbindTesterApi: _0x32faa8.post("/maAgent/tester/unbindTester", !1),
        getPrivacyInterfaceApi: _0x32faa8.post("/maAgent/security/getPrivacyInterface", !1),
        applyPrivacyInterfaceApi: _0x32faa8.post("/maAgent/security/applyPrivacyInterface", !1),
        setPrivacySettingApi: _0x32faa8.post("/maAgent/security/setPrivacySetting", !1),
        getCodePrivacyInfoApi: _0x32faa8.post("/maAgent/security/getCodePrivacyInfo", !1),
        getAuditStatusApi: _0x32faa8.post("/maAgent/code/getAuditStatus", !1),
        getLatestAuditStatusApi: _0x32faa8.post("/maAgent/code/getLatestAuditStatus", !1),
        queryQuotaApi: _0x32faa8.post("/maAgent/code/queryQuota", !1),
        getVersionInfoApi: _0x32faa8.post("/maAgent/code/getVersionInfo", !1),
        getPrivacySettingApi: _0x32faa8.post("/maAgent/security/getPrivacySetting", !1),
        applyPluginApi: _0x32faa8.post("/maAgent/plugin/applyPlugin", !1),
        unbindPluginApi: _0x32faa8.post("/maAgent/plugin/unbindPlugin", !1),
        getPluginListApi: _0x32faa8.post("/maAgent/plugin/getPluginList", !1),
        saasCollectMerchantInfoApi: _0x32faa8.post("/merchant/info/collect", !1),
        saasUploadApi: _0x32faa8.post("/util/upload", !1),
        tddRobotInfoApi: _0x32faa8.post("/robot/robotInfo", !0),
        tddRobotPayPageGiftApi: _0x32faa8.get("/robot/pay/page/gift/index", !0),
        tddRobotPayPageRobotListApi: _0x32faa8.get("/robot/pay/page/robot/list", !0),
        tddRobotRechargeApi: _0x32faa8.post("/robot/pay/page/recharge", !0),
        tddRobotSelfCustomInfoApi: _0x32faa8.post("/robot/selfRobotInfo", !0),
        tddRobotTargetGroupApi: _0x32faa8.post("/robot/getSelfTargetGroup", !0),
        tddRobotSourceGroupApi: _0x32faa8.post("/robot/getSelfSourceGroup", !0),
        tddRobotSaveSelfGroupApi: _0x32faa8.post("/robot/saveSelfGroup", !0),
        tddRobotRefreshGroupApi: _0x32faa8.post("/robot/refreshGroup", !0),
        tddRobotRefreshGroupDetailApi: _0x32faa8.post("/robot/refreshGroupDetail", !0),
        tddRobotDeleteGroupApi: _0x32faa8.post("/robot/deleteTargetGroup", !0),
        tddRobotGroupUserApi: _0x32faa8.post("/robot/detail/list", !0),
        tddRobotSaveUserApi: _0x32faa8.post("/robot/source/host/modify", !0),
        tddRobotOpenStartApi: _0x32faa8.post("/robot/openStart", !0),
        tddRobotLoginApi: _0x32faa8.post("/robot/login", !0),
        tddRobotLogoutApi: _0x32faa8.post("/robot/logout", !0),
        tddRobotOfflineApi: _0x32faa8.post("/robot/offline", !0)
      },
      _0xd2f5e2 = {
        getNoteWxUserInfoByCode: _0x26c786.post("/thirdAuth/user/info", !1),
        confirmNoteWxAuth: _0x26c786.post("/thirdAuth/user/confirm", !1),
        getWdAuthConfig: _0x26c786.get("/third/auth/config", !1),
        confirmWdAuth: _0x26c786.post("/third/auth/code", !1),
        uploadFile: _0x26c786.post("/util/upload", !1)
      },
      _0x18f7b2 = Object(_0x201340.a)(_0x245171, _0x4747f1, _0x1a8d54, _0x10f419, _0x4fbb26, _0x483840, _0x1ebf15, _0x4ae8a6, _0x25df9d, _0x14b4b5, _0x1a4605, _0x1c0a94, _0x435d7b, _0x17c741, _0x281cb7, _0x32ef0c, _0x362008, _0x170702, _0x817720, _0x3b78fa, _0x4e2d3e, _0x320d5c, _0xa4ff92, _0x5cdef2, _0x51437a, _0x4885b8, _0x1b588e, _0x51437a, _0xb47779, _0x264465, _0xf501c4, _0x41a30d, _0x4a279f, _0x187f0f, _0x1e254d, _0x26fd38, _0x1bab9d, _0x1dbdb5, _0x5dbc65, _0x35ab77, _0x1a3952, _0x2dbc37, _0xbf0fa1, _0x2f3bcd, _0x160db0, _0xd2f5e2);
    _0x83144f.a = _0x18f7b2;
  },
  212: function (_0x5ede6f, _0x2a5f1d, _0x23611e) {
    'use strict';

    var _0x45ca2a = _0x23611e(45),
      _0x564215 = (_0x23611e(658), _0x23611e(21)),
      _0x1c4851 = _0x23611e(26),
      _0x47cfe4 = _0x23611e.n(_0x1c4851),
      _0x361368 = _0x23611e(106),
      _0x22fa9f = _0x23611e.n(_0x361368),
      _0x29d0ea = _0x23611e(16),
      _0x17009d = window;
    function _0x4a683d(_0x4e3bc1) {
      this.name = "FxError";
      this.type = _0x4e3bc1;
    }
    _0x4a683d.prototype = new Error();
    var _0xa55a0c = {
      imgFilter: function (_0x2bfd9d) {
        var _0x44ff91 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return "string" != typeof _0x2bfd9d ? _0x2bfd9d : (_0x2bfd9d = (_0x2bfd9d = _0x2bfd9d.replace(/_m2\.ss2.*/gi, "")).match(/(.*?\.(jpe?g|png)(_|@))?/gi)[0] ? _0x2bfd9d.match(/(.*?\.(jpe?g|png))?/gi)[0] : _0x2bfd9d, _0x2bfd9d = /\.(t(b|aobao)|ali)cdn\./gi.test(_0x2bfd9d) ? "".concat(_0x2bfd9d, "_300x300q80").concat(this.isSupportWebp && !_0x44ff91 ? "_.webp" : "") : _0x2bfd9d, _0x2bfd9d = /\.lanlanlife\./gi.test(_0x2bfd9d) ? "".concat(_0x2bfd9d, "@!2-w300-80-jpg") : _0x2bfd9d, _0x2bfd9d = /\.jingtuitui\./gi.test(_0x2bfd9d) ? "".concat(_0x2bfd9d, "?imageView2/2/w/300/h/300/q/80/imageMogr2/strip/format/jpg") : _0x2bfd9d, _0x2bfd9d = /\.360buyimg\./gi.test(_0x2bfd9d) ? _0x2bfd9d.replace("/jfs/", "/s300x300_jfs/") : _0x2bfd9d, _0x2bfd9d = /\.yangkeduo\./gi.test(_0x2bfd9d) ? "".concat(_0x2bfd9d, "@300w_1l_80Q.src") : _0x2bfd9d);
      },
      imgFormat: function (_0x62c6c3, _0x43da3f, _0x228562, _0x17db45) {
        if (!_0x62c6c3) {
          return "";
        }
        var _0x117f4b = Math.floor(1.3 * (_0x43da3f || 0) * 2),
          _0x27805f = Math.floor(1.3 * (_0x228562 || 0) * 2);
        return _0x62c6c3.indexOf("fenxianglife.com") > -1 ? _0x17db45 ? "".concat(_0x62c6c3, "?x-oss-process=image/auto-orient,1/resize,m_fill,w_").concat(_0x117f4b, ",h_").concat(_0x27805f, "/quality,q_90") : _0x62c6c3 + "?x-oss-process=image/auto-orient,1/resize,m_lfit,w_" + _0x117f4b : _0x62c6c3.indexOf("yangkeduo.com") > -1 ? (_0x62c6c3 = _0x62c6c3.replace(/(@[0-9]+w_[0-9]l_[0-9]+Q.src)$/g, "")) + "@" + _0x117f4b + "w_1l_99Q.src" : _0x62c6c3.indexOf("vpimg") > -1 ? (_0x62c6c3 = _0x62c6c3.replace(/(_[0-9]+x[0-9]+_[0-9]+)/g, "")).replace(/(.jpe?g|png)$/g, "_" + _0x117f4b + "x" + _0x27805f + "_99$1") : _0x62c6c3.indexOf("360buyimg") > -1 ? _0x62c6c3.replace("/jfs/", "/s" + _0x117f4b + "x" + _0x27805f + "_jfs/") : _0x62c6c3.indexOf("geilicdn") > -1 ? _0x62c6c3 + "?w=" + _0x117f4b + "&h=" + _0x27805f + "&cp=1" : _0x62c6c3.indexOf("alicdn") > -1 ? "".concat(_0x62c6c3, "_").concat(_0x117f4b, "x").concat(_0x27805f, "q90.jpg") : _0x62c6c3;
      },
      setTitle: function (_0x4f0e8c) {
        "string" == typeof _0x4f0e8c && (window.document.title = _0x4f0e8c);
      },
      pxToRem: function (_0x2a2f50) {
        return "".concat(_0x2a2f50 / 16, "rem");
      },
      reportError: function (_0x31bcdd) {
        throw new _0x4a683d(_0x31bcdd);
      },
      debounce: function (_0x1b9804, _0x396f90) {
        var _0x170e0d = null;
        return function () {
          for (var _0x1e9113 = arguments.length, _0x457248 = new Array(_0x1e9113), _0x467ff0 = 0; _0x467ff0 < _0x1e9113; _0x467ff0++) {
            _0x457248[_0x467ff0] = arguments[_0x467ff0];
          }
          var _0x4982b8 = this;
          _0x170e0d && (clearTimeout(_0x170e0d), _0x170e0d = null);
          _0x170e0d = setTimeout(function () {
            _0x1b9804.apply(_0x4982b8, _0x457248);
          }, _0x396f90);
        };
      },
      checkPastTime: function (_0x154bbf) {
        var _0x27b97b = new Date().getTime() - 1000 * _0x154bbf;
        return _0x27b97b < 60000 ? "".concat(parseInt(_0x27b97b / 1000), "秒") : _0x27b97b >= 60000 && _0x27b97b < 3600000 ? "".concat(parseInt(_0x27b97b / 60000), "分钟") : _0x27b97b >= 3600000 && _0x27b97b < 86400000 ? "".concat(parseInt(_0x27b97b / 3600000), "小时") : _0x27b97b >= 86400000 ? "".concat(parseInt(_0x27b97b / 86400000), "天") : void 0;
      },
      checkPastTime2: function (_0x415321) {
        var _0x1fae77 = _0x22fa9f()().endOf("day").valueOf() + 1,
          _0x3e105d = _0x1fae77 - 86400000,
          _0x59ed41 = _0x3e105d - 86400000,
          _0x14d544 = _0x1fae77 + 86400000,
          _0x5761a9 = _0x3e105d - 172800000;
        return _0x415321 > new Date().getTime() ? _0x415321 >= _0x3e105d && _0x415321 < _0x1fae77 ? "今天" + _0x22fa9f.a.unix(_0x415321 / 1000).format("HH:mm") : _0x415321 >= _0x1fae77 && _0x415321 < _0x14d544 ? "明天" + _0x22fa9f.a.unix(_0x415321 / 1000).format("HH:mm") : _0x22fa9f.a.unix(_0x415321 / 1000).format("MM-DD HH:mm") : new Date().getTime() - _0x415321 < 86400000 && _0x3e105d < _0x415321 ? this.checkPastTime(_0x415321 / 1000) + "前" : _0x415321 >= _0x59ed41 && _0x415321 < _0x3e105d ? "昨天" + _0x22fa9f.a.unix(_0x415321 / 1000).format("HH:mm") : _0x415321 >= _0x5761a9 && _0x415321 < _0x59ed41 ? "前天" + _0x22fa9f.a.unix(_0x415321 / 1000).format("HH:mm") : _0x22fa9f.a.unix(_0x415321 / 1000).format("MM-DD");
      },
      dealPrice: function (_0x53e84c) {
        return 0 === _0x53e84c ? _0x53e84c : +(_0x53e84c / 100).toFixed(2);
      },
      throttle: function (_0x194602, _0x2f073c) {
        var _0x96a464 = 0;
        return function () {
          var _0x1e270d = +new Date();
          if (_0x1e270d - _0x96a464 > _0x2f073c) {
            for (var _0x1400cd = arguments.length, _0x1337ce = new Array(_0x1400cd), _0x302101 = 0; _0x302101 < _0x1400cd; _0x302101++) {
              _0x1337ce[_0x302101] = arguments[_0x302101];
            }
            _0x194602.apply(this, _0x1337ce);
            _0x96a464 = _0x1e270d;
          }
        };
      },
      sevenService: function () {
        !function (_0x5a4f00, _0x44b815, _0x4763f8, _0x543314, _0x2b8b2e) {
          _0x5a4f00[_0x4763f8] = _0x5a4f00[_0x4763f8] || function () {
            (_0x5a4f00[_0x4763f8].a = _0x5a4f00[_0x4763f8].a || []).push(arguments);
          };
          (_0x2b8b2e = _0x44b815.createElement("script")).async = !0;
          _0x2b8b2e.src = "https://qiyukf.com/script/bd4f9e4c1ee4e638bc7d6fc08bc164cd.js";
          _0x44b815.body.appendChild(_0x2b8b2e);
        }(window, document, "ysf");
      },
      countdown: function (_0x585b44, _0x592471) {
        var _0x2ee344 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          _0x184fce = arguments.length > 3 ? arguments[3] : void 0,
          _0x2705d2 = new Date().getTime(),
          _0x2e8c3e = -1;
        if ((_0x2e8c3e = _0x184fce ? _0x184fce - _0x2705d2 : _0x592471 - (_0x2705d2 - _0x585b44)) < 0) {
          return !1;
        }
        var _0x393ed5,
          _0xaa814f,
          _0x33f1de,
          _0x5d5f32,
          _0x53903e = 0;
        _0x393ed5 = parseInt(_0x2e8c3e / 86400000);
        _0xaa814f = parseInt((_0x2e8c3e - 86400000 * _0x393ed5) / 3600000);
        _0x33f1de = parseInt((_0x2e8c3e - 86400000 * _0x393ed5 - 60 * _0xaa814f * 60 * 1000) / 60000);
        _0x5d5f32 = parseInt((_0x2e8c3e - 86400000 * _0x393ed5 - 60 * _0xaa814f * 60 * 1000 - 60000 * _0x33f1de) / 1000);
        _0x2ee344 && (_0x53903e = parseInt((_0x2e8c3e - 86400000 * _0x393ed5 - 60 * _0xaa814f * 60 * 1000 - 60000 * _0x33f1de - 1000 * _0x5d5f32) / 100));
        return {
          dd: this.addZero(_0x393ed5),
          hh: this.addZero(_0xaa814f),
          mm: this.addZero(_0x33f1de),
          ss: this.addZero(_0x5d5f32),
          ms: _0x53903e
        };
      },
      addZero: function (_0x5140fa) {
        return _0x5140fa < 10 ? "0" + _0x5140fa : _0x5140fa;
      },
      shouldUpdate: function (_0x1e81be, _0x40d4bb) {
        return _0x1e81be < _0x40d4bb;
      },
      formatNum: function (_0x581bac) {
        var _0x58ffc6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          _0x2e915c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          _0x1115cc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          _0x5b6060 = Math.pow(10, _0x58ffc6),
          _0x349f50 = Math.pow(10, _0x2e915c);
        return _0x581bac >= _0x5b6060 ? Math.round(_0x581bac / 10000 * _0x349f50) / _0x349f50 + "".concat(_0x1115cc ? "W" : "万") : String(_0x581bac);
      },
      formatStr: function (_0x4d5157, _0x5ba5bb) {
        return _0x4d5157 && _0x4d5157.length > _0x5ba5bb ? _0x4d5157.substring(0, _0x5ba5bb).concat("...") : _0x4d5157;
      },
      filterTime: function (_0x595c65) {
        if (!_0x595c65) {
          return "";
        }
        var _0x18f4f7 = _0x22fa9f()().endOf("day").valueOf() + 1,
          _0x5ca223 = _0x18f4f7 - 86400000,
          _0x426708 = _0x5ca223 - 86400000,
          _0x16653c = _0x18f4f7 + 86400000;
        return _0x595c65 >= _0x5ca223 && _0x595c65 < _0x18f4f7 ? "今天 " + _0x22fa9f.a.unix(_0x595c65 / 1000).format("HH:mm") : _0x595c65 >= _0x18f4f7 && _0x595c65 < _0x16653c ? "明天 " + _0x22fa9f.a.unix(_0x595c65 / 1000).format("HH:mm") : _0x595c65 >= _0x426708 && _0x595c65 < _0x5ca223 ? "昨天 " + _0x22fa9f.a.unix(_0x595c65 / 1000).format("HH:mm") : _0x22fa9f.a.unix(_0x595c65 / 1000).format("MM/DD HH:mm");
      },
      drawCanvasElement: function (_0x1f3a5a, _0x3e224e, _0x1acb56, _0x27efb2, _0x452487) {
        var _0x2e9e0d = this;
        arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        _0x1acb56.forEach(function (_0x43ab7a) {
          if ("text" === _0x43ab7a.type && _0x43ab7a.content) {
            if (_0x3e224e.beginPath(), _0x3e224e.fillStyle = _0x43ab7a.color, _0x3e224e.font = "".concat(_0x43ab7a.size * _0x27efb2, "px ").concat(_0x43ab7a.fontStyle), _0x3e224e.textAlign = _0x43ab7a.align || "left", _0x43ab7a.wrap && _0x43ab7a.wrap > 1 && _0x43ab7a.width) {
              for (var _0x123efb = Math.floor(_0x43ab7a.width / _0x43ab7a.size), _0x5a25a0 = Math.ceil(_0x43ab7a.content.length / _0x123efb), _0x48d8ef = Math.min(_0x5a25a0, _0x43ab7a.wrap), _0x1c5462 = 0; _0x1c5462 < _0x48d8ef; _0x1c5462++) {
                var _0x540a54 = _0x43ab7a.content.substring(_0x1c5462 * _0x123efb, (_0x1c5462 + 1) * _0x123efb),
                  _0x1d647d = _0x43ab7a.top + _0x1c5462 * (_0x43ab7a.size * (_0x43ab7a.lineHeight || 1.2));
                _0x5a25a0 > _0x43ab7a.wrap && _0x1c5462 === _0x43ab7a.wrap - 1 ? (_0x540a54 = _0x540a54.substring(0, _0x123efb - 2) + "...", _0x2e9e0d.fillTextDecoration(_0x3e224e, _0x43ab7a, _0x27efb2, _0x540a54, _0x1d647d)) : _0x2e9e0d.fillTextDecoration(_0x3e224e, _0x43ab7a, _0x27efb2, _0x540a54, _0x1d647d);
              }
            } else {
              _0x2e9e0d.fillTextDecoration(_0x3e224e, _0x43ab7a, _0x27efb2);
            }
          }
          "line" === _0x43ab7a.type && (_0x3e224e.beginPath(), _0x3e224e.lineWidth = 1, _0x3e224e.moveTo(_0x43ab7a.startLeft * _0x27efb2, _0x43ab7a.startTop * _0x27efb2), _0x3e224e.lineTo(_0x43ab7a.left * _0x27efb2, _0x43ab7a.top * _0x27efb2), _0x3e224e.strokeStyle = _0x43ab7a.color, _0x3e224e.stroke());
          "rect" === _0x43ab7a.type && (_0x3e224e.beginPath(), _0x3e224e.lineWidth = _0x43ab7a.lineWidth * _0x27efb2, _0x3e224e.strokeStyle = _0x43ab7a.color, _0x3e224e.rect(_0x43ab7a.left * _0x27efb2, _0x43ab7a.top * _0x27efb2, _0x43ab7a.width * _0x27efb2, _0x43ab7a.height * _0x27efb2), _0x3e224e.fillStyle = _0x43ab7a.fillStyle, _0x3e224e.fill(), _0x3e224e.stroke());
          "circle" === _0x43ab7a.type && (_0x3e224e.beginPath(), _0x3e224e.lineWidth = _0x43ab7a.lineWidth * _0x27efb2, _0x3e224e.strokeStyle = _0x43ab7a.color, _0x3e224e.arc(_0x43ab7a.left * _0x27efb2 + _0x43ab7a.radiusSize * _0x27efb2, _0x43ab7a.top * _0x27efb2 + _0x43ab7a.radiusSize * _0x27efb2, _0x43ab7a.radiusSize * _0x27efb2, _0x43ab7a.sAngle || 0, _0x43ab7a.eAngle || 2 * Math.PI, _0x43ab7a.counterclockwise || !1), _0x43ab7a.fillStyle && (_0x3e224e.fillStyle = _0x43ab7a.fillStyle, _0x3e224e.fill()), _0x3e224e.stroke());
          "image" === _0x43ab7a.type && _0x43ab7a.url && (_0x43ab7a.radius ? (_0x3e224e.save(), _0x3e224e.beginPath(), _0x3e224e.arc(_0x43ab7a.left * _0x27efb2 + _0x43ab7a.width * _0x27efb2 / 2, _0x43ab7a.top * _0x27efb2 + _0x43ab7a.height * _0x27efb2 / 2, _0x43ab7a.width * _0x27efb2 / 2, 0, 2 * Math.PI), _0x3e224e.clip(), _0x3e224e.drawImage(_0x43ab7a.url, _0x43ab7a.left * _0x27efb2, _0x43ab7a.top * _0x27efb2, _0x43ab7a.width * _0x27efb2, _0x43ab7a.height * _0x27efb2), _0x3e224e.restore()) : (_0x3e224e.beginPath(), _0x3e224e.drawImage(_0x43ab7a.url, _0x43ab7a.left * _0x27efb2, _0x43ab7a.top * _0x27efb2, _0x43ab7a.width * _0x27efb2, _0x43ab7a.height * _0x27efb2)));
        });
      },
      fillTextDecoration: function (_0x41a02c, _0x864a26, _0x186d6b, _0x369ca5, _0xf715a4) {
        var _0x5e4776 = _0xf715a4 || _0x864a26.top,
          _0x40305e = _0x369ca5 || _0x864a26.content;
        switch (_0x41a02c.fillText(_0x40305e, _0x864a26.left * _0x186d6b, _0x5e4776 * _0x186d6b), _0x864a26.bold && _0x41a02c.fillText(_0x40305e, _0x864a26.left * _0x186d6b - 0.5, _0x5e4776 * _0x186d6b), _0x864a26.textDecoration) {
          case "line-through":
            _0x41a02c.lineWidth = 1;
            _0x41a02c.moveTo((_0x864a26.left - _0x864a26.size / 3) * _0x186d6b, (_0x5e4776 - _0x864a26.size / 3) * _0x186d6b);
            _0x41a02c.lineTo((_0x864a26.left + _0x864a26.size / 3) * _0x186d6b + _0x41a02c.measureText(_0x40305e).width, (_0x5e4776 - _0x864a26.size / 3) * _0x186d6b);
            _0x41a02c.strokeStyle = _0x864a26.color;
            _0x41a02c.stroke();
        }
      },
      handleUrlByEnv: function (_0x348918) {
        if (_0x348918.includes("http")) {
          return _0x348918;
        }
        var _0x39162b = (location.pathname.split("/")[1].match(/(\d+)$/g) || [])[0];
        if (!_0x39162b) {
          return location.origin + _0x348918;
        }
        var _0x3acebc = _0x348918.split("/");
        _0x3acebc[1] += _0x39162b;
        return location.origin + _0x3acebc.join("/");
      },
      callupWxAuth: function () {
        var _0x571477 = _0x47cfe4.a.parse(window.location.search);
        if (_0x571477.code) {
          _0x564215.a.getWxToken({
            code: _0x571477.code,
            type: 2
          }).then(function (_0x2bd18b) {});
        } else {
          var _0x31bfb6 = window.location,
            _0x201443 = _0x31bfb6.pathname,
            _0x4fad2a = _0x31bfb6.search,
            _0xbb4935 = _0x31bfb6.hash,
            _0x57a087 = encodeURIComponent("http://m.fenxianglife3.com".concat(_0x201443).concat(_0x4fad2a).concat(_0xbb4935));
          location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb128ea6544cf8e50&redirect_uri=".concat(_0x57a087, "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect");
        }
      },
      downloadUrl: "https://m.fenxianglife7.com/act/persistent/download/index.html",
      downloadAPP: function () {
        var _0xf26960 = window.navigator.userAgent,
          _0x411ab3 = "",
          _0x8f7635 = {
            ios: "https://itunes.apple.com/cn/app/id1383296825?mt=8",
            android: "https://m.fenxianglife7.com/act/persistent/download/index.html"
          };
        (_0xf26960.match(/iphone/gi) || _0xf26960.match(/ipad/gi)) && (_0x411ab3 = "ios");
        _0xf26960.match(/android/gi) && (_0x411ab3 = "android");
        _0x411ab3 && (window.location.href = _0x8f7635[_0x411ab3]);
      },
      bindSwiperEvent: function (_0x513356, _0x354ff2) {
        var _0x2560d0 = {
          swipeLeft: function () {},
          swipeRight: function () {},
          swipeDown: function () {},
          swipeUp: function () {},
          drag: function () {}
        };
        var _0x54d62b = !1,
          _0x481a0c = 0,
          _0x291212 = 0,
          _0x38943c = 0,
          _0x26aaa9 = 0,
          _0x140afd = 0,
          _0x441ffe = 0,
          _0x19eb55 = Object(_0x45ca2a.a)({}, _0x2560d0, _0x354ff2);
        _0x513356 && (_0x513356.ontouchstart = function (_0x1e2ece) {
          _0x481a0c = _0x1e2ece.touches[0].pageX;
          _0x291212 = _0x1e2ece.touches[0].pageY;
          _0x140afd = _0x481a0c - _0x513356.offsetLeft;
          _0x441ffe = _0x291212 - _0x513356.offsetTop;
        }, _0x513356.ontouchmove = function (_0x3685d2) {
          _0x54d62b = !0;
          _0x38943c = _0x3685d2.touches[0].pageX;
          _0x26aaa9 = _0x3685d2.touches[0].pageY;
          _0x3685d2.mation = {
            startX: _0x481a0c,
            startY: _0x291212,
            moveX: _0x38943c,
            moveY: _0x26aaa9,
            disX: _0x140afd,
            disY: _0x441ffe
          };
          _0x19eb55.drag.call(_0x513356, _0x3685d2);
        }, _0x513356.ontouchend = function (_0x10277e) {
          _0x54d62b && (Math.abs(_0x38943c - _0x481a0c) > Math.abs(_0x26aaa9 - _0x291212) ? _0x38943c - _0x481a0c > 60 ? _0x19eb55.swipeRight.call(_0x513356, _0x10277e) : _0x38943c - _0x481a0c < -60 && _0x19eb55.swipeLeft.call(_0x513356, _0x10277e) : _0x26aaa9 - _0x291212 > 60 ? _0x19eb55.swipeDown.call(_0x513356, _0x10277e) : _0x26aaa9 - _0x291212 < -60 && _0x19eb55.swipeUp.call(_0x513356, _0x10277e));
          _0x54d62b = !1;
        });
      },
      compareVersion: function (_0x422f19, _0x78f1fe) {
        _0x422f19 = _0x422f19.split(".");
        _0x78f1fe = _0x78f1fe.split(".");
        for (var _0x275349 = Math.max(_0x422f19.length, _0x78f1fe.length); _0x422f19.length < _0x275349;) {
          _0x422f19.push("0");
        }
        for (; _0x78f1fe.length < _0x275349;) {
          _0x78f1fe.push("0");
        }
        for (var _0x22ba19 = 0; _0x22ba19 < _0x275349; _0x22ba19++) {
          var _0x117efe = parseInt(_0x422f19[_0x22ba19]),
            _0x444c39 = parseInt(_0x78f1fe[_0x22ba19]);
          if (_0x117efe > _0x444c39) {
            return 1;
          }
          if (_0x117efe < _0x444c39) {
            return -1;
          }
        }
        return 0;
      },
      formatName: function (_0x468028) {
        if (!_0x468028) {
          return _0x468028;
        }
        var _0x236a08 = Array.from(_0x468028),
          _0x54703a = _0x236a08.length;
        return _0x54703a > 2 ? _0x236a08[0] + "**" + _0x236a08[_0x54703a - 1] : _0x236a08[0] + "***";
      },
      getCurrentHost: function () {
        var _0xc70f60 = window.location.pathname.match(/\/act(\d)*/g)[0].match(/(\d)/);
        return _0xc70f60 && _0xc70f60[0] || "";
      },
      isFunction: function (_0x370c73) {
        return _0x370c73 && "[object Function]" === Object.prototype.toString.call(_0x370c73);
      },
      getIosVersion: function () {
        return navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)[1].replace(/_/g, ".");
      },
      getWxVersion: function () {
        return navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i) || [];
      },
      openMiniApp: function (_0x23f33b, _0x5804bc, _0x2ab7b5) {
        var _0x3709de,
          _0x123bb0,
          _0x48aa47,
          _0x1ef2ae = encodeURIComponent(_0x5804bc),
          _0x2f747d = "sdk://wechat/openMiniPro?userName=".concat(_0x23f33b, "&path=").concat(_0x1ef2ae);
        if (_0x2f747d = _0x2ab7b5 ? "".concat(_0x2f747d, "&env=").concat(_0x2ab7b5) : _0x2f747d, _0x29d0ea.i) {
          null === (_0x3709de = _0x17009d.webkit) || void 0 === _0x3709de || null === (_0x123bb0 = _0x3709de.messageHandlers) || void 0 === _0x123bb0 || null === (_0x48aa47 = _0x123bb0.openMiniApp) || void 0 === _0x48aa47 || _0x48aa47.postMessage({
            url: _0x2f747d
          });
        } else {
          if (_0x29d0ea.h) {
            var _0x3aade9;
            null === (_0x3aade9 = _0x17009d.nplusapp) || void 0 === _0x3aade9 || _0x3aade9.openMiniApp(_0x2f747d);
          } else {
            console.warn("请在客户端中调用");
          }
        }
      },
      getAppHeader: function (_0x1f6444) {
        return new Promise(function (_0x16c5b4, _0x31afd3) {
          _0x17009d.FXJSBridge ? _0x17009d.FXJSBridge.invoke("constructReqHeader", _0x1f6444, function (_0x596ffe) {
            if ("string" == typeof _0x596ffe) {
              try {
                _0x596ffe = JSON.parse(_0x596ffe.replace(/\\/g, "").replace(/\"{/g, "{").replace(/\}"/g, "}"));
              } catch (_0x24a4bb) {
                _0x31afd3(_0x24a4bb);
              }
            }
            _0x16c5b4(_0x596ffe);
          }) : (console.error("很抱歉，由于您的手机系统太低暂不支持该功能！"), _0x31afd3("很抱歉，由于您的手机系统太低暂不支持该功能！"));
        });
      },
      isHuaWei: function () {
        var _0x361e26 = window.navigator.userAgent;
        return !!(_0x361e26.match(/HUAWEI/i) || _0x361e26.match(/HUAWEI P20/i) || _0x361e26.match(/HUAWEI Mate 10/i) || _0x361e26.match(/HUAWEI Mate RS Porsche Design/i));
      }
    };
    _0x2a5f1d.a = _0xa55a0c;
  },
  754: function (_0x506d40, _0x388923, _0x27406f) {
    'use strict';

    _0x27406f.r(_0x388923);
    _0x27406f(92);
    var _0x2a2a6e = _0x27406f(30),
      _0x117307 = _0x27406f.n(_0x2a2a6e),
      _0x523df5 = _0x27406f(64),
      _0x2bec83 = _0x27406f.n(_0x523df5),
      _0x4baf92 = _0x27406f(151),
      _0x29ead3 = (_0x27406f(62), _0x27406f(13)),
      _0x151b76 = _0x27406f.n(_0x29ead3),
      _0x26feba = _0x27406f(12),
      _0x4c4974 = _0x27406f(0),
      _0xfadbf3 = _0x27406f.n(_0x4c4974),
      _0xe33dde = _0x27406f(10),
      _0x41af47 = _0x27406f(21),
      _0x5b79e4 = _0x27406f(26),
      _0xc25b78 = _0x27406f.n(_0x5b79e4),
      _0x3c60aa = _0x27406f(16),
      _0x10a5ea = _0x27406f(212),
      _0x3c22a8 = (_0x27406f(45), _0x27406f(818)),
      _0x58659c = _0x27406f.n(_0x3c22a8),
      _0x1f1911 = function () {
        var _0x305d1b = Object(_0x4c4974.useState)(0),
          _0x4e543f = Object(_0x26feba.a)(_0x305d1b, 2),
          _0x32bda3 = _0x4e543f[0],
          _0x913e32 = _0x4e543f[1],
          _0x3d31bb = Object(_0x4c4974.useState)(!1),
          _0x24f0c3 = Object(_0x26feba.a)(_0x3d31bb, 2),
          _0x421fa5 = _0x24f0c3[0],
          _0x121ab5 = _0x24f0c3[1],
          _0x35b18b = Object(_0x4c4974.useState)(!1),
          _0x2b7580 = Object(_0x26feba.a)(_0x35b18b, 2),
          _0x38ff1c = _0x2b7580[0],
          _0x2c2092 = _0x2b7580[1];
        Object(_0x4c4974.useEffect)(function () {
          var _0x21ff82 = _0x58659c()(function () {
            if (!_0x38ff1c) {
              var _0x2584af = document,
                _0x159243 = _0x2584af.scrollingElement,
                _0x1c5ddc = _0x2584af.body,
                _0x51974d = _0x159243 || _0x1c5ddc,
                _0xb124f0 = _0x51974d.scrollHeight,
                _0x262230 = _0x51974d.scrollTop;
              if (_0xb124f0 - window.innerHeight - _0x262230 < 150 && !_0x421fa5) {
                _0x913e32(_0x32bda3 + 1);
              }
            }
          }, 20);
          window.addEventListener("scroll", _0x21ff82, !1);
          return function () {
            return _0x21ff82 && window.removeEventListener("scroll", _0x21ff82, !1);
          };
        }, [_0x421fa5, _0x32bda3, _0x38ff1c]);
        return [_0x32bda3, _0x421fa5, _0x38ff1c, {
          setPage: _0x913e32,
          setNoMore: _0x121ab5,
          setLocked: _0x2c2092
        }];
      },
      _0x459a12 = _0x27406f(757);
    _0x27406f(829);
    var _0x16dca8 = function (_0x3f6d77) {
        var _0x3b4b23 = _0x3f6d77.item,
          _0x333a1c = {
            className: "exc-item-top"
          };
        var _0x5c6152 = {
          className: "exc-item-over"
        };
        var _0x5500cb = {
          className: "exc-item-title"
        };
        var _0x4ffa2e = {
          className: "exc-item-bottom"
        };
        var _0x4696b4 = {
          className: "exc-item-cost"
        };
        return _0xfadbf3.a.createElement("div", {
          className: "exc-item",
          onClick: function () {
            _0x3b4b23.itemStock <= 0 || _0x3f6d77.goldCoin < _0x3b4b23.coinConsume || 1 !== _0x3b4b23.startStatus || _0x3f6d77.goodsClick(_0x3f6d77.item);
          }
        }, _0xfadbf3.a.createElement("div", _0x333a1c, _0xfadbf3.a.createElement("img", {
          src: _0x3b4b23.picUrl,
          alt: ""
        }), !_0x3b4b23.itemStock && 1 === _0x3b4b23.startStatus && _0xfadbf3.a.createElement("div", _0x5c6152, "兑完啦")), _0xfadbf3.a.createElement("div", _0x5500cb, _0x3b4b23.itemTitle), _0xfadbf3.a.createElement("div", _0x4ffa2e, _0xfadbf3.a.createElement("div", _0x4696b4, Object(_0x459a12.j)(_0x3b4b23.coinConsume), "金币"), _0xfadbf3.a.createElement("div", {
          className: _0x3b4b23.itemStock <= 0 || _0x3f6d77.goldCoin < _0x3b4b23.coinConsume || 1 !== _0x3b4b23.startStatus ? "exc-item-btn exc-item-btn-gray" : "exc-item-btn"
        }, 0 === _0x3b4b23.startStatus ? "未开始" : 2 === _0x3b4b23.startStatus ? "已结束" : _0x3b4b23.itemStock <= 0 ? "补货中" : _0x3f6d77.goldCoin < _0x3b4b23.coinConsume ? "金币不足" : "兑换")));
      },
      _0x3ae41f = (_0x27406f(831), _0x27406f(832), "https://static.fenxianglife.com/ui/h5/currency/v2");
    function _0x360bd4(_0x3b9314) {
      var _0x3a989c = _0x3b9314.list,
        _0x27d128 = void 0 === _0x3a989c ? [] : _0x3a989c,
        _0x3fd1c0 = _0x3b9314.props;
      console.log(_0x3fd1c0);
      var _0x1b8e87 = {
        className: "tlj-items"
      };
      return _0xfadbf3.a.createElement("div", _0x1b8e87, _0x27d128.map(function () {
        var _0x350064 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          _0x5c5f7a = arguments.length > 1 ? arguments[1] : void 0,
          _0x28fb88 = {
            className: "tlj-item__img"
          };
        var _0x2399a9 = {
          className: "tlj-item__info"
        };
        var _0x972d08 = {
          className: "tlj-item__info-price"
        };
        var _0x2f26d4 = {
          className: "helveticaNeue font14"
        };
        var _0xa69117 = {
          className: "tlj-item__info-price--exchanged"
        };
        var _0x3c59c0 = {
          className: "helveticaNeue"
        };
        var _0x3f2805 = {
          className: "helveticaNeue"
        };
        var _0x5b4c5b = {
          className: "helveticaNeue"
        };
        var _0x30ced1 = {
          className: "tlj-item__info-sale"
        };
        var _0x1e5401 = {
          className: "helveticaNeue"
        };
        return _0xfadbf3.a.createElement("div", {
          className: "tlj-item",
          key: _0x350064.id,
          onClick: function () {
            return function (_0x5c42cf, _0x3a392f) {
              var _0x4e992c = _0x5c42cf.id,
                _0x49d944 = _0x5c42cf.itemId,
                _0x4571f6 = _0x5c42cf.itemTitle,
                _0x38c9db = _0x5c42cf.itemTag,
                _0x19d586 = {
                  item_title: _0x4571f6,
                  item_id: _0x49d944,
                  location: _0x3a392f
                };
              if (Object(_0x3c60aa.m)("click_h5activity_goldenelephant_tlj_goods", _0x19d586), -1 === parseInt(_0x38c9db)) {
                return _0x151b76.a.info("该商品已抢光~", 1);
              }
              Object(_0x3c60aa.l)({
                url: "".concat(location.origin).concat(location.pathname, "?hidNav=1#/exchange/goodsDetail/").concat(_0x4e992c)
              }, "app");
            }(_0x350064, _0x5c5f7a);
          }
        }, _0xfadbf3.a.createElement("div", _0x28fb88, _0xfadbf3.a.createElement("img", {
          alt: "",
          "data-sizes": "auto",
          className: "lazyload tlj-item__img--main",
          src: "https://static.fenxianglife.com/ui/common/loading/loading_171x171_img.png",
          "data-src": "".concat(_0x350064.itemPicUrl).concat(_0x350064.itemPicUrl.includes("alicdn") ? "_260x260q90.jpg" : "")
        }), -1 === parseInt(_0x350064.itemTag) && _0xfadbf3.a.createElement("img", {
          className: "tlj-item__img--status",
          alt: "",
          src: "".concat(_0x3ae41f, "/tlj_soldout.png?v=1")
        }), 1 === parseInt(_0x350064.itemTag) && _0xfadbf3.a.createElement("img", {
          className: "tlj-item__img--status",
          alt: "",
          src: "".concat(_0x459a12.h, "img-dk.png?v=1")
        })), _0xfadbf3.a.createElement("div", _0x2399a9, _0xfadbf3.a.createElement("h3", null, _0x350064.itemTitle), _0xfadbf3.a.createElement("p", _0x972d08, _0x350064.itemDiscountPrice && _0x350064.subsidyAmount ? _0xfadbf3.a.createElement(_0xfadbf3.a.Fragment, null, "¥", _0xfadbf3.a.createElement("i", _0x2f26d4, (_0x350064.itemDiscountPrice - _0x350064.subsidyAmount) / 100)) : 0, 1 === parseInt(_0x350064.itemTag) ? _0xfadbf3.a.createElement(_0xfadbf3.a.Fragment, null, _0xfadbf3.a.createElement("span", _0xa69117, "+", _0xfadbf3.a.createElement("i", _0x3c59c0, Object(_0x459a12.j)(_0x350064.consumCoin)), "金币")) : _0xfadbf3.a.createElement("span", _0x3f2805, "+", _0xfadbf3.a.createElement("i", _0x5b4c5b, Object(_0x459a12.j)(_0x350064.consumCoin)), "金币")), _0xfadbf3.a.createElement("p", _0x30ced1, "在售价：", _0xfadbf3.a.createElement("span", _0x1e5401, "¥", _0x350064.itemPrice ? _0x350064.itemPrice / 100 : 0))));
      }));
    }
    _0x27406f(834);
    var _0x5af66d = _0xc25b78.a.parse(window.location.search),
      _0x1790be = Boolean(_0x5af66d.isGoldPage);
    _0x388923.default = function (_0x2d599f) {
      var _0x376f0e = Object(_0x4c4974.useState)(0),
        _0x59ab07 = Object(_0x26feba.a)(_0x376f0e, 2),
        _0x154765 = _0x59ab07[0],
        _0x678871 = _0x59ab07[1],
        _0x230b26 = Object(_0x4c4974.useState)(""),
        _0xd2c2df = Object(_0x26feba.a)(_0x230b26, 2),
        _0x37bef0 = _0xd2c2df[0],
        _0x5737c5 = _0xd2c2df[1],
        _0x127e53 = Object(_0x4c4974.useState)([]),
        _0x37d591 = Object(_0x26feba.a)(_0x127e53, 2),
        _0x4631b8 = _0x37d591[0],
        _0x16009c = _0x37d591[1],
        _0x54721c = Object(_0x4c4974.useState)([]),
        _0x235371 = Object(_0x26feba.a)(_0x54721c, 2),
        _0x13189d = _0x235371[0],
        _0x4b4ec4 = _0x235371[1],
        _0x355d5c = Object(_0x4c4974.useState)([]),
        _0x51e6f2 = Object(_0x26feba.a)(_0x355d5c, 2),
        _0xbe5440 = _0x51e6f2[0],
        _0x115079 = _0x51e6f2[1],
        _0x143be3 = Object(_0x4c4974.useState)(!1),
        _0x5b9ab1 = Object(_0x26feba.a)(_0x143be3, 2),
        _0x593a06 = _0x5b9ab1[0],
        _0x169987 = _0x5b9ab1[1],
        _0x5a4e = Object(_0x4c4974.useState)({}),
        _0x24d9dd = Object(_0x26feba.a)(_0x5a4e, 2),
        _0x2694c6 = _0x24d9dd[0],
        _0x4b2d0a = _0x24d9dd[1],
        _0x47dfa9 = Object(_0x4c4974.useState)([]),
        _0x174173 = Object(_0x26feba.a)(_0x47dfa9, 2),
        _0x1beea2 = _0x174173[0],
        _0x52bf9c = _0x174173[1],
        _0x1b5084 = _0x1f1911(),
        _0x191a73 = Object(_0x26feba.a)(_0x1b5084, 4),
        _0x48c931 = _0x191a73[0],
        _0x149ca6 = (_0x191a73[1], _0x191a73[2], _0x191a73[3]),
        _0x55fe7e = (_0x149ca6.setPage, _0x149ca6.setNoMore),
        _0x169afa = _0x149ca6.setLocked;
      Object(_0x4c4974.useEffect)(function () {
        var _0x34f339 = {
          page: _0x48c931,
          size: 20
        };
        _0x169afa(!0);
        _0x151b76.a.loading("数据加载中...", 3);
        _0x41af47.a.egTljExchangeList(_0x34f339).then(function (_0x220537) {
          var _0x1b4c28 = _0x220537.data || {},
            _0x551419 = _0x1b4c28.list,
            _0x42e07b = void 0 === _0x551419 ? [] : _0x551419,
            _0x21f1dd = _0x1b4c28.endPage,
            _0x35e312 = void 0 !== _0x21f1dd && _0x21f1dd;
          _0x52bf9c(function (_0x14b586) {
            return _0x48c931 ? _0x14b586.concat(_0x42e07b) : _0x42e07b;
          });
          _0x55fe7e(_0x35e312);
          _0x169afa(!1);
          _0x151b76.a.hide();
        });
      }, [_0x48c931]);
      var _0x381d5a = function () {
          return _0x169987(!1);
        },
        _0x1b60df = function () {
          var _0x5a1fd5 = {
            operation: "点击确认兑换"
          };
          _0xe33dde.a.request.trackLog("click_h5activity_goldenelephant_goldexchange_page", _0x5a1fd5);
          _0x381d5a();
          3 === _0x2694c6.goodsType ? _0x3f85b9() : _0xe33dde.a.appInvoke.invoke("openPage", {
            url: "".concat(window.location.origin, "/h5-self/pay/goldElephant/index.html?goldEleId=").concat(_0x2694c6.itemId, "&coin=").concat(_0x2694c6.coinConsume),
            backRefresh: !0,
            directType: "redirect"
          });
        },
        _0x3f85b9 = function () {
          var _0x3064f3 = Object(_0x4baf92.a)(_0x2bec83.a.mark(function _0x25c742() {
            return _0x2bec83.a.wrap(function (_0x16edca) {
              for (;;) {
                switch (_0x16edca.prev = _0x16edca.next) {
                  case 0:
                    var _0x4d05aa = {
                      itemId: _0x2694c6.itemId
                    };
                    _0x16edca.prev = 0;
                    _0x151b76.a.loading("", 3);
                    _0x16edca.next = 4;
                    return _0x41af47.a.egExchangeRewardAmount(_0x4d05aa);
                  case 4:
                    _0x151b76.a.hide();
                    _0x151b76.a.info("兑换成功", 1, function () {
                      var _0x27419a = _0x10a5ea.a.handleUrlByEnv("/act/persistent/goldenElephant/index.html#/orders"),
                        _0xcc19b4 = {
                          url: _0x27419a,
                          backRefresh: !0,
                          directType: "redirect"
                        };
                      _0xe33dde.a.appInvoke.invoke("openPage", _0xcc19b4);
                    });
                    _0x16edca.next = 11;
                    break;
                  case 8:
                    _0x16edca.prev = 8;
                    _0x16edca.t0 = _0x16edca.catch(0);
                    _0x151b76.a.hide();
                  case 11:
                  case "end":
                    return _0x16edca.stop();
                }
              }
            }, _0x25c742, null, [[0, 8]]);
          }));
          return function () {
            return _0x3064f3.apply(this, arguments);
          };
        }(),
        _0x14a637 = function (_0x586b59) {
          var _0x182008 = {
            operation: "点击商品兑换"
          };
          _0xe33dde.a.request.trackLog("click_h5activity_goldenelephant_goldexchange_page", _0x182008);
          _0x4b2d0a(_0x586b59);
          _0x169987(!0);
        },
        _0x5d6565 = Object(_0x4c4974.useCallback)(function () {
          window.localStorage.getItem("egFinishOnceVisitNew") || (_0x41af47.a.egOnceVisit().then(function (_0x16ed80) {
            var _0x4811ab = {
              flushCache: 1
            };
            _0x41af47.a.egMedalBeckon(_0x4811ab);
          }), window.localStorage.setItem("egFinishOnceVisitNew", 1));
          _0x41af47.a.egItemListV2().then(function (_0x41083c) {
            var _0x563b09 = (_0x41083c.data || {}).list || [],
              _0x54a2a2 = _0x563b09.filter(function (_0x5bc679) {
                return 1 === ((_0x5bc679.itemList || [])[0] || {}).startStatus;
              })[0] || {};
            _0x54a2a2.batchTime || (_0x54a2a2 = _0x563b09[0] || {});
            _0x16009c(_0x563b09);
            _0x5737c5(_0x54a2a2.batchTime);
            _0x4b4ec4(_0x54a2a2.itemList || []);
          });
        }, []),
        _0x2fec5c = Object(_0x4c4974.useCallback)(function (_0x36ef44) {
          _0x41af47.a.egElephantInfo().then(function (_0x44adfe) {
            _0x678871(_0x44adfe.data.coinCurrent);
            "refresh" !== _0x36ef44 && _0x5d6565();
          });
        }, [_0x5d6565]);
      Object(_0x4c4974.useEffect)(function () {
        _0x2fec5c();
        _0x4302b2();
        window.onRestart = function () {
          return _0x2fec5c();
        };
      }, [_0x2fec5c]);
      var _0x4302b2 = function () {
          var _0x3dca34 = Object(_0x4baf92.a)(_0x2bec83.a.mark(function _0x556db3() {
            var _0x26367d;
            return _0x2bec83.a.wrap(function (_0xc055f0) {
              for (;;) {
                switch (_0xc055f0.prev = _0xc055f0.next) {
                  case 0:
                    _0xc055f0.prev = 0;
                    _0xc055f0.next = 3;
                    return _0x41af47.a.egExchangeUserList().then(function (_0x21a9c0) {
                      return _0x21a9c0.data || {};
                    });
                  case 3:
                    _0x26367d = _0xc055f0.sent;
                    _0x115079(_0x26367d.list || []);
                    _0xc055f0.next = 9;
                    break;
                  case 7:
                    _0xc055f0.prev = 7;
                    _0xc055f0.t0 = _0xc055f0.catch(0);
                  case 9:
                  case "end":
                    return _0xc055f0.stop();
                }
              }
            }, _0x556db3, null, [[0, 7]]);
          }));
          return function () {
            return _0x3dca34.apply(this, arguments);
          };
        }(),
        _0x956ae7 = {
          className: "exchange"
        };
      var _0x3ee546 = {
        className: _0x1790be ? "exchange-top top-gold-page" : "exchange-top"
      };
      var _0x27e45d = {
        src: _0x459a12.h + "jx_exchange_header.png",
        alt: ""
      };
      var _0x3ec992 = {
        className: "img-coin"
      };
      var _0x204627 = {
        className: "exchange-info-span"
      };
      var _0x3822ab = {
        className: "exchange-info-num numberotf"
      };
      var _0x5883db = {
        className: "exchange-box"
      };
      var _0x82e063 = {
        className: "time-tab"
      };
      var _0xd8288c = {
        className: "exchange-list"
      };
      var _0x347127 = {
        className: "exchange-swiper"
      };
      var _0x5a38a0 = {
        className: "swiper-list"
      };
      var _0x155dcd = {
        className: "tlj-list"
      };
      var _0x397535 = {
        className: "tlj-list-title"
      };
      var _0x4068a2 = {
        className: "empty"
      };
      var _0x562ba9 = {
        alt: "",
        src: "https://static.fenxianglife.com/ui/common/placeholder/null_img_noorder.png"
      };
      var _0x1d9320 = {
        backgroundColor: "rgba(0,0,0,.7)"
      };
      var _0x485641 = {
        className: "check-exc-modal",
        visible: _0x593a06,
        transparent: !0,
        maskClosable: !1,
        maskStyle: _0x1d9320
      };
      var _0x512d12 = {
        className: "check-exc-con"
      };
      var _0x37032a = {
        className: "check-exc-title"
      };
      var _0x2222e6 = {
        className: "check-exc-box"
      };
      var _0x7331aa = {
        className: "box-con"
      };
      var _0x303b1b = {
        className: "box-icon",
        src: "https://static.fenxianglife.com/ui/h5-activity/persistent/goldenElephant/img_icon_d.png",
        alt: ""
      };
      var _0x239fb0 = {
        className: "box-txt"
      };
      var _0x463b81 = {
        className: "box-gap",
        src: "https://static.fenxianglife.com/ui/h5-activity/persistent/goldenElephant/img_icon_jt.png",
        alt: ""
      };
      var _0x45b3a6 = {
        className: "box-con"
      };
      var _0x306e4f = {
        className: "box-icon",
        src: "https://static.fenxianglife.com/ui/h5-activity/persistent/goldenElephant/img_icon_h.png",
        alt: ""
      };
      var _0x3b1ad7 = {
        className: "box-txt"
      };
      var _0x1bef5e = {
        className: "check-exc-btn"
      };
      var _0xc47469 = {
        className: "check-exc-btn-close",
        onClick: _0x381d5a
      };
      var _0x4a30cd = {
        className: "check-exc-btn-goto",
        onClick: _0x1b60df
      };
      var _0x3aad97 = {
        className: "check-exc-tip"
      };
      var _0x3ea0ab = {
        className: "check-exc-title"
      };
      var _0x3fb291 = {
        className: "check-exc-len"
      };
      var _0x577342 = {
        className: "check-exc-btn"
      };
      var _0x4d92a4 = {
        className: "check-exc-btn-close",
        onClick: _0x381d5a
      };
      var _0x513170 = {
        className: "check-exc-btn-goto",
        onClick: _0x1b60df
      };
      return _0xfadbf3.a.createElement(_0xfadbf3.a.Fragment, null, _0xfadbf3.a.createElement("div", _0x956ae7, _0xfadbf3.a.createElement("div", _0x3ee546, _0xfadbf3.a.createElement("img", _0x27e45d), _0x1790be && _0xfadbf3.a.createElement("img", {
        className: "exchange-btn",
        src: _0x459a12.h + "jx_exchange_btn.png",
        onClick: function () {
          Object(_0x3c60aa.f)("openPage", {
            url: "".concat(window.location.origin, "/act/persistent/goldenElephant/index.html?hidNav=1")
          });
        },
        alt: ""
      }), _0xfadbf3.a.createElement("div", {
        className: "exchange-rule",
        onClick: function () {
          var _0x5a2892 = {
            operation: "点击规则"
          };
          var _0x5bcd4d = {
            url: "https://m.fenxianglife.com/fms/100012/fa739786/index.html"
          };
          _0xe33dde.a.request.trackLog("click_h5activity_goldenelephant_goldexchange_page", _0x5a2892);
          Object(_0x3c60aa.l)(_0x5bcd4d, "web");
        }
      }, "规则"), _0xfadbf3.a.createElement("div", {
        className: _0x1790be ? "exchange-info gold-page-info" : "exchange-info"
      }, _0xfadbf3.a.createElement("i", _0x3ec992), _0xfadbf3.a.createElement("span", _0x204627, "我的金币"), _0xfadbf3.a.createElement("span", _0x3822ab, Object(_0x459a12.i)(_0x154765)), _0xfadbf3.a.createElement("div", {
        className: "exchange-info-check",
        onClick: function () {
          var _0x5c492a = {
            operation: "点击兑换记录"
          };
          _0xe33dde.a.request.trackLog("click_h5activity_goldenelephant_goldexchange_page", _0x5c492a);
          var _0x5e077a = _0x10a5ea.a.handleUrlByEnv("/act/persistent/goldenElephant/index.html#/orders"),
            _0x5df693 = {
              url: _0x5e077a,
              backRefresh: !0,
              directType: "redirect"
            };
          _0xe33dde.a.appInvoke.invoke("openPage", _0x5df693);
        }
      }, "兑换记录 >"))), _0xfadbf3.a.createElement("div", _0x5883db, _0xfadbf3.a.createElement("ul", _0x82e063, _0x4631b8.map(function (_0x5f06cf) {
        var _0x1efda4 = _0x5f06cf.batchTime,
          _0x227d42 = _0x5f06cf.itemList;
        return _0xfadbf3.a.createElement("li", {
          key: _0x1efda4,
          onClick: function () {
            return function (_0x2a56f7, _0xab5b59) {
              _0x5737c5(_0x2a56f7);
              _0x4b4ec4(_0xab5b59 || []);
            }(_0x1efda4, _0x227d42);
          },
          className: _0x37bef0 === _0x1efda4 ? "active" : ""
        }, _0x1efda4);
      })), _0xfadbf3.a.createElement("div", _0xd8288c, _0x13189d.map(function (_0x3d2f6d, _0x458956) {
        var _0x55ff41 = {
          item: _0x3d2f6d,
          key: _0x458956,
          goldCoin: _0x154765,
          goodsClick: _0x14a637
        };
        return _0xfadbf3.a.createElement(_0x16dca8, _0x55ff41);
      })), !!_0xbe5440.length && _0xfadbf3.a.createElement("div", _0x347127, _0xfadbf3.a.createElement("ul", _0x5a38a0, _0xbe5440.map(function (_0x1f730f, _0x58f659) {
        var _0x174c34 = {
          key: _0x58f659
        };
        var _0x486d8f = {
          className: "icon",
          src: _0x1f730f.headPic,
          alt: ""
        };
        return _0xfadbf3.a.createElement("li", _0x174c34, _0xfadbf3.a.createElement("img", _0x486d8f), (_0x1f730f.userName || "").substr(0, 3) + "...已成功兑换" + _0x1f730f.itemTitle);
      })))), _0xfadbf3.a.createElement("div", _0x155dcd, _0xfadbf3.a.createElement("h2", _0x397535, "爆款商品抢不停"), _0x1beea2.length ? _0xfadbf3.a.createElement(_0x360bd4, {
        list: _0x1beea2
      }) : _0xfadbf3.a.createElement("div", _0x4068a2, _0xfadbf3.a.createElement("img", _0x562ba9), _0xfadbf3.a.createElement("p", null, "商品正在准备中，敬请期待~")))), _0xfadbf3.a.createElement(_0x117307.a, _0x485641, _0xfadbf3.a.createElement("div", _0x512d12, 3 === _0x2694c6.goodsType ? _0xfadbf3.a.createElement(_0xfadbf3.a.Fragment, null, _0xfadbf3.a.createElement("p", _0x37032a, "金币兑换提示"), _0xfadbf3.a.createElement("div", _0x2222e6, _0xfadbf3.a.createElement("div", _0x7331aa, _0xfadbf3.a.createElement("img", _0x303b1b), _0xfadbf3.a.createElement("p", _0x239fb0, Object(_0x459a12.j)(_0x2694c6.coinConsume), "金币")), _0xfadbf3.a.createElement("img", _0x463b81), _0xfadbf3.a.createElement("div", _0x45b3a6, _0xfadbf3.a.createElement("img", _0x306e4f), _0xfadbf3.a.createElement("p", _0x3b1ad7, _0x2694c6.itemTitle))), _0xfadbf3.a.createElement("div", _0x1bef5e, _0xfadbf3.a.createElement("div", _0xc47469, "取消"), _0xfadbf3.a.createElement("div", _0x4a30cd, "确认")), _0xfadbf3.a.createElement("p", _0x3aad97, "奖励发放至【我的】-【可提现】-【活动奖励】")) : _0xfadbf3.a.createElement(_0xfadbf3.a.Fragment, null, _0xfadbf3.a.createElement("p", _0x3ea0ab, "兑换提示"), _0xfadbf3.a.createElement("p", _0x3fb291, "确认兑换商品成功后，不可以退换哦"), _0xfadbf3.a.createElement("div", _0x577342, _0xfadbf3.a.createElement("div", _0x4d92a4, "取消"), _0xfadbf3.a.createElement("div", _0x513170, "确认"))))));
    };
  },
  757: function (_0x50f1f3, _0x241b71, _0x5bc7d9) {
    'use strict';

    _0x5bc7d9.d(_0x241b71, "k", function () {
      return _0x1337db;
    });
    _0x5bc7d9.d(_0x241b71, "i", function () {
      return _0x5de911;
    });
    _0x5bc7d9.d(_0x241b71, "j", function () {
      return _0x942d5e;
    });
    _0x5bc7d9.d(_0x241b71, "n", function () {
      return _0x178d3f;
    });
    _0x5bc7d9.d(_0x241b71, "m", function () {
      return _0x5c3d2f;
    });
    _0x5bc7d9.d(_0x241b71, "b", function () {
      return _0x2bdf3a;
    });
    _0x5bc7d9.d(_0x241b71, "e", function () {
      return _0x1d1d41;
    });
    _0x5bc7d9.d(_0x241b71, "f", function () {
      return _0x39282c;
    });
    _0x5bc7d9.d(_0x241b71, "c", function () {
      return _0x577983;
    });
    _0x5bc7d9.d(_0x241b71, "l", function () {
      return _0x270c09;
    });
    _0x5bc7d9.d(_0x241b71, "o", function () {
      return _0x49ce4f;
    });
    _0x5bc7d9.d(_0x241b71, "g", function () {
      return _0x206356;
    });
    _0x5bc7d9.d(_0x241b71, "h", function () {
      return _0x333ece;
    });
    _0x5bc7d9.d(_0x241b71, "d", function () {
      return _0x57ec4b;
    });
    _0x5bc7d9.d(_0x241b71, "a", function () {
      return _0x58c7cd;
    });
    _0x5bc7d9(10);
    var _0x106062 = _0x5bc7d9(26),
      _0x59ea2e = _0x5bc7d9.n(_0x106062),
      _0x46c1bf = _0x5bc7d9(16),
      _0x1337db = function (_0x7e1d5, _0x58ad68) {
        var _0x1b5a56 = _0x7e1d5 / _0x58ad68 * 100;
        _0x1b5a56 < 100 && "100.0" === _0x1b5a56.toFixed(1) && (_0x1b5a56 = 99.9);
        return _0x1b5a56.toFixed(1) + "%";
      },
      _0x5de911 = function (_0x356aee) {
        return _0x356aee.toString().replace(/(\d+?)(?=(?:\d{3})+$)/g, "$1,");
      },
      _0x942d5e = function (_0x285d67) {
        return _0x285d67 >= 10000 ? _0x285d67 / 10000 + "万" : _0x285d67;
      },
      _0x178d3f = function (_0x3fabf8, _0x1cc998) {
        var _0x35e917 = parseInt(_0x3fabf8 / 3600) < 10 ? "0" + parseInt(_0x3fabf8 / 3600) : parseInt(_0x3fabf8 / 3600),
          _0x15b0b5 = parseInt(_0x3fabf8 / 60 % 60) < 10 ? "0" + parseInt(_0x3fabf8 / 60 % 60) : parseInt(_0x3fabf8 / 60 % 60),
          _0x32f3fe = parseInt(_0x3fabf8 / 60) < 10 ? "0" + parseInt(_0x3fabf8 / 60) : parseInt(_0x3fabf8 / 60),
          _0x2422ac = parseInt(_0x3fabf8 % 60) < 10 ? "0" + parseInt(_0x3fabf8 % 60) : parseInt(_0x3fabf8 % 60);
        return _0x1cc998 ? "".concat(_0x32f3fe, ":").concat(_0x2422ac) : "".concat(_0x35e917, ":").concat(_0x15b0b5, ":").concat(_0x2422ac);
      },
      _0x5c3d2f = function (_0x7becd1) {
        var _0x2b0743 = new Date(1000 * _0x7becd1);
        return "".concat(_0x2b0743.getFullYear(), "年").concat(_0x2b0743.getMonth() + 1, "月").concat(_0x2b0743.getDate(), "日 ").concat(_0x2b0743.getHours() > 9 ? _0x2b0743.getHours() : "0" + _0x2b0743.getHours(), ":").concat(_0x2b0743.getMinutes() > 9 ? _0x2b0743.getMinutes() : "0" + _0x2b0743.getMinutes(), ":").concat(_0x2b0743.getSeconds() > 9 ? _0x2b0743.getSeconds() : "0" + _0x2b0743.getSeconds());
      },
      _0x2bdf3a = function (_0x596ddc) {
        var _0x4d70fd = new Date(1000 * _0x596ddc);
        return "".concat(_0x4d70fd.getFullYear(), ".").concat(_0x4d70fd.getMonth() + 1 > 9 ? _0x4d70fd.getMonth() + 1 : "0" + (_0x4d70fd.getMonth() + 1), ".").concat(_0x4d70fd.getDate() > 9 ? _0x4d70fd.getDate() : "0" + _0x4d70fd.getDate());
      },
      _0x1d1d41 = function (_0x387a25) {
        var _0x1b4b2b = document.querySelector(".contribute-mask");
        _0x1b4b2b && (_0x1b4b2b.style.transform = "translateZ(".concat(_0x387a25, "px)"));
      },
      _0x39282c = function (_0x114243) {
        var _0x3c965b = [3, 4, 5];
        _0x114243.fuPackCanget = !0;
        _0x114243.fuPackDown = !1;
        _0x114243.fuPackStr = "领取";
        _0x114243.taskId === _0x3c965b[0] && _0x114243.cd > 0 && (_0x114243.fuPackCanget = !1, _0x114243.fuPackStr = "07:00开启");
        _0x114243.taskId === _0x3c965b[1] && _0x114243.cd > 0 && (_0x114243.fuPackCanget = !1, _0x114243.fuPackStr = "12:00开启");
        _0x114243.taskId === _0x3c965b[2] && (2 === _0x114243.directGet && (_0x114243.fuPackCanget = !1, _0x114243.fuPackDown = !0, _0x114243.fuPackStr = "明日再来"), _0x114243.cd > 0 && (_0x114243.fuPackCanget = !1, _0x114243.fuPackStr = "18:00开启"));
        return _0x114243;
      },
      _0x577983 = function (_0x34bf4b, _0x528906) {
        _0x34bf4b = _0x34bf4b.split(".");
        _0x528906 = _0x528906.split(".");
        for (var _0x24f24b = Math.max(_0x34bf4b.length, _0x528906.length); _0x34bf4b.length < _0x24f24b;) {
          _0x34bf4b.push("0");
        }
        for (; _0x528906.length < _0x24f24b;) {
          _0x528906.push("0");
        }
        for (var _0x328777 = 0; _0x328777 < _0x24f24b; _0x328777++) {
          var _0x2584d7 = parseInt(_0x34bf4b[_0x328777]),
            _0xa31a62 = parseInt(_0x528906[_0x328777]);
          if (_0x2584d7 > _0xa31a62) {
            return 1;
          }
          if (_0x2584d7 < _0xa31a62) {
            return -1;
          }
        }
        return 0;
      },
      _0x270c09 = function (_0x21b32e) {
        var _0x43e06a = {
            gameType: 2,
            taskId: _0x2d5776.id,
            award: _0x2d5776.rewards[0].rewardMin,
            taskType: _0x2d5776.clientType,
            title: _0x2d5776.name,
            desc: _0x2d5776.description,
            picUrl: _0x2d5776.picUrl,
            directGet: _0x2d5776.taskCompleteProgressState,
            finish: _0x2d5776.taskChanceUse >= _0x2d5776.taskChance,
            cd: _0x2d5776.countDown,
            cdGoDown: _0x21b32e.intervalStatus,
            needVersion: _0x2d5776.needVersion,
            needAuthorization: _0x2d5776.needAuthorization,
            leftText: _0x2d5776.leftText,
            middleText: _0x2d5776.middleText,
            rightText: _0x2d5776.rightText,
            finishText: _0x2d5776.finishText,
            millis: _0x2d5776.taskDuration,
            url: _0x2d5776.targetUrl,
            delay: _0x2d5776.delayTime,
            taskTimeList: _0x2d5776.taskTimeList,
            wechatBind: _0x2d5776.wechatBind,
            buttonName: _0x2d5776.buttonName,
            handleType: _0x2d5776.handleType
          },
          _0x2d5776 = _0x21b32e.item;
        return _0x43e06a;
      },
      _0x49ce4f = function (_0x5b7a93) {
        var _0x4dabc8 = {
          operation: _0x5b7a93.title || ""
        };
        Object(_0x46c1bf.m)("click_h5activity_goldenelephant_page_tasklist", _0x4dabc8);
      },
      _0x206356 = function (_0x4914bc) {
        return document.querySelector(_0x4914bc).getBoundingClientRect();
      },
      _0x333ece = "https://static.fenxianglife.com/ui/h5-activity/persistent/goldenElephant/",
      _0x57ec4b = function (_0x1100f4) {
        for (var _0x1f6741 = [], _0x52c1ad = 0; _0x52c1ad < _0x1100f4; _0x52c1ad++) {
          var _0x55a3ba = {
            left: parseInt(90 * Math.random() - 5) + "%",
            scale: 0.6 * Math.random() + 0.7,
            time: 3.5 * Math.random() + 2 + "s",
            delay: 13 * Math.random() + "s"
          };
          _0x1f6741.push(_0x55a3ba);
        }
        return _0x1f6741;
      },
      _0x58c7cd = function () {
        var _0x2221b8 = _0x59ea2e.a.parse(window.location.search),
          _0x4a6445 = encodeURIComponent("channel=fxly&fxUserId=".concat(_0x2221b8.uid)),
          _0x44eeaf = encodeURIComponent("aliGroup2"),
          _0x28dafb = "alipays://platformapi/startapp?appId=".concat("2021003161604296", "&page=pages/excitingGoods/excitingGoods?jumpType=").concat(_0x44eeaf, "&query=").concat(_0x4a6445);
        location.href = _0x28dafb;
      };
  },
  829: function (_0x4bdabf, _0x110169, _0x56b144) {},
  832: function (_0x368496, _0x3e75b9, _0x5a560d) {},
  834: function (_0x9f2803, _0x3a0e16, _0x289b1c) {}
}]);