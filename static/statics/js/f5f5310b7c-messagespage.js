! function(n) {
    var o = {};

    function a(e) {
        var t;
        return (o[e] || (t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        }, n[e].call(t.exports, t, t.exports, a), t.l = !0, t)).exports
    }
    a.m = n, a.c = o, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) a.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 125)
}({
    0: function(e, t, n) {
        "use strict";

        function o(e) {
            var t = $("body").data("country-language-path");
            return t ? "/" + t + e : e
        }
        n.r(t), n.d(t, "createOneDomainUrl", function() {
            return o
        })
    },
    125: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ajaxSubmit", function() {
            return i
        });
        var t = n(2),
            a = n.n(t),
            o = n(0);

        function i(e) {
            return {
                type: "POST",
                url: Object(o.createOneDomainUrl)("/api/message-reply/"),
                cache: !1,
                data: e,
                beforeSend: function(xhr, settings) {
                    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                        var csrftoken = getCookie('csrftoken');
                        xhr.setRequestHeader('X-CSRFToken', csrftoken);
                    }
                },
                success: function(response) {
                    var newConversationItem = `
                <div class="conversation-item" bis_skin_checked="1">
                    <div class="message-box-wrapper" bis_skin_checked="1">
                        <div class="message-box" bis_skin_checked="1">
                            <p>${e.text}</p>
                        </div>
                        
                    </div>
                </div>
            `;
            $('#conversation-'+e.type).append(newConversationItem);

                }
            }
        }
        
            
        function csrfSafeMethod(method) {
            // These HTTP methods do not require CSRF protection
            return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
        }
        
        // Function to get the CSRF cookie value
        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();
                    // Check if the cookie name matches the desired name
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
        function r(e, t) {
            "on" === t ? (e.removeAttr("disabled").removeClass("disabled"), e.children(".send-reply-btn-spin").hide(), e.children(".send-reply-btn-text").show()) : "off" === t && (e.attr("disabled", "disabled").addClass("disabled"), e.children(".send-reply-btn-text").hide(), e.children(".send-reply-btn-spin").show())
        }

        function l(e, t) {
            var n = $("#TOKEN_REQUEST_FAILED").val();
            t && (n = t), a.a.fire({
                title: $("#ERROR_TITLE").val(),
                text: n,
                type: "error",
                showCancelButton: !1,
                onClose: function() {
                    window.location.href = e
                }
            })
        }

        function c() {
            var e = $("#recipient-name").val(),
                t = $("#subject-message").val(),
                n = $("#write-message").val(),
                o = $(".cta-submit-form");
            e.match(/^(?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF27\uDF30-\uDF54\uDF70-\uDF85\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC52-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])+$/) && "stuvia" !== e.toLowerCase() && 2 < e.length && 2 < t.length && 5 < n.length ? ($(".re-captcha-wrapper").slideDown(), u && o.removeAttr("disabled").removeClass("disabled")) : o.attr("disabled", "disabled").addClass("disabled")
        }

        function d() {
            $("html").addClass("prevent-scroll"), $("#popup-bericht-schrijf").addClass("popup--active")
        }
        var u = !1;
        window.recaptchaCheck = function() {
            u = !0, c()
        }, window.recaptchaExpired = function() {
            grecaptcha.reset()
        }, $(document).ready(function(u) {

            var s = u("body").data("token"),
                e = (u("#cta-send-message").on("click", function(e) {
                    e.preventDefault(), d()
                }), u(".popup-overlay .popup-overlay--close, .popup .btn-close-popup, .cta-reset-form").on("click", function(e) {
                    e.preventDefault(), u("html").removeClass("prevent-scroll"), u("#popup-bericht-schrijf").removeClass("popup--active")
                }), u(document).on("click", ".message-item", function() {
                    var e = u(this).data("message-id"),
                        t = u(this).data("message-seen"),
                        n = u(this);
                        //console.log("*********************8")
                        //alert("*********************8");
                    u(".conversation-wrapper").addClass(""), u("#convo-" + e).removeClass("hide-convo"), u(window).scrollTop(0), u(window).width() < 980 ? u("#content").addClass("content-wrapper--message") : (u(".message-item").removeClass("listing-item--current"), u(this).addClass("listing-item--current")), 0 !== t || n.hasClass("seen-is-set") || u.ajax(i({
                        csrf: s,
                        action: "update-message-seen",
                        messageId: e
                    })).done(function() {
                        
                        n.addClass("seen-is-set"), n.removeClass("listing-item--unseen")
                    })
                }), u("#cta-back-toinbox").on("click", function(e) {
                    e.preventDefault(), u("#content").removeClass("content-wrapper--message")
                }), u(document).on("click", ".cta-show-more", function() {
                    var e = u(this).data("group"),
                        e = (u(this).hide(), parseInt(e) + 1);
                    u(".show-more-" + e).removeClass("hide-load-more"), u(".message-item-" + e).removeClass("hide-list-item")
                // }), u(document).on("click", ".page-button", function() {
                //     u(".page-button").removeClass("item-filter--selected"), u(this).addClass("item-filter--selected");
                //     var t = u("#sidebar-section");
                //     u.ajax({
                //         type: "GET",
                //         url: Object(o.createOneDomainUrl)("/ajax-mvc/get-selected-messages"),
                //         data: {
                //             csrf: s,
                //             selected: u(this).data("selected")
                //         },
                //         dataType: "json",
                //         success: function(e) {
                //             console.log(e);
                //             0 === e.totalMessagesCount ? t.addClass("full-width") : t.removeClass("full-width"), e && !e.hasOwnProperty("error") && (u(".listing-inbox").html(e.messagesList), u(".conversation-wrapper").html(e.conversations), u(".messages-count").html(e.totalMessagesCount))
                //         }
                //     })
                }), u(document).on("click", ".delete-message", function() {
                    var t = u(this).data("message-id");
                    if (t) return a.a.fire({
                        title: "Are you Sure to Want to Delete: "+t.toUpperCase(),
                        confirmButtonText: 'Delete',
                        cancelButtonText: 'Cancel',
                        type: "warning",
                        showCancelButton: !0
                    }).then(function(e) {
                        e && e.hasOwnProperty("value") && !0 === e.value && u.ajax(i({
                            csrf: s,
                            action: "delete-message",
                            messageId: t
                        })).done(function() {
                            window.location.reload()
                        })
                    })
                }), u(document).on("click", ".send-reply", function() {
                    var t = u(this).data("message-id"),
                        e = u(this).data("message-type"),
                        n = u(this).data("message-send-to"),
                        o = u("#reply-message-" + t).val(),
                        a = u(this);
                    t && n && 2 < o.length && (r(a, "off"), u.ajax(i({
                        csrf: s,
                        action: "send-reply",
                        messageId: t,
                        text: o,
                        type: e,
                        sendTo: n
                    })).done(function(e) {
                        e && !e.hasOwnProperty("error") ? (u(".reply-messages").val(""), u(".entry-conversation-inbox").append(e.reply)) : l("/messages?id=" + t), r(a, "on")
                    }))
                }), u(document).on("keyup", ".input-send-form", function() {
                    c()
                }), u(document).on("click", ".cta-submit-form", function() {
                    var t = u("#recipient-name").val(),
                        e = u("#subject-message").val(),
                        n = u("#write-message").val(),
                        o = u(this),
                        o = (r(o, "off"), {
                            csrf: s,
                            action: "submit-new-message",
                            recipientName: t,
                            subject: e,
                            message: n,
                            "g-recaptcha-response": grecaptcha.getResponse()
                        });
                    u.ajax(i(o)).done(function(e) {
                        u("html").removeClass("prevent-scroll"), u("#popup-bericht-schrijf").removeClass("popup--active"), e && !e.hasOwnProperty("error") ? a.a.fire({
                            title: u("#MESSAGE_SENT").val(),
                            type: "success",
                            showCancelButton: !1,
                            onClose: function() {
                                window.location.href = "/messages?page=sent"
                            }
                        }) : l("/messages?sendto=" + t, e.error)
                    })
                }), u("#send-to-username"));
            0 < e.length && (e = e.val()) && (u("#recipient-name").val(e), d());
            if (u(window).width() < 980) {
                u("#cta-back-toinbox").trigger("click");
            }
            
        })
    },
    2: function(e, t, n) {
        if (e.exports = function() {
                "use strict";

                function u(e) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") u = function(e) {
                        return typeof e
                    };
                    else u = function(e) {
                        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    return u(e)
                }

                function z(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function I(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || false;
                        o.configurable = true;
                        if ("value" in o) o.writable = true;
                        Object.defineProperty(e, o.key, o)
                    }
                }

                function V(e, t, n) {
                    if (t) I(e.prototype, t);
                    if (n) I(e, n);
                    return e
                }

                function s() {
                    s = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n)
                                if (Object.prototype.hasOwnProperty.call(n, o)) e[o] = n[o]
                        }
                        return e
                    };
                    return s.apply(this, arguments)
                }

                function H(e, t) {
                    if (typeof t !== "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (t) i(e, t)
                }

                function a(e) {
                    a = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    };
                    return a(e)
                }

                function i(e, t) {
                    i = Object.setPrototypeOf || function e(t, n) {
                        t.__proto__ = n;
                        return t
                    };
                    return i(e, t)
                }

                function R() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                        return true
                    } catch (e) {
                        return false
                    }
                }

                function r(e, t, n) {
                    if (R()) r = Reflect.construct;
                    else r = function e(t, n, o) {
                        var a = [null];
                        a.push.apply(a, n);
                        var u = Function.bind.apply(t, a);
                        var s = new u;
                        if (o) i(s, o.prototype);
                        return s
                    };
                    return r.apply(null, arguments)
                }

                function q(e) {
                    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function _(e, t) {
                    if (t && (typeof t === "object" || typeof t === "function")) return t;
                    return q(e)
                }

                function U(e, t) {
                    while (!Object.prototype.hasOwnProperty.call(e, t)) {
                        e = a(e);
                        if (e === null) break
                    }
                    return e
                }

                function l(e, t, n) {
                    if (typeof Reflect !== "undefined" && Reflect.get) l = Reflect.get;
                    else l = function e(t, n, o) {
                        var a = U(t, n);
                        if (!a) return;
                        var u = Object.getOwnPropertyDescriptor(a, n);
                        if (u.get) return u.get.call(o);
                        return u.value
                    };
                    return l(e, t, n || e)
                }
                var $ = "SweetAlert2:",
                    N = function e(t) {
                        var n = [];
                        for (var o = 0; o < t.length; o++)
                            if (n.indexOf(t[o]) === -1) n.push(t[o]);
                        return n
                    },
                    Y = function e(t) {
                        return Object.keys(t).map(function(e) {
                            return t[e]
                        })
                    },
                    o = function e(t) {
                        return Array.prototype.slice.call(t)
                    },
                    c = function e(t) {
                        console.warn("".concat($, " ").concat(t))
                    },
                    d = function e(t) {
                        console.error("".concat($, " ").concat(t))
                    },
                    Z = [],
                    W = function e(t) {
                        if (!(Z.indexOf(t) !== -1)) {
                            Z.push(t);
                            c(t)
                        }
                    },
                    f = function e(t, n) {
                        W('"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(n, '" instead.'))
                    },
                    K = function e(t) {
                        return typeof t === "function" ? t() : t
                    },
                    X = function e(t) {
                        return t && Promise.resolve(t) === t
                    },
                    p = Object.freeze({
                        cancel: "cancel",
                        backdrop: "backdrop",
                        close: "close",
                        esc: "esc",
                        timer: "timer"
                    }),
                    Q = function e(n) {
                        var o = {};
                        switch (u(n[0])) {
                            case "object":
                                s(o, n[0]);
                                break;
                            default:
                                ["title", "html", "type"].forEach(function(e, t) {
                                    switch (u(n[t])) {
                                        case "string":
                                            o[e] = n[t];
                                            break;
                                        case "undefined":
                                            break;
                                        default:
                                            d("Unexpected type of ".concat(e, '! Expected "string", got ').concat(u(n[t])))
                                    }
                                })
                        }
                        return o
                    },
                    G = "swal2-",
                    J = function e(t) {
                        var n = {};
                        for (var o in t) n[t[o]] = G + t[o];
                        return n
                    },
                    m = J(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl"]),
                    D = J(["success", "warning", "info", "question", "error"]),
                    t = {
                        previousBodyPadding: null
                    },
                    w = function e(t, n) {
                        return t.classList.contains(n)
                    },
                    ee = function e(t) {
                        o(t.classList).forEach(function(e) {
                            if (!(Y(m).indexOf(e) !== -1) && !(Y(D).indexOf(e) !== -1)) t.classList.remove(e)
                        })
                    },
                    g = function e(t, n, o) {
                        ee(t);
                        if (n && n[o]) {
                            if (typeof n[o] !== "string" && !n[o].forEach) return c("Invalid type of customClass.".concat(o, '! Expected string or iterable object, got "').concat(u(n[o]), '"'));
                            h(t, n[o])
                        }
                    };

                function te(e, t) {
                    if (!t) return null;
                    switch (t) {
                        case "select":
                        case "textarea":
                        case "file":
                            return C(e, m[t]);
                        case "checkbox":
                            return e.querySelector(".".concat(m.checkbox, " input"));
                        case "radio":
                            return e.querySelector(".".concat(m.radio, " input:checked")) || e.querySelector(".".concat(m.radio, " input:first-child"));
                        case "range":
                            return e.querySelector(".".concat(m.range, " input"));
                        default:
                            return C(e, m.input)
                    }
                }
                var ne = function e(t) {
                        t.focus();
                        if (t.type !== "file") {
                            var n = t.value;
                            t.value = "";
                            t.value = n
                        }
                    },
                    oe = function e(n, t, o) {
                        if (!n || !t) return;
                        if (typeof t === "string") t = t.split(/\s+/).filter(Boolean);
                        t.forEach(function(t) {
                            if (n.forEach) n.forEach(function(e) {
                                o ? e.classList.add(t) : e.classList.remove(t)
                            });
                            else o ? n.classList.add(t) : n.classList.remove(t)
                        })
                    },
                    h = function e(t, n) {
                        oe(t, n, true)
                    },
                    b = function e(t, n) {
                        oe(t, n, false)
                    },
                    C = function e(t, n) {
                        for (var o = 0; o < t.childNodes.length; o++)
                            if (w(t.childNodes[o], n)) return t.childNodes[o]
                    },
                    ae = function e(t, n, o) {
                        if (o || parseInt(o) === 0) t.style[n] = typeof o === "number" ? o + "px" : o;
                        else t.style.removeProperty(n)
                    },
                    F = function e(t) {
                        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "flex";
                        t.style.opacity = "";
                        t.style.display = n
                    },
                    y = function e(t) {
                        t.style.opacity = "";
                        t.style.display = "none"
                    },
                    ue = function e(t, n, o) {
                        n ? F(t, o) : y(t)
                    },
                    v = function e(t) {
                        return !!(t && (t.offsetWidth || t.offsetHeight || t.getClientRects().length))
                    },
                    se = function e(t) {
                        return !!(t.scrollHeight > t.clientHeight)
                    },
                    ie = function e(t) {
                        var n = window.getComputedStyle(t);
                        var o = parseFloat(n.getPropertyValue("animation-duration") || "0");
                        var a = parseFloat(n.getPropertyValue("transition-duration") || "0");
                        return o > 0 || a > 0
                    },
                    re = function e(t, n) {
                        if (typeof t.contains === "function") return t.contains(n)
                    },
                    E = function e() {
                        return document.body.querySelector("." + m.container)
                    },
                    le = function e(t) {
                        var n = E();
                        return n ? n.querySelector(t) : null
                    },
                    n = function e(t) {
                        return le("." + t)
                    },
                    A = function e() {
                        return n(m.popup)
                    },
                    ce = function e() {
                        var t = A();
                        return o(t.querySelectorAll("." + m.icon))
                    },
                    de = function e() {
                        var t = ce().filter(function(e) {
                            return v(e)
                        });
                        return t.length ? t[0] : null
                    },
                    fe = function e() {
                        return n(m.title)
                    },
                    B = function e() {
                        return n(m.content)
                    },
                    pe = function e() {
                        return n(m.image)
                    },
                    me = function e() {
                        return n(m["progress-steps"])
                    },
                    De = function e() {
                        return n(m["validation-message"])
                    },
                    k = function e() {
                        return le("." + m.actions + " ." + m.confirm)
                    },
                    x = function e() {
                        return le("." + m.actions + " ." + m.cancel)
                    },
                    we = function e() {
                        return n(m.actions)
                    },
                    ge = function e() {
                        return n(m.header)
                    },
                    he = function e() {
                        return n(m.footer)
                    },
                    be = function e() {
                        return n(m.close)
                    },
                    Ce = '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
                    Fe = function e() {
                        var t = o(A().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e, t) {
                            e = parseInt(e.getAttribute("tabindex"));
                            t = parseInt(t.getAttribute("tabindex"));
                            if (e > t) return 1;
                            else if (e < t) return -1;
                            return 0
                        });
                        var n = o(A().querySelectorAll(Ce)).filter(function(e) {
                            return e.getAttribute("tabindex") !== "-1"
                        });
                        return N(t.concat(n)).filter(function(e) {
                            return v(e)
                        })
                    },
                    ye = function e() {
                        return !ve() && !document.body.classList.contains(m["no-backdrop"])
                    },
                    ve = function e() {
                        return document.body.classList.contains(m["toast-shown"])
                    },
                    Ee = function e() {
                        return A().hasAttribute("data-loading")
                    },
                    Ae = function e() {
                        return typeof window === "undefined" || typeof document === "undefined"
                    },
                    Be = '\n <div aria-labelledby="'.concat(m.title, '" aria-describedby="').concat(m.content, '" class="').concat(m.popup, '" tabindex="-1">\n   <div class="').concat(m.header, '">\n     <ul class="').concat(m["progress-steps"], '"></ul>\n     <div class="').concat(m.icon, " ").concat(D.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(m.icon, " ").concat(D.question, '"></div>\n     <div class="').concat(m.icon, " ").concat(D.warning, '"></div>\n     <div class="').concat(m.icon, " ").concat(D.info, '"></div>\n     <div class="').concat(m.icon, " ").concat(D.success, '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(m.image, '" />\n     <h2 class="').concat(m.title, '" id="').concat(m.title, '"></h2>\n     <button type="button" class="').concat(m.close, '"></button>\n   </div>\n   <div class="').concat(m.content, '">\n     <div id="').concat(m.content, '"></div>\n     <input class="').concat(m.input, '" />\n     <input type="file" class="').concat(m.file, '" />\n     <div class="').concat(m.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(m.select, '"></select>\n     <div class="').concat(m.radio, '"></div>\n     <label for="').concat(m.checkbox, '" class="').concat(m.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(m.label, '"></span>\n     </label>\n     <textarea class="').concat(m.textarea, '"></textarea>\n     <div class="').concat(m["validation-message"], '" id="').concat(m["validation-message"], '"></div>\n   </div>\n   <div class="').concat(m.actions, '">\n     <button type="button" class="').concat(m.confirm, '">OK</button>\n     <button type="button" class="').concat(m.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(m.footer, '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
                    ke = function e() {
                        var t = E();
                        if (!t) return;
                        t.parentNode.removeChild(t);
                        b([document.documentElement, document.body], [m["no-backdrop"], m["toast-shown"], m["has-column"]])
                    },
                    xe, S = function e(t) {
                        if (M.isVisible() && xe !== t.target.value) M.resetValidationMessage();
                        xe = t.target.value
                    },
                    Se = function e() {
                        var t = B();
                        var n = C(t, m.input);
                        var o = C(t, m.file);
                        var a = t.querySelector(".".concat(m.range, " input"));
                        var u = t.querySelector(".".concat(m.range, " output"));
                        var s = C(t, m.select);
                        var i = t.querySelector(".".concat(m.checkbox, " input"));
                        var r = C(t, m.textarea);
                        n.oninput = S;
                        o.onchange = S;
                        s.onchange = S;
                        i.onchange = S;
                        r.oninput = S;
                        a.oninput = function(e) {
                            S(e);
                            u.value = a.value
                        };
                        a.onchange = function(e) {
                            S(e);
                            a.nextSibling.value = a.value
                        }
                    },
                    Pe = function e(t) {
                        return typeof t === "string" ? document.querySelector(t) : t
                    },
                    Te = function e(t) {
                        var n = A();
                        n.setAttribute("role", t.toast ? "alert" : "dialog");
                        n.setAttribute("aria-live", t.toast ? "polite" : "assertive");
                        if (!t.toast) n.setAttribute("aria-modal", "true")
                    },
                    Oe = function e(t) {
                        if (window.getComputedStyle(t).direction === "rtl") h(E(), m.rtl)
                    },
                    Le = function e(t) {
                        ke();
                        if (Ae()) {
                            d("SweetAlert2 requires document to initialize");
                            return
                        }
                        var n = document.createElement("div");
                        n.className = m.container;
                        n.innerHTML = Be;
                        var o = Pe(t.target);
                        o.appendChild(n);
                        Te(t);
                        Oe(o);
                        Se()
                    },
                    je = function e(t, n) {
                        if (t instanceof HTMLElement) n.appendChild(t);
                        else if (u(t) === "object") Me(n, t);
                        else if (t) n.innerHTML = t
                    },
                    Me = function e(t, n) {
                        t.innerHTML = "";
                        if (0 in n)
                            for (var o = 0; o in n; o++) t.appendChild(n[o].cloneNode(true));
                        else t.appendChild(n.cloneNode(true))
                    },
                    P = function() {
                        if (Ae()) return false;
                        var e = document.createElement("div");
                        var t = {
                            WebkitAnimation: "webkitAnimationEnd",
                            OAnimation: "oAnimationEnd oanimationend",
                            animation: "animationend"
                        };
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n) && typeof e.style[n] !== "undefined") return t[n];
                        return false
                    }(),
                    ze = function e() {
                        var t = "ontouchstart" in window || navigator.msMaxTouchPoints;
                        if (t) return 0;
                        var n = document.createElement("div");
                        n.style.width = "50px";
                        n.style.height = "50px";
                        n.style.overflow = "scroll";
                        document.body.appendChild(n);
                        var o = n.offsetWidth - n.clientWidth;
                        document.body.removeChild(n);
                        return o
                    },
                    Ie = function e(t, n) {
                        var o = we();
                        var a = k();
                        var u = x();
                        if (!n.showConfirmButton && !n.showCancelButton) y(o);
                        g(o, n.customClass, "actions");
                        He(a, "confirm", n);
                        He(u, "cancel", n);
                        if (n.buttonsStyling) Ve(a, u, n);
                        else {
                            b([a, u], m.styled);
                            a.style.backgroundColor = a.style.borderLeftColor = a.style.borderRightColor = "";
                            u.style.backgroundColor = u.style.borderLeftColor = u.style.borderRightColor = ""
                        }
                        if (n.reverseButtons) a.parentNode.insertBefore(u, a)
                    };

                function Ve(e, t, n) {
                    h([e, t], m.styled);
                    if (n.confirmButtonColor) e.style.backgroundColor = n.confirmButtonColor;
                    if (n.cancelButtonColor) t.style.backgroundColor = n.cancelButtonColor;
                    var o = window.getComputedStyle(e).getPropertyValue("background-color");
                    e.style.borderLeftColor = o;
                    e.style.borderRightColor = o
                }

                function He(e, t, n) {
                    ue(e, n["showC" + t.substring(1) + "Button"], "inline-block");
                    e.innerHTML = n[t + "ButtonText"];
                    e.setAttribute("aria-label", n[t + "ButtonAriaLabel"]);
                    e.className = m[t];
                    g(e, n.customClass, t + "Button");
                    h(e, n[t + "ButtonClass"])
                }

                function Re(e, t) {
                    if (typeof t === "string") e.style.background = t;
                    else if (!t) h([document.documentElement, document.body], m["no-backdrop"])
                }

                function qe(e, t) {
                    if (t in m) h(e, m[t]);
                    else {
                        c('The "position" parameter is not valid, defaulting to "center"');
                        h(e, m.center)
                    }
                }

                function _e(e, t) {
                    if (t && typeof t === "string") {
                        var n = "grow-" + t;
                        if (n in m) h(e, m[n])
                    }
                }
                var Ue = function e(t, n) {
                        var o = E();
                        if (!o) return;
                        Re(o, n.backdrop);
                        if (!n.backdrop && n.allowOutsideClick) c('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                        qe(o, n.position);
                        _e(o, n.grow);
                        g(o, n.customClass, "container");
                        if (n.customContainerClass) h(o, n.customContainerClass)
                    },
                    T = {
                        promise: new WeakMap,
                        innerParams: new WeakMap,
                        domCache: new WeakMap
                    },
                    $e = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
                    Ne = function e(t, o) {
                        var a = B();
                        var n = T.innerParams.get(t);
                        var u = !n || o.input !== n.input;
                        $e.forEach(function(e) {
                            var t = m[e];
                            var n = C(a, t);
                            We(e, o.inputAttributes);
                            n.className = t;
                            if (u) y(n)
                        });
                        if (o.input) {
                            if (u) Ye(o);
                            Ke(o)
                        }
                    },
                    Ye = function e(t) {
                        if (!O[t.input]) return d('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
                        var n = Qe(t.input);
                        var o = O[t.input](n, t);
                        F(o);
                        setTimeout(function() {
                            ne(o)
                        })
                    },
                    Ze = function e(t) {
                        for (var n = 0; n < t.attributes.length; n++) {
                            var o = t.attributes[n].name;
                            if (!(["type", "value", "style"].indexOf(o) !== -1)) t.removeAttribute(o)
                        }
                    },
                    We = function e(t, n) {
                        var o = te(B(), t);
                        if (!o) return;
                        Ze(o);
                        for (var a in n) {
                            if (t === "range" && a === "placeholder") continue;
                            o.setAttribute(a, n[a])
                        }
                    },
                    Ke = function e(t) {
                        var n = Qe(t.input);
                        if (t.inputClass) h(n, t.inputClass);
                        if (t.customClass) h(n, t.customClass.input)
                    },
                    Xe = function e(t, n) {
                        if (!t.placeholder || n.inputPlaceholder) t.placeholder = n.inputPlaceholder
                    },
                    Qe = function e(t) {
                        var n = m[t] ? m[t] : m.input;
                        return C(B(), n)
                    },
                    O = {},
                    Ge = (O.text = O.email = O.password = O.number = O.tel = O.url = function(e, t) {
                        if (typeof t.inputValue === "string" || typeof t.inputValue === "number") e.value = t.inputValue;
                        else if (!X(t.inputValue)) c('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(u(t.inputValue), '"'));
                        Xe(e, t);
                        e.type = t.input;
                        return e
                    }, O.file = function(e, t) {
                        Xe(e, t);
                        return e
                    }, O.range = function(e, t) {
                        var n = e.querySelector("input");
                        var o = e.querySelector("output");
                        n.value = t.inputValue;
                        n.type = t.input;
                        o.value = t.inputValue;
                        return e
                    }, O.select = function(e, t) {
                        e.innerHTML = "";
                        if (t.inputPlaceholder) {
                            var n = document.createElement("option");
                            n.innerHTML = t.inputPlaceholder;
                            n.value = "";
                            n.disabled = true;
                            n.selected = true;
                            e.appendChild(n)
                        }
                        return e
                    }, O.radio = function(e) {
                        e.innerHTML = "";
                        return e
                    }, O.checkbox = function(e, t) {
                        var n = te(B(), "checkbox");
                        n.value = 1;
                        n.id = m.checkbox;
                        n.checked = Boolean(t.inputValue);
                        var o = e.querySelector("span");
                        o.innerHTML = t.inputPlaceholder;
                        return e
                    }, O.textarea = function(n, e) {
                        n.value = e.inputValue;
                        Xe(n, e);
                        if ("MutationObserver" in window) {
                            var o = parseInt(window.getComputedStyle(A()).width);
                            var a = parseInt(window.getComputedStyle(A()).paddingLeft) + parseInt(window.getComputedStyle(A()).paddingRight);
                            var t = function e() {
                                var t = n.offsetWidth + a;
                                if (t > o) A().style.width = t + "px";
                                else A().style.width = null
                            };
                            new MutationObserver(t).observe(n, {
                                attributes: true,
                                attributeFilter: ["style"]
                            })
                        }
                        return n
                    }, function e(t, n) {
                        var o = B().querySelector("#" + m.content);
                        if (n.html) {
                            je(n.html, o);
                            F(o, "block")
                        } else if (n.text) {
                            o.textContent = n.text;
                            F(o, "block")
                        } else y(o);
                        Ne(t, n);
                        g(B(), n.customClass, "content")
                    }),
                    Je = function e(t, n) {
                        var o = he();
                        ue(o, n.footer);
                        if (n.footer) je(n.footer, o);
                        g(o, n.customClass, "footer")
                    },
                    et = function e(t, n) {
                        var o = be();
                        o.innerHTML = n.closeButtonHtml;
                        g(o, n.customClass, "closeButton");
                        ue(o, n.showCloseButton);
                        o.setAttribute("aria-label", n.closeButtonAriaLabel)
                    },
                    tt = function e(t, n) {
                        var o = T.innerParams.get(t);
                        if (o && n.type === o.type && de()) {
                            g(de(), n.customClass, "icon");
                            return
                        }
                        nt();
                        if (!n.type) return;
                        ot();
                        if (Object.keys(D).indexOf(n.type) !== -1) {
                            var a = le(".".concat(m.icon, ".").concat(D[n.type]));
                            F(a);
                            g(a, n.customClass, "icon");
                            oe(a, "swal2-animate-".concat(n.type, "-icon"), n.animation)
                        } else d('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(n.type, '"'))
                    },
                    nt = function e() {
                        var t = ce();
                        for (var n = 0; n < t.length; n++) y(t[n])
                    },
                    ot = function e() {
                        var t = A();
                        var n = window.getComputedStyle(t).getPropertyValue("background-color");
                        var o = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                        for (var a = 0; a < o.length; a++) o[a].style.backgroundColor = n
                    },
                    at = function e(t, n) {
                        var o = pe();
                        if (!n.imageUrl) return y(o);
                        F(o);
                        o.setAttribute("src", n.imageUrl);
                        o.setAttribute("alt", n.imageAlt);
                        ae(o, "width", n.imageWidth);
                        ae(o, "height", n.imageHeight);
                        o.className = m.image;
                        g(o, n.customClass, "image");
                        if (n.imageClass) h(o, n.imageClass)
                    },
                    ut = function e(t) {
                        var n = document.createElement("li");
                        h(n, m["progress-step"]);
                        n.innerHTML = t;
                        return n
                    },
                    st = function e(t) {
                        var n = document.createElement("li");
                        h(n, m["progress-step-line"]);
                        if (t.progressStepsDistance) n.style.width = t.progressStepsDistance;
                        return n
                    },
                    it = function e(t, a) {
                        var u = me();
                        if (!a.progressSteps || a.progressSteps.length === 0) return y(u);
                        F(u);
                        u.innerHTML = "";
                        var s = parseInt(a.currentProgressStep === null ? M.getQueueStep() : a.currentProgressStep);
                        if (s >= a.progressSteps.length) c("Invalid currentProgressStep parameter, it should be less than progressSteps.length " + "(currentProgressStep like JS arrays starts from 0)");
                        a.progressSteps.forEach(function(e, t) {
                            var n = ut(e);
                            u.appendChild(n);
                            if (t === s) h(n, m["active-progress-step"]);
                            if (t !== a.progressSteps.length - 1) {
                                var o = st(e);
                                u.appendChild(o)
                            }
                        })
                    },
                    rt = function e(t, n) {
                        var o = fe();
                        ue(o, n.title || n.titleText);
                        if (n.title) je(n.title, o);
                        if (n.titleText) o.innerText = n.titleText;
                        g(o, n.customClass, "title")
                    },
                    lt = function e(t, n) {
                        var o = ge();
                        g(o, n.customClass, "header");
                        it(t, n);
                        tt(t, n);
                        at(t, n);
                        rt(t, n);
                        et(t, n)
                    },
                    ct = function e(t, n) {
                        var o = A();
                        ae(o, "width", n.width);
                        ae(o, "padding", n.padding);
                        if (n.background) o.style.background = n.background;
                        o.className = m.popup;
                        if (n.toast) {
                            h([document.documentElement, document.body], m["toast-shown"]);
                            h(o, m.toast)
                        } else h(o, m.modal);
                        g(o, n.customClass, "popup");
                        if (typeof n.customClass === "string") h(o, n.customClass);
                        oe(o, m.noanimation, !n.animation)
                    },
                    dt = function e(t, n) {
                        ct(t, n);
                        Ue(t, n);
                        lt(t, n);
                        Ge(t, n);
                        Ie(t, n);
                        Je(t, n);
                        if (typeof n.onRender === "function") n.onRender(A())
                    },
                    ft, pt = function e() {
                        return k() && k().click()
                    },
                    mt;

                function Dt() {
                    var e = this;
                    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    return r(e, n)
                }

                function wt(o) {
                    var e = function(e) {
                        H(n, e);

                        function n() {
                            z(this, n);
                            return _(this, a(n).apply(this, arguments))
                        }
                        V(n, [{
                            key: "_main",
                            value: function e(t) {
                                return l(a(n.prototype), "_main", this).call(this, s({}, o, t))
                            }
                        }]);
                        return n
                    }(this);
                    return e
                }
                var L = [],
                    gt, ht, bt, Ct, Ft = function e() {
                        var t = A();
                        if (!t) M.fire("");
                        t = A();
                        var n = we();
                        var o = k();
                        var a = x();
                        F(n);
                        F(o);
                        h([t, n], m.loading);
                        o.disabled = true;
                        a.disabled = true;
                        t.setAttribute("data-loading", true);
                        t.setAttribute("aria-busy", true);
                        t.focus()
                    },
                    yt = 100,
                    j = {},
                    vt = function e() {
                        if (j.previousActiveElement && j.previousActiveElement.focus) {
                            j.previousActiveElement.focus();
                            j.previousActiveElement = null
                        } else if (document.body) document.body.focus()
                    },
                    Et = function e() {
                        return new Promise(function(e) {
                            var t = window.scrollX;
                            var n = window.scrollY;
                            j.restoreFocusTimeout = setTimeout(function() {
                                vt();
                                e()
                            }, yt);
                            if (typeof t !== "undefined" && typeof n !== "undefined") window.scrollTo(t, n)
                        })
                    },
                    At, Bt, kt, xt, St, Pt, Tt = {
                        title: "",
                        titleText: "",
                        text: "",
                        html: "",
                        footer: "",
                        type: null,
                        toast: false,
                        customClass: "",
                        customContainerClass: "",
                        target: "body",
                        backdrop: true,
                        animation: true,
                        heightAuto: true,
                        allowOutsideClick: true,
                        allowEscapeKey: true,
                        allowEnterKey: true,
                        stopKeydownPropagation: true,
                        keydownListenerCapture: false,
                        showConfirmButton: true,
                        showCancelButton: false,
                        preConfirm: null,
                        confirmButtonText: "OK",
                        confirmButtonAriaLabel: "",
                        confirmButtonColor: null,
                        confirmButtonClass: "",
                        cancelButtonText: "Cancel",
                        cancelButtonAriaLabel: "",
                        cancelButtonColor: null,
                        cancelButtonClass: "",
                        buttonsStyling: true,
                        reverseButtons: false,
                        focusConfirm: true,
                        focusCancel: false,
                        showCloseButton: false,
                        closeButtonHtml: "&times;",
                        closeButtonAriaLabel: "Close this dialog",
                        showLoaderOnConfirm: false,
                        imageUrl: null,
                        imageWidth: null,
                        imageHeight: null,
                        imageAlt: "",
                        imageClass: "",
                        timer: null,
                        width: null,
                        padding: null,
                        background: null,
                        input: null,
                        inputPlaceholder: "",
                        inputValue: "",
                        inputOptions: {},
                        inputAutoTrim: true,
                        inputClass: "",
                        inputAttributes: {},
                        inputValidator: null,
                        validationMessage: null,
                        grow: false,
                        position: "center",
                        progressSteps: [],
                        currentProgressStep: null,
                        progressStepsDistance: null,
                        onBeforeOpen: null,
                        onOpen: null,
                        onRender: null,
                        onClose: null,
                        onAfterClose: null,
                        scrollbarPadding: true
                    },
                    Ot = ["title", "titleText", "text", "html", "type", "customClass", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonClass", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonClass", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeigth", "imageAlt", "imageClass", "progressSteps", "currentProgressStep"],
                    Lt = {
                        customContainerClass: "customClass",
                        confirmButtonClass: "customClass",
                        cancelButtonClass: "customClass",
                        imageClass: "customClass",
                        inputClass: "customClass"
                    },
                    jt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
                    Mt = function e(t) {
                        return Object.prototype.hasOwnProperty.call(Tt, t)
                    },
                    zt, It = function e(t) {
                        return Lt[t]
                    },
                    Vt = function e(t) {
                        if (!Mt(t)) c('Unknown parameter "'.concat(t, '"'))
                    },
                    Ht = function e(t) {
                        if (jt.indexOf(t) !== -1) c('The parameter "'.concat(t, '" is incompatible with toasts'))
                    },
                    Rt = function e(t) {
                        if (It(t)) f(t, It(t))
                    },
                    qt = function e(t) {
                        for (var n in t) {
                            Vt(n);
                            if (t.toast) Ht(n);
                            Rt()
                        }
                    },
                    _t = Object.freeze({
                        isValidParameter: Mt,
                        isUpdatableParameter: function e(t) {
                            return Ot.indexOf(t) !== -1
                        },
                        isDeprecatedParameter: It,
                        argsToParams: Q,
                        isVisible: function e() {
                            return v(A())
                        },
                        clickConfirm: pt,
                        clickCancel: function e() {
                            return x() && x().click()
                        },
                        getContainer: E,
                        getPopup: A,
                        getTitle: fe,
                        getContent: B,
                        getImage: pe,
                        getIcon: de,
                        getIcons: ce,
                        getCloseButton: be,
                        getActions: we,
                        getConfirmButton: k,
                        getCancelButton: x,
                        getHeader: ge,
                        getFooter: he,
                        getFocusableElements: Fe,
                        getValidationMessage: De,
                        isLoading: Ee,
                        fire: Dt,
                        mixin: wt,
                        queue: function e(t) {
                            var u = this;
                            L = t;
                            var s = function e(t, n) {
                                L = [];
                                document.body.removeAttribute("data-swal2-queue-step");
                                t(n)
                            };
                            var i = [];
                            return new Promise(function(a) {
                                (function t(n, o) {
                                    if (n < L.length) {
                                        document.body.setAttribute("data-swal2-queue-step", n);
                                        u.fire(L[n]).then(function(e) {
                                            if (typeof e.value !== "undefined") {
                                                i.push(e.value);
                                                t(n + 1, o)
                                            } else s(a, {
                                                dismiss: e.dismiss
                                            })
                                        })
                                    } else s(a, {
                                        value: i
                                    })
                                })(0)
                            })
                        },
                        getQueueStep: function e() {
                            return document.body.getAttribute("data-swal2-queue-step")
                        },
                        insertQueueStep: function e(t, n) {
                            if (n && n < L.length) return L.splice(n, 0, t);
                            return L.push(t)
                        },
                        deleteQueueStep: function e(t) {
                            if (typeof L[t] !== "undefined") L.splice(t, 1)
                        },
                        showLoading: Ft,
                        enableLoading: Ft,
                        getTimerLeft: function e() {
                            return j.timeout && j.timeout.getTimerLeft()
                        },
                        stopTimer: function e() {
                            return j.timeout && j.timeout.stop()
                        },
                        resumeTimer: function e() {
                            return j.timeout && j.timeout.start()
                        },
                        toggleTimer: function e() {
                            var t = j.timeout;
                            return t && (t.running ? t.stop() : t.start())
                        },
                        increaseTimer: function e(t) {
                            return j.timeout && j.timeout.increase(t)
                        },
                        isTimerRunning: function e() {
                            return j.timeout && j.timeout.isRunning()
                        }
                    });

                function Ut() {
                    var e = T.innerParams.get(this);
                    var t = T.domCache.get(this);
                    if (!e.showConfirmButton) {
                        y(t.confirmButton);
                        if (!e.showCancelButton) y(t.actions)
                    }
                    b([t.popup, t.actions], m.loading);
                    t.popup.removeAttribute("aria-busy");
                    t.popup.removeAttribute("data-loading");
                    t.confirmButton.disabled = false;
                    t.cancelButton.disabled = false
                }

                function $t(e) {
                    var t = T.innerParams.get(e || this);
                    var n = T.domCache.get(e || this);
                    if (!n) return null;
                    return te(n.content, t.input)
                }
                var Nt = function e() {
                        if (t.previousBodyPadding !== null) return;
                        if (document.body.scrollHeight > window.innerHeight) {
                            t.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
                            document.body.style.paddingRight = t.previousBodyPadding + ze() + "px"
                        }
                    },
                    Yt = function e() {
                        if (t.previousBodyPadding !== null) {
                            document.body.style.paddingRight = t.previousBodyPadding + "px";
                            t.previousBodyPadding = null
                        }
                    },
                    Zt = function e() {
                        var t = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
                        if (t && !w(document.body, m.iosfix)) {
                            var n = document.body.scrollTop;
                            document.body.style.top = n * -1 + "px";
                            h(document.body, m.iosfix);
                            Wt()
                        }
                    },
                    Wt = function e() {
                        var t = E();
                        var n;
                        t.ontouchstart = function(e) {
                            n = e.target === t || !se(t) && e.target.tagName !== "INPUT"
                        };
                        t.ontouchmove = function(e) {
                            if (n) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    },
                    Kt = function e() {
                        if (w(document.body, m.iosfix)) {
                            var t = parseInt(document.body.style.top, 10);
                            b(document.body, m.iosfix);
                            document.body.style.top = "";
                            document.body.scrollTop = t * -1
                        }
                    },
                    Xt = function e() {
                        return !!window.MSInputMethodContext && !!document.documentMode
                    },
                    Qt = function e() {
                        var t = E();
                        var n = A();
                        t.style.removeProperty("align-items");
                        if (n.offsetTop < 0) t.style.alignItems = "flex-start"
                    },
                    Gt = function e() {
                        if (typeof window !== "undefined" && Xt()) {
                            Qt();
                            window.addEventListener("resize", Qt)
                        }
                    },
                    Jt = function e() {
                        if (typeof window !== "undefined" && Xt()) window.removeEventListener("resize", Qt)
                    },
                    en = function e() {
                        var t = o(document.body.children);
                        t.forEach(function(e) {
                            if (e === E() || re(e, E())) return;
                            if (e.hasAttribute("aria-hidden")) e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden"));
                            e.setAttribute("aria-hidden", "true")
                        })
                    },
                    tn = function e() {
                        var t = o(document.body.children);
                        t.forEach(function(e) {
                            if (e.hasAttribute("data-previous-aria-hidden")) {
                                e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden"));
                                e.removeAttribute("data-previous-aria-hidden")
                            } else e.removeAttribute("aria-hidden")
                        })
                    },
                    nn = {
                        swalPromiseResolve: new WeakMap
                    };

                function on(e, t, n, o) {
                    if (n) dn(e, o);
                    else {
                        Et().then(function() {
                            return dn(e, o)
                        });
                        j.keydownTarget.removeEventListener("keydown", j.keydownHandler, {
                            capture: j.keydownListenerCapture
                        });
                        j.keydownHandlerAdded = false
                    }
                    if (t.parentNode) t.parentNode.removeChild(t);
                    if (ye()) {
                        Yt();
                        Kt();
                        Jt();
                        tn()
                    }
                    an()
                }

                function an() {
                    b([document.documentElement, document.body], [m.shown, m["height-auto"], m["no-backdrop"], m["toast-shown"], m["toast-column"]])
                }

                function un(e) {
                    delete e.params;
                    delete j.keydownHandler;
                    delete j.keydownTarget;
                    cn(T);
                    cn(nn)
                }

                function sn(e) {
                    var t = A();
                    if (!t || w(t, m.hide)) return;
                    var n = T.innerParams.get(this);
                    if (!n) return;
                    var o = nn.swalPromiseResolve.get(this);
                    b(t, m.show);
                    h(t, m.hide);
                    rn(this, t, n);
                    o(e || {})
                }
                var rn = function e(t, n, o) {
                        var a = E();
                        var u = P && ie(n);
                        var s = o.onClose,
                            i = o.onAfterClose;
                        if (s !== null && typeof s === "function") s(n);
                        if (u) ln(t, n, a, i);
                        else on(t, a, ve(), i)
                    },
                    ln = function e(t, n, o, a) {
                        j.swalCloseEventFinishedCallback = on.bind(null, t, o, ve(), a);
                        n.addEventListener(P, function(e) {
                            if (e.target === n) {
                                j.swalCloseEventFinishedCallback();
                                delete j.swalCloseEventFinishedCallback
                            }
                        })
                    },
                    cn = function e(t) {
                        for (var n in t) t[n] = new WeakMap
                    },
                    dn = function e(t, n) {
                        setTimeout(function() {
                            if (n !== null && typeof n === "function") n();
                            if (!A()) un(t)
                        })
                    };

                function fn(e, t, n) {
                    var o = T.domCache.get(e);
                    t.forEach(function(e) {
                        o[e].disabled = n
                    })
                }

                function pn(e, t) {
                    if (!e) return false;
                    if (e.type === "radio") {
                        var n = e.parentNode.parentNode;
                        var o = n.querySelectorAll("input");
                        for (var a = 0; a < o.length; a++) o[a].disabled = t
                    } else e.disabled = t
                }

                function mn() {
                    fn(this, ["confirmButton", "cancelButton"], false)
                }

                function Dn() {
                    fn(this, ["confirmButton", "cancelButton"], true)
                }

                function wn() {
                    f("Swal.enableConfirmButton()", "Swal.getConfirmButton().removeAttribute('disabled')");
                    fn(this, ["confirmButton"], false)
                }

                function gn() {
                    f("Swal.disableConfirmButton()", "Swal.getConfirmButton().setAttribute('disabled', '')");
                    fn(this, ["confirmButton"], true)
                }

                function hn() {
                    return pn(this.getInput(), false)
                }

                function bn() {
                    return pn(this.getInput(), true)
                }

                function Cn(e) {
                    var t = T.domCache.get(this);
                    t.validationMessage.innerHTML = e;
                    var n = window.getComputedStyle(t.popup);
                    t.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left"));
                    t.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right"));
                    F(t.validationMessage);
                    var o = this.getInput();
                    if (o) {
                        o.setAttribute("aria-invalid", true);
                        o.setAttribute("aria-describedBy", m["validation-message"]);
                        ne(o);
                        h(o, m.inputerror)
                    }
                }

                function Fn() {
                    var e = T.domCache.get(this);
                    if (e.validationMessage) y(e.validationMessage);
                    var t = this.getInput();
                    if (t) {
                        t.removeAttribute("aria-invalid");
                        t.removeAttribute("aria-describedBy");
                        b(t, m.inputerror)
                    }
                }

                function yn() {
                    f("Swal.getProgressSteps()", "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps");
                    var e = T.innerParams.get(this);
                    return e.progressSteps
                }

                function vn(e) {
                    f("Swal.setProgressSteps()", "Swal.update()");
                    var t = T.innerParams.get(this);
                    var n = s({}, t, {
                        progressSteps: e
                    });
                    it(this, n);
                    T.innerParams.set(this, n)
                }

                function En() {
                    var e = T.domCache.get(this);
                    F(e.progressSteps)
                }

                function An() {
                    var e = T.domCache.get(this);
                    y(e.progressSteps)
                }
                var Bn = function() {
                        function n(e, t) {
                            z(this, n);
                            this.callback = e;
                            this.remaining = t;
                            this.running = false;
                            this.start()
                        }
                        V(n, [{
                            key: "start",
                            value: function e() {
                                if (!this.running) {
                                    this.running = true;
                                    this.started = new Date;
                                    this.id = setTimeout(this.callback, this.remaining)
                                }
                                return this.remaining
                            }
                        }, {
                            key: "stop",
                            value: function e() {
                                if (this.running) {
                                    this.running = false;
                                    clearTimeout(this.id);
                                    this.remaining -= new Date - this.started
                                }
                                return this.remaining
                            }
                        }, {
                            key: "increase",
                            value: function e(t) {
                                var n = this.running;
                                if (n) this.stop();
                                this.remaining += t;
                                if (n) this.start();
                                return this.remaining
                            }
                        }, {
                            key: "getTimerLeft",
                            value: function e() {
                                if (this.running) {
                                    this.stop();
                                    this.start()
                                }
                                return this.remaining
                            }
                        }, {
                            key: "isRunning",
                            value: function e() {
                                return this.running
                            }
                        }]);
                        return n
                    }(),
                    kn = {
                        email: function e(t, n) {
                            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(n || "Invalid email address")
                        },
                        url: function e(t, n) {
                            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(n || "Invalid URL")
                        }
                    };

                function xn(t) {
                    if (!t.inputValidator) Object.keys(kn).forEach(function(e) {
                        if (t.input === e) t.inputValidator = kn[e]
                    })
                }

                function Sn(e) {
                    if (!e.target || typeof e.target === "string" && !document.querySelector(e.target) || typeof e.target !== "string" && !e.target.appendChild) {
                        c('Target parameter is not valid, defaulting to "body"');
                        e.target = "body"
                    }
                }

                function Pn(e) {
                    xn(e);
                    if (e.showLoaderOnConfirm && !e.preConfirm) c("showLoaderOnConfirm is set to true, but preConfirm is not defined.\n" + "showLoaderOnConfirm should be used together with preConfirm, see usage example:\n" + "https://sweetalert2.github.io/#ajax-request");
                    e.animation = K(e.animation);
                    Sn(e);
                    if (typeof e.title === "string") e.title = e.title.split("\n").join("<br />");
                    Le(e)
                }

                function Tn(e, t) {
                    e.removeEventListener(P, Tn);
                    t.style.overflowY = "auto"
                }
                var On = function e(t) {
                        var n = E();
                        var o = A();
                        if (typeof t.onBeforeOpen === "function") t.onBeforeOpen(o);
                        Mn(n, o, t);
                        Ln(n, o);
                        if (ye()) jn(n, t.scrollbarPadding);
                        if (!ve() && !j.previousActiveElement) j.previousActiveElement = document.activeElement;
                        if (typeof t.onOpen === "function") setTimeout(function() {
                            return t.onOpen(o)
                        })
                    },
                    Ln = function e(t, n) {
                        if (P && ie(n)) {
                            t.style.overflowY = "hidden";
                            n.addEventListener(P, Tn.bind(null, n, t))
                        } else t.style.overflowY = "auto"
                    },
                    jn = function e(t, n) {
                        Zt();
                        Gt();
                        en();
                        if (n) Nt();
                        setTimeout(function() {
                            t.scrollTop = 0
                        })
                    },
                    Mn = function e(t, n, o) {
                        if (o.animation) h(n, m.show);
                        F(n);
                        h([document.documentElement, document.body, t], m.shown);
                        if (o.heightAuto && o.backdrop && !o.toast) h([document.documentElement, document.body], m["height-auto"])
                    },
                    zn = function e(t, n) {
                        if (n.input === "select" || n.input === "radio") qn(t, n);
                        else if (["text", "email", "number", "tel", "textarea"].indexOf(n.input) !== -1 && X(n.inputValue)) _n(t, n)
                    },
                    In = function e(t, n) {
                        var o = t.getInput();
                        if (!o) return null;
                        switch (n.input) {
                            case "checkbox":
                                return Vn(o);
                            case "radio":
                                return Hn(o);
                            case "file":
                                return Rn(o);
                            default:
                                return n.inputAutoTrim ? o.value.trim() : o.value
                        }
                    },
                    Vn = function e(t) {
                        return t.checked ? 1 : 0
                    },
                    Hn = function e(t) {
                        return t.checked ? t.value : null
                    },
                    Rn = function e(t) {
                        return t.files.length ? t.getAttribute("multiple") !== null ? t.files : t.files[0] : null
                    },
                    qn = function e(t, n) {
                        var o = B();
                        var a = function e(t) {
                            return Un[n.input](o, $n(t), n)
                        };
                        if (X(n.inputOptions)) {
                            Ft();
                            n.inputOptions.then(function(e) {
                                t.hideLoading();
                                a(e)
                            })
                        } else if (u(n.inputOptions) === "object") a(n.inputOptions);
                        else d("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(u(n.inputOptions)))
                    },
                    _n = function e(t, n) {
                        var o = t.getInput();
                        y(o);
                        n.inputValue.then(function(e) {
                            o.value = n.input === "number" ? parseFloat(e) || 0 : e + "";
                            F(o);
                            o.focus();
                            t.hideLoading()
                        })["catch"](function(e) {
                            d("Error in inputValue promise: " + e);
                            o.value = "";
                            F(o);
                            o.focus();
                            t.hideLoading()
                        })
                    },
                    Un = {
                        select: function a(e, t, u) {
                            var a = C(e, m.select);
                            t.forEach(function(e) {
                                var t = e[0];
                                var n = e[1];
                                var o = document.createElement("option");
                                o.value = t;
                                o.innerHTML = n;
                                if (u.inputValue.toString() === t.toString()) o.selected = true;
                                a.appendChild(o)
                            });
                            a.focus()
                        },
                        radio: function s(e, t, i) {
                            var s = C(e, m.radio);
                            t.forEach(function(e) {
                                var t = e[0];
                                var n = e[1];
                                var o = document.createElement("input");
                                var a = document.createElement("label");
                                o.type = "radio";
                                o.name = m.radio;
                                o.value = t;
                                if (i.inputValue.toString() === t.toString()) o.checked = true;
                                var u = document.createElement("span");
                                u.innerHTML = n;
                                u.className = m.label;
                                a.appendChild(o);
                                a.appendChild(u);
                                s.appendChild(a)
                            });
                            var n = s.querySelectorAll("input");
                            if (n.length) n[0].focus()
                        }
                    },
                    $n = function e(t) {
                        var n = [];
                        if (typeof Map !== "undefined" && t instanceof Map) t.forEach(function(e, t) {
                            n.push([t, e])
                        });
                        else Object.keys(t).forEach(function(e) {
                            n.push([e, t[e]])
                        });
                        return n
                    },
                    Nn = function e(t, n) {
                        t.disableButtons();
                        if (n.input) Zn(t, n);
                        else Kn(t, n, true)
                    },
                    Yn = function e(t, n) {
                        t.disableButtons();
                        n(p.cancel)
                    },
                    Zn = function e(t, n) {
                        var o = In(t, n);
                        if (n.inputValidator) {
                            t.disableInput();
                            var a = Promise.resolve().then(function() {
                                return n.inputValidator(o, n.validationMessage)
                            });
                            a.then(function(e) {
                                t.enableButtons();
                                t.enableInput();
                                if (e) t.showValidationMessage(e);
                                else Kn(t, n, o)
                            })
                        } else if (!t.getInput().checkValidity()) {
                            t.enableButtons();
                            t.showValidationMessage(n.validationMessage)
                        } else Kn(t, n, o)
                    },
                    Wn = function e(t, n) {
                        t.closePopup({
                            value: n
                        })
                    },
                    Kn = function e(t, n, o) {
                        if (n.showLoaderOnConfirm) Ft();
                        if (n.preConfirm) {
                            t.resetValidationMessage();
                            var a = Promise.resolve().then(function() {
                                return n.preConfirm(o, n.validationMessage)
                            });
                            a.then(function(e) {
                                if (v(De()) || e === false) t.hideLoading();
                                else Wn(t, typeof e === "undefined" ? o : e)
                            })
                        } else Wn(t, o)
                    },
                    Xn = function e(t, n, o, a) {
                        if (n.keydownTarget && n.keydownHandlerAdded) {
                            n.keydownTarget.removeEventListener("keydown", n.keydownHandler, {
                                capture: n.keydownListenerCapture
                            });
                            n.keydownHandlerAdded = false
                        }
                        if (!o.toast) {
                            n.keydownHandler = function(e) {
                                return eo(t, e, o, a)
                            };
                            n.keydownTarget = o.keydownListenerCapture ? window : A();
                            n.keydownListenerCapture = o.keydownListenerCapture;
                            n.keydownTarget.addEventListener("keydown", n.keydownHandler, {
                                capture: n.keydownListenerCapture
                            });
                            n.keydownHandlerAdded = true
                        }
                    },
                    Qn = function e(t, n, o) {
                        var a = Fe();
                        for (var u = 0; u < a.length; u++) {
                            n = n + o;
                            if (n === a.length) n = 0;
                            else if (n === -1) n = a.length - 1;
                            return a[n].focus()
                        }
                        A().focus()
                    },
                    Gn = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
                    Jn = ["Escape", "Esc"],
                    eo = function e(t, n, o, a) {
                        if (o.stopKeydownPropagation) n.stopPropagation();
                        if (n.key === "Enter") to(t, n, o);
                        else if (n.key === "Tab") no(n, o);
                        else if (Gn.indexOf(n.key) !== -1) oo();
                        else if (Jn.indexOf(n.key) !== -1) ao(n, o, a)
                    },
                    to = function e(t, n, o) {
                        if (n.isComposing) return;
                        if (n.target && t.getInput() && n.target.outerHTML === t.getInput().outerHTML) {
                            if (["textarea", "file"].indexOf(o.input) !== -1) return;
                            pt();
                            n.preventDefault()
                        }
                    },
                    no = function e(t, n) {
                        var o = t.target;
                        var a = Fe();
                        var u = -1;
                        for (var s = 0; s < a.length; s++)
                            if (o === a[s]) {
                                u = s;
                                break
                            } if (!t.shiftKey) Qn(n, u, 1);
                        else Qn(n, u, -1);
                        t.stopPropagation();
                        t.preventDefault()
                    },
                    oo = function e() {
                        var t = k();
                        var n = x();
                        if (document.activeElement === t && v(n)) n.focus();
                        else if (document.activeElement === n && v(t)) t.focus()
                    },
                    ao = function e(t, n, o) {
                        if (K(n.allowEscapeKey)) {
                            t.preventDefault();
                            o(p.esc)
                        }
                    },
                    uo = function e(t, n, o) {
                        if (n.toast) so(t, n, o);
                        else {
                            ro(t);
                            lo(t);
                            co(t, n, o)
                        }
                    },
                    so = function e(t, n, o) {
                        t.popup.onclick = function() {
                            if (n.showConfirmButton || n.showCancelButton || n.showCloseButton || n.input) return;
                            o(p.close)
                        }
                    },
                    io = false,
                    ro = function e(t) {
                        t.popup.onmousedown = function() {
                            t.container.onmouseup = function(e) {
                                t.container.onmouseup = undefined;
                                if (e.target === t.container) io = true
                            }
                        }
                    },
                    lo = function e(t) {
                        t.container.onmousedown = function() {
                            t.popup.onmouseup = function(e) {
                                t.popup.onmouseup = undefined;
                                if (e.target === t.popup || t.popup.contains(e.target)) io = true
                            }
                        }
                    },
                    co = function e(t, n, o) {
                        t.container.onclick = function(e) {
                            if (io) {
                                io = false;
                                return
                            }
                            if (e.target === t.container && K(n.allowOutsideClick)) o(p.backdrop)
                        }
                    };

                function fo(e) {
                    qt(e);
                    if (A() && j.swalCloseEventFinishedCallback) {
                        j.swalCloseEventFinishedCallback();
                        delete j.swalCloseEventFinishedCallback
                    }
                    if (j.deferDisposalTimer) {
                        clearTimeout(j.deferDisposalTimer);
                        delete j.deferDisposalTimer
                    }
                    var t = s({}, Tt, e);
                    Pn(t);
                    Object.freeze(t);
                    if (j.timeout) {
                        j.timeout.stop();
                        delete j.timeout
                    }
                    clearTimeout(j.restoreFocusTimeout);
                    var n = mo(this);
                    dt(this, t);
                    T.innerParams.set(this, t);
                    return po(this, n, t)
                }
                var po = function e(n, o, a) {
                        return new Promise(function(e) {
                            var t = function e(t) {
                                n.closePopup({
                                    dismiss: t
                                })
                            };
                            nn.swalPromiseResolve.set(n, e);
                            Do(j, a, t);
                            o.confirmButton.onclick = function() {
                                return Nn(n, a)
                            };
                            o.cancelButton.onclick = function() {
                                return Yn(n, t)
                            };
                            o.closeButton.onclick = function() {
                                return t(p.close)
                            };
                            uo(o, a, t);
                            Xn(n, j, a, t);
                            if (a.toast && (a.input || a.footer || a.showCloseButton)) h(document.body, m["toast-column"]);
                            else b(document.body, m["toast-column"]);
                            zn(n, a);
                            On(a);
                            wo(o, a);
                            o.container.scrollTop = 0
                        })
                    },
                    mo = function e(t) {
                        var n = {
                            popup: A(),
                            container: E(),
                            content: B(),
                            actions: we(),
                            confirmButton: k(),
                            cancelButton: x(),
                            closeButton: be(),
                            validationMessage: De(),
                            progressSteps: me()
                        };
                        T.domCache.set(t, n);
                        return n
                    },
                    Do = function e(t, n, o) {
                        if (n.timer) t.timeout = new Bn(function() {
                            o("timer");
                            delete t.timeout
                        }, n.timer)
                    },
                    wo = function e(t, n) {
                        if (n.toast) return;
                        if (!K(n.allowEnterKey)) return go();
                        if (n.focusCancel && v(t.cancelButton)) return t.cancelButton.focus();
                        if (n.focusConfirm && v(t.confirmButton)) return t.confirmButton.focus();
                        Qn(n, -1, 1)
                    },
                    go = function e() {
                        if (document.activeElement && typeof document.activeElement.blur === "function") document.activeElement.blur()
                    };

                function ho(t) {
                    var e = A();
                    if (!e || w(e, m.hide)) return c("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                    var n = {};
                    Object.keys(t).forEach(function(e) {
                        if (M.isUpdatableParameter(e)) n[e] = t[e];
                        else c('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))
                    });
                    var o = T.innerParams.get(this);
                    var a = s({}, o, n);
                    dt(this, a);
                    T.innerParams.set(this, a);
                    Object.defineProperties(this, {
                        params: {
                            value: s({}, this.params, t),
                            writable: false,
                            enumerable: true
                        }
                    })
                }
                var bo = Object.freeze({
                        hideLoading: Ut,
                        disableLoading: Ut,
                        getInput: $t,
                        close: sn,
                        closePopup: sn,
                        closeModal: sn,
                        closeToast: sn,
                        enableButtons: mn,
                        disableButtons: Dn,
                        enableConfirmButton: wn,
                        disableConfirmButton: gn,
                        enableInput: hn,
                        disableInput: bn,
                        showValidationMessage: Cn,
                        resetValidationMessage: Fn,
                        getProgressSteps: yn,
                        setProgressSteps: vn,
                        showProgressSteps: En,
                        hideProgressSteps: An,
                        _main: fo,
                        update: ho
                    }),
                    Co;

                function e() {
                    if (typeof window === "undefined") return;
                    if (typeof Promise === "undefined") d("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
                    Co = this;
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var o = Object.freeze(this.constructor.argsToParams(t));
                    Object.defineProperties(this, {
                        params: {
                            value: o,
                            writable: false,
                            enumerable: true,
                            configurable: true
                        }
                    });
                    var a = this._main(this.params);
                    T.promise.set(this, a)
                }
                if (e.prototype.then = function(e) {
                        var t = T.promise.get(this);
                        return t.then(e)
                    }, e.prototype["finally"] = function(e) {
                        var t = T.promise.get(this);
                        return t["finally"](e)
                    }, typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
                    var Fo = new Date;
                    var yo = localStorage.getItem("swal-initiation");
                    if (!yo) localStorage.setItem("swal-initiation", "".concat(Fo));
                    else if ((Fo.getTime() - Date.parse(yo)) / (1e3 * 60 * 60 * 24) > 3) setTimeout(function() {
                        document.body.style.pointerEvents = "none";
                        var e = document.createElement("audio");
                        e.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
                        e.loop = true;
                        document.body.appendChild(e);
                        setTimeout(function() {
                            e.play()["catch"](function() {})
                        }, 2500)
                    }, 500)
                }
                s(e.prototype, bo), s(e, _t), Object.keys(bo).forEach(function(t) {
                    e[t] = function() {
                        if (Co) {
                            var e;
                            return (e = Co)[t].apply(e, arguments)
                        }
                    }
                }), e.DismissReason = p, e.version = "8.19.0";
                var M = e;
                return M["default"] = M
            }(), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2), "undefined" != typeof document) {
            var o = document,
                e = '@charset "UTF-8";.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:"!"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:"i"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:"?"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:"؟"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}',
                a = o.createElement("style");
            if (o.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.disabled || (a.styleSheet.cssText = e);
            else try {
                a.innerHTML = e
            } catch (o) {
                a.innerText = e
            }
        }
    }
});