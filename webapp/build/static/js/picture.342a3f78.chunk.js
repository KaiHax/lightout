(window["webpackJsonpkaihei-react"] =
  window["webpackJsonpkaihei-react"] || []).push([
  [8, 5],
  {
    103: function (e, t, n) {
      "use strict";
      function i(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 200,
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          i = null,
          r = 0;
        return function () {
          var a = this,
            o = arguments,
            s = function () {
              e.apply(a, o);
            };
          n && !i
            ? (s(), (n = !1))
            : Date.now() - r > t
            ? s()
            : (i && clearTimeout(i),
              (i = setTimeout(function () {
                s();
              }, t))),
            (r = Date.now());
        };
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    104: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        });
      var i = window.createMarkdownModule ? window.createMarkdownModule() : {};
      function r() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = i.allocate,
          n = i.intArrayFromString,
          r = i.ALLOC_NORMAL,
          a = i._mdtojson2,
          o = i._getjsonsize,
          s = i.Pointer_stringify,
          c = i._free,
          l = {},
          u = "";
        if (!e) return l;
        try {
          var d = t(n(e), "i8", r),
            m = o(d) + 100,
            _ = new Uint8Array(m),
            f = t(_, "i8", r);
          a(d, f), (u = s(f)) && (l = JSON.parse(u)), c(d), c(f);
        } catch (v) {
          console.error("markdownParse", v);
        }
        return l;
      }
      function a(e) {
        var t = "object" === typeof e ? JSON.stringify(e) : e,
          n = i.allocate,
          r = i.intArrayFromString,
          a = i.ALLOC_NORMAL,
          o = i._jsontomd,
          s = i._getjsonsize,
          c = i.Pointer_stringify,
          l = i._free,
          u = "";
        if (!t) return u;
        try {
          var d = n(r(t), "i8", a),
            m = s(d) + 100,
            _ = n(new Uint8Array(m), "i8", a);
          o(d, _), (u = c(_)), l(d), l(_);
        } catch (f) {
          console.error("jsonTokmarkdown error", f);
        }
        return u;
      }
      window.markdownParse = r;
    },
    112: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n(20);
      function r(e) {
        var t = "";
        return (
          (t = /^\//.test(e) ? "/api".concat(e) : "/api/".concat(e)),
          i.c && (t = window.Kaiheila.config.appServer + t),
          t
        );
      }
      t.b = function (e) {
        var t = {};
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            /^http/.test(i) ? (t[n] = i) : (t[n] = r(i));
          }
        return t;
      };
    },
    113: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(112),
        r = n(20);
      function a(e) {
        var t = e.src,
          n = e.fileName,
          a = e.onComplete,
          o = e.onError,
          s = window.Kaiheila || {},
          c = s.System,
          l = s.Download,
          u = new URL(t);
        if (((n = n || u.pathname.split("/").pop()), r.c && c && l))
          c.showSaveDialog({ filename: n }).then(function (e) {
            if (!e.canceled) {
              var n = l.create();
              n.start(e.filePath, t),
                a && n.on("complete", a),
                o && n.on("error", o);
            }
          });
        else {
          t = Object(i.a)(
            "/v2/asset/download?url="
              .concat(encodeURIComponent(t), "&name=")
              .concat(encodeURIComponent(n))
          );
          var d = document.createElement("a");
          (d.target = "_blank"),
            (d.download = n || !0),
            (d.rel = "noopener noreferrer"),
            (d.href = t),
            d.click();
        }
      }
    },
    117: function (e) {
      e.exports = JSON.parse(
        '{"click_refresh":"\u70b9\u51fb\u5237\u65b0","add":"\u6dfb\u52a0","added":"\u5df2\u6dfb\u52a0","remove":"\u79fb\u9664","app_name":"\u5f00\u9ed1\u5566","prompt":"\u63d0\u793a","confirm":"\u786e\u8ba4","ok":"\u597d\u7684","cancel":"\u53d6\u6d88","home_page":"\u6211\u7684\u4e3b\u9875","friend":"\u597d\u53cb","add_friend":"\u6dfb\u52a0\u597d\u53cb","remove_friend":"\u5220\u9664\u597d\u53cb","remove_friend_description":"\u4f60\u786e\u5b9a\u8981\u5c06 {{username}} \u4ece\u4f60\u7684\u597d\u53cb\u5217\u8868\u4e2d\u5220\u9664\u5417\uff1f","online":"\u5728\u7ebf","all":"\u5168\u90e8","requested":"\u8bf7\u6c42","request_to_be_friend":"\u8bf7\u6c42\u6210\u4e3a\u597d\u53cb","blocked":"\u5df2\u5c4f\u853d","private_message":"\u79c1\u4fe1","not_friend":"\u5443...\u76ee\u524d\u8fd8\u6ca1\u6709\u670b\u53cb\u3002","not_online_friend":"\u6b64\u65f6\u4f60\u6ca1\u6709\u597d\u53cb\u5728\u7ebf\uff0c\u5feb\u53bb\u53eb\u4ed6\u4eec\u6765\u73a9\uff01","not_pending_friend_requested":"\u8fd9\u91cc\u6ca1\u6709\u5f85\u5904\u7406\u7684\u670b\u53cb\u8bf7\u6c42\u3002","not_blocked":"\u5c4f\u853d\u5217\u8868\u91cc\u6ca1\u6709\u4efb\u4f55\u4eba\u3002","request_send_success":"\u8bf7\u6c42\u53d1\u9001\u6210\u529f","request_send_error":"\u8bf7\u6c42\u53d1\u9001\u5931\u8d25","placeholder_username":"\u8bf7\u8f93\u5165\u7528\u6237\u540d#0000","friend_request_error":"\u597d\u53cb\u8bf7\u6c42\u5931\u8d25","send_friend_request":"\u53d1\u9001\u597d\u53cb\u8bf7\u6c42","require_username_identify":"\u9700\u8981\u7528\u6237\u540d\u548c\u5f00\u9ed1\u5566\u6807\u7b7e\u6dfb\u52a0\u597d\u53cb","check_username_identify":"\u8bf7\u68c0\u67e5\u7528\u6237\u540d\u6216\u6807\u7b7e\u662f\u5426\u62fc\u5199\u6b63\u786e","emoji_manage":"\u8868\u60c5\u7ba1\u7406","add_emoji":"\u6dfb\u52a0\u8868\u60c5","emoji_manage_description":"\u5728\u8fd9\u91cc\u53ef\u4ee5\u5c06\u4f60\u559c\u7231\u7684\u670d\u52a1\u5668\u8868\u60c5\u6dfb\u52a0\u5230\u8868\u60c5\u680f\u4e2d\u3002","emoji_added":"\u5df2\u6dfb\u52a0\u8868\u60c5","emoji_not_added":"\u672a\u6dfb\u52a0\u8868\u60c5","drag_modify_emoji_order":"\u62d6\u62fd\u4fee\u6539\u8868\u60c5\u987a\u5e8f","click_preview":"\u70b9\u51fb\u9884\u89c8","preview":"\u9884\u89c8","static_emoji":"\u9759\u6001\u8868\u60c5","gif_emoji":"\u52a8\u6001\u8868\u60c5","guild_not_emoji":"\u6b64\u670d\u52a1\u5668\u8fd8\u672a\u4e0a\u4f20\u4efb\u4f55\u8868\u60c5","emoji_all_added":"\u8868\u60c5\u5df2\u5168\u90e8\u6dfb\u52a0","want_use_emoji":"\u60f3\u8981\u4f53\u9a8c\u8868\u60c5\u7684\u9b45\u529b\u5417\uff1f","buy_vip_use_emoji":"\u6fc0\u6d3bBUFF\uff0c\u5373\u53ef\u4f7f\u7528\u4efb\u610f\u8868\u60c5\uff0c\u89e3\u9501\u66f4\u591a\u6743\u76ca\u3002","learn_more":"\u4e86\u89e3\u66f4\u591a","add_chat_buff":"\u52a0\u4e2a\u804a\u5929BUFF\uff1f","per_month_price":"\u89e3\u9501\u66f4\u591a\u6743\u76ca\uff0c\u6700\u4f4e\u6bcf\u6708\u4ec5\u9700\xa519.9","buy_vip_can_unlock_permission":"\u5f00\u901a\u4f1a\u5458\u53ef\u89e3\u9501\u591a\u79cd\u6743\u76ca\uff0c\u6db5\u76d6\u6587\u5b57\u3001\u8bed\u97f3\u804a\u5929\u7b49\u4f17\u591a\u7279\u6743\u529f\u80fd\uff0c\u8ba9\u4f60\u7684\u5f00\u9ed1\u4f53\u9a8c\u66f4\u52a0\u4e30\u5bcc\u591a\u5f69\u3002","buy_vip":"\u7acb\u5373\u6fc0\u6d3b","renewal":"\u7acb\u5373\u7eed\u8d39","gift_friend":"\u8d60\u9001\u597d\u53cb","vip_permission":"BUFF\u6548\u679c","vip_description":"BUFF\u8bf4\u660e","add_buff_make_it_more_interesting":"\u7ed9\u804a\u5929\u52a0\u4e2aBUFF\uff0c\u8ba9\u5f00\u9ed1\u66f4\u6709\u8da3\u3002","add_buff":"\u7acb\u5373\u6fc0\u6d3b","kaiheila_vip":"\u6fc0\u6d3b\u5f00\u9ed1\u5566BUFF","select_friend":"\u9009\u62e9\u597d\u53cb","vip_plan":"BUFF\u65f6\u957f","payment_mode":"\u652f\u4ed8\u65b9\u5f0f\uff1a","payment_price":"\u652f\u4ed8\u91d1\u989d\uff1a","yuan":"\u5143","bill_record":"\u8d26\u5355\u8bb0\u5f55","not_found_bill":"\u627e\u4e0d\u5230\u8d26\u5355\uff1f\u63d0\u4ea4\u5de5\u5355","date":"\u65e5\u671f","buy_goods":"\u8d2d\u4e70\u5546\u54c1","purpose":"\u7528\u9014","bill_id":"\u8ba2\u5355\u7f16\u53f7\uff1a","payment_time":"\u652f\u4ed8\u65f6\u95f4\uff1a","use_time":"\u5145\u503c\u65f6\u95f4\uff1a","gift_user":"\u53d7\u8d60\u7528\u6237\uff1a","bill_wrong":"\u5bf9\u6b64\u8ba2\u5355\u6709\u7591\u95ee\uff1f","kindly_reminder":"\u6e29\u99a8\u63d0\u793a","bill_tips":"1.\u652f\u4ed8\u6210\u529f\u540e\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5145\u503c\uff0c\u5982\u5145\u503c\u5931\u8d2524\u5c0f\u65f6\u5185\u4f1a\u81ea\u52a8\u8865\u53d1\u3002\\n2.\u5982\u679c\u7f51\u94f6\u91cd\u590d\u4ed8\u6b3e\u6216\u4ed8\u6b3e\u540e\u8ba2\u5355\u53d6\u6d88\uff0c\u672a\u5145\u503c\u6210\u529f\uff0c\u7f51\u94f6\u9000\u6b3e\u5c06\u572815\u4e2a\u5de5\u4f5c\u65e5\u5185\u5230\u8d26\u3002","bill_list_none":"\u6682\u65e0\u8d26\u5355\u8bb0\u5f55","cdkey":"\u5151\u6362\u7801","exchange_vip_please_input_cdkey":"\u5151\u6362\u793c\u7269\uff1f\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u5151\u6362\u7801\uff1a","exchange":"\u5151\u6362","exchange_success":"\u5151\u6362\u6210\u529f","login_codetitle":"\u6b22\u8fce\u4f7f\u7528\u300c\u5f00\u9ed1\u5566\u300d","login_switchbtn":"\u5207\u6362\u5230\u5bc6\u7801\u767b\u5f55","login_switchcodebtn":"\u5207\u6362\u5230\u9a8c\u8bc1\u7801\u767b\u5f55","login_mobilepla":"\u8bf7\u8f93\u5165\u4f60\u7684\u624b\u673a\u53f7","login_mobilelab":"\u624b\u673a\u53f7","login_codelab":"\u624b\u673a\u9a8c\u8bc1\u7801","login_acqcodehl":"\u83b7\u53d6\u9a8c\u8bc1\u7801","login_fillcodepla":"\u586b\u5199\u9a8c\u8bc1\u7801","login_loginbtn":"\u6ce8\u518c/\u767b\u5f55","login_nextloginlab":"\u4e0b\u6b21\u81ea\u52a8\u767b\u5f55","login_thirdptbtn":"\u7b2c\u4e09\u65b9\u8d26\u53f7\u767b\u5f55","login_docstr":"\u70b9\u51fb\u6ce8\u518c/\u767b\u5f55\u6309\u94ae\u8868\u793a\u540c\u610f{%l\u670d\u52a1\u6761\u6b3e}\u548c{%l\u9690\u79c1\u6743\u653f\u7b56}","login_docstr_m":"\u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f{%l\u300a\u5f00\u9ed1\u5566\u7528\u6237\u534f\u8bae\u300b}\u548c{%l\u300a\u9690\u79c1\u653f\u7b56\u300b}","login_loginbtn_m":"\u767b\u5f55","login_pwlab":"\u5bc6\u7801","login_pwpla":"\u8bf7\u8f93\u5165\u4f60\u7684\u5bc6\u7801","login_forgetpwbtn":"\u5fd8\u8bb0\u5bc6\u7801\uff1f","login_resetpwbtn":"\u91cd\u7f6e\u5bc6\u7801","login_returnloginbtn":"\u8fd4\u56de\u767b\u5f55","feedback_tipbtn":"\u95ee\u9898\u53cd\u9988","channel_mutetip":"\u9891\u9053\u514d\u6253\u6270","channel_cmutetip":"\u53d6\u6d88\u9891\u9053\u514d\u6253\u6270","channel_toptip":"\u7f6e\u9876","channel_userlisttip":"\u7528\u6237\u5217\u8868","search_searchtip":"\u641c\u7d22","channel_onlinelab":"\u5728\u7ebf","channel_offlinelab":"\u79bb\u7ebf","server_ownerlab":"\u670d\u52a1\u5668\u521b\u5efa\u8005","boost_boosterlab":"\u52a9\u529b\u8005","boost_datetip":"\u670d\u52a1\u5668\u52a9\u529b %s \u5f00\u59cb","friend_mypagebtn":"\u6211\u7684\u4e3b\u9875","server_joinserverbtn":"\u6dfb\u52a0\u670d\u52a1\u5668","server_explserverbtn":"\u53d1\u73b0\u670d\u52a1\u5668","download_dlclentbtn":"\u4e0b\u8f7d\u5ba2\u6237\u7aef","server_markreaditem":"\u6807\u8bc6\u4e3a\u5df2\u8bfb","server_invitem":"\u9080\u8bf7\u5176\u4ed6\u4eba","server_notifyitem":"\u901a\u77e5\u8bbe\u5b9a","server_privacyitem":"\u9690\u79c1\u8bbe\u7f6e","server_nodisturbitem":"\u514d\u6253\u6270","server_nodisturbtitle":"\u5c06 %s \u8bbe\u4e3a\u514d\u6253\u6270","server_muteitem_m":"\u5c06\u8be5\u670d\u52a1\u5668\u9759\u97f3","server_mutestr":"\u5f00\u542f\u670d\u52a1\u5668\u514d\u6253\u6270\u4f1a\u5173\u95ed\u9664@\u63d0\u53ca\u4e4b\u5916\uff0c\u6240\u6709\u6d88\u606f\u63d0\u793a\u3002","server_notificationlab":"\u670d\u52a1\u5668\u901a\u77e5\u8bbe\u7f6e","sever_withoutnoticeitem":"\u65e0\u901a\u77e5","sever_allmembersw":"\u5173\u95ed@\u6240\u6709\u4eba\u548c@\u5728\u7ebf\u6210\u5458\u901a\u77e5","sever_allrolesw":"\u5173\u95ed\u6240\u6709\u89d2\u8272\u7684@\u88ab\u63d0\u53ca\u901a\u77e5","server_cmuteitem":"\u53d6\u6d88\u514d\u6253\u6270","server_duraminitem":"\u6301\u7eed%s\u5206\u949f","server_durahitem":"\u6301\u7eed%s\u5c0f\u65f6","server_duraforevitem":"\u76f4\u5230\u6211\u518d\u6b21\u5f00\u542f","server_leaveserveritem":"\u79bb\u5f00\u670d\u52a1\u5668","voice_inputmodestr":"\u8bed\u97f3\u8f93\u5165\u6a21\u5f0f","voice_autostr":"\u8bed\u97f3\u611f\u5e94","voice_pushstr":"\u6309F2\u8bf4\u8bdd","voice_mictestitem":"\u8bd5\u9ea6","voice_copyuntip":"\u590d\u5236\u7528\u6237\u540d","voice_mutebtn_m":"\u95ed\u9ea6","voice_deafen_m":"\u9759\u97f3","user_copysucctip":"\u590d\u5236\u6210\u529f","user_settingtip":"\u7528\u6237\u8bbe\u7f6e","voice_connectedbtn":"\u8bed\u97f3\u5df2\u8fde\u63a5","voice_detstip":"\u70b9\u51fb\u67e5\u770b\u8fde\u63a5\u8be6\u60c5","voice_joinbtn_m":"\u52a0\u5165\u8bed\u97f3\u9891\u9053","voice_joinstr_m":"\u8fd9\u91cc\u597d\u5b89\u9759\u554a\u3002\u53ea\u6709\u4f60\u4e00\u4e2a\u4eba\u5417\uff1f\u5feb\u70b9\u53eb\u5c0f\u4f19\u4f34\u6765\u5f00\u9ed1\u554a\uff01","voice_quittip":"\u9000\u51fa\u8bed\u97f3\u9891\u9053","voice_quitbtn_m":"\u9000\u51fa","voice_reconnectionstr_m":"\u8fde\u63a5\u8bed\u97f3\u9891\u9053\u5931\u8d25","voice_reconnectionbtn_m":"\u91cd\u65b0\u8fde\u63a5","voice_qualitytitle":"\u8bed\u97f3\u8d28\u91cf\u8bc4\u4ef7","voice_qualitystr":"\u8bf7\u5bf9\u672c\u6b21\u8bed\u97f3\u8d28\u91cf\u8fdb\u884c\u8bc4\u4ef7\uff0c\u6211\u4eec\u4f1a\u8fdb\u884c\u540e\u7eed\u6539\u8fdb\uff0c\u4e3a\u4f60\u63d0\u4f9b\u66f4\u597d\u7684\u670d\u52a1","voice_goodbtn":"\u597d","voice_badbtn":"\u5dee","voice_mcitem":"\u4e3b\u6301\u4eba\u6a21\u5f0f","voice_freedomitem":"\u81ea\u7531\u6a21\u5f0f","voice_allmembersbtn":"\u5168\u90e8\u6210\u5458","voice_mcgmtip":"\u8bed\u97f3\u7ba1\u7406\u5458","voice_allmemberstitle":"\u9891\u9053\u5168\u90e8\u6210\u5458","voice_allmemberspla":"\u641c\u7d22\u9891\u9053\u6210\u5458","voice_swmodetitle":"\u5207\u6362\u8bed\u97f3\u9891\u9053\u6a21\u5f0f","voice_swmcmodestr":"\u662f\u5426\u5c06\u9891\u9053\u6a21\u5f0f\u66f4\u6539\u4e3a\u201c\u4e3b\u6301\u4eba\u6a21\u5f0f\u201d","voice_swfreedommodestr":"\u662f\u5426\u5c06\u9891\u9053\u6a21\u5f0f\u66f4\u6539\u4e3a\u201c\u81ea\u7531\u6a21\u5f0f\u201d","voice_mcnullstr":"\u5443\uff5e\u5f53\u524d\u6ca1\u6709\u4eba\u4e0a\u9ea6\uff0c\u5982\u679c\u4f60\u60f3\u53d1\u8a00\uff0c\u8bf7\u70b9\u51fb\u201c\u4e0a\u9ea6\u201d","voice_mcqueuebtn":"\u4e0a\u9ea6","voice_mcexitqueuebtn":"\u4e0b\u9ea6","voice_mcapplyingbtn":"\u4e3e\u624b\u4e2d","voice_mcapplybtn":"\u4e3e\u624b\u7533\u8bf7\u4e0a\u9ea6","voice_mcconsentbtn":"\u540c\u610f\u4e0a\u9ea6","voice_mcapplytip":"\u957f\u6309\u4e3e\u624b\uff01\u7b49\u5f85\u901a\u8fc7","diagnosis_connecttitle":"\u8fde\u63a5\u8bca\u65ad","diagnosis_applydttip":"\u5e94\u7528\u8bca\u65ad\u5de5\u5177","diagnosis_mictestlab":"\u9ea6\u514b\u98ce\u6d4b\u8bd5","diagnosis_mictestbtn":"\u68c0\u67e5\u4e00\u4e0b","diagnosis_stoptestbtn":"\u505c\u6b62\u6d4b\u8bd5","diagnosis_statuslab":"\u7f51\u7edc\u8fde\u63a5\u72b6\u6001","diagnosis_mypclab":"\u6211\u7684\u7535\u8111","diagnosis_serverlab":"\u670d\u52a1\u5668","diagnosis_laglab":"\u5ef6\u65f6","diagnosis_losslab":"\u4e22\u5305\u7387","diagnosis_switchlinebtn":"\u5207\u6362\u7ebf\u8def","diagnosis_domlinestr":"\u76ee\u524d\u4f60\u6b63\u5728\u4f7f\u7528\u56fd\u5185\u8bed\u97f3\u7ebf\u8def\uff0c\u662f\u5426\u5207\u6362\u81f3\u6d77\u5916\u52a0\u901f\u7ebf\u8def?","diagnosis_intllinestr":"\u76ee\u524d\u4f60\u6b63\u5728\u4f7f\u7528\u6d77\u5916\u52a0\u901f\u7ebf\u8def\uff0c\u662f\u5426\u5207\u6362\u81f3\u56fd\u5185\u8bed\u97f3\u7ebf\u8def?","diagnosis_cxlbtn":"\u53d6\u6d88","diagnosis_switchbtn":"\u5207\u6362","accompany_sourcelab":"\u9009\u62e9\u4f34\u594f\u6765\u6e90","accompany_allbtn":"\u6240\u6709\u97f3\u6e90","accompany_nosourcestr":"\u6682\u65e0\u4f34\u594f\u6765\u6e90\uff0c\u8bf7\u5148\u8fd0\u884c\u4e00\u4e2a\u97f3\u4e50\u64ad\u653e\u5668\u518d\u8bd5\u8bd5\u3002","tuning_talkstr":"\u8bf7\u5bf9\u7740\u9ea6\u514b\u98ce\u8bb2\u8bdd\uff0c\u4ee5\u65b9\u4fbf\u68c0\u6d4b\u3002","tuning_switchstr":"\u5df2\u5207\u6362\u81f3\u9ea6\u514b\u98ce%s","tuning_micinputstr":"\u5f53\u524d\u9ea6\u514b\u98ce\u6709\u58f0\u97f3\u8f93\u5165\uff0c\u82e5\u672a\u542c\u5230\u58f0\u97f3\uff0c\u5c06\u8fdb\u5165\u8f93\u51fa\u8bbe\u5907\u68c0\u6d4b\u3002","tuning_soundbtn":"\u542c\u5230\u58f0\u97f3","tuning_nosoundbtn":"\u672a\u542c\u5230\u58f0\u97f3","tuning_testingvocstr":"\u6b63\u5728\u64ad\u653e\u6d4b\u8bd5\u97f3\u2026","tuning_speakerlab":"\u5df2\u5207\u6362\u81f3\u626c\u58f0\u5668%s","tuning_speakeroostitle":"\u5f88\u62b1\u6b49\u4f60\u7684\u626c\u58f0\u5668\u65e0\u6cd5\u4f7f\u7528","tuning_reportlab":"\u5df2\u4e3a\u4f60\u751f\u6210\u4e00\u4efd\u8bed\u97f3\u5f02\u5e38\u62a5\u544a\u3002","tuning_submithl":"\u63d0\u4ea4\u5de5\u5355\u53cd\u9988","tuning_retrybtn":"\u518d\u8bd5\u4e00\u6b21","tuning_stopbtn":"\u7ed3\u675f\u8bd5\u9ea6","tuning_micoostitle":"\u672a\u68c0\u6d4b\u5230\u58f0\u97f3\u8f93\u5165\uff0c\u4f60\u7684\u8bed\u97f3\u8f93\u5165\u8bbe\u5907\u5f02\u5e38","tuning_reasonstr":"\u8bbe\u5907\u65e0\u6cd5\u4f7f\u7528\u8fd8\u53ef\u80fd\u4e3a\u4ee5\u4e0b\u539f\u56e0\uff1a","tuning_winauthhl":"{%l1. Windows\u6743\u9650\u8bbe\u7f6e\u9519\u8bef\u3002}","tuning_turnonmichl":"{%l2.\u7535\u8111\u9ea6\u514b\u98ce\u672a\u542f\u7528\u3002}","tuning_antivirushl":"{%l3. \u5f00\u9ed1\u5566\u88ab\u5b89\u5168\u8f6f\u4ef6\u7981\u7528\u3002}","tuning_micsubmithl":"\u5982\u82e5\u5168\u90e8\u68c0\u67e5\u540e\u4ecd\u65e0\u6cd5\u89e3\u51b3\uff0c\u53ef\u4ee5{%l\u63d0\u4ea4\u5de5\u5355\u53cd\u9988}","tuning_goodtogostr":"\u4f60\u7684\u8bed\u97f3\u8bbe\u5907\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528","tuning_suggeststr":"\u5982\u5176\u4ed6\u4eba\u4ecd\u542c\u4e0d\u5230\u4f60\u7684\u58f0\u97f3\uff0c\u5efa\u8bae\u5bf9\u65b9\u5728\u4e2a\u4eba\u8bbe\u7f6e\u4e2d\u8fdb\u884c\u8bed\u97f3\u68c0\u6d4b\u3002","tuning_okbtn":"\u597d\u7684","ai_aitip":"Al\u964d\u566a\u529f\u80fd! \u6d88\u9664\u4f60\u7684\u80cc\u666f\u97f3\uff0c\u53ea\u4fdd\u7559\u4eba\u58f0\u3002","ai_aiswitchsw":"\u9ea6\u514b\u98ceAI\u964d\u566a","ai_aidetstr":"\u9ea6\u514b\u98ceAl\u964d\u566a\u53ef\u4ee5\u6d88\u9664\u4f60\u7684\u80cc\u666f\u97f3\uff0c\u53ea\u4fdd\u7559\u4eba\u58f0!\u5feb\u6765\u4f53\u9a8c\u5427","ai_trybtn":"\u542c\u542c\u6548\u679c","voice_inputlab":"\u8f93\u5165\u8bbe\u5907","voice_outputlab":"\u8f93\u51fa\u8bbe\u5907","message_sendtopla":"\u7ed9 %s \u53d1\u6d88\u606f","message_enterstr":"Enter\u53d1\u9001\u6d88\u606f","message_nopermissionpla":"\u4f60\u6ca1\u6709\u6743\u9650\u5728\u6b64\u9891\u9053\u4e2d\u53d1\u9001\u6d88\u606f","emoji_stkrtip":"\u8868\u60c5","upload_uploadtip":"\u4e0a\u4f20","printscreen_deftip":"\u622a\u56fe\uff08\u5c1a\u672a\u8bbe\u7f6e\uff09\u6309\u4f4fShift\u70b9\u51fb\u53ef\u9690\u85cf\u7a97\u53e3","printscreen_settip":"\u622a\u56fe\uff08%s\uff09\u6309\u4f4fShift\u70b9\u51fb\u53ef\u9690\u85cf\u7a97\u53e3","message_unfoldtip":"\u5c55\u5f00\u8f93\u5165\u680f","message_foldtip":"\u6536\u8d77\u8f93\u5165\u680f","message_tipstr":"\u4f60\u8fd8\u4e0d\u80fd\u5728\u8fd9\u804a\u5929\uff0c\u5fc5\u987b\u5148\u52a0\u5165\u670d\u52a1\u5668\u624d\u80fd\u5f00\u59cb\u4e92\u52a8","upload_albumbtn":"\u622a\u56fe\u76f8\u518c","upload_localbtn":"\u672c\u5730\u6587\u4ef6","message_atonlinebtn":"@ \u5728\u7ebf\u6210\u5458(here)","message_atallbtn":"@ \u5168\u4f53\u6210\u5458(all)","message_atonlinestr":"\u5728\u7ebf\u6210\u5458","message_atallstr":"\u5168\u4f53\u6210\u5458","message_atmestr":"\u6211","message_atauthonlinestr":"\u63d0\u53ca\u6240\u6709\u6709\u6743\u9650\u67e5\u770b\u6b64\u9891\u9053\u7684\u5728\u7ebf\u6210\u5458","message_atauthonlinestr_m":"\u63d0\u53ca\u6b64\u9891\u9053\u7684\u5728\u7ebf\u6210\u5458","message_atauthallstr":"\u63d0\u53ca\u6240\u6709\u6709\u6743\u9650\u67e5\u770b\u6b64\u9891\u9053\u7684\u6210\u5458","message_atauthallstr_m":"\u63d0\u53ca\u6b64\u9891\u9053\u7684\u6240\u6709\u6210\u5458","message_atauthrolestr":"\u901a\u77e5\u62e5\u6709\u67e5\u770b\u6b64\u9891\u9053\u6743\u9650\u7684\u8eab\u4efd\u7ec4\u6210\u5458\u3002","message_atauthrolestr_m":"\u63d0\u53ca\u6b64\u9891\u9053\u62e5\u6709\u6b64\u89d2\u8272\u7684\u6210\u5458","emoji_searchpla":"\u641c\u7d22\u8868\u60c5","emoji_nostkrstr":"\u6b64\u670d\u52a1\u5668\u8fd8\u672a\u4e0a\u4f20\u4efb\u4f55\u8868\u60c5","emoji_figurelab":"\u4eba\u7269","emoji_naturelab":"\u81ea\u7136","emoji_foodlab":"\u98df\u7269","emoji_sportlab":"\u8fd0\u52a8","emoji_travellab":"\u65c5\u884c","emoji_objectlab":"\u7269\u4f53","emoji_symbollab":"\u7b26\u53f7","emoji_flaglab":"\u65d7\u5e1c","message_historystr":"\u4f60\u6b63\u5728\u6d4f\u89c8\u5386\u53f2\u6d88\u606f","message_latestbtn":"\u67e5\u770b\u6700\u65b0\u6d88\u606f","message_cdstr":"\u6210\u5458\u53d1\u8a00\u95f4\u9694\u4e3a%s","message_remitstr":"\u6162\u901f\u6a21\u5f0f\u5df2\u5f00\u542f\uff0c\u4f46\u4f60\u4e0d\u53d7\u9650\u5236","message_amountstr":"\u81ea %s \u4ee5\u6765\u6709%s1\u6761\u65b0\u6d88\u606f","message_markasreadbtn":"\u6807\u8bb0\u5df2\u8bfb","message_sendbtn":"\u53d1\u9001","message_sendpla":"\u70b9\u51fb\u53d1\u9001\u6d88\u606f\uff0cEnter \u952e\u6362\u884c","message_escstr":"Esc\u952e{%l\u53d6\u6d88}Enter\u952e{%l\u4fdd\u5b58}","message_reacttip":"\u6dfb\u52a0\u56de\u5e94","message_edtip":"\u7f16\u8f91\u6d88\u606f","message_replytip":"\u56de\u590d","message_moretip":"\u66f4\u591a","message_copybtn":"\u590d\u5236\u6d88\u606f","message_delbtn":"\u5220\u9664\u6d88\u606f","message_copyimgbtn":"\u590d\u5236\u56fe\u7247","message_pastebtn":"\u7c98\u8d34","message_ededstr":"(\u5df2\u7f16\u8f91)","message_fromtip":"\u6765\u81ea\uff1a%s","message_otherreactbtn":"\u5176\u4ed6\u53cd\u5e94","upload_dragtitle":"\u62d6\u62fd\u4e0a\u4f20","upload_releasestr":"\u9f20\u6807\u4e0a\u62fd\u7740\u4ec0\u4e48\uff1f\u60f3\u4e0a\u4f20\u4f60\u677e\u624b\u554a\uff01","upload_filenamestr":"\uff08\u70b9\u51fb\u6587\u4ef6\u540d\u4fee\u6539\uff09","_fraudhl":"\u804a\u5929\u4e2d\u8bf7\u8c28\u9632\u7f51\u7edc\u8bc8\u9a97\uff0c\u70b9\u51fb\u4e86\u89e3\u9632\u8bc8\u9a97\u6307\u5357","channel_welcometitle":"\u6b22\u8fce\u6765\u5230\u670d\u52a1\u5668","channel_invstr":"\u4f7f\u7528\u5373\u65f6\u9080\u8bf7\uff0c\u9080\u8bf7\u4f60\u7684\u597d\u53cb\u52a0\u5165\u670d\u52a1\u5668\u3002","channel_qrcodestr":"\u626b\u7801\u4e0b\u8f7d\uff0c\u5b89\u88c5\u5f00\u9ed1\u5566App\uff0c\u968f\u65f6\u968f\u5730\u4e0e\u597d\u53cb\u8bed\u97f3\u5e76\u67e5\u770b\u6d88\u606f\u3002","channel_questionstr":"\u9047\u5230\u95ee\u9898?\u4f60\u53ef\u4ee5\u9009\u62e9\u67e5\u770b\u5e2e\u52a9\u6587\u6863\u6216\u63d0\u4ea4\u5de5\u5355\uff0c\u4e0e\u6211\u4eec\u53d6\u5f97\u8054\u7cfb\u3002","channel_invbtn":"\u9080\u8bf7\u670b\u53cb","channel_downloadbtn":"\u4e0b\u8f7dApp","channel_helpcenterbtn":"\u5e2e\u52a9\u4e2d\u5fc3","server_boosteritem":"\u670d\u52a1\u5668\u52a9\u529b","server_settingitem":"\u670d\u52a1\u5668\u8bbe\u7f6e","server_settingbtn_m":"\u8bbe\u7f6e","server_cchanitem":"\u521b\u5efa\u65b0\u9891\u9053","server_cgrpitem":"\u521b\u5efa\u65b0\u5206\u7ec4","server_changenameitem":"\u4fee\u6539\u672c\u670d\u52a1\u5668\u6635\u79f0","server_hideitem":"\u9690\u85cf\u514d\u6253\u6270\u9891\u9053","group_muteitem":"\u5206\u7ec4\u514d\u6253\u6270","group_mutetitle_m":"\u5c06\u8be5\u5206\u7ec4\u9759\u97f3","group_closeitem":"\u6536\u8d77\u5206\u7ec4","group_createitem":"\u521b\u5efa\u5206\u7ec4","group_delitem":"\u5220\u9664\u5206\u7ec4","group_edititem":"\u7f16\u8f91\u5206\u7ec4","invite_invitem":"\u9080\u8bf7","channel_editem":"\u7f16\u8f91\u9891\u9053","channel_cloneitem":"\u514b\u9686\u9891\u9053","channel_delitem":"\u5220\u9664\u9891\u9053","channel_setpwitem":"\u8bbe\u7f6e\u5bc6\u7801","printscreen_occupytitle":"\u68c0\u6d4b\u5230\u4ee5\u4e0b\u70ed\u952e\u88ab\u5360\u7528","printscreen_hotkeystr":"\u8bbe\u7f6e\u622a\u56fe\u5feb\u6377\u952e\uff08%s\uff09","printscreen_neveritem":"\u4e0d\u518d\u63d0\u793a","printscreen_closebtn":"\u5173\u95ed","printscreen_settingbtn":"\u524d\u5f80\u8bbe\u7f6e","invite_creatinvtip":"\u521b\u5efa\u9080\u8bf7","invite_invtitle":"\u9080\u8bf7\u597d\u53cb\u52a0\u5165%s","invite_invitedstr":"\u5df2\u53d1\u9001","invite_sharelinkstr":"\u5206\u4eab\u6b64\u94fe\u63a5\uff0c\u597d\u53cb\u70b9\u51fb\u5373\u53ef\u52a0\u5165\u4f60\u7684\u670d\u52a1\u5668","invite_copybtn":"\u590d\u5236","invite_copysusbtn":"\u5df2\u590d\u5236","invite_linktimestr1":"\u4f60\u7684\u9080\u8bf7\u94fe\u63a5\u5c06\u5728%s%s1\u540e\u8fc7\u671f\uff0c\u6216\u4f7f\u7528%s2\u6b21\u540e\u8fc7\u671f\u3002","invite_linktimestr2":"\u4f60\u7684\u9080\u8bf7\u94fe\u63a5\u5c06\u5728%s%s1\u540e\u8fc7\u671f\u3002","invite_linkcontistr":"\u4f60\u7684\u9080\u8bf7\u94fe\u63a5\u6c38\u4e0d\u8fc7\u671f\u3002","invite_linktimestr3":"\u4f60\u7684\u9080\u8bf7\u94fe\u63a5\u5728\u4f7f\u7528%s\u6b21\u540e\u8fc7\u671f\u3002","invite_linktimeday":"\u5929","invite_linktimemin":"\u5206\u949f","invite_linktimehour":"\u5c0f\u65f6","invite_edhl":"\u7f16\u8f91\u9080\u8bf7\u94fe\u63a5","invite_durationlab":"\u6700\u5927\u65f6\u6548","invite_selectpla":"\u8bf7\u9009\u62e9","invite_timeslab":"\u6700\u5927\u4f7f\u7528\u6b21\u6570","invite_newlinkbtn":"\u4f7f\u7528\u65b0\u7684\u8fde\u63a5","invite_unlimedem":"\u65e0\u9650\u5236","invite_neveritem":"\u6c38\u4e0d","invite_timesitem":"%s\u6b21\u4f7f\u7528","invite_duraminitem":"%s\u5206\u949f","invite_durahitem":"%s\u4e2a\u5c0f\u65f6","invite_duradayitem":"%s\u5929","severmenu_overallitem":"\u6982\u51b5","severmenu_boosteritem":"\u670d\u52a1\u5668\u52a9\u529b\u72b6\u6001","severmenu_authitem":"\u89d2\u8272\u6743\u9650","severmenu_logitem":"\u7ba1\u7406\u65e5\u5fd7","severmenu_toolsitem":"\u5c0f\u5de5\u5177","severmenu_safetyitem":"\u5b89\u5168\u8bbe\u7f6e","severmenu_mbritem":"\u6210\u5458","severmenu_blacklistitem":"\u670d\u52a1\u5668\u9ed1\u540d\u5355","severmenu_delitem":"\u5220\u9664\u670d\u52a1\u5668","severoverview_gnllab":"\u57fa\u672c\u8bbe\u7f6e","severoverview_userlab":"\u7528\u6237\u7ba1\u7406","severoverview_gnltitle":"\u670d\u52a1\u5668\u6982\u51b5","severoverview_changebtn":"\u4fee\u6539","severoverview_arealab":"\u670d\u52a1\u5668\u533a\u57df","severoverview_idlab":"\u670d\u52a1\u5668ID","severoverview_idstr":"\u5f00\u542f\u670d\u52a1\u5668ID\uff0c\u670d\u52a1\u5668\u5c06\u5904\u4e8e\u516c\u5f00\u72b6\u6001\uff0c\u5176\u4ed6\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u670d\u52a1\u5668ID\u76f4\u63a5\u8bbf\u95ee\u5e76\u52a0\u5165\u5230\u670d\u52a1\u5668\u4e2d\u3002","severoverview_defchanlab":"\u9ed8\u8ba4\u6587\u5b57\u9891\u9053","severoverview_defchanstr":"\u6240\u6709\u6587\u5b57\u9891\u9053\u7684\u9080\u8bf7\u94fe\u63a5\uff0c\u90fd\u4f1a\u8fdb\u5165\u9ed8\u8ba4\u6587\u5b57\u9891\u9053","severoverview_welcomechanlab":"\u6b22\u8fce\u901a\u77e5\u9891\u9053","severoverview_welcomechanstr":"\u5f53\u6709\u4eba\u52a0\u5165\u670d\u52a1\u5668\u65f6\uff0c\u8be5\u9891\u9053\u4f1a\u968f\u673a\u53d1\u9001\u4e00\u6761\u6b22\u8fce\u6d88\u606f\u3002","severoverview_nodefitem":"\u65e0\u9ed8\u8ba4\u9891\u9053","severoverview_nowelcomeitem":"\u65e0\u6b22\u8fce\u901a\u77e5","severoverview_bannerbtn":"\u5c01\u9762","severoverview_checkbtn":"\u67e5\u770b","severoverview_cdstr":"7\u5929\u540e\u53ef\u4fee\u6539\u63a8\u8350\u670d\u52a1\u5668\u4fe1\u606f","severoverview_recommendedapplystr":"\u5bfb\u627e\u5fd7\u540c\u9053\u5408\u7684\u670b\u53cb\uff0c\u52a0\u5165\u63a8\u8350\u670d\u52a1\u5668\u5217\u8868\uff0c\u8ba9\u66f4\u591a\u4eba\u53d1\u73b0\u4f60\u7684\u670d\u52a1\u5668\uff01","severoverview_recommendedapplybtn":"\u7533\u8bf7\u63a8\u8350\u670d\u52a1\u5668","severoverview_recommendeditem_m":"\u5df2\u6210\u4e3a\u63a8\u8350\u670d\u52a1\u5668","severoverview_notrecommendeditem_m":"\u672a\u6210\u4e3a\u63a8\u8350\u670d\u52a1\u5668","severoverview_recommendstr_m":"\u63a8\u8350\u670d\u52a1\u5668\u76f8\u5173\u64cd\u4f5c\u8bf7\u5728PC\u7aef\u6216\u7f51\u9875\u7aef\u8fdb\u884c\u3002","severoverview_destitle":"\u4fee\u6539\u670d\u52a1\u5668\u4fe1\u606f","severoverview_destitle_m":"\u670d\u52a1\u5668\u4fe1\u606f","severoverview_iconbtn":"\u66f4\u65b0\u670d\u52a1\u5668LOGO","severoverview_iconitem_m":"\u670d\u52a1\u5668\u56fe\u6807","severoverview_coveragainbtn_m":"\u91cd\u65b0\u4e0a\u4f20","severoverview_coverstr":"\u652f\u6301\u4e0a\u4f20PNG\u56fe\u7247\uff0c\u63a8\u8350\u6700\u5c0f\u5c3a\u5bf81024x600\uff0c\u63a8\u8350\u5bbd\u9ad8\u6bd4\u4e3a5:3\uff0c\u56fe\u7247\u5927\u5c0f\u4e0d\u8d85\u8fc75MB\u3002","severoverview_photoitem_m":"\u4ece\u76f8\u518c\u9009\u62e9","severoverview_cameraitem_m":"\u76f8\u673a\u62cd\u6444","severoverview_defnotilab":"\u9ed8\u8ba4\u901a\u77e5\u8bbe\u5b9a","severoverview_defnotistr":"\u8fd9\u5c06\u51b3\u5b9a\u90a3\u4e9b\u6ca1\u6709\u660e\u786e\u8bbe\u7f6e\u901a\u77e5\u8bbe\u5b9a\u7684\u7528\u6237\uff0c\u662f\u5426\u4f1a\u6536\u5230\u6b64\u670d\u52a1\u5668\u4e0a\u7684\u6bcf\u4e00\u6761\u4fe1\u606f\u7684\u901a\u77e5","severoverview_allmesitem":"\u6240\u6709\u6d88\u606f","severoverview_atmesitem":"\u4ec5@\u88ab\u63d0\u53ca","severoverview_recomserlab":"\u63a8\u8350\u670d\u52a1\u5668","severoverview_recomserstr":"\u6210\u4e3a\u63a8\u8350\u670d\u52a1\u5668\uff1f","severoverview_averonlineminlab":"\u6210\u5458\u5e73\u5747\u5728\u7ebf\u65f6\u957f\uff08min\uff09","severoverview_onlinemintip":"\u65f6\u957f\uff08min\uff09","severoverview_swcditem":"\u897f\u5357(\u6210\u90fd)","severoverview_wshitem":"\u534e\u4e1c(\u4e0a\u6d77)","severoverview_sszitem":"\u534e\u5357(\u6df1\u5733)","severoverview_nbjitem":"\u534e\u5317(\u5317\u4eac)","severoverview_asiahkitem":"\u4e9a\u592a(\u9999\u6e2f)","severoverview_intldomitem":"\u56fd\u5185\u56fd\u5916\u4e92\u8054\u4e13\u7ebf","severoverview_jamstr":"\u62e5\u6324","severoverview_areaswtitle":"\u63d0\u9192\u4e00\u4e0b","severoverview_areaswstr":"\u5207\u6362\u670d\u52a1\u5668\u533a\u57df\u4f1a\u91cd\u542f\u6240\u6709\u8bed\u97f3\u9891\u9053\uff0c\u8017\u65f6\u5927\u69821\u79d2","boost_notifylab":"\u670d\u52a1\u5668\u901a\u77e5","boost_notifystr":"\u4e3a\u4f60\u559c\u7231\u7684\u670d\u52a1\u5668\u63d0\u4f9b\u52a9\u529b\uff0c\u81f3\u591a\u53ef\u89e3\u95016\u4e2a\u7b49\u7ea7\u3002\u968f\u7740\u7b49\u7ea7\u63d0\u5347\uff0c\u670d\u52a1\u5668\u7684\u5168\u4f53\u6210\u5458\u53ef\u4eab\u53d7\u66f4\u591a\u6743\u76ca\u3002\u5feb\u53bb\u4e3a\u4f60\u559c\u6b22\u7684\u670d\u52a1\u5668\u52a9\u529b\u5427!","boost_serbslevelstr":"\u670d\u52a1\u5668\u52a9\u529b\u7b49\u7ea7LV%s","boost_sertimestr":"\uff08\u4f60\u5df2\u7ecf\u52a9\u529b\u6b64\u670d\u52a1\u5668%s\u6b21\uff09","boost_bsbtn":"\u52a9\u529b\u6b64\u670d\u52a1\u5668","boost_levelstr":"\u7b49\u7ea7%s","boost_bsnumberstr":"%s\u52a9\u529b","boost_serlevelstr":"\u670d\u52a1\u5668\u7b49\u7ea7LV%s","boost_currentstr":"\u5df2\u8fbe\u5230","boost_equitystr":"\u6743\u76ca\u8be6\u60c5\u5305\u62ec","boost_needstr":"\u8fd8\u9700%s\u4e2a\u52a9\u529b","boost_stkrnumstr":"%s\u4e2a\u670d\u52a1\u5668\u8868\u60c5\u6570\uff08\u5171\u8ba1%s\u4e2a\uff09","boost_voicekbpsstr":"\u97f3\u9891\u8d28\u91cf\u2236%skbps ","boost_uploadlimstr":"%sMB\u6587\u4ef6\u4e0a\u4f20\u9650\u5236","boost_userlimstr":"%s\u4e0a\u9650\u4eba\u6570\uff08\u5171\u8ba1%s\u4eba\uff09","boost_bannerstastr":"\u670d\u52a1\u5668\u5c01\u9762\uff08\u9759\u6001\uff09","boost_pstkrnumstr":"+%s\u4e2a\u670d\u52a1\u5668\u8868\u60c5\u6570\uff08\u5171\u8ba1%s\u4e2a\uff09","boost_pgifstkrstr":"+%s\u4e2a\u670d\u52a1\u5668\u52a8\u6001\u8868\u60c5\u6570\uff08\u5171\u8ba1%s\u4e2a\uff09","boost_giflogostr":"\u670d\u52a1\u5668\u52a8\u6001Logo ","boost_puserlimstr":"+%s\u4e0a\u9650\u4eba\u6570\uff08\u5171\u8ba1%s\u4eba\uff09","boost_cusidstr":"\u81ea\u5b9a\u4e49\u670d\u52a1\u5668ID ","boost_gifbannerstr":"\u670d\u52a1\u5668\u5c01\u9762\uff08\u52a8\u6001\uff09","boost_boosternumstr":"\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u67e5\u770b\u6b64\u670d\u52a1\u5668\u7684\u52a9\u529b\u72b6\u6001\uff0c\u5305\u62ec\u6982\u51b5\u548c\u52a9\u529b\u5305\u6570\u91cf\u53d8\u5316\u60c5\u51b5\u3002","boost_boosterchangestr":"\u52a9\u529b\u5305\u6570\u91cf\u53d8\u5316\u60c5\u51b5","boost_serverlevelstr":"\u5f53\u524d\u670d\u52a1\u5668\u52a9\u529b\u7b49\u7ea7LV%s","boost_expirestr":"LV%s\u5c06\u4e8e%s\u5230\u671f\u3002","boost_gracestr":"*\u5728\u7f13\u51b2\u671f\u4e2d\uff0c\u60a8\u4ecd\u4eab\u6709\u964d\u7ea7\u524d\u7684\u7b49\u7ea7\u6743\u76ca\uff0c\u76f4\u5230\u7f13\u51b2\u671f\u7ed3\u675f\uff0c\u7f13\u51b2\u671f\u6709\u4e09\u5929\u3002","boost_levelquitytitle":"LV%s\u6743\u76ca","boost_bannerstr":"\u670d\u52a1\u5668\u5c01\u9762","boost_serstkrnumstr":"\u670d\u52a1\u5668\u8868\u60c5\u6570","boost_sergifnumstr":"\u670d\u52a1\u5668\u52a8\u6001\u8868\u60c5\u6570","boost_cusstr":"\u81ea\u5b9a\u4e49","boost_givenstr":"\u7ed9\u5b9a","boost_gifstr":"\u52a8\u6001","boost_ststr":"\u9759\u6001","boost_voicequalstr":"\u97f3\u9891\u8d28\u91cf","boost_serverlogostr":"\u670d\u52a1\u5668logo","boost_filesizestr":"\u6587\u4ef6\u4e0a\u4f20\u9650\u5236\u5927\u5c0f","boost_userlimnumstr":"\u4e0a\u9650\u4eba\u6570","boost_kbpsstr":"%skbps","boost_atallstr":"@\u5168\u4f53\u6210\u5458","roles_orderstr":"\u89d2\u8272\u5217\u8868\u4e2d\u89d2\u8272\u7b49\u7ea7\u6392\u5e8f\u81ea\u4e0a\u800c\u4e0b\uff0c\u53ef\u76f4\u63a5\u62d6\u62fd\u6392\u5e8f\u3002\u7528\u6237\u5c06\u4f7f\u7528\u6240\u62e5\u6709\u89d2\u8272\u4e2d\u6700\u9ad8\u7b49\u7ea7\u7684\u989c\u8272\u3002","roles_authhelpstr":"\u9700\u8981\u89d2\u8272\u6743\u9650\u7684\u5e2e\u52a9\uff1f","roles_namelab":"\u89d2\u8272\u540d\u79f0","roles_colorlab":"\u89d2\u8272\u989c\u8272","roles_settinglab":"\u89d2\u8272\u8bbe\u5b9a","roles_distgshsw":"\u5c06\u8be5\u89d2\u8272\u6210\u5458\u4e0e\u666e\u901a\u5728\u7ebf\u6210\u5458\u5206\u5f00\u663e\u793a","roles_allowallatsw":"\u5141\u8bb8\u4efb\u4f55\u4eba@\u63d0\u53ca\u6b64\u89d2\u8272","roles_atnoticestr":"\u8bf7\u6ce8\u610f\u2236\u62e5\u6709\\"\u63d0\u53ca@\u5168\u4f53\u6210\u5458\uff0c@here\u548c\u6240\u6709\u89d2\u8272\\"\u6743\u9650\u7684\u6210\u5458\uff0c\u53ef\u4ee5\u7ed5\u5f00\u8fd9\u4e2a\u9650\u5236\u3002","roles_gnlauthlab":"\u901a\u7528\u6743\u9650","roles_adminsw":"\u7ba1\u7406\u5458","roles_adminstr":"\u62e5\u6709\u6b64\u6743\u9650\u4f1a\u83b7\u5f97\u5b8c\u6574\u7684\u7ba1\u7406\u6743\uff0c\u5305\u62ec\u7ed5\u5f00\u6240\u6709\u5176\u4ed6\u6743\u9650\uff08\u5305\u62ec\u9891\u9053\u6743\u9650\uff09\u9650\u5236\u3002 \u7b80\u5355\u8bf4\uff0c\u9664\u4e86\u4e0d\u80fd\u5220\u670d\u52a1\u5668\uff0c\u5565\u90fd\u80fd\u5e72\uff0c\u5c5e\u4e8e\u9ad8\u5371\u6743\u9650\u3002","roles_mgrsw":"\u7ba1\u7406\u670d\u52a1\u5668","roles_mgrstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u4fee\u6539\u670d\u52a1\u5668\u540d\u79f0\u3001\u5934\u50cf\u548c\u533a\u57df\uff0c\u4ee5\u53ca\u672a\u660e\u786e\u7684\u6982\u51b5\u8bbe\u7f6e\u9879\uff0c\u5e76\u5bf9\u670d\u52a1\u5668\u5b89\u5168\u8fdb\u884c\u8bbe\u7f6e\u3002","roles_mgrlogsw":"\u67e5\u770b\u7ba1\u7406\u65e5\u5fd7","roles_mgrlogstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u67e5\u770b\u670d\u52a1\u5668\u7684\u7ba1\u7406\u65e5\u5fd7\u3002","roles_linkstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u521b\u5efa\u9080\u8bf7\u94fe\u63a5\u3002","roles_invsw":"\u7ba1\u7406\u9080\u8bf7","roles_invstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u7ba1\u7406\u670d\u52a1\u5668\u9080\u8bf7\u3002","roles_chansw":"\u9891\u9053\u7ba1\u7406","roles_chanstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u9891\u9053\u4ee5\u53ca\u7f16\u8f91\u6216\u5220\u9664\u5df2\u5b58\u5728\u7684\u9891\u9053\uff08\u53ca\u5206\u7ec4\uff09\u3002","roles_remsw":"\u79fb\u9664\u6210\u5458","roles_remstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u79fb\u9664\u5176\u4ed6\u6210\u5458\u3002","roles_blacklistsw":"\u52a0\u5165\u670d\u52a1\u5668\u9ed1\u540d\u5355","roles_blackliststr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u5c06\u5176\u4ed6\u6210\u5458\u52a0\u5165\u670d\u52a1\u5668\u9ed1\u540d\u5355\u3001\u67e5\u770b\u670d\u52a1\u5668\u9ed1\u540d\u5355\u3002","roles_cusstkrsw":"\u7ba1\u7406\u81ea\u5b9a\u4e49\u8868\u60c5","roles_cusstkrstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u7ba1\u7406\u81ea\u5b9a\u4e49\u8868\u60c5\u3002","roles_chgnamesw":"\u4fee\u6539\u6635\u79f0","roles_chgnamestr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u66f4\u6539\u81ea\u5df1\u7684\u6635\u79f0\u3002","roles_chgothnmsw":"\u4fee\u6539\u4ed6\u4eba\u6635\u79f0","roles_chgothnmstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u66f4\u6539\u4ed6\u4eba\u7684\u6635\u79f0\u3002","roles_authmagsw":"\u7ba1\u7406\u89d2\u8272\u6743\u9650","roles_authmagstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u89d2\u8272\u548c\u7f16\u8f91/\u5220\u9664\u4f4e\u4e8e\u8be5\u89d2\u8272\u7684\u89d2\u8272\u3002","roles_checkchansw":"\u67e5\u770b\u6587\u5b57\u3001\u8bed\u97f3\u9891\u9053","roles_checkchanstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u67e5\u770b\u6587\u5b57\u3001\u8bed\u97f3\u9891\u9053\u3002","roles_wordauthlab":"\u6587\u5b57\u6743\u9650","roles_wordauthsw":"\u53d1\u5e03\u6587\u5b57\u6d88\u606f","roles_wordauthstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u5728\u6587\u5b57\u9891\u9053\u4e2d\u53d1\u5e03\u6d88\u606f\u3002","roles_msgmagsw":"\u6d88\u606f\u7ba1\u7406","roles_msgmagstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u5220\u9664\u5176\u4ed6\u6210\u5458\u53d1\u51fa\u7684\u6d88\u606f\u548c\u7f6e\u9876\u6d88\u606f\u3002","roles_uploadsw":"\u4e0a\u4f20\u6587\u4ef6","roles_uploadstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u4e0a\u4f20\u6587\u4ef6\uff08\u5305\u62ec\u56fe\u7247\uff09\u3002","roles_atallsw":"\u63d0\u53ca@\u5168\u4f53\u6210\u5458\uff0c@\u5728\u7ebf\u6210\u5458\u548c\u6240\u6709\u89d2\u8272","roles_atallstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u4f7f\u7528@\u5168\u4f53\u6210\u5458\uff0c@\u5728\u7ebf\u6210\u5458\u63d0\u53ca\u8be5\u9891\u9053\u4e2d\u7684\u6240\u6709\u6210\u5458\uff0c\u8be5\u6743\u9650\u53ef\u4ee5\u7ed5\u5f00\\"\u5141\u8bb8\u4efb\u4f55\u4eba@\u63d0\u53ca\u6b64\u89d2\u8272\\"\u9650\u5236\u3002","roles_reactstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u5bf9\u6d88\u606f\u6dfb\u52a0\u65b0\u7684\u56de\u5e94\u3002","roles_vocsw":"\u8bed\u97f3\u6743\u9650","roles_vocconnectsw":"\u8bed\u97f3\u8fde\u63a5","roles_vocconnectstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u8fde\u63a5\u5230\u8bed\u97f3\u9891\u9053\u3002","roles_vocpsvsw":"\u88ab\u52a8\u8fde\u63a5\u8bed\u97f3\u9891\u9053","roles_vocpsvstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u5728\u6ca1\u6709\u8bed\u97f3\u8fde\u63a5\u6743\u9650\u65f6\uff0c\u53ef\u4ee5\u88ab\u52a8\u9080\u8bf7\u6216\u88ab\u4eba\u79fb\u52a8\u8fdb\u5165\u8bed\u97f3\u9891\u9053\u3002","roles_speaksw":"\u8bf4\u8bdd","roles_speakstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u5728\u8bed\u97f3\u9891\u9053\u4e2d\u8bf4\u8bdd\u3002","roles_acpmntsw":"\u64ad\u653e\u4f34\u594f","roles_acpmntstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u5728\u8bed\u97f3\u9891\u9053\u4e2d\u64ad\u653e\u4f34\u594f\u3002","roles_vocmagsw":"\u8bed\u97f3\u7ba1\u7406","roles_vocmagstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4fee\u6539\u9891\u9053\u53d1\u8a00\u6a21\u5f0f\uff0c\u7ba1\u7406\u9891\u9053\u6210\u5458\u4e0a\u9ea6\uff0c\u5c06\u9891\u9053\u6210\u5458\u8f6c\u79fb\u81f3\u5176\u4ed6\u9891\u9053\u548c\u8e22\u51fa\u9891\u9053\u3002","roles_serdeafensw":"\u670d\u52a1\u5668\u9759\u97f3","roles_serdeafenstr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u9650\u5236\u5176\u4ed6\u6210\u5458\u5728\u670d\u52a1\u5668\u4e2d\u7684\u8bed\u97f3\u63a5\u6536\u3002","roles_sermutesw":"\u670d\u52a1\u5668\u95ed\u9ea6","roles_sermutestr":"\u62e5\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\u53ef\u4ee5\u9650\u5236\u5176\u4ed6\u6210\u5458\u5728\u8bed\u97f3\u9891\u9053\u4e2d\u53d1\u8a00\u548c\u64ad\u653e\u97f3\u4e50\u4f34\u594f\u3002","roles_vocactsw":"\u4f7f\u7528\u81ea\u7531\u9ea6","roles_vocactstr":"\u6ca1\u6709\u6b64\u6743\u9650\u7684\u6210\u5458\uff0c\u5fc5\u987b\u5728\u9891\u9053\u5185\u4f7f\u7528\u6309\u952e\u8bf4\u8bdd\u3002","roles_clearauthbtn":"\u6e05\u9664\u89d2\u8272\u6743\u9650","roles_createitem_m":"\u521b\u5efa\u89d2\u8272","roles_createstr_m":"\u4f7f\u7528\u89d2\u8272\u7ec4\u7ec7\u4f60\u7684\u670d\u52a1\u5668\u6210\u5458\u5e76\u81ea\u5b9a\u4e49\u5176\u6743\u9650\u3002\u6b64\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728\u6210\u5458\u9875\u9762\u5206\u914d\u6743\u9650\u3002","emoji_sktuploadstr":"\u5f53\u524d\u670d\u52a1\u5668{%l\u652f\u6301\u4e0a\u4f20%s\u4e2a\u81ea\u5b9a\u4e49\u8868\u60c5}\uff0c\u4f9b\u6210\u5458\u5728\u672c\u670d\u52a1\u5668\u5185\u4f7f\u7528\u3002\u8868\u60c5\u540d\u79f0\u4ec5\u5305\u62ec\u4e2d\u6587\u3001\u82f1\u6587\u3001\u6570\u5b57\u4e14\u6700\u5c11\u4e24\u4e2a\u5b57\u7b26\uff0c\u5355\u4e2a\u8868\u60c5\u5927\u5c0f\u4e0d\u8d85\u8fc7512KB\u3002","emoji_sktuploadfftstr":"\u652f\u6301\u4e0a\u4f2050\u4e2a\u81ea\u5b9a\u4e49\u8868\u60c5","emoji_sktuploadbtn":"\u4e0a\u4f20\u8868\u60c5","emoji_stsktstr":"\u9759\u6001\u8868\u60c5\u5217\u8868\u2014\u2014%s\u53ef\u7528","emoji_stgifstr":"\u52a8\u6001\u8868\u60c5\u5217\u8868\u2014\u2014%s\u53ef\u7528","emoji_sktnamelab":"\u540d\u79f0","emoji_uploaderlab":"\u4e0a\u4f20\u8005","log_logmagstr":"\u8bb0\u5f55\u670d\u52a1\u5668\u5185\u8fdb\u884c\u7684\u7ba1\u7406\u64cd\u4f5c","log_msgdelstr":"\u5220\u9664\u6d88\u606f {%b%s}","log_msgdetstr":"\u6d88\u606f\u5185\u5bb9\uff1a{%b%s}","log_chanedstr":"\u7f16\u8f91\u9891\u9053 {%b%s}","log_namechgstr":"\u540d\u79f0\u7531 {%b%s} \u6539\u4e3a {%b%s1}","log_modechgstr":"\u9891\u9053\u6a21\u5f0f\u7531 {%b%s} \u6539\u4e3a {%b%s1}","log_linkcreatestr":"\u521b\u5efa\u9080\u8bf7\u94fe\u63a5 {%b%s}","log_invcodestr":"\u9080\u8bf7\u7801\uff1a{%b%s}","log_linkrecallstr":"\u64a4\u9500\u9080\u8bf7\u94fe\u63a5 %s","log_sftyrulesedstr":"\u7f16\u8f91\u5b89\u5168\u89c4\u5219 {%b%s}","log_turnonstr":"\u5173\u95ed {%b%s}","log_turnoffstr":"\u5f00\u542f {%b%s}","log_setrolestr":"\u8bbe\u4e3a%s\u89d2\u8272 %s1","log_cxlrolestr":"\u53d6\u6d88%s\u89d2\u8272 %s1","log_edgrpauthstr":"\u7f16\u8f91 %s \u7684\u5206\u7ec4\u8986\u76d6\u6743\u9650\u8bbe\u5b9a","log_addgrpauthstr":"\u6dfb\u52a0 %s \u7684\u5206\u7ec4\u8986\u76d6\u6743\u9650\u8bbe\u5b9a","log_remgrpauthstr":"\u79fb\u9664 %s \u7684\u5206\u7ec4\u8986\u76d6\u6743\u9650\u8bbe\u5b9a","log_edchanauthstr":"\u7f16\u8f91 %s \u7684\u9891\u9053\u8986\u76d6\u6743\u9650\u8bbe\u5b9a","log_addchanauthstr":"\u6dfb\u52a0 %s \u7684\u9891\u9053\u8986\u76d6\u6743\u9650\u8bbe\u5b9a","log_remchanauthstr":"\u79fb\u9664 %s \u7684\u9891\u9053\u8986\u76d6\u6743\u9650\u8bbe\u5b9a","log_createrolestr":"\u521b\u5efa\u89d2\u8272 %s","log_edrolestr":"\u7f16\u8f91\u89d2\u8272 %s","log_edroleauthstr":"\u7f16\u8f91\u89d2\u8272\u7684\u6743\u9650\u8bbe\u5b9a","log_namechgfstr":"\u540d\u79f0\u7531 %s \u6539\u4e3a %s","log_colorchgstr":"\u989c\u8272\u7531 %s \u6539\u4e3a %s ","log_delrolestr":"\u5220\u9664\u4e86\u89d2\u8272 %s ","log_creategroupstr":"\u521b\u5efa\u5206\u7ec4 {%b%s}","log_edgroupstr":"\u7f16\u8f91\u5206\u7ec4 {%b%s}","log_delgroupstr":"\u5220\u9664\u5206\u7ec4 {%b%s}","log_createchanstr":"\u521b\u5efa\u9891\u9053 {%b%s}","log_delchanstr":"\u5220\u9664\u9891\u9053 {%b%s}","log_descchgtostr":"\u8bf4\u660e\u7531 {%b%s} \u6539\u4e3a {%b%s1}","log_vocqualstr":"\u97f3\u8d28\u7531 {%b%s} \u6539\u4e3a {%b%s1}","log_hcchgtostr":"\u4eba\u6570\u9650\u5236\u7531 {%b%s\u4eba} \u6539\u4e3a {%b%s1\u4eba}","log_banstr":"\u5c01\u7981\u7528\u6237 {%b%s}","log_reasonstr":"\u7406\u7531\uff1a{%b%s}","log_unbanstr":"\u89e3\u9664\u5c01\u7981 {%b%s}","log_kickstr":"\u8e22\u51fa\u7528\u6237 {%b%s}","log_turnonpwstr":"\u5f00\u542f {%b%s} \u7684\u9891\u9053\u5bc6\u7801","log_chanpwisstr":"\u9891\u9053\u5bc6\u7801\u4e3a\uff1a{%b%s}","log_chgchanpwstr":"\u4fee\u6539 {%b%s} \u7684\u9891\u9053\u5bc6\u7801","log_turnoffchanpwstr":"\u5173\u95ed {%b%s} \u7684\u9891\u9053\u5bc6\u7801","widget_sertoolstitle":"\u670d\u52a1\u5668\u5c0f\u5de5\u5177","widget_sertoolssw":"\u5f00\u542f\u670d\u52a1\u5668\u5c0f\u5de5\u5177","widget_jsonapilab":"JSON API","widget_invchanlab":"\u9080\u8bf7\u9891\u9053","widget_noinvitem":"\u65e0\u9080\u8bf7","widget_themeslab":"\u989c\u8272\u6a21\u5f0f","widget_darkitem":"\u6697\u591c","widget_brightitem":"\u660e\u4eae","widget_invlinkstr":"\u5982\u679c\u5df2\u9009\u5b9a\u4e00\u4e2a\u9891\u9053\uff0c\u5c0f\u5de5\u5177\u4f1a\u751f\u6210\u4e00\u4e2a\u9080\u8bf7\u94fe\u63a5\u3002","widget_premadelab":"\u9884\u5148\u5236\u4f5c\u7684\u5c0f\u5de5\u5177","widget_premadestr":"\u8bf7\u628a\u6b64HTML\u4ee3\u7801\u5d4c\u5165\u81f3\u4f60\u7684\u7f51\u7ad9\u4ee5\u4f7f\u7528\u5f00\u9ed1\u5566\u7684\u9884\u5236\u5c0f\u5de5\u5177\u3002","security_riskstr":"\u901a\u8fc7\u8bbe\u7f6e\u89c4\u5219\u9650\u5236\u6210\u5458\u5728\u670d\u52a1\u5668\u4e2d\u7684\u64cd\u4f5c\uff0c\u4ece\u800c\u964d\u4f4e\u670d\u52a1\u5668\u5185\u7684\u98ce\u9669\u3002\u6210\u5458\u53ef\u4ee5\u901a\u8fc7\u88ab\u8d4b\u4e88\u89d2\u8272\u7684\u65b9\u5f0f\u89e3\u9664\u9650\u5236\u3002{%l\u67e5\u770b\u8be6\u7ec6\u8bf4\u660e}","security_rulelistlab":"\u89c4\u5219\u5217\u8868","security_addrulebtn":"\u6dfb\u52a0\u89c4\u5219","security_defrulesw":"\u9ed8\u8ba4\u89c4\u5219","security_prohibitstr":"\u670d\u52a1\u5668\u5185 %s \u6210\u5458\uff0c\u5728\u52a0\u5165\u670d\u52a1\u5668 %s \u5185\uff0c\u7981\u6b62 %s\u3002","security_edititem":"\u7f16\u8f91","security_delitem":"\u5220\u9664","security_halfhourstr":"\u201c\u6ce8\u518c\u4e0d\u6ee130\u5206\u949f\u201d","security_nonmluserstr":"\u975e\u5927\u9646\u7528\u6237","security_recidivismstr":"\u6709\u8fdd\u89c4\u8bb0\u5f55","security_highriskitem":"\u9ad8\u98ce\u9669","security_addbtn":"\u6dfb\u52a0","security_edittip":"\uff08\u70b9\u51fb\u84dd\u8272\u533a\u57df\u8fdb\u884c\u7f16\u8f91\uff09","security_hourminitem":"%s\u5c0f\u65f6%s1\u5206\u949f\u5185","security_minitem":"%s\u5206\u949f\u5185","security_msgvocstr":"\u6d88\u606f\u64cd\u4f5c\u548c\u8fde\u63a5\u8bed\u97f3","security_msgeditstr":"\u6d88\u606f\u64cd\u4f5c","security_vocconnectstr":"\u8fde\u63a5\u8bed\u97f3","security_savebtn":"\u4fdd\u5b58","members_sermbrtitle":"\u670d\u52a1\u5668\u6210\u5458","members_limstr":"\u5f53\u524d\u670d\u52a1\u5668\u4eba\u6570\u4e0a\u9650%s\u4eba","members_mbrstr":"%s\u6210\u5458","members_mbrstr_m":"%s\u4f4d\u6210\u5458","members_batbtn":"\u6279\u91cf\u64cd\u4f5c","members_contentstr":"\u67e5\u770b\u5185\u5bb9\uff1a","members_userroleitem":"\u7528\u6237\u89d2\u8272","members_dataitem":"\u7528\u6237\u6570\u636e","members_filterstr":"\u7b5b\u9009\u89d2\u8272\uff1a","members_filteritem_m":"\u7b5b\u9009","members_unauthitem":"\u672a\u8ba4\u8bc1\u7528\u6237","members_sortstr":"\u6392\u5e8f\uff1a","members_joinascitem":"\u52a0\u5165\u670d\u52a1\u5668\u65f6\u95f4\u5347\u5e8f","members_joindescitem":"\u52a0\u5165\u670d\u52a1\u5668\u65f6\u95f4\u964d\u5e8f","members_actvascitem":"\u6700\u540e\u6d3b\u8dc3\u65f6\u95f4\u5347\u5e8f","members_actvdescitem":"\u6700\u540e\u6d3b\u8dc3\u65f6\u95f4\u964d\u5e8f","members_roleitem":"\u89d2\u8272","members_batselbtn":"\u6279\u91cf\u9009\u62e9","members_addrolebtn":"\u6dfb\u52a0\u89d2\u8272","members_delrolebtn":"\u5220\u9664\u89d2\u8272","members_addblacklistbtn":"\u52a0\u5165\u9ed1\u540d\u5355","members_transferitem":"\u670d\u52a1\u5668\u4e3b\u8f6c\u8ba9","invite_invrecallstr":"\u8fd9\u91cc\u6240\u6709\u53ef\u7528\u7684\u9080\u8bf7\u94fe\u63a5\uff0c\u4f60\u53ef\u4ee5\u64a4\u9500\u4efb\u610f\u4e00\u4e2a\u3002","invite_invuserlab":"\u9080\u8bf7\u4eba","invite_invcodelab":"\u9080\u8bf7\u7801","invite_usagecountlab":"\u4f7f\u7528\u6b21\u6570","invite_expdtimelab":"\u5230\u671f\u65f6\u95f4","bans_defblacklisttitle":"\u9ed1\u540d\u5355\u4e3a\u7a7a","bans_blacklisttitle":"%s\u4e2a\u9ed1\u540d\u5355","bans_blackliststr":"\u6211\u4eec\u76ee\u524d\u4f7f\u7528\u8d26\u53f7\u6765\u9650\u5236\u7528\u6237\u3002","bans_noblockusertitle":"\u6ca1\u6709\u7528\u6237\u88ab\u52a0\u5165\u9ed1\u540d\u5355","bans_noblockuserstr":"\u6ca1\u6709\u4efb\u4f55\u4eba\u88ab\u52a0\u5165\u9ed1\u540d\u5355\uff0c\u8fd9\u662f\u597d\u4e8b\u3002\u4f46\u67d0\u79cd\u610f\u4e49\u4e0a\u6765\u8bf4\uff0c\u53c8\u6ca1\u6709\u90a3\u4e48\u597d\u3002","bans_noblockuser2str":"\u6709\u9700\u8981\u7684\u8bdd\uff0c\u8bf7\u4e0d\u8981\u624b\u8f6f\u3002","bans_reasonstr":"\u52a0\u5165\u539f\u56e0\uff1a","bans_removebtn":"\u79fb\u51fa\u9ed1\u540d\u5355","bans_donebtn":"\u5b8c\u6210","usermenu_acctsettingitem":"\u8d26\u53f7\u8bbe\u7f6e","usermenu_authitem":"\u6388\u6743\u7ba1\u7406","usermenu_bufflab":"\u5f00\u9ed1\u5566BUFF","usermenu_actbuffitem":"\u6fc0\u6d3bBUFF","usermenu_mybillsitem":"\u6211\u7684\u8d26\u5355","usermenu_mybillsbtn_m":"\u8d26\u5355","usermenu_codeitem":"\u5151\u6362\u7801","usermenu_appitem":"\u5e94\u7528\u8bbe\u7f6e","usermenu_vocitem":"\u8bed\u97f3\u8bbe\u7f6e","usermenu_hotkeyitem":"\u6309\u952e\u8bbe\u7f6e","usermenu_sktitem":"\u8868\u60c5\u7ba1\u7406","usermenu_overlayitem":"\u6e38\u620f\u5185\u8986\u76d6","usermenu_notifiitem":"\u901a\u77e5","usermenu_themesitem":"\u5916\u89c2","usermenu_themesitem_m":"\u5916\u89c2\u8bbe\u7f6e","usermenu_toolsitem":"\u5de5\u5177","usermenu_advanceitem":"\u9ad8\u7ea7\u8bbe\u7f6e","usermenu_activityitem":"\u7528\u6237\u52a8\u6001","usermenu_windowsitem":"Windows\u8bbe\u7f6e","usermenu_updatelogitem":"\u66f4\u65b0\u8bb0\u5f55","usermenu_logoutitem":"\u9000\u51fa\u767b\u5f55","account_bannerlab":"\u4fee\u6539\u6a2a\u5e45","account_uploadbannerlab":"\u4e0a\u4f20\u6a2a\u5e45","account_bannerstr":"\u652f\u6301\u4e0a\u4f20PNG\u3001GIF\u56fe\u7247\uff0c\u63a8\u8350\u5c3a\u5bf8628x250px\uff0c\u56fe\u7247\u5927\u5c0f\u4e0d\u8d85\u8fc75MB.\u3002","account_portraitlab":"\u66f4\u6539\u5934\u50cf","account_portrait_m":"\u5934\u50cf","account_buffendstr":"BUFF\u7ed3\u675f\u65f6\u95f4 %s","account_usernamestr":"\u7528\u6237\u540d","account_namechgcdstr":"\u666e\u901a\u7528\u6237\u6bcf\u6b21\u4fee\u6539\u7528\u6237\u540d\u9700\u95f4\u969490\u5929\\nBUFF\u7528\u6237\u6bcf\u6b21\u4fee\u6539\u7528\u6237\u540d\u9700\u95f4\u969410\u5929","account_phonelab":"\u624b\u673a\u53f7\u7801","account_phoneitem_m":"\u4fee\u6539\u624b\u673a\u53f7","account_phonetitle_m":"\u9a8c\u8bc1\u624b\u673a\u53f7","account_thirdpartylab":"\u7b2c\u4e09\u65b9\u8d26\u53f7\u7ed1\u5b9a","account_unlinkphonbtn":"\u89e3\u7ed1","account_linkbtn":"\u7ed1\u5b9a","account_safetylab":"\u8d26\u53f7\u5b89\u5168","account_cxlbtn":"\u6ce8\u9500\u8d26\u53f7","account_bufftip":"\u60f3\u8981\u81ea\u5b9a\u4e49ID\uff1f\u4e86\u89e3\u4e00\u4e0b\u5f00\u9ed1\u5566\u4f1a\u5458\u5427\u3002","account_bannerbtn":"\u89e3\u9501\u6a2a\u5e45","account_removebannerlab":"\u79fb\u9664\u6a2a\u5e45","account_confirmtip":"\u4f60\u786e\u8ba4\u8981\u79fb\u9664\u6a2a\u5e45\u5417\uff1f","account_removebannerbtn":"\u79fb\u9664\u6a2a\u5e45","sever_removebtn":"\u8e22\u51fa","account_editnametitle":"\u7f16\u8f91\u7528\u6237\u540d","account_nameidstr":"\u7528\u6237\u540d\u548cID","account_rdmnumbtn":"\u968f\u673a\u7f16\u53f7","account_namecdstr":"\u4e0b\u6b21\u4fee\u6539\u7528\u6237\u540d\u9700\u8981\u5728%s\u5929\u540e\uff0c\u786e\u8ba4\u5c06\u7528\u6237\u540d\u4fee\u6539\u4e3a\u201c%s1\u201d\u5417\uff1f","account_namecdstr_m":"\u8ddd\u79bb\u4e0b\u6b21\u4fee\u6539\u7528\u6237\u540d\uff1a%s\u5929","account_namecdtip":"\u6fc0\u6d3bBUFF\u80fd\u7f29\u77ed\u4fee\u6539\u7528\u6237\u540d\u51b7\u5374\u65f6\u957f","account_verifcodetitle":"\u7b2c\u4e00\u6b65-\u9a8c\u8bc1\u539f\u6709\u624b\u673a\u53f7","account_wfmtstr":"\u9a8c\u8bc1\u7801\u683c\u5f0f\u9519\u8bef","account_nextbtn":"\u4e0b\u4e00\u6b65","account_verifytitle":"\u8bf7\u5b8c\u6210\u9a8c\u8bc1","account_movepla":"\u8bf7\u6309\u4f4f\u6ed1\u5757\uff0c\u62d6\u52a8\u5230\u6700\u53f3\u8fb9","account_loadingstr":"\u52a0\u8f7d\u4e2d","account_authedstr":"\u9a8c\u8bc1\u901a\u8fc7","account_reacqsecstr":"%s\u79d2\u540e\u91cd\u65b0\u83b7\u53d6","account_linknewphonetitle":"\u7b2c\u4e8c\u6b65-\u7ed1\u5b9a\u65b0\u624b\u673a","account_linkphonelab":"\u7ed1\u5b9a\u624b\u673a","account_alreadyinusestr":"\u8be5\u624b\u673a\u53f7\u5df2\u7ecf\u6ce8\u518c","account_changepwlab":"\u4fee\u6539\u8d26\u53f7\u5bc6\u7801","account_sendcodestr":"\u7ed9\u624b\u673a\u53f7 %s \u53d1\u9001\u9a8c\u8bc1\u7801","account_verficodelab":"\u9a8c\u8bc1\u7801","account_newpwlab":"\u65b0\u5bc6\u7801","account_pwlimitpla":"6-30\u4f4d\u7684\u82f1\u6587\u3001\u6570\u5b57\u548c\u7b26\u53f7\uff0c\u4e0d\u80fd\u662f\u7eaf\u6570\u5b57","account_unlinkbtn":"\u89e3\u9664\u7ed1\u5b9a","account_wechatconfstr":"\u4f60\u786e\u8ba4\u8981\u89e3\u9664\u5fae\u4fe1\u8d26\u53f7\u7684\u7ed1\u5b9a\u5417\uff1f","account_qqconfstr":"\u4f60\u786e\u5b9a\u8981\u89e3\u9664QQ\u8d26\u53f7\u7684\u7ed1\u5b9a\u5417\uff1f","account_wechatqrstr":"\u4f7f\u7528\u5fae\u4fe1\u626b\u4e00\u626b\u767b\u5f55","account_wechatstr":"\u5fae\u4fe1\u767b\u5f55","account_wechatstr_m":"\u5fae\u4fe1","account_kaiheilatitle":"\u300c\u5f00\u9ed1\u5566\u300d","account_cxlnoticestr":"\u975e\u5e38\u9057\u61be\u4f60\u4e0d\u518d\u4f7f\u7528\u5f00\u9ed1\u5566\u3002\u4e3a\u4fdd\u8bc1\u4f60\u7684\u8d26\u53f7\u5b89\u5168\uff0c\u5728\u4f60\u63d0\u4ea4\u6ce8\u9500\u7533\u8bf7\u524d\uff0c\u9700\u540c\u65f6\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u2236","account_safetysitulab":"\u8d26\u53f7\u5904\u4e8e\u5b89\u5168\u72b6\u6001","account_safetysitustr":"\u9ad8\u98ce\u9669\u8d26\u53f7\u65e0\u6cd5\u6ce8\u9500\u3002\u8d26\u53f7\u9700\u5728\u4e03\u5929\u5185\u672a\u8fdb\u884c\u8fc7\u7ed1\u5b9a\u624b\u673a\u53f7\u548c\u8d26\u6237\u5bc6\u7801\u7684\u53d8\u66f4\uff0c\u65e0\u88ab\u76d7\u98ce\u9669\u3002","account_normsitulab":"\u8d26\u53f7\u5904\u4e8e\u6b63\u5e38\u4f7f\u7528\u72b6\u6001","account_normsitustr":"\u8d26\u53f7\u6ca1\u6709\u8fdd\u89c4\u64cd\u4f5c\u3002\u5728\u5904\u7f5a\u671f\u5185\u7684\u8d26\u53f7\u65e0\u6cd5\u6ce8\u9500\u3002","account_noserlab":"\u8d26\u53f7\u4e0d\u62e5\u6709\u4efb\u4f55\u4e00\u4e2a\u670d\u52a1\u5668","account_noserstr":"\u670d\u52a1\u5668\u4e3b\u65e0\u6cd5\u6ce8\u9500\u3002\u5728\u6ce8\u9500\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u4e0d\u518d\u62e5\u6709\u4efb\u4f55\u4e00\u4e2a\u670d\u52a1\u5668\u3002\u53ef\u9009\u62e9\u5c06\u4f60\u7684\u670d\u52a1\u5668\u4e3b\u8eab\u4efd\u8fdb\u884c\u8f6c\u8ba9\u6216\u89e3\u6563\u4f60\u7684\u670d\u52a1\u5668\u3002","account_nobotlab":"\u8d26\u53f7\u4e0d\u62e5\u6709\u4efb\u4f55\u4e00\u4e2a\u673a\u5668\u4eba","account_nobotstr":"\u6709\u5df2\u521b\u5efa\u673a\u5668\u4eba\u65f6\u65e0\u6cd5\u6ce8\u9500\u3002\u8bf7\u5728\u5f00\u53d1\u4e2d\u5fc3\u5220\u9664\u6240\u6709\u6ce8\u518c\u673a\u5668\u4eba\u3002","privacy_settingstr":"\u5728\u8fd9\u91cc\u53ef\u4ee5\u66f4\u6539\u4f60\u5bf9\u4e2a\u4eba\u9690\u79c1\u7684\u8bbe\u7f6e","privacy_defserlab":"\u670d\u52a1\u5668\u9ed8\u8ba4\u9690\u79c1\u8bbe\u7f6e","privacy_sertitle":"\u9690\u79c1\u8bbe\u7f6e\u2014%s","privacy_sermsgsw":"\u5141\u8bb8\u670d\u52a1\u5668\u6210\u5458\u5411\u4f60\u53d1\u9001\u79c1\u4fe1","privacy_sersittingapplystr":"\u5f53\u4f60\u8fdb\u5165\u4e00\u4e2a\u65b0\u7684\u670d\u52a1\u5668\u65f6\uff0c\u5c06\u5e94\u7528\u6b64\u8bbe\u7f6e\u3002\u5b83\u4e0d\u9002\u7528\u4e8e\u4f60\u73b0\u6709\u7684\u670d\u52a1\u5668\u3002","privacy_addfriendlab":"\u8c01\u53ef\u4ee5\u6dfb\u52a0\u4f60\u4e3a\u597d\u53cb","privacy_allsw":"\u6240\u6709\u4eba","privacy_friendfrisw":"\u597d\u53cb\u7684\u597d\u53cb","privacy_uxlab":"\u7528\u6237\u4f53\u9a8c\u6539\u5584\u8ba1\u5212","privacy_uxsw":"\u53c2\u4e0e\u7528\u6237\u4f53\u9a8c\u6539\u5584\u8ba1\u5212","privacy_uxstr":"\u5141\u8bb8\u6211\u4eec\u6355\u83b7\u4f60\u7684\u8fdb\u7a0b\uff0c\u4ece\u800c\u4f7f\u7528\u6e38\u620f\u5185\u8986\u76d6\u548c\u7528\u6237\u52a8\u6001\u529f\u80fd\uff0c\u5e76\u6709\u52a9\u4e8e\u6211\u4eec\u4e3a\u4f60\u6539\u5584\u670d\u52a1\u3002","privacy_agreementstr":"\u70b9\u51fb\u67e5\u770b\u5f00\u9ed1\u5566 {%l\u8f6f\u4ef6\u8bb8\u53ef\u53ca\u670d\u52a1\u534f\u8bae} \u548c {%l\u9690\u79c1\u6743\u4fdd\u62a4\u653f\u7b56}","authorized_authappstr":"\u8fd9\u91cc\u5c55\u793a\u7684\u662f\u5f00\u9ed1\u5566\u5df2\u6388\u6743\u7684\u5e94\u7528\uff0c\u4f60\u53ef\u4ee5\u968f\u65f6\u5220\u9664\u5b83\u4eec\u3002","authorized_devcenterlab":"\u5f00\u9ed1\u5566\u5f00\u53d1\u8005\u4e2d\u5fc3","authorized_brieflab":"\u7b80\u4ecb","authorized_authlab":"\u6743\u9650","authorized_allowinfostr":"\u5141\u8bb8\u8bfb\u53d6\u7528\u6237\u4fe1\u606f","authorized_cancelbtn":"\u53d6\u6d88\u6388\u6743","authorized_obslab":"OBS \u6e38\u620f\u5185\u8986\u76d6","authorized_remotecallstr":"\u5141\u8bb8\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528","authorized_readsermsgstr":"\u9605\u8bfb\u670d\u52a1\u5668\u6d88\u606f","invite_invstr":"\u8fd9\u91cc\u8bb0\u5f55\u4e86\u901a\u8fc7\u4f60\u9080\u8bf7\u52a0\u5165\u300c\u5f00\u9ed1\u5566\u300d\u7684\u4eba\u5458\u60c5\u51b5","invite_myinverlab":"\u6211\u7684\u9080\u8bf7\u4eba","invite_notfilledstr_m":"\u672a\u586b\u5199","invite_invcodeinputpla":"\u8bf7\u8f93\u5165\u9080\u8bf7\u7801/\u9080\u8bf7\u94fe\u63a5\uff0c\u786e\u8ba4\u540e\u4e0d\u53ef\u66f4\u6539\u3002","invite_confirmbtn":"\u786e\u8ba4","invite_confirmbtn_m":"\u786e\u5b9a","invite_myinvcodestr":"\u6211\u7684\u9080\u8bf7\u7801\uff1a%s","invite_invlinkregstr":"\u901a\u8fc7\u4f60\u5206\u4eab\u7684\u9080\u8bf7\u94fe\u63a5\uff0c\u6210\u529f\u5b8c\u6210\u6ce8\u518c\u8ba4\u8bc1\u540e\u7684\u65b0\u7528\u6237\u6570\u91cf\uff0c\u5c06\u4f1a\u88ab\u8bb0\u5f55\u4e0b\u6765\u3002\u4e0b\u9762\u662f\u4f60\u5df2\u7ecf\u9080\u8bf7\u8ba4\u8bc1\u7528\u6237\u7684\u603b\u6570\u91cf\u3002 ","invite_invidentilab_m":"\u9080\u8bf7\u4eba\u6570","invite_invidentistr":"\u5df2\u9080\u8bf7\u8ba4\u8bc1\u7528\u6237 %s","invite_approachlab":"\u9080\u8bf7\u7528\u6237\u7684\u65b9\u6cd5","invite_enterserstr":"1. \u8fdb\u5165\u4efb\u4f55\u4e00\u4e2a\u670d\u52a1\u5668","invite_invbuttonstr":"2. \u70b9\u51fb\u9080\u8bf7\u6309\u94ae\u751f\u6210\u94fe\u63a5","invite_copylinkstr":"3. \u590d\u5236\u94fe\u63a5\u53d1\u9001\u7ed9\u597d\u53cb","buff_endsstr":"\u4f60\u6b63\u5728\u4eab\u53d7\u5f00\u9ed1\u5566BUFF\u6548\u679c\\n%s \u5230\u671f","buff_renewbtn":"\u7acb\u5373\u7eed\u8d39","buff_giftbtn":"\u8d60\u9001\u597d\u53cb","buff_equitystr":"\u89e3\u9501\u66f4\u591a\u6743\u76ca\uff0c\u6700\u4f4e\u6bcf\u6708\u4ec5\u9700\uffe519.9","buff_effecttitle":"BUFF\u6548\u679c","buff_settitle":"BUFF\u5957\u9910","buff_bannerlab":"\u80cc\u666f\u6a2a\u5e45","buff_bannerstr":"\u81ea\u5b9a\u4e49\u80cc\u666f\u56fe\u7247\uff0c\u652f\u6301GIF\u683c\u5f0f","buff_gifportraitlab":"\u52a8\u6001\u7528\u6237\u5934\u50cf","buff_gifportraitlab_m":"\u52a8\u6001\u5934\u50cf","buff_gifportraitstr":"\u6709\u8da3\u7684\u52a8\u6001\u5934\u50cf\uff0c\u8ba9\u4f60\u7684\u4e2a\u4eba\u4e3b\u9875\u4e0d\u518d\u5355\u8c03","buff_crosssersktlab":"\u8de8\u670d\u52a1\u5668\u8868\u60c5","buff_crosssersktstr":"\u6446\u8131\u670d\u52a1\u5668\u9650\u5236\u4f7f\u7528\u66f4\u591a\u8868\u60c5\uff0c\u6597\u56fe\u8fbe\u4eba\u5c31\u662f\u4f60","buff_higeruploadlimitlab":"\u66f4\u9ad8\u7684\u4e0a\u4f20\u9650\u5236","buff_higeruploadlimitlab_m":"\u4e0a\u4f20100M\u6587\u4ef6","buff_higeruploadlimitstr":"\u6700\u9ad8\u652f\u6301\u4e0a\u4f20100M\u6587\u4ef6\uff0c\u5206\u4eab\u5feb\u4e50\u5c31\u662f\u73b0\u5728","buff_intlvoclab":"\u6d77\u5916\u8bed\u97f3\u52a0\u901f","buff_intlvocstr":"\u65e0\u9700\u8bbe\u7f6e\uff0c\u81ea\u52a8\u52a0\u901f\u6d77\u5916\u8bed\u97f3\u8fde\u63a5\uff0c\u5f00\u9ed1\u66f4\u7545\u5feb","buff_cusnumlab":"\u81ea\u5b9a\u4e49\u7528\u6237\u7f16\u53f7","buff_cusnumstr":"\u9753\u53f7\u4e0d\u518d\u9700\u8981\u78b0\u8fd0\u6c14\uff0c\u4e5f\u8bb8\u4f60\u5c31\u662f\u4e0b\u4e00\u4e2a#0001","buff_uniquelab":"\u72ec\u7279\u6807\u8bc6","buff_uniquestr":"\u4e13\u5c5eBUFF\u6807\u8bc6\uff0c\u4ee5\u5f70\u663e\u60a8\u7684\u72ec\u7279\u8eab\u4efd","buff_morehl":"{%l\u4e86\u89e3\u66f4\u591a}BUFF\u6548\u679c","buff_bufftitle":"BUFF\u8bf4\u660e","buff_timelab":"BUFF\u65f6\u95f4\u8ba1\u7b97","buff_timestr":"\u81eaBUFF\u5f00\u901a\u65e5\u8d77\uff0c\u5355\u6708BUFF\u7684\u6709\u6548\u671f\u4e3a30\u5929\u3002","buff_renewlab":"BUFF\u7eed\u8d39","buff_renewstr":"\u5982\u679c\u60a8\u5728BUFF\u6709\u6548\u671f\u5185\u7eed\u8d39BUFF\uff0cBUFF\u6709\u6548\u671f\u4f1a\u4ece\u4f60\u7684\u5f53\u524dBUFF\u5230\u671f\u65f6\u95f4\u5411\u540e\u7d2f\u79ef\uff0c\u630930\u5929/\u6708\u7d2f\u79ef\u5230\u4f60\u7684BUFF\u6709\u6548\u671f\u3002","buff_paylab":"\u652f\u4ed8\u65b9\u5f0f","buff_paymentstr":"BUFF\u652f\u4ed8\u65b9\u5f0f\u76ee\u524d\u4ec5\u63d0\u4f9b\u2236\u5fae\u4fe1\u652f\u4ed8\u548c\u652f\u4ed8\u5b9d\u3002\u5207\u52ff\u79c1\u804a\u4ea4\u6613\uff0c\u5b98\u65b9\u4eba\u5458\u4e0d\u4f1a\u4e3b\u52a8\u7d22\u8981\u94b1\u8d22\u3002","buff_giftlab":"BUFF\u8d60\u9001","buff_giftstr":"\u53d7\u8d60\u7528\u6237\u9700\u8981\u4e0e\u8d60\u4e88\u7528\u6237\u4e3a\u597d\u53cb\u5173\u7cfb\u3002\u53d7\u8d60\u7528\u6237BUFF\u7684\u751f\u6548\u65f6\u95f4\u4e3a\uff1a\u8d60\u9001\u793c\u7269\u6210\u529f\u540e\uff0c\u53d7\u8d60\u7528\u6237\u7acb\u5373\u751f\u6548\u3002","buff_buffstr":"\u7ed9\u804a\u5929\u52a0\u4e2aBUFF\uff0c\u8ba9\u5f00\u9ed1\u66f4\u6709\u8da3\u3002","buff_buyitnowbtn":"\u7acb\u5373\u6fc0\u6d3b","buff_actbufftitle":"\u6fc0\u6d3b\u5f00\u9ed1\u5566BUFF","buff_bufftimelab":"BUFF\u65f6\u957f","buff_discountstr":"%s \u6298","buff_annualstr":"\u5e74\u5ea6\u52a0\u6301","buff_semiannualstr":"\u534a\u5e74\u52a0\u6301","buff_seasonalstr":"\u5b63\u5ea6\u52a0\u6301","buff_monthlystr":"\u5355\u6708\u52a0\u6301","buff_paymentlab":"\u652f\u4ed8\u65b9\u5f0f\uff1a","buff_alipaybtn":"\u652f\u4ed8\u5b9d","buff_amountstr":"\u652f\u4ed8\u91d1\u989d\uff1a%s\u5143","buff_rmbstr":"\u5143","buff_aggrementhl":"{%l\u300a\u5f00\u9ed1\u5566BUFF\u4f1a\u5458\u670d\u52a1\u534f\u8bae\u300b}","buff_selectfriendlab":"\u9009\u62e9\u597d\u53cb","buff_activated_m":"\u5df2\u6fc0\u6d3b","buff_nonactivated_m":"\u672a\u6fc0\u6d3b","buff_bufftitle_m":"BUFF\u4f1a\u5458","boost_boosttitle":"\u53d1\u52a8\u670d\u52a1\u5668\u52a9\u529b","boost_booststr":"\u4e3a\u4f60\u559c\u7231\u7684\u670d\u52a1\u5668\u63d0\u4f9b\u52a9\u529b\uff0c\u6bcf\u4e2a\u52a9\u529b\u5305\u7684\u751f\u6548\u65f6\u95f4\u4e3a30\u5929\uff0c\u81f3\u591a\u53ef\u89e3\u95016\u4e2a\u670d\u52a1\u5668\u7b49\u7ea7\u3002\u968f\u7740\u670d\u52a1\u5668\u7b49\u7ea7\u63d0\u5347\uff0c\u670d\u52a1\u5668\u7684\u5168\u4f53\u6210\u5458\u53ef\u4eab\u53d7\u66f4\u591a\u6743\u76ca\u3002\u5feb\u53bb\u4e3a\u4f60\u559c\u6b22\u7684\u670d\u52a1\u5668\u52a9\u529b\u5427! ","boost_unusedlab":"\u672a\u4f7f\u7528\u7684\u52a9\u529b\u5305","boost_usenowbtn":"\u7acb\u5373\u4f7f\u7528","boost_purchasebtn":"\u8d2d\u4e70","boost_serequitytitle":"\u670d\u52a1\u5668\u52a9\u529b\u6743\u76ca","boost_serbooststr":"\u52a9\u529b\u670d\u52a1\u5668\u5373\u53ef\u83b7\u5f97\uff1a","boost_uniqueidentitystr":"\u6210\u5458\u5217\u8868\u4e2d\u72ec\u7279\u7684\u8eab\u4efd\u6807\u8bc6\u3002","boost_badgestr":"\u4e2a\u4eba\u8d44\u6599\u9762\u677f\u4e2d\u7684\u4e00\u4e2a\u95ea\u4eae\u5fbd\u7ae0\u3002","boost_uniquerolestr":"\u5728\u52a9\u529b\u670d\u52a1\u5668\u4e2d\u7684\u4e13\u5c5e\u89d2\u8272\u3002","boost_boosterserstr":"\u88ab\u52a9\u529b\u7684\u670d\u52a1\u5668\u53ef\u4ee5\u83b7\u5f97\u2236","boost_moresersktstr":"\u53ef\u4ee5\u4e0a\u4f20\u66f4\u591a\u7684\u670d\u52a1\u5668\u8868\u60c5\u3002","boost_highervocqualitystr":"\u66f4\u597d\u7684\u8bed\u97f3\u9891\u9053\u901a\u8bdd\u8d28\u91cf\u3002","boost_highersizelimstr":"\u63d0\u9ad8\u6574\u4e2a\u670d\u52a1\u5668\u7684\u4e0a\u4f20\u6587\u4ef6\u9650\u5236\u3002","boost_serequitystr":"{%l\u4e86\u89e3\u66f4\u591a}\u670d\u52a1\u5668\u6743\u76ca\u3002","boost_pricestr":"\u670d\u52a1\u5668\u52a9\u529b\u5305\u4ec5\u9700\uffe520/\u4e2a\uff0c\u5f00\u901aBUFF\u8fd8\u53ef\u4eab\u53d77\u6298\u4f18\u60e0\uff0c\u4f60\u53ef\u4ee5\u5bf9\u5df2\u7ecf\u52a0\u5165\u7684\u7684\u670d\u52a1\u5668\u53d1\u52a8\u52a9\u529b\u2236 ","boost_numbooststr":"%s\u4e2a\u52a9\u529b","boost_buyboosttitle":"\u8d2d\u4e70\u670d\u52a1\u5668\u52a9\u529b\u5305","boost_durationstr":"\u52a9\u529b\u5305\u5145\u503c\u540e30\u5929\u6709\u6548","boost_discountstr":"BUFF%s\u6298","boost_aggrementstr":"{%l\u300a\u5f00\u9ed1\u5566\u52a9\u529b\u5305\u670d\u52a1\u534f\u8bae\u300b}","boost_serboosttitle":"\u52a9\u529b\u670d\u52a1\u5668","boost_selectnumstr":"\u9009\u62e9\u52a9\u529b\u5305\u6570\u91cf","boost_neednumstr":"\u8ddd\u79bbLV%s\u8fd8\u9700%s1\u4e2a\u52a9\u529b\u5305","boost_usebtn":"\u4f7f\u7528","boost_succtitle":"\u670d\u52a1\u5668\u52a9\u529b\u6210\u529f","boost_succstr":"\u4f60\u6210\u529f\u52a9\u529b\u4e86%s\u670d\u52a1\u5668%s1\u6b21\u3002","boost_currenttitle":"\u5f53\u524d\u6b63\u5728\u52a9\u529b\u7684\u670d\u52a1\u5668","boost_startatstr":"\u52a9\u529b\u5f00\u59cb\u7684\u65f6\u95f4\uff1a%s","boost_usedstr":"\u5df2\u4f7f\u7528%s\u4e2a\u52a9\u529b","billing_reportbtn":"{%l\u627e\u4e0d\u5230\u8d26\u5355\uff1f\u63d0\u4ea4\u5de5\u5355}","billing_datelab":"\u65e5\u671f","billing_productlab":"\u8d2d\u4e70\u5546\u54c1","billing_purposelab":"\u7528\u9014","billing_monthbuffstr":"\u5f00\u9ed1\u5566BUFF \u5355\u6708\u52a0\u6301","billing_daybuffstr":"\u5f00\u9ed1\u5566BUFF \u4e00\u5929\u52a0\u6301","billing_triduumbuffstr":"\u5f00\u9ed1\u5566BUFF \u4e09\u5929\u52a0\u6301","billing_monthbooststr":"\u670d\u52a1\u5668\u52a9\u529b\u5305\uff0830\u5929\uff09","billing_wechatpaystr":"\u5fae\u4fe1\u652f\u4ed8","billing_selfusestr":"\u81ea\u7528","billing_amountstr":"\u652f\u4ed8\u91d1\u989d\uff1a\uffe5%s","billing_billnumstr":"\u8ba2\u5355\u7f16\u53f7\uff1a%s","billing_methodstr":"\u652f\u4ed8\u65b9\u5f0f\uff1a%s","billing_datestr":"\u652f\u4ed8\u65f6\u95f4\uff1a%s","billing_questionhl":"{%l\u5bf9\u8ba2\u5355\u6709\u7591\u95ee\uff1f}","billing_tipslab":"\u6e29\u99a8\u63d0\u793a","billing_tipsstr":"1.\u652f\u4ed8\u6210\u529f\u540e\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5145\u503c\uff0c\u5982\u5145\u503c\u5931\u8d2524\u5c0f\u65f6\u5185\u4f1a\u81ea\u52a8\u8865\u53d1\u3002\\n2.\u5982\u679c\u7f51\u94f6\u91cd\u590d\u4ed8\u6b3e\u6216\u4ed8\u6b3e\u540e\u8ba2\u5355\u53d6\u6d88\uff0c\u672a\u5145\u503c\u6210\u529f\uff0c\u7f51\u94f6\u9000\u6b3e\u5c06\u572815\u4e2a\u5de5\u4f5c\u65e5\u5185\u5230\u8d26\u3002","cdk_giftcardstr":"\u5151\u6362\u793c\u7269?\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u5151\u6362\u7801\u2236","cdk_giftcardpla":"AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE","cdk_nullcdkstr":"Code\u4e0d\u80fd\u4e3a\u7a7a\u3002","cdk_shortcdkstr":"Code\u5e94\u8be5\u5305\u542b\u81f3\u5c1118\u4e2a\u5b57\u7b26\u3002","cdk_longcdkstr":"Code\u53ea\u80fd\u5305\u542b\u81f3\u591a36\u4e2a\u5b57\u7b26\u3002","cdk_wrongcdkstr":"C_NOT_FOUND","cdk_collectbtn":"\u5151\u6362","cdk_succtitle":"\u5151\u6362\u6210\u529f","cdk_succstr":"\u606d\u559c\u4f60\u83b7\u5f97\uff1a\u300a%s\u300b*%s1","voice_autosyssw":"\u81ea\u52a8\u9009\u62e9\u7cfb\u7edf\u63a8\u8350\u8bbe\u7f6e","voice_autosysstr":"\u5f00\u542f\u8be5\u8bbe\u7f6e\u540e\uff0c\u5f53\u7535\u8111\u8bbe\u5907\u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u4e0d\u518d\u5f39\u51fa\u8bbe\u5907\u53d8\u66f4\u63d0\u793a\u3002","voice_micvoclab":"\u9ea6\u514b\u98ce\u8f93\u5165\u97f3\u91cf","voice_strstr":"\u589e\u5f3a\uff1a","voice_dbstr":"+%sdB","voice_vocoutputlab":"\u8bed\u97f3\u8f93\u51fa\u97f3\u91cf","voice_aidescstr":"\u53ef\u4ee5\u5c06\u80cc\u666f\u97f3\u4ece\u9ea6\u514b\u98ce\u4e2d\u62b9\u53bb\uff0c\u53ea\u4fdd\u7559\u8bf4\u8bdd\u58f0\u3002","voice_inputlab_m":"\u8f93\u5165","voice_keyitem_m":"\u6309\u952e\u8bf4\u8bdd","voice_speakeritem_m":"\u626c\u58f0\u5668\u6a21\u5f0f","voice_keylab_m":"\u8bbe\u7f6e\u8bf4\u8bdd\u5feb\u6377\u952e","voice_keybtn_m":"\u8bbe\u7f6e\u5feb\u6377\u952e","voice_keyupliftlab_m":"\u2018\u6309\u952e\u8bf4\u8bdd\u2019\u653e\u5f00\u6309\u952e\u5ef6\u8fdf","voice_autodetnsw":"\u81ea\u52a8\u8bc6\u522b\u8bed\u97f3\u611f\u5e94\u7075\u654f\u5ea6","voice_exceedstr":"\u8d85\u8fc7\u8be5\u9608\u503c\u7684\u8bed\u97f3\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u5e76\u4f20\u9001","voice_micswitchlab":"\u9ea6\u514b\u98ce\u5f00\u542f/\u5173\u95ed\u5feb\u6377\u952e","voice_nohotkeypla":"\u5c1a\u672a\u8bbe\u7f6e","voice_resetbtn":"\u91cd\u7f6e","voice_deafenlab":"\u9759\u97f3\u5f00\u542f/\u5173\u95ed\u5feb\u6377\u952e","voice_vocimprovetitle":"\u8bed\u97f3\u6539\u5584","voice_echosw":"\u56de\u97f3\u62b5\u6d88","voice_noisesw":"\u566a\u97f3\u6d88\u9664","voice_aistr":"\u5f53\u9ea6\u514b\u98ceAI\u964d\u566a\u5f00\u542f\u65f6\uff0c\u566a\u97f3\u6d88\u9664\u529f\u80fd\u4e0d\u53ef\u7528\u3002","voice_micenhancesw":"\u9ea6\u514b\u98ce\u58f0\u97f3\u653e\u5927","keybinds_hotkeystr":"\u5728\u8fd9\u91cc\u53ef\u4ee5\u66f4\u6539\u5f00\u9ed1\u5566\u7684\u5feb\u6377\u952e\u8bbe\u7f6e\u3002","keybinds_texttitle":"\u6587\u5b57\u804a\u5929","keybinds_textlab":"\u53d1\u9001\u6d88\u606f","keybinds_enteritem":"Enter","keybinds_ctrlenteritem":"Ctrl + Enter","keybinds_voctitle":"\u8bed\u97f3\u804a\u5929","keybinds_vochotkeylab":"\u8bbe\u7f6e\u6309\u952e\u8bf4\u8bdd\u5feb\u6377\u952e","keybinds_screenshottitle":"\u622a\u56fe","keybinds_scrsstr":"\u8bbe\u7f6e\u622a\u56fe\u5feb\u6377\u952e","keybinds_mouseustr":"\uff08\u6682\u4e0d\u652f\u6301\u8bbe\u7f6e\u9f20\u6807\uff09","keybinds_fsscrsstr":"\u8bbe\u7f6e\u5168\u5c4f\u622a\u56fe\u5feb\u6377\u952e","emoji_stklovestr":"\u5728\u8fd9\u91cc\u53ef\u4ee5\u5c06\u4f60\u559c\u7231\u7684\u670d\u52a1\u5668\u8868\u60c5\u6dfb\u52a0\u5230\u8868\u60c5\u680f\u4e2d\u3002","emoji_edittitle_m":"\u7f16\u8f91\u8868\u60c5","emoji_stkaddedbtn":"\u5df2\u6dfb\u52a0\u8868\u60c5","emoji_stknotaddedbtn":"\u672a\u6dfb\u52a0\u8868\u60c5","emoji_dragorderstr":"\u62d6\u62fd\u4fee\u6539\u8868\u60c5\u987a\u5e8f","emoji_addsktbtn":"\u6dfb\u52a0\u8868\u60c5","overlay_descpstr":"\u5728\u8fd9\u91cc\u53ef\u4ee5\u6897\u6982\u6e38\u620f\u5185\u8986\u76d6\u7684\u8bbe\u7f6e","overlay_explstr":"\u4e3a\u4e86\u8ba9\u4f60\u5c3d\u60c5\u53bb\u4f53\u9a8c\u6e38\u620f\u5e26\u6765\u7684\u5feb\u611f\uff0c\u4e0d\u7528\u5206\u5fc3\u53bb\u8fa8\u522b\u597d\u53cb\u7684\u58f0\u97f3\u3002\u6211\u4eec\u4f1a\u5728\u4f60\u6e38\u620f\u65f6\u5c4f\u5e55\u7684\u5de6\u4e0a\u89d2\uff0c\u663e\u793a\u6b63\u5728\u8bf4\u8bdd\u7684\u7528\u6237\u3002","overlay_localab":"\u8986\u76d6\u4f4d\u7f6e","overlay_clicklocastr":"\u70b9\u51fb\u4fee\u6539\u8986\u76d6\u4f4d\u7f6e","overlay_portraitsizelab":"\u5934\u50cf\u5927\u5c0f","overlay_defsizestr":"\u9ed8\u8ba4\u6837\u5f0f","overlay_maxstr":"\u6700\u5927","overlay_displaylab":"\u663e\u793a\u8bbe\u7f6e","overlay_alwaysitem":"\u603b\u662f","overlay_onlyspeakitem":"\u53ea\u5728\u8bf4\u8bdd\u7684\u65f6\u5019","overlay_faqlab":"\u6e38\u620f\u5185\u8986\u76d6FAQ","overlay_faqstr":"Q\u2236 \u4e3a\u4ec0\u4e48\u6211\u7684\u6e38\u620f\u5185\u8986\u76d6\u6ca1\u6709\u751f\u6548?\\nA\u2236\u5982\u679c\u6e38\u620f\u5185\u8986\u76d6\u6ca1\u6709\u751f\u6548\uff0c\u4ee5\u4e0b\u65b9\u5f0f\u6216\u8bb8\u53ef\u4ee5\u89e3\u51b3\u95ee\u9898\u2236\\n1.\u5173\u95ed\u5ba2\u6237\u7aef\uff0c\u53f3\u952e\u70b9\u51fb\u542f\u52a8\u56fe\u6807\uff0c\u9009\u62e9\u300c\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\u300d;\\n2.\u68c0\u67e5\u8bbe\u7f6e\u9879\uff0c\u786e\u4fdd\u300c\u8bed\u97f3\u9644\u5c5e\u300d\u9879\u4e2d\u7684\u300c\u6e38\u620f\u5185\u8986\u76d6\u300d\u5df2\u7ecf\u5f00\u542f;\\n3.\u68c0\u67e5\u6e38\u620f\u663e\u793a\u8bbe\u7f6e\uff0c\u5c06\u6e38\u620f\u7684\u300c\u5168\u5c4f\u300d\u6362\u6210\u300c\u65e0\u8fb9\u6846\u7a97\u53e3\u300d\u3002","notificatios_desktopsw":"\u5f00\u542f\u684c\u9762\u901a\u77e5","notificatios_desktopstr":"\u6536\u5230\u63d0\u53ca\uff08@\uff09\u6d88\u606f\u540e\u4f1a\u5728\u901a\u77e5\u4e2d\u5fc3\u5f39\u51fa\u684c\u9762\u63d0\u793a\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5f00\u5173\u5173\u95ed\u5b83\u3002 ","notificatios_inboxsw":"\u4efb\u52a1\u680f\u95ea\u70c1","notificatios_inboxstr":"\u6709\u65b0\u901a\u77e5\u65f6\uff0c\u5728\u4efb\u52a1\u680f\u95ea\u70c1\u5934\u50cf\u3002","notificatios_phonenotilab":"\u684c\u9762\u7aef\u767b\u5f55\u65f6\uff0c\u624b\u673a\u901a\u77e5\u8bbe\u7f6e","notificatios_alwaysitem":"\u624b\u673a\u59cb\u7ec8\u63a5\u6536\u901a\u77e5","notificatios_fiveminitem":"\u4e0d\u64cd\u4f5c\u7535\u81115\u5206\u949f\u540e\uff0c\u624b\u673a\u63a5\u6536\u901a\u77e5","notificatios_tenminitem":"\u4e0d\u64cd\u4f5c\u7535\u811110\u5206\u949f\u540e\uff0c\u624b\u673a\u63a5\u6536\u901a\u77e5","notificatios_fifteenitem":"\u4e0d\u64cd\u4f5c\u7535\u811115\u5206\u949f\u540e\uff0c\u624b\u673a\u63a5\u6536\u901a\u77e5","notificatios_neveritem":"\u624b\u673a\u4e0d\u63a5\u6536\u901a\u77e5","notificatios_tonesw":"\u63d0\u793a\u97f3","notificatios_volumesw":"\u63d0\u793a\u97f3\u91cf","notificatios_notificationsw":"\u6d88\u606f\u901a\u77e5","notificatios_deafensw":"\u8033\u673a\u9759\u97f3","notificatios_undeafensw":"\u53d6\u6d88\u8033\u673a\u9759\u97f3","notificatios_mutesw":"\u9ea6\u514b\u98ce\u9759\u97f3","notificatios_unmutesw":"\u9ea6\u514b\u98ce\u53d6\u6d88\u9759\u97f3","notificatios_disconnectedsw":"\u8bed\u97f3\u8fde\u63a5\u65ad\u5f00","notificatios_pttactsw":"\u2018\u6309\u952e\u8bf4\u8bdd\u2019\u5f00\u542f","notificatios_pttdeacsw":"\u2018\u6309\u952e\u8bf4\u8bdd\u2019\u5173\u95ed","notificatios_joinsw":"\u7528\u6237\u8fde\u63a5","notificatios_leavesw":"\u7528\u6237\u79bb\u5f00","notificatios_printscreensw":"\u5168\u5c4f\u622a\u56fe","appearance_appearancesw":"\u4e3b\u9898\u6a21\u5f0f","appearance_darkitem":"\u6697\u591c\u6a21\u5f0f","appearance_lightitem":"\u660e\u4eae\u6a21\u5f0f","appearance_autosw":"\u81ea\u52a8\u5207\u6362\u4e3b\u9898\u6a21\u5f0f","appearance_lightlab":"\u660e\u4eae\u6a21\u5f0f\u5f00\u542f","appearance_darklab":"\u6697\u591c\u6a21\u5f0f\u5f00\u542f","appearance_autosw_m":"\u81ea\u52a8\uff08\u8ddf\u968f\u7cfb\u7edf\u8bbe\u7f6e\uff09","tool_desstr":"\u5728\u8fd9\u91cc\u53ef\u4ee5\u627e\u5230\u5f00\u9ed1\u5566\u63d0\u4f9b\u7684\u5de5\u5177\uff0c\u5e76\u4e14\u53ef\u4ee5\u8fdb\u884c\u8bbe\u7f6e","tool_printscreentitle":"\u622a\u56fe\u5de5\u5177","tool_savectlglab":"\u622a\u56fe\u4fdd\u5b58\u76ee\u5f55","tool_chgbtn":"\u66f4\u6539","tool_openctlgbtn":"\u6253\u5f00\u76ee\u5f55","tool_livetitle":"\u76f4\u64ad\u5de5\u5177","tool_livestr":"\u76f4\u64ad\u5de5\u5177\u76ee\u524d\u5df2\u5168\u9762\u5f00\u653e\uff0c\u76f8\u5173\u4f7f\u7528\u65b9\u6cd5\u6cd5\u8bf7\u67e5\u770b{%lOBS\u6e38\u620f\u5185\u8986\u76d6\u4f7f\u7528\u8bf4\u660e}\uff0c\u5982\u679c\u6709\u5176\u5b83\u4f7f\u7528\u95ee\u9898\u6216\u8005\u5efa\u8bae\uff0c\u8bf7\u5230{%l\u300c\u5f00\u9ed1\u5566\u300d\u5410\u69fd\u4e2d\u5fc3}\u7684\u300c#OBS\u95ee\u9898\u53cd\u9988\u4e0e\u5efa\u8bae\u300d \u9891\u9053\u5411\u5de5\u4f5c\u4eba\u5458\u53cd\u9988\u3002","tool_obsstr":"OBS\u5b98\u7f51","tool_connectbtn":"\u7acb\u5373\u8fde\u63a5","obs_stateitem":"\u72b6\u6001\u9762\u677f","obs_textitem":"\u6587\u5b57\u9762\u677f","obs_voiceitem":"\u8bed\u97f3\u9762\u677f","obs_onlinenumsw":"\u663e\u793a\u5728\u7ebf\u4eba\u6570","obs_severiconsw":"\u663e\u793a\u670d\u52a1\u5668\u56fe\u6807","obs_invitesw":"\u663e\u793a\u670d\u52a1\u5668\u9080\u8bf7","obs_methodlab":"\u9080\u8bf7\u65b9\u5f0f","obs_linkitem":"\u9080\u8bf7\u94fe\u63a5","obs_appearancelab":"\u5916\u89c2\u6837\u5f0f","obs_darkitem":"\u6697\u8272\u6a21\u5f0f","obs_fullbtn":"\u70b9\u51fb\u5168\u5c4f\u67e5\u770b\u6548\u679c","obs_urlstr":"\u5b8c\u6210\u9762\u677f\u914d\u7f6e\u540e\uff0c\u5728\u6d4f\u89c8\u5668\u6e90\u4e2d\u8f93\u5165\u4ee5\u4e0bURL\uff0c\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u2236","obs_sizestr":"\u5bbd\u5ea6\uff1a%spx\uff0c\u9ad8\u5ea6\uff1a%spx","obs_textchannellab":"\u6587\u5b57\u9891\u9053","obs_fontlab":"\u5b57\u4f53\u5927\u5c0f","obs_fontsizelab":"%spx","obs_voicechannel":"\u8bed\u97f3\u9891\u9053","obs_headitem":"\u5934\u50cf\u6a21\u5f0f","obs_ptgitem":"\u7acb\u7ed8\u6a21\u5f0f","obs_speakshowsw":"\u53ea\u5728\u8bf4\u8bdd\u65f6\u663e\u793a","obs_nicknamesw":"\u663e\u793a\u6635\u79f0","obs_headsw":"\u663e\u793a\u5934\u50cf","obs_combinationlab":"\u7ec4\u5408\u65b9\u5f0f","obs_leftitem":"\u5934\u50cf\u5728\u5de6","obs_toplitem":"\u5934\u50cf\u5728\u4e0a","obs_poslab":"\u4f4d\u7f6e\u8bbe\u7f6e","obs_sortlab":"\u6392\u5e8f\u65b9\u5f0f","obs_vrtitem":"\u7eb5\u5411\u6392\u5e8f","obs_horitem":"\u6a2a\u5411\u6392\u5e8f","obs_cusizepositem":"\u81ea\u5b9a\u4f4d\u7f6e","obs_spacelab":"\u663e\u793a\u95f4\u8ddd","obs_stylelab":"\u6837\u5f0f\u8bbe\u7f6e","obs_nicknamefontsizelab":"\u6635\u79f0\u5b57\u4f53\u5927\u5c0f","obs_nicknamefontlab":"\u6635\u79f0\u5b57\u4f53","obs_defitem":"\u7cfb\u7edf\u9ed8\u8ba4","obs_fontstr":"\u5b57\u4f53\u5305\u9700\u8981\u9884\u5148\u52a0\u8f7d\uff0c\u5982\u672a\u663e\u793a\u5b57\u4f53\u6837\u5f0f\u8bf7\u7a0d\u4f5c\u7b49\u5f85\u3002","obs_otherlab":"\u5176\u4ed6\u6837\u5f0f","obs_bubblesw":"\u6dfb\u52a0\u8bf4\u8bdd\u65f6\u6c14\u6ce1","obs_shadowsw":"\u6dfb\u52a0\u8bf4\u8bdd\u65f6\u9634\u5f71","obs_lightsw":"\u6dfb\u52a0\u8bf4\u8bdd\u53d1\u5149","obs_colourlab":"\u53d1\u5149\u989c\u8272","obs_resetbtn":"\u91cd\u7f6e\u989c\u8272","advanced_devsw":"\u5f00\u53d1\u8005\u6a21\u5f0f","advanced_devcopyiditem":"\u590d\u5236ID","advanced_devstr":"\u5f00\u53d1\u8005\u5728\u6b64\u6a21\u5f0f\u4e0b\u53ef\u66f4\u4e3a\u4fbf\u643a\u5730\u7f16\u5199\u3001\u7ba1\u7406\u673a\u5668\u4eba\u3002","advanced_undetectablestr":"\u6ca1\u6709\u68c0\u6d4b\u5230\u4efb\u4f55\u6e38\u620f","status_playstr":"\u4f60\u73b0\u5728\u5728\u73a9\u4ec0\u4e48\uff1f\uff01","status_unseenstr":"\u6ca1\u6709\u770b\u5230\u4f60\u7684\u6e38\u620f\uff1f","status_addbtn":"\u6dfb\u52a0\u4e00\u4e2a\uff01","status_gamesw":"\u5728\u4e2a\u4eba\u72b6\u6001\u4e2d\u663e\u793a\u6e38\u620f\u52a8\u6001","status_musicsw":"\u5728\u4e2a\u4eba\u72b6\u6001\u4e2d\u663e\u793a\u97f3\u4e50\u52a8\u6001","status_selectgamepla":"\u9009\u62e9\u6e38\u620f","status_addgamebtn":"\u6dfb\u52a0\u6e38\u620f","status_backbtn":"\u8fd4\u56de","status_playingstr":"\u6b63\u5728\u6e38\u620f\u4e2d","windows_autostartsw":"\u5f00\u673a\u81ea\u542f\u52a8","windows_autostartstr":"\u5f00\u542f\u8be5\u9009\u9879\u65f6\uff0c\u5f00\u673a\u65f6\u81ea\u52a8\u542f\u52a8\u300c\u5f00\u9ed1\u5566\u300d\u8bed\u97f3","windows_minimizesw":"\u542f\u52a8\u65f6\u81ea\u52a8\u6700\u5c0f\u5316","windows_minimizestr":"\u5982\u679c\u5f00\u542f\u8fd9\u4e2a\u9009\u9879\uff0c\u6211\u4eec\u4f1a\u5728\u542f\u52a8\u540e\u9ed8\u9ed8\u8eb2\u5230\u540e\u53f0.\u7b49\u4f60\u9700\u8981\u7684\u65f6\u5019\u518d\u51fa\u6765\u3002","windows_traysw":"\u5173\u95ed\u65f6\u6700\u5c0f\u5316\u5230\u6258\u76d8","windows_traystr":"\u5f00\u542f\u8be5\u9009\u9879\u65f6\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u5173\u95ed\u6309\u94ae\u65f6\u7a0b\u5e8f\u5c06\u6700\u5c0f\u5316\u5230\u6258\u76d8","windows_dxvasw":"\u786c\u4ef6\u52a0\u901f","windows_dxvastr":"\u5f00\u542f\u786c\u4ef6\u52a0\u901f\u4f1a\u8ba9\u5f00\u9ed1\u5566\u8fd0\u884c\u5f97\u66f4\u6d41\u7545\u3002\u5982\u679c\u6e38\u620f\u53d1\u751f\u6389\u5e27\uff0c\u8bf7\u5173\u95ed\u6b64\u529f\u80fd","update_updatestr":"\u8bb0\u5f55\u7740\u6211\u4eec\u6210\u957f\u7684\u811a\u6b65\uff0c\u4e5f\u8bb0\u5f55\u7740\u5927\u5bb6\u5bf9\u6211\u4eec\u7684\u671f\u671b","update_versionstr":"\uff08\u5f53\u524d\u7248\u672c\u6807\u8bc6\uff1a%s\uff09","quit_quitstr":"\u4f60\u786e\u8ba4\u8981\u9000\u51fa\u767b\u5f55\u5417\uff1f","textoverview_channelnamelab":"\u9891\u9053\u540d\u79f0","textoverview_channeldeslab":"\u9891\u9053\u8bf4\u660e","textoverview_channelnamepla":"\u8f93\u5165\u9891\u9053\u540d\u79f0","textoverview_channeldespla":"\u8f93\u5165\u9891\u9053\u8bf4\u660e","textoverview_lowlab":"\u6162\u901f\u6a21\u5f0f","textoverview_close":"\u5173","textoverview_lowstr":"\u9664\u975e\u6210\u5458\u62e5\u6709\u9891\u9053\u7ba1\u7406\u6216\u6d88\u606f\u7ba1\u7406\u7684\u6743\u9650\uff0c\u5426\u5219\u4ed6\u4eec\u53d1\u9001\u6d88\u606f\u7684\u9891\u7387\uff0c\u9700\u8981\u5927\u4e8e\u95f4\u9694\u65f6\u95f4\u3002","textoverview_savestr":"\u4f60\u53d8\u4e86... \u4f46\u5982\u679c\u4f60\u575a\u6301\u7684\u8bdd...","textoverview_giveupbtn":"\u653e\u5f03\u53d8\u66f4","textoverview_savebtn":"\u4fdd\u5b58\u53d8\u66f4","roles_rolepla":"\u641c\u7d22\u89d2\u8272\u548c\u6210\u5458","roles_categstr":"\u5df2\u548c{%b%s}\u5206\u7ec4\u6743\u9650\u540c\u6b65","roles_categchangestr":"\u5f53\u524d\u9891\u9053\u89d2\u8272\u6743\u9650\u5df2\u53d1\u751f\u53d8\u5316\uff0c\u4e0d\u518d\u4e0e{%b%s}\u6743\u9650\u540c\u6b65\u3002","roles_categstrbtn":"\u4fdd\u6301\u5206\u7ec4\u540c\u6b65","channeldel_deltitle":"\u5220\u9664\u300c%s\u300d","channeldel_delstr":"\u4f60\u786e\u5b9a\u8981\u5220\u9664%s\u5417\uff1f\u6240\u6709\u5df2\u7ecf\u5b58\u5728\u7684\u5185\u5bb9\u90fd\u4f1a\u6d88\u5931\uff0c\u8be5\u64cd\u4f5c\u65e0\u6cd5\u64a4\u9500\uff01","voiceoverview_qualitylab":"\u58f0\u97f3\u8d28\u91cf","voiceoverview_fluencylab":"\u6d41\u7545","voiceoverview_normallab":"\u6b63\u5e38","voiceoverview_highlab":"\u9ad8\u8d28\u91cf","voiceoverview_maxlab":"\u9891\u9053\u6700\u5927\u4eba\u6570","voiceoverview_unlimitlab":"\u4e0d\u9650\u5236","password_opensw":"\u9891\u9053\u5bc6\u7801","password_formatpla":"\u8bf7\u8f93\u5165\u5bc6\u7801\uff0c\u5bc6\u7801\u53ea\u652f\u63011\uff5e12\u4f4d\u6570\u5b57","password_inputtitle":"\u8f93\u5165\u9891\u9053\u5bc6\u7801","password_inputpla":"\u8bf7\u8f93\u5165\u5bc6\u7801","password_passworderror":"\u9891\u9053\u5bc6\u7801\u9519\u8bef","copy_channelnametitle":"\u4e8e%s","copy_copystr":"\u65b0\u521b\u5efa\u7684\u9891\u9053\u548c %s \u5728\u6743\u9650\u8bbe\u7f6e\u3001\u7801\u7387\u3001\u5bb9\u91cf\u65b9\u9762\u5b8c\u5168\u4e00\u81f4","copy_nullerror":"\u9891\u9053\u540d\u4e0d\u53ef\u4e3a\u7a7a","createserver_createtitle":"\u5662\uff0c\u53e6\u4e00\u4e2a\u670d\u52a1\u5668\uff1f","createserver_createservertitle1":"\u521b\u5efa","createserver_createstr":"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u670d\u52a1\u5668\u5e76\u9080\u8bf7\u5c0f\u4f19\u4f34\u52a0\u5165,\u514d\u8d39\u7684\u5662\uff01","createserver_createbtn":"\u521b\u5efa\u670d\u52a1\u5668","createserver_createbtn_m":"\u7acb\u5373\u521b\u5efa","createserver_jointitle1":"\u52a0\u5165","createserver_joinstr1":"\u8f93\u5165\u5373\u65f6\u9080\u8bf7\u5e76\u52a0\u5165\u4f60\u5c0f\u4f19\u4f34\u7684\u670d\u52a1\u5668\u3002","createserver_joinbtn":"\u52a0\u5165\u670d\u52a1\u5668","createserver_tpltitle":"\u9009\u62e9\u670d\u52a1\u5668\u6a21\u677f","createserver_tplstr":"\u670d\u52a1\u5668\u5c31\u76f8\u5f53\u4e8e\u4e00\u4e2a\u201c\u623f\u95f4\u201d\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u548c\u670b\u53cb\u4eec\u4e00\u8d77\u804a\u5929\u3001\u5f00\u9ed1\uff0c\u5feb\u6765\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u5668\u5e76\u9080\u8bf7\u5c0f\u4f19\u4f34\u4eec\u52a0\u5165\u5427\uff01","createserver_freedombtn":"\u6211\u8981\u81ea\u7531\u521b\u5efa","createserver_selectlab":"\u9009\u62e9\u6a21\u677f","createserver_frienditem":"\u548c\u670b\u53cb\u4e00\u8d77\u73a9","createserver_guilditem":"\u6211\u6709\u4e00\u4e2a\u516c\u4f1a","createserver_communityitem":"\u53d1\u5c55\u4e00\u4e2a\u793e\u533a","createserver_fansitem":"\u7c89\u4e1d\u805a\u96c6\u5730","createserver_study":"\u5efa\u7acb\u5b66\u4e60\u5929\u5730","createserver_tplchannellab":"\u6a21\u677f\u9891\u9053","createserver_tplrolelab":"\u6a21\u677f\u89d2\u8272","createserver_tplpreviewlab_m":"\u6a21\u677f\u9884\u89c8","createserver_gmrolestr":"\u7ba1\u7406\u5458\u62e5\u6709\u7ba1\u7406\u9891\u9053\u7684\u4e00\u5207\u6743\u9650\uff0c\u9664\u4e86\u5220\u9664\u670d\u52a1\u5668\uff0c\u5565\u90fd\u80fd\u5e72\u3002","createserver_textgmstr":"\u6587\u5b57\u9891\u9053\u7ba1\u7406\u5458\u53ef\u4ee5\u5bf9\u6587\u5b57\u9891\u9053\u4e2d\u7684\u6d88\u606f\u8fdb\u884c\u7ba1\u7406\u3002","createserver_voicegmstr":"\u8bed\u97f3\u9891\u9053\u7ba1\u7406\u5458\u53ef\u4ee5\u7ba1\u7406\u8bed\u97f3\u6210\u5458\u3002","createserver_textchannelgmstr":"\u6587\u5b57\u9891\u9053\u7ba1\u7406\u5458","createserver_voicechannelgmstr":"\u8bed\u97f3\u9891\u9053\u7ba1\u7406\u5458","createserver_selectbtn":"\u9009\u62e9","createserver_createservertitle2":"\u521b\u5efa\u4f60\u7684\u670d\u52a1\u5668","createserver_createserverstr":"\u521b\u5efa\u611f\u5174\u8da3\u7684\u4e3b\u9898\u670d\u52a1\u5668\uff0c\u4f60\u53ef\u4ee5\u514d\u8d39\u4e0e\u597d\u53cb\u8fdb\u884c\u8bed\u97f3/\u6587\u5b57\u804a\u5929","createserver_updatelogobtn":"\u66f4\u65b0LOGO","createserver_uploadlogobtn":"\u4e0a\u4f20\u670d\u52a1\u5668LOGO","createserver_uploadlogobtn_m":"\u53bb\u8bbe\u7f6e","createserver_iconsizestr1":"\u670d\u52a1\u5668\u56fe\u6807\u6700\u5c0f\u4e3a 128\xd7128","createserver_iconsizestr2":"\u6211\u4eec\u5efa\u8bae\u4e3a 512\xd7512 \uff08\u8bf7\u522b\u8d85\u8fc75M\uff09","createserver_servernamelab":"\u670d\u52a1\u5668\u540d\u79f0","createserver_servernamepla":"\u8f93\u5165\u670d\u52a1\u5668\u540d\u79f0","joinserver_jointitle2":"\u5728\u4e0b\u9762\u8f93\u5165\u5373\u65f6\u9080\u8bf7\u6216\u670d\u52a1\u5668ID\u4ee5\u52a0\u5165\u73b0\u6709\u670d\u52a1\u5668\u3002\u9080\u8bf7\u94fe\u63a5\u548c\u670d\u52a1\u5668ID\u770b\u8d77\u6765\u5927\u6982\u957f\u8fd9\u6837\uff1a","joinserver_jointitle2_m":"\u9080\u8bf7\u94fe\u63a5\u548c\u670d\u52a1\u5668ID\u770b\u8d77\u6765\u5927\u6982\u957f\u8fd9\u6837\uff1a","joinserver_inputlab_m":"\u8f93\u5165\u9080\u8bf7","joinserver_completelink":"","joinserver_completestr":"\uff08\u5b8c\u5168\u4f53\uff09","joinserver_simplifylink":"kaihei.co/HfGqxS","joinserver_simplifystr":"\uff08\u7b80\u5316\u4f53\uff09","joinserver_minimallink":"HfGqxS","joinserver_minimalstr":"\uff08\u6781\u7b80\u4f53\uff09","joinserver_idlink":42543621,"joinserver_idstr":"\uff08\u516c\u5f00\u670d\u52a1\u5668\u7684ID\uff09","joinserver_idinputpla":"\u8f93\u5165\u5373\u65f6\u9080\u8bf7\u94fe\u63a5\u6216\u670d\u52a1\u5668ID","joinserver_Invalidcodeerror":"\u65e0\u6548\u7684\u670d\u52a1\u5668\u9080\u8bf7\u7801!","sever_leavetitle":"\u79bb\u5f00\u300c%s\u300d","sever_leavestr":"\u4f60\u786e\u5b9a\u8981\u79bb\u5f00 %s \u5417\uff1f\u4f60\u5c06\u65e0\u6cd5\u770b\u5230\u8be5\u670d\u52a1\u5668\u4efb\u4f55\u4fe1\u606f\u9664\u975e\u4f60\u88ab\u91cd\u65b0\u9080\u8bf7\u3002","server_muteitem":"\u514d\u6253\u6270","folder_readitem":"\u5c06\u6587\u4ef6\u5939\u6807\u8bb0\u4e3a\u5df2\u8bfb","folder_settingitem":"\u6587\u4ef6\u5939\u8bbe\u7f6e","folder_namelab":"\u6587\u4ef6\u5939\u540d\u79f0","folder_namepla":"\u8f93\u5165\u670d\u52a1\u5668\u6587\u4ef6\u5939\u540d\u79f0","folder_colourlab":"\u6587\u4ef6\u5939\u989c\u8272","folder_cuscolourtip":"\u81ea\u5b9a\u4e49\u989c\u8272","user_profileitem":"\u4e2a\u4eba\u8d44\u6599","user_mentionitem":"\u63d0\u53ca@","user_invitevoiceitem":"\u9080\u8bf7\u81f3\u8bed\u97f3\u9891\u9053","user_noteitem":"\u6dfb\u52a0\u5907\u6ce8","user_privatemessageitem":"\u79c1\u4fe1","user_uservolumeitem":"\u7528\u6237\u97f3\u91cf","user_inviteserveritem":"\u9080\u8bf7\u81f3\u670d\u52a1\u5668","user_addfrienditem":"\u6dfb\u52a0\u597d\u53cb","user_sentfrienditem":"\u5df2\u53d1\u9001\u597d\u53cb\u8bf7\u6c42","user_kickitem":"\u4ece\u672c\u670d\u52a1\u5668\u4e2d\u79fb\u9664","user_banitem":"\u79fb\u9664\u5e76\u52a0\u5165\u9ed1\u540d\u5355","user_kickvoiceitem":"\u8e22\u51fa\u8bed\u97f3\u9891\u9053","user_movetoitem":"\u79fb\u52a8\u5230","user_blockuseritem":"\u5c4f\u853d\u8be5\u7528\u6237","profile_block":"\u5c4f\u853d","profile_introlab":"\u4e2a\u4eba\u7b80\u4ecb","profile_notepla":"\u70b9\u51fb\u6dfb\u52a0\u5907\u6ce8","profile_norolelab":"\u6ca1\u6709\u89d2\u8272","profile_viewprofilebtn":"\u67e5\u770b\u8d44\u6599","profile_listeninglab":"\u6b63\u5728\u542c\u97f3\u4e50","profile_playinglab":"\u6b63\u5728\u73a9\u6e38\u620f","profile_playingtimestr":"\u5df2\u7ecf\u73a9\u4e86%s%s1","profile_intropla":"\u70b9\u51fb\u6dfb\u52a0\u7b80\u4ecb","profile_changenicknameotherstr":"\u4f60\u5f53\u524d\u6b63\u5728\u4fee\u6539\u4ed6\u4eba\u6635\u79f0\u3002","profile_nicknamelab":"\u6635\u79f0","profile_resetnicknamebtn":"\u91cd\u7f6e\u6635\u79f0","profile_submitbtn":"\u63d0\u4ea4","search_advancedsearchbtn":"\u9ad8\u7ea7\u641c\u7d22","search_messageitem":"\u6d88\u606f","search_fileitem":"\u6587\u4ef6","search_picturevideoitem":"\u56fe\u7247/\u89c6\u9891","search_resultstr":"%s\u4e2a\u7ed3\u679c","search_skipbtn":"\u8df3\u8f6c","search_searchingstr1":"\u641c\u7d22\u4e2d","search_searchingstr2":"\u6b63\u5728\u641c\u7d22","search_emptystr1":"\u65e0\u7ed3\u679c","search_emptystr2":"\u6ca1\u6709\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c","search_allchannelitem":"\u5168\u90e8\u9891\u9053","search_generalitem":"\u7efc\u5408","search_useritem":"\u7528\u6237","search_channelitem":"\u9891\u9053","search_servermessageitem":"\u670d\u52a1\u5668\u6d88\u606f","search_rangelab":"\u8303\u56f4\uff1a","search_categorystr":"\u5207\u6362\u5206\u7c7b","search_movestr":"\u79fb\u52a8\u5149\u6807","search_selectitemstr":"\u9009\u62e9\u6761\u76ee","search_escstr":"\u5173\u95ed\u7a97\u53e3","search_searchpla":"\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9","search_keywordstr":"\u8f93\u5165\u5173\u952e\u8bcd\u641c\u7d22%s","search_selectrangetitle":"\u9009\u62e9\u8303\u56f4","search_selectserverlab":"\u9009\u62e9\u670d\u52a1\u5668","search_channelrangelab":"\u9891\u9053\u8303\u56f4","undefined":"\u6240\u6709\u9891\u9053","search_designatedchannelitem":"\u6307\u5b9a\u9891\u9053","search_messagetypelab":"\u6d88\u606f\u7c7b\u578b","search_texttypeitem":"\u6587\u5b57","search_picturevideotypeitem":"\u56fe\u7247\u548c\u89c6\u9891","search_allprivatemessageitem":"\u6240\u6709\u79c1\u4fe1","search_designatedprivatemessageitem":"\u6307\u5b9a\u79c1\u4fe1","feedback_friendstr":"\u597d\u53cb\u3001\u79c1\u4fe1","feedback_servermenustr":"\u670d\u52a1\u5668\u83dc\u5355","feedback_channelliststr":"\u9891\u9053\u5217\u8868","feedback_serverliststr":"\u670d\u52a1\u5668\u5217\u8868","feedback_discoverstr":"\u53d1\u73b0\u9875","feedback_desstr":"\u5982\u679c\u4f60\u5728\u4f7f\u7528\u300c\u5f00\u9ed1\u5566\u300d\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\u6765\u89e3\u51b3\u3002","feedback_faqlab":"\u5e38\u89c1\u95ee\u9898","feedback_helpbtn":"\u67e5\u770b\u5e2e\u52a9\u6587\u6863","feedback_mfaqitem_m":"\u79fb\u52a8\u7aef\u5e38\u89c1\u95ee\u9898","feedback_helpstr_m":"\u5728\u7ebf\u67e5\u770b\u5f00\u9ed1\u5566\u5e2e\u52a9\u6587\u6863","feedback_feedbackstr_m":"\u521b\u5efa\u4f60\u7684\u95ee\u9898\u53cd\u9988\u5de5\u5355\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u56de\u590d","feedback_otherlab":"\u5176\u5b83\u53cd\u9988\u6e20\u9053\uff1a","feedback_feedbacktitle":"\u53cd\u9988\u4e0e\u5efa\u8bae","feedback_typelab":"\u53d1\u751f\u4e86\u4ec0\u4e48","feedback_troubleitem":"\u6211\u9047\u5230\u4e00\u4e2a\u95ee\u9898","feedback_adviseitem":"\u6211\u6709\u4e00\u4e2a\u5efa\u8bae","feedback_platformlab":"\u9009\u62e9\u5e73\u53f0","feedback_questiontypelab":"\u95ee\u9898\u7c7b\u578b","feedback_deslab":"\u63cf\u8ff0\u5185\u5bb9","feedback_troubledespla":"\u8bf7\u5c06\u95ee\u9898\u7684\u8be6\u60c5\u63cf\u8ff0\u5199\u5728\u8fd9\u91cc\uff0c\u81f3\u5c11\u8f93\u5165\u4e94\u4e2a\u5b57\u7b26","feedback_advisepla":"\u8bf7\u5c06\u5efa\u8bae\u7684\u8be6\u60c5\u63cf\u8ff0\u5199\u5728\u8fd9\u91cc\uff0c\u81f3\u5c11\u8f93\u5165\u4e94\u4e2a\u5b57\u7b26","feedback_deviceinfolab":"\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f","feedback_loglab":"\u4e0a\u4f20\u65e5\u5fd7","feedback_pcitem":"PC","feedback_webitem":"Web","feedback_androiditem":"Android","feedback_iositem":"iOS","feedback_h5item":"H5","feedback_tyoeitem":"\u8bf7\u9009\u62e9\u95ee\u9898\u7c7b\u578b","feedback_voiceitem":"\u8bed\u97f3\u95ee\u9898","feedback_textitem":"\u6587\u5b57\u804a\u5929\u95ee\u9898","feedback_accountitem":"\u8d26\u53f7\u95ee\u9898","feedback_serveritem":"\u670d\u52a1\u5668\u7ba1\u7406\u95ee\u9898","feedback_billitem":"\u8d26\u5355\u95ee\u9898","feedback_other":"\u5176\u4ed6\u95ee\u9898","feedback_despla":"\u8bf7\u586b\u5199\u63cf\u8ff0\u5185\u5bb9","feedback_deserror":"\u63cf\u8ff0\u5185\u5bb9\u9700\u81f3\u5c11\u8f93\u5165\u4e94\u4e2a\u5b57\u7b26","message_topnumstr":"\u5df2\u7f6e\u9876\u7684\u6d88\u606f(%s)","message_topdefaultstr":"\u6b64\u9891\u9053\u8fd8\u6ca1\u6709\u4efb\u4f55\u7f6e\u9876\u6d88\u606f","message_allreadbtn":"\u5168\u90e8\u5df2\u8bfb","message_nomorestr":"\u6ca1\u6709\u66f4\u591a\u4e86","messagebox_newmessagenumstr":"\u65b0\u6d88\u606f\uff08%s\uff09","messagebox_overlookallbtn":"\u5ffd\u7565\u5168\u90e8","messagebox_mentionstr":"@\u6211","messagebox_friendrequestitem":"\u597d\u53cb\u8bf7\u6c42","friends_hotkeyckstr":"Ctrl+K","friends_frienditem":"\u597d\u53cb","friends_allitem":"\u5168\u90e8","friends_requestitem":"\u8bf7\u6c42","friends_blockeditem":"\u5df2\u5c4f\u853d","friends_requeststr":"\u8bf7\u6c42\u6210\u4e3a\u597d\u53cb","friends_noawaitingstr":"\u8fd9\u91cc\u6ca1\u6709\u5f85\u5904\u7406\u7684\u670b\u53cb\u8bf7\u6c42\u3002","friends_emptyflstr":"\u5443...\u76ee\u524d\u8fd8\u6ca1\u6709\u670b\u53cb\u3002","friends_emptyblstr":"\u5c4f\u853d\u5217\u8868\u91cc\u6ca1\u6709\u4efb\u4f55\u4eba\u3002","friends_noonlinestr":"\u6b64\u65f6\u4f60\u6ca1\u6709\u597d\u53cb\u5728\u7ebf\uff0c\u5feb\u53bb\u53eb\u4ed6\u4eec\u6765\u73a9\uff01","friends_deltitle":"\u5220\u9664\u597d\u53cb %s","friends_delitem":"\u5220\u9664\u597d\u53cb","friends_confirmstr":"\u4f60\u786e\u5b9a\u8981\u5c06 %s \u4ece\u4f60\u7684\u597d\u53cb\u5217\u8868\u4e2d\u5220\u9664\u5417\uff1f","friends_addfriendstr":"\u52a0\u4e3a\u597d\u53cb","friends_tempmsgstr":"\u4e34\u65f6\u4f1a\u8bdd","friends_msgtopstr":"\u8fd9\u91cc\u662f\u4f60\u4e0e %s \u79c1\u4fe1\u8bb0\u5f55\u7684\u5f00\u5934\u3002","friends_friendstr":"\u4f60\u4e0e%s\u5df2\u6210\u4e3a\u597d\u53cb","friends_invsentstr":"\u4f60\u53d1\u9001\u4e86\u4e00\u4e2a\u9080\u8bf7\uff08%s\uff09\uff0c\u4f46\u662f......","friends_invrecstr":"\u4f60\u6536\u5230\u4e86\u4e00\u4e2a\u9080\u8bf7\uff08%s\uff09\uff0c\u4f46\u662f......","friends_invexpiredtitle":"\u9080\u8bf7\u5df2\u5931\u6548","friends_fourofourstr":"\u867d\u7136\u610f\u5916\u4e0d\u5e38\u53d1\u751f\uff0c\u4f46\u603b\u4f1a\u6709\u3002","friends_serinvsentstr":"\u4f60\u53d1\u51fa\u4e86\u52a0\u5165\u4e00\u4e2a\u670d\u52a1\u5668\u7684\u9080\u8bf7\uff08%s\uff09","friends_serinvacceptstr":"\u4f60\u5df2\u88ab\u9080\u8bf7\u52a0\u5165\u4e00\u4e2a\u670d\u52a1\u5668\uff08%s\uff09","friends_onlinestr":"%s\u4eba\u5728\u7ebf","friends_joinedstr":"\u5df2\u52a0\u5165","friends_reportitem":"\u4e3e\u62a5","friends_reasontitle":"\u8bf7\u9009\u62e9\u4e3e\u62a5\u539f\u56e0","friends_personalinfostr":"\u4e0d\u4f1a\u6cc4\u9732\u4f60\u7684\u4e2a\u4eba\u4fe1\u606f","friends_pornlab":"\u8272\u60c5\u4f4e\u4fd7","friends_advertislab":"\u5783\u573e\u5e7f\u544a","friends_harassmentlab":"\u4e0d\u53cb\u5584/\u6076\u610f\u8fb1\u9a82","friends_dislikelab":"\u5185\u5bb9\u4ee4\u6211\u53cd\u611f","friends_otherpla":"\u5176\u4ed6\u539f\u56e0","discover_interestpla":"\u8f93\u5165\u4f60\u611f\u5174\u8da3\u7684\u6e38\u620f","discover_officialsertitle":"\u5b98\u65b9\u5408\u4f5c\u670d\u52a1\u5668","discover_topbtn":"\u9876\u90e8","discover_checkbtn":"\u67e5\u770b\u670d\u52a1\u5668","discover_promotebtn":"\u52a0\u5165\u63a8\u8350\u670d\u52a1\u5668","discover_promotestr":"\u8ba9\u66f4\u591a\u4eba\u53d1\u73b0\u4f60\u7684\u670d\u52a1\u5668","discover_loadingtitle":"\u6b63\u5728\u52a0\u8f7d\uff0c\u8bf7\u7a0d\u540e...","featured_recomsertitle":"\u7533\u8bf7\u6210\u4e3a\u63a8\u8350\u670d\u52a1\u5668","featured_criteriastr":"\u7533\u8bf7\u6761\u4ef6\uff1a","featured_memberstr":"1.\u670d\u52a1\u5668\u6210\u5458","featured_membernumstr":"\u226550\u540d\u7528\u6237","featured_avgonlinestr":"2.\u8fde\u7eed3\u5929\u6210\u5458\u65e5\u5e73\u5747\u5728\u7ebf\u65f6\u957f","featured_timestr":"\uff1e60\u5206\u949f","featured_aggrementstr":"3.\u8bf7\u9605\u8bfb\u5e76\u9075\u5b88{%l\u300a\u793e\u533a\u5b88\u5219\u300b}","featured_notestr":"\u6ce8\uff1a\u82e5\u670d\u52a1\u5668\u6210\u5458\uff1c50\u6216\u5e73\u5747\u5728\u7ebf\u65f6\u957f\u8fde\u7eed\u4e94\u5929\uff1c30\u5206\u949f\uff0c\u5c06\u4f1a\u88ab\u53d6\u6d88\u63a8\u8350\u3002","featured_nonserarrivedstr":"\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\u670d\u52a1\u5668","featured_fulfillstr":"\u8fbe\u6807%s\u5929","featured_applyinfostr":"\u586b\u5199\u7533\u8bf7\u4fe1\u606f","featured_serclasslab":"\u8bf7\u9009\u62e9\u670d\u52a1\u5668\u5206\u7c7b:","featured_serclasstip":"\u8be5\u5206\u7c7b\u9009\u9879\u4e0d\u4f1a\u5f71\u54cd\u670d\u52a1\u5668\u5c55\u793a","featured_serbannerstr":"\u70b9\u51fb\u4e0a\u4f20\u670d\u52a1\u5668\u5c01\u9762\u56fe","featured_serbannerlab":"\u4e0a\u4f20\u670d\u52a1\u5668\u5c01\u9762\u56fe","featured_minsizestr":"\u6700\u5c0f\u5c3a\u5bf8\uff1a1024\xd7600","featured_serdescstr":"\u70b9\u51fb\u6dfb\u52a0\u670d\u52a1\u5668\u63cf\u8ff0\uff0c\u5b57\u7b26\u63a7\u5236\u572810-40\u4e2a\u4e4b\u95f4\u3002","featured_sertaglab":"\u9009\u62e9\u670d\u52a1\u5668\u6807\u7b7e","featured_serdesclab":"\u6dfb\u52a0\u670d\u52a1\u5668\u63cf\u8ff0","featured_selsertaglab":"\u8bf7\u9009\u62e9\u670d\u52a1\u5668\u6807\u7b7e","featured_backbtn":"\u540e\u9000","featured_applybtn":"\u7533\u8bf7","featured_descpla":"\u8bf7\u8f93\u5165\u7b80\u4ecb","featured_guildnametip":"\u8bf7\u5199\u51fa\u516c\u4f1a\u6218\u961f\u7684\u540d\u79f0\uff0c\u4e3b\u8981\u73a9\u7684\u6e38\u620f\uff0c\u670d\u52a1\u5668\u7684\u4f5c\u7528\u76ee\u7684\uff08\u62db\u4eba\u8981\u6c42\uff09\u3002","featured_nosuittagstr":"\u672a\u627e\u5230\u5408\u9002\u6807\u7b7e\uff1f","featured_newtaghl":"\u7533\u8bf7\u65b0\u7684\u6807\u7b7e","featured_tagapplytitle":"\u6e38\u620f\u6807\u7b7e\u7533\u8bf7","featured_inputnametagstr":"\u8bf7\u8f93\u5165\u6e38\u620f\u540d\u79f0\u53ca\u5206\u7c7b\uff0c\u5de5\u4f5c\u4eba\u5458\u5c06\u5728\u4e00\u4e2a\u5de5\u4f5c\u65e5\u5185\u8fdb\u884c\u5ba1\u6838","featured_namestr":"\u6e38\u620f\u540d\u79f0","featured_nullnamestr":"\u6e38\u620f\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\u3002","featured_gamenamepla":"\u8bf7\u8f93\u5165\u6e38\u620f\u540d\u79f0","featured_gameclasslab":"\u6e38\u620f\u5206\u7c7b","featured_gameclasspla":"\u8bf7\u9009\u62e9\u6e38\u620f\u5206\u7c7b","featured_submitsuccstr":"\u63d0\u4ea4\u6210\u529f","featured_inonebusstr":"\u5de5\u4f5c\u4eba\u5458\u5c06\u5728\u4e00\u4e2a\u5de5\u4f5c\u65e5\u5185\u8fdb\u884c\u5ba1\u6838","featured_guilditem":"\u516c\u4f1a/\u6218\u961f","featured_fanclubitem":"\u7c89\u4e1d\u7fa4","featured_cmtyitem":"\u793e\u533a","featured_officalitem":"\u5b98\u65b9\u5382\u5546","featured_submittedstr":"\u7533\u8bf7\u5df2\u63d0\u4ea4","featured_onebusawaitstr":"\u8bf7\u8010\u5fc3\u7b49\u5f85\u4eba\u5de5\u5ba1\u6838\uff0c\u5927\u6982\u9700\u89811\u4e2a\u5de5\u4f5c\u65e5","download_iosstr":"iOS\u5ba2\u6237\u7aef","download_dlnowbtn":"\u7acb\u5373\u4e0b\u8f7d","download_androidstr":"Android\u5ba2\u6237\u7aef","download_qriosstr":"\u626b\u7801\u4e0b\u8f7diOS\u5ba2\u6237\u7aef","download_qrandroidstr":"\u626b\u7801\u4e0b\u8f7dAndroid\u5ba2\u6237\u7aef","tab_homelab_m":"\u5f00\u9ed1\u5566","tab_profilelab_m":"\u6211\u7684","server_boosterbtn_m":"\u52a9\u529b","sever_modifynickname_m":"\u4fee\u6539\u670d\u52a1\u5668\u6635\u79f0","sever_allowprivatesw_m":"\u5141\u8bb8\u79c1\u4fe1","invite_friendlistlab_m":"\u597d\u53cb\u5217\u8868","invite_sharelinklab_m":"\u5206\u4eab\u94fe\u63a5","invite_copylinkbtn_m":"\u590d\u5236\u94fe\u63a5","invite_qqstr_m":"QQ","invite_qqzonestr_m":"QQ\u7a7a\u95f4","invite_wxstr_m":"\u5fae\u4fe1\u597d\u53cb","invite_circlestr_m":"\u670b\u53cb\u5708","friends_newstr_m":"\u67e5\u770b\u65b0\u7684\u597d\u53cb\u6dfb\u52a0\u8bf7\u6c42","friends_blockstr_m":"\u67e5\u770b\u88ab\u5c4f\u853d\u7684\u7528\u6237\u6216\u8005\u5c06\u4ed6\u4eec\u89e3\u9664","friends_nullblockstr_m":"\u5c4f\u853d\u5217\u8868\u91cc\u6ca1\u6709\u4efb\u4f55\u4eba","friends_nullpendingstr_m":"\u8fd8\u6ca1\u6709\u5f85\u5904\u7406\u7684\u8bf7\u6c42","friends_searchpla_m":"\u641c\u7d22\u597d\u53cb\u548c\u79c1\u4fe1","friends_addlab_m":"\u901a\u8fc7\u7528\u6237\u540d\u548c\u6570\u5b57\u7f16\u53f7\u6dfb\u52a0\u597d\u53cb","friends_addtipstr_m":"\u6b63\u786e\u683c\u5f0f\uff1a%s","friends_sendbtn_m":"\u53d1\u9001\u597d\u53cb\u8bf7\u6c42","message_photobtn_m":"\u76f8\u518c","message_previewbtn_m":"\u9884\u89c8","message_originallab_m":"\u539f\u56fe","message_searchpla_m":"\u641c\u7d22\u7528\u6237\u6216\u89d2\u8272","message_latelylab_m":"\u6700\u8fd1\u53d1\u8a00","message_selectmentiontitle_m":"\u9009\u62e9\u63d0\u53ca\u7684\u4eba","user_aboutkhlitem_m":"\u5173\u4e8e\u5f00\u9ed1\u5566","channel_sort_m":"\u6392\u5e8f","voice_balllab_m":"\u60ac\u6d6e\u7403\u8bbe\u7f6e","voice_ballstr_m":"\u5728\u4f7f\u7528\u5176\u4ed6app\u7684\u540c\u65f6\uff0c\u770b\u5230\u8c01\u5728\u53d1\u8a00\uff0c\u540c\u65f6\u4e5f\u80fd\u8fdb\u884c\u5feb\u901f\u64cd\u4f5c","voice_ballsw_m":"\u5f00\u542f\u60ac\u6d6e\u7403","voice_ballpermissionitem_m":"\u60ac\u6d6e\u7403\u6743\u9650","voice_deniedstr_m":"\u672a\u5f00\u542f","voice_allowstr_m":"\u5df2\u5f00\u542f","voice_allowfloatingwindowitem_m":"\u5141\u8bb8\u663e\u793a\u60ac\u6d6e\u7a97","voice_accessrecord_m":"\u4f7f\u7528\u8bb0\u5f55\u8bbf\u95ee\u6743\u9650","voice_balldenied_m":"\u672a\u5f00\u542f\u6743\u9650\u4f1a\u5bfc\u81f4\u60ac\u6d6e\u7403\u4e0d\u80fd\u6b63\u5e38\u4f7f\u7528\u3002","voice_disabletouchscreensw_m":"\u8d34\u8138\u606f\u5c4f","privacy_personaltitle_m":"\u4e2a\u4eba\u6743\u9650\u7ba1\u7406","privacy_photolab_m":"\u7167\u7247","privacy_photostr_m":"\u8bbe\u7f6e\u5934\u50cf\u3001\u53d1\u9001\u56fe\u7247\u5185\u7684\u56fe\u7247\u4e0e\u89c6\u9891\u7b49\u529f\u80fd\u3002","privacy_cameralab_m":"\u76f8\u673a","privacy_camerastr_m":"\u62cd\u6444\u540e\u53d1\u9001\u56fe\u7247\u6216\u89c6\u9891\u7b49\u529f\u80fd\u3002","privacy_microphonelab_m":"\u9ea6\u514b\u98ce","privacy_microphonestr_m":"\u8fdb\u884c\u8bed\u97f3\u7b49\u529f\u80fd\u3002","privacy_locationlab_m":"\u4f4d\u7f6e","privacy_locationstr_m":"\u81ea\u52a8\u8bbe\u5b9a\u670d\u52a1\u5668\u533a\u57df\u7b49\u529f\u80fd\u3002","privacy_systemtitle_m":"\u7cfb\u7edf\u6743\u9650\u7ba1\u7406","privacy_systemstr_m":"\u4ec5\u80fd\u67e5\u8be2\u5230\u5df2\u6388\u6743\u7684\u7cfb\u7edf\u6743\u9650","privacy_gosystembtn_m":"\u524d\u5f80\u7cfb\u7edf\u8bbe\u7f6e","privacy_thirdpartiesitem_m":"\u7b2c\u4e09\u65b9\u4fe1\u606f\u6570\u636e\u5171\u4eab","privacy_directorytitle_m":"\u5f00\u9ed1\u5566\u7b2c\u4e09\u65b9\u5408\u4f5c\u76ee\u5f55","user_aboutuseragreementitem_m":"\u7528\u6237\u534f\u8bae","user_aboutprivacyagreementitem_m":"\u9690\u79c1\u653f\u7b56","user_checkitem_m":"\u68c0\u67e5\u66f4\u65b0","voice_wyyrestarttitle":"\u7f51\u6613\u4e91\u97f3\u4e50\u9700\u8981\u91cd\u542f","voice_wyyrestarstr":"\u6bcf\u6b21\u9009\u62e9\u7f51\u6613\u4e91\u97f3\u4e50\u4f5c\u4e3a\u4f34\u594f\u6e90\u65f6\uff0c\u5f00\u9ed1\u5566\u90fd\u9700\u8981\u91cd\u542f\u5b83\u3002","voice_wyyrestarbtn":"\u6211\u77e5\u9053\u4e86","update_updatetitle":"\u5f00\u9ed1\u5566 %s \u51c6\u5907\u5c31\u7eea","update_updatetip":"\u53d1\u73b0\u65b0\u7248\u672c %s \u70b9\u51fb\u67e5\u770b","update_updatebtn":"\u91cd\u542f\u66f4\u65b0","voice_canthearstr":"\u6ca1\u6709\u58f0\u97f3\uff1f","voice_clickdebugbtn":"\u70b9\u6211\u8bd5\u9ea6","voice_nodevicetitle":"\u6ca1\u6709\u627e\u5230\u4f60\u7684\u9ea6\u514b\u98ce","voice_nodevicestr":"\u65e0\u6cd5\u627e\u5230\u4f60\u7535\u8111\u4e0a\u7684\u9ea6\u514b\u98ce\uff0c{%l\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b\u5e2e\u52a9}\u3002","privacy_agreementupdate1title":"\u7528\u6237\u534f\u8bae\u548c\u9690\u79c1\u534f\u8bae\u66f4\u65b0","privacy_agreementupdate2title":"\u7528\u6237\u534f\u8bae\u66f4\u65b0","privacy_agreementupdate3title":"\u9690\u79c1\u534f\u8bae\u66f4\u65b0","privacy_agreementupdate1str":"\u611f\u8c22\u4f60\u4fe1\u4efb\u5e76\u4f7f\u7528\u5f00\u9ed1\u5566\uff01\u6211\u4eec\u6839\u636e\u6700\u65b0\u7684\u6cd5\u5f8b\u6cd5\u89c4\u3001\u76d1\u7ba1\u653f\u7b56\u8981\u6c42\uff0c\u66f4\u65b0\u4e86{%l\u300a\u5f00\u9ed1\u5566\u8bed\u97f3\u8f6f\u4ef6\u8bb8\u53ef\u670d\u52a1\u534f\u8bae\u300b}\u548c{%l\u300a\u5f00\u9ed1\u5566\u9690\u79c1\u4fdd\u62a4\u653f\u7b56\u300b}\u8bf7\u8ba4\u771f\u9605\u8bfb\u3002\u5982\u4f60\u540c\u610f\uff0c\u8bf7\u70b9\u51fb\u201c\u540c\u610f\u201d\u540e\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\uff0c\u6211\u4eec\u4f9d\u6cd5\u5c3d\u5168\u529b\u4fdd\u62a4\u4f60\u7684\u4e2a\u4eba\u4fe1\u606f\u3002","privacy_agreementupdate2str":"\u611f\u8c22\u4f60\u4fe1\u4efb\u5e76\u4f7f\u7528\u5f00\u9ed1\u5566\uff01\u6211\u4eec\u6839\u636e\u6700\u65b0\u7684\u6cd5\u5f8b\u6cd5\u89c4\u3001\u76d1\u7ba1\u653f\u7b56\u8981\u6c42\uff0c\u66f4\u65b0\u4e86{%l\u300a\u5f00\u9ed1\u5566\u8bed\u97f3\u8f6f\u4ef6\u8bb8\u53ef\u670d\u52a1\u534f\u8bae\u300b}\u8bf7\u8ba4\u771f\u9605\u8bfb\u3002\u5982\u4f60\u540c\u610f\uff0c\u8bf7\u70b9\u51fb\u201c\u540c\u610f\u201d\u540e\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\uff0c\u6211\u4eec\u4f9d\u6cd5\u5c3d\u5168\u529b\u4fdd\u62a4\u4f60\u7684\u4e2a\u4eba\u4fe1\u606f\u3002","privacy_agreementupdate3str":"\u611f\u8c22\u4f60\u4fe1\u4efb\u5e76\u4f7f\u7528\u5f00\u9ed1\u5566\uff01\u6211\u4eec\u6839\u636e\u6700\u65b0\u7684\u6cd5\u5f8b\u6cd5\u89c4\u3001\u76d1\u7ba1\u653f\u7b56\u8981\u6c42\uff0c\u66f4\u65b0\u4e86{%l\u300a\u5f00\u9ed1\u5566\u9690\u79c1\u4fdd\u62a4\u653f\u7b56\u300b}\u8bf7\u8ba4\u771f\u9605\u8bfb\u3002\u5982\u4f60\u540c\u610f\uff0c\u8bf7\u70b9\u51fb\u201c\u540c\u610f\u201d\u540e\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1\uff0c\u6211\u4eec\u4f9d\u6cd5\u5c3d\u5168\u529b\u4fdd\u62a4\u4f60\u7684\u4e2a\u4eba\u4fe1\u606f\u3002","privacy_agreementupdateokbtn":"\u540c\u610f","privacy_agreementupdatenobtn":"\u6682\u4e0d\u4f7f\u7528","kmd_blodtip":"\u52a0\u7c97","kmd_italictip":"\u659c\u4f53","kmd_strikethroughtip":"\u5220\u9664\u7ebf","kmd_underlinetip":"\u4e0b\u5212\u7ebf","kmd_linktip":"\u94fe\u63a5","kmd_quotetip":"\u5f15\u7528","kmd_spoilertip":"\u5267\u900f","kmd_inlinecodetip":"\u5355\u884c\u4ee3\u7801\u5757","kmd_codeblocktip":"\u4ee3\u7801\u5757","kmd_richtexttip":"\u5bcc\u6587\u672c\u8f93\u5165","channel_syncpermissiontitle":"\u540c\u6b65\u6743\u9650\u8bbe\u7f6e\uff1f","channel_syncpermissionstr":"\u4f60\u79fb\u52a8\u4e86\u9891\u9053\uff0c\u662f\u5426\u5c06%s\u7684\u6743\u9650\u8c03\u6574\u4e3a\u4e0e%s1\u540c\u6b65\u4e00\u81f4\uff1f","channel_syncpermissionstr_m":"\u662f\u5426\u5c06 %s \u7684\u6743\u9650\u8c03\u6574\u4e3a\u4e0e %s1 \u540c\u6b65\u4e00\u81f4\uff1f","channel_syncpermissionbtn":"\u6743\u9650\u540c\u6b65","channel_createtexttitle":"\u521b\u5efa\u6587\u5b57\u9891\u9053","channel_createvoicetitle":"\u521b\u5efa\u8bed\u97f3\u9891\u9053","channel_createtypelab":"\u9891\u9053\u7c7b\u578b","message_downloadstr":"\u70b9\u51fb\u4e0b\u8f7d","message_uploadsusstr":"\u4e0a\u4f20\u6210\u529f","voice_mutestr":"\u4f60\u5df2\u88ab\u5f53\u524d\u670d\u52a1\u5668\u95ed\u9ea6\uff0c\u5982\u9700\u89e3\u9664\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u3002","voice_deafenstr":"\u4f60\u5df2\u88ab\u5f53\u524d\u670d\u52a1\u5668\u9759\u97f3\uff0c\u5982\u9700\u89e3\u9664\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u3002","invite_joinedpsstr":"\u5df2\u52a0\u5165\u300c%s\u300d","sever_ruledelstr":"\u4f60\u786e\u5b9a\u8981\u5220\u9664 %s \u5417\uff1f","voice_unmutedstr":"\u53d6\u6d88\u95ed\u9ea6\u6210\u529f","voice_undeafenstr":"\u53d6\u6d88\u9759\u97f3\u6210\u529f","voice_pushtotalkstr":"\u9700\u8981\u6309\u952e\u8bf4\u8bdd","voice_noserverstr":"\u4f60\u8fd8\u6682\u672a\u52a0\u5165\u670d\u52a1\u5668","voice_noseatavailablestr":"\u5f53\u524d\u53d1\u8a00\u533a\u5e2d\u4f4d\u5df2\u6ee1\uff0c\u65e0\u6cd5\u901a\u8fc7","voice_noauthtospeakstr":"\u4f60\u5728\u5f53\u524d\u9891\u9053\u6ca1\u6709\u8bf4\u8bdd\u6743\u9650\uff0c\u5982\u9700\u6743\u9650\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u3002","voice_noauthtoconnecstr":"\u60a8\u6ca1\u6709\u8fde\u63a5\u8bed\u97f3\u9891\u9053\u7684\u6743\u9650","voice_noauthtochangestr":"\u60a8\u6ca1\u6709\u6743\u9650\u66f4\u6362\u6a21\u5f0f","voice_noaccessmicstr":"\u6ca1\u6709\u8bbf\u95ee\u9ea6\u514b\u98ce\u7684\u6743\u9650","voice_mutedstr":"\u95ed\u9ea6\u6210\u529f","voice_movedstr":"\u79fb\u52a8\u6210\u529f","voice_modeselectedstr":"\u5df2\u7ecf\u9009\u62e9\u5f53\u524d\u6a21\u5f0f","voice_invservermutedstr":"\u8be5\u7528\u6237\u88ab\u670d\u52a1\u5668\u95ed\u9ea6\uff0c\u8bf7\u5148\u53d6\u6d88\u540e\u5728\u9080\u8bf7","voice_hmdisconnectedstr":"\u4e0b\u9ea6\u6210\u529f","voice_headphonemodestr":"\u8033\u673a\u6a21\u5f0f\uff0c\u4e0d\u80fd\u70b9\u51fb","voice_failtojoinstr":"\u52a0\u5165\u5931\u8d25","voice_disconnectedstr":"\u65ad\u5f00\u6210\u529f","voice_deafenedstr":"\u9759\u97f3\u6210\u529f","voice_commentedstr":"\u8bc4\u4ef7\u6210\u529f","voice_chatinvstr":"\u53d1\u8a00\u9080\u8bf7%s","voice_chatinvrecievestr":"%s\u5411\u4f60\u53d1\u8d77\u8be5\u9891\u9053\u53d1\u8a00\u9080\u8bf7\uff0c\u662f\u5426\u63a5\u53d7\uff1f","voice_chanpushtotalkswitchstr":"\u6b64\u9891\u9053\u8981\u6c42\u5fc5\u987b\u6309\u952e\u8bf4\u8bdd\uff0c\u5df2\u5e2e\u4f60\u81ea\u52a8\u5207\u6362\u4e3a\u6309\u952e\u8bf4\u8bdd\u6a21\u5f0f\u3002","voice_chanpushtotalkstr":"\u6b64\u9891\u9053\u8981\u6c42\u5fc5\u987b\u6309\u952e\u8bf4\u8bdd\uff0c\u4f60\u53ea\u6709\u5c06\u8bed\u97f3\u8f93\u5165\u6a21\u5f0f\u5207\u6362\u4e3a\u6309\u952e\u8bf4\u8bdd\uff0c\u624d\u53ef\u4ee5\u6b63\u5e38\u8bed\u97f3\u804a\u5929\u3002","voice_channelmodechangedstr":"\u9891\u9053\u5df2\u66f4\u6539\u4e3a\u201d%s\u201d","voice_btscounsupportedstr":"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u84dd\u7259\u8bbe\u5907\u4e0d\u652f\u6301SCO\u534f\u8bae\uff0c\u56e0\u6b64\u65e0\u6cd5\u8fdb\u884c\u8bed\u97f3\u901a\u8bdd","user_updatesuccessstr":"\u4fee\u6539\u6210\u529f","user_failacquireinfostr":"\u7528\u6237\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5","user_accountcanceledstr":"\u7528\u6237\u5df2\u6ce8\u9500","user_accessauthinfofailedstr":"\u83b7\u53d6\u6388\u6743\u4fe1\u606f\u5931\u8d25","upload_uploadfailstr":"\u4e0a\u4f20\u5931\u8d25","upload_takephotobtn":"\u62cd\u7167","upload_sizelimitstr":"\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7%sM","upload_selectimgstr":"\u8bf7\u9009\u62e9\u56fe\u7247","upload_resourcesstr":"\u8d44\u6e90\u9519\u8bef","upload_reselectedstr":"\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9","upload_readerrorstr":"\u6587\u4ef6\u8bfb\u53d6\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9","upload_photoalbumbtn":"\u7167\u7247\u56fe\u5e93","upload_oversizestr":"\u6587\u4ef6\u8d85\u8fc7%sM,\u8bf7\u91cd\u65b0\u9009\u62e9","upload_oversizedstr":"\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7%s","upload_numimgoversizedstr":"\u6709%s\u5f20\u56fe\u7247\u539f\u56fe\u8d85\u8fc7\u4e86%s1M","upload_noawaitingdlstr":"\u6682\u65e0\u4e0b\u8f7d\u6587\u4ef6","upload_noauthuploadstr":"\u4f60\u6ca1\u6709\u6743\u9650\u4e0a\u4f20\u6587\u4ef6","upload_noaccesscamstr":"\u6ca1\u6709\u8bbf\u95ee\u76f8\u673a\u7684\u6743\u9650","upload_noaccessalbumstr":"\u6ca1\u6709\u8bbf\u95ee\u76f8\u518c\u7684\u6743\u9650","upload_filesavepsstr":"\u6587\u4ef6\u5df2\u4fdd\u5b58\u5230 %s","upload_failedstr":"\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25","upload_dlsuccessstr":"%s\u4e0b\u8f7d\u6210\u529f","upload_dlfailedstr":"%s\u4e0b\u8f7d\u5931\u8d25","upload_checkalbumstr":"\u672a\u83b7\u53d6\u5230\u56fe\u7247\uff0c\u8bf7\u68c0\u67e5\u672c\u5730\u76f8\u518c","update_updatenowbtn":"\u7acb\u5373\u66f4\u65b0","update_acceptbtn":"\u63a5\u53d7","update_rejectbtn":"\u62d2\u7edd","update_newversionstr":"\u53d1\u73b0\u65b0\u7248\u672c","update_latestversionstr":"\u5df2\u662f\u6700\u65b0\u7248\u672c","update_downloadfailedstr":"\u4e0b\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8bbe\u7f6e\u3001\u5b58\u50a8\u6743\u9650\u6216\u5230\u5b98\u7f51\u4e0b\u8f7d\u66f4\u65b0","share_sharetitle":"\u5206\u4eab","sever_uperlimit32str":"\u4e0d\u8d85\u8fc732\u4e2a\u5b57\u7b26","sever_unblockuserstr":"\u5c06\u7528\u6237\u79fb\u51fa\u9ed1\u540d\u5355","sever_unblockuserconfirmstr":"\u4f60\u786e\u5b9a\u8981\u5c06 %s \u79fb\u51fa\u9ed1\u540d\u5355\u5417\uff1f","sever_turnoffidstr":"\u5173\u95ed\u670d\u52a1\u5668ID\u540e\uff0c\u73b0\u6709\u7684\u81ea\u5b9a\u4e49\u670d\u52a1\u5668ID\u5c06\u88ab\u91ca\u653e\uff0c\u786e\u8ba4\u8981\u73b0\u5728\u5173\u95ed\u5417\uff1f","sever_transferstr":"\u4f60\u786e\u5b9a\u8981\u8f6c\u8ba9%s\u670d\u52a1\u5668\u7684\u6240\u6709\u6743\u5417\uff1f\u8f6c\u8ba9\u540e\u4f60\u5c06\u5931\u53bb\u670d\u52a1\u5668\u4e3b\u7684\u5168\u90e8\u6743\u9650\u3002","sever_transfernoticstr":"%s\u5df2\u6210\u4e3a\u65b0\u7684\u670d\u52a1\u5668\u4e3b\u3002","sever_succtokickstr":"\u8e22\u51fa\u6210\u529f","sever_succtoblockstr":"\u52a0\u5165\u9ed1\u540d\u5355\u6210\u529f","sever_serverinfofailstr":"\u670d\u52a1\u5668\u4fe1\u606f\u52a0\u8f7d\u5931\u8d25,\u8bf7\u91cd\u8bd5","sever_safemodeonstr":"\u670d\u52a1\u5668\u5df2\u5f00\u542f\u5b89\u5168\u8bbe\u7f6e%s","sever_ruleslimitstr":"\u89c4\u5219\u6570\u5df2\u8fbe\u5230\u4e0a\u9650","sever_rulesavedstr":"\u5f53\u524d\u89c4\u5219\u5df2\u7f16\u8f91\u672a\u4fdd\u5b58","sever_removeuserauthstr":"\u79fb\u9664\u89d2\u8272\u6743\u9650","sever_removememauthstr":"\u79fb\u9664\u6210\u5458\u6743\u9650","sever_removeauthconfirmstr":"\u4f60\u786e\u5b9a\u8981\u79fb\u9664 %s \u6743\u9650\u5417","sever_remainsamestr":"\u4fdd\u7559\u5f53\u524d","sever_quittedstr":"\u5df2\u9000\u51fa\u670d\u52a1\u5668","sever_oldversionstr":"\u76ee\u524d\u4ec5\u5728\u6700\u65b0\u7248pc\u7aef\u652f\u6301\u66f4\u6539\u63a8\u8350\u670d\u52a1\u5668\u4fe1\u606f","sever_nullrulenamestr":"\u89c4\u5219\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a","sever_namelowerlimitstr":"\u670d\u52a1\u5668\u540d\u79f0\u5e94\u8be5\u5305\u542b\u81f3\u5c112\u4e2a\u5b57\u7b26","sever_lowerlimit6str":"\u6700\u5c0f\u5305\u542b6\u4e2a\u5b57\u7b26","sever_inputservernamestr":"\u8bf7\u8f93\u5165\u670d\u52a1\u5668\u540d\u79f0","sever_illegalnamestr":"\u670d\u52a1\u5668\u540d\u79f0\u8f93\u5165\u9519\u8bef","sever_illegalformstr":"\u4e0d\u7b26\u5408\u683c\u5f0f\u89c4\u8303","sever_idoutdatedstr":"\u670d\u52a1\u5668ID\u5931\u6548\u63d0\u793a","sever_idoccupiedstr":"\u670d\u52a1\u5668ID\u91cd\u590d\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165","sever_failedtokickstr":"\u8e22\u51fa\u5931\u8d25","sever_failedtoblockstr":"\u52a0\u5165\u9ed1\u540d\u5355\u5931\u8d25","sever_denynoauthstr":"\u64cd\u4f5c\u5931\u8d25,\u6ca1\u6709\u76f8\u5e94\u6743\u9650","sever_deletedstr":"\u670d\u52a1\u5668\u5df2\u5220\u9664","sever_asdeleteconfirmstr":"\u4f60\u786e\u5b9a\u5220\u9664\u670d\u52a1\u5668 %s \u5417?","server_verifiedstr":"\u5ba1\u6838\u672a\u901a\u8fc7","server_turnoffpvmsgbtn":"\u5173\u95ed\u79c1\u4fe1","server_transfersuccessstr":"\u8f6c\u8ba9\u6210\u529f","server_transferconfirmstr":"\u786e\u8ba4\u8f6c\u8ba9","server_transferbtn":"\u8f6c\u8ba9","server_rightslidestr":"\u8bf7\u53f3\u6ed1\u9009\u62e9\u52a0\u5165\u4e00\u4e2a\u670d\u52a1\u5668","server_quitconfirmstr":"\u60a8\u786e\u5b9a\u8981\u9000\u51fa\u300c%s\u300d\u5417\uff1f","server_nowordchannelstr":"\u65e0\u6587\u5b57\u9891\u9053","server_namecdstr":"%s\u5929\u540e\u53ef\u66f4\u6539","channel_confirmtransferasurestr":"\u4f60\u786e\u5b9a\u8981\u5220\u9664 %s \u5417\uff1f\u8be5\u64cd\u4f5c\u65e0\u6cd5\u64a4\u9500\uff01","profile_wordlimit500str":"\u4e2a\u4eba\u7b80\u4ecb\u9700\u5c0f\u4e8e500\u5b57","privacy_leakagestr":"\u4e0d\u4f1a\u6cc4\u6f0f\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f","pay_successstr":"\u652f\u4ed8\u6210\u529f","pay_noproductinfostr":"\u65e0\u6cd5\u83b7\u53d6\u4ea7\u54c1\u4fe1\u606f\uff0c\u8d2d\u4e70\u5931\u8d25\u3002","pay_failstr":"\u652f\u4ed8\u5931\u8d25","pay_canceledstr":"\u652f\u4ed8\u53d6\u6d88","message_unabletoeditbtn":"\u5f53\u524d\u7248\u672c\u6682\u4e0d\u652f\u6301\u7f16\u8f91\u6b64\u6d88\u606f","message_stickymsgcanceledstr":"\u53d6\u6d88\u7f6e\u9876","message_slowmodeenablestr":"\u6162\u901f\u6a21\u5f0f\u5f00\u542f","message_sendingstr":"\u53d1\u9001\u4e2d","message_savetoalbumbtn":"\u4fdd\u5b58\u5230\u76f8\u518c","message_resentbtn":"\u91cd\u65b0\u53d1\u9001","message_reactionbtn":"\u67e5\u770b\u56de\u5e94","message_quotemsgbtn":"\u5f15\u7528\u56de\u590d","message_nullmsgstr":"\u4e0d\u53ef\u53d1\u9001\u7a7a\u767d\u6d88\u606f!","message_nostinkymsgstr":"\u65e0\u7f6e\u9876\u6d88\u606f","message_nostickymsgstr":"\u6682\u65e0\u7f6e\u9876","message_msgremovalstr":"\u8be5\u6d88\u606f\u5c06\u4ece\u670d\u52a1\u5668\u4e2d\u6c38\u4e45\u5220\u9664\uff0c\u5220\u9664\u540e\u8be5\u6d88\u606f\u5bf9\u4efb\u4f55\u4eba\u4e0d\u53ef\u89c1\u3002","message_linkremovalpmstr":"\u8be5\u94fe\u63a5\u89e3\u6790\u5c06\u4ece\u670d\u52a1\u5668\u4e2d\u6c38\u4e45\u5220\u9664\uff0c\u5220\u9664\u540e\u8be5\u94fe\u63a5\u89e3\u6790\u5bf9\u4efb\u4f55\u4eba\u4e0d\u53ef\u89c1","message_linkdeletedstr":"\u5220\u9664\u94fe\u63a5\u89e3\u6790","message_linkdeleteconfirmstr":"\u4f60\u786e\u5b9a\u5220\u9664\u6b21\u94fe\u63a5\u89e3\u6790\u4e48\uff1f","message_failtoloadvoicestr":"\u97f3\u9891\u52a0\u8f7d\u5931\u8d25","message_delstinkymsgstr":"\u5220\u9664\u7f6e\u9876\u6d88\u606f","message_delstinkymsgconfirmstr":"\u4f60\u786e\u5b9a\u5220\u9664\u6b64\u7f6e\u9876\u6d88\u606f\u5462\uff1f","message_avoidchannelatmsgstr":"\u4e0d\u5728\u8be5\u9891\u9053\u5185\u7684\u7528\u6237\u65e0\u6cd5\u6536\u5230\u88ab@\u6d88\u606f\u3002","message_atmsgbtn":"\u63d0\u53ca","logingiveupbtn":"\u653e\u5f03\u767b\u5f55","login_verifiedstr":"\u9a8c\u8bc1\u6210\u529f!","login_recoverybtn":"\u6062\u590d\u8d26\u53f7","login_phrasestr":"\u8bf7\u586b\u5199\u6210\u8bed","login_phonenumchangedstr":"\u7ed1\u5b9a\u624b\u673a\u53f7\u5df2\u66f4\u6539","login_logoutbtn":"\u6ce8\u9500","login_loginstr":"\u767b\u5f55\u6210\u529f","login_confirmstr":"\u786e\u8ba4\u767b\u5f55","login_clientnotinstallstr":"\u5ba2\u6237\u7aef\u672a\u5b89\u88c5","login_cancelcdstr":"\u8be5\u8d26\u53f7\u6b63\u5728\u6ce8\u9500\u51b7\u9759\u671f\u4e2d\uff0c\u518d\u6b21\u767b\u5f55\u5c06\u6062\u590d\u8d26\u53f7\u3002\u662f\u5426\u7ee7\u7eed\u767b\u5f55\uff1f","login_authcodesentstr":"\u5df2\u53d1\u9001\u9a8c\u8bc1\u7801","login_agreementcbstr":"\u8bf7\u9605\u8bfb\u5e76\u52fe\u9009\u534f\u8bae","invite_voicechaninvstr":"\u8bed\u97f3\u9891\u9053\u9080\u8bf7","invite_sharesusstr":"\u5206\u4eab\u6210\u529f","invite_sentstr":"\u9080\u8bf7\u53d1\u9001\u6210\u529f","invite_nullinvlinkstr":"\u9080\u8bf7\u94fe\u63a5\u6216\u670d\u52a1\u5668ID\u4e0d\u80fd\u4e3a\u7a7a","invite_noinvlinkstr":"\u65e0\u9080\u8bf7\u94fe\u63a5","invite_noaccessstr":"\u4f60\u6ca1\u6709\u6743\u9650\u52a0\u5165\u8be5\u9891\u9053","invite_invsentstr":"\u5df2\u53d1\u9001\u9080\u8bf7","invite_invrecieveoutdatedstr":"\u60a8\u6536\u5230\u4e86\u4e00\u4e2a\u9080\u8bf7\uff0c\u4f46\u662f...","invite_invoutdatedstr":"\u9080\u8bf7\u65e0\u6548","invite_copysusstr":"\u9080\u8bf7\u94fe\u63a5\u5df2\u590d\u5236","invite_copiedstr":"\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f","group_nullnamestr":"\u5206\u7ec4\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a","group_groupbtn":"\u5206\u7ec4","general_updatesuccstr":"\u66f4\u65b0\u6210\u529f","general_tempunsuppotedstr":"\u6682\u4e0d\u652f\u6301\u6b64\u56fe\u7247","general_sentstr":"\u53d1\u9001\u6210\u529f","general_savedstr":"\u4fdd\u5b58\u6210\u529f","general_retrystr":"\u8bf7\u91cd\u8bd5","general_quitconfirmstr":"\u786e\u8ba4\u9000\u51fa","general_plzinputstr":"\u8bf7\u8f93\u5165\u5185\u5bb9","general_nullinfostr":"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a","general_noticestr":"\u63d0\u793a","general_interneterrorstr":"\u7f51\u7edc\u9519\u8bef","general_interneterrormsgstr":"\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc","general_failtodeletestr":"\u5220\u9664\u5931\u8d25","general_failedtosavestr":"\u4fdd\u5b58\u5931\u8d25","general_failedtogetfilestr":"\u83b7\u53d6\u6587\u4ef6\u5931\u8d25","general_failedtoapplystr":"\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5","general_deletedsuccstr":"\u5220\u9664\u6210\u529f","general_dataerrorstr":"\u6570\u636e\u9519\u8bef!","general_currenttimestr":"\u5f53\u524d\u65f6\u95f4\uff0c\u4e0d\u53ef\u4fee\u6539","general_cantdealappstr":"\u65e0\u6cd5\u5904\u7406\u6b64\u8bf7\u6c42","general_appsentstr":"\u8bf7\u6c42\u53d1\u9001\u6210\u529f","general_addsuccstr":"\u6dfb\u52a0\u6210\u529f","friends_unblockbtn":"\u89e3\u9664\u5c4f\u853d","friends_reportsusstr":"\u4e3e\u62a5\u6210\u529f","friends_reported24hoursstr":"\u4e3e\u62a5\u6210\u529f,\u7ba1\u7406\u5458\u4f1a\u572824\u5c0f\u5185\u5904\u7406!","friends_nopvmsgstr":"\u6ca1\u6709\u79c1\u804a\u6d88\u606f","friends_msgrejectstr":"\u4f60\u5c06\u65e0\u6cd5\u63a5\u6536\u5230\u8be5\u7528\u6237\u5411\u4f60\u53d1\u9001\u7684\u79c1\u4fe1","friends_keeprecordstr":"\u4f60\u4e0e\u8be5\u597d\u53cb\u7684\u804a\u5929\u8bb0\u5f55\u4e0d\u4f1a\u5220\u9664","friends_deniedstr":"\u5df2\u62d2\u7edd\u8bf7\u6c42","friends_deletestr":"\u786e\u5b9a\u5220\u9664\u8be5\u7528\u6237\uff1f","friends_deletedstr":"\u5220\u9664\u597d\u53cb\u6210\u529f","friends_deleteconfirmstr":"\u786e\u5b9a\u5220\u9664\u597d\u53cb","friends_blockconfirmstr":"\u786e\u5b9a\u5c4f\u853d\u8be5\u7528\u6237\uff1f","friends_blockndeletestr":"\u5c4f\u853d\u6b64\u7528\u6237\u540c\u65f6\u5c06\u4ece\u4f60\u7684\u597d\u53cb\u5217\u8868\u4e2d\u5220\u9664","friends_acceptedstr":"\u5df2\u63a5\u53d7\u8bf7\u6c42","friend_strmsgdisabledstr":"\u5bf9\u65b9\u4e0d\u5141\u8bb8\u964c\u751f\u4eba\u53d1\u9001\u79c1\u4fe1","friend_privatmsgstr":"\u79c1\u804a\u4e2d\u4e0d\u80fd\u63d0\u53ca\u6210\u5458","friend_privatchannelstr":"\u79c1\u804a\u4e2d\u4e0d\u80fd\u63d0\u53ca\u6587\u5b57\u9891\u9053","friend_blocksusstr":"\u5c4f\u853d\u6210\u529f","friend_blockremovesusstr":"\u89e3\u9664\u5c4f\u853d\u6210\u529f","feedback_sheetsubmitedstr":"\u5de5\u5355\u63d0\u4ea4\u6210\u529f\uff0c\u611f\u8c22\u4f60\u7684\u53cd\u9988\u3002","feedback_savesheetstr":"\u5de5\u5355\u5185\u5bb9\u4e0d\u4f1a\u88ab\u4fdd\u5b58","feedback_inputprobserverstr":"\u8bf7\u9009\u62e9\u53d1\u751f\u95ee\u9898\u7684\u670d\u52a1\u5668","feedback_failsubmitsheetstr":"\u5de5\u5355\u63d0\u4ea4\u5931\u8d25","explorer_outsidelinkstr":"\u4f60\u5373\u5c06\u79bb\u5f00\u5f00\u9ed1\u5566\uff0c\u8bf7\u6ce8\u610f\u4f60\u7684\u5e10\u53f7\u5b89\u5168\u3002","explorer_leavestr":"\u60a8\u5373\u5c06\u79bb\u5f00\u6d4f\u89c8\u5668","emoji_noserverstickerstr":"\u672a\u4e0a\u4f20\u670d\u52a1\u5668\u8868\u60c5","emoji_noavailablegifstr":"\u52a8\u6001\u8868\u60c5\u6682\u65e0\u7a7a\u4f4d","emoji_noaddedstickerstr":"\u76ee\u524d\u8fd8\u672a\u6dfb\u52a0\u4efb\u4f55\u8868\u60c5","emoji_namelimitstr":"\u670d\u52a1\u5668\u8868\u60c5\u540d\u79f0\u957f\u5ea6\u4e0d\u53ef\u5c11\u4e8e2\u4e2a\u5b57\u7b26","emoji_allstickeraddedstr":"\u8868\u60c5\u5df2\u5168\u90e8\u6dfb\u52a0","channel_turnoffchanpwstr":"\u786e\u8ba4\u5173\u95ed\u9891\u9053\u5bc6\u7801","channel_switchchanmodestr":"\u5207\u6362\u9891\u9053\u6a21\u5f0f","channel_nullstr":"\u9891\u9053\u4e3a\u7a7a","channel_clearchanpwstr":"\u5173\u95ed\u540e\u5f53\u524d\u5bc6\u7801\u4f1a\u88ab\u6e05\u7a7a","account_wrongpwstr":"\u5bc6\u7801\u8f93\u5165\u9519\u8bef!","account_unlowerlimitstr":"\u7528\u6237\u540d\u4e0d\u80fd\u5c11\u4e8e\u4e24\u4f4d","account_unlink3rdaccstr":"\u70b9\u51fb \u786e\u5b9a \u7ee7\u7eed\u7ed1\u5b9a\u4f1a\u53d6\u6d88\u539f\u7b2c\u4e09\u65b9\u8d26\u53f7\u7ed1\u5b9a\uff0c\u5e76\u8fdb\u5165\u539f\u624b\u673a\u53f7\u8d26\u53f7","account_pwupdatedstr":"\u5bc6\u7801\u5df2\u66f4\u65b0","account_portraitoversiedstr":"\u4e0a\u4f20\u5934\u50cf\u4e0d\u53ef\u5927\u4e8e%sM","account_phoneusedstr":"\u8be5\u624b\u673a\u5df2\u7ed1\u5b9a\u8fc7%s","account_nullpwstr":"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a","account_nameupperlimit2str":"\u6635\u79f0\u5e94\u8be5\u5305\u542b\u81f3\u5c112\u4e2a\u5b57\u7b26\u3002","account_cancelconfirmstr":"\u786e\u8ba4\u6ce8\u9500","account_canagreementstr":"\u8bf7\u9605\u8bfb\u5e76\u540c\u610f\u6ce8\u9500\u987b\u77e5","account_buffstr":"\u4f60\u76ee\u524d\u4ecd\u5904\u4e8eBUFF\u52a0\u6301\u671f\u95f4\uff0c\u5e76\u6709\u672a\u4f7f\u7528\u7684\u670d\u52a1\u5668\u52a9\u529b\u5305\u3002\u6ce8\u9500\u540eBUFF\u6743\u76ca\u5c06\u88ab\u53d6\u6d88\uff0c\u52a9\u529b\u5305\u5c06\u88ab\u6e05\u9664\uff0c\u662f\u5426\u786e\u5b9a\u6ce8\u9500\uff1f","account_buffremovalstr":"\u4f60\u76ee\u524d\u4ecd\u5904\u4e8eBUFF\u52a0\u6301\u671f\u95f4\u3002\u6ce8\u9500\u540eBUFF\u6743\u76ca\u5c06\u88ab\u53d6\u6d88\uff0c\u662f\u5426\u786e\u5b9a\u6ce8\u9500\uff1f","account_boosterstr":"\u4f60\u76ee\u524d\u4ecd\u6709\u672a\u4f7f\u7528\u7684\u670d\u52a1\u5668\u52a9\u529b\u5305\u3002\u6ce8\u9500\u540e\u52a9\u529b\u5305\u5c06\u88ab\u6e05\u9664\uff0c\u662f\u5426\u786e\u5b9a\u6ce8\u9500\uff1f","country_cnitem":"\u4e2d\u56fd","country_usitem":"\u7f8e\u56fd","country_jpitem":"\u65e5\u672c","country_hkitem":"\u4e2d\u56fd\u9999\u6e2f","country_moitem":"\u4e2d\u56fd\u6fb3\u95e8","country_twitem":"\u4e2d\u56fd\u53f0\u6e7e","country_myitem":"\u9a6c\u6765\u897f\u4e9a","country_auitem":"\u6fb3\u5927\u5229\u4e9a","country_caitem":"\u52a0\u62ff\u5927","country_gbitem":"\u82f1\u56fd","country_sgitem":"\u65b0\u52a0\u5761","country_deitem":"\u5fb7\u56fd","country_ruitem":"\u4fc4\u7f57\u65af","country_egitem":"\u57c3\u53ca","country_zaitem":"\u5357\u975e","country_gritem":"\u5e0c\u814a","country_nlitem":"\u8377\u5170","country_beitem":"\u6bd4\u5229\u65f6","country_fritem":"\u6cd5\u56fd","country_esitem":"\u897f\u73ed\u7259","country_huitem":"\u5308\u7259\u5229","country_ititem":"\u610f\u5927\u5229","country_roitem":"\u7f57\u9a6c\u5c3c\u4e9a","country_chitem":"\u745e\u58eb","country_atitem":"\u5965\u5730\u5229","country_dkitem":"\u4e39\u9ea6","country_seitem":"\u745e\u5178","country_noitem":"\u632a\u5a01","country_plitem":"\u6ce2\u5170","country_peitem":"\u79d8\u9c81","country_mxitem":"\u58a8\u897f\u54e5","country_cuitem":"\u53e4\u5df4","country_aritem":"\u963f\u6839\u5ef7","country_britem":"\u5df4\u897f","country_clitem":"\u667a\u5229","country_coitem":"\u54e5\u4f26\u6bd4\u4e9a","country_veitem":"\u59d4\u5185\u745e\u62c9","country_iditem":"\u5370\u5ea6\u5c3c\u897f\u4e9a","country_phitem":"\u83f2\u5f8b\u5bbe","country_nzitem":"\u65b0\u897f\u5170","country_thitem":"\u6cf0\u56fd","country_kzitem":"\u54c8\u8428\u514b\u65af\u5766","country_kritem":"\u97e9\u56fd","country_vnitem":"\u8d8a\u5357","country_tritem":"\u571f\u8033\u5176","country_initem":"\u5370\u5ea6","country_pkitem":"\u5df4\u57fa\u65af\u5766","country_afitem":"\u963f\u5bcc\u6c57","country_lkitem":"\u65af\u91cc\u5170\u5361","country_mmitem":"\u7f05\u7538","country_iritem":"\u4f0a\u6717","country_maitem":"\u6469\u6d1b\u54e5","country_dzitem":"\u963f\u5c14\u53ca\u5229\u4e9a","country_tnitem":"\u7a81\u5c3c\u65af","country_lyitem":"\u5229\u6bd4\u4e9a","country_gmitem":"\u5188\u6bd4\u4e9a","country_snitem":"\u585e\u5185\u52a0\u5c14","country_mlitem":"\u9a6c\u91cc","country_gnitem":"\u51e0\u5185\u4e9a","country_clvitem":"\u79d1\u7279\u8fea\u74e6","country_bfitem":"\u5e03\u57fa\u7eb3\u6cd5\u7d22","country_neitem":"\u5c3c\u65e5\u5c14","country_tgitem":"\u591a\u54e5","country_bjitem":"\u8d1d\u5b81","country_muitem":"\u6bdb\u91cc\u6c42\u65af","country_lritem":"\u5229\u6bd4\u91cc\u4e9a","country_slitem":"\u585e\u62c9\u5229\u6602","country_ghitem":"\u52a0\u7eb3","country_ngitem":"\u5c3c\u65e5\u5229\u4e9a","country_tditem":"\u4e4d\u5f97","country_cfitem":"\u4e2d\u975e\u5171\u548c\u56fd","country_cmitem":"\u5580\u9ea6\u9686","country_stitem":"\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4","country_gaitem":"\u52a0\u84ec","country_cgitem":"\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd","country_aoitem":"\u5b89\u54e5\u62c9","country_ascensionitem":"\u963f\u68ee\u677e\u5c9b","country_scitem":"\u585e\u820c\u5c14","country_sditem":"\u82cf\u4e39","country_etitem":"\u57c3\u585e\u4fc4\u6bd4\u4e9a","country_soitem":"\u7d22\u9a6c\u91cc","country_djitem":"\u5409\u5e03\u63d0","country_keitem":"\u80af\u5c3c\u4e9a","country_tzitem":"\u5766\u6851\u5c3c\u4e9a","country_ugitem":"\u4e4c\u5e72\u8fbe","country_biitem":"\u5e03\u9686\u8fea","country_mzitem":"\u83ab\u6851\u6bd4\u514b","country_zmitem":"\u8d5e\u6bd4\u4e9a","country_mgitem":"\u9a6c\u8fbe\u52a0\u65af\u52a0","country_zwitem":"\u6d25\u5df4\u5e03\u97e6","country_naitem":"\u7eb3\u7c73\u6bd4\u4e9a","country_mwitem":"\u9a6c\u62c9\u7ef4","country_lsitem":"\u83b1\u7d22\u6258","country_bwitem":"\u535a\u8328\u74e6\u7eb3","country_szitem":"\u65af\u5a01\u58eb\u5170","country_giitem":"\u76f4\u5e03\u7f57\u9640","country_ptitem":"\u8461\u8404\u7259","country_luitem":"\u5362\u68ee\u5821","country_ieitem":"\u7231\u5c14\u5170","country_isitem":"\u51b0\u5c9b","country_alitem":"\u963f\u5c14\u5df4\u5c3c\u4e9a","country_mtitem":"\u9a6c\u8033\u4ed6","country_cyitem":"\u585e\u6d66\u8def\u65af","country_fiitem":"\u82ac\u5170","country_bgitem":"\u4fdd\u52a0\u5229\u4e9a","country_ltitem":"\u7acb\u9676\u5b9b","country_lvitem":"\u62c9\u8131\u7ef4\u4e9a","country_eeitem":"\u7231\u6c99\u5c3c\u4e9a","country_mditem":"\u6469\u5c14\u591a\u74e6","country_amitem":"\u4e9a\u7f8e\u5c3c\u4e9a","country_byitem":"\u767d\u4fc4\u7f57\u65af","country_aditem":"\u5b89\u9053\u5c14\u5171\u548c\u56fd","country_mcitem":"\u6469\u7eb3\u54e5","country_smitem":"\u5723\u9a6c\u529b\u8bfa","country_uaitem":"\u4e4c\u514b\u5170","country_siitem":"\u65af\u6d1b\u6587\u5c3c\u4e9a","country_csitem":"\u6377\u514b","country_skitem":"\u65af\u6d1b\u4f10\u514b","country_liitem":"\u5217\u652f\u6566\u58eb\u767b","country_bzitem":"\u4f2f\u5229\u5179","country_gtitem":"\u74dc\u5730\u9a6c\u62c9","country_svitem":"\u8428\u5c14\u74e6\u591a","country_hnitem":"\u6d2a\u90fd\u62c9\u65af","country_niitem":"\u5c3c\u52a0\u62c9\u74dc","country_critem":"\u54e5\u65af\u8fbe\u9ece\u52a0","country_paitem":"\u5df4\u62ff\u9a6c","country_htitem":"\u6d77\u5730","country_boitem":"\u73bb\u5229\u7ef4\u4e9a","country_gyitem":"\u572d\u4e9a\u90a3","country_ecitem":"\u5384\u74dc\u591a\u5c14","country_gfitem":"\u6cd5\u5c5e\u572d\u4e9a\u90a3","country_pyitem":"\u5df4\u62c9\u572d","country_mqitem":"\u9a6c\u63d0\u5c3c\u514b","country_sritem":"\u82cf\u91cc\u5357","country_uyitem":"\u4e4c\u62c9\u572d","country_bnitem":"\u6587\u83b1","country_pgitem":"\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a","country_toitem":"\u6c64\u52a0","country_sbitem":"\u6240\u7f57\u95e8\u7fa4\u5c9b","country_fjitem":"\u6590\u6d4e","country_ckitem":"\u5e93\u514b\u7fa4\u5c9b","country_pomitem":"\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a","country_khitem":"\u67ec\u57d4\u5be8","country_laitem":"\u8001\u631d","country_bditem":"\u5b5f\u52a0\u62c9\u56fd","country_mvitem":"\u9a6c\u5c14\u4ee3\u592b","country_lbitem":"\u9ece\u5df4\u5ae9","country_joitem":"\u7ea6\u65e6","country_syitem":"\u53d9\u5229\u4e9a","country_iqitem":"\u4f0a\u62c9\u514b","country_kwitem":"\u79d1\u5a01\u7279","country_saitem":"\u6c99\u7279\u963f\u62c9\u4f2f","country_yeitem":"\u4e5f\u95e8","country_omitem":"\u963f\u66fc","country_aeitem":"\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd","country_ilitem":"\u4ee5\u8272\u5217","country_bhitem":"\u5df4\u6797","country_qaitem":"\u5361\u5854\u5c14","country_mnitem":"\u8499\u53e4","country_npitem":"\u5c3c\u6cca\u5c14","country_tjitem":"\u5854\u5409\u514b\u65af\u5766","country_tmitem":"\u571f\u5e93\u66fc\u65af\u5766","country_azitem":"\u963f\u585e\u62dc\u7586","country_geitem":"\u683c\u9c81\u5409\u4e9a","country_kgitem":"\u5409\u5c14\u5409\u65af\u65af\u5766","country_uzitem":"\u4e4c\u5179\u522b\u514b\u65af\u5766","country_bsitem":"\u5df4\u54c8\u9a6c","country_bbitem":"\u5df4\u5df4\u591a\u65af","country_aiitem":"\u5b89\u572d\u62c9\u5c9b","country_agitem":"\u5b89\u63d0\u74dc\u548c\u5df4\u5e03\u8fbe","country_caymanitem":"\u5f00\u66fc\u7fa4\u5c9b","country_bmitem":"\u767e\u6155\u5927\u7fa4\u5c9b","country_gditem":"\u683c\u6797\u7eb3\u8fbe","country_msitem":"\u8499\u7279\u585e\u62c9\u7279\u5c9b","country_guitem":"\u5173\u5c9b","country_lcitem":"\u5723\u9732\u897f\u4e9a","country_pritem":"\u6ce2\u591a\u9ece\u5404","country_doitem":"\u591a\u660e\u5c3c\u52a0\u5171\u548c\u56fd","country_ttitem":"\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5","country_jmitem":"\u7259\u4e70\u52a0","country_serbiaitem":"\u585e\u5c14\u7ef4\u4e9a\u5171\u548c\u56fd","country_mauritaniaitem":"\u6bdb\u91cc\u5854\u5c3c\u4e9a","cancel_link":"\u79fb\u9664\u94fe\u63a5","remove_style":"\u79fb\u9664\u6837\u5f0f"}'
      );
    },
    118: function (e) {
      e.exports = JSON.parse(
        '{"click_refresh":"Click Refresh","add":"Add","added":"Added","remove":"Remove","app_name":"Kaiheila","prompt":"Propmpt","confirm":"Confirm","ok":"OK","cancel":"Cancel","home_page":"My Home","friend":"Friend","add_friend":"Add friend","remove_friend":"Remove friend","remove_friend_description":"Are you sure you want to remove {{username}} from your friends list?","online":"Online","all":"All","requested":"Requested","request_to_be_friend":"Request to be friend","blocked":"Blocked","private_message":"Private Message","not_friend":"Uh...no friends yet.","not_online_friend":"You have no friends online at this time, go and call them to play!","not_pending_friend_requested":"There are no pending friend requests here.","not_blocked":"No one is on the blocked list.","request_send_success":"Request successfully","request_send_error":"Request failed","placeholder_username":"Enter username#0000","friend_request_error":"Friend request failed","send_friend_request":"Send friend request","require_username_identify":"Need username and Kaiheila tag to add friends","check_username_identify":"Check that the username and identify is spelled correctly","emoji_manage":"Emoji Manage","add_emoji":"Add emoji","emoji_manage_description":"Here you can add your favorite server emoji to the emoji bar.","emoji_added":"Emoji added","emoji_not_added":"Emoji not added","drag_modify_emoji_order":"Drag to modify the order of emoji","click_preview":"Click preview","preview":"Preview","static_emoji":"Emoji","gif_emoji":"GIF","guild_not_emoji":"The guild has not uploaded any emoji","emoji_all_added":"Emoji all added","want_use_emoji":"\u60f3\u8981\u4f53\u9a8c\u8868\u60c5\u7684\u9b45\u529b\u5417\uff1f","buy_vip_use_emoji":"\u6fc0\u6d3bBUFF\uff0c\u5373\u53ef\u4f7f\u7528\u4efb\u610f\u8868\u60c5\uff0c\u89e3\u9501\u66f4\u591a\u6743\u76ca\u3002","learn_more":"Learn more","add_chat_buff":"\u52a0\u4e2a\u804a\u5929BUFF\uff1f","per_month_price":"\u89e3\u9501\u66f4\u591a\u6743\u76ca\uff0c\u6700\u4f4e\u6bcf\u6708\u4ec5\u9700\xa519.9","buy_vip_can_unlock_permission":"\u5f00\u901a\u4f1a\u5458\u53ef\u89e3\u9501\u591a\u79cd\u6743\u76ca\uff0c\u6db5\u76d6\u6587\u5b57\u3001\u8bed\u97f3\u804a\u5929\u7b49\u4f17\u591a\u7279\u6743\u529f\u80fd\uff0c\u8ba9\u4f60\u7684\u5f00\u9ed1\u4f53\u9a8c\u66f4\u52a0\u4e30\u5bcc\u591a\u5f69\u3002","buy_vip":"\u7acb\u5373\u6fc0\u6d3b","renewal":"\u7acb\u5373\u7eed\u8d39","gift_friend":"\u8d60\u9001\u597d\u53cb","vip_permission":"BUFF\u6548\u679c","vip_description":"BUFF\u8bf4\u660e","add_buff_make_it_more_interesting":"\u7ed9\u804a\u5929\u52a0\u4e2aBUFF\uff0c\u8ba9\u5f00\u9ed1\u66f4\u6709\u8da3\u3002","add_buff":"\u7acb\u5373\u6fc0\u6d3b","kaiheila_vip":"\u6fc0\u6d3b\u5f00\u9ed1\u5566BUFF","select_friend":"\u9009\u62e9\u597d\u53cb","vip_plan":"BUFF\u65f6\u957f","payment_mode":"\u652f\u4ed8\u65b9\u5f0f","payment_price":"\u652f\u4ed8\u91d1\u989d\uff1a","yuan":"\u5143","bill_record":"Bill record","not_found_bill":"Can\'t find bill? Submit the ticket","date":"\u65e5\u671f","buy_goods":"\u8d2d\u4e70\u5546\u54c1","purpose":"\u7528\u9014","bill_id":"\u8ba2\u5355\u7f16\u53f7\uff1a","payment_time":"\u652f\u4ed8\u65f6\u95f4\uff1a","use_time":"\u5145\u503c\u65f6\u95f4\uff1a","gift_user":"\u53d7\u8d60\u7528\u6237\uff1a","bill_wrong":"\u5bf9\u6b64\u8ba2\u5355\u6709\u7591\u95ee\uff1f","kindly_reminder":"\u6e29\u99a8\u63d0\u793a","bill_tips":"1.\u652f\u4ed8\u6210\u529f\u540e\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5145\u503c\uff0c\u5982\u5145\u503c\u5931\u8d2524\u5c0f\u65f6\u5185\u4f1a\u81ea\u52a8\u8865\u53d1\u3002\\n2.\u5982\u679c\u7f51\u94f6\u91cd\u590d\u4ed8\u6b3e\u6216\u4ed8\u6b3e\u540e\u8ba2\u5355\u53d6\u6d88\uff0c\u672a\u5145\u503c\u6210\u529f\uff0c\u7f51\u94f6\u9000\u6b3e\u5c06\u572815\u4e2a\u5de5\u4f5c\u65e5\u5185\u5230\u8d26\u3002","bill_list_none":"\u6682\u65e0\u8d26\u5355\u8bb0\u5f55","cdkey":"\u5151\u6362\u7801","exchange_vip_please_input_cdkey":"\u5151\u6362\u793c\u7269\uff1f\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u5151\u6362\u7801\uff1a","exchange":"\u5151\u6362","exchange_success":"\u5151\u6362\u6210\u529f","login_codetitle":"Welcome to \\"Kaiheila\\"!","login_switchbtn":"Switch to password login","login_switchcodebtn":"Switch to Captcha Login","login_mobilepla":"Please enter your cell phone number","login_mobilelab":"Cell phone number","login_codelab":"Cell phone verification code","login_acqcodehl":"Get verification code","login_fillcodepla":"Fill in the verification code","login_loginbtn":"Register / Login","login_nextloginlab":"Next automatic login","login_thirdptbtn":"Third party account login","login_docstr":"Click the Register/Login button to agree to the {%lTerms of Service} and {%lPrivacy Policy}.","login_docstr_m":"I have read and agree to the {%l \\"KAIHERA User Agreement\\"} and {%l \\"Privacy Policy\\"}","login_loginbtn_m":"Login","login_pwlab":"Password","login_pwpla":"Please enter your password","login_forgetpwbtn":"Forgot your password?","login_resetpwbtn":"Reset Password","login_returnloginbtn":"Return to Login","feedback_tipbtn":"Question Feedback","channel_mutetip":"Channel Dismiss","channel_cmutetip":"Cancel channel disconnect","channel_toptip":"Top","channel_userlisttip":"User List","search_searchtip":"Search","channel_onlinelab":"Online","channel_offlinelab":"Offline","server_ownerlab":"Server creator","boost_boosterlab":"Helpers","boost_datetip":"Server Boost %s Start","friend_mypagebtn":"My Home Page","server_joinserverbtn":"Add a server","server_explserverbtn":"Discover Servers","download_dlclentbtn":"Download client","server_markreaditem":"Mark as read","server_invitem":"Invite others","server_notifyitem":"Notification settings","server_privacyitem":"Privacy settings","server_nodisturbitem":"Mute","server_cmuteitem":"Cancel Do Not Disturb","server_duraminitem":"Last %s minutes","server_durahitem":"Last %s hours","server_duraforevitem":"Until I turn on again","server_leaveserveritem":"Leave the server","voice_inputmodestr":"Voice input mode","voice_autostr":"Voice sensing","voice_pushstr":"Press F2 to speak","voice_mictestitem":"try out the microphone","voice_copyuntip":"Copy username","user_copysucctip":"Copy successfully","user_settingtip":"User Settings","voice_connectedbtn":"Voice is connected","voice_detstip":"Click to view connection details","voice_quittip":"Exit voice channel","diagnosis_connecttitle":"Connection Diagnostics","diagnosis_applydttip":"Apply diagnostic tools","diagnosis_mictestlab":"Microphone Test","diagnosis_mictestbtn":"Check it","diagnosis_stoptestbtn":"Stop Test","diagnosis_statuslab":"Network Connection Status","diagnosis_mypclab":"My Computer","diagnosis_serverlab":"Server","diagnosis_laglab":"Latency","diagnosis_losslab":"Packet Loss Rate","diagnosis_switchlinebtn":"Switching Lines","diagnosis_domlinestr":"You are currently using a domestic voice line, do you want to switch to an overseas accelerated line?","diagnosis_intllinestr":"You are currently using an overseas accelerated line, do you want to switch to a domestic voice line?","diagnosis_cxlbtn":"Cancel","diagnosis_switchbtn":"Switch","accompany_sourcelab":"Select the source of the accompaniment","accompany_allbtn":"All sources","accompany_nosourcestr":"There is no accompaniment source, please run a music player first and try again.","tuning_talkstr":"Please speak into the microphone for easy detection.","tuning_switchstr":"Switched to microphone %s","tuning_micinputstr":"The current microphone has sound input, if no sound is heard, it will go to output device detection.","tuning_soundbtn":"Sound is heard","tuning_nosoundbtn":"No sound is heard","tuning_testingvocstr":"Test sound is being played...","tuning_speakerlab":"Switched to speaker%s","tuning_speakeroostitle":"We\'re sorry your speakers are not working","tuning_reportlab":"A voice exception report has been generated for you.","tuning_submithl":"Submit work order feedback","tuning_retrybtn":"Try again","tuning_stopbtn":"Ending the trial","tuning_micoostitle":"No voice input detected, your voice input device is abnormal","tuning_reasonstr":"The device is not working also for the following reasons.","tuning_winauthhl":"{%l1. Windows permissions are set incorrectly.}","tuning_turnonmichl":"{%l2. The computer microphone is not enabled.}","tuning_antivirushl":"{%l3. Hacking is disabled by security software.}","tuning_micsubmithl":"If all checks are still not resolved, you can {%lsubmit work order feedback}","tuning_goodtogostr":"Your voice device works fine","tuning_suggeststr":"If others still can\'t hear your voice, suggest the other party to do voice detection in their personal settings.","tuning_okbtn":"Good","ai_aitip":"Al noise reduction feature! Eliminate your background sound and keep only the human voice.","ai_aiswitchsw":"Microphone AI noise reduction","ai_aidetstr":"Microphone Al Noise Reduction eliminates your background sound and keeps only the human voice! Come and experience it!","ai_trybtn":"Listen to the effect","voice_inputlab":"Input Devices","voice_outputlab":"Output Devices","message_sendtopla":"Send a message to %s","message_enterstr":"Enter sends a message","emoji_stkrtip":"Emoji","upload_uploadtip":"Upload","printscreen_deftip":"Screenshot (not yet set) Hold Shift and click to hide the window","printscreen_settip":"Screenshot (%s) Shift-click to hide the window","message_unfoldtip":"Expand input field","message_foldtip":"Collapse input field","message_tipstr":"You can\'t chat here yet, you must join the server before you can start interacting","upload_albumbtn":"Screenshot album","upload_localbtn":"Local files","message_atonlinebtn":"@ Online members(here)","message_atallbtn":"@ All members(all)","message_atauthonlinestr":"Mention all online members who have permission to view this channel","message_atauthallstr":"Mention all members who have permission to view this channel","message_atauthrolestr":"Notify members of the identity group who have permission to view this channel.","emoji_searchpla":"Search for emoticons","emoji_nostkrstr":"No emoticons have been uploaded on this server","emoji_figurelab":"Characters","emoji_naturelab":"Nature","emoji_foodlab":"Food","emoji_sportlab":"Sports","emoji_travellab":"Travel","emoji_objectlab":"Objects","emoji_symbollab":"Symbols","emoji_flaglab":"Flags","message_historystr":"You are viewing the history news","message_latestbtn":"View the latest news","message_cdstr":"Members speak at %s intervals","message_remitstr":"Slow mode is on, but you are not restricted","message_amountstr":"There are %s1 new messages since %s","message_markasreadbtn":"Mark as read","message_sendbtn":"Send","message_sendpla":"Click to send message, Enter key to line feed","message_escstr":"Esc key to cancel Enter key to save","message_reacttip":"Add a response","message_edtip":"Edit message","message_replytip":"Reply","message_moretip":"More","message_copybtn":"Copy message","message_delbtn":"Delete message","message_copyimgbtn":"Copy image","message_pastebtn":"Paste","message_ededstr":"(Edited)","message_fromtip":"From: %s","message_otherreactbtn":"Other reactions","upload_dragtitle":"Drag and drop upload","upload_releasestr":"What are you dragging on the mouse? You want to upload, let go!","_fraudhl":"Please beware of internet scams in chat, click to know the guide of scam prevention","channel_welcometitle":"Welcome to the server","channel_invstr":"Use Instant Invite to invite your friends to join the server.","channel_qrcodestr":"Scan the code to download and install the KAIHERA App to voice and check messages with your friends anytime, anywhere.","channel_questionstr":"Have a question? You can choose to view the help file or submit a work order to get in touch with us.","channel_invbtn":"Invite Friends","channel_downloadbtn":"Download App","channel_helpcenterbtn":"Help Center","server_boosteritem":"Server Help","server_settingitem":"Server Settings","server_settingbtn_m":"Settings","server_cchanitem":"Create a new channel","server_cgrpitem":"Create a new group","server_changenameitem":"Modify this server nickname","server_hideitem":"Hide no-disturb channel","invite_invitem":"Invite","channel_editem":"Edit channel","channel_cloneitem":"Clone channel","channel_delitem":"Delete channel","channel_setpwitem":"Set password","printscreen_occupytitle":"The following hotkeys are detected to be occupied","printscreen_hotkeystr":"Set screenshot shortcut key (%s)","printscreen_neveritem":"No longer prompted","printscreen_closebtn":"Close","printscreen_settingbtn":"Go to Settings","invite_creatinvtip":"Create an invitation","invite_invtitle":"Invite a friend to join %s","invite_invitedstr":"Sent","invite_sharelinkstr":"Share this link and your friend can join your server by clicking on it","invite_copybtn":"Copy","invite_linktimestr1":"Your invitation link will expire after %s%s1, or after using %s2 times.","invite_linktimestr2":"Your invitation link will expire after %s%s1.","invite_linkcontistr":"Your invitation link will never expire.","invite_linktimestr3":"Your invitation link will expire after %s%s times of use.","invite_linktimeday":"days","invite_linktimemin":"minutes","invite_linktimehour":"hours","invite_edhl":"Edit Invitation Link","invite_durationlab":"Maximum time limit","invite_selectpla":"Please select","invite_timeslab":"Maximum number of uses","invite_newlinkbtn":"Use a new link","invite_unlimedem":"No limit","invite_neveritem":"Never","invite_timesitem":"%s times used","invite_duraminitem":"%s minutes","invite_durahitem":"%s hours","invite_duradayitem":"%s days","severmenu_overallitem":"Overview","severmenu_boosteritem":"Server Boost Status","severmenu_authitem":"Role Permissions","severmenu_logitem":"Admin Log","severmenu_toolsitem":"Widgets","severmenu_safetyitem":"Security Settings","severmenu_mbritem":"Members","severmenu_blacklistitem":"Server Blacklist","severmenu_delitem":"Delete Server","severoverview_gnllab":"Basic Settings","severoverview_userlab":"User Management","severoverview_gnltitle":"Server Overview","severoverview_changebtn":"Modify","severoverview_arealab":"Server Area","severoverview_idlab":"Server ID","severoverview_idstr":"Turn on server ID, the server will be in public status, other users can access and join the server directly by server ID.","severoverview_defchanlab":"Default Text Channel","severoverview_defchanstr":"All invitation links of text channels will go to the default text channel","severoverview_welcomechanlab":"Welcome notification channel","severoverview_welcomechanstr":"When someone joins the server, this channel will send a random welcome message.","severoverview_nodefitem":"No default channel","severoverview_nowelcomeitem":"No welcome notification","severoverview_bannerbtn":"Cover","severoverview_checkbtn":"View","severoverview_cdstr":"You can change the recommended server information after 7 days","severoverview_recommendeditem_m":"Become a recommended server","severoverview_recommendstr_m":"Please refer to the PC or web page for recommended server related operations.","severoverview_destitle":"Modify server information","severoverview_destitle_m":"Server Information","severoverview_iconbtn":"Update server icon","severoverview_iconitem_m":"Server Icon","severoverview_coveragainbtn_m":"Re-Upload","severoverview_coverstr":"Support uploading PNG images with recommended minimum size of 1024x600, recommended aspect ratio of 5:3, and image size of no more than 5MB.","severoverview_photoitem_m":"Select from photo album","severoverview_cameraitem_m":"Camera shot","severoverview_defnotilab":"Default Notification Settings","severoverview_defnotistr":"This determines whether users who do not have notification settings explicitly set will be notified of every message on this server","severoverview_allmesitem":"All messages","severoverview_atmesitem":"Only @ is mentioned","severoverview_recomserlab":"Referring Servers","severoverview_recomserstr":"Become a referral server?","severoverview_averonlineminlab":"Average member online time (min)","severoverview_onlinemintip":"Duration (min)","severoverview_swcditem":"Southwest (Chengdu)","severoverview_wshitem":"East China (Shanghai)","severoverview_sszitem":"South China (Shenzhen)","severoverview_nbjitem":"North China (Beijing)","severoverview_asiahkitem":"Asia Pacific (Hong Kong)","severoverview_intldomitem":"Domestic and foreign interconnection dedicated line","severoverview_jamstr":"Congestion","boost_notifylab":"Server Notification","boost_notifystr":"Give a boost to your favorite server and unlock up to 6 ranks. As the level increases, all members of the server can enjoy more benefits. Go boost your favorite server now!","boost_serbslevelstr":"Server Boost Level LV%s","boost_bsbtn":"Boost this server","boost_levelstr":"Level%s","boost_bsnumberstr":"%s booster","boost_serlevelstr":"Server level LV%s","boost_currentstr":"Achieved","boost_equitystr":"Benefit details include","boost_needstr":"%s boosts still needed","boost_stkrnumstr":"%s number of server expressions (%s total)","boost_voicekbpsstr":"Audio quality: %skbps ","boost_uploadlimstr":"%sMB file upload limit","boost_userlimstr":"%s maximum number of people (total %s people)","boost_bannerstastr":"Server cover (static)","boost_pstkrnumstr":"+%s number of server expressions (total %s)","boost_pgifstkrstr":"+%s number of server dynamic expressions (total %s)","boost_giflogostr":"Server dynamic Logo ","boost_puserlimstr":"+%s maximum number of people (total %s people)","boost_cusidstr":"Custom Server ID ","boost_gifbannerstr":"Server Cover (Dynamic)","boost_boosternumstr":"You can view the booster status of this server here, including the overview and the change in the number of booster packs.","boost_boosterchangestr":"Booster pack quantity change","boost_serverlevelstr":"Current server booster level LV%s","boost_expirestr":"LV%s will expire in %s.","boost_gracestr":"*During the buffer period, you will still enjoy the rank entitlement before the downgrade until the end of the buffer period, which has three days.","boost_levelquitytitle":"LV%s entitlement","boost_bannerstr":"Server Cover","boost_serstkrnumstr":"Number of server emoticons","boost_sergifnumstr":"Number of server dynamic emoticons","boost_cusstr":"Custom","boost_givenstr":"Given","boost_gifstr":"Dynamic","boost_ststr":"Static","boost_voicequalstr":"Audio quality","boost_serverlogostr":"Server logo","boost_filesizestr":"File upload limit size","boost_userlimnumstr":"Maximum number of people","boost_kbpsstr":"%skbps","boost_atallstr":"@AllMembers","roles_orderstr":"The character rank in the character list is sorted from top to bottom and can be sorted directly by dragging and dropping. Users will use the color of the highest rank of the roles they have.","roles_authhelpstr":"Need help with role permissions?","roles_namelab":"Role name","roles_colorlab":"Role color","roles_settinglab":"Role settings","roles_distgshsw":"Show members of this role separately from regular online members","roles_allowallatsw":"Allow anyone to @mention this role","roles_atnoticestr":"Note: Members with the \\"Mention @all members, @here and all roles\\" permission can bypass this restriction.","roles_gnlauthlab":"General permission","roles_adminsw":"Administrators","roles_adminstr":"Having this permission gives you full administrative rights, including bypassing all other permissions (including channel permissions). In short, you can do everything except delete the server, which is a high-risk permission.","roles_mgrsw":"Manage server","roles_mgrstr":"Members with this permission can modify server name, avatar and region, as well as unspecified profile setting items, and set server security.","roles_mgrlogsw":"View administrative logs","roles_mgrlogstr":"Members with this permission can view the administrative logs of the server.","roles_linkstr":"Members with this permission can create invitation links.","roles_invsw":"Manage invitations","roles_invstr":"Members with this permission can manage server invitations.","roles_chansw":"Channel Management","roles_chanstr":"Members with this permission can create new channels and edit or delete existing channels (and groups).","roles_remsw":"Remove members","roles_remstr":"Members with this permission can remove other members.","roles_blacklistsw":"Add to server blacklist","roles_blackliststr":"Members with this permission can add other members to the server blacklist and view the server blacklist.","roles_cusstkrsw":"Manage custom expressions","roles_cusstkrstr":"Members with this permission can manage custom emoticons.","roles_chgnamesw":"Modify nickname","roles_chgnamestr":"Users with this permission can change their nicknames.","roles_chgothnmsw":"Modify others\' nicknames","roles_chgothnmstr":"Users with this permission can change other people\'s nicknames.","roles_authmagsw":"Manage role permissions","roles_authmagstr":"Members with this permission can create new roles and edit/delete roles that are lower than that role.","roles_checkchansw":"View text and voice channels","roles_checkchanstr":"Members with this permission can view text and voice channels.","roles_wordauthlab":"Text permission","roles_wordauthsw":"Post text messages","roles_wordauthstr":"Members with this permission can post messages in the text channel.","roles_msgmagsw":"Message management","roles_msgmagstr":"Members with this permission can delete messages sent by other members and top messages.","roles_uploadsw":"Upload files","roles_uploadstr":"Members with this permission can upload files (including images).","roles_atallsw":"Mention @AllMembers, @OnlineMembers and All Roles","roles_atallstr":"Members with this permission can use @AllMembers, @OnlineMembers to mention all members in the channel, this permission can bypass the \\"Allow anyone to @mention this role\\" restriction.","roles_reactstr":"Members with this permission can add new responses to messages.","roles_vocsw":"Voice permission","roles_vocconnectsw":"Voice connection","roles_vocconnectstr":"Members with this permission can connect to the voice channel.","roles_vocpsvsw":"Passive connection to voice channels","roles_vocpsvstr":"Members with this permission can passively invite or be moved to the voice channel when they do not have voice connection permission.","roles_speaksw":"Speak","roles_speakstr":"Members with this permission can speak in the voice channel.","roles_acpmntsw":"Play accompaniment","roles_acpmntstr":"Members with this permission can play backing tracks in the voice channel.","roles_vocmagsw":"Voice management","roles_vocmagstr":"Members with this permission can modify channel speech mode, manage channel members on mic, transfer channel members to other channels and kick them out of the channel.","roles_serdeafensw":"Server Mute","roles_serdeafenstr":"Members with this permission can restrict the voice reception of other members in the server.","roles_sermutesw":"Server mute","roles_sermutestr":"Members with this permission can restrict other members to speak and play music in the voice channel.","roles_vocactsw":"Use free mic","roles_vocactstr":"Members without this permission must use the keys to speak in the channel.","roles_clearauthbtn":"Clear Role Permission","emoji_sktuploadstr":"Current server %s for members to use within this server. Emoji names include only Chinese, English, numbers and at least two characters, and the size of a single emoji does not exceed 512KB.","emoji_sktuploadfftstr":"Support uploading 50 custom emoticons","emoji_sktuploadbtn":"Upload emoticons","emoji_stsktstr":"Static emoji list - %s available","emoji_stgifstr":"Dynamic emoji list - %s available","emoji_sktnamelab":"Name","emoji_uploaderlab":"Uploader","log_logmagstr":"Records the administrative actions performed within the server","log_msgdelstr":"Delete message {%b%s}","log_msgdetstr":"Message content: {%b%s}","log_chanedstr":"Edit channel {%b%s}","log_namechgstr":"Name changed from {%b%s} to {%b%s1}","log_modechgstr":"Channel mode changed from {%b%s} to {%b%s1}","log_linkcreatestr":"Create Invite Link {%b%s}","log_invcodestr":"Invitation Code: {%b%s}","log_linkrecallstr":"Revoke invitation link %s","log_sftyrulesedstr":"Edit security rules {%b%s}","log_turnonstr":"Turn off {%b%s}","log_turnoffstr":"Turn on {%b%s}","log_setrolestr":"Set as %s role %s1","log_cxlrolestr":"Cancel %s role %s1","log_edgrpauthstr":"Edit the group override permission settings for %s","log_addgrpauthstr":"Add group override permission settings for %s","log_remgrpauthstr":"Remove group override permissions for %s","log_edchanauthstr":"Edit the channel override permission settings for %s","log_addchanauthstr":"Add %s\'s channel override setting","log_remchanauthstr":"Remove the channel override setting for %s","log_createrolestr":"Create role %s","log_edrolestr":"Edit role %s","log_edroleauthstr":"Edit the role\'s permission settings","log_namechgfstr":"Change name from %s to %s","log_colorchgstr":"Color changed from %s to %s ","log_delrolestr":"Delete role %s ","log_creategroupstr":"Create group {%b%s}","log_edgroupstr":"Edit group {%b%s}","log_delgroupstr":"Delete group {%b%s}","log_createchanstr":"Create channel {%b%s}","log_delchanstr":"Delete channel {%b%s}","log_descchgtostr":"Description changed from {%b%s} to {%b%s1}","log_vocqualstr":"Sound quality changed from {%b%s} to {%b%s1}","log_hcchgtostr":"Number of people changed from {%b%s} to {%b%s1}","log_banstr":"Banned users {%b%s}","log_reasonstr":"Reason: {%b%s}","log_unbanstr":"Unblock {%b%s}","log_kickstr":"Kick out user {%b%s}","log_turnonpwstr":"Open {%b%s}\'s channel password","log_chanpwisstr":"Channel password for {%b%s}","log_chgchanpwstr":"Change {%b%s}\'s channel password","log_turnoffchanpwstr":"Close the channel password of {%b%s}","widget_sertoolstitle":"Server widget","widget_sertoolssw":"Turn on the server widget","widget_jsonapilab":"JSON API","widget_invchanlab":"Invite Channel","widget_noinvitem":"No invitation","widget_themeslab":"Color Mode","widget_darkitem":"Dark","widget_brightitem":"Bright","widget_invlinkstr":"If a channel has been selected, the widget will generate an invitation link.","widget_premadelab":"Pre-made widget","widget_premadestr":"Please embed this HTML code into your website to use the pre-made widget of Kakurola.","security_riskstr":"Restrict members\' actions in the server by setting rules, thus reducing the risk within the server. Members can be unrestricted by being given roles. {%l for detailed instructions}","security_rulelistlab":"Rules List","security_addrulebtn":"Add Rules","security_defrulesw":"Default Rules","security_prohibitstr":"In-server %s members, within join server %s, forbid %s.","security_edititem":"Edit","security_delitem":"Delete","security_halfhourstr":"Registered for less than 30 minutes","security_nonmluserstr":"Non-continental users","security_recidivismstr":"Has a record of violations","security_highriskitem":"High risk","security_addbtn":"Add","security_edittip":"(Click on the blue area to edit)","security_hourminitem":"%s hour %s within 1 minute","security_minitem":"%s within minutes","security_msgvocstr":"Message actions and connected voice","security_msgeditstr":"Message operation","security_vocconnectstr":"Connect voice","security_savebtn":"Save","members_sermbrtitle":"Server members","members_limstr":"Current server size limit %s members","members_mbrstr":"%s members","members_mbrstr_m":"%s members","members_batbtn":"Batch operation","members_contentstr":"View content.","members_userroleitem":"User Roles","members_dataitem":"User data","members_filterstr":"Filter roles.","members_filteritem_m":"Filter","members_unauthitem":"Unauthenticated users","members_sortstr":"Sort by","members_joinascitem":"Join server time ascending","members_joindescitem":"Join server time descending","members_actvascitem":"Last active time ascending","members_actvdescitem":"Last active time descending","members_roleitem":"Roles","members_batselbtn":"Batch selection","members_addrolebtn":"Add a role","members_delrolebtn":"Delete Role","members_addblacklistbtn":"Add to blacklist","members_transferitem":"Server master transfer","invite_invrecallstr":"Here all available invitation links, you can revoke any one of them.","invite_invuserlab":"Invitees","invite_invcodelab":"Invitation Code","invite_usagecountlab":"Number of uses","invite_expdtimelab":"Expiration time","bans_defblacklisttitle":"Blacklist is empty","bans_blacklisttitle":"%s of blacklists","bans_blackliststr":"We currently use accounts to restrict users.","bans_noblockusertitle":"No users have been blacklisted","bans_noblockuserstr":"No one has been blacklisted, which is good. But again, not so good in a sense.","bans_noblockuser2str":"Please don\'t be soft if you need to be.","bans_reasonstr":"Reason for joining.","bans_removebtn":"Move out of blacklist","bans_donebtn":"Complete","usermenu_acctsettingitem":"Account Setup","usermenu_authitem":"Authorization Management","usermenu_bufflab":"Kaiheila BUFF","usermenu_actbuffitem":"Activate BUFF","usermenu_mybillsitem":"My Billing","usermenu_codeitem":"Redemption Code","usermenu_appitem":"Application Settings","usermenu_vocitem":"Voice Settings","usermenu_hotkeyitem":"Key Settings","usermenu_sktitem":"Emoji Management","usermenu_overlayitem":"In-game overlay","usermenu_notifiitem":"Notifications","usermenu_themesitem":"Appearance","usermenu_themesitem_m":"Appearance","usermenu_toolsitem":"Tools","usermenu_advanceitem":"Advanced Settings","usermenu_activityitem":"User Dynamics","usermenu_windowsitem":"Windows Settings","usermenu_updatelogitem":"Update history","usermenu_logoutitem":"Logout Login","account_bannerlab":"Modify banner","account_bannerstr":"Support uploading PNG, GIF images, recommended size 628x250px, image size no more than 5MB.","account_portraitlab":"Change avatar","account_portrait_m":"Avatar","account_buffendstr":"BUFF end time %s","account_usernamestr":"User Name","account_namechgcdstr":"90 days interval for each user name change for normal users\\r\\nBUFF users need 10 days interval for each user name change","account_phonelab":"Cell phone number","account_phoneitem_m":"Modify mobile number","account_phonetitle_m":"Verify mobile number","account_thirdpartylab":"Third party account binding","account_unlinkphonbtn":"Unbind","account_linkbtn":"Binding","account_safetylab":"Account Security","account_cxlbtn":"Cancel Account","account_removebannerlab":"Remove Banner","account_confirmtip":"Are you sure you want to remove the banner?","account_removebannerbtn":"Remove","sever_removebtn":"Kick out","account_editnametitle":"Edit Username","account_nameidstr":"Username and ID","account_rdmnumbtn":"Random number","account_namecdstr":"The next time you need to change your username after %s days, are you sure you want to change your username to \\"%s1\\"?","account_namecdstr_m":"Days until next username change: %s days","account_verifcodetitle":"Step 1 - Verify the original phone number","account_wfmtstr":"Wrong format of verification code","account_nextbtn":"Next step","account_verifytitle":"Please complete the verification","account_movepla":"Please press and hold the slider and drag to the far right","account_loadingstr":"Loading","account_authedstr":"Verification passed","account_reacqsecstr":"Retrieve after %s seconds","account_linknewphonetitle":"Step 2 - Bind the new phone","account_linkphonelab":"Bind cell phone","account_alreadyinusestr":"The cell phone number has been registered","account_changepwlab":"Change the account password","account_sendcodestr":"Send a verification code to the phone number %s","account_verficodelab":"Verification code","account_newpwlab":"New password","account_pwlimitpla":"6-30 digits in English, numbers and symbols, not pure numbers","account_unlinkbtn":"Unbind","account_wechatconfstr":"Are you sure you want to unbind your WeChat account?","account_wechatqrstr":"Use WeChat Swipe to login","account_wechatstr":"WeChat Login","account_wechatstr_m":"WeChat","account_kaiheilatitle":"KAIHEI LA","account_cxlnoticestr":"We are sorry to hear that you are no longer using Kurokai. To ensure the safety of your account, before you submit a cancellation request, you must also meet the following conditions.","account_safetysitulab":"The account is in a safe state","account_safetysitustr":"High risk accounts cannot be cancelled. The account must not have been changed within seven days and there is no risk of theft.","account_normsitulab":"The account is in normal use","account_normsitustr":"There is no violation of the account operation. Accounts within the penalty period cannot be cancelled.","account_noserlab":"The account does not own any of the servers","account_noserstr":"Server owners cannot be logged out. Please make sure you no longer own any of the servers before logging out. Optionally, you can transfer your server owner status or dissolve your server.","account_nobotlab":"Account does not own any of the bots","account_nobotstr":"It is not possible to logout when there are already created bots. Please delete all registered bots in the development center.","privacy_settingstr":"Here you can change your settings for your privacy","privacy_defserlab":"Server default privacy settings","privacy_sermsgsw":"Allow server members to send private messages to you","privacy_sersittingapplystr":"This setting will be applied when you enter a new server. It does not apply to your existing server.","privacy_addfriendlab":"Who can add you as a friend","privacy_allsw":"Everyone","privacy_friendfrisw":"Friends of Friends","privacy_uxlab":"User Experience Improvement Program","privacy_uxsw":"Participate in the UX Improvement Program","privacy_uxstr":"Allow us to capture your progress so that we can use in-game overlays and user dynamic features and help us improve our service for you.","privacy_agreementstr":"Click to view the Kakuro {%l Software License and Service Agreement} and {%l Privacy Policy}","authorized_authappstr":"This shows the licensed apps of Kaitkiri, you can delete them at any time.","authorized_devcenterlab":"Khehela Developer Center","authorized_brieflab":"Introduction","authorized_authlab":"Permissions","authorized_allowinfostr":"Allow reading user information","authorized_obslab":"OBS in-game override","authorized_remotecallstr":"Allow remote procedure calls","authorized_readsermsgstr":"Read server messages","invite_invstr":"This is where you keep track of the people who have been invited by you to join KAIZEN","invite_myinverlab":"My Invitees","invite_notfilledstr_m":"Not filled","invite_invcodeinputpla":"Please enter the invitation code/invitation link, which cannot be changed after confirmation.","invite_confirmbtn":"Confirmation","invite_confirmbtn_m":"OK","invite_myinvcodestr":"My Invitation Code: %s","invite_invlinkregstr":"The number of new users who have successfully completed registration and authentication through the invitation link you shared will be recorded. Below is the total number of users you have invited to authenticate. ","invite_invidentilab_m":"Number of Invitees","invite_invidentistr":"Invited certified users %s","invite_approachlab":"How to invite users","invite_enterserstr":"1. Go to any server","invite_invbuttonstr":"2. Click the Invite button to generate a link","invite_copylinkstr":"3. Copy the link and send it to your friend","buff_endsstr":"You\'re enjoying the hacker buff effect\\r\\n%s expire","buff_renewbtn":"Renew now","buff_giftbtn":"Give it to a friend","buff_equitystr":"Unlock more benefits for as little as $19.90 per month!","buff_effecttitle":"BUFF effect","buff_bannerlab":"Background Banner","buff_bannerstr":"Customized background image, support GIF format","buff_gifportraitlab":"Dynamic user avatar","buff_gifportraitstr":"Interesting dynamic avatar, make your personal page no longer monotonous","buff_crosssersktlab":"Cross-server emoticons","buff_crosssersktstr":"Get rid of server restrictions and use more emoticons.","buff_higeruploadlimitlab":"Higher upload limit","buff_higeruploadlimitstr":"Support uploading up to 100M files, sharing happiness is now!","buff_intlvoclab":"Overseas voice acceleration","buff_intlvocstr":"No need to set up, automatically accelerate overseas voice connection, more enjoyable hacking","buff_cusnumlab":"Customized user number","buff_cusnumstr":"You may be the next #0001.","buff_uniquelab":"Unique logo","buff_uniquestr":"Exclusive BUFF logo to show your unique identity","buff_morehl":"{%lLearn more}BUFF effect","buff_bufftitle":"BUFF Description","buff_timelab":"BUFF time calculation","buff_timestr":"A single month BUFF is valid for 30 days from the BUFF opening date.","buff_renewlab":"BUFF Renewal","buff_renewstr":"If you renew the BUFF within the BUFF validity period, the BUFF validity period will be accumulated from your current BUFF expiration time backward, accumulating to your BUFF validity period by 30 days/month.","buff_paylab":"Payment Methods","buff_paymentstr":"BUFF payment methods are currently only available: WeChat payment and Alipay. Don\'t make private chat transactions, the official staff will not take the initiative to ask for money.","buff_giftlab":"BUFF Gift","buff_giftstr":"The gifted user needs to be friends with the gifting user. The BUFF is effective for the gifted user immediately after the gift is successfully given.","buff_buffstr":"Add a BUFF to the chat to make hacking more interesting.","buff_buyitnowbtn":"Activate Now","buff_actbufftitle":"Activate the \\"Blackout\\" BUFF","buff_bufftimelab":"BUFF Duration","buff_discountstr":"%s Discount","buff_annualstr":"Yearly","buff_semiannualstr":"Semi-Annual","buff_seasonalstr":"Quarterly","buff_monthlystr":"Monthly","buff_paymentlab":"Payment method.","buff_alipaybtn":"Alipay","buff_amountstr":"Payment amount.","buff_rmbstr":"Yuan","buff_aggrementhl":"{%l \\"KAIHERA BUFF Member Service Agreement\\"}","buff_selectfriendlab":"Select a friend","buff_activated_m":"activated","buff_nonactivated_m":"nonactivated","boost_boosttitle":"Launch server booster","boost_booststr":"Each booster pack is valid for 30 days and can unlock up to 6 server levels. As the server level increases, all members of the server can enjoy more rights and benefits. Go boost your favorite server! ","boost_unusedlab":"Unused booster packs","boost_usenowbtn":"Use Now","boost_purchasebtn":"Purchase","boost_serequitytitle":"Server booster benefits","boost_serbooststr":"Boost a server to receive.","boost_uniqueidentitystr":"A unique identification in the member list.","boost_badgestr":"A shiny badge in your profile panel.","boost_uniquerolestr":"Exclusive role in the booster server.","boost_boosterserstr":"Boosted servers get.","boost_moresersktstr":"More server emoticons can be uploaded.","boost_highervocqualitystr":"Better voice channel call quality.","boost_highersizelimstr":"Increased upload limit for the entire server.","boost_serequitystr":"{More} server benefits.","boost_pricestr":"The server booster package is only \uffe520/each, and you can enjoy 30% discount for opening BUFF, and you can launch a booster for the server you have joined. ","boost_numbooststr":"%s booster","boost_buyboosttitle":"Purchase server booster package","boost_durationstr":"Boost Pack is valid for 30 days after recharge","boost_discountstr":"BUFF%s discount","boost_aggrementstr":"{%l \\"KAIHARA Booster Pack Service Agreement\\"}","boost_serboosttitle":"Booster Server","boost_selectnumstr":"Choose the number of booster packs","boost_neednumstr":"Need %s1 booster pack before LV%s","boost_usebtn":"Use","boost_succtitle":"Server booster success","boost_succstr":"You have successfully boosted %s server %s1 times.","boost_currenttitle":"Servers currently being boosted","boost_startatstr":"Boost start time: %s","boost_usedstr":"Boosts used %s","billing_reportbtn":"{%l Can\'t find a bill? Submit work order}","billing_datelab":"Date","billing_productlab":"Product purchased","billing_purposelab":"Use","billing_monthbuffstr":"Blackout BUFF Single Month","billing_daybuffstr":"One Day","billing_triduumbuffstr":"Three days of the \\"Blackout\\" BUFF","billing_monthbooststr":"Server Boost Pack (30 days)","billing_wechatpaystr":"WeChat payment","billing_selfusestr":"Self-use","billing_amountstr":"Payment amount\uff1a%s","billing_billnumstr":"Order number\uff1a%s","billing_methodstr":"Payment method\uff1a%s","billing_datestr":"Payment time\uff1a%s","billing_questionhl":"{%l have questions about the order?}","billing_tipslab":"Warm Tips","billing_tipsstr":"1. The system will automatically recharge after successful payment, and will automatically recharge within 24 hours if the recharge fails.\\n2. If the Internet banking duplicate payment or the order is cancelled after payment and the recharge is not successful, the Internet banking refund will arrive within 15 working days.","cdk_giftcardstr":"Redeem a gift? Please enter the redemption code below:.","cdk_giftcardpla":"AAAAAAAA-BBBBB-CCCC-DDDDD-EEEEEEEEEEEEEEEE","cdk_nullcdkstr":"Code cannot be empty.","cdk_shortcdkstr":"Code should contain at least 18 characters.","cdk_longcdkstr":"Code can only contain up to 36 characters.","cdk_wrongcdkstr":"C_NOT_FOUND","cdk_collectbtn":"Redemption","cdk_succtitle":"Redemption successful","cdk_succstr":"Congratulations you get: \\"%s \\"*%s1","voice_autosyssw":"Automatic selection of system recommended settings","voice_autosysstr":"When this setting is turned on, the device change prompt will no longer pop up when the computer device is changed.","voice_micvoclab":"Microphone input volume","voice_strstr":"Enhancement.","voice_dbstr":"+%sdB","voice_vocoutputlab":"Voice output volume","voice_aidescstr":"Allows you to erase the background sound from the microphone and keep only the speaking voice.","voice_inputlab_m":"input","voice_keyitem_m":"Push Button Talk","voice_autodetnsw":"Automatic voice recognition sensing sensitivity","voice_exceedstr":"Voices above this threshold will be automatically recognized and transmitted","voice_micswitchlab":"Microphone on/off shortcut key","voice_nohotkeypla":"Not yet set","voice_resetbtn":"Reset","voice_deafenlab":"Mute on/off shortcut","voice_vocimprovetitle":"Voice Improvement","voice_echosw":"Echo Cancellation","voice_noisesw":"Noise Cancellation","voice_aistr":"Noise cancellation is not available when microphone AI noise reduction is on.","voice_micenhancesw":"Microphone Sound Amplification","keybinds_hotkeystr":"Here you can change the shortcut key setting of KAIHARA.","keybinds_texttitle":"Text Chat","keybinds_textlab":"Send Message","keybinds_enteritem":"Enter","keybinds_ctrlenteritem":"Ctrl + Enter","keybinds_voctitle":"Voice Chat","keybinds_vochotkeylab":"Set keystroke talk shortcuts","keybinds_screenshottitle":"Screenshot","keybinds_scrsstr":"Set screenshot shortcut keys","keybinds_mouseustr":"(mouse settings are not supported at this time)","keybinds_fsscrsstr":"Set full screen screenshot shortcut","emoji_stklovestr":"Here you can add your favorite server emoji to the emoji bar.","emoji_stkaddedbtn":"Added emoticons","emoji_stknotaddedbtn":"No emoticons added","emoji_dragorderstr":"Drag and drop to modify the order of emoticons","emoji_addsktbtn":"Add emoticons","overlay_descpstr":"Here you can overview the in-game overlay settings","overlay_explstr":"To let you enjoy the thrill of the game without the distraction of recognizing your friends\' voices. We will display the user who is talking in the top left corner of your screen while you are playing.","overlay_localab":"Overlay position","overlay_clicklocastr":"Click to change the overlay position","overlay_portraitsizelab":"Avatar size","overlay_defsizestr":"Default Style","overlay_maxstr":"Max","overlay_displaylab":"Display Settings","overlay_alwaysitem":"Always","overlay_onlyspeakitem":"Only when speaking","overlay_faqlab":"In-game override FAQ","overlay_faqstr":"Q: Why does my in-game override not work?\\nA\u2236 If the in-game overlay does not work, the following may solve the problem.\\n1. Close the client, right-click the startup icon and select \\"Run as administrator\\";\\n2. Check the settings and make sure the \\"In-game overlay\\" is enabled in the \\"Voice Attachment\\" item;\\n3. Check the game display settings and change the \\"full screen\\" of the game to \\"borderless window\\".","notificatios_desktopsw":"Turn on desktop notifications","notificatios_desktopstr":"Desktop alert pops up in the notification center when you receive a mention (@) message, and you can turn it off with a switch. ","notificatios_inboxsw":"Taskbar blinking","notificatios_inboxstr":"Blink the avatar in the taskbar when there is a new notification.","notificatios_phonenotilab":"Phone notification settings when logging in on desktop side","notificatios_alwaysitem":"Phone always receives notifications","notificatios_fiveminitem":"Phone receives notifications after 5 minutes of not operating the computer","notificatios_tenminitem":"Receive notifications after 10 minutes of inactivity","notificatios_fifteenitem":"Receive notifications after 15 minutes of inactivity","notificatios_neveritem":"Cell phone does not receive notifications","notificatios_tonesw":"Alert tone","notificatios_volumesw":"Alert volume","notificatios_notificationsw":"Message notification","notificatios_deafensw":"Mute headset","notificatios_undeafensw":"Unmute headset","notificatios_mutesw":"Microphone mute","notificatios_unmutesw":"Microphone unmute","notificatios_disconnectedsw":"Voice connection disconnected","notificatios_pttactsw":"\'Key Talk\' on","notificatios_pttdeacsw":"\'Push to talk\' off","notificatios_joinsw":"User connected","notificatios_leavesw":"User leaves","notificatios_printscreensw":"Full screen shot","appearance_appearancesw":"Theme mode","appearance_darkitem":"Dark mode","appearance_lightitem":"Bright mode","appearance_autosw":"Auto switch theme mode","appearance_lightlab":"Bright mode on","appearance_darklab":"Dark mode on","appearance_autosw_m":"Automatic (follow system settings)","tool_desstr":"Here you can find the tools provided by KAIHARA, and you can set them","tool_printscreentitle":"Screenshot tool","tool_savectlglab":"Screenshot save directory","tool_chgbtn":"Change","tool_openctlgbtn":"Open directory","tool_livetitle":"Live Streaming Tools","tool_livestr":"If you have any other questions or suggestions, please go to the \\"#OBS Feedback and Suggestions\\" channel in the {%l \\"KAIHEI LA\\" Troll Center} to give feedback to the staff.","tool_obsstr":"OBS official website","tool_connectbtn":"Connect Now","obs_stateitem":"Status Panel","obs_textitem":"Text Panel","obs_voiceitem":"Voice Panel","obs_onlinenumsw":"Show number of people online","obs_severiconsw":"Show server icons","obs_invitesw":"Show server invitations","obs_methodlab":"Invitation method","obs_linkitem":"Invite Link","obs_appearancelab":"Appearance style","obs_darkitem":"Dark mode","obs_fullbtn":"Click on the full screen to see the effect","obs_urlstr":"After completing the panel configuration, enter the following URL in the browser source, width and height:.","obs_sizestr":"Width: %spx, Height: %spx","obs_textchannellab":"Text Channel","obs_fontlab":"Font size","obs_fontsizelab":"%spx","obs_voicechannel":"Voice channel","obs_headitem":"Avatar mode","obs_ptgitem":"Stand-up mode","obs_speakshowsw":"Show only when speaking","obs_nicknamesw":"Show nickname","obs_headsw":"Show avatar","obs_combinationlab":"Combination mode","obs_leftitem":"Avatar on the left","obs_toplitem":"Avatar on top","obs_poslab":"Position setting","obs_sortlab":"Sort by","obs_vrtitem":"Vertical sorting","obs_horitem":"Horizontal sorting","obs_cusizepositem":"Custom position","obs_spacelab":"Display spacing","obs_stylelab":"Style setting","obs_nicknamefontsizelab":"Nickname font size","obs_nicknamefontlab":"Nickname font","obs_defitem":"System default","obs_fontstr":"The font package needs to be loaded in advance, so please wait for a while if the font style is not displayed.","obs_otherlab":"Other styles","obs_bubblesw":"Add speech bubble","obs_shadowsw":"Add speech shadow","obs_lightsw":"Add speech glow","obs_colourlab":"Glow colors","obs_resetbtn":"Reset colors","advanced_devsw":"Developer Mode","advanced_devstr":"Developers can write and manage bots in this mode in a more portable way.","advanced_undetectablestr":"No games detected","status_playstr":"What are you playing right now?!","status_unseenstr":"Don\'t see your game?","status_addbtn":"Add one!","status_gamesw":"Show game dynamics in personal status","status_musicsw":"Show music dynamics in personal status","status_selectgamepla":"Select a game","status_addgamebtn":"Add a game","status_backbtn":"Back","status_playingstr":"In the middle of a game","windows_autostartsw":"Start up automatically","windows_autostartstr":"When this option is turned on, the \\"hacking\\" voice is automatically started when the game is turned on","windows_minimizesw":"Automatically minimizes on startup","windows_minimizestr":"If this option is enabled, we will silently hide in the background after boot up. We will come back out when you need it.","windows_traysw":"Minimize to tray when closing","windows_traystr":"When this option is turned on, the program will be minimized to the tray when you click the close button in the upper right corner.","windows_dxvasw":"Hardware acceleration","windows_dxvastr":"Turning on hardware acceleration will make Kakuro run more smoothly. Please turn off this feature if the game is experiencing frame drops.","update_updatestr":"Record our growth steps, also record everyone\'s expectations for us","update_versionstr":"(Current version logo: %s)","quit_quitstr":"Are you sure you want to log out?","textoverview_channelnamelab":"Channel name","textoverview_channeldeslab":"Channel description","textoverview_channelnamepla":"Input channel name","textoverview_lowlab":"Slow mode","textoverview_close":"Off","textoverview_lowstr":"Unless members have channel management or message management privileges, the frequency they send messages, needs to be greater than the interval time.","textoverview_savestr":"You change... But if you insist...","textoverview_giveupbtn":"Abandon the change","textoverview_savebtn":"Save changes","roles_rolepla":"Search for roles and members","roles_categstr":"Synced with {%b%s} grouping permissions","roles_categchangestr":"The current channel role permissions have changed and are no longer synchronized with {%b%s} permissions.","roles_categstrbtn":"Keep grouping synchronized","channeldel_deltitle":"Delete \\"%s","channeldel_delstr":"Are you sure you want to delete %s? All the contents that already exist will disappear, and the operation cannot be undone!","voiceoverview_qualitylab":"Sound quality","voiceoverview_fluencylab":"Smooth","voiceoverview_normallab":"Normal","voiceoverview_highlab":"High quality","voiceoverview_maxlab":"Maximum number of people on the channel","voiceoverview_unlimitlab":"No limit","password_opensw":"Channel Password","password_formatpla":"Please input password, password only support 1~12 digits","password_inputtitle":"Input channel password","password_inputpla":"Please input the password","password_passworderror":"Channel password error","copy_channelnametitle":"The channel password is incorrect in %s","copy_copystr":"The newly created channel and %s are exactly the same in terms of permission setting, bit rate and capacity.","copy_nullerror":"Channel name cannot be empty","createserver_createtitle":"Oh, another server?","createserver_createservertitle1":"Create","createserver_createstr":"Create a new server and invite your friends to join, it\'s free!","createserver_createbtn":"Create a server","createserver_jointitle1":"Join","createserver_joinstr1":"Enter an instant invite and join your buddy\'s server.","createserver_joinbtn":"Join a server","createserver_tpltitle":"Choose a server template","createserver_tplstr":"A server is the equivalent of a \\"room\\" where you can chat and hack with your friends, so create a server and invite your friends to join!","createserver_freedombtn":"I want to create a server freely","createserver_selectlab":"Choose a template","createserver_frienditem":"Play with friends","createserver_guilditem":"I have a guild","createserver_communityitem":"Develop a community","createserver_fansitem":"Gather fans","createserver_study":"Build a learning world","createserver_tplchannellab":"Template Channel","createserver_tplrolelab":"Template Role","createserver_gmrolestr":"The administrator has all the rights to manage the channel and can do everything except delete the server.","createserver_textgmstr":"Text channel administrator can manage messages in the text channel.","createserver_voicegmstr":"Voice channel administrator can manage voice members.","createserver_textchannelgmstr":"Text channel administrator","createserver_voicechannelgmstr":"Voice channel administrator","createserver_selectbtn":"Select","createserver_createservertitle2":"Create your server","createserver_createserverstr":"Create a topic server of interest and you can chat with your friends by voice/text for free","createserver_updatelogobtn":"Update LOGO","createserver_uploadlogobtn":"Upload server logo","createserver_iconsizestr1":"Minimum server icon is 128\xd7128","createserver_iconsizestr2":"We recommend 512\xd7512 (please don\'t exceed 5M)","createserver_servernamelab":"Server name","createserver_servernamepla":"Enter a server name","joinserver_jointitle2":"Enter an instant invitation or server ID below to join an existing server. The invitation link and server ID will look something like this.","joinserver_jointitle2_m":"The invitation link and server ID will look something like this.","joinserver_inputlab_m":"Enter Invitation","joinserver_completelink":"","joinserver_completestr":"(full body)","joinserver_simplifylink":"kaihei.co/HfGqxS","joinserver_simplifystr":"(simplified)","joinserver_minimallink":"HfGqxS","joinserver_minimalstr":"(very simplified)","joinserver_idlink":42543621,"joinserver_idstr":"(Public server ID)","joinserver_idinputpla":"Enter instant invite link or server ID","joinserver_Invalidcodeerror":"Invalid server invitation code!","server_muteitem":"Do Not Disturb","folder_readitem":"Mark folder as read","folder_settingitem":"Folder settings","folder_namelab":"Folder Name","folder_namepla":"Enter the server folder name","folder_colourlab":"Folder color","folder_cuscolourtip":"Customize the color","user_profileitem":"Personal Information","user_mentionitem":"Mention @","user_invitevoiceitem":"Invite to voice channel","user_noteitem":"Add a note","user_privatemessageitem":"Private Message","user_uservolumeitem":"User Volume","user_inviteserveritem":"Invite to server","user_addfrienditem":"Add a friend","user_kickitem":"Remove from this server","user_banitem":"Remove and add to blacklist","user_blockuseritem":"Block this user","profile_block":"Block","profile_introlab":"Profile","profile_notepla":"Click to add a note","profile_norolelab":"No role","profile_viewprofilebtn":"View Profile","profile_listeninglab":"Listening to music","profile_playinglab":"Playing games","profile_intropla":"Click to add a profile","profile_changenicknameotherstr":"You are currently modifying someone\'s nickname.","profile_nicknamelab":"Nickname","profile_resetnicknamebtn":"Reset nickname","profile_submitbtn":"Submit","search_advancedsearchbtn":"Advanced Search","search_messageitem":"News","search_fileitem":"Documents","search_picturevideoitem":"Image/Video","search_resultstr":"%s of results","search_skipbtn":"Jump","search_searchingstr1":"Searching","search_searchingstr2":"Searching","search_emptystr1":"No results","search_emptystr2":"No relevant search results found","search_allchannelitem":"All Channels","search_generalitem":"General","search_useritem":"User","search_channelitem":"Channels","search_servermessageitem":"Server news","search_rangelab":"Scope.","search_categorystr":"Toggle category","search_movestr":"Move cursor","search_selectitemstr":"Select entry","search_escstr":"Close window","search_searchpla":"Please enter search content","search_keywordstr":"Enter keywords to search %s","search_selectrangetitle":"Select range","search_selectserverlab":"Select server","search_channelrangelab":"Channel range","search_designatedchannelitem":"Specify the channel","search_messagetypelab":"Message Type","search_texttypeitem":"Text","search_picturevideotypeitem":"Image and video","search_allprivatemessageitem":"All private messages","search_designatedprivatemessageitem":"Specify private message","feedback_friendstr":"Friends, Private Messages","feedback_servermenustr":"Server menu","feedback_channelliststr":"Channel list","feedback_serverliststr":"Server list","feedback_discoverstr":"Discovery Page","feedback_desstr":"If you encounter problems while using \\"KAIHARA\\", you can choose one of the ways to solve them.","feedback_faqlab":"FAQ","feedback_helpbtn":"View help document","feedback_mfaqitem_m":"Mobile FAQ","feedback_helpstr_m":"View KAIHERA help documentation online","feedback_feedbackstr_m":"Create your question feedback work order, we will reply as soon as possible","feedback_otherlab":"Other feedback channels.","feedback_feedbacktitle":"Feedback and Suggestions","feedback_typelab":"What\'s Happening","feedback_troubleitem":"I have a problem","feedback_adviseitem":"I have a suggestion","feedback_platformlab":"Choose a platform","feedback_questiontypelab":"Type of problem","feedback_deslab":"Describe the content","feedback_troubledespla":"Please put the details of the problem here, enter at least five characters","feedback_advisepla":"Please write a detailed description of the suggestion here, enter at least five characters","feedback_deviceinfolab":"Get device information","feedback_loglab":"Upload logs","feedback_pcitem":"PC","feedback_webitem":"Web","feedback_androiditem":"Android","feedback_iositem":"iOS","feedback_h5item":"H5","feedback_tyoeitem":"Please select the question type","feedback_voiceitem":"Voice Question","feedback_textitem":"Text Chat Questions","feedback_accountitem":"Account Questions","feedback_serveritem":"Server Management Questions","feedback_billitem":"Billing Questions","feedback_other":"Other Questions","feedback_despla":"Please fill in the description","feedback_deserror":"Please enter at least five characters for the description","message_topnumstr":"Topped messages(%s)","message_topdefaultstr":"This channel does not have any top messages yet","message_allreadbtn":"All read","message_nomorestr":"No more","messagebox_newmessagenumstr":"New messages (%s)","messagebox_overlookallbtn":"Ignore all","messagebox_mentionstr":"@me","messagebox_friendrequestitem":"Friend request","friends_hotkeyckstr":"Ctrl+K","friends_frienditem":"Friend","friends_allitem":"All","friends_requestitem":"Request","friends_blockeditem":"Blocked","friends_requeststr":"Request to become a friend","friends_noawaitingstr":"There are no pending friend requests here.","friends_emptyflstr":"Uh... There are no friends yet.","friends_emptyblstr":"There is no one in the blocked list.","friends_noonlinestr":"You have no friends online at this time, so go get them to play!","friends_deltitle":"Delete friend %s","friends_confirmstr":"Are you sure you want to remove %s from your friends list?","friends_tempmsgstr":"Temporary Sessions","friends_msgtopstr":"Here is the beginning of your private message history with %s.","friends_friendstr":"You have become friends with %s","friends_invsentstr":"You sent an invitation (%s), but ......","friends_invrecstr":"You received an invitation (%s), but ......","friends_invexpiredtitle":"The invitation has expired","friends_fourofourstr":"Although accidents don\'t happen often, they always do.","friends_serinvsentstr":"You sent an invitation to join a server (%s)","friends_serinvacceptstr":"You have been invited to join a server (%s)","friends_onlinestr":"%s online","friends_joinedstr":"Joined","friends_reportitem":"Report","friends_reasontitle":"Please select the reason for reporting","friends_personalinfostr":"Will not disclose your personal information","friends_pornlab":"Pornographic vulgarity","friends_advertislab":"Spam","friends_harassmentlab":"Unkind/abusive","friends_dislikelab":"Content is offensive to me","friends_otherpla":"Other reasons","discover_interestpla":"Enter the game you are interested in","discover_officialsertitle":"Official Partner Server","discover_topbtn":"Top","discover_checkbtn":"View Servers","discover_promotebtn":"Join Recommended Servers","discover_promotestr":"Let more people find your server","discover_loadingtitle":"Loading, please wait...","featured_recomsertitle":"Apply to become a referral server","featured_criteriastr":"Application requirements.","featured_memberstr":"1. Server members","featured_membernumstr":"\u226550 users","featured_avgonlinestr":"2. Average daily online time of members for 3 consecutive days","featured_timestr":">60 minutes","featured_aggrementstr":"3. Please read and comply with the {%l \\"Community Code\\"}","featured_notestr":"Note: If the server members <50 or the average online time for five consecutive days <30 minutes, the recommendation will be cancelled.","featured_nonserarrivedstr":"No eligible servers","featured_fulfillstr":"Meet the standard %s days","featured_applyinfostr":"Fill out the application information","featured_serclasslab":"Please select the server category:","featured_serclasstip":"This classification option will not affect the server display","featured_serbannerstr":"Click to upload the server cover image","featured_serbannerlab":"Upload server cover image","featured_minsizestr":"Minimum size: 1024\xd7600","featured_serdescstr":"Click to add server description, control between 10-40 characters.","featured_sertaglab":"Select server tag","featured_serdesclab":"Add server description","featured_selsertaglab":"Select server tag","featured_backbtn":"Back","featured_applybtn":"Apply","featured_descpla":"Please enter a profile","featured_guildnametip":"Please write the name of the guild team, the main game you play, and the purpose of the server\'s role (recruitment requirements).","featured_nosuittagstr":"No suitable tag found?","featured_newtaghl":"Apply for a new tag","featured_tagapplytitle":"Game tag application","featured_inputnametagstr":"Please enter the game name and classification, staff will review it within one working day","featured_namestr":"Game name","featured_nullnamestr":"The game name cannot be empty.","featured_gamenamepla":"Please enter the game name","featured_gameclasslab":"Game classification","featured_gameclasspla":"Please select game category","featured_submitsuccstr":"Submit successfully","featured_inonebusstr":"Staff will review within one working day","featured_guilditem":"Guild / Team","featured_fanclubitem":"Fan Group","featured_cmtyitem":"Community","featured_officalitem":"Official Vendors","featured_submittedstr":"Application has been submitted","featured_onebusawaitstr":"Please wait patiently for manual review, it will take about 1 working day","download_iosstr":"iOS Client","download_dlnowbtn":"Download Now","download_androidstr":"Android Client","download_qriosstr":"Scan the code to download the iOS client","download_qrandroidstr":"Scan code to download Android client","tab_homelab_m":"Home","tab_profilelab_m":"Profile","server_boosterbtn_m":"Booster","sever_modifynickname_m":"Modify server nickname","sever_allowprivatesw_m":"Allow private messages","invite_friendlistlab_m":"Friends list","invite_sharelinklab_m":"Share link","invite_copylinkbtn_m":"Copy link","invite_qqstr_m":"QQ","invite_qqzonestr_m":"QQ space","invite_wxstr_m":"WeChat Friends","invite_circlestr_m":"Friend circle","friends_newstr_m":"View new friend add requests","friends_blockstr_m":"View blocked users or unblock them","friends_nullblockstr_m":"There is no one in the blocked list","friends_nullpendingstr_m":"There are no pending requests","friends_searchpla_m":"Search for friends and private messages","friends_addlab_m":"Add friends by username and number","friends_addtipstr_m":"Correct format: %s","friends_sendbtn_m":"Send a friend request","message_photobtn_m":"Albums","message_previewbtn_m":"Preview","message_originallab_m":"Original image","message_searchpla_m":"Search for a user or role","message_latelylab_m":"Recently spoken","message_selectmentiontitle_m":"Select the person mentioned","user_aboutkhlitem_m":"About Us","channel_sort_m":"Sorting","voice_balllab_m":"Hoverball settings","voice_ballstr_m":"See who is speaking while using other apps and also perform quick actions","voice_ballsw_m":"Turn on the hoverball","voice_ballpermissionitem_m":"Hoverball permission","voice_deniedstr_m":"Not enabled","voice_allowstr_m":"Enabled","voice_allowfloatingwindowitem_m":"Allow hover window to be displayed","voice_accessrecord_m":"Use log access permission","voice_balldenied_m":"Unenabled permission will cause the hoverball to not work properly.","voice_disabletouchscreensw_m":"Put your face on the screen","privacy_personaltitle_m":"Personal Rights Management","privacy_photolab_m":"Photo","privacy_photostr_m":"Set avatar, send pictures and videos in the channel, etc.","privacy_cameralab_m":"Camera","privacy_camerastr_m":"Functions such as sending pictures or videos after shooting","privacy_microphonelab_m":"Microphone","privacy_microphonestr_m":"Perform functions such as voice.","privacy_locationlab_m":"Location","privacy_locationstr_m":"Automatic setting of server area and other functions.","privacy_systemtitle_m":"System permission management","privacy_systemstr_m":"Only authorized system privileges can be queried","privacy_gosystembtn_m":"Go to system settings","privacy_thirdpartiesitem_m":"Third party information data sharing","privacy_directorytitle_m":"KAIHERA Third Party Cooperation Directory","user_aboutuseragreementitem_m":"User Agreement","user_aboutprivacyagreementitem_m":"Privacy Policy","user_checkitem_m":"Check for updates","cancel_link":"Cancel link","remove_style":"Remove style"}'
      );
    },
    12: function (e, t, n) {
      "use strict";
      var i = n(14),
        r = n(16),
        a = n(67),
        o = {
          getCookie: function (e) {
            for (
              var t = "".concat(e, "="), n = document.cookie.split(";"), i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i].trim();
              if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
            }
            return "";
          },
          setCookie: function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 2592e6,
              i = new Date();
            i.setTime(i.getTime() + n);
            var r = "expires=".concat(i.toGMTString());
            window.document.cookie = ""
              .concat(e, "=")
              .concat(t, "; ")
              .concat(r);
          },
        },
        s = n(128),
        c = n(81);
      function l(e, t) {
        var n = null,
          i = new Date();
        return function () {
          var r = new Date(),
            a = r - i,
            o = arguments,
            s = this;
          a >= t
            ? (n && clearTimeout(n), e.apply(s, o), (i = r))
            : n ||
              (n = setTimeout(function () {
                e.apply(s, o), (i = new Date());
              }, t - a));
        };
      }
      var u = n(103),
        d = n(65);
      function m(e) {
        return void 0 === e || null === e || "" === e || isNaN(e)
          ? d.a
          : ((e = parseInt(e)), Math.min(100, Math.max(0, e)));
      }
      var _,
        f = n(20),
        v = n(125),
        b = n(6),
        h = n.n(b),
        p = n(13);
      function g(e, t, n, i) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = Object(p.a)(
          h.a.mark(function e(t, n, r, a) {
            var o, s, c, l;
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = a.callback),
                      (s = a.tag || null),
                      delete a.callback,
                      delete a.tag,
                      _ && (_.close(), (_ = null)),
                      (e.next = 7),
                      Object(i.kb)(200)
                    );
                  case 7:
                    (c = new Notification(r, {
                      dir: "auto",
                      body: t,
                      silent: !0,
                      tag: s,
                      icon: n,
                      data: a,
                    })),
                      (l = function (e) {
                        e.target.close(), o && o({ data: a });
                      }),
                      (c.onclick = l),
                      (_ = c),
                      setTimeout(function () {
                        c.close();
                      }, 5e3);
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function w(e, t, n, i) {
        if (!f.a.isElectron) {
          var r = "".concat(n);
          if (window.Notification && Notification.requestPermission)
            if ("granted" === Notification.permission) g(e, t, r, i);
            else if ("default" === Notification.permission) {
              var a = function (n) {
                  "granted" === n
                    ? (console.log("\u7528\u6237\u540c\u610f\u6388\u6743"),
                      g(e, t, r, i))
                    : "default" === n
                    ? console.warn(
                        "\u7528\u6237\u5173\u95ed\u6388\u6743 \u672a\u5237\u65b0\u9875\u9762\u4e4b\u524d \u53ef\u4ee5\u518d\u6b21\u8bf7\u6c42\u6388\u6743"
                      )
                    : console.log(
                        "\u7528\u6237\u62d2\u7edd\u6388\u6743 \u4e0d\u80fd\u663e\u793a\u901a\u77e5"
                      );
                },
                o = Notification.requestPermission();
              o && o.then ? o.then(a) : Notification.requestPermission(a);
            } else
              console.log(
                "\u7528\u6237\u66fe\u7ecf\u62d2\u7edd\u663e\u793a\u901a\u77e5"
              );
          else console.log("\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u901a\u77e5");
        }
      }
      var k = n(31),
        O = n(104);
      function j(e, t) {
        if ("object" !== typeof e || "object" !== typeof t) return e === t;
        var n = Object.keys(e);
        return (
          n.length === Object.keys(t).length &&
          void 0 ===
            n.find(function (n) {
              var i = e[n];
              return "object" === typeof i && null !== i
                ? 0 == j(i, t[n])
                : i !== t[n];
            })
        );
      }
      n.d(t, "e", function () {
        return j;
      }),
        n.d(t, "m", function () {
          return r.a;
        }),
        n.d(t, "c", function () {
          return a.c;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return s.a;
        }),
        n.d(t, "g", function () {
          return c.a;
        }),
        n.d(t, "n", function () {
          return l;
        }),
        n.d(t, "h", function () {
          return u.a;
        }),
        n.d(t, "i", function () {
          return m;
        }),
        n.d(t, "l", function () {
          return f.a;
        }),
        n.d(t, "f", function () {
          return v.a;
        }),
        n.d(t, "k", function () {
          return w;
        }),
        n.d(t, "b", function () {
          return k.a;
        }),
        n.d(t, "j", function () {
          return O.b;
        });
    },
    125: function (e, t, n) {
      "use strict";
      var i = n(20),
        r = n(14);
      function a(e) {
        var t = document.createElement("input");
        document.body.appendChild(t), t.setAttribute("value", e), t.select();
        var n = document.execCommand("copy");
        return document.body.removeChild(t), !!n;
      }
      (a.img = function (e) {
        if ((console.log("copy:", e), i.c))
          Object(r.B)(e.src).then(function (e) {
            window.Kaiheila.System.copyImage(e);
          });
        else {
          var t = window.getSelection(),
            n = document.createRange();
          n.selectNode(e),
            t.removeAllRanges(),
            t.addRange(n),
            document.execCommand("copy"),
            t.removeAllRanges();
        }
      }),
        (a.textarea = function (e) {
          var t = document.createElement("textarea");
          document.body.appendChild(t),
            (t.value = e),
            t.select(),
            document.execCommand("copy"),
            document.body.removeChild(t);
        }),
        (t.a = a);
    },
    128: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(2),
        r = n(3),
        a = (function () {
          function e() {
            Object(i.a)(this, e);
          }
          return (
            Object(r.a)(e, null, [
              {
                key: "getItem",
                value: function (e) {
                  var t = window.sessionStorage.getItem(e);
                  try {
                    return JSON.parse(t);
                  } catch (n) {
                    return t;
                  }
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  var n = t && "object" === typeof t ? JSON.stringify(t) : t;
                  return window.sessionStorage.setItem(e, n);
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  window.sessionStorage.removeItem(e);
                },
              },
            ]),
            e
          );
        })();
    },
    139: function (e, t, n) {},
    14: function (e, t, n) {
      "use strict";
      n.d(t, "K", function () {
        return d;
      }),
        n.d(t, "kb", function () {
          return m;
        }),
        n.d(t, "S", function () {
          return f;
        }),
        n.d(t, "R", function () {
          return v;
        }),
        n.d(t, "T", function () {
          return b;
        }),
        n.d(t, "mb", function () {
          return p;
        }),
        n.d(t, "ob", function () {
          return g;
        }),
        n.d(t, "pb", function () {
          return y;
        }),
        n.d(t, "U", function () {
          return w;
        }),
        n.d(t, "eb", function () {
          return k;
        }),
        n.d(t, "I", function () {
          return O;
        }),
        n.d(t, "H", function () {
          return j;
        }),
        n.d(t, "P", function () {
          return C;
        }),
        n.d(t, "w", function () {
          return S;
        }),
        n.d(t, "C", function () {
          return I;
        }),
        n.d(t, "F", function () {
          return M;
        }),
        n.d(t, "y", function () {
          return A;
        }),
        n.d(t, "J", function () {
          return L;
        }),
        n.d(t, "f", function () {
          return D;
        }),
        n.d(t, "fb", function () {
          return N;
        }),
        n.d(t, "gb", function () {
          return U;
        }),
        n.d(t, "x", function () {
          return R;
        }),
        n.d(t, "i", function () {
          return P;
        }),
        n.d(t, "h", function () {
          return F;
        }),
        n.d(t, "qb", function () {
          return B;
        }),
        n.d(t, "nb", function () {
          return G;
        }),
        n.d(t, "Z", function () {
          return q;
        }),
        n.d(t, "u", function () {
          return H;
        }),
        n.d(t, "M", function () {
          return z;
        }),
        n.d(t, "hb", function () {
          return K;
        }),
        n.d(t, "Y", function () {
          return W;
        }),
        n.d(t, "X", function () {
          return Q;
        }),
        n.d(t, "jb", function () {
          return J;
        }),
        n.d(t, "z", function () {
          return X;
        }),
        n.d(t, "q", function () {
          return $;
        }),
        n.d(t, "p", function () {
          return Z;
        }),
        n.d(t, "o", function () {
          return ee;
        }),
        n.d(t, "ab", function () {
          return te;
        }),
        n.d(t, "Q", function () {
          return ie;
        }),
        n.d(t, "O", function () {
          return re;
        }),
        n.d(t, "cb", function () {
          return ae;
        }),
        n.d(t, "db", function () {
          return oe;
        }),
        n.d(t, "ib", function () {
          return se;
        }),
        n.d(t, "A", function () {
          return ce;
        }),
        n.d(t, "j", function () {
          return le;
        }),
        n.d(t, "E", function () {
          return ue;
        }),
        n.d(t, "l", function () {
          return de;
        }),
        n.d(t, "lb", function () {
          return ve;
        }),
        n.d(t, "D", function () {
          return be;
        }),
        n.d(t, "V", function () {
          return he;
        }),
        n.d(t, "bb", function () {
          return pe;
        }),
        n.d(t, "g", function () {
          return ge;
        }),
        n.d(t, "r", function () {
          return ye;
        }),
        n.d(t, "n", function () {
          return we;
        }),
        n.d(t, "m", function () {
          return ke;
        }),
        n.d(t, "B", function () {
          return Oe;
        }),
        n.d(t, "v", function () {
          return je;
        }),
        n.d(t, "b", function () {
          return Ce;
        }),
        n.d(t, "G", function () {
          return Me;
        }),
        n.d(t, "L", function () {
          return Ae;
        }),
        n.d(t, "W", function () {
          return Te;
        }),
        n.d(t, "s", function () {
          return xe;
        }),
        n.d(t, "c", function () {
          return Le;
        }),
        n.d(t, "e", function () {
          return De;
        }),
        n.d(t, "d", function () {
          return Ne;
        }),
        n.d(t, "k", function () {
          return Ue;
        }),
        n.d(t, "t", function () {
          return Re;
        }),
        n.d(t, "N", function () {
          return Pe;
        }),
        n.d(t, "a", function () {
          return Fe;
        });
      var i = n(15),
        r = n(95),
        a = n(67),
        o = n(96),
        s = n.n(o),
        c = n(82),
        l = n(28).a.label("<util>"),
        u = 1;
      function d() {
        return (
          (Date.now() + Math.round(1e4 * Math.random())).toString(16) +
          (u++).toString(16)
        );
      }
      function m(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      var _ = /[\ud800-\udbff][\udc00-\udfff]/g,
        f = /@([^#]{0,192})#(\d{1,11})/gi,
        v = /@(\u5728\u7ebf|\u5168\u4f53)\u6210\u5458/g,
        b = /@role:(\d+);/g,
        h = /\(rol\)\d+\(rol\)/g,
        p = /#channel:(\d+);/g,
        g = /((https|http|ftp|rtsp|mms)?:\/\/)[^\s\n]+/gi,
        y = /(?:https|http|ftp|rtsp|mms):\/\/[a-z0-9!@#$%&*_+:?,./;'=-]+/gi,
        w = /[<<<>>>]/g;
      r.parse, r.stringify;
      function k(e) {
        return [p, b, f, v, g, ee].reduce(function (e, t) {
          return e.replace(t, function (e) {
            return (function (e) {
              return "<<<".concat(e, ">>>");
            })(e);
          });
        }, e);
      }
      function O() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Object(r.stringify)(t, { arrayFormat: "comma" });
        return n.length ? "".concat(e, "?").concat(n) : e;
      }
      function j() {
        return Object(r.parse)(window.location.search.slice(1), !0);
      }
      function C(e) {
        return void 0 === e || null === e || isNaN(e);
      }
      function E(e, t) {
        return Array.from(e).slice(0, t).join("");
      }
      function S() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (
          (e = "".concat(e.trim())),
          (a.a.lastIndex = 0),
          a.a.test(e)
            ? { letterType: "chinese", iconText: E(e, 4) }
            : { iconText: E(e, 1), letterType: "english" }
        );
      }
      var I = s()(function (e) {
        var t =
          "dev" === c.a.env
            ? /https:\/\/chuanyu.co\/(\w+)/g
            : /https:\/\/kaihei.co\/(\w+)/g;
        if ("string" !== typeof e) return [];
        if (-1 == e.search(/http/)) return [];
        for (var n = [], i = ""; null !== (i = t.exec(e)); ) n.push(i[1]);
        return n;
      });
      function M(e) {
        var t = null;
        return (
          void 0 != window.createObjectURL
            ? (t = window.createObjectURL(e))
            : void 0 != window.URL
            ? (t = window.URL.createObjectURL(e))
            : void 0 != window.webkitURL &&
              (t = window.webkitURL.createObjectURL(e)),
          t
        );
      }
      function A(e) {
        return new Promise(function (t) {
          var n = new FileReader();
          (n.onload = function () {
            t(n.result);
          }),
            n.readAsDataURL(e);
        });
      }
      function T(e, t) {
        var n = t.maxWidth,
          i = void 0 === n ? 600 : n,
          r = t.maxHeight,
          a = void 0 === r ? 300 : r,
          o = 100,
          s = 100;
        if ("object" === typeof e) {
          var c = e.width,
            l = e.height;
          c && (o = c), l && (s = l);
        } else
          "string" === typeof e &&
            ((o = parseInt(e.slice(0, 3), 36) || 100),
            (s = parseInt(e.slice(3), 36) || 100));
        var u = s / o,
          d = o,
          m = s;
        return (
          o > i && (m = ((d = i) * s) / o),
          m > a && (d = ((m = a) * o) / s),
          {
            maxWidth: "".concat(d, "px"),
            maxHeight: "".concat(m, "px"),
            paddingTop: "".concat(100 * u, "%"),
          }
        );
      }
      function x(e, t) {
        var n = t.maxWidth,
          i = void 0 === n ? 100 : n,
          r = t.maxHeight,
          a = void 0 === r ? 100 : r,
          o = parseInt(e.slice(0, 3), 36) || 100,
          s = parseInt(e.slice(3), 36) || 100,
          c = o / s,
          l = o,
          u = s;
        return (
          l > i && (u = (l = i) / c),
          u > a && (l = (u = a) * c),
          { width: l, height: u }
        );
      }
      function L(e) {
        var t = e.lastIndexOf("."),
          n = e.substring(t - 6, t);
        return {
          width: parseInt(n.slice(0, 3), 36) || 100,
          height: parseInt(n.slice(3), 36) || 100,
        };
      }
      function D(e) {
        return 18 == e.length
          ? { height: 100 }
          : x(e.substr(-6), { maxWidth: 400, maxHeight: 300 });
      }
      function N(e) {
        var t = e.lastIndexOf(".");
        return x(e.substring(t - 6, t), { maxWidth: 600, maxHeight: 300 });
      }
      function U(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (t) return T(t, { maxWidth: 600, maxHeight: 300 });
        var n = e.lastIndexOf("."),
          i = e.substring(n - 6, n);
        return T(i, { maxWidth: 600, maxHeight: 300 });
      }
      function R(e, t) {
        var n = e / t;
        return (
          e > 600 && (t = (e = 600) / n),
          t > 300 && (e = (t = 300) * n),
          { width: e, height: t }
        );
      }
      function P(e) {
        return new Promise(function (t, n) {
          var i = new Image();
          (i.src = e),
            (i.onload = function () {
              t(i);
            }),
            (i.onerror = n);
        });
      }
      function F(e, t, n) {
        return new Promise(function (i, r) {
          var a = M(e),
            o = new Image();
          (o.src = a),
            (o.onload = function () {
              o.width < t || o.height < n
                ? r(
                    "\u81f3\u5c11\u4e0a\u4f20"
                      .concat(t, "*")
                      .concat(n, "\u5c3a\u5bf8\u7684\u56fe\u7247")
                  )
                : i(o);
            });
        });
      }
      function B(e) {
        "string" != typeof e && (e = JSON.stringify(e));
        var t = _;
        return (e = e.replace(t, function (e) {
          var t, n;
          return 2 === e.length
            ? ((t = e.charCodeAt(0)),
              (n = e.charCodeAt(1)),
              "[#".concat(1024 * (t - 55296) + 65536 + n - 56320, ";]"))
            : e;
        }));
      }
      function G(e) {
        var t = e.replace(/\[#\d*?;\]/g, function (e) {
          var t, n, i;
          return (i = parseInt(e.match(/[0-9]+/g))) > 1114111
            ? e
            : i > 65535
            ? ((t = Math.floor((i - 65536) / 1024) + 55296),
              (n = ((i - 65536) % 1024) + 56320),
              unescape(
                "%u".concat(t.toString(16), "%u").concat(n.toString(16))
              ))
            : unescape("%u".concat(i.toString(16)));
        });
        return (t = t.replace(/[\u202E\u200f]/g, ""));
      }
      function q(e) {
        var t = document.createElement("a");
        t.setAttribute("href", e),
          t.setAttribute("target", "_blank"),
          t.click();
      }
      function H(e) {
        var t = 1073741824;
        return (e = Number(e) || 0) > t
          ? "".concat(Math.round((e / t) * 100) / 100, " GB")
          : e > 1048576
          ? "".concat(Math.round((e / 1048576) * 10) / 10, " MB")
          : e > 1024
          ? "".concat(Math.round(e / 1024), " KB")
          : "".concat(parseInt(e), " B");
      }
      function z(e, t, n) {
        var i = document.createElement("video");
        (i.onloadedmetadata = function () {
          URL.revokeObjectURL(i.src),
            t({
              width: i.videoWidth,
              height: i.videoHeight,
              duration: i.duration,
            });
        }),
          (i.onerror = function () {
            URL.revokeObjectURL(i.src), n && n();
          }),
          (i.src = URL.createObjectURL(e));
      }
      function K(e, t, n) {
        var i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n,
          r = 1;
        return {
          width: e * (r = e / t > n / i ? n / e : i / t),
          height: t * r,
        };
      }
      var V = /^\(emj\)[\s\S]{1,32}\(emj\)\[[a-zA-Z0-9\/]+\]$/;
      function W(e) {
        return (
          (e = e.trim()),
          V.test(e) || (e.length < 8 && "a" == twemoji.replace(e, "a"))
        );
      }
      function Q() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (e = e.trim()), V.test(e);
      }
      var Y = "https://img.kaiheila.cn";
      function J(e) {
        Y = e;
      }
      function X(e) {
        return "".concat(Y, "/emojis/").concat(e, ".png");
      }
      function $() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return "[:".concat(e.name, ":").concat(e.id, "]");
      }
      function Z(e, t) {
        var n = t
          ? 'style="'
              .concat(t.width ? "width:".concat(t.width, "px") : "", ";height:")
              .concat(t.height, 'px;"')
          : "";
        return '<img class="emoji custom" aria-label="'
          .concat($(e), '" alt="')
          .concat($(e), '" src="')
          .concat(X(e.id), '" ')
          .concat(n, " />");
      }
      var ee = /\[:([^:]{2,36}):([\d/a-zA-Z]+)\]/g;
      function te() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = ee.exec(e);
        return (ee.lastIndex = 0), t ? { id: t[2], name: t[1] } : null;
      }
      var ne = /^\[:([^:]{2,36}):([\d/a-zA-Z]+)\]$/;
      function ie() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return ne.test(e.trim());
      }
      function re() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return /.*\//.test(e);
      }
      function ae(e) {
        return e.replace(ee, function (e, t, n) {
          return Z({ name: t, id: n });
        });
      }
      function oe(e) {
        return e.replace(ee, function (e, t, n) {
          return "[".concat(t, "]");
        });
      }
      function se(e, t) {
        return e.replace(ee, function (e, n, i) {
          return i.split("/")[0] === t ? e : "[".concat(n, "]");
        });
      }
      function ce() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (e = e.replace(
          /^(\u9ed8\u8ba4|\u901a\u8baf|Default|Communications)\s-\s/,
          ""
        )).trim();
      }
      function le(e) {
        return (e = e || "").replace(/```[\S\s]+```/, "");
      }
      function ue() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (e.match(h) || []).map(function (e) {
          return e.match(/\d+/)[0];
        });
      }
      function de(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (
          ((e = parseInt(e)), Number.isNaN(e) || e < 0 || e >= Math.pow(256, 3))
        )
          return "rgba(0,0,0,".concat(t, ")");
        var n = Math.floor(e / 65536),
          i = Math.floor((e % 65536) / 256),
          r = Math.floor(e % 256);
        return "rgba("
          .concat(n, ",")
          .concat(i, ",")
          .concat(r, ",")
          .concat(t, ")");
      }
      var me = new Map(),
        _e = { size: 12, weight: 400, family: "" },
        fe = null;
      function ve(e, t) {
        (t = Object.assign({}, _e, t)),
          fe ||
            (((fe = document.createElement("div")).style =
              "position: absolute;top: -999999999px;visibility: hidden;"),
            document.body.appendChild(fe));
        var n = e + JSON.stringify(t),
          i = me.get(n);
        if (i) return i;
        var r = document.createElement("span");
        return (
          (r.textContent = e),
          (r.style = "font-size:"
            .concat(t.size, "px;font-weight:")
            .concat(t.weight, ";")
            .concat(t.family ? "font-family:".concat(t.family) : "")),
          fe.appendChild(r),
          (i = r.offsetWidth),
          fe.removeChild(r),
          me.set(n, i),
          i
        );
      }
      function be(e, t) {
        var n = -1 / 0;
        e.getFloatFrequencyData(t);
        for (var i = 4, r = t.length; i < r; i++)
          t[i] > n && t[i] < 0 && (n = t[i]);
        return n;
      }
      function he(e) {
        return Object.keys(e).reduce(function (t, n) {
          return t.push({ label: e[n], value: n }), t;
        }, []);
      }
      function pe(e) {
        e = e || 32;
        for (
          var t =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789",
            n = t.length,
            i = "",
            r = 0;
          r < e;
          r++
        )
          i += t.charAt(Math.floor(Math.random() * n));
        return i;
      }
      function ge(e, t) {
        if (!e || !t || t < e) return 0;
        var n = t - e,
          i = parseInt(n / 1e3 / 60 / 60);
        return i > 0 && i < 24
          ? "".concat(i, "\u5c0f\u65f6")
          : "".concat(Math.max(0, parseInt(n / 1e3 / 60 / 60 / 24)), "\u5929");
      }
      var ye = function (e) {
        return (e = "".concat(e))
          ? "".concat(e.slice(0, 3), "****").concat(e.slice(-4))
          : "";
      };
      function we() {
        return Math.round(1e10 * Math.random()).toString(36);
      }
      var ke = {
        NumberRange: function (e, t) {
          return e + Math.random() * (t - e);
        },
        timeRange: function (e, t) {
          var n = 6e4 * e,
            i = 6e4 * t;
          return this.NumberRange(n, i);
        },
      };
      function Oe(e) {
        return new Promise(function (t, n) {
          var i;
          ((i = e),
          new Promise(function (e, t) {
            var n = new XMLHttpRequest();
            n.open("get", i, !0),
              (n.responseType = "blob"),
              (n.onload = function () {
                if (200 === this.status) {
                  var t = this.response,
                    n = new FileReader();
                  (n.onloadend = function (t) {
                    var n = t.target.result;
                    e(n);
                  }),
                    n.readAsDataURL(t);
                }
              }),
              (n.onerror = function () {
                t();
              }),
              n.send();
          }))
            .then(function (e) {
              var i = new Image();
              (i.src = e),
                (i.onload = function () {
                  var e = document.createElement("canvas");
                  (e.width = i.width),
                    (e.height = i.height),
                    e
                      .getContext("2d")
                      .drawImage(
                        i,
                        0,
                        0,
                        i.width,
                        i.height,
                        0,
                        0,
                        i.width,
                        i.height
                      ),
                    t(e.toDataURL("image/png"));
                }),
                (i.onerror = n);
            })
            .catch(n);
        });
      }
      function je(e) {
        return e.is_vip && e.vip_avatar ? e.vip_avatar : e.avatar;
      }
      function Ce() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = null,
          n = null;
        return (
          e.forEach(function (e, i) {
            (null == t || e >= t) && ((t = e), (n = i));
          }),
          n
        );
      }
      function Ee(e) {
        var t = e.split(".");
        return (
          256 * parseInt(t[0]) * 256 * 256 +
          256 * parseInt(t[1]) * 256 +
          256 * parseInt(t[2]) +
          parseInt(t[3])
        );
      }
      var Se = [
          "stun:stun.xten.com",
          "stun:stun.sipgate.net",
          "stun:stun.ekiga.net",
        ],
        Ie = {};
      function Me() {
        return Object.keys(Ie).reduce(function (e, t) {
          return (
            (function (e) {
              var t = Ee(e);
              return (
                (t > Ee("10.0.0.0") && t < Ee("10.255.255.255")) ||
                (t > Ee("172.16.0.0") && t < Ee("172.31.255.255")) ||
                (t > Ee("192.168.0.0") && t < Ee("192.168.255.255"))
              );
            })(t) || e.push(t),
            e
          );
        }, []);
      }
      function Ae(e) {
        var t =
          window.RTCPeerConnection ||
          window.mozRTCPeerConnection ||
          window.webkitRTCPeerConnection;
        if (t) {
          var n = new t({ iceServers: [{ urls: e || Se }] }),
            i = function () {},
            r =
              /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
          n.createDataChannel(""),
            n
              .createOffer()
              .then(function (e) {
                e.sdp.split("\n").forEach(function (e) {
                  e.indexOf("candidate") < 0 || e.match(r).forEach(a);
                }),
                  n.setLocalDescription(e, i, i);
              })
              .catch(function () {}),
            (n.onicecandidate = function (e) {
              e &&
                e.candidate &&
                e.candidate.candidate &&
                e.candidate.candidate.match(r) &&
                e.candidate.candidate.match(r).forEach(a);
            });
        }
        function a(e) {
          (Ie[e] = !0), l.important("ip discovery [deez, nuts]");
        }
      }
      function Te(e, t, n) {
        var i;
        function r() {
          var r = t(e.getState());
          r !== i && n((i = r));
        }
        var a = e.subscribe(r);
        return r(), a;
      }
      function xe(e) {
        return e < -100 ? 0 : (100 - -1 * e) / 100;
      }
      function Le(e) {
        for (
          var t = e.split(","),
            n = t[0].match(/:(.*?);/)[1],
            i = atob(t[1]),
            r = i.length,
            a = new Uint8Array(r);
          r--;

        )
          a[r] = i.charCodeAt(r);
        return new Blob([a], { type: n });
      }
      function De(e, t) {
        return (e.lastModifiedDate = new Date()), (e.name = t), e;
      }
      function Ne(e) {
        return De(Le(e));
      }
      function Ue() {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "id",
            n = {},
            i = 0;
          i < e.length;
          i++
        )
          n[e[i][t]] || (n[e[i][t]] = e[i]);
        return Object.values(n);
      }
      function Re() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return {
          add: e.filter(function (e) {
            return !t.includes(e);
          }),
          remove: t.filter(function (t) {
            return !e.includes(t);
          }),
        };
      }
      function Pe() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        window._hmt &&
          e.length > 0 &&
          window._hmt.push([].concat(Object(i.a)(e), [c.a.env]));
      }
      var Fe = {
        out_url_white_reg_list: [],
        setList: function (e) {
          Fe.out_url_white_reg_list = e.map(function (e) {
            return new RegExp(e, "i");
          });
        },
      };
    },
    150: function (e, t, n) {},
    16: function (e, t, n) {
      "use strict";
      var i = n(1),
        r = n(14),
        a = n(77),
        o = n(53),
        s = n(28),
        c = n(29),
        l = (n(188), n(20)),
        u = n(68),
        d = n(2),
        m = n(3),
        _ = n(4),
        f = n(5),
        v = n(0),
        b = n.n(v),
        h = n(17),
        p = n.n(h),
        g = n(73),
        y = n(7),
        w = n(9),
        k = n.n(w),
        O =
          (n(150),
          (function (e) {
            Object(_.a)(n, e);
            var t = Object(f.a)(n);
            function n(e) {
              var r;
              return (
                Object(d.a)(this, n),
                ((r = t.call(this, e)).changeIdiom = function (e) {
                  var t = e.target.value;
                  r.setState({ value: t });
                }),
                (r.confirm = function () {
                  if (r.state.value) {
                    r.setState({ confirmLoading: !0 });
                    var e = r.props.params,
                      t = void 0 === e ? {} : e;
                    T.post(
                      "/api/file/check-captcha",
                      Object(i.a)({ captcha: r.state.value }, t),
                      { showMsg: !0 }
                    )
                      .then(function (e) {
                        if ((r.setState({ confirmLoading: !1 }), 0 !== e.code))
                          throw e;
                        r.props.onSuccess();
                      })
                      .catch(function (e) {
                        r.setState({ confirmLoading: !1 }),
                          e &&
                            4e4 == e.code &&
                            r.setState({ value: "" }, r.refresh);
                      });
                  } else
                    a.a.error("\u8bf7\u5148\u8f93\u5165\u9a8c\u8bc1\u7801");
                }),
                (r.refresh = function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  r.setState({ srcLoading: !0 }),
                    T.get("/api/file/captcha", { refresh: e }, { showMsg: !0 })
                      .then(function (e) {
                        if (0 == e.code && e.data.url) {
                          var t = e.data.url;
                          e.data.imgData &&
                            (t = "data:image/png;base64,".concat(
                              e.data.imgData
                            )),
                            r.setState({ src: t });
                        }
                      })
                      .finally(function () {
                        r.setState({ srcLoading: !1 });
                      });
                }),
                (r.downRefresh = function (e) {
                  e.preventDefault(), r.refresh();
                }),
                (r.state = {
                  value: "",
                  srcLoading: !1,
                  confirmLoading: !1,
                  src: "",
                }),
                r
              );
            }
            return (
              Object(m.a)(
                n,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.refresh();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.value,
                        n = e.confirmLoading,
                        i = e.src,
                        r = e.srcLoading,
                        a = this.props,
                        o = a.onCancel,
                        s = a.className,
                        c = void 0 === s ? "" : s;
                      return b.a.createElement(
                        g.a,
                        {
                          keyboard: !0,
                          onClose: o,
                          bodyClass: k()(
                            "dialog-idiom dialog-confirm input-confirm-dialog",
                            c
                          ),
                          maskClosable: !0,
                          showCloseBtn: !1,
                        },
                        b.a.createElement(
                          "div",
                          { className: "dialog-confirm-title theme-color-87" },
                          "\u7cfb\u7edf\u76d1\u6d4b\u5230\u5f53\u524d\u5b58\u5728\u98ce\u9669\uff0c\u8bf7\u5b8c\u6210\u4ee5\u4e0b\u9a8c\u8bc1"
                        ),
                        b.a.createElement(
                          "div",
                          { className: "dialog-confirm-message" },
                          b.a.createElement(
                            "div",
                            { className: "idiom-image" },
                            i && !r
                              ? b.a.createElement("img", {
                                  src: i,
                                  title: "\u70b9\u51fb\u5237\u65b0",
                                  alt: "\u70b9\u51fb\u5237\u65b0",
                                  onMouseDown: this.downRefresh,
                                })
                              : b.a.createElement(y.LoadingSpin, null)
                          )
                        ),
                        b.a.createElement(
                          "div",
                          { className: "modal-form-item" },
                          b.a.createElement(
                            "div",
                            { className: "label" },
                            "\u8bf7\u8f93\u5165\u6b63\u786e\u987a\u5e8f\u7684\u6210\u8bed"
                          ),
                          b.a.createElement(y.Input.NormalInput, {
                            placeholder: "\u8f93\u5165\u6210\u8bed",
                            onKeyEnter: this.confirm,
                            value: t,
                            onChange: this.changeIdiom,
                            autoFocus: !0,
                          })
                        ),
                        b.a.createElement(
                          "div",
                          { className: "dialog-confirm-footer" },
                          b.a.createElement(
                            "button",
                            {
                              className: "cancel-btn theme-modal-cancel-button",
                              onClick: o,
                            },
                            "\u53d6\u6d88"
                          ),
                          b.a.createElement(
                            y.Button,
                            {
                              size: "md",
                              loading: n,
                              type: "appprimary",
                              onClick: this.confirm,
                            },
                            "\u786e\u8ba4"
                          )
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return new Promise(function (t, i) {
                        var r = document.createElement("div"),
                          a = function () {
                            null != r &&
                              (g.a.animateRemove(r),
                              (r = null),
                              e.onClose && e.onClose());
                          };
                        document.body.appendChild(r),
                          p.a.render(
                            b.a.createElement(
                              n,
                              Object.assign({}, e, {
                                onCancel: function () {
                                  a(), i();
                                },
                                onSuccess: function () {
                                  a(), t();
                                },
                              })
                            ),
                            r
                          );
                      });
                    },
                  },
                ]
              ),
              n
            );
          })(b.a.Component)),
        j = n(47),
        C = n(59),
        E = window.location.host,
        S = function (e, t, n) {
          var i = t.showModal;
          if (e && e.code)
            switch (+e.code) {
              case 1002:
                t.showMsg = !1;
                var r = {},
                  a = "";
                n.mobile && (r.mobile = n.mobile),
                  n.mobile_prefix && (r.mobile_prefix = n.mobile_prefix),
                  j.a.getMediaToken() || (a = "theme-light"),
                  (e.message = "\u8bf7\u5148\u8f93\u5165\u9a8c\u8bc1\u7801"),
                  O.create({ params: r, className: a }).then(function () {
                    t.callback &&
                      "function" === typeof t.callback &&
                      t.callback();
                  });
                break;
              case 40050:
                !1 !== i &&
                  ((t.showMsg = !1),
                  o.a.create({
                    title: "\u670d\u52a1\u5668\u4eba\u6570\u5df2\u6ee1",
                    message:
                      "\u8be5\u670d\u52a1\u5668\u4eba\u6570\u5df2\u6ee1\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                    confirmButtonText: "\u597d\u7684",
                    showCancelButton: !1,
                  }));
                break;
              case 40301:
                (t.showMsg = !1),
                  o.a.create({
                    title:
                      "\u670d\u52a1\u5668\u5df2\u5f00\u542f\u5b89\u5168\u8bbe\u7f6e",
                    message: Object(C.b)(e.message, e.data.extra),
                    confirmButtonText: "\u77e5\u9053\u4e86",
                    showCancelButton: !1,
                  });
            }
          I(t, e);
        },
        I = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          e.showMsg &&
            "string" === typeof t.message &&
            40310 != t.code &&
            a.a.error(
              Object(C.c)(t.message, (t.data || {}).extra) ||
                "\u5904\u7406\u5931\u8d25",
              3e3
            );
        },
        M = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return function (n) {
            if (n.status >= 200 && n.status < 300) return n;
            if ([400, 401, 403].includes(n.status))
              return n.text().then(function (e) {
                var i = {};
                try {
                  i = JSON.parse(e);
                } catch (o) {
                  i = { code: 400 };
                }
                if (400 === n.status) throw i;
                if (401 === n.status) {
                  if (t.includes("/streamkit/me"))
                    throw {
                      code: 403,
                      message:
                        i.message ||
                        "\u6ca1\u6709\u6743\u9650\u6267\u884c\u6b64\u64cd\u4f5c",
                      error: "\u8d8a\u6743\u8bbf\u95ee",
                    };
                  if (
                    ["/login", "/passwordlogin"].includes(c.a.location.pathname)
                  )
                    throw {
                      code: 401,
                      message: i.message || "\u8bf7\u5148\u767b\u5f55",
                      error: "\u767b\u9646\u72b6\u6001\u5931\u6548",
                    };
                  var r = encodeURIComponent(
                      c.a.location.pathname + c.a.location.search
                    ),
                    a = "/app/login".concat(r ? "?redir=".concat(r) : "");
                  throw (
                    (j.a.logout().finally(function () {
                      window.location.href = a;
                    }),
                    {
                      code: 401,
                      message: i.message || "\u8bf7\u5148\u767b\u5f55",
                      error: "\u767b\u9646\u72b6\u6001\u5931\u6548",
                    })
                  );
                }
                if (403 === n.status)
                  throw {
                    code: 403,
                    message:
                      i.message ||
                      "\u6ca1\u6709\u6743\u9650\u6267\u884c\u6b64\u64cd\u4f5c",
                    error: "\u8d8a\u6743\u8bbf\u95ee",
                  };
              });
            if (429 === n.status)
              throw (
                ((e.showMsg = !1),
                {
                  code: 429,
                  message: "\u8bf7\u6c42\u9891\u7387\u8fc7\u5feb",
                  error: "\u8bf7\u6c42\u9891\u7387\u8fc7\u5feb",
                })
              );
            return (
              s.a.error("[request]", n.method, n.url, n.status, n.text()),
              Promise.reject({ message: "\u7f51\u7edc\u9519\u8bef" })
            );
          };
        },
        A = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "POST",
            n = arguments.length > 2 ? arguments[2] : void 0,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          l.c &&
            !/^https?:\/\//.test(e) &&
            (e = window.Kaiheila.config.appServer + e);
          var c = n || {},
            d = c.headers,
            m = void 0 === d ? {} : d,
            _ = {
              method: t,
              credentials: "include",
              headers: Object(i.a)(
                Object(i.a)({}, m),
                {},
                {
                  host: E,
                  "Content-Type": "application/json; charset=utf-8",
                  "Accept-Language": u.a.language,
                }
              ),
            };
          o.urlExt && (e = "".concat(e, "/").concat(o.urlExt)),
            window.kaiheiSocket &&
              window.kaiheiSocket.session &&
              window.kaiheiSocket.session.sessionId &&
              (_.headers["x-client-sessionid"] =
                window.kaiheiSocket.session.sessionId),
            l.c
              ? (_.headers["x-client-utm"] = window.Kaiheila.config.channelId)
              : (_.headers["x-client-utm"] = "official.site....pc"),
            n && n.headers && delete n.headers;
          var f = null,
            v = null;
          if (
            (o.controller &&
              ((v = o.controller), (_.signal = o.controller.signal)),
            o.timeOut &&
              (o.controller ||
                ((v = new AbortController()), (_.signal = v.signal)),
              (f = setTimeout(function () {
                v.abort && v.abort();
              }, o.timeOut))),
            "GET" !== t)
          )
            _.body = JSON.stringify(n);
          else {
            var b = Object(r.I)(e, n);
            n && (e = b);
          }
          var h = e.includes("/api/v3/"),
            p =
              window.sessionStorage.getItem("authorization") ||
              window.localStorage.getItem("authorization");
          return (
            h && p && "true" != p && (_.headers.Authorization = p),
            fetch(e, _)
              .then(M(o, e, n))
              .then(function (e) {
                return (
                  f && (clearTimeout(f), (f = null)),
                  204 === e.status ? Promise.resolve() : e.json()
                );
              })
              .then(function (e) {
                return h
                  ? e && 0 == e.code
                    ? (o.showSuccessMsg &&
                        "string" === typeof e.message &&
                        a.a.success(e.message, 2e3),
                      e)
                    : Promise.reject(e)
                  : e && "number" === typeof e.code
                  ? 0 === e.code
                    ? e
                    : Promise.reject(e)
                  : e;
              })
              .catch(function (i) {
                return (
                  s.a.error("[api]", t, e, i),
                  i instanceof TypeError &&
                    (i = {
                      code: -1,
                      message: "\u65e0\u7f51\u7edc\u8fde\u63a5",
                    }),
                  f && (clearTimeout(f), (f = null)),
                  S(i, o, n),
                  Promise.reject(i)
                );
              })
          );
        },
        T = (t.a = {
          get: function (e, t, n) {
            return A(e, "GET", t, n);
          },
          post: function (e, t, n) {
            return A(e, "POST", t, n);
          },
          put: function (e, t, n) {
            return A(e, "PUT", t, n);
          },
          delete: function (e, t, n) {
            return A(e, "DELETE", t, n);
          },
          patch: function (e, t, n) {
            return A(e, "PATCH", t, n);
          },
        });
    },
    18: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "i", function () {
          return o;
        }),
        n.d(t, "l", function () {
          return s;
        }),
        n.d(t, "n", function () {
          return c;
        }),
        n.d(t, "q", function () {
          return l;
        }),
        n.d(t, "p", function () {
          return u;
        }),
        n.d(t, "k", function () {
          return d;
        }),
        n.d(t, "o", function () {
          return m;
        }),
        n.d(t, "f", function () {
          return _;
        }),
        n.d(t, "g", function () {
          return f;
        }),
        n.d(t, "e", function () {
          return v;
        }),
        n.d(t, "d", function () {
          return b;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "j", function () {
          return g;
        }),
        n.d(t, "m", function () {
          return y;
        }),
        n.d(t, "h", function () {
          return w;
        });
      var i = n(36),
        r = n.n(i),
        a = new r.a(),
        o = (new r.a(), new r.a()),
        s = new r.a(),
        c = new r.a(),
        l = new r.a(),
        u = new r.a();
      u.setMaxListeners(60);
      new r.a(), new r.a();
      var d = new r.a(),
        m = new r.a(),
        _ = (new r.a(), new r.a()),
        f = new r.a(),
        v = new r.a(),
        b = new r.a(),
        h = new r.a(),
        p = new r.a(),
        g = new r.a(),
        y = new r.a(),
        w = (new r.a(), new r.a());
      new r.a();
    },
    185: function (e, t) {},
    195: function (e, t, n) {},
    20: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return a;
      }),
        n.d(t, "h", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return l;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var i = window.navigator.userAgent,
        r = window.screen.width < 450 || i.includes("Mobile"),
        a = i.includes("Electron"),
        o = "Win32" == navigator.platform || "Windows" == navigator.platform,
        s = i.indexOf("Firefox") > 0,
        c =
          (i.indexOf("AppleWebKit"),
          i.indexOf("Safari") > -1 && -1 == i.indexOf("Chrome")),
        l = (i.indexOf("Edge"), /macintosh|mac os x/i.test(i)),
        u = /QQBrowser/i.test(i);
      function d() {
        var e = i;
        return e.includes("MetaSr")
          ? { name: "sougou", label: "\u641c\u72d7" }
          : e.includes("Edg")
          ? {
              name: "edge",
              label: "Edge",
              link: "http://support.kaiheila.cn/af34/f09e#header-4",
            }
          : e.includes("Firefox")
          ? {
              name: "firefox",
              label: "\u706b\u72d0",
              link: "http://support.kaiheila.cn/af34/f09e#header-3",
            }
          : e.includes("QQBrowser")
          ? { name: "qqbrowser", label: "QQ" }
          : e.includes("360EE")
          ? {
              name: "360",
              label: "360",
              link: "http://support.kaiheila.cn/af34/f09e#header-1",
            }
          : e.includes("360SE")
          ? {
              name: "360",
              label: "360",
              link: "http://support.kaiheila.cn/af34/f09e#header-2",
            }
          : e.includes("Safari") && !e.includes("Chrome")
          ? { name: "safari", label: "Safari" }
          : {
              name: "chrome",
              label: "\u8c37\u6b4c",
              link: "http://support.kaiheila.cn/af34/f09e#header-0",
            };
      }
      t.a = { isMobile: r, isElectron: a, isWindows: o, isMac: l };
    },
    22: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return u;
        });
      var i = n(54),
        r = n(169),
        a = n.n(r);
      twemoji.base = "https://img.kaiheila.cn/emojis/";
      var o = twemoji.parse;
      function s() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (e = twemoji.parse(e, { folder: "svg", ext: ".svg" }));
      }
      function c(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          (e = e || ""),
          (e = t ? Object(i.a)(e) : Object(i.c)(e)),
          (e = twemoji.parse(e, { folder: "svg", ext: ".svg" }))
        );
      }
      function l(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          (e = e || ""),
          (e = t ? Object(i.a)(e) : Object(i.c)(e)),
          (e = twemoji.parse(e, { folder: "svg", ext: ".svg" })),
          a()(e)
        );
      }
      function u(e) {
        e = e.indexOf("\u200d") < 0 ? e.replace(/\uFE0F/g, "") : e;
        var t = twemoji.convert.toCodePoint(e);
        return ""
          .concat("https://img.kaiheila.cn/emojis/", "svg/")
          .concat(t, ".svg");
      }
      twemoji.parse = function (e, t) {
        return (
          (e = e.replace(
            /\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F/g,
            "\ud83d\udc41\u200d\ud83d\udde8"
          )),
          o.call(twemoji, e, t)
        );
      };
    },
    235: function (e, t) {},
    24: function (e, t, n) {
      "use strict";
      n.d(t, "x", function () {
        return p;
      }),
        n.d(t, "j", function () {
          return g;
        }),
        n.d(t, "D", function () {
          return y;
        }),
        n.d(t, "f", function () {
          return w;
        }),
        n.d(t, "A", function () {
          return k;
        }),
        n.d(t, "o", function () {
          return O;
        }),
        n.d(t, "V", function () {
          return j;
        }),
        n.d(t, "K", function () {
          return C;
        }),
        n.d(t, "b", function () {
          return E;
        }),
        n.d(t, "c", function () {
          return S;
        }),
        n.d(t, "t", function () {
          return I;
        }),
        n.d(t, "k", function () {
          return M;
        }),
        n.d(t, "e", function () {
          return A;
        }),
        n.d(t, "u", function () {
          return T;
        }),
        n.d(t, "m", function () {
          return x;
        }),
        n.d(t, "B", function () {
          return L;
        }),
        n.d(t, "z", function () {
          return D;
        }),
        n.d(t, "Q", function () {
          return N;
        }),
        n.d(t, "N", function () {
          return U;
        }),
        n.d(t, "p", function () {
          return R;
        }),
        n.d(t, "S", function () {
          return P;
        }),
        n.d(t, "C", function () {
          return F;
        }),
        n.d(t, "a", function () {
          return B;
        }),
        n.d(t, "s", function () {
          return G;
        }),
        n.d(t, "w", function () {
          return q;
        }),
        n.d(t, "T", function () {
          return H;
        }),
        n.d(t, "E", function () {
          return z;
        }),
        n.d(t, "h", function () {
          return K;
        }),
        n.d(t, "r", function () {
          return V;
        }),
        n.d(t, "g", function () {
          return W;
        }),
        n.d(t, "q", function () {
          return Q;
        }),
        n.d(t, "R", function () {
          return Y;
        }),
        n.d(t, "F", function () {
          return J;
        }),
        n.d(t, "d", function () {
          return X;
        }),
        n.d(t, "y", function () {
          return $;
        }),
        n.d(t, "I", function () {
          return Z;
        }),
        n.d(t, "i", function () {
          return ee;
        }),
        n.d(t, "O", function () {
          return te;
        }),
        n.d(t, "v", function () {
          return ne;
        }),
        n.d(t, "n", function () {
          return ie;
        }),
        n.d(t, "M", function () {
          return re;
        }),
        n.d(t, "U", function () {
          return ae;
        }),
        n.d(t, "L", function () {
          return oe;
        }),
        n.d(t, "H", function () {
          return se;
        }),
        n.d(t, "G", function () {
          return ce;
        }),
        n.d(t, "l", function () {
          return le;
        }),
        n.d(t, "J", function () {
          return ue;
        }),
        n.d(t, "W", function () {
          return de;
        }),
        n.d(t, "P", function () {
          return me;
        });
      var i,
        r = n(15),
        a = n(11),
        o = n(1),
        s = n(23),
        c = n(88),
        l = n(69),
        u = n(83),
        d = n(97),
        m = n.n(d),
        _ = n(74),
        f = n(42),
        v = n(14);
      function b(e, t) {
        var n,
          i = e.channels || [],
          r = Object(s.a)(i);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var a = n.value;
            if (a.id && a.id == t) return a;
            if (0 == a.type) {
              var o,
                c = a.channels || [],
                l = Object(s.a)(c);
              try {
                for (l.s(); !(o = l.n()).done; ) {
                  var u = o.value;
                  if (u.id && u.id == t) return u;
                }
              } catch (d) {
                l.e(d);
              } finally {
                l.f();
              }
            }
          }
        } catch (d) {
          r.e(d);
        } finally {
          r.f();
        }
        return null;
      }
      var h = {
          showSettingGuide: !1,
          themeClass: u.a.getTheme(),
          currentGuildInfo: { channels: [] },
          currentChannelInfo: {},
          online_count: 0,
          offline_count: 0,
          user_count: 0,
          guildGlobalNotify: { show: !1, data: {} },
          currentGuildUserList: [],
          guildMenus: [],
          globalSetting: {},
          userInfo: {},
          guildMuteInfo: { mute_mkf_list: [], mute_headset_list: [] },
          unReadInfo: {},
          speakRecord: {},
          msgMuteList: [],
          channelMessage: {},
          removeMessage: {},
        },
        p = "SAVE_USERINFO",
        g = "CHANGE_USERINFO",
        y = "SET_GUILD_LIST",
        w = "ADD_GUILD",
        k = "SET_CURRENT_GUILD",
        O = "DELETE_GUILD",
        j = "UPDATE_GUILD_INFO",
        C = "SORT_CHANNEL",
        E = "ADD_CHANNEL_INFO",
        S = "ADD_CHANNEL_MESSAGE",
        I = "REMOVE_CHANNEL_MESSAGE",
        M = "CLEAN_CHANNEL_MESSAGE",
        A = "ADD_CHANNEL_USER",
        T = "REMOVE_CHANNEL_USER",
        x = "CURRENT_DEL_CHANNEL",
        L = "SET_CURRENT_USERLIST",
        D = "SET_CURRENT_CHANNEL",
        N = "UPDATE_CURRENT_CHANNEL",
        U = "UPDATE_CHANNEL_INFO",
        R = "DEL_CURRENT_USER",
        P = "UPDATE_CURRENT_USERLIST",
        F = "SET_GUILD_DEFAULT_CHANNEL",
        B = "ADD_AUDIO_CHANNEL_USER",
        G = "REMOVE_AUDIO_CHANNEL_USER",
        q = "SAVE_GLOBAL_SETTING",
        H = "UPDATE_GLOBAL_SETTING",
        z = "SET_GUILD_MUTE_INFO",
        K = "ADD_GUILD_MUTE_MKF",
        V = "DEL_GUILD_MUTE_MKF",
        W = "ADD_GUILD_MUTE_HEADSET",
        Q = "DEL_GUILD_MUTE_HEADSET",
        Y = "UPDATE_CURRENT_GUILD",
        J = "SET_MENTION_READED",
        X = "ADD_CHANNEL_UNREAD",
        $ = "SET_CHANNEL_UNREAD",
        Z = "SET_READED_MESSAGE",
        ee = "BATCH_SET_READED_MESSAGE",
        te = "UPDATE_CHANNEL_UNREAD",
        ne = "REMOVE_MESSAGE_UPDATE_CHANNEL_UNREAD",
        ie = "DELETE_GROUP",
        re = "TOGGLE_THEME",
        ae = "UPDATE_GLOBAL_STORE",
        oe = "SORT_GUILD_LIST",
        se = "SET_MSG_MUTE_LIST",
        ce = "SET_MSG_MUTE",
        le = "CLEAR_GUILD_UNREAD",
        ue = "SET_SPEAK_RECORD",
        de = "UPDATE_SPEAK_RECORD",
        me = "UPDATE_CHANNEL_USER";
      function _e(e) {
        e.forEach(function (e) {
          e.name && (e.name_pinyin = _.b.convertToPinyin(e.name)),
            e.channels &&
              e.channels.forEach(function (e) {
                0 == e.type
                  ? e.channels.forEach(function (e) {
                      e.name_pinyin = _.b.convertToPinyin(e.name);
                    })
                  : (e.name_pinyin = _.b.convertToPinyin(e.name));
              });
        });
      }
      function fe(e, t, n) {
        var i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "0";
        return (
          console.log("call UpdateUserByCurrentChannelList"),
          "0" != i
            ? e.map(function (e) {
                return e.id != i
                  ? Object(o.a)({}, e)
                  : (e.channels.forEach(function (e) {
                      e.id == t &&
                        (e.users || []).findIndex(function (e) {
                          return e.id === n.id;
                        }) > -1 &&
                        (e.users = e.users.map(function (e) {
                          return e.id == n.id
                            ? Object(o.a)(Object(o.a)({}, e), n)
                            : e;
                        }));
                    }),
                    e);
              })
            : e.map(function (e) {
                if (e.id != t) return Object(o.a)({}, e);
                var i = Object(o.a)({}, e);
                return (
                  (e.users || []).findIndex(function (e) {
                    return e.id == n.id;
                  }) > -1 &&
                    (i.users = e.users.map(function (e) {
                      return e.id == n.id
                        ? Object(o.a)(Object(o.a)({}, e), n)
                        : e;
                    })),
                  i
                );
              })
        );
      }
      function ve() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        return "0" != i
          ? e.map(function (e) {
              return e.id != i
                ? Object(o.a)({}, e)
                : (e.channels.forEach(function (e) {
                    if (e.id == t) {
                      var i = e.users || [];
                      if (
                        -1 ==
                        i.findIndex(function (e) {
                          return e.id === n.id;
                        })
                      )
                        if (a == n.id) {
                          var o = [n].concat(Object(r.a)(i));
                          e.users = o;
                        } else e.users = i.concat(n);
                    }
                  }),
                  e);
            })
          : e.map(function (e) {
              if (e.id != t) return Object(o.a)({}, e);
              var i = Object(o.a)({}, e),
                r = e.users || [];
              return (
                -1 ==
                  r.findIndex(function (e) {
                    return e.id === n.id;
                  }) && (i.users = r.concat(n)),
                i
              );
            });
      }
      function be(e, t, n, i) {
        return "0" != i
          ? e.map(function (e) {
              return e.id != i
                ? Object(o.a)({}, e)
                : (e.channels.forEach(function (e) {
                    e.id == t &&
                      (e.users = (e.users || []).filter(function (e) {
                        return e.id != n;
                      }));
                  }),
                  e);
            })
          : e.map(function (e) {
              if (e.id != t) return Object(o.a)({}, e);
              var i = Object(o.a)({}, e);
              return (
                (i.users = (e.users || []).filter(function (e) {
                  return e.id != n;
                })),
                i
              );
            });
      }
      function he(e, t, n, i, a) {
        var o,
          c = Object(s.a)(e);
        try {
          for (c.s(); !(o = c.n()).done; ) {
            var l = o.value;
            l.id == n && (l.default_channel_id = t),
              (l.channels = ye(l.channels, i, a));
          }
        } catch (u) {
          c.e(u);
        } finally {
          c.f();
        }
        return Object(r.a)(e);
      }
      function pe(e, t, n) {
        return e.map(function (e) {
          return t && e.id == t
            ? Object(o.a)(
                Object(o.a)({}, e),
                {},
                { path: "/channels/".concat(t, "/").concat(n) }
              )
            : Object(o.a)({}, e);
        });
      }
      function ge(e, t) {
        return e.map(function (e) {
          if (e.id == t.id) return Object(o.a)(Object(o.a)({}, e), t);
          if ("0" != t.parent_id && t.parent_id == e.id) {
            var n = e.channels || [];
            (n = n.map(function (e) {
              return e.id == t.id ? Object(o.a)(Object(o.a)({}, e), t) : e;
            })),
              (e.channels = n);
          }
          return e;
        });
      }
      function ye(e, t, n) {
        return e.length
          ? "0" != n
            ? e.map(function (e) {
                return n == e.id
                  ? e.channels
                    ? Object(o.a)(
                        Object(o.a)({}, e),
                        {},
                        {
                          channels: e.channels.filter(function (e) {
                            return e.id !== t;
                          }),
                        }
                      )
                    : e
                  : Object(o.a)({}, e);
              })
            : e.filter(function (e) {
                return e.id !== t;
              })
          : [];
      }
      function we(e, t) {
        return e.map(function (e) {
          if (1 == e.is_category && e.id == t.parent_id) {
            var n = e.channels || [];
            if (
              n.findIndex(function (e) {
                return e.id == t.id;
              }) > -1
            )
              return e;
            if (2 == t.type)
              e.channels = [].concat(Object(r.a)(n), [Object(o.a)({}, t)]);
            else {
              var i = n.findIndex(function (e) {
                return "2" == e.type;
              });
              -1 == i
                ? (e.channels = [].concat(Object(r.a)(n), [Object(o.a)({}, t)]))
                : (n.splice(i, 0, Object(o.a)({}, t)), (e.channels = n));
            }
          }
          return e;
        });
      }
      function ke() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n =
            e.findIndex(function (e) {
              return e.id == t.id;
            }) > -1;
        if (n) return Object(r.a)(e);
        var i = e.findIndex(function (e) {
            return 1 == e.is_category;
          }),
          a = e.findIndex(function (e) {
            return "2" == e.type;
          });
        return (
          2 == t.type
            ? -1 == i
              ? e.push(t)
              : e.splice(i, 0, Object(o.a)({}, t))
            : -1 == i
            ? -1 == a
              ? e.push(Object(o.a)({}, t))
              : e.splice(a, 0, Object(o.a)({}, t))
            : -1 == a
            ? e.splice(i, 0, Object(o.a)({}, t))
            : e.splice(a, 0, Object(o.a)({}, t)),
          Object(r.a)(e)
        );
      }
      function Oe(e, t) {
        var n = e.find(function (e) {
          return e.id == t;
        });
        if (!n) return e;
        var i = e.filter(function (e) {
            return e.id != t;
          }),
          r = [],
          a = [];
        n.channels &&
          n.channels.length &&
          n.channels.forEach(function (e) {
            "1" == e.type
              ? r.push(
                  Object(o.a)(
                    Object(o.a)({}, e),
                    {},
                    { is_category: 1, parent_id: "0" }
                  )
                )
              : "2" == e.type &&
                a.push(
                  Object(o.a)(
                    Object(o.a)({}, e),
                    {},
                    { is_category: 1, parent_id: "0" }
                  )
                );
          });
        var s = 0;
        i.forEach(function (e, t) {
          "2" == e.type && 1 != e.is_category && (s = t + 1);
        }),
          i.splice.apply(i, [s, 0].concat(a));
        var c = 0;
        return (
          i.forEach(function (e, t) {
            "1" == e.type && 1 != e.is_category && (c = t + 1);
          }),
          i.splice.apply(i, [c, 0].concat(r)),
          i
        );
      }
      function je(e, t) {
        return e.map(function (e) {
          return e.id === t.guild_id && e.channels
            ? Object(o.a)(
                Object(o.a)({}, e),
                {},
                { channels: ge(e.channels, t) }
              )
            : e;
        });
      }
      function Ce(e, t, n) {
        var i = Object(o.a)({}, e),
          r = Object.keys(e.channels).reduce(function (i, r) {
            return (
              r === t
                ? ((i[r] = Object(o.a)(
                    Object(o.a)({}, e.channels[r]),
                    {},
                    { mention_count: 0, message_count: 0 }
                  )),
                  n && (i[r].last_read_message_time = n))
                : (i[r] = e.channels[r]),
              i
            );
          }, {});
        return (
          (i.channels = r),
          (i.mention_count = Ee(i.channels, "mention_count")),
          (i.message_count = Ee(i.channels, "message_count")),
          i
        );
      }
      function Ee(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "message_count";
        return Object.keys(e).reduce(function (n, i) {
          return (n += e[i][t]);
        }, 0);
      }
      function Se(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 ? arguments[2] : void 0,
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          r =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          a = n;
        return 2 === e ? (r && r <= i && (a = 0), Math.max(0, t + a)) : a;
      }
      function Ie(e, t) {
        return e[t] && ((e[t] = null), delete e[t]), Object(o.a)({}, e);
      }
      function Me(e, t) {
        var n = {};
        e.channels.forEach(function (e) {
          (n[e.id] = Object(o.a)({}, e)),
            0 == +e.type &&
              e.channels.forEach(function (e) {
                (n[e.id] = Object(o.a)({}, e)), delete n[e.id].channels;
              }),
            delete n[e.id].channels;
        });
        var i = t.channels.map(function (e) {
          var t;
          return (
            e.channels &&
              (t = e.channels.map(function (t) {
                return Object(o.a)(
                  Object(o.a)({}, n[t]),
                  {},
                  { parent_id: e.id }
                );
              })),
            Object(o.a)(
              Object(o.a)({}, n[e.id]),
              {},
              { channels: t, parent_id: "0" }
            )
          );
        });
        return Object(o.a)(Object(o.a)({}, e), {}, { channels: i });
      }
      function Ae() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = b({ channels: e }, t.id);
        if (n) return e;
        switch (+t.type) {
          case 1:
          case 2:
            return "0" == t.parent_id ? ke(e, t) : we(e, t);
          case 0:
            return [].concat(Object(r.a)(e), [t]);
        }
        return e;
      }
      t.X = Object(c.a)(
        h,
        ((i = {}),
        Object(a.a)(i, de, function (e, t) {
          var n = t.payload,
            i = n.channel_id,
            r = n.time;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              speakRecord: Object(o.a)(
                Object(o.a)({}, e.speakRecord),
                {},
                Object(a.a)({}, i, r)
              ),
            }
          );
        }),
        Object(a.a)(i, ue, function (e, t) {
          var n = t.payload;
          return Object(o.a)(Object(o.a)({}, e), {}, { speakRecord: n });
        }),
        Object(a.a)(i, se, function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { msgMuteList: Object(r.a)(n) }
          );
        }),
        Object(a.a)(i, le, function (e, t) {
          var n = t.payload.target_id,
            i = e.unReadInfo;
          if (i[n])
            for (var r in ((i[n].mention_count = 0),
            (i[n].message_count = 0),
            i[n].channels)) {
              var a = i[n].channels[r];
              (a.mention_count = 0), (a.message_count = 0);
            }
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { unReadInfo: Object(o.a)({}, i) }
          );
        }),
        Object(a.a)(i, ce, function (e, t) {
          var n = t.payload,
            i = e.msgMuteList,
            a = e.unReadInfo;
          if (n.cancel)
            i = i.filter(function (e) {
              return !(e.target_id == n.target_id && e.type == n.type);
            });
          else {
            var s = i.find(function (e) {
              return e.target_id == n.target_id && e.type == n.type;
            });
            s ? Object.assign(s, n) : i.push(Object(o.a)({}, n));
          }
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { msgMuteList: Object(r.a)(i), unReadInfo: Object(o.a)({}, a) }
          );
        }),
        Object(a.a)(i, ae, function (e, t) {
          return Object(o.a)(Object(o.a)({}, e), t.payload);
        }),
        Object(a.a)(i, re, function (e, t) {
          return t.payload
            ? Object(o.a)(Object(o.a)({}, e), {}, { themeClass: t.payload })
            : Object(o.a)(
                Object(o.a)({}, e),
                {},
                {
                  themeClass:
                    "theme-light" === e.themeClass
                      ? "theme-dark"
                      : "theme-light",
                }
              );
        }),
        Object(a.a)(i, ie, function (e, t) {
          var n = t.payload.id;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentGuildInfo: Object(o.a)(
                Object(o.a)({}, e.currentGuildInfo),
                {},
                { channels: Oe(e.currentGuildInfo.channels, n) }
              ),
            }
          );
        }),
        Object(a.a)(i, ee, function (e, t) {
          var n = t.payload,
            i = Object(o.a)({}, e.unReadInfo);
          return (
            n.forEach(function (e) {
              var t = e.guild_id,
                n = e.channel_id,
                r = e.time;
              t && n && i[t] && (i[t] = Ce(i[t], n, r));
            }),
            Object(o.a)(Object(o.a)({}, e), {}, { unReadInfo: i })
          );
        }),
        Object(a.a)(i, Z, function (e, t) {
          var n = t.payload,
            i = n.guild_id,
            r = n.channel_id,
            a = n.time,
            s = Object(o.a)({}, e.unReadInfo);
          return (
            i && r && e.unReadInfo[i] && (s[i] = Ce(e.unReadInfo[i], r, a)),
            Object(o.a)(Object(o.a)({}, e), {}, { unReadInfo: s })
          );
        }),
        Object(a.a)(i, M, function (e, t) {
          var n = t.payload.channels,
            i = e.channelMessage;
          return (
            n &&
              n.length > 0 &&
              n.forEach(function (e) {
                e.channels &&
                  e.channels.length > 0 &&
                  e.channels.forEach(function (e) {
                    i[e.id] = null;
                  });
              }),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { channelMessage: Object(o.a)({}, i) }
            )
          );
        }),
        Object(a.a)(i, I, function (e, t) {
          var n = Object(f.get)(t, "payload.content.body.channel_id", ""),
            i = Object(f.get)(t, "payload.content.body.rong_id", ""),
            r = e.channelMessage,
            a = e.removeMessage;
          return (
            r[n]
              ? r[n].rong_id == i &&
                (r[n].content =
                  "[\u7cfb\u7edf\u6d88\u606f]\uff1a\u8be5\u6d88\u606f\u5df2\u88ab\u5220\u9664")
              : (a[n] = {
                  rong_id: i,
                  content:
                    "[\u7cfb\u7edf\u6d88\u606f]\uff1a\u8be5\u6d88\u606f\u5df2\u88ab\u5220\u9664",
                }),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              {
                channelMessage: Object(o.a)({}, r),
                removeMessage: Object(o.a)({}, a),
              }
            )
          );
        }),
        Object(a.a)(i, S, function (e, t) {
          var n,
            i,
            r,
            a,
            s,
            c,
            l =
              null === t ||
              void 0 === t ||
              null === (n = t.payload) ||
              void 0 === n
                ? void 0
                : n.message,
            u =
              null === t ||
              void 0 === t ||
              null === (i = t.payload) ||
              void 0 === i
                ? void 0
                : i.channelId,
            d = Object(o.a)({}, l);
          if (1 == d.conversationType) return Object(o.a)({}, e);
          var m = e.channelMessage,
            _ = e.userInfo,
            b = e.currentGuildInfo,
            h = "",
            p =
              null !== (r = Object(f.get)(b, "roles", [])) && void 0 !== r
                ? r
                : [],
            g =
              null !== (a = Object(f.get)(d, "mention_roles", [])) &&
              void 0 !== a
                ? a
                : [],
            y =
              null !== (s = Object(f.get)(b, "my_roles", [])) && void 0 !== s
                ? s
                : [],
            w =
              null !== (c = Object(f.get)(d, "mention", [])) && void 0 !== c
                ? c
                : [];
          2 == d.type
            ? (d.content = "[\u56fe\u7247]")
            : 4 == d.type
            ? (d.content = "[\u6587\u4ef6]")
            : 10 == d.type
            ? (d.content = "[\u5361\u7247]")
            : 9 == d.type &&
              (d.content = Object(f.get)(d, "kmarkdown.raw_content", "")),
            (d.content = Object(v.db)(d.content)),
            g.forEach(function (e) {
              p.forEach(function (t) {
                e == t.role_id &&
                  (d.content = d.content.replace(
                    "@role:".concat(e, ";"),
                    "@".concat(t.name)
                  ));
              });
            });
          var k = (function (e, t) {
            return t.filter(function (t) {
              return e.indexOf("".concat(t)) >= 0;
            });
          })(g, y);
          return (
            w &&
              w.length > 0 &&
              w.indexOf(_.id) >= 0 &&
              ((h = "[@\u6211]"),
              (d.content = "".concat(d.content.replace("#".concat(_.id), "")))),
            g &&
              g.length > 0 &&
              k.length > 0 &&
              p.forEach(function (e) {
                e.role_id == k[0] && (h = "[@".concat(e.name, "]"));
              }),
            d.mention_here && (h = "[@\u5728\u7ebf\u6210\u5458]"),
            d.mention_all && (h = "[@\u5168\u4f53\u6210\u5458]"),
            w.forEach(function (e) {
              d.content = d.content.replace("#".concat(e), "");
            }),
            (d.content = "".concat(d.author.nickname, ": ").concat(d.content)),
            (d.nextContent = d.content),
            (d.mentionType = h),
            m[u]
              ? (d.mentionType || (d.mentionType = m[u].mentionType),
                (m[u] = d))
              : (m[u] = d),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { channelMessage: Object(o.a)({}, m) }
            )
          );
        }),
        Object(a.a)(i, X, function (e, t) {
          var n = t.payload,
            i = n.channelId,
            r = n.guild_id,
            a = n.hasMention,
            s = n.isMsgMute,
            c = Object(o.a)({}, e.unReadInfo);
          return (
            e.unReadInfo[r] &&
              (c[r] = (function (e, t) {
                var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i = arguments.length > 3 ? arguments[3] : void 0,
                  r = Object(o.a)({}, e);
                e.channels[t] ||
                  (e.channels[t] = {
                    id: t,
                    message_count: 0,
                    mention_count: 0,
                  });
                var a = Object.keys(e.channels).reduce(function (r, a) {
                  return (
                    a === t
                      ? ((r[a] = Object(o.a)({}, e.channels[a])),
                        i ||
                          (r[a].message_count =
                            e.channels[a].message_count + 1),
                        n &&
                          (r[a].mention_count =
                            e.channels[a].mention_count + 1))
                      : (r[a] = e.channels[a]),
                    r
                  );
                }, {});
                return (
                  (r.channels = a),
                  (r.mention_count = Ee(r.channels, "mention_count")),
                  (r.message_count = Ee(r.channels, "message_count")),
                  r
                );
              })(e.unReadInfo[r], i, a, s)),
            Object(o.a)(Object(o.a)({}, e), {}, { unReadInfo: c })
          );
        }),
        Object(a.a)(i, $, function (e, t) {
          var n = t.payload;
          for (var i in n) n[i].channels || (n[i].channels = {});
          return Object(o.a)(Object(o.a)({}, e), {}, { unReadInfo: n });
        }),
        Object(a.a)(i, te, function (e, t) {
          var n = Object(o.a)({}, e.unReadInfo),
            i = t.payload.guild_id;
          return (
            i &&
              e.unReadInfo[i] &&
              (n[i] = (function (e, t) {
                var n = e.type,
                  i = e.channel_id,
                  r = e.msg_time,
                  a = e.message_count,
                  s = e.mention_count,
                  c = Object(o.a)({}, t);
                if (i) {
                  c.channels[i] ||
                    (c.channels[i] = {
                      id: i,
                      message_count: 0,
                      mention_count: 0,
                    });
                  var l = Object.keys(t.channels).reduce(function (e, c) {
                    return (
                      c === i
                        ? ((e[c] = Object(o.a)({}, t.channels[c])),
                          "number" === typeof a &&
                            (e[c].message_count = Se(
                              n,
                              e[c].message_count,
                              a,
                              e[c].last_read_message_time,
                              r
                            )),
                          "number" === typeof s &&
                            (e[c].mention_count = Se(
                              n,
                              e[c].mention_count,
                              s,
                              e[c].last_read_message_time,
                              r
                            )))
                        : (e[c] = t.channels[c]),
                      e
                    );
                  }, {});
                  (c.channels = l),
                    "number" === typeof a &&
                      (c.message_count = Ee(c.channels, "message_count")),
                    "number" === typeof s &&
                      (c.mention_count = Ee(c.channels, "mention_count"));
                } else
                  "number" === typeof a &&
                    (c.message_count = Se(n, c.message_count, a)),
                    "number" === typeof s &&
                      (c.mention_count = Se(n, c.mention_count, s));
                return c;
              })(t.payload, e.unReadInfo[i])),
            Object(o.a)(Object(o.a)({}, e), {}, { unReadInfo: n })
          );
        }),
        Object(a.a)(i, ne, function (e, t) {
          var n = e.unReadInfo,
            i = e.guildMenus,
            r = e.userInfo,
            a = t.payload,
            s = a.create_at,
            c = a.channel_id,
            l = a.guild_id,
            u = a.mention_all,
            d = a.mention_here,
            m = a.mention_roles,
            _ = void 0 === m ? [] : m,
            f = a.mention,
            v = void 0 === f ? [] : f,
            b = (function (e, t) {
              if (e && e.channels[t]) return e.channels[t];
              return null;
            })(n[l], c);
          if (!b) return e;
          if (b.last_read_message_time < s) {
            b.message_count -= 1;
            var h =
                i.find(function (e) {
                  return e.id == l;
                }) || {},
              p =
                v
                  .map(function (e) {
                    return String(e);
                  })
                  .indexOf(r.id) > -1 ||
                (h.my_roles || []).some(function (e) {
                  return _.includes(String(e));
                });
            (u || d || p) && (b.mention_count -= 1);
          }
          return (
            (n[l].mention_count = Ee(n[l].channels, "mention_count")),
            (n[l].message_count = Ee(n[l].channels, "message_count")),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { unReadInfo: Object(o.a)({}, n) }
            )
          );
        }),
        Object(a.a)(i, z, function (e, t) {
          var n = t.payload,
            i = n.mute_mkf_list,
            r = n.mute_headset_list;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { guildMuteInfo: { mute_mkf_list: i, mute_headset_list: r } }
          );
        }),
        Object(a.a)(i, K, function (e, t) {
          var n = t.payload,
            i = e.guildMuteInfo.mute_mkf_list,
            a = Array.from(new Set([].concat(Object(r.a)(i), [n])));
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              guildMuteInfo: Object(o.a)(
                Object(o.a)({}, e.guildMuteInfo),
                {},
                { mute_mkf_list: a }
              ),
            }
          );
        }),
        Object(a.a)(i, V, function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              guildMuteInfo: Object(o.a)(
                Object(o.a)({}, e.guildMuteInfo),
                {},
                {
                  mute_mkf_list: e.guildMuteInfo.mute_mkf_list.filter(function (
                    e
                  ) {
                    return e != n;
                  }),
                }
              ),
            }
          );
        }),
        Object(a.a)(i, W, function (e, t) {
          var n = t.payload,
            i = e.guildMuteInfo.mute_headset_list,
            a = Array.from(new Set([].concat(Object(r.a)(i), [n])));
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              guildMuteInfo: Object(o.a)(
                Object(o.a)({}, e.guildMuteInfo),
                {},
                { mute_headset_list: a }
              ),
            }
          );
        }),
        Object(a.a)(i, Q, function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              guildMuteInfo: Object(o.a)(
                Object(o.a)({}, e.guildMuteInfo),
                {},
                {
                  mute_headset_list: e.guildMuteInfo.mute_headset_list.filter(
                    function (e) {
                      return e != n;
                    }
                  ),
                }
              ),
            }
          );
        }),
        Object(a.a)(i, q, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { globalSetting: t.payload }
          );
        }),
        Object(a.a)(i, H, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              globalSetting: Object(o.a)(
                Object(o.a)({}, e.globalSetting),
                t.payload
              ),
            }
          );
        }),
        Object(a.a)(i, p, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { userInfo: Object(o.a)({}, t.payload) }
          );
        }),
        Object(a.a)(i, g, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { userInfo: Object(o.a)(Object(o.a)({}, e.userInfo), t.payload) }
          );
        }),
        Object(a.a)(i, y, function (e, t) {
          var n = t.payload;
          return _e(n), Object(o.a)(Object(o.a)({}, e), {}, { guildMenus: n });
        }),
        Object(a.a)(i, w, function (e, t) {
          var n = t.payload.id;
          if (
            e.guildMenus.findIndex(function (e) {
              return e.id == n;
            }) > -1
          )
            return Object(o.a)({}, e);
          _e([t.payload]);
          var i,
            s = Object(o.a)(
              Object(o.a)({}, e),
              {},
              {
                guildMenus: [].concat(Object(r.a)(e.guildMenus), [t.payload]),
                unReadInfo: Object(o.a)(
                  Object(o.a)({}, e.unReadInfo),
                  {},
                  Object(a.a)(
                    {},
                    n,
                    ((i = t.payload),
                    {
                      id: i.id,
                      mention_count: 0,
                      message_count: 0,
                      channels: (i.channels || []).reduce(function (e, t) {
                        return (
                          0 == t.type
                            ? (t.channels || []).forEach(function (n) {
                                1 == n.type &&
                                  (e[n.id] = {
                                    last_read_message_time: +Date.now() + 100,
                                    mention_count: 0,
                                    message_count: 0,
                                    id: t.id,
                                  });
                              })
                            : 1 == t.type &&
                              (e[t.id] = {
                                last_read_message_time: +Date.now() + 100,
                                mention_count: 0,
                                message_count: 0,
                                id: t.id,
                              }),
                          e
                        );
                      }, {}),
                    })
                  )
                ),
              }
            );
          return (
            e.currentGuildInfo.id == n &&
              (s.currentGuildInfo = Object(o.a)(
                Object(o.a)({}, e.currentGuildInfo),
                {},
                { guest: !1 }
              )),
            s
          );
        }),
        Object(a.a)(i, k, function (e, t) {
          var n = t.payload;
          _e([n]);
          var i = e.guildMenus.map(function (e) {
            return e.id == n.id
              ? (n.recommend_info || (n.recommend_info = null),
                Object.assign(e, n))
              : e;
          });
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { currentGuildInfo: n, guildMenus: i }
          );
        }),
        Object(a.a)(i, O, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              unReadInfo: Ie(e.unReadInfo, t.payload),
              guildMenus: e.guildMenus.filter(function (e) {
                return e.id !== t.payload;
              }),
            }
          );
        }),
        Object(a.a)(i, j, function (e, t) {
          var n = Object(o.a)({}, e),
            i = t.payload;
          return (
            i.id &&
              (_e([i]),
              e.currentGuildInfo.id == i.id &&
                (n.currentGuildInfo = Object(o.a)(
                  Object(o.a)(Object(o.a)({}, e.currentGuildInfo), i),
                  {},
                  { id: e.currentGuildInfo.id }
                )),
              (n.guildMenus = e.guildMenus.map(function (e) {
                return e.id == i.id ? Object(o.a)(Object(o.a)({}, e), i) : e;
              }))),
            n
          );
        }),
        Object(a.a)(i, C, function (e, t) {
          var n = e.guildMenus,
            i = e.currentGuildInfo,
            r = t.payload;
          return (
            (n = n.map(function (e) {
              return e.id == r.guild_id ? Me(e, r) : e;
            })),
            i.id == r.guild_id && (i = Me(i, r)),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { guildMenus: n, currentGuildInfo: i }
            )
          );
        }),
        Object(a.a)(i, Y, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentGuildInfo: Object(o.a)(
                Object(o.a)({}, e.currentGuildInfo),
                t.payload
              ),
            }
          );
        }),
        Object(a.a)(i, E, function (e, t) {
          var n = t.payload,
            i = Object(o.a)(
              Object(o.a)({}, e),
              {},
              {
                guildMenus: e.guildMenus.map(function (e) {
                  return e.id != n.guild_id
                    ? e
                    : Object(o.a)(
                        Object(o.a)({}, e),
                        {},
                        { channels: Ae(e.channels, n) }
                      );
                }),
              }
            );
          return (
            1 == n.type &&
              (i.unReadInfo = (function (e, t, n) {
                e[n] ||
                  (e[n] = {
                    mention_count: 0,
                    message_count: 0,
                    id: n,
                    channels: {},
                  });
                e[n].channels || (e[n].channels = {});
                e[n].channels[t] ||
                  (e[n].channels[t] = {
                    last_read_message_time: +Date.now(),
                    id: t,
                    message_count: 0,
                    mention_count: 0,
                  });
                return Object(o.a)({}, e);
              })(e.unReadInfo, n.id, n.guild_id)),
            e.currentGuildInfo.id == n.guild_id &&
              (i.currentGuildInfo = Object(o.a)(
                Object(o.a)({}, e.currentGuildInfo),
                {},
                { channels: Object(r.a)(Ae(e.currentGuildInfo.channels, n)) }
              )),
            i
          );
        }),
        Object(a.a)(i, x, function (e, t) {
          var n = t.payload,
            i = n.delGuildId,
            r = n.redirectChannelId,
            a = n.id,
            s = n.parent_id;
          l.a.getDefaultChannel(i) == a && l.a.removeDefaultChannel(i);
          var c = Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentGuildInfo: t.payload.inCurrentGuild
                ? Object(o.a)(
                    Object(o.a)({}, e.currentGuildInfo),
                    {},
                    {
                      channels: ye(
                        e.currentGuildInfo.channels,
                        t.payload.id,
                        s
                      ),
                    }
                  )
                : Object(o.a)({}, e.currentGuildInfo),
              guildMenus: he(e.guildMenus, r, i, t.payload.id, s),
            }
          );
          return (
            e.unReadInfo[i] &&
              (c.unReadInfo[i] = (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  r = arguments.length > 4 ? arguments[4] : void 0,
                  a = Object(o.a)({}, e),
                  s = Object.keys(e.channels).reduce(function (a, s) {
                    return (
                      s === t
                        ? ((a[s] = Object(o.a)(
                            Object(o.a)({}, e.channels[s]),
                            {},
                            { message_count: n, mention_count: i }
                          )),
                          r && (a[s].last_read_message_time = r))
                        : (a[s] = e.channels[s]),
                      a
                    );
                  }, {});
                return (
                  (a.channels = s),
                  (a.mention_count = Ee(a.channels, "mention_count")),
                  (a.message_count = Ee(a.channels, "message_count")),
                  a
                );
              })(c.unReadInfo[i], a, 0, 0)),
            c
          );
        }),
        Object(a.a)(i, L, function (e, t) {
          var n = t.payload,
            i = n.data,
            r = void 0 === i ? [] : i,
            a = n.offline_count,
            s = n.online_count,
            c = n.user_count,
            l = Object(o.a)(
              Object(o.a)({}, e),
              {},
              { currentGuildUserList: r }
            );
          return (
            void 0 !== a && (l.offline_count = a),
            void 0 !== s && (l.online_count = s),
            void 0 !== c && (l.user_count = c),
            l
          );
        }),
        Object(a.a)(i, P, function (e, t) {
          var n = t.payload,
            i = e.currentGuildUserList.map(function (e) {
              return e.id == n.id ? Object(o.a)(Object(o.a)({}, e), n) : e;
            });
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { currentGuildUserList: i }
          );
        }),
        Object(a.a)(i, J, function (e, t) {
          var n = t.payload.channelInfo,
            i = n.guild_id,
            r = n.id,
            a = Object(o.a)({}, e.unReadInfo);
          return (
            e.unReadInfo[i] &&
              (a[i] = (function (e, t) {
                var n = Object(o.a)({}, e),
                  i = Object.keys(e.channels).reduce(function (n, i) {
                    return (
                      (n[i] =
                        i === t
                          ? Object(o.a)(
                              Object(o.a)({}, e.channels[i]),
                              {},
                              { mention_count: 0 }
                            )
                          : e.channels[i]),
                      n
                    );
                  }, {});
                return (
                  (n.channels = i),
                  (n.mention_count = Ee(n.channels, "mention_count")),
                  n
                );
              })(a[i], r)),
            Object(o.a)(Object(o.a)({}, e), {}, { unReadInfo: a })
          );
        }),
        Object(a.a)(i, D, function (e, t) {
          var n = t.payload.channelInfo;
          return n && n.id
            ? Object(o.a)(Object(o.a)({}, e), {}, { currentChannelInfo: n })
            : Object(o.a)(Object(o.a)({}, e), {}, { currentChannelInfo: {} });
        }),
        Object(a.a)(i, U, function (e, t) {
          var n = t.payload,
            i = e.currentGuildInfo;
          return (
            i &&
              i.channels &&
              (i.channels = i.channels.map(function (e) {
                return (
                  e.channels &&
                    (e.channels = e.channels.map(function (e) {
                      return e.id == n.id
                        ? Object(o.a)(Object(o.a)({}, e), n)
                        : e;
                    })),
                  e.id == n.id ? Object(o.a)(Object(o.a)({}, e), n) : e
                );
              })),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { currentGuildInfo: i, guildMenus: je(e.guildMenus, n) }
            )
          );
        }),
        Object(a.a)(i, N, function (e, t) {
          var n = Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentGuildInfo: Object(o.a)(
                Object(o.a)({}, e.currentGuildInfo),
                {},
                { channels: ge(e.currentGuildInfo.channels, t.payload) }
              ),
            }
          );
          return (
            1 == t.payload.type &&
              e.currentChannelInfo.id &&
              e.currentChannelInfo.id == t.payload.id &&
              (n.currentChannelInfo = t.payload),
            n
          );
        }),
        Object(a.a)(i, "ADD_CURRENT_USER", function (e, t) {
          return e;
        }),
        Object(a.a)(i, R, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentGuildUserList: e.currentGuildUserList.filter(function (e) {
                return e.id != t.payload;
              }),
            }
          );
        }),
        Object(a.a)(i, F, function (e, t) {
          var n = t.payload,
            i = n.guildId,
            r = n.channelId;
          return Object.assign(e, { guildMenus: pe(e.guildMenus, i, r) }), e;
        }),
        Object(a.a)(i, B, function (e, t) {
          var n = t.payload,
            i = n.userInfo,
            r = n.channelId,
            a = n.parent_id;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentGuildInfo: Object(o.a)(
                Object(o.a)({}, e.currentGuildInfo),
                {},
                {
                  channels: ve(
                    e.currentGuildInfo.channels || [],
                    r,
                    i,
                    a,
                    e.userInfo.id
                  ),
                }
              ),
            }
          );
        }),
        Object(a.a)(i, me, function (e, t) {
          var n = t.payload,
            i = n.channel,
            r = n.user;
          return (
            e.guildMenus.forEach(function (e) {
              if (e.id == i.guild_id && (e.channels || []).length > 0) {
                var t = (function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : "0",
                    r =
                      "0" == i
                        ? e
                        : (
                            e.find(function (e) {
                              return e.id == i;
                            }) || {}
                          ).channels;
                  if (!r) return e;
                  var a = r.find(function (e) {
                    return e.id == t;
                  });
                  if (!a) return e;
                  var o = (a.users || []).find(function (e) {
                    return e.id == n.id;
                  });
                  return o ? (Object.assign(o, n), e) : e;
                })(e.channels, i.id, r, i.parent_id || "0");
                e.channels = t;
              }
            }),
            e.currentGuildInfo && e.currentGuildInfo.id == i.guild_id
              ? Object(o.a)(
                  Object(o.a)({}, e),
                  {},
                  {
                    currentGuildInfo: Object(o.a)(
                      Object(o.a)({}, e.currentGuildInfo),
                      {},
                      {
                        channels: fe(
                          e.currentGuildInfo.channels || [],
                          i.id,
                          r,
                          i.parent_id
                        ),
                      }
                    ),
                  }
                )
              : e
          );
        }),
        Object(a.a)(i, A, function (e, t) {
          var n = t.payload,
            i = n.userInfo,
            r = n.channel_id,
            a = n.parent_id,
            s = n.guild_id;
          return (
            e.guildMenus.forEach(function (t) {
              t.id == s &&
                (t.channels = ve(t.channels, r, i, a, e.userInfo.id));
            }),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              {
                currentGuildInfo:
                  e.currentGuildInfo && e.currentGuildInfo.id == s
                    ? Object(o.a)(
                        Object(o.a)({}, e.currentGuildInfo),
                        {},
                        {
                          channels: ve(
                            e.currentGuildInfo.channels,
                            r,
                            i,
                            a,
                            e.userInfo.id
                          ),
                        }
                      )
                    : e.currentGuildInfo,
              }
            )
          );
        }),
        Object(a.a)(i, T, function (e, t) {
          var n = t.payload,
            i = n.uid,
            r = n.channel_id,
            a = n.parent_id,
            s = n.guild_id;
          return (
            e.guildMenus.forEach(function (e) {
              e.id == s && (e.channels = be(e.channels || [], r, i, a));
            }),
            e.currentGuildInfo && e.currentGuildInfo.id === s
              ? ((e.currentGuildInfo = Object(o.a)(
                  Object(o.a)({}, e.currentGuildInfo),
                  {},
                  { channels: be(e.currentGuildInfo.channels || [], r, i, a) }
                )),
                Object(o.a)({}, e))
              : e
          );
        }),
        Object(a.a)(i, G, function (e, t) {
          var n = t.payload,
            i = n.userId,
            r = n.channelId,
            a = n.parent_id;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentGuildInfo: Object(o.a)(
                Object(o.a)({}, e.currentGuildInfo),
                {},
                { channels: be(e.currentGuildInfo.channels || [], r, i, a) }
              ),
            }
          );
        }),
        Object(a.a)(i, oe, function (e, t) {
          var n = t.payload,
            i = n.oldIndex,
            r = void 0 === i ? 0 : i,
            a = n.newIndex,
            s = void 0 === a ? 0 : a;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { guildMenus: m()(e.guildMenus, r, s) }
          );
        }),
        i)
      );
    },
    26: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return i;
      }),
        n.d(t, "h", function () {
          return r;
        }),
        n.d(t, "j", function () {
          return a;
        }),
        n.d(t, "o", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return s;
        }),
        n.d(t, "i", function () {
          return c;
        }),
        n.d(t, "n", function () {
          return l;
        }),
        n.d(t, "p", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return m;
        }),
        n.d(t, "l", function () {
          return _;
        }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return v;
        }),
        n.d(t, "d", function () {
          return b;
        }),
        n.d(t, "k", function () {
          return h;
        }),
        n.d(t, "q", function () {
          return p;
        }),
        n.d(t, "m", function () {
          return g;
        });
      var i = {
          DISCONNECTED: "DISCONNECTED",
          CONNECTING: "CONNECTING",
          CONNECTED: "CONNECTED",
          RECONNECTING: "RECONNECTING",
          FAILED: "FAILED",
        },
        r = {
          init: "INIT",
          connecting: "CONNECTING",
          connected: "CONNECTED",
          disconnected: "DISCONNECTED",
        },
        a = 5242880,
        o = 104857600,
        s = { private: 1, textChannel: 3 },
        c = 400,
        l = {
          2: {
            typeId: 2,
            type: "weixin",
            name: "\u5fae\u4fe1",
            icon: "iconsigin_WeChat",
          },
          3: { typeId: 3, type: "qq", name: "QQ", icon: "iconsigin_QQ" },
        },
        u = "https://kaiheila.cn/app/thirdappcallback.html",
        d = { vip: 1, guildGoost: 2 },
        m = 30,
        _ = [1, 9],
        f = [9],
        v = [1, 9],
        b = 18e5,
        h = [null, 300, 600, 900],
        p = "THEME_KEY",
        g = "THEME_SETTING_KEY";
    },
    28: function (e, t, n) {
      "use strict";
      var i = n(15),
        r = n(1),
        a = n(2),
        o = n(3),
        s = n(98),
        c = n(20),
        l = (function () {
          function e() {
            Object(a.a)(this, e);
          }
          return (
            Object(o.a)(e, [
              { key: "debug", value: function () {} },
              { key: "info", value: function () {} },
              { key: "warn", value: function () {} },
              { key: "error", value: function () {} },
            ]),
            e
          );
        })(),
        u = (function () {
          function e() {
            Object(a.a)(this, e);
          }
          return (
            Object(o.a)(e, [
              {
                key: "info",
                value: function (e) {
                  window.loggerSdk.writeLog(e);
                },
              },
            ]),
            e
          );
        })();
      function d(e) {
        return (e = e.map(function (e) {
          return e instanceof Error
            ? e.message + e.stack
            : e instanceof Element
            ? Object.prototype.toString.call(e)
            : "object" == typeof e
            ? JSON.stringify(e)
            : e;
        }));
      }
      var m = new ((function () {
        function e() {
          var t = this;
          Object(a.a)(this, e),
            (this.updateCommonParams = function (e) {
              t.commonParams = Object(r.a)(
                Object(r.a)(
                  {
                    version: s.a[0].date.match(/\\uff08v(\S+)\\uff09/)
                      ? s.a[0].date.match(/\\uff08v(\S+)\\uff09/)[1]
                      : "",
                  },
                  t.commonParams
                ),
                e
              );
            }),
            (this.disabled = !1),
            (this.logger = c.a.isElectron
              ? window.Kaiheila.Logger.appLogger
              : new l()),
            (this.xlog = new u()),
            (this._timeCache = {}),
            (this.commonParams = { device: c.c ? 1 : 0 });
        }
        return (
          Object(o.a)(e, [
            {
              key: "writeXlog",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if ("object" !== typeof e)
                  return console.warn(
                    "writeXlog \u53c2\u6570\u5fc5\u987b\u662f\u4e2aobject"
                  );
                var t =
                    window.kaiheiSocket.session &&
                    window.kaiheiSocket.session.sessionId,
                  n = window.Kaiheila
                    ? window.Kaiheila.config.channelId
                    : "official.site....pc",
                  i = Object(r.a)(
                    Object(r.a)(
                      { session_id: t, uuid: t, source: n, mtime: +new Date() },
                      this.commonParams
                    ),
                    e
                  );
                this.xlog.info(JSON.stringify(i));
              },
            },
            {
              key: "disable",
              value: function () {
                window.localStorage.setItem("kaihei_logger_disabled", !0),
                  (this.disabled = !0);
              },
            },
            {
              key: "enable",
              value: function () {
                window.localStorage.setItem("kaihei_logger_disabled", !1),
                  (this.disabled = !1);
              },
            },
            {
              key: "time",
              value: function (e) {
                this._timeCache[e] = Date.now();
              },
            },
            {
              key: "timeEnd",
              value: function (e) {
                this._timeCache[e] &&
                  (this.info(
                    "[time]".concat(e),
                    Date.now() - this._timeCache[e]
                  ),
                  delete this._timeCache[e]);
              },
            },
            {
              key: "debug",
              value: function () {
                for (
                  var e, t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                this.disabled ||
                  ((e = console).debug.apply(
                    e,
                    ["%c%s", "color:gray", new Date().toLocaleString()].concat(
                      Object(i.a)(r)
                    )
                  ),
                  (r = d(r)),
                  (t = this.logger).debug.apply(t, Object(i.a)(r)));
              },
            },
            {
              key: "info",
              value: function () {
                for (
                  var e, t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                this.disabled ||
                  ((e = console).info.apply(
                    e,
                    ["%c%s", "color:gray", new Date().toLocaleString()].concat(
                      Object(i.a)(r)
                    )
                  ),
                  (r = d(r)),
                  (t = this.logger).info.apply(t, Object(i.a)(r)));
              },
            },
            {
              key: "warn",
              value: function () {
                for (
                  var e, t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                this.disabled ||
                  ((e = console).warn.apply(
                    e,
                    ["%c%s", "color:gray", new Date().toLocaleString()].concat(
                      Object(i.a)(r)
                    )
                  ),
                  (r = d(r)),
                  (t = this.logger).warn.apply(t, Object(i.a)(r)));
              },
            },
            {
              key: "error",
              value: function () {
                for (
                  var e, t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                this.disabled ||
                  ((e = console).error.apply(
                    e,
                    ["%c%s", "color:gray", new Date().toLocaleString()].concat(
                      Object(i.a)(r)
                    )
                  ),
                  (r = d(r)),
                  (t = this.logger).error.apply(t, Object(i.a)(r)));
              },
            },
            {
              key: "important",
              value: function () {
                for (
                  var e, t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                (e = console).log.apply(
                  e,
                  ["%c%s", "color:gray", new Date().toLocaleString()].concat(
                    Object(i.a)(r)
                  )
                ),
                  (r = d(r)),
                  (t = this.logger).info.apply(t, Object(i.a)(r));
              },
            },
            {
              key: "label",
              value: function (e) {
                var t = this;
                return {
                  debug: function () {
                    for (
                      var n = arguments.length, i = new Array(n), r = 0;
                      r < n;
                      r++
                    )
                      i[r] = arguments[r];
                    i.unshift(e), t.debug.apply(t, i);
                  },
                  info: function () {
                    for (
                      var n = arguments.length, i = new Array(n), r = 0;
                      r < n;
                      r++
                    )
                      i[r] = arguments[r];
                    i.unshift(e), t.info.apply(t, i);
                  },
                  warn: function () {
                    for (
                      var n = arguments.length, i = new Array(n), r = 0;
                      r < n;
                      r++
                    )
                      i[r] = arguments[r];
                    i.unshift(e), t.warn.apply(t, i);
                  },
                  error: function () {
                    for (
                      var n = arguments.length, i = new Array(n), r = 0;
                      r < n;
                      r++
                    )
                      i[r] = arguments[r];
                    i.unshift(e), t.error.apply(t, i);
                  },
                  important: function () {
                    for (
                      var n = arguments.length, i = new Array(n), r = 0;
                      r < n;
                      r++
                    )
                      i[r] = arguments[r];
                    i.unshift(e), t.important.apply(t, i);
                  },
                  time: function (n) {
                    t.time(e + n);
                  },
                  timeEnd: function (n) {
                    t.timeEnd(e + n);
                  },
                };
              },
            },
          ]),
          e
        );
      })())();
      t.a = m;
    },
    29: function (e, t, n) {
      "use strict";
      var i = n(86);
      t.a = Object(i.a)({ basename: "app" });
    },
    31: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(2),
        r = n(3),
        a = (function () {
          function e() {
            Object(i.a)(this, e);
          }
          return (
            Object(r.a)(e, null, [
              {
                key: "getItem",
                value: function (e) {
                  var t = window.localStorage.getItem(e);
                  try {
                    return JSON.parse(t);
                  } catch (n) {
                    return t;
                  }
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  var n = t && "object" === typeof t ? JSON.stringify(t) : t;
                  return window.localStorage.setItem(e, n);
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  return window.localStorage.removeItem(e);
                },
              },
            ]),
            e
          );
        })();
    },
    33: function (e, t, n) {
      "use strict";
      var i = n(6),
        r = n.n(i),
        a = n(13),
        o = n(17),
        s = n.n(o),
        c = n(21),
        l = n.n(c);
      (l.a.easing.jswing = l.a.easing.swing),
        l.a.extend(l.a.easing, {
          def: "easeOutQuad",
          swing: function (e, t, n, i, r) {
            return l.a.easing[l.a.easing.def](e, t, n, i, r);
          },
          easeInQuad: function (e, t, n, i, r) {
            return i * (t /= r) * t + n;
          },
          easeOutQuad: function (e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n;
          },
          easeInOutQuad: function (e, t, n, i, r) {
            return (t /= r / 2) < 1
              ? (i / 2) * t * t + n
              : (-i / 2) * (--t * (t - 2) - 1) + n;
          },
          easeInCubic: function (e, t, n, i, r) {
            return i * (t /= r) * t * t + n;
          },
          easeOutCubic: function (e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n;
          },
          easeInOutCubic: function (e, t, n, i, r) {
            return (t /= r / 2) < 1
              ? (i / 2) * t * t * t + n
              : (i / 2) * ((t -= 2) * t * t + 2) + n;
          },
          easeInQuart: function (e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n;
          },
          easeOutQuart: function (e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n;
          },
          easeInOutQuart: function (e, t, n, i, r) {
            return (t /= r / 2) < 1
              ? (i / 2) * t * t * t * t + n
              : (-i / 2) * ((t -= 2) * t * t * t - 2) + n;
          },
          easeInQuint: function (e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n;
          },
          easeOutQuint: function (e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n;
          },
          easeInOutQuint: function (e, t, n, i, r) {
            return (t /= r / 2) < 1
              ? (i / 2) * t * t * t * t * t + n
              : (i / 2) * ((t -= 2) * t * t * t * t + 2) + n;
          },
          easeInSine: function (e, t, n, i, r) {
            return -i * Math.cos((t / r) * (Math.PI / 2)) + i + n;
          },
          easeOutSine: function (e, t, n, i, r) {
            return i * Math.sin((t / r) * (Math.PI / 2)) + n;
          },
          easeInOutSine: function (e, t, n, i, r) {
            return (-i / 2) * (Math.cos((Math.PI * t) / r) - 1) + n;
          },
          easeInExpo: function (e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n;
          },
          easeOutExpo: function (e, t, n, i, r) {
            return t == r ? n + i : i * (1 - Math.pow(2, (-10 * t) / r)) + n;
          },
          easeInOutExpo: function (e, t, n, i, r) {
            return 0 == t
              ? n
              : t == r
              ? n + i
              : (t /= r / 2) < 1
              ? (i / 2) * Math.pow(2, 10 * (t - 1)) + n
              : (i / 2) * (2 - Math.pow(2, -10 * --t)) + n;
          },
          easeInCirc: function (e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n;
          },
          easeOutCirc: function (e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n;
          },
          easeInOutCirc: function (e, t, n, i, r) {
            return (t /= r / 2) < 1
              ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + n
              : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + n;
          },
          easeInElastic: function (e, t, n, i, r) {
            var a = 1.70158,
              o = 0,
              s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if ((o || (o = 0.3 * r), s < Math.abs(i))) {
              s = i;
              a = o / 4;
            } else a = (o / (2 * Math.PI)) * Math.asin(i / s);
            return (
              -s *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * r - a) * (2 * Math.PI)) / o) +
              n
            );
          },
          easeOutElastic: function (e, t, n, i, r) {
            var a = 1.70158,
              o = 0,
              s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if ((o || (o = 0.3 * r), s < Math.abs(i))) {
              s = i;
              a = o / 4;
            } else a = (o / (2 * Math.PI)) * Math.asin(i / s);
            return (
              s *
                Math.pow(2, -10 * t) *
                Math.sin(((t * r - a) * (2 * Math.PI)) / o) +
              i +
              n
            );
          },
          easeInOutElastic: function (e, t, n, i, r) {
            var a = 1.70158,
              o = 0,
              s = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if ((o || (o = r * (0.3 * 1.5)), s < Math.abs(i))) {
              s = i;
              a = o / 4;
            } else a = (o / (2 * Math.PI)) * Math.asin(i / s);
            return t < 1
              ? s *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t * r - a) * (2 * Math.PI)) / o) *
                  -0.5 +
                  n
              : s *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin(((t * r - a) * (2 * Math.PI)) / o) *
                  0.5 +
                  i +
                  n;
          },
          easeInBack: function (e, t, n, i, r, a) {
            return (
              void 0 == a && (a = 1.70158),
              i * (t /= r) * t * ((a + 1) * t - a) + n
            );
          },
          easeOutBack: function (e, t, n, i, r, a) {
            return (
              void 0 == a && (a = 1.70158),
              i * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + n
            );
          },
          easeInOutBack: function (e, t, n, i, r, a) {
            return (
              void 0 == a && (a = 1.70158),
              (t /= r / 2) < 1
                ? (i / 2) * (t * t * ((1 + (a *= 1.525)) * t - a)) + n
                : (i / 2) * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) +
                  n
            );
          },
          easeInBounce: function (e, t, n, i, r) {
            return i - l.a.easing.easeOutBounce(e, r - t, 0, i, r) + n;
          },
          easeOutBounce: function (e, t, n, i, r) {
            return (t /= r) < 1 / 2.75
              ? i * (7.5625 * t * t) + n
              : t < 2 / 2.75
              ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + n
              : t < 2.5 / 2.75
              ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + n
              : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + n;
          },
          easeInOutBounce: function (e, t, n, i, r) {
            return t < r / 2
              ? 0.5 * l.a.easing.easeInBounce(e, 2 * t, 0, i, r) + n
              : 0.5 * l.a.easing.easeOutBounce(e, 2 * t - r, 0, i, r) +
                  0.5 * i +
                  n;
          },
        }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return m;
        });
      var u = function (e, t) {
          if (e) {
            var n = e.querySelector(".chuanyu-modal-container");
            n.addEventListener("animationend", function (n) {
              n.target === this &&
                (s.a.unmountComponentAtNode(e),
                e.parentNode && e.parentNode.removeChild(e),
                "function" === typeof t && t());
            }),
              n.classList.remove("kaihei-modal-animate"),
              n.classList.add("remove-animate");
          }
        },
        d = (function () {
          var e = Object(a.a)(
            r.a.mark(function e(t) {
              var n;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      l()(".app-content-wrapper").removeClass(
                        "mask-show-app-animate"
                      ),
                        t.classList.add("setting-mask-hide-status"),
                        (n = l()(t).find(".setting-mask-right")).addClass(
                          "setting-mask-hide-animate"
                        ),
                        n[0].addEventListener("animationend", function (e) {
                          e.target === this &&
                            (s.a.unmountComponentAtNode(t),
                            t.parentNode && t.parentNode.removeChild(t));
                        });
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        m = (function () {
          var e = Object(a.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      l()(".app-content-wrapper").addClass(
                        "mask-show-app-animate"
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    34: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return m;
      }),
        n.d(t, "b", function () {
          return _;
        }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "h", function () {
          return b;
        }),
        n.d(t, "j", function () {
          return h;
        }),
        n.d(t, "l", function () {
          return p;
        }),
        n.d(t, "g", function () {
          return g;
        }),
        n.d(t, "m", function () {
          return y;
        }),
        n.d(t, "i", function () {
          return w;
        }),
        n.d(t, "k", function () {
          return k;
        }),
        n.d(t, "e", function () {
          return O;
        }),
        n.d(t, "d", function () {
          return j;
        });
      var i,
        r = n(15),
        a = n(11),
        o = n(1),
        s = n(88),
        c = n(26),
        l = n(46),
        u = n(20),
        d = {
          shareScreen: !1,
          microphoneFailure: !1,
          audioClient: null,
          room: {},
          currentAudioChannelInfo: {},
          canUseFreeMkf: !0,
          canTalk: !0,
          guildMkfMute: !1,
          guildHeadsetMute: !1,
          currentAudioChannelUserList: [],
          channelConnectStatus: c.e.DISCONNECTED,
          accessDelay: 0,
          joinedUsers: [],
          isMute: !1,
          localStream: null,
          sendTransportError: !1,
          recvTransportError: !1,
          showBluetoothTips: !1,
          deviceTags: {},
          remoteStream: [],
          localConfig: new l.a(),
          voice: { remain: null },
          showTestMicrophonePannel: !1,
          musicPlayer: {
            audio: null,
            paused: !0,
            name: "\u97f3\u4e50",
            id: "",
            volume: 100,
          },
        },
        m = "SET_AUDIO_CLIENT",
        _ = "CHANGE_CONNECT_STATUS",
        f = "ADD_AUDIO_USER",
        v = "REMOVE_AUDIO_USER",
        b = "UPDATE_AUDIO_USER",
        h = "UPDATE_LOCAL_CONFIG",
        p = "UPDATE_ROOM_INFO",
        g = "UPDATE_AUDIO_STORE",
        y = "UPDATE_VOICE_INFO",
        w = "UPDATE_CURRENT_AUDIO_CHANNEL_INFO",
        k = "UPDATE_MUSIC_PLAYER",
        O = "RESET_MUSIC_PLAYER",
        j = "REMOVE_DEVICE_TAG";
      function C(e, t) {
        var n = Object(o.a)({}, e);
        return (
          ["speakList", "inviteList", "applyList"].forEach(function (i) {
            n[i] = (e[i] || []).filter(function (e) {
              return e != t;
            });
          }),
          n
        );
      }
      t.n = Object(s.a)(
        d,
        ((i = {}),
        Object(a.a)(i, "ADD_DEVICE_TAG", function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              deviceTags: Object(o.a)(
                Object(o.a)({}, e.deviceTags),
                {},
                Object(a.a)({}, n, !0)
              ),
            }
          );
        }),
        Object(a.a)(i, j, function (e, t) {
          var n = Object(o.a)({}, e.deviceTags),
            i = t.payload;
          return (
            (n[i] = null),
            delete n[i],
            Object(o.a)(Object(o.a)({}, e), {}, { deviceTags: n })
          );
        }),
        Object(a.a)(i, p, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { room: Object(o.a)(Object(o.a)({}, e.room), t.payload) }
          );
        }),
        Object(a.a)(i, k, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              musicPlayer: Object(o.a)(
                Object(o.a)({}, e.musicPlayer),
                t.payload
              ),
            }
          );
        }),
        Object(a.a)(i, O, function (e) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              musicPlayer: Object(o.a)(
                Object(o.a)({}, e.musicPlayer),
                {},
                { audio: null, paused: !0, name: "\u97f3\u4e50", id: "" }
              ),
            }
          );
        }),
        Object(a.a)(i, w, function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentAudioChannelInfo: Object(o.a)(
                Object(o.a)({}, e.currentAudioChannelInfo),
                n
              ),
            }
          );
        }),
        Object(a.a)(i, y, function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { voice: Object(o.a)(Object(o.a)({}, e.voice), n) }
          );
        }),
        Object(a.a)(i, g, function (e, t) {
          return Object(o.a)(Object(o.a)({}, e), t.payload);
        }),
        Object(a.a)(i, m, function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { audioClient: t.payload }
          );
        }),
        Object(a.a)(i, "SET_CURRENT_AUDIO_CHANNEL", function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { currentAudioChannelInfo: n }
          );
        }),
        Object(a.a)(i, _, function (e, t) {
          var n = t.payload,
            i = n.status,
            r = n.channelInfo,
            a = void 0 === r ? {} : r,
            s = Object(o.a)(
              Object(o.a)({}, e),
              {},
              { channelConnectStatus: i }
            );
          return (
            "CONNECTING" === i && (s.currentAudioChannelInfo = a),
            "DISCONNECTED" === i &&
              ((s.currentAudioChannelInfo = {}),
              (s.joinedUsers = []),
              (s.currentAudioChannelUserList = []),
              (s.guildMkfMute = !1),
              (s.guildHeadsetMute = !1),
              (s.canTalk = !0),
              (s.sendTransportError = !1),
              (s.recvTransportError = !1),
              (s.showTestMicrophonePannel = !1),
              (s.showBluetoothTips = !1),
              (s.deviceTags = {}),
              (s.microphoneFailure = !1)),
            s
          );
        }),
        Object(a.a)(i, f, function (e, t) {
          var n = t.payload,
            i = {},
            a = "object" === typeof n ? n.id : n;
          return (
            "object" === typeof n &&
              (i.currentAudioChannelUserList =
                e.currentAudioChannelUserList.findIndex(function (e) {
                  return e.id == a;
                }) > -1
                  ? e.currentAudioChannelUserList
                  : [].concat(Object(r.a)(e.currentAudioChannelUserList), [n])),
            (i.joinedUsers =
              e.joinedUsers.indexOf(a) > -1
                ? e.joinedUsers
                : [].concat(Object(r.a)(e.joinedUsers), [a])),
            Object(o.a)(Object(o.a)({}, e), i)
          );
        }),
        Object(a.a)(i, v, function (e, t) {
          var n = e.joinedUsers.filter(function (e) {
              return e != t.payload;
            }),
            i = e.currentAudioChannelUserList.filter(function (e) {
              return e.id != t.payload;
            });
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              currentAudioChannelUserList: i,
              joinedUsers: n,
              room: C(e.room, t.payload),
            }
          );
        }),
        Object(a.a)(i, b, function (e, t) {
          var n = t.payload,
            i = e.currentAudioChannelUserList.map(function (e) {
              return e.id == n.id
                ? Object(o.a)(
                    Object(o.a)(Object(o.a)({}, e), n),
                    {},
                    { id: e.id }
                  )
                : e;
            });
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { currentAudioChannelUserList: i }
          );
        }),
        Object(a.a)(i, h, function (e, t) {
          var n = t.payload || {},
            i = Object(o.a)(Object(o.a)({}, e.localConfig), n),
            r = n.isMuted,
            a = n.isInputMuted,
            s = n.overlay,
            c = window.Kaiheila;
          return (
            u.a.isElectron &&
              (void 0 != r &&
                e.localConfig.isMuted != r &&
                c.Overlay.setSelfInfo({ isMuted: r }),
              void 0 != a &&
                e.localConfig.isInputMuted != a &&
                c.Overlay.setSelfInfo({ isInputMuted: a }),
              void 0 != s && e.localConfig.overlay != s && c.Overlay.enable(s)),
            Object(l.d)(i),
            Object(o.a)(Object(o.a)({}, e), {}, { localConfig: i })
          );
        }),
        Object(a.a)(i, "SET_LOCAL_STREAM", function (e, t) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { localStream: t.payload }
          );
        }),
        i)
      );
    },
    37: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return _;
        }),
        n.d(t, "b", function () {
          return f;
        });
      var i = n(2),
        r = n(3),
        a = n(20),
        o = window,
        s = o.localStorage,
        c = o.Kaiheila,
        l = (function () {
          function e() {
            Object(i.a)(this, e), (this.path = "");
          }
          return (
            Object(r.a)(e, [
              {
                key: "init",
                value: function (e) {
                  var t = e.cwd,
                    n = void 0 === t ? "" : t;
                  e._encrypt;
                  this.path = n;
                },
              },
              {
                key: "_getkey",
                value: function (e) {
                  return this.path ? "".concat(this.path, "_").concat(e) : e;
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  e = this._getkey(e);
                  var n = s.getItem(e);
                  if (null === n) return t;
                  try {
                    return JSON.parse(n);
                  } catch (i) {
                    return n;
                  }
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  (e = this._getkey(e)),
                    (t = JSON.stringify(t)),
                    s.setItem(e, t);
                },
              },
            ]),
            e
          );
        })(),
        u = new l();
      u.init({ cwd: "kaiheila" });
      var d = new l();
      a.c && ((u = c.store.globalStore), (d = c.store.userStore));
      var m = d,
        _ = u,
        f = {
          COUNTRY_INFO: "COUNTRY_INFO",
          EMOJI_PREV_SELECTED_CATEGORY: "EMOJI_PREV_SELECTED_CATEGORY",
          AUDIO_CONFIG_KEY: "AUDIO_CONFIG_KEY",
          THEME_SETTING_KEY: "THEME_SETTING_KEY",
          kaihei_app_config: "kaihei_app_config",
          kaihei_emoji_often: "kaihei_emoji_often",
          shortcut_repeat_tip_ignore: "shortcut_repeat_tip_ignore",
          internet_fraud_close_time: "internet_fraud_close_time",
          markdown_tools_visible: "markdown_tools_visible",
          accompaniment_restart_alert: "accompaniment_restart_alert",
        };
    },
    40: function (e, t, n) {
      "use strict";
      n.d(t, "l", function () {
        return d;
      }),
        n.d(t, "a", function () {
          return m;
        }),
        n.d(t, "s", function () {
          return _;
        }),
        n.d(t, "g", function () {
          return f;
        }),
        n.d(t, "m", function () {
          return v;
        }),
        n.d(t, "u", function () {
          return b;
        }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return g;
        }),
        n.d(t, "j", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return w;
        }),
        n.d(t, "v", function () {
          return k;
        }),
        n.d(t, "n", function () {
          return O;
        }),
        n.d(t, "h", function () {
          return j;
        }),
        n.d(t, "o", function () {
          return C;
        }),
        n.d(t, "i", function () {
          return E;
        }),
        n.d(t, "k", function () {
          return S;
        }),
        n.d(t, "f", function () {
          return I;
        }),
        n.d(t, "q", function () {
          return M;
        }),
        n.d(t, "p", function () {
          return A;
        }),
        n.d(t, "r", function () {
          return T;
        }),
        n.d(t, "t", function () {
          return x;
        });
      var i,
        r = n(11),
        a = n(15),
        o = n(1),
        s = n(88),
        c = n(18),
        l = n(45),
        u = n(74),
        d = "SET_CHATLIST",
        m = "ADD_CHAT",
        _ = "UPDATE_CHAT",
        f = "REMOVE_CHAT",
        v = "SET_CURRENT_CHAT",
        b = "UPDATE_LAST_MESSAGE",
        h = "CLEAN_UNREAD",
        p = "BATCH_CLEAN_UNREAD",
        g = "REFRESH_CHAT_TARGETINFRO",
        y = "REMOVE_MESSAGE_UPDATE_UNREAD",
        w = "CLEAN_OUTSTAND_CHATLIST",
        k = "UPDATE_OUTSTAND_CHATLIST",
        O = "SET_FRIENDLIST",
        j = "REMOVE_FRIEND",
        C = "SET_FRIENDREQUESTLIST",
        E = "REMOVE_FRIENDREQUEST",
        S = "SET_BLACKLIST",
        I = "REMOVE_BLACK",
        M = "SET_USER_REMARK",
        A = "SET_REMARK_LIST",
        T = "UPDATE_APP_CONFIG",
        x = "UPDATE_CHAT_USER",
        L = window.navigator.userAgent.includes("Electron");
      function D() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        e.forEach(function (e) {
          e.target_info &&
            (e.target_info.username_pinyin = u.b.convertToPinyin(
              e.target_info.username
            ));
        });
      }
      t.w = Object(s.a)(
        {
          appConfig: l.a.getAppConfigAll(),
          currentChat: null,
          chatList: [],
          outstandChatList: [],
          friendList: [],
          friendRequestList: [],
          blackList: [],
          remarkList: [],
        },
        ((i = {}),
        Object(r.a)(i, T, function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { appConfig: Object(o.a)(Object(o.a)({}, e.appConfig), n) }
          );
        }),
        Object(r.a)(i, M, function (e, t) {
          var n = t.payload,
            i = n.user_id,
            r = { remark: n.remark, intimacy: n.intimacy },
            a = e.remarkList.find(function (e) {
              return e.user_id == i;
            }),
            s = Object(o.a)({}, e);
          return (
            (s.remarkList = a
              ? s.remarkList.map(function (e) {
                  return e.user_id == i
                    ? Object(o.a)(Object(o.a)({}, e), r)
                    : e;
                })
              : s.remarkList.concat(Object(o.a)({ user_id: i }, r))),
            s
          );
        }),
        Object(r.a)(i, A, function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            { remarkList: Object(a.a)(n) }
          );
        }),
        Object(r.a)(i, d, function (e, t) {
          var n = t.payload;
          return (
            D(n),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              {
                outstandChatList: n
                  .filter(function (e) {
                    return 0 != e.unread_count;
                  })
                  .slice(0, 1),
                chatList: Object(a.a)(n),
              }
            )
          );
        }),
        Object(r.a)(i, m, function (e, t) {
          var n = t.payload,
            i = e.chatList.find(function (e) {
              return e.code == n.code;
            });
          return (
            D([n]),
            i ? Object.assign(i, n) : e.chatList.unshift(n),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { chatList: Object(a.a)(e.chatList) }
            )
          );
        }),
        Object(r.a)(i, f, function (e, t) {
          var n = t.payload,
            i = e.chatList.findIndex(function (e) {
              return e.code == n;
            });
          return i > -1
            ? (e.chatList.splice(i, 1),
              Object(o.a)(
                Object(o.a)({}, e),
                {},
                { chatList: Object(a.a)(e.chatList) }
              ))
            : e;
        }),
        Object(r.a)(i, _, function (e, t) {
          var n = t.payload,
            i = e.currentChat,
            r = e.chatList;
          return (
            D([n]),
            i && n.code === i && (i = Object(o.a)(Object(o.a)({}, i), n)),
            r.forEach(function (e) {
              e.code === n.code && Object.assign(e, n);
            }),
            Object(o.a)(Object(o.a)({}, e), {}, { currentChat: i, chatList: r })
          );
        }),
        Object(r.a)(i, x, function (e, t) {
          var n = t.payload,
            i = e.currentChat,
            r = e.chatList;
          return (
            i &&
              i.target_info &&
              i.target_info.id === n.id &&
              (i = Object(o.a)(
                Object(o.a)({}, i),
                {},
                { target_info: Object(o.a)(Object(o.a)({}, i.target_info), n) }
              )),
            r.forEach(function (e) {
              e.target_info &&
                e.target_info.id === n.id &&
                Object.assign(e.target_info, n);
            }),
            Object(o.a)(Object(o.a)({}, e), {}, { currentChat: i, chatList: r })
          );
        }),
        Object(r.a)(i, g, function (e, t) {
          var n = t.payload,
            i = {};
          return (
            n.forEach(function (e) {
              var t = e.target_info;
              i[t.id] = t;
            }),
            e.chatList.forEach(function (e) {
              Object.assign(e.target_info, i[e.target_info.id]);
            }),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { chatList: Object(a.a)(e.chatList) }
            )
          );
        }),
        Object(r.a)(i, y, function (e, t) {
          var n = t.payload,
            i = n.author_id,
            r = n.create_at;
          return (
            e.chatList.forEach(function (e) {
              e.target_info.id == i &&
                e.unread_count > 0 &&
                e.last_read_time < r &&
                (e.unread_count -= 1);
            }),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { chatList: Object(a.a)(e.chatList) }
            )
          );
        }),
        Object(r.a)(i, v, function (e, t) {
          var n = t.payload;
          return Object(o.a)(Object(o.a)({}, e), {}, { currentChat: n });
        }),
        Object(r.a)(i, p, function (e, t) {
          var n = t.payload;
          Object(o.a)({}, e.chatList);
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              chatList: (e.chatList || []).map(function (e) {
                var t = n.find(function (t) {
                  return t.code == e.code;
                });
                return t
                  ? Object(o.a)(
                      Object(o.a)({}, e),
                      {},
                      {
                        unread_count: 0,
                        last_read_time: t.last_read_time,
                        latest_msg_time: t.latest_msg_time,
                      }
                    )
                  : e;
              }),
            }
          );
        }),
        Object(r.a)(i, h, function (e, t) {
          var n = t.payload,
            i = n.code,
            r = n.last_read_time,
            s = e.chatList.find(function (e) {
              return e.code == i;
            });
          return (
            s && ((s.unread_count = 0), r && (s.last_read_time = r)),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { chatList: Object(a.a)(e.chatList) }
            )
          );
        }),
        Object(r.a)(i, b, function (e, t) {
          var n = t.payload,
            i = n.message,
            r = n.targetId,
            s = n.unread,
            c = n.isMsgMute,
            l = e.chatList.find(function (e) {
              return e.target_info.id == r;
            });
          return (
            l &&
              (c ||
                (s
                  ? (l.unread_count += 1)
                  : 6 != i.type &&
                    ((l.last_read_time = i.create_at), (l.unread_count = 0))),
              (l.latest_msg_time = i.create_at)),
            e.chatList.sort(function (e, t) {
              return t.latest_msg_time - e.latest_msg_time;
            }),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { chatList: Object(a.a)(e.chatList) }
            )
          );
        }),
        Object(r.a)(i, w, function (e) {
          return Object(o.a)(Object(o.a)({}, e), {}, { outstandChatList: [] });
        }),
        Object(r.a)(i, k, function (e) {
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              outstandChatList: e.chatList
                .filter(function (e) {
                  return 0 != e.unread_count;
                })
                .slice(0, 1),
            }
          );
        }),
        Object(r.a)(i, O, function (e, t) {
          var n = t.payload;
          return (
            c.e.emit("refresh"),
            Object(o.a)(Object(o.a)({}, e), {}, { friendList: Object(a.a)(n) })
          );
        }),
        Object(r.a)(i, j, function (e, t) {
          var n = t.payload;
          return (
            c.e.emit("refresh"),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              {
                friendList: Object(a.a)(
                  e.friendList.filter(function (e) {
                    return e.friend_info.id !== n;
                  })
                ),
              }
            )
          );
        }),
        Object(r.a)(i, C, function (e, t) {
          var n = t.payload;
          return (
            L &&
              window.Kaiheila &&
              window.Kaiheila.ipcRenderer.send("set_message_box_friend", {
                payload: n,
              }),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { friendRequestList: Object(a.a)(n) }
            )
          );
        }),
        Object(r.a)(i, E, function (e, t) {
          var n = t.payload;
          return Object(o.a)(
            Object(o.a)({}, e),
            {},
            {
              friendRequestList: Object(a.a)(
                e.friendRequestList.filter(function (e) {
                  return e.friend_info.id !== n;
                })
              ),
            }
          );
        }),
        Object(r.a)(i, S, function (e, t) {
          var n = t.payload;
          return (
            c.e.emit("refresh"),
            Object(o.a)(Object(o.a)({}, e), {}, { blackList: n })
          );
        }),
        Object(r.a)(i, I, function (e, t) {
          var n = t.payload;
          c.e.emit("refresh");
          var i = e.blackList.findIndex(function (e) {
            return e.friend_info.id == n;
          });
          return (
            i > -1 && e.blackList.splice(i, 1),
            Object(o.a)(
              Object(o.a)({}, e),
              {},
              { blackList: Object(a.a)(e.blackList) }
            )
          );
        }),
        i)
      );
    },
    41: function (e, t, n) {
      "use strict";
      var i = n(112);
      t.a = Object(i.b)({
        login: "/v2/auth/login",
        register: "/v2/users",
        getCheckCode: "/v2/auth/phone-verification",
        resetPass: "/v2/auth/forgot",
        discoverables: "/v2/discoverables",
        recommends: "/v2/guilds/recommends",
        guilds: "/v2/guilds",
        invites: "/v2/invites",
        userState: "/v2/user/user-state",
        auths: "/v2/auths",
        users: "/v2/users",
        usersSetting: "/v2/user/settings",
        phoneVerification: "/v2/auth/phone-verification",
        settings: "/v2/user/settings",
        inviteCodeVerification: "/v2/auths/invite-code-verification",
        inviteCodes: "/v2/users/invite-codes",
        channels: "/v2/channels",
        assets: "/v2/assets",
        unread: "/v2/messages/unread",
        clear: "/v2/messages/clear",
        messages: "/v2/messages",
        privateChat: "/v2/user-chats",
        teamMembers: "/v2/team-members",
        audioChannelInvite: "/v2/channels/invite",
        audioChannelInviteHandle: "/v2/channels/handle-invite",
        sort: "/v2/guilds/sort",
        tags: "/v2/guild-recommends/tags",
        userdnds: "/v2/user-dnds",
        remark: "/v2/users/remark",
        batchClear: "/v3/message/batch-clear",
      });
    },
    43: function (e, t, n) {
      "use strict";
      n.d(t, "k", function () {
        return a;
      }),
        n.d(t, "m", function () {
          return o;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "o", function () {
          return c;
        }),
        n.d(t, "n", function () {
          return l;
        }),
        n.d(t, "p", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "i", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return _;
        }),
        n.d(t, "j", function () {
          return f;
        }),
        n.d(t, "l", function () {
          return v;
        }),
        n.d(t, "q", function () {
          return b;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "h", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return w;
        });
      var i = n(16),
        r = n(41),
        a = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return i.a.post(r.a.login, e, t);
        },
        o = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return i.a.post(r.a.register, e, t);
        },
        s = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return i.a.post(r.a.getCheckCode, e, t);
        },
        c = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return i.a.post(r.a.resetPass, e, t);
        },
        l = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          return i.a.get.apply(i.a, [r.a.remark, e].concat(n));
        },
        u = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          return i.a.get.apply(i.a, [r.a.tags, e].concat(n));
        },
        d = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          return i.a.post.apply(i.a, [r.a.guilds, e].concat(n));
        },
        m = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          return i.a.get.apply(i.a, [r.a.unread, e].concat(n));
        },
        _ = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          return i.a.get.apply(i.a, [r.a.userdnds, e].concat(n));
        },
        f = function () {
          return i.a.get(r.a.userState);
        },
        v = function () {
          return i.a.delete(r.a.auths, {
            headers: { host: window.location.host },
          });
        },
        b = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          return i.a.patch.apply(i.a, [r.a.users, e].concat(n));
        },
        h = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          return i.a.post.apply(i.a, [r.a.phoneVerification, e].concat(n));
        },
        p = function () {
          return i.a.get("/api/v3/user/settings");
        },
        g = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return i.a.get("/api/v2/users/".concat(e, "?guild_id=").concat(t));
        },
        y = function (e) {
          return i.a.get("".concat(r.a.privateChat, "/").concat(e));
        };
      function w(e) {
        return i.a.get("/api/v2/channels/".concat(e));
      }
    },
    45: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return l;
        });
      var i = n(2),
        r = n(3),
        a = n(31),
        o = n(37),
        s = {
          sendMessageKeyMode: "0",
          video_volume: 0.5,
          developerMode: !1,
          screenshot_shortcut: [],
          screenshot_full_shortcut: [120],
          screenshot_save_path: "",
          golive_change_room_hide_tips: !1,
        };
      var c = new ((function () {
        function e() {
          Object(i.a)(this, e), (this.config = {});
        }
        return (
          Object(r.a)(e, [
            {
              key: "init",
              value: function () {
                this.config = (function () {
                  var e = a.a.getItem("kaihei_app_config");
                  return (
                    (e && "object" === typeof e) || (e = {}),
                    (e = o.c.get(o.b.kaihei_app_config, e)),
                    Object.assign({}, s, e)
                  );
                })();
              },
            },
            {
              key: "getAppConfig",
              value: function (e) {
                return this.config[e];
              },
            },
            {
              key: "getAppConfigAll",
              value: function () {
                return this.config;
              },
            },
            {
              key: "setAppConfig",
              value: function (e, t) {
                (this.config[e] = t), this._storeConfig();
              },
            },
            {
              key: "_storeConfig",
              value: function () {
                o.c.set(o.b.kaihei_app_config, this.config);
              },
            },
          ]),
          e
        );
      })())();
      function l() {
        return !0 === c.config.developerMode;
      }
      t.a = c;
    },
    46: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return _;
        });
      var i = n(1),
        r = n(2),
        a = n(3),
        o = n(31),
        s = n(37),
        c =
          (n(57),
          {
            beepVolume: 5,
            selectedMicrophoneId: "",
            selectedHeadphoneId: "",
            inputVolume: 100,
            outputVolume: 100,
            inputMode: "talk",
            keypressDelay: 0,
            openInputKey: [113],
            closeInputKey: [],
            quickMuteKey: [],
            autoSens: !0,
            sensitivity: -90,
            echoCancellation: !0,
            noiseCancellation: !0,
            soundGain: !0,
            isInputMuted: !1,
            isMuted: !1,
            usersVolume: {},
            overlay: !0,
            autoSelectDeviceShow: !0,
            lastConnectAudioInfo: {},
            accompanimentVolume: 100,
            aiNoiseSuppression: !1,
            fixedGain: !1,
          }),
        l = (function () {
          function e() {
            Object(r.a)(this, e), Object.assign(this, c);
          }
          return (
            Object(a.a)(
              e,
              [
                {
                  key: "load",
                  value: function () {
                    var e = u();
                    Object.assign(this, e);
                  },
                },
                {
                  key: "getConfig",
                  value: function (e) {
                    return u()[e];
                  },
                },
                {
                  key: "setConfig",
                  value: function (e, t) {
                    var n = u();
                    (n[e] = t), (this[e] = t), d(n);
                  },
                },
              ],
              [
                {
                  key: "getConfigList",
                  value: function () {
                    return Object.keys(c);
                  },
                },
              ]
            ),
            e
          );
        })();
      function u() {
        var e = o.a.getItem("KAIHEI_AUDIO_CONFIG");
        "object" !== typeof e && (e = {});
        var t = s.c.get(s.b.AUDIO_CONFIG_KEY, e);
        return (t = Object(i.a)(Object(i.a)({}, c), t));
      }
      function d(e) {
        s.c.set(s.b.AUDIO_CONFIG_KEY, JSON.parse(JSON.stringify(e)));
      }
      function m(e, t) {
        console.warn(
          "\u76f4\u63a5\u8c03\u7528 setConfig \u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e0e Redux \u4e2d\u6570\u636e\u4e0d\u4e00\u81f4"
        );
        var n = u();
        (n[e] = t), d(n);
      }
      function _(e) {
        return u()[e];
      }
    },
    47: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = n(2),
        r = n(3),
        a = n(31),
        o = n(43),
        s = n(26),
        c = "authorization",
        l = (function () {
          function e() {
            Object(i.a)(this, e);
          }
          return (
            Object(r.a)(e, null, [
              {
                key: "login",
                value: function (e, t, n) {
                  (a.a.setItem("auth", e), t) &&
                    (void 0 == n
                      ? a.a.getItem(c)
                        ? a.a.setItem(c, t)
                        : window.sessionStorage.setItem(c, t)
                      : n
                      ? a.a.setItem(c, t)
                      : window.sessionStorage.setItem(c, t));
                  return !0;
                },
              },
              {
                key: "logout",
                value: function () {
                  window.localStorage.removeItem("auth"),
                    window.localStorage.removeItem("CHANNEL_CACHE"),
                    window.localStorage.removeItem("KAIHEI_AUDIO_CONFIG"),
                    window.localStorage.removeItem(s.q),
                    window.localStorage.removeItem(s.m),
                    window.localStorage.removeItem(c),
                    window.sessionStorage.removeItem(c),
                    window.localStorage.removeItem(
                      "__temp__firstlaunch_olverlay_video"
                    );
                  var e = new Date();
                  return (
                    e.setTime(e.getTime() - 1),
                    (document.cookie = "auth=;expires=".concat(
                      e.toGMTString(),
                      ";path=/"
                    )),
                    window.Kaiheila && window.Kaiheila.System.logout(),
                    Object(o.l)()
                  );
                },
              },
              {
                key: "relogin",
                value: function () {
                  window.localStorage.removeItem("auth"),
                    window.localStorage.removeItem("CHANNEL_CACHE"),
                    window.localStorage.removeItem("KAIHEI_AUDIO_CONFIG"),
                    window.localStorage.removeItem(s.q),
                    window.localStorage.removeItem(s.m),
                    window.localStorage.removeItem(c);
                },
              },
              {
                key: "isLogin",
                value: function () {
                  return !!window.localStorage.getItem("auth");
                },
              },
              {
                key: "getSocketToken",
                value: function () {
                  return (a.a.getItem("auth") || {}).rong_token;
                },
              },
              {
                key: "getAuthInfo",
                value: function () {
                  return a.a.getItem("auth") || {};
                },
              },
              {
                key: "getMediaToken",
                value: function () {
                  return (
                    window.sessionStorage.getItem(c) || a.a.getItem(c) || ""
                  );
                },
              },
              {
                key: "refresh",
                value: function () {
                  return Object(o.j)().then(function (e) {
                    return a.a.setItem("auth", e), e;
                  });
                },
              },
            ]),
            e
          );
        })();
    },
    48: function (e, t, n) {
      "use strict";
      n.d(t, "g", function () {
        return _;
      }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "h", function () {
          return v;
        }),
        n.d(t, "n", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return h;
        }),
        n.d(t, "j", function () {
          return p;
        }),
        n.d(t, "i", function () {
          return g;
        }),
        n.d(t, "l", function () {
          return y;
        }),
        n.d(t, "d", function () {
          return w;
        }),
        n.d(t, "m", function () {
          return k;
        }),
        n.d(t, "e", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return j;
        }),
        n.d(t, "b", function () {
          return C;
        }),
        n.d(t, "k", function () {
          return E;
        });
      var i,
        r = n(11),
        a = n(44),
        o = n(15),
        s = n(1),
        c = n(88),
        l = n(56),
        u = n(14),
        d = ["nonce"],
        m = ["nonce"],
        _ = "SET_TEXT_MESSAGE_LIST",
        f = "ADD_TEXT_MESSAGE",
        v = "SET_TEXT_MESSAGE_LIST_UNADD",
        b = "UPLOAD_TEXT_MESSAGE_LIST",
        h = "REDUCE_TEXT_MESSAGE_LIST",
        p = "UPDATE_MESSAGE",
        g = "UPDATE_LOCAL_MESSAGE",
        y = "UPDATE_OR_INSERT_LOCAL_MESSAGE",
        w = "REMOVE_MESSAGE",
        k = "UPDATE_UPLOAD_MESSAGE",
        O = "REMOVE_UPLOAD_MESSAGE",
        j = "SET_INVITE_INFO",
        C = "BANMEMBER_DELETE_MESSAGE",
        E = "UPDATE_MESSAGE_AUTHOR";
      function S(e) {
        2 === e.type && (e.previewSize = Object(u.fb)(e.content)),
          1 === e.type && (e.content = Object(u.nb)(e.content));
        var t = e.create_at;
        return Object.assign(e, { timeStr: Object(l.a)(t) });
      }
      t.o = Object(c.a)(
        {
          textMessageListUnAdd: !1,
          lastId: null,
          textMessageList: [],
          uploadMessageList: [],
          uploadImgList: [],
          inviteInfo: {},
        },
        ((i = {}),
        Object(r.a)(i, E, function (e, t) {
          var n = t.payload;
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            {
              textMessageList: e.textMessageList.map(function (e) {
                return e.author && e.author.id === n.id
                  ? Object(s.a)(
                      Object(s.a)({}, e),
                      {},
                      { author: Object(s.a)(Object(s.a)({}, e.author), n) }
                    )
                  : e;
              }),
            }
          );
        }),
        Object(r.a)(i, "ADD_UPLOAD_MESSAGE", function (e, t) {
          var n = t.payload;
          return (
            (n = S(n)),
            Object(s.a)(
              Object(s.a)({}, e),
              {},
              {
                textMessageList: [].concat(Object(o.a)(e.textMessageList), [n]),
                uploadMessageList: e.textMessageListUnAdd
                  ? e.uploadMessageList
                  : [].concat(Object(o.a)(e.uploadMessageList), [n]),
              }
            )
          );
        }),
        Object(r.a)(i, k, function (e, t) {
          var n = t.payload,
            i =
              e.textMessageList.findIndex(function (e) {
                return e.id === n.id;
              }) > -1;
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            {
              textMessageList: i
                ? e.textMessageList.map(function (e) {
                    return e.id === n.id
                      ? Object(s.a)(Object(s.a)({}, e), n)
                      : e;
                  })
                : e.textMessageList,
            }
          );
        }),
        Object(r.a)(i, O, function (e, t) {
          var n = t.payload;
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            {
              textMessageList: e.textMessageList.filter(function (e) {
                return e.id != n;
              }),
              uploadMessageList: e.uploadMessageList.filter(function (e) {
                return e.id != n;
              }),
            }
          );
        }),
        Object(r.a)(i, v, function (e, t) {
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            { textMessageListUnAdd: t.payload }
          );
        }),
        Object(r.a)(i, f, function (e, t) {
          if (e.textMessageListUnAdd) return e;
          var n = S(t.payload.message);
          if (
            n.rong_id
              ? e.textMessageList.some(function (e) {
                  return e.rong_id == n.rong_id;
                })
              : e.textMessageList.some(function (e) {
                  return e.id == n.id;
                })
          )
            return e;
          if (0 == e.textMessageList.length)
            return Object(s.a)(
              Object(s.a)({}, e),
              {},
              {
                textMessageList: [].concat(Object(o.a)(e.textMessageList), [n]),
              }
            );
          for (
            var i = Object(o.a)(e.textMessageList),
              r = 0,
              a = e.textMessageList.length - 1;
            a >= 0;
            a--
          )
            if (n.create_at >= e.textMessageList[a].create_at) {
              r = a + 1;
              break;
            }
          return (
            i.splice(r, 0, n),
            Object(s.a)(Object(s.a)({}, e), {}, { textMessageList: i })
          );
        }),
        Object(r.a)(i, w, function (e, t) {
          var n = t.payload,
            i = Object(s.a)({}, e),
            r = i.textMessageList,
            a = -1;
          return (
            "string" === typeof n
              ? ((a = r.findIndex(function (e) {
                  return e.id == n || e.rong_id == n;
                })),
                r.forEach(function (e) {
                  !e.quote ||
                    (e.quote.id != n && e.rong_id != n) ||
                    (e.quote = null);
                }))
              : "object" == typeof n
              ? ((a = r.findIndex(function (e) {
                  return e.rong_id ? e.rong_id == n.rong_id : e.id == n.id;
                })),
                r.forEach(function (e) {
                  e.quote && e.quote.rong_id == n.rong_id && (e.quote = null);
                }))
              : ((i.uploadImgList = i.uploadImgList.filter(function (e) {
                  return e.id != n;
                })),
                (a = r.findIndex(function (e) {
                  return e.id == n;
                }))),
            -1 !== a && r.splice(a, 1),
            Object(s.a)(
              Object(s.a)({}, i),
              {},
              { textMessageList: Object(o.a)(r) }
            )
          );
        }),
        Object(r.a)(i, "REMOVE_IMAGE_UPLOAD_MESSAGE", function (e, t) {
          var n = t.payload,
            i = n.id,
            r = n.addToMessage,
            a = n.content,
            o = n.status,
            c = n.rong_id,
            l = e.uploadImgList.find(function (e) {
              return e.id == i;
            });
          l && ((l.content = a), (l.status = o), (l.rong_id = c));
          var u = e.textMessageList;
          return (
            r && l && (u = e.textMessageList.concat(l)),
            Object(s.a)(
              Object(s.a)({}, e),
              {},
              {
                uploadImgList: e.uploadImgList.filter(function (e) {
                  return e.id != i;
                }),
                textMessageList: u,
              }
            )
          );
        }),
        Object(r.a)(i, "CHANGE_IMAGE_UPLOAD_STATUS", function (e, t) {
          var n = t.payload,
            i = n.id,
            r = n.status;
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            {
              uploadImgList: e.uploadImgList.map(function (e) {
                return e.id == i && (e.status = r), e;
              }),
            }
          );
        }),
        Object(r.a)(i, "DELETE_IMAGE_UPLOAD_MESSAGE", function (e, t) {
          var n = t.payload.id;
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            {
              uploadImgList: e.uploadImgList.filter(function (e) {
                return e.id != n;
              }),
            }
          );
        }),
        Object(r.a)(i, b, function (e, t) {
          var n = t.payload,
            i = n.after,
            r = void 0 === i ? [] : i,
            a = n.before,
            c = void 0 === a ? [] : a;
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            {
              textMessageList: [].concat(
                Object(o.a)(
                  c.map(function (e) {
                    return S(e);
                  })
                ),
                Object(o.a)(e.textMessageList),
                Object(o.a)(
                  r.map(function (e) {
                    return S(e);
                  })
                )
              ),
            }
          );
        }),
        Object(r.a)(i, h, function (e, t) {
          var n = t.payload,
            i = n.count,
            r = void 0 === i ? 100 : i,
            a = n.after,
            o = e.textMessageList,
            c = void 0 === o ? [] : o;
          return (
            (c = a ? c.slice(0, r) : c.slice(c.length - r)),
            Object(s.a)(Object(s.a)({}, e), {}, { textMessageList: c })
          );
        }),
        Object(r.a)(i, "CLEAR_TEXT_MESSAGE_LIST", function (e) {
          return Object(s.a)(Object(s.a)({}, e), {}, { textMessageList: [] });
        }),
        Object(r.a)(i, _, function (e, t) {
          var n = t.payload.map(function (e) {
            return S(e);
          });
          return Object(s.a)(Object(s.a)({}, e), {}, { textMessageList: n });
        }),
        Object(r.a)(i, p, function (e, t) {
          var n = t.payload,
            i = e.textMessageList.map(function (e) {
              return (
                e.rong_id === n.rong_id &&
                  ((e = Object.assign({}, e, n)),
                  n.updateQuote && void 0 === n.quote && delete e.quote),
                e.quote &&
                  e.quote.rong_id == n.rong_id &&
                  Object.assign(e.quote, n),
                e
              );
            });
          return Object(s.a)(Object(s.a)({}, e), {}, { textMessageList: i });
        }),
        Object(r.a)(i, g, function (e, t) {
          var n = t.payload;
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            {
              textMessageList: e.textMessageList.map(function (e) {
                if (n.id && e.id === n.id)
                  return Object(s.a)(Object(s.a)({}, e), n);
                if (n.nonce && n.nonce === e.id) {
                  n.nonce;
                  var t = Object(a.a)(n, d);
                  return Object(s.a)(Object(s.a)({}, e), t);
                }
                return e;
              }),
            }
          );
        }),
        Object(r.a)(i, y, function (e, t) {
          var n = t.payload,
            i = !1,
            r = e.textMessageList.map(function (e) {
              if (n.id && e.id === n.id) return (i = !0), Object.assign(e, n);
              if (n.nonce && n.nonce === e.id) {
                i = !0;
                n.nonce;
                var t = Object(a.a)(n, m);
                return Object(s.a)(Object(s.a)({}, e), t);
              }
              return e;
            });
          return (
            i || (r = [].concat(Object(o.a)(r), [n])),
            Object(s.a)(Object(s.a)({}, e), {}, { textMessageList: r })
          );
        }),
        Object(r.a)(i, "EDIT_UPDATE_MESSAGE", function (e, t) {
          var n = t.payload;
          return (
            e.textMessageList.forEach(function (e) {
              n.id && e.id === n.id && Object.assign(e, n);
            }),
            Object(s.a)(
              Object(s.a)({}, e),
              {},
              { textMessageList: Object(o.a)(e.textMessageList) }
            )
          );
        }),
        Object(r.a)(i, j, function (e, t) {
          var n = t.payload,
            i = n.code,
            a = n.inviteInfo;
          return Object(s.a)(
            Object(s.a)({}, e),
            {},
            {
              inviteInfo: Object(s.a)(
                Object(s.a)({}, e.inviteInfo),
                {},
                Object(r.a)({}, i, a)
              ),
            }
          );
        }),
        Object(r.a)(i, C, function (e, t) {
          var n = t.payload,
            i = n.user_id,
            r = n.deleted_messages_from,
            a = e.textMessageList.filter(function (e) {
              return e.author.id !== i || e.create_at < r;
            });
          return Object(s.a)(Object(s.a)({}, e), {}, { textMessageList: a });
        }),
        i)
      );
    },
    54: function (e, t, n) {
      "use strict";
      function i() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return 0 == e.length
          ? ""
          : e
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/\'/g, "&#39;")
              .replace(/\"/g, "&quot;")
              .replace(/&#8238;/g, "")
              .replace(/&#8207;/g, "");
      }
      function r(e) {
        return 0 == e.length
          ? ""
          : e
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&#39;/g, "'")
              .replace(/&#039;/g, "'")
              .replace(/&quot;/g, '"');
      }
      function a() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.replace(/[<>&"]/g, function (e) {
          return {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "&#8238;": "",
            "&#8207;": "",
          }[e];
        });
      }
      n.d(t, "c", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "a", function () {
          return a;
        });
    },
    56: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var i = n(12),
        r = [
          "\u661f\u671f\u65e5",
          "\u661f\u671f\u4e00",
          "\u661f\u671f\u4e8c",
          "\u661f\u671f\u4e09",
          "\u661f\u671f\u56db",
          "\u661f\u671f\u4e94",
          "\u661f\u671f\u516d",
        ];
      function a(e) {
        var t = new Date(e),
          n = {
            dayStr: "\u4eca\u5929",
            sx: "\u4e0a\u5348",
            formatedTime: "00:00",
          };
        n.dayStr = (function (e) {
          var t = new Date();
          return (
            t.setHours(0),
            t.setMinutes(0),
            t.setSeconds(0),
            e > +t
              ? "\u4eca\u5929"
              : e > t.setDate(t.getDate() - 1)
              ? "\u6628\u5929"
              : e > t.setDate(t.getDate() - 5)
              ? r[e.getDay()]
              : Object(i.g)(e, "YYYY\u5e74MM\u6708DD\u65e5")
          );
        })(t);
        var a = t.getHours();
        return (
          (n.sx =
            a < 12
              ? a < 5
                ? "\u51cc\u6668"
                : "\u4e0a\u5348"
              : a < 13
              ? "\u4e2d\u5348"
              : "\u4e0b\u5348"),
          (n.formatedTime = Object(i.g)(e, "hh:ii")),
          "".concat(n.dayStr, " ").concat(n.sx, " ").concat(n.formatedTime)
        );
      }
      function o(e) {
        var t = new Date(e).getHours();
        return ""
          .concat(Object(i.g)(e, "M/D"), " ")
          .concat(
            (t < 12 ? "\u4e0a\u5348" : "\u4e0b\u5348") + Object(i.g)(e, "hh:ii")
          );
      }
    },
    57: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = {
        MENTION: {
          id: 10,
          filePath: "/app/assets/audio/mention.mp3",
          title: window.ext("notificatios_notificationsw"),
        },
        HEAD_MUTE: {
          id: 8,
          filePath: "/app/assets/audio/head-mute.mp3",
          title: window.ext("notificatios_deafensw"),
        },
        CANCEL_HEAD_MUTE: {
          id: 9,
          filePath: "/app/assets/audio/cancel-head-mute.mp3",
          title: window.ext("notificatios_undeafensw"),
        },
        MKF_MUTE: {
          id: 4,
          filePath: "/app/assets/audio/mkf-mute.mp3",
          title: window.ext("notificatios_mutesw"),
        },
        MKF_CANCEL_MUTE: {
          id: 5,
          filePath: "/app/assets/audio/mkf-cancel-mute.mp3",
          title: window.ext("notificatios_unmutesw"),
        },
        EXIT_CHANNEL: {
          id: 3,
          filePath: "/app/assets/audio/exit-channel.mp3",
          title: window.ext("notificatios_disconnectedsw"),
        },
        KEY_MKF_CANCEL_MUTE: {
          id: 7,
          filePath: "/app/assets/audio/key-talk-start.mp3",
          title: window.ext("notificatios_pttactsw"),
        },
        KEY_MKF_MUTE: {
          id: 6,
          filePath: "/app/assets/audio/key-talk-end.mp3",
          title: window.ext("notificatios_pttdeacsw"),
        },
        USER_JOIN: {
          id: 1,
          filePath: "/app/assets/audio/user-join.mp3",
          title: window.ext("notificatios_joinsw"),
        },
        USER_LEAVE: {
          id: 2,
          filePath: "/app/assets/audio/user-leave.mp3",
          title: window.ext("notificatios_leavesw"),
        },
        CAMERA: {
          id: 11,
          filePath: "/app/assets/audio/camera.mp3",
          title: window.ext("notificatios_printscreensw"),
        },
      };
    },
    59: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return l;
      }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "e", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return _;
        }),
        n.d(t, "c", function () {
          return f;
        });
      var i = n(0),
        r = n.n(i),
        a = n(170),
        o = n(81),
        s = /[\\^$.*+?()[\]{}|]/g,
        c = RegExp(s.source);
      function l(e, t, n) {
        return e.replace(
          new RegExp(
            (i = t) && c.test(i) ? i.replace(s, "\\$&") : i || "",
            "g"
          ),
          n
        );
        var i;
      }
      function u(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          var i = e.charCodeAt(n);
          (i >= 1 && i <= 126) || (i >= 65376 && i <= 65439) ? t++ : (t += 2);
        }
        return t;
      }
      function d(e, t) {
        for (var n = 0, i = 0; i < e.length; i++) {
          var r = e.charCodeAt(i);
          if (
            ((r >= 1 && r <= 126) || (r >= 65376 && r <= 65439)
              ? n++
              : (n += 2),
            n >= t)
          )
            break;
        }
        return e.substring(i);
      }
      function m(e) {
        switch (e.type) {
          case "countdown":
            return Object(o.b)(e.endTime);
          default:
            return "";
        }
      }
      function _(e, t, n) {
        return (
          (t = t || {}),
          e.split(/[{{}}]/).map(function (e, i) {
            return t[e]
              ? r.a.createElement(
                  "span",
                  { key: i },
                  (function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    switch (e.type) {
                      case "countdown":
                        return r.a.createElement(a.a, {
                          endTime: e.endTime,
                          onEnd: t.onEnd,
                        });
                      default:
                        return null;
                    }
                  })(t[e], n)
                )
              : e
              ? r.a.createElement("span", { key: i }, e)
              : null;
          })
        );
      }
      function f(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e
          .split(/[{{}}]/)
          .map(function (e) {
            return t[e] ? "".concat(m(t[e])) : e;
          })
          .join("");
      }
    },
    63: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return v;
      });
      var i = n(15),
        r = n(2),
        a = n(3),
        o = n(4),
        s = n(5),
        c = n(36),
        l = n.n(c),
        u = n(16),
        d = (function (e) {
          Object(o.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            var e;
            return (
              Object(r.a)(this, n),
              ((e = t.call(this)).start = function () {
                e.localLoopTimer = setInterval(e.updateTimeByLocal, 1e3);
              }),
              (e.startSync = function () {
                e.updateTimeByServer(),
                  (e.serverLoopTimer = setInterval(e.updateTimeByServer, 6e6));
              }),
              (e.updateTimeByServer = function () {
                e.getTimeServer()
                  .then(function (t) {
                    (e.time = t), e.emit("update", e.time);
                  })
                  .catch(function () {
                    console.log(
                      "\u83b7\u53d6\u670d\u52a1\u5668\u65f6\u95f4\u5931\u8d25"
                    );
                  });
              }),
              (e.getTimeServer = function () {
                return new Promise(function (e, t) {
                  u.a
                    .get("/api/v2/channels/sync-time")
                    .then(function (t) {
                      t && e(t);
                    })
                    .catch(t);
                });
              }),
              (e.updateTimeByLocal = function () {
                (e.time = e.time + 1e3), e.emit("update", e.time);
              }),
              (e.time = +new Date()),
              e.start(),
              e
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "stop",
                value: function () {
                  clearInterval(this.localLoopTimer);
                },
              },
              {
                key: "stopSync",
                value: function () {
                  clearInterval(this.serverLoopTimer);
                },
              },
            ]),
            n
          );
        })(l.a),
        m = Object(a.a)(function e() {
          var t = this;
          Object(r.a)(this, e),
            (this.addTask = function (e, n, i) {
              t.tasks[e] && t.clearTask(e), (t.tasks[e] = new _(n, i));
            }),
            (this.clearTask = function (e) {
              var n = t.tasks[e];
              n && (n.stop(), (t.tasks[e] = null)), delete t.tasks[e];
            }),
            (this.tasks = {});
        }),
        _ = (function () {
          function e(t, n) {
            var a = this;
            if ((Object(r.a)(this, e), t.runNow && n(), t.time)) {
              var o,
                s = new Date().getTime(),
                c = t.time.split(":").map(function (e) {
                  return parseInt(e);
                }),
                l = (o = new Date()).setHours.apply(o, Object(i.a)(c));
              l >= s || (l += 864e5),
                (this.timer = setTimeout(function () {
                  n(), (a.timer = setInterval(n, 36e5 * t.interval));
                }, l - s));
            } else
              this.timer = setTimeout(function () {
                n(), (a.timer = setInterval(n, 36e5 * t.interval));
              }, 36e5 * t.interval);
          }
          return (
            Object(a.a)(e, [
              {
                key: "stop",
                value: function () {
                  clearInterval(this.timer),
                    clearTimeout(this.timer),
                    (this.timer = null);
                },
              },
            ]),
            e
          );
        })(),
        f = new d(),
        v = new m();
      t.a = f;
    },
    65: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return o;
        });
      var i = {
          1: {
            text: window.ext("voiceoverview_fluencylab"),
            label: "\u6700\u9ad818Kbps",
            kbps: 18e3,
          },
          2: {
            text: window.ext("voiceoverview_normallab"),
            label: "\u6700\u9ad848Kbps",
            kbps: 48e3,
          },
          3: {
            text: window.ext("voiceoverview_highlab"),
            label: "\u6700\u9ad896Kbps",
            kbps: 96e3,
          },
          4: {
            text: "\u9ad8\u8d28\u91cf+1",
            label: "128Kbps",
            kbps: 128e3,
            create_text: "+1",
          },
          5: {
            text: "\u9ad8\u8d28\u91cf+2",
            label: "192Kbps",
            kbps: 192e3,
            create_text: "+2",
          },
          6: {
            text: "\u9ad8\u8d28\u91cf+3",
            label: "256Kbps",
            kbps: 256e3,
            create_text: "+3",
          },
          7: {
            text: "\u9ad8\u8d28\u91cf+4",
            label: "320Kbps",
            kbps: 32e4,
            create_text: "+4",
          },
        },
        r = [
          { label: "\u81ea\u7531\u6a21\u5f0f", value: 0 },
          { label: "\u4e3b\u6301\u4eba\u6a21\u5f0f", value: 1 },
        ],
        a = 100,
        o = -80;
    },
    67: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var i = /^1\d{10}$/,
        r = /^[\u4e00-\u9fa5]/;
      t.c = {
        phoneNumber: /^[0-9]{3,30}$/,
        password: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,30}$/,
        username: /^\S{1,30}$/,
        checkcode: /^\w{6}$/,
        chinese: r,
        chinese_phoneNumber: i,
      };
    },
    68: function (e, t, n) {
      "use strict";
      var i = n(72),
        r = n(121),
        a = n(117),
        o = n(118),
        s = { zh: { translation: a }, en: { translation: o } };
      i.a
        .use(r.e)
        .init({
          resources: s,
          lng: "zh",
          fallbackLng: "zh",
          debug: !1,
          interpolation: { escapeValue: !1 },
        }),
        (i.a.ext = function (e) {
          if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 0) {
            for (
              var t = i.a.t(e), n = 0;
              n < (arguments.length <= 1 ? 0 : arguments.length - 1);
              n++
            ) {
              var r =
                n + 1 < 1 || arguments.length <= n + 1
                  ? void 0
                  : arguments[n + 1];
              t = t.replace("%s".concat(n > 0 ? n : ""), r);
            }
            return t;
          }
          return i.a.t(e);
        }),
        (window.ext = i.a.ext),
        1 == localStorage.getItem("openI18n") && i.a.changeLanguage("en"),
        (t.a = i.a);
    },
    69: function (e, t, n) {
      "use strict";
      var i = n(2),
        r = n(3),
        a = n(31),
        o = (function () {
          function e() {
            Object(i.a)(this, e),
              (this.memeryCache = a.a.getItem("CHANNEL_CACHE") || {}),
              (this.lastTextChannels = {});
          }
          return (
            Object(r.a)(e, [
              {
                key: "setDefaultChannel",
                value: function (e, t) {
                  var n = a.a.getItem("CHANNEL_CACHE") || {};
                  (n[e] = t),
                    (this.memeryCache[e] = t),
                    a.a.setItem("CHANNEL_CACHE", n);
                },
              },
              {
                key: "getDefaultChannel",
                value: function (e) {
                  return (this.memeryCache || {})[e];
                },
              },
              {
                key: "removeDefaultChannel",
                value: function (e) {
                  var t = a.a.getItem("CHANNEL_CACHE") || {};
                  delete t[e],
                    delete this.memeryCache[e],
                    a.a.setItem("CHANNEL_CACHE", t);
                },
              },
              {
                key: "setLastTextChannel",
                value: function (e, t) {
                  this.lastTextChannels[e] = t;
                },
              },
              {
                key: "getLastTextChannel",
                value: function (e) {
                  return this.lastTextChannels[e];
                },
              },
            ]),
            e
          );
        })();
      t.a = new o();
    },
    694: function (e, t, n) {
      e.exports = n(695);
    },
    695: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(2),
        r = n(3),
        a = n(4),
        o = n(5),
        s = n(0),
        c = n.n(s),
        l = n(17),
        u = n.n(l),
        d = (n(139), n(20)),
        m = n(29),
        _ = n(9),
        f = n.n(_),
        v = n(84),
        b =
          (n(182),
          n(68),
          (function (e) {
            Object(a.a)(n, e);
            var t = Object(o.a)(n);
            function n() {
              var e;
              return (
                Object(i.a)(this, n),
                ((e = t.call(this)).min = function () {
                  Kaiheila.win.min();
                }),
                (e.max = function () {
                  Kaiheila.win.max();
                }),
                (e.restore = function () {
                  Kaiheila.win.unmax();
                }),
                (e.close = function () {
                  e.setState({ loadData: null }, function () {
                    setTimeout(function () {
                      Kaiheila.win.min(), Kaiheila.win.hide();
                    }, 50);
                  });
                }),
                (e.tryRecover = function () {
                  m.a.push("/"), location.reload();
                }),
                (e.state = { isMax: !1, hasError: !1, loadData: null }),
                e
              );
            }
            return (
              Object(r.a)(
                n,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this;
                      d.a.isElectron &&
                        (this.setState({ isMax: Kaiheila.win.isMax() }),
                        Kaiheila.win.on("maximize", function () {
                          console.log("isMax", !0), e.setState({ isMax: !0 });
                        }),
                        Kaiheila.win.on("unmaximize", function () {
                          console.log("isMax", !1), e.setState({ isMax: !1 });
                        }),
                        Kaiheila.ipcRenderer.on("load-data", function (t, n) {
                          console.log("load-data", n),
                            e.setState({
                              loadData: n,
                              isMax: Kaiheila.win.isMax(),
                            });
                        }));
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.isMax,
                        n = e.hasError,
                        i = e.loadData;
                      return n
                        ? c.a.createElement(
                            "div",
                            { className: "kaihei-error-page" },
                            c.a.createElement(
                              "span",
                              {
                                className: "app-kaihei-link",
                                onClick: this.tryRecover,
                              },
                              "\u672a\u77e5\u5f02\u5e38\u70b9\u51fb\u5c1d\u8bd5\u6062\u590d"
                            )
                          )
                        : d.a.isElectron
                        ? c.a.createElement(
                            "div",
                            { className: "win-wapper" },
                            c.a.createElement(
                              "div",
                              {
                                className: "win-title-bar theme-win-title-bar",
                              },
                              c.a.createElement("div", {
                                className: f()("win-title-drag", { ismax: t }),
                              }),
                              c.a.createElement(
                                "span",
                                { className: "win-title" },
                                "\u5f00\u9ed1\u5566"
                              ),
                              "kaiheila.cn",
                              c.a.createElement(
                                "div",
                                { className: "win-controler" },
                                c.a.createElement("div", {
                                  className: "win-button min",
                                  onClick: this.min,
                                }),
                                t
                                  ? c.a.createElement("div", {
                                      className: "win-button restore",
                                      onClick: this.restore,
                                    })
                                  : c.a.createElement("div", {
                                      className: "win-button max",
                                      onClick: this.max,
                                    }),
                                c.a.createElement("div", {
                                  className: "win-button close",
                                  onClick: this.close,
                                })
                              )
                            ),
                            c.a.createElement(
                              "div",
                              { className: "app-picture-viewer-container" },
                              i &&
                                c.a.createElement(v.a, {
                                  urlCdn: i.urlCdn,
                                  list: i.list,
                                  index: i.index,
                                  onClose: this.close,
                                })
                            )
                          )
                        : c.a.createElement(v.a, null);
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromError",
                    value: function () {
                      return { hasError: !0 };
                    },
                  },
                ]
              ),
              n
            );
          })(s.Component));
      u.a.render(
        c.a.createElement(b, null),
        document.getElementById("picture-root")
      );
    },
    74: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = n(15),
        r = n(138),
        a = n.n(r);
      function o() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        e = e.toLowerCase();
        for (
          var t = a()(e, { style: a.a.STYLE_NORMAL }),
            n = [],
            r = 0,
            o = 0,
            s = t.length;
          o < s;
          o++
        ) {
          var c = t[o][0],
            l = e.indexOf(c, r) == r;
          l
            ? ((r += c.length),
              n.push.apply(
                n,
                Object(i.a)(
                  c.split("").map(function (e) {
                    return [e];
                  })
                )
              ))
            : ((r += 1), n.push(t[o]));
        }
        return n;
      }
      function s(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            if (0 !== t.length) {
              var n = e.length;
              1 === n
                ? (t = t.map(function (t) {
                    return t + e[0];
                  }))
                : (function () {
                    for (
                      var i = t.concat(),
                        r = [],
                        a = function (t) {
                          var n = e[t];
                          i.forEach(function (e) {
                            r.push(e + n);
                          });
                        },
                        o = 0;
                      o < n;
                      o++
                    )
                      a(o);
                    t = r;
                  })();
            } else t = t.concat(e);
          }),
          t
        );
      }
      function c(e) {
        for (var t = o(e), n = "", i = "", r = 0, a = t.length; r < a; r++) {
          (n += t[r][0].charAt(0)),
            (i += "".concat("$^").concat(t.slice(r).join("")));
        }
        return { initial: n, full: i };
      }
      function l(e) {
        e.forEach(function (e) {
          e.name && (e.name_pinyin = c(e.name)),
            e.channels &&
              e.channels.forEach(function (e) {
                0 == e.type
                  ? e.channels.forEach(function (e) {
                      e.name_pinyin = c(e.name);
                    })
                  : (e.name_pinyin = c(e.name));
              });
        });
      }
      t.b = {
        separator: "$^",
        convertToPinyin: c,
        getFullRange: function (e, t) {
          for (var n = o(e), i = [], r = 0; r < e.length; r++)
            for (
              var a = e.substring(r), c = s(n.slice(r)), l = 0;
              l < c.length;
              l++
            ) {
              if (0 === c[l].indexOf(t)) {
                i = [r, 0];
                for (var u = !1, d = 0; d < a.length; d++) {
                  for (
                    var m = s(n.slice(r + d, r + d + 1)), _ = 0;
                    _ < m.length;
                    _++
                  ) {
                    var f = m[_];
                    if (0 === t.indexOf(f)) {
                      0 === (t = t.substr(f.length)).length && (u = !0);
                      break;
                    }
                    if (0 === f.indexOf(t)) {
                      u = !0;
                      break;
                    }
                    if (0 === t.length) {
                      u = !0;
                      break;
                    }
                  }
                  if (u) break;
                }
                return (i[1] = d + 1), i;
              }
            }
          return i;
        },
      };
    },
    8: function (e, t, n) {
      "use strict";
      var i = n(108),
        r = n(173),
        a = n(24),
        o = n(34),
        s = n(48),
        c = n(40),
        l = Object(i.b)({ global: a.X, home: c.w, audio: o.n, textMsg: s.o }),
        u = i.c;
      -1 === window.location.href.search(/kaiheila/) &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        (u = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
      var d = Object(i.d)(l, u(Object(i.a)(r.a)));
      t.a = d;
    },
    81: function (e, t, n) {
      "use strict";
      function i(e, t) {
        if ((t || ((t = e), (e = +Date.now())), e >= t)) return "0\u79d2";
        var n = (t - e) / 1e3,
          i = Math.floor((n / 60) % 60),
          r = n % 60,
          a = Math.floor(n / 60 / 60),
          o = a >= 1 ? "".concat(a, "\u5c0f\u65f6") : "",
          s = i >= 1 ? "".concat(i, "\u5206\u949f") : "",
          c = "".concat(Math.floor(r), "\u79d2");
        return "".concat(o).concat(s).concat(c);
      }
      n.d(t, "b", function () {
        return i;
      }),
        (t.a = function (e, t) {
          var n = new Date(e),
            i = {
              "M+": n.getMonth() + 1,
              "D+": n.getDate(),
              "H+": n.getHours(),
              "h+": n.getHours() > 12 ? n.getHours() - 12 : n.getHours(),
              "i+": n.getMinutes(),
              "s+": n.getSeconds(),
              "q+": Math.floor((n.getMonth() + 3) / 3),
              S: n.getMilliseconds(),
            };
          for (var r in (/(Y+)/.test(t) &&
            (t = t.replace(
              RegExp.$1,
              "".concat(n.getFullYear()).substr(4 - RegExp.$1.length)
            )),
          i))
            new RegExp("(".concat(r, ")")).test(t) &&
              (t = t.replace(
                RegExp.$1,
                1 === RegExp.$1.length
                  ? i[r]
                  : "00".concat(i[r]).substr("".concat(i[r]).length)
              ));
          return t;
        });
    },
    82: function (e, t, n) {
      "use strict";
      var i = n(2),
        r = n(3),
        a = "prod",
        o = (function () {
          function e() {
            Object(i.a)(this, e), (this._env = a), (this.middlewares = []);
          }
          return (
            Object(r.a)(e, [
              {
                key: "env",
                get: function () {
                  return this._env;
                },
                set: function (e) {
                  this._env = e;
                  for (var t = 0; t < this.middlewares.length; t++)
                    try {
                      this.middlewares[t](e);
                    } catch (n) {
                      console.log(n);
                    }
                },
              },
              {
                key: "addListener",
                value: function (e) {
                  this.middlewares.push(e);
                },
              },
            ]),
            e
          );
        })();
      t.a = new o();
    },
    83: function (e, t, n) {
      "use strict";
      var i = n(1),
        r = n(2),
        a = n(3),
        o = n(31),
        s = n(37),
        c = n(10),
        l = n(63),
        u = n(26),
        d = {
          theme: "theme-dark",
          autoSwitch: !1,
          lightStart: { hour: 9, minute: 0 },
          darkStart: { hour: 21, minute: 0 },
        },
        m = (function () {
          function e() {
            Object(r.a)(this, e);
          }
          return (
            Object(a.a)(e, null, [
              {
                key: "getSetting",
                value: function () {
                  var e = o.a.getItem(u.m);
                  return s.c.path
                    ? Object(i.a)(
                        Object(i.a)({}, d),
                        s.c.get(s.b.THEME_SETTING_KEY, e)
                      )
                    : Object(i.a)(
                        Object(i.a)({}, d),
                        s.a.get(s.b.THEME_SETTING_KEY, e)
                      );
                },
              },
              {
                key: "saveSetting",
                value: function (t) {
                  var n = e.getSetting();
                  s.a.set(
                    s.b.THEME_SETTING_KEY,
                    Object(i.a)(Object(i.a)({}, n), t)
                  ),
                    s.c.set(
                      s.b.THEME_SETTING_KEY,
                      Object(i.a)(Object(i.a)({}, n), t)
                    ),
                    e.refreshCurrentState();
                },
              },
              {
                key: "refreshCurrentState",
                value: function () {
                  var t = e.getSetting(),
                    n = t.theme,
                    i = t.autoSwitch,
                    r = t.lightStart,
                    a = t.darkStart,
                    o = n;
                  if (i) {
                    var s = new Date(),
                      c = s.getHours(),
                      l = s.getMinutes();
                    o = "theme-dark";
                    var u =
                        a.hour > r.hour || (a.hour == r.hour && a.minute > r),
                      d = c > r.hour || (c == r.hour && l >= r.minute),
                      m = c < a.hour || (c == a.hour && l < a.minute);
                    u
                      ? d && m && (o = "theme-light")
                      : (d || m) && (o = "theme-light");
                  }
                  document.body.classList.remove("theme-light"),
                    document.body.classList.remove("theme-dark"),
                    document.body.classList.add(o);
                },
              },
              {
                key: "initThemeStyle",
                value: function () {
                  var t = e.getSetting().theme;
                  this.saveTheme(t, !0);
                },
              },
              {
                key: "saveTheme",
                value: function (t, n) {
                  !0 !== n && e.saveSetting({ theme: t }),
                    this.refreshCurrentState();
                },
              },
              {
                key: "getTheme",
                value: function () {
                  return e.getSetting().theme;
                },
              },
              {
                key: "showThemeSelector",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    c.b
                      .create({
                        title: "\u6697\u591c\u6a21\u5f0f\u66f4\u65b0",
                        message:
                          "\u201c\u4e07\u7269\u7686\u865a\uff0c\u4e07\u4e8b\u7686\u5141\uff0c\u884c\u4e8e\u6697\u591c\uff0c\u4f8d\u5949\u5149\u660e\u3002\u201d",
                        cancelButtonType: "",
                        confirmButtonType: "appprimary",
                        confirmButtonText:
                          "\u4fdd\u7559\u6697\u591c\u6a21\u5f0f",
                        cancelButtonText:
                          "\u9000\u56de\u660e\u4eae\u6a21\u5f0f",
                      })
                      .then(function () {
                        t(d.theme);
                      })
                      .catch(function () {
                        e.saveTheme("theme-light"), n("theme-light");
                      });
                  });
                },
              },
              {
                key: "toggleCurrentTheme",
                value: function () {
                  var t = {
                    autoSwitch: !1,
                    darkStart: { hour: 21, minute: 0 },
                    lightStart: { hour: 9, minute: 0 },
                    theme:
                      "theme-dark" === e.getTheme()
                        ? "theme-light"
                        : "theme-dark",
                  };
                  e.saveSetting(t);
                },
              },
            ]),
            e
          );
        })();
      l.b.addTask(
        "autoCheckTheme",
        { interval: (1 / 36e5) * 1e3 * 60 },
        m.refreshCurrentState
      ),
        (t.a = m);
    },
    84: function (e, t, n) {
      "use strict";
      var i = n(4),
        r = n(5),
        a = n(3),
        o = n(2),
        s = n(0),
        c = n.n(s),
        l = n(17),
        u = n.n(l),
        d = n(9),
        m = n.n(d),
        _ = n(7),
        f = n(20),
        v = (function (e) {
          Object(i.a)(n, e);
          var t = Object(r.a)(n);
          function n(e) {
            var i;
            return (
              Object(o.a)(this, n),
              ((i = t.call(this, e)).loadRef = function (e) {
                (i.refBox = e), i.props.loadRef && i.props.loadRef(e);
              }),
              (i.onMouseOver = function (e) {
                i.refBox == e.target && i.setState({ displayCloseTip: !0 });
              }),
              (i.onMouseOut = function (e) {
                i.refBox == e.target && i.setState({ displayCloseTip: !1 });
              }),
              (i.onClose = function (e) {
                i.refBox == e.target && i.props.onClose && i.props.onClose();
              }),
              (i.state = { displayCloseTip: !1 }),
              i
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.state.displayCloseTip,
                    t = this.props,
                    n = t.className,
                    i = t.children;
                  return c.a.createElement(
                    "div",
                    {
                      className: n,
                      ref: this.loadRef,
                      onClick: this.onClose,
                      onMouseOut: this.onMouseOut,
                      onMouseOver: this.onMouseOver,
                    },
                    i,
                    e &&
                      c.a.createElement(
                        "div",
                        { className: "blank-area-close-tip" },
                        "\u70b9\u51fb\u7a7a\u767d\u533a\u57df\u5173\u95ed"
                      )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        b = n(14),
        h = [
          0.1, 0.12, 0.14, 0.17, 0.2, 0.24, 0.29, 0.35, 0.42, 0.5, 0.6, 0.72,
          0.86, 1, 1.2, 1.44, 1.73, 2.08, 2.5, 3, 3.6, 4.32, 5,
        ];
      function p(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = h.findIndex(function (t) {
            return t === e;
          });
        if (-1 !== n)
          return t ? n++ : n--, h[Math.min(Math.max(n, 0), h.length - 1)];
        if (e < h[0]) return h[0];
        if (e > h[h.length - 1]) return h[h.length - 1];
        for (var i = 0; i < h.length; i++) {
          var r = h[i],
            a = h[i + 1];
          e > r &&
            e < a &&
            (n = t
              ? a - e < 0.05
                ? i + 2
                : i + 1
              : e - r < 0.05
              ? i - 2
              : i - 1);
        }
        return h[Math.min(Math.max(n, 0), h.length - 1)];
      }
      var g = (function (e) {
        Object(i.a)(n, e);
        var t = Object(r.a)(n);
        function n(e) {
          var i;
          return (
            Object(o.a)(this, n),
            ((i = t.call(this, e)).onresize = function () {
              var e = i.state,
                t = e.scale;
              e.isAutoScale ? i.auto() : i.zoom({ scale: t });
            }),
            (i.onImageLoad = function (e) {
              var t = e.target;
              (n.imgStore[t.src] = t),
                i.setState(
                  {
                    loading: !1,
                    originSize: {
                      width: t.naturalWidth,
                      height: t.naturalHeight,
                    },
                  },
                  function () {
                    i.auto(!1);
                  }
                );
            }),
            (i.initPicture = function (e) {
              var t = null,
                r = { width: 100, height: 100 };
              (function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "https://img.chuanyuapp.com";
                return e.startsWith(t);
              })(e, i.props.urlCdn) &&
                ((r = Object(b.J)(e)), (t = "".concat(e, "/ld"))),
                i.setState(
                  {
                    loading: !0,
                    position: { top: 0, left: 0 },
                    scale: 1,
                    ldSrc: t,
                    originSize: r,
                  },
                  function () {
                    i.auto(!1);
                  }
                );
              var a = n.imgStore[e];
              if (a)
                i.setState(
                  {
                    loading: !1,
                    originSize: {
                      width: a.naturalWidth,
                      height: a.naturalHeight,
                    },
                  },
                  function () {
                    i.auto(!1);
                  }
                );
              else {
                var o = new Image();
                (o.src = e), (o.onload = i.onImageLoad);
              }
            }),
            (i.getAutoScale = function () {
              var e = i.refBox;
              if (e) {
                var t = e.clientHeight,
                  n = e.clientWidth,
                  r = i.state.originSize,
                  a = r.width,
                  o = r.height,
                  s = 1,
                  c = 1;
                return (
                  n < a && (s = (n - 80) / a),
                  t < o && (c = (t - 80) / o),
                  Math.min(s, c)
                );
              }
            }),
            (i.auto = function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              i.setState({ isAutoScale: !0 }),
                i.zoom({ scale: i.getAutoScale() }, e);
            }),
            (i.restore = function () {
              i.setState({ isAutoScale: !1 }), i.zoom({ scale: 1 });
            }),
            (i.zoom = function (e) {
              var t = e.scale,
                n = e.origin,
                r = void 0 === n ? { x: 0.5, y: 0.5 } : n,
                a =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                o = i.refBox;
              if (o) {
                var s = o.clientHeight,
                  c = o.clientWidth,
                  l = i.state,
                  u = l.originSize,
                  d = l.scale,
                  m = l.position,
                  _ = t - d,
                  f = u.width * _ * r.x,
                  v = u.height * _ * r.y,
                  b = m.top,
                  h = m.left,
                  p = u.width * t,
                  g = u.height * t,
                  y = !1;
                c > p ? (h = (c - p) / 2) : ((y = !0), (h -= f)),
                  s > g ? (b = (s - g) / 2) : ((y = !0), (b -= v)),
                  i.setState({
                    moveable: y,
                    position: i.bound({ top: b, left: h }, t),
                    scale: t,
                    displayScaleTip: a,
                  });
                var w = i.props.onScaleChange;
                w && w(t),
                  clearTimeout(i.timerHideScaleTip),
                  (i.timerHideScaleTip = setTimeout(function () {
                    i.setState({ displayScaleTip: !1 });
                  }, 1e3));
              }
            }),
            (i.mouseDownMove = function (e) {
              var t = i.state,
                n = t.moveable,
                r = t.scale;
              if (n) {
                var a = e.pageX - i.starPos.x,
                  o = e.pageY - i.starPos.y;
                i.setState({ position: i.bound({ top: o, left: a }, r) });
              }
            }),
            (i.bound = function (e, t) {
              var n = e.top,
                r = e.left,
                a = i.state.originSize,
                o = i.refBox,
                s = o.clientHeight,
                c = o.clientWidth,
                l = a.width * t,
                u = a.height * t;
              return (
                (r = c > l ? (c - l) / 2 : Math.max(Math.min(r, 0), c - l)),
                {
                  top: (n =
                    s > u
                      ? (s - u) / 2
                      : Math.max(Math.min(n, 0), s - a.height * t)),
                  left: r,
                }
              );
            }),
            (i.onMouseDown = function (e) {
              (i.starPos = {
                x: e.pageX - i.state.position.left,
                y: e.pageY - i.state.position.top,
              }),
                document.addEventListener("mousemove", i.mouseDownMove),
                document.addEventListener("mouseleave", i.mouseleave),
                document.addEventListener("mouseup", i.onMouseUp);
            }),
            (i.mouseleave = function () {
              document.removeEventListener("mousemove", i.mouseDownMove);
            }),
            (i.onMouseUp = function () {
              document.removeEventListener("mousemove", i.mouseDownMove),
                document.removeEventListener("mouseleave", i.mouseleave),
                document.removeEventListener("mouseup", i.onMouseUp);
            }),
            (i.onWheel = function (e) {
              var t = e.pageX,
                n = e.pageY,
                r = i.state,
                a = r.position,
                o = r.scale,
                s = r.originSize,
                c = s.width * o,
                l = s.height * o,
                u = {
                  x: a.left > 0 ? 0.5 : (t - a.left) / c,
                  y: a.top > 0 ? 0.5 : (n - a.top) / l,
                };
              e.deltaY < 0 ? i.magnify(u) : i.reduce(u);
            }),
            (i.getDefaultOrigin = function () {
              var e = i.refBox;
              if (!e) return { x: 0.5, y: 0.5 };
              var t = e.clientHeight,
                n = e.clientWidth,
                r = i.state,
                a = r.position,
                o = r.originSize,
                s = r.scale,
                c = o.width * s,
                l = o.height * s;
              return {
                x: a.left > 0 ? 0.5 : (n / 2 - a.left) / c,
                y: a.top > 0 ? 0.5 : (t / 2 - a.top) / l,
              };
            }),
            (i.magnify = function (e) {
              e || (e = i.getDefaultOrigin()),
                i.setState({ isAutoScale: !1 }),
                i.zoom({ scale: p(i.state.scale), origin: e });
            }),
            (i.reduce = function (e) {
              e || (e = i.getDefaultOrigin()),
                i.setState({ isAutoScale: !1 }),
                i.zoom({ scale: p(i.state.scale, !1), origin: e });
            }),
            (i.onDoubleClick = function () {
              var e = i.state.scale;
              e < i.getAutoScale() || 1 == e ? i.auto() : i.restore();
            }),
            (i.state = {
              loading: !0,
              ldSrc: null,
              position: { top: 0, left: 0 },
              scale: 1,
              isAutoScale: !1,
              moveable: !1,
              originSize: { width: 100, height: 100 },
              displayScaleTip: !1,
              displayCloseTip: !1,
            }),
            i
          );
        }
        return (
          Object(a.a)(n, [
            {
              key: "componentDidMount",
              value: function () {
                console.log("[urlCdn]", this.props.urlCdn),
                  this.initPicture(this.props.src),
                  window.addEventListener("resize", this.onresize),
                  document.body.addEventListener("wheel", this.onWheel);
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (e) {
                e.src !== this.props.src && this.initPicture(e.src);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.timerHideScaleTip),
                  window.removeEventListener("resize", this.onresize),
                  document.body.removeEventListener("wheel", this.onWheel);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.src,
                  n = this.state,
                  i = n.ldSrc,
                  r = n.position,
                  a = n.scale,
                  o = n.originSize,
                  s = n.loading,
                  l = n.moveable,
                  u = n.displayScaleTip,
                  d =
                    (n.displayCloseTip,
                    {
                      marginTop: r.top,
                      marginLeft: r.left,
                      width: o.width * a,
                      height: o.height * a,
                    });
                return c.a.createElement(
                  v,
                  {
                    className: "picture-container",
                    loadRef: function (t) {
                      return (e.refBox = t);
                    },
                    onClose: this.props.onClose,
                  },
                  s
                    ? c.a.createElement(
                        "div",
                        { className: "picture-loading" },
                        i &&
                          c.a.createElement("img", {
                            src: i,
                            style: { width: d.width, height: d.height },
                            alt: "\u7f29\u7565\u56fe",
                          }),
                        c.a.createElement(_.LoadingSpin.Image, {
                          className: "loading-pic-spin",
                        })
                      )
                    : c.a.createElement("img", {
                        draggable: !1,
                        className: m()({ grab: l }),
                        style: d,
                        src: t,
                        alt: "\u539f\u56fe",
                        onDragStart: function (e) {
                          e.preventDefault();
                        },
                        onMouseDown: this.onMouseDown,
                        onDoubleClick: this.onDoubleClick,
                      }),
                  u &&
                    c.a.createElement(
                      "div",
                      {
                        className: "zoom-scale-tip",
                        onClick: function (e) {
                          return e.stopPropagation();
                        },
                        onDoubleClick: this.onDoubleClick,
                      },
                      "".concat(Math.round(100 * a), "%")
                    )
                );
              },
            },
          ]),
          n
        );
      })(c.a.PureComponent);
      g.imgStore = {};
      var y = n(113),
        w = (n(195), n(45)),
        k = (function (e) {
          Object(i.a)(n, e);
          var t = Object(r.a)(n);
          function n(e) {
            var i;
            return (
              Object(o.a)(this, n),
              ((i = t.call(this, e)).volumeChange = function (e) {
                var t = e.target.volume;
                w.a.setAppConfig("video_volume", parseInt(100 * t) / 100);
              }),
              (i.loadVideo = function (e) {
                if (e) {
                  var t = w.a.getAppConfig("video_volume");
                  (e.volume = void 0 == t ? 1 : t),
                    e.addEventListener("enterpictureinpicture", i.onEnterPip);
                }
              }),
              (i.onEnterPip = function () {
                i.props.onClose();
              }),
              (i.state = { displayCloseTip: !1 }),
              (i.refBox = c.a.createRef()),
              i
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.autoPlay,
                    n = void 0 === t || t,
                    i = e.poster,
                    r = e.src;
                  this.state.displayCloseTip;
                  return c.a.createElement(
                    v,
                    {
                      className: "video-container",
                      onClose: this.props.onClose,
                    },
                    c.a.createElement("video", {
                      controls: !0,
                      ref: this.loadVideo,
                      onVolumeChange: this.volumeChange,
                      autoPlay: n,
                      poster: i,
                      src: r,
                      width: f.c ? "100%" : 500,
                      height: f.c ? "100%" : 500,
                      disablePictureInPicture: f.c,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        O = (function (e) {
          Object(i.a)(n, e);
          var t = Object(r.a)(n);
          function n() {
            return Object(o.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.item;
                  return c.a.createElement(
                    v,
                    {
                      className: "bilibili-contain",
                      onClose: this.props.onClose,
                    },
                    c.a.createElement(
                      "div",
                      { className: m()("bilibili-wrap", { full: f.c }) },
                      e.iframe_path
                        ? c.a.createElement("iframe", {
                            allowFullScreen: !0,
                            src: e.iframe_path,
                          })
                        : c.a.createElement("iframe", {
                            allowFullScreen: !0,
                            src: "//player.bilibili.com/player.html?aid=".concat(
                              e.av_no,
                              "&as_wide=1"
                            ),
                          })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        j = n(8);
      n.d(t, "a", function () {
        return I;
      });
      var C = "picture-viewer",
        E = [960, 680],
        S = [515, 388],
        I = (function (e) {
          Object(i.a)(n, e);
          var t = Object(r.a)(n);
          function n(e) {
            var i;
            Object(o.a)(this, n),
              ((i = t.call(this, e)).oncurrentchange = function (e) {
                var t, n, r;
                if (f.c) {
                  var a = i.state,
                    o = a.list[a.index];
                  if (e !== o.type)
                    switch (o.type) {
                      case "image":
                        Kaiheila.win.setTitle(
                          "\u5f00\u9ed1\u5566-\u56fe\u7247\u67e5\u770b\u5668"
                        ),
                          (t = Kaiheila.win).setSizeOrigin.apply(t, E),
                          Kaiheila.win.restorePosition(C);
                        break;
                      case "video":
                        Kaiheila.win.setTitle(
                          "\u5f00\u9ed1\u5566-\u89c6\u9891\u64ad\u653e\u5668"
                        ),
                          (n = Kaiheila.win).setSizeOrigin.apply(n, E),
                          Kaiheila.win.restorePosition(C);
                        break;
                      case "bilibili":
                        Kaiheila.win.setTitle(
                          "\u5f00\u9ed1\u5566-\u89c6\u9891\u64ad\u653e\u5668"
                        ),
                          (r = Kaiheila.win).setSizeOrigin.apply(r, S),
                          Kaiheila.win.restorePosition(C);
                    }
                }
              }),
              (i.onmousemove = function (e) {
                var t = e.pageX,
                  n = e.pageY;
                e.target;
                i._startPos || (i._startPos = { pageX: t, pageY: n }),
                  Math.sqrt(
                    Math.pow(n - i._startPos.pageY, 2) +
                      Math.pow(t - i._startPos.pageX, 2)
                  ) > 10 &&
                    (i.setState({ displayLR: !1, displayTB: !1 }),
                    document.removeEventListener("mousemove", i.onmousemove));
              }),
              (i.keyEvent = function (e) {
                if (27 !== e.keyCode || i.state.displaySubmenu)
                  switch (e.keyCode) {
                    case 37:
                      i.previous();
                      break;
                    case 39:
                      i.next();
                      break;
                    case 38:
                      i.zoomAdd();
                      break;
                    case 40:
                      i.zoomReduce();
                  }
                else i.onClose();
              }),
              (i.previous = function () {
                var e = i.state,
                  t = e.index,
                  n = e.list;
                if (t > 0) {
                  var r = n[t].type;
                  t--,
                    i.setState({ index: t }, function () {
                      i.oncurrentchange(r);
                    });
                }
              }),
              (i.next = function () {
                var e = i.state,
                  t = e.index,
                  n = e.list;
                if (t < n.length - 1) {
                  var r = n[t].type;
                  t++,
                    i.setState({ index: t }, function () {
                      i.oncurrentchange(r);
                    });
                }
              }),
              (i.onClose = function () {
                var e = i.props.onClose;
                e && e();
              }),
              (i.showTopBottom = function () {
                i.setState({ displayTB: !0 });
              }),
              (i.hideTopBottom = function () {
                i.setState({ displayTB: !1 }), i.hideSubmenu();
              }),
              (i.showLeftRight = function () {
                i.setState({ displayLR: !0 });
              }),
              (i.hideLeftRight = function () {
                i.setState({ displayLR: !1 });
              }),
              (i.zoomOrigin = function () {
                i.state.autoOrOriginDisabled ||
                  (i.refPic.current.restore(),
                  i.setState({ autoOrOrigin: !1 }));
              }),
              (i.zoomAuto = function () {
                i.state.autoOrOriginDisabled ||
                  (i.refPic.current.auto(), i.setState({ autoOrOrigin: !0 }));
              }),
              (i.zoomAdd = function () {
                i.refPic.current.magnify();
              }),
              (i.zoomReduce = function () {
                i.refPic.current.reduce();
              }),
              (i.onScaleChange = function (e) {
                var t = i.refPic.current,
                  n = t.getAutoScale(),
                  r = !1;
                t && 1 === e && 1 == n && (r = !0);
                var a = i.state;
                1 == e && (a = !1),
                  n == e && (a = !0),
                  i.setState({ autoOrOriginDisabled: r, autoOrOrigin: a });
              }),
              (i.download = function () {
                var e = i.state,
                  t = e.index,
                  n = e.list[t],
                  r = n.src,
                  a = n.fileName;
                r &&
                  Object(y.a)({
                    src: r,
                    fileName: a,
                    onComplete: function () {
                      i.setState({ displayDownloadfileSuccess: !0 }),
                        setTimeout(function () {
                          i.setState({ displayDownloadfileSuccess: !1 });
                        }, 2e3);
                    },
                    onError: function () {
                      i.setState({ displayDownloadfileFail: !0 }),
                        setTimeout(function () {
                          i.setState({ displayDownloadfileFail: !1 });
                        }, 2e3);
                    },
                  });
              }),
              (i.copySrc = function (e) {
                e.nativeEvent.stopImmediatePropagation();
                var t = i.state,
                  n = t.index;
                !(function (e) {
                  var t = document.createElement("input");
                  document.body.appendChild(t),
                    t.setAttribute("value", e),
                    t.select();
                  var n = document.execCommand("copy");
                  document.body.removeChild(t);
                })(t.list[n].src),
                  i.setState({ displayCopySucess: !0 }),
                  setTimeout(function () {
                    i.setState({ displayCopySucess: !1 }), i.hideSubmenu();
                  }, 500);
              }),
              (i.more = function () {
                i.state.displaySubmenu ||
                  (i.setState({ displaySubmenu: !0 }),
                  document.addEventListener("click", i.hideSubmenu),
                  document.addEventListener("keydown", i.keyhideSubmenu));
              }),
              (i.keyhideSubmenu = function (e) {
                27 == e.keyCode &&
                  (i.setState({ displaySubmenu: !1 }),
                  document.removeEventListener("click", i.hideSubmenu),
                  document.removeEventListener("keydown", i.keyhideSubmenu));
              }),
              (i.hideSubmenu = function () {
                i.setState({ displaySubmenu: !1 }),
                  document.removeEventListener("click", i.hideSubmenu),
                  document.removeEventListener("keydown", i.keyhideSubmenu);
              });
            var r = e.list,
              a = void 0 === r ? [] : r,
              s = e.index,
              l = void 0 === s ? 0 : s;
            return (
              (l = Math.max(0, Math.min(a.length - 1, l))),
              (i.state = {
                list: a,
                displayTB: !0,
                displayLR: !0,
                index: l,
                autoOrOrigin: !0,
                autoOrOriginDisabled: !1,
                displaySubmenu: !1,
                displayCopySucess: !1,
                displayDownloadfileFail: !1,
                displayDownloadfileSuccess: !1,
              }),
              (i.refPic = c.a.createRef()),
              i
            );
          }
          return (
            Object(a.a)(
              n,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    document.addEventListener("keydown", this.keyEvent),
                      document.addEventListener("mousemove", this.onmousemove),
                      this.oncurrentchange();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    var t = this,
                      n = this.props,
                      i = n.list,
                      r = n.index;
                    (e.list == i && e.index == r) ||
                      ((r = Math.max(0, Math.min(i.length - 1, r))),
                      this.setState({ list: i, index: r }, function () {
                        t.oncurrentchange();
                      }));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    document.removeEventListener("keydown", this.keyEvent),
                      document.removeEventListener(
                        "mousemove",
                        this.onmousemove
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.displayLR,
                      n = e.displayTB,
                      i = e.index,
                      r = e.list,
                      a = e.autoOrOrigin,
                      o = e.autoOrOriginDisabled,
                      s = e.displaySubmenu,
                      l = e.displayCopySucess,
                      u = e.displayDownloadfileSuccess,
                      d = e.displayDownloadfileFail,
                      _ = i > 0,
                      v = i < r.length - 1,
                      b = r[i] || {},
                      h = "image" == b.type;
                    return c.a.createElement(
                      "div",
                      { className: "picture-viewer-mask" },
                      h &&
                        c.a.createElement(g, {
                          ref: this.refPic,
                          src: b.src,
                          urlCdn: this.props.urlCdn,
                          onScaleChange: this.onScaleChange,
                          onClose: this.onClose,
                        }),
                      "video" == b.type &&
                        c.a.createElement(k, {
                          src: b.src,
                          poster: b.poster,
                          onClose: this.onClose,
                        }),
                      "bilibili" == b.type &&
                        c.a.createElement(O, {
                          item: b.item,
                          onClose: this.onClose,
                        }),
                      !f.c &&
                        c.a.createElement(
                          "div",
                          {
                            className: m()("viewer-top", {
                              "viewer-visible": n,
                            }),
                            onMouseOver: this.showTopBottom,
                            onMouseLeave: this.hideTopBottom,
                          },
                          c.a.createElement("div", {
                            className:
                              "viewer-button-close iconfont iconpicture-close",
                            onClick: this.onClose,
                          })
                        ),
                      h &&
                        c.a.createElement(
                          "div",
                          {
                            className: m()("viewer-bottom", {
                              "viewer-visible": n,
                            }),
                            onMouseOver: this.showTopBottom,
                            onMouseLeave: this.hideTopBottom,
                          },
                          c.a.createElement(
                            "ul",
                            { className: "viewer-tool-bar" },
                            c.a.createElement("li", {
                              className:
                                "viewer-tool-button iconfont iconpicture-zoom-add",
                              onClick: this.zoomAdd,
                            }),
                            a
                              ? c.a.createElement("li", {
                                  className: m()(
                                    "viewer-tool-button iconfont iconpicture-zoom-origin",
                                    { disabled: o }
                                  ),
                                  onClick: this.zoomOrigin,
                                })
                              : c.a.createElement("li", {
                                  className: m()(
                                    "viewer-tool-button iconfont iconpicture-zoom-auto",
                                    { disabled: o }
                                  ),
                                  onClick: this.zoomAuto,
                                }),
                            c.a.createElement("li", {
                              className:
                                "viewer-tool-button iconfont iconpicture-zoom-reduce",
                              onClick: this.zoomReduce,
                            }),
                            c.a.createElement("li", {
                              className:
                                "viewer-tool-button iconfont iconserver_ic_download",
                              onClick: this.download,
                            }),
                            c.a.createElement("li", {
                              className:
                                "viewer-tool-button iconfont iconTextchat_more",
                              onClick: this.more,
                            }),
                            s &&
                              c.a.createElement(
                                "ul",
                                { className: "viewer-tool-submenu" },
                                c.a.createElement(
                                  "li",
                                  {
                                    className: "viewer-tool-menu-item",
                                    onClick: this.copySrc,
                                  },
                                  l
                                    ? window.ext("user_copysucctip")
                                    : "\u590d\u5236\u56fe\u7247\u94fe\u63a5"
                                )
                              )
                          )
                        ),
                      (_ || v) &&
                        c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            "div",
                            {
                              className: m()("viewer-left", {
                                "viewer-visible": t,
                              }),
                              onMouseOver: this.showLeftRight,
                              onMouseLeave: this.hideLeftRight,
                            },
                            _ &&
                              c.a.createElement("div", {
                                className:
                                  "viewer-button-pre iconfont iconpicture-switch",
                                onClick: this.previous,
                              })
                          ),
                          c.a.createElement(
                            "div",
                            {
                              className: m()("viewer-right", {
                                "viewer-visible": t,
                              }),
                              onMouseOver: this.showLeftRight,
                              onMouseLeave: this.hideLeftRight,
                            },
                            v &&
                              c.a.createElement("div", {
                                className:
                                  "viewer-button-next iconfont iconpicture-switch",
                                onClick: this.next,
                              })
                          )
                        ),
                      u &&
                        c.a.createElement(
                          "div",
                          { className: "download-state-tip" },
                          "\u4e0b\u8f7d\u56fe\u7247\u6210\u529f"
                        ),
                      d &&
                        c.a.createElement(
                          "div",
                          { className: "download-state-tip" },
                          "\u4e0b\u8f7d\u56fe\u7247\u5931\u8d25"
                        )
                    );
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (e) {
                    var t = j.a.getState().global.globalSetting,
                      i = (t = void 0 === t ? {} : t).url_cdn;
                    if (((e.urlCdn = i), f.c))
                      Kaiheila.win.open({
                        id: C,
                        url:
                          location.origin +
                          (3e3 == location.port
                            ? "/picture.html"
                            : "/picture.htm"),
                        width: 960,
                        height: 680,
                        center: !0,
                        frame: !1,
                        reloadUrl: !1,
                        data: { list: e.list, index: e.index, urlCdn: i },
                      });
                    else {
                      var r =
                          e.wrapperElm ||
                          document.querySelector(".app-main-wrapper"),
                        a = document.createElement("div");
                      u.a.render(
                        c.a.createElement(
                          n,
                          Object.assign({}, e, {
                            onClose: function () {
                              u.a.unmountComponentAtNode(a),
                                e.onClose && e.onClose(),
                                a.parentNode.removeChild(a);
                            },
                          })
                        ),
                        a
                      ),
                        r.appendChild(a);
                    }
                  },
                },
              ]
            ),
            n
          );
        })(s.Component);
    },
    87: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var i = n(2),
        r = n(3),
        a = n(4),
        o = n(5),
        s = n(0),
        c = n.n(s),
        l = n(21),
        u = n.n(l),
        d = n(20),
        m = (function (e) {
          Object(a.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            var r;
            return (
              Object(i.a)(this, n),
              ((r = t.call(this, e)).keyEvent = function (e) {
                document.querySelectorAll(".chuanyu-modal-container").length >
                  0 ||
                  document.querySelectorAll(".front-full-esc").length > 0 ||
                  (d.c && null !== document.fullscreenElement) ||
                  (27 === e.keyCode && r.handleCloseModal(e));
              }),
              (r.handleCloseModal = function (e) {
                r.props.onClose && r.props.onClose(e);
              }),
              (r.iconIndex = parseInt(6 * Math.random())),
              r
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  u()(document).on("keydown", this.keyEvent);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  u()(document).off("keydown", this.keyEvent);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = "".concat(-90 * this.iconIndex, "px");
                  return c.a.createElement(
                    "div",
                    {
                      className: "close-btn-container",
                      style: { backgroundPositionY: e },
                    },
                    c.a.createElement("a", {
                      className:
                        "setting-model-close-btn close-btn iconfont iconrole-member-search-close",
                      onClick: this.handleCloseModal,
                    }),
                    c.a.createElement("div", { className: "esc-text" }, "Esc")
                  );
                },
              },
            ]),
            n
          );
        })(s.Component);
    },
    88: function (e, t, n) {
      "use strict";
      t.a = function (e, t) {
        return function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : e,
            i = arguments.length > 1 ? arguments[1] : void 0;
          return t[i.type] ? t[i.type](n, i) : n;
        };
      };
    },
    98: function (e, t, n) {
      "use strict";
      t.a = [
        {
          date: "2022.05.23\u66f4\u65b0\u8bb0\u5f55\uff08v0.0.51.4\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u573a\u666f\u4e0b\u8fde\u63a5\u72b6\u6001\u4e0d\u5bf9\u7684\u95ee\u9898\u3002",
                "\u4fee\u590d\u4e86\u8bd5\u9ea6\u540e\u5360\u7528\u9ea6\u514b\u98ce\u7684\u95ee\u9898\u3002",
                "\u4fee\u590d\u4e86\u8bed\u97f3\u9891\u9053\u4eba\u5458\u663e\u793a\u95ee\u9898\u3002",
              ],
            },
          ],
        },
        {
          date: "2022.05.11\u66f4\u65b0\u8bb0\u5f55\uff08v0.0.51.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u573a\u666f\u4e0b\u7684\u5f02\u5e38\u5e95\u566a\u95ee\u9898\u3002",
                "\u4fee\u590d\u4e86\u4f7f\u7528QQ\u97f3\u4e50\u3001\u7f51\u6613\u4e91\u97f3\u4e50\u65f6\u7684\u4e00\u4e9b\u95ee\u9898\u3002",
                "\u4fee\u590d\u4e86\u4e00\u4e9b\u6587\u6848\u4e0a\u7684\u9519\u8bef\u3002",
                "\u4fee\u590d\u4e86\u90e8\u5206\u60c5\u51b5\u4e0b\u9ea6\u514b\u98ce\u97f3\u91cf\u53ef\u80fd\u88ab\u610f\u5916\u81ea\u52a8\u8c03\u6574\u7684\u95ee\u9898\u3002",
                "\u4fee\u590d\u4e86\u4e00\u90e8\u5206\u5d29\u6e83\u95ee\u9898\u3002",
              ],
            },
          ],
        },
        {
          date: "2022.04.30\u66f4\u65b0\u8bb0\u5f55\uff08v0.0.51.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: ["\u4fee\u590d\u4e86\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898"],
            },
          ],
        },
        {
          date: "2022.04.30\u66f4\u65b0\u8bb0\u5f55\uff08v0.0.51.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u4e00\u4e9b\u4f34\u594f\u95ee\u9898",
                "\u4fee\u590d\u4e86\u4e00\u4e9b\u5bcc\u6587\u672c\u7f16\u8f91\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5176\u4ed6\u5df2\u77e5\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2022.04.29\u66f4\u65b0\u8bb0\u5f55\uff08v0.0.51.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316",
              list: [
                "\u6d88\u606f\u76d2\u5b50\u5c55\u73b0\u4ea4\u4e92\u4f18\u5316\u3002",
                "\u89e3\u51b3\u7f51\u6613\u4e91\u97f3\u4e50\u4f34\u594f\u83b7\u53d6\u51fa\u95ee\u9898\u7684\u60c5\u51b5\u3002",
                "\u65b0\u7248\u672c\u5347\u7ea7\u63d0\u793a\u7684\u4f18\u5316\u3002",
                "\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u7684\u4f18\u5316\u3002",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: ["\u4fee\u590d\u4e00\u4e9b\u5df2\u77e5BUG"],
            },
          ],
        },
        {
          date: "2022.04.24\u66f4\u65b0\u8bb0\u5f55\uff08v0.0.50.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u6d88\u606f\u5217\u8868\u6ca1\u6eda\u52a8\u5230\u6700\u5e95\u90e8\u95ee\u9898",
                "\u4fee\u590d\u5176\u4ed6\u7a33\u5b9a\u6027\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2022.04.22\u66f4\u65b0\u8bb0\u5f55\uff08v0.0.50.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: ["\u4fee\u590d\u90e8\u5206\u5df2\u77e5\u95ee\u9898"],
            },
          ],
        },
        {
          date: "2022.4.18 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.50.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e",
              list: [
                "Markdown\u529f\u80fd\u652f\u6301\uff1a\u73b0\u5728\u53ef\u4ee5\u7f16\u8f91\u5bcc\u6587\u672c\uff08Markdown\uff09\u6d88\u606f\u4e86\uff0c\u5feb\u53bb\u8bd5\u8bd5\u5427",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316",
              list: [
                "\u4f18\u5316\u4e86\u9632\u8bc8\u9a97\u63d0\u793a\u7b56\u7565",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: ["\u4fee\u590d\u90e8\u5206\u5df2\u77e5\u95ee\u9898"],
            },
          ],
        },
        {
          date: "2022.3.30 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.49.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u9891\u9053\u65b0\u6d88\u606f\u9884\u89c8\uff1a\u4f60\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u9891\u9053\u5217\u8868\u9605\u8bfb\u5230\u4f60\u7684\u6700\u65b0\u4e00\u6761\u6d88\u606f\u3002",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u5bf9\u5d29\u6e83\u754c\u540e\u7684\u754c\u9762\u53cd\u9988\u6d41\u7a0b\u8fdb\u884c\u4e86\u4f18\u5316",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: ["\u4fee\u590d\u90e8\u5206\u5df2\u77e5\u95ee\u9898"],
            },
          ],
        },
        {
          date: "2022.3.22 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.48.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: ["\u4fee\u590d\u90e8\u5206\u5df2\u77e5\u95ee\u9898"],
            },
          ],
        },
        {
          date: "2022.3.14 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.48.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u6d88\u606f\u76d2\u5b50\u7684\u663e\u793a\u548c\u5b9a\u4f4d\u95ee\u9898\u3002",
                "\u4fee\u590d\u4e86\u4e00\u4e9b\u7a33\u5b9a\u6027\u95ee\u9898\u3002",
              ],
            },
          ],
        },
        {
          date: "2022.3.11 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.48.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u6d88\u606f\u76d2\u5b50\u529f\u80fd\uff1a\u6d88\u606f\u76d2\u5b50\u4f1a\u6c47\u603b\u6240\u6709\u65b0\u7684\u672a\u8bfb\u6d88\u606f\uff0c\u5e76\u901a\u8fc7\u56fe\u6807\u95ea\u70c1\u63d0\u793a\u3002",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u5bf9\u684c\u9762\u7aef\u5728\u7ebf\u65f6\uff0c\u624b\u673a\u6d88\u606f\u4e0d\u901a\u77e5\u8fd9\u4e00\u529f\u80fd\u63d0\u4f9b\u4e86\u66f4\u7075\u6d3b\u7684\u9009\u9879\u3002",
                "\u5bf9\u8df3\u8f6c\u56de\u590d\u7684\u6837\u5f0f\u8fdb\u884c\u4e86\u4f18\u5316",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u70b9\u51fb\u670d\u52a1\u5668\u56fe\u6807\u5076\u5c14\u6ca1\u53cd\u5e94\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2022.2.25 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.47.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u56fe\u7247\u4e0a\u4f20\u5931\u8d25\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2022.2.23 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.47.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u670d\u52a1\u5668\u6587\u4ef6\u5939",
                "\u9891\u9053\u5bc6\u7801",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u6d88\u606f\u8df3\u8f6c\u81f3\u5bf9\u5e94\u4f4d\u7f6e",
                "\u65b0\u52a0\u5165\u670d\u52a1\u5668\u7684\u8868\u60c5\u81ea\u52a8\u8fdb\u5165\u6211\u7684\u8868\u60c5",
                "\u8bed\u97f3\u9891\u9053\u53d1\u8a00\u6743\u9650\u4fee\u6539\u540e\u7acb\u5373\u751f\u6548",
                "\u8bd5\u9ea6\u4f18\u5316",
                "\u4f34\u594f\u4f18\u5316",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: ["\u4fee\u590d\u90e8\u5206\u5df2\u77e5bug"],
            },
          ],
        },
        {
          date: "2022.1.28 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.46.0\uff09",
          updateContent: [
            {
              title: "\u65b0\u589e\u6d3b\u52a8\uff1a",
              list: [
                "2022\u5e741\u670831\u65e5\u5f00\u542f\u6625\u8282\u6d3b\u52a8<br>\u203b\u7b7e\u5230\u5373\u53ef\u9886\u597d\u793c\uff0c\u66f4\u6709\u673a\u4f1a\u62bd\u5927\u5956\u203b",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u622a\u56fe\u5feb\u6377\u952e\u8bbe\u7f6e\u9ed8\u8ba4\u4e3a\u7a7a",
                "\u5168\u5c4f\u622a\u56fe\u4f18\u5316",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u90e8\u5206\u60c5\u51b5\u4f34\u594f\u6742\u97f3\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2022.1.20 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.45.0\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u901a\u77e5\u8df3\u8f6c\u4f4d\u7f6e\u9519\u8bef\u95ee\u9898",
                "\u4fee\u590d\u4e86\u90e8\u5206\u4f7f\u7528\u4e2d\u5d29\u6e83\u7684\u60c5\u51b5",
                "\u4fee\u590d\u90e8\u5206\u8bbe\u5907\u8bed\u97f3\u4e2d\u7a81\u7136\u6ca1\u58f0\u97f3\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2022.1.11 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.44.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u6539\u6587\u4ef6\u6743\u9650\u5bfc\u81f4\u7684\u7b2c\u4e8c\u6b21\u542f\u52a8\u914d\u7f6e\u4e22\u5931",
              ],
            },
          ],
        },
        {
          date: "2022.1.7 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.44.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4f34\u594f\u90e8\u5206\u60c5\u51b5\u4e0b\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528",
                "\u56fe\u7247\u538b\u7f29\u5bfc\u81f4gif\u65e0\u6cd5\u6b63\u5e38\u53d1\u9001",
                "\u7f3a\u5931\u56fe\u7247\u76ee\u5f55\u6216\u76ee\u5f55\u65e0\u6743\u9650\u5bfc\u81f4\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8",
              ],
            },
          ],
        },
        {
          date: "2022.1.4 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.44.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u8bed\u97f3\u9891\u9053\u4e3b\u6301\u4eba\u6a21\u5f0f",
                "\u622a\u56fe\u529f\u80fd",
                "\u5927\u5c3a\u5bf8\u56fe\u7247\u538b\u7f29",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8d26\u53f7\u8bbe\u7f6e\u672a\u4fdd\u5b58\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8bed\u97f3\u8fde\u63a5\u65ad\u5f00\u540e\u65e0\u6cd5\u91cd\u8fde\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6ca1\u6709\u9ea6\u514b\u98ce\u65e0\u6cd5\u64ad\u653e\u4f34\u594f\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.12.23 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.43.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: ["\u4fee\u590d\u4e86\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898"],
            },
          ],
        },
        {
          date: "2021.12.13 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.43.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: ["\u5207\u6362\u670d\u52a1\u5668\u5076\u5c14\u5d29\u6e83"],
            },
          ],
        },
        {
          date: "2021.12.13 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.43.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: ["\u4f18\u5316\u8f93\u5165\u9762\u677f\u7ed3\u6784"],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u56fe\u7247\u65e0\u6cd5\u67e5\u770b\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.12.10 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.43.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u4f34\u594f\u3001\u97f3\u9891\u3001\u63d0\u793a\u97f3\u97f3\u91cf\u8c03\u8282\u529f\u80fd",
                "\u4f34\u594f\u65b0\u589e\u652f\u6301\u591a\u79cd\u8f93\u51fa\u6a21\u5f0f",
                "\u590d\u5236\u6d88\u606f\u529f\u80fd",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u8bed\u97f3\u8be6\u60c5\u9875\u8df3\u8f6c\u903b\u8f91\u4f18\u5316",
                "\u6d88\u606f\u53d1\u9001\u680f\u6837\u5f0f\u4f18\u5316",
                "\u8868\u60c5\u9762\u677f\u6837\u5f0f\u4f18\u5316",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5361\u7247\u6d88\u606f\u7684\u65f6\u95f4\u663e\u793a\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.11.30 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.42.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: ["\u4fee\u590d\u4e86\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898"],
            },
          ],
        },
        {
          date: "2021.11.25 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.42.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u90e8\u5206\u673a\u578b\u8bbe\u7f6e\u97f3\u91cf\u5bfc\u81f4\u7684\u56de\u97f3\u95ee\u9898",
                "\u4fee\u590d\u9080\u8bf7\u5361\u7247\u65e0\u6cd5\u5220\u9664\u7684\u95ee\u9898",
                "\u4fee\u590d\u8bed\u97f3\u623f\u95f4\u7528\u6237\u5e03\u6ee1\u5c4f\u5e55\u65f6\u7684\u663e\u793a\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.11.22 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.42.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u901a\u77e5\u8fc7\u6ee4\u5f00\u5173",
                "\u65b0\u589e\u670d\u52a1\u5668\u521b\u5efa\u6a21\u677f",
                "\u65b0\u589e\u9690\u85cf\u514d\u6253\u6270\u9891\u9053\u529f\u80fd",
                "\u65b0\u589e\u8bed\u97f3\u8be6\u60c5\u9875",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: ["\u8bed\u97f3\u6027\u80fd\u4f18\u5316"],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e2a\u4eba\u5361\u7247\u5361\u987f\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.10.28 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.41.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: ["\u7528\u6237\u5361\u7247 Loading"],
            },
          ],
        },
        {
          date: "2021.10.26 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.41.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u4e2a\u4eba\u6a2a\u5e45",
                "\u65b0\u589e\u5206\u7ec4\u3001\u9891\u9053\u6807\u8bc6\u4e3a\u5df2\u8bfb\u529f\u80fd",
                "\u65b0\u589e\u8d26\u5355\u95ee\u9898\u63d0\u4ea4\u5de5\u5355\u5165\u53e3",
                "\u65b0\u589e\u8bed\u97f3\u9891\u9053\u8d85\u8fc730\u4eba\u540e\u6298\u53e0\u529f\u80fd",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e2a\u4eba\u5361\u7247\u6837\u5f0f",
                "\u4f18\u5316\u63d0\u4ea4\u5de5\u5355\u56fe\u7247\u9884\u89c8\u529f\u80fd",
                "\u4f18\u5316\u8bd5\u9ea6\u6d41\u7a0b",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5361\u7247\u6d88\u606f\u4e2d\u90e8\u5206\u56fe\u7247\u53d8\u5f62\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.09.29 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.40.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u5220\u9664\u5361\u7247\u6d88\u606f\u65f6\u7684\u6837\u5f0f\u95ee\u9898",
                "\u4fee\u590d\u7b2c\u4e09\u65b9\u65e0\u6cd5\u767b\u5f55\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.09.24 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.40.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u7533\u8bf7\u63a8\u8350\u670d\u52a1\u5668\u65f6\u65b0\u589e\u6807\u7b7e\u63d0\u4ea4\u5165\u53e3",
                "\u65b0\u589e\u63a8\u8350\u670d\u52a1\u5668\u4fee\u6539\u4fe1\u606f\u5ba1\u6838",
                "\u65b0\u589e\u5feb\u901f\u8df3\u8f6c\u63d0\u53ca\u81ea\u5df1\u7684\u9891\u9053",
                "\u65b0\u589e\u514d\u6253\u6270\u8bbe\u7f6e\u5728\u670d\u52a1\u5668 Tooltip \u4e2d\u663e\u793a",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4fee\u6539\u670d\u52a1\u5668\u4fe1\u606f\u6d41\u7a0b",
                "\u4f18\u5316\u9080\u8bf7\u5361\u7247\u6837\u5f0f",
                "\u4f18\u5316\u5361\u7247\u6d88\u606f\u5355\u56fe\u6837\u5f0f",
                "\u7528\u6237\u5361\u7247\u8eab\u4efd\u7279\u5f81\u5916\u663e",
                "\u6837\u5f0f\u4e0a\u7684\u4e00\u4e9b\u8c03\u6574",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u5de6\u4fa7\u79c1\u804a\u5217\u8868\u7528\u6237\u540d\u5e38\u9a7b\u95ee\u9898",
                "\u4fee\u590d\u5c0f\u7a97\u53e3\u65f6\u51fa\u73b0\u7684\u7a97\u53e3\u6296\u52a8\u95ee\u9898",
                "\u4fee\u590d\u670d\u52a1\u5668\u52a9\u529b\u72b6\u6001\u4e2d\u670d\u52a1\u5668\u7b49\u7ea7\u63d0\u793a\u9519\u8bef",
              ],
            },
          ],
        },
        {
          date: "2021.09.10 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.39.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u597d\u53cb\u5217\u8868\u6837\u5f0f\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.09.08 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.39.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e",
              list: [
                "\u65b0\u589e\u8bd5\u9ea6\u529f\u80fd",
                "\u65b0\u589e\u53f3\u952e\u9080\u8bf7\u81f3\u670d\u52a1\u5668",
                "\u65b0\u589e\u79c1\u4fe1\u5728\u7ebf\u79bb\u7ebf\u72b6\u6001",
                "\u65b0\u589e\u79c1\u4fe1\u8349\u7a3f\u63d0\u793a",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316",
              list: [
                "\u4f18\u5316\u9080\u8bf7\u94fe\u63a5\u529f\u80fd",
                '\u4f18\u5316\u9875\u9762\u8df3\u8f6c\u56de"\u6211\u7684\u4e3b\u9875"\u4fdd\u7559\u4e4b\u524d\u79c1\u4fe1\u9875\u9762',
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u5220\u9664\u5f15\u7528\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u590d\u5236\u94fe\u63a5\u5185\u5bb9\u4e0d\u5bf9\u7684\u95ee\u9898",
                "\u4fee\u590d\u90e8\u5206\u4f11\u7720\u542f\u52a8\u7070\u5c4f\u95ee\u9898",
                "\u4fee\u590d\u8f93\u5165\u6846\u8f93\u5165\u56de\u8f66\u5149\u6807\u9519\u4f4d\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.08.23 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.38.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u56de\u590d\u56fe\u7247\u6d88\u606f\u63d0\u793a\u6d88\u606f\u8fc7\u5927\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u65b0\u5efa\u5206\u7ec4\u540e\u67d0\u4e9b\u60c5\u51b5\u4e0d\u663e\u793a\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.08.19 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.38.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e",
              list: [
                "\u65b0\u589e\u670d\u52a1\u5668\u52a9\u529b\u7b49\u7ea7\u8be6\u60c5\u67e5\u770b\u9875\u9762",
                "\u5f00\u53d1\u8005\u5e73\u53f0\u65b0\u589eOAuth2\u8bbe\u7f6e",
                "\u65b0\u589e\u5f00\u53d1\u8005\u6a21\u5f0f",
                "\u65b0\u589e\u8bed\u97f3\u7ebf\u8def\u62e5\u6324\u63d0\u793a",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316",
              list: [
                "\u4f18\u5316\u641c\u7d22\u754c\u9762\u53ca\u6d41\u7a0b",
                "\u4f18\u5316\u4ea7\u54c1\u5185\u9080\u8bf7\u94fe\u63a5\u8df3\u8f6c",
                "\u4f18\u5316\u56fe\u7247\u663e\u793a\u89c4\u8303",
                "\u5feb\u6377\u952e\u8bbe\u7f6e\u53ef\u8bbe\u7f6e\u9f20\u6807\u4e2d\u952e",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u4ece\u641c\u7d22\u8fdb\u5165\u8bed\u97f3\u9891\u9053\u7684\u6743\u9650\u5224\u65ad\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.08.05 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.37.4\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u6e38\u620f\u5185\u8986\u76d6\u8bbe\u7f6e\u4e0d\u4e86\u4f4d\u7f6e\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.08.03 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.37.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u65b0\u6d88\u606f\u63d0\u793a\u6ca1\u6709\u6570\u5b57\u7ea2\u70b9\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u4e00\u4e9b\u60c5\u51b5\u4e0b\u8fdb\u5165\u9891\u9053\u4e0d\u6eda\u52a8\u5230\u5e95\u90e8\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.08.02 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.37.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u9891\u9053\u65e0\u6cd5\u6392\u5e8f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u95ed\u9ea6\u72b6\u6001\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u4e00\u4e9b\u60c5\u51b5\u4e0b\u9759\u97f3\u4e4b\u540e\u53ef\u4ee5\u542c\u5230\u5176\u4ed6\u4eba\u8bf4\u8bdd\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.07.30 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.37.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86bilibili\u89c6\u9891\u5206\u4eab\u94fe\u63a5\u8bbf\u95ee\u5931\u8d25\u5bfc\u81f4\u5237\u65b0\u9875\u9762\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.07.28 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.37.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e",
              list: [
                "\u65b0\u589e\u79c1\u804a\u9875\u9762\u67e5\u770b\u4e2a\u4eba\u8d44\u6599\u5165\u53e3",
                "\u65b0\u589e\u4e2a\u4eba\u6635\u79f0+\u7f16\u53f7\u5feb\u6377\u590d\u5236",
                "\u65b0\u589e\u684c\u9762\u7aef\u5728\u7ebf\u65f6\u505c\u6b62\u624b\u673a\u901a\u77e5",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316",
              list: [
                "\u4f18\u5316\u9080\u8bf7\u94fe\u63a5\u89e3\u6790",
                "\u4f18\u5316\u9875\u9762\u52a0\u8f7d\u901f\u5ea6",
                "\u4f18\u5316PC\u7aef\u97f3\u4e50\u72b6\u6001\u8bc6\u522b",
                "\u4f18\u5316\u56fe\u7247\u52a0\u8f7d\u6837\u5f0f\u4ee5\u53ca\u52a8\u6548",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u6ca1\u6709\u9891\u9053\u53ef\u89c1\u6743\u9650\u7684\u4eba\u8fdb\u5165\u4e86\u9891\u9053\uff0c\u770b\u4e0d\u89c1\u9891\u9053\u7684\u95ee\u9898",
                "\u4fee\u590d\u4f11\u7720\u6062\u590d\u540e\uff0c\u5904\u4e8e\u8fde\u63a5\u5931\u8d25\u7684\u72b6\u6001\u7684\u95ee\u9898",
                "\u4fee\u590dwindows\u7248\u672c\u5355\u51fb\u4efb\u52a1\u680f\u56fe\u6807\uff0c\u65e0\u6cd5\u5c06\u5f00\u9ed1\u5566\u7f6e\u5230\u6700\u524d\u9762\u7684\u95ee\u9898",
                "\u4fee\u590d\u5f53\u9891\u9053\u6709\u5361\u7247\u6d88\u606f\u65f6\uff0c\u6253\u5f00\u9891\u9053\u540e\u6eda\u52a8\u4f4d\u7f6e\u4e0d\u5bf9\u7684\u95ee\u9898",
                "\u4fee\u590d\u5f53\u9891\u9053\u6536\u5230\u4e86\u591a\u6761\u6d88\u606f\u540e\uff0c\u7ffb\u9875\u540e\u6570\u91cf\u4e0d\u5bf9\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.07.07 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.36.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e",
              list: [
                "\u65b0\u589e\u5de5\u5355\u53cd\u9988\u7cfb\u7edf",
                "\u65b0\u589e\u670d\u52a1\u5668\u4e3b\u8f6c\u8ba9\u529f\u80fd",
                "\u65b0\u589e\u8d26\u6237\u6ce8\u9500\u529f\u80fd",
                "\u65b0\u589e\u8f93\u5165\u6846\u53f3\u952e\u83dc\u5355",
                "\u65b0\u589e\u5220\u9664\u94fe\u63a5\u89e3\u6790\u529f\u80fd",
                "\u65b0\u589eOBS\u7acb\u7ed8\u6a21\u5f0f\u6635\u79f0\u4f4d\u7f6e\u8c03\u6574\u529f\u80fd",
                "\u65b0\u589eBUFF\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u8bed\u97f3\u7ebf\u8def",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316",
              list: [
                "\u4f18\u5316\u4e86\u7528\u6237\u9891\u7e41\u8fdb\u51fa\u8bed\u97f3\u9891\u9053\u63d0\u793a\u97f3",
                "\u4f18\u5316\u4e86\u201dX\u201c\u5173\u95ed\u56fe\u6807\u6837\u5f0f",
                "\u4f18\u5316\u4e86\u670d\u52a1\u5668\u9891\u9053\u4f4d\u7f6e\u79fb\u52a8",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u5207\u6362\u670d\u52a1\u5668\u65f6\uff0c\u8bed\u97f3\u8fde\u63a5\u72b6\u6001\u56fe\u6807\u95ea\u70c1\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u526a\u8d34\u677f\u51fa\u73b0\u526a\u8d34\u591a\u4f59\u6587\u5b57\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79fb\u52a8\u6210\u5458\u53ef\u4ee5\u770b\u5230\u9690\u85cf\u9891\u9053\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.06.21 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.35.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u52a9\u529b\u7f13\u51b2\u671f\u63d0\u793a\u4f4d\u7f6e\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u516c\u5f00\u670d\u52a1\u5668\u9884\u89c8\u8fc7\u7a0b\u4e2d\uff0c\u6210\u5458\u5217\u8868\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u62d6\u52a8\u8bed\u97f3\u9891\u9053\u5361\u987f\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.06.18 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.35.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u670d\u52a1\u5668\u5b89\u5168\u8bbe\u7f6e\u9009\u9879",
                "\u65b0\u589e\u975e\u4e2d\u56fd\u5927\u9646\u5730\u533a\u7528\u6237\u767b\u5f55\u9a8c\u8bc1",
                "\u53f3\u952e\u83dc\u5355\u4e2d\u65b0\u589e\u590d\u5236\u56fe\u7247\u529f\u80fd",
                "\u65b0\u589e\u79fb\u52a8\u4ed6\u4eba\u81f3\u5f53\u524d\u6211\u6240\u5728\u7684\u8bed\u97f3\u9891\u9053\u529f\u80fd",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u52a9\u529b\u5305\u8d2d\u4e70\u6587\u6848",
                "\u4f18\u5316\u4e86\u670d\u52a1\u5668\u6210\u5458\u5217\u8868\u7684\u5237\u65b0\u95ea\u70c1\u95ee\u9898",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "Firefox\u65b0\u7248\u6d4f\u89c8\u5668\u4e0d\u80fd\u6b63\u5e38\u8f93\u5165\u4e2d\u6587\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.05.21 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.34.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u901a\u77e5\u8bbe\u5b9a\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9891\u9053\u6743\u9650\u8bbe\u7f6e\u4e2d\u8f93\u5165\u6846\u989c\u8272\u9519\u8bef\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.05.21 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.34.2\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u670d\u52a1\u5668\u52a9\u529b\u9875\u6253\u5f00\u65b9\u5f0f",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u52a8\u6001\u5934\u50cf\u95ea\u70c1\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u90e8\u5206\u6587\u6848\u9519\u8bef",
                "\u4fee\u590d\u4e86\u672a\u8ba4\u8bc1\u7528\u6237\u53ef\u4ee5\u52a9\u529b\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.05.20 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.34.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u4f1a\u5458\u548c\u670d\u52a1\u5668\u52a9\u529b\u7684\u90e8\u5206\u6587\u6848",
                "\u4e0d\u80fd\u7ed9\u5c01\u7981\u3001\u6ce8\u9500\u7528\u6237\u8d60\u9001\u4f1a\u5458",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5728\u641c\u7d22\u63a8\u8350\u670d\u52a1\u5668\u65f6\uff0c\u670d\u52a1\u5668\u5c01\u9762\u663e\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8001\u7248\u672c\u4e0a\u4f20\u670d\u52a1\u5668\uff0c\u65b0\u7248\u672c\u53d1\u9001\u8868\u60c5\u4e71\u7801\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u5bfc\u81f4\u52a9\u529bicon\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9009\u62e9\u8f93\u5165\u8f93\u51fa\u8bbe\u5907\u5f39\u7a97\u6587\u5b57\u5c45\u4e2d\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.05.19 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.34.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u670d\u52a1\u5668\u52a9\u529b",
                "\u670d\u52a1\u5668\u52a9\u529b\u5305\u8d2d\u4e70",
                "Buff\u8d2d\u4e70",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u65b0\u7528\u6237\u9080\u8bf7\u6d41\u7a0b\u4f18\u5316",
                "\u670d\u52a1\u5668\u8868\u60c5\u4e0a\u9650\u63d0\u5347\u81f3512k",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: ["\u4fee\u590d\u5927\u90e8\u5206\u5df2\u77e5\u95ee\u9898"],
            },
          ],
        },
        {
          date: "2021.04.25 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.33.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u7533\u8bf7\u63a8\u8350\u670d\u52a1\u5668\u65e0\u6cd5\u4e0a\u4f20\u56fe\u7247\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.04.21 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.33.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86hover\u4f1a\u5458\u5408\u5e76\u6d88\u606f\u65f6\u5934\u50cf\u7684\u52a8\u6001\u663e\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86@\u6210\u5458\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u624b\u673a\u7aef\u767b\u5f55\u7684\u7528\u6237\u5934\u50cf\u663e\u793a\u9519\u8bef\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79c1\u804a\u4e2d\u52a8\u6001\u5934\u50cf\u7684\u663e\u793a\u9519\u8bef\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79c1\u804a\u4e2d\u4f1a\u5458\u4e0d\u80fd\u5bf9\u6d88\u606f\u6dfb\u52a0\u8de8\u670d\u52a1\u5668\u8868\u60c5\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8d85\u957f\u89d2\u8272\u540d\u5728\u7528\u6237\u9762\u677f\u4e2d\u7684\u663e\u793a\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.04.20 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.33.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u4f1a\u5458\u529f\u80fd\uff08\u5185\u6d4b\uff09",
                "\u8d26\u53f7\u7ed1\u5b9a\u7b2c\u4e09\u65b9\u8d26\u6237",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u53d1\u8d77\u79c1\u4fe1\u4e32\u6d88\u606f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7f16\u8f91\u680f\u9519\u8bef\u63d0\u793a\u4e0d\u6d88\u5931\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6279\u91cf\u79fb\u52a8\u7528\u6237\u81f3\u8bed\u97f3\u9891\u9053\u7684\u663e\u793a\u9519\u8bef\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6309\u952e\u8bf4\u8bdd\u8bbe\u7f6e\u7684\u6309\u952e\u5728\u8f93\u5165\u6846\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u65e0\u6587\u5b57\u9891\u9053\u7684\u670d\u52a1\u5668\u65e0\u6cd5\u8fdb\u5165\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79c1\u804a\u6d88\u606f\u56de\u590d\u5931\u8d25\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.04.1 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.32.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u9891\u7e41\u5207\u6362\u670d\u52a1\u5668\u5bfc\u81f4\u7684\u663e\u793a\u9519\u8bef\u95ee\u9898",
                "\u4fee\u590d\u4e86QQ\u626b\u7801\u767b\u5f55\u4e0d\u80fd\u663e\u793a\u4e8c\u7ef4\u7801\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.03.30 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.32.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: ["\u4f18\u5316\u4e86\u8bed\u97f3\u94fe\u63a5\u72b6\u6001"],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8f93\u5165URL\u8df3\u8f6c\u9891\u9053\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u6210\u5458\u53f3\u952e\u5217\u8868\u663e\u793a\u4e0d\u5168\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u5bfc\u81f4\u7684\u67e5\u770b\u65b0\u6d88\u606f\u63d0\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.03.23 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.32.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u5b98\u65b9\u5408\u4f5c\u4f19\u4f34\u670d\u52a1\u5668\u6807\u7b7e",
                "\u5f00\u53d1\u8005\u4e2d\u5fc3CallbackURL\u5931\u8d25\u65f6\u589e\u52a0\u9519\u8bef\u6837\u5f0f\u548c\u91cd\u8bd5\u6309\u94ae",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u62d6\u62fd\u5206\u7ec4\u65f6\u7684\u5c42\u7ea7\u663e\u793a",
                "\u4f18\u5316\u4e86\u6536\u53d1\u6d88\u606f\u7684\u987a\u5e8f\u663e\u793a",
                "\u4f18\u5316\u4e86\u6587\u4ef6\u4e0b\u8f7d\u7684\u70b9\u51fb\u89e6\u53d1\u8303\u56f4",
                "\u6309\u952e\u63d0\u793a\u97f3\u5728\u8bed\u97f3\u9891\u9053\u5916\u4e0d\u518d\u89e6\u53d1",
                "\u5168\u5c40\u641c\u7d22\u65f6\u8f93\u5165\u4e2d\u6587\u56de\u8f66\uff0c\u6587\u5b57\u5c06\u952e\u5165\u5230\u8f93\u5165\u680f\u4e2d\u800c\u4e0d\u662f\u76f4\u63a5\u641c\u7d22",
                "\u641c\u7d22\u670d\u52a1\u5668\u89e6\u53d1\u4e0d\u518d\u4f7f\u7528\u56de\u8f66\uff0c\u6539\u4e3a\u8f93\u5165\u540e\u89e6\u53d1",
                "\u6587\u5b57\u9891\u9053\u7684\u56de\u5230\u6700\u65b0\u6d88\u606f\u7684\u89e6\u53d1\u6539\u4e3a\u5411\u4e0a\u6eda\u52a8\u4e24\u4e2a\u5c4f\u5e55\u9ad8\u5ea6",
                "\u6dfb\u52a0\u4e86\u4e00\u4e9b\u8f6f\u4ef6\u542f\u52a8\u65f6\u7684\u6e38\u620f\u53f0\u8bcd",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u7528\u6237\u9996\u6b21\u79c1\u804a\u7ea2\u70b9\u63d0\u793a\u4e0d\u6d88\u5931\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7f6e\u9876\u6d88\u606f\u7684\u6587\u5b57\u989c\u8272\u9519\u8bef",
                "\u4fee\u590d\u4e86Cardmessage\u5012\u8ba1\u65f6\u989c\u8272\u5c42\u7ea7\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u95ed\u9ea6\u72b6\u6001\u6ca1\u6709\u6309\u952e\u63d0\u793a\u97f3\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u514d\u6253\u6270\u5206\u7ec4\u6ca1\u6709\u7ea2\u70b9\u63d0\u793a\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u95ed\u9ea6\u3001\u9759\u97f3\u6309\u94ae\u5927\u5c0f\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86Cardmessage\u7f16\u8f91\u5668\u4e0b\u62c9\u6846\u9ad8\u5ea6\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5f31\u7f51\u72b6\u6001\u4e0b\u5bfc\u81f4\u7684\u6d88\u606f\u91cd\u590d\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u79c1\u4fe1\u65e0\u6cd5\u56de\u590d\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.03.15 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.31.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u7533\u8bf7\u63a8\u8350\u670d\u52a1\u5668\u9875\u7684\u6587\u6848\u63cf\u8ff0",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4fee\u590d\u4e86\u53d1\u73b0\u9875\u65e0\u6cd5\u5237\u65b0\u9875\u9762\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86OBS\u4e0d\u53ef\u7528\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.03.12 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.31.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: ["\u4ea7\u54c1\u5185\u5168\u5c40\u641c\u7d22"],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d",
              list: [
                "\u4e2a\u4eba\u52a8\u6001QQ\u97f3\u4e50\u5207\u6b4c\u65f6\u663e\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u65b0\u624b\u5f15\u5bfc\u5361\u6b7b\u7684\u95ee\u9898",
                "\u5c01\u7981\u7528\u6237\u4e0d\u4f1a\u9000\u51fa\u8bed\u97f3\u9891\u9053\u7684\u95ee\u9898",
                "\u63a8\u8350\u670d\u52a1\u5668\u641c\u7d22\u6846\u7684\u6309\u94ae\u989c\u8272\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.02.08 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.30.7\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u7f51\u7edc\u94fe\u63a5\u72b6\u6001\u7684\u5237\u65b0\u65f6\u95f4",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f34\u594f\u95ea\u9000\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9891\u7e41\u62a5\u9519\u8bf7\u6c42\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u94fe\u63a5\u8bca\u65ad\u8bf7\u6c42\u65e0\u6cd5\u88ab\u5173\u95ed\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.02.03 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.30.6\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u5b98\u65b9\u8ba4\u8bc1\u670d\u52a1\u5668\u6807\u8bc6",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u65b0\u589e\u4f34\u594f\u529f\u80fd\u9519\u8bef\u63d0\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u6062\u590d\u4e86\u8f93\u51fa\u8bbe\u5907stereo\u663e\u793a",
                "\u79c1\u4fe1\u6d88\u606f\u591a\u7aef\u672a\u540c\u6b65\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.02.01 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.30.5\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u6e38\u620f\u52a8\u6001\u8bc6\u522b\u4e0d\u5bf9\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.01.29 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.30.4\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86OBS\u529f\u80fd\u7684\u6587\u6848\u63cf\u8ff0",
              ],
            },
          ],
        },
        {
          date: "2021.01.28 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.30.3\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u56fe\u7247\u6d4f\u89c8\u5668\u7f29\u653e\u65f6\u91c7\u7528\u9f20\u6807\u4f5c\u4e3a\u7f29\u653e\u951a\u70b9",
                "\u4f18\u5316\u4e86\u63a8\u8350\u9875\u6d4f\u89c8\u5361\u987f\u7684\u95ee\u9898",
                "\u652f\u6301\u4f7f\u7528ctrl+f\u5feb\u901f\u5524\u8d77\u6587\u5b57\u9891\u9053\u804a\u5929\u8bb0\u5f55\u641c\u7d22\u529f\u80fd",
                "\u4fee\u6539\u4ed6\u4eba\u6635\u79f0\u652f\u6301\u4f7f\u7528\u56de\u8f66\u5feb\u901f\u4fdd\u5b58",
                "OBS\u5f00\u653e\u652f\u6301\u7acb\u7ed8\u6a21\u5f0f",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u8bbe\u7f6e\u4e2d\uff0c\u6210\u5458\u4fe1\u606f\u53f3\u952e\u6d6e\u5c42\u9762\u677f\u906e\u6321\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u5220\u9664\u6d88\u5931\u5931\u8d25\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5f15\u7528\u5185\u5bb9\u4e0d\u5b58\u5728\u65f6\uff0c\u5355\u51fb\u5f15\u7528\u8df3\u8f6c\u5bfc\u81f4\u9891\u9053\u5185\u5bb9\u6d88\u5931\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.01.20 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.30.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8bbe\u7f6e\u4e3a Ctrl + Enter \u6362\u884c\u60c5\u51b5\u4e0b\uff0c\u63d0\u53ca\u65f6\u4f7f\u7528 Enter \u4e0d\u80fd\u76f4\u63a5\u547d\u4e2d\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.01.19 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.30.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u56fe\u7247\u6d4f\u89c8\u5668\u4e2d\u7684\u56fe\u7247\u6bd4\u4f8b\u4f1a\u6839\u636e\u7a97\u53e3\u5927\u5c0f\u8fdb\u884c\u7f29\u653e",
                "\u65b0\u589e\u56fe\u7247\u6d4f\u89c8\u5668\u5173\u95ed\u63d0\u793a",
                "\u56fe\u7247\u6d4f\u89c8\u5668\u4e0d\u518d\u8bb0\u5f55\u4e0a\u6b21\u65f6\u6253\u5f00\u7a97\u53e3\u5927\u5c0f",
                "\u4f18\u5316\u4e86\u6362\u884c\u5feb\u6377\u952e\u7684\u9ed8\u8ba4\u6309\u952e\u8bbe\u7f6e",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86 Windows Defender \u7684\u62a5\u6bd2\u95ee\u9898",
                "\u4fee\u590d\u4e86 Web \u7aef\u70b9\u51fb\u4e0b\u8f7d\u56fe\u7247\u6309\u94ae\u65e0\u6cd5\u76f4\u63a5\u4e0b\u8f7d\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u88ab\u63d0\u53ca\u65f6\u670d\u52a1\u5668\u4e00\u952e\u5df2\u8bfb\u529f\u80fd\u5931\u6548\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.01.15 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.30.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u6362\u884c\u53d1\u9001\u6309\u952e\u8bbe\u7f6e",
                "\u65b0\u589e\u53cc\u51fb\u7528\u6237\u5217\u8868\u8df3\u8f6c\u7528\u6237\u79c1\u4fe1\u529f\u80fd",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: ["\u4f18\u5316\u56fe\u7247\u6d4f\u89c8\u529f\u80fd"],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5f15\u7528\u65f6\u8f93\u5165\u94fe\u63a5\u5bfc\u81f4\u5f15\u7528\u6d88\u606f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u901a\u77e5\u7ea2\u70b9\u65e0\u6cd5\u6d88\u9664\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.01.14 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.29.3\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u4f34\u594f\u652f\u6301\u7535\u8111\u6240\u6709\u97f3\u6e90",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u4f34\u594f\u8fc7\u7a0b\u4e2d\u5207\u6362\u670d\u52a1\u5668\u5bfc\u81f4\u7684\u56fe\u6807\u6d88\u5931\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.01.13 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.29.2\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u8bed\u97f3\u9891\u9053\u97f3\u4e50\u4f34\u594f\u529f\u80fd",
              ],
            },
          ],
        },
        {
          date: "2021.01.04 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.29.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u641c\u7d22\u5386\u53f2\u6d88\u606f\u65f6\uff0c\u670d\u52a1\u5668\u8868\u60c5\u9762\u677f\u88ab\u906e\u6321\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7279\u6b8a\u60c5\u51b5\u4e0b\u5bfc\u81f4\u7684\u79c1\u4fe1\u63d0\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u6210\u5458\u5217\u8868\u65e0\u6cd5\u6b63\u5e38\u5237\u65b0\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2021.1.1 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.29.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589eCardMessage\u6d88\u606f\uff08\u5185\u6d4b\uff09",
                "\u65b0\u589e\u542c\u7b52\u97f3\u91cf\u652f\u6301\u653e\u5927\u81f3200%",
                "\u65b0\u589e\u4fee\u6539\u670d\u52a1\u5668\u4ed6\u4eba\u6635\u79f0\u529f\u80fd",
                "\u65b0\u589e\u4ee5\u7ba1\u7406\u5458\u6a21\u5f0f\u542f\u52a8\u8f6f\u4ef6\u63d0\u793a",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u5220\u9664\u6d88\u606f\u65f6\u7684\u754c\u9762\u63d0\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5c01\u7981\u7528\u6237\u6ca1\u6709\u5b9e\u65f6\u5220\u9664\u7528\u6237\u6d88\u606f\u7684\u95ee\u9898",
                "\u4fee\u590d\u5207\u6362\u9891\u9053\u8349\u7a3f\u5185\u5bb9\u6ca1\u6709\u4fdd\u7559\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5207\u6362\u670d\u52a1\u5668\u5bfc\u81f4\u641c\u7d22\u7528\u6237\u680f\u5361\u4f4f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9080\u8bf7\u673a\u5668\u4eba\u65f6\u5c55\u793a\u7684\u6743\u9650\u5217\u8868\u548c\u7533\u8bf7\u5217\u8868\u4e0d\u4e00\u81f4\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5927\u90e8\u5206\u5df2\u77e5UI\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.12.11 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.28.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8bed\u97f3\u542c\u5199\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79c1\u804a\u53d1\u9001\u56fe\u7247\u5931\u8d25\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.12.10 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.28.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u8bed\u97f3\u65f6\u4fdd\u6301\u5176\u4ed6\u5e94\u7528\u97f3\u91cf\u4e0d\u53d8\u7684\u529f\u80fd",
                "\u65b0\u589e\u6587\u5b57\u6d88\u606f\u53d1\u9001\u4e2d\u72b6\u6001",
                "\u65b0\u589e\u673a\u5668\u4eba\u6a21\u5757\uff08\u5185\u6d4b\uff09",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u9891\u9053\u8bf4\u660e\u5b57\u6570\u8fc7\u957f\u7684\u9519\u8bef\u63d0\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u7528\u6237\u52a8\u6001\u7684\u663e\u793aBUG",
                "\u4fee\u590d\u4e86@\u5168\u4f53\u6210\u5458\u65e0\u6cd5\u88ab\u52a8\u8fde\u63a5\u81f3\u8bed\u97f3\u9891\u9053\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u89d2\u8272\u663e\u793a\u8d85\u51fa\u89c4\u5b9a\u533a\u57df\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9891\u9053\u7b80\u4ecb\u663e\u793a\u5f02\u5e38\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6dfb\u52a0\u89d2\u8272\u4e0d\u751f\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7f16\u8f91\u6d88\u606f\u51fa\u73b0\u8f6f\u4ef6\u84dd\u5c4f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u65ad\u7f51\u91cd\u8fde\u6d88\u606f\u4e0d\u66f4\u65b0\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.11.27 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.27.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u673a\u5668\u4eba\u548c\u5b98\u65b9\u89d2\u8272\u6807\u7b7e",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u7f6e\u9876\u4e0b\u62c9\u6846\u7684\u6ed1\u52a8\u6761\u80cc\u666f",
                "\u4f18\u5316\u4e86\u9891\u9053\u8bbe\u7f6e\u4e2d\u7684\u5173\u95ed\u6309\u94ae\u4f4d\u7f6e",
                "\u4f18\u5316\u4e86\u9891\u9053\u8bf4\u660e\u7684\u4f4d\u7f6e\u4e0e\u95f4\u8ddd",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5ba2\u6237\u7aef\u65ad\u7f51\u91cd\u8fde\u6d88\u606f\u4e0d\u5237\u65b0\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5207\u6362\u9891\u9053\u5bfc\u81f4\u67e5\u627e\u7528\u6237\u6846\u5361\u4f4f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5bf9\u6ca1\u6709\u67e5\u770b\u6743\u9650\u7684\u9891\u9053\u4f1a\u63d0\u793a\u65b0\u6d88\u606f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8fdb\u5165\u8bed\u97f3\u9891\u9053\u5bfc\u81f4\u7684\u84dd\u5c4f\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u7684\u7528\u6237\u540d\u663e\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9891\u9053\u8bf4\u660e\u7684\u663e\u793a\u6837\u5f0f\u9519\u8bef",
                "\u4fee\u590d\u4e86\u4e0d\u8f93\u5165\u4efb\u4f55\u5b57\u4e5f\u53ef\u4ee5\u4fdd\u5b58\u5bc6\u7801\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5728\u526a\u5207\u5305\u542bemoji\u7684\u6587\u672c\u6d88\u606f\u65f6\u5bfc\u81f4\u526a\u5207\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u91cd\u65b0\u7f16\u8f91\u6d88\u606f\u7684\u65f6\u5019\u8f6c\u4e49\u5b57\u7b26\u672a\u88ab\u5c4f\u853d\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u53d6\u6d88\u4e0a\u4f20\u6309\u94ae\u7684\u663e\u793a\u4f4d\u7f6e\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8fc7\u957f\u7528\u6237\u6d88\u606f\u5f39\u7a97\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.11.6 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.26.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u670d\u52a1\u5668\u81ea\u5efaWebsocket\u66ff\u4ee3\u878d\u4e91",
                "\u65b0\u589e\u670d\u52a1\u5668\u548c\u6587\u5b57\u6d88\u606f\u7f13\u5b58",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u670d\u52a1\u5668\u8bbe\u7f6e\u9875\u7684\u5185\u5bb9\u52a0\u8f7d\u72b6\u6001\u63d0\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5207\u6362\u9891\u9053\u5bfc\u81f4\u51fa\u73b0\u5f02\u5e38\u52a0\u8f7d\u72b6\u6001\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79c1\u804a\u53d1\u9001\u7684\u89c6\u9891\u53d8\u6210\u94fe\u63a5\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u7528\u6237\u5217\u8868\u7684\u91cd\u590d\u95ee\u9898",
                "\u4fee\u590d\u4e86\u63a8\u8350\u670d\u52a1\u5668ID\u4e3a\u7a7a\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u70b9\u51fb\u5f15\u7528\u6d88\u606f\u8df3\u8f6c\u5931\u8d25\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7528\u6237\u540d\u4e3a\u94fe\u63a5\u65f6\u9519\u8bef\u89e3\u6790\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u53ef\u4ee5\u4f7f\u7528\u7a7a\u767d\u7528\u6237\u540d\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6709@\u6d88\u606f\u65f6\uff0c\u5168\u90e8\u5df2\u8bfb\u529f\u80fd\u65e0\u6cd5\u4f7f\u7528\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6ed1\u52a8\u6761\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u53d6\u6d88\u5f15\u7528\u540e@\u65e0\u6cd5\u5220\u9664\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u91cd\u65b0\u4e0a\u4f20\u6309\u94ae\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u4e0a\u4f20\u6587\u4ef6\u540d\u53ef\u4ee5\u4e3a\u7a7a\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5728\u542c\u52a8\u6001\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u590d\u5236\u5df2\u53d1\u9001\u6d88\u606f\u51fa\u73b0\u6d88\u606f\u65f6\u95f4\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7f16\u8f91\u6846\u4e2d\u7684Emoji\u65e0\u6cd5\u590d\u5236\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86@\u9762\u677f\u4e0e\u5f15\u7528\u9762\u677f\u5c42\u7ea7\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5c01\u7981\u9875\u9762\u7684\u6ed1\u6761\u6837\u5f0f\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u63a8\u8350\u670d\u52a1\u5668\u56fe\u7247\u7f29\u5c0f\u65f6\u906e\u6321\u6587\u5b57\u9891\u9053\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u573a\u666f\u4e0b\u5bfc\u81f4\u7684\u84dd\u5c4f\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.10.16 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.25.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u79c1\u804a\u5bfc\u81f4\u7684\u5d29\u6e83\u95ee\u9898",
                "\u4fee\u590d\u4e86\u90e8\u5206\u6d4f\u89c8\u5668\u7684\u9002\u914d\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.10.15 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.25.2\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u4e0b\u8f7d\u9875\u7684\u5b89\u5353\u4e0b\u8f7d\u4e8c\u7ef4\u7801",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u6697\u591c\u6a21\u5f0f\u65e0\u6587\u5b57\u9891\u9053\u65f6\u7684\u663e\u793a\u95ee\u9898",
                "\u4fee\u590dQQ\u6d4f\u89c8\u5668\u56fe\u7247\u52a0\u8f7d\u7684\u95ee\u9898",
                "\u4fee\u590d\u6d4f\u89c8\u5668\u8bc6\u522b\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u65b0\u624b\u5f15\u5bfc\u4e2d\u6743\u9650\u63d0\u793a\u7684\u663e\u793a\u95ee\u9898",
                "\u4fee\u590d\u62d6\u62fd\u4e0a\u4f20\u52a8\u4f5c\u5728\u975e\u6587\u5b57\u9891\u9053\u751f\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u5220\u9664\u89d2\u8272\u6ca1\u6709\u53ca\u65f6\u540c\u6b65\u7684\u95ee\u9898",
                "\u4fee\u590d\u5f39\u7a97\u4e2d\u8d85\u957f\u6d88\u606f\u7684\u6eda\u52a8\u6761\u663e\u793a\u95ee\u9898",
                "\u4fee\u590d\u8fdb\u5165\u8bed\u97f3\u9891\u9053\u540e\u53ef\u4ee5\u518d\u6b21\u9009\u4e2d\u7684\u95ee\u9898",
                "\u4fee\u590d\u5220\u9664\u56fe\u7247\u6d88\u606f\u662f\u56fe\u7247\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u9891\u9053\u5217\u8868\u9009\u4e2d\u65f6hover\u6837\u5f0f\u9519\u8bef\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.10.14 \u66f4\u65b0\u8bb0\u5f55\uff08v.0.0.25.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u589e\u52a0\u4e86\u65b0\u8d26\u53f7\u65b0\u624b\u5f15\u5bfc",
                "\u65b0\u589e\u4e86\u81ea\u52a8\u5207\u6362\u4e3b\u9898\u529f\u80fd",
                "\u65b0\u589e\u4e86\u670d\u52a1\u5668\u53f3\u952e\u83dc\u5355\u53ca\u6807\u8bb0\u5df2\u8bfb\u529f\u80fd",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u5e2e\u52a9\u9875",
                "\u4f18\u5316\u4e86\u6574\u4f53\u8fb9\u6846\u548c\u7a97\u53e3\u6807\u9898\u680f\u6837\u5f0f",
                "\u4f18\u5316\u4e86\u670d\u52a1\u5668\u3001\u9891\u9053\u9009\u62e9\u7684\u663e\u793a\u6837\u5f0f",
                "\u4f18\u5316\u4e86\u8bed\u97f3\u9891\u9053\u4e2d\u8bf4\u8bdd\u4eba\u663e\u793a\u6837\u5f0f",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u4e00\u7cfb\u5217\u6837\u5f0f\u663e\u793a\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5bfc\u81f4\u52a0\u8f7d\u7f13\u6162\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9690\u85cf\u7528\u6237\u5217\u8868\u672a\u88ab\u8bb0\u5f55\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u62d6\u62fd\u6587\u4ef6\u5939\u4f1a\u5bfc\u81f4\u4e0a\u4f20\u51fa\u9519\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9891\u9053\u4e0e\u5206\u7ec4\u53f3\u952e\u83dc\u5355\u65e0Esc\u54cd\u5e94\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5ba2\u6237\u7aef\u65e0\u6cd5\u8bb0\u5f55\u5173\u95ed\u65f6\u7a97\u53e3\u5927\u5c0f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5ba2\u6237\u7aef\u6700\u5927\u5316\u540e\u9876\u7aef\u70b9\u51fb\u65e0\u53cd\u5e94\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6d88\u606f\u53f3\u952e\u83dc\u5355\u906e\u6321\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67e5\u770b\u56de\u5e94\u83dc\u5355\u65e0\u6cd5\u6b63\u786e\u5173\u95ed\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.9.28 \u66f4\u65b0\u8bb0\u5f55\uff08v.0.0.25.0\uff09",
          updateContent: [
            {
              title: "",
              list: [
                "\u8c03\u6574\u4e86\u6574\u4f53\u754c\u9762\u98ce\u683c\uff0c\u4f18\u5316\u4e86\u4ea4\u4e92\u52a8\u753b",
                "\u8bed\u97f3\u9891\u9053\u8c03\u6574\u4e3a\u53cc\u51fb\u8fdb\u5165",
              ],
            },
          ],
        },
        {
          date: "2020.9.4 \u66f4\u65b0\u8bb0\u5f55\uff08v.0.0.24.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u670d\u52a1\u5668\u641c\u7d22\u7528\u6237\u51fa\u73b0\u8f93\u5165\u6846\u7126\u70b9\u4e22\u5931\u7684\u95ee\u9898",
                "\u4fee\u590d\u514d\u6253\u6270\u7684\u65f6\u95f4\u663e\u793a\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.9.4 \u66f4\u65b0\u8bb0\u5f55\uff08v.0.0.24.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u670d\u52a1\u5668\u6210\u5458\u6279\u91cf\u64cd\u4f5c\u754c\u9762",
                "\u65b0\u589e\u6d77\u5916\u670d\u52a1\u5668\u8282\u70b9",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u53f3\u952e@\u7528\u6237\u51fa\u73b0\u590d\u5236\u94fe\u63a5\u7684\u95ee\u9898",
                "\u4fee\u590d\u79fb\u52a8\u9f20\u6807\u5bfc\u81f4\u8f93\u5165\u6846\u5185\u5bb9\u6d88\u5931\u7684\u95ee\u9898",
                "\u4fee\u590d\u6309\u952e\u6355\u83b7\u5f02\u5e38\u5bfc\u81f4\u7684\u4e00\u952e\u95ed\u9ea6\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u5206\u7ec4\u6536\u8d77\u65f6\u5c55\u793a\u4eba\u5458\u7f3a\u5931\u7684\u95ee\u9898",
                "\u4fee\u590d\u8bed\u97f3\u9080\u8bf7\u4e0e\u597d\u53cb\u7533\u8bf7\u7684\u8ba1\u65f6\u91cd\u590d\u95ee\u9898",
                "\u4fee\u590d\u5feb\u901f\u53cd\u5e94\u8868\u60c5\u4e71\u7801\u7684\u95ee\u9898",
                "\u4fee\u590d\u7528\u6237\u5217\u8868\u4e2d\u53f3\u952e\u83dc\u5355\u4e0e\u670d\u52a1\u5668\u8eab\u4efd\u5361\u7247\u91cd\u53e0\u7684\u95ee\u9898",
                "\u4fee\u590d\u9080\u8bf7\u94fe\u63a5\u672a\u663e\u793a\u7528\u6237\u540d\u4e2demoji\u7684\u95ee\u9898",
                "\u4fee\u590d\u7f16\u8f91\u5305\u542b@\u89d2\u8272\u6d88\u606f\u65f6\u8f6f\u4ef6\u5d29\u6e83\u7684\u95ee\u9898",
                "\u4fee\u590d\u5207\u6362\u684c\u9762\u5bfc\u81f4\u6309\u952e\u8bf4\u8bdd\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u5f15\u7528\u6d88\u606f\u7684\u4f4d\u7f6e\u663e\u793a\u95ee\u9898",
                "\u4fee\u590d\u9891\u9053\u6743\u9650\u8986\u76d6\u7f3a\u5931\u7684\u95ee\u9898",
                "\u4fee\u590d\u6dfb\u52a0\u56de\u5e94\u7684\u6587\u6848\u4e0d\u4e00\u81f4\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.8.31 \u66f4\u65b0\u8bb0\u5f55\uff08v.0.0.24.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u8bed\u97f3\u9891\u9053\u8bf4\u8bdd\u6743\u9650",
                "\u670d\u52a1\u5668\u95ed\u9ea6\u548c\u670d\u52a1\u5668\u9759\u97f3",
                "\u670d\u52a1\u5668\uff0c\u6587\u5b57\u9891\u9053\u4e0e\u4e2a\u4eba\u7684\u514d\u6253\u6270",
                "\u6587\u5b57\u9891\u9053\u6162\u901f\u8bf4\u8bdd",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u8bed\u97f3\u9891\u9053\u6700\u5927\u4eba\u6570\u4e0d\u518d\u9650\u5236",
                "\u7f6e\u9876\u6837\u5f0f",
                "\u5f15\u7528\u6837\u5f0f",
                "\u79c1\u4fe1\u4e0e\u597d\u53cb\u5217\u8868\u663e\u793a\u5907\u6ce8",
                "\u5206\u7ec4\u6536\u8d77\u65f6\u663e\u793a\u8bed\u97f3\u6210\u5458",
                "\u57fa\u4e8e\u670d\u52a1\u5668\u7684\u9690\u79c1\u8bbe\u7f6e",
                "\u4f18\u5316\u53f3\u952e\u83dc\u5355\u5e03\u5c40",
                "\u4f18\u5316\u4e86\u6e38\u620f\u5185\u8986\u76d6\u7684\u9ed8\u8ba4\u4f4d\u7f6e",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u9000\u51fa\u8bed\u97f3\u9891\u9053hover\u63d0\u793a\u4e0d\u6d88\u5931\u7684\u95ee\u9898",
                "\u4fee\u590d\u79fb\u52a8\u7aef\u52a0\u5165\u6216\u9000\u51fa\u670d\u52a1\u5668PC\u7aef\u4e0d\u5237\u65b0\u670d\u52a1\u5668\u5217\u8868\u7684\u95ee\u9898",
                "\u4fee\u590dTTS\u8bed\u97f3\u64ad\u653e\u7528\u6237\u65e0\u6d4f\u89c8\u6743\u9650\u7684\u9891\u9053\u7684\u63d0\u793a",
                "\u4fee\u590dTTS\u5feb\u6377\u952e\u8bbe\u7f6e\u9f20\u6807\u5de6\u952e\u5bfc\u81f4\u7684\u6b7b\u5faa\u73af\u95ee\u9898",
                "\u8e22\u51fa\u670d\u52a1\u5668\u4e3b\uff0c\u4f1a\u5f3a\u5236\u9000\u51fa\u767b\u5f55\u7684\u95ee\u9898",
                "\u4fee\u590d\u4eba\u6570\u8f83\u591a\u65f6\u6e38\u620f\u5185\u8986\u76d6\u51fa\u73b0\u6ed1\u52a8\u6761\u7684\u95ee\u9898",
                "\u4fee\u590dAndroid\u53d1\u9001\u7684\u56fe\u7247\u548c\u8868\u60c5\uff0cPC\u7aef\u65e0\u6cd5\u590d\u5236\u7684\u95ee\u9898",
                "\u4fee\u590d\u90e8\u5206\u670d\u52a1\u5668\u901a\u77e5\u8bbe\u7f6e\u672a\u751f\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u88ab\u9080\u8bf7\u52a0\u5165\u8bed\u97f3\u9891\u9053\u65f6\u591a\u7aef\u672a\u540c\u6b65\u7684\u95ee\u9898",
                "\u4fee\u590d\u90e8\u5206\u6587\u5b57\u5728\u7c98\u8d34\u8fc7\u7a0b\u4e2d\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3aemoji\u7684\u95ee\u9898",
                "\u4fee\u590d\u5fae\u8f6f\u8f93\u5165\u6cd5\u5bfc\u81f4\u7684\u610f\u5916\u4e2d\u65ad\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.8.6 \u66f4\u65b0\u8bb0\u5f55\uff08v.0.0.23.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u670d\u52a1\u5668\u5386\u53f2\u8bb0\u5f55\u641c\u7d22",
                "\u6587\u5b57\u8f6c\u8bed\u97f3TTS\uff08\u5b9e\u9a8c\uff09",
                "\u8bed\u97f3\u6587\u5b57\u6d88\u606f\uff08\u5b9e\u9a8c\uff09",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u6240\u6709\u7f51\u9875\u589e\u52a0\u6807\u51c6\u89e3\u6790\u6837\u5f0f",
                "\u4e3b\u754c\u9762\u589e\u52a0\u8bed\u97f3\u8f93\u5165\u6a21\u5f0f",
                "\u4e3b\u754c\u9762\u589e\u52a0\u8bbe\u5907\u97f3\u91cf\u8c03\u8282",
                "\u7f29\u77ed\u4e86\u684c\u9762\u6d88\u606f\u901a\u77e5\u7684\u505c\u7559\u65f6\u95f4",
                "\u51cf\u5c11\u4e86QoS\u8d28\u91cf\u8c03\u67e5\u548c\u79fb\u52a8\u7aef\u5e7f\u544a\u7684\u51fa\u73b0\u9891\u7387",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u7ba1\u7406\u65e5\u5fd7\u4e0a\u7684\u4e00\u4e2a\u52a0\u8f7d\u9519\u8bef",
                "\u4fee\u590d\u4e86\u8f93\u5165\u6846\u9009\u4e2d\u65f6\u7684\u4e00\u4e2a\u95ee\u9898",
                "\u4fee\u590d\u4e86\u53d1\u73b0\u9875\u6d4f\u89c8\u65f6\u5bfc\u81f4\u5d29\u6e83\u7684\u4e00\u4e2a\u95ee\u9898",
                "\u4fee\u590d\u4e86\u672a\u8ba4\u8bc1\u7528\u6237\u53ef\u4ee5\u53d1\u79c1\u4fe1\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u597d\u53cb\u8bf7\u6c42\u6d88\u606f\u591a\u7aef\u4e0d\u540c\u6b65\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6b22\u8fce\u901a\u77e5\u7684\u4e00\u4e2a\u6837\u5f0f\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6e38\u620f\u5185\u8986\u76d6\u7528\u6237\u9000\u51fa\u65f6\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u90e8\u5206\u6d4f\u89c8\u5668\u9000\u51fa\u8bed\u97f3\u65f6\u4e0d\u64ad\u653e\u97f3\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u90e8\u5206\u6837\u5f0f\u5c42\u7ea7\u9519\u8bef\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.7.17 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.22.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u9080\u8bf7\u94fe\u63a5\u65e0\u6cd5\u6b63\u786e\u89e3\u6790\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e00\u4e2atypo",
              ],
            },
          ],
        },
        {
          date: "2020.7.16 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.22.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u652f\u6301\u901a\u8fc7\u5c0f\u5de5\u5177\u83b7\u53d6\u670d\u52a1\u5668\u548c\u8bed\u97f3\u9891\u9053\u4fe1\u606f",
                "\u652f\u6301\u901a\u8fc7OBS\u76f4\u64ad\u5de5\u5177\u83b7\u53d6\u670d\u52a1\u5668\u72b6\u6001\uff0c\u6587\u5b57\u9891\u9053\u5185\u5bb9\u548c\u8bed\u97f3\u9891\u9053\u7528\u6237\u5b9e\u65f6\u8bed\u97f3\u72b6\u6001",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u97f3\u4e50\u52a8\u6001\u663e\u793a\u7684\u4e00\u4e2a\u95ee\u9898",
                "\u4fee\u590d\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53d1\u5e03\u4fe1\u606f\u91cd\u590d\u7684\u95ee\u9898",
                "\u4fee\u590d\u591a\u7aef\u540c\u6b65\u7684\u4e00\u4e9b\u95ee\u9898",
                "\u4fee\u590d\u88ab\u52a8\u8fde\u63a5\u4e0e\u4e3b\u52a8\u8fde\u63a5\u8bed\u97f3\u6743\u9650\u540c\u6b65\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6837\u5f0f\u4e0a\u7684\u82e5\u5e72\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7528\u6237\u88ab\u5c01\u7981\u6216\u8e22\u51fa\u670d\u52a1\u5668\u65f6\uff0c\u7acb\u523b\u9000\u51fa\u8bed\u97f3\u9891\u9053\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.7.09 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.21.6\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u8bed\u97f3\u9891\u9053\u4eba\u6570\u8fc7\u591a\u65f6\uff0c\u8fde\u63a5\u5361\u987f\u7684\u95ee\u9898",
                "\u4f18\u5316\u4e86\u8bed\u97f3\u9891\u9053\u4eba\u6570\u8fc7\u591a\u65f6\uff0ccpu\u5360\u7528\u9ad8\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.7.06 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.21.5\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u5728\u7ebf\u5217\u8868\u4e0d\u51c6\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u670d\u52a1\u5668emoji\u8868\u60c5\u4e0a\u4f20\u5931\u8d25\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e0a\u4f20\u6587\u4ef6\u5931\u8d25\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.6.30 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.21.4\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u4e2a\u522bWindows7\u7cfb\u7edf\u6253\u5f00\u9ed1\u5c4f\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.6.25 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.21.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u6b22\u8fce\u8bcd\u4e2d\u7528\u6237\u6635\u79f0\u5305\u542bemoji\u5bfc\u81f4\u7684\u663e\u793a\u9519\u8bef",
                "\u4fee\u590d\u4e86\u4e2a\u522bemoji\u7684\u663e\u793a\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.6.25 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.21.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u65e0\u6743\u9650\u53ef\u4ee5@\u5168\u4f53\u6210\u5458\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.6.24 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.21.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u8f6f\u4ef6\u8fd0\u884c\u65f6\u7684CPU\u5360\u7528",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5347\u7ea7\u5b89\u88c5\u65f6\u62a5\u6bd2\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9f20\u6807\u5feb\u6377\u952e\u5076\u5c14\u4f1a\u5931\u7075\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.6.22 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.21.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u8f93\u5165\u6846\u8349\u7a3f",
                "\u5df2\u53d1\u5e03\u5185\u5bb9\u7f16\u8f91",
                "#\u9891\u9053\u8df3\u8f6c",
                "\u4eba\u5458\u641c\u7d22",
                "\u5f15\u7528\u56de\u590d",
                "@\u5728\u7ebf\u4eba\u5458\u4e0e@\u89d2\u8272",
                "\u6587\u5b57\u9891\u9053\u6d88\u606f\u9009\u4e2d\u72b6\u6001\u4e0e\u64cd\u4f5c\u6309\u94ae\u4f18\u5316",
                "\u88ab\u52a8\u8fde\u63a5\u8bed\u97f3\u9891\u9053\u6743\u9650",
                "\u5141\u8bb8\u81ea\u7531\u9ea6\u6743\u9650",
                "\u9891\u9053\u6743\u9650\u53ef\u4ee5\u52a0\u5230\u4e2a\u4eba",
                "\u56de\u5e94\u529f\u80fd",
                "\u901a\u8fc7\u624b\u673a\u9a8c\u8bc1\u7801\u91cd\u7f6e\u5bc6\u7801",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "@\u5168\u4f53\u6210\u5458\u903b\u8f91\u8c03\u6574\uff0c\u76ee\u524d@\u5168\u4f53\u6210\u5458\u53ea\u5bf9\u9891\u9053\u5185\u6210\u5458\u751f\u6548",
                "\u4f18\u5316webscoket\u5f02\u5e38\u65ad\u5f00\u91cd\u8fde",
                "\u4f18\u5316webRTC\u5f02\u5e38\u65ad\u5f00\u91cd\u8fde",
                "\u4f18\u5316\u65b0\u7528\u6237\u52a0\u5165\u6b22\u8fce\u8bcd\uff0c\u611f\u8c22UniverseF\xd8\xd8L\u8d21\u732e\u4e86200\u6761\u65b0\u6587\u6848\uff01",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5173\u95ed\u6309\u94ae\u4e0d\u968f\u6eda\u52a8\u6761\u6eda\u52a8\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7528\u6237\u5217\u8868\u5b57\u6bcdg\u663e\u793a\u4e0d\u5168\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6587\u5b57\u9891\u9053\u5411\u4e0a\u7ffb\u9875\u5c55\u793a\u4e0d\u6b63\u786e\u7684\u65e5\u671f",
                "\u4fee\u590d\u4e86\u63d0\u793a\u6587\u6848\u88ab\u906e\u6321\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7f51\u7edc\u76d1\u6d4b\u8be6\u7ec6\u4fe1\u606f\u65e0\u6cd5\u70b9\u51fb\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.6.5 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.20.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u63a8\u8350\u670d\u52a1\u5668\u7533\u8bf7\u6d41\u7a0b",
                "\u670d\u52a1\u5668\u6210\u5458\u7ba1\u7406\u6279\u91cf\u64cd\u4f5c",
                "\u516c\u5171\u670d\u52a1\u5668ID",
                "\u670d\u52a1\u5668\u6d3b\u8dc3\u65f6\u957f\u7edf\u8ba1",
                "\u7528\u6237\u5907\u6ce8\u529f\u80fd",
                "\u670d\u52a1\u5668\u9ed8\u8ba4\u6587\u5b57\u9891\u9053",
                "\u670d\u52a1\u5668\u52a0\u5165\u6b22\u8fce\u901a\u77e5",
                "\u4e00\u952e\u9759\u97f3\u5feb\u6377\u952e",
                "\u542f\u52a8\u6700\u5c0f\u5316",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u8bed\u97f3\u8fde\u63a5\u8bbe\u7f6e\uff0c\u4eba\u6570\u4e0a\u9650\u8c03\u6574\u4e3a50\u4eba",
                "\u4f18\u5316\u4e86\u591a\u7aef\u6d88\u606f\u540c\u6b65\u673a\u5236",
                "\u4f18\u5316\u4e86\u672a\u9a8c\u8bc1\u7528\u6237\u6e05\u7406\uff0c\u73b0\u57287\u5929\u672a\u9a8c\u8bc1\u7684\u7528\u6237\u4f1a\u88ab\u81ea\u52a8\u6ce8\u9500",
                "\u4f18\u5316\u4e86\u8868\u60c5\u9009\u62e9\u65f6\u7684\u663e\u793a\uff0c\u5141\u8bb8\u9884\u89c8\u5927\u56fe",
                "\u4f18\u5316\u4e86\u6e38\u620f\u5185\u8986\u76d6\u7684\u7528\u6237\u540d\u663e\u793a\uff0c\u4f18\u5148\u4f7f\u7528\u670d\u52a1\u5668\u6635\u79f0",
                "\u4f18\u5316\u4e86twitter emoji\u5728windows\u5e73\u53f0\u7684\u663e\u793a",
                "\u4f18\u5316\u4e86\u6e38\u620f\u52a8\u6001\u8bc6\u522b\uff0c\u89e3\u51b3\u8fdb\u7a0b\u540d\u51b2\u7a81",
                "\u4f18\u5316\u4e86\u63a8\u9001\u673a\u5236\uff0c\u7f51\u9875\u548cPC\u7248\u5904\u4e8e\u524d\u53f0\u4e0d\u63a8\u9001",
                "\u4f18\u5316\u4e86\u6587\u5b57\u8f93\u5165\u6846\u663e\u793a\uff0c\u591a\u884c\u8f93\u5165\u589e\u52a0\u53ef\u89c6\u8303\u56f4\uff0c\u589e\u52a0\u63d0\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u6587\u5b57\u9891\u9053@\u67d0\u4e9b\u7528\u6237\u5931\u8d25\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u89d2\u8272\u8fc7\u591a\u663e\u793a\u4e0d\u5b8c\u5168\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u65b0\u6d88\u606f\u63d0\u793a\u4e0d\u51c6\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6587\u5b57\u9891\u9053\u7528\u6237\u540d\u4e0d\u663e\u793a\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.5.19 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.19.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u589e\u52a0\u4e86\u6743\u9650\u89d2\u8272\u4f53\u7cfb\uff0c\u53d6\u4ee3\u539f\u6709\u7ba1\u7406\u5458\u4e0e\u9891\u9053\u53ea\u8bfb/\u52a0\u5bc6\u4f53\u7cfb",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u6587\u5b57\u9891\u9053\u5c55\u793a\u6837\u5f0f",
                "\u4f18\u5316\u4e86QoS\u5f39\u7a97\u7684\u5173\u95ed\u903b\u8f91",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u9ad8\u8d28\u91cf\u8bed\u97f3\u9891\u9053\u4e2d\u90e8\u5206\u7528\u6237\u95ed\u9ea6\u4f9d\u7136\u6709\u5e95\u566a\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86firefox\u6d4f\u89c8\u5668\u4f7f\u7528\u7f51\u9875\u7248\u8f93\u5165\u6846\u5149\u6807\u4e0d\u51c6\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7528\u6237\u540d\u4e2d\u5305\u62ec#\u65f6\uff0c\u65e0\u6cd5\u88ab@\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u6781\u7aef\u60c5\u51b5\u4e0b\u9891\u7e41\u8fdb\u51fa\u8bed\u97f3\u9891\u9053\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5728\u8f93\u5165\u6846\u7c98\u8d34html\u65f6\u76f4\u63a5\u663e\u793a\u63a7\u4ef6\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5728\u8bbe\u7f6e\u5feb\u6377\u952e\u8f93\u5165\u6846\uff0c\u4f9d\u7136\u76d1\u542c\u5feb\u6377\u952e\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.5.09 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.18.2\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: ["\u589e\u52a0\u4e86Android\u4e0b\u8f7d\u94fe\u63a5"],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86web\u7248\u624b\u52a8\u8c03\u8282\u654f\u611f\u5ea6\u4e0d\u53d7\u8f93\u5165\u97f3\u91cf\u63a7\u5236\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5c06\u7528\u6237\u97f3\u91cf\u62d6\u52300\u4f9d\u7136\u80fd\u542c\u5230\u58f0\u97f3\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668hover\u63d0\u793a\u6ca1\u6709\u4e86\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6d88\u606f\u63d0\u9192\u903b\u8f91\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u6781\u7aef\u60c5\u51b5\u4e0b\u8bed\u97f3\u9891\u9053\u4eba\u6570\u4e0d\u51c6\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8bed\u97f3\u9891\u9053\u5df2\u6709\u7528\u6237\u95ed\u9ea6\u95ed\u8033\u673a\u540e\u8fdb\u6765\u7684\u7528\u6237\u770b\u4e0d\u5230\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6d88\u606f\u95f4\u8ddd\u4e0d\u5bf9\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86Android\u7aef\u4e0a\u4f20\u56fe\u7247\uff0cpc\u7aef\u65e0\u6cd5\u5b9e\u65f6\u6536\u5230\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.4.22 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.18.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u5feb\u6377\u952e\u7684\u6355\u83b7\u6a21\u5757\uff0c\u89e3\u51b3\u4e0e\u5176\u4ed6\u8f6f\u4ef6\u7684\u51b2\u7a81",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u53d6\u6d883A\u8bbe\u7f6e\u4e0d\u751f\u6548\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.4.20 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.18.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u8bed\u97f3\u9891\u9053\u65b0\u589e\u7ba1\u7406\u5458\u6279\u91cf\u79fb\u52a8\u529f\u80fd",
                "\u7528\u6237\u53ef\u4ee5\u9080\u8bf7\u597d\u53cb\u52a0\u5165\u81ea\u5df1\u6240\u5728\u8bed\u97f3\u9891\u9053",
                "PC\u7aef\u589e\u52a0\u9ea6\u514b\u98ce\u52a0\u5f3a\u529f\u80fd",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u9ad8\u8d28\u91cf\u8bed\u97f3\u9891\u9053\u7684\u97f3\u8d28",
                "\u4f18\u5316\u4e86\u6e38\u620f\u52a8\u6001\u7684\u5c55\u793a\u903b\u8f91",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5c4f\u853d\u6d88\u606f\u5c55\u5f00\u65f6\u88ab\u906e\u6321\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u81ea\u5b9a\u4e49\u6e38\u620f\u52a8\u6001\u65f6\u4e0d\u5c55\u793a\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.4.14 \u66f4\u65b0\u8bb0\u5f55\uff080.0.17.5\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u6682\u65f6\u53d6\u6d88\u4e86\u622a\u56fe\u529f\u80fd",
                "\u4fee\u590d\u4e86\u90e8\u5206\u7528\u6237\u7684\u84dd\u5c4f\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.4.13 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.17.4\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "PC\u7aef\u65b0\u589e\u300c\u786c\u4ef6\u52a0\u901f\u300d\u5f00\u5173\uff0c\u4ee5\u89e3\u51b3\u6e38\u620f\u6027\u80fd\u5e72\u6270\u95ee\u9898",
                "QoS\u6570\u636e\u6536\u96c6\u9879\u76ee\u66f4\u6539",
                "\u65b0\u589e\u4e3e\u62a5\u6d88\u606f\u529f\u80fd",
                "\u65b0\u589e\u624b\u673a\u7aef\u4e0b\u8f7d\u5f15\u5bfc",
                "\u4f18\u5316\u4e86\u624b\u673a\u7aef\u5728\u7ebf\u63d0\u793a",
                "\u5f53\u5c4f\u853d\u67d0\u4e2a\u7528\u6237\u65f6\uff0c\u6587\u5b57\u9891\u9053\u4e2d\u51fa\u73b0\u5c4f\u853d\u63d0\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u97f3\u4e50\u52a8\u6001\u97e9\u6587\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u97f3\u4e50\u52a8\u6001\u7279\u6b8a\u60c5\u51b5\u4e0b\u8bc6\u522b\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u670d\u52a1\u5668\u8e22\u51fa\u7528\u6237\u540e\u5237\u65b0\u672a\u5373\u65f6\u751f\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79bb\u7ebf\u7528\u6237\u4f9d\u7136\u663e\u793a\u5728\u73a9\u4ec0\u4e48\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86PC\u7aef\u7a97\u53e3\u7f29\u5c0f\u540e\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u4e0a\u4f20\u56fe\u7247\u540e\u6635\u79f0\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8f93\u5165\u6846\u4e2d\u62fc\u97f3\u8f93\u5165\u6cd5\u7684\u906e\u6321\u95ee\u9898",
                "\u4fee\u590d\u4e86\u5207\u6362\u9891\u9053\u65f6\u672a\u76f4\u63a5\u663e\u793a\u6700\u65b0\u6d88\u606f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u65b0\u6d88\u606f\u767d\u70b9\u65e0\u6cd5\u6d88\u9664\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u90e8\u5206\u7528\u6237\u70b9\u51fb\u8868\u60c5\u65f6\u51fa\u73b0\u7684\u5d29\u6e83\u95ee\u9898",
                "\u4fee\u590d\u4e86\u90e8\u5206\u7528\u6237\u65e0\u6cd5\u81ea\u52a8\u5347\u7ea7\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.4.11 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.17.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u590d\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8f93\u5165\u8f93\u51fa\u8bbe\u5907\u4e3a\u7a7a\u65f6\u7684\u95ea\u9000\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.4.10 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.17.2\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u8f93\u51fa\u97f3\u91cf\u7684\u5927\u5c0f",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86cpu\u5360\u7528\u7387\u8fc7\u9ad8\u65f6\u5bfc\u81f4\u58f0\u97f3\u5361\u987f\uff0c\u7535\u97f3\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.4.2 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.17.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u91c7\u96c6\u97f3\u4e50\u52a8\u6001\u8bf7\u6c42\u8fc7\u591a\u5bfc\u81f4\u670d\u52a1\u5668\u538b\u529b\u5927\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.4.1 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.17.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u589e\u52a0\u8bed\u97f3\u8d28\u91cfQoS\u7edf\u8ba1",
                "\u589e\u52a0\u670d\u52a1\u5668\u81ea\u5b9a\u4e49\u8868\u60c5",
                "\u589e\u52a0\u670d\u52a1\u5668\u81ea\u5b9a\u4e49\u6635\u79f0",
                "\u589e\u52a0\u670d\u52a1\u5668\u6392\u5e8f\u529f\u80fd",
                "PC\u7248\u589e\u52a0\u6b63\u5728\u542c\u7684\u97f3\u4e50\u52a8\u6001\u5c55\u793a",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u9891\u9053\u548c\u670d\u52a1\u5668\u62d6\u52a8\u6392\u5e8f\u7684\u4ea4\u4e92",
                "PC\u7248\u652f\u6301\u4e86\u9f20\u6807\u53f3\u952e\u83dc\u5355",
                "\u91cd\u65b0\u68b3\u7406\u6240\u6709\u6d6e\u5c42\u7684\u5f39\u51fa\u548c\u53d6\u6d88\u63d0\u793a\uff0c\u652f\u6301Esc\u952e\u53d6\u6d88",
                "\u6587\u5b57\u9891\u9053\u53d1\u5e03\u56fe\u7247\u65f6\u652f\u6301Enter\u4e0eEsc",
                "\u4f18\u5316\u4e86@\u4eba\u7684\u4ea4\u4e92",
                "\u4f18\u5316\u4e86MacOS\u4e0b\u82f1\u6587\u5b57\u4f53\u7684\u5c55\u793a",
                "\u589e\u52a0\u4e86\u6587\u5b57\u9891\u9053\u7684\u884c\u95f4\u8ddd",
                "\u6587\u5b57\u9891\u9053\u4efb\u4f55\u4f4d\u7f6e\u8f93\u5165\u90fd\u4f1a\u628a\u7126\u70b9\u5b9a\u4f4d\u5230\u6587\u5b57\u8f93\u5165\u6846",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u6309\u952e\u5ef6\u65f6\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u7684\u9519\u8bef\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.28 \u66f4\u65b0\u8bb0\u5f55 \uff08v0.0.16.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u8f93\u5165\u8bbe\u5907\u91c7\u6837\u7387\u8fc7\u9ad8\u5bfc\u81f4\u7684\u58f0\u97f3\u65e0\u6cd5\u91cd\u91c7\u6837\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.25 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.16.2\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u7528\u6237\u8bf4\u8bdd\u5bf9\u65b9\u542c\u4e0d\u5230\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u81ea\u52a8\u8bc6\u522b\u7684\u8f93\u5165\u8f93\u51fa\u8bbe\u5907\u4e0d\u591f\u51c6\u786e\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.23 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.16.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "PC\u7248\u652f\u6301\u9009\u62e9\u5b89\u88c5\u76ee\u5f55",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u7528\u6237\u8fdb\u5165\u8bed\u97f3\u8bbe\u7f6e\u5361\u6b7b\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u7528\u6237\u5728\u8bed\u97f3\u9891\u9053\u4e2d\u542c\u89c1\u56de\u58f0\u548c\u53d8\u97f3\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86B\u7ad9URL\u89e3\u6790\u5931\u8d25\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.19 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.16.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u8c03\u6574\u8f93\u5165\u4e0e\u8f93\u51fa\u97f3\u91cf\u529f\u80fd",
                "\u65b0\u589e\u8bed\u97f3\u7075\u654f\u5ea6\u8bc6\u522b\u529f\u80fd",
                "\u65b0\u589e\u6309\u952e\u8bf4\u8bdd\u653e\u5f00\u5ef6\u8fdf\u529f\u80fd",
                "\u65b0\u589ePC\u7248\u7528\u6237\u4e0a\u4f20Debug\u65e5\u5fd7\u7684\u529f\u80fd",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u7528\u6237\u8bbe\u7f6e\u8033\u673a\u9759\u97f3\u65f6\u4f1a\u63d0\u793a\u9891\u9053\u5185\u5176\u4ed6\u7528\u6237",
                "\u7528\u6237\u8bbe\u7f6e\u8033\u673a\u9759\u97f3\u65f6\u5bf9\u6240\u6709\u8f93\u51fa\u6d41\u751f\u6548",
                "\u7528\u6237\u8bbe\u7f6e\u6309\u952e\u8bf4\u8bdd\u65f6\u901a\u8fc7\u8bbe\u7f6e\u589e\u76ca\u751f\u6548\u800c\u4e0d\u662f\u9759\u97f3\u9ea6\u514b\u98ce\u751f\u6548",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u7528\u6237\u4f1a\u9891\u7e41\u91cd\u8fde\u8bed\u97f3\u9891\u9053\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u8bed\u97f3\u9891\u9053\u7528\u6237\u6570\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6587\u5b57\u9891\u9053\u65b0\u6d88\u606f\u63d0\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6587\u5b57\u9891\u9053\u672a\u8bfb\u6d88\u606f\u63d0\u9192\u65e0\u6cd5\u6d88\u9664\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u666e\u901a\u7528\u6237\u53ef\u4ee5\u5728\u53ea\u8bfb\u9891\u9053\u53d1\u8a00\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6587\u5b57\u9891\u9053\u4f1a\u53d1\u51fa\u63d0\u793a\u97f3\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.11 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.15.3\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u53d8\u66f4\u670d\u52a1\u5668\u533a\u57df\u540e\uff0c\u670d\u52a1\u5668\u5934\u50cf\u6d88\u5931\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7528\u6237\u6539\u540d\u540e\uff0c\u79c1\u4fe1\u5217\u8868\u6ca1\u6709\u540c\u6b65\u66f4\u65b0\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79c1\u4fe1\u65b0\u6d88\u606f\u63d0\u9192\u5728\u6d4f\u89c8\u5668Tab\u9875\u4e0a\u6ca1\u6709\u663e\u793a\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u79c1\u4fe1\u5217\u8868\u6392\u5e8f\u95ee\u9898\uff0c\u73b0\u5728\u6700\u65b0\u7684\u6d88\u606f\u90fd\u5728\u6700\u4e0a\u65b9",
                "\u4fee\u590d\u4e86\u4ece\u6587\u5b57\u9891\u9053\u53d1\u8d77\u79c1\u804a\u65f6\uff0c\u5185\u5bb9\u9519\u4e71\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8bed\u97f3\u9891\u9053\u4eba\u6570\u9650\u5236\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8bed\u97f3\u9891\u9053\u52a0\u5bc6\u5bc6\u7801\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u7528\u6237\u540d\u663e\u793a\u4e3a\u6570\u5b57\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u81ea\u5df1\u53d1\u5e03\u7684\u6d88\u606f\u88ab\u8bc6\u522b\u4e3a\u65b0\u6d88\u606f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u63d2\u5165\u65b0\u8bbe\u5907\u65f6\uff0c\u81ea\u52a8\u9009\u62e9\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8bed\u97f3\u9891\u9053\u4e2d\u7a81\u7136\u51fa\u73b0\u542c\u4e0d\u5230\u522b\u4eba\u8bf4\u8bdd\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.6 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.15.2\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u589e\u52a0\u670d\u52a1\u5668\u6240\u5728\u533a\u57df\u9009\u62e9<br />\u589e\u52a0\u4e86\u4e0a\u6d77/\u6210\u90fd/\u6df1\u5733/\u9999\u6e2f\u7684\u670d\u52a1\u5668\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u670d\u52a1\u5668\u6240\u5728\u533a\u57df\uff0c\u6311\u9009\u8fde\u63a5\u8d28\u91cf\u66f4\u597d\u7684\u7ebf\u8def\uff0c\u6d77\u5916\u7528\u6237\u5efa\u8bae\u8fde\u63a5\u9999\u6e2f\u670d\u52a1\u5668",
                "\u589e\u52a0\u8bbe\u5907\u53d8\u66f4\u65f6\u7684\u63d0\u793a\u9762\u677f\uff0c\u7528\u6237\u53ef\u4ee5\u7acb\u523b\u68c0\u67e5\u548c\u53d8\u66f4\u751f\u6548\u8bbe\u5907",
                "\u589e\u52a0\u4e86\u5e2e\u52a9\u5165\u53e3\uff0c\u7528\u6237\u53ef\u4ee5\u968f\u65f6\u8054\u7cfb\u5230\u6211\u4eec",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u79c1\u4fe1\u754c\u9762\u901a\u8fc7\u597d\u53cb\u7684\u6d88\u606f\u65e0\u6cd5\u5df2\u8bfb\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6587\u5b57\u9891\u9053\u5934\u90e8\u63d0\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u591a\u7aef\u540c\u65f6\u4f1a\u8bdd\u65f6\uff0c\u79c1\u4fe1\u5217\u8868\u51fa\u73b0\u81ea\u5df1\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u597d\u53cb\u5728\u7ebf\u5217\u8868\u6ca1\u6709\u5373\u65f6\u5237\u65b0\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u9ea6\u514b\u98ce\u6d4b\u8bd5\u65f6\u6ca1\u6709\u505a\u964d\u566a\u548c\u56de\u58f0\u6d88\u9664\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u4e22\u5305\u7387\u7edf\u8ba1\u53ef\u80fd\u51fa\u73b0NaN\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.5 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.15.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u79c1\u804a\u4e0e\u6587\u5b57\u9891\u9053\u6df7\u6dc6\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86PC\u7aef\u4e0e\u7f51\u9875\u7aef\u540c\u65f6\u79c1\u804a\u65f6\u51fa\u9519\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.4 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.15.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u4e86\u79c1\u4fe1\u529f\u80fd",
                "\u65b0\u589e\u4e86\u597d\u53cb\u529f\u80fd",
                "\u65b0\u589e\u4e86\u5c4f\u853d\u7528\u6237\u529f\u80fd",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u81ea\u5efa\u8bed\u97f3\u670d\u52a1\u5668\u5ef6\u65f6\u548c\u4e22\u5305\u7edf\u8ba1\u4e0d\u51c6\u786e\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.3.2 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.14.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u4e3b\u52a8\u9759\u97f3\u5176\u4ed6\u7528\u6237\u589e\u52a0\u64cd\u4f5c\u53cd\u9988",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8bbe\u7f6e\u7528\u6237\u97f3\u91cf\u65e0\u6cd5\u4fdd\u5b58\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u81ea\u5efa\u8bed\u97f3\u670d\u52a1\u5668\u91cd\u8fde\u62a5\u9519\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.2.29 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.14.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u5c0f\u6d41\u91cf\u4e0a\u7ebf\u81ea\u5efa\u8bed\u97f3\u670d\u52a1\u5668",
              ],
            },
          ],
        },
        {
          date: "2020.2.24 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.13.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u4e86\u5fae\u4fe1\u548cQQ\u7684\u7b2c\u4e09\u65b9\u8d26\u53f7\u7ed1\u5b9a\u4e0e\u5feb\u901f\u767b\u5f55",
                "\u65b0\u589e\u4e86\u6587\u4ef6\u4e0a\u4f20\uff0c\u73b0\u5728\u4e0d\u4ec5\u53ef\u4ee5\u4e0a\u4f20\u56fe\u7247\uff0c\u4e5f\u53ef\u4ee5\u4e0a\u4f20\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0cMP4\u7c7b\u578b\u53ef\u4ee5\u76f4\u63a5\u64ad\u653e",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u670d\u52a1\u5668\u9891\u9053\u6027\u80fd\uff0c\u51cf\u5c11\u4e86\u56e0\u5728\u7ebf\u4eba\u6570\u8f83\u591a\u5bfc\u81f4\u7684\u5361\u987f",
                "\u4fee\u590d\u4e86\u9080\u8bf7\u81f3\u52a0\u5bc6\u8bed\u97f3\u9891\u9053\u65f6\uff0c\u65e0\u6cd5\u6b63\u786e\u5230\u8fbe\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.2.14 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.12.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u670d\u52a1\u5668\u521b\u5efa\u8005\u548c\u7ba1\u7406\u5458\u53ef\u4ee5\u8bbe\u7f6e\u670d\u52a1\u5668\u901a\u77e5\u8bbe\u5b9a\uff0c\u9ed8\u8ba4\u53ea\u6709\u88ab@\u5230\u624d\u4f1a\u901a\u77e5",
                "\u7528\u6237\u53ef\u4ee5\u4fee\u6539\u670d\u52a1\u5668\u7684\u901a\u77e5\u8bbe\u5b9a\uff0c\u652f\u6301\u5168\u90e8\u901a\u77e5\uff0c\u88ab@\u5230\u901a\u77e5\u548c\u65e0\u901a\u77e5",
                "\u670d\u52a1\u5668\u521b\u5efa\u8005\u548c\u7ba1\u7406\u5458\u53ef\u4ee5\u5728\u6587\u5b57\u9891\u9053at\u5168\u4f53\u6210\u5458",
                '\u589e\u52a0\u4e86Emoji\u8868\u60c5\u8f93\u5165\u548c\u5c55\u793a\uff0c\u5f00\u9ed1\u5566\u4f7f\u7528 <a class="app-kaihei-link" target="_blank" href="https://twemoji.twitter.com/">Twitter Emoji</a> \u4f5c\u4e3aWindows\u7aef\u4e0eMac\u7aef\u7684Emoji\u5c55\u793a',
                "\u6587\u5b57\u9891\u9053\u81ea\u52a8\u89e3\u6790\u56fe\u7247\u548cgif",
                "\u6587\u5b57\u9891\u9053\u81ea\u52a8\u89e3\u6790Bilibili\u89c6\u9891\u8be6\u60c5\u9875\u5e76\u652f\u6301\u5d4c\u5165\u64ad\u653e",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8f93\u5165\u591a\u6761URL\u65f6\uff0c\u65e0\u6cd5\u6b63\u786e\u89e3\u6790\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6587\u5b57\u9891\u9053@\u7528\u6237\u65f6\uff0c\u65e0\u6cd5\u5faa\u73af\u4e0a\u4e0b\u9009\u62e9\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6587\u5b57\u9891\u9053@\u7528\u6237\u65f6\uff0c\u9009\u62e9\u51fa\u9519\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.2.8 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.11.1\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8d85\u94fe\u63a5\u548c\u56fe\u7247\u7f6e\u9876\u65f6\u65e0\u6cd5\u6b63\u5e38\u663e\u793a\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.2.8 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.11.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u7ba1\u7406\u5458\u53ef\u4ee5\u5c06\u6587\u5b57\u9891\u9053\u8bbe\u7f6e\u4e3a\u53ea\u8bfb",
                "\u65b0\u589e\u7ba1\u7406\u5458\u53ef\u4ee5\u7f6e\u9876\u6587\u5b57\u9891\u9053\u4e2d\u6d88\u606f",
                "\u65b0\u589e\u7ba1\u7406\u5458\u53ef\u4ee5\u4e3a\u8bed\u97f3\u9891\u9053\u589e\u52a0\u8fdb\u5165\u5bc6\u7801",
              ],
            },
          ],
        },
        {
          date: "2020.2.5 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.10.4\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u9488\u5bf9PUBG\u8bef\u5c01\u95ee\u9898\uff0c\u6e38\u620f\u5185\u8986\u76d6\u5728\u8be5\u6e38\u620f\u65f6\u4e0d\u518d\u751f\u6548",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u8f93\u5165&\u7b26\u53f7\u88ab\u8f6c\u4e49\u6210>\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6587\u5b57\u9891\u9053\u4e2d\u81ea\u5df1\u53d1\u9001\u7684\u6d88\u606f\u4f1a\u88ab\u663e\u793a\u4e3a\u65b0\u6d88\u606f\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.1.17 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.10.3\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u6e38\u620f\u5185\u8986\u76d6\u5bf9\u5168\u4f53\u7528\u6237\u5f00\u653e",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u90e8\u5206\u6e38\u620f\u5168\u5c4f\u6a21\u5f0f\u4e0b\u6e38\u620f\u5185\u8986\u76d6\u4e0d\u663e\u793a\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8bbe\u7f6e\u901a\u77e5\u58f0\u97f3\u65f6\u4e0d\u751f\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8bbe\u7f6e\u901a\u77e5\u58f0\u97f3\u540e\u81ea\u52a8\u767b\u5f55\u5931\u6548\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6309\u952e\u8bf4\u8bdd\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u5931\u6548\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.1.16 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.10.2\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u7ba1\u7406\u5458\u53ef\u4ee5\u5c06\u7528\u6237\u8e22\u51fa\u8bed\u97f3\u9891\u9053\u4ee5\u53ca\u79fb\u52a8\u5230\u5176\u4ed6\u8bed\u97f3\u9891\u9053\u529f\u80fd",
                "\u65b0\u589e\u6587\u5b57\u9891\u9053\u540c\u4e00\u7528\u6237\u6587\u5b57\u6d88\u606f\u5408\u5e76\u529f\u80fd",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u6e38\u620f\u5185\u8986\u76d6\u5728\u5207\u6362\u6e38\u620f\u5206\u8fa8\u7387\u65f6\u53ef\u80fd\u4e0d\u5c55\u793a\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6e38\u620f\u5185\u8986\u76d6\u5728\u522b\u4eba\u4fee\u6539\u5934\u50cf\u548c\u6635\u79f0\u65f6\u672a\u53ca\u65f6\u540c\u6b65\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.1.15 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.10.1\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u653e\u5f00\u4e86\u6e38\u620f\u5185\u8986\u76d65\u4e2a\u4eba\u7684\u9650\u5236\u663e\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u5207\u6362\u51fa\u6765\u8c03\u6574\u4f4d\u7f6e\u8bbe\u7f6e\u540e\u518d\u5207\u6362\u56de\u6e38\u620f\uff0c\u6e38\u620f\u5185\u8986\u76d6\u4e0d\u51fa\u73b0\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.1.13 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.10.0\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u4e86\u9ea6\u514b\u98ce\u8f93\u5165\u97f3\u91cf\u8c03\u6574\u529f\u80fd",
                "\u65b0\u589e\u4e86\u8bed\u97f3\u8bc6\u522b\u654f\u611f\u5ea6\u9608\u503c\u529f\u80fd\uff0c\u8d85\u8fc7\u8bbe\u7f6e\u9608\u503c\u624d\u4f1a\u5f00\u542f\u8bed\u97f3\u63a8\u6d41",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u6240\u6709\u7528\u6237\u9ed8\u8ba4\u5f00\u542f\u8bed\u97f3\u9891\u9053\u5e38\u9a7b",
                "\u4f18\u5316\u4e86\u8bed\u97f3\u8bbe\u7f6e\u7684UI",
                "\u4f18\u5316\u4e86\u6e38\u620f\u5185\u8986\u76d6\u7684\u4f53\u9a8c\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4f4d\u7f6e\u548c\u5927\u5c0f",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86\u90e8\u5206\u7528\u6237\u6253\u5f00\u767d\u5c4f\u65e0\u54cd\u5e94\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u90e8\u5206\u7528\u6237\u6309\u952e\u8bf4\u8bdd\u5931\u6548\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2020.1.6 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.9\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u4e86\u670d\u52a1\u5668\u7ba1\u7406\u5458<br />\u73b0\u5728\u670d\u52a1\u5668\u521b\u5efa\u8005\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u4e2d\u8bbe\u7f6e\u7ba1\u7406\u5458\uff0c\u7ba1\u7406\u5458\u62e5\u6709\u4e0e\u521b\u5efa\u8005\u76f8\u540c\u7684\u6743\u9650\uff0c\u540c\u65f6\u5728\u670d\u52a1\u5668\u8bbe\u7f6e\u4e2d\u65b0\u589e\u4e86\u7ba1\u7406\u65e5\u5fd7",
                "\u65b0\u589e\u4e86\u6697\u591c\u6a21\u5f0f\u5916\u89c2<br />\u73b0\u5728\u9ed8\u8ba4\u5916\u89c2\u88ab\u5b9a\u4e49\u4e3a\u6697\u591c\u6a21\u5f0f\u5916\u89c2\uff0c\u6240\u6709\u4eba\u53ef\u4ee5\u5728\u4e2a\u4eba\u8bbe\u7f6e\u7684\u5916\u89c2\u83dc\u5355\u4e2d\u8fdb\u884c\u9009\u62e9",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u7f16\u8f91\u4e2a\u4eba\u8d44\u6599\u65f6\u4e0a\u4f20\u5934\u50cf\u7684\u4ea4\u4e92",
                "\u4f18\u5316\u4e86\u95ed\u9ea6\u63d0\u793a\uff0c\u81ea\u5df1\u4e5f\u80fd\u770b\u5230\u9891\u9053\u4e2d\u81ea\u5df1\u7684\u72b6\u6001",
                "\u4f18\u5316\u4e86\u6587\u5b57\u9891\u9053\u4e2d\u7684\u6635\u79f0\u663e\u793a\u6837\u5f0f",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86PC\u7248\u4e2d\u88ab\u9080\u8bf7\u52a0\u5165\u670d\u52a1\u5668\u65f6\uff0c\u4eba\u6570\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u670d\u52a1\u5668\u521b\u5efa\u8005\u6807\u5fd7\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u90e8\u5206\u7528\u6237\u6253\u5f00PC\u7248\u65f6\u62a5\u9519\u7684\u95ee\u9898\uff08\u611f\u8c224Tequila\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u8bed\u97f3\u8bbe\u5907\u53d8\u66f4\u4fdd\u5b58\u663e\u793a\u9519\u8bef\u7684\u95ee\u9898\uff08\u611f\u8c22\u4f2f\u7fce\u98de\u4e91\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u9000\u51fa\u518d\u767b\u5f55\u65f6\u8fde\u63a5\u5931\u8d25\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.12.31 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.8\uff09",
          updateContent: [
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86\u91c7\u96c6\u97f3\u9891\u6d41\u65f63A\u8bbe\u7f6e\u5931\u6548\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.12.30 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.7\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u4e86\u81ea\u52a8\u66f4\u65b0\u529f\u80fd\uff08PC\u7248\uff09",
                "\u65b0\u589e\u4e86\u8bed\u97f3\u8bbe\u7f6e\u4e2d\u8c03\u6574\u8f93\u5165\u97f3\u91cf\u4e0e\u8f93\u51fa\u97f3\u91cf\u7684\u529f\u80fd\uff08\u5efa\u8bae\u4f5c\u4e3a\u6700\u540e\u7684\u9009\u62e9\uff09",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u4e86\u6e38\u620f\u5185\u8986\u76d6\u6548\u679c\u7684\u53ca\u65f6\u6027",
                "\u4f18\u5316\u4e86\u672a\u8ba4\u8bc1\u7528\u6237\u7684\u8ba4\u8bc1\u5f15\u5bfc",
                "\u4f18\u5316\u4e86\u672a\u8ba4\u8bc1\u7528\u6237\u7684\u53d1\u8a00\u6846\u63d0\u9192",
                "\u4f18\u5316\u4e86\u51e0\u5904\u6587\u6848",
                "\u4f18\u5316\u4e86\u6587\u5b57\u9891\u9053\u53d1\u8a00\u65f6\u95f4\u7684\u5c55\u793a\u903b\u8f91",
                "\u4f18\u5316\u4e86\u9080\u8bf7\u94fe\u63a5\u53ef\u4ee5\u76f4\u63a5\u8df3\u8f6c\u5230\u76f8\u5e94\u6587\u5b57\u9891\u9053",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86\u9080\u8bf7\u94fe\u63a5\u5217\u8868\u7684\u7528\u6237\u540d\u6570\u5b57\u5c55\u793a\u9519\u8bef\u7684\u95ee\u9898\uff08\u611f\u8c22eki\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u6587\u5b57\u9891\u9053\u8f93\u5165\u6846\u591a\u884c\u663e\u793a\u4e0d\u5168\u7684\u95ee\u9898\uff08\u611f\u8c22\u6708\u997c\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u6587\u5b57\u9891\u9053\u56fe\u7247\u88ab\u653e\u5927\u65f6\uff0c\u53ef\u4ee5\u591a\u6b21\u901a\u8fc7\u56de\u8f66\u8f7d\u5165\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u8bed\u97f3\u9891\u9053\u4e4b\u95f4\u5207\u6362\u65f6\uff0c\u5076\u5c14\u4f1a\u4e32\u97f3\u7684\u95ee\u9898\uff08\u611f\u8c22\u4e3f\u7b80\u5355\u5c31\u597d\u706c\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u6e38\u620f\u68c0\u6d4b\u811a\u672c\u5728\u90e8\u5206win7\u7cfb\u7edf\u4e0a\u62a5\u9519\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u6309\u952e\u8bf4\u8bdd\u65f6\uff0c\u518d\u6309\u4e0b\u5176\u4ed6\u952e\u4e5f\u4f1a\u53d1\u51fa\u63d0\u793a\u97f3\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u4fee\u6539\u7528\u6237\u6635\u79f0\u540e\uff0c\u6e38\u620f\u5185\u8986\u76d6\u6ca1\u6709\u540c\u6b65\u4fee\u6539\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u91cd\u65b0\u767b\u5f55\u540e\uff0c\u4e00\u952e\u95ed\u9ea6\u5feb\u6377\u952e\u5931\u6548\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.12.23 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.6\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                {
                  title:
                    "\u65b0\u589e\u8bed\u97f3\u9644\u5c5e\u529f\u80fd\uff1a",
                  list: [
                    "\u5141\u8bb8\u7528\u6237\u65e0\u9650\u5236\u9a7b\u7559\u8bed\u97f3\u9891\u9053\uff08\u9700\u7d2f\u8ba1\u9080\u8bf72\u540d\u8ba4\u8bc1\u7528\u6237\uff09",
                    "\u5141\u8bb8\u7528\u6237\u5f00\u542f\u6e38\u620f\u5185\u8986\u76d6\uff08\u9700\u7d2f\u8ba1\u9080\u8bf75\u540d\u8ba4\u8bc1\u7528\u6237\uff0c\u9700PC\u7248\u5ba2\u6237\u7aef\uff09",
                  ],
                },
                "\u65b0\u589e\u901a\u77e5\u8bbe\u7f6e\uff0c\u5141\u8bb8\u7528\u6237\u5173\u95ed\u684c\u9762\u6d88\u606f\u63d0\u793a\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u63d0\u793a\u97f3\u8fdb\u884c\u5f00\u5173",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u5b8c\u5584\u4e86\u6e38\u620f\u52a8\u6001\u76d1\u63a7\uff0c\u8986\u76d6\u5f53\u524d\u4e3b\u6d41\u6e38\u620f",
                "\u5f53\u6e38\u620f\u52a8\u6001\u76d1\u63a7\u7ec4\u4ef6\u672a\u5b89\u88c5\u65f6\uff0c\u63d0\u793a\u5b89\u88c5\u65b9\u5f0f",
                "\u6309\u952e\u8bf4\u8bdd\u652f\u6301\u9f20\u6807\u5de6\u53f3\u952e\uff0c\u540c\u65f6\u5c4f\u853d\u4e86\u4fa7\u952e\u7684\u524d\u8fdb\u540e\u9000\u6548\u679c",
                "\u4f18\u5316\u4e86\u65b0\u7528\u6237\u6ce8\u518c\u767b\u5f55\u540e\u5f15\u5bfc\u63d0\u793a",
                "\u4f18\u5316\u4e86\u521b\u5efa\u548c\u52a0\u5165\u670d\u52a1\u5668\u4ea4\u4e92\u6548\u679c",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86PC\u7aef\u6587\u5b57\u56fe\u7247\u65e0\u6cd5\u53d1\u9001\u7684\u95ee\u9898\uff08\u611f\u8c22\u6211\u4e0d\u662f\u51b0\u5c71\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u7528\u6237\u5217\u8868\u4e2d\u8fb9\u7f18\u4f4d\u7f6e\u53f3\u952e\u83dc\u5355\u663e\u793a\u4e0d\u5b8c\u5168\u7684\u95ee\u9898\uff08\u611f\u8c22eki\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u5f53\u7528\u6237\u7f3a\u4e4f\u5e94\u7528\u6e38\u620f\u52a8\u6001\u7684\u7ec4\u4ef6\u65f6\uff0c\u62a5\u9519\u7684\u95ee\u9898\uff08\u611f\u8c22\u7ea2\u5899\u767d\u96ea\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u6587\u5b57\u9891\u9053\u6d88\u606f\u672a\u5bf9\u9f50\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86PC\u5ba2\u6237\u7aef\uff0c\u9996\u6b21\u8fdb\u5165\u8bed\u97f3\u65f6\uff0c\u5207\u6362\u6309\u952e\u8bf4\u8bdd\u4e0d\u751f\u6548\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.12.16 \u66f4\u65b0\u8bb0\u5f55 \uff08v0.0.5\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u5141\u8bb8\u7528\u6237\u5728\u6587\u5b57\u9891\u9053\u4e2d\u63d0\u53ca\uff08@\uff09\u5176\u4ed6\u7528\u6237",
                "\u5f53\u7528\u6237\u6536\u5230\u63d0\u53ca\uff08@\uff09\u65f6\u5c55\u793a\u901a\u77e5",
                "\u5141\u8bb8\u7528\u6237\u540c\u6b65\u81ea\u5df1\u7684\u6e38\u620f\u52a8\u6001\uff08PC\u7248\uff09",
                "\u5141\u8bb8\u7528\u6237\u9009\u62e9\u4e00\u4e2a\u6e38\u620f\u8fdb\u7a0b\u5e76\u547d\u540d\uff08PC\u7248\uff09",
                "\u65b0\u589e\u4e86\u5bf9\u6240\u6709\u6587\u5b57\u9891\u9053\u7684\u65b0\u6d88\u606f\u63d0\u793a",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u53d6\u6d88\u4e86\u9080\u8bf7\u7801\u7cfb\u7edf\uff0c\u5c06\u9080\u8bf7\u5173\u7cfb\u7ee7\u627f\u81f3\u9080\u8bf7\u94fe\u63a5\u4e0a",
                "\u4f18\u5316\u4e86\u672a\u8ba4\u8bc1\u7528\u6237\u6ce8\u518c\u63d0\u793a\u7684\u4f4d\u7f6e",
                "\u4f18\u5316\u4e86\u6587\u5b57\u9891\u9053\u4e2d\u9080\u8bf7\u94fe\u63a5\u7684\u903b\u8f91\uff0c\u5141\u8bb8\u9080\u8bf7\u672a\u52a0\u5165\u8bed\u97f3\u9891\u9053\u7684\u7528\u6237\u52a0\u5165\u8be5\u9891\u9053",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86Firefox\u6d4f\u89c8\u5668\u90e8\u5206\u6309\u952e\u4e0d\u751f\u6548\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u91cd\u7f6e\u5bc6\u7801\u9875\u9762\u7c98\u8d34\u5feb\u6377\u952e\u51b2\u7a81\u7684\u95ee\u9898\uff08\u611f\u8c22ColdusT\u53d1\u73b0\u5e76\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u4fee\u6539\u8bed\u97f3\u9891\u9053\u4eba\u6570\u65f6\u672a\u5373\u65f6\u53d8\u66f4\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u4fee\u6539\u5206\u7ec4\u540d\uff0c\u5206\u7ec4\u9891\u9053\u4e22\u5931\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u5220\u9664\u5206\u7ec4\u65f6\uff0c\u9891\u9053\u5217\u8868\u672a\u5373\u65f6\u66f4\u65b0\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u90e8\u5206\u5206\u7ec4\u5185\uff0c\u6587\u5b57\u9891\u9053\u6392\u5e8f\u9519\u8bef\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.12.9 \u66f4\u65b0\u8bb0\u5f55 \uff08v0.0.4\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u5141\u8bb8\u7528\u6237\u5728\u6587\u5b57\u9891\u9053\u4e2d\u5220\u9664\u81ea\u5df1\u53d1\u7684\u804a\u5929\u8bb0\u5f55",
                "\u5141\u8bb8\u7528\u6237\u5728\u6587\u5b57\u9891\u9053\u4e2d\u4e0a\u4f20\u56fe\u7247\uff08\u9009\u62e9\u6587\u4ef6/\u62d6\u62fd/\u590d\u5236\uff09",
                "\u5141\u8bb8\u670d\u52a1\u5668\u7ba1\u7406\u8005\u8e22\u51fa\u7528\u6237",
                "\u5141\u8bb8\u670d\u52a1\u5668\u7ba1\u7406\u8005\u5c01\u7981\u7528\u6237",
                "\u5141\u8bb8\u670d\u52a1\u5668\u7ba1\u7406\u8005\u5220\u9664\u6587\u5b57\u9891\u9053\u7684\u6d88\u606f",
                "\u5141\u8bb8\u670d\u52a1\u5668\u7ba1\u7406\u8005\u5c06\u5df2\u7ecf\u751f\u6210\u9080\u8bf7\u94fe\u63a5\u5931\u6548",
                "\u5141\u8bb8\u670d\u52a1\u5668\u7ba1\u7406\u8005\u5173\u95ed\u670d\u52a1\u5668\u4e2d\u6210\u5458\u7684\u9080\u8bf7\u6743\u9650",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u6309\u952e\u8bf4\u8bdd\u652f\u6301\u7ec4\u5408\u952e\uff08Web\u7248\uff09+\u9f20\u6807\u4fa7\u952e\uff08PC\u7248\uff09\uff08\u611f\u8c22\u5c0f\u4e03\u4ed4\u7684\u5efa\u8bae\uff09",
                "PC\u7248\u5b89\u88c5\u5305\u5b89\u88c5\u65f6\u4fee\u6539\u6587\u4ef6\u8def\u5f84\u4fdd\u7559\u76ee\u5f55\u540d\uff08\u611f\u8c22\u5c0f\u4e03\u4ed4\u7684\u5efa\u8bae\uff09",
                "\u8bed\u97f3\u9891\u9053\u518515\u5206\u949f\u65e0\u4eba\u8bf4\u8bdd\uff0c\u81ea\u52a8\u9000\u51fa\u9891\u9053",
                "\u542f\u52a8\u65f6\u589e\u52a0\u4e86\u7ecf\u5178\u6e38\u620f\u53f0\u8bcd\u7684\u5c55\u793a",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86\u9891\u9053\u6392\u5e8f\u65f6\uff0c\u65e0\u6cd5\u5c06\u6587\u5b57\u9891\u9053\u62d6\u52a8\u5230\u7a7a\u5206\u7ec4\u4e2d\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u5173\u95ed\u6d4f\u89c8\u5668\uff08\u5ba2\u6237\u7aef\uff09\u540e\uff0c\u6ca1\u6709\u6b63\u5e38\u9000\u51fa\u8bed\u97f3\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u79bb\u5f00\u670d\u52a1\u5668\uff0c\u6ca1\u6709\u6b63\u5e38\u9000\u51fa\u8bed\u97f3\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u8f6f\u4ef6\u4e00\u76f4\u5360\u7528\u9ea6\u514b\u98ce\u7684\u95ee\u9898\uff08\u611f\u8c22K\u7684\u53cd\u9988\uff09",
                "\u4fee\u6b63\u4e86\u7528\u6237\u540d\u5305\u542bemoji\u65f6\uff0c\u6587\u5b57\u6d88\u606f\u663e\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u65b0\u5efa\u670d\u52a1\u5668\u6587\u5b57\u9891\u9053\u8bf4\u660e\u680f\u7f3a\u5931\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u9ea6\u514b\u98ce\u6d4b\u8bd5\u65f6\u97f3\u91cf\u53cd\u5e94\u8fdf\u7f13\u7684\u95ee\u9898\uff08Web\u7248\uff09",
              ],
            },
          ],
        },
        {
          date: "2019.12.2 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.3\uff09",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u65b0\u589e\u4e86\u9891\u9053\u5206\u7ec4\uff0c\u73b0\u5728\u53ef\u4ee5\u5c06\u5404\u7c7b\u9891\u9053\u4ee5\u5206\u7ec4\u7684\u65b9\u5f0f\u7ec4\u7ec7\u4e86",
                "\u5141\u8bb8\u670d\u52a1\u5668\u62e5\u6709\u8005\u957f\u6309\u9891\u9053\u6765\u62d6\u62fd\u6392\u5e8f",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u53f3\u952e\u9891\u9053\u53ef\u4ee5\u76f4\u63a5\u5f00\u542f\u64cd\u4f5c\u83dc\u5355",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u590d\u4e86PC\u5ba2\u6237\u7aef\u8fdb\u5165\u9891\u9053\u540e\u5076\u5c14\u4f1a\u4e0d\u663e\u793a\u4e2a\u4eba\u4fe1\u606f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86PC\u5ba2\u6237\u7aef\u5728\u6e38\u73a9LOL\u65f6\u5f39\u51fa\u9519\u8bef\u63d0\u793a\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u4e00\u4e2a\u4e25\u91cd\u4e14\u4f4e\u7ea7\u7684\u95ee\u9898\uff08\u611f\u8c22Starxy\u53cd\u9988\u544a\u77e5\uff09",
                "\u4fee\u590d\u4e86\u79bb\u5f00\u670d\u52a1\u5668\u540e\u672a\u81ea\u52a8\u79bb\u5f00\u8bed\u97f3\u9891\u9053\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u90e8\u5206\u624b\u673a\u53f7\u7801\u6bb5\u65e0\u6cd5\u6ce8\u518c\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6587\u5b57\u9891\u9053\u8bf4\u660e\u663e\u793a\u957f\u5ea6\u8fc7\u77ed\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u8d26\u53f7\u9a8c\u8bc1\u73af\u8282\u624b\u673a\u6ce8\u518c\u65f6\uff0c\u70b9\u51fb\u9762\u677f\u5916\u533a\u57df\u4f1a\u610f\u5916\u5173\u95ed\u9762\u677f\u7684\u95ee\u9898",
                "\u4fee\u590d\u4e86\u6587\u5b57\u8f93\u5165\u6846\u4e2d\u6587\u5b57\u5b57\u4f53\u4e0e\u5c55\u793a\u5b57\u4f53\u4e0d\u4e00\u81f4\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.11.26 \u66f4\u65b0\u8bb0\u5f55\uff08v0.0.1\uff09",
          updateContent: [
            {
              title: "\u4ea7\u54c1\u53d1\u5e03\uff1a",
              list: [
                "Windows\u5ba2\u6237\u7aef\u7b2c\u4e00\u7248\u53d1\u5e03\uff08\u5c01\u95ed\u6d4b\u8bd5\uff09",
              ],
            },
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: ["\u65b0\u589e\u4e86\u4ea7\u54c1\u66f4\u65b0\u8bb0\u5f55"],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u9080\u8bf7\u7801\u590d\u5236\u65b0\u589e\u63cf\u8ff0\u6587\u6848\uff0c\u7b80\u5316\u5206\u4eab\u64cd\u4f5c\uff08\u611f\u8c22265\u540c\u5b66\u7684\u5efa\u8bae\uff09",
              ],
            },
          ],
        },
        {
          date: "2019.11.21 \u66f4\u65b0\u8bb0\u5f55 (v0.0.0.4)",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u5728\u8bed\u97f3\u9891\u9053\u5185\u53ef\u4ee5\u76f4\u63a5\u53f3\u952e\u5176\u4ed6\u7528\u6237\uff0c\u6253\u5f00\u83dc\u5355\u8c03\u8282\u97f3\u91cf",
              ],
            },
            {
              title: "\u529f\u80fd\u4f18\u5316\uff1a",
              list: [
                "\u4f18\u5316\u9891\u9053\u5217\u8868\u9875\u4ea4\u4e92\u6548\u679c",
                "\u4f18\u5316\u8bbe\u7f6e\u83dc\u5355\u7684\u4ea4\u4e92\u6548\u679c",
                "\u4f18\u5316\u4e86\u9f20\u6807\u53f3\u952e\u52a8\u4f5c\uff0c\u5c4f\u853d\u6d4f\u89c8\u5668\u53f3\u952e\u83dc\u5355\u7684\u5e72\u6270",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86\u70b9\u51fb\u5df2\u52a0\u5165\u8bed\u97f3\u9891\u9053\u4f1a\u91cd\u590d\u8fde\u63a5\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u5728\u767b\u5f55\u72b6\u6001\u4e0b\uff0c\u9996\u9875\u70b9\u51fb\u300c\u7acb\u5373\u5f00\u9ed1\u300d\u65e0\u6cd5\u6b63\u786e\u8df3\u8f6c\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u79bb\u7ebf\u7528\u6237\u4f9d\u7136\u663e\u793a\u5728\u7ebf\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.11.19 \u66f4\u65b0\u8bb0\u5f55 (v0.0.0.3)",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u6587\u5b57\u9891\u9053\u5185\u53ef\u4ee5\u76f4\u63a5\u663e\u793a\u9080\u8bf7\u94fe\u63a5\u5185\u5bb9\uff0c\u5e76\u52a0\u5165\u9891\u9053",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86\u9080\u8bf7\u94fe\u63a5\u70b9\u51fb\u4e4b\u540e\u65e0\u6cd5\u6b63\u786e\u8bc6\u522b\u767b\u5f55\u72b6\u6001\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u52a0\u5165\u9000\u51fa\u670d\u52a1\u5668\u6536\u4e0d\u5230\u901a\u77e5\u6d88\u606f\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u8fde\u63a5\u8bca\u65ad\u4e2d\u9891\u9053\u7528\u6237\u5c55\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898",
                "\u4fee\u6b63\u4e86\u7b2c\u4e09\u65b9\u5de5\u5177\u4e0d\u65ad\u4ea7\u751f\u65e5\u5fd7\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.11.15 \u66f4\u65b0\u8bb0\u5f55 (v0.0.0.2)",
          updateContent: [
            {
              title: "\u529f\u80fd\u65b0\u589e\uff1a",
              list: [
                "\u589e\u52a0\u4e86\u6ce8\u518c\u8303\u56f4\uff0c\u73b0\u5728\u652f\u6301\u5168\u4e16\u754c185\u4e2a\u5730\u533a\u7684\u624b\u673a\u6ce8\u518c",
                "\u5404\u4e2a\u8bbe\u7f6e\u9875\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7ESC\u952e\u5173\u95ed",
              ],
            },
            {
              title: "\u95ee\u9898\u4fee\u6b63\uff1a",
              list: [
                "\u4fee\u6b63\u4e86\u914d\u7f6e\u9875\u9000\u51fa\u6309\u94ae\u4e0d\u660e\u663e\u7684\u95ee\u9898",
              ],
            },
          ],
        },
        {
          date: "2019.11.10 \u66f4\u65b0\u8bb0\u5f55 (v0.0.0.1)",
          updateContent: [
            {
              title: "",
              list: [
                "\u53d1\u5e03\u4e86\u300c\u5f00\u9ed1\u5566\u300d\u7b2c\u4e00\u4e2a\u7ebf\u4e0a\u7248\u672c",
              ],
            },
          ],
        },
      ];
    },
  },
  [[694, 11, 0, 2, 1, 3, 4]],
]);
//# sourceMappingURL=picture.342a3f78.chunk.js.map
