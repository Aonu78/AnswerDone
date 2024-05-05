/*! For license information please see c38bfd2f53-app.js.LICENSE */ ! function(i) {
	var n = {};

	function s(e) {
		var t;
		return (n[e] || (t = n[e] = {
			i: e,
			l: !1,
			exports: {}
		}, i[e].call(t.exports, t, t.exports, s), t.l = !0, t)).exports
	}
	s.m = i, s.c = n, s.d = function(e, t, i) {
		s.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, s.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, s.t = function(t, e) {
		if (1 & e && (t = s(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var i = Object.create(null);
		if (s.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var n in t) s.d(i, n, function(e) {
				return t[e]
			}.bind(null, n));
		return i
	}, s.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return s.d(t, "a", t), t
	}, s.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, s.p = "", s(s.s = 66)
}({
	0: function(e, t, i) {
		"use strict";

		function n(e) {
			var t = $("body").data("country-language-path");
			return t ? "/" + t + e : e
		}
		i.r(t), i.d(t, "createOneDomainUrl", function() {
			return n
		})
	},
	1: function(e, t, i) {
		"use strict";

		function s(e) {
			return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function a(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, function(e) {
					e = function(e, t) {
						if ("object" !== s(e) || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 === i) return ("string" === t ? String : Number)(e);
						i = i.call(e, t || "default");
						if ("object" !== s(i)) return i;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}(e, "string");
					return "symbol" === s(e) ? e : String(e)
				}(n.key), n)
			}
		}
		i.d(t, "a", function() {
			return n
		});
		var n = function() {
			function e() {
				if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var t, i, n;
			return t = e, n = [{
				key: "get",
				value: function() {
					var e = $("body").data("token");
					return e || !1
				}
			}], (i = null) && a(t.prototype, i), n && a(t, n), Object.defineProperty(t, "prototype", {
				writable: !1
			}), e
		}()
	},
	10: function(e, t) {
		var i = function() {
			return this
		}();
		try {
			i = i || new Function("return this")()
		} catch (e) {
			"object" == typeof window && (i = window)
		}
		e.exports = i
	},
	14: function(e, t, i) {
		var n;
		i = [i(8)], void 0 !== (t = "function" == typeof(n = function(d) {
			d.extend(d.fn, {
				validate: function(e) {
					if (!this.length) {
						if (e && e.debug && window.console) console.warn("Nothing selected, can't validate, returning nothing.");
						return
					}
					var n = d.data(this[0], "validator");
					if (n) return n;
					this.attr("novalidate", "novalidate");
					n = new d.validator(e, this[0]);
					d.data(this[0], "validator", n);
					if (n.settings.onsubmit) {
						this.on("click.validate", ":submit", function(e) {
							n.submitButton = e.currentTarget;
							if (d(this).hasClass("cancel")) n.cancelSubmit = true;
							if (d(this).attr("formnovalidate") !== undefined) n.cancelSubmit = true
						});
						this.on("submit.validate", function(i) {
							if (n.settings.debug) i.preventDefault();

							function e() {
								var e, t;
								if (n.submitButton && (n.settings.submitHandler || n.formSubmitted)) e = d("<input type='hidden'/>").attr("name", n.submitButton.name).val(d(n.submitButton).val()).appendTo(n.currentForm);
								if (n.settings.submitHandler && !n.settings.debug) {
									t = n.settings.submitHandler.call(n, n.currentForm, i);
									if (e) e.remove();
									if (t !== undefined) return t;
									return false
								}
								return true
							}
							if (n.cancelSubmit) {
								n.cancelSubmit = false;
								return e()
							}
							if (n.form()) {
								if (n.pendingRequest) {
									n.formSubmitted = true;
									return false
								}
								return e()
							} else {
								n.focusInvalid();
								return false
							}
						})
					}
					return n
				},
				valid: function() {
					var e, t, i;
					if (d(this[0]).is("form")) e = this.validate().form();
					else {
						i = [];
						e = true;
						t = d(this[0].form).validate();
						this.each(function() {
							e = t.element(this) && e;
							if (!e) i = i.concat(t.errorList)
						});
						t.errorList = i
					}
					return e
				},
				rules: function(e, t) {
					var i = this[0],
						n = typeof this.attr("contenteditable") !== "undefined" && this.attr("contenteditable") !== "false",
						s, a, o, r, l, u;
					if (i == null) return;
					if (!i.form && n) {
						i.form = this.closest("form")[0];
						i.name = this.attr("name")
					}
					if (i.form == null) return;
					if (e) {
						s = d.data(i.form, "validator").settings;
						a = s.rules;
						o = d.validator.staticRules(i);
						switch (e) {
							case "add":
								d.extend(o, d.validator.normalizeRule(t));
								delete o.messages;
								a[i.name] = o;
								if (t.messages) s.messages[i.name] = d.extend(s.messages[i.name], t.messages);
								break;
							case "remove":
								if (!t) {
									delete a[i.name];
									return o
								}
								u = {};
								d.each(t.split(/\s/), function(e, t) {
									u[t] = o[t];
									delete o[t]
								});
								return u
						}
					}
					r = d.validator.normalizeRules(d.extend({}, d.validator.classRules(i), d.validator.attributeRules(i), d.validator.dataRules(i), d.validator.staticRules(i)), i);
					if (r.required) {
						l = r.required;
						delete r.required;
						r = d.extend({
							required: l
						}, r)
					}
					if (r.remote) {
						l = r.remote;
						delete r.remote;
						r = d.extend(r, {
							remote: l
						})
					}
					return r
				}
			});
			var i = function(e) {
					return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
				},
				s = (d.extend(d.expr.pseudos || d.expr[":"], {
					blank: function(e) {
						return !i("" + d(e).val())
					},
					filled: function(e) {
						var t = d(e).val();
						return t !== null && !!i("" + t)
					},
					unchecked: function(e) {
						return !d(e).prop("checked")
					}
				}), d.validator = function(e, t) {
					this.settings = d.extend(true, {}, d.validator.defaults, e);
					this.currentForm = t;
					this.init()
				}, d.validator.format = function(i, e) {
					if (arguments.length === 1) return function() {
						var e = d.makeArray(arguments);
						e.unshift(i);
						return d.validator.format.apply(this, e)
					};
					if (e === undefined) return i;
					if (arguments.length > 2 && e.constructor !== Array) e = d.makeArray(arguments).slice(1);
					if (e.constructor !== Array) e = [e];
					d.each(e, function(e, t) {
						i = i.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
							return t
						})
					});
					return i
				}, d.extend(d.validator, {
					defaults: {
						messages: {},
						groups: {},
						rules: {},
						errorClass: "error",
						pendingClass: "pending",
						validClass: "valid",
						errorElement: "label",
						focusCleanup: false,
						focusInvalid: true,
						errorContainer: d([]),
						errorLabelContainer: d([]),
						onsubmit: true,
						ignore: ":hidden",
						ignoreTitle: false,
						onfocusin: function(e) {
							this.lastActive = e;
							if (this.settings.focusCleanup) {
								if (this.settings.unhighlight) this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass);
								this.hideThese(this.errorsFor(e))
							}
						},
						onfocusout: function(e) {
							if (!this.checkable(e) && (e.name in this.submitted || !this.optional(e))) this.element(e)
						},
						onkeyup: function(e, t) {
							var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
							if (t.which === 9 && this.elementValue(e) === "" || d.inArray(t.keyCode, i) !== -1) return;
							else if (e.name in this.submitted || e.name in this.invalid) this.element(e)
						},
						onclick: function(e) {
							if (e.name in this.submitted) this.element(e);
							else if (e.parentNode.name in this.submitted) this.element(e.parentNode)
						},
						highlight: function(e, t, i) {
							if (e.type === "radio") this.findByName(e.name).addClass(t).removeClass(i);
							else d(e).addClass(t).removeClass(i)
						},
						unhighlight: function(e, t, i) {
							if (e.type === "radio") this.findByName(e.name).removeClass(t).addClass(i);
							else d(e).removeClass(t).addClass(i)
						}
					},
					setDefaults: function(e) {
						d.extend(d.validator.defaults, e)
					},
					messages: {
						required: "This field is required.",
						remote: "Please fix this field.",
						email: "Please enter a valid email address.",
						url: "Please enter a valid URL.",
						date: "Please enter a valid date.",
						dateISO: "Please enter a valid date (ISO).",
						number: "Please enter a valid number.",
						digits: "Please enter only digits.",
						equalTo: "Please enter the same value again.",
						maxlength: d.validator.format("Please enter no more than {0} characters."),
						minlength: d.validator.format("Please enter at least {0} characters."),
						rangelength: d.validator.format("Please enter a value between {0} and {1} characters long."),
						range: d.validator.format("Please enter a value between {0} and {1}."),
						max: d.validator.format("Please enter a value less than or equal to {0}."),
						min: d.validator.format("Please enter a value greater than or equal to {0}."),
						step: d.validator.format("Please enter a multiple of {0}.")
					},
					autoCreateRanges: false,
					prototype: {
						init: function() {
							this.labelContainer = d(this.settings.errorLabelContainer);
							this.errorContext = this.labelContainer.length && this.labelContainer || d(this.currentForm);
							this.containers = d(this.settings.errorContainer).add(this.settings.errorLabelContainer);
							this.submitted = {};
							this.valueCache = {};
							this.pendingRequest = 0;
							this.pending = {};
							this.invalid = {};
							this.reset();
							var a = this.currentForm,
								n = this.groups = {},
								i;
							d.each(this.settings.groups, function(i, e) {
								if (typeof e === "string") e = e.split(/\s/);
								d.each(e, function(e, t) {
									n[t] = i
								})
							});
							i = this.settings.rules;
							d.each(i, function(e, t) {
								i[e] = d.validator.normalizeRule(t)
							});

							function e(e) {
								var t = typeof d(this).attr("contenteditable") !== "undefined" && d(this).attr("contenteditable") !== "false";
								if (!this.form && t) {
									this.form = d(this).closest("form")[0];
									this.name = d(this).attr("name")
								}
								if (a !== this.form) return;
								var i = d.data(this.form, "validator"),
									n = "on" + e.type.replace(/^validate/, ""),
									s = i.settings;
								if (s[n] && !d(this).is(s.ignore)) s[n].call(i, this, e)
							}
							d(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e);
							if (this.settings.invalidHandler) d(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
						},
						form: function() {
							this.checkForm();
							d.extend(this.submitted, this.errorMap);
							this.invalid = d.extend({}, this.errorMap);
							if (!this.valid()) d(this.currentForm).triggerHandler("invalid-form", [this]);
							this.showErrors();
							return this.valid()
						},
						checkForm: function() {
							this.prepareForm();
							for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
							return this.valid()
						},
						element: function(e) {
							var i = this.clean(e),
								n = this.validationTargetFor(i),
								s = this,
								a = true,
								t, o;
							if (n === undefined) delete this.invalid[i.name];
							else {
								this.prepareElement(n);
								this.currentElements = d(n);
								o = this.groups[n.name];
								if (o) d.each(this.groups, function(e, t) {
									if (t === o && e !== n.name) {
										i = s.validationTargetFor(s.clean(s.findByName(e)));
										if (i && i.name in s.invalid) {
											s.currentElements.push(i);
											a = s.check(i) && a
										}
									}
								});
								t = this.check(n) !== false;
								a = a && t;
								if (t) this.invalid[n.name] = false;
								else this.invalid[n.name] = true;
								if (!this.numberOfInvalids()) this.toHide = this.toHide.add(this.containers);
								this.showErrors();
								d(e).attr("aria-invalid", !t)
							}
							return a
						},
						showErrors: function(t) {
							if (t) {
								var i = this;
								d.extend(this.errorMap, t);
								this.errorList = d.map(this.errorMap, function(e, t) {
									return {
										message: e,
										element: i.findByName(t)[0]
									}
								});
								this.successList = d.grep(this.successList, function(e) {
									return !(e.name in t)
								})
							}
							if (this.settings.showErrors) this.settings.showErrors.call(this, this.errorMap, this.errorList);
							else this.defaultShowErrors()
						},
						resetForm: function() {
							if (d.fn.resetForm) d(this.currentForm).resetForm();
							this.invalid = {};
							this.submitted = {};
							this.prepareForm();
							this.hideErrors();
							var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
							this.resetElements(e)
						},
						resetElements: function(e) {
							var t;
							if (this.settings.unhighlight)
								for (t = 0; e[t]; t++) {
									this.settings.unhighlight.call(this, e[t], this.settings.errorClass, "");
									this.findByName(e[t].name).removeClass(this.settings.validClass)
								} else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
						},
						numberOfInvalids: function() {
							return this.objectLength(this.invalid)
						},
						objectLength: function(e) {
							var t = 0,
								i;
							for (i in e)
								if (e[i] !== undefined && e[i] !== null && e[i] !== false) t++;
							return t
						},
						hideErrors: function() {
							this.hideThese(this.toHide)
						},
						hideThese: function(e) {
							e.not(this.containers).text("");
							this.addWrapper(e).hide()
						},
						valid: function() {
							return this.size() === 0
						},
						size: function() {
							return this.errorList.length
						},
						focusInvalid: function() {
							if (this.settings.focusInvalid) try {
								d(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
							} catch (e) {}
						},
						findLastActive: function() {
							var t = this.lastActive;
							return t && d.grep(this.errorList, function(e) {
								return e.element.name === t.name
							}).length === 1 && t
						},
						elements: function() {
							var i = this,
								n = {};
							return d(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
								var e = this.name || d(this).attr("name");
								var t = typeof d(this).attr("contenteditable") !== "undefined" && d(this).attr("contenteditable") !== "false";
								if (!e && i.settings.debug && window.console) console.error("%o has no name assigned", this);
								if (t) {
									this.form = d(this).closest("form")[0];
									this.name = e
								}
								if (this.form !== i.currentForm) return false;
								if (e in n || !i.objectLength(d(this).rules())) return false;
								n[e] = true;
								return true
							})
						},
						clean: function(e) {
							return d(e)[0]
						},
						errors: function() {
							var e = this.settings.errorClass.split(" ").join(".");
							return d(this.settings.errorElement + "." + e, this.errorContext)
						},
						resetInternals: function() {
							this.successList = [];
							this.errorList = [];
							this.errorMap = {};
							this.toShow = d([]);
							this.toHide = d([])
						},
						reset: function() {
							this.resetInternals();
							this.currentElements = d([])
						},
						prepareForm: function() {
							this.reset();
							this.toHide = this.errors().add(this.containers)
						},
						prepareElement: function(e) {
							this.reset();
							this.toHide = this.errorsFor(e)
						},
						elementValue: function(e) {
							var t = d(e),
								i = e.type,
								n = typeof t.attr("contenteditable") !== "undefined" && t.attr("contenteditable") !== "false",
								s, a;
							if (i === "radio" || i === "checkbox") return this.findByName(e.name).filter(":checked").val();
							else if (i === "number" && typeof e.validity !== "undefined") return e.validity.badInput ? "NaN" : t.val();
							if (n) s = t.text();
							else s = t.val();
							if (i === "file") {
								if (s.substr(0, 12) === "C:\\fakepath\\") return s.substr(12);
								a = s.lastIndexOf("/");
								if (a >= 0) return s.substr(a + 1);
								a = s.lastIndexOf("\\");
								if (a >= 0) return s.substr(a + 1);
								return s
							}
							if (typeof s === "string") return s.replace(/\r/g, "");
							return s
						},
						check: function(t) {
							t = this.validationTargetFor(this.clean(t));
							var e = d(t).rules(),
								i = d.map(e, function(e, t) {
									return t
								}).length,
								n = false,
								s = this.elementValue(t),
								a, o, r, l;
							this.abortRequest(t);
							if (typeof e.normalizer === "function") l = e.normalizer;
							else if (typeof this.settings.normalizer === "function") l = this.settings.normalizer;
							if (l) {
								s = l.call(t, s);
								delete e.normalizer
							}
							for (o in e) {
								r = {
									method: o,
									parameters: e[o]
								};
								try {
									a = d.validator.methods[o].call(this, s, t, r.parameters);
									if (a === "dependency-mismatch" && i === 1) {
										n = true;
										continue
									}
									n = false;
									if (a === "pending") {
										this.toHide = this.toHide.not(this.errorsFor(t));
										return
									}
									if (!a) {
										this.formatAndAdd(t, r);
										return false
									}
								} catch (e) {
									if (this.settings.debug && window.console) console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e);
									if (e instanceof TypeError) e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.";
									throw e
								}
							}
							if (n) return;
							if (this.objectLength(e)) this.successList.push(t);
							return true
						},
						customDataMessage: function(e, t) {
							return d(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || d(e).data("msg")
						},
						customMessage: function(e, t) {
							var i = this.settings.messages[e];
							return i && (i.constructor === String ? i : i[t])
						},
						findDefined: function() {
							for (var e = 0; e < arguments.length; e++)
								if (arguments[e] !== undefined) return arguments[e];
							return undefined
						},
						defaultMessage: function(e, t) {
							if (typeof t === "string") t = {
								method: t
							};
							var i = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || undefined, d.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
								n = /\$?\{(\d+)\}/g;
							if (typeof i === "function") i = i.call(this, t.parameters, e);
							else if (n.test(i)) i = d.validator.format(i.replace(n, "{$1}"), t.parameters);
							return i
						},
						formatAndAdd: function(e, t) {
							var i = this.defaultMessage(e, t);
							this.errorList.push({
								message: i,
								element: e,
								method: t.method
							});
							this.errorMap[e.name] = i;
							this.submitted[e.name] = i
						},
						addWrapper: function(e) {
							if (this.settings.wrapper) e = e.add(e.parent(this.settings.wrapper));
							return e
						},
						defaultShowErrors: function() {
							var e, t, i;
							for (e = 0; this.errorList[e]; e++) {
								i = this.errorList[e];
								if (this.settings.highlight) this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass);
								this.showLabel(i.element, i.message)
							}
							if (this.errorList.length) this.toShow = this.toShow.add(this.containers);
							if (this.settings.success)
								for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
							if (this.settings.unhighlight)
								for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
							this.toHide = this.toHide.not(this.toShow);
							this.hideErrors();
							this.addWrapper(this.toShow).show()
						},
						validElements: function() {
							return this.currentElements.not(this.invalidElements())
						},
						invalidElements: function() {
							return d(this.errorList).map(function() {
								return this.element
							})
						},
						showLabel: function(e, t) {
							var i, n, s, a, o = this.errorsFor(e),
								r = this.idOrName(e),
								l = d(e).attr("aria-describedby");
							if (o.length) {
								o.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
								if (this.settings && this.settings.escapeHtml) o.text(t || "");
								else o.html(t || "")
							} else {
								o = d("<" + this.settings.errorElement + ">").attr("id", r + "-error").addClass(this.settings.errorClass);
								if (this.settings && this.settings.escapeHtml) o.text(t || "");
								else o.html(t || "");
								i = o;
								if (this.settings.wrapper) i = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
								if (this.labelContainer.length) this.labelContainer.append(i);
								else if (this.settings.errorPlacement) this.settings.errorPlacement.call(this, i, d(e));
								else i.insertAfter(e);
								if (o.is("label")) o.attr("for", r);
								else if (o.parents("label[for='" + this.escapeCssMeta(r) + "']").length === 0) {
									s = o.attr("id");
									if (!l) l = s;
									else if (!l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b"))) l += " " + s;
									d(e).attr("aria-describedby", l);
									n = this.groups[e.name];
									if (n) {
										a = this;
										d.each(a.groups, function(e, t) {
											if (t === n) d("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
										})
									}
								}
							}
							if (!t && this.settings.success) {
								o.text("");
								if (typeof this.settings.success === "string") o.addClass(this.settings.success);
								else this.settings.success(o, e)
							}
							this.toShow = this.toShow.add(o)
						},
						errorsFor: function(e) {
							var t = this.escapeCssMeta(this.idOrName(e)),
								i = d(e).attr("aria-describedby"),
								n = "label[for='" + t + "'], label[for='" + t + "'] *";
							if (i) n = n + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #");
							return this.errors().filter(n)
						},
						escapeCssMeta: function(e) {
							if (e === undefined) return "";
							return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
						},
						idOrName: function(e) {
							return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
						},
						validationTargetFor: function(e) {
							if (this.checkable(e)) e = this.findByName(e.name);
							return d(e).not(this.settings.ignore)[0]
						},
						checkable: function(e) {
							return /radio|checkbox/i.test(e.type)
						},
						findByName: function(e) {
							return d(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
						},
						getLength: function(e, t) {
							switch (t.nodeName.toLowerCase()) {
								case "select":
									return d("option:selected", t).length;
								case "input":
									if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
							}
							return e.length
						},
						depend: function(e, t) {
							return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : true
						},
						dependTypes: {
							boolean: function(e) {
								return e
							},
							string: function(e, t) {
								return !!d(e, t.form).length
							},
							function: function(e, t) {
								return e(t)
							}
						},
						optional: function(e) {
							var t = this.elementValue(e);
							return !d.validator.methods.required.call(this, t, e) && "dependency-mismatch"
						},
						elementAjaxPort: function(e) {
							return "validate" + e.name
						},
						startRequest: function(e) {
							if (!this.pending[e.name]) {
								this.pendingRequest++;
								d(e).addClass(this.settings.pendingClass);
								this.pending[e.name] = true
							}
						},
						stopRequest: function(e, t) {
							this.pendingRequest--;
							if (this.pendingRequest < 0) this.pendingRequest = 0;
							delete this.pending[e.name];
							d(e).removeClass(this.settings.pendingClass);
							if (t && this.pendingRequest === 0 && this.formSubmitted && this.form() && this.pendingRequest === 0) {
								d(this.currentForm).trigger("submit");
								if (this.submitButton) d("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
								this.formSubmitted = false
							} else if (!t && this.pendingRequest === 0 && this.formSubmitted) {
								d(this.currentForm).triggerHandler("invalid-form", [this]);
								this.formSubmitted = false
							}
						},
						abortRequest: function(e) {
							var t;
							if (this.pending[e.name]) {
								t = this.elementAjaxPort(e);
								d.ajaxAbort(t);
								this.pendingRequest--;
								if (this.pendingRequest < 0) this.pendingRequest = 0;
								delete this.pending[e.name];
								d(e).removeClass(this.settings.pendingClass)
							}
						},
						previousValue: function(e, t) {
							t = typeof t === "string" && t || "remote";
							return d.data(e, "previousValue") || d.data(e, "previousValue", {
								old: null,
								valid: true,
								message: this.defaultMessage(e, {
									method: t
								})
							})
						},
						destroy: function() {
							this.resetForm();
							d(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
						}
					},
					classRuleSettings: {
						required: {
							required: true
						},
						email: {
							email: true
						},
						url: {
							url: true
						},
						date: {
							date: true
						},
						dateISO: {
							dateISO: true
						},
						number: {
							number: true
						},
						digits: {
							digits: true
						},
						creditcard: {
							creditcard: true
						}
					},
					addClassRules: function(e, t) {
						if (e.constructor === String) this.classRuleSettings[e] = t;
						else d.extend(this.classRuleSettings, e)
					},
					classRules: function(e) {
						var t = {},
							i = d(e).attr("class");
						if (i) d.each(i.split(" "), function() {
							if (this in d.validator.classRuleSettings) d.extend(t, d.validator.classRuleSettings[this])
						});
						return t
					},
					normalizeAttributeRule: function(e, t, i, n) {
						if (/min|max|step/.test(i) && (t === null || /number|range|text/.test(t))) {
							n = Number(n);
							if (isNaN(n)) n = undefined
						}
						if (n || n === 0) e[i] = n;
						else if (t === i && t !== "range") e[t === "date" ? "dateISO" : i] = true
					},
					attributeRules: function(e) {
						var t = {},
							i = d(e),
							n = e.getAttribute("type"),
							s, a;
						for (s in d.validator.methods) {
							if (s === "required") {
								a = e.getAttribute(s);
								if (a === "") a = true;
								a = !!a
							} else a = i.attr(s);
							this.normalizeAttributeRule(t, n, s, a)
						}
						if (t.maxlength && /-1|2147483647|524288/.test(t.maxlength)) delete t.maxlength;
						return t
					},
					dataRules: function(e) {
						var t = {},
							i = d(e),
							n = e.getAttribute("type"),
							s, a;
						for (s in d.validator.methods) {
							a = i.data("rule" + s.charAt(0).toUpperCase() + s.substring(1).toLowerCase());
							if (a === "") a = true;
							this.normalizeAttributeRule(t, n, s, a)
						}
						return t
					},
					staticRules: function(e) {
						var t = {},
							i = d.data(e.form, "validator");
						if (i.settings.rules) t = d.validator.normalizeRule(i.settings.rules[e.name]) || {};
						return t
					},
					normalizeRules: function(n, s) {
						d.each(n, function(e, t) {
							if (t === false) {
								delete n[e];
								return
							}
							if (t.param || t.depends) {
								var i = true;
								switch (typeof t.depends) {
									case "string":
										i = !!d(t.depends, s.form).length;
										break;
									case "function":
										i = t.depends.call(s, s);
										break
								}
								if (i) n[e] = t.param !== undefined ? t.param : true;
								else {
									d.data(s.form, "validator").resetElements(d(s));
									delete n[e]
								}
							}
						});
						d.each(n, function(e, t) {
							n[e] = typeof t === "function" && e !== "normalizer" ? t(s) : t
						});
						d.each(["minlength", "maxlength"], function() {
							if (n[this]) n[this] = Number(n[this])
						});
						d.each(["rangelength", "range"], function() {
							var e;
							if (n[this])
								if (Array.isArray(n[this])) n[this] = [Number(n[this][0]), Number(n[this][1])];
								else if (typeof n[this] === "string") {
								e = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
								n[this] = [Number(e[0]), Number(e[1])]
							}
						});
						if (d.validator.autoCreateRanges) {
							if (n.min != null && n.max != null) {
								n.range = [n.min, n.max];
								delete n.min;
								delete n.max
							}
							if (n.minlength != null && n.maxlength != null) {
								n.rangelength = [n.minlength, n.maxlength];
								delete n.minlength;
								delete n.maxlength
							}
						}
						return n
					},
					normalizeRule: function(e) {
						if (typeof e === "string") {
							var t = {};
							d.each(e.split(/\s/), function() {
								t[this] = true
							});
							e = t
						}
						return e
					},
					addMethod: function(e, t, i) {
						d.validator.methods[e] = t;
						d.validator.messages[e] = i !== undefined ? i : d.validator.messages[e];
						if (t.length < 3) d.validator.addClassRules(e, d.validator.normalizeRule(e))
					},
					methods: {
						required: function(e, t, i) {
							if (!this.depend(i, t)) return "dependency-mismatch";
							if (t.nodeName.toLowerCase() === "select") {
								var n = d(t).val();
								return n && n.length > 0
							}
							if (this.checkable(t)) return this.getLength(e, t) > 0;
							return e !== undefined && e !== null && e.length > 0
						},
						email: function(e, t) {
							return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
						},
						url: function(e, t) {
							return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
						},
						date: function() {
							var i = false;
							return function(e, t) {
								if (!i) {
									i = true;
									if (this.settings.debug && window.console) console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\n" + "Please don't use it, since it relies on the Date constructor, which\n" + "behaves very differently across browsers and locales. Use `dateISO`\n" + "instead or one of the locale specific methods in `localizations/`\n" + "and `additional-methods.js`.")
								}
								return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
							}
						}(),
						dateISO: function(e, t) {
							return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
						},
						number: function(e, t) {
							return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
						},
						digits: function(e, t) {
							return this.optional(t) || /^\d+$/.test(e)
						},
						minlength: function(e, t, i) {
							var n = Array.isArray(e) ? e.length : this.getLength(e, t);
							return this.optional(t) || n >= i
						},
						maxlength: function(e, t, i) {
							var n = Array.isArray(e) ? e.length : this.getLength(e, t);
							return this.optional(t) || n <= i
						},
						rangelength: function(e, t, i) {
							var n = Array.isArray(e) ? e.length : this.getLength(e, t);
							return this.optional(t) || n >= i[0] && n <= i[1]
						},
						min: function(e, t, i) {
							return this.optional(t) || e >= i
						},
						max: function(e, t, i) {
							return this.optional(t) || e <= i
						},
						range: function(e, t, i) {
							return this.optional(t) || e >= i[0] && e <= i[1]
						},
						step: function(e, t, i) {
							var n = d(t).attr("type"),
								s = "Step attribute on input type " + n + " is not supported.",
								a = ["text", "number", "range"],
								o = new RegExp("\\b" + n + "\\b"),
								r = n && !o.test(a.join()),
								l = function(e) {
									var t = ("" + e).match(/(?:\.(\d+))?$/);
									if (!t) return 0;
									return t[1] ? t[1].length : 0
								},
								u = function(e) {
									return Math.round(e * Math.pow(10, h))
								},
								c = true,
								h;
							if (r) throw new Error(s);
							h = l(i);
							if (l(e) > h || u(e) % u(i) !== 0) c = false;
							return this.optional(t) || c
						},
						equalTo: function(e, t, i) {
							var n = d(i);
							if (this.settings.onfocusout && n.not(".validate-equalTo-blur").length) n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
								d(t).valid()
							});
							return e === n.val()
						},
						remote: function(a, o, e, r) {
							if (this.optional(o)) return "dependency-mismatch";
							r = typeof r === "string" && r || "remote";
							var l = this.previousValue(o, r),
								u, t, i;
							if (!this.settings.messages[o.name]) this.settings.messages[o.name] = {};
							l.originalMessage = l.originalMessage || this.settings.messages[o.name][r];
							this.settings.messages[o.name][r] = l.message;
							e = typeof e === "string" && {
								url: e
							} || e;
							i = d.param(d.extend({
								data: a
							}, e.data));
							if (l.old === i) return l.valid;
							l.old = i;
							u = this;
							this.startRequest(o);
							t = {};
							t[o.name] = a;
							d.ajax(d.extend(true, {
								mode: "abort",
								port: this.elementAjaxPort(o),
								dataType: "json",
								data: t,
								context: u.currentForm,
								success: function(e) {
									var t = e === true || e === "true",
										i, n, s;
									u.settings.messages[o.name][r] = l.originalMessage;
									if (t) {
										s = u.formSubmitted;
										u.toHide = u.errorsFor(o);
										u.formSubmitted = s;
										u.successList.push(o);
										u.invalid[o.name] = false;
										u.showErrors()
									} else {
										i = {};
										n = e || u.defaultMessage(o, {
											method: r,
											parameters: a
										});
										i[o.name] = l.message = n;
										u.invalid[o.name] = true;
										u.showErrors(i)
									}
									l.valid = t;
									u.stopRequest(o, t)
								}
							}, e));
							return "pending"
						}
					}
				}), {}),
				n;
			if (d.ajaxPrefilter) d.ajaxPrefilter(function(e, t, i) {
				var n = e.port;
				if (e.mode === "abort") {
					d.ajaxAbort(n);
					s[n] = i
				}
			});
			else {
				n = d.ajax;
				d.ajax = function(e) {
					var t = ("mode" in e ? e : d.ajaxSettings).mode,
						i = ("port" in e ? e : d.ajaxSettings).port;
					if (t === "abort") {
						d.ajaxAbort(i);
						s[i] = n.apply(this, arguments);
						return s[i]
					}
					return n.apply(this, arguments)
				}
			}
			return d.ajaxAbort = function(e) {
				if (s[e]) {
					s[e].abort();
					delete s[e]
				}
			}, d
		}) ? n.apply(t, i) : n) && (e.exports = t)
	},
	15: function(e, t, i) {
		"use strict";

		function n(e) {
			return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function s(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o(n.key), n)
			}
		}

		function a(e, t, i) {
			(t = o(t)) in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i
		}

		function o(e) {
			e = function(e, t) {
				if ("object" !== n(e) || null === e) return e;
				var i = e[Symbol.toPrimitive];
				if (void 0 === i) return ("string" === t ? String : Number)(e);
				i = i.call(e, t || "default");
				if ("object" !== n(i)) return i;
				throw new TypeError("@@toPrimitive must return a primitive value.")
			}(e, "string");
			return "symbol" === n(e) ? e : String(e)
		}
		i.d(t, "a", function() {
			return r
		});
		var r = function() {
			function e() {
				if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var t, i, n;
			return t = e, n = [{
				key: "getKeyFromCountry",
				value: function(e) {
					switch (e) {
						case "1":
						case "16":
							return this.Trengo_NL;
						case "50":
							return this.Trengo_SA;
						default:
							return this.Trengo_Other
					}
				}
			}], (i = null) && s(t.prototype, i), n && s(t, n), Object.defineProperty(t, "prototype", {
				writable: !1
			}), e
		}();
		a(r, "Trengo_NL", "Pc0O7oiNGF111cP"), a(r, "Trengo_SA", "zWXqxur6yzGpyS9"), a(r, "Trengo_Other", "CDZ02whoSFbotg9")
	},
	16: function(e, t, i) {
		"use strict";

		function s(e) {
			return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function a(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, function(e) {
					e = function(e, t) {
						if ("object" !== s(e) || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 === i) return ("string" === t ? String : Number)(e);
						i = i.call(e, t || "default");
						if ("object" !== s(i)) return i;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}(e, "string");
					return "symbol" === s(e) ? e : String(e)
				}(n.key), n)
			}
		}
		i.d(t, "a", function() {
			return n
		});
		var n = function() {
			function e() {
				if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var t, i, n;
			return t = e, (i = [{
				key: "initWidget",
				value: function(e) {
					var t, i;
					window.Trengo = window.Trengo || {}, window.Trengo.key = e, window.Trengo.gifPicker = !1, e = document, i = Math.floor((new Date).getTime() / 6e4), (t = e.createElement("script")).type = "text/javascript", t.defer = !0, t.src = "https://cdn.widget.trengo.eu/widget.js?t=" + i, e.getElementsByTagName("head")[0].appendChild(t)
				}
			}]) && a(t.prototype, i), n && a(t, n), Object.defineProperty(t, "prototype", {
				writable: !1
			}), e
		}()
	},
	22: function(e, t) {
		e.exports = function(e) {
			return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function() {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function() {
					return e.i
				}
			}), e.webpackPolyfill = 1), e
		}
	},
	265: function(e, t, i) {
		"use strict";
		i.r(t);
		i(79), i(40);
		var v = i(0),
			b = i(3);
		i(80);

		function n() {
			$("#searchbar-header").focus(), $(".background-distraction").addClass("bg-black-search bg-visible")
		}
		var y = null;

		function _(e, t) {
			e.children(".searchbar-content").hide(), !0 === t && e.removeClass("active")
		}

		function a(e, t, i, n) {
			$(e).data("current-index", n), $(t).removeClass("selected");
			var s = $(t[n]).data("name");
			e.val(s), i.html("'" + s + "'"), $(t[n]).addClass("selected").focus(), $(e).focus()
		}

		function s(e, t, i, n, s) {
			"" !== t && amplitude.getInstance().logEvent("Search Dropdown Clicked", {
				type: e,
				search_bar_value: t,
				filter: i,
				object_name: n,
				position: s
			})
		}
		$(document).ready(function() {
			$(document).on("click", ".search-menu #search-icon-mob-js", function(e) {
				$(".nav-cart").removeClass("active"), $(".user-menu").removeClass("active"), $(this).parent().toggleClass("active")
			}), $(document).on("click", "#search-icon-desktop-js", function() {
				n()
			}), $(document).on("click keyup change", "#searchbar-header", function() {
				n()
			}), $(document).on("keyup", ".searchbar", function(e) {
				var t = $(this),
					i = t.parents(".user-input-container.active").find(".searchbar-content-container-link .search-link span"),
					n = t.parents(".user-input-container.active").find(".searchbar-content-container").children(".searchbar-item"),
					s = t.data("current-index");
				1 < n.length && !n.hasClass("spin") && ("ArrowDown" === e.key ? a(t, n, i, "" === s || s + 1 >= n.length ? 0 : s + 1) : "ArrowUp" === e.key && a(t, n, i, "" === s || s - 1 < 0 ? n.length - 1 : s - 1)), "Backspace" === e.key && $(t).data("current-index", "")
			}), window.addEventListener("keydown", function(e) {
				-1 < ["ArrowUp", "ArrowDown"].indexOf(e.code) && e.preventDefault()
			}, !1), $(document).on("click keyup", ".searchbar", function(a) {
				var i, n, e, t = $(".search-result-count"),
					o = $(this),
					r = o.val(),
					l = o.data("location"),
					s = o.parents(".user-input-container").children(".searchbar-content"),
					u = o.parents(".user-input-container").children(".hidden-block"),
					c = s.find(".searchbar-content-container"),
					h = o.parents(".user-input-container").find(".remove-input"),
					d = s.find("#search-term"),
					f = s.find(".search-link"),
					p = $("#dropdown-filter .filter-content.filter-dropdown"),
					m = 0 < p.length ? p.val() : "",
					p = $(".dropdown-filter .hidden-block"),
					g = s.find(".recent-searches");
				$(".searchbar-content").not(s).hide(), o.parents(".user-input-container").hasClass("active") || c.html('<div class="searchbar-item spin"><i class="fas fa-circle-notch fa-spin centered search-spinner "></i></div>'), Object(b.c)($("#HOME_DROPDOWN_ALL_RESULTS").val(), /\[\*TERM\*\]/, '"' + r + '"', d, !0), t.html("<i class=\"fas fa-circle-notch fa-spin centered search-spinner \" style='font-size: 12px'></i>"), 2 < r.length ? (g.css("display", "none"), f.css("display", "block"), f.attr("data-a-link", Object(v.createOneDomainUrl)("/search?s=" + o.val() + "&origin=homepage")), s.show(), 979 < $(window).width() && u.show(), p.hide(), o.parents(".user-input-container").addClass("active"), Object(b.a)(function() {
					var t, i, e, n = String.fromCharCode(a.keyCode).match(/\w/),
						s = 8 === a.keyCode || 46 === a.keyCode || 32 === a.keyCode;
					(n || s) && (n = r, s = m, t = c, i = o, e = l, y = $.ajax({
						type: "GET",
						url: Object(v.createOneDomainUrl)("/ajax-get-suggestions-searchbar"),
						data: {
							csrf: $("body").data("token"),
							s: n,
							filter: s,
							location: e
						},
						dataType: "json",
						success: function(e) {
							null != y && y.abort(), !1 !== e && (t.html(e), $(i).focus())
						}
					}))
				}, 0), Object(b.b)(function() {
					var t, i, n, e = String.fromCharCode(a.keyCode).match(/\w/),
						s = 8 === a.keyCode || 46 === a.keyCode || 32 === a.keyCode;
					(e || s) && (t = r, i = m, n = l, $.ajax({
						type: "GET",
						url: Object(v.createOneDomainUrl)("/ajax-get-search-result-count"),
						data: {
							csrf: $("body").data("token"),
							s: t,
							filter: i,
							async: !1
						},
						dataType: "json",
						success: function(e) {
							e && $(".search-result-count").text("(" + e + ")"), amplitude.getInstance().logEvent("Search Dropdown Shown", {
								location: n,
								search_term: t,
								filter: i
							})
						}
					}))
				}, 500)) : r.length <= 2 && !0 == (d = c, t = o, 0 !== (e = (e = localStorage.getItem("stuviaLocalSearches") || "") ? JSON.parse(e) : []).length && (i = "", n = Object(v.createOneDomainUrl)("/search?s="), e.forEach(function(e, t) {
					i += '<div class="searchbar-item autocomplete-item-js" data-index="' + t + '1" data-name="' + e + '">\n                        <div class="searchbar-item-text">\n                            <span class="left">' + e + '</span>  \n                        </div>\n                         <a href="' + n + e + '&origin=recentsearch" rel="nofollow" class="searchbar-url"></a>\n                    </div>'
				}), d.html(i), $(t).focus(), !0)) ? (f.css("display", "none"), g.css("display", "block"), $(".searchbar-content").not(s).hide(), s.show(), $(".searchbar-content.searchbar-content-mob").show(), 979 < $(window).width() && u.show(), p.hide(), o.parents(".user-input-container").addClass("active")) : (f.css("display", "none"), g.css("display", "none"), s.hide(), u.hide(), o.parents(".user-input-container").removeClass("active"), _($(".user-input-container"), !1)), 0 < o.val().length ? h.show() : h.hide()
			}), $(document).on("click", ".remove-input", function(e) {
				$(this).parent().find("input[type='text']").val(""), $(this).hasClass("big") && ($(this).hide(), _($(".user-input-container"), !0))
			}), $(document).mouseup(function(e) {
				var t = $(".created-dropdown-header .select2-search__field"),
					i = $(".header-wrapper"),
					n = $(".search-icon-i");
				$(e.target).hasClass("select2-results__option") || t.find("*").is(e.target) || t.is(e.target) || 0 !== t.has(e.target).length || i.find("*").is(e.target) || i.is(e.target) || 0 !== i.has(e.target).length || n.find("*").is(e.target) || n.is(e.target) || 0 !== n.has(e.target).length || ($(".background-distraction").removeClass("bg-black-search bg-visible"), $(".flat-input").removeClass("border-straight-search").addClass("border-rounded-search"), $(".search-form").removeClass("active"), _($(".user-input-container"), !0))
			}), $(document).on("mouseover", ".searchbar-item", function() {
				var e = $(this).parents(".searchbar-autocomplete-container").find(".searchbar");
				$(".searchbar-item").removeClass("selected"), $(e).data("current-index", "")
			}), $("#searchbar-form,#searchbar-form-header").submit(function(e) {
				e.preventDefault();
				var t = $(this),
					i = t.parents(".searchbar-autocomplete-container").find(".searchbar-item.selected"),
					t = t.parents(".searchbar-autocomplete-container").find(".searchbar-item.selected").find("a").attr("href");
				void 0 !== t ? (s(i.data("type"), i.data("query"), i.data("filter"), i.data("name"), i.data("ranking")), window.location.href = t) : e.currentTarget.submit()
			}), $(document).on("mouseenter", ".dropdown-item", function() {
				$(this).nextAll().not(".hidden").first().addClass("no-top")
			}), $(document).on("mouseleave", ".dropdown-item", function() {
				$(this).nextAll().not(".hidden").first().removeClass("no-top")
			}), $(document).on("click", ".searchbar-item", function() {
				var e = $(this);
				s(e.data("type"), e.data("query"), e.data("filter"), e.data("name"), e.data("ranking"))
			})
		});
		var o = i(4);

		function r(e) {
			return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		$(document).ready(function() {
			$(".header-category").mouseenter(function() {
				var e = $(this).data("index"),
					t = $(this).data("top");
				$(".header-category.selected-" + t).removeClass("selected"), $(this).addClass("selected"), $(".header-category-content-" + t).addClass("display-none"), $(".category-index-" + e + "-" + t).removeClass("display-none")
			}), $(".mega-menu-item").hover(function() {
				$(".background-distraction").hasClass("bg-visible") || $(".background-distraction").addClass("bg-visible")
			}, function() {
				$(".background-distraction").removeClass("bg-visible")
			}), $(".m-hamburger .hamburger-menu").click(function(e) {
				e.preventDefault(), $("body").css("overflow", "hidden"), $(".search-menu").removeClass("active"), $(".nav-cart").removeClass("active"), $(".user-menu").removeClass("active"), $(this).parents(".header-wrapper").toggleClass("nav-active");
				var e = window.innerHeight + 2,
					t = $(".nav-primary"),
					t = (t.toggleClass("active"), t.css("height", e + "px"), $("#trengo-web-widget").hide(), $(".mob-bar-wrap").hide(), $("#flag-class").val());
				$(".header-flag").addClass(t)
			}), $(document).on("click", "#mobile-header-close-action", function(e) {
				e.preventDefault(), $("body").css("overflow", "inherit"), $(".mo-wrap").show(), $(".search-menu").removeClass("active"), $(".nav-cart").removeClass("active"), $(".user-menu").removeClass("active"), $(".header-wrapper").toggleClass("nav-active"), $(".nav-primary").toggleClass("active")
			}), $(".nav-primary .list-menu label").click(function(e) {
				e.preventDefault(), $(this).parent().addClass("active"), $(".main-header .header-wrapper").addClass("nav-child-active")
			}), $(".nav-menu-child .back-list-menu").click(function(e) {
				e.preventDefault(), $(".list-menu").removeClass("active"), $(".main-header .header-wrapper").removeClass("nav-child-active"), $(".mo-wrap").show()
			});
			var a = 0;
			$(window).scroll(function() {
				var e = $(".main-header"),
					t = $(this).scrollTop(),
					i = $(".contentpage-page"),
					n = $(".funnel-page"),
					s = !1;
				(0 < i.length || 0 < n.length) && (s = !0), a = ($(window).width() < 980 ? $(".nav-primary").hasClass("active") || (a < t ? e.css("position", "absolute") : (s && t < 110 || !s && t + 25 < a) && e.slideDown().css("position", "fixed")) : (0 === i.length && e.css("position", "fixed"), 300 < t && a < t ? ($("#header-categories-js").slideUp(), $(".background-distraction").addClass("bg-black-search-less")) : (t + 20 < a && !s && !$("#header-categories-js").hasClass("closed") || s && t < 20) && ($("#header-categories-js").slideDown(), $(".background-distraction").removeClass("bg-black-search-less"))), t)
			}), $(document).on("click", ".user-menu-js", function(e) {
				$(".search-menu").removeClass("active"), $(".nav-cart").removeClass("active");
				var t = $(".user-preview");
				$(this).parent().hasClass("active") ? ($(this).parent().removeClass("active"), t.css({
					opacity: 0,
					visibility: "hidden"
				})) : ($(this).parent().addClass("active"), t.css({
					opacity: 1,
					visibility: "visible"
				}))
			}), $(document).on("click", ".nav-cart .cart-now", function(e) {
				e.preventDefault(), $(".search-menu").removeClass("active"), $(".user-menu").removeClass("active"), $(this).parent().toggleClass("active")
			}), $(document).on("click", "#notification-bell-js ", function(e) {
				e.preventDefault();
				e = $(".notif-preview");
				$("#notif-header-js").html('<li class="header-loader fa-3x"><i class="fas fa-spinner fa-pulse"></i></li>'), "visible" === e.css("visibility") ? e.css({
					opacity: 0,
					visibility: "hidden"
				}) : (e.css({
					opacity: 1,
					visibility: "visible"
				}), $.ajax({
					type: "POST",
					url: Object(v.createOneDomainUrl)("/ajax-mvc/get-header-notifications"),
					cache: !1,
					async: !1,
					dataType: "json",
					data: {
						csrf: $("body").data("token")
					},
					success: function(e) {
						!e || e.hasOwnProperty("error") ? window.location.reload() : $("#notif-header-js").html(e)
					}
				}))
			}), $(document).mouseup(function(e) {
				var t = $(".notif-preview");
				t.find("*").is(e.target) || t.is(e.target) || 0 !== t.has(e.target).length || t.css({
					opacity: 0,
					visibility: "hidden"
				})
			}), $(document).on("click", ".see-all-close-js", function() {
				event.preventDefault(), $.ajax({
					type: "POST",
					url: Object(v.createOneDomainUrl)("/ajax-mvc/mark-all-read-notifications"),
					cache: !1,
					async: !1,
					dataType: "json",
					data: {
						csrf: $("body").data("token"),
						action: "all-read"
					},
					success: function() {
						$(".notif-preview").css({
							opacity: 0,
							visibility: "hidden"
						}), $(".nav-notif").fadeOut(1e3)
					}
				})
			}), $(document).on("click", ".header-cat-link", function() {
				var e = $(this).data("content"),
					t = $(this).data("category");
				amplitude.getInstance().logEvent("Header Menu Clicked", {
					button_name_clicked: e,
					top_category: t
				})
			}), $(document).on("click", "a.header-login-link", function() {
				var e = $("body").data("fb-status");
				"undefined" !== r(e) && !1 !== e && "connected" === e && $(this).find("img").replaceWith('<i class="far fa-spinner-third fa-spin"></i>')
			}), $(document).on("click", ".cta-addtocart", function() {
				var e = $("body").data("fb-status");
				"undefined" !== r(e) && !1 !== e && "connected" === e && $(this).html('<span class="strong">' + $(this).data("login-message") + '...</span> <i class="far fa-spinner-third fa-spin"></i>')
			}), $(document).on("click", "a.header-cart-link", function() {
				var e = $("body").data("fb-status");
				"undefined" !== r(e) && !1 !== e && "connected" === e && $(this).html('<span class="strong">' + $(this).data("login-message") + '...</span> <i class="far fa-spinner-third fa-spin"></i>')
			}), $(document).on("click", ".mp-new-header", function() {
				var e = $(this);
				amplitude.getInstance().logEvent("Header Top Link Clicked", {
					to: e.attr("href")
				})
			}), $(document).on("click", ".mo-list", function() {
				var e = $(this).data("item");
				$(".mo-wrap").hide(), $(".mo-wrap-" + e).show()
			}), $(document).on("click", ".search-dropdown .dropdownlist .dropdownitem", function() {
				var e = $(this),
					t = $(".dropdownlist");
				switch (t.hasClass("list-closed") ? (t.removeClass("list-closed"), t.addClass("list-open"), $(".search-dropdown").css({
						"border-left": "1px solid rgb(170, 216, 245)",
						"border-bottom": "1px solid rgb(170, 216, 245)"
					}), $(".dropdownitem").css({
						"padding-top": "5px",
						"padding-bottom": "5px"
					})) : (t.removeClass("list-open"), t.addClass("list-closed"), $(".search-dropdown").css({
						"border-left": "hidden",
						"border-bottom": "hidden"
					}), $(".dropdownitem").css({
						"padding-top": "0px",
						"padding-bottom": "0px"
					}), e.remove(), t.prepend(e)), $(".search-dropdown .dropdownitem").toggleClass("active"), $(this).addClass("active"), $("input[id='category-header']").val($(this).attr("id")), $(this).attr("id")) {
					case "course":
						$("#search-input").attr("placeholder", $("#SEARCH_PLACEHOLDER_COURSE").val()), $(".flat-input-language").css({
							"text-indent": "100px"
						});
						break;
					case "book":
						$("#search-input").attr("placeholder", $("#SEARCH_PLACEHOLDER_ISBN").val()), $(".flat-input-language").css({
							"text-indent": "90px"
						});
						break;
					case "qualifications":
						$("#search-input").attr("placeholder", $("#SEARCH_PLACEHOLDER_QUALIFICATIONS").val()), $(".flat-input-language").css({
							"text-indent": "155px"
						})
				}
			}), $(".select-category").change(function() {
				switch ($("input[id='category-mobile']").val($(this).val()), $(this).val()) {
					case "course":
						$("#search").attr("placeholder", $("#SEARCH_PLACEHOLDER_COURSE").val());
						break;
					case "book":
						$("#search").attr("placeholder", $("#SEARCH_PLACEHOLDER_ISBN").val());
						break;
					case "qualifications":
						$("#search").attr("placeholder", $("#SEARCH_PLACEHOLDER_QUALIFICATIONS").val())
				}
			}), $(document).mouseup(function(e) {
				var t = $(".header-country"),
					i = $(".language-dropdown"),
					n = $(".arrow-dropdown");
				!t.find("*").is(e.target) && !t.is(e.target) && 0 === t.has(e.target).length || t.is(e.target) && i.hasClass("listopen") ? (i.css({
					opacity: 0,
					visibility: "hidden"
				}), i.removeClass("listopen"), n.removeClass("fa-chevron-up").addClass("fa-chevron-down")) : (i.addClass("listopen"), i.css({
					opacity: 1,
					visibility: "visible"
				}), n.removeClass("fa-chevron-down").addClass("fa-chevron-up"))
			}), $(document).on("click", ".select-country", function() {
				var e = $(this).data("country");
				$(".select-country").removeClass("selected"), $(".select-language").removeClass("selected"), $(".select-currency").removeClass("selected"), $(this).addClass("selected"), $(".country-language-item-" + e).addClass("selected"), $(".languages-for-country").hide(), $(".currencies-for-country").hide(), $(".lang-country-" + e).show(), $(".currency-country-" + e).show()
			}), $(document).on("click", ".select-language", function() {
				$(".select-language").removeClass("selected"), $(this).addClass("selected")
			}), $(document).on("click", ".select-currency", function() {
				$(".select-currency").removeClass("selected"), $(this).addClass("selected")
			}), $(document).on("click", "#submitChangeCountry", function() {
				amplitude.getInstance().logEvent("Country changed", {
					countryOld: $(this).attr("data-name"),
					langOld: $(this).attr("data-lang"),
					countryNew: $(".select-country.selected").data("country"),
					langNew: $(".select-language.selected").data("lang")
				})
			}), $(document).on("click", "#submitChangeCountry", function() {
				$(this).prop("disabled", !0);
				var e = $(".select-country.selected").data("country"),
					t = $(".select-language.selected").data("lang"),
					i = $("#currencyCountry-" + e).data("currency");
				999 === e && (i = $(".select-currency.selected").data("currency")), e && i && t ? $.ajax({
					type: "POST",
					url: "/change-basics/save",
					crossDomain: !0,
					data: {
						csrf: $("body").data("token"),
						country: e,
						language: t,
						currency: i,
						top_location: window.top.location.pathname.substr(1) + window.top.location.search
					},
					success: function(e) {
						$("#submitChangeCountry").prop("disabled", !1), window.top.location = e.redirectUrl
					}
				}) : $(this).prop("disabled", !1)
			}), $(document).on("click", "#up-and-win-banner-close", function() {
				$(".upload-and-win-general-banner").slideUp(), $(".all-page-wrapper").removeClass("all-page-wrapper", 1e3), o.a.post({}, "/ajax-mvc/banner-seen", function(e) {})
			})
		}), $(document).ready(function() {
			var e = /bot|google|baidu|bing|msn/i.test(navigator.userAgent),
				t = $("#domain-mismatch-popup");
			0 < t.length && !e && $.fancybox.open({
				baseClass: "fancybox-low-opacity",
				autoSize: !0,
				autoScale: !0,
				closeExisting: !0,
				src: "#domain-mismatch-popup",
				type: "inline",
				enableEscapeButton: !0,
				_closeOnClickOutside: !0,
				touch: !1,
				smallBtn: !0,
				toolbar: !1,
				btnTpl: {
					smallBtn: '<button class="custom-fancybox-close" title="Close"><i class="far fa-times"></i></button>'
				},
				afterClose: function() {
					$.ajax({
						url: Object(v.createOneDomainUrl)("/ajax-mvc/domain-mismatch"),
						data: {
							action: t.data("action"),
							ipDomain: t.data("ip-domain"),
							ipCountry: t.data("ip-country"),
							currentDomain: t.data("current-domain"),
							path: window.location.pathname,
							getParams: window.location.search
						},
						method: "POST",
						success: function(e) {
							return 0 < e.length && window.location.replace(e), !1
						}
					})
				}
			}), $(document).on("click", ".domain-mismatch-btn", function(e) {
				e.preventDefault();
				var e = $(this),
					t = $("#domain-mismatch-popup");
				t.data("action", e.data("action")), t.data("click-action", "flag"), $.fancybox.close()
			}), $(document).on("click", ".custom-fancybox-close", function(e) {
				e.preventDefault(), $("#domain-mismatch-popup").data("click-action", "close-button"), $.fancybox.close()
			})
		});
		var l = i(15),
			u = i(16);

		function c(e) {
			return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function h(n) {
			var e = $("body"),
				t = e.data("fb-status"),
				s = {
					csrf: e.data("token"),
					action: "add",
					type: n.data("type"),
					id: n.data("id"),
					upsellingBundle: n.data("upselling-bundle"),
					fbStatus: "undefined" !== c(t) && !1 !== t && "connected" === t
				};
			$.ajax({
				type: "POST",
				url: Object(v.createOneDomainUrl)("/ajax-mvc/update-shoppingcart"),
				data: s,
				cache: !1,
				async: !1,
				dataType: "json",
				autoWidth: !0,
				success: function(e) {
					var t, i;
					!e || e.hasOwnProperty("error") || "checkout-page" === $("#page").data("page") ? window.location.reload() : (n.append(e.cartPopup), t = s.id, i = s.type, $.fancybox.open({
						closeExisting: !0,
						src: "#shoppingcart-popup-" + i + "-" + t,
						type: "inline",
						autosize: !1,
						touch: !1,
						afterClose: function() {
							$("#shoppingcart-popup-" + i + "-" + t).remove()
						}
					}), $("#header-cart").html(e.userHeaderData), $(".wrapper-right").addClass("items-in-cart"))
				}
			})
		}

		function d(e) {
			var i = {
				csrf: $("body").data("token"),
				action: "save",
				type: e.data("type"),
				id: e.data("id")
			};
			$.ajax({
				type: "POST",
				url: Object(v.createOneDomainUrl)("/ajax-mvc/update-wishlist"),
				data: i,
				cache: !1,
				async: !1,
				dataType: "json",
				success: function(e) {
					var t;
					e && (amplitude.getInstance().logEvent("Wishlist Item Added", {
						item_type: 1 === (t = i.type) ? "document" : 2 === t ? "flashcard" : 3 === t ? "bundle" : void 0
					}), $(".button-add-wishlist-" + i.id).hide(), $(".button-delete-wishlist-" + i.id).show(), $("#header-wishlist").html(e.userHeaderData))
				}
			})
		}

		function f(e) {
			return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function p(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, function(e) {
					e = function(e, t) {
						if ("object" !== f(e) || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 === i) return ("string" === t ? String : Number)(e);
						i = i.call(e, t || "default");
						if ("object" !== f(i)) return i;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}(e, "string");
					return "symbol" === f(e) ? e : String(e)
				}(n.key), n)
			}
		}
		var m = function() {
			function e() {
				if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var t, i, n;
			return t = e, n = [{
				key: "makeElementLink",
				value: function() {
					$(document).on("click", ".no-a-link-js", function(e) {
						var t = $(this).data("a-link"),
							e = e.ctrlKey || e.shiftKey || e.metaKey ? "_blank" : null != (e = $(this).data("a-link-target")) ? e : "_self";
						window.open(t, e)
					})
				}
			}, {
				key: "slowScroll",
				value: function() {
					$(document).on("click", ".slow-scroll-js", function() {
						var e = $(this).data("scroll-link");
						$("html, body").animate({
							scrollTop: $(e).offset().top - 150
						}, "slow"), location.href = e
					})
				}
			}], (i = null) && p(t.prototype, i), n && p(t, n), Object.defineProperty(t, "prototype", {
				writable: !1
			}), e
		}();

		function g() {
			$.ajax({
				url: "/live/resources/ajax/cookies/cookie_ajax.php"
			})
		}
		jQuery.event.special.touchstart = {
			setup: function(e, t, i) {
				this.addEventListener("touchstart", i, {
					passive: !t.includes("noPreventDefault")
				})
			}
		}, jQuery.event.special.touchmove = {
			setup: function(e, t, i) {
				this.addEventListener("touchmove", i, {
					passive: !t.includes("noPreventDefault")
				})
			}
		}, jQuery.event.special.wheel = {
			setup: function(e, t, i) {
				this.addEventListener("wheel", i, {
					passive: !0
				})
			}
		}, jQuery.event.special.mousewheel = {
			setup: function(e, t, i) {
				this.addEventListener("mousewheel", i, {
					passive: !0
				})
			}
		};

		function x(e, t, i) {
			var n = !0,
				i = (!1 === i && (n = !1), ""),
				s = ("" !== t && void 0 !== t && (i = "&redirect=" + t), "default"),
				t = "/onboarding/start?action=register&origin=" + (s = "close-payment" === t ? $(window).width() < 640 ? "purchase-mobile" : "purchase" : s) + i;
			"login" === e ? t = "/onboarding/start?action=login&origin=" + s + i : "changeStudyDetails" === e && (t = "/onboarding/change"), $(window).width() < 640 ? window.location.href = t : $.fancybox.open({
				autoScale: !0,
				speedIn: 300,
				minHeight: 680,
				transitionIn: "elastic",
				type: "iframe",
				src: t,
				toolbar: !1,
				keyboard: n,
				smallBtn: n,
				clickSlide: n,
				clickOutside: n,
				closeBtn: n,
				iframe: {
					preload: !1,
					css: {
						maxWidth: "680px",
						maxHeight: "900px"
					}
				},
				helpers: {
					overlay: {
						closeClick: n
					}
				},
				buttons: {
					close: !0 === n ? [27] : null
				}
			})
		}
		$(document).ready(function() {
			1 === $("body").data("logged-in") && $.ajax({
				type: "POST",
				url: Object(v.createOneDomainUrl)("/ajax-mvc/get-user-header-data"),
				data: {
					csrf: $("body").data("token")
				},
				cache: !1,
				success: function(e) {
					var t;
					e && e.hasOwnProperty("return") && (1 < e.return.sum_doc_fc && $(".header-add-bundle-sell").show(), 1 === e.return.up_win_active) && ($(".header-up-win").show(), 0 < e.return.up_win_vouchers) && ((t = $(".header-up-win-voucher")).text("(" + e.return.up_win_vouchers + ")"), t.show())
				}
			}), $(document).on("click", ".open-onboarding-popup", function() {
				var e = Object(v.createOneDomainUrl)("/login");
				$(this).hasClass("step-2") && (e = "/onboarding/default"), $.fancybox.open({
					autoScale: !0,
					speedIn: 300,
					transitionIn: "elastic",
					type: "iframe",
					src: e,
					toolbar: !1,
					smallBtn: !0,
					closeBtn: !0,
					iframe: {
						preload: !1,
						css: {
							maxWidth: "680px",
							maxHeight: "900px"
						}
					}
				})
			}), 0 < $("#headerSimple").length && (i = $("#flag-class").val(), $(".flag-footer").addClass(i));
			var n = !0,
				s = $(".main-footer, .checkout-footer");
			$(window).on("scroll", function() {
				var e, t, i;
				0 < s.length && (e = $(window).scrollTop(), i = s.offset().top - s.height() - 200, 20 < e && n && (n = !1, t = document.getElementById("app").getAttribute("data-country"), (new u.a).initWidget(l.a.getKeyFromCountry(t))), (t = $("#trengo-web-widget")).hasClass("keep-open") || (!(i <= e) && 980 < $(window).width() && !$(".nav-primary").hasClass("active") && 25 < e ? t.fadeIn() : t.fadeOut()), e >= s.offset().top ? $("header .full-width-wrap.blue").addClass("purple-clr") : $("header .full-width-wrap.blue").removeClass("purple-clr"), t = s, (i = i) <= 1.2 * e) && (i = $("#flag-class").val(), $(".flag-footer").addClass(i), t.addClass("background-image"))
			}), $(document).on("click", ".open-login-box", function(e) {
				e.preventDefault();
				var e = $(this).attr("data-url"),
					t = $(this).data("text");
				"upload-document" === (e = t ? e + "&contentId=" + t : e) ? x("register", e): x("register", e, !0)
			}), $("#footer-trengo, .open-trengo").on("click", function() {
				$("#trengo-web-widget").attr("style", "display: block !important").addClass("keep-open")
			}), $(document).on("click", ".quickview-doc", function(e) {
				var t, i, n;
				return e.preventDefault(), e = $(this), t = e.data("id"), i = e.data("type"), n = $("#iframe-src-doc-" + t).val(), $(".time-since").hide(), !1 === e.data("loaded") && ($("#preview-" + t).append('<object src="' + n + '" id="document-preview" class="document-preview-iframe" style="width: 100%; height: 100%;"></object> '), e.data("loaded", !0)), t && i && n && ($.ajax({
					type: "GET",
					url: Object(v.createOneDomainUrl)("/ajax-mvc/user-document-info"),
					data: {
						csrf: $("body").data("token"),
						id: t,
						type: i
					},
					cache: !1,
					async: !1,
					dataType: "json",
					success: function(e) {
						(!0 === e.wishlist ? ($(".button-add-wishlist-" + t).hide(), $(".button-delete-wishlist-" + t)) : ($(".button-delete-wishlist-" + t).hide(), $(".button-add-wishlist-" + t))).show(), e.lastUpdate.hasOwnProperty("count") && 0 < e.lastUpdate.count && ($(".tsc-" + t).text(e.lastUpdate.count), $(".tsu-" + t).text(e.lastUpdate.suffixText), $(".time-since.time-since-" + t).show())
					}
				}), $.fancybox.open({
					closeExisting: !0,
					src: "#iframe-doc-" + t,
					type: "inline",
					autoSize: !1,
					enableEscapeButton: !0,
					hideOnOverlayClick: !0,
					touch: !1
				})), !1
			}), $(document).on("click", ".ajax-add-wishlist", function(e) {
				return e.preventDefault(), d($(this)), !1
			}), $(document).on("click", ".ajax-delete-wishlist", function(e) {
				var t;
				return e.preventDefault(), e = $(this), t = {
					csrf: $("body").data("token"),
					action: "delete",
					type: e.data("type"),
					id: e.data("id")
				}, $.ajax({
					type: "POST",
					url: Object(v.createOneDomainUrl)("/ajax-mvc/update-wishlist"),
					data: t,
					cache: !1,
					async: !1,
					dataType: "json",
					success: function(e) {
						e && ($(".button-delete-wishlist-" + t.id).hide(), $(".button-add-wishlist-" + t.id).show(), $("#header-wishlist").html(e.userHeaderData))
					}
				}), !1
			}), $(document).on("click", ".add-item-to-shoppingcart", function(e) {
				return e.preventDefault(), h($(this)), !1
			}), $(document).on("click", ".delete-content-cart-header", function(e) {
				var t;
				return e.preventDefault(), e = $(this), t = {
					csrf: $("body").data("token"),
					action: "delete",
					type: e.data("type"),
					id: e.data("id")
				}, $.ajax({
					type: "POST",
					url: Object(v.createOneDomainUrl)("/ajax-mvc/update-shoppingcart"),
					data: t,
					cache: !1,
					async: !1,
					dataType: "json",
					success: function(e) {
						!e || e.hasOwnProperty("error") ? window.location.reload() : (0 < $("#shoppingcart-popup-" + t.type + "-" + t.id).length && $.fancybox.close({
							src: "#shoppingcart-popup-" + t.type + "-" + t.id
						}), $("#header-cart").html(e.userHeaderData), e.userHeaderData || $(".wrapper-right").removeClass("items-in-cart"))
					}
				}), !1
			}), $(document).on("click", ".add-to-shopping-cart-popup .continue", function() {
				$.fancybox.close()
			}), $(document).on("click", ".changeCountry", function(e) {
				e.preventDefault(), $.fancybox.open({
					autoHeight: !0,
					autoScale: !1,
					speedIn: 300,
					transitionIn: "elastic",
					type: "iframe",
					src: "/change-basics",
					iframe: {
						css: {
							width: 700
						}
					}
				})
			});
			"yes" !== new URLSearchParams(window.location.search).get("adminLogin") && $("body").data("logged-in") && o.a.get({}, Object(v.createOneDomainUrl)("/ajax-mvc/user-log")).done(function(e) {}), $(document).on("click", "#cookiesClose", function() {
				g(), $("#cookiesPermission").hide()
			}), $(window).on("scroll", function() {
				var e = $(this).scrollTop();
				$("#cookiesPermission").is(":visible") && (100 <= e && ($("#cookiesPermission").removeClass("cookieOpacity2"), $("#cookiesPermission").addClass("cookieOpacity1")), 175 <= e && ($("#cookiesPermission").removeClass("cookieOpacity1"), $("#cookiesPermission").removeClass("cookieOpacity3"), $("#cookiesPermission").addClass("cookieOpacity2")), 250 <= e && ($("#cookiesPermission").removeClass("cookieOpacity2"), $("#cookiesPermission").removeClass("cookieOpacity4"), $("#cookiesPermission").addClass("cookieOpacity3")), 325 <= e && ($("#cookiesPermission").removeClass("cookieOpacity3"), $("#cookiesPermission").addClass("cookieOpacity4")), 400 < e) && (g(), $("#cookiesPermission").hide())
			}), $("#trengo-web-widget").hide(), $(document).on("click", ".tracking-upsell-item-js", function() {
				var e = $(this);
				o.a.post({
					originalCartItemAdded: e.data("original-cart-item-added-type") + "_" + e.data("original-cart-item-added-id"),
					recommendation: e.data("upsell-item-type") + "_" + e.data("upsell-item-id")
				}, Object(v.createOneDomainUrl)("/ajax-mvc/store-recommendations/item-recommendation")).done(function() {
					!0 === e.data("redirect") && (window.location.href = Object(v.createOneDomainUrl)(e.data("href")))
				}).error(function() {
					!0 === e.data("redirect") && (window.location.href = Object(v.createOneDomainUrl)(e.data("href")))
				}), amplitude.getInstance().logEvent("Post Add-to-Cart Popup Upsell Item Clicked")
			});
			var e, t, i = $("#openRegisterLoginBox"),
				a = (0 < i.length && (a = "refresh", x("register", a = "" !== i.val() ? i.val() : a, !1)), $("#openLoginIndexRedirect")),
				a = (0 < a.length && "1" === a.val() && (t = a.attr("data-redirect"), e = a.attr("data-contentId"), a.attr("data-register"), t) && e && x("login", t + "&contentId=" + e, !0), $(document).on("click", ".wl-student-sign-up-btn", function() {
					var e = {
						type: $(this).data("type")
					};
					(e = e).type && o.a.post(e, Object(v.createOneDomainUrl)("/ajax-mvc/check-white-label-code")).done(function(e) {
						0 < e.length && "correct" === e[0] && ($.fancybox.close(), x("login", "register", !0))
					})
				}), $("#userCampaignTracking"));
			0 < a.length && a.data("utm_campaign") && (t = a.data("utm_campaign"), e = a.data("utm_source"), a = a.data("utm_medium"), "postmark" === e) && "email" === a && amplitude.getInstance().logEvent("Email Button Clicked", {
				email_campaign: t
			}), 0 < $("#whelloIndonesiaLanded").length && (e = (new amplitude.Identify).set("is_whello_id", "true"), amplitude.getInstance().identify(e)), $(document).on("click", ".amp-js", function() {
				var e = $(this).data("name"),
					t = $(this).data("link");
				e && amplitude.getInstance().logEvent("Footer Link Clicked", {
					title: e,
					url: t
				})
			}), $(document).on("click", "#home-btn-ampl", function() {
				"" !== $(this).attr("data-tab-name") && amplitude.getInstance().logEvent("Home Tab Clicked", {
					home_tab_name: $(this).attr("data-tab-name")
				})
			}), m.makeElementLink(), m.slowScroll(), t = (a = new URLSearchParams(window.location.search)).get("utm_source"), a = a.get("utm_campaign"), "tiktok" === t && null !== a && "driivn" === a.slice(0, 6) && $.fancybox.open({
				touch: !1,
				autoScale: !0,
				baseClass: "tiktok-landing-popup-fancy-container",
				type: "iframe",
				iframe: {
					preload: !0,
					css: {
						maxWidth: "500px",
						minHeight: "480px",
						background: "transparent"
					}
				},
				src: Object(v.createOneDomainUrl)("/ajax-mvc/tiktok-landing-popup")
			})
		})
	},
	3: function(e, t, i) {
		"use strict";
		i.d(t, "a", function() {
			return a
		}), i.d(t, "b", function() {
			return o
		}), i.d(t, "c", function() {
			return r
		}), i.d(t, "d", function() {
			return l
		});
		var n, s, a = function(e, t) {
				clearTimeout(n), n = setTimeout(e, t)
			},
			o = (s = n = 0, function(e, t) {
				clearTimeout(s), s = setTimeout(e, t)
			}),
			r = function(e, t, i) {
				var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "",
					s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
					e = e.replace(t, i),
					t = e.replace(/(?:[\0-\x1F!#-%'-\+\/-@\[-\^`\{-\x9F\xA1-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07C9\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09EF\u09F2-\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B70\u0B72-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57-\u0D5E\u0D62-\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0EDB\u0EE0-\u0EFF\u0F01-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u1040-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u169B-\u169F\u16EB-\u16F0\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u194F\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19FF\u1A17-\u1A1F\u1A55-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BFF\u1C24-\u1C4C\u1C50-\u1C59\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u2182\u2185-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u2FFF\u3001-\u3004\u3007-\u3030\u3036-\u303A\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA620-\uA629\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6E6-\uA716\uA720\uA721\uA789\uA78A\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA802\uA806\uA80B\uA823-\uA83F\uA874-\uA881\uA8B4-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF-\uA909\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9D0-\uA9DF\uA9E5\uA9F0-\uA9F9\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEFF\uDF20-\uDF2C\uDF41\uDF4A-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0-\uDFFF]|\uD801[\uDC9E-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE5-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD24-\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF46-\uDF6F\uDF82-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDD02\uDD27-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDD9\uDDDB\uDDDD-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEFF\uDF1B-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCE0-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC00-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD834\uD836\uD83C-\uD83F\uD87C\uD87D\uD87F\uD889-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F-\uDE6F\uDEBF-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5-\uDCFF\uDD44-\uDD4A\uDD4C-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF3A-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD888[\uDFB0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+/, " ");
				return s && n.text(t), e
			},
			l = function(e, t) {
				return {
					type: "POST",
					url: t,
					cache: !1,
					data: e
				}
			}
	},
	4: function(e, t, i) {
		"use strict";
		i.d(t, "a", function() {
			return n
		});
		var s = i(1);

		function a(e) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function o(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, function(e) {
					e = function(e, t) {
						if ("object" !== a(e) || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 === i) return ("string" === t ? String : Number)(e);
						i = i.call(e, t || "default");
						if ("object" !== a(i)) return i;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}(e, "string");
					return "symbol" === a(e) ? e : String(e)
				}(n.key), n)
			}
		}
		var n = function() {
			function e() {
				if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var t, i, n;
			return t = e, n = [{
				key: "post",
				value: function(e, t, i) {
					return this.ajax(e, t, "POST", i)
				}
			}, {
				key: "get",
				value: function(e, t, i) {
					return this.ajax(e, t, "GET", i)
				}
			}, {
				key: "ajax",
				value: function(e, t, i, n) {
					if ("[object Array]" === Object.prototype.toString.call(e)) e.push({
						name: "csrf",
						value: s.a.get()
					});
					else {
						if ("[object Object]" !== Object.prototype.toString.call(e)) return console.log("Error: Something went wrong with sending data to ajaxRequest Class"), !1;
						e.csrf = s.a.get()
					}
					return $.ajax({
						type: i,
						url: t,
						cache: !1,
						data: e,
						success: function(e) {
							null !== n && "function" == typeof n && n(e)
						}
					})
				}
			}, {
				key: "postSync",
				value: function(e, t, i) {
					return this.ajaxSync(e, t, "POST", i)
				}
			}, {
				key: "getSync",
				value: function(e, t, i) {
					return this.ajaxSync(e, t, "GET", i)
				}
			}, {
				key: "ajaxSync",
				value: function(e, t, i, n) {
					if ("[object Array]" === Object.prototype.toString.call(e)) e.push({
						name: "csrf",
						value: s.a.get()
					});
					else {
						if ("[object Object]" !== Object.prototype.toString.call(e)) return console.log("Error: Something went wrong with sending data to ajaxRequest Class"), !1;
						e.csrf = s.a.get()
					}
					return $.ajax({
						type: i,
						url: t,
						cache: !1,
						data: e,
						async: !1,
						success: function(e) {
							null !== n && "function" == typeof n && n(e)
						}
					})
				}
			}], (i = null) && o(t.prototype, i), n && o(t, n), Object.defineProperty(t, "prototype", {
				writable: !1
			}), e
		}()
	},
	40: function(e, t) {
		function i(e) {
			var t = 0 < arguments.length && void 0 !== e ? e : 5e5,
				i = $(".overlay"),
				n = $(document).height();
			i.css("height", n + "px"), $(".cv-spinner").css("margin-top", n / 2 + "px"), i.fadeIn(200), setTimeout(function() {
				i.fadeOut(200)
			}, t)
		}
		var n, s = $("#fbId");
		!$("body").data("logged-in") && 0 < s.length && (n = s.data("id")) && (window.fbAsyncInit = function() {
			FB.init({
				appId: n,
				autoLogAppEvents: !0,
				xfbml: !0,
				cookie: !0,
				version: "v5.0"
			})
		}), $(document).ready(function(t) {
			t(document).on("click", ".btn-fblogin", function(e) {
				e.preventDefault(), "checkout" === t(this).data("location") ? i() : i(3e3),
					function(i, n, e) {
						var s = 2 < arguments.length && void 0 !== e ? e : "";
						FB.login(function(e) {
							var t;
							e.authResponse ? (t = e.authResponse.accessToken, e = e.authResponse.userID, $.ajax({
								type: "POST",
								url: "/authenticate/facebook",
								data: {
									facebookId: e,
									token: t,
									csrf: $("body").data("token"),
									redirect: i,
									redirectId: n,
									redirectUrl: s
								},
								dataType: "json",
								success: function(e) {
									!1 !== e.status ? (amplitude.getInstance().logEvent("Account Logged In", e.amplitude), window.top.location.href = e.redirectUrl) : !1 === e.status && "connect_error" === e.errorKey && ($(".overlay").fadeOut(200), $("#connect-error").show())
								}
							})) : $(".overlay").fadeOut(200)
						}, {
							scope: "email,public_profile",
							return_scopes: !0
						})
					}(t(this).data("redirect"), t(this).data("redirect-id"), t("#redirectUrl").val())
			}), t(document).on("click", ".btn-googlelogin", function(e) {
				e.preventDefault(), "checkout" === t(this).data("location") ? i() : i(3e3)
			}), t(".modal-register .modal-overlay").on("click", function() {
				t(this).parent().removeClass("active"), t(".form-purchased").hasClass("purchased-selected") && (t(".form-purchased .group-field").removeClass("group-selected"), t(".form-purchased").removeClass("purchased-selected")), $("html, body").css({
					"overflow-y": "auto"
				})
			})
		})
	},
	49: function(e, t, i) {
		var n, s;
		! function() {
			"use strict";
			s = [i(8)], void 0 !== (s = "function" == typeof(n = function(te) {
				"use strict";
				te.ui = te.ui || {};
				var O = te.ui.version = "1.13.2",
					H = 0,
					L = Array.prototype.hasOwnProperty,
					r = Array.prototype.slice,
					N = (te.cleanData = function(s) {
						return function(e) {
							var t, i, n;
							for (n = 0;
								(i = e[n]) != null; n++) {
								t = te._data(i, "events");
								if (t && t.remove) te(i).triggerHandler("remove")
							}
							s(e)
						}
					}(te.cleanData), te.widget = function(e, i, t) {
						var n, s, a;
						var o = {};
						var r = e.split(".")[0];
						e = e.split(".")[1];
						var l = r + "-" + e;
						if (!t) {
							t = i;
							i = te.Widget
						}
						if (Array.isArray(t)) t = te.extend.apply(null, [{}].concat(t));
						te.expr.pseudos[l.toLowerCase()] = function(e) {
							return !!te.data(e, l)
						};
						te[r] = te[r] || {};
						n = te[r][e];
						s = te[r][e] = function(e, t) {
							if (!this || !this._createWidget) return new s(e, t);
							if (arguments.length) this._createWidget(e, t)
						};
						te.extend(s, n, {
							version: t.version,
							_proto: te.extend({}, t),
							_childConstructors: []
						});
						a = new i;
						a.options = te.widget.extend({}, a.options);
						te.each(t, function(t, a) {
							if (typeof a !== "function") {
								o[t] = a;
								return
							}
							o[t] = function() {
								function n() {
									return i.prototype[t].apply(this, arguments)
								}

								function s(e) {
									return i.prototype[t].apply(this, e)
								}
								return function() {
									var e = this._super;
									var t = this._superApply;
									var i;
									this._super = n;
									this._superApply = s;
									i = a.apply(this, arguments);
									this._super = e;
									this._superApply = t;
									return i
								}
							}()
						});
						s.prototype = te.widget.extend(a, {
							widgetEventPrefix: n ? a.widgetEventPrefix || e : e
						}, o, {
							constructor: s,
							namespace: r,
							widgetName: e,
							widgetFullName: l
						});
						if (n) {
							te.each(n._childConstructors, function(e, t) {
								var i = t.prototype;
								te.widget(i.namespace + "." + i.widgetName, s, t._proto)
							});
							delete n._childConstructors
						} else i._childConstructors.push(s);
						te.widget.bridge(e, s);
						return s
					}, te.widget.extend = function(e) {
						var t = r.call(arguments, 1);
						var i = 0;
						var n = t.length;
						var s;
						var a;
						for (; i < n; i++)
							for (s in t[i]) {
								a = t[i][s];
								if (L.call(t[i], s) && a !== undefined)
									if (te.isPlainObject(a)) e[s] = te.isPlainObject(e[s]) ? te.widget.extend({}, e[s], a) : te.widget.extend({}, a);
									else e[s] = a
							}
						return e
					}, te.widget.bridge = function(a, t) {
						var o = t.prototype.widgetFullName || a;
						te.fn[a] = function(i) {
							var e = typeof i === "string";
							var n = r.call(arguments, 1);
							var s = this;
							if (e)
								if (!this.length && i === "instance") s = undefined;
								else this.each(function() {
									var e;
									var t = te.data(this, o);
									if (i === "instance") {
										s = t;
										return false
									}
									if (!t) return te.error("cannot call methods on " + a + " prior to initialization; " + "attempted to call method '" + i + "'");
									if (typeof t[i] !== "function" || i.charAt(0) === "_") return te.error("no such method '" + i + "' for " + a + " widget instance");
									e = t[i].apply(t, n);
									if (e !== t && e !== undefined) {
										s = e && e.jquery ? s.pushStack(e.get()) : e;
										return false
									}
								});
							else {
								if (n.length) i = te.widget.extend.apply(null, [i].concat(n));
								this.each(function() {
									var e = te.data(this, o);
									if (e) {
										e.option(i || {});
										if (e._init) e._init()
									} else te.data(this, o, new t(i, this))
								})
							}
							return s
						}
					}, te.Widget = function() {}, te.Widget._childConstructors = [], te.Widget.prototype = {
						widgetName: "widget",
						widgetEventPrefix: "",
						defaultElement: "<div>",
						options: {
							classes: {},
							disabled: false,
							create: null
						},
						_createWidget: function(e, t) {
							t = te(t || this.defaultElement || this)[0];
							this.element = te(t);
							this.uuid = H++;
							this.eventNamespace = "." + this.widgetName + this.uuid;
							this.bindings = te();
							this.hoverable = te();
							this.focusable = te();
							this.classesElementLookup = {};
							if (t !== this) {
								te.data(t, this.widgetFullName, this);
								this._on(true, this.element, {
									remove: function(e) {
										if (e.target === t) this.destroy()
									}
								});
								this.document = te(t.style ? t.ownerDocument : t.document || t);
								this.window = te(this.document[0].defaultView || this.document[0].parentWindow)
							}
							this.options = te.widget.extend({}, this.options, this._getCreateOptions(), e);
							this._create();
							if (this.options.disabled) this._setOptionDisabled(this.options.disabled);
							this._trigger("create", null, this._getCreateEventData());
							this._init()
						},
						_getCreateOptions: function() {
							return {}
						},
						_getCreateEventData: te.noop,
						_create: te.noop,
						_init: te.noop,
						destroy: function() {
							var i = this;
							this._destroy();
							te.each(this.classesElementLookup, function(e, t) {
								i._removeClass(t, e)
							});
							this.element.off(this.eventNamespace).removeData(this.widgetFullName);
							this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
							this.bindings.off(this.eventNamespace)
						},
						_destroy: te.noop,
						widget: function() {
							return this.element
						},
						option: function(e, t) {
							var i = e;
							var n;
							var s;
							var a;
							if (arguments.length === 0) return te.widget.extend({}, this.options);
							if (typeof e === "string") {
								i = {};
								n = e.split(".");
								e = n.shift();
								if (n.length) {
									s = i[e] = te.widget.extend({}, this.options[e]);
									for (a = 0; a < n.length - 1; a++) {
										s[n[a]] = s[n[a]] || {};
										s = s[n[a]]
									}
									e = n.pop();
									if (arguments.length === 1) return s[e] === undefined ? null : s[e];
									s[e] = t
								} else {
									if (arguments.length === 1) return this.options[e] === undefined ? null : this.options[e];
									i[e] = t
								}
							}
							this._setOptions(i);
							return this
						},
						_setOptions: function(e) {
							var t;
							for (t in e) this._setOption(t, e[t]);
							return this
						},
						_setOption: function(e, t) {
							if (e === "classes") this._setOptionClasses(t);
							this.options[e] = t;
							if (e === "disabled") this._setOptionDisabled(t);
							return this
						},
						_setOptionClasses: function(e) {
							var t, i, n;
							for (t in e) {
								n = this.classesElementLookup[t];
								if (e[t] === this.options.classes[t] || !n || !n.length) continue;
								i = te(n.get());
								this._removeClass(n, t);
								i.addClass(this._classes({
									element: i,
									keys: t,
									classes: e,
									add: true
								}))
							}
						},
						_setOptionDisabled: function(e) {
							this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e);
							if (e) {
								this._removeClass(this.hoverable, null, "ui-state-hover");
								this._removeClass(this.focusable, null, "ui-state-focus")
							}
						},
						enable: function() {
							return this._setOptions({
								disabled: false
							})
						},
						disable: function() {
							return this._setOptions({
								disabled: true
							})
						},
						_classes: function(s) {
							var a = [];
							var o = this;
							s = te.extend({
								element: this.element,
								classes: this.options.classes || {}
							}, s);

							function r() {
								var n = [];
								s.element.each(function(e, t) {
									var i = te.map(o.classesElementLookup, function(e) {
										return e
									}).some(function(e) {
										return e.is(t)
									});
									if (!i) n.push(t)
								});
								o._on(te(n), {
									remove: "_untrackClassesElement"
								})
							}

							function e(e, t) {
								var i, n;
								for (n = 0; n < e.length; n++) {
									i = o.classesElementLookup[e[n]] || te();
									if (s.add) {
										r();
										i = te(te.uniqueSort(i.get().concat(s.element.get())))
									} else i = te(i.not(s.element).get());
									o.classesElementLookup[e[n]] = i;
									a.push(e[n]);
									if (t && s.classes[e[n]]) a.push(s.classes[e[n]])
								}
							}
							if (s.keys) e(s.keys.match(/\S+/g) || [], true);
							if (s.extra) e(s.extra.match(/\S+/g) || []);
							return a.join(" ")
						},
						_untrackClassesElement: function(i) {
							var n = this;
							te.each(n.classesElementLookup, function(e, t) {
								if (te.inArray(i.target, t) !== -1) n.classesElementLookup[e] = te(t.not(i.target).get())
							});
							this._off(te(i.target))
						},
						_removeClass: function(e, t, i) {
							return this._toggleClass(e, t, i, false)
						},
						_addClass: function(e, t, i) {
							return this._toggleClass(e, t, i, true)
						},
						_toggleClass: function(e, t, i, n) {
							n = typeof n === "boolean" ? n : i;
							var s = typeof e === "string" || e === null,
								a = {
									extra: s ? t : i,
									keys: s ? e : t,
									element: s ? this.element : e,
									add: n
								};
							a.element.toggleClass(this._classes(a), n);
							return this
						},
						_on: function(o, r, e) {
							var l;
							var u = this;
							if (typeof o !== "boolean") {
								e = r;
								r = o;
								o = false
							}
							if (!e) {
								e = r;
								r = this.element;
								l = this.widget()
							} else {
								r = l = te(r);
								this.bindings = this.bindings.add(r)
							}
							te.each(e, function(e, t) {
								function i() {
									if (!o && (u.options.disabled === true || te(this).hasClass("ui-state-disabled"))) return;
									return (typeof t === "string" ? u[t] : t).apply(u, arguments)
								}
								if (typeof t !== "string") i.guid = t.guid = t.guid || i.guid || te.guid++;
								var n = e.match(/^([\w:-]*)\s*(.*)$/);
								var s = n[1] + u.eventNamespace;
								var a = n[2];
								if (a) l.on(s, a, i);
								else r.on(s, i)
							})
						},
						_off: function(e, t) {
							t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
							e.off(t);
							this.bindings = te(this.bindings.not(e).get());
							this.focusable = te(this.focusable.not(e).get());
							this.hoverable = te(this.hoverable.not(e).get())
						},
						_delay: function(e, t) {
							function i() {
								return (typeof e === "string" ? n[e] : e).apply(n, arguments)
							}
							var n = this;
							return setTimeout(i, t || 0)
						},
						_hoverable: function(e) {
							this.hoverable = this.hoverable.add(e);
							this._on(e, {
								mouseenter: function(e) {
									this._addClass(te(e.currentTarget), null, "ui-state-hover")
								},
								mouseleave: function(e) {
									this._removeClass(te(e.currentTarget), null, "ui-state-hover")
								}
							})
						},
						_focusable: function(e) {
							this.focusable = this.focusable.add(e);
							this._on(e, {
								focusin: function(e) {
									this._addClass(te(e.currentTarget), null, "ui-state-focus")
								},
								focusout: function(e) {
									this._removeClass(te(e.currentTarget), null, "ui-state-focus")
								}
							})
						},
						_trigger: function(e, t, i) {
							var n, s;
							var a = this.options[e];
							i = i || {};
							t = te.Event(t);
							t.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase();
							t.target = this.element[0];
							s = t.originalEvent;
							if (s)
								for (n in s)
									if (!(n in t)) t[n] = s[n];
							this.element.trigger(t, i);
							return !(typeof a === "function" && a.apply(this.element[0], [t].concat(i)) === false || t.isDefaultPrevented())
						}
					}, te.each({
						show: "fadeIn",
						hide: "fadeOut"
					}, function(a, o) {
						te.Widget.prototype["_" + a] = function(t, e, i) {
							if (typeof e === "string") e = {
								effect: e
							};
							var n;
							var s = !e ? a : e === true || typeof e === "number" ? o : e.effect || o;
							e = e || {};
							if (typeof e === "number") e = {
								duration: e
							};
							else if (e === true) e = {};
							n = !te.isEmptyObject(e);
							e.complete = i;
							if (e.delay) t.delay(e.delay);
							if (n && te.effects && te.effects.effect[s]) t[a](e);
							else if (s !== a && t[s]) t[s](e.duration, e.easing, i);
							else t.queue(function(e) {
								te(this)[a]();
								if (i) i.call(t[0]);
								e()
							})
						}
					}), te.widget),
					s, w = Math.max,
					D = Math.abs,
					n = /left|center|right/,
					a = /top|center|bottom/,
					o = /[\+\-]\d+(\.[\d]+)?%?/,
					l = /^\w+/,
					u = /%$/,
					R = te.fn.position;

				function C(e, t, i) {
					return [parseFloat(e[0]) * (u.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (u.test(e[1]) ? i / 100 : 1)]
				}

				function k(e, t) {
					return parseInt(te.css(e, t), 10) || 0
				}

				function c(e) {
					return e != null && e === e.window
				}

				function j(e) {
					var t = e[0];
					if (t.nodeType === 9) return {
						width: e.width(),
						height: e.height(),
						offset: {
							top: 0,
							left: 0
						}
					};
					if (c(t)) return {
						width: e.width(),
						height: e.height(),
						offset: {
							top: e.scrollTop(),
							left: e.scrollLeft()
						}
					};
					if (t.preventDefault) return {
						width: 0,
						height: 0,
						offset: {
							top: t.pageY,
							left: t.pageX
						}
					};
					return {
						width: e.outerWidth(),
						height: e.outerHeight(),
						offset: e.offset()
					}
				}
				te.position = {
					scrollbarWidth: function() {
						if (s !== undefined) return s;
						var e, t, i = te("<div style=" + "'display:block;position:absolute;width:200px;height:200px;overflow:hidden;'>" + "<div style='height:300px;width:auto;'></div></div>"),
							n = i.children()[0];
						te("body").append(i);
						e = n.offsetWidth;
						i.css("overflow", "scroll");
						t = n.offsetWidth;
						if (e === t) t = i[0].clientWidth;
						i.remove();
						return s = e - t
					},
					getScrollInfo: function(e) {
						var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
							i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
							n = t === "scroll" || t === "auto" && e.width < e.element[0].scrollWidth,
							s = i === "scroll" || i === "auto" && e.height < e.element[0].scrollHeight;
						return {
							width: s ? te.position.scrollbarWidth() : 0,
							height: n ? te.position.scrollbarWidth() : 0
						}
					},
					getWithinInfo: function(e) {
						var t = te(e || window),
							i = c(t[0]),
							n = !!t[0] && t[0].nodeType === 9,
							s = !i && !n;
						return {
							element: t,
							isWindow: i,
							isDocument: n,
							offset: s ? te(e).offset() : {
								left: 0,
								top: 0
							},
							scrollLeft: t.scrollLeft(),
							scrollTop: t.scrollTop(),
							width: t.outerWidth(),
							height: t.outerHeight()
						}
					}
				}, te.fn.position = function(h) {
					if (!h || !h.of) return R.apply(this, arguments);
					h = te.extend({}, h);
					var d, f, p, m, g, e, v = typeof h.of === "string" ? te(document).find(h.of) : te(h.of),
						b = te.position.getWithinInfo(h.within),
						y = te.position.getScrollInfo(b),
						_ = (h.collision || "flip").split(" "),
						x = {};
					e = j(v);
					if (v[0].preventDefault) h.at = "left top";
					f = e.width;
					p = e.height;
					m = e.offset;
					g = te.extend({}, m);
					te.each(["my", "at"], function() {
						var e = (h[this] || "").split(" "),
							t, i;
						if (e.length === 1) e = n.test(e[0]) ? e.concat(["center"]) : a.test(e[0]) ? ["center"].concat(e) : ["center", "center"];
						e[0] = n.test(e[0]) ? e[0] : "center";
						e[1] = a.test(e[1]) ? e[1] : "center";
						t = o.exec(e[0]);
						i = o.exec(e[1]);
						x[this] = [t ? t[0] : 0, i ? i[0] : 0];
						h[this] = [l.exec(e[0])[0], l.exec(e[1])[0]]
					});
					if (_.length === 1) _[1] = _[0];
					if (h.at[0] === "right") g.left += f;
					else if (h.at[0] === "center") g.left += f / 2;
					if (h.at[1] === "bottom") g.top += p;
					else if (h.at[1] === "center") g.top += p / 2;
					d = C(x.at, f, p);
					g.left += d[0];
					g.top += d[1];
					return this.each(function() {
						var i, e, o = te(this),
							r = o.outerWidth(),
							l = o.outerHeight(),
							t = k(this, "marginLeft"),
							n = k(this, "marginTop"),
							s = r + t + k(this, "marginRight") + y.width,
							a = l + n + k(this, "marginBottom") + y.height,
							u = te.extend({}, g),
							c = C(x.my, o.outerWidth(), o.outerHeight());
						if (h.my[0] === "right") u.left -= r;
						else if (h.my[0] === "center") u.left -= r / 2;
						if (h.my[1] === "bottom") u.top -= l;
						else if (h.my[1] === "center") u.top -= l / 2;
						u.left += c[0];
						u.top += c[1];
						i = {
							marginLeft: t,
							marginTop: n
						};
						te.each(["left", "top"], function(e, t) {
							if (te.ui.position[_[e]]) te.ui.position[_[e]][t](u, {
								targetWidth: f,
								targetHeight: p,
								elemWidth: r,
								elemHeight: l,
								collisionPosition: i,
								collisionWidth: s,
								collisionHeight: a,
								offset: [d[0] + c[0], d[1] + c[1]],
								my: h.my,
								at: h.at,
								within: b,
								elem: o
							})
						});
						if (h.using) e = function(e) {
							var t = m.left - u.left,
								i = t + f - r,
								n = m.top - u.top,
								s = n + p - l,
								a = {
									target: {
										element: v,
										left: m.left,
										top: m.top,
										width: f,
										height: p
									},
									element: {
										element: o,
										left: u.left,
										top: u.top,
										width: r,
										height: l
									},
									horizontal: i < 0 ? "left" : t > 0 ? "right" : "center",
									vertical: s < 0 ? "top" : n > 0 ? "bottom" : "middle"
								};
							if (f < r && D(t + i) < f) a.horizontal = "center";
							if (p < l && D(n + s) < p) a.vertical = "middle";
							if (w(D(t), D(i)) > w(D(n), D(s))) a.important = "horizontal";
							else a.important = "vertical";
							h.using.call(this, e, a)
						};
						o.offset(te.extend(u, {
							using: e
						}))
					})
				}, te.ui.position = {
					fit: {
						left: function(e, t) {
							var i = t.within,
								n = i.isWindow ? i.scrollLeft : i.offset.left,
								s = i.width,
								a = e.left - t.collisionPosition.marginLeft,
								o = n - a,
								r = a + t.collisionWidth - s - n,
								l;
							if (t.collisionWidth > s)
								if (o > 0 && r <= 0) {
									l = e.left + o + t.collisionWidth - s - n;
									e.left += o - l
								} else if (r > 0 && o <= 0) e.left = n;
							else if (o > r) e.left = n + s - t.collisionWidth;
							else e.left = n;
							else if (o > 0) e.left += o;
							else if (r > 0) e.left -= r;
							else e.left = w(e.left - a, e.left)
						},
						top: function(e, t) {
							var i = t.within,
								n = i.isWindow ? i.scrollTop : i.offset.top,
								s = t.within.height,
								a = e.top - t.collisionPosition.marginTop,
								o = n - a,
								r = a + t.collisionHeight - s - n,
								l;
							if (t.collisionHeight > s)
								if (o > 0 && r <= 0) {
									l = e.top + o + t.collisionHeight - s - n;
									e.top += o - l
								} else if (r > 0 && o <= 0) e.top = n;
							else if (o > r) e.top = n + s - t.collisionHeight;
							else e.top = n;
							else if (o > 0) e.top += o;
							else if (r > 0) e.top -= r;
							else e.top = w(e.top - a, e.top)
						}
					},
					flip: {
						left: function(e, t) {
							var i = t.within,
								n = i.offset.left + i.scrollLeft,
								s = i.width,
								a = i.isWindow ? i.scrollLeft : i.offset.left,
								o = e.left - t.collisionPosition.marginLeft,
								r = o - a,
								l = o + t.collisionWidth - s - a,
								u = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
								c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
								h = -2 * t.offset[0],
								d, f;
							if (r < 0) {
								d = e.left + u + c + h + t.collisionWidth - s - n;
								if (d < 0 || d < D(r)) e.left += u + c + h
							} else if (l > 0) {
								f = e.left - t.collisionPosition.marginLeft + u + c + h - a;
								if (f > 0 || D(f) < l) e.left += u + c + h
							}
						},
						top: function(e, t) {
							var i = t.within,
								n = i.offset.top + i.scrollTop,
								s = i.height,
								a = i.isWindow ? i.scrollTop : i.offset.top,
								o = e.top - t.collisionPosition.marginTop,
								r = o - a,
								l = o + t.collisionHeight - s - a,
								u = t.my[1] === "top",
								c = u ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
								h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
								d = -2 * t.offset[1],
								f, p;
							if (r < 0) {
								p = e.top + c + h + d + t.collisionHeight - s - n;
								if (p < 0 || p < D(r)) e.top += c + h + d
							} else if (l > 0) {
								f = e.top - t.collisionPosition.marginTop + c + h + d - a;
								if (f > 0 || D(f) < l) e.top += c + h + d
							}
						}
					},
					flipfit: {
						left: function() {
							te.ui.position.flip.left.apply(this, arguments);
							te.ui.position.fit.left.apply(this, arguments)
						},
						top: function() {
							te.ui.position.flip.top.apply(this, arguments);
							te.ui.position.fit.top.apply(this, arguments)
						}
					}
				};
				var Y = te.ui.position,
					z = te.extend(te.expr.pseudos, {
						data: te.expr.createPseudo ? te.expr.createPseudo(function(t) {
							return function(e) {
								return !!te.data(e, t)
							}
						}) : function(e, t, i) {
							return !!te.data(e, i[3])
						}
					}),
					B = te.fn.extend({
						disableSelection: function() {
							var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
							return function() {
								return this.on(e + ".ui-disableSelection", function(e) {
									e.preventDefault()
								})
							}
						}(),
						enableSelection: function() {
							return this.off(".ui-disableSelection")
						}
					}),
					h = te,
					W = "backgroundColor borderBottomColor borderLeftColor borderRightColor " + "borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
					i = {},
					q = i.toString,
					U = /^([\-+])=\s*(\d+\.?\d*)/,
					V = [{
						re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						parse: function(e) {
							return [e[1], e[2], e[3], e[4]]
						}
					}, {
						re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						parse: function(e) {
							return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
						}
					}, {
						re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
						parse: function(e) {
							return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), e[4] ? (parseInt(e[4], 16) / 255).toFixed(2) : 1]
						}
					}, {
						re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
						parse: function(e) {
							return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16), e[4] ? (parseInt(e[4] + e[4], 16) / 255).toFixed(2) : 1]
						}
					}, {
						re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						space: "hsla",
						parse: function(e) {
							return [e[1], e[2] / 100, e[3] / 100, e[4]]
						}
					}],
					d = h.Color = function(e, t, i, n) {
						return new h.Color.fn.parse(e, t, i, n)
					},
					f = {
						rgba: {
							props: {
								red: {
									idx: 0,
									type: "byte"
								},
								green: {
									idx: 1,
									type: "byte"
								},
								blue: {
									idx: 2,
									type: "byte"
								}
							}
						},
						hsla: {
							props: {
								hue: {
									idx: 0,
									type: "degrees"
								},
								saturation: {
									idx: 1,
									type: "percent"
								},
								lightness: {
									idx: 2,
									type: "percent"
								}
							}
						}
					},
					p = {
						byte: {
							floor: true,
							max: 255
						},
						percent: {
							max: 1
						},
						degrees: {
							mod: 360,
							floor: true
						}
					},
					m = d.support = {},
					e = h("<p>")[0],
					g, v = h.each;

				function b(e) {
					if (e == null) return e + "";
					return typeof e === "object" ? i[q.call(e)] || "object" : typeof e
				}

				function y(e, t, i) {
					var n = p[t.type] || {};
					if (e == null) return i || !t.def ? null : t.def;
					e = n.floor ? ~~e : parseFloat(e);
					if (isNaN(e)) return t.def;
					if (n.mod) return (e + n.mod) % n.mod;
					return Math.min(n.max, Math.max(0, e))
				}

				function _(o) {
					var r = d(),
						l = r._rgba = [];
					o = o.toLowerCase();
					v(V, function(e, t) {
						var i, n = t.re.exec(o),
							s = n && t.parse(n),
							a = t.space || "rgba";
						if (s) {
							i = r[a](s);
							r[f[a].cache] = i[f[a].cache];
							l = r._rgba = i._rgba;
							return false
						}
					});
					if (l.length) {
						if (l.join() === "0,0,0,0") h.extend(l, g.transparent);
						return r
					}
					return g[o]
				}

				function x(e, t, i) {
					i = (i + 1) % 1;
					if (i * 6 < 1) return e + (t - e) * i * 6;
					if (i * 2 < 1) return t;
					if (i * 3 < 2) return e + (t - e) * (2 / 3 - i) * 6;
					return e
				}
				e.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = e.style.backgroundColor.indexOf("rgba") > -1, v(f, function(e, t) {
					t.cache = "_" + e;
					t.props.alpha = {
						idx: 3,
						type: "percent",
						def: 1
					}
				}), h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
					i["[object " + t + "]"] = t.toLowerCase()
				}), (d.fn = h.extend(d.prototype, {
					parse: function(s, e, t, i) {
						if (s === undefined) {
							this._rgba = [null, null, null, null];
							return this
						}
						if (s.jquery || s.nodeType) {
							s = h(s).css(e);
							e = undefined
						}
						var a = this,
							n = b(s),
							o = this._rgba = [];
						if (e !== undefined) {
							s = [s, e, t, i];
							n = "array"
						}
						if (n === "string") return this.parse(_(s) || g._default);
						if (n === "array") {
							v(f.rgba.props, function(e, t) {
								o[t.idx] = y(s[t.idx], t)
							});
							return this
						}
						if (n === "object") {
							if (s instanceof d) v(f, function(e, t) {
								if (s[t.cache]) a[t.cache] = s[t.cache].slice()
							});
							else v(f, function(e, i) {
								var n = i.cache;
								v(i.props, function(e, t) {
									if (!a[n] && i.to) {
										if (e === "alpha" || s[e] == null) return;
										a[n] = i.to(a._rgba)
									}
									a[n][t.idx] = y(s[e], t, true)
								});
								if (a[n] && h.inArray(null, a[n].slice(0, 3)) < 0) {
									if (a[n][3] == null) a[n][3] = 1;
									if (i.from) a._rgba = i.from(a[n])
								}
							});
							return this
						}
					},
					is: function(e) {
						var s = d(e),
							a = true,
							o = this;
						v(f, function(e, t) {
							var i, n = s[t.cache];
							if (n) {
								i = o[t.cache] || t.to && t.to(o._rgba) || [];
								v(t.props, function(e, t) {
									if (n[t.idx] != null) {
										a = n[t.idx] === i[t.idx];
										return a
									}
								})
							}
							return a
						});
						return a
					},
					_space: function() {
						var i = [],
							n = this;
						v(f, function(e, t) {
							if (n[t.cache]) i.push(e)
						});
						return i.pop()
					},
					transition: function(e, o) {
						var r = d(e),
							t = r._space(),
							i = f[t],
							n = this.alpha() === 0 ? d("transparent") : this,
							l = n[i.cache] || i.to(n._rgba),
							u = l.slice();
						r = r[i.cache];
						v(i.props, function(e, t) {
							var i = t.idx,
								n = l[i],
								s = r[i],
								a = p[t.type] || {};
							if (s === null) return;
							if (n === null) u[i] = s;
							else {
								if (a.mod)
									if (s - n > a.mod / 2) n += a.mod;
									else if (n - s > a.mod / 2) n -= a.mod;
								u[i] = y((s - n) * o + n, t)
							}
						});
						return this[t](u)
					},
					blend: function(e) {
						if (this._rgba[3] === 1) return this;
						var t = this._rgba.slice(),
							i = t.pop(),
							n = d(e)._rgba;
						return d(h.map(t, function(e, t) {
							return (1 - i) * n[t] + i * e
						}))
					},
					toRgbaString: function() {
						var e = "rgba(",
							t = h.map(this._rgba, function(e, t) {
								if (e != null) return e;
								return t > 2 ? 1 : 0
							});
						if (t[3] === 1) {
							t.pop();
							e = "rgb("
						}
						return e + t.join() + ")"
					},
					toHslaString: function() {
						var e = "hsla(",
							t = h.map(this.hsla(), function(e, t) {
								if (e == null) e = t > 2 ? 1 : 0;
								if (t && t < 3) e = Math.round(e * 100) + "%";
								return e
							});
						if (t[3] === 1) {
							t.pop();
							e = "hsl("
						}
						return e + t.join() + ")"
					},
					toHexString: function(e) {
						var t = this._rgba.slice(),
							i = t.pop();
						if (e) t.push(~~(i * 255));
						return "#" + h.map(t, function(e) {
							e = (e || 0).toString(16);
							return e.length === 1 ? "0" + e : e
						}).join("")
					},
					toString: function() {
						return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
					}
				})).parse.prototype = d.fn, f.hsla.to = function(e) {
					if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
					var t = e[0] / 255,
						i = e[1] / 255,
						n = e[2] / 255,
						s = e[3],
						a = Math.max(t, i, n),
						o = Math.min(t, i, n),
						r = a - o,
						l = a + o,
						u = l * .5,
						c, h;
					if (o === a) c = 0;
					else if (t === a) c = 60 * (i - n) / r + 360;
					else if (i === a) c = 60 * (n - t) / r + 120;
					else c = 60 * (t - i) / r + 240;
					if (r === 0) h = 0;
					else if (u <= .5) h = r / l;
					else h = r / (2 - l);
					return [Math.round(c) % 360, h, u, s == null ? 1 : s]
				}, f.hsla.from = function(e) {
					if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
					var t = e[0] / 360,
						i = e[1],
						n = e[2],
						s = e[3],
						a = n <= .5 ? n * (1 + i) : n + i - n * i,
						o = 2 * n - a;
					return [Math.round(x(o, a, t + 1 / 3) * 255), Math.round(x(o, a, t) * 255), Math.round(x(o, a, t - 1 / 3) * 255), s]
				}, v(f, function(l, e) {
					var i = e.props,
						o = e.cache,
						r = e.to,
						u = e.from;
					d.fn[l] = function(e) {
						if (r && !this[o]) this[o] = r(this._rgba);
						if (e === undefined) return this[o].slice();
						var t, n = b(e),
							s = n === "array" || n === "object" ? e : arguments,
							a = this[o].slice();
						v(i, function(e, t) {
							var i = s[n === "object" ? e : t.idx];
							if (i == null) i = a[t.idx];
							a[t.idx] = y(i, t)
						});
						if (u) {
							t = d(u(a));
							t[o] = a;
							return t
						} else return d(a)
					};
					v(i, function(o, r) {
						if (d.fn[o]) return;
						d.fn[o] = function(e) {
							var t, i, n, s, a = b(e);
							if (o === "alpha") s = this._hsla ? "hsla" : "rgba";
							else s = l;
							t = this[s]();
							i = t[r.idx];
							if (a === "undefined") return i;
							if (a === "function") {
								e = e.call(this, i);
								a = b(e)
							}
							if (e == null && r.empty) return this;
							if (a === "string") {
								n = U.exec(e);
								if (n) e = i + parseFloat(n[2]) * (n[1] === "+" ? 1 : -1)
							}
							t[r.idx] = e;
							return this[s](t)
						}
					})
				}), (d.hook = function(e) {
					var t = e.split(" ");
					v(t, function(e, a) {
						h.cssHooks[a] = {
							set: function(e, t) {
								var i, n, s = "";
								if (t !== "transparent" && (b(t) !== "string" || (i = _(t)))) {
									t = d(i || t);
									if (!m.rgba && t._rgba[3] !== 1) {
										n = a === "backgroundColor" ? e.parentNode : e;
										while ((s === "" || s === "transparent") && n && n.style) try {
											s = h.css(n, "backgroundColor");
											n = n.parentNode
										} catch (e) {}
										t = t.blend(s && s !== "transparent" ? s : "_default")
									}
									t = t.toRgbaString()
								}
								try {
									e.style[a] = t
								} catch (e) {}
							}
						};
						h.fx.step[a] = function(e) {
							if (!e.colorInit) {
								e.start = d(e.elem, a);
								e.end = d(e.end);
								e.colorInit = true
							}
							h.cssHooks[a].set(e.elem, e.start.transition(e.end, e.pos))
						}
					})
				})(W), h.cssHooks.borderColor = {
					expand: function(i) {
						var n = {};
						v(["Top", "Right", "Bottom", "Left"], function(e, t) {
							n["border" + t + "Color"] = i
						});
						return n
					}
				};
				var g = h.Color.names = {
						aqua: "#00ffff",
						black: "#000000",
						blue: "#0000ff",
						fuchsia: "#ff00ff",
						gray: "#808080",
						green: "#008000",
						lime: "#00ff00",
						maroon: "#800000",
						navy: "#000080",
						olive: "#808000",
						purple: "#800080",
						red: "#ff0000",
						silver: "#c0c0c0",
						teal: "#008080",
						white: "#ffffff",
						yellow: "#ffff00",
						transparent: [null, null, null, 0],
						_default: "#ffffff"
					},
					S = "ui-effects-",
					t = "ui-effects-style",
					T = "ui-effects-animated",
					G = (te.effects = {
						effect: {}
					}, ["add", "remove", "toggle"]),
					X = {
						border: 1,
						borderBottom: 1,
						borderColor: 1,
						borderLeft: 1,
						borderRight: 1,
						borderTop: 1,
						borderWidth: 1,
						margin: 1,
						padding: 1
					};

				function K(e) {
					return e.replace(/-([\da-z])/gi, function(e, t) {
						return t.toUpperCase()
					})
				}

				function Z(e) {
					var t, i, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
						s = {};
					if (n && n.length && n[0] && n[n[0]]) {
						i = n.length;
						while (i--) {
							t = n[i];
							if (typeof n[t] === "string") s[K(t)] = n[t]
						}
					} else
						for (t in n)
							if (typeof n[t] === "string") s[t] = n[t];
					return s
				}

				function Q(e, t) {
					var i = {},
						n, s;
					for (n in t) {
						s = t[n];
						if (e[n] !== s)
							if (!X[n])
								if (te.fx.step[n] || !isNaN(parseFloat(s))) i[n] = s
					}
					return i
				}
				if (te.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, t) {
						te.fx.step[t] = function(e) {
							if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) {
								h.style(e.elem, t, e.end);
								e.setAttr = true
							}
						}
					}), !te.fn.addBack) te.fn.addBack = function(e) {
					return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
				};
				if (te.effects.animateClass = function(s, e, t, i) {
						var a = te.speed(e, t, i);
						return this.queue(function() {
							var i = te(this),
								e = i.attr("class") || "",
								t, n = a.children ? i.find("*").addBack() : i;
							n = n.map(function() {
								var e = te(this);
								return {
									el: e,
									start: Z(this)
								}
							});
							t = function() {
								te.each(G, function(e, t) {
									if (s[t]) i[t + "Class"](s[t])
								})
							};
							t();
							n = n.map(function() {
								this.end = Z(this.el[0]);
								this.diff = Q(this.start, this.end);
								return this
							});
							i.attr("class", e);
							n = n.map(function() {
								var e = this,
									t = te.Deferred(),
									i = te.extend({}, a, {
										queue: false,
										complete: function() {
											t.resolve(e)
										}
									});
								this.el.animate(this.diff, i);
								return t.promise()
							});
							te.when.apply(te, n.get()).done(function() {
								t();
								te.each(arguments, function() {
									var t = this.el;
									te.each(this.diff, function(e) {
										t.css(e, "")
									})
								});
								a.complete.call(i[0])
							})
						})
					}, te.fn.extend({
						addClass: function(s) {
							return function(e, t, i, n) {
								return t ? te.effects.animateClass.call(this, {
									add: e
								}, t, i, n) : s.apply(this, arguments)
							}
						}(te.fn.addClass),
						removeClass: function(s) {
							return function(e, t, i, n) {
								return arguments.length > 1 ? te.effects.animateClass.call(this, {
									remove: e
								}, t, i, n) : s.apply(this, arguments)
							}
						}(te.fn.removeClass),
						toggleClass: function(a) {
							return function(e, t, i, n, s) {
								if (typeof t === "boolean" || t === undefined)
									if (!i) return a.apply(this, arguments);
									else return te.effects.animateClass.call(this, t ? {
										add: e
									} : {
										remove: e
									}, i, n, s);
								else return te.effects.animateClass.call(this, {
									toggle: e
								}, t, i, n)
							}
						}(te.fn.toggleClass),
						switchClass: function(e, t, i, n, s) {
							return te.effects.animateClass.call(this, {
								add: t,
								remove: e
							}, i, n, s)
						}
					}), te.expr && te.expr.pseudos && te.expr.pseudos.animated) te.expr.pseudos.animated = function(t) {
					return function(e) {
						return !!te(e).data(T) || t(e)
					}
				}(te.expr.pseudos.animated);
				if (te.uiBackCompat !== false) te.extend(te.effects, {
					save: function(e, t) {
						var i = 0,
							n = t.length;
						for (; i < n; i++)
							if (t[i] !== null) e.data(S + t[i], e[0].style[t[i]])
					},
					restore: function(e, t) {
						var i, n = 0,
							s = t.length;
						for (; n < s; n++)
							if (t[n] !== null) {
								i = e.data(S + t[n]);
								e.css(t[n], i)
							}
					},
					setMode: function(e, t) {
						if (t === "toggle") t = e.is(":hidden") ? "show" : "hide";
						return t
					},
					createWrapper: function(i) {
						if (i.parent().is(".ui-effects-wrapper")) return i.parent();
						var n = {
								width: i.outerWidth(true),
								height: i.outerHeight(true),
								float: i.css("float")
							},
							e = te("<div></div>").addClass("ui-effects-wrapper").css({
								fontSize: "100%",
								background: "transparent",
								border: "none",
								margin: 0,
								padding: 0
							}),
							t = {
								width: i.width(),
								height: i.height()
							},
							s = document.activeElement;
						try {
							s.id
						} catch (e) {
							s = document.body
						}
						i.wrap(e);
						if (i[0] === s || te.contains(i[0], s)) te(s).trigger("focus");
						e = i.parent();
						if (i.css("position") === "static") {
							e.css({
								position: "relative"
							});
							i.css({
								position: "relative"
							})
						} else {
							te.extend(n, {
								position: i.css("position"),
								zIndex: i.css("z-index")
							});
							te.each(["top", "left", "bottom", "right"], function(e, t) {
								n[t] = i.css(t);
								if (isNaN(parseInt(n[t], 10))) n[t] = "auto"
							});
							i.css({
								position: "relative",
								top: 0,
								left: 0,
								right: "auto",
								bottom: "auto"
							})
						}
						i.css(t);
						return e.css(n).show()
					},
					removeWrapper: function(e) {
						var t = document.activeElement;
						if (e.parent().is(".ui-effects-wrapper")) {
							e.parent().replaceWith(e);
							if (e[0] === t || te.contains(e[0], t)) te(t).trigger("focus")
						}
						return e
					}
				});

				function A(e, t, i, n) {
					if (te.isPlainObject(e)) {
						t = e;
						e = e.effect
					}
					e = {
						effect: e
					};
					if (t == null) t = {};
					if (typeof t === "function") {
						n = t;
						i = null;
						t = {}
					}
					if (typeof t === "number" || te.fx.speeds[t]) {
						n = i;
						i = t;
						t = {}
					}
					if (typeof i === "function") {
						n = i;
						i = null
					}
					if (t) te.extend(e, t);
					i = i || t.duration;
					e.duration = te.fx.off ? 0 : typeof i === "number" ? i : i in te.fx.speeds ? te.fx.speeds[i] : te.fx.speeds._default;
					e.complete = n || t.complete;
					return e
				}

				function E(e) {
					if (!e || typeof e === "number" || te.fx.speeds[e]) return true;
					if (typeof e === "string" && !te.effects.effect[e]) return true;
					if (typeof e === "function") return true;
					if (typeof e === "object" && !e.effect) return true;
					return false
				}

				function J(e, t) {
					var i = t.outerWidth(),
						n = t.outerHeight(),
						s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
						a = s.exec(e) || ["", 0, i, n, 0];
					return {
						top: parseFloat(a[1]) || 0,
						right: a[2] === "auto" ? i : parseFloat(a[2]),
						bottom: a[3] === "auto" ? n : parseFloat(a[3]),
						left: parseFloat(a[4]) || 0
					}
				}
				te.extend(te.effects, {
					version: "1.13.2",
					define: function(e, t, i) {
						if (!i) {
							i = t;
							t = "effect"
						}
						te.effects.effect[e] = i;
						te.effects.effect[e].mode = t;
						return i
					},
					scaledDimensions: function(e, t, i) {
						if (t === 0) return {
							height: 0,
							width: 0,
							outerHeight: 0,
							outerWidth: 0
						};
						var n = i !== "horizontal" ? (t || 100) / 100 : 1,
							s = i !== "vertical" ? (t || 100) / 100 : 1;
						return {
							height: e.height() * s,
							width: e.width() * n,
							outerHeight: e.outerHeight() * s,
							outerWidth: e.outerWidth() * n
						}
					},
					clipToBox: function(e) {
						return {
							width: e.clip.right - e.clip.left,
							height: e.clip.bottom - e.clip.top,
							left: e.clip.left,
							top: e.clip.top
						}
					},
					unshift: function(e, t, i) {
						var n = e.queue();
						if (t > 1) n.splice.apply(n, [1, 0].concat(n.splice(t, i)));
						e.dequeue()
					},
					saveStyle: function(e) {
						e.data(t, e[0].style.cssText)
					},
					restoreStyle: function(e) {
						e[0].style.cssText = e.data(t) || "";
						e.removeData(t)
					},
					mode: function(e, t) {
						var i = e.is(":hidden");
						if (t === "toggle") t = i ? "show" : "hide";
						if (i ? t === "hide" : t === "show") t = "none";
						return t
					},
					getBaseline: function(e, t) {
						var i, n;
						switch (e[0]) {
							case "top":
								i = 0;
								break;
							case "middle":
								i = .5;
								break;
							case "bottom":
								i = 1;
								break;
							default:
								i = e[0] / t.height
						}
						switch (e[1]) {
							case "left":
								n = 0;
								break;
							case "center":
								n = .5;
								break;
							case "right":
								n = 1;
								break;
							default:
								n = e[1] / t.width
						}
						return {
							x: n,
							y: i
						}
					},
					createPlaceholder: function(e) {
						var t, i = e.css("position"),
							n = e.position();
						e.css({
							marginTop: e.css("marginTop"),
							marginBottom: e.css("marginBottom"),
							marginLeft: e.css("marginLeft"),
							marginRight: e.css("marginRight")
						}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight());
						if (/^(static|relative)/.test(i)) {
							i = "absolute";
							t = te("<" + e[0].nodeName + ">").insertAfter(e).css({
								display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
								visibility: "hidden",
								marginTop: e.css("marginTop"),
								marginBottom: e.css("marginBottom"),
								marginLeft: e.css("marginLeft"),
								marginRight: e.css("marginRight"),
								float: e.css("float")
							}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder");
							e.data(S + "placeholder", t)
						}
						e.css({
							position: i,
							left: n.left,
							top: n.top
						});
						return t
					},
					removePlaceholder: function(e) {
						var t = S + "placeholder",
							i = e.data(t);
						if (i) {
							i.remove();
							e.removeData(t)
						}
					},
					cleanUp: function(e) {
						te.effects.restoreStyle(e);
						te.effects.removePlaceholder(e)
					},
					setTransition: function(n, e, s, a) {
						a = a || {};
						te.each(e, function(e, t) {
							var i = n.cssUnit(t);
							if (i[0] > 0) a[t] = i[0] * s + i[1]
						});
						return a
					}
				}), te.fn.extend({
					effect: function() {
						var s = A.apply(this, arguments),
							a = te.effects.effect[s.effect],
							o = a.mode,
							e = s.queue,
							t = e || "fx",
							r = s.complete,
							l = s.mode,
							u = [],
							i = function(e) {
								var t = te(this),
									i = te.effects.mode(t, l) || o;
								t.data(T, true);
								u.push(i);
								if (o && (i === "show" || i === o && i === "hide")) t.show();
								if (!o || i !== "none") te.effects.saveStyle(t);
								if (typeof e === "function") e()
							};
						if (te.fx.off || !a)
							if (l) return this[l](s.duration, r);
							else return this.each(function() {
								if (r) r.call(this)
							});

						function n(e) {
							var t = te(this);

							function i() {
								t.removeData(T);
								te.effects.cleanUp(t);
								if (s.mode === "hide") t.hide();
								n()
							}

							function n() {
								if (typeof r === "function") r.call(t[0]);
								if (typeof e === "function") e()
							}
							s.mode = u.shift();
							if (te.uiBackCompat !== false && !o)
								if (t.is(":hidden") ? l === "hide" : l === "show") {
									t[l]();
									n()
								} else a.call(t[0], s, n);
							else if (s.mode === "none") {
								t[l]();
								n()
							} else a.call(t[0], s, i)
						}
						return e === false ? this.each(i).each(n) : this.queue(t, i).queue(t, n)
					},
					show: function(i) {
						return function(e) {
							if (E(e)) return i.apply(this, arguments);
							else {
								var t = A.apply(this, arguments);
								t.mode = "show";
								return this.effect.call(this, t)
							}
						}
					}(te.fn.show),
					hide: function(i) {
						return function(e) {
							if (E(e)) return i.apply(this, arguments);
							else {
								var t = A.apply(this, arguments);
								t.mode = "hide";
								return this.effect.call(this, t)
							}
						}
					}(te.fn.hide),
					toggle: function(i) {
						return function(e) {
							if (E(e) || typeof e === "boolean") return i.apply(this, arguments);
							else {
								var t = A.apply(this, arguments);
								t.mode = "toggle";
								return this.effect.call(this, t)
							}
						}
					}(te.fn.toggle),
					cssUnit: function(e) {
						var i = this.css(e),
							n = [];
						te.each(["em", "px", "%", "pt"], function(e, t) {
							if (i.indexOf(t) > 0) n = [parseFloat(i), t]
						});
						return n
					},
					cssClip: function(e) {
						if (e) return this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)");
						return J(this.css("clip"), this)
					},
					transfer: function(e, t) {
						var i = te(this),
							n = te(e.to),
							s = n.css("position") === "fixed",
							a = te("body"),
							o = s ? a.scrollTop() : 0,
							r = s ? a.scrollLeft() : 0,
							l = n.offset(),
							u = {
								top: l.top - o,
								left: l.left - r,
								height: n.innerHeight(),
								width: n.innerWidth()
							},
							c = i.offset(),
							h = te("<div class='ui-effects-transfer'></div>");
						h.appendTo("body").addClass(e.className).css({
							top: c.top - o,
							left: c.left - r,
							height: i.innerHeight(),
							width: i.innerWidth(),
							position: s ? "fixed" : "absolute"
						}).animate(u, e.duration, e.easing, function() {
							h.remove();
							if (typeof t === "function") t()
						})
					}
				}), te.fx.step.clip = function(e) {
					if (!e.clipInit) {
						e.start = te(e.elem).cssClip();
						if (typeof e.end === "string") e.end = J(e.end, e.elem);
						e.clipInit = true
					}
					te(e.elem).cssClip({
						top: e.pos * (e.end.top - e.start.top) + e.start.top,
						right: e.pos * (e.end.right - e.start.right) + e.start.right,
						bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
						left: e.pos * (e.end.left - e.start.left) + e.start.left
					})
				};
				var F = {},
					ee = (te.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, e) {
						F[e] = function(e) {
							return Math.pow(e, t + 2)
						}
					}), te.extend(F, {
						Sine: function(e) {
							return 1 - Math.cos(e * Math.PI / 2)
						},
						Circ: function(e) {
							return 1 - Math.sqrt(1 - e * e)
						},
						Elastic: function(e) {
							return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
						},
						Back: function(e) {
							return e * e * (3 * e - 2)
						},
						Bounce: function(e) {
							var t, i = 4;
							while (e < ((t = Math.pow(2, --i)) - 1) / 11);
							return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
						}
					}), te.each(F, function(e, t) {
						te.easing["easeIn" + e] = t;
						te.easing["easeOut" + e] = function(e) {
							return 1 - t(1 - e)
						};
						te.easing["easeInOut" + e] = function(e) {
							return e < .5 ? t(e * 2) / 2 : 1 - t(e * -2 + 2) / 2
						}
					}), te.effects),
					ie = te.effects.define("blind", "hide", function(e, t) {
						var i = {
								up: ["bottom", "top"],
								vertical: ["bottom", "top"],
								down: ["top", "bottom"],
								left: ["right", "left"],
								horizontal: ["right", "left"],
								right: ["left", "right"]
							},
							n = te(this),
							s = e.direction || "up",
							a = n.cssClip(),
							o = {
								clip: te.extend({}, a)
							},
							r = te.effects.createPlaceholder(n);
						o.clip[i[s][0]] = o.clip[i[s][1]];
						if (e.mode === "show") {
							n.cssClip(o.clip);
							if (r) r.css(te.effects.clipToBox(o));
							o.clip = a
						}
						if (r) r.animate(te.effects.clipToBox(o), e.duration, e.easing);
						n.animate(o, {
							queue: false,
							duration: e.duration,
							easing: e.easing,
							complete: t
						})
					}),
					ne = te.effects.define("bounce", function(e, t) {
						var i, n, s, a = te(this),
							o = e.mode,
							r = o === "hide",
							l = o === "show",
							u = e.direction || "up",
							c = e.distance,
							h = e.times || 5,
							d = h * 2 + (l || r ? 1 : 0),
							f = e.duration / d,
							p = e.easing,
							m = u === "up" || u === "down" ? "top" : "left",
							g = u === "up" || u === "left",
							v = 0,
							b = a.queue().length;
						te.effects.createPlaceholder(a);
						s = a.css(m);
						if (!c) c = a[m === "top" ? "outerHeight" : "outerWidth"]() / 3;
						if (l) {
							n = {
								opacity: 1
							};
							n[m] = s;
							a.css("opacity", 0).css(m, g ? -c * 2 : c * 2).animate(n, f, p)
						}
						if (r) c = c / Math.pow(2, h - 1);
						n = {};
						n[m] = s;
						for (; v < h; v++) {
							i = {};
							i[m] = (g ? "-=" : "+=") + c;
							a.animate(i, f, p).animate(n, f, p);
							c = r ? c * 2 : c / 2
						}
						if (r) {
							i = {
								opacity: 0
							};
							i[m] = (g ? "-=" : "+=") + c;
							a.animate(i, f, p)
						}
						a.queue(t);
						te.effects.unshift(a, b, d + 1)
					}),
					se = te.effects.define("clip", "hide", function(e, t) {
						var i, n = {},
							s = te(this),
							a = e.direction || "vertical",
							o = a === "both",
							r = o || a === "horizontal",
							l = o || a === "vertical";
						i = s.cssClip();
						n.clip = {
							top: l ? (i.bottom - i.top) / 2 : i.top,
							right: r ? (i.right - i.left) / 2 : i.right,
							bottom: l ? (i.bottom - i.top) / 2 : i.bottom,
							left: r ? (i.right - i.left) / 2 : i.left
						};
						te.effects.createPlaceholder(s);
						if (e.mode === "show") {
							s.cssClip(n.clip);
							n.clip = i
						}
						s.animate(n, {
							queue: false,
							duration: e.duration,
							easing: e.easing,
							complete: t
						})
					}),
					ae = te.effects.define("drop", "hide", function(e, t) {
						var i, n = te(this),
							s = e.mode,
							a = s === "show",
							o = e.direction || "left",
							r = o === "up" || o === "down" ? "top" : "left",
							l = o === "up" || o === "left" ? "-=" : "+=",
							u = l === "+=" ? "-=" : "+=",
							c = {
								opacity: 0
							};
						te.effects.createPlaceholder(n);
						i = e.distance || n[r === "top" ? "outerHeight" : "outerWidth"](true) / 2;
						c[r] = l + i;
						if (a) {
							n.css(c);
							c[r] = u + i;
							c.opacity = 1
						}
						n.animate(c, {
							queue: false,
							duration: e.duration,
							easing: e.easing,
							complete: t
						})
					}),
					oe = te.effects.define("explode", "hide", function(e, t) {
						var i, n, s, a, o, r, l = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
							u = l,
							c = te(this),
							h = e.mode,
							d = h === "show",
							f = c.show().css("visibility", "hidden").offset(),
							p = Math.ceil(c.outerWidth() / u),
							m = Math.ceil(c.outerHeight() / l),
							g = [];

						function v() {
							g.push(this);
							if (g.length === l * u) b()
						}
						for (i = 0; i < l; i++) {
							a = f.top + i * m;
							r = i - (l - 1) / 2;
							for (n = 0; n < u; n++) {
								s = f.left + n * p;
								o = n - (u - 1) / 2;
								c.clone().appendTo("body").wrap("<div></div>").css({
									position: "absolute",
									visibility: "visible",
									left: -n * p,
									top: -i * m
								}).parent().addClass("ui-effects-explode").css({
									position: "absolute",
									overflow: "hidden",
									width: p,
									height: m,
									left: s + (d ? o * p : 0),
									top: a + (d ? r * m : 0),
									opacity: d ? 0 : 1
								}).animate({
									left: s + (d ? 0 : o * p),
									top: a + (d ? 0 : r * m),
									opacity: d ? 1 : 0
								}, e.duration || 500, e.easing, v)
							}
						}

						function b() {
							c.css({
								visibility: "visible"
							});
							te(g).remove();
							t()
						}
					}),
					re = te.effects.define("fade", "toggle", function(e, t) {
						var i = e.mode === "show";
						te(this).css("opacity", i ? 0 : 1).animate({
							opacity: i ? 1 : 0
						}, {
							queue: false,
							duration: e.duration,
							easing: e.easing,
							complete: t
						})
					}),
					le = te.effects.define("fold", "hide", function(t, e) {
						var i = te(this),
							n = t.mode,
							s = n === "show",
							a = n === "hide",
							o = t.size || 15,
							r = /([0-9]+)%/.exec(o),
							l = !!t.horizFirst,
							u = l ? ["right", "bottom"] : ["bottom", "right"],
							c = t.duration / 2,
							h = te.effects.createPlaceholder(i),
							d = i.cssClip(),
							f = {
								clip: te.extend({}, d)
							},
							p = {
								clip: te.extend({}, d)
							},
							m = [d[u[0]], d[u[1]]],
							g = i.queue().length;
						if (r) o = parseInt(r[1], 10) / 100 * m[a ? 0 : 1];
						f.clip[u[0]] = o;
						p.clip[u[0]] = o;
						p.clip[u[1]] = 0;
						if (s) {
							i.cssClip(p.clip);
							if (h) h.css(te.effects.clipToBox(p));
							p.clip = d
						}
						i.queue(function(e) {
							if (h) h.animate(te.effects.clipToBox(f), c, t.easing).animate(te.effects.clipToBox(p), c, t.easing);
							e()
						}).animate(f, c, t.easing).animate(p, c, t.easing).queue(e);
						te.effects.unshift(i, g, 4)
					}),
					ue = te.effects.define("highlight", "show", function(e, t) {
						var i = te(this),
							n = {
								backgroundColor: i.css("backgroundColor")
							};
						if (e.mode === "hide") n.opacity = 0;
						te.effects.saveStyle(i);
						i.css({
							backgroundImage: "none",
							backgroundColor: e.color || "#ffff99"
						}).animate(n, {
							queue: false,
							duration: e.duration,
							easing: e.easing,
							complete: t
						})
					}),
					ce = te.effects.define("size", function(s, t) {
						var e, a, i, n = te(this),
							o = ["fontSize"],
							r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
							l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
							u = s.mode,
							c = u !== "effect",
							h = s.scale || "both",
							d = s.origin || ["middle", "center"],
							f = n.css("position"),
							p = n.position(),
							m = te.effects.scaledDimensions(n),
							g = s.from || m,
							v = s.to || te.effects.scaledDimensions(n, 0);
						te.effects.createPlaceholder(n);
						if (u === "show") {
							i = g;
							g = v;
							v = i
						}
						a = {
							from: {
								y: g.height / m.height,
								x: g.width / m.width
							},
							to: {
								y: v.height / m.height,
								x: v.width / m.width
							}
						};
						if (h === "box" || h === "both") {
							if (a.from.y !== a.to.y) {
								g = te.effects.setTransition(n, r, a.from.y, g);
								v = te.effects.setTransition(n, r, a.to.y, v)
							}
							if (a.from.x !== a.to.x) {
								g = te.effects.setTransition(n, l, a.from.x, g);
								v = te.effects.setTransition(n, l, a.to.x, v)
							}
						}
						if (h === "content" || h === "both")
							if (a.from.y !== a.to.y) {
								g = te.effects.setTransition(n, o, a.from.y, g);
								v = te.effects.setTransition(n, o, a.to.y, v)
							} if (d) {
							e = te.effects.getBaseline(d, m);
							g.top = (m.outerHeight - g.outerHeight) * e.y + p.top;
							g.left = (m.outerWidth - g.outerWidth) * e.x + p.left;
							v.top = (m.outerHeight - v.outerHeight) * e.y + p.top;
							v.left = (m.outerWidth - v.outerWidth) * e.x + p.left
						}
						delete g.outerHeight;
						delete g.outerWidth;
						n.css(g);
						if (h === "content" || h === "both") {
							r = r.concat(["marginTop", "marginBottom"]).concat(o);
							l = l.concat(["marginLeft", "marginRight"]);
							n.find("*[width]").each(function() {
								var e = te(this),
									t = te.effects.scaledDimensions(e),
									i = {
										height: t.height * a.from.y,
										width: t.width * a.from.x,
										outerHeight: t.outerHeight * a.from.y,
										outerWidth: t.outerWidth * a.from.x
									},
									n = {
										height: t.height * a.to.y,
										width: t.width * a.to.x,
										outerHeight: t.height * a.to.y,
										outerWidth: t.width * a.to.x
									};
								if (a.from.y !== a.to.y) {
									i = te.effects.setTransition(e, r, a.from.y, i);
									n = te.effects.setTransition(e, r, a.to.y, n)
								}
								if (a.from.x !== a.to.x) {
									i = te.effects.setTransition(e, l, a.from.x, i);
									n = te.effects.setTransition(e, l, a.to.x, n)
								}
								if (c) te.effects.saveStyle(e);
								e.css(i);
								e.animate(n, s.duration, s.easing, function() {
									if (c) te.effects.restoreStyle(e)
								})
							})
						}
						n.animate(v, {
							queue: false,
							duration: s.duration,
							easing: s.easing,
							complete: function() {
								var e = n.offset();
								if (v.opacity === 0) n.css("opacity", g.opacity);
								if (!c) {
									n.css("position", f === "static" ? "relative" : f).offset(e);
									te.effects.saveStyle(n)
								}
								t()
							}
						})
					}),
					he = te.effects.define("scale", function(e, t) {
						var i = te(this),
							n = e.mode,
							s = parseInt(e.percent, 10) || (parseInt(e.percent, 10) === 0 ? 0 : n !== "effect" ? 0 : 100),
							a = te.extend(true, {
								from: te.effects.scaledDimensions(i),
								to: te.effects.scaledDimensions(i, s, e.direction || "both"),
								origin: e.origin || ["middle", "center"]
							}, e);
						if (e.fade) {
							a.from.opacity = 1;
							a.to.opacity = 0
						}
						te.effects.effect.size.call(this, a, t)
					}),
					de = te.effects.define("puff", "hide", function(e, t) {
						var i = te.extend(true, {}, e, {
							fade: true,
							percent: parseInt(e.percent, 10) || 150
						});
						te.effects.effect.scale.call(this, i, t)
					}),
					fe = te.effects.define("pulsate", "show", function(e, t) {
						var i = te(this),
							n = e.mode,
							s = n === "show",
							a = n === "hide",
							o = s || a,
							r = (e.times || 5) * 2 + (o ? 1 : 0),
							l = e.duration / r,
							u = 0,
							c = 1,
							h = i.queue().length;
						if (s || !i.is(":visible")) {
							i.css("opacity", 0).show();
							u = 1
						}
						for (; c < r; c++) {
							i.animate({
								opacity: u
							}, l, e.easing);
							u = 1 - u
						}
						i.animate({
							opacity: u
						}, l, e.easing);
						i.queue(t);
						te.effects.unshift(i, h, r + 1)
					}),
					pe = te.effects.define("shake", function(e, t) {
						var i = 1,
							n = te(this),
							s = e.direction || "left",
							a = e.distance || 20,
							o = e.times || 3,
							r = o * 2 + 1,
							l = Math.round(e.duration / r),
							u = s === "up" || s === "down" ? "top" : "left",
							c = s === "up" || s === "left",
							h = {},
							d = {},
							f = {},
							p = n.queue().length;
						te.effects.createPlaceholder(n);
						h[u] = (c ? "-=" : "+=") + a;
						d[u] = (c ? "+=" : "-=") + a * 2;
						f[u] = (c ? "-=" : "+=") + a * 2;
						n.animate(h, l, e.easing);
						for (; i < o; i++) n.animate(d, l, e.easing).animate(f, l, e.easing);
						n.animate(d, l, e.easing).animate(h, l / 2, e.easing).queue(t);
						te.effects.unshift(n, p, r + 1)
					}),
					me = te.effects.define("slide", "show", function(e, t) {
						var i, n, s = te(this),
							a = {
								up: ["bottom", "top"],
								down: ["top", "bottom"],
								left: ["right", "left"],
								right: ["left", "right"]
							},
							o = e.mode,
							r = e.direction || "left",
							l = r === "up" || r === "down" ? "top" : "left",
							u = r === "up" || r === "left",
							c = e.distance || s[l === "top" ? "outerHeight" : "outerWidth"](true),
							h = {};
						te.effects.createPlaceholder(s);
						i = s.cssClip();
						n = s.position()[l];
						h[l] = (u ? -1 : 1) * c + n;
						h.clip = s.cssClip();
						h.clip[a[r][1]] = h.clip[a[r][0]];
						if (o === "show") {
							s.cssClip(h.clip);
							s.css(l, h[l]);
							h.clip = i;
							h[l] = n
						}
						s.animate(h, {
							queue: false,
							duration: e.duration,
							easing: e.easing,
							complete: t
						})
					}),
					ee;
				if (te.uiBackCompat !== false) ee = te.effects.define("transfer", function(e, t) {
					te(this).transfer(e, t)
				});
				var ge = ee;

				function ve(e) {
					var t = e.css("visibility");
					while (t === "inherit") {
						e = e.parent();
						t = e.css("visibility")
					}
					return t === "visible"
				}
				te.ui.focusable = function(e, t) {
					var i, n, s, a, o, r = e.nodeName.toLowerCase();
					if ("area" === r) {
						i = e.parentNode;
						n = i.name;
						if (!e.href || !n || i.nodeName.toLowerCase() !== "map") return false;
						s = te("img[usemap='#" + n + "']");
						return s.length > 0 && s.is(":visible")
					}
					if (/^(input|select|textarea|button|object)$/.test(r)) {
						a = !e.disabled;
						if (a) {
							o = te(e).closest("fieldset")[0];
							if (o) a = !o.disabled
						}
					} else if ("a" === r) a = e.href || t;
					else a = t;
					return a && te(e).is(":visible") && ve(te(e))
				}, te.extend(te.expr.pseudos, {
					focusable: function(e) {
						return te.ui.focusable(e, te.attr(e, "tabindex") != null)
					}
				});
				var be = te.ui.focusable,
					ye = te.fn._form = function() {
						return typeof this[0].form === "string" ? this.closest("form") : te(this[0].form)
					},
					_e = te.ui.formResetMixin = {
						_formResetHandler: function() {
							var t = te(this);
							setTimeout(function() {
								var e = t.data("ui-form-reset-instances");
								te.each(e, function() {
									this.refresh()
								})
							})
						},
						_bindFormResetHandler: function() {
							this.form = this.element._form();
							if (!this.form.length) return;
							var e = this.form.data("ui-form-reset-instances") || [];
							if (!e.length) this.form.on("reset.ui-form-reset", this._formResetHandler);
							e.push(this);
							this.form.data("ui-form-reset-instances", e)
						},
						_unbindFormResetHandler: function() {
							if (!this.form.length) return;
							var e = this.form.data("ui-form-reset-instances");
							e.splice(te.inArray(this, e), 1);
							if (e.length) this.form.data("ui-form-reset-instances", e);
							else this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
						}
					};
				if (!te.expr.pseudos) te.expr.pseudos = te.expr[":"];
				if (!te.uniqueSort) te.uniqueSort = te.unique;
				if (!te.escapeSelector) {
					var xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
					var we = function(e, t) {
						if (t) {
							if (e === "\0") return "�";
							return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
						}
						return "\\" + e
					};
					te.escapeSelector = function(e) {
						return (e + "").replace(xe, we)
					}
				}
				if (!te.fn.even || !te.fn.odd) te.fn.extend({
					even: function() {
						return this.filter(function(e) {
							return e % 2 === 0
						})
					},
					odd: function() {
						return this.filter(function(e) {
							return e % 2 === 1
						})
					}
				});
				var De = te.ui.keyCode = {
						BACKSPACE: 8,
						COMMA: 188,
						DELETE: 46,
						DOWN: 40,
						END: 35,
						ENTER: 13,
						ESCAPE: 27,
						HOME: 36,
						LEFT: 37,
						PAGE_DOWN: 34,
						PAGE_UP: 33,
						PERIOD: 190,
						RIGHT: 39,
						SPACE: 32,
						TAB: 9,
						UP: 38
					},
					Ce = te.fn.labels = function() {
						var e, t, i, n, s;
						if (!this.length) return this.pushStack([]);
						if (this[0].labels && this[0].labels.length) return this.pushStack(this[0].labels);
						n = this.eq(0).parents("label");
						i = this.attr("id");
						if (i) {
							e = this.eq(0).parents().last();
							s = e.add(e.length ? e.siblings() : this.siblings());
							t = "label[for='" + te.escapeSelector(i) + "']";
							n = n.add(s.find(t).addBack(t))
						}
						return this.pushStack(n)
					},
					ke = te.fn.scrollParent = function(e) {
						var t = this.css("position"),
							i = t === "absolute",
							n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
							s = this.parents().filter(function() {
								var e = te(this);
								if (i && e.css("position") === "static") return false;
								return n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
							}).eq(0);
						return t === "fixed" || !s.length ? te(this[0].ownerDocument || document) : s
					},
					Se = te.extend(te.expr.pseudos, {
						tabbable: function(e) {
							var t = te.attr(e, "tabindex"),
								i = t != null;
							return (!i || t >= 0) && te.ui.focusable(e, i)
						}
					}),
					Te = te.fn.extend({
						uniqueId: function() {
							var e = 0;
							return function() {
								return this.each(function() {
									if (!this.id) this.id = "ui-id-" + ++e
								})
							}
						}(),
						removeUniqueId: function() {
							return this.each(function() {
								if (/^ui-id-\d+$/.test(this.id)) te(this).removeAttr("id")
							})
						}
					}),
					Ae = te.widget("ui.accordion", {
						version: "1.13.2",
						options: {
							active: 0,
							animate: {},
							classes: {
								"ui-accordion-header": "ui-corner-top",
								"ui-accordion-header-collapsed": "ui-corner-all",
								"ui-accordion-content": "ui-corner-bottom"
							},
							collapsible: false,
							event: "click",
							header: function(e) {
								return e.find("> li > :first-child").add(e.find("> :not(li)").even())
							},
							heightStyle: "auto",
							icons: {
								activeHeader: "ui-icon-triangle-1-s",
								header: "ui-icon-triangle-1-e"
							},
							activate: null,
							beforeActivate: null
						},
						hideProps: {
							borderTopWidth: "hide",
							borderBottomWidth: "hide",
							paddingTop: "hide",
							paddingBottom: "hide",
							height: "hide"
						},
						showProps: {
							borderTopWidth: "show",
							borderBottomWidth: "show",
							paddingTop: "show",
							paddingBottom: "show",
							height: "show"
						},
						_create: function() {
							var e = this.options;
							this.prevShow = this.prevHide = te();
							this._addClass("ui-accordion", "ui-widget ui-helper-reset");
							this.element.attr("role", "tablist");
							if (!e.collapsible && (e.active === false || e.active == null)) e.active = 0;
							this._processPanels();
							if (e.active < 0) e.active += this.headers.length;
							this._refresh()
						},
						_getCreateEventData: function() {
							return {
								header: this.active,
								panel: !this.active.length ? te() : this.active.next()
							}
						},
						_createIcons: function() {
							var e, t, i = this.options.icons;
							if (i) {
								e = te("<span>");
								this._addClass(e, "ui-accordion-header-icon", "ui-icon " + i.header);
								e.prependTo(this.headers);
								t = this.active.children(".ui-accordion-header-icon");
								this._removeClass(t, i.header)._addClass(t, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons")
							}
						},
						_destroyIcons: function() {
							this._removeClass(this.headers, "ui-accordion-icons");
							this.headers.children(".ui-accordion-header-icon").remove()
						},
						_destroy: function() {
							var e;
							this.element.removeAttr("role");
							this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
							this._destroyIcons();
							e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
							if (this.options.heightStyle !== "content") e.css("height", "")
						},
						_setOption: function(e, t) {
							if (e === "active") {
								this._activate(t);
								return
							}
							if (e === "event") {
								if (this.options.event) this._off(this.headers, this.options.event);
								this._setupEvents(t)
							}
							this._super(e, t);
							if (e === "collapsible" && !t && this.options.active === false) this._activate(0);
							if (e === "icons") {
								this._destroyIcons();
								if (t) this._createIcons()
							}
						},
						_setOptionDisabled: function(e) {
							this._super(e);
							this.element.attr("aria-disabled", e);
							this._toggleClass(null, "ui-state-disabled", !!e);
							this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!e)
						},
						_keydown: function(e) {
							if (e.altKey || e.ctrlKey) return;
							var t = te.ui.keyCode,
								i = this.headers.length,
								n = this.headers.index(e.target),
								s = false;
							switch (e.keyCode) {
								case t.RIGHT:
								case t.DOWN:
									s = this.headers[(n + 1) % i];
									break;
								case t.LEFT:
								case t.UP:
									s = this.headers[(n - 1 + i) % i];
									break;
								case t.SPACE:
								case t.ENTER:
									this._eventHandler(e);
									break;
								case t.HOME:
									s = this.headers[0];
									break;
								case t.END:
									s = this.headers[i - 1];
									break
							}
							if (s) {
								te(e.target).attr("tabIndex", -1);
								te(s).attr("tabIndex", 0);
								te(s).trigger("focus");
								e.preventDefault()
							}
						},
						_panelKeyDown: function(e) {
							if (e.keyCode === te.ui.keyCode.UP && e.ctrlKey) te(e.currentTarget).prev().trigger("focus")
						},
						refresh: function() {
							var e = this.options;
							this._processPanels();
							if (e.active === false && e.collapsible === true || !this.headers.length) {
								e.active = false;
								this.active = te()
							} else if (e.active === false) this._activate(0);
							else if (this.active.length && !te.contains(this.element[0], this.active[0]))
								if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
									e.active = false;
									this.active = te()
								} else this._activate(Math.max(0, e.active - 1));
							else e.active = this.headers.index(this.active);
							this._destroyIcons();
							this._refresh()
						},
						_processPanels: function() {
							var e = this.headers,
								t = this.panels;
							if (typeof this.options.header === "function") this.headers = this.options.header(this.element);
							else this.headers = this.element.find(this.options.header);
							this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
							this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
							this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
							if (t) {
								this._off(e.not(this.headers));
								this._off(t.not(this.panels))
							}
						},
						_refresh: function() {
							var i, e = this.options,
								t = e.heightStyle,
								n = this.element.parent();
							this.active = this._findActive(e.active);
							this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
							this._addClass(this.active.next(), "ui-accordion-content-active");
							this.active.next().show();
							this.headers.attr("role", "tab").each(function() {
								var e = te(this),
									t = e.uniqueId().attr("id"),
									i = e.next(),
									n = i.uniqueId().attr("id");
								e.attr("aria-controls", n);
								i.attr("aria-labelledby", t)
							}).next().attr("role", "tabpanel");
							this.headers.not(this.active).attr({
								"aria-selected": "false",
								"aria-expanded": "false",
								tabIndex: -1
							}).next().attr({
								"aria-hidden": "true"
							}).hide();
							if (!this.active.length) this.headers.eq(0).attr("tabIndex", 0);
							else this.active.attr({
								"aria-selected": "true",
								"aria-expanded": "true",
								tabIndex: 0
							}).next().attr({
								"aria-hidden": "false"
							});
							this._createIcons();
							this._setupEvents(e.event);
							if (t === "fill") {
								i = n.height();
								this.element.siblings(":visible").each(function() {
									var e = te(this),
										t = e.css("position");
									if (t === "absolute" || t === "fixed") return;
									i -= e.outerHeight(true)
								});
								this.headers.each(function() {
									i -= te(this).outerHeight(true)
								});
								this.headers.next().each(function() {
									te(this).height(Math.max(0, i - te(this).innerHeight() + te(this).height()))
								}).css("overflow", "auto")
							} else if (t === "auto") {
								i = 0;
								this.headers.next().each(function() {
									var e = te(this).is(":visible");
									if (!e) te(this).show();
									i = Math.max(i, te(this).css("height", "").height());
									if (!e) te(this).hide()
								}).height(i)
							}
						},
						_activate: function(e) {
							var t = this._findActive(e)[0];
							if (t === this.active[0]) return;
							t = t || this.active[0];
							this._eventHandler({
								target: t,
								currentTarget: t,
								preventDefault: te.noop
							})
						},
						_findActive: function(e) {
							return typeof e === "number" ? this.headers.eq(e) : te()
						},
						_setupEvents: function(e) {
							var i = {
								keydown: "_keydown"
							};
							if (e) te.each(e.split(" "), function(e, t) {
								i[t] = "_eventHandler"
							});
							this._off(this.headers.add(this.headers.next()));
							this._on(this.headers, i);
							this._on(this.headers.next(), {
								keydown: "_panelKeyDown"
							});
							this._hoverable(this.headers);
							this._focusable(this.headers)
						},
						_eventHandler: function(e) {
							var t, i, n = this.options,
								s = this.active,
								a = te(e.currentTarget),
								o = a[0] === s[0],
								r = o && n.collapsible,
								l = r ? te() : a.next(),
								u = s.next(),
								c = {
									oldHeader: s,
									oldPanel: u,
									newHeader: r ? te() : a,
									newPanel: l
								};
							e.preventDefault();
							if (o && !n.collapsible || this._trigger("beforeActivate", e, c) === false) return;
							n.active = r ? false : this.headers.index(a);
							this.active = o ? te() : a;
							this._toggle(c);
							this._removeClass(s, "ui-accordion-header-active", "ui-state-active");
							if (n.icons) {
								t = s.children(".ui-accordion-header-icon");
								this._removeClass(t, null, n.icons.activeHeader)._addClass(t, null, n.icons.header)
							}
							if (!o) {
								this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active");
								if (n.icons) {
									i = a.children(".ui-accordion-header-icon");
									this._removeClass(i, null, n.icons.header)._addClass(i, null, n.icons.activeHeader)
								}
								this._addClass(a.next(), "ui-accordion-content-active")
							}
						},
						_toggle: function(e) {
							var t = e.newPanel,
								i = this.prevShow.length ? this.prevShow : e.oldPanel;
							this.prevShow.add(this.prevHide).stop(true, true);
							this.prevShow = t;
							this.prevHide = i;
							if (this.options.animate) this._animate(t, i, e);
							else {
								i.hide();
								t.show();
								this._toggleComplete(e)
							}
							i.attr({
								"aria-hidden": "true"
							});
							i.prev().attr({
								"aria-selected": "false",
								"aria-expanded": "false"
							});
							if (t.length && i.length) i.prev().attr({
								tabIndex: -1,
								"aria-expanded": "false"
							});
							else if (t.length) this.headers.filter(function() {
								return parseInt(te(this).attr("tabIndex"), 10) === 0
							}).attr("tabIndex", -1);
							t.attr("aria-hidden", "false").prev().attr({
								"aria-selected": "true",
								"aria-expanded": "true",
								tabIndex: 0
							})
						},
						_animate: function(e, i, t) {
							var n, s, a, o = this,
								r = 0,
								l = e.css("box-sizing"),
								u = e.length && (!i.length || e.index() < i.index()),
								c = this.options.animate || {},
								h = u && c.down || c,
								d = function() {
									o._toggleComplete(t)
								};
							if (typeof h === "number") a = h;
							if (typeof h === "string") s = h;
							s = s || h.easing || c.easing;
							a = a || h.duration || c.duration;
							if (!i.length) return e.animate(this.showProps, a, s, d);
							if (!e.length) return i.animate(this.hideProps, a, s, d);
							n = e.show().outerHeight();
							i.animate(this.hideProps, {
								duration: a,
								easing: s,
								step: function(e, t) {
									t.now = Math.round(e)
								}
							});
							e.hide().animate(this.showProps, {
								duration: a,
								easing: s,
								complete: d,
								step: function(e, t) {
									t.now = Math.round(e);
									if (t.prop !== "height") {
										if (l === "content-box") r += t.now
									} else if (o.options.heightStyle !== "content") {
										t.now = Math.round(n - i.outerHeight() - r);
										r = 0
									}
								}
							})
						},
						_toggleComplete: function(e) {
							var t = e.oldPanel,
								i = t.prev();
							this._removeClass(t, "ui-accordion-content-active");
							this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed");
							if (t.length) t.parent()[0].className = t.parent()[0].className;
							this._trigger("activate", null, e)
						}
					}),
					Ee = te.ui.safeActiveElement = function(t) {
						var i;
						try {
							i = t.activeElement
						} catch (e) {
							i = t.body
						}
						if (!i) i = t.body;
						if (!i.nodeName) i = t.body;
						return i
					},
					Fe = te.widget("ui.menu", {
						version: "1.13.2",
						defaultElement: "<ul>",
						delay: 300,
						options: {
							icons: {
								submenu: "ui-icon-caret-1-e"
							},
							items: "> *",
							menus: "ul",
							position: {
								my: "left top",
								at: "right top"
							},
							role: "menu",
							blur: null,
							focus: null,
							select: null
						},
						_create: function() {
							this.activeMenu = this.element;
							this.mouseHandled = false;
							this.lastMousePosition = {
								x: null,
								y: null
							};
							this.element.uniqueId().attr({
								role: this.options.role,
								tabIndex: 0
							});
							this._addClass("ui-menu", "ui-widget ui-widget-content");
							this._on({
								"mousedown .ui-menu-item": function(e) {
									e.preventDefault();
									this._activateItem(e)
								},
								"click .ui-menu-item": function(e) {
									var t = te(e.target);
									var i = te(te.ui.safeActiveElement(this.document[0]));
									if (!this.mouseHandled && t.not(".ui-state-disabled").length) {
										this.select(e);
										if (!e.isPropagationStopped()) this.mouseHandled = true;
										if (t.has(".ui-menu").length) this.expand(e);
										else if (!this.element.is(":focus") && i.closest(".ui-menu").length) {
											this.element.trigger("focus", [true]);
											if (this.active && this.active.parents(".ui-menu").length === 1) clearTimeout(this.timer)
										}
									}
								},
								"mouseenter .ui-menu-item": "_activateItem",
								"mousemove .ui-menu-item": "_activateItem",
								mouseleave: "collapseAll",
								"mouseleave .ui-menu": "collapseAll",
								focus: function(e, t) {
									var i = this.active || this._menuItems().first();
									if (!t) this.focus(e, i)
								},
								blur: function(t) {
									this._delay(function() {
										var e = !te.contains(this.element[0], te.ui.safeActiveElement(this.document[0]));
										if (e) this.collapseAll(t)
									})
								},
								keydown: "_keydown"
							});
							this.refresh();
							this._on(this.document, {
								click: function(e) {
									if (this._closeOnDocumentClick(e)) this.collapseAll(e, true);
									this.mouseHandled = false
								}
							})
						},
						_activateItem: function(e) {
							if (this.previousFilter) return;
							if (e.clientX === this.lastMousePosition.x && e.clientY === this.lastMousePosition.y) return;
							this.lastMousePosition = {
								x: e.clientX,
								y: e.clientY
							};
							var t = te(e.target).closest(".ui-menu-item"),
								i = te(e.currentTarget);
							if (t[0] !== i[0]) return;
							if (i.is(".ui-state-active")) return;
							this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active");
							this.focus(e, i)
						},
						_destroy: function() {
							var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
								t = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
							this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled " + "tabIndex").removeUniqueId().show();
							t.children().each(function() {
								var e = te(this);
								if (e.data("ui-menu-submenu-caret")) e.remove()
							})
						},
						_keydown: function(e) {
							var t, i, n, s, a = true;
							switch (e.keyCode) {
								case te.ui.keyCode.PAGE_UP:
									this.previousPage(e);
									break;
								case te.ui.keyCode.PAGE_DOWN:
									this.nextPage(e);
									break;
								case te.ui.keyCode.HOME:
									this._move("first", "first", e);
									break;
								case te.ui.keyCode.END:
									this._move("last", "last", e);
									break;
								case te.ui.keyCode.UP:
									this.previous(e);
									break;
								case te.ui.keyCode.DOWN:
									this.next(e);
									break;
								case te.ui.keyCode.LEFT:
									this.collapse(e);
									break;
								case te.ui.keyCode.RIGHT:
									if (this.active && !this.active.is(".ui-state-disabled")) this.expand(e);
									break;
								case te.ui.keyCode.ENTER:
								case te.ui.keyCode.SPACE:
									this._activate(e);
									break;
								case te.ui.keyCode.ESCAPE:
									this.collapse(e);
									break;
								default:
									a = false;
									i = this.previousFilter || "";
									s = false;
									n = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode);
									clearTimeout(this.filterTimer);
									if (n === i) s = true;
									else n = i + n;
									t = this._filterMenuItems(n);
									t = s && t.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : t;
									if (!t.length) {
										n = String.fromCharCode(e.keyCode);
										t = this._filterMenuItems(n)
									}
									if (t.length) {
										this.focus(e, t);
										this.previousFilter = n;
										this.filterTimer = this._delay(function() {
											delete this.previousFilter
										}, 1e3)
									} else delete this.previousFilter
							}
							if (a) e.preventDefault()
						},
						_activate: function(e) {
							if (this.active && !this.active.is(".ui-state-disabled"))
								if (this.active.children("[aria-haspopup='true']").length) this.expand(e);
								else this.select(e)
						},
						refresh: function() {
							var e, t, i, n, s, a = this,
								o = this.options.icons.submenu,
								r = this.element.find(this.options.menus);
							this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
							i = r.filter(":not(.ui-menu)").hide().attr({
								role: this.options.role,
								"aria-hidden": "true",
								"aria-expanded": "false"
							}).each(function() {
								var e = te(this),
									t = e.prev(),
									i = te("<span>").data("ui-menu-submenu-caret", true);
								a._addClass(i, "ui-menu-icon", "ui-icon " + o);
								t.attr("aria-haspopup", "true").prepend(i);
								e.attr("aria-labelledby", t.attr("id"))
							});
							this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front");
							e = r.add(this.element);
							t = e.find(this.options.items);
							t.not(".ui-menu-item").each(function() {
								var e = te(this);
								if (a._isDivider(e)) a._addClass(e, "ui-menu-divider", "ui-widget-content")
							});
							n = t.not(".ui-menu-item, .ui-menu-divider");
							s = n.children().not(".ui-menu").uniqueId().attr({
								tabIndex: -1,
								role: this._itemRole()
							});
							this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper");
							t.filter(".ui-state-disabled").attr("aria-disabled", "true");
							if (this.active && !te.contains(this.element[0], this.active[0])) this.blur()
						},
						_itemRole: function() {
							return {
								menu: "menuitem",
								listbox: "option"
							} [this.options.role]
						},
						_setOption: function(e, t) {
							if (e === "icons") {
								var i = this.element.find(".ui-menu-icon");
								this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
							}
							this._super(e, t)
						},
						_setOptionDisabled: function(e) {
							this._super(e);
							this.element.attr("aria-disabled", String(e));
							this._toggleClass(null, "ui-state-disabled", !!e)
						},
						focus: function(e, t) {
							var i, n, s;
							this.blur(e, e && e.type === "focus");
							this._scrollIntoView(t);
							this.active = t.first();
							n = this.active.children(".ui-menu-item-wrapper");
							this._addClass(n, null, "ui-state-active");
							if (this.options.role) this.element.attr("aria-activedescendant", n.attr("id"));
							s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
							this._addClass(s, null, "ui-state-active");
							if (e && e.type === "keydown") this._close();
							else this.timer = this._delay(function() {
								this._close()
							}, this.delay);
							i = t.children(".ui-menu");
							if (i.length && e && /^mouse/.test(e.type)) this._startOpening(i);
							this.activeMenu = t.parent();
							this._trigger("focus", e, {
								item: t
							})
						},
						_scrollIntoView: function(e) {
							var t, i, n, s, a, o;
							if (this._hasScroll()) {
								t = parseFloat(te.css(this.activeMenu[0], "borderTopWidth")) || 0;
								i = parseFloat(te.css(this.activeMenu[0], "paddingTop")) || 0;
								n = e.offset().top - this.activeMenu.offset().top - t - i;
								s = this.activeMenu.scrollTop();
								a = this.activeMenu.height();
								o = e.outerHeight();
								if (n < 0) this.activeMenu.scrollTop(s + n);
								else if (n + o > a) this.activeMenu.scrollTop(s + n - a + o)
							}
						},
						blur: function(e, t) {
							if (!t) clearTimeout(this.timer);
							if (!this.active) return;
							this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active");
							this._trigger("blur", e, {
								item: this.active
							});
							this.active = null
						},
						_startOpening: function(e) {
							clearTimeout(this.timer);
							if (e.attr("aria-hidden") !== "true") return;
							this.timer = this._delay(function() {
								this._close();
								this._open(e)
							}, this.delay)
						},
						_open: function(e) {
							var t = te.extend({
								of: this.active
							}, this.options.position);
							clearTimeout(this.timer);
							this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true");
							e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t)
						},
						collapseAll: function(t, i) {
							clearTimeout(this.timer);
							this.timer = this._delay(function() {
								var e = i ? this.element : te(t && t.target).closest(this.element.find(".ui-menu"));
								if (!e.length) e = this.element;
								this._close(e);
								this.blur(t);
								this._removeClass(e.find(".ui-state-active"), null, "ui-state-active");
								this.activeMenu = e
							}, i ? 0 : this.delay)
						},
						_close: function(e) {
							if (!e) e = this.active ? this.active.parent() : this.element;
							e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
						},
						_closeOnDocumentClick: function(e) {
							return !te(e.target).closest(".ui-menu").length
						},
						_isDivider: function(e) {
							return !/[^\-\u2014\u2013\s]/.test(e.text())
						},
						collapse: function(e) {
							var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
							if (t && t.length) {
								this._close();
								this.focus(e, t)
							}
						},
						expand: function(e) {
							var t = this.active && this._menuItems(this.active.children(".ui-menu")).first();
							if (t && t.length) {
								this._open(t.parent());
								this._delay(function() {
									this.focus(e, t)
								})
							}
						},
						next: function(e) {
							this._move("next", "first", e)
						},
						previous: function(e) {
							this._move("prev", "last", e)
						},
						isFirstItem: function() {
							return this.active && !this.active.prevAll(".ui-menu-item").length
						},
						isLastItem: function() {
							return this.active && !this.active.nextAll(".ui-menu-item").length
						},
						_menuItems: function(e) {
							return (e || this.element).find(this.options.items).filter(".ui-menu-item")
						},
						_move: function(e, t, i) {
							var n;
							if (this.active)
								if (e === "first" || e === "last") n = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").last();
								else n = this.active[e + "All"](".ui-menu-item").first();
							if (!n || !n.length || !this.active) n = this._menuItems(this.activeMenu)[t]();
							this.focus(i, n)
						},
						nextPage: function(e) {
							var t, i, n;
							if (!this.active) {
								this.next(e);
								return
							}
							if (this.isLastItem()) return;
							if (this._hasScroll()) {
								i = this.active.offset().top;
								n = this.element.innerHeight();
								if (te.fn.jquery.indexOf("3.2.") === 0) n += this.element[0].offsetHeight - this.element.outerHeight();
								this.active.nextAll(".ui-menu-item").each(function() {
									t = te(this);
									return t.offset().top - i - n < 0
								});
								this.focus(e, t)
							} else this.focus(e, this._menuItems(this.activeMenu)[!this.active ? "first" : "last"]())
						},
						previousPage: function(e) {
							var t, i, n;
							if (!this.active) {
								this.next(e);
								return
							}
							if (this.isFirstItem()) return;
							if (this._hasScroll()) {
								i = this.active.offset().top;
								n = this.element.innerHeight();
								if (te.fn.jquery.indexOf("3.2.") === 0) n += this.element[0].offsetHeight - this.element.outerHeight();
								this.active.prevAll(".ui-menu-item").each(function() {
									t = te(this);
									return t.offset().top - i + n > 0
								});
								this.focus(e, t)
							} else this.focus(e, this._menuItems(this.activeMenu).first())
						},
						_hasScroll: function() {
							return this.element.outerHeight() < this.element.prop("scrollHeight")
						},
						select: function(e) {
							this.active = this.active || te(e.target).closest(".ui-menu-item");
							var t = {
								item: this.active
							};
							if (!this.active.has(".ui-menu").length) this.collapseAll(e, true);
							this._trigger("select", e, t)
						},
						_filterMenuItems: function(e) {
							var t = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
								i = new RegExp("^" + t, "i");
							return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
								return i.test(String.prototype.trim.call(te(this).children(".ui-menu-item-wrapper").text()))
							})
						}
					}),
					Pe = (te.widget("ui.autocomplete", {
						version: "1.13.2",
						defaultElement: "<input>",
						options: {
							appendTo: null,
							autoFocus: false,
							delay: 300,
							minLength: 1,
							position: {
								my: "left top",
								at: "left bottom",
								collision: "none"
							},
							source: null,
							change: null,
							close: null,
							focus: null,
							open: null,
							response: null,
							search: null,
							select: null
						},
						requestIndex: 0,
						pending: 0,
						liveRegionTimer: null,
						_create: function() {
							var i, n, s, e = this.element[0].nodeName.toLowerCase(),
								t = e === "textarea",
								a = e === "input";
							this.isMultiLine = t || !a && this._isContentEditable(this.element);
							this.valueMethod = this.element[t || a ? "val" : "text"];
							this.isNewMenu = true;
							this._addClass("ui-autocomplete-input");
							this.element.attr("autocomplete", "off");
							this._on(this.element, {
								keydown: function(e) {
									if (this.element.prop("readOnly")) {
										i = true;
										s = true;
										n = true;
										return
									}
									i = false;
									s = false;
									n = false;
									var t = te.ui.keyCode;
									switch (e.keyCode) {
										case t.PAGE_UP:
											i = true;
											this._move("previousPage", e);
											break;
										case t.PAGE_DOWN:
											i = true;
											this._move("nextPage", e);
											break;
										case t.UP:
											i = true;
											this._keyEvent("previous", e);
											break;
										case t.DOWN:
											i = true;
											this._keyEvent("next", e);
											break;
										case t.ENTER:
											if (this.menu.active) {
												i = true;
												e.preventDefault();
												this.menu.select(e)
											}
											break;
										case t.TAB:
											if (this.menu.active) this.menu.select(e);
											break;
										case t.ESCAPE:
											if (this.menu.element.is(":visible")) {
												if (!this.isMultiLine) this._value(this.term);
												this.close(e);
												e.preventDefault()
											}
											break;
										default:
											n = true;
											this._searchTimeout(e);
											break
									}
								},
								keypress: function(e) {
									if (i) {
										i = false;
										if (!this.isMultiLine || this.menu.element.is(":visible")) e.preventDefault();
										return
									}
									if (n) return;
									var t = te.ui.keyCode;
									switch (e.keyCode) {
										case t.PAGE_UP:
											this._move("previousPage", e);
											break;
										case t.PAGE_DOWN:
											this._move("nextPage", e);
											break;
										case t.UP:
											this._keyEvent("previous", e);
											break;
										case t.DOWN:
											this._keyEvent("next", e);
											break
									}
								},
								input: function(e) {
									if (s) {
										s = false;
										e.preventDefault();
										return
									}
									this._searchTimeout(e)
								},
								focus: function() {
									this.selectedItem = null;
									this.previous = this._value()
								},
								blur: function(e) {
									clearTimeout(this.searching);
									this.close(e);
									this._change(e)
								}
							});
							this._initSource();
							this.menu = te("<ul>").appendTo(this._appendTo()).menu({
								role: null
							}).hide().attr({
								unselectable: "on"
							}).menu("instance");
							this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
							this._on(this.menu.element, {
								mousedown: function(e) {
									e.preventDefault()
								},
								menufocus: function(e, t) {
									var i, n;
									if (this.isNewMenu) {
										this.isNewMenu = false;
										if (e.originalEvent && /^mouse/.test(e.originalEvent.type)) {
											this.menu.blur();
											this.document.one("mousemove", function() {
												te(e.target).trigger(e.originalEvent)
											});
											return
										}
									}
									n = t.item.data("ui-autocomplete-item");
									if (false !== this._trigger("focus", e, {
											item: n
										}))
										if (e.originalEvent && /^key/.test(e.originalEvent.type)) this._value(n.value);
									i = t.item.attr("aria-label") || n.value;
									if (i && String.prototype.trim.call(i).length) {
										clearTimeout(this.liveRegionTimer);
										this.liveRegionTimer = this._delay(function() {
											this.liveRegion.html(te("<div>").text(i))
										}, 100)
									}
								},
								menuselect: function(e, t) {
									var i = t.item.data("ui-autocomplete-item"),
										n = this.previous;
									if (this.element[0] !== te.ui.safeActiveElement(this.document[0])) {
										this.element.trigger("focus");
										this.previous = n;
										this._delay(function() {
											this.previous = n;
											this.selectedItem = i
										})
									}
									if (false !== this._trigger("select", e, {
											item: i
										})) this._value(i.value);
									this.term = this._value();
									this.close(e);
									this.selectedItem = i
								}
							});
							this.liveRegion = te("<div>", {
								role: "status",
								"aria-live": "assertive",
								"aria-relevant": "additions"
							}).appendTo(this.document[0].body);
							this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
							this._on(this.window, {
								beforeunload: function() {
									this.element.removeAttr("autocomplete")
								}
							})
						},
						_destroy: function() {
							clearTimeout(this.searching);
							this.element.removeAttr("autocomplete");
							this.menu.element.remove();
							this.liveRegion.remove()
						},
						_setOption: function(e, t) {
							this._super(e, t);
							if (e === "source") this._initSource();
							if (e === "appendTo") this.menu.element.appendTo(this._appendTo());
							if (e === "disabled" && t && this.xhr) this.xhr.abort()
						},
						_isEventTargetInWidget: function(e) {
							var t = this.menu.element[0];
							return e.target === this.element[0] || e.target === t || te.contains(t, e.target)
						},
						_closeOnClickOutside: function(e) {
							if (!this._isEventTargetInWidget(e)) this.close()
						},
						_appendTo: function() {
							var e = this.options.appendTo;
							if (e) e = e.jquery || e.nodeType ? te(e) : this.document.find(e).eq(0);
							if (!e || !e[0]) e = this.element.closest(".ui-front, dialog");
							if (!e.length) e = this.document[0].body;
							return e
						},
						_initSource: function() {
							var i, n, s = this;
							if (Array.isArray(this.options.source)) {
								i = this.options.source;
								this.source = function(e, t) {
									t(te.ui.autocomplete.filter(i, e.term))
								}
							} else if (typeof this.options.source === "string") {
								n = this.options.source;
								this.source = function(e, t) {
									if (s.xhr) s.xhr.abort();
									s.xhr = te.ajax({
										url: n,
										data: e,
										dataType: "json",
										success: function(e) {
											t(e)
										},
										error: function() {
											t([])
										}
									})
								}
							} else this.source = this.options.source
						},
						_searchTimeout: function(n) {
							clearTimeout(this.searching);
							this.searching = this._delay(function() {
								var e = this.term === this._value(),
									t = this.menu.element.is(":visible"),
									i = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
								if (!e || e && !t && !i) {
									this.selectedItem = null;
									this.search(null, n)
								}
							}, this.options.delay)
						},
						search: function(e, t) {
							e = e != null ? e : this._value();
							this.term = this._value();
							if (e.length < this.options.minLength) return this.close(t);
							if (this._trigger("search", t) === false) return;
							return this._search(e)
						},
						_search: function(e) {
							this.pending++;
							this._addClass("ui-autocomplete-loading");
							this.cancelSearch = false;
							this.source({
								term: e
							}, this._response())
						},
						_response: function() {
							var t = ++this.requestIndex;
							return function(e) {
								if (t === this.requestIndex) this.__response(e);
								this.pending--;
								if (!this.pending) this._removeClass("ui-autocomplete-loading")
							}.bind(this)
						},
						__response: function(e) {
							if (e) e = this._normalize(e);
							this._trigger("response", null, {
								content: e
							});
							if (!this.options.disabled && e && e.length && !this.cancelSearch) {
								this._suggest(e);
								this._trigger("open")
							} else this._close()
						},
						close: function(e) {
							this.cancelSearch = true;
							this._close(e)
						},
						_close: function(e) {
							this._off(this.document, "mousedown");
							if (this.menu.element.is(":visible")) {
								this.menu.element.hide();
								this.menu.blur();
								this.isNewMenu = true;
								this._trigger("close", e)
							}
						},
						_change: function(e) {
							if (this.previous !== this._value()) this._trigger("change", e, {
								item: this.selectedItem
							})
						},
						_normalize: function(e) {
							if (e.length && e[0].label && e[0].value) return e;
							return te.map(e, function(e) {
								if (typeof e === "string") return {
									label: e,
									value: e
								};
								return te.extend({}, e, {
									label: e.label || e.value,
									value: e.value || e.label
								})
							})
						},
						_suggest: function(e) {
							var t = this.menu.element.empty();
							this._renderMenu(t, e);
							this.isNewMenu = true;
							this.menu.refresh();
							t.show();
							this._resizeMenu();
							t.position(te.extend({
								of: this.element
							}, this.options.position));
							if (this.options.autoFocus) this.menu.next();
							this._on(this.document, {
								mousedown: "_closeOnClickOutside"
							})
						},
						_resizeMenu: function() {
							var e = this.menu.element;
							e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
						},
						_renderMenu: function(i, e) {
							var n = this;
							te.each(e, function(e, t) {
								n._renderItemData(i, t)
							})
						},
						_renderItemData: function(e, t) {
							return this._renderItem(e, t).data("ui-autocomplete-item", t)
						},
						_renderItem: function(e, t) {
							return te("<li>").append(te("<div>").text(t.label)).appendTo(e)
						},
						_move: function(e, t) {
							if (!this.menu.element.is(":visible")) {
								this.search(null, t);
								return
							}
							if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
								if (!this.isMultiLine) this._value(this.term);
								this.menu.blur();
								return
							}
							this.menu[e](t)
						},
						widget: function() {
							return this.menu.element
						},
						_value: function() {
							return this.valueMethod.apply(this.element, arguments)
						},
						_keyEvent: function(e, t) {
							if (!this.isMultiLine || this.menu.element.is(":visible")) {
								this._move(e, t);
								t.preventDefault()
							}
						},
						_isContentEditable: function(e) {
							if (!e.length) return false;
							var t = e.prop("contentEditable");
							if (t === "inherit") return this._isContentEditable(e.parent());
							return t === "true"
						}
					}), te.extend(te.ui.autocomplete, {
						escapeRegex: function(e) {
							return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
						},
						filter: function(e, t) {
							var i = new RegExp(te.ui.autocomplete.escapeRegex(t), "i");
							return te.grep(e, function(e) {
								return i.test(e.label || e.value || e)
							})
						}
					}), te.widget("ui.autocomplete", te.ui.autocomplete, {
						options: {
							messages: {
								noResults: "No search results.",
								results: function(e) {
									return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
								}
							}
						},
						__response: function(e) {
							var t;
							this._superApply(arguments);
							if (this.options.disabled || this.cancelSearch) return;
							if (e && e.length) t = this.options.messages.results(e.length);
							else t = this.options.messages.noResults;
							clearTimeout(this.liveRegionTimer);
							this.liveRegionTimer = this._delay(function() {
								this.liveRegion.html(te("<div>").text(t))
							}, 100)
						}
					}), te.ui.autocomplete),
					$e = /ui-corner-([a-z]){2,6}/g,
					Me = te.widget("ui.controlgroup", {
						version: "1.13.2",
						defaultElement: "<div>",
						options: {
							direction: "horizontal",
							disabled: null,
							onlyVisible: true,
							items: {
								button: "input[type=button], input[type=submit], input[type=reset], button, a",
								controlgroupLabel: ".ui-controlgroup-label",
								checkboxradio: "input[type='checkbox'], input[type='radio']",
								selectmenu: "select",
								spinner: ".ui-spinner-input"
							}
						},
						_create: function() {
							this._enhance()
						},
						_enhance: function() {
							this.element.attr("role", "toolbar");
							this.refresh()
						},
						_destroy: function() {
							this._callChildMethod("destroy");
							this.childWidgets.removeData("ui-controlgroup-data");
							this.element.removeAttr("role");
							if (this.options.items.controlgroupLabel) this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
						},
						_initWidgets: function() {
							var o = this,
								r = [];
							te.each(this.options.items, function(s, e) {
								var t;
								var a = {};
								if (!e) return;
								if (s === "controlgroupLabel") {
									t = o.element.find(e);
									t.each(function() {
										var e = te(this);
										if (e.children(".ui-controlgroup-label-contents").length) return;
										e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
									});
									o._addClass(t, null, "ui-widget ui-widget-content ui-state-default");
									r = r.concat(t.get());
									return
								}
								if (!te.fn[s]) return;
								if (o["_" + s + "Options"]) a = o["_" + s + "Options"]("middle");
								else a = {
									classes: {}
								};
								o.element.find(e).each(function() {
									var e = te(this);
									var t = e[s]("instance");
									var i = te.widget.extend({}, a);
									if (s === "button" && e.parent(".ui-spinner").length) return;
									if (!t) t = e[s]()[s]("instance");
									if (t) i.classes = o._resolveClassesValues(i.classes, t);
									e[s](i);
									var n = e[s]("widget");
									te.data(n[0], "ui-controlgroup-data", t ? t : e[s]("instance"));
									r.push(n[0])
								})
							});
							this.childWidgets = te(te.uniqueSort(r));
							this._addClass(this.childWidgets, "ui-controlgroup-item")
						},
						_callChildMethod: function(i) {
							this.childWidgets.each(function() {
								var e = te(this),
									t = e.data("ui-controlgroup-data");
								if (t && t[i]) t[i]()
							})
						},
						_updateCornerClass: function(e, t) {
							var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
							var n = this._buildSimpleOptions(t, "label").classes.label;
							this._removeClass(e, null, i);
							this._addClass(e, null, n)
						},
						_buildSimpleOptions: function(e, t) {
							var i = this.options.direction === "vertical";
							var n = {
								classes: {}
							};
							n.classes[t] = {
								middle: "",
								first: "ui-corner-" + (i ? "top" : "left"),
								last: "ui-corner-" + (i ? "bottom" : "right"),
								only: "ui-corner-all"
							} [e];
							return n
						},
						_spinnerOptions: function(e) {
							var t = this._buildSimpleOptions(e, "ui-spinner");
							t.classes["ui-spinner-up"] = "";
							t.classes["ui-spinner-down"] = "";
							return t
						},
						_buttonOptions: function(e) {
							return this._buildSimpleOptions(e, "ui-button")
						},
						_checkboxradioOptions: function(e) {
							return this._buildSimpleOptions(e, "ui-checkboxradio-label")
						},
						_selectmenuOptions: function(e) {
							var t = this.options.direction === "vertical";
							return {
								width: t ? "auto" : false,
								classes: {
									middle: {
										"ui-selectmenu-button-open": "",
										"ui-selectmenu-button-closed": ""
									},
									first: {
										"ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
										"ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left")
									},
									last: {
										"ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
										"ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right")
									},
									only: {
										"ui-selectmenu-button-open": "ui-corner-top",
										"ui-selectmenu-button-closed": "ui-corner-all"
									}
								} [e]
							}
						},
						_resolveClassesValues: function(i, n) {
							var s = {};
							te.each(i, function(e) {
								var t = n.options.classes[e] || "";
								t = String.prototype.trim.call(t.replace($e, ""));
								s[e] = (t + " " + i[e]).replace(/\s+/g, " ")
							});
							return s
						},
						_setOption: function(e, t) {
							if (e === "direction") this._removeClass("ui-controlgroup-" + this.options.direction);
							this._super(e, t);
							if (e === "disabled") {
								this._callChildMethod(t ? "disable" : "enable");
								return
							}
							this.refresh()
						},
						refresh: function() {
							var s, a = this;
							this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
							if (this.options.direction === "horizontal") this._addClass(null, "ui-helper-clearfix");
							this._initWidgets();
							s = this.childWidgets;
							if (this.options.onlyVisible) s = s.filter(":visible");
							if (s.length) {
								te.each(["first", "last"], function(e, t) {
									var i = s[t]().data("ui-controlgroup-data");
									if (i && a["_" + i.widgetName + "Options"]) {
										var n = a["_" + i.widgetName + "Options"](s.length === 1 ? "only" : t);
										n.classes = a._resolveClassesValues(n.classes, i);
										i.element[i.widgetName](n)
									} else a._updateCornerClass(s[t](), t)
								});
								this._callChildMethod("refresh")
							}
						}
					}),
					Ie = (te.widget("ui.checkboxradio", [te.ui.formResetMixin, {
						version: "1.13.2",
						options: {
							disabled: null,
							label: null,
							icon: true,
							classes: {
								"ui-checkboxradio-label": "ui-corner-all",
								"ui-checkboxradio-icon": "ui-corner-all"
							}
						},
						_getCreateOptions: function() {
							var e, t, i;
							var n = this._super() || {};
							this._readType();
							t = this.element.labels();
							this.label = te(t[t.length - 1]);
							if (!this.label.length) te.error("No label found for checkboxradio widget");
							this.originalLabel = "";
							i = this.label.contents().not(this.element[0]);
							if (i.length) this.originalLabel += i.clone().wrapAll("<div></div>").parent().html();
							if (this.originalLabel) n.label = this.originalLabel;
							e = this.element[0].disabled;
							if (e != null) n.disabled = e;
							return n
						},
						_create: function() {
							var e = this.element[0].checked;
							this._bindFormResetHandler();
							if (this.options.disabled == null) this.options.disabled = this.element[0].disabled;
							this._setOption("disabled", this.options.disabled);
							this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
							this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
							if (this.type === "radio") this._addClass(this.label, "ui-checkboxradio-radio-label");
							if (this.options.label && this.options.label !== this.originalLabel) this._updateLabel();
							else if (this.originalLabel) this.options.label = this.originalLabel;
							this._enhance();
							if (e) this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");
							this._on({
								change: "_toggleClasses",
								focus: function() {
									this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
								},
								blur: function() {
									this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
								}
							})
						},
						_readType: function() {
							var e = this.element[0].nodeName.toLowerCase();
							this.type = this.element[0].type;
							if (e !== "input" || !/radio|checkbox/.test(this.type)) te.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
						},
						_enhance: function() {
							this._updateIcon(this.element[0].checked)
						},
						widget: function() {
							return this.label
						},
						_getRadioGroup: function() {
							var e;
							var t = this.element[0].name;
							var i = "input[name='" + te.escapeSelector(t) + "']";
							if (!t) return te([]);
							if (this.form.length) e = te(this.form[0].elements).filter(i);
							else e = te(i).filter(function() {
								return te(this)._form().length === 0
							});
							return e.not(this.element)
						},
						_toggleClasses: function() {
							var e = this.element[0].checked;
							this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e);
							if (this.options.icon && this.type === "checkbox") this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e);
							if (this.type === "radio") this._getRadioGroup().each(function() {
								var e = te(this).checkboxradio("instance");
								if (e) e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
							})
						},
						_destroy: function() {
							this._unbindFormResetHandler();
							if (this.icon) {
								this.icon.remove();
								this.iconSpace.remove()
							}
						},
						_setOption: function(e, t) {
							if (e === "label" && !t) return;
							this._super(e, t);
							if (e === "disabled") {
								this._toggleClass(this.label, null, "ui-state-disabled", t);
								this.element[0].disabled = t;
								return
							}
							this.refresh()
						},
						_updateIcon: function(e) {
							var t = "ui-icon ui-icon-background ";
							if (this.options.icon) {
								if (!this.icon) {
									this.icon = te("<span>");
									this.iconSpace = te("<span> </span>");
									this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")
								}
								if (this.type === "checkbox") {
									t += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
									this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")
								} else t += "ui-icon-blank";
								this._addClass(this.icon, "ui-checkboxradio-icon", t);
								if (!e) this._removeClass(this.icon, null, "ui-icon-check ui-state-checked");
								this.icon.prependTo(this.label).after(this.iconSpace)
							} else if (this.icon !== undefined) {
								this.icon.remove();
								this.iconSpace.remove();
								delete this.icon
							}
						},
						_updateLabel: function() {
							var e = this.label.contents().not(this.element[0]);
							if (this.icon) e = e.not(this.icon[0]);
							if (this.iconSpace) e = e.not(this.iconSpace[0]);
							e.remove();
							this.label.append(this.options.label)
						},
						refresh: function() {
							var e = this.element[0].checked,
								t = this.element[0].disabled;
							this._updateIcon(e);
							this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e);
							if (this.options.label !== null) this._updateLabel();
							if (t !== this.options.disabled) this._setOptions({
								disabled: t
							})
						}
					}]), te.ui.checkboxradio);
				if (te.widget("ui.button", {
						version: "1.13.2",
						defaultElement: "<button>",
						options: {
							classes: {
								"ui-button": "ui-corner-all"
							},
							disabled: null,
							icon: null,
							iconPosition: "beginning",
							label: null,
							showLabel: true
						},
						_getCreateOptions: function() {
							var e, t = this._super() || {};
							this.isInput = this.element.is("input");
							e = this.element[0].disabled;
							if (e != null) t.disabled = e;
							this.originalLabel = this.isInput ? this.element.val() : this.element.html();
							if (this.originalLabel) t.label = this.originalLabel;
							return t
						},
						_create: function() {
							if (!this.option.showLabel & !this.options.icon) this.options.showLabel = true;
							if (this.options.disabled == null) this.options.disabled = this.element[0].disabled || false;
							this.hasTitle = !!this.element.attr("title");
							if (this.options.label && this.options.label !== this.originalLabel)
								if (this.isInput) this.element.val(this.options.label);
								else this.element.html(this.options.label);
							this._addClass("ui-button", "ui-widget");
							this._setOption("disabled", this.options.disabled);
							this._enhance();
							if (this.element.is("a")) this._on({
								keyup: function(e) {
									if (e.keyCode === te.ui.keyCode.SPACE) {
										e.preventDefault();
										if (this.element[0].click) this.element[0].click();
										else this.element.trigger("click")
									}
								}
							})
						},
						_enhance: function() {
							if (!this.element.is("button")) this.element.attr("role", "button");
							if (this.options.icon) {
								this._updateIcon("icon", this.options.icon);
								this._updateTooltip()
							}
						},
						_updateTooltip: function() {
							this.title = this.element.attr("title");
							if (!this.options.showLabel && !this.title) this.element.attr("title", this.options.label)
						},
						_updateIcon: function(e, t) {
							var i = e !== "iconPosition",
								n = i ? this.options.iconPosition : t,
								s = n === "top" || n === "bottom";
							if (!this.icon) {
								this.icon = te("<span>");
								this._addClass(this.icon, "ui-button-icon", "ui-icon");
								if (!this.options.showLabel) this._addClass("ui-button-icon-only")
							} else if (i) this._removeClass(this.icon, null, this.options.icon);
							if (i) this._addClass(this.icon, null, t);
							this._attachIcon(n);
							if (s) {
								this._addClass(this.icon, null, "ui-widget-icon-block");
								if (this.iconSpace) this.iconSpace.remove()
							} else {
								if (!this.iconSpace) {
									this.iconSpace = te("<span> </span>");
									this._addClass(this.iconSpace, "ui-button-icon-space")
								}
								this._removeClass(this.icon, null, "ui-wiget-icon-block");
								this._attachIconSpace(n)
							}
						},
						_destroy: function() {
							this.element.removeAttr("role");
							if (this.icon) this.icon.remove();
							if (this.iconSpace) this.iconSpace.remove();
							if (!this.hasTitle) this.element.removeAttr("title")
						},
						_attachIconSpace: function(e) {
							this.icon[/^(?:end|bottom)/.test(e) ? "before" : "after"](this.iconSpace)
						},
						_attachIcon: function(e) {
							this.element[/^(?:end|bottom)/.test(e) ? "append" : "prepend"](this.icon)
						},
						_setOptions: function(e) {
							var t = e.showLabel === undefined ? this.options.showLabel : e.showLabel,
								i = e.icon === undefined ? this.options.icon : e.icon;
							if (!t && !i) e.showLabel = true;
							this._super(e)
						},
						_setOption: function(e, t) {
							if (e === "icon")
								if (t) this._updateIcon(e, t);
								else if (this.icon) {
								this.icon.remove();
								if (this.iconSpace) this.iconSpace.remove()
							}
							if (e === "iconPosition") this._updateIcon(e, t);
							if (e === "showLabel") {
								this._toggleClass("ui-button-icon-only", null, !t);
								this._updateTooltip()
							}
							if (e === "label")
								if (this.isInput) this.element.val(t);
								else {
									this.element.html(t);
									if (this.icon) {
										this._attachIcon(this.options.iconPosition);
										this._attachIconSpace(this.options.iconPosition)
									}
								} this._super(e, t);
							if (e === "disabled") {
								this._toggleClass(null, "ui-state-disabled", t);
								this.element[0].disabled = t;
								if (t) this.element.trigger("blur")
							}
						},
						refresh: function() {
							var e = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
							if (e !== this.options.disabled) this._setOptions({
								disabled: e
							});
							this._updateTooltip()
						}
					}), te.uiBackCompat !== false) {
					te.widget("ui.button", te.ui.button, {
						options: {
							text: true,
							icons: {
								primary: null,
								secondary: null
							}
						},
						_create: function() {
							if (this.options.showLabel && !this.options.text) this.options.showLabel = this.options.text;
							if (!this.options.showLabel && this.options.text) this.options.text = this.options.showLabel;
							if (!this.options.icon && (this.options.icons.primary || this.options.icons.secondary))
								if (this.options.icons.primary) this.options.icon = this.options.icons.primary;
								else {
									this.options.icon = this.options.icons.secondary;
									this.options.iconPosition = "end"
								}
							else if (this.options.icon) this.options.icons.primary = this.options.icon;
							this._super()
						},
						_setOption: function(e, t) {
							if (e === "text") {
								this._super("showLabel", t);
								return
							}
							if (e === "showLabel") this.options.text = t;
							if (e === "icon") this.options.icons.primary = t;
							if (e === "icons")
								if (t.primary) {
									this._super("icon", t.primary);
									this._super("iconPosition", "beginning")
								} else if (t.secondary) {
								this._super("icon", t.secondary);
								this._super("iconPosition", "end")
							}
							this._superApply(arguments)
						}
					});
					te.fn.button = function(n) {
						return function(s) {
							var e = typeof s === "string";
							var a = Array.prototype.slice.call(arguments, 1);
							var o = this;
							if (e)
								if (!this.length && s === "instance") o = undefined;
								else this.each(function() {
									var e;
									var t = te(this).attr("type");
									var i = t !== "checkbox" && t !== "radio" ? "button" : "checkboxradio";
									var n = te.data(this, "ui-" + i);
									if (s === "instance") {
										o = n;
										return false
									}
									if (!n) return te.error("cannot call methods on button" + " prior to initialization; " + "attempted to call method '" + s + "'");
									if (typeof n[s] !== "function" || s.charAt(0) === "_") return te.error("no such method '" + s + "' for button" + " widget instance");
									e = n[s].apply(n, a);
									if (e !== n && e !== undefined) {
										o = e && e.jquery ? o.pushStack(e.get()) : e;
										return false
									}
								});
							else {
								if (a.length) s = te.widget.extend.apply(null, [s].concat(a));
								this.each(function() {
									var e = te(this).attr("type");
									var t = e !== "checkbox" && e !== "radio" ? "button" : "checkboxradio";
									var i = te.data(this, "ui-" + t);
									if (i) {
										i.option(s || {});
										if (i._init) i._init()
									} else {
										if (t === "button") {
											n.call(te(this), s);
											return
										}
										te(this).checkboxradio(te.extend({
											icon: false
										}, s))
									}
								})
							}
							return o
						}
					}(te.fn.button);
					te.fn.buttonset = function() {
						if (!te.ui.controlgroup) te.error("Controlgroup widget missing");
						if (arguments[0] === "option" && arguments[1] === "items" && arguments[2]) return this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]);
						if (arguments[0] === "option" && arguments[1] === "items") return this.controlgroup.apply(this, [arguments[0], "items.button"]);
						if (typeof arguments[0] === "object" && arguments[0].items) arguments[0].items = {
							button: arguments[0].items
						};
						return this.controlgroup.apply(this, arguments)
					}
				}
				var Oe = te.ui.button,
					P;

				function He(e) {
					var t, i;
					while (e.length && e[0] !== document) {
						t = e.css("position");
						if (t === "absolute" || t === "relative" || t === "fixed") {
							i = parseInt(e.css("zIndex"), 10);
							if (!isNaN(i) && i !== 0) return i
						}
						e = e.parent()
					}
					return 0
				}

				function Le() {
					this._curInst = null;
					this._keyEvent = false;
					this._disabledInputs = [];
					this._datepickerShowing = false;
					this._inDialog = false;
					this._mainDivId = "ui-datepicker-div";
					this._inlineClass = "ui-datepicker-inline";
					this._appendClass = "ui-datepicker-append";
					this._triggerClass = "ui-datepicker-trigger";
					this._dialogClass = "ui-datepicker-dialog";
					this._disableClass = "ui-datepicker-disabled";
					this._unselectableClass = "ui-datepicker-unselectable";
					this._currentClass = "ui-datepicker-current-day";
					this._dayOverClass = "ui-datepicker-days-cell-over";
					this.regional = [];
					this.regional[""] = {
						closeText: "Done",
						prevText: "Prev",
						nextText: "Next",
						currentText: "Today",
						monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
						dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
						dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
						dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
						weekHeader: "Wk",
						dateFormat: "mm/dd/yy",
						firstDay: 0,
						isRTL: false,
						showMonthAfterYear: false,
						yearSuffix: "",
						selectMonthLabel: "Select month",
						selectYearLabel: "Select year"
					};
					this._defaults = {
						showOn: "focus",
						showAnim: "fadeIn",
						showOptions: {},
						defaultDate: null,
						appendText: "",
						buttonText: "...",
						buttonImage: "",
						buttonImageOnly: false,
						hideIfNoPrevNext: false,
						navigationAsDateFormat: false,
						gotoCurrent: false,
						changeMonth: false,
						changeYear: false,
						yearRange: "c-10:c+10",
						showOtherMonths: false,
						selectOtherMonths: false,
						showWeek: false,
						calculateWeek: this.iso8601Week,
						shortYearCutoff: "+10",
						minDate: null,
						maxDate: null,
						duration: "fast",
						beforeShowDay: null,
						beforeShow: null,
						onSelect: null,
						onChangeMonthYear: null,
						onClose: null,
						onUpdateDatepicker: null,
						numberOfMonths: 1,
						showCurrentAtPos: 0,
						stepMonths: 1,
						stepBigMonths: 12,
						altField: "",
						altFormat: "",
						constrainInput: true,
						showButtonPanel: false,
						autoSize: false,
						disabled: false
					};
					te.extend(this._defaults, this.regional[""]);
					this.regional.en = te.extend(true, {}, this.regional[""]);
					this.regional["en-US"] = te.extend(true, {}, this.regional.en);
					this.dpDiv = Ne(te("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
				}

				function Ne(e) {
					var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
					return e.on("mouseout", t, function() {
						te(this).removeClass("ui-state-hover");
						if (this.className.indexOf("ui-datepicker-prev") !== -1) te(this).removeClass("ui-datepicker-prev-hover");
						if (this.className.indexOf("ui-datepicker-next") !== -1) te(this).removeClass("ui-datepicker-next-hover")
					}).on("mouseover", t, Re)
				}

				function Re() {
					if (!te.datepicker._isDisabledDatepicker(P.inline ? P.dpDiv.parent()[0] : P.input[0])) {
						te(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
						te(this).addClass("ui-state-hover");
						if (this.className.indexOf("ui-datepicker-prev") !== -1) te(this).addClass("ui-datepicker-prev-hover");
						if (this.className.indexOf("ui-datepicker-next") !== -1) te(this).addClass("ui-datepicker-next-hover")
					}
				}

				function $(e, t) {
					te.extend(e, t);
					for (var i in t)
						if (t[i] == null) e[i] = t[i];
					return e
				}
				te.extend(te.ui, {
					datepicker: {
						version: "1.13.2"
					}
				}), te.extend(Le.prototype, {
					markerClassName: "hasDatepicker",
					maxRows: 4,
					_widgetDatepicker: function() {
						return this.dpDiv
					},
					setDefaults: function(e) {
						$(this._defaults, e || {});
						return this
					},
					_attachDatepicker: function(e, t) {
						var i, n, s;
						i = e.nodeName.toLowerCase();
						n = i === "div" || i === "span";
						if (!e.id) {
							this.uuid += 1;
							e.id = "dp" + this.uuid
						}
						s = this._newInst(te(e), n);
						s.settings = te.extend({}, t || {});
						if (i === "input") this._connectDatepicker(e, s);
						else if (n) this._inlineDatepicker(e, s)
					},
					_newInst: function(e, t) {
						var i = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
						return {
							id: i,
							input: e,
							selectedDay: 0,
							selectedMonth: 0,
							selectedYear: 0,
							drawMonth: 0,
							drawYear: 0,
							inline: t,
							dpDiv: !t ? this.dpDiv : Ne(te("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
						}
					},
					_connectDatepicker: function(e, t) {
						var i = te(e);
						t.append = te([]);
						t.trigger = te([]);
						if (i.hasClass(this.markerClassName)) return;
						this._attachments(i, t);
						i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
						this._autoSize(t);
						te.data(e, "datepicker", t);
						if (t.settings.disabled) this._disableDatepicker(e)
					},
					_attachments: function(e, t) {
						var i, n, s, a = this._get(t, "appendText"),
							o = this._get(t, "isRTL");
						if (t.append) t.append.remove();
						if (a) {
							t.append = te("<span>").addClass(this._appendClass).text(a);
							e[o ? "before" : "after"](t.append)
						}
						e.off("focus", this._showDatepicker);
						if (t.trigger) t.trigger.remove();
						i = this._get(t, "showOn");
						if (i === "focus" || i === "both") e.on("focus", this._showDatepicker);
						if (i === "button" || i === "both") {
							n = this._get(t, "buttonText");
							s = this._get(t, "buttonImage");
							if (this._get(t, "buttonImageOnly")) t.trigger = te("<img>").addClass(this._triggerClass).attr({
								src: s,
								alt: n,
								title: n
							});
							else {
								t.trigger = te("<button type='button'>").addClass(this._triggerClass);
								if (s) t.trigger.html(te("<img>").attr({
									src: s,
									alt: n,
									title: n
								}));
								else t.trigger.text(n)
							}
							e[o ? "before" : "after"](t.trigger);
							t.trigger.on("click", function() {
								if (te.datepicker._datepickerShowing && te.datepicker._lastInput === e[0]) te.datepicker._hideDatepicker();
								else if (te.datepicker._datepickerShowing && te.datepicker._lastInput !== e[0]) {
									te.datepicker._hideDatepicker();
									te.datepicker._showDatepicker(e[0])
								} else te.datepicker._showDatepicker(e[0]);
								return false
							})
						}
					},
					_autoSize: function(e) {
						if (this._get(e, "autoSize") && !e.inline) {
							var t, i, n, s, a = new Date(2009, 12 - 1, 20),
								o = this._get(e, "dateFormat");
							if (o.match(/[DM]/)) {
								t = function(e) {
									i = 0;
									n = 0;
									for (s = 0; s < e.length; s++)
										if (e[s].length > i) {
											i = e[s].length;
											n = s
										} return n
								};
								a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort")));
								a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())
							}
							e.input.attr("size", this._formatDate(e, a).length)
						}
					},
					_inlineDatepicker: function(e, t) {
						var i = te(e);
						if (i.hasClass(this.markerClassName)) return;
						i.addClass(this.markerClassName).append(t.dpDiv);
						te.data(e, "datepicker", t);
						this._setDate(t, this._getDefaultDate(t), true);
						this._updateDatepicker(t);
						this._updateAlternate(t);
						if (t.settings.disabled) this._disableDatepicker(e);
						t.dpDiv.css("display", "block")
					},
					_dialogDatepicker: function(e, t, i, n, s) {
						var a, o, r, l, u, c = this._dialogInst;
						if (!c) {
							this.uuid += 1;
							a = "dp" + this.uuid;
							this._dialogInput = te("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>");
							this._dialogInput.on("keydown", this._doKeyDown);
							te("body").append(this._dialogInput);
							c = this._dialogInst = this._newInst(this._dialogInput, false);
							c.settings = {};
							te.data(this._dialogInput[0], "datepicker", c)
						}
						$(c.settings, n || {});
						t = t && t.constructor === Date ? this._formatDate(c, t) : t;
						this._dialogInput.val(t);
						this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null;
						if (!this._pos) {
							o = document.documentElement.clientWidth;
							r = document.documentElement.clientHeight;
							l = document.documentElement.scrollLeft || document.body.scrollLeft;
							u = document.documentElement.scrollTop || document.body.scrollTop;
							this._pos = [o / 2 - 100 + l, r / 2 - 150 + u]
						}
						this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
						c.settings.onSelect = i;
						this._inDialog = true;
						this.dpDiv.addClass(this._dialogClass);
						this._showDatepicker(this._dialogInput[0]);
						if (te.blockUI) te.blockUI(this.dpDiv);
						te.data(this._dialogInput[0], "datepicker", c);
						return this
					},
					_destroyDatepicker: function(e) {
						var t, i = te(e),
							n = te.data(e, "datepicker");
						if (!i.hasClass(this.markerClassName)) return;
						t = e.nodeName.toLowerCase();
						te.removeData(e, "datepicker");
						if (t === "input") {
							n.append.remove();
							n.trigger.remove();
							i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)
						} else if (t === "div" || t === "span") i.removeClass(this.markerClassName).empty();
						if (P === n) {
							P = null;
							this._curInst = null
						}
					},
					_enableDatepicker: function(t) {
						var e, i, n = te(t),
							s = te.data(t, "datepicker");
						if (!n.hasClass(this.markerClassName)) return;
						e = t.nodeName.toLowerCase();
						if (e === "input") {
							t.disabled = false;
							s.trigger.filter("button").each(function() {
								this.disabled = false
							}).end().filter("img").css({
								opacity: "1.0",
								cursor: ""
							})
						} else if (e === "div" || e === "span") {
							i = n.children("." + this._inlineClass);
							i.children().removeClass("ui-state-disabled");
							i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
						}
						this._disabledInputs = te.map(this._disabledInputs, function(e) {
							return e === t ? null : e
						})
					},
					_disableDatepicker: function(t) {
						var e, i, n = te(t),
							s = te.data(t, "datepicker");
						if (!n.hasClass(this.markerClassName)) return;
						e = t.nodeName.toLowerCase();
						if (e === "input") {
							t.disabled = true;
							s.trigger.filter("button").each(function() {
								this.disabled = true
							}).end().filter("img").css({
								opacity: "0.5",
								cursor: "default"
							})
						} else if (e === "div" || e === "span") {
							i = n.children("." + this._inlineClass);
							i.children().addClass("ui-state-disabled");
							i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
						}
						this._disabledInputs = te.map(this._disabledInputs, function(e) {
							return e === t ? null : e
						});
						this._disabledInputs[this._disabledInputs.length] = t
					},
					_isDisabledDatepicker: function(e) {
						if (!e) return false;
						for (var t = 0; t < this._disabledInputs.length; t++)
							if (this._disabledInputs[t] === e) return true;
						return false
					},
					_getInst: function(e) {
						try {
							return te.data(e, "datepicker")
						} catch (e) {
							throw "Missing instance data for this datepicker"
						}
					},
					_optionDatepicker: function(e, t, i) {
						var n, s, a, o, r = this._getInst(e);
						if (arguments.length === 2 && typeof t === "string") return t === "defaults" ? te.extend({}, te.datepicker._defaults) : r ? t === "all" ? te.extend({}, r.settings) : this._get(r, t) : null;
						n = t || {};
						if (typeof t === "string") {
							n = {};
							n[t] = i
						}
						if (r) {
							if (this._curInst === r) this._hideDatepicker();
							s = this._getDateDatepicker(e, true);
							a = this._getMinMaxDate(r, "min");
							o = this._getMinMaxDate(r, "max");
							$(r.settings, n);
							if (a !== null && n.dateFormat !== undefined && n.minDate === undefined) r.settings.minDate = this._formatDate(r, a);
							if (o !== null && n.dateFormat !== undefined && n.maxDate === undefined) r.settings.maxDate = this._formatDate(r, o);
							if ("disabled" in n)
								if (n.disabled) this._disableDatepicker(e);
								else this._enableDatepicker(e);
							this._attachments(te(e), r);
							this._autoSize(r);
							this._setDate(r, s);
							this._updateAlternate(r);
							this._updateDatepicker(r)
						}
					},
					_changeDatepicker: function(e, t, i) {
						this._optionDatepicker(e, t, i)
					},
					_refreshDatepicker: function(e) {
						var t = this._getInst(e);
						if (t) this._updateDatepicker(t)
					},
					_setDateDatepicker: function(e, t) {
						var i = this._getInst(e);
						if (i) {
							this._setDate(i, t);
							this._updateDatepicker(i);
							this._updateAlternate(i)
						}
					},
					_getDateDatepicker: function(e, t) {
						var i = this._getInst(e);
						if (i && !i.inline) this._setDateFromField(i, t);
						return i ? this._getDate(i) : null
					},
					_doKeyDown: function(e) {
						var t, i, n, s = te.datepicker._getInst(e.target),
							a = true,
							o = s.dpDiv.is(".ui-datepicker-rtl");
						s._keyEvent = true;
						if (te.datepicker._datepickerShowing) switch (e.keyCode) {
								case 9:
									te.datepicker._hideDatepicker();
									a = false;
									break;
								case 13:
									n = te("td." + te.datepicker._dayOverClass + ":not(." + te.datepicker._currentClass + ")", s.dpDiv);
									if (n[0]) te.datepicker._selectDay(e.target, s.selectedMonth, s.selectedYear, n[0]);
									t = te.datepicker._get(s, "onSelect");
									if (t) {
										i = te.datepicker._formatDate(s);
										t.apply(s.input ? s.input[0] : null, [i, s])
									} else te.datepicker._hideDatepicker();
									return false;
								case 27:
									te.datepicker._hideDatepicker();
									break;
								case 33:
									te.datepicker._adjustDate(e.target, e.ctrlKey ? -te.datepicker._get(s, "stepBigMonths") : -te.datepicker._get(s, "stepMonths"), "M");
									break;
								case 34:
									te.datepicker._adjustDate(e.target, e.ctrlKey ? +te.datepicker._get(s, "stepBigMonths") : +te.datepicker._get(s, "stepMonths"), "M");
									break;
								case 35:
									if (e.ctrlKey || e.metaKey) te.datepicker._clearDate(e.target);
									a = e.ctrlKey || e.metaKey;
									break;
								case 36:
									if (e.ctrlKey || e.metaKey) te.datepicker._gotoToday(e.target);
									a = e.ctrlKey || e.metaKey;
									break;
								case 37:
									if (e.ctrlKey || e.metaKey) te.datepicker._adjustDate(e.target, o ? +1 : -1, "D");
									a = e.ctrlKey || e.metaKey;
									if (e.originalEvent.altKey) te.datepicker._adjustDate(e.target, e.ctrlKey ? -te.datepicker._get(s, "stepBigMonths") : -te.datepicker._get(s, "stepMonths"), "M");
									break;
								case 38:
									if (e.ctrlKey || e.metaKey) te.datepicker._adjustDate(e.target, -7, "D");
									a = e.ctrlKey || e.metaKey;
									break;
								case 39:
									if (e.ctrlKey || e.metaKey) te.datepicker._adjustDate(e.target, o ? -1 : +1, "D");
									a = e.ctrlKey || e.metaKey;
									if (e.originalEvent.altKey) te.datepicker._adjustDate(e.target, e.ctrlKey ? +te.datepicker._get(s, "stepBigMonths") : +te.datepicker._get(s, "stepMonths"), "M");
									break;
								case 40:
									if (e.ctrlKey || e.metaKey) te.datepicker._adjustDate(e.target, +7, "D");
									a = e.ctrlKey || e.metaKey;
									break;
								default:
									a = false
							} else if (e.keyCode === 36 && e.ctrlKey) te.datepicker._showDatepicker(this);
							else a = false;
						if (a) {
							e.preventDefault();
							e.stopPropagation()
						}
					},
					_doKeyPress: function(e) {
						var t, i, n = te.datepicker._getInst(e.target);
						if (te.datepicker._get(n, "constrainInput")) {
							t = te.datepicker._possibleChars(te.datepicker._get(n, "dateFormat"));
							i = String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode);
							return e.ctrlKey || e.metaKey || (i < " " || !t || t.indexOf(i) > -1)
						}
					},
					_doKeyUp: function(e) {
						var t, i = te.datepicker._getInst(e.target);
						if (i.input.val() !== i.lastVal) try {
							t = te.datepicker.parseDate(te.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, te.datepicker._getFormatConfig(i));
							if (t) {
								te.datepicker._setDateFromField(i);
								te.datepicker._updateAlternate(i);
								te.datepicker._updateDatepicker(i)
							}
						} catch (e) {}
						return true
					},
					_showDatepicker: function(e) {
						e = e.target || e;
						if (e.nodeName.toLowerCase() !== "input") e = te("input", e.parentNode)[0];
						if (te.datepicker._isDisabledDatepicker(e) || te.datepicker._lastInput === e) return;
						var t, i, n, s, a, o, r;
						t = te.datepicker._getInst(e);
						if (te.datepicker._curInst && te.datepicker._curInst !== t) {
							te.datepicker._curInst.dpDiv.stop(true, true);
							if (t && te.datepicker._datepickerShowing) te.datepicker._hideDatepicker(te.datepicker._curInst.input[0])
						}
						i = te.datepicker._get(t, "beforeShow");
						n = i ? i.apply(e, [e, t]) : {};
						if (n === false) return;
						$(t.settings, n);
						t.lastVal = null;
						te.datepicker._lastInput = e;
						te.datepicker._setDateFromField(t);
						if (te.datepicker._inDialog) e.value = "";
						if (!te.datepicker._pos) {
							te.datepicker._pos = te.datepicker._findPos(e);
							te.datepicker._pos[1] += e.offsetHeight
						}
						s = false;
						te(e).parents().each(function() {
							s |= te(this).css("position") === "fixed";
							return !s
						});
						a = {
							left: te.datepicker._pos[0],
							top: te.datepicker._pos[1]
						};
						te.datepicker._pos = null;
						t.dpDiv.empty();
						t.dpDiv.css({
							position: "absolute",
							display: "block",
							top: "-1000px"
						});
						te.datepicker._updateDatepicker(t);
						a = te.datepicker._checkOffset(t, a, s);
						t.dpDiv.css({
							position: te.datepicker._inDialog && te.blockUI ? "static" : s ? "fixed" : "absolute",
							display: "none",
							left: a.left + "px",
							top: a.top + "px"
						});
						if (!t.inline) {
							o = te.datepicker._get(t, "showAnim");
							r = te.datepicker._get(t, "duration");
							t.dpDiv.css("z-index", He(te(e)) + 1);
							te.datepicker._datepickerShowing = true;
							if (te.effects && te.effects.effect[o]) t.dpDiv.show(o, te.datepicker._get(t, "showOptions"), r);
							else t.dpDiv[o || "show"](o ? r : null);
							if (te.datepicker._shouldFocusInput(t)) t.input.trigger("focus");
							te.datepicker._curInst = t
						}
					},
					_updateDatepicker: function(e) {
						this.maxRows = 4;
						P = e;
						e.dpDiv.empty().append(this._generateHTML(e));
						this._attachHandlers(e);
						var t, i = this._getNumberOfMonths(e),
							n = i[1],
							s = 17,
							a = e.dpDiv.find("." + this._dayOverClass + " a"),
							o = te.datepicker._get(e, "onUpdateDatepicker");
						if (a.length > 0) Re.apply(a.get(0));
						e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
						if (n > 1) e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", s * n + "em");
						e.dpDiv[(i[0] !== 1 || i[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
						e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
						if (e === te.datepicker._curInst && te.datepicker._datepickerShowing && te.datepicker._shouldFocusInput(e)) e.input.trigger("focus");
						if (e.yearshtml) {
							t = e.yearshtml;
							setTimeout(function() {
								if (t === e.yearshtml && e.yearshtml) e.dpDiv.find("select.ui-datepicker-year").first().replaceWith(e.yearshtml);
								t = e.yearshtml = null
							}, 0)
						}
						if (o) o.apply(e.input ? e.input[0] : null, [e])
					},
					_shouldFocusInput: function(e) {
						return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
					},
					_checkOffset: function(e, t, i) {
						var n = e.dpDiv.outerWidth(),
							s = e.dpDiv.outerHeight(),
							a = e.input ? e.input.outerWidth() : 0,
							o = e.input ? e.input.outerHeight() : 0,
							r = document.documentElement.clientWidth + (i ? 0 : te(document).scrollLeft()),
							l = document.documentElement.clientHeight + (i ? 0 : te(document).scrollTop());
						t.left -= this._get(e, "isRTL") ? n - a : 0;
						t.left -= i && t.left === e.input.offset().left ? te(document).scrollLeft() : 0;
						t.top -= i && t.top === e.input.offset().top + o ? te(document).scrollTop() : 0;
						t.left -= Math.min(t.left, t.left + n > r && r > n ? Math.abs(t.left + n - r) : 0);
						t.top -= Math.min(t.top, t.top + s > l && l > s ? Math.abs(s + o) : 0);
						return t
					},
					_findPos: function(e) {
						var t, i = this._getInst(e),
							n = this._get(i, "isRTL");
						while (e && (e.type === "hidden" || e.nodeType !== 1 || te.expr.pseudos.hidden(e))) e = e[n ? "previousSibling" : "nextSibling"];
						t = te(e).offset();
						return [t.left, t.top]
					},
					_hideDatepicker: function(e) {
						var t, i, n, s, a = this._curInst;
						if (!a || e && a !== te.data(e, "datepicker")) return;
						if (this._datepickerShowing) {
							t = this._get(a, "showAnim");
							i = this._get(a, "duration");
							n = function() {
								te.datepicker._tidyDialog(a)
							};
							if (te.effects && (te.effects.effect[t] || te.effects[t])) a.dpDiv.hide(t, te.datepicker._get(a, "showOptions"), i, n);
							else a.dpDiv[t === "slideDown" ? "slideUp" : t === "fadeIn" ? "fadeOut" : "hide"](t ? i : null, n);
							if (!t) n();
							this._datepickerShowing = false;
							s = this._get(a, "onClose");
							if (s) s.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]);
							this._lastInput = null;
							if (this._inDialog) {
								this._dialogInput.css({
									position: "absolute",
									left: "0",
									top: "-100px"
								});
								if (te.blockUI) {
									te.unblockUI();
									te("body").append(this.dpDiv)
								}
							}
							this._inDialog = false
						}
					},
					_tidyDialog: function(e) {
						e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
					},
					_checkExternalClick: function(e) {
						if (!te.datepicker._curInst) return;
						var t = te(e.target),
							i = te.datepicker._getInst(t[0]);
						if (t[0].id !== te.datepicker._mainDivId && t.parents("#" + te.datepicker._mainDivId).length === 0 && !t.hasClass(te.datepicker.markerClassName) && !t.closest("." + te.datepicker._triggerClass).length && te.datepicker._datepickerShowing && !(te.datepicker._inDialog && te.blockUI) || t.hasClass(te.datepicker.markerClassName) && te.datepicker._curInst !== i) te.datepicker._hideDatepicker()
					},
					_adjustDate: function(e, t, i) {
						var n = te(e),
							s = this._getInst(n[0]);
						if (this._isDisabledDatepicker(n[0])) return;
						this._adjustInstDate(s, t, i);
						this._updateDatepicker(s)
					},
					_gotoToday: function(e) {
						var t, i = te(e),
							n = this._getInst(i[0]);
						if (this._get(n, "gotoCurrent") && n.currentDay) {
							n.selectedDay = n.currentDay;
							n.drawMonth = n.selectedMonth = n.currentMonth;
							n.drawYear = n.selectedYear = n.currentYear
						} else {
							t = new Date;
							n.selectedDay = t.getDate();
							n.drawMonth = n.selectedMonth = t.getMonth();
							n.drawYear = n.selectedYear = t.getFullYear()
						}
						this._notifyChange(n);
						this._adjustDate(i)
					},
					_selectMonthYear: function(e, t, i) {
						var n = te(e),
							s = this._getInst(n[0]);
						s["selected" + (i === "M" ? "Month" : "Year")] = s["draw" + (i === "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10);
						this._notifyChange(s);
						this._adjustDate(n)
					},
					_selectDay: function(e, t, i, n) {
						var s, a = te(e);
						if (te(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0])) return;
						s = this._getInst(a[0]);
						s.selectedDay = s.currentDay = parseInt(te("a", n).attr("data-date"));
						s.selectedMonth = s.currentMonth = t;
						s.selectedYear = s.currentYear = i;
						this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
					},
					_clearDate: function(e) {
						var t = te(e);
						this._selectDate(t, "")
					},
					_selectDate: function(e, t) {
						var i, n = te(e),
							s = this._getInst(n[0]);
						t = t != null ? t : this._formatDate(s);
						if (s.input) s.input.val(t);
						this._updateAlternate(s);
						i = this._get(s, "onSelect");
						if (i) i.apply(s.input ? s.input[0] : null, [t, s]);
						else if (s.input) s.input.trigger("change");
						if (s.inline) this._updateDatepicker(s);
						else {
							this._hideDatepicker();
							this._lastInput = s.input[0];
							if (typeof s.input[0] !== "object") s.input.trigger("focus");
							this._lastInput = null
						}
					},
					_updateAlternate: function(e) {
						var t, i, n, s = this._get(e, "altField");
						if (s) {
							t = this._get(e, "altFormat") || this._get(e, "dateFormat");
							i = this._getDate(e);
							n = this.formatDate(t, i, this._getFormatConfig(e));
							te(document).find(s).val(n)
						}
					},
					noWeekends: function(e) {
						var t = e.getDay();
						return [t > 0 && t < 6, ""]
					},
					iso8601Week: function(e) {
						var t, i = new Date(e.getTime());
						i.setDate(i.getDate() + 4 - (i.getDay() || 7));
						t = i.getTime();
						i.setMonth(0);
						i.setDate(1);
						return Math.floor(Math.round((t - i) / 864e5) / 7) + 1
					},
					parseDate: function(i, o, e) {
						if (i == null || o == null) throw "Invalid arguments";
						o = typeof o === "object" ? o.toString() : o + "";
						if (o === "") return null;
						var n, t, s, r = 0,
							a = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
							l = typeof a !== "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
							u = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
							c = (e ? e.dayNames : null) || this._defaults.dayNames,
							h = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
							d = (e ? e.monthNames : null) || this._defaults.monthNames,
							f = -1,
							p = -1,
							m = -1,
							g = -1,
							v = false,
							b, y = function(e) {
								var t = n + 1 < i.length && i.charAt(n + 1) === e;
								if (t) n++;
								return t
							},
							_ = function(e) {
								var t = y(e),
									i = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2,
									n = e === "y" ? i : 1,
									s = new RegExp("^\\d{" + n + "," + i + "}"),
									a = o.substring(r).match(s);
								if (!a) throw "Missing number at position " + r;
								r += a[0].length;
								return parseInt(a[0], 10)
							},
							x = function(e, t, i) {
								var n = -1,
									s = te.map(y(e) ? i : t, function(e, t) {
										return [
											[t, e]
										]
									}).sort(function(e, t) {
										return -(e[1].length - t[1].length)
									});
								te.each(s, function(e, t) {
									var i = t[1];
									if (o.substr(r, i.length).toLowerCase() === i.toLowerCase()) {
										n = t[0];
										r += i.length;
										return false
									}
								});
								if (n !== -1) return n + 1;
								else throw "Unknown name at position " + r
							},
							w = function() {
								if (o.charAt(r) !== i.charAt(n)) throw "Unexpected literal at position " + r;
								r++
							};
						for (n = 0; n < i.length; n++)
							if (v)
								if (i.charAt(n) === "'" && !y("'")) v = false;
								else w();
						else switch (i.charAt(n)) {
							case "d":
								m = _("d");
								break;
							case "D":
								x("D", u, c);
								break;
							case "o":
								g = _("o");
								break;
							case "m":
								p = _("m");
								break;
							case "M":
								p = x("M", h, d);
								break;
							case "y":
								f = _("y");
								break;
							case "@":
								b = new Date(_("@"));
								f = b.getFullYear();
								p = b.getMonth() + 1;
								m = b.getDate();
								break;
							case "!":
								b = new Date((_("!") - this._ticksTo1970) / 1e4);
								f = b.getFullYear();
								p = b.getMonth() + 1;
								m = b.getDate();
								break;
							case "'":
								if (y("'")) w();
								else v = true;
								break;
							default:
								w()
						}
						if (r < o.length) {
							s = o.substr(r);
							if (!/^\s+/.test(s)) throw "Extra/unparsed characters found in date: " + s
						}
						if (f === -1) f = (new Date).getFullYear();
						else if (f < 100) f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= l ? 0 : -100);
						if (g > -1) {
							p = 1;
							m = g;
							do {
								t = this._getDaysInMonth(f, p - 1);
								if (m <= t) break;
								p++;
								m -= t
							} while (true)
						}
						b = this._daylightSavingAdjust(new Date(f, p - 1, m));
						if (b.getFullYear() !== f || b.getMonth() + 1 !== p || b.getDate() !== m) throw "Invalid date";
						return b
					},
					ATOM: "yy-mm-dd",
					COOKIE: "D, dd M yy",
					ISO_8601: "yy-mm-dd",
					RFC_822: "D, d M y",
					RFC_850: "DD, dd-M-y",
					RFC_1036: "D, d M y",
					RFC_1123: "D, d M yy",
					RFC_2822: "D, d M yy",
					RSS: "D, d M y",
					TICKS: "!",
					TIMESTAMP: "@",
					W3C: "yy-mm-dd",
					_ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7,
					formatDate: function(i, e, t) {
						if (!e) return "";
						var n, s = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
							a = (t ? t.dayNames : null) || this._defaults.dayNames,
							o = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
							r = (t ? t.monthNames : null) || this._defaults.monthNames,
							l = function(e) {
								var t = n + 1 < i.length && i.charAt(n + 1) === e;
								if (t) n++;
								return t
							},
							u = function(e, t, i) {
								var n = "" + t;
								if (l(e))
									while (n.length < i) n = "0" + n;
								return n
							},
							c = function(e, t, i, n) {
								return l(e) ? n[t] : i[t]
							},
							h = "",
							d = false;
						if (e)
							for (n = 0; n < i.length; n++)
								if (d)
									if (i.charAt(n) === "'" && !l("'")) d = false;
									else h += i.charAt(n);
						else switch (i.charAt(n)) {
							case "d":
								h += u("d", e.getDate(), 2);
								break;
							case "D":
								h += c("D", e.getDay(), s, a);
								break;
							case "o":
								h += u("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
								break;
							case "m":
								h += u("m", e.getMonth() + 1, 2);
								break;
							case "M":
								h += c("M", e.getMonth(), o, r);
								break;
							case "y":
								h += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
								break;
							case "@":
								h += e.getTime();
								break;
							case "!":
								h += e.getTime() * 1e4 + this._ticksTo1970;
								break;
							case "'":
								if (l("'")) h += "'";
								else d = true;
								break;
							default:
								h += i.charAt(n)
						}
						return h
					},
					_possibleChars: function(i) {
						var n, e = "",
							t = false,
							s = function(e) {
								var t = n + 1 < i.length && i.charAt(n + 1) === e;
								if (t) n++;
								return t
							};
						for (n = 0; n < i.length; n++)
							if (t)
								if (i.charAt(n) === "'" && !s("'")) t = false;
								else e += i.charAt(n);
						else switch (i.charAt(n)) {
							case "d":
							case "m":
							case "y":
							case "@":
								e += "0123456789";
								break;
							case "D":
							case "M":
								return null;
							case "'":
								if (s("'")) e += "'";
								else t = true;
								break;
							default:
								e += i.charAt(n)
						}
						return e
					},
					_get: function(e, t) {
						return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
					},
					_setDateFromField: function(e, t) {
						if (e.input.val() === e.lastVal) return;
						var i = this._get(e, "dateFormat"),
							n = e.lastVal = e.input ? e.input.val() : null,
							s = this._getDefaultDate(e),
							a = s,
							o = this._getFormatConfig(e);
						try {
							a = this.parseDate(i, n, o) || s
						} catch (e) {
							n = t ? "" : n
						}
						e.selectedDay = a.getDate();
						e.drawMonth = e.selectedMonth = a.getMonth();
						e.drawYear = e.selectedYear = a.getFullYear();
						e.currentDay = n ? a.getDate() : 0;
						e.currentMonth = n ? a.getMonth() : 0;
						e.currentYear = n ? a.getFullYear() : 0;
						this._adjustInstDate(e)
					},
					_getDefaultDate: function(e) {
						return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
					},
					_determineDate: function(r, e, t) {
						var i = function(e) {
								var t = new Date;
								t.setDate(t.getDate() + e);
								return t
							},
							n = function(e) {
								try {
									return te.datepicker.parseDate(te.datepicker._get(r, "dateFormat"), e, te.datepicker._getFormatConfig(r))
								} catch (e) {}
								var t = (e.toLowerCase().match(/^c/) ? te.datepicker._getDate(r) : null) || new Date,
									i = t.getFullYear(),
									n = t.getMonth(),
									s = t.getDate(),
									a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
									o = a.exec(e);
								while (o) {
									switch (o[2] || "d") {
										case "d":
										case "D":
											s += parseInt(o[1], 10);
											break;
										case "w":
										case "W":
											s += parseInt(o[1], 10) * 7;
											break;
										case "m":
										case "M":
											n += parseInt(o[1], 10);
											s = Math.min(s, te.datepicker._getDaysInMonth(i, n));
											break;
										case "y":
										case "Y":
											i += parseInt(o[1], 10);
											s = Math.min(s, te.datepicker._getDaysInMonth(i, n));
											break
									}
									o = a.exec(e)
								}
								return new Date(i, n, s)
							},
							s = e == null || e === "" ? t : typeof e === "string" ? n(e) : typeof e === "number" ? isNaN(e) ? t : i(e) : new Date(e.getTime());
						s = s && s.toString() === "Invalid Date" ? t : s;
						if (s) {
							s.setHours(0);
							s.setMinutes(0);
							s.setSeconds(0);
							s.setMilliseconds(0)
						}
						return this._daylightSavingAdjust(s)
					},
					_daylightSavingAdjust: function(e) {
						if (!e) return null;
						e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0);
						return e
					},
					_setDate: function(e, t, i) {
						var n = !t,
							s = e.selectedMonth,
							a = e.selectedYear,
							o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
						e.selectedDay = e.currentDay = o.getDate();
						e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth();
						e.drawYear = e.selectedYear = e.currentYear = o.getFullYear();
						if ((s !== e.selectedMonth || a !== e.selectedYear) && !i) this._notifyChange(e);
						this._adjustInstDate(e);
						if (e.input) e.input.val(n ? "" : this._formatDate(e))
					},
					_getDate: function(e) {
						var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
						return t
					},
					_attachHandlers: function(e) {
						var t = this._get(e, "stepMonths"),
							i = "#" + e.id.replace(/\\\\/g, "\\");
						e.dpDiv.find("[data-handler]").map(function() {
							var e = {
								prev: function() {
									te.datepicker._adjustDate(i, -t, "M")
								},
								next: function() {
									te.datepicker._adjustDate(i, +t, "M")
								},
								hide: function() {
									te.datepicker._hideDatepicker()
								},
								today: function() {
									te.datepicker._gotoToday(i)
								},
								selectDay: function() {
									te.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
									return false
								},
								selectMonth: function() {
									te.datepicker._selectMonthYear(i, this, "M");
									return false
								},
								selectYear: function() {
									te.datepicker._selectMonthYear(i, this, "Y");
									return false
								}
							};
							te(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
						})
					},
					_generateHTML: function(e) {
						var t, i, n, s, a, o, r, l, u, c, h, H, L, N, R, d, f, j, p, m, g, v, b, y, _, x, w, D, Y, z, B, C, W, k, q, U, S, T, A, V = new Date,
							G = this._daylightSavingAdjust(new Date(V.getFullYear(), V.getMonth(), V.getDate())),
							E = this._get(e, "isRTL"),
							X = this._get(e, "showButtonPanel"),
							K = this._get(e, "hideIfNoPrevNext"),
							Z = this._get(e, "navigationAsDateFormat"),
							F = this._getNumberOfMonths(e),
							Q = this._get(e, "showCurrentAtPos"),
							J = this._get(e, "stepMonths"),
							ee = F[0] !== 1 || F[1] !== 1,
							P = this._daylightSavingAdjust(!e.currentDay ? new Date(9999, 9, 9) : new Date(e.currentYear, e.currentMonth, e.currentDay)),
							$ = this._getMinMaxDate(e, "min"),
							M = this._getMinMaxDate(e, "max"),
							I = e.drawMonth - Q,
							O = e.drawYear;
						if (I < 0) {
							I += 12;
							O--
						}
						if (M) {
							t = this._daylightSavingAdjust(new Date(M.getFullYear(), M.getMonth() - F[0] * F[1] + 1, M.getDate()));
							t = $ && t < $ ? $ : t;
							while (this._daylightSavingAdjust(new Date(O, I, 1)) > t) {
								I--;
								if (I < 0) {
									I = 11;
									O--
								}
							}
						}
						e.drawMonth = I;
						e.drawYear = O;
						i = this._get(e, "prevText");
						i = !Z ? i : this.formatDate(i, this._daylightSavingAdjust(new Date(O, I - J, 1)), this._getFormatConfig(e));
						if (this._canAdjustMonth(e, -1, O, I)) n = te("<a>").attr({
							class: "ui-datepicker-prev ui-corner-all",
							"data-handler": "prev",
							"data-event": "click",
							title: i
						}).append(te("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (E ? "e" : "w")).text(i))[0].outerHTML;
						else if (K) n = "";
						else n = te("<a>").attr({
							class: "ui-datepicker-prev ui-corner-all ui-state-disabled",
							title: i
						}).append(te("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (E ? "e" : "w")).text(i))[0].outerHTML;
						s = this._get(e, "nextText");
						s = !Z ? s : this.formatDate(s, this._daylightSavingAdjust(new Date(O, I + J, 1)), this._getFormatConfig(e));
						if (this._canAdjustMonth(e, +1, O, I)) a = te("<a>").attr({
							class: "ui-datepicker-next ui-corner-all",
							"data-handler": "next",
							"data-event": "click",
							title: s
						}).append(te("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (E ? "w" : "e")).text(s))[0].outerHTML;
						else if (K) a = "";
						else a = te("<a>").attr({
							class: "ui-datepicker-next ui-corner-all ui-state-disabled",
							title: s
						}).append(te("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (E ? "w" : "e")).text(s))[0].outerHTML;
						o = this._get(e, "currentText");
						r = this._get(e, "gotoCurrent") && e.currentDay ? P : G;
						o = !Z ? o : this.formatDate(o, r, this._getFormatConfig(e));
						l = "";
						if (!e.inline) l = te("<button>").attr({
							type: "button",
							class: "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
							"data-handler": "hide",
							"data-event": "click"
						}).text(this._get(e, "closeText"))[0].outerHTML;
						u = "";
						if (X) u = te("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(E ? l : "").append(this._isInRange(e, r) ? te("<button>").attr({
							type: "button",
							class: "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
							"data-handler": "today",
							"data-event": "click"
						}).text(o) : "").append(E ? "" : l)[0].outerHTML;
						c = parseInt(this._get(e, "firstDay"), 10);
						c = isNaN(c) ? 0 : c;
						h = this._get(e, "showWeek");
						H = this._get(e, "dayNames");
						L = this._get(e, "dayNamesMin");
						N = this._get(e, "monthNames");
						R = this._get(e, "monthNamesShort");
						d = this._get(e, "beforeShowDay");
						f = this._get(e, "showOtherMonths");
						j = this._get(e, "selectOtherMonths");
						p = this._getDefaultDate(e);
						m = "";
						for (v = 0; v < F[0]; v++) {
							b = "";
							this.maxRows = 4;
							for (y = 0; y < F[1]; y++) {
								_ = this._daylightSavingAdjust(new Date(O, I, e.selectedDay));
								x = " ui-corner-all";
								w = "";
								if (ee) {
									w += "<div class='ui-datepicker-group";
									if (F[1] > 1) switch (y) {
										case 0:
											w += " ui-datepicker-group-first";
											x = " ui-corner-" + (E ? "right" : "left");
											break;
										case F[1] - 1:
											w += " ui-datepicker-group-last";
											x = " ui-corner-" + (E ? "left" : "right");
											break;
										default:
											w += " ui-datepicker-group-middle";
											x = "";
											break
									}
									w += "'>"
								}
								w += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && v === 0 ? E ? a : n : "") + (/all|right/.test(x) && v === 0 ? E ? n : a : "") + this._generateMonthYearHeader(e, I, O, $, M, v > 0 || y > 0, N, R) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>";
								D = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
								for (g = 0; g < 7; g++) {
									Y = (g + c) % 7;
									D += "<th scope='col'" + ((g + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + H[Y] + "'>" + L[Y] + "</span></th>"
								}
								w += D + "</tr></thead><tbody>";
								z = this._getDaysInMonth(O, I);
								if (O === e.selectedYear && I === e.selectedMonth) e.selectedDay = Math.min(e.selectedDay, z);
								B = (this._getFirstDayOfMonth(O, I) - c + 7) % 7;
								C = Math.ceil((B + z) / 7);
								W = ee ? this.maxRows > C ? this.maxRows : C : C;
								this.maxRows = W;
								k = this._daylightSavingAdjust(new Date(O, I, 1 - B));
								for (q = 0; q < W; q++) {
									w += "<tr>";
									U = !h ? "" : "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(k) + "</td>";
									for (g = 0; g < 7; g++) {
										S = d ? d.apply(e.input ? e.input[0] : null, [k]) : [true, ""];
										T = k.getMonth() !== I;
										A = T && !j || !S[0] || $ && k < $ || M && k > M;
										U += "<td class='" + ((g + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (T ? " ui-datepicker-other-month" : "") + (k.getTime() === _.getTime() && I === e.selectedMonth && e._keyEvent || p.getTime() === k.getTime() && p.getTime() === _.getTime() ? " " + this._dayOverClass : "") + (A ? " " + this._unselectableClass + " ui-state-disabled" : "") + (T && !f ? "" : " " + S[1] + (k.getTime() === P.getTime() ? " " + this._currentClass : "") + (k.getTime() === G.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!T || f) && S[2] ? " title='" + S[2].replace(/'/g, "&#39;") + "'" : "") + (A ? "" : " data-handler='selectDay' data-event='click' data-month='" + k.getMonth() + "' data-year='" + k.getFullYear() + "'") + ">" + (T && !f ? "&#xa0;" : A ? "<span class='ui-state-default'>" + k.getDate() + "</span>" : "<a class='ui-state-default" + (k.getTime() === G.getTime() ? " ui-state-highlight" : "") + (k.getTime() === P.getTime() ? " ui-state-active" : "") + (T ? " ui-priority-secondary" : "") + "' href='#' aria-current='" + (k.getTime() === P.getTime() ? "true" : "false") + "' data-date='" + k.getDate() + "'>" + k.getDate() + "</a>") + "</td>";
										k.setDate(k.getDate() + 1);
										k = this._daylightSavingAdjust(k)
									}
									w += U + "</tr>"
								}
								I++;
								if (I > 11) {
									I = 0;
									O++
								}
								w += "</tbody></table>" + (ee ? "</div>" + (F[0] > 0 && y === F[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
								b += w
							}
							m += b
						}
						m += u;
						e._keyEvent = false;
						return m
					},
					_generateMonthYearHeader: function(e, t, i, n, s, a, o, r) {
						var l, u, c, h, d, f, p, m, g = this._get(e, "changeMonth"),
							v = this._get(e, "changeYear"),
							b = this._get(e, "showMonthAfterYear"),
							y = this._get(e, "selectMonthLabel"),
							_ = this._get(e, "selectYearLabel"),
							x = "<div class='ui-datepicker-title'>",
							w = "";
						if (a || !g) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
						else {
							l = n && n.getFullYear() === i;
							u = s && s.getFullYear() === i;
							w += "<select class='ui-datepicker-month' aria-label='" + y + "' data-handler='selectMonth' data-event='change'>";
							for (c = 0; c < 12; c++)
								if ((!l || c >= n.getMonth()) && (!u || c <= s.getMonth())) w += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + r[c] + "</option>";
							w += "</select>"
						}
						if (!b) x += w + (a || !(g && v) ? "&#xa0;" : "");
						if (!e.yearshtml) {
							e.yearshtml = "";
							if (a || !v) x += "<span class='ui-datepicker-year'>" + i + "</span>";
							else {
								h = this._get(e, "yearRange").split(":");
								d = (new Date).getFullYear();
								f = function(e) {
									var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
									return isNaN(t) ? d : t
								};
								p = f(h[0]);
								m = Math.max(p, f(h[1] || ""));
								p = n ? Math.max(p, n.getFullYear()) : p;
								m = s ? Math.min(m, s.getFullYear()) : m;
								e.yearshtml += "<select class='ui-datepicker-year' aria-label='" + _ + "' data-handler='selectYear' data-event='change'>";
								for (; p <= m; p++) e.yearshtml += "<option value='" + p + "'" + (p === i ? " selected='selected'" : "") + ">" + p + "</option>";
								e.yearshtml += "</select>";
								x += e.yearshtml;
								e.yearshtml = null
							}
						}
						x += this._get(e, "yearSuffix");
						if (b) x += (a || !(g && v) ? "&#xa0;" : "") + w;
						x += "</div>";
						return x
					},
					_adjustInstDate: function(e, t, i) {
						var n = e.selectedYear + (i === "Y" ? t : 0),
							s = e.selectedMonth + (i === "M" ? t : 0),
							a = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + (i === "D" ? t : 0),
							o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, a)));
						e.selectedDay = o.getDate();
						e.drawMonth = e.selectedMonth = o.getMonth();
						e.drawYear = e.selectedYear = o.getFullYear();
						if (i === "M" || i === "Y") this._notifyChange(e)
					},
					_restrictMinMax: function(e, t) {
						var i = this._getMinMaxDate(e, "min"),
							n = this._getMinMaxDate(e, "max"),
							s = i && t < i ? i : t;
						return n && s > n ? n : s
					},
					_notifyChange: function(e) {
						var t = this._get(e, "onChangeMonthYear");
						if (t) t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
					},
					_getNumberOfMonths: function(e) {
						var t = this._get(e, "numberOfMonths");
						return t == null ? [1, 1] : typeof t === "number" ? [1, t] : t
					},
					_getMinMaxDate: function(e, t) {
						return this._determineDate(e, this._get(e, t + "Date"), null)
					},
					_getDaysInMonth: function(e, t) {
						return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
					},
					_getFirstDayOfMonth: function(e, t) {
						return new Date(e, t, 1).getDay()
					},
					_canAdjustMonth: function(e, t, i, n) {
						var s = this._getNumberOfMonths(e),
							a = this._daylightSavingAdjust(new Date(i, n + (t < 0 ? t : s[0] * s[1]), 1));
						if (t < 0) a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth()));
						return this._isInRange(e, a)
					},
					_isInRange: function(e, t) {
						var i, n, s = this._getMinMaxDate(e, "min"),
							a = this._getMinMaxDate(e, "max"),
							o = null,
							r = null,
							l = this._get(e, "yearRange");
						if (l) {
							i = l.split(":");
							n = (new Date).getFullYear();
							o = parseInt(i[0], 10);
							r = parseInt(i[1], 10);
							if (i[0].match(/[+\-].*/)) o += n;
							if (i[1].match(/[+\-].*/)) r += n
						}
						return (!s || t.getTime() >= s.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || t.getFullYear() <= r)
					},
					_getFormatConfig: function(e) {
						var t = this._get(e, "shortYearCutoff");
						t = typeof t !== "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10);
						return {
							shortYearCutoff: t,
							dayNamesShort: this._get(e, "dayNamesShort"),
							dayNames: this._get(e, "dayNames"),
							monthNamesShort: this._get(e, "monthNamesShort"),
							monthNames: this._get(e, "monthNames")
						}
					},
					_formatDate: function(e, t, i, n) {
						if (!t) {
							e.currentDay = e.selectedDay;
							e.currentMonth = e.selectedMonth;
							e.currentYear = e.selectedYear
						}
						var s = t ? typeof t === "object" ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
						return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
					}
				}), te.fn.datepicker = function(e) {
					if (!this.length) return this;
					if (!te.datepicker.initialized) {
						te(document).on("mousedown", te.datepicker._checkExternalClick);
						te.datepicker.initialized = true
					}
					if (te("#" + te.datepicker._mainDivId).length === 0) te("body").append(te.datepicker.dpDiv);
					var t = Array.prototype.slice.call(arguments, 1);
					if (typeof e === "string" && (e === "isDisabled" || e === "getDate" || e === "widget")) return te.datepicker["_" + e + "Datepicker"].apply(te.datepicker, [this[0]].concat(t));
					if (e === "option" && arguments.length === 2 && typeof arguments[1] === "string") return te.datepicker["_" + e + "Datepicker"].apply(te.datepicker, [this[0]].concat(t));
					return this.each(function() {
						if (typeof e === "string") te.datepicker["_" + e + "Datepicker"].apply(te.datepicker, [this].concat(t));
						else te.datepicker._attachDatepicker(this, e)
					})
				}, te.datepicker = new Le, te.datepicker.initialized = false, te.datepicker.uuid = (new Date).getTime(), te.datepicker.version = "1.13.2";
				var je = te.datepicker,
					Ye = te.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
					M = false,
					ze = (te(document).on("mouseup", function() {
						M = false
					}), te.widget("ui.mouse", {
						version: "1.13.2",
						options: {
							cancel: "input, textarea, button, select, option",
							distance: 1,
							delay: 0
						},
						_mouseInit: function() {
							var t = this;
							this.element.on("mousedown." + this.widgetName, function(e) {
								return t._mouseDown(e)
							}).on("click." + this.widgetName, function(e) {
								if (true === te.data(e.target, t.widgetName + ".preventClickEvent")) {
									te.removeData(e.target, t.widgetName + ".preventClickEvent");
									e.stopImmediatePropagation();
									return false
								}
							});
							this.started = false
						},
						_mouseDestroy: function() {
							this.element.off("." + this.widgetName);
							if (this._mouseMoveDelegate) this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
						},
						_mouseDown: function(e) {
							if (M) return;
							this._mouseMoved = false;
							if (this._mouseStarted) this._mouseUp(e);
							this._mouseDownEvent = e;
							var t = this,
								i = e.which === 1,
								n = typeof this.options.cancel === "string" && e.target.nodeName ? te(e.target).closest(this.options.cancel).length : false;
							if (!i || n || !this._mouseCapture(e)) return true;
							this.mouseDelayMet = !this.options.delay;
							if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function() {
								t.mouseDelayMet = true
							}, this.options.delay);
							if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
								this._mouseStarted = this._mouseStart(e) !== false;
								if (!this._mouseStarted) {
									e.preventDefault();
									return true
								}
							}
							if (true === te.data(e.target, this.widgetName + ".preventClickEvent")) te.removeData(e.target, this.widgetName + ".preventClickEvent");
							this._mouseMoveDelegate = function(e) {
								return t._mouseMove(e)
							};
							this._mouseUpDelegate = function(e) {
								return t._mouseUp(e)
							};
							this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
							e.preventDefault();
							M = true;
							return true
						},
						_mouseMove: function(e) {
							if (this._mouseMoved)
								if (te.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
								else if (!e.which)
								if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = true;
								else if (!this.ignoreMissingWhich) return this._mouseUp(e);
							if (e.which || e.button) this._mouseMoved = true;
							if (this._mouseStarted) {
								this._mouseDrag(e);
								return e.preventDefault()
							}
							if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
								this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== false;
								if (this._mouseStarted) this._mouseDrag(e);
								else this._mouseUp(e)
							}
							return !this._mouseStarted
						},
						_mouseUp: function(e) {
							this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
							if (this._mouseStarted) {
								this._mouseStarted = false;
								if (e.target === this._mouseDownEvent.target) te.data(e.target, this.widgetName + ".preventClickEvent", true);
								this._mouseStop(e)
							}
							if (this._mouseDelayTimer) {
								clearTimeout(this._mouseDelayTimer);
								delete this._mouseDelayTimer
							}
							this.ignoreMissingWhich = false;
							M = false;
							e.preventDefault()
						},
						_mouseDistanceMet: function(e) {
							return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
						},
						_mouseDelayMet: function() {
							return this.mouseDelayMet
						},
						_mouseStart: function() {},
						_mouseDrag: function() {},
						_mouseStop: function() {},
						_mouseCapture: function() {
							return true
						}
					})),
					Be = te.ui.plugin = {
						add: function(e, t, i) {
							var n, s = te.ui[e].prototype;
							for (n in i) {
								s.plugins[n] = s.plugins[n] || [];
								s.plugins[n].push([t, i[n]])
							}
						},
						call: function(e, t, i, n) {
							var s, a = e.plugins[t];
							if (!a) return;
							if (!n && (!e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)) return;
							for (s = 0; s < a.length; s++)
								if (e.options[a[s][0]]) a[s][1].apply(e.element, i)
						}
					},
					We = te.ui.safeBlur = function(e) {
						if (e && e.nodeName.toLowerCase() !== "body") te(e).trigger("blur")
					},
					qe = (te.widget("ui.draggable", te.ui.mouse, {
						version: "1.13.2",
						widgetEventPrefix: "drag",
						options: {
							addClasses: true,
							appendTo: "parent",
							axis: false,
							connectToSortable: false,
							containment: false,
							cursor: "auto",
							cursorAt: false,
							grid: false,
							handle: false,
							helper: "original",
							iframeFix: false,
							opacity: false,
							refreshPositions: false,
							revert: false,
							revertDuration: 500,
							scope: "default",
							scroll: true,
							scrollSensitivity: 20,
							scrollSpeed: 20,
							snap: false,
							snapMode: "both",
							snapTolerance: 20,
							stack: false,
							zIndex: false,
							drag: null,
							start: null,
							stop: null
						},
						_create: function() {
							if (this.options.helper === "original") this._setPositionRelative();
							if (this.options.addClasses) this._addClass("ui-draggable");
							this._setHandleClassName();
							this._mouseInit()
						},
						_setOption: function(e, t) {
							this._super(e, t);
							if (e === "handle") {
								this._removeHandleClassName();
								this._setHandleClassName()
							}
						},
						_destroy: function() {
							if ((this.helper || this.element).is(".ui-draggable-dragging")) {
								this.destroyOnClear = true;
								return
							}
							this._removeHandleClassName();
							this._mouseDestroy()
						},
						_mouseCapture: function(e) {
							var t = this.options;
							if (this.helper || t.disabled || te(e.target).closest(".ui-resizable-handle").length > 0) return false;
							this.handle = this._getHandle(e);
							if (!this.handle) return false;
							this._blurActiveElement(e);
							this._blockFrames(t.iframeFix === true ? "iframe" : t.iframeFix);
							return true
						},
						_blockFrames: function(e) {
							this.iframeBlocks = this.document.find(e).map(function() {
								var e = te(this);
								return te("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
							})
						},
						_unblockFrames: function() {
							if (this.iframeBlocks) {
								this.iframeBlocks.remove();
								delete this.iframeBlocks
							}
						},
						_blurActiveElement: function(e) {
							var t = te.ui.safeActiveElement(this.document[0]),
								i = te(e.target);
							if (i.closest(t).length) return;
							te.ui.safeBlur(t)
						},
						_mouseStart: function(e) {
							var t = this.options;
							this.helper = this._createHelper(e);
							this._addClass(this.helper, "ui-draggable-dragging");
							this._cacheHelperProportions();
							if (te.ui.ddmanager) te.ui.ddmanager.current = this;
							this._cacheMargins();
							this.cssPosition = this.helper.css("position");
							this.scrollParent = this.helper.scrollParent(true);
							this.offsetParent = this.helper.offsetParent();
							this.hasFixedAncestor = this.helper.parents().filter(function() {
								return te(this).css("position") === "fixed"
							}).length > 0;
							this.positionAbs = this.element.offset();
							this._refreshOffsets(e);
							this.originalPosition = this.position = this._generatePosition(e, false);
							this.originalPageX = e.pageX;
							this.originalPageY = e.pageY;
							if (t.cursorAt) this._adjustOffsetFromHelper(t.cursorAt);
							this._setContainment();
							if (this._trigger("start", e) === false) {
								this._clear();
								return false
							}
							this._cacheHelperProportions();
							if (te.ui.ddmanager && !t.dropBehaviour) te.ui.ddmanager.prepareOffsets(this, e);
							this._mouseDrag(e, true);
							if (te.ui.ddmanager) te.ui.ddmanager.dragStart(this, e);
							return true
						},
						_refreshOffsets: function(e) {
							this.offset = {
								top: this.positionAbs.top - this.margins.top,
								left: this.positionAbs.left - this.margins.left,
								scroll: false,
								parent: this._getParentOffset(),
								relative: this._getRelativeOffset()
							};
							this.offset.click = {
								left: e.pageX - this.offset.left,
								top: e.pageY - this.offset.top
							}
						},
						_mouseDrag: function(e, t) {
							if (this.hasFixedAncestor) this.offset.parent = this._getParentOffset();
							this.position = this._generatePosition(e, true);
							this.positionAbs = this._convertPositionTo("absolute");
							if (!t) {
								var i = this._uiHash();
								if (this._trigger("drag", e, i) === false) {
									this._mouseUp(new te.Event("mouseup", e));
									return false
								}
								this.position = i.position
							}
							this.helper[0].style.left = this.position.left + "px";
							this.helper[0].style.top = this.position.top + "px";
							if (te.ui.ddmanager) te.ui.ddmanager.drag(this, e);
							return false
						},
						_mouseStop: function(e) {
							var t = this,
								i = false;
							if (te.ui.ddmanager && !this.options.dropBehaviour) i = te.ui.ddmanager.drop(this, e);
							if (this.dropped) {
								i = this.dropped;
								this.dropped = false
							}
							if (this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === true || typeof this.options.revert === "function" && this.options.revert.call(this.element, i)) te(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
								if (t._trigger("stop", e) !== false) t._clear()
							});
							else if (this._trigger("stop", e) !== false) this._clear();
							return false
						},
						_mouseUp: function(e) {
							this._unblockFrames();
							if (te.ui.ddmanager) te.ui.ddmanager.dragStop(this, e);
							if (this.handleElement.is(e.target)) this.element.trigger("focus");
							return te.ui.mouse.prototype._mouseUp.call(this, e)
						},
						cancel: function() {
							if (this.helper.is(".ui-draggable-dragging")) this._mouseUp(new te.Event("mouseup", {
								target: this.element[0]
							}));
							else this._clear();
							return this
						},
						_getHandle: function(e) {
							return this.options.handle ? !!te(e.target).closest(this.element.find(this.options.handle)).length : true
						},
						_setHandleClassName: function() {
							this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
							this._addClass(this.handleElement, "ui-draggable-handle")
						},
						_removeHandleClassName: function() {
							this._removeClass(this.handleElement, "ui-draggable-handle")
						},
						_createHelper: function(e) {
							var t = this.options,
								i = typeof t.helper === "function",
								n = i ? te(t.helper.apply(this.element[0], [e])) : t.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
							if (!n.parents("body").length) n.appendTo(t.appendTo === "parent" ? this.element[0].parentNode : t.appendTo);
							if (i && n[0] === this.element[0]) this._setPositionRelative();
							if (n[0] !== this.element[0] && !/(fixed|absolute)/.test(n.css("position"))) n.css("position", "absolute");
							return n
						},
						_setPositionRelative: function() {
							if (!/^(?:r|a|f)/.test(this.element.css("position"))) this.element[0].style.position = "relative"
						},
						_adjustOffsetFromHelper: function(e) {
							if (typeof e === "string") e = e.split(" ");
							if (Array.isArray(e)) e = {
								left: +e[0],
								top: +e[1] || 0
							};
							if ("left" in e) this.offset.click.left = e.left + this.margins.left;
							if ("right" in e) this.offset.click.left = this.helperProportions.width - e.right + this.margins.left;
							if ("top" in e) this.offset.click.top = e.top + this.margins.top;
							if ("bottom" in e) this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
						},
						_isRootNode: function(e) {
							return /(html|body)/i.test(e.tagName) || e === this.document[0]
						},
						_getParentOffset: function() {
							var e = this.offsetParent.offset(),
								t = this.document[0];
							if (this.cssPosition === "absolute" && this.scrollParent[0] !== t && te.contains(this.scrollParent[0], this.offsetParent[0])) {
								e.left += this.scrollParent.scrollLeft();
								e.top += this.scrollParent.scrollTop()
							}
							if (this._isRootNode(this.offsetParent[0])) e = {
								top: 0,
								left: 0
							};
							return {
								top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
								left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
							}
						},
						_getRelativeOffset: function() {
							if (this.cssPosition !== "relative") return {
								top: 0,
								left: 0
							};
							var e = this.element.position(),
								t = this._isRootNode(this.scrollParent[0]);
							return {
								top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (!t ? this.scrollParent.scrollTop() : 0),
								left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (!t ? this.scrollParent.scrollLeft() : 0)
							}
						},
						_cacheMargins: function() {
							this.margins = {
								left: parseInt(this.element.css("marginLeft"), 10) || 0,
								top: parseInt(this.element.css("marginTop"), 10) || 0,
								right: parseInt(this.element.css("marginRight"), 10) || 0,
								bottom: parseInt(this.element.css("marginBottom"), 10) || 0
							}
						},
						_cacheHelperProportions: function() {
							this.helperProportions = {
								width: this.helper.outerWidth(),
								height: this.helper.outerHeight()
							}
						},
						_setContainment: function() {
							var e, t, i, n = this.options,
								s = this.document[0];
							this.relativeContainer = null;
							if (!n.containment) {
								this.containment = null;
								return
							}
							if (n.containment === "window") {
								this.containment = [te(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, te(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, te(window).scrollLeft() + te(window).width() - this.helperProportions.width - this.margins.left, te(window).scrollTop() + (te(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
								return
							}
							if (n.containment === "document") {
								this.containment = [0, 0, te(s).width() - this.helperProportions.width - this.margins.left, (te(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
								return
							}
							if (n.containment.constructor === Array) {
								this.containment = n.containment;
								return
							}
							if (n.containment === "parent") n.containment = this.helper[0].parentNode;
							t = te(n.containment);
							i = t[0];
							if (!i) return;
							e = /(scroll|auto)/.test(t.css("overflow"));
							this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (e ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
							this.relativeContainer = t
						},
						_convertPositionTo: function(e, t) {
							if (!t) t = this.position;
							var i = e === "absolute" ? 1 : -1,
								n = this._isRootNode(this.scrollParent[0]);
							return {
								top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - (this.cssPosition === "fixed" ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
								left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - (this.cssPosition === "fixed" ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
							}
						},
						_generatePosition: function(e, t) {
							var i, n, s, a, o = this.options,
								r = this._isRootNode(this.scrollParent[0]),
								l = e.pageX,
								u = e.pageY;
							if (!r || !this.offset.scroll) this.offset.scroll = {
								top: this.scrollParent.scrollTop(),
								left: this.scrollParent.scrollLeft()
							};
							if (t) {
								if (this.containment) {
									if (this.relativeContainer) {
										n = this.relativeContainer.offset();
										i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]
									} else i = this.containment;
									if (e.pageX - this.offset.click.left < i[0]) l = i[0] + this.offset.click.left;
									if (e.pageY - this.offset.click.top < i[1]) u = i[1] + this.offset.click.top;
									if (e.pageX - this.offset.click.left > i[2]) l = i[2] + this.offset.click.left;
									if (e.pageY - this.offset.click.top > i[3]) u = i[3] + this.offset.click.top
								}
								if (o.grid) {
									s = o.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
									u = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - o.grid[1] : s + o.grid[1] : s;
									a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
									l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a
								}
								if (o.axis === "y") l = this.originalPageX;
								if (o.axis === "x") u = this.originalPageY
							}
							return {
								top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
								left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
							}
						},
						_clear: function() {
							this._removeClass(this.helper, "ui-draggable-dragging");
							if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) this.helper.remove();
							this.helper = null;
							this.cancelHelperRemoval = false;
							if (this.destroyOnClear) this.destroy()
						},
						_trigger: function(e, t, i) {
							i = i || this._uiHash();
							te.ui.plugin.call(this, e, [t, i, this], true);
							if (/^(drag|start|stop)/.test(e)) {
								this.positionAbs = this._convertPositionTo("absolute");
								i.offset = this.positionAbs
							}
							return te.Widget.prototype._trigger.call(this, e, t, i)
						},
						plugins: {},
						_uiHash: function() {
							return {
								helper: this.helper,
								position: this.position,
								originalPosition: this.originalPosition,
								offset: this.positionAbs
							}
						}
					}), te.ui.plugin.add("draggable", "connectToSortable", {
						start: function(t, e, i) {
							var n = te.extend({}, e, {
								item: i.element
							});
							i.sortables = [];
							te(i.options.connectToSortable).each(function() {
								var e = te(this).sortable("instance");
								if (e && !e.options.disabled) {
									i.sortables.push(e);
									e.refreshPositions();
									e._trigger("activate", t, n)
								}
							})
						},
						stop: function(t, e, i) {
							var n = te.extend({}, e, {
								item: i.element
							});
							i.cancelHelperRemoval = false;
							te.each(i.sortables, function() {
								var e = this;
								if (e.isOver) {
									e.isOver = 0;
									i.cancelHelperRemoval = true;
									e.cancelHelperRemoval = false;
									e._storedCSS = {
										position: e.placeholder.css("position"),
										top: e.placeholder.css("top"),
										left: e.placeholder.css("left")
									};
									e._mouseStop(t);
									e.options.helper = e.options._helper
								} else {
									e.cancelHelperRemoval = true;
									e._trigger("deactivate", t, n)
								}
							})
						},
						drag: function(i, n, s) {
							te.each(s.sortables, function() {
								var e = false,
									t = this;
								t.positionAbs = s.positionAbs;
								t.helperProportions = s.helperProportions;
								t.offset.click = s.offset.click;
								if (t._intersectsWith(t.containerCache)) {
									e = true;
									te.each(s.sortables, function() {
										this.positionAbs = s.positionAbs;
										this.helperProportions = s.helperProportions;
										this.offset.click = s.offset.click;
										if (this !== t && this._intersectsWith(this.containerCache) && te.contains(t.element[0], this.element[0])) e = false;
										return e
									})
								}
								if (e) {
									if (!t.isOver) {
										t.isOver = 1;
										s._parent = n.helper.parent();
										t.currentItem = n.helper.appendTo(t.element).data("ui-sortable-item", true);
										t.options._helper = t.options.helper;
										t.options.helper = function() {
											return n.helper[0]
										};
										i.target = t.currentItem[0];
										t._mouseCapture(i, true);
										t._mouseStart(i, true, true);
										t.offset.click.top = s.offset.click.top;
										t.offset.click.left = s.offset.click.left;
										t.offset.parent.left -= s.offset.parent.left - t.offset.parent.left;
										t.offset.parent.top -= s.offset.parent.top - t.offset.parent.top;
										s._trigger("toSortable", i);
										s.dropped = t.element;
										te.each(s.sortables, function() {
											this.refreshPositions()
										});
										s.currentItem = s.element;
										t.fromOutside = s
									}
									if (t.currentItem) {
										t._mouseDrag(i);
										n.position = t.position
									}
								} else if (t.isOver) {
									t.isOver = 0;
									t.cancelHelperRemoval = true;
									t.options._revert = t.options.revert;
									t.options.revert = false;
									t._trigger("out", i, t._uiHash(t));
									t._mouseStop(i, true);
									t.options.revert = t.options._revert;
									t.options.helper = t.options._helper;
									if (t.placeholder) t.placeholder.remove();
									n.helper.appendTo(s._parent);
									s._refreshOffsets(i);
									n.position = s._generatePosition(i, true);
									s._trigger("fromSortable", i);
									s.dropped = false;
									te.each(s.sortables, function() {
										this.refreshPositions()
									})
								}
							})
						}
					}), te.ui.plugin.add("draggable", "cursor", {
						start: function(e, t, i) {
							var n = te("body"),
								s = i.options;
							if (n.css("cursor")) s._cursor = n.css("cursor");
							n.css("cursor", s.cursor)
						},
						stop: function(e, t, i) {
							var n = i.options;
							if (n._cursor) te("body").css("cursor", n._cursor)
						}
					}), te.ui.plugin.add("draggable", "opacity", {
						start: function(e, t, i) {
							var n = te(t.helper),
								s = i.options;
							if (n.css("opacity")) s._opacity = n.css("opacity");
							n.css("opacity", s.opacity)
						},
						stop: function(e, t, i) {
							var n = i.options;
							if (n._opacity) te(t.helper).css("opacity", n._opacity)
						}
					}), te.ui.plugin.add("draggable", "scroll", {
						start: function(e, t, i) {
							if (!i.scrollParentNotHidden) i.scrollParentNotHidden = i.helper.scrollParent(false);
							if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") i.overflowOffset = i.scrollParentNotHidden.offset()
						},
						drag: function(e, t, i) {
							var n = i.options,
								s = false,
								a = i.scrollParentNotHidden[0],
								o = i.document[0];
							if (a !== o && a.tagName !== "HTML") {
								if (!n.axis || n.axis !== "x")
									if (i.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity) a.scrollTop = s = a.scrollTop + n.scrollSpeed;
									else if (e.pageY - i.overflowOffset.top < n.scrollSensitivity) a.scrollTop = s = a.scrollTop - n.scrollSpeed;
								if (!n.axis || n.axis !== "y")
									if (i.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity) a.scrollLeft = s = a.scrollLeft + n.scrollSpeed;
									else if (e.pageX - i.overflowOffset.left < n.scrollSensitivity) a.scrollLeft = s = a.scrollLeft - n.scrollSpeed
							} else {
								if (!n.axis || n.axis !== "x")
									if (e.pageY - te(o).scrollTop() < n.scrollSensitivity) s = te(o).scrollTop(te(o).scrollTop() - n.scrollSpeed);
									else if (te(window).height() - (e.pageY - te(o).scrollTop()) < n.scrollSensitivity) s = te(o).scrollTop(te(o).scrollTop() + n.scrollSpeed);
								if (!n.axis || n.axis !== "y")
									if (e.pageX - te(o).scrollLeft() < n.scrollSensitivity) s = te(o).scrollLeft(te(o).scrollLeft() - n.scrollSpeed);
									else if (te(window).width() - (e.pageX - te(o).scrollLeft()) < n.scrollSensitivity) s = te(o).scrollLeft(te(o).scrollLeft() + n.scrollSpeed)
							}
							if (s !== false && te.ui.ddmanager && !n.dropBehaviour) te.ui.ddmanager.prepareOffsets(i, e)
						}
					}), te.ui.plugin.add("draggable", "snap", {
						start: function(e, t, i) {
							var n = i.options;
							i.snapElements = [];
							te(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
								var e = te(this),
									t = e.offset();
								if (this !== i.element[0]) i.snapElements.push({
									item: this,
									width: e.outerWidth(),
									height: e.outerHeight(),
									top: t.top,
									left: t.left
								})
							})
						},
						drag: function(e, t, i) {
							var n, s, a, o, r, l, u, c, h, d, f = i.options,
								p = f.snapTolerance,
								m = t.offset.left,
								g = m + i.helperProportions.width,
								v = t.offset.top,
								b = v + i.helperProportions.height;
							for (h = i.snapElements.length - 1; h >= 0; h--) {
								r = i.snapElements[h].left - i.margins.left;
								l = r + i.snapElements[h].width;
								u = i.snapElements[h].top - i.margins.top;
								c = u + i.snapElements[h].height;
								if (g < r - p || m > l + p || b < u - p || v > c + p || !te.contains(i.snapElements[h].item.ownerDocument, i.snapElements[h].item)) {
									if (i.snapElements[h].snapping)
										if (i.options.snap.release) i.options.snap.release.call(i.element, e, te.extend(i._uiHash(), {
											snapItem: i.snapElements[h].item
										}));
									i.snapElements[h].snapping = false;
									continue
								}
								if (f.snapMode !== "inner") {
									n = Math.abs(u - b) <= p;
									s = Math.abs(c - v) <= p;
									a = Math.abs(r - g) <= p;
									o = Math.abs(l - m) <= p;
									if (n) t.position.top = i._convertPositionTo("relative", {
										top: u - i.helperProportions.height,
										left: 0
									}).top;
									if (s) t.position.top = i._convertPositionTo("relative", {
										top: c,
										left: 0
									}).top;
									if (a) t.position.left = i._convertPositionTo("relative", {
										top: 0,
										left: r - i.helperProportions.width
									}).left;
									if (o) t.position.left = i._convertPositionTo("relative", {
										top: 0,
										left: l
									}).left
								}
								d = n || s || a || o;
								if (f.snapMode !== "outer") {
									n = Math.abs(u - v) <= p;
									s = Math.abs(c - b) <= p;
									a = Math.abs(r - m) <= p;
									o = Math.abs(l - g) <= p;
									if (n) t.position.top = i._convertPositionTo("relative", {
										top: u,
										left: 0
									}).top;
									if (s) t.position.top = i._convertPositionTo("relative", {
										top: c - i.helperProportions.height,
										left: 0
									}).top;
									if (a) t.position.left = i._convertPositionTo("relative", {
										top: 0,
										left: r
									}).left;
									if (o) t.position.left = i._convertPositionTo("relative", {
										top: 0,
										left: l - i.helperProportions.width
									}).left
								}
								if (!i.snapElements[h].snapping && (n || s || a || o || d))
									if (i.options.snap.snap) i.options.snap.snap.call(i.element, e, te.extend(i._uiHash(), {
										snapItem: i.snapElements[h].item
									}));
								i.snapElements[h].snapping = n || s || a || o || d
							}
						}
					}), te.ui.plugin.add("draggable", "stack", {
						start: function(e, t, i) {
							var n, s = i.options,
								a = te.makeArray(te(s.stack)).sort(function(e, t) {
									return (parseInt(te(e).css("zIndex"), 10) || 0) - (parseInt(te(t).css("zIndex"), 10) || 0)
								});
							if (!a.length) return;
							n = parseInt(te(a[0]).css("zIndex"), 10) || 0;
							te(a).each(function(e) {
								te(this).css("zIndex", n + e)
							});
							this.css("zIndex", n + a.length)
						}
					}), te.ui.plugin.add("draggable", "zIndex", {
						start: function(e, t, i) {
							var n = te(t.helper),
								s = i.options;
							if (n.css("zIndex")) s._zIndex = n.css("zIndex");
							n.css("zIndex", s.zIndex)
						},
						stop: function(e, t, i) {
							var n = i.options;
							if (n._zIndex) te(t.helper).css("zIndex", n._zIndex)
						}
					}), te.ui.draggable),
					Ue = (te.widget("ui.resizable", te.ui.mouse, {
						version: "1.13.2",
						widgetEventPrefix: "resize",
						options: {
							alsoResize: false,
							animate: false,
							animateDuration: "slow",
							animateEasing: "swing",
							aspectRatio: false,
							autoHide: false,
							classes: {
								"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
							},
							containment: false,
							ghost: false,
							grid: false,
							handles: "e,s,se",
							helper: false,
							maxHeight: null,
							maxWidth: null,
							minHeight: 10,
							minWidth: 10,
							zIndex: 90,
							resize: null,
							start: null,
							stop: null
						},
						_num: function(e) {
							return parseFloat(e) || 0
						},
						_isNumber: function(e) {
							return !isNaN(parseFloat(e))
						},
						_hasScroll: function(e, t) {
							if (te(e).css("overflow") === "hidden") return false;
							var i = t && t === "left" ? "scrollLeft" : "scrollTop",
								n = false;
							if (e[i] > 0) return true;
							try {
								e[i] = 1;
								n = e[i] > 0;
								e[i] = 0
							} catch (e) {}
							return n
						},
						_create: function() {
							var e, t = this.options,
								i = this;
							this._addClass("ui-resizable");
							te.extend(this, {
								_aspectRatio: !!t.aspectRatio,
								aspectRatio: t.aspectRatio,
								originalElement: this.element,
								_proportionallyResizeElements: [],
								_helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
							});
							if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
								this.element.wrap(te("<div class='ui-wrapper'></div>").css({
									overflow: "hidden",
									position: this.element.css("position"),
									width: this.element.outerWidth(),
									height: this.element.outerHeight(),
									top: this.element.css("top"),
									left: this.element.css("left")
								}));
								this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
								this.elementIsWrapper = true;
								e = {
									marginTop: this.originalElement.css("marginTop"),
									marginRight: this.originalElement.css("marginRight"),
									marginBottom: this.originalElement.css("marginBottom"),
									marginLeft: this.originalElement.css("marginLeft")
								};
								this.element.css(e);
								this.originalElement.css("margin", 0);
								this.originalResizeStyle = this.originalElement.css("resize");
								this.originalElement.css("resize", "none");
								this._proportionallyResizeElements.push(this.originalElement.css({
									position: "static",
									zoom: 1,
									display: "block"
								}));
								this.originalElement.css(e);
								this._proportionallyResize()
							}
							this._setupHandles();
							if (t.autoHide) te(this.element).on("mouseenter", function() {
								if (t.disabled) return;
								i._removeClass("ui-resizable-autohide");
								i._handles.show()
							}).on("mouseleave", function() {
								if (t.disabled) return;
								if (!i.resizing) {
									i._addClass("ui-resizable-autohide");
									i._handles.hide()
								}
							});
							this._mouseInit()
						},
						_destroy: function() {
							this._mouseDestroy();
							this._addedHandles.remove();
							var e, t = function(e) {
								te(e).removeData("resizable").removeData("ui-resizable").off(".resizable")
							};
							if (this.elementIsWrapper) {
								t(this.element);
								e = this.element;
								this.originalElement.css({
									position: e.css("position"),
									width: e.outerWidth(),
									height: e.outerHeight(),
									top: e.css("top"),
									left: e.css("left")
								}).insertAfter(e);
								e.remove()
							}
							this.originalElement.css("resize", this.originalResizeStyle);
							t(this.originalElement);
							return this
						},
						_setOption: function(e, t) {
							this._super(e, t);
							switch (e) {
								case "handles":
									this._removeHandles();
									this._setupHandles();
									break;
								case "aspectRatio":
									this._aspectRatio = !!t;
									break;
								default:
									break
							}
						},
						_setupHandles: function() {
							var e = this.options,
								t, i, n, s, a, o = this;
							this.handles = e.handles || (!te(".ui-resizable-handle", this.element).length ? "e,s,se" : {
								n: ".ui-resizable-n",
								e: ".ui-resizable-e",
								s: ".ui-resizable-s",
								w: ".ui-resizable-w",
								se: ".ui-resizable-se",
								sw: ".ui-resizable-sw",
								ne: ".ui-resizable-ne",
								nw: ".ui-resizable-nw"
							});
							this._handles = te();
							this._addedHandles = te();
							if (this.handles.constructor === String) {
								if (this.handles === "all") this.handles = "n,e,s,w,se,sw,ne,nw";
								n = this.handles.split(",");
								this.handles = {};
								for (i = 0; i < n.length; i++) {
									t = String.prototype.trim.call(n[i]);
									s = "ui-resizable-" + t;
									a = te("<div>");
									this._addClass(a, "ui-resizable-handle " + s);
									a.css({
										zIndex: e.zIndex
									});
									this.handles[t] = ".ui-resizable-" + t;
									if (!this.element.children(this.handles[t]).length) {
										this.element.append(a);
										this._addedHandles = this._addedHandles.add(a)
									}
								}
							}
							this._renderAxis = function(e) {
								var t, i, n, s;
								e = e || this.element;
								for (t in this.handles) {
									if (this.handles[t].constructor === String) this.handles[t] = this.element.children(this.handles[t]).first().show();
									else if (this.handles[t].jquery || this.handles[t].nodeType) {
										this.handles[t] = te(this.handles[t]);
										this._on(this.handles[t], {
											mousedown: o._mouseDown
										})
									}
									if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
										i = te(this.handles[t], this.element);
										s = /sw|ne|nw|se|n|s/.test(t) ? i.outerHeight() : i.outerWidth();
										n = ["padding", /ne|nw|n/.test(t) ? "Top" : /se|sw|s/.test(t) ? "Bottom" : /^e$/.test(t) ? "Right" : "Left"].join("");
										e.css(n, s);
										this._proportionallyResize()
									}
									this._handles = this._handles.add(this.handles[t])
								}
							};
							this._renderAxis(this.element);
							this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
							this._handles.disableSelection();
							this._handles.on("mouseover", function() {
								if (!o.resizing) {
									if (this.className) a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
									o.axis = a && a[1] ? a[1] : "se"
								}
							});
							if (e.autoHide) {
								this._handles.hide();
								this._addClass("ui-resizable-autohide")
							}
						},
						_removeHandles: function() {
							this._addedHandles.remove()
						},
						_mouseCapture: function(e) {
							var t, i, n = false;
							for (t in this.handles) {
								i = te(this.handles[t])[0];
								if (i === e.target || te.contains(i, e.target)) n = true
							}
							return !this.options.disabled && n
						},
						_mouseStart: function(e) {
							var t, i, n, s = this.options,
								a = this.element;
							this.resizing = true;
							this._renderProxy();
							t = this._num(this.helper.css("left"));
							i = this._num(this.helper.css("top"));
							if (s.containment) {
								t += te(s.containment).scrollLeft() || 0;
								i += te(s.containment).scrollTop() || 0
							}
							this.offset = this.helper.offset();
							this.position = {
								left: t,
								top: i
							};
							this.size = this._helper ? {
								width: this.helper.width(),
								height: this.helper.height()
							} : {
								width: a.width(),
								height: a.height()
							};
							this.originalSize = this._helper ? {
								width: a.outerWidth(),
								height: a.outerHeight()
							} : {
								width: a.width(),
								height: a.height()
							};
							this.sizeDiff = {
								width: a.outerWidth() - a.width(),
								height: a.outerHeight() - a.height()
							};
							this.originalPosition = {
								left: t,
								top: i
							};
							this.originalMousePosition = {
								left: e.pageX,
								top: e.pageY
							};
							this.aspectRatio = typeof s.aspectRatio === "number" ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
							n = te(".ui-resizable-" + this.axis).css("cursor");
							te("body").css("cursor", n === "auto" ? this.axis + "-resize" : n);
							this._addClass("ui-resizable-resizing");
							this._propagate("start", e);
							return true
						},
						_mouseDrag: function(e) {
							var t, i, n = this.originalMousePosition,
								s = this.axis,
								a = e.pageX - n.left || 0,
								o = e.pageY - n.top || 0,
								r = this._change[s];
							this._updatePrevProperties();
							if (!r) return false;
							t = r.apply(this, [e, a, o]);
							this._updateVirtualBoundaries(e.shiftKey);
							if (this._aspectRatio || e.shiftKey) t = this._updateRatio(t, e);
							t = this._respectSize(t, e);
							this._updateCache(t);
							this._propagate("resize", e);
							i = this._applyChanges();
							if (!this._helper && this._proportionallyResizeElements.length) this._proportionallyResize();
							if (!te.isEmptyObject(i)) {
								this._updatePrevProperties();
								this._trigger("resize", e, this.ui());
								this._applyChanges()
							}
							return false
						},
						_mouseStop: function(e) {
							this.resizing = false;
							var t, i, n, s, a, o, r, l = this.options,
								u = this;
							if (this._helper) {
								t = this._proportionallyResizeElements;
								i = t.length && /textarea/i.test(t[0].nodeName);
								n = i && this._hasScroll(t[0], "left") ? 0 : u.sizeDiff.height;
								s = i ? 0 : u.sizeDiff.width;
								a = {
									width: u.helper.width() - s,
									height: u.helper.height() - n
								};
								o = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null;
								r = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null;
								if (!l.animate) this.element.css(te.extend(a, {
									top: r,
									left: o
								}));
								u.helper.height(u.size.height);
								u.helper.width(u.size.width);
								if (this._helper && !l.animate) this._proportionallyResize()
							}
							te("body").css("cursor", "auto");
							this._removeClass("ui-resizable-resizing");
							this._propagate("stop", e);
							if (this._helper) this.helper.remove();
							return false
						},
						_updatePrevProperties: function() {
							this.prevPosition = {
								top: this.position.top,
								left: this.position.left
							};
							this.prevSize = {
								width: this.size.width,
								height: this.size.height
							}
						},
						_applyChanges: function() {
							var e = {};
							if (this.position.top !== this.prevPosition.top) e.top = this.position.top + "px";
							if (this.position.left !== this.prevPosition.left) e.left = this.position.left + "px";
							if (this.size.width !== this.prevSize.width) e.width = this.size.width + "px";
							if (this.size.height !== this.prevSize.height) e.height = this.size.height + "px";
							this.helper.css(e);
							return e
						},
						_updateVirtualBoundaries: function(e) {
							var t, i, n, s, a, o = this.options;
							a = {
								minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
								maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
								minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
								maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
							};
							if (this._aspectRatio || e) {
								t = a.minHeight * this.aspectRatio;
								n = a.minWidth / this.aspectRatio;
								i = a.maxHeight * this.aspectRatio;
								s = a.maxWidth / this.aspectRatio;
								if (t > a.minWidth) a.minWidth = t;
								if (n > a.minHeight) a.minHeight = n;
								if (i < a.maxWidth) a.maxWidth = i;
								if (s < a.maxHeight) a.maxHeight = s
							}
							this._vBoundaries = a
						},
						_updateCache: function(e) {
							this.offset = this.helper.offset();
							if (this._isNumber(e.left)) this.position.left = e.left;
							if (this._isNumber(e.top)) this.position.top = e.top;
							if (this._isNumber(e.height)) this.size.height = e.height;
							if (this._isNumber(e.width)) this.size.width = e.width
						},
						_updateRatio: function(e) {
							var t = this.position,
								i = this.size,
								n = this.axis;
							if (this._isNumber(e.height)) e.width = e.height * this.aspectRatio;
							else if (this._isNumber(e.width)) e.height = e.width / this.aspectRatio;
							if (n === "sw") {
								e.left = t.left + (i.width - e.width);
								e.top = null
							}
							if (n === "nw") {
								e.top = t.top + (i.height - e.height);
								e.left = t.left + (i.width - e.width)
							}
							return e
						},
						_respectSize: function(e) {
							var t = this._vBoundaries,
								i = this.axis,
								n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
								s = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
								a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
								o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
								r = this.originalPosition.left + this.originalSize.width,
								l = this.originalPosition.top + this.originalSize.height,
								u = /sw|nw|w/.test(i),
								c = /nw|ne|n/.test(i);
							if (a) e.width = t.minWidth;
							if (o) e.height = t.minHeight;
							if (n) e.width = t.maxWidth;
							if (s) e.height = t.maxHeight;
							if (a && u) e.left = r - t.minWidth;
							if (n && u) e.left = r - t.maxWidth;
							if (o && c) e.top = l - t.minHeight;
							if (s && c) e.top = l - t.maxHeight;
							if (!e.width && !e.height && !e.left && e.top) e.top = null;
							else if (!e.width && !e.height && !e.top && e.left) e.left = null;
							return e
						},
						_getPaddingPlusBorderDimensions: function(e) {
							var t = 0,
								i = [],
								n = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")],
								s = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
							for (; t < 4; t++) {
								i[t] = parseFloat(n[t]) || 0;
								i[t] += parseFloat(s[t]) || 0
							}
							return {
								height: i[0] + i[2],
								width: i[1] + i[3]
							}
						},
						_proportionallyResize: function() {
							if (!this._proportionallyResizeElements.length) return;
							var e, t = 0,
								i = this.helper || this.element;
							for (; t < this._proportionallyResizeElements.length; t++) {
								e = this._proportionallyResizeElements[t];
								if (!this.outerDimensions) this.outerDimensions = this._getPaddingPlusBorderDimensions(e);
								e.css({
									height: i.height() - this.outerDimensions.height || 0,
									width: i.width() - this.outerDimensions.width || 0
								})
							}
						},
						_renderProxy: function() {
							var e = this.element,
								t = this.options;
							this.elementOffset = e.offset();
							if (this._helper) {
								this.helper = this.helper || te("<div></div>").css({
									overflow: "hidden"
								});
								this._addClass(this.helper, this._helper);
								this.helper.css({
									width: this.element.outerWidth(),
									height: this.element.outerHeight(),
									position: "absolute",
									left: this.elementOffset.left + "px",
									top: this.elementOffset.top + "px",
									zIndex: ++t.zIndex
								});
								this.helper.appendTo("body").disableSelection()
							} else this.helper = this.element
						},
						_change: {
							e: function(e, t) {
								return {
									width: this.originalSize.width + t
								}
							},
							w: function(e, t) {
								var i = this.originalSize,
									n = this.originalPosition;
								return {
									left: n.left + t,
									width: i.width - t
								}
							},
							n: function(e, t, i) {
								var n = this.originalSize,
									s = this.originalPosition;
								return {
									top: s.top + i,
									height: n.height - i
								}
							},
							s: function(e, t, i) {
								return {
									height: this.originalSize.height + i
								}
							},
							se: function(e, t, i) {
								return te.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
							},
							sw: function(e, t, i) {
								return te.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
							},
							ne: function(e, t, i) {
								return te.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
							},
							nw: function(e, t, i) {
								return te.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
							}
						},
						_propagate: function(e, t) {
							te.ui.plugin.call(this, e, [t, this.ui()]);
							if (e !== "resize") this._trigger(e, t, this.ui())
						},
						plugins: {},
						ui: function() {
							return {
								originalElement: this.originalElement,
								element: this.element,
								helper: this.helper,
								position: this.position,
								size: this.size,
								originalSize: this.originalSize,
								originalPosition: this.originalPosition
							}
						}
					}), te.ui.plugin.add("resizable", "animate", {
						stop: function(t) {
							var i = te(this).resizable("instance"),
								e = i.options,
								n = i._proportionallyResizeElements,
								s = n.length && /textarea/i.test(n[0].nodeName),
								a = s && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
								o = s ? 0 : i.sizeDiff.width,
								r = {
									width: i.size.width - o,
									height: i.size.height - a
								},
								l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
								u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
							i.element.animate(te.extend(r, u && l ? {
								top: u,
								left: l
							} : {}), {
								duration: e.animateDuration,
								easing: e.animateEasing,
								step: function() {
									var e = {
										width: parseFloat(i.element.css("width")),
										height: parseFloat(i.element.css("height")),
										top: parseFloat(i.element.css("top")),
										left: parseFloat(i.element.css("left"))
									};
									if (n && n.length) te(n[0]).css({
										width: e.width,
										height: e.height
									});
									i._updateCache(e);
									i._propagate("resize", t)
								}
							})
						}
					}), te.ui.plugin.add("resizable", "containment", {
						start: function() {
							var i, n, e, t, s, a, o, r = te(this).resizable("instance"),
								l = r.options,
								u = r.element,
								c = l.containment,
								h = c instanceof te ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
							if (!h) return;
							r.containerElement = te(h);
							if (/document/.test(c) || c === document) {
								r.containerOffset = {
									left: 0,
									top: 0
								};
								r.containerPosition = {
									left: 0,
									top: 0
								};
								r.parentData = {
									element: te(document),
									left: 0,
									top: 0,
									width: te(document).width(),
									height: te(document).height() || document.body.parentNode.scrollHeight
								}
							} else {
								i = te(h);
								n = [];
								te(["Top", "Right", "Left", "Bottom"]).each(function(e, t) {
									n[e] = r._num(i.css("padding" + t))
								});
								r.containerOffset = i.offset();
								r.containerPosition = i.position();
								r.containerSize = {
									height: i.innerHeight() - n[3],
									width: i.innerWidth() - n[1]
								};
								e = r.containerOffset;
								t = r.containerSize.height;
								s = r.containerSize.width;
								a = r._hasScroll(h, "left") ? h.scrollWidth : s;
								o = r._hasScroll(h) ? h.scrollHeight : t;
								r.parentData = {
									element: h,
									left: e.left,
									top: e.top,
									width: a,
									height: o
								}
							}
						},
						resize: function(e) {
							var t, i, n, s, a = te(this).resizable("instance"),
								o = a.options,
								r = a.containerOffset,
								l = a.position,
								u = a._aspectRatio || e.shiftKey,
								c = {
									top: 0,
									left: 0
								},
								h = a.containerElement,
								d = true;
							if (h[0] !== document && /static/.test(h.css("position"))) c = r;
							if (l.left < (a._helper ? r.left : 0)) {
								a.size.width = a.size.width + (a._helper ? a.position.left - r.left : a.position.left - c.left);
								if (u) {
									a.size.height = a.size.width / a.aspectRatio;
									d = false
								}
								a.position.left = o.helper ? r.left : 0
							}
							if (l.top < (a._helper ? r.top : 0)) {
								a.size.height = a.size.height + (a._helper ? a.position.top - r.top : a.position.top);
								if (u) {
									a.size.width = a.size.height * a.aspectRatio;
									d = false
								}
								a.position.top = a._helper ? r.top : 0
							}
							n = a.containerElement.get(0) === a.element.parent().get(0);
							s = /relative|absolute/.test(a.containerElement.css("position"));
							if (n && s) {
								a.offset.left = a.parentData.left + a.position.left;
								a.offset.top = a.parentData.top + a.position.top
							} else {
								a.offset.left = a.element.offset().left;
								a.offset.top = a.element.offset().top
							}
							t = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - c.left : a.offset.left - r.left));
							i = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - c.top : a.offset.top - r.top));
							if (t + a.size.width >= a.parentData.width) {
								a.size.width = a.parentData.width - t;
								if (u) {
									a.size.height = a.size.width / a.aspectRatio;
									d = false
								}
							}
							if (i + a.size.height >= a.parentData.height) {
								a.size.height = a.parentData.height - i;
								if (u) {
									a.size.width = a.size.height * a.aspectRatio;
									d = false
								}
							}
							if (!d) {
								a.position.left = a.prevPosition.left;
								a.position.top = a.prevPosition.top;
								a.size.width = a.prevSize.width;
								a.size.height = a.prevSize.height
							}
						},
						stop: function() {
							var e = te(this).resizable("instance"),
								t = e.options,
								i = e.containerOffset,
								n = e.containerPosition,
								s = e.containerElement,
								a = te(e.helper),
								o = a.offset(),
								r = a.outerWidth() - e.sizeDiff.width,
								l = a.outerHeight() - e.sizeDiff.height;
							if (e._helper && !t.animate && /relative/.test(s.css("position"))) te(this).css({
								left: o.left - n.left - i.left,
								width: r,
								height: l
							});
							if (e._helper && !t.animate && /static/.test(s.css("position"))) te(this).css({
								left: o.left - n.left - i.left,
								width: r,
								height: l
							})
						}
					}), te.ui.plugin.add("resizable", "alsoResize", {
						start: function() {
							var e = te(this).resizable("instance"),
								t = e.options;
							te(t.alsoResize).each(function() {
								var e = te(this);
								e.data("ui-resizable-alsoresize", {
									width: parseFloat(e.width()),
									height: parseFloat(e.height()),
									left: parseFloat(e.css("left")),
									top: parseFloat(e.css("top"))
								})
							})
						},
						resize: function(e, i) {
							var t = te(this).resizable("instance"),
								n = t.options,
								s = t.originalSize,
								a = t.originalPosition,
								o = {
									height: t.size.height - s.height || 0,
									width: t.size.width - s.width || 0,
									top: t.position.top - a.top || 0,
									left: t.position.left - a.left || 0
								};
							te(n.alsoResize).each(function() {
								var e = te(this),
									n = te(this).data("ui-resizable-alsoresize"),
									s = {},
									t = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
								te.each(t, function(e, t) {
									var i = (n[t] || 0) + (o[t] || 0);
									if (i && i >= 0) s[t] = i || null
								});
								e.css(s)
							})
						},
						stop: function() {
							te(this).removeData("ui-resizable-alsoresize")
						}
					}), te.ui.plugin.add("resizable", "ghost", {
						start: function() {
							var e = te(this).resizable("instance"),
								t = e.size;
							e.ghost = e.originalElement.clone();
							e.ghost.css({
								opacity: .25,
								display: "block",
								position: "relative",
								height: t.height,
								width: t.width,
								margin: 0,
								left: 0,
								top: 0
							});
							e._addClass(e.ghost, "ui-resizable-ghost");
							if (te.uiBackCompat !== false && typeof e.options.ghost === "string") e.ghost.addClass(this.options.ghost);
							e.ghost.appendTo(e.helper)
						},
						resize: function() {
							var e = te(this).resizable("instance");
							if (e.ghost) e.ghost.css({
								position: "relative",
								height: e.size.height,
								width: e.size.width
							})
						},
						stop: function() {
							var e = te(this).resizable("instance");
							if (e.ghost && e.helper) e.helper.get(0).removeChild(e.ghost.get(0))
						}
					}), te.ui.plugin.add("resizable", "grid", {
						resize: function() {
							var e, t = te(this).resizable("instance"),
								i = t.options,
								n = t.size,
								s = t.originalSize,
								a = t.originalPosition,
								o = t.axis,
								r = typeof i.grid === "number" ? [i.grid, i.grid] : i.grid,
								l = r[0] || 1,
								u = r[1] || 1,
								c = Math.round((n.width - s.width) / l) * l,
								h = Math.round((n.height - s.height) / u) * u,
								d = s.width + c,
								f = s.height + h,
								p = i.maxWidth && i.maxWidth < d,
								m = i.maxHeight && i.maxHeight < f,
								g = i.minWidth && i.minWidth > d,
								v = i.minHeight && i.minHeight > f;
							i.grid = r;
							if (g) d += l;
							if (v) f += u;
							if (p) d -= l;
							if (m) f -= u;
							if (/^(se|s|e)$/.test(o)) {
								t.size.width = d;
								t.size.height = f
							} else if (/^(ne)$/.test(o)) {
								t.size.width = d;
								t.size.height = f;
								t.position.top = a.top - h
							} else if (/^(sw)$/.test(o)) {
								t.size.width = d;
								t.size.height = f;
								t.position.left = a.left - c
							} else {
								if (f - u <= 0 || d - l <= 0) e = t._getPaddingPlusBorderDimensions(this);
								if (f - u > 0) {
									t.size.height = f;
									t.position.top = a.top - h
								} else {
									f = u - e.height;
									t.size.height = f;
									t.position.top = a.top + s.height - f
								}
								if (d - l > 0) {
									t.size.width = d;
									t.position.left = a.left - c
								} else {
									d = l - e.width;
									t.size.width = d;
									t.position.left = a.left + s.width - d
								}
							}
						}
					}), te.ui.resizable);
				if (te.widget("ui.dialog", {
						version: "1.13.2",
						options: {
							appendTo: "body",
							autoOpen: true,
							buttons: [],
							classes: {
								"ui-dialog": "ui-corner-all",
								"ui-dialog-titlebar": "ui-corner-all"
							},
							closeOnEscape: true,
							closeText: "Close",
							draggable: true,
							hide: null,
							height: "auto",
							maxHeight: null,
							maxWidth: null,
							minHeight: 150,
							minWidth: 150,
							modal: false,
							position: {
								my: "center",
								at: "center",
								of: window,
								collision: "fit",
								using: function(e) {
									var t = te(this).css(e).offset().top;
									if (t < 0) te(this).css("top", e.top - t)
								}
							},
							resizable: true,
							show: null,
							title: null,
							width: 300,
							beforeClose: null,
							close: null,
							drag: null,
							dragStart: null,
							dragStop: null,
							focus: null,
							open: null,
							resize: null,
							resizeStart: null,
							resizeStop: null
						},
						sizeRelatedOptions: {
							buttons: true,
							height: true,
							maxHeight: true,
							maxWidth: true,
							minHeight: true,
							minWidth: true,
							width: true
						},
						resizableRelatedOptions: {
							maxHeight: true,
							maxWidth: true,
							minHeight: true,
							minWidth: true
						},
						_create: function() {
							this.originalCss = {
								display: this.element[0].style.display,
								width: this.element[0].style.width,
								minHeight: this.element[0].style.minHeight,
								maxHeight: this.element[0].style.maxHeight,
								height: this.element[0].style.height
							};
							this.originalPosition = {
								parent: this.element.parent(),
								index: this.element.parent().children().index(this.element)
							};
							this.originalTitle = this.element.attr("title");
							if (this.options.title == null && this.originalTitle != null) this.options.title = this.originalTitle;
							if (this.options.disabled) this.options.disabled = false;
							this._createWrapper();
							this.element.show().removeAttr("title").appendTo(this.uiDialog);
							this._addClass("ui-dialog-content", "ui-widget-content");
							this._createTitlebar();
							this._createButtonPane();
							if (this.options.draggable && te.fn.draggable) this._makeDraggable();
							if (this.options.resizable && te.fn.resizable) this._makeResizable();
							this._isOpen = false;
							this._trackFocus()
						},
						_init: function() {
							if (this.options.autoOpen) this.open()
						},
						_appendTo: function() {
							var e = this.options.appendTo;
							if (e && (e.jquery || e.nodeType)) return te(e);
							return this.document.find(e || "body").eq(0)
						},
						_destroy: function() {
							var e, t = this.originalPosition;
							this._untrackInstance();
							this._destroyOverlay();
							this.element.removeUniqueId().css(this.originalCss).detach();
							this.uiDialog.remove();
							if (this.originalTitle) this.element.attr("title", this.originalTitle);
							e = t.parent.children().eq(t.index);
							if (e.length && e[0] !== this.element[0]) e.before(this.element);
							else t.parent.append(this.element)
						},
						widget: function() {
							return this.uiDialog
						},
						disable: te.noop,
						enable: te.noop,
						close: function(e) {
							var t = this;
							if (!this._isOpen || this._trigger("beforeClose", e) === false) return;
							this._isOpen = false;
							this._focusedElement = null;
							this._destroyOverlay();
							this._untrackInstance();
							if (!this.opener.filter(":focusable").trigger("focus").length) te.ui.safeBlur(te.ui.safeActiveElement(this.document[0]));
							this._hide(this.uiDialog, this.options.hide, function() {
								t._trigger("close", e)
							})
						},
						isOpen: function() {
							return this._isOpen
						},
						moveToTop: function() {
							this._moveToTop()
						},
						_moveToTop: function(e, t) {
							var i = false,
								n = this.uiDialog.siblings(".ui-front:visible").map(function() {
									return +te(this).css("z-index")
								}).get(),
								s = Math.max.apply(null, n);
							if (s >= +this.uiDialog.css("z-index")) {
								this.uiDialog.css("z-index", s + 1);
								i = true
							}
							if (i && !t) this._trigger("focus", e);
							return i
						},
						open: function() {
							var e = this;
							if (this._isOpen) {
								if (this._moveToTop()) this._focusTabbable();
								return
							}
							this._isOpen = true;
							this.opener = te(te.ui.safeActiveElement(this.document[0]));
							this._size();
							this._position();
							this._createOverlay();
							this._moveToTop(null, true);
							if (this.overlay) this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
							this._show(this.uiDialog, this.options.show, function() {
								e._focusTabbable();
								e._trigger("focus")
							});
							this._makeFocusTarget();
							this._trigger("open")
						},
						_focusTabbable: function() {
							var e = this._focusedElement;
							if (!e) e = this.element.find("[autofocus]");
							if (!e.length) e = this.element.find(":tabbable");
							if (!e.length) e = this.uiDialogButtonPane.find(":tabbable");
							if (!e.length) e = this.uiDialogTitlebarClose.filter(":tabbable");
							if (!e.length) e = this.uiDialog;
							e.eq(0).trigger("focus")
						},
						_restoreTabbableFocus: function() {
							var e = te.ui.safeActiveElement(this.document[0]),
								t = this.uiDialog[0] === e || te.contains(this.uiDialog[0], e);
							if (!t) this._focusTabbable()
						},
						_keepFocus: function(e) {
							e.preventDefault();
							this._restoreTabbableFocus();
							this._delay(this._restoreTabbableFocus)
						},
						_createWrapper: function() {
							this.uiDialog = te("<div>").hide().attr({
								tabIndex: -1,
								role: "dialog"
							}).appendTo(this._appendTo());
							this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
							this._on(this.uiDialog, {
								keydown: function(e) {
									if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === te.ui.keyCode.ESCAPE) {
										e.preventDefault();
										this.close(e);
										return
									}
									if (e.keyCode !== te.ui.keyCode.TAB || e.isDefaultPrevented()) return;
									var t = this.uiDialog.find(":tabbable"),
										i = t.first(),
										n = t.last();
									if ((e.target === n[0] || e.target === this.uiDialog[0]) && !e.shiftKey) {
										this._delay(function() {
											i.trigger("focus")
										});
										e.preventDefault()
									} else if ((e.target === i[0] || e.target === this.uiDialog[0]) && e.shiftKey) {
										this._delay(function() {
											n.trigger("focus")
										});
										e.preventDefault()
									}
								},
								mousedown: function(e) {
									if (this._moveToTop(e)) this._focusTabbable()
								}
							});
							if (!this.element.find("[aria-describedby]").length) this.uiDialog.attr({
								"aria-describedby": this.element.uniqueId().attr("id")
							})
						},
						_createTitlebar: function() {
							var e;
							this.uiDialogTitlebar = te("<div>");
							this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
							this._on(this.uiDialogTitlebar, {
								mousedown: function(e) {
									if (!te(e.target).closest(".ui-dialog-titlebar-close")) this.uiDialog.trigger("focus")
								}
							});
							this.uiDialogTitlebarClose = te("<button type='button'></button>").button({
								label: te("<a>").text(this.options.closeText).html(),
								icon: "ui-icon-closethick",
								showLabel: false
							}).appendTo(this.uiDialogTitlebar);
							this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
							this._on(this.uiDialogTitlebarClose, {
								click: function(e) {
									e.preventDefault();
									this.close(e)
								}
							});
							e = te("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
							this._addClass(e, "ui-dialog-title");
							this._title(e);
							this.uiDialogTitlebar.prependTo(this.uiDialog);
							this.uiDialog.attr({
								"aria-labelledby": e.attr("id")
							})
						},
						_title: function(e) {
							if (this.options.title) e.text(this.options.title);
							else e.html("&#160;")
						},
						_createButtonPane: function() {
							this.uiDialogButtonPane = te("<div>");
							this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
							this.uiButtonSet = te("<div>").appendTo(this.uiDialogButtonPane);
							this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
							this._createButtons()
						},
						_createButtons: function() {
							var s = this,
								e = this.options.buttons;
							this.uiDialogButtonPane.remove();
							this.uiButtonSet.empty();
							if (te.isEmptyObject(e) || Array.isArray(e) && !e.length) {
								this._removeClass(this.uiDialog, "ui-dialog-buttons");
								return
							}
							te.each(e, function(e, t) {
								var i, n;
								t = typeof t === "function" ? {
									click: t,
									text: e
								} : t;
								t = te.extend({
									type: "button"
								}, t);
								i = t.click;
								n = {
									icon: t.icon,
									iconPosition: t.iconPosition,
									showLabel: t.showLabel,
									icons: t.icons,
									text: t.text
								};
								delete t.click;
								delete t.icon;
								delete t.iconPosition;
								delete t.showLabel;
								delete t.icons;
								if (typeof t.text === "boolean") delete t.text;
								te("<button></button>", t).button(n).appendTo(s.uiButtonSet).on("click", function() {
									i.apply(s.element[0], arguments)
								})
							});
							this._addClass(this.uiDialog, "ui-dialog-buttons");
							this.uiDialogButtonPane.appendTo(this.uiDialog)
						},
						_makeDraggable: function() {
							var s = this,
								a = this.options;

							function o(e) {
								return {
									position: e.position,
									offset: e.offset
								}
							}
							this.uiDialog.draggable({
								cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
								handle: ".ui-dialog-titlebar",
								containment: "document",
								start: function(e, t) {
									s._addClass(te(this), "ui-dialog-dragging");
									s._blockFrames();
									s._trigger("dragStart", e, o(t))
								},
								drag: function(e, t) {
									s._trigger("drag", e, o(t))
								},
								stop: function(e, t) {
									var i = t.offset.left - s.document.scrollLeft(),
										n = t.offset.top - s.document.scrollTop();
									a.position = {
										my: "left top",
										at: "left" + (i >= 0 ? "+" : "") + i + " " + "top" + (n >= 0 ? "+" : "") + n,
										of: s.window
									};
									s._removeClass(te(this), "ui-dialog-dragging");
									s._unblockFrames();
									s._trigger("dragStop", e, o(t))
								}
							})
						},
						_makeResizable: function() {
							var a = this,
								o = this.options,
								e = o.resizable,
								t = this.uiDialog.css("position"),
								i = typeof e === "string" ? e : "n,e,s,w,se,sw,ne,nw";

							function r(e) {
								return {
									originalPosition: e.originalPosition,
									originalSize: e.originalSize,
									position: e.position,
									size: e.size
								}
							}
							this.uiDialog.resizable({
								cancel: ".ui-dialog-content",
								containment: "document",
								alsoResize: this.element,
								maxWidth: o.maxWidth,
								maxHeight: o.maxHeight,
								minWidth: o.minWidth,
								minHeight: this._minHeight(),
								handles: i,
								start: function(e, t) {
									a._addClass(te(this), "ui-dialog-resizing");
									a._blockFrames();
									a._trigger("resizeStart", e, r(t))
								},
								resize: function(e, t) {
									a._trigger("resize", e, r(t))
								},
								stop: function(e, t) {
									var i = a.uiDialog.offset(),
										n = i.left - a.document.scrollLeft(),
										s = i.top - a.document.scrollTop();
									o.height = a.uiDialog.height();
									o.width = a.uiDialog.width();
									o.position = {
										my: "left top",
										at: "left" + (n >= 0 ? "+" : "") + n + " " + "top" + (s >= 0 ? "+" : "") + s,
										of: a.window
									};
									a._removeClass(te(this), "ui-dialog-resizing");
									a._unblockFrames();
									a._trigger("resizeStop", e, r(t))
								}
							}).css("position", t)
						},
						_trackFocus: function() {
							this._on(this.widget(), {
								focusin: function(e) {
									this._makeFocusTarget();
									this._focusedElement = te(e.target)
								}
							})
						},
						_makeFocusTarget: function() {
							this._untrackInstance();
							this._trackingInstances().unshift(this)
						},
						_untrackInstance: function() {
							var e = this._trackingInstances(),
								t = te.inArray(this, e);
							if (t !== -1) e.splice(t, 1)
						},
						_trackingInstances: function() {
							var e = this.document.data("ui-dialog-instances");
							if (!e) {
								e = [];
								this.document.data("ui-dialog-instances", e)
							}
							return e
						},
						_minHeight: function() {
							var e = this.options;
							return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
						},
						_position: function() {
							var e = this.uiDialog.is(":visible");
							if (!e) this.uiDialog.show();
							this.uiDialog.position(this.options.position);
							if (!e) this.uiDialog.hide()
						},
						_setOptions: function(e) {
							var i = this,
								n = false,
								s = {};
							te.each(e, function(e, t) {
								i._setOption(e, t);
								if (e in i.sizeRelatedOptions) n = true;
								if (e in i.resizableRelatedOptions) s[e] = t
							});
							if (n) {
								this._size();
								this._position()
							}
							if (this.uiDialog.is(":data(ui-resizable)")) this.uiDialog.resizable("option", s)
						},
						_setOption: function(e, t) {
							var i, n, s = this.uiDialog;
							if (e === "disabled") return;
							this._super(e, t);
							if (e === "appendTo") this.uiDialog.appendTo(this._appendTo());
							if (e === "buttons") this._createButtons();
							if (e === "closeText") this.uiDialogTitlebarClose.button({
								label: te("<a>").text("" + this.options.closeText).html()
							});
							if (e === "draggable") {
								i = s.is(":data(ui-draggable)");
								if (i && !t) s.draggable("destroy");
								if (!i && t) this._makeDraggable()
							}
							if (e === "position") this._position();
							if (e === "resizable") {
								n = s.is(":data(ui-resizable)");
								if (n && !t) s.resizable("destroy");
								if (n && typeof t === "string") s.resizable("option", "handles", t);
								if (!n && t !== false) this._makeResizable()
							}
							if (e === "title") this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
						},
						_size: function() {
							var e, t, i, n = this.options;
							this.element.show().css({
								width: "auto",
								minHeight: 0,
								maxHeight: "none",
								height: 0
							});
							if (n.minWidth > n.width) n.width = n.minWidth;
							e = this.uiDialog.css({
								height: "auto",
								width: n.width
							}).outerHeight();
							t = Math.max(0, n.minHeight - e);
							i = typeof n.maxHeight === "number" ? Math.max(0, n.maxHeight - e) : "none";
							if (n.height === "auto") this.element.css({
								minHeight: t,
								maxHeight: i,
								height: "auto"
							});
							else this.element.height(Math.max(0, n.height - e));
							if (this.uiDialog.is(":data(ui-resizable)")) this.uiDialog.resizable("option", "minHeight", this._minHeight())
						},
						_blockFrames: function() {
							this.iframeBlocks = this.document.find("iframe").map(function() {
								var e = te(this);
								return te("<div>").css({
									position: "absolute",
									width: e.outerWidth(),
									height: e.outerHeight()
								}).appendTo(e.parent()).offset(e.offset())[0]
							})
						},
						_unblockFrames: function() {
							if (this.iframeBlocks) {
								this.iframeBlocks.remove();
								delete this.iframeBlocks
							}
						},
						_allowInteraction: function(e) {
							if (te(e.target).closest(".ui-dialog").length) return true;
							return !!te(e.target).closest(".ui-datepicker").length
						},
						_createOverlay: function() {
							if (!this.options.modal) return;
							var i = te.fn.jquery.substring(0, 4);
							var n = true;
							this._delay(function() {
								n = false
							});
							if (!this.document.data("ui-dialog-overlays")) this.document.on("focusin.ui-dialog", function(e) {
								if (n) return;
								var t = this._trackingInstances()[0];
								if (!t._allowInteraction(e)) {
									e.preventDefault();
									t._focusTabbable();
									if (i === "3.4." || i === "3.5.") t._delay(t._restoreTabbableFocus)
								}
							}.bind(this));
							this.overlay = te("<div>").appendTo(this._appendTo());
							this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
							this._on(this.overlay, {
								mousedown: "_keepFocus"
							});
							this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
						},
						_destroyOverlay: function() {
							if (!this.options.modal) return;
							if (this.overlay) {
								var e = this.document.data("ui-dialog-overlays") - 1;
								if (!e) {
									this.document.off("focusin.ui-dialog");
									this.document.removeData("ui-dialog-overlays")
								} else this.document.data("ui-dialog-overlays", e);
								this.overlay.remove();
								this.overlay = null
							}
						}
					}), te.uiBackCompat !== false) te.widget("ui.dialog", te.ui.dialog, {
					options: {
						dialogClass: ""
					},
					_createWrapper: function() {
						this._super();
						this.uiDialog.addClass(this.options.dialogClass)
					},
					_setOption: function(e, t) {
						if (e === "dialogClass") this.uiDialog.removeClass(this.options.dialogClass).addClass(t);
						this._superApply(arguments)
					}
				});
				var Ve = te.ui.dialog;
				if (te.widget("ui.droppable", {
						version: "1.13.2",
						widgetEventPrefix: "drop",
						options: {
							accept: "*",
							addClasses: true,
							greedy: false,
							scope: "default",
							tolerance: "intersect",
							activate: null,
							deactivate: null,
							drop: null,
							out: null,
							over: null
						},
						_create: function() {
							var e, t = this.options,
								i = t.accept;
							this.isover = false;
							this.isout = true;
							this.accept = typeof i === "function" ? i : function(e) {
								return e.is(i)
							};
							this.proportions = function() {
								if (arguments.length) e = arguments[0];
								else return e ? e : e = {
									width: this.element[0].offsetWidth,
									height: this.element[0].offsetHeight
								}
							};
							this._addToManager(t.scope);
							if (t.addClasses) this._addClass("ui-droppable")
						},
						_addToManager: function(e) {
							te.ui.ddmanager.droppables[e] = te.ui.ddmanager.droppables[e] || [];
							te.ui.ddmanager.droppables[e].push(this)
						},
						_splice: function(e) {
							var t = 0;
							for (; t < e.length; t++)
								if (e[t] === this) e.splice(t, 1)
						},
						_destroy: function() {
							var e = te.ui.ddmanager.droppables[this.options.scope];
							this._splice(e)
						},
						_setOption: function(e, t) {
							if (e === "accept") this.accept = typeof t === "function" ? t : function(e) {
								return e.is(t)
							};
							else if (e === "scope") {
								var i = te.ui.ddmanager.droppables[this.options.scope];
								this._splice(i);
								this._addToManager(t)
							}
							this._super(e, t)
						},
						_activate: function(e) {
							var t = te.ui.ddmanager.current;
							this._addActiveClass();
							if (t) this._trigger("activate", e, this.ui(t))
						},
						_deactivate: function(e) {
							var t = te.ui.ddmanager.current;
							this._removeActiveClass();
							if (t) this._trigger("deactivate", e, this.ui(t))
						},
						_over: function(e) {
							var t = te.ui.ddmanager.current;
							if (!t || (t.currentItem || t.element)[0] === this.element[0]) return;
							if (this.accept.call(this.element[0], t.currentItem || t.element)) {
								this._addHoverClass();
								this._trigger("over", e, this.ui(t))
							}
						},
						_out: function(e) {
							var t = te.ui.ddmanager.current;
							if (!t || (t.currentItem || t.element)[0] === this.element[0]) return;
							if (this.accept.call(this.element[0], t.currentItem || t.element)) {
								this._removeHoverClass();
								this._trigger("out", e, this.ui(t))
							}
						},
						_drop: function(t, e) {
							var i = e || te.ui.ddmanager.current,
								n = false;
							if (!i || (i.currentItem || i.element)[0] === this.element[0]) return false;
							this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
								var e = te(this).droppable("instance");
								if (e.options.greedy && !e.options.disabled && e.options.scope === i.options.scope && e.accept.call(e.element[0], i.currentItem || i.element) && te.ui.intersect(i, te.extend(e, {
										offset: e.element.offset()
									}), e.options.tolerance, t)) {
									n = true;
									return false
								}
							});
							if (n) return false;
							if (this.accept.call(this.element[0], i.currentItem || i.element)) {
								this._removeActiveClass();
								this._removeHoverClass();
								this._trigger("drop", t, this.ui(i));
								return this.element
							}
							return false
						},
						ui: function(e) {
							return {
								draggable: e.currentItem || e.element,
								helper: e.helper,
								position: e.position,
								offset: e.positionAbs
							}
						},
						_addHoverClass: function() {
							this._addClass("ui-droppable-hover")
						},
						_removeHoverClass: function() {
							this._removeClass("ui-droppable-hover")
						},
						_addActiveClass: function() {
							this._addClass("ui-droppable-active")
						},
						_removeActiveClass: function() {
							this._removeClass("ui-droppable-active")
						}
					}), te.ui.intersect = function() {
						function d(e, t, i) {
							return e >= t && e < t + i
						}
						return function(e, t, i, n) {
							if (!t.offset) return false;
							var s = (e.positionAbs || e.position.absolute).left + e.margins.left,
								a = (e.positionAbs || e.position.absolute).top + e.margins.top,
								o = s + e.helperProportions.width,
								r = a + e.helperProportions.height,
								l = t.offset.left,
								u = t.offset.top,
								c = l + t.proportions().width,
								h = u + t.proportions().height;
							switch (i) {
								case "fit":
									return l <= s && o <= c && u <= a && r <= h;
								case "intersect":
									return l < s + e.helperProportions.width / 2 && o - e.helperProportions.width / 2 < c && u < a + e.helperProportions.height / 2 && r - e.helperProportions.height / 2 < h;
								case "pointer":
									return d(n.pageY, u, t.proportions().height) && d(n.pageX, l, t.proportions().width);
								case "touch":
									return (a >= u && a <= h || r >= u && r <= h || a < u && r > h) && (s >= l && s <= c || o >= l && o <= c || s < l && o > c);
								default:
									return false
							}
						}
					}(), te.ui.ddmanager = {
						current: null,
						droppables: {
							default: []
						},
						prepareOffsets: function(e, t) {
							var i, n, s = te.ui.ddmanager.droppables[e.options.scope] || [],
								a = t ? t.type : null,
								o = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
							e: for (i = 0; i < s.length; i++) {
								if (s[i].options.disabled || e && !s[i].accept.call(s[i].element[0], e.currentItem || e.element)) continue;
								for (n = 0; n < o.length; n++)
									if (o[n] === s[i].element[0]) {
										s[i].proportions().height = 0;
										continue e
									} s[i].visible = s[i].element.css("display") !== "none";
								if (!s[i].visible) continue;
								if (a === "mousedown") s[i]._activate.call(s[i], t);
								s[i].offset = s[i].element.offset();
								s[i].proportions({
									width: s[i].element[0].offsetWidth,
									height: s[i].element[0].offsetHeight
								})
							}
						},
						drop: function(e, t) {
							var i = false;
							te.each((te.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
								if (!this.options) return;
								if (!this.options.disabled && this.visible && te.ui.intersect(e, this, this.options.tolerance, t)) i = this._drop.call(this, t) || i;
								if (!this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element)) {
									this.isout = true;
									this.isover = false;
									this._deactivate.call(this, t)
								}
							});
							return i
						},
						dragStart: function(e, t) {
							e.element.parentsUntil("body").on("scroll.droppable", function() {
								if (!e.options.refreshPositions) te.ui.ddmanager.prepareOffsets(e, t)
							})
						},
						drag: function(a, o) {
							if (a.options.refreshPositions) te.ui.ddmanager.prepareOffsets(a, o);
							te.each(te.ui.ddmanager.droppables[a.options.scope] || [], function() {
								if (this.options.disabled || this.greedyChild || !this.visible) return;
								var e, t, i, n = te.ui.intersect(a, this, this.options.tolerance, o),
									s = !n && this.isover ? "isout" : n && !this.isover ? "isover" : null;
								if (!s) return;
								if (this.options.greedy) {
									t = this.options.scope;
									i = this.element.parents(":data(ui-droppable)").filter(function() {
										return te(this).droppable("instance").options.scope === t
									});
									if (i.length) {
										e = te(i[0]).droppable("instance");
										e.greedyChild = s === "isover"
									}
								}
								if (e && s === "isover") {
									e.isover = false;
									e.isout = true;
									e._out.call(e, o)
								}
								this[s] = true;
								this[s === "isout" ? "isover" : "isout"] = false;
								this[s === "isover" ? "_over" : "_out"].call(this, o);
								if (e && s === "isout") {
									e.isout = false;
									e.isover = true;
									e._over.call(e, o)
								}
							})
						},
						dragStop: function(e, t) {
							e.element.parentsUntil("body").off("scroll.droppable");
							if (!e.options.refreshPositions) te.ui.ddmanager.prepareOffsets(e, t)
						}
					}, te.uiBackCompat !== false) te.widget("ui.droppable", te.ui.droppable, {
					options: {
						hoverClass: false,
						activeClass: false
					},
					_addActiveClass: function() {
						this._super();
						if (this.options.activeClass) this.element.addClass(this.options.activeClass)
					},
					_removeActiveClass: function() {
						this._super();
						if (this.options.activeClass) this.element.removeClass(this.options.activeClass)
					},
					_addHoverClass: function() {
						this._super();
						if (this.options.hoverClass) this.element.addClass(this.options.hoverClass)
					},
					_removeHoverClass: function() {
						this._super();
						if (this.options.hoverClass) this.element.removeClass(this.options.hoverClass)
					}
				});
				var Ge = te.ui.droppable,
					Xe = te.widget("ui.progressbar", {
						version: "1.13.2",
						options: {
							classes: {
								"ui-progressbar": "ui-corner-all",
								"ui-progressbar-value": "ui-corner-left",
								"ui-progressbar-complete": "ui-corner-right"
							},
							max: 100,
							value: 0,
							change: null,
							complete: null
						},
						min: 0,
						_create: function() {
							this.oldValue = this.options.value = this._constrainedValue();
							this.element.attr({
								role: "progressbar",
								"aria-valuemin": this.min
							});
							this._addClass("ui-progressbar", "ui-widget ui-widget-content");
							this.valueDiv = te("<div>").appendTo(this.element);
							this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
							this._refreshValue()
						},
						_destroy: function() {
							this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
							this.valueDiv.remove()
						},
						value: function(e) {
							if (e === undefined) return this.options.value;
							this.options.value = this._constrainedValue(e);
							this._refreshValue()
						},
						_constrainedValue: function(e) {
							if (e === undefined) e = this.options.value;
							this.indeterminate = e === false;
							if (typeof e !== "number") e = 0;
							return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, e))
						},
						_setOptions: function(e) {
							var t = e.value;
							delete e.value;
							this._super(e);
							this.options.value = this._constrainedValue(t);
							this._refreshValue()
						},
						_setOption: function(e, t) {
							if (e === "max") t = Math.max(this.min, t);
							this._super(e, t)
						},
						_setOptionDisabled: function(e) {
							this._super(e);
							this.element.attr("aria-disabled", e);
							this._toggleClass(null, "ui-state-disabled", !!e)
						},
						_percentage: function() {
							return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
						},
						_refreshValue: function() {
							var e = this.options.value,
								t = this._percentage();
							this.valueDiv.toggle(this.indeterminate || e > this.min).width(t.toFixed(0) + "%");
							this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
							if (this.indeterminate) {
								this.element.removeAttr("aria-valuenow");
								if (!this.overlayDiv) {
									this.overlayDiv = te("<div>").appendTo(this.valueDiv);
									this._addClass(this.overlayDiv, "ui-progressbar-overlay")
								}
							} else {
								this.element.attr({
									"aria-valuemax": this.options.max,
									"aria-valuenow": e
								});
								if (this.overlayDiv) {
									this.overlayDiv.remove();
									this.overlayDiv = null
								}
							}
							if (this.oldValue !== e) {
								this.oldValue = e;
								this._trigger("change")
							}
							if (e === this.options.max) this._trigger("complete")
						}
					}),
					Ke = te.widget("ui.selectable", te.ui.mouse, {
						version: "1.13.2",
						options: {
							appendTo: "body",
							autoRefresh: true,
							distance: 0,
							filter: "*",
							tolerance: "touch",
							selected: null,
							selecting: null,
							start: null,
							stop: null,
							unselected: null,
							unselecting: null
						},
						_create: function() {
							var n = this;
							this._addClass("ui-selectable");
							this.dragged = false;
							this.refresh = function() {
								n.elementPos = te(n.element[0]).offset();
								n.selectees = te(n.options.filter, n.element[0]);
								n._addClass(n.selectees, "ui-selectee");
								n.selectees.each(function() {
									var e = te(this),
										t = e.offset(),
										i = {
											left: t.left - n.elementPos.left,
											top: t.top - n.elementPos.top
										};
									te.data(this, "selectable-item", {
										element: this,
										$element: e,
										left: i.left,
										top: i.top,
										right: i.left + e.outerWidth(),
										bottom: i.top + e.outerHeight(),
										startselected: false,
										selected: e.hasClass("ui-selected"),
										selecting: e.hasClass("ui-selecting"),
										unselecting: e.hasClass("ui-unselecting")
									})
								})
							};
							this.refresh();
							this._mouseInit();
							this.helper = te("<div>");
							this._addClass(this.helper, "ui-selectable-helper")
						},
						_destroy: function() {
							this.selectees.removeData("selectable-item");
							this._mouseDestroy()
						},
						_mouseStart: function(i) {
							var n = this,
								e = this.options;
							this.opos = [i.pageX, i.pageY];
							this.elementPos = te(this.element[0]).offset();
							if (this.options.disabled) return;
							this.selectees = te(e.filter, this.element[0]);
							this._trigger("start", i);
							te(e.appendTo).append(this.helper);
							this.helper.css({
								left: i.pageX,
								top: i.pageY,
								width: 0,
								height: 0
							});
							if (e.autoRefresh) this.refresh();
							this.selectees.filter(".ui-selected").each(function() {
								var e = te.data(this, "selectable-item");
								e.startselected = true;
								if (!i.metaKey && !i.ctrlKey) {
									n._removeClass(e.$element, "ui-selected");
									e.selected = false;
									n._addClass(e.$element, "ui-unselecting");
									e.unselecting = true;
									n._trigger("unselecting", i, {
										unselecting: e.element
									})
								}
							});
							te(i.target).parents().addBack().each(function() {
								var e, t = te.data(this, "selectable-item");
								if (t) {
									e = !i.metaKey && !i.ctrlKey || !t.$element.hasClass("ui-selected");
									n._removeClass(t.$element, e ? "ui-unselecting" : "ui-selected")._addClass(t.$element, e ? "ui-selecting" : "ui-unselecting");
									t.unselecting = !e;
									t.selecting = e;
									t.selected = e;
									if (e) n._trigger("selecting", i, {
										selecting: t.element
									});
									else n._trigger("unselecting", i, {
										unselecting: t.element
									});
									return false
								}
							})
						},
						_mouseDrag: function(n) {
							this.dragged = true;
							if (this.options.disabled) return;
							var e, s = this,
								a = this.options,
								o = this.opos[0],
								r = this.opos[1],
								l = n.pageX,
								u = n.pageY;
							if (o > l) {
								e = l;
								l = o;
								o = e
							}
							if (r > u) {
								e = u;
								u = r;
								r = e
							}
							this.helper.css({
								left: o,
								top: r,
								width: l - o,
								height: u - r
							});
							this.selectees.each(function() {
								var e = te.data(this, "selectable-item"),
									t = false,
									i = {};
								if (!e || e.element === s.element[0]) return;
								i.left = e.left + s.elementPos.left;
								i.right = e.right + s.elementPos.left;
								i.top = e.top + s.elementPos.top;
								i.bottom = e.bottom + s.elementPos.top;
								if (a.tolerance === "touch") t = !(i.left > l || i.right < o || i.top > u || i.bottom < r);
								else if (a.tolerance === "fit") t = i.left > o && i.right < l && i.top > r && i.bottom < u;
								if (t) {
									if (e.selected) {
										s._removeClass(e.$element, "ui-selected");
										e.selected = false
									}
									if (e.unselecting) {
										s._removeClass(e.$element, "ui-unselecting");
										e.unselecting = false
									}
									if (!e.selecting) {
										s._addClass(e.$element, "ui-selecting");
										e.selecting = true;
										s._trigger("selecting", n, {
											selecting: e.element
										})
									}
								} else {
									if (e.selecting)
										if ((n.metaKey || n.ctrlKey) && e.startselected) {
											s._removeClass(e.$element, "ui-selecting");
											e.selecting = false;
											s._addClass(e.$element, "ui-selected");
											e.selected = true
										} else {
											s._removeClass(e.$element, "ui-selecting");
											e.selecting = false;
											if (e.startselected) {
												s._addClass(e.$element, "ui-unselecting");
												e.unselecting = true
											}
											s._trigger("unselecting", n, {
												unselecting: e.element
											})
										} if (e.selected)
										if (!n.metaKey && !n.ctrlKey && !e.startselected) {
											s._removeClass(e.$element, "ui-selected");
											e.selected = false;
											s._addClass(e.$element, "ui-unselecting");
											e.unselecting = true;
											s._trigger("unselecting", n, {
												unselecting: e.element
											})
										}
								}
							});
							return false
						},
						_mouseStop: function(t) {
							var i = this;
							this.dragged = false;
							te(".ui-unselecting", this.element[0]).each(function() {
								var e = te.data(this, "selectable-item");
								i._removeClass(e.$element, "ui-unselecting");
								e.unselecting = false;
								e.startselected = false;
								i._trigger("unselected", t, {
									unselected: e.element
								})
							});
							te(".ui-selecting", this.element[0]).each(function() {
								var e = te.data(this, "selectable-item");
								i._removeClass(e.$element, "ui-selecting")._addClass(e.$element, "ui-selected");
								e.selecting = false;
								e.selected = true;
								e.startselected = true;
								i._trigger("selected", t, {
									selected: e.element
								})
							});
							this._trigger("stop", t);
							this.helper.remove();
							return false
						}
					}),
					Ze = te.widget("ui.selectmenu", [te.ui.formResetMixin, {
						version: "1.13.2",
						defaultElement: "<select>",
						options: {
							appendTo: null,
							classes: {
								"ui-selectmenu-button-open": "ui-corner-top",
								"ui-selectmenu-button-closed": "ui-corner-all"
							},
							disabled: null,
							icons: {
								button: "ui-icon-triangle-1-s"
							},
							position: {
								my: "left top",
								at: "left bottom",
								collision: "none"
							},
							width: false,
							change: null,
							close: null,
							focus: null,
							open: null,
							select: null
						},
						_create: function() {
							var e = this.element.uniqueId().attr("id");
							this.ids = {
								element: e,
								button: e + "-button",
								menu: e + "-menu"
							};
							this._drawButton();
							this._drawMenu();
							this._bindFormResetHandler();
							this._rendered = false;
							this.menuItems = te()
						},
						_drawButton: function() {
							var e, t = this,
								i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
							this.labels = this.element.labels().attr("for", this.ids.button);
							this._on(this.labels, {
								click: function(e) {
									this.button.trigger("focus");
									e.preventDefault()
								}
							});
							this.element.hide();
							this.button = te("<span>", {
								tabindex: this.options.disabled ? -1 : 0,
								id: this.ids.button,
								role: "combobox",
								"aria-expanded": "false",
								"aria-autocomplete": "list",
								"aria-owns": this.ids.menu,
								"aria-haspopup": "true",
								title: this.element.attr("title")
							}).insertAfter(this.element);
							this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
							e = te("<span>").appendTo(this.button);
							this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
							this.buttonItem = this._renderButtonItem(i).appendTo(this.button);
							if (this.options.width !== false) this._resizeButton();
							this._on(this.button, this._buttonEvents);
							this.button.one("focusin", function() {
								if (!t._rendered) t._refreshMenu()
							})
						},
						_drawMenu: function() {
							var n = this;
							this.menu = te("<ul>", {
								"aria-hidden": "true",
								"aria-labelledby": this.ids.button,
								id: this.ids.menu
							});
							this.menuWrap = te("<div>").append(this.menu);
							this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
							this.menuWrap.appendTo(this._appendTo());
							this.menuInstance = this.menu.menu({
								classes: {
									"ui-menu": "ui-corner-bottom"
								},
								role: "listbox",
								select: function(e, t) {
									e.preventDefault();
									n._setSelection();
									n._select(t.item.data("ui-selectmenu-item"), e)
								},
								focus: function(e, t) {
									var i = t.item.data("ui-selectmenu-item");
									if (n.focusIndex != null && i.index !== n.focusIndex) {
										n._trigger("focus", e, {
											item: i
										});
										if (!n.isOpen) n._select(i, e)
									}
									n.focusIndex = i.index;
									n.button.attr("aria-activedescendant", n.menuItems.eq(i.index).attr("id"))
								}
							}).menu("instance");
							this.menuInstance._off(this.menu, "mouseleave");
							this.menuInstance._closeOnDocumentClick = function() {
								return false
							};
							this.menuInstance._isDivider = function() {
								return false
							}
						},
						refresh: function() {
							this._refreshMenu();
							this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
							if (this.options.width === null) this._resizeButton()
						},
						_refreshMenu: function() {
							var e, t = this.element.find("option");
							this.menu.empty();
							this._parseOptions(t);
							this._renderMenu(this.menu, this.items);
							this.menuInstance.refresh();
							this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
							this._rendered = true;
							if (!t.length) return;
							e = this._getSelectedItem();
							this.menuInstance.focus(null, e);
							this._setAria(e.data("ui-selectmenu-item"));
							this._setOption("disabled", this.element.prop("disabled"))
						},
						open: function(e) {
							if (this.options.disabled) return;
							if (!this._rendered) this._refreshMenu();
							else {
								this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active");
								this.menuInstance.focus(null, this._getSelectedItem())
							}
							if (!this.menuItems.length) return;
							this.isOpen = true;
							this._toggleAttr();
							this._resizeMenu();
							this._position();
							this._on(this.document, this._documentClick);
							this._trigger("open", e)
						},
						_position: function() {
							this.menuWrap.position(te.extend({
								of: this.button
							}, this.options.position))
						},
						close: function(e) {
							if (!this.isOpen) return;
							this.isOpen = false;
							this._toggleAttr();
							this.range = null;
							this._off(this.document);
							this._trigger("close", e)
						},
						widget: function() {
							return this.button
						},
						menuWidget: function() {
							return this.menu
						},
						_renderButtonItem: function(e) {
							var t = te("<span>");
							this._setText(t, e.label);
							this._addClass(t, "ui-selectmenu-text");
							return t
						},
						_renderMenu: function(n, e) {
							var s = this,
								a = "";
							te.each(e, function(e, t) {
								var i;
								if (t.optgroup !== a) {
									i = te("<li>", {
										text: t.optgroup
									});
									s._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (t.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""));
									i.appendTo(n);
									a = t.optgroup
								}
								s._renderItemData(n, t)
							})
						},
						_renderItemData: function(e, t) {
							return this._renderItem(e, t).data("ui-selectmenu-item", t)
						},
						_renderItem: function(e, t) {
							var i = te("<li>"),
								n = te("<div>", {
									title: t.element.attr("title")
								});
							if (t.disabled) this._addClass(i, null, "ui-state-disabled");
							this._setText(n, t.label);
							return i.append(n).appendTo(e)
						},
						_setText: function(e, t) {
							if (t) e.text(t);
							else e.html("&#160;")
						},
						_move: function(e, t) {
							var i, n, s = ".ui-menu-item";
							if (this.isOpen) i = this.menuItems.eq(this.focusIndex).parent("li");
							else {
								i = this.menuItems.eq(this.element[0].selectedIndex).parent("li");
								s += ":not(.ui-state-disabled)"
							}
							if (e === "first" || e === "last") n = i[e === "first" ? "prevAll" : "nextAll"](s).eq(-1);
							else n = i[e + "All"](s).eq(0);
							if (n.length) this.menuInstance.focus(t, n)
						},
						_getSelectedItem: function() {
							return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
						},
						_toggle: function(e) {
							this[this.isOpen ? "close" : "open"](e)
						},
						_setSelection: function() {
							var e;
							if (!this.range) return;
							if (window.getSelection) {
								e = window.getSelection();
								e.removeAllRanges();
								e.addRange(this.range)
							} else this.range.select();
							this.button.trigger("focus")
						},
						_documentClick: {
							mousedown: function(e) {
								if (!this.isOpen) return;
								if (!te(e.target).closest(".ui-selectmenu-menu, #" + te.escapeSelector(this.ids.button)).length) this.close(e)
							}
						},
						_buttonEvents: {
							mousedown: function() {
								var e;
								if (window.getSelection) {
									e = window.getSelection();
									if (e.rangeCount) this.range = e.getRangeAt(0)
								} else this.range = document.selection.createRange()
							},
							click: function(e) {
								this._setSelection();
								this._toggle(e)
							},
							keydown: function(e) {
								var t = true;
								switch (e.keyCode) {
									case te.ui.keyCode.TAB:
									case te.ui.keyCode.ESCAPE:
										this.close(e);
										t = false;
										break;
									case te.ui.keyCode.ENTER:
										if (this.isOpen) this._selectFocusedItem(e);
										break;
									case te.ui.keyCode.UP:
										if (e.altKey) this._toggle(e);
										else this._move("prev", e);
										break;
									case te.ui.keyCode.DOWN:
										if (e.altKey) this._toggle(e);
										else this._move("next", e);
										break;
									case te.ui.keyCode.SPACE:
										if (this.isOpen) this._selectFocusedItem(e);
										else this._toggle(e);
										break;
									case te.ui.keyCode.LEFT:
										this._move("prev", e);
										break;
									case te.ui.keyCode.RIGHT:
										this._move("next", e);
										break;
									case te.ui.keyCode.HOME:
									case te.ui.keyCode.PAGE_UP:
										this._move("first", e);
										break;
									case te.ui.keyCode.END:
									case te.ui.keyCode.PAGE_DOWN:
										this._move("last", e);
										break;
									default:
										this.menu.trigger(e);
										t = false
								}
								if (t) e.preventDefault()
							}
						},
						_selectFocusedItem: function(e) {
							var t = this.menuItems.eq(this.focusIndex).parent("li");
							if (!t.hasClass("ui-state-disabled")) this._select(t.data("ui-selectmenu-item"), e)
						},
						_select: function(e, t) {
							var i = this.element[0].selectedIndex;
							this.element[0].selectedIndex = e.index;
							this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(e));
							this._setAria(e);
							this._trigger("select", t, {
								item: e
							});
							if (e.index !== i) this._trigger("change", t, {
								item: e
							});
							this.close(t)
						},
						_setAria: function(e) {
							var t = this.menuItems.eq(e.index).attr("id");
							this.button.attr({
								"aria-labelledby": t,
								"aria-activedescendant": t
							});
							this.menu.attr("aria-activedescendant", t)
						},
						_setOption: function(e, t) {
							if (e === "icons") {
								var i = this.button.find("span.ui-icon");
								this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button)
							}
							this._super(e, t);
							if (e === "appendTo") this.menuWrap.appendTo(this._appendTo());
							if (e === "width") this._resizeButton()
						},
						_setOptionDisabled: function(e) {
							this._super(e);
							this.menuInstance.option("disabled", e);
							this.button.attr("aria-disabled", e);
							this._toggleClass(this.button, null, "ui-state-disabled", e);
							this.element.prop("disabled", e);
							if (e) {
								this.button.attr("tabindex", -1);
								this.close()
							} else this.button.attr("tabindex", 0)
						},
						_appendTo: function() {
							var e = this.options.appendTo;
							if (e) e = e.jquery || e.nodeType ? te(e) : this.document.find(e).eq(0);
							if (!e || !e[0]) e = this.element.closest(".ui-front, dialog");
							if (!e.length) e = this.document[0].body;
							return e
						},
						_toggleAttr: function() {
							this.button.attr("aria-expanded", this.isOpen);
							this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
							this.menu.attr("aria-hidden", !this.isOpen)
						},
						_resizeButton: function() {
							var e = this.options.width;
							if (e === false) {
								this.button.css("width", "");
								return
							}
							if (e === null) {
								e = this.element.show().outerWidth();
								this.element.hide()
							}
							this.button.outerWidth(e)
						},
						_resizeMenu: function() {
							this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
						},
						_getCreateOptions: function() {
							var e = this._super();
							e.disabled = this.element.prop("disabled");
							return e
						},
						_parseOptions: function(e) {
							var i = this,
								n = [];
							e.each(function(e, t) {
								if (t.hidden) return;
								n.push(i._parseOption(te(t), e))
							});
							this.items = n
						},
						_parseOption: function(e, t) {
							var i = e.parent("optgroup");
							return {
								element: e,
								index: t,
								value: e.val(),
								label: e.text(),
								optgroup: i.attr("label") || "",
								disabled: i.prop("disabled") || e.prop("disabled")
							}
						},
						_destroy: function() {
							this._unbindFormResetHandler();
							this.menuWrap.remove();
							this.button.remove();
							this.element.show();
							this.element.removeUniqueId();
							this.labels.attr("for", this.ids.element)
						}
					}]),
					Qe = te.widget("ui.slider", te.ui.mouse, {
						version: "1.13.2",
						widgetEventPrefix: "slide",
						options: {
							animate: false,
							classes: {
								"ui-slider": "ui-corner-all",
								"ui-slider-handle": "ui-corner-all",
								"ui-slider-range": "ui-corner-all ui-widget-header"
							},
							distance: 0,
							max: 100,
							min: 0,
							orientation: "horizontal",
							range: false,
							step: 1,
							value: 0,
							values: null,
							change: null,
							slide: null,
							start: null,
							stop: null
						},
						numPages: 5,
						_create: function() {
							this._keySliding = false;
							this._mouseSliding = false;
							this._animateOff = true;
							this._handleIndex = null;
							this._detectOrientation();
							this._mouseInit();
							this._calculateNewMax();
							this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
							this._refresh();
							this._animateOff = false
						},
						_refresh: function() {
							this._createRange();
							this._createHandles();
							this._setupEvents();
							this._refreshValue()
						},
						_createHandles: function() {
							var e, t, i = this.options,
								n = this.element.find(".ui-slider-handle"),
								s = "<span tabindex='0'></span>",
								a = [];
							t = i.values && i.values.length || 1;
							if (n.length > t) {
								n.slice(t).remove();
								n = n.slice(0, t)
							}
							for (e = n.length; e < t; e++) a.push(s);
							this.handles = n.add(te(a.join("")).appendTo(this.element));
							this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
							this.handle = this.handles.eq(0);
							this.handles.each(function(e) {
								te(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
							})
						},
						_createRange: function() {
							var e = this.options;
							if (e.range) {
								if (e.range === true)
									if (!e.values) e.values = [this._valueMin(), this._valueMin()];
									else if (e.values.length && e.values.length !== 2) e.values = [e.values[0], e.values[0]];
								else if (Array.isArray(e.values)) e.values = e.values.slice(0);
								if (!this.range || !this.range.length) {
									this.range = te("<div>").appendTo(this.element);
									this._addClass(this.range, "ui-slider-range")
								} else {
									this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max");
									this.range.css({
										left: "",
										bottom: ""
									})
								}
								if (e.range === "min" || e.range === "max") this._addClass(this.range, "ui-slider-range-" + e.range)
							} else {
								if (this.range) this.range.remove();
								this.range = null
							}
						},
						_setupEvents: function() {
							this._off(this.handles);
							this._on(this.handles, this._handleEvents);
							this._hoverable(this.handles);
							this._focusable(this.handles)
						},
						_destroy: function() {
							this.handles.remove();
							if (this.range) this.range.remove();
							this._mouseDestroy()
						},
						_mouseCapture: function(e) {
							var t, i, n, s, a, o, r, l, u = this,
								c = this.options;
							if (c.disabled) return false;
							this.elementSize = {
								width: this.element.outerWidth(),
								height: this.element.outerHeight()
							};
							this.elementOffset = this.element.offset();
							t = {
								x: e.pageX,
								y: e.pageY
							};
							i = this._normValueFromMouse(t);
							n = this._valueMax() - this._valueMin() + 1;
							this.handles.each(function(e) {
								var t = Math.abs(i - u.values(e));
								if (n > t || n === t && (e === u._lastChangedValue || u.values(e) === c.min)) {
									n = t;
									s = te(this);
									a = e
								}
							});
							o = this._start(e, a);
							if (o === false) return false;
							this._mouseSliding = true;
							this._handleIndex = a;
							this._addClass(s, null, "ui-state-active");
							s.trigger("focus");
							r = s.offset();
							l = !te(e.target).parents().addBack().is(".ui-slider-handle");
							this._clickOffset = l ? {
								left: 0,
								top: 0
							} : {
								left: e.pageX - r.left - s.width() / 2,
								top: e.pageY - r.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
							};
							if (!this.handles.hasClass("ui-state-hover")) this._slide(e, a, i);
							this._animateOff = true;
							return true
						},
						_mouseStart: function() {
							return true
						},
						_mouseDrag: function(e) {
							var t = {
									x: e.pageX,
									y: e.pageY
								},
								i = this._normValueFromMouse(t);
							this._slide(e, this._handleIndex, i);
							return false
						},
						_mouseStop: function(e) {
							this._removeClass(this.handles, null, "ui-state-active");
							this._mouseSliding = false;
							this._stop(e, this._handleIndex);
							this._change(e, this._handleIndex);
							this._handleIndex = null;
							this._clickOffset = null;
							this._animateOff = false;
							return false
						},
						_detectOrientation: function() {
							this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
						},
						_normValueFromMouse: function(e) {
							var t, i, n, s, a;
							if (this.orientation === "horizontal") {
								t = this.elementSize.width;
								i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
							} else {
								t = this.elementSize.height;
								i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
							}
							n = i / t;
							if (n > 1) n = 1;
							if (n < 0) n = 0;
							if (this.orientation === "vertical") n = 1 - n;
							s = this._valueMax() - this._valueMin();
							a = this._valueMin() + n * s;
							return this._trimAlignValue(a)
						},
						_uiHash: function(e, t, i) {
							var n = {
								handle: this.handles[e],
								handleIndex: e,
								value: t !== undefined ? t : this.value()
							};
							if (this._hasMultipleValues()) {
								n.value = t !== undefined ? t : this.values(e);
								n.values = i || this.values()
							}
							return n
						},
						_hasMultipleValues: function() {
							return this.options.values && this.options.values.length
						},
						_start: function(e, t) {
							return this._trigger("start", e, this._uiHash(t))
						},
						_slide: function(e, t, i) {
							var n, s, a = this.value(),
								o = this.values();
							if (this._hasMultipleValues()) {
								s = this.values(t ? 0 : 1);
								a = this.values(t);
								if (this.options.values.length === 2 && this.options.range === true) i = t === 0 ? Math.min(s, i) : Math.max(s, i);
								o[t] = i
							}
							if (i === a) return;
							n = this._trigger("slide", e, this._uiHash(t, i, o));
							if (n === false) return;
							if (this._hasMultipleValues()) this.values(t, i);
							else this.value(i)
						},
						_stop: function(e, t) {
							this._trigger("stop", e, this._uiHash(t))
						},
						_change: function(e, t) {
							if (!this._keySliding && !this._mouseSliding) {
								this._lastChangedValue = t;
								this._trigger("change", e, this._uiHash(t))
							}
						},
						value: function(e) {
							if (arguments.length) {
								this.options.value = this._trimAlignValue(e);
								this._refreshValue();
								this._change(null, 0);
								return
							}
							return this._value()
						},
						values: function(e, t) {
							var i, n, s;
							if (arguments.length > 1) {
								this.options.values[e] = this._trimAlignValue(t);
								this._refreshValue();
								this._change(null, e);
								return
							}
							if (arguments.length)
								if (Array.isArray(arguments[0])) {
									i = this.options.values;
									n = arguments[0];
									for (s = 0; s < i.length; s += 1) {
										i[s] = this._trimAlignValue(n[s]);
										this._change(null, s)
									}
									this._refreshValue()
								} else if (this._hasMultipleValues()) return this._values(e);
							else return this.value();
							else return this._values()
						},
						_setOption: function(e, t) {
							var i, n = 0;
							if (e === "range" && this.options.range === true)
								if (t === "min") {
									this.options.value = this._values(0);
									this.options.values = null
								} else if (t === "max") {
								this.options.value = this._values(this.options.values.length - 1);
								this.options.values = null
							}
							if (Array.isArray(this.options.values)) n = this.options.values.length;
							this._super(e, t);
							switch (e) {
								case "orientation":
									this._detectOrientation();
									this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
									this._refreshValue();
									if (this.options.range) this._refreshRange(t);
									this.handles.css(t === "horizontal" ? "bottom" : "left", "");
									break;
								case "value":
									this._animateOff = true;
									this._refreshValue();
									this._change(null, 0);
									this._animateOff = false;
									break;
								case "values":
									this._animateOff = true;
									this._refreshValue();
									for (i = n - 1; i >= 0; i--) this._change(null, i);
									this._animateOff = false;
									break;
								case "step":
								case "min":
								case "max":
									this._animateOff = true;
									this._calculateNewMax();
									this._refreshValue();
									this._animateOff = false;
									break;
								case "range":
									this._animateOff = true;
									this._refresh();
									this._animateOff = false;
									break
							}
						},
						_setOptionDisabled: function(e) {
							this._super(e);
							this._toggleClass(null, "ui-state-disabled", !!e)
						},
						_value: function() {
							var e = this.options.value;
							e = this._trimAlignValue(e);
							return e
						},
						_values: function(e) {
							var t, i, n;
							if (arguments.length) {
								t = this.options.values[e];
								t = this._trimAlignValue(t);
								return t
							} else if (this._hasMultipleValues()) {
								i = this.options.values.slice();
								for (n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
								return i
							} else return []
						},
						_trimAlignValue: function(e) {
							if (e <= this._valueMin()) return this._valueMin();
							if (e >= this._valueMax()) return this._valueMax();
							var t = this.options.step > 0 ? this.options.step : 1,
								i = (e - this._valueMin()) % t,
								n = e - i;
							if (Math.abs(i) * 2 >= t) n += i > 0 ? t : -t;
							return parseFloat(n.toFixed(5))
						},
						_calculateNewMax: function() {
							var e = this.options.max,
								t = this._valueMin(),
								i = this.options.step,
								n = Math.round((e - t) / i) * i;
							e = n + t;
							if (e > this.options.max) e -= i;
							this.max = parseFloat(e.toFixed(this._precision()))
						},
						_precision: function() {
							var e = this._precisionOf(this.options.step);
							if (this.options.min !== null) e = Math.max(e, this._precisionOf(this.options.min));
							return e
						},
						_precisionOf: function(e) {
							var t = e.toString(),
								i = t.indexOf(".");
							return i === -1 ? 0 : t.length - i - 1
						},
						_valueMin: function() {
							return this.options.min
						},
						_valueMax: function() {
							return this.max
						},
						_refreshRange: function(e) {
							if (e === "vertical") this.range.css({
								width: "",
								left: ""
							});
							if (e === "horizontal") this.range.css({
								height: "",
								bottom: ""
							})
						},
						_refreshValue: function() {
							var t, i, e, n, s, a = this.options.range,
								o = this.options,
								r = this,
								l = !this._animateOff ? o.animate : false,
								u = {};
							if (this._hasMultipleValues()) this.handles.each(function(e) {
								i = (r.values(e) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
								u[r.orientation === "horizontal" ? "left" : "bottom"] = i + "%";
								te(this).stop(1, 1)[l ? "animate" : "css"](u, o.animate);
								if (r.options.range === true)
									if (r.orientation === "horizontal") {
										if (e === 0) r.range.stop(1, 1)[l ? "animate" : "css"]({
											left: i + "%"
										}, o.animate);
										if (e === 1) r.range[l ? "animate" : "css"]({
											width: i - t + "%"
										}, {
											queue: false,
											duration: o.animate
										})
									} else {
										if (e === 0) r.range.stop(1, 1)[l ? "animate" : "css"]({
											bottom: i + "%"
										}, o.animate);
										if (e === 1) r.range[l ? "animate" : "css"]({
											height: i - t + "%"
										}, {
											queue: false,
											duration: o.animate
										})
									} t = i
							});
							else {
								e = this.value();
								n = this._valueMin();
								s = this._valueMax();
								i = s !== n ? (e - n) / (s - n) * 100 : 0;
								u[this.orientation === "horizontal" ? "left" : "bottom"] = i + "%";
								this.handle.stop(1, 1)[l ? "animate" : "css"](u, o.animate);
								if (a === "min" && this.orientation === "horizontal") this.range.stop(1, 1)[l ? "animate" : "css"]({
									width: i + "%"
								}, o.animate);
								if (a === "max" && this.orientation === "horizontal") this.range.stop(1, 1)[l ? "animate" : "css"]({
									width: 100 - i + "%"
								}, o.animate);
								if (a === "min" && this.orientation === "vertical") this.range.stop(1, 1)[l ? "animate" : "css"]({
									height: i + "%"
								}, o.animate);
								if (a === "max" && this.orientation === "vertical") this.range.stop(1, 1)[l ? "animate" : "css"]({
									height: 100 - i + "%"
								}, o.animate)
							}
						},
						_handleEvents: {
							keydown: function(e) {
								var t, i, n, s, a = te(e.target).data("ui-slider-handle-index");
								switch (e.keyCode) {
									case te.ui.keyCode.HOME:
									case te.ui.keyCode.END:
									case te.ui.keyCode.PAGE_UP:
									case te.ui.keyCode.PAGE_DOWN:
									case te.ui.keyCode.UP:
									case te.ui.keyCode.RIGHT:
									case te.ui.keyCode.DOWN:
									case te.ui.keyCode.LEFT:
										e.preventDefault();
										if (!this._keySliding) {
											this._keySliding = true;
											this._addClass(te(e.target), null, "ui-state-active");
											t = this._start(e, a);
											if (t === false) return
										}
										break
								}
								s = this.options.step;
								if (this._hasMultipleValues()) i = n = this.values(a);
								else i = n = this.value();
								switch (e.keyCode) {
									case te.ui.keyCode.HOME:
										n = this._valueMin();
										break;
									case te.ui.keyCode.END:
										n = this._valueMax();
										break;
									case te.ui.keyCode.PAGE_UP:
										n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
										break;
									case te.ui.keyCode.PAGE_DOWN:
										n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
										break;
									case te.ui.keyCode.UP:
									case te.ui.keyCode.RIGHT:
										if (i === this._valueMax()) return;
										n = this._trimAlignValue(i + s);
										break;
									case te.ui.keyCode.DOWN:
									case te.ui.keyCode.LEFT:
										if (i === this._valueMin()) return;
										n = this._trimAlignValue(i - s);
										break
								}
								this._slide(e, a, n)
							},
							keyup: function(e) {
								var t = te(e.target).data("ui-slider-handle-index");
								if (this._keySliding) {
									this._keySliding = false;
									this._stop(e, t);
									this._change(e, t);
									this._removeClass(te(e.target), null, "ui-state-active")
								}
							}
						}
					}),
					Je = te.widget("ui.sortable", te.ui.mouse, {
						version: "1.13.2",
						widgetEventPrefix: "sort",
						ready: false,
						options: {
							appendTo: "parent",
							axis: false,
							connectWith: false,
							containment: false,
							cursor: "auto",
							cursorAt: false,
							dropOnEmpty: true,
							forcePlaceholderSize: false,
							forceHelperSize: false,
							grid: false,
							handle: false,
							helper: "original",
							items: "> *",
							opacity: false,
							placeholder: false,
							revert: false,
							scroll: true,
							scrollSensitivity: 20,
							scrollSpeed: 20,
							scope: "default",
							tolerance: "intersect",
							zIndex: 1e3,
							activate: null,
							beforeStop: null,
							change: null,
							deactivate: null,
							out: null,
							over: null,
							receive: null,
							remove: null,
							sort: null,
							start: null,
							stop: null,
							update: null
						},
						_isOverAxis: function(e, t, i) {
							return e >= t && e < t + i
						},
						_isFloating: function(e) {
							return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
						},
						_create: function() {
							this.containerCache = {};
							this._addClass("ui-sortable");
							this.refresh();
							this.offset = this.element.offset();
							this._mouseInit();
							this._setHandleClassName();
							this.ready = true
						},
						_setOption: function(e, t) {
							this._super(e, t);
							if (e === "handle") this._setHandleClassName()
						},
						_setHandleClassName: function() {
							var e = this;
							this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
							te.each(this.items, function() {
								e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
							})
						},
						_destroy: function() {
							this._mouseDestroy();
							for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
							return this
						},
						_mouseCapture: function(e, t) {
							var i = null,
								n = false,
								s = this;
							if (this.reverting) return false;
							if (this.options.disabled || this.options.type === "static") return false;
							this._refreshItems(e);
							te(e.target).parents().each(function() {
								if (te.data(this, s.widgetName + "-item") === s) {
									i = te(this);
									return false
								}
							});
							if (te.data(e.target, s.widgetName + "-item") === s) i = te(e.target);
							if (!i) return false;
							if (this.options.handle && !t) {
								te(this.options.handle, i).find("*").addBack().each(function() {
									if (this === e.target) n = true
								});
								if (!n) return false
							}
							this.currentItem = i;
							this._removeCurrentsFromItems();
							return true
						},
						_mouseStart: function(e, t, i) {
							var n, s, a = this.options;
							this.currentContainer = this;
							this.refreshPositions();
							this.appendTo = te(a.appendTo !== "parent" ? a.appendTo : this.currentItem.parent());
							this.helper = this._createHelper(e);
							this._cacheHelperProportions();
							this._cacheMargins();
							this.offset = this.currentItem.offset();
							this.offset = {
								top: this.offset.top - this.margins.top,
								left: this.offset.left - this.margins.left
							};
							te.extend(this.offset, {
								click: {
									left: e.pageX - this.offset.left,
									top: e.pageY - this.offset.top
								},
								relative: this._getRelativeOffset()
							});
							this.helper.css("position", "absolute");
							this.cssPosition = this.helper.css("position");
							if (a.cursorAt) this._adjustOffsetFromHelper(a.cursorAt);
							this.domPosition = {
								prev: this.currentItem.prev()[0],
								parent: this.currentItem.parent()[0]
							};
							if (this.helper[0] !== this.currentItem[0]) this.currentItem.hide();
							this._createPlaceholder();
							this.scrollParent = this.placeholder.scrollParent();
							te.extend(this.offset, {
								parent: this._getParentOffset()
							});
							if (a.containment) this._setContainment();
							if (a.cursor && a.cursor !== "auto") {
								s = this.document.find("body");
								this.storedCursor = s.css("cursor");
								s.css("cursor", a.cursor);
								this.storedStylesheet = te("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(s)
							}
							if (a.zIndex) {
								if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex");
								this.helper.css("zIndex", a.zIndex)
							}
							if (a.opacity) {
								if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity");
								this.helper.css("opacity", a.opacity)
							}
							if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") this.overflowOffset = this.scrollParent.offset();
							this._trigger("start", e, this._uiHash());
							if (!this._preserveHelperProportions) this._cacheHelperProportions();
							if (!i)
								for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
							if (te.ui.ddmanager) te.ui.ddmanager.current = this;
							if (te.ui.ddmanager && !a.dropBehaviour) te.ui.ddmanager.prepareOffsets(this, e);
							this.dragging = true;
							this._addClass(this.helper, "ui-sortable-helper");
							if (!this.helper.parent().is(this.appendTo)) {
								this.helper.detach().appendTo(this.appendTo);
								this.offset.parent = this._getParentOffset()
							}
							this.position = this.originalPosition = this._generatePosition(e);
							this.originalPageX = e.pageX;
							this.originalPageY = e.pageY;
							this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute");
							this._mouseDrag(e);
							return true
						},
						_scroll: function(e) {
							var t = this.options,
								i = false;
							if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
								if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < t.scrollSensitivity) this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + t.scrollSpeed;
								else if (e.pageY - this.overflowOffset.top < t.scrollSensitivity) this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - t.scrollSpeed;
								if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < t.scrollSensitivity) this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + t.scrollSpeed;
								else if (e.pageX - this.overflowOffset.left < t.scrollSensitivity) this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - t.scrollSpeed
							} else {
								if (e.pageY - this.document.scrollTop() < t.scrollSensitivity) i = this.document.scrollTop(this.document.scrollTop() - t.scrollSpeed);
								else if (this.window.height() - (e.pageY - this.document.scrollTop()) < t.scrollSensitivity) i = this.document.scrollTop(this.document.scrollTop() + t.scrollSpeed);
								if (e.pageX - this.document.scrollLeft() < t.scrollSensitivity) i = this.document.scrollLeft(this.document.scrollLeft() - t.scrollSpeed);
								else if (this.window.width() - (e.pageX - this.document.scrollLeft()) < t.scrollSensitivity) i = this.document.scrollLeft(this.document.scrollLeft() + t.scrollSpeed)
							}
							return i
						},
						_mouseDrag: function(e) {
							var t, i, n, s, a = this.options;
							this.position = this._generatePosition(e);
							this.positionAbs = this._convertPositionTo("absolute");
							if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
							if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
							if (a.scroll)
								if (this._scroll(e) !== false) {
									this._refreshItemPositions(true);
									if (te.ui.ddmanager && !a.dropBehaviour) te.ui.ddmanager.prepareOffsets(this, e)
								} this.dragDirection = {
								vertical: this._getDragVerticalDirection(),
								horizontal: this._getDragHorizontalDirection()
							};
							for (t = this.items.length - 1; t >= 0; t--) {
								i = this.items[t];
								n = i.item[0];
								s = this._intersectsWithPointer(i);
								if (!s) continue;
								if (i.instance !== this.currentContainer) continue;
								if (n !== this.currentItem[0] && this.placeholder[s === 1 ? "next" : "prev"]()[0] !== n && !te.contains(this.placeholder[0], n) && (this.options.type === "semi-dynamic" ? !te.contains(this.element[0], n) : true)) {
									this.direction = s === 1 ? "down" : "up";
									if (this.options.tolerance === "pointer" || this._intersectsWithSides(i)) this._rearrange(e, i);
									else break;
									this._trigger("change", e, this._uiHash());
									break
								}
							}
							this._contactContainers(e);
							if (te.ui.ddmanager) te.ui.ddmanager.drag(this, e);
							this._trigger("sort", e, this._uiHash());
							this.lastPositionAbs = this.positionAbs;
							return false
						},
						_mouseStop: function(e, t) {
							if (!e) return;
							if (te.ui.ddmanager && !this.options.dropBehaviour) te.ui.ddmanager.drop(this, e);
							if (this.options.revert) {
								var i = this,
									n = this.placeholder.offset(),
									s = this.options.axis,
									a = {};
								if (!s || s === "x") a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
								if (!s || s === "y") a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
								this.reverting = true;
								te(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
									i._clear(e)
								})
							} else this._clear(e, t);
							return false
						},
						cancel: function() {
							if (this.dragging) {
								this._mouseUp(new te.Event("mouseup", {
									target: null
								}));
								if (this.options.helper === "original") {
									this.currentItem.css(this._storedCSS);
									this._removeClass(this.currentItem, "ui-sortable-helper")
								} else this.currentItem.show();
								for (var e = this.containers.length - 1; e >= 0; e--) {
									this.containers[e]._trigger("deactivate", null, this._uiHash(this));
									if (this.containers[e].containerCache.over) {
										this.containers[e]._trigger("out", null, this._uiHash(this));
										this.containers[e].containerCache.over = 0
									}
								}
							}
							if (this.placeholder) {
								if (this.placeholder[0].parentNode) this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
								if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) this.helper.remove();
								te.extend(this, {
									helper: null,
									dragging: false,
									reverting: false,
									_noFinalSort: null
								});
								if (this.domPosition.prev) te(this.domPosition.prev).after(this.currentItem);
								else te(this.domPosition.parent).prepend(this.currentItem)
							}
							return this
						},
						serialize: function(t) {
							var e = this._getItemsAsjQuery(t && t.connected),
								i = [];
							t = t || {};
							te(e).each(function() {
								var e = (te(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
								if (e) i.push((t.key || e[1] + "[]") + "=" + (t.key && t.expression ? e[1] : e[2]))
							});
							if (!i.length && t.key) i.push(t.key + "=");
							return i.join("&")
						},
						toArray: function(e) {
							var t = this._getItemsAsjQuery(e && e.connected),
								i = [];
							e = e || {};
							t.each(function() {
								i.push(te(e.item || this).attr(e.attribute || "id") || "")
							});
							return i
						},
						_intersectsWith: function(e) {
							var t = this.positionAbs.left,
								i = t + this.helperProportions.width,
								n = this.positionAbs.top,
								s = n + this.helperProportions.height,
								a = e.left,
								o = a + e.width,
								r = e.top,
								l = r + e.height,
								u = this.offset.click.top,
								c = this.offset.click.left,
								h = this.options.axis === "x" || n + u > r && n + u < l,
								d = this.options.axis === "y" || t + c > a && t + c < o,
								f = h && d;
							if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"]) return f;
							else return a < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
						},
						_intersectsWithPointer: function(e) {
							var t, i, n = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
								s = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
								a = n && s;
							if (!a) return false;
							t = this.dragDirection.vertical;
							i = this.dragDirection.horizontal;
							return this.floating ? i === "right" || t === "down" ? 2 : 1 : t && (t === "down" ? 2 : 1)
						},
						_intersectsWithSides: function(e) {
							var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
								i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
								n = this.dragDirection.vertical,
								s = this.dragDirection.horizontal;
							if (this.floating && s) return s === "right" && i || s === "left" && !i;
							else return n && (n === "down" && t || n === "up" && !t)
						},
						_getDragVerticalDirection: function() {
							var e = this.positionAbs.top - this.lastPositionAbs.top;
							return e !== 0 && (e > 0 ? "down" : "up")
						},
						_getDragHorizontalDirection: function() {
							var e = this.positionAbs.left - this.lastPositionAbs.left;
							return e !== 0 && (e > 0 ? "right" : "left")
						},
						refresh: function(e) {
							this._refreshItems(e);
							this._setHandleClassName();
							this.refreshPositions();
							return this
						},
						_connectWith: function() {
							var e = this.options;
							return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
						},
						_getItemsAsjQuery: function(e) {
							var t, i, n, s, a = [],
								o = [],
								r = this._connectWith();
							if (r && e)
								for (t = r.length - 1; t >= 0; t--) {
									n = te(r[t], this.document[0]);
									for (i = n.length - 1; i >= 0; i--) {
										s = te.data(n[i], this.widgetFullName);
										if (s && s !== this && !s.options.disabled) o.push([typeof s.options.items === "function" ? s.options.items.call(s.element) : te(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s])
									}
								}
							o.push([typeof this.options.items === "function" ? this.options.items.call(this.element, null, {
								options: this.options,
								item: this.currentItem
							}) : te(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

							function l() {
								a.push(this)
							}
							for (t = o.length - 1; t >= 0; t--) o[t][0].each(l);
							return te(a)
						},
						_removeCurrentsFromItems: function() {
							var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
							this.items = te.grep(this.items, function(e) {
								for (var t = 0; t < i.length; t++)
									if (i[t] === e.item[0]) return false;
								return true
							})
						},
						_refreshItems: function(e) {
							this.items = [];
							this.containers = [this];
							var t, i, n, s, a, o, r, l, u = this.items,
								c = [
									[typeof this.options.items === "function" ? this.options.items.call(this.element[0], e, {
										item: this.currentItem
									}) : te(this.options.items, this.element), this]
								],
								h = this._connectWith();
							if (h && this.ready)
								for (t = h.length - 1; t >= 0; t--) {
									n = te(h[t], this.document[0]);
									for (i = n.length - 1; i >= 0; i--) {
										s = te.data(n[i], this.widgetFullName);
										if (s && s !== this && !s.options.disabled) {
											c.push([typeof s.options.items === "function" ? s.options.items.call(s.element[0], e, {
												item: this.currentItem
											}) : te(s.options.items, s.element), s]);
											this.containers.push(s)
										}
									}
								}
							for (t = c.length - 1; t >= 0; t--) {
								a = c[t][1];
								o = c[t][0];
								for (i = 0, l = o.length; i < l; i++) {
									r = te(o[i]);
									r.data(this.widgetName + "-item", a);
									u.push({
										item: r,
										instance: a,
										width: 0,
										height: 0,
										left: 0,
										top: 0
									})
								}
							}
						},
						_refreshItemPositions: function(e) {
							var t, i, n, s;
							for (t = this.items.length - 1; t >= 0; t--) {
								i = this.items[t];
								if (this.currentContainer && i.instance !== this.currentContainer && i.item[0] !== this.currentItem[0]) continue;
								n = this.options.toleranceElement ? te(this.options.toleranceElement, i.item) : i.item;
								if (!e) {
									i.width = n.outerWidth();
									i.height = n.outerHeight()
								}
								s = n.offset();
								i.left = s.left;
								i.top = s.top
							}
						},
						refreshPositions: function(e) {
							this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false;
							if (this.offsetParent && this.helper) this.offset.parent = this._getParentOffset();
							this._refreshItemPositions(e);
							var t, i;
							if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
							else
								for (t = this.containers.length - 1; t >= 0; t--) {
									i = this.containers[t].element.offset();
									this.containers[t].containerCache.left = i.left;
									this.containers[t].containerCache.top = i.top;
									this.containers[t].containerCache.width = this.containers[t].element.outerWidth();
									this.containers[t].containerCache.height = this.containers[t].element.outerHeight()
								}
							return this
						},
						_createPlaceholder: function(i) {
							i = i || this;
							var n, s, a = i.options;
							if (!a.placeholder || a.placeholder.constructor === String) {
								n = a.placeholder;
								s = i.currentItem[0].nodeName.toLowerCase();
								a.placeholder = {
									element: function() {
										var e = te("<" + s + ">", i.document[0]);
										i._addClass(e, "ui-sortable-placeholder", n || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper");
										if (s === "tbody") i._createTrPlaceholder(i.currentItem.find("tr").eq(0), te("<tr>", i.document[0]).appendTo(e));
										else if (s === "tr") i._createTrPlaceholder(i.currentItem, e);
										else if (s === "img") e.attr("src", i.currentItem.attr("src"));
										if (!n) e.css("visibility", "hidden");
										return e
									},
									update: function(e, t) {
										if (n && !a.forcePlaceholderSize) return;
										if (!t.height() || a.forcePlaceholderSize && (s === "tbody" || s === "tr")) t.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10));
										if (!t.width()) t.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10))
									}
								}
							}
							i.placeholder = te(a.placeholder.element.call(i.element, i.currentItem));
							i.currentItem.after(i.placeholder);
							a.placeholder.update(i, i.placeholder)
						},
						_createTrPlaceholder: function(e, t) {
							var i = this;
							e.children().each(function() {
								te("<td>&#160;</td>", i.document[0]).attr("colspan", te(this).attr("colspan") || 1).appendTo(t)
							})
						},
						_contactContainers: function(e) {
							var t, i, n, s, a, o, r, l, u, c, h = null,
								d = null;
							for (t = this.containers.length - 1; t >= 0; t--) {
								if (te.contains(this.currentItem[0], this.containers[t].element[0])) continue;
								if (this._intersectsWith(this.containers[t].containerCache)) {
									if (h && te.contains(this.containers[t].element[0], h.element[0])) continue;
									h = this.containers[t];
									d = t
								} else if (this.containers[t].containerCache.over) {
									this.containers[t]._trigger("out", e, this._uiHash(this));
									this.containers[t].containerCache.over = 0
								}
							}
							if (!h) return;
							if (this.containers.length === 1) {
								if (!this.containers[d].containerCache.over) {
									this.containers[d]._trigger("over", e, this._uiHash(this));
									this.containers[d].containerCache.over = 1
								}
							} else {
								n = 1e4;
								s = null;
								u = h.floating || this._isFloating(this.currentItem);
								a = u ? "left" : "top";
								o = u ? "width" : "height";
								c = u ? "pageX" : "pageY";
								for (i = this.items.length - 1; i >= 0; i--) {
									if (!te.contains(this.containers[d].element[0], this.items[i].item[0])) continue;
									if (this.items[i].item[0] === this.currentItem[0]) continue;
									r = this.items[i].item.offset()[a];
									l = false;
									if (e[c] - r > this.items[i][o] / 2) l = true;
									if (Math.abs(e[c] - r) < n) {
										n = Math.abs(e[c] - r);
										s = this.items[i];
										this.direction = l ? "up" : "down"
									}
								}
								if (!s && !this.options.dropOnEmpty) return;
								if (this.currentContainer === this.containers[d]) {
									if (!this.currentContainer.containerCache.over) {
										this.containers[d]._trigger("over", e, this._uiHash());
										this.currentContainer.containerCache.over = 1
									}
									return
								}
								if (s) this._rearrange(e, s, null, true);
								else this._rearrange(e, null, this.containers[d].element, true);
								this._trigger("change", e, this._uiHash());
								this.containers[d]._trigger("change", e, this._uiHash(this));
								this.currentContainer = this.containers[d];
								this.options.placeholder.update(this.currentContainer, this.placeholder);
								this.scrollParent = this.placeholder.scrollParent();
								if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") this.overflowOffset = this.scrollParent.offset();
								this.containers[d]._trigger("over", e, this._uiHash(this));
								this.containers[d].containerCache.over = 1
							}
						},
						_createHelper: function(e) {
							var t = this.options,
								i = typeof t.helper === "function" ? te(t.helper.apply(this.element[0], [e, this.currentItem])) : t.helper === "clone" ? this.currentItem.clone() : this.currentItem;
							if (!i.parents("body").length) this.appendTo[0].appendChild(i[0]);
							if (i[0] === this.currentItem[0]) this._storedCSS = {
								width: this.currentItem[0].style.width,
								height: this.currentItem[0].style.height,
								position: this.currentItem.css("position"),
								top: this.currentItem.css("top"),
								left: this.currentItem.css("left")
							};
							if (!i[0].style.width || t.forceHelperSize) i.width(this.currentItem.width());
							if (!i[0].style.height || t.forceHelperSize) i.height(this.currentItem.height());
							return i
						},
						_adjustOffsetFromHelper: function(e) {
							if (typeof e === "string") e = e.split(" ");
							if (Array.isArray(e)) e = {
								left: +e[0],
								top: +e[1] || 0
							};
							if ("left" in e) this.offset.click.left = e.left + this.margins.left;
							if ("right" in e) this.offset.click.left = this.helperProportions.width - e.right + this.margins.left;
							if ("top" in e) this.offset.click.top = e.top + this.margins.top;
							if ("bottom" in e) this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
						},
						_getParentOffset: function() {
							this.offsetParent = this.helper.offsetParent();
							var e = this.offsetParent.offset();
							if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && te.contains(this.scrollParent[0], this.offsetParent[0])) {
								e.left += this.scrollParent.scrollLeft();
								e.top += this.scrollParent.scrollTop()
							}
							if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && te.ui.ie) e = {
								top: 0,
								left: 0
							};
							return {
								top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
								left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
							}
						},
						_getRelativeOffset: function() {
							if (this.cssPosition === "relative") {
								var e = this.currentItem.position();
								return {
									top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
									left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
								}
							} else return {
								top: 0,
								left: 0
							}
						},
						_cacheMargins: function() {
							this.margins = {
								left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
								top: parseInt(this.currentItem.css("marginTop"), 10) || 0
							}
						},
						_cacheHelperProportions: function() {
							this.helperProportions = {
								width: this.helper.outerWidth(),
								height: this.helper.outerHeight()
							}
						},
						_setContainment: function() {
							var e, t, i, n = this.options;
							if (n.containment === "parent") n.containment = this.helper[0].parentNode;
							if (n.containment === "document" || n.containment === "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (n.containment === "document" ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
							if (!/^(document|window|parent)$/.test(n.containment)) {
								e = te(n.containment)[0];
								t = te(n.containment).offset();
								i = te(e).css("overflow") !== "hidden";
								this.containment = [t.left + (parseInt(te(e).css("borderLeftWidth"), 10) || 0) + (parseInt(te(e).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(te(e).css("borderTopWidth"), 10) || 0) + (parseInt(te(e).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(te(e).css("borderLeftWidth"), 10) || 0) - (parseInt(te(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(te(e).css("borderTopWidth"), 10) || 0) - (parseInt(te(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
							}
						},
						_convertPositionTo: function(e, t) {
							if (!t) t = this.position;
							var i = e === "absolute" ? 1 : -1,
								n = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && te.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
								s = /(html|body)/i.test(n[0].tagName);
							return {
								top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * i,
								left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * i
							}
						},
						_generatePosition: function(e) {
							var t, i, n = this.options,
								s = e.pageX,
								a = e.pageY,
								o = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && te.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
								r = /(html|body)/i.test(o[0].tagName);
							if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) this.offset.relative = this._getRelativeOffset();
							if (this.originalPosition) {
								if (this.containment) {
									if (e.pageX - this.offset.click.left < this.containment[0]) s = this.containment[0] + this.offset.click.left;
									if (e.pageY - this.offset.click.top < this.containment[1]) a = this.containment[1] + this.offset.click.top;
									if (e.pageX - this.offset.click.left > this.containment[2]) s = this.containment[2] + this.offset.click.left;
									if (e.pageY - this.offset.click.top > this.containment[3]) a = this.containment[3] + this.offset.click.top
								}
								if (n.grid) {
									t = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1];
									a = this.containment ? t - this.offset.click.top >= this.containment[1] && t - this.offset.click.top <= this.containment[3] ? t : t - this.offset.click.top >= this.containment[1] ? t - n.grid[1] : t + n.grid[1] : t;
									i = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0];
									s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - n.grid[0] : i + n.grid[0] : i
								}
							}
							return {
								top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()),
								left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft())
							}
						},
						_rearrange: function(e, t, i, n) {
							if (i) i[0].appendChild(this.placeholder[0]);
							else t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
							this.counter = this.counter ? ++this.counter : 1;
							var s = this.counter;
							this._delay(function() {
								if (s === this.counter) this.refreshPositions(!n)
							})
						},
						_clear: function(e, t) {
							this.reverting = false;
							var i, n = [];
							if (!this._noFinalSort && this.currentItem.parent().length) this.placeholder.before(this.currentItem);
							this._noFinalSort = null;
							if (this.helper[0] === this.currentItem[0]) {
								for (i in this._storedCSS)
									if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") this._storedCSS[i] = "";
								this.currentItem.css(this._storedCSS);
								this._removeClass(this.currentItem, "ui-sortable-helper")
							} else this.currentItem.show();
							if (this.fromOutside && !t) n.push(function(e) {
								this._trigger("receive", e, this._uiHash(this.fromOutside))
							});
							if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t) n.push(function(e) {
								this._trigger("update", e, this._uiHash())
							});
							if (this !== this.currentContainer)
								if (!t) {
									n.push(function(e) {
										this._trigger("remove", e, this._uiHash())
									});
									n.push(function(t) {
										return function(e) {
											t._trigger("receive", e, this._uiHash(this))
										}
									}.call(this, this.currentContainer));
									n.push(function(t) {
										return function(e) {
											t._trigger("update", e, this._uiHash(this))
										}
									}.call(this, this.currentContainer))
								}
							function s(t, i, n) {
								return function(e) {
									n._trigger(t, e, i._uiHash(i))
								}
							}
							for (i = this.containers.length - 1; i >= 0; i--) {
								if (!t) n.push(s("deactivate", this, this.containers[i]));
								if (this.containers[i].containerCache.over) {
									n.push(s("out", this, this.containers[i]));
									this.containers[i].containerCache.over = 0
								}
							}
							if (this.storedCursor) {
								this.document.find("body").css("cursor", this.storedCursor);
								this.storedStylesheet.remove()
							}
							if (this._storedOpacity) this.helper.css("opacity", this._storedOpacity);
							if (this._storedZIndex) this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
							this.dragging = false;
							if (!t) this._trigger("beforeStop", e, this._uiHash());
							this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
							if (!this.cancelHelperRemoval) {
								if (this.helper[0] !== this.currentItem[0]) this.helper.remove();
								this.helper = null
							}
							if (!t) {
								for (i = 0; i < n.length; i++) n[i].call(this, e);
								this._trigger("stop", e, this._uiHash())
							}
							this.fromOutside = false;
							return !this.cancelHelperRemoval
						},
						_trigger: function() {
							if (te.Widget.prototype._trigger.apply(this, arguments) === false) this.cancel()
						},
						_uiHash: function(e) {
							var t = e || this;
							return {
								helper: t.helper,
								placeholder: t.placeholder || te([]),
								position: t.position,
								originalPosition: t.originalPosition,
								offset: t.positionAbs,
								item: t.currentItem,
								sender: e ? e.element : null
							}
						}
					});

				function I(t) {
					return function() {
						var e = this.element.val();
						t.apply(this, arguments);
						this._refresh();
						if (e !== this.element.val()) this._trigger("change")
					}
				}
				if (te.widget("ui.spinner", {
						version: "1.13.2",
						defaultElement: "<input>",
						widgetEventPrefix: "spin",
						options: {
							classes: {
								"ui-spinner": "ui-corner-all",
								"ui-spinner-down": "ui-corner-br",
								"ui-spinner-up": "ui-corner-tr"
							},
							culture: null,
							icons: {
								down: "ui-icon-triangle-1-s",
								up: "ui-icon-triangle-1-n"
							},
							incremental: true,
							max: null,
							min: null,
							numberFormat: null,
							page: 10,
							step: 1,
							change: null,
							spin: null,
							start: null,
							stop: null
						},
						_create: function() {
							this._setOption("max", this.options.max);
							this._setOption("min", this.options.min);
							this._setOption("step", this.options.step);
							if (this.value() !== "") this._value(this.element.val(), true);
							this._draw();
							this._on(this._events);
							this._refresh();
							this._on(this.window, {
								beforeunload: function() {
									this.element.removeAttr("autocomplete")
								}
							})
						},
						_getCreateOptions: function() {
							var n = this._super();
							var s = this.element;
							te.each(["min", "max", "step"], function(e, t) {
								var i = s.attr(t);
								if (i != null && i.length) n[t] = i
							});
							return n
						},
						_events: {
							keydown: function(e) {
								if (this._start(e) && this._keydown(e)) e.preventDefault()
							},
							keyup: "_stop",
							focus: function() {
								this.previous = this.element.val()
							},
							blur: function(e) {
								if (this.cancelBlur) {
									delete this.cancelBlur;
									return
								}
								this._stop();
								this._refresh();
								if (this.previous !== this.element.val()) this._trigger("change", e)
							},
							mousewheel: function(e, t) {
								var i = te.ui.safeActiveElement(this.document[0]);
								var n = this.element[0] === i;
								if (!n || !t) return;
								if (!this.spinning && !this._start(e)) return false;
								this._spin((t > 0 ? 1 : -1) * this.options.step, e);
								clearTimeout(this.mousewheelTimer);
								this.mousewheelTimer = this._delay(function() {
									if (this.spinning) this._stop(e)
								}, 100);
								e.preventDefault()
							},
							"mousedown .ui-spinner-button": function(e) {
								var t;
								t = this.element[0] === te.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();

								function i() {
									var e = this.element[0] === te.ui.safeActiveElement(this.document[0]);
									if (!e) {
										this.element.trigger("focus");
										this.previous = t;
										this._delay(function() {
											this.previous = t
										})
									}
								}
								e.preventDefault();
								i.call(this);
								this.cancelBlur = true;
								this._delay(function() {
									delete this.cancelBlur;
									i.call(this)
								});
								if (this._start(e) === false) return;
								this._repeat(null, te(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
							},
							"mouseup .ui-spinner-button": "_stop",
							"mouseenter .ui-spinner-button": function(e) {
								if (!te(e.currentTarget).hasClass("ui-state-active")) return;
								if (this._start(e) === false) return false;
								this._repeat(null, te(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
							},
							"mouseleave .ui-spinner-button": "_stop"
						},
						_enhance: function() {
							this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
						},
						_draw: function() {
							this._enhance();
							this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
							this._addClass("ui-spinner-input");
							this.element.attr("role", "spinbutton");
							this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({
								classes: {
									"ui-button": ""
								}
							});
							this._removeClass(this.buttons, "ui-corner-all");
							this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
							this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
							this.buttons.first().button({
								icon: this.options.icons.up,
								showLabel: false
							});
							this.buttons.last().button({
								icon: this.options.icons.down,
								showLabel: false
							});
							if (this.buttons.height() > Math.ceil(this.uiSpinner.height() * .5) && this.uiSpinner.height() > 0) this.uiSpinner.height(this.uiSpinner.height())
						},
						_keydown: function(e) {
							var t = this.options,
								i = te.ui.keyCode;
							switch (e.keyCode) {
								case i.UP:
									this._repeat(null, 1, e);
									return true;
								case i.DOWN:
									this._repeat(null, -1, e);
									return true;
								case i.PAGE_UP:
									this._repeat(null, t.page, e);
									return true;
								case i.PAGE_DOWN:
									this._repeat(null, -t.page, e);
									return true
							}
							return false
						},
						_start: function(e) {
							if (!this.spinning && this._trigger("start", e) === false) return false;
							if (!this.counter) this.counter = 1;
							this.spinning = true;
							return true
						},
						_repeat: function(e, t, i) {
							e = e || 500;
							clearTimeout(this.timer);
							this.timer = this._delay(function() {
								this._repeat(40, t, i)
							}, e);
							this._spin(t * this.options.step, i)
						},
						_spin: function(e, t) {
							var i = this.value() || 0;
							if (!this.counter) this.counter = 1;
							i = this._adjustValue(i + e * this._increment(this.counter));
							if (!this.spinning || this._trigger("spin", t, {
									value: i
								}) !== false) {
								this._value(i);
								this.counter++
							}
						},
						_increment: function(e) {
							var t = this.options.incremental;
							if (t) return typeof t === "function" ? t(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1);
							return 1
						},
						_precision: function() {
							var e = this._precisionOf(this.options.step);
							if (this.options.min !== null) e = Math.max(e, this._precisionOf(this.options.min));
							return e
						},
						_precisionOf: function(e) {
							var t = e.toString(),
								i = t.indexOf(".");
							return i === -1 ? 0 : t.length - i - 1
						},
						_adjustValue: function(e) {
							var t, i, n = this.options;
							t = n.min !== null ? n.min : 0;
							i = e - t;
							i = Math.round(i / n.step) * n.step;
							e = t + i;
							e = parseFloat(e.toFixed(this._precision()));
							if (n.max !== null && e > n.max) return n.max;
							if (n.min !== null && e < n.min) return n.min;
							return e
						},
						_stop: function(e) {
							if (!this.spinning) return;
							clearTimeout(this.timer);
							clearTimeout(this.mousewheelTimer);
							this.counter = 0;
							this.spinning = false;
							this._trigger("stop", e)
						},
						_setOption: function(e, t) {
							var i, n, s;
							if (e === "culture" || e === "numberFormat") {
								i = this._parse(this.element.val());
								this.options[e] = t;
								this.element.val(this._format(i));
								return
							}
							if (e === "max" || e === "min" || e === "step")
								if (typeof t === "string") t = this._parse(t);
							if (e === "icons") {
								n = this.buttons.first().find(".ui-icon");
								this._removeClass(n, null, this.options.icons.up);
								this._addClass(n, null, t.up);
								s = this.buttons.last().find(".ui-icon");
								this._removeClass(s, null, this.options.icons.down);
								this._addClass(s, null, t.down)
							}
							this._super(e, t)
						},
						_setOptionDisabled: function(e) {
							this._super(e);
							this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!e);
							this.element.prop("disabled", !!e);
							this.buttons.button(e ? "disable" : "enable")
						},
						_setOptions: I(function(e) {
							this._super(e)
						}),
						_parse: function(e) {
							if (typeof e === "string" && e !== "") e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e;
							return e === "" || isNaN(e) ? null : e
						},
						_format: function(e) {
							if (e === "") return "";
							return window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
						},
						_refresh: function() {
							this.element.attr({
								"aria-valuemin": this.options.min,
								"aria-valuemax": this.options.max,
								"aria-valuenow": this._parse(this.element.val())
							})
						},
						isValid: function() {
							var e = this.value();
							if (e === null) return false;
							return e === this._adjustValue(e)
						},
						_value: function(e, t) {
							var i;
							if (e !== "") {
								i = this._parse(e);
								if (i !== null) {
									if (!t) i = this._adjustValue(i);
									e = this._format(i)
								}
							}
							this.element.val(e);
							this._refresh()
						},
						_destroy: function() {
							this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
							this.uiSpinner.replaceWith(this.element)
						},
						stepUp: I(function(e) {
							this._stepUp(e)
						}),
						_stepUp: function(e) {
							if (this._start()) {
								this._spin((e || 1) * this.options.step);
								this._stop()
							}
						},
						stepDown: I(function(e) {
							this._stepDown(e)
						}),
						_stepDown: function(e) {
							if (this._start()) {
								this._spin((e || 1) * -this.options.step);
								this._stop()
							}
						},
						pageUp: I(function(e) {
							this._stepUp((e || 1) * this.options.page)
						}),
						pageDown: I(function(e) {
							this._stepDown((e || 1) * this.options.page)
						}),
						value: function(e) {
							if (!arguments.length) return this._parse(this.element.val());
							I(this._value).call(this, e)
						},
						widget: function() {
							return this.uiSpinner
						}
					}), te.uiBackCompat !== false) te.widget("ui.spinner", te.ui.spinner, {
					_enhance: function() {
						this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
					},
					_uiSpinnerHtml: function() {
						return "<span>"
					},
					_buttonHtml: function() {
						return "<a></a><a></a>"
					}
				});
				var et = te.ui.spinner;
				if (te.widget("ui.tabs", {
						version: "1.13.2",
						delay: 300,
						options: {
							active: null,
							classes: {
								"ui-tabs": "ui-corner-all",
								"ui-tabs-nav": "ui-corner-all",
								"ui-tabs-panel": "ui-corner-bottom",
								"ui-tabs-tab": "ui-corner-top"
							},
							collapsible: false,
							event: "click",
							heightStyle: "content",
							hide: null,
							show: null,
							activate: null,
							beforeActivate: null,
							beforeLoad: null,
							load: null
						},
						_isLocal: function() {
							var n = /#.*$/;
							return function(e) {
								var t, i;
								t = e.href.replace(n, "");
								i = location.href.replace(n, "");
								try {
									t = decodeURIComponent(t)
								} catch (e) {}
								try {
									i = decodeURIComponent(i)
								} catch (e) {}
								return e.hash.length > 1 && t === i
							}
						}(),
						_create: function() {
							var t = this,
								e = this.options;
							this.running = false;
							this._addClass("ui-tabs", "ui-widget ui-widget-content");
							this._toggleClass("ui-tabs-collapsible", null, e.collapsible);
							this._processTabs();
							e.active = this._initialActive();
							if (Array.isArray(e.disabled)) e.disabled = te.uniqueSort(e.disabled.concat(te.map(this.tabs.filter(".ui-state-disabled"), function(e) {
								return t.tabs.index(e)
							}))).sort();
							if (this.options.active !== false && this.anchors.length) this.active = this._findActive(e.active);
							else this.active = te();
							this._refresh();
							if (this.active.length) this.load(e.active)
						},
						_initialActive: function() {
							var i = this.options.active,
								e = this.options.collapsible,
								n = location.hash.substring(1);
							if (i === null) {
								if (n) this.tabs.each(function(e, t) {
									if (te(t).attr("aria-controls") === n) {
										i = e;
										return false
									}
								});
								if (i === null) i = this.tabs.index(this.tabs.filter(".ui-tabs-active"));
								if (i === null || i === -1) i = this.tabs.length ? 0 : false
							}
							if (i !== false) {
								i = this.tabs.index(this.tabs.eq(i));
								if (i === -1) i = e ? false : 0
							}
							if (!e && i === false && this.anchors.length) i = 0;
							return i
						},
						_getCreateEventData: function() {
							return {
								tab: this.active,
								panel: !this.active.length ? te() : this._getPanelForTab(this.active)
							}
						},
						_tabKeydown: function(e) {
							var t = te(te.ui.safeActiveElement(this.document[0])).closest("li"),
								i = this.tabs.index(t),
								n = true;
							if (this._handlePageNav(e)) return;
							switch (e.keyCode) {
								case te.ui.keyCode.RIGHT:
								case te.ui.keyCode.DOWN:
									i++;
									break;
								case te.ui.keyCode.UP:
								case te.ui.keyCode.LEFT:
									n = false;
									i--;
									break;
								case te.ui.keyCode.END:
									i = this.anchors.length - 1;
									break;
								case te.ui.keyCode.HOME:
									i = 0;
									break;
								case te.ui.keyCode.SPACE:
									e.preventDefault();
									clearTimeout(this.activating);
									this._activate(i);
									return;
								case te.ui.keyCode.ENTER:
									e.preventDefault();
									clearTimeout(this.activating);
									this._activate(i === this.options.active ? false : i);
									return;
								default:
									return
							}
							e.preventDefault();
							clearTimeout(this.activating);
							i = this._focusNextTab(i, n);
							if (!e.ctrlKey && !e.metaKey) {
								t.attr("aria-selected", "false");
								this.tabs.eq(i).attr("aria-selected", "true");
								this.activating = this._delay(function() {
									this.option("active", i)
								}, this.delay)
							}
						},
						_panelKeydown: function(e) {
							if (this._handlePageNav(e)) return;
							if (e.ctrlKey && e.keyCode === te.ui.keyCode.UP) {
								e.preventDefault();
								this.active.trigger("focus")
							}
						},
						_handlePageNav: function(e) {
							if (e.altKey && e.keyCode === te.ui.keyCode.PAGE_UP) {
								this._activate(this._focusNextTab(this.options.active - 1, false));
								return true
							}
							if (e.altKey && e.keyCode === te.ui.keyCode.PAGE_DOWN) {
								this._activate(this._focusNextTab(this.options.active + 1, true));
								return true
							}
						},
						_findNextTab: function(e, t) {
							var i = this.tabs.length - 1;

							function n() {
								if (e > i) e = 0;
								if (e < 0) e = i;
								return e
							}
							while (te.inArray(n(), this.options.disabled) !== -1) e = t ? e + 1 : e - 1;
							return e
						},
						_focusNextTab: function(e, t) {
							e = this._findNextTab(e, t);
							this.tabs.eq(e).trigger("focus");
							return e
						},
						_setOption: function(e, t) {
							if (e === "active") {
								this._activate(t);
								return
							}
							this._super(e, t);
							if (e === "collapsible") {
								this._toggleClass("ui-tabs-collapsible", null, t);
								if (!t && this.options.active === false) this._activate(0)
							}
							if (e === "event") this._setupEvents(t);
							if (e === "heightStyle") this._setupHeightStyle(t)
						},
						_sanitizeSelector: function(e) {
							return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
						},
						refresh: function() {
							var e = this.options,
								t = this.tablist.children(":has(a[href])");
							e.disabled = te.map(t.filter(".ui-state-disabled"), function(e) {
								return t.index(e)
							});
							this._processTabs();
							if (e.active === false || !this.anchors.length) {
								e.active = false;
								this.active = te()
							} else if (this.active.length && !te.contains(this.tablist[0], this.active[0]))
								if (this.tabs.length === e.disabled.length) {
									e.active = false;
									this.active = te()
								} else this._activate(this._findNextTab(Math.max(0, e.active - 1), false));
							else e.active = this.tabs.index(this.active);
							this._refresh()
						},
						_refresh: function() {
							this._setOptionDisabled(this.options.disabled);
							this._setupEvents(this.options.event);
							this._setupHeightStyle(this.options.heightStyle);
							this.tabs.not(this.active).attr({
								"aria-selected": "false",
								"aria-expanded": "false",
								tabIndex: -1
							});
							this.panels.not(this._getPanelForTab(this.active)).hide().attr({
								"aria-hidden": "true"
							});
							if (!this.active.length) this.tabs.eq(0).attr("tabIndex", 0);
							else {
								this.active.attr({
									"aria-selected": "true",
									"aria-expanded": "true",
									tabIndex: 0
								});
								this._addClass(this.active, "ui-tabs-active", "ui-state-active");
								this._getPanelForTab(this.active).show().attr({
									"aria-hidden": "false"
								})
							}
						},
						_processTabs: function() {
							var l = this,
								e = this.tabs,
								t = this.anchors,
								i = this.panels;
							this.tablist = this._getList().attr("role", "tablist");
							this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
							this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
								if (te(this).is(".ui-state-disabled")) e.preventDefault()
							}).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
								if (te(this).closest("li").is(".ui-state-disabled")) this.blur()
							});
							this.tabs = this.tablist.find("> li:has(a[href])").attr({
								role: "tab",
								tabIndex: -1
							});
							this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
							this.anchors = this.tabs.map(function() {
								return te("a", this)[0]
							}).attr({
								tabIndex: -1
							});
							this._addClass(this.anchors, "ui-tabs-anchor");
							this.panels = te();
							this.anchors.each(function(e, t) {
								var i, n, s, a = te(t).uniqueId().attr("id"),
									o = te(t).closest("li"),
									r = o.attr("aria-controls");
								if (l._isLocal(t)) {
									i = t.hash;
									s = i.substring(1);
									n = l.element.find(l._sanitizeSelector(i))
								} else {
									s = o.attr("aria-controls") || te({}).uniqueId()[0].id;
									i = "#" + s;
									n = l.element.find(i);
									if (!n.length) {
										n = l._createPanel(s);
										n.insertAfter(l.panels[e - 1] || l.tablist)
									}
									n.attr("aria-live", "polite")
								}
								if (n.length) l.panels = l.panels.add(n);
								if (r) o.data("ui-tabs-aria-controls", r);
								o.attr({
									"aria-controls": s,
									"aria-labelledby": a
								});
								n.attr("aria-labelledby", a)
							});
							this.panels.attr("role", "tabpanel");
							this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
							if (e) {
								this._off(e.not(this.tabs));
								this._off(t.not(this.anchors));
								this._off(i.not(this.panels))
							}
						},
						_getList: function() {
							return this.tablist || this.element.find("ol, ul").eq(0)
						},
						_createPanel: function(e) {
							return te("<div>").attr("id", e).data("ui-tabs-destroy", true)
						},
						_setOptionDisabled: function(e) {
							var t, i, n;
							if (Array.isArray(e))
								if (!e.length) e = false;
								else if (e.length === this.anchors.length) e = true;
							for (n = 0; i = this.tabs[n]; n++) {
								t = te(i);
								if (e === true || te.inArray(n, e) !== -1) {
									t.attr("aria-disabled", "true");
									this._addClass(t, null, "ui-state-disabled")
								} else {
									t.removeAttr("aria-disabled");
									this._removeClass(t, null, "ui-state-disabled")
								}
							}
							this.options.disabled = e;
							this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === true)
						},
						_setupEvents: function(e) {
							var i = {};
							if (e) te.each(e.split(" "), function(e, t) {
								i[t] = "_eventHandler"
							});
							this._off(this.anchors.add(this.tabs).add(this.panels));
							this._on(true, this.anchors, {
								click: function(e) {
									e.preventDefault()
								}
							});
							this._on(this.anchors, i);
							this._on(this.tabs, {
								keydown: "_tabKeydown"
							});
							this._on(this.panels, {
								keydown: "_panelKeydown"
							});
							this._focusable(this.tabs);
							this._hoverable(this.tabs)
						},
						_setupHeightStyle: function(e) {
							var i, t = this.element.parent();
							if (e === "fill") {
								i = t.height();
								i -= this.element.outerHeight() - this.element.height();
								this.element.siblings(":visible").each(function() {
									var e = te(this),
										t = e.css("position");
									if (t === "absolute" || t === "fixed") return;
									i -= e.outerHeight(true)
								});
								this.element.children().not(this.panels).each(function() {
									i -= te(this).outerHeight(true)
								});
								this.panels.each(function() {
									te(this).height(Math.max(0, i - te(this).innerHeight() + te(this).height()))
								}).css("overflow", "auto")
							} else if (e === "auto") {
								i = 0;
								this.panels.each(function() {
									i = Math.max(i, te(this).height("").height())
								}).height(i)
							}
						},
						_eventHandler: function(e) {
							var t = this.options,
								i = this.active,
								n = te(e.currentTarget),
								s = n.closest("li"),
								a = s[0] === i[0],
								o = a && t.collapsible,
								r = o ? te() : this._getPanelForTab(s),
								l = !i.length ? te() : this._getPanelForTab(i),
								u = {
									oldTab: i,
									oldPanel: l,
									newTab: o ? te() : s,
									newPanel: r
								};
							e.preventDefault();
							if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || a && !t.collapsible || this._trigger("beforeActivate", e, u) === false) return;
							t.active = o ? false : this.tabs.index(s);
							this.active = a ? te() : s;
							if (this.xhr) this.xhr.abort();
							if (!l.length && !r.length) te.error("jQuery UI Tabs: Mismatching fragment identifier.");
							if (r.length) this.load(this.tabs.index(s), e);
							this._toggle(e, u)
						},
						_toggle: function(e, t) {
							var i = this,
								n = t.newPanel,
								s = t.oldPanel;
							this.running = true;

							function a() {
								i.running = false;
								i._trigger("activate", e, t)
							}

							function o() {
								i._addClass(t.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
								if (n.length && i.options.show) i._show(n, i.options.show, a);
								else {
									n.show();
									a()
								}
							}
							if (s.length && this.options.hide) this._hide(s, this.options.hide, function() {
								i._removeClass(t.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
								o()
							});
							else {
								this._removeClass(t.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
								s.hide();
								o()
							}
							s.attr("aria-hidden", "true");
							t.oldTab.attr({
								"aria-selected": "false",
								"aria-expanded": "false"
							});
							if (n.length && s.length) t.oldTab.attr("tabIndex", -1);
							else if (n.length) this.tabs.filter(function() {
								return te(this).attr("tabIndex") === 0
							}).attr("tabIndex", -1);
							n.attr("aria-hidden", "false");
							t.newTab.attr({
								"aria-selected": "true",
								"aria-expanded": "true",
								tabIndex: 0
							})
						},
						_activate: function(e) {
							var t, i = this._findActive(e);
							if (i[0] === this.active[0]) return;
							if (!i.length) i = this.active;
							t = i.find(".ui-tabs-anchor")[0];
							this._eventHandler({
								target: t,
								currentTarget: t,
								preventDefault: te.noop
							})
						},
						_findActive: function(e) {
							return e === false ? te() : this.tabs.eq(e)
						},
						_getIndex: function(e) {
							if (typeof e === "string") e = this.anchors.index(this.anchors.filter("[href$='" + te.escapeSelector(e) + "']"));
							return e
						},
						_destroy: function() {
							if (this.xhr) this.xhr.abort();
							this.tablist.removeAttr("role").off(this.eventNamespace);
							this.anchors.removeAttr("role tabIndex").removeUniqueId();
							this.tabs.add(this.panels).each(function() {
								if (te.data(this, "ui-tabs-destroy")) te(this).remove();
								else te(this).removeAttr("role tabIndex " + "aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
							});
							this.tabs.each(function() {
								var e = te(this),
									t = e.data("ui-tabs-aria-controls");
								if (t) e.attr("aria-controls", t).removeData("ui-tabs-aria-controls");
								else e.removeAttr("aria-controls")
							});
							this.panels.show();
							if (this.options.heightStyle !== "content") this.panels.css("height", "")
						},
						enable: function(i) {
							var e = this.options.disabled;
							if (e === false) return;
							if (i === undefined) e = false;
							else {
								i = this._getIndex(i);
								if (Array.isArray(e)) e = te.map(e, function(e) {
									return e !== i ? e : null
								});
								else e = te.map(this.tabs, function(e, t) {
									return t !== i ? t : null
								})
							}
							this._setOptionDisabled(e)
						},
						disable: function(e) {
							var t = this.options.disabled;
							if (t === true) return;
							if (e === undefined) t = true;
							else {
								e = this._getIndex(e);
								if (te.inArray(e, t) !== -1) return;
								if (Array.isArray(t)) t = te.merge([e], t).sort();
								else t = [e]
							}
							this._setOptionDisabled(t)
						},
						load: function(e, n) {
							e = this._getIndex(e);
							var s = this,
								i = this.tabs.eq(e),
								t = i.find(".ui-tabs-anchor"),
								a = this._getPanelForTab(i),
								o = {
									tab: i,
									panel: a
								},
								r = function(e, t) {
									if (t === "abort") s.panels.stop(false, true);
									s._removeClass(i, "ui-tabs-loading");
									a.removeAttr("aria-busy");
									if (e === s.xhr) delete s.xhr
								};
							if (this._isLocal(t[0])) return;
							this.xhr = te.ajax(this._ajaxSettings(t, n, o));
							if (this.xhr && this.xhr.statusText !== "canceled") {
								this._addClass(i, "ui-tabs-loading");
								a.attr("aria-busy", "true");
								this.xhr.done(function(e, t, i) {
									setTimeout(function() {
										a.html(e);
										s._trigger("load", n, o);
										r(i, t)
									}, 1)
								}).fail(function(e, t) {
									setTimeout(function() {
										r(e, t)
									}, 1)
								})
							}
						},
						_ajaxSettings: function(e, i, n) {
							var s = this;
							return {
								url: e.attr("href").replace(/#.*$/, ""),
								beforeSend: function(e, t) {
									return s._trigger("beforeLoad", i, te.extend({
										jqXHR: e,
										ajaxSettings: t
									}, n))
								}
							}
						},
						_getPanelForTab: function(e) {
							var t = te(e).attr("aria-controls");
							return this.element.find(this._sanitizeSelector("#" + t))
						}
					}), te.uiBackCompat !== false) te.widget("ui.tabs", te.ui.tabs, {
					_processTabs: function() {
						this._superApply(arguments);
						this._addClass(this.tabs, "ui-tab")
					}
				});
				var tt = te.ui.tabs;
				if (te.widget("ui.tooltip", {
						version: "1.13.2",
						options: {
							classes: {
								"ui-tooltip": "ui-corner-all ui-widget-shadow"
							},
							content: function() {
								var e = te(this).attr("title");
								return te("<a>").text(e).html()
							},
							hide: true,
							items: "[title]:not([disabled])",
							position: {
								my: "left top+15",
								at: "left bottom",
								collision: "flipfit flip"
							},
							show: true,
							track: false,
							close: null,
							open: null
						},
						_addDescribedBy: function(e, t) {
							var i = (e.attr("aria-describedby") || "").split(/\s+/);
							i.push(t);
							e.data("ui-tooltip-id", t).attr("aria-describedby", String.prototype.trim.call(i.join(" ")))
						},
						_removeDescribedBy: function(e) {
							var t = e.data("ui-tooltip-id"),
								i = (e.attr("aria-describedby") || "").split(/\s+/),
								n = te.inArray(t, i);
							if (n !== -1) i.splice(n, 1);
							e.removeData("ui-tooltip-id");
							i = String.prototype.trim.call(i.join(" "));
							if (i) e.attr("aria-describedby", i);
							else e.removeAttr("aria-describedby")
						},
						_create: function() {
							this._on({
								mouseover: "open",
								focusin: "open"
							});
							this.tooltips = {};
							this.parents = {};
							this.liveRegion = te("<div>").attr({
								role: "log",
								"aria-live": "assertive",
								"aria-relevant": "additions"
							}).appendTo(this.document[0].body);
							this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
							this.disabledTitles = te([])
						},
						_setOption: function(e, t) {
							var i = this;
							this._super(e, t);
							if (e === "content") te.each(this.tooltips, function(e, t) {
								i._updateContent(t.element)
							})
						},
						_setOptionDisabled: function(e) {
							this[e ? "_disable" : "_enable"]()
						},
						_disable: function() {
							var n = this;
							te.each(this.tooltips, function(e, t) {
								var i = te.Event("blur");
								i.target = i.currentTarget = t.element[0];
								n.close(i, true)
							});
							this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
								var e = te(this);
								if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
							}))
						},
						_enable: function() {
							this.disabledTitles.each(function() {
								var e = te(this);
								if (e.data("ui-tooltip-title")) e.attr("title", e.data("ui-tooltip-title"))
							});
							this.disabledTitles = te([])
						},
						open: function(e) {
							var i = this,
								t = te(e ? e.target : this.element).closest(this.options.items);
							if (!t.length || t.data("ui-tooltip-id")) return;
							if (t.attr("title")) t.data("ui-tooltip-title", t.attr("title"));
							t.data("ui-tooltip-open", true);
							if (e && e.type === "mouseover") t.parents().each(function() {
								var e = te(this),
									t;
								if (e.data("ui-tooltip-open")) {
									t = te.Event("blur");
									t.target = t.currentTarget = this;
									i.close(t, true)
								}
								if (e.attr("title")) {
									e.uniqueId();
									i.parents[this.id] = {
										element: this,
										title: e.attr("title")
									};
									e.attr("title", "")
								}
							});
							this._registerCloseHandlers(e, t);
							this._updateContent(t, e)
						},
						_updateContent: function(t, i) {
							var e, n = this.options.content,
								s = this,
								a = i ? i.type : null;
							if (typeof n === "string" || n.nodeType || n.jquery) return this._open(i, t, n);
							e = n.call(t[0], function(e) {
								s._delay(function() {
									if (!t.data("ui-tooltip-open")) return;
									if (i) i.type = a;
									this._open(i, t, e)
								})
							});
							if (e) this._open(i, t, e)
						},
						_open: function(e, t, i) {
							var n, s, a, o, r = te.extend({}, this.options.position);
							if (!i) return;
							n = this._find(t);
							if (n) {
								n.tooltip.find(".ui-tooltip-content").html(i);
								return
							}
							if (t.is("[title]"))
								if (e && e.type === "mouseover") t.attr("title", "");
								else t.removeAttr("title");
							n = this._tooltip(t);
							s = n.tooltip;
							this._addDescribedBy(t, s.attr("id"));
							s.find(".ui-tooltip-content").html(i);
							this.liveRegion.children().hide();
							o = te("<div>").html(s.find(".ui-tooltip-content").html());
							o.removeAttr("name").find("[name]").removeAttr("name");
							o.removeAttr("id").find("[id]").removeAttr("id");
							o.appendTo(this.liveRegion);

							function l(e) {
								r.of = e;
								if (s.is(":hidden")) return;
								s.position(r)
							}
							if (this.options.track && e && /^mouse/.test(e.type)) {
								this._on(this.document, {
									mousemove: l
								});
								l(e)
							} else s.position(te.extend({
								of: t
							}, this.options.position));
							s.hide();
							this._show(s, this.options.show);
							if (this.options.track && this.options.show && this.options.show.delay) a = this.delayedShow = setInterval(function() {
								if (s.is(":visible")) {
									l(r.of);
									clearInterval(a)
								}
							}, 13);
							this._trigger("open", e, {
								tooltip: s
							})
						},
						_registerCloseHandlers: function(e, i) {
							var t = {
								keyup: function(e) {
									if (e.keyCode === te.ui.keyCode.ESCAPE) {
										var t = te.Event(e);
										t.currentTarget = i[0];
										this.close(t, true)
									}
								}
							};
							if (i[0] !== this.element[0]) t.remove = function() {
								var e = this._find(i);
								if (e) this._removeTooltip(e.tooltip)
							};
							if (!e || e.type === "mouseover") t.mouseleave = "close";
							if (!e || e.type === "focusin") t.focusout = "close";
							this._on(true, i, t)
						},
						close: function(e) {
							var t, i = this,
								n = te(e ? e.currentTarget : this.element),
								s = this._find(n);
							if (!s) {
								n.removeData("ui-tooltip-open");
								return
							}
							t = s.tooltip;
							if (s.closing) return;
							clearInterval(this.delayedShow);
							if (n.data("ui-tooltip-title") && !n.attr("title")) n.attr("title", n.data("ui-tooltip-title"));
							this._removeDescribedBy(n);
							s.hiding = true;
							t.stop(true);
							this._hide(t, this.options.hide, function() {
								i._removeTooltip(te(this))
							});
							n.removeData("ui-tooltip-open");
							this._off(n, "mouseleave focusout keyup");
							if (n[0] !== this.element[0]) this._off(n, "remove");
							this._off(this.document, "mousemove");
							if (e && e.type === "mouseleave") te.each(this.parents, function(e, t) {
								te(t.element).attr("title", t.title);
								delete i.parents[e]
							});
							s.closing = true;
							this._trigger("close", e, {
								tooltip: t
							});
							if (!s.hiding) s.closing = false
						},
						_tooltip: function(e) {
							var t = te("<div>").attr("role", "tooltip"),
								i = te("<div>").appendTo(t),
								n = t.uniqueId().attr("id");
							this._addClass(i, "ui-tooltip-content");
							this._addClass(t, "ui-tooltip", "ui-widget ui-widget-content");
							t.appendTo(this._appendTo(e));
							return this.tooltips[n] = {
								element: e,
								tooltip: t
							}
						},
						_find: function(e) {
							var t = e.data("ui-tooltip-id");
							return t ? this.tooltips[t] : null
						},
						_removeTooltip: function(e) {
							clearInterval(this.delayedShow);
							e.remove();
							delete this.tooltips[e.attr("id")]
						},
						_appendTo: function(e) {
							var t = e.closest(".ui-front, dialog");
							if (!t.length) t = this.document[0].body;
							return t
						},
						_destroy: function() {
							var s = this;
							te.each(this.tooltips, function(e, t) {
								var i = te.Event("blur"),
									n = t.element;
								i.target = i.currentTarget = n[0];
								s.close(i, true);
								te("#" + e).remove();
								if (n.data("ui-tooltip-title")) {
									if (!n.attr("title")) n.attr("title", n.data("ui-tooltip-title"));
									n.removeData("ui-tooltip-title")
								}
							});
							this.liveRegion.remove()
						}
					}), te.uiBackCompat !== false) te.widget("ui.tooltip", te.ui.tooltip, {
					options: {
						tooltipClass: null
					},
					_tooltip: function() {
						var e = this._superApply(arguments);
						if (this.options.tooltipClass) e.tooltip.addClass(this.options.tooltipClass);
						return e
					}
				});
				var it = te.ui.tooltip
			}) ? n.apply(t, s) : n) && (e.exports = s)
		}()
	},
	66: function(e, t, i) {
		i(67), e.exports = i(265)
	},
	67: function(e, t, i) {
		"use strict";
		i.r(t),
			function(e) {
				i(73), i(78);
				e.$ = e.jquery = e.jQuery = i(8), i(14), e.fancybox = i(68), i(69), (0 < $(".contentpage-page").length || 0 < $("#user-reviews").length || $("#dashboard")) && (e.barrating = i(74)), 0 < $("#walletpage").length && (e.daterangepicker = i(75)), 0 < $("#uploadpage, #edit-document-page, #onboarding-form, #create-fc-page, #refund-page").length && (i(77), i(49)), 0 < $("#coursespage").length && i(49)
			}.call(this, i(10))
	},
	68: function(e, t) {
		! function(l, o, p, m) {
			"use strict";
			var s, a, r, c, t, u, d, h, n, e, i, f, g;

			function v(e, t) {
				var i, n, s, a = [],
					o = 0;
				e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, i = (t = e && e.data ? h(e.data.options, t) : t).$target || p(e.currentTarget).trigger("blur"), (s = p.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i)) || (a = t.selector ? p(t.selector) : (n = i.attr("data-fancybox") || "") ? (a = e.data ? e.data.items : []).length ? a.filter('[data-fancybox="' + n + '"]') : p('[data-fancybox="' + n + '"]') : [i], o = p(a).index(i), (s = p.fancybox.open(a, t, o = o < 0 ? 0 : o)).$trigger = i)
			}
			l.console = l.console || {
				info: function(e) {}
			}, p && (p.fn.fancybox ? console.info("fancyBox already initialized") : (e = {
				closeExisting: !1,
				loop: !1,
				gutter: 50,
				keyboard: !0,
				preventCaptionOverlap: !0,
				arrows: !0,
				infobar: !0,
				smallBtn: "auto",
				toolbar: "auto",
				buttons: ["zoom", "slideShow", "thumbs", "close"],
				idleTime: 3,
				protect: !1,
				modal: !1,
				image: {
					preload: !1
				},
				ajax: {
					settings: {
						data: {
							fancybox: !0
						}
					}
				},
				iframe: {
					tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
					preload: !0,
					css: {},
					attr: {
						scrolling: "auto"
					}
				},
				video: {
					tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
					format: "",
					autoStart: !0
				},
				defaultType: "image",
				animationEffect: "zoom",
				animationDuration: 366,
				zoomOpacity: "auto",
				transitionEffect: "fade",
				transitionDuration: 366,
				slideClass: "",
				baseClass: "",
				baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
				spinnerTpl: '<div class="fancybox-loading"></div>',
				errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
				btnTpl: {
					download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
					zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
					close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
					arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
					arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
					smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
				},
				parentEl: "body",
				hideScrollbar: !0,
				autoFocus: !0,
				backFocus: !0,
				trapFocus: !0,
				fullScreen: {
					autoStart: !1
				},
				touch: {
					vertical: !0,
					momentum: !0
				},
				hash: null,
				media: {},
				slideShow: {
					autoStart: !1,
					speed: 3e3
				},
				thumbs: {
					autoStart: !1,
					hideOnClose: !0,
					parentEl: ".fancybox-container",
					axis: "y"
				},
				wheel: "auto",
				onInit: p.noop,
				beforeLoad: p.noop,
				afterLoad: p.noop,
				beforeShow: p.noop,
				afterShow: p.noop,
				beforeClose: p.noop,
				afterClose: p.noop,
				onActivate: p.noop,
				onDeactivate: p.noop,
				clickContent: function(e, t) {
					return "image" === e.type && "zoom"
				},
				clickSlide: "close",
				clickOutside: "close",
				dblclickContent: !1,
				dblclickSlide: !1,
				dblclickOutside: !1,
				mobile: {
					preventCaptionOverlap: !1,
					idleTime: !1,
					clickContent: function(e, t) {
						return "image" === e.type && "toggleControls"
					},
					clickSlide: function(e, t) {
						return "image" === e.type ? "toggleControls" : "close"
					},
					dblclickContent: function(e, t) {
						return "image" === e.type && "zoom"
					},
					dblclickSlide: function(e, t) {
						return "image" === e.type && "zoom"
					}
				},
				lang: "en",
				i18n: {
					en: {
						CLOSE: "Close",
						NEXT: "Next",
						PREV: "Previous",
						ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
						PLAY_START: "Start slideshow",
						PLAY_STOP: "Pause slideshow",
						FULL_SCREEN: "Full screen",
						THUMBS: "Thumbnails",
						DOWNLOAD: "Download",
						SHARE: "Share",
						ZOOM: "Zoom"
					},
					de: {
						CLOSE: "Schlie&szlig;en",
						NEXT: "Weiter",
						PREV: "Zur&uuml;ck",
						ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
						PLAY_START: "Diaschau starten",
						PLAY_STOP: "Diaschau beenden",
						FULL_SCREEN: "Vollbild",
						THUMBS: "Vorschaubilder",
						DOWNLOAD: "Herunterladen",
						SHARE: "Teilen",
						ZOOM: "Vergr&ouml;&szlig;ern"
					}
				}
			}, s = p(l), a = p(o), r = 0, c = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function(e) {
				return l.setTimeout(e, 1e3 / 60)
			}, t = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function(e) {
				l.clearTimeout(e)
			}, u = function() {
				var e, t = o.createElement("fakeelement"),
					i = {
						transition: "transitionend",
						OTransition: "oTransitionEnd",
						MozTransition: "transitionend",
						WebkitTransition: "webkitTransitionEnd"
					};
				for (e in i)
					if (t.style[e] !== m) return i[e];
				return "transitionend"
			}(), d = function(e) {
				return e && e.length && e[0].offsetHeight
			}, h = function(e, t) {
				var i = p.extend(!0, {}, e, t);
				return p.each(t, function(e, t) {
					p.isArray(t) && (i[e] = t)
				}), i
			}, p.extend((n = function(e, t, i) {
				var n = this;
				n.opts = h({
					index: i
				}, p.fancybox.defaults), p.isPlainObject(t) && (n.opts = h(n.opts, t)), p.fancybox.isMobile && (n.opts = h(n.opts, n.opts.mobile)), n.id = n.opts.id || ++r, n.currIndex = parseInt(n.opts.index, 10) || 0, n.prevIndex = null, n.prevPos = null, n.currPos = 0, n.firstRun = !0, n.group = [], n.slides = {}, n.addContent(e), n.group.length && n.init()
			}).prototype, {
				init: function() {
					var t, i, n = this,
						s = n.group[n.currIndex].opts;
					s.closeExisting && p.fancybox.close(!0), p("body").addClass("fancybox-active"), !p.fancybox.getInstance() && !1 !== s.hideScrollbar && !p.fancybox.isMobile && o.body.scrollHeight > l.innerHeight && (p("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - o.documentElement.clientWidth) + "px;}</style>"), p("body").addClass("compensate-for-scrollbar")), i = "", p.each(s.buttons, function(e, t) {
						i += s.btnTpl[t] || ""
					}), t = p(n.translate(n, s.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + n.id).addClass(s.baseClass).data("FancyBox", n).appendTo(s.parentEl), n.$refs = {
						container: t
					}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(e) {
						n.$refs[e] = t.find(".fancybox-" + e)
					}), n.trigger("onInit"), n.activate(), n.jumpTo(n.currIndex)
				},
				translate: function(e, t) {
					var i = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
					return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
						return i[t] === m ? e : i[t]
					})
				},
				addContent: function(e) {
					var o = this,
						e = p.makeArray(e);
					p.each(e, function(e, t) {
						var i, n, s = {},
							a = {};
						p.isPlainObject(t) ? a = (s = t).opts || t : "object" === p.type(t) && p(t).length ? (a = (i = p(t)).data() || {}, (a = p.extend(!0, {}, a, a.options)).$orig = i, s.src = o.opts.src || a.src || i.attr("href"), s.type || s.src || (s.type = "inline", s.src = t)) : s = {
							type: "html",
							src: t + ""
						}, s.opts = p.extend(!0, {}, o.opts, a), p.isArray(a.buttons) && (s.opts.buttons = a.buttons), p.fancybox.isMobile && s.opts.mobile && (s.opts = h(s.opts, s.opts.mobile)), i = s.type || s.opts.type, a = s.src || "", !i && a && ((n = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "video", s.opts.video.format || (s.opts.video.format = "video/" + ("ogv" === n[1] ? "ogg" : n[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? s = p.extend(!0, s, {
							contentType: "pdf",
							opts: {
								iframe: {
									preload: !(i = "iframe")
								}
							}
						}) : "#" === a.charAt(0) && (i = "inline")), i ? s.type = i : o.trigger("objectNeedsType", s), s.contentType || (s.contentType = -1 < p.inArray(s.type, ["html", "inline", "ajax"]) ? "html" : s.type), s.index = o.group.length, "auto" == s.opts.smallBtn && (s.opts.smallBtn = -1 < p.inArray(s.type, ["html", "inline", "ajax"])), "auto" === s.opts.toolbar && (s.opts.toolbar = !s.opts.smallBtn), s.$thumb = s.opts.$thumb || null, s.opts.$trigger && s.index === o.opts.index && (s.$thumb = s.opts.$trigger.find("img:first"), s.$thumb.length) && (s.opts.$orig = s.opts.$trigger), s.$thumb && s.$thumb.length || !s.opts.$orig || (s.$thumb = s.opts.$orig.find("img:first")), s.$thumb && !s.$thumb.length && (s.$thumb = null), s.thumb = s.opts.thumb || (s.$thumb ? s.$thumb[0].src : null), "function" === p.type(s.opts.caption) && (s.opts.caption = s.opts.caption.apply(t, [o, s])), "function" === p.type(o.opts.caption) && (s.opts.caption = o.opts.caption.apply(t, [o, s])), s.opts.caption instanceof p || (s.opts.caption = s.opts.caption === m ? "" : s.opts.caption + ""), "ajax" === s.type && 1 < (n = a.split(/\s+/, 2)).length && (s.src = n.shift(), s.opts.filter = n.shift()), s.opts.modal && (s.opts = p.extend(!0, s.opts, {
							trapFocus: !0,
							infobar: 0,
							toolbar: 0,
							smallBtn: 0,
							keyboard: 0,
							slideShow: 0,
							fullScreen: 0,
							thumbs: 0,
							touch: 0,
							clickContent: !1,
							clickSlide: !1,
							clickOutside: !1,
							dblclickContent: !1,
							dblclickSlide: !1,
							dblclickOutside: !1
						})), o.group.push(s)
					}), Object.keys(o.slides).length && (o.updateControls(), e = o.Thumbs) && e.isActive && (e.create(), e.focus())
				},
				addEvents: function() {
					var n = this;
					n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
						e.stopPropagation(), e.preventDefault(), n.close(e)
					}).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
						e.stopPropagation(), e.preventDefault(), n.previous()
					}).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
						e.stopPropagation(), e.preventDefault(), n.next()
					}).on("click.fb", "[data-fancybox-zoom]", function(e) {
						n[n.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
					}), s.on("orientationchange.fb resize.fb", function(e) {
						e && e.originalEvent && "resize" === e.originalEvent.type ? (n.requestId && t(n.requestId), n.requestId = c(function() {
							n.update(e)
						})) : (n.current && "iframe" === n.current.type && n.$refs.stage.hide(), setTimeout(function() {
							n.$refs.stage.show(), n.update(e)
						}, p.fancybox.isMobile ? 600 : 250))
					}), a.on("keydown.fb", function(e) {
						var t = (p.fancybox ? p.fancybox.getInstance() : null).current,
							i = e.keyCode || e.which;
						9 == i ? t.opts.trapFocus && n.focus(e) : !t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || p(e.target).is("input,textarea,video,audio,select") || (8 === i || 27 === i ? (e.preventDefault(), n.close(e)) : 37 === i || 38 === i ? (e.preventDefault(), n.previous()) : 39 === i || 40 === i ? (e.preventDefault(), n.next()) : n.trigger("afterKeydown", e, i))
					}), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
						n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
					}), n.idleInterval = l.setInterval(function() {
						n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && !n.isDragging && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
					}, 1e3))
				},
				removeEvents: function() {
					s.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), this.idleInterval = null)
				},
				previous: function(e) {
					return this.jumpTo(this.currPos - 1, e)
				},
				next: function(e) {
					return this.jumpTo(this.currPos + 1, e)
				},
				jumpTo: function(e, n) {
					var t, i, s, a, o, r, l, u, c = this,
						h = c.group.length;
					if (!(c.isDragging || c.isClosing || c.isAnimating && c.firstRun)) {
						if (e = parseInt(e, 10), !(i = (c.current || c).opts.loop) && (e < 0 || h <= e)) return !1;
						t = c.firstRun = !Object.keys(c.slides).length, a = c.current, c.prevIndex = c.currIndex, c.prevPos = c.currPos, s = c.createSlide(e), 1 < h && ((i || s.index < h - 1) && c.createSlide(e + 1), i || 0 < s.index) && c.createSlide(e - 1), c.current = s, c.currIndex = s.index, c.currPos = s.pos, c.trigger("beforeShow", t), c.updateControls(), s.forcedDuration = m, p.isNumeric(n) ? s.forcedDuration = n : n = s.opts[t ? "animationDuration" : "transitionDuration"], n = parseInt(n, 10), h = c.isMoved(s), s.$slide.addClass("fancybox-slide--current"), t ? (s.opts.animationEffect && n && c.$refs.container.css("transition-duration", n + "ms"), c.$refs.container.addClass("fancybox-is-open").trigger("focus"), c.loadSlide(s)) : (o = p.fancybox.getTranslate(a.$slide), r = p.fancybox.getTranslate(c.$refs.stage), p.each(c.slides, function(e, t) {
							p.fancybox.stop(t.$slide, !0)
						}), a.pos !== s.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), h ? (u = o.left - (a.pos * o.width + a.pos * a.opts.gutter), p.each(c.slides, function(e, t) {
							t.$slide.removeClass("fancybox-animated").removeClass(function(e, t) {
								return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
							});
							var i = t.pos * o.width + t.pos * t.opts.gutter;
							p.fancybox.setTranslate(t.$slide, {
								top: 0,
								left: i - r.left + u
							}), t.pos !== s.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > s.pos ? "next" : "previous")), d(t.$slide), p.fancybox.animate(t.$slide, {
								top: 0,
								left: (t.pos - s.pos) * o.width + (t.pos - s.pos) * t.opts.gutter
							}, n, function() {
								t.$slide.css({
									transform: "",
									opacity: ""
								}).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === c.currPos && c.complete()
							})
						})) : n && s.opts.transitionEffect && (l = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")), p.fancybox.animate(a.$slide, l, n, function() {
							a.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous")
						}, !1)), s.isLoaded ? c.revealContent(s) : c.loadSlide(s)), c.preload("image")
					}
				},
				createSlide: function(e) {
					var t, i = this,
						n = e % i.group.length;
					return n = n < 0 ? i.group.length + n : n, !i.slides[e] && i.group[n] && (t = p('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[e] = p.extend(!0, {}, i.group[n], {
						pos: e,
						$slide: t,
						isLoaded: !1
					}), i.updateSlide(i.slides[e])), i.slides[e]
				},
				scaleToActual: function(e, t, i) {
					var n, s, a, o, r = this,
						l = r.current,
						u = l.$content,
						c = p.fancybox.getTranslate(l.$slide).width,
						h = p.fancybox.getTranslate(l.$slide).height,
						d = l.width,
						f = l.height;
					r.isAnimating || r.isMoved() || !u || "image" != l.type || !l.isLoaded || l.hasError || (r.isAnimating = !0, p.fancybox.stop(u), e = e === m ? .5 * c : e, t = t === m ? .5 * h : t, (n = p.fancybox.getTranslate(u)).top -= p.fancybox.getTranslate(l.$slide).top, n.left -= p.fancybox.getTranslate(l.$slide).left, l = d / n.width, o = f / n.height, s = .5 * c - .5 * d, a = .5 * h - .5 * f, c < d && (s = 0 < (s = n.left * l - (e * l - e)) ? 0 : s) < c - d && (s = c - d), h < f && (a = 0 < (a = n.top * o - (t * o - t)) ? 0 : a) < h - f && (a = h - f), r.updateCursor(d, f), p.fancybox.animate(u, {
						top: a,
						left: s,
						scaleX: l,
						scaleY: o
					}, i || 366, function() {
						r.isAnimating = !1
					}), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop())
				},
				scaleToFit: function(e) {
					var t = this,
						i = t.current,
						n = i.$content;
					t.isAnimating || t.isMoved() || !n || "image" != i.type || !i.isLoaded || i.hasError || (t.isAnimating = !0, p.fancybox.stop(n), i = t.getFitPos(i), t.updateCursor(i.width, i.height), p.fancybox.animate(n, {
						top: i.top,
						left: i.left,
						scaleX: i.width / n.width(),
						scaleY: i.height / n.height()
					}, e || 366, function() {
						t.isAnimating = !1
					}))
				},
				getFitPos: function(e) {
					var t, i, n = e.$content,
						s = e.$slide,
						a = e.width || e.opts.width,
						o = e.height || e.opts.height,
						r = {};
					return !!(e.isLoaded && n && n.length) && (t = p.fancybox.getTranslate(this.$refs.stage).width, i = p.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(s.css("paddingLeft")) + parseFloat(s.css("paddingRight")) + parseFloat(n.css("marginLeft")) + parseFloat(n.css("marginRight")), i -= parseFloat(s.css("paddingTop")) + parseFloat(s.css("paddingBottom")) + parseFloat(n.css("marginTop")) + parseFloat(n.css("marginBottom")), a && o || (a = t, o = i), t - .5 < (a *= n = Math.min(1, t / a, i / o)) && (a = t), i - .5 < (o *= n) && (o = i), "image" === e.type ? (r.top = Math.floor(.5 * (i - o)) + parseFloat(s.css("paddingTop")), r.left = Math.floor(.5 * (t - a)) + parseFloat(s.css("paddingLeft"))) : "video" === e.contentType && (a / (n = e.opts.width && e.opts.height ? a / o : e.opts.ratio || 16 / 9) < o ? o = a / n : o * n < a && (a = o * n)), r.width = a, r.height = o, r)
				},
				update: function(i) {
					var n = this;
					p.each(n.slides, function(e, t) {
						n.updateSlide(t, i)
					})
				},
				updateSlide: function(e, t) {
					var i = this,
						n = e && e.$content,
						s = e.width || e.opts.width,
						a = e.height || e.opts.height,
						o = e.$slide;
					i.adjustCaption(e), n && (s || a || "video" === e.contentType) && !e.hasError && (p.fancybox.stop(n), p.fancybox.setTranslate(n, i.getFitPos(e)), e.pos === i.currPos) && (i.isAnimating = !1, i.updateCursor()), i.adjustLayout(e), o.length && (o.trigger("refresh"), e.pos === i.currPos) && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", o.get(0).scrollHeight > o.get(0).clientHeight), i.trigger("onUpdate", e, t)
				},
				centerSlide: function(e) {
					var t = this,
						i = t.current,
						n = i.$slide;
					!t.isClosing && i && (n.siblings().css({
						transform: "",
						opacity: ""
					}), n.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), p.fancybox.animate(n, {
						top: 0,
						left: 0,
						opacity: 1
					}, e === m ? 0 : e, function() {
						n.css({
							transform: "",
							opacity: ""
						}), i.isComplete || t.complete()
					}, !1))
				},
				isMoved: function(e) {
					var t, i, e = e || this.current;
					return !!e && (i = p.fancybox.getTranslate(this.$refs.stage), t = p.fancybox.getTranslate(e.$slide), !e.$slide.hasClass("fancybox-animated")) && (.5 < Math.abs(t.top - i.top) || .5 < Math.abs(t.left - i.left))
				},
				updateCursor: function(e, t) {
					var i = this.current,
						n = this.$refs.container;
					i && !this.isClosing && this.Guestures && (n.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), t = !!(e = this.canPan(e, t)) || this.isZoomable(), n.toggleClass("fancybox-is-zoomable", t), p("[data-fancybox-zoom]").prop("disabled", !t), e ? n.addClass("fancybox-can-pan") : t && ("zoom" === i.opts.clickContent || p.isFunction(i.opts.clickContent) && "zoom" == i.opts.clickContent(i)) ? n.addClass("fancybox-can-zoomIn") : i.opts.touch && (i.opts.touch.vertical || 1 < this.group.length) && "video" !== i.contentType && n.addClass("fancybox-can-swipe"))
				},
				isZoomable: function() {
					var e, t = this.current;
					if (t && !this.isClosing && "image" === t.type && !t.hasError) {
						if (!t.isLoaded) return !0;
						if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0
					}
					return !1
				},
				isScaledDown: function(e, t) {
					var i = !1,
						n = this.current,
						s = n.$content;
					return e !== m && t !== m ? i = e < n.width && t < n.height : s && (i = (i = p.fancybox.getTranslate(s)).width < n.width && i.height < n.height), i
				},
				canPan: function(e, t) {
					var i = this.current,
						n = null,
						s = !1;
					return s = "image" === i.type && (i.isComplete || e && t) && !i.hasError && (s = this.getFitPos(i), e !== m && t !== m ? n = {
						width: e,
						height: t
					} : i.isComplete && (n = p.fancybox.getTranslate(i.$content)), n) ? s && (1.5 < Math.abs(n.width - s.width) || 1.5 < Math.abs(n.height - s.height)) : s
				},
				loadSlide: function(i) {
					var e, t, n, s = this;
					if (!i.isLoading && !i.isLoaded) {
						if (!(i.isLoading = !0) === s.trigger("beforeLoad", i)) return i.isLoading = !1;
						switch (e = i.type, (t = i.$slide).off("refresh").trigger("onReset").addClass(i.opts.slideClass), e) {
							case "image":
								s.setImage(i);
								break;
							case "iframe":
								s.setIframe(i);
								break;
							case "html":
								s.setContent(i, i.src || i.content);
								break;
							case "video":
								s.setContent(i, i.opts.video.tpl.replace(/\{\{src\}\}/gi, i.src).replace("{{format}}", i.opts.videoFormat || i.opts.video.format || "").replace("{{poster}}", i.thumb || ""));
								break;
							case "inline":
								p(i.src).length ? s.setContent(i, p(i.src)) : s.setError(i);
								break;
							case "ajax":
								s.showLoading(i), n = p.ajax(p.extend({}, i.opts.ajax.settings, {
									url: i.src,
									success: function(e, t) {
										"success" === t && s.setContent(i, e)
									},
									error: function(e, t) {
										e && "abort" !== t && s.setError(i)
									}
								})), t.one("onReset", function() {
									n.abort()
								});
								break;
							default:
								s.setError(i)
						}
						return !0
					}
				},
				setImage: function(t) {
					var e, i = this;
					setTimeout(function() {
						var e = t.$image;
						i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
					}, 50), i.checkSrcset(t), t.$content = p('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (e = o.createElement("img")).onerror = function() {
						p(this).remove(), t.$ghost = null
					}, e.onload = function() {
						i.afterLoad(t)
					}, t.$ghost = p(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
				},
				checkSrcset: function(e) {
					var t, i, n, s, a = e.opts.srcset || e.opts.image.srcset;
					if (a) {
						n = l.devicePixelRatio || 1, s = l.innerWidth * n, (i = a.split(",").map(function(e) {
							var n = {};
							return e.trim().split(/\s+/).forEach(function(e, t) {
								var i = parseInt(e.substring(0, e.length - 1), 10);
								if (0 === t) return n.url = e;
								i && (n.value = i, n.postfix = e[e.length - 1])
							}), n
						})).sort(function(e, t) {
							return e.value - t.value
						});
						for (var o = 0; o < i.length; o++) {
							var r = i[o];
							if ("w" === r.postfix && r.value >= s || "x" === r.postfix && r.value >= n) {
								t = r;
								break
							}
						}(t = !t && i.length ? i[i.length - 1] : t) && (e.src = t.url, e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value, e.width = t.value), e.opts.srcset = a)
					}
				},
				setBigImage: function(t) {
					var i = this,
						e = o.createElement("img"),
						n = p(e);
					t.$image = n.one("error", function() {
						i.setError(t)
					}).one("load", function() {
						var e;
						t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), i.afterLoad(t)), i.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < s.width() / s.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"), n.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
							t.$ghost && !i.isClosing && t.$ghost.hide()
						}, Math.min(300, Math.max(1e3, t.height / 1600))), i.hideLoading(t))
					}).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (e.complete || "complete" == e.readyState) && n.naturalWidth && n.naturalHeight ? n.trigger("load") : e.error && n.trigger("error")
				},
				resolveImageSlideSize: function(e, t, i) {
					var n = parseInt(e.opts.width, 10),
						s = parseInt(e.opts.height, 10);
					e.width = t, e.height = i, 0 < n && (e.width = n, e.height = Math.floor(n * i / t)), 0 < s && (e.width = Math.floor(s * t / i), e.height = s)
				},
				setIframe: function(s) {
					var a, t = this,
						o = s.opts.iframe,
						r = s.$slide;
					s.$content = p('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(r), r.addClass("fancybox-slide--" + s.contentType), s.$iframe = a = p(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(s.$content), o.preload ? (t.showLoading(s), a.on("load.fb error.fb", function(e) {
						this.isReady = 1, s.$slide.trigger("refresh"), t.afterLoad(s)
					}), r.on("refresh.fb", function() {
						var e, t = s.$content,
							i = o.css.width,
							n = o.css.height;
						if (1 === a[0].isReady) {
							try {
								e = a.contents().find("body")
							} catch (e) {}
							e && e.length && e.children().length && (r.css("overflow", "visible"), t.css({
								width: "100%",
								"max-width": "100%",
								height: "9999px"
							}), i === m && (i = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))), t.css("width", i || "").css("max-width", ""), n === m && (n = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))), t.css("height", n || ""), r.css("overflow", "auto")), t.removeClass("fancybox-is-hidden")
						}
					})) : t.afterLoad(s), a.attr("src", s.src), r.one("onReset", function() {
						try {
							p(this).find("iframe").hide().unbind().attr("src", "//about:blank")
						} catch (e) {}
						p(this).off("refresh.fb").empty(), s.isLoaded = !1, s.isRevealed = !1
					})
				},
				setContent: function(e, t) {
					var i;
					this.isClosing || (this.hideLoading(e), e.$content && p.fancybox.stop(e.$content), e.$slide.empty(), (i = t) && i.hasOwnProperty && i instanceof p && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = p("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === p.type(t) && (t = p("<div>").append(p.trim(t)).contents()), e.opts.filter && (t = p("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
						p(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (p(this).empty(), e.isLoaded = !1, e.isRevealed = !1)
					}), p(t).appendTo(e.$slide), p(t).is("video,audio") && (p(t).addClass("fancybox-video"), p(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || p(t).attr("width"), e.opts.height = e.opts.height || p(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e))
				},
				setError: function(e) {
					e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
				},
				showLoading: function(e) {
					(e = e || this.current) && !e.$spinner && (e.$spinner = p(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
				},
				hideLoading: function(e) {
					(e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner)
				},
				afterLoad: function(e) {
					this.isClosing || (e.isLoading = !1, e.isLoaded = !0, this.trigger("afterLoad", e), this.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = p(this.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
						return 2 == e.button && e.preventDefault(), !0
					}), "image" === e.type) && p('<div class="fancybox-spaceball"></div>').appendTo(e.$content), this.adjustCaption(e), this.adjustLayout(e), e.pos === this.currPos && this.updateCursor(), this.revealContent(e))
				},
				adjustCaption: function(e) {
					var e = e || this.current,
						t = e.opts.caption,
						i = e.opts.preventCaptionOverlap,
						n = this.$refs.caption,
						s = !1;
					n.toggleClass("fancybox-caption--separate", i), i && t && t.length && (e.pos !== this.currPos ? ((i = n.clone().appendTo(n.parent())).children().eq(0).empty().html(t), s = i.outerHeight(!0), i.empty().remove()) : this.$caption && (s = this.$caption.outerHeight(!0)), e.$slide.css("padding-bottom", s || ""))
				},
				adjustLayout: function(e) {
					var t, i, n, s, e = e || this.current;
					e.isLoaded && !0 !== e.opts.disableLayoutFix && (e.$content.css("margin-bottom", ""), e.$content.outerHeight() > e.$slide.height() + .5 && (n = e.$slide[0].style["padding-bottom"], s = e.$slide.css("padding-bottom"), 0 < parseFloat(s)) && (t = e.$slide[0].scrollHeight, e.$slide.css("padding-bottom", 0), Math.abs(t - e.$slide[0].scrollHeight) < 1 && (i = s), e.$slide.css("padding-bottom", n)), e.$content.css("margin-bottom", i))
				},
				revealContent: function(e) {
					var t, i, n, s, a = this,
						o = e.$slide,
						r = !1,
						l = !1,
						u = a.isMoved(e),
						c = e.isRevealed;
					e.isRevealed = !0, t = e.opts[a.firstRun ? "animationEffect" : "transitionEffect"], n = e.opts[a.firstRun ? "animationDuration" : "transitionDuration"], n = parseInt(e.forcedDuration === m ? n : e.forcedDuration, 10), "zoom" === (t = !u && e.pos === a.currPos && n ? t : !1) && (e.pos === a.currPos && n && "image" === e.type && !e.hasError && (l = a.getThumbPos(e)) ? r = a.getFitPos(e) : t = "fade"), "zoom" === t ? (a.isAnimating = !0, r.scaleX = r.width / l.width, r.scaleY = r.height / l.height, (s = "auto" == (s = e.opts.zoomOpacity) ? .1 < Math.abs(e.width / e.height - l.width / l.height) : s) && (l.opacity = .1, r.opacity = 1), p.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l), d(e.$content), p.fancybox.animate(e.$content, r, n, function() {
						a.isAnimating = !1, a.complete()
					})) : (a.updateSlide(e), t ? (p.fancybox.stop(o), i = "fancybox-slide--" + (e.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, o.addClass(i).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), d(o), "image" !== e.type && e.$content.hide().show(0), p.fancybox.animate(o, "fancybox-slide--current", n, function() {
						o.removeClass(i).css({
							transform: "",
							opacity: ""
						}), e.pos === a.currPos && a.complete()
					}, !0)) : (e.$content.removeClass("fancybox-is-hidden"), c || !u || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), e.pos === a.currPos && a.complete()))
				},
				getThumbPos: function(e) {
					var t, i, n, s, e = e.$thumb;
					return !!(e && (n = e[0]) && n.ownerDocument === o && (p(".fancybox-container").css("pointer-events", "none"), s = {
						x: n.getBoundingClientRect().left + n.offsetWidth / 2,
						y: n.getBoundingClientRect().top + n.offsetHeight / 2
					}, s = o.elementFromPoint(s.x, s.y) === n, p(".fancybox-container").css("pointer-events", ""), s)) && (n = p.fancybox.getTranslate(e), s = parseFloat(e.css("border-top-width") || 0), t = parseFloat(e.css("border-right-width") || 0), i = parseFloat(e.css("border-bottom-width") || 0), e = parseFloat(e.css("border-left-width") || 0), t = {
						top: n.top + s,
						left: n.left + e,
						width: n.width - t - e,
						height: n.height - s - i,
						scaleX: 1,
						scaleY: 1
					}, 0 < n.width) && 0 < n.height && t
				},
				complete: function() {
					var e, i = this,
						t = i.current,
						n = {};
					!i.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), i.preload("inline"), d(t.$slide), t.$slide.addClass("fancybox-slide--complete"), p.each(i.slides, function(e, t) {
						t.pos >= i.currPos - 1 && t.pos <= i.currPos + 1 ? n[t.pos] = t : t && (p.fancybox.stop(t.$slide), t.$slide.off().remove())
					}), i.slides = n), i.isAnimating = !1, i.updateCursor(), i.trigger("afterShow"), t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
						Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), i.next()
					}), t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : i.focus(null, !0)), t.$slide.scrollTop(0).scrollLeft(0))
				},
				preload: function(e) {
					var t, i;
					this.group.length < 2 || (i = this.slides[this.currPos + 1], (t = this.slides[this.currPos - 1]) && t.type === e && this.loadSlide(t), i && i.type === e && this.loadSlide(i))
				},
				focus: function(e, t) {
					var i = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
					this.isClosing || ((t = (t = !e && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(i).filter(function() {
						return "hidden" !== p(this).css("visibility") && !p(this).hasClass("disabled")
					})).length ? (i = t.index(o.activeElement), e && e.shiftKey ? (i < 0 || 0 == i) && (e.preventDefault(), t.eq(t.length - 1).trigger("focus")) : (i < 0 || i == t.length - 1) && (e && e.preventDefault(), t.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
				},
				activate: function() {
					var t = this;
					p(".fancybox-container").each(function() {
						var e = p(this).data("FancyBox");
						e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
					}), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
				},
				close: function(e, t) {
					function i() {
						l.cleanUp(e)
					}
					var n, s, a, o, r, l = this,
						u = l.current;
					return !l.isClosing && (!(l.isClosing = !0) === l.trigger("beforeClose", e) ? (l.isClosing = !1, c(function() {
						l.update()
					}), !1) : (l.removeEvents(), s = u.$content, n = u.opts.animationEffect, t = p.isNumeric(t) ? t : n ? u.opts.animationDuration : 0, u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? p.fancybox.stop(u.$slide) : n = !1, u.$slide.siblings().trigger("onReset").remove(), t && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", t + "ms"), l.hideLoading(u), l.hideControls(!0), l.updateCursor(), "zoom" === (n = "zoom" !== n || s && t && "image" === u.type && !l.isMoved() && !u.hasError && (r = l.getThumbPos(u)) ? n : "fade") ? (p.fancybox.stop(s), o = {
						top: (o = p.fancybox.getTranslate(s)).top,
						left: o.left,
						scaleX: o.width / r.width,
						scaleY: o.height / r.height,
						width: r.width,
						height: r.height
					}, (a = "auto" == (a = u.opts.zoomOpacity) ? .1 < Math.abs(u.width / u.height - r.width / r.height) : a) && (r.opacity = 0), p.fancybox.setTranslate(s, o), d(s), p.fancybox.animate(s, r, t, i)) : n && t ? p.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, t, i) : !0 === e ? setTimeout(i, t) : i(), !0))
				},
				cleanUp: function(e) {
					var t, i = this.current.opts.$orig;
					this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.current.opts.backFocus && (i = i && i.length && i.is(":visible") ? i : this.$trigger) && i.length && (e = l.scrollX, t = l.scrollY, i.trigger("focus"), p("html, body").scrollTop(t).scrollLeft(e)), this.current = null, (i = p.fancybox.getInstance()) ? i.activate() : (p("body").removeClass("fancybox-active compensate-for-scrollbar"), p("#fancybox-style-noscroll").remove())
				},
				trigger: function(e, t) {
					var i, n = Array.prototype.slice.call(arguments, 1),
						t = t && t.opts ? t : this.current;
					if (t ? n.unshift(t) : t = this, n.unshift(this), !1 === (i = p.isFunction(t.opts[e]) ? t.opts[e].apply(t, n) : i)) return i;
					("afterClose" !== e && this.$refs ? this.$refs.container : a).trigger(e + ".fb", n)
				},
				updateControls: function() {
					var e = this,
						t = e.current,
						i = t.index,
						n = e.$refs.container,
						s = e.$refs.caption,
						a = t.opts.caption;
					t.$slide.trigger("refresh"), a && a.length ? (e.$caption = s).children().eq(0).html(a) : e.$caption = null, e.hasHiddenControls || e.isIdle || e.showControls(), n.find("[data-fancybox-count]").html(e.group.length), n.find("[data-fancybox-index]").html(i + 1), n.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && i <= 0), n.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && i >= e.group.length - 1), "image" === t.type ? n.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && n.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), p(o.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
				},
				hideControls: function(e) {
					var t = ["infobar", "toolbar", "nav"];
					!e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map(function(e) {
						return "fancybox-show-" + e
					}).join(" ")), this.hasHiddenControls = !0
				},
				showControls: function() {
					var e = (this.current || this).opts,
						t = this.$refs.container;
					this.hasHiddenControls = !1, this.idleSecondsCounter = 0, t.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < this.group.length)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < this.group.length)).toggleClass("fancybox-is-modal", !!e.modal)
				},
				toggleControls: function() {
					this.hasHiddenControls ? this.showControls() : this.hideControls()
				}
			}), p.fancybox = {
				version: "3.5.7",
				defaults: e,
				getInstance: function(e) {
					var t = p('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
						i = Array.prototype.slice.call(arguments, 1);
					return t instanceof n && ("string" === p.type(e) ? t[e].apply(t, i) : "function" === p.type(e) && e.apply(t, i), t)
				},
				open: function(e, t, i) {
					return new n(e, t, i)
				},
				close: function(e) {
					var t = this.getInstance();
					t && (t.close(), !0 === e) && this.close(e)
				},
				destroy: function() {
					this.close(!0), a.add("body").off("click.fb-start", "**")
				},
				isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
				use3d: (e = o.createElement("div"), l.getComputedStyle && l.getComputedStyle(e) && l.getComputedStyle(e).getPropertyValue("transform") && !(o.documentMode && o.documentMode < 11)),
				getTranslate: function(e) {
					var t;
					return !(!e || !e.length) && {
						top: (t = e[0].getBoundingClientRect()).top || 0,
						left: t.left || 0,
						width: t.width,
						height: t.height,
						opacity: parseFloat(e.css("opacity"))
					}
				},
				setTranslate: function(e, t) {
					var i = "",
						n = {};
					if (e && t) return t.left === m && t.top === m || (i = (t.left === m ? e.position() : t).left + "px, " + (t.top === m ? e.position() : t).top + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), t.scaleX !== m && t.scaleY !== m ? i += " scale(" + t.scaleX + ", " + t.scaleY + ")" : t.scaleX !== m && (i += " scaleX(" + t.scaleX + ")"), i.length && (n.transform = i), t.opacity !== m && (n.opacity = t.opacity), t.width !== m && (n.width = t.width), t.height !== m && (n.height = t.height), e.css(n)
				},
				animate: function(t, i, n, s, a) {
					var o, r = this;
					p.isFunction(n) && (s = n, n = null), r.stop(t), o = r.getTranslate(t), t.on(u, function(e) {
						(!e || !e.originalEvent || t.is(e.originalEvent.target) && "z-index" != e.originalEvent.propertyName) && (r.stop(t), p.isNumeric(n) && t.css("transition-duration", ""), p.isPlainObject(i) ? i.scaleX !== m && i.scaleY !== m && r.setTranslate(t, {
							top: i.top,
							left: i.left,
							width: o.width * i.scaleX,
							height: o.height * i.scaleY,
							scaleX: 1,
							scaleY: 1
						}) : !0 !== a && t.removeClass(i), p.isFunction(s)) && s(e)
					}), p.isNumeric(n) && t.css("transition-duration", n + "ms"), p.isPlainObject(i) ? (i.scaleX !== m && i.scaleY !== m && (delete i.width, delete i.height, t.parent().hasClass("fancybox-slide--image")) && t.parent().addClass("fancybox-is-scaling"), p.fancybox.setTranslate(t, i)) : t.addClass(i), t.data("timer", setTimeout(function() {
						t.trigger(u)
					}, n + 33))
				},
				stop: function(e, t) {
					e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(u), e.off(u).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
				}
			}, p.fn.fancybox = function(e) {
				var t;
				return (t = (e = e || {}).selector || !1) ? p("body").off("click.fb-start", t).on("click.fb-start", t, {
					options: e
				}, v) : this.off("click.fb-start").on("click.fb-start", {
					items: this,
					options: e
				}, v), this
			}, a.on("click.fb-start", "[data-fancybox]", v), a.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
				p('[data-fancybox="' + p(this).attr("data-fancybox-trigger") + '"]').eq(p(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
					$trigger: p(this)
				})
			}), i = ".fancybox-button", f = "fancybox-focus", g = null, a.on("mousedown mouseup focus blur", i, function(e) {
				switch (e.type) {
					case "mousedown":
						g = p(this);
						break;
					case "mouseup":
						g = null;
						break;
					case "focusin":
						p(i).removeClass(f), p(this).is(g) || p(this).is("[disabled]") || p(this).addClass(f);
						break;
					case "focusout":
						p(i).removeClass(f)
				}
			})))
		}(window, document, jQuery),
		function(f) {
			"use strict";

			function p(i, e, t) {
				if (i) return "object" === f.type(t = t || "") && (t = f.param(t, !0)), f.each(e, function(e, t) {
					i = i.replace("$" + e, t || "")
				}), t.length && (i += (0 < i.indexOf("?") ? "&" : "?") + t), i
			}
			var n = {
					youtube: {
						matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
						params: {
							autoplay: 1,
							autohide: 1,
							fs: 1,
							rel: 0,
							hd: 1,
							wmode: "transparent",
							enablejsapi: 1,
							html5: 1
						},
						paramPlace: 8,
						type: "iframe",
						url: "https://www.youtube-nocookie.com/embed/$4",
						thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
					},
					vimeo: {
						matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
						params: {
							autoplay: 1,
							hd: 1,
							show_title: 1,
							show_byline: 1,
							show_portrait: 0,
							fullscreen: 1
						},
						paramPlace: 3,
						type: "iframe",
						url: "//player.vimeo.com/video/$2"
					},
					instagram: {
						matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
						type: "image",
						url: "//$1/p/$2/media/?size=l"
					},
					gmap_place: {
						matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
						type: "iframe",
						url: function(e) {
							return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
						}
					},
					gmap_search: {
						matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
						type: "iframe",
						url: function(e) {
							return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
						}
					}
				},
				s = (f(document).on("objectNeedsType.fb", function(e, t, s) {
					var a, o, r, l, u, c, h = s.src || "",
						d = !1,
						i = f.extend(!0, {}, n, s.opts.media);
					f.each(i, function(e, t) {
						if (o = h.match(t.matcher)) {
							if (d = t.type, c = e, u = {}, t.paramPlace && o[t.paramPlace]) {
								l = (l = "?" == (l = o[t.paramPlace])[0] ? l.substring(1) : l).split("&");
								for (var i = 0; i < l.length; ++i) {
									var n = l[i].split("=", 2);
									2 == n.length && (u[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")))
								}
							}
							return r = f.extend(!0, {}, t.params, s.opts[e], u), h = "function" === f.type(t.url) ? t.url.call(this, o, r, s) : p(t.url, o, r), a = "function" === f.type(t.thumb) ? t.thumb.call(this, o, r, s) : p(t.thumb, o), "youtube" === e ? h = h.replace(/&t=((\d+)m)?(\d+)s/, function(e, t, i, n) {
								return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
							}) : "vimeo" === e && (h = h.replace("&%23", "#")), !1
						}
					}), d ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === d && (s.opts = f.extend(!0, s.opts, {
						iframe: {
							preload: !1,
							attr: {
								scrolling: "no"
							}
						}
					})), f.extend(s, {
						type: d,
						src: h,
						origSrc: s.src,
						contentSource: c,
						contentType: "image" === d ? "image" : "gmap_place" == c || "gmap_search" == c ? "map" : "video"
					})) : h && (s.type = s.opts.defaultType)
				}), {
					youtube: {
						src: "https://www.youtube.com/iframe_api",
						class: "YT",
						loading: !1,
						loaded: !1
					},
					vimeo: {
						src: "https://player.vimeo.com/api/player.js",
						class: "Vimeo",
						loading: !1,
						loaded: !1
					},
					load: function(e) {
						var t, i = this;
						this[e].loaded ? setTimeout(function() {
							i.done(e)
						}) : this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function() {
							i[e].loaded = !0, i.done(e)
						} : t.onload = function() {
							i[e].loaded = !0, i.done(e)
						}, document.body.appendChild(t))
					},
					done: function(e) {
						var t, i;
						"youtube" === e && delete window.onYouTubeIframeAPIReady, (t = f.fancybox.getInstance()) && (i = t.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
							events: {
								onStateChange: function(e) {
									0 == e.data && t.next()
								}
							}
						}) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function() {
							t.next()
						}))
					}
				});
			f(document).on({
				"afterShow.fb": function(e, t, i) {
					1 < t.group.length && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && s.load(i.contentSource)
				}
			})
		}(jQuery),
		function(c, l, h) {
			"use strict";

			function d(e) {
				var t, i = [];
				for (t in e = (e = e.originalEvent || e || c.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[t].pageX ? i.push({
					x: e[t].pageX,
					y: e[t].pageY
				}) : e[t].clientX && i.push({
					x: e[t].clientX,
					y: e[t].clientY
				});
				return i
			}

			function f(e, t, i) {
				return t && e ? "x" === i ? e.x - t.x : "y" === i ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
			}

			function u(e) {
				if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || h.isFunction(e.get(0).onclick) || e.data("selectable")) return 1;
				for (var t = 0, i = e[0].attributes, n = i.length; t < n; t++)
					if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return 1
			}

			function p(e) {
				for (var t, i, n, s = !1;
					(t = e.get(0), n = i = n = i = void 0, i = c.getComputedStyle(t)["overflow-y"], n = c.getComputedStyle(t)["overflow-x"], i = ("scroll" === i || "auto" === i) && t.scrollHeight > t.clientHeight, n = ("scroll" === n || "auto" === n) && t.scrollWidth > t.clientWidth, !(s = i || n)) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")););
				return s
			}

			function i(e) {
				this.instance = e, this.$bg = e.$refs.bg, this.$stage = e.$refs.stage, this.$container = e.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", h.proxy(this, "ontouchstart"))
			}
			var m = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function(e) {
					return c.setTimeout(e, 1e3 / 60)
				},
				g = c.cancelAnimationFrame || c.webkitCancelAnimationFrame || c.mozCancelAnimationFrame || c.oCancelAnimationFrame || function(e) {
					c.clearTimeout(e)
				};
			i.prototype.destroy = function() {
				this.$container.off(".fb.touch"), h(l).off(".fb.touch"), this.requestId && (g(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
			}, i.prototype.ontouchstart = function(e) {
				var t = this,
					i = h(e.target),
					n = t.instance,
					s = n.current,
					a = s.$slide,
					o = s.$content,
					r = "touchstart" == e.type;
				r && t.$container.off("mousedown.fb.touch"), e.originalEvent && 2 == e.originalEvent.button || !a.length || !i.length || u(i) || u(i.parent()) || !i.is("img") && e.originalEvent.clientX > i[0].clientWidth + i.offset().left || (!s || n.isAnimating || s.$slide.hasClass("fancybox-animated") ? (e.stopPropagation(), e.preventDefault()) : (t.realPoints = t.startPoints = d(e), t.startPoints.length && (s.touch && e.stopPropagation(), t.startEvent = e, t.canTap = !0, t.$target = i, t.$content = o, t.opts = s.opts.touch, t.isPanning = !1, t.isSwiping = !1, t.isZooming = !1, t.isScrolling = !1, t.canPan = n.canPan(), t.startTime = (new Date).getTime(), t.distanceX = t.distanceY = t.distance = 0, t.canvasWidth = Math.round(a[0].clientWidth), t.canvasHeight = Math.round(a[0].clientHeight), t.contentLastPos = null, t.contentStartPos = h.fancybox.getTranslate(t.$content) || {
					top: 0,
					left: 0
				}, t.sliderStartPos = h.fancybox.getTranslate(a), t.stagePos = h.fancybox.getTranslate(n.$refs.stage), t.sliderStartPos.top -= t.stagePos.top, t.sliderStartPos.left -= t.stagePos.left, t.contentStartPos.top -= t.stagePos.top, t.contentStartPos.left -= t.stagePos.left, h(l).off(".fb.touch").on(r ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", h.proxy(t, "ontouchend")).on(r ? "touchmove.fb.touch" : "mousemove.fb.touch", h.proxy(t, "ontouchmove")), h.fancybox.isMobile && l.addEventListener("scroll", t.onscroll, !0), (t.opts || t.canPan) && (i.is(t.$stage) || t.$stage.find(i).length) || (i.is(".fancybox-image") && e.preventDefault(), h.fancybox.isMobile && i.parents(".fancybox-caption").length)) && (t.isScrollable = p(i) || p(i.parent()), h.fancybox.isMobile && t.isScrollable || e.preventDefault(), 1 !== t.startPoints.length && !s.hasError || (t.canPan ? (h.fancybox.stop(t.$content), t.isPanning = !0) : t.isSwiping = !0, t.$container.addClass("fancybox-is-grabbing")), 2 === t.startPoints.length) && "image" === s.type && (s.isLoaded || s.$ghost) && (t.canTap = !1, t.isSwiping = !1, t.isPanning = !1, t.isZooming = !0, h.fancybox.stop(t.$content), t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - h(c).scrollLeft(), t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - h(c).scrollTop(), t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width, t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height, t.startDistanceBetweenFingers = f(t.startPoints[0], t.startPoints[1]))))
			}, i.prototype.onscroll = function(e) {
				this.isScrolling = !0, l.removeEventListener("scroll", this.onscroll, !0)
			}, i.prototype.ontouchmove = function(e) {
				var t = this;
				void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? t.ontouchend(e) : t.isScrolling ? t.canTap = !1 : (t.newPoints = d(e), (t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = f(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = f(t.newPoints[0], t.startPoints[0], "y"), t.distance = f(t.newPoints[0], t.startPoints[0]), 0 < t.distance) && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))
			}, i.prototype.onSwipe = function(e) {
				var t, s = this,
					a = s.instance,
					i = s.isSwiping,
					n = s.sliderStartPos.left || 0;
				if (!0 === i) {
					if (10 < Math.abs(s.distance)) {
						if (s.canTap = !1, a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && 800 < h(c).width() ? s.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = 45 < t && t < 135 ? "y" : "x"), "y" === s.isSwiping && h.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
						a.isDragging = s.isSwiping, s.startPoints = s.newPoints, h.each(a.slides, function(e, t) {
							var i, n;
							h.fancybox.stop(t.$slide), i = h.fancybox.getTranslate(t.$slide), n = h.fancybox.getTranslate(a.$refs.stage), t.$slide.css({
								transform: "",
								opacity: "",
								"transition-duration": ""
							}).removeClass("fancybox-animated").removeClass(function(e, t) {
								return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
							}), t.pos === a.current.pos && (s.sliderStartPos.top = i.top - n.top, s.sliderStartPos.left = i.left - n.left), h.fancybox.setTranslate(t.$slide, {
								top: i.top - n.top,
								left: i.left - n.left
							})
						}), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
					}
				} else "x" == i && (0 < s.distanceX && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? n += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? n -= Math.pow(-s.distanceX, .8) : n += s.distanceX), s.sliderLastPos = {
					top: "x" == i ? 0 : s.sliderStartPos.top + s.distanceY,
					left: n
				}, s.requestId && (g(s.requestId), s.requestId = null), s.requestId = m(function() {
					s.sliderLastPos && (h.each(s.instance.slides, function(e, t) {
						var i = t.pos - s.instance.currPos;
						h.fancybox.setTranslate(t.$slide, {
							top: s.sliderLastPos.top,
							left: s.sliderLastPos.left + i * s.canvasWidth + i * t.opts.gutter
						})
					}), s.$container.addClass("fancybox-is-sliding"))
				})
			}, i.prototype.onPan = function() {
				var e = this;
				f(e.newPoints[0], e.realPoints[0]) < (h.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && g(e.requestId), e.requestId = m(function() {
					h.fancybox.setTranslate(e.$content, e.contentLastPos)
				}))
			}, i.prototype.limitMovement = function() {
				var e = this.canvasWidth,
					t = this.canvasHeight,
					i = this.distanceX,
					n = this.distanceY,
					s = this.contentStartPos,
					a = s.left,
					o = s.top,
					r = s.width,
					s = s.height,
					l = e < r ? a + i : a,
					u = o + n,
					c = Math.max(0, .5 * e - .5 * r),
					h = Math.max(0, .5 * t - .5 * s),
					e = Math.min(e - r, .5 * e - .5 * r),
					r = Math.min(t - s, .5 * t - .5 * s);
				return 0 < i && c < l && (l = c - 1 + Math.pow(-c + a + i, .8) || 0), i < 0 && l < e && (l = e + 1 - Math.pow(e - a - i, .8) || 0), 0 < n && h < u && (u = h - 1 + Math.pow(-h + o + n, .8) || 0), {
					top: u = n < 0 && u < r ? r + 1 - Math.pow(r - o - n, .8) || 0 : u,
					left: l
				}
			}, i.prototype.limitPosition = function(e, t, i, n) {
				var s = this.canvasWidth,
					a = this.canvasHeight;
				return e = s < i ? (e = 0 < e ? 0 : e) < s - i ? s - i : e : Math.max(0, s / 2 - i / 2), {
					top: t = a < n ? (t = 0 < t ? 0 : t) < a - n ? a - n : t : Math.max(0, a / 2 - n / 2),
					left: e
				}
			}, i.prototype.onZoom = function() {
				var e = this,
					t = e.contentStartPos,
					i = t.width,
					n = t.height,
					s = t.left,
					t = t.top,
					a = f(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
					o = Math.floor(i * a),
					r = Math.floor(n * a),
					i = (i - o) * e.percentageOfImageAtPinchPointX,
					n = (n - r) * e.percentageOfImageAtPinchPointY,
					l = (e.newPoints[0].x + e.newPoints[1].x) / 2 - h(c).scrollLeft(),
					u = (e.newPoints[0].y + e.newPoints[1].y) / 2 - h(c).scrollTop(),
					l = l - e.centerPointStartX,
					t = {
						top: t + (n + (u - e.centerPointStartY)),
						left: s + (i + l),
						scaleX: a,
						scaleY: a
					};
				e.canTap = !1, e.newWidth = o, e.newHeight = r, e.contentLastPos = t, e.requestId && g(e.requestId), e.requestId = m(function() {
					h.fancybox.setTranslate(e.$content, e.contentLastPos)
				})
			}, i.prototype.ontouchend = function(e) {
				var t = this,
					i = t.isSwiping,
					n = t.isPanning,
					s = t.isZooming,
					a = t.isScrolling;
				if (t.endPoints = d(e), t.dMs = Math.max((new Date).getTime() - t.startTime, 1), t.$container.removeClass("fancybox-is-grabbing"), h(l).off(".fb.touch"), l.removeEventListener("scroll", t.onscroll, !0), t.requestId && (g(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.isScrolling = !1, t.instance.isDragging = !1, t.canTap) return t.onTap(e);
				t.speed = 100, t.velocityX = t.distanceX / t.dMs * .5, t.velocityY = t.distanceY / t.dMs * .5, n ? t.endPanning() : s ? t.endZooming() : t.endSwiping(i, a)
			}, i.prototype.endSwiping = function(e, t) {
				var i = this,
					n = !1,
					s = i.instance.group.length,
					a = Math.abs(i.distanceX),
					s = "x" == e && 1 < s && (130 < i.dMs && 10 < a || 50 < a);
				i.sliderLastPos = null, "y" == e && !t && 50 < Math.abs(i.distanceY) ? (h.fancybox.animate(i.instance.current.$slide, {
					top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
					opacity: 0
				}, 200), n = i.instance.close(!0, 250)) : s && 0 < i.distanceX ? n = i.instance.previous(300) : s && i.distanceX < 0 && (n = i.instance.next(300)), !1 !== n || "x" != e && "y" != e || i.instance.centerSlide(200), i.$container.removeClass("fancybox-is-sliding")
			}, i.prototype.endPanning = function() {
				var e, t, i = this;
				i.contentLastPos && (e = !1 === i.opts.momentum || 350 < i.dMs ? (t = i.contentLastPos.left, i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, i.contentLastPos.top + 500 * i.velocityY), (t = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, t.height = i.contentStartPos.height, h.fancybox.animate(i.$content, t, 366))
			}, i.prototype.endZooming = function() {
				var e, t, i = this,
					n = i.instance.current,
					s = i.newWidth,
					a = i.newHeight;
				i.contentLastPos && (e = i.contentLastPos.left, t = i.contentLastPos.top, h.fancybox.setTranslate(i.$content, {
					top: t,
					left: e,
					width: s,
					height: a,
					scaleX: 1,
					scaleY: 1
				}), s < i.canvasWidth && a < i.canvasHeight ? i.instance.scaleToFit(150) : s > n.width || a > n.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (n = i.limitPosition(e, t, s, a), h.fancybox.animate(i.$content, n, 150)))
			}, i.prototype.onTap = function(t) {
				function e(e) {
					if (e = o.opts[e], e = h.isFunction(e) ? e.apply(a, [o, t]) : e) switch (e) {
						case "close":
							a.close(n.startEvent);
							break;
						case "toggleControls":
							a.toggleControls();
							break;
						case "next":
							a.next();
							break;
						case "nextOrClose":
							1 < a.group.length ? a.next() : a.close(n.startEvent);
							break;
						case "zoom":
							"image" == o.type && (o.isLoaded || o.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(l, u) : a.group.length < 2 && a.close(n.startEvent))
					}
				}
				var i, n = this,
					s = h(t.target),
					a = n.instance,
					o = a.current,
					r = t && d(t) || n.startPoints,
					l = r[0] ? r[0].x - h(c).scrollLeft() - n.stagePos.left : 0,
					u = r[0] ? r[0].y - h(c).scrollTop() - n.stagePos.top : 0;
				if ((!t.originalEvent || 2 != t.originalEvent.button) && (s.is("img") || !(l > s[0].clientWidth + s.offset().left))) {
					if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
					else if (s.is(".fancybox-slide")) i = "Slide";
					else {
						if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length) return;
						i = "Content"
					}
					if (n.tapped) {
						if (clearTimeout(n.tapped), n.tapped = null, 50 < Math.abs(l - n.tapX) || 50 < Math.abs(u - n.tapY)) return this;
						e("dblclick" + i)
					} else n.tapX = l, n.tapY = u, o.opts["dblclick" + i] && o.opts["dblclick" + i] !== o.opts["click" + i] ? n.tapped = setTimeout(function() {
						n.tapped = null, a.isAnimating || e("click" + i)
					}, 500) : e("click" + i);
					return this
				}
			}, h(l).on("onActivate.fb", function(e, t) {
				t && !t.Guestures && (t.Guestures = new i(t))
			}).on("beforeClose.fb", function(e, t) {
				t && t.Guestures && t.Guestures.destroy()
			})
		}(window, document, jQuery),
		function(a, o) {
			"use strict";
			o.extend(!0, o.fancybox.defaults, {
				btnTpl: {
					slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
				},
				slideShow: {
					autoStart: !1,
					speed: 3e3,
					progress: !0
				}
			});

			function i(e) {
				this.instance = e, this.init()
			}
			o.extend(i.prototype, {
				timer: null,
				isActive: !1,
				$button: null,
				init: function() {
					var e = this,
						t = e.instance,
						i = t.group[t.currIndex].opts.slideShow;
					e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
						e.toggle()
					}), t.group.length < 2 || !i ? e.$button.hide() : i.progress && (e.$progress = o('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner))
				},
				set: function(e) {
					var t = this.instance,
						i = t.current;
					i && (!0 === e || i.opts.loop || t.currIndex < t.group.length - 1) ? this.isActive && "video" !== i.contentType && (this.$progress && o.fancybox.animate(this.$progress.show(), {
						scaleX: 1
					}, i.opts.slideShow.speed), this.timer = setTimeout(function() {
						t.current.opts.loop || t.current.index != t.group.length - 1 ? t.next() : t.jumpTo(0)
					}, i.opts.slideShow.speed)) : (this.stop(), t.idleSecondsCounter = 0, t.showControls())
				},
				clear: function() {
					clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
				},
				start: function() {
					var e = this.instance.current;
					e && (this.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, e.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
				},
				stop: function() {
					var e = this.instance.current;
					this.clear(), this.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
				},
				toggle: function() {
					this.isActive ? this.stop() : this.start()
				}
			}), o(a).on({
				"onInit.fb": function(e, t) {
					t && !t.SlideShow && (t.SlideShow = new i(t))
				},
				"beforeShow.fb": function(e, t, i, n) {
					t = t && t.SlideShow;
					n ? t && i.opts.slideShow.autoStart && t.start() : t && t.isActive && t.clear()
				},
				"afterShow.fb": function(e, t, i) {
					t = t && t.SlideShow;
					t && t.isActive && t.set()
				},
				"afterKeydown.fb": function(e, t, i, n, s) {
					t = t && t.SlideShow;
					!t || !i.opts.slideShow || 80 !== s && 32 !== s || o(a.activeElement).is("button,a,input") || (n.preventDefault(), t.toggle())
				},
				"beforeClose.fb onDeactivate.fb": function(e, t) {
					t = t && t.SlideShow;
					t && t.stop()
				}
			}), o(a).on("visibilitychange", function() {
				var e = o.fancybox.getInstance(),
					e = e && e.SlideShow;
				e && e.isActive && (a.hidden ? e.clear() : e.set())
			})
		}(document, jQuery),
		function(a, i) {
			"use strict";
			var n, s = function() {
				for (var e = [
						["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
						["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
						["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
						["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
						["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
					], t = {}, i = 0; i < e.length; i++) {
					var n = e[i];
					if (n && n[1] in a) {
						for (var s = 0; s < n.length; s++) t[e[0][s]] = n[s];
						return t
					}
				}
				return !1
			}();
			s && (n = {
				request: function(e) {
					(e = e || a.documentElement)[s.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
				},
				exit: function() {
					a[s.exitFullscreen]()
				},
				toggle: function(e) {
					e = e || a.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
				},
				isFullscreen: function() {
					return Boolean(a[s.fullscreenElement])
				},
				enabled: function() {
					return Boolean(a[s.fullscreenEnabled])
				}
			}, i.extend(!0, i.fancybox.defaults, {
				btnTpl: {
					fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
				},
				fullScreen: {
					autoStart: !1
				}
			}), i(a).on(s.fullscreenchange, function() {
				var e = n.isFullscreen(),
					t = i.fancybox.getInstance();
				t && (t.current && "image" === t.current.type && t.isAnimating && (t.isAnimating = !1, t.update(!0, !0, 0), t.isComplete || t.complete()), t.trigger("onFullscreenChange", e), t.$refs.container.toggleClass("fancybox-is-fullscreen", e), t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
			})), i(a).on({
				"onInit.fb": function(e, t) {
					s ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
						e.stopPropagation(), e.preventDefault(), n.toggle()
					}), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && n.request(), t.FullScreen = n) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
				},
				"afterKeydown.fb": function(e, t, i, n, s) {
					t && t.FullScreen && 70 === s && (n.preventDefault(), t.FullScreen.toggle())
				},
				"beforeClose.fb": function(e, t) {
					t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit()
				}
			})
		}(document, jQuery),
		function(e, a) {
			"use strict";

			function i(e) {
				this.init(e)
			}
			var o = "fancybox-thumbs",
				r = o + "-active";
			a.fancybox.defaults = a.extend(!0, {
				btnTpl: {
					thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
				},
				thumbs: {
					autoStart: !1,
					hideOnClose: !0,
					parentEl: ".fancybox-container",
					axis: "y"
				}
			}, a.fancybox.defaults);
			a.extend(i.prototype, {
				$button: null,
				$grid: null,
				$list: null,
				isVisible: !1,
				isActive: !1,
				init: function(e) {
					var t = this,
						i = e.group,
						n = 0;
					t.instance = e, t.opts = i[e.currIndex].opts.thumbs, (e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
					for (var s = 0, a = i.length; s < a && (i[s].thumb && n++, !(1 < n)); s++);
					1 < n && t.opts ? (t.$button.removeAttr("style").on("click", function() {
						t.toggle()
					}), t.isActive = !0) : t.$button.hide()
				},
				create: function() {
					var i, e = this,
						t = e.instance,
						n = e.opts.parentEl,
						s = [];
					e.$grid || (e.$grid = a('<div class="' + o + " " + o + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(n).addBack().filter(n)), e.$grid.on("click", "a", function() {
						t.jumpTo(a(this).attr("data-index"))
					})), e.$list || (e.$list = a('<div class="' + o + '__list">').appendTo(e.$grid)), a.each(t.group, function(e, t) {
						(i = t.thumb) || "image" !== t.type || (i = t.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (i && i.length ? ' style="background-image:url(' + i + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
					}), e.$list[0].innerHTML = s.join(""), "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0))
				},
				focus: function(e) {
					var t, i, n = this.$list,
						s = this.$grid;
					this.instance.current && (i = (t = n.children().removeClass(r).filter('[data-index="' + this.instance.current.index + '"]').addClass(r)).position(), "y" === this.opts.axis && (i.top < 0 || i.top > n.height() - t.outerHeight()) ? n.stop().animate({
						scrollTop: n.scrollTop() + i.top
					}, e) : "x" === this.opts.axis && (i.left < s.scrollLeft() || i.left > s.scrollLeft() + (s.width() - t.outerWidth())) && n.parent().stop().animate({
						scrollLeft: i.left
					}, e))
				},
				update: function() {
					this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
				},
				hide: function() {
					this.isVisible = !1, this.update()
				},
				show: function() {
					this.isVisible = !0, this.update()
				},
				toggle: function() {
					this.isVisible = !this.isVisible, this.update()
				}
			}), a(e).on({
				"onInit.fb": function(e, t) {
					t && !t.Thumbs && (t = new i(t)).isActive && !0 === t.opts.autoStart && t.show()
				},
				"beforeShow.fb": function(e, t, i, n) {
					t = t && t.Thumbs;
					t && t.isVisible && t.focus(n ? 0 : 250)
				},
				"afterKeydown.fb": function(e, t, i, n, s) {
					t = t && t.Thumbs;
					t && t.isActive && 71 === s && (n.preventDefault(), t.toggle())
				},
				"beforeClose.fb": function(e, t) {
					t = t && t.Thumbs;
					t && t.isVisible && !1 !== t.opts.hideOnClose && t.$grid.hide()
				}
			})
		}(document, jQuery),
		function(e, s) {
			"use strict";
			s.extend(!0, s.fancybox.defaults, {
				btnTpl: {
					share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
				},
				share: {
					url: function(e, t) {
						return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
					},
					tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
				}
			}), s(e).on("click", "[data-fancybox-share]", function() {
				var e, t, i = s.fancybox.getInstance(),
					n = i.current || null;
				n && ("function" === s.type(n.opts.share.url) && (e = n.opts.share.url.apply(n, [i, n])), n = n.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === n.type ? encodeURIComponent(n.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (t = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#39;",
					"/": "&#x2F;",
					"`": "&#x60;",
					"=": "&#x3D;"
				}, String(e).replace(/[&<>"'`=\/]/g, function(e) {
					return t[e]
				}))).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), s.fancybox.open({
					src: i.translate(i, n),
					type: "html",
					opts: {
						touch: !1,
						animationEffect: !1,
						afterLoad: function(e, t) {
							i.$refs.container.one("beforeClose.fb", function() {
								e.close(null, 0)
							}), t.$content.find(".fancybox-share__button").click(function() {
								return window.open(this.href, "Share", "width=550, height=450"), !1
							})
						},
						mobile: {
							autoFocus: !1
						}
					}
				}))
			})
		}(document, jQuery),
		function(a, o, n) {
			"use strict";

			function s() {
				var e = a.location.hash.substr(1),
					t = e.split("-"),
					i = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
				return {
					hash: e,
					index: i < 1 ? 1 : i,
					gallery: t.join("-")
				}
			}

			function t(e) {
				"" !== e.gallery && n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
			}

			function r(e) {
				return !!e && "" !== (e = (e = (e.current || e).opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && e
			}
			n.escapeSelector || (n.escapeSelector = function(e) {
				return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(e, t) {
					return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
				})
			}), n(function() {
				!1 !== n.fancybox.defaults.hash && (n(o).on({
					"onInit.fb": function(e, t) {
						var i, n;
						!1 !== t.group[t.currIndex].opts.hash && (i = s(), n = r(t)) && i.gallery && n == i.gallery && (t.currIndex = i.index - 1)
					},
					"beforeShow.fb": function(e, t, i, n) {
						var s;
						i && !1 !== i.opts.hash && (s = r(t)) && (t.currentHash = s + (1 < t.group.length ? "-" + (i.index + 1) : ""), a.location.hash !== "#" + t.currentHash) && (n && !t.origHash && (t.origHash = a.location.hash), t.hashTimer && clearTimeout(t.hashTimer), t.hashTimer = setTimeout(function() {
							"replaceState" in a.history ? (a.history[n ? "pushState" : "replaceState"]({}, o.title, a.location.pathname + a.location.search + "#" + t.currentHash), n && (t.hasCreatedHistory = !0)) : a.location.hash = t.currentHash, t.hashTimer = null
						}, 300))
					},
					"beforeClose.fb": function(e, t, i) {
						i && !1 !== i.opts.hash && (clearTimeout(t.hashTimer), t.currentHash && t.hasCreatedHistory ? a.history.back() : t.currentHash && ("replaceState" in a.history ? a.history.replaceState({}, o.title, a.location.pathname + a.location.search + (t.origHash || "")) : a.location.hash = t.origHash), t.currentHash = null)
					}
				}), n(a).on("hashchange.fb", function() {
					var e = s(),
						i = null;
					n.each(n(".fancybox-container").get().reverse(), function(e, t) {
						t = n(t).data("FancyBox");
						if (t && t.currentHash) return i = t, !1
					}), i ? i.currentHash === e.gallery + "-" + e.index || 1 === e.index && i.currentHash == e.gallery || (i.currentHash = null, i.close()) : "" !== e.gallery && t(e)
				}), setTimeout(function() {
					n.fancybox.getInstance() || t(s())
				}, 50))
			})
		}(window, document, jQuery),
		function(e, t) {
			"use strict";
			var s = (new Date).getTime();
			t(e).on({
				"onInit.fb": function(e, n, t) {
					n.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
						var t = n.current,
							i = (new Date).getTime();
						n.group.length < 2 || !1 === t.opts.wheel || "auto" === t.opts.wheel && "image" !== t.type || (e.preventDefault(), e.stopPropagation(), t.$slide.hasClass("fancybox-animated")) || (e = e.originalEvent || e, i - s < 250) || (s = i, n[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())
					})
				}
			})
		}(document, jQuery)
	},
	69: function(e, t, i) {
		var n = i(70),
			i = i(71),
			s = {
				insert: "head",
				singleton: !1
			};
		n(i = "string" == typeof(i = i.__esModule ? i.default : i) ? [
			[e.i, i, ""]
		] : i, s);
		e.exports = i.locals || {}
	},
	70: function(e, t, s) {
		"use strict";
		var i, n, r = function() {
				return i = void 0 === i ? Boolean(window && document && document.all && !window.atob) : i
			},
			a = (n = {}, function(e) {
				if (void 0 === n[e]) {
					var t = document.querySelector(e);
					if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
						t = t.contentDocument.head
					} catch (e) {
						t = null
					}
					n[e] = t
				}
				return n[e]
			}),
			u = [];

		function c(e) {
			for (var t = -1, i = 0; i < u.length; i++)
				if (u[i].identifier === e) {
					t = i;
					break
				} return t
		}

		function l(e, t) {
			for (var i = {}, n = [], s = 0; s < e.length; s++) {
				var a = e[s],
					o = t.base ? a[0] + t.base : a[0],
					r = i[o] || 0,
					l = "".concat(o, " ").concat(r),
					o = (i[o] = r + 1, c(l)),
					r = {
						css: a[1],
						media: a[2],
						sourceMap: a[3]
					}; - 1 !== o ? (u[o].references++, u[o].updater(r)) : u.push({
					identifier: l,
					updater: function(t, e) {
						var i, n, s;
						{
							var a;
							s = e.singleton ? (a = m++, i = p = p || h(e), n = f.bind(null, i, a, !1), f.bind(null, i, a, !0)) : (i = h(e), n = function(e, t, i) {
								var n = i.css,
									s = i.media,
									i = i.sourceMap;
								s ? e.setAttribute("media", s) : e.removeAttribute("media");
								i && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */"));
								if (e.styleSheet) e.styleSheet.cssText = n;
								else {
									for (; e.firstChild;) e.removeChild(e.firstChild);
									e.appendChild(document.createTextNode(n))
								}
							}.bind(null, i, e), function() {
								var e = i;
								null !== e.parentNode && e.parentNode.removeChild(e)
							})
						}
						return n(t),
							function(e) {
								e ? e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap || n(t = e) : s()
							}
					}(r, t),
					references: 1
				}), n.push(l)
			}
			return n
		}

		function h(e) {
			var t = document.createElement("style"),
				i = e.attributes || {};
			if (void 0 === i.nonce && (n = s.nc) && (i.nonce = n), Object.keys(i).forEach(function(e) {
					t.setAttribute(e, i[e])
				}), "function" == typeof e.insert) e.insert(t);
			else {
				var n = a(e.insert || "head");
				if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
				n.appendChild(t)
			}
			return t
		}
		o = [];
		var o, d = function(e, t) {
			return o[e] = t, o.filter(Boolean).join("\n")
		};

		function f(e, t, i, n) {
			var i = i ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
			e.styleSheet ? e.styleSheet.cssText = d(t, i) : (n = document.createTextNode(i), (i = e.childNodes)[t] && e.removeChild(i[t]), i.length ? e.insertBefore(n, i[t]) : e.appendChild(n))
		}
		var p = null,
			m = 0;
		e.exports = function(e, a) {
			(a = a || {}).singleton || "boolean" == typeof a.singleton || (a.singleton = r());
			var o = l(e = e || [], a);
			return function(e) {
				if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
					for (var t = 0; t < o.length; t++) {
						var i = c(o[t]);
						u[i].references--
					}
					for (var e = l(e, a), n = 0; n < o.length; n++) {
						var s = c(o[n]);
						0 === u[s].references && (u[s].updater(), u.splice(s, 1))
					}
					o = e
				}
			}
		}
	},
	71: function(e, t, i) {
		(e.exports = i(72)(!1)).push([e.i, 'body.compensate-for-scrollbar{overflow:hidden}.fancybox-active{height:auto}.fancybox-is-hidden{left:-9999px;margin:0;position:absolute!important;top:-9999px;visibility:hidden}.fancybox-container{-webkit-backface-visibility:hidden;height:100%;left:0;outline:none;position:fixed;-webkit-tap-highlight-color:transparent;top:0;-ms-touch-action:manipulation;touch-action:manipulation;transform:translateZ(0);width:100%;z-index:99992}.fancybox-container *{box-sizing:border-box}.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-stage{bottom:0;left:0;position:absolute;right:0;top:0}.fancybox-outer{-webkit-overflow-scrolling:touch;overflow-y:auto}.fancybox-bg{background:#1e1e1e;opacity:0;transition-duration:inherit;transition-property:opacity;transition-timing-function:cubic-bezier(.47,0,.74,.71)}.fancybox-is-open .fancybox-bg{opacity:.9;transition-timing-function:cubic-bezier(.22,.61,.36,1)}.fancybox-caption,.fancybox-infobar,.fancybox-navigation .fancybox-button,.fancybox-toolbar{direction:ltr;opacity:0;position:absolute;transition:opacity .25s ease,visibility 0s ease .25s;visibility:hidden;z-index:99997}.fancybox-show-caption .fancybox-caption,.fancybox-show-infobar .fancybox-infobar,.fancybox-show-nav .fancybox-navigation .fancybox-button,.fancybox-show-toolbar .fancybox-toolbar{opacity:1;transition:opacity .25s ease 0s,visibility 0s ease 0s;visibility:visible}.fancybox-infobar{color:#ccc;font-size:13px;-webkit-font-smoothing:subpixel-antialiased;height:44px;left:0;line-height:44px;min-width:44px;mix-blend-mode:difference;padding:0 10px;pointer-events:none;top:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fancybox-toolbar{right:0;top:0}.fancybox-stage{direction:ltr;overflow:visible;transform:translateZ(0);z-index:99994}.fancybox-is-open .fancybox-stage{overflow:hidden}.fancybox-slide{-webkit-backface-visibility:hidden;display:none;height:100%;left:0;outline:none;overflow:auto;-webkit-overflow-scrolling:touch;padding:44px;position:absolute;text-align:center;top:0;transition-property:transform,opacity;white-space:normal;width:100%;z-index:99994}.fancybox-slide:before{content:"";display:inline-block;font-size:0;height:100%;vertical-align:middle;width:0}.fancybox-is-sliding .fancybox-slide,.fancybox-slide--current,.fancybox-slide--next,.fancybox-slide--previous{display:block}.fancybox-slide--image{overflow:hidden;padding:44px 0}.fancybox-slide--image:before{display:none}.fancybox-slide--html{padding:6px}.fancybox-content{background:#fff;display:inline-block;margin:0;max-width:100%;overflow:auto;-webkit-overflow-scrolling:touch;padding:44px;position:relative;text-align:left;vertical-align:middle}.fancybox-slide--image .fancybox-content{animation-timing-function:cubic-bezier(.5,0,.14,1);-webkit-backface-visibility:hidden;background:transparent;background-repeat:no-repeat;background-size:100% 100%;left:0;max-width:none;overflow:visible;padding:0;position:absolute;top:0;transform-origin:top left;transition-property:transform,opacity;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:99995}.fancybox-can-zoomOut .fancybox-content{cursor:zoom-out}.fancybox-can-zoomIn .fancybox-content{cursor:zoom-in}.fancybox-can-pan .fancybox-content,.fancybox-can-swipe .fancybox-content{cursor:grab}.fancybox-is-grabbing .fancybox-content{cursor:grabbing}.fancybox-container [data-selectable=true]{cursor:text}.fancybox-image,.fancybox-spaceball{background:transparent;border:0;height:100%;left:0;margin:0;max-height:none;max-width:none;padding:0;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.fancybox-spaceball{z-index:1}.fancybox-slide--iframe .fancybox-content,.fancybox-slide--map .fancybox-content,.fancybox-slide--pdf .fancybox-content,.fancybox-slide--video .fancybox-content{height:100%;overflow:visible;padding:0;width:100%}.fancybox-slide--video .fancybox-content{background:#000}.fancybox-slide--map .fancybox-content{background:#e5e3df}.fancybox-slide--iframe .fancybox-content{background:#fff}.fancybox-iframe,.fancybox-video{background:transparent;border:0;display:block;height:100%;margin:0;overflow:hidden;padding:0;width:100%}.fancybox-iframe{left:0;position:absolute;top:0}.fancybox-error{background:#fff;cursor:default;max-width:400px;padding:40px;width:100%}.fancybox-error p{color:#444;font-size:16px;line-height:20px;margin:0;padding:0}.fancybox-button{background:rgba(30,30,30,.6);border:0;border-radius:0;box-shadow:none;cursor:pointer;display:inline-block;height:44px;margin:0;padding:10px;position:relative;transition:color .2s;vertical-align:top;visibility:inherit;width:44px}.fancybox-button,.fancybox-button:link,.fancybox-button:visited{color:#ccc}.fancybox-button:hover{color:#fff}.fancybox-button:focus{outline:none}.fancybox-button.fancybox-focus{outline:1px dotted}.fancybox-button[disabled],.fancybox-button[disabled]:hover{color:#888;cursor:default;outline:none}.fancybox-button div{height:100%}.fancybox-button svg{display:block;height:100%;overflow:visible;position:relative;width:100%}.fancybox-button svg path{fill:currentColor;stroke-width:0}.fancybox-button--fsenter svg:nth-child(2),.fancybox-button--fsexit svg:first-child,.fancybox-button--pause svg:first-child,.fancybox-button--play svg:nth-child(2){display:none}.fancybox-progress{background:#ff5268;height:2px;left:0;position:absolute;right:0;top:0;transform:scaleX(0);transform-origin:0;transition-property:transform;transition-timing-function:linear;z-index:99998}.fancybox-close-small{background:transparent;border:0;border-radius:0;color:#ccc;cursor:pointer;opacity:.8;padding:8px;position:absolute;right:-12px;top:-44px;z-index:401}.fancybox-close-small:hover{color:#fff;opacity:1}.fancybox-slide--html .fancybox-close-small{color:currentColor;padding:10px;right:0;top:0}.fancybox-slide--image.fancybox-is-scaling .fancybox-content{overflow:hidden}.fancybox-is-scaling .fancybox-close-small,.fancybox-is-zoomable.fancybox-can-pan .fancybox-close-small{display:none}.fancybox-navigation .fancybox-button{background-clip:content-box;height:100px;opacity:0;position:absolute;top:calc(50% - 50px);width:70px}.fancybox-navigation .fancybox-button div{padding:7px}.fancybox-navigation .fancybox-button--arrow_left{left:0;left:env(safe-area-inset-left);padding:31px 26px 31px 6px}.fancybox-navigation .fancybox-button--arrow_right{padding:31px 6px 31px 26px;right:0;right:env(safe-area-inset-right)}.fancybox-caption{background:linear-gradient(0deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.3) 50%,rgba(0,0,0,.15) 65%,rgba(0,0,0,.075) 75.5%,rgba(0,0,0,.037) 82.85%,rgba(0,0,0,.019) 88%,transparent);bottom:0;color:#eee;font-size:14px;font-weight:400;left:0;line-height:1.5;padding:75px 44px 25px;pointer-events:none;right:0;text-align:center;z-index:99996}@supports (padding:max(0px)){.fancybox-caption{padding:75px max(44px,env(safe-area-inset-right)) max(25px,env(safe-area-inset-bottom)) max(44px,env(safe-area-inset-left))}}.fancybox-caption--separate{margin-top:-50px}.fancybox-caption__body{max-height:50vh;overflow:auto;pointer-events:all}.fancybox-caption a,.fancybox-caption a:link,.fancybox-caption a:visited{color:#ccc;text-decoration:none}.fancybox-caption a:hover{color:#fff;text-decoration:underline}.fancybox-loading{animation:a 1s linear infinite;background:transparent;border:4px solid #888;border-bottom-color:#fff;border-radius:50%;height:50px;left:50%;margin:-25px 0 0 -25px;opacity:.7;padding:0;position:absolute;top:50%;width:50px;z-index:99999}@keyframes a{to{transform:rotate(1turn)}}.fancybox-animated{transition-timing-function:cubic-bezier(0,0,.25,1)}.fancybox-fx-slide.fancybox-slide--previous{opacity:0;transform:translate3d(-100%,0,0)}.fancybox-fx-slide.fancybox-slide--next{opacity:0;transform:translate3d(100%,0,0)}.fancybox-fx-slide.fancybox-slide--current{opacity:1;transform:translateZ(0)}.fancybox-fx-fade.fancybox-slide--next,.fancybox-fx-fade.fancybox-slide--previous{opacity:0;transition-timing-function:cubic-bezier(.19,1,.22,1)}.fancybox-fx-fade.fancybox-slide--current{opacity:1}.fancybox-fx-zoom-in-out.fancybox-slide--previous{opacity:0;transform:scale3d(1.5,1.5,1.5)}.fancybox-fx-zoom-in-out.fancybox-slide--next{opacity:0;transform:scale3d(.5,.5,.5)}.fancybox-fx-zoom-in-out.fancybox-slide--current{opacity:1;transform:scaleX(1)}.fancybox-fx-rotate.fancybox-slide--previous{opacity:0;transform:rotate(-1turn)}.fancybox-fx-rotate.fancybox-slide--next{opacity:0;transform:rotate(1turn)}.fancybox-fx-rotate.fancybox-slide--current{opacity:1;transform:rotate(0deg)}.fancybox-fx-circular.fancybox-slide--previous{opacity:0;transform:scale3d(0,0,0) translate3d(-100%,0,0)}.fancybox-fx-circular.fancybox-slide--next{opacity:0;transform:scale3d(0,0,0) translate3d(100%,0,0)}.fancybox-fx-circular.fancybox-slide--current{opacity:1;transform:scaleX(1) translateZ(0)}.fancybox-fx-tube.fancybox-slide--previous{transform:translate3d(-100%,0,0) scale(.1) skew(-10deg)}.fancybox-fx-tube.fancybox-slide--next{transform:translate3d(100%,0,0) scale(.1) skew(10deg)}.fancybox-fx-tube.fancybox-slide--current{transform:translateZ(0) scale(1)}@media (max-height:576px){.fancybox-slide{padding-left:6px;padding-right:6px}.fancybox-slide--image{padding:6px 0}.fancybox-close-small{right:-6px}.fancybox-slide--image .fancybox-close-small{background:#4e4e4e;color:#f2f4f6;height:36px;opacity:1;padding:6px;right:0;top:0;width:36px}.fancybox-caption{padding-left:12px;padding-right:12px}@supports (padding:max(0px)){.fancybox-caption{padding-left:max(12px,env(safe-area-inset-left));padding-right:max(12px,env(safe-area-inset-right))}}}.fancybox-share{background:#f4f4f4;border-radius:3px;max-width:90%;padding:30px;text-align:center}.fancybox-share h1{color:#222;font-size:35px;font-weight:700;margin:0 0 20px}.fancybox-share p{margin:0;padding:0}.fancybox-share__button{border:0;border-radius:3px;display:inline-block;font-size:14px;font-weight:700;line-height:40px;margin:0 5px 10px;min-width:130px;padding:0 15px;text-decoration:none;transition:all .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.fancybox-share__button:link,.fancybox-share__button:visited{color:#fff}.fancybox-share__button:hover{text-decoration:none}.fancybox-share__button--fb{background:#3b5998}.fancybox-share__button--fb:hover{background:#344e86}.fancybox-share__button--pt{background:#bd081d}.fancybox-share__button--pt:hover{background:#aa0719}.fancybox-share__button--tw{background:#1da1f2}.fancybox-share__button--tw:hover{background:#0d95e8}.fancybox-share__button svg{height:25px;margin-right:7px;position:relative;top:-1px;vertical-align:middle;width:25px}.fancybox-share__button svg path{fill:#fff}.fancybox-share__input{background:transparent;border:0;border-bottom:1px solid #d7d7d7;border-radius:0;color:#5d5b5b;font-size:14px;margin:10px 0 0;outline:none;padding:10px 15px;width:100%}.fancybox-thumbs{background:#ddd;bottom:0;display:none;margin:0;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;padding:2px 2px 4px;position:absolute;right:0;-webkit-tap-highlight-color:rgba(0,0,0,0);top:0;width:212px;z-index:99995}.fancybox-thumbs-x{overflow-x:auto;overflow-y:hidden}.fancybox-show-thumbs .fancybox-thumbs{display:block}.fancybox-show-thumbs .fancybox-inner{right:212px}.fancybox-thumbs__list{font-size:0;height:100%;list-style:none;margin:0;overflow-x:hidden;overflow-y:auto;padding:0;position:absolute;position:relative;white-space:nowrap;width:100%}.fancybox-thumbs-x .fancybox-thumbs__list{overflow:hidden}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar{width:7px}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-track{background:#fff;border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:10px}.fancybox-thumbs__list a{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:rgba(0,0,0,.1);background-position:50%;background-repeat:no-repeat;background-size:cover;cursor:pointer;float:left;height:75px;margin:2px;max-height:calc(100% - 8px);max-width:calc(50% - 4px);outline:none;overflow:hidden;padding:0;position:relative;-webkit-tap-highlight-color:transparent;width:100px}.fancybox-thumbs__list a:before{border:6px solid #ff5268;bottom:0;content:"";left:0;opacity:0;position:absolute;right:0;top:0;transition:all .2s cubic-bezier(.25,.46,.45,.94);z-index:99991}.fancybox-thumbs__list a:focus:before{opacity:.5}.fancybox-thumbs__list a.fancybox-thumbs-active:before{opacity:1}@media (max-width:576px){.fancybox-thumbs{width:110px}.fancybox-show-thumbs .fancybox-inner{right:110px}.fancybox-thumbs__list a{max-width:calc(100% - 10px)}}', ""])
	},
	72: function(e, t, i) {
		"use strict";
		e.exports = function(i) {
			var o = [];
			return o.toString = function() {
				return this.map(function(e) {
					var t = function(e, t) {
						var i = e[1] || "",
							n = e[3];
						if (!n) return i;
						if (t && "function" == typeof btoa) return e = function(e) {
							return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
						}(n), t = n.sources.map(function(e) {
							return "/*# sourceURL=" + n.sourceRoot + e + " */"
						}), [i].concat(t).concat([e]).join("\n");
						return [i].join("\n")
					}(e, i);
					return e[2] ? "@media " + e[2] + "{" + t + "}" : t
				}).join("")
			}, o.i = function(e, t) {
				"string" == typeof e && (e = [
					[null, e, ""]
				]);
				for (var i = {}, n = 0; n < this.length; n++) {
					var s = this[n][0];
					null != s && (i[s] = !0)
				}
				for (n = 0; n < e.length; n++) {
					var a = e[n];
					null != a[0] && i[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), o.push(a))
				}
			}, o
		}
	},
	73: function(n, e, t) {
		var i;
		t = [t(8)], void 0 !== (e = "function" == typeof(i = function(i) {
			var e = function() {
					if (i && i.fn && i.fn.select2 && i.fn.select2.amd) var t = i.fn.select2.amd;
					var t;
					(function() {
						if (!t || !t.requirejs) {
							if (!t) t = {};
							else s = t;
							var e, s, c;
							(function(f) {
								var a, o, p, m, g = {},
									v = {},
									b = {},
									y = {},
									i = Object.prototype.hasOwnProperty,
									n = [].slice,
									_ = /\.js$/;

								function x(e, t) {
									return i.call(e, t)
								}

								function r(e, t) {
									var i, n, s, a, o, r, l, u, c, h, d, f, p = t && t.split("/"),
										m = b.map,
										g = m && m["*"] || {};
									if (e) {
										e = e.split("/");
										o = e.length - 1;
										if (b.nodeIdCompat && _.test(e[o])) e[o] = e[o].replace(_, "");
										if (e[0].charAt(0) === "." && p) {
											f = p.slice(0, p.length - 1);
											e = f.concat(e)
										}
										for (c = 0; c < e.length; c++) {
											d = e[c];
											if (d === ".") {
												e.splice(c, 1);
												c -= 1
											} else if (d === "..")
												if (c === 0 || c === 1 && e[2] === ".." || e[c - 1] === "..") continue;
												else if (c > 0) {
												e.splice(c - 1, 2);
												c -= 2
											}
										}
										e = e.join("/")
									}
									if ((p || g) && m) {
										i = e.split("/");
										for (c = i.length; c > 0; c -= 1) {
											n = i.slice(0, c).join("/");
											if (p)
												for (h = p.length; h > 0; h -= 1) {
													s = m[p.slice(0, h).join("/")];
													if (s) {
														s = s[n];
														if (s) {
															a = s;
															r = c;
															break
														}
													}
												}
											if (a) break;
											if (!l && g && g[n]) {
												l = g[n];
												u = c
											}
										}
										if (!a && l) {
											a = l;
											r = u
										}
										if (a) {
											i.splice(0, r, a);
											e = i.join("/")
										}
									}
									return e
								}

								function w(t, i) {
									return function() {
										var e = n.call(arguments, 0);
										if (typeof e[0] !== "string" && e.length === 1) e.push(null);
										return o.apply(f, e.concat([t, i]))
									}
								}

								function l(t) {
									return function(e) {
										return r(e, t)
									}
								}

								function D(t) {
									return function(e) {
										g[t] = e
									}
								}

								function C(e) {
									if (x(v, e)) {
										var t = v[e];
										delete v[e];
										y[e] = true;
										a.apply(f, t)
									}
									if (!x(g, e) && !x(y, e)) throw new Error("No " + e);
									return g[e]
								}

								function u(e) {
									var t, i = e ? e.indexOf("!") : -1;
									if (i > -1) {
										t = e.substring(0, i);
										e = e.substring(i + 1, e.length)
									}
									return [t, e]
								}

								function k(e) {
									return e ? u(e) : []
								}
								p = function(e, t) {
									var i, n = u(e),
										s = n[0],
										a = t[1];
									e = n[1];
									if (s) {
										s = r(s, a);
										i = C(s)
									}
									if (s)
										if (i && i.normalize) e = i.normalize(e, l(a));
										else e = r(e, a);
									else {
										e = r(e, a);
										n = u(e);
										s = n[0];
										e = n[1];
										if (s) i = C(s)
									}
									return {
										f: s ? s + "!" + e : e,
										n: e,
										pr: s,
										p: i
									}
								};

								function t(e) {
									return function() {
										return b && b.config && b.config[e] || {}
									}
								}
								m = {
									require: function(e) {
										return w(e)
									},
									exports: function(e) {
										var t = g[e];
										if (typeof t !== "undefined") return t;
										else return g[e] = {}
									},
									module: function(e) {
										return {
											id: e,
											uri: "",
											exports: g[e],
											config: t(e)
										}
									}
								};
								a = function(e, t, i, n) {
									var s, a, o, r, l, u, c = [],
										h = typeof i,
										d;
									n = n || e;
									u = k(n);
									if (h === "undefined" || h === "function") {
										t = !t.length && i.length ? ["require", "exports", "module"] : t;
										for (l = 0; l < t.length; l += 1) {
											r = p(t[l], u);
											a = r.f;
											if (a === "require") c[l] = m.require(e);
											else if (a === "exports") {
												c[l] = m.exports(e);
												d = true
											} else if (a === "module") s = c[l] = m.module(e);
											else if (x(g, a) || x(v, a) || x(y, a)) c[l] = C(a);
											else if (r.p) {
												r.p.load(r.n, w(n, true), D(a), {});
												c[l] = g[a]
											} else throw new Error(e + " missing " + a)
										}
										o = i ? i.apply(g[e], c) : undefined;
										if (e)
											if (s && s.exports !== f && s.exports !== g[e]) g[e] = s.exports;
											else if (o !== f || !d) g[e] = o
									} else if (e) g[e] = i
								};
								e = s = o = function(e, t, i, n, s) {
									if (typeof e === "string") {
										if (m[e]) return m[e](t);
										return C(p(e, k(t)).f)
									} else if (!e.splice) {
										b = e;
										if (b.deps) o(b.deps, b.callback);
										if (!t) return;
										if (t.splice) {
											e = t;
											t = i;
											i = null
										} else e = f
									}
									t = t || function() {};
									if (typeof i === "function") {
										i = n;
										n = s
									}
									if (n) a(f, e, t, i);
									else setTimeout(function() {
										a(f, e, t, i)
									}, 4);
									return o
								};
								o.config = function(e) {
									return o(e)
								};
								e._defined = g;
								c = function(e, t, i) {
									if (typeof e !== "string") throw new Error("See almond README: incorrect module build, no module name");
									if (!t.splice) {
										i = t;
										t = []
									}
									if (!x(g, e) && !x(v, e)) v[e] = [e, t, i]
								};
								c.amd = {
									jQuery: true
								}
							})();
							t.requirejs = e;
							t.require = s;
							t.define = c
						}
					})();
					t.define("almond", function() {});
					t.define("jquery", [], function() {
						var e = i || $;
						if (e == null && console && console.error) console.error("Select2: An instance of jQuery or a jQuery-compatible library was not " + "found. Make sure that you are including jQuery before Select2 on your " + "web page.");
						return e
					});
					t.define("select2/utils", ["jquery"], function(a) {
						var s = {};
						s.Extend = function(e, t) {
							var i = {}.hasOwnProperty;

							function n() {
								this.constructor = e
							}
							for (var s in t)
								if (i.call(t, s)) e[s] = t[s];
							n.prototype = t.prototype;
							e.prototype = new n;
							e.__super__ = t.prototype;
							return e
						};

						function h(e) {
							var t = e.prototype;
							var i = [];
							for (var n in t) {
								var s = t[n];
								if (typeof s !== "function") continue;
								if (n === "constructor") continue;
								i.push(n)
							}
							return i
						}
						s.Decorate = function(n, s) {
							var e = h(s);
							var t = h(n);

							function a() {
								var e = Array.prototype.unshift;
								var t = s.prototype.constructor.length;
								var i = n.prototype.constructor;
								if (t > 0) {
									e.call(arguments, n.prototype.constructor);
									i = s.prototype.constructor
								}
								i.apply(this, arguments)
							}
							s.displayName = n.displayName;

							function i() {
								this.constructor = a
							}
							a.prototype = new i;
							for (var o = 0; o < t.length; o++) {
								var r = t[o];
								a.prototype[r] = n.prototype[r]
							}
							var l = function(e) {
								var t = function() {};
								if (e in a.prototype) t = a.prototype[e];
								var i = s.prototype[e];
								return function() {
									var e = Array.prototype.unshift;
									e.call(arguments, t);
									return i.apply(this, arguments)
								}
							};
							for (var u = 0; u < e.length; u++) {
								var c = e[u];
								a.prototype[c] = l(c)
							}
							return a
						};
						var e = function() {
							this.listeners = {}
						};
						e.prototype.on = function(e, t) {
							this.listeners = this.listeners || {};
							if (e in this.listeners) this.listeners[e].push(t);
							else this.listeners[e] = [t]
						};
						e.prototype.trigger = function(e) {
							var t = Array.prototype.slice;
							var i = t.call(arguments, 1);
							this.listeners = this.listeners || {};
							if (i == null) i = [];
							if (i.length === 0) i.push({});
							i[0]._type = e;
							if (e in this.listeners) this.invoke(this.listeners[e], t.call(arguments, 1));
							if ("*" in this.listeners) this.invoke(this.listeners["*"], arguments)
						};
						e.prototype.invoke = function(e, t) {
							for (var i = 0, n = e.length; i < n; i++) e[i].apply(this, t)
						};
						s.Observable = e;
						s.generateChars = function(e) {
							var t = "";
							for (var i = 0; i < e; i++) {
								var n = Math.floor(Math.random() * 36);
								t += n.toString(36)
							}
							return t
						};
						s.bind = function(e, t) {
							return function() {
								e.apply(t, arguments)
							}
						};
						s._convertData = function(e) {
							for (var t in e) {
								var i = t.split("-");
								var n = e;
								if (i.length === 1) continue;
								for (var s = 0; s < i.length; s++) {
									var a = i[s];
									a = a.substring(0, 1).toLowerCase() + a.substring(1);
									if (!(a in n)) n[a] = {};
									if (s == i.length - 1) n[a] = e[t];
									n = n[a]
								}
								delete e[t]
							}
							return e
						};
						s.hasScroll = function(e, t) {
							var i = a(t);
							var n = t.style.overflowX;
							var s = t.style.overflowY;
							if (n === s && (s === "hidden" || s === "visible")) return false;
							if (n === "scroll" || s === "scroll") return true;
							return i.innerHeight() < t.scrollHeight || i.innerWidth() < t.scrollWidth
						};
						s.escapeMarkup = function(e) {
							var t = {
								"\\": "&#92;",
								"&": "&amp;",
								"<": "&lt;",
								">": "&gt;",
								'"': "&quot;",
								"'": "&#39;",
								"/": "&#47;"
							};
							if (typeof e !== "string") return e;
							return String(e).replace(/[&<>"'\/\\]/g, function(e) {
								return t[e]
							})
						};
						s.appendMany = function(e, t) {
							if (a.fn.jquery.substr(0, 3) === "1.7") {
								var i = a();
								a.map(t, function(e) {
									i = i.add(e)
								});
								t = i
							}
							e.append(t)
						};
						s.__cache = {};
						var i = 0;
						s.GetUniqueElementId = function(e) {
							var t = e.getAttribute("data-select2-id");
							if (t == null)
								if (e.id) {
									t = e.id;
									e.setAttribute("data-select2-id", t)
								} else {
									e.setAttribute("data-select2-id", ++i);
									t = i.toString()
								} return t
						};
						s.StoreData = function(e, t, i) {
							var n = s.GetUniqueElementId(e);
							if (!s.__cache[n]) s.__cache[n] = {};
							s.__cache[n][t] = i
						};
						s.GetData = function(e, t) {
							var i = s.GetUniqueElementId(e);
							if (t) {
								if (s.__cache[i]) {
									if (s.__cache[i][t] != null) return s.__cache[i][t];
									return a(e).data(t)
								}
								return a(e).data(t)
							} else return s.__cache[i]
						};
						s.RemoveData = function(e) {
							var t = s.GetUniqueElementId(e);
							if (s.__cache[t] != null) delete s.__cache[t];
							e.removeAttribute("data-select2-id")
						};
						return s
					});
					t.define("select2/results", ["jquery", "./utils"], function(p, m) {
						function n(e, t, i) {
							this.$element = e;
							this.data = i;
							this.options = t;
							n.__super__.constructor.call(this)
						}
						m.Extend(n, m.Observable);
						n.prototype.render = function() {
							var e = p('<ul class="select2-results__options" role="listbox"></ul>');
							if (this.options.get("multiple")) e.attr("aria-multiselectable", "true");
							this.$results = e;
							return e
						};
						n.prototype.clear = function() {
							this.$results.empty()
						};
						n.prototype.displayMessage = function(e) {
							var t = this.options.get("escapeMarkup");
							this.clear();
							this.hideLoading();
							var i = p('<li role="alert" aria-live="assertive"' + ' class="select2-results__option"></li>');
							var n = this.options.get("translations").get(e.message);
							i.append(t(n(e.args)));
							i[0].className += " select2-results__message";
							this.$results.append(i)
						};
						n.prototype.hideMessages = function() {
							this.$results.find(".select2-results__message").remove()
						};
						n.prototype.append = function(e) {
							this.hideLoading();
							var t = [];
							if (e.results == null || e.results.length === 0) {
								if (this.$results.children().length === 0) this.trigger("results:message", {
									message: "noResults"
								});
								return
							}
							e.results = this.sort(e.results);
							for (var i = 0; i < e.results.length; i++) {
								var n = e.results[i];
								var s = this.option(n);
								t.push(s)
							}
							this.$results.append(t)
						};
						n.prototype.position = function(e, t) {
							var i = t.find(".select2-results");
							i.append(e)
						};
						n.prototype.sort = function(e) {
							var t = this.options.get("sorter");
							return t(e)
						};
						n.prototype.highlightFirstItem = function() {
							var e = this.$results.find(".select2-results__option[aria-selected]");
							var t = e.filter("[aria-selected=true]");
							if (t.length > 0) t.first().trigger("mouseenter");
							else e.first().trigger("mouseenter");
							this.ensureHighlightVisible()
						};
						n.prototype.setClasses = function() {
							var i = this;
							this.data.current(function(e) {
								var n = p.map(e, function(e) {
									return e.id.toString()
								});
								var t = i.$results.find(".select2-results__option[aria-selected]");
								t.each(function() {
									var e = p(this);
									var t = m.GetData(this, "data");
									var i = "" + t.id;
									if (t.element != null && t.element.selected || t.element == null && p.inArray(i, n) > -1) e.attr("aria-selected", "true");
									else e.attr("aria-selected", "false")
								})
							})
						};
						n.prototype.showLoading = function(e) {
							this.hideLoading();
							var t = this.options.get("translations").get("searching");
							var i = {
								disabled: true,
								loading: true,
								text: t(e)
							};
							var n = this.option(i);
							n.className += " loading-results";
							this.$results.prepend(n)
						};
						n.prototype.hideLoading = function() {
							this.$results.find(".loading-results").remove()
						};
						n.prototype.option = function(e) {
							var t = document.createElement("li");
							t.className = "select2-results__option";
							var i = {
								role: "option",
								"aria-selected": "false"
							};
							var n = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
							if (e.element != null && n.call(e.element, ":disabled") || e.element == null && e.disabled) {
								delete i["aria-selected"];
								i["aria-disabled"] = "true"
							}
							if (e.id == null) delete i["aria-selected"];
							if (e._resultId != null) t.id = e._resultId;
							if (e.title) t.title = e.title;
							if (e.children) {
								i.role = "group";
								i["aria-label"] = e.text;
								delete i["aria-selected"]
							}
							for (var s in i) {
								var a = i[s];
								t.setAttribute(s, a)
							}
							if (e.children) {
								var o = p(t);
								var r = document.createElement("strong");
								r.className = "select2-results__group";
								var l = p(r);
								this.template(e, r);
								var u = [];
								for (var c = 0; c < e.children.length; c++) {
									var h = e.children[c];
									var d = this.option(h);
									u.push(d)
								}
								var f = p("<ul></ul>", {
									class: "select2-results__options select2-results__options--nested"
								});
								f.append(u);
								o.append(r);
								o.append(f)
							} else this.template(e, t);
							m.StoreData(t, "data", e);
							return t
						};
						n.prototype.bind = function(t, e) {
							var l = this;
							var i = t.id + "-results";
							this.$results.attr("id", i);
							t.on("results:all", function(e) {
								l.clear();
								l.append(e.data);
								if (t.isOpen()) {
									l.setClasses();
									l.highlightFirstItem()
								}
							});
							t.on("results:append", function(e) {
								l.append(e.data);
								if (t.isOpen()) l.setClasses()
							});
							t.on("query", function(e) {
								l.hideMessages();
								l.showLoading(e)
							});
							t.on("select", function() {
								if (!t.isOpen()) return;
								l.setClasses();
								if (l.options.get("scrollAfterSelect")) l.highlightFirstItem()
							});
							t.on("unselect", function() {
								if (!t.isOpen()) return;
								l.setClasses();
								if (l.options.get("scrollAfterSelect")) l.highlightFirstItem()
							});
							t.on("open", function() {
								l.$results.attr("aria-expanded", "true");
								l.$results.attr("aria-hidden", "false");
								l.setClasses();
								l.ensureHighlightVisible()
							});
							t.on("close", function() {
								l.$results.attr("aria-expanded", "false");
								l.$results.attr("aria-hidden", "true");
								l.$results.removeAttr("aria-activedescendant")
							});
							t.on("results:toggle", function() {
								var e = l.getHighlightedResults();
								if (e.length === 0) return;
								e.trigger("mouseup")
							});
							t.on("results:select", function() {
								var e = l.getHighlightedResults();
								if (e.length === 0) return;
								var t = m.GetData(e[0], "data");
								if (e.attr("aria-selected") == "true") l.trigger("close", {});
								else l.trigger("select", {
									data: t
								})
							});
							t.on("results:previous", function() {
								var e = l.getHighlightedResults();
								var t = l.$results.find("[aria-selected]");
								var i = t.index(e);
								if (i <= 0) return;
								var n = i - 1;
								if (e.length === 0) n = 0;
								var s = t.eq(n);
								s.trigger("mouseenter");
								var a = l.$results.offset().top;
								var o = s.offset().top;
								var r = l.$results.scrollTop() + (o - a);
								if (n === 0) l.$results.scrollTop(0);
								else if (o - a < 0) l.$results.scrollTop(r)
							});
							t.on("results:next", function() {
								var e = l.getHighlightedResults();
								var t = l.$results.find("[aria-selected]");
								var i = t.index(e);
								var n = i + 1;
								if (n >= t.length) return;
								var s = t.eq(n);
								s.trigger("mouseenter");
								var a = l.$results.offset().top + l.$results.outerHeight(false);
								var o = s.offset().top + s.outerHeight(false);
								var r = l.$results.scrollTop() + o - a;
								if (n === 0) l.$results.scrollTop(0);
								else if (o > a) l.$results.scrollTop(r)
							});
							t.on("results:focus", function(e) {
								e.element.addClass("select2-results__option--highlighted")
							});
							t.on("results:message", function(e) {
								l.displayMessage(e)
							});
							if (p.fn.mousewheel) this.$results.on("mousewheel", function(e) {
								var t = l.$results.scrollTop();
								var i = l.$results.get(0).scrollHeight - t + e.deltaY;
								var n = e.deltaY > 0 && t - e.deltaY <= 0;
								var s = e.deltaY < 0 && i <= l.$results.height();
								if (n) {
									l.$results.scrollTop(0);
									e.preventDefault();
									e.stopPropagation()
								} else if (s) {
									l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height());
									e.preventDefault();
									e.stopPropagation()
								}
							});
							this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
								var t = p(this);
								var i = m.GetData(this, "data");
								if (t.attr("aria-selected") === "true") {
									if (l.options.get("multiple")) l.trigger("unselect", {
										originalEvent: e,
										data: i
									});
									else l.trigger("close", {});
									return
								}
								l.trigger("select", {
									originalEvent: e,
									data: i
								})
							});
							this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) {
								var t = m.GetData(this, "data");
								l.getHighlightedResults().removeClass("select2-results__option--highlighted");
								l.trigger("results:focus", {
									data: t,
									element: p(this)
								})
							})
						};
						n.prototype.getHighlightedResults = function() {
							var e = this.$results.find(".select2-results__option--highlighted");
							return e
						};
						n.prototype.destroy = function() {
							this.$results.remove()
						};
						n.prototype.ensureHighlightVisible = function() {
							var e = this.getHighlightedResults();
							if (e.length === 0) return;
							var t = this.$results.find("[aria-selected]");
							var i = t.index(e);
							var n = this.$results.offset().top;
							var s = e.offset().top;
							var a = this.$results.scrollTop() + (s - n);
							var o = s - n;
							a -= e.outerHeight(false) * 2;
							if (i <= 2) this.$results.scrollTop(0);
							else if (o > this.$results.outerHeight() || o < 0) this.$results.scrollTop(a)
						};
						n.prototype.template = function(e, t) {
							var i = this.options.get("templateResult");
							var n = this.options.get("escapeMarkup");
							var s = i(e, t);
							if (s == null) t.style.display = "none";
							else if (typeof s === "string") t.innerHTML = n(s);
							else p(t).append(s)
						};
						return n
					});
					t.define("select2/keys", [], function() {
						var e = {
							BACKSPACE: 8,
							TAB: 9,
							ENTER: 13,
							SHIFT: 16,
							CTRL: 17,
							ALT: 18,
							ESC: 27,
							SPACE: 32,
							PAGE_UP: 33,
							PAGE_DOWN: 34,
							END: 35,
							HOME: 36,
							LEFT: 37,
							UP: 38,
							RIGHT: 39,
							DOWN: 40,
							DELETE: 46
						};
						return e
					});
					t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(s, a, o) {
						function i(e, t) {
							this.$element = e;
							this.options = t;
							i.__super__.constructor.call(this)
						}
						a.Extend(i, a.Observable);
						i.prototype.render = function() {
							var e = s('<span class="select2-selection" role="combobox" ' + ' aria-haspopup="true" aria-expanded="false">' + "</span>");
							this._tabindex = 0;
							if (a.GetData(this.$element[0], "old-tabindex") != null) this._tabindex = a.GetData(this.$element[0], "old-tabindex");
							else if (this.$element.attr("tabindex") != null) this._tabindex = this.$element.attr("tabindex");
							e.attr("title", this.$element.attr("title"));
							e.attr("tabindex", this._tabindex);
							e.attr("aria-disabled", "false");
							this.$selection = e;
							return e
						};
						i.prototype.bind = function(e, t) {
							var i = this;
							var n = e.id + "-results";
							this.container = e;
							this.$selection.on("focus", function(e) {
								i.trigger("focus", e)
							});
							this.$selection.on("blur", function(e) {
								i._handleBlur(e)
							});
							this.$selection.on("keydown", function(e) {
								i.trigger("keypress", e);
								if (e.which === o.SPACE) e.preventDefault()
							});
							e.on("results:focus", function(e) {
								i.$selection.attr("aria-activedescendant", e.data._resultId)
							});
							e.on("selection:update", function(e) {
								i.update(e.data)
							});
							e.on("open", function() {
								i.$selection.attr("aria-expanded", "true");
								i.$selection.attr("aria-owns", n);
								i._attachCloseHandler(e)
							});
							e.on("close", function() {
								i.$selection.attr("aria-expanded", "false");
								i.$selection.removeAttr("aria-activedescendant");
								i.$selection.removeAttr("aria-owns");
								i.$selection.trigger("focus");
								i._detachCloseHandler(e)
							});
							e.on("enable", function() {
								i.$selection.attr("tabindex", i._tabindex);
								i.$selection.attr("aria-disabled", "false")
							});
							e.on("disable", function() {
								i.$selection.attr("tabindex", "-1");
								i.$selection.attr("aria-disabled", "true")
							})
						};
						i.prototype._handleBlur = function(e) {
							var t = this;
							window.setTimeout(function() {
								if (document.activeElement == t.$selection[0] || s.contains(t.$selection[0], document.activeElement)) return;
								t.trigger("blur", e)
							}, 1)
						};
						i.prototype._attachCloseHandler = function(e) {
							s(document.body).on("mousedown.select2." + e.id, function(e) {
								var t = s(e.target);
								var i = t.closest(".select2");
								var n = s(".select2.select2-container--open");
								n.each(function() {
									if (this == i[0]) return;
									var e = a.GetData(this, "element");
									e.select2("close")
								})
							})
						};
						i.prototype._detachCloseHandler = function(e) {
							s(document.body).off("mousedown.select2." + e.id)
						};
						i.prototype.position = function(e, t) {
							var i = t.find(".selection");
							i.append(e)
						};
						i.prototype.destroy = function() {
							this._detachCloseHandler(this.container)
						};
						i.prototype.update = function(e) {
							throw new Error("The `update` method must be defined in child classes.")
						};
						i.prototype.isEnabled = function() {
							return !this.isDisabled()
						};
						i.prototype.isDisabled = function() {
							return this.options.get("disabled")
						};
						return i
					});
					t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, i, n) {
						function s() {
							s.__super__.constructor.apply(this, arguments)
						}
						i.Extend(s, t);
						s.prototype.render = function() {
							var e = s.__super__.render.call(this);
							e.addClass("select2-selection--single");
							e.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + "</span>");
							return e
						};
						s.prototype.bind = function(t, e) {
							var i = this;
							s.__super__.bind.apply(this, arguments);
							var n = t.id + "-container";
							this.$selection.find(".select2-selection__rendered").attr("id", n).attr("role", "textbox").attr("aria-readonly", "true");
							this.$selection.attr("aria-labelledby", n);
							this.$selection.on("mousedown", function(e) {
								if (e.which !== 1) return;
								i.trigger("toggle", {
									originalEvent: e
								})
							});
							this.$selection.on("focus", function(e) {});
							this.$selection.on("blur", function(e) {});
							t.on("focus", function(e) {
								if (!t.isOpen()) i.$selection.trigger("focus")
							})
						};
						s.prototype.clear = function() {
							var e = this.$selection.find(".select2-selection__rendered");
							e.empty();
							e.removeAttr("title")
						};
						s.prototype.display = function(e, t) {
							var i = this.options.get("templateSelection");
							var n = this.options.get("escapeMarkup");
							return n(i(e, t))
						};
						s.prototype.selectionContainer = function() {
							return e("<span></span>")
						};
						s.prototype.update = function(e) {
							if (e.length === 0) {
								this.clear();
								return
							}
							var t = e[0];
							var i = this.$selection.find(".select2-selection__rendered");
							var n = this.display(t, i);
							i.empty().append(n);
							var s = t.title || t.text;
							if (s) i.attr("title", s);
							else i.removeAttr("title")
						};
						return s
					});
					t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, e, l) {
						function i(e, t) {
							i.__super__.constructor.apply(this, arguments)
						}
						l.Extend(i, e);
						i.prototype.render = function() {
							var e = i.__super__.render.call(this);
							e.addClass("select2-selection--multiple");
							e.html('<ul class="select2-selection__rendered"></ul>');
							return e
						};
						i.prototype.bind = function(e, t) {
							var s = this;
							i.__super__.bind.apply(this, arguments);
							this.$selection.on("click", function(e) {
								s.trigger("toggle", {
									originalEvent: e
								})
							});
							this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
								if (s.isDisabled()) return;
								var t = a(this);
								var i = t.parent();
								var n = l.GetData(i[0], "data");
								s.trigger("unselect", {
									originalEvent: e,
									data: n
								})
							})
						};
						i.prototype.clear = function() {
							var e = this.$selection.find(".select2-selection__rendered");
							e.empty();
							e.removeAttr("title")
						};
						i.prototype.display = function(e, t) {
							var i = this.options.get("templateSelection");
							var n = this.options.get("escapeMarkup");
							return n(i(e, t))
						};
						i.prototype.selectionContainer = function() {
							var e = a('<li class="select2-selection__choice">' + '<span class="select2-selection__choice__remove" role="presentation">' + "&times;" + "</span>" + "</li>");
							return e
						};
						i.prototype.update = function(e) {
							this.clear();
							if (e.length === 0) return;
							var t = [];
							for (var i = 0; i < e.length; i++) {
								var n = e[i];
								var s = this.selectionContainer();
								var a = this.display(n, s);
								s.append(a);
								var o = n.title || n.text;
								if (o) s.attr("title", o);
								l.StoreData(s[0], "data", n);
								t.push(s)
							}
							var r = this.$selection.find(".select2-selection__rendered");
							l.appendMany(r, t)
						};
						return i
					});
					t.define("select2/selection/placeholder", ["../utils"], function(e) {
						function t(e, t, i) {
							this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
							e.call(this, t, i)
						}
						t.prototype.normalizePlaceholder = function(e, t) {
							if (typeof t === "string") t = {
								id: "",
								text: t
							};
							return t
						};
						t.prototype.createPlaceholder = function(e, t) {
							var i = this.selectionContainer();
							i.html(this.display(t));
							i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice");
							return i
						};
						t.prototype.update = function(e, t) {
							var i = t.length == 1 && t[0].id != this.placeholder.id;
							var n = t.length > 1;
							if (n || i) return e.call(this, t);
							this.clear();
							var s = this.createPlaceholder(this.placeholder);
							this.$selection.find(".select2-selection__rendered").append(s)
						};
						return t
					});
					t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(s, n, r) {
						function e() {}
						e.prototype.bind = function(e, t, i) {
							var n = this;
							e.call(this, t, i);
							if (this.placeholder == null)
								if (this.options.get("debug") && window.console && console.error) console.error("Select2: The `allowClear` option should be used in combination " + "with the `placeholder` option.");
							this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
								n._handleClear(e)
							});
							t.on("keypress", function(e) {
								n._handleKeyboardClear(e, t)
							})
						};
						e.prototype._handleClear = function(e, t) {
							if (this.isDisabled()) return;
							var i = this.$selection.find(".select2-selection__clear");
							if (i.length === 0) return;
							t.stopPropagation();
							var n = r.GetData(i[0], "data");
							var s = this.$element.val();
							this.$element.val(this.placeholder.id);
							var a = {
								data: n
							};
							this.trigger("clear", a);
							if (a.prevented) {
								this.$element.val(s);
								return
							}
							for (var o = 0; o < n.length; o++) {
								a = {
									data: n[o]
								};
								this.trigger("unselect", a);
								if (a.prevented) {
									this.$element.val(s);
									return
								}
							}
							this.$element.trigger("input").trigger("change");
							this.trigger("toggle", {})
						};
						e.prototype._handleKeyboardClear = function(e, t, i) {
							if (i.isOpen()) return;
							if (t.which == n.DELETE || t.which == n.BACKSPACE) this._handleClear(t)
						};
						e.prototype.update = function(e, t) {
							e.call(this, t);
							if (this.$selection.find(".select2-selection__placeholder").length > 0 || t.length === 0) return;
							var i = this.options.get("translations").get("removeAllItems");
							var n = s('<span class="select2-selection__clear" title="' + i() + '">' + "&times;" + "</span>");
							r.StoreData(n[0], "data", t);
							this.$selection.find(".select2-selection__rendered").prepend(n)
						};
						return e
					});
					t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(n, r, l) {
						function e(e, t, i) {
							e.call(this, t, i)
						}
						e.prototype.render = function(e) {
							var t = n('<li class="select2-search select2-search--inline">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + "</li>");
							this.$searchContainer = t;
							this.$search = t.find("input");
							var i = e.call(this);
							this._transferTabIndex();
							return i
						};
						e.prototype.bind = function(e, t, i) {
							var s = this;
							var n = t.id + "-results";
							e.call(this, t, i);
							t.on("open", function() {
								s.$search.attr("aria-controls", n);
								s.$search.trigger("focus")
							});
							t.on("close", function() {
								s.$search.val("");
								s.$search.removeAttr("aria-controls");
								s.$search.removeAttr("aria-activedescendant");
								s.$search.trigger("focus")
							});
							t.on("enable", function() {
								s.$search.prop("disabled", false);
								s._transferTabIndex()
							});
							t.on("disable", function() {
								s.$search.prop("disabled", true)
							});
							t.on("focus", function(e) {
								s.$search.trigger("focus")
							});
							t.on("results:focus", function(e) {
								if (e.data._resultId) s.$search.attr("aria-activedescendant", e.data._resultId);
								else s.$search.removeAttr("aria-activedescendant")
							});
							this.$selection.on("focusin", ".select2-search--inline", function(e) {
								s.trigger("focus", e)
							});
							this.$selection.on("focusout", ".select2-search--inline", function(e) {
								s._handleBlur(e)
							});
							this.$selection.on("keydown", ".select2-search--inline", function(e) {
								e.stopPropagation();
								s.trigger("keypress", e);
								s._keyUpPrevented = e.isDefaultPrevented();
								var t = e.which;
								if (t === l.BACKSPACE && s.$search.val() === "") {
									var i = s.$searchContainer.prev(".select2-selection__choice");
									if (i.length > 0) {
										var n = r.GetData(i[0], "data");
										s.searchRemoveChoice(n);
										e.preventDefault()
									}
								}
							});
							this.$selection.on("click", ".select2-search--inline", function(e) {
								if (s.$search.val()) e.stopPropagation()
							});
							var a = document.documentMode;
							var o = a && a <= 11;
							this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
								if (o) {
									s.$selection.off("input.search input.searchcheck");
									return
								}
								s.$selection.off("keyup.search")
							});
							this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
								if (o && e.type === "input") {
									s.$selection.off("input.search input.searchcheck");
									return
								}
								var t = e.which;
								if (t == l.SHIFT || t == l.CTRL || t == l.ALT) return;
								if (t == l.TAB) return;
								s.handleSearch(e)
							})
						};
						e.prototype._transferTabIndex = function(e) {
							this.$search.attr("tabindex", this.$selection.attr("tabindex"));
							this.$selection.attr("tabindex", "-1")
						};
						e.prototype.createPlaceholder = function(e, t) {
							this.$search.attr("placeholder", t.text)
						};
						e.prototype.update = function(e, t) {
							var i = this.$search[0] == document.activeElement;
							this.$search.attr("placeholder", "");
							e.call(this, t);
							this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
							this.resizeSearch();
							if (i) this.$search.trigger("focus")
						};
						e.prototype.handleSearch = function() {
							this.resizeSearch();
							if (!this._keyUpPrevented) {
								var e = this.$search.val();
								this.trigger("query", {
									term: e
								})
							}
							this._keyUpPrevented = false
						};
						e.prototype.searchRemoveChoice = function(e, t) {
							this.trigger("unselect", {
								data: t
							});
							this.$search.val(t.text);
							this.handleSearch()
						};
						e.prototype.resizeSearch = function() {
							this.$search.css("width", "25px");
							var e = "";
							if (this.$search.attr("placeholder") !== "") e = this.$selection.find(".select2-selection__rendered").width();
							else {
								var t = this.$search.val().length + 1;
								e = t * .75 + "em"
							}
							this.$search.css("width", e)
						};
						return e
					});
					t.define("select2/selection/eventRelay", ["jquery"], function(o) {
						function e() {}
						e.prototype.bind = function(e, t, i) {
							var n = this;
							var s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"];
							var a = ["opening", "closing", "selecting", "unselecting", "clearing"];
							e.call(this, t, i);
							t.on("*", function(e, t) {
								if (o.inArray(e, s) === -1) return;
								t = t || {};
								var i = o.Event("select2:" + e, {
									params: t
								});
								n.$element.trigger(i);
								if (o.inArray(e, a) === -1) return;
								t.prevented = i.isDefaultPrevented()
							})
						};
						return e
					});
					t.define("select2/translation", ["jquery", "require"], function(t, i) {
						function n(e) {
							this.dict = e || {}
						}
						n.prototype.all = function() {
							return this.dict
						};
						n.prototype.get = function(e) {
							return this.dict[e]
						};
						n.prototype.extend = function(e) {
							this.dict = t.extend({}, e.all(), this.dict)
						};
						n._cache = {};
						n.loadPath = function(e) {
							if (!(e in n._cache)) {
								var t = i(e);
								n._cache[e] = t
							}
							return new n(n._cache[e])
						};
						return n
					});
					t.define("select2/diacritics", [], function() {
						var e = {
							"Ⓐ": "A",
							"Ａ": "A",
							"À": "A",
							"Á": "A",
							"Â": "A",
							"Ầ": "A",
							"Ấ": "A",
							"Ẫ": "A",
							"Ẩ": "A",
							"Ã": "A",
							"Ā": "A",
							"Ă": "A",
							"Ằ": "A",
							"Ắ": "A",
							"Ẵ": "A",
							"Ẳ": "A",
							"Ȧ": "A",
							"Ǡ": "A",
							"Ä": "A",
							"Ǟ": "A",
							"Ả": "A",
							"Å": "A",
							"Ǻ": "A",
							"Ǎ": "A",
							"Ȁ": "A",
							"Ȃ": "A",
							"Ạ": "A",
							"Ậ": "A",
							"Ặ": "A",
							"Ḁ": "A",
							"Ą": "A",
							"Ⱥ": "A",
							"Ɐ": "A",
							"Ꜳ": "AA",
							"Æ": "AE",
							"Ǽ": "AE",
							"Ǣ": "AE",
							"Ꜵ": "AO",
							"Ꜷ": "AU",
							"Ꜹ": "AV",
							"Ꜻ": "AV",
							"Ꜽ": "AY",
							"Ⓑ": "B",
							"Ｂ": "B",
							"Ḃ": "B",
							"Ḅ": "B",
							"Ḇ": "B",
							"Ƀ": "B",
							"Ƃ": "B",
							"Ɓ": "B",
							"Ⓒ": "C",
							"Ｃ": "C",
							"Ć": "C",
							"Ĉ": "C",
							"Ċ": "C",
							"Č": "C",
							"Ç": "C",
							"Ḉ": "C",
							"Ƈ": "C",
							"Ȼ": "C",
							"Ꜿ": "C",
							"Ⓓ": "D",
							"Ｄ": "D",
							"Ḋ": "D",
							"Ď": "D",
							"Ḍ": "D",
							"Ḑ": "D",
							"Ḓ": "D",
							"Ḏ": "D",
							"Đ": "D",
							"Ƌ": "D",
							"Ɗ": "D",
							"Ɖ": "D",
							"Ꝺ": "D",
							"Ǳ": "DZ",
							"Ǆ": "DZ",
							"ǲ": "Dz",
							"ǅ": "Dz",
							"Ⓔ": "E",
							"Ｅ": "E",
							"È": "E",
							"É": "E",
							"Ê": "E",
							"Ề": "E",
							"Ế": "E",
							"Ễ": "E",
							"Ể": "E",
							"Ẽ": "E",
							"Ē": "E",
							"Ḕ": "E",
							"Ḗ": "E",
							"Ĕ": "E",
							"Ė": "E",
							"Ë": "E",
							"Ẻ": "E",
							"Ě": "E",
							"Ȅ": "E",
							"Ȇ": "E",
							"Ẹ": "E",
							"Ệ": "E",
							"Ȩ": "E",
							"Ḝ": "E",
							"Ę": "E",
							"Ḙ": "E",
							"Ḛ": "E",
							"Ɛ": "E",
							"Ǝ": "E",
							"Ⓕ": "F",
							"Ｆ": "F",
							"Ḟ": "F",
							"Ƒ": "F",
							"Ꝼ": "F",
							"Ⓖ": "G",
							"Ｇ": "G",
							"Ǵ": "G",
							"Ĝ": "G",
							"Ḡ": "G",
							"Ğ": "G",
							"Ġ": "G",
							"Ǧ": "G",
							"Ģ": "G",
							"Ǥ": "G",
							"Ɠ": "G",
							"Ꞡ": "G",
							"Ᵹ": "G",
							"Ꝿ": "G",
							"Ⓗ": "H",
							"Ｈ": "H",
							"Ĥ": "H",
							"Ḣ": "H",
							"Ḧ": "H",
							"Ȟ": "H",
							"Ḥ": "H",
							"Ḩ": "H",
							"Ḫ": "H",
							"Ħ": "H",
							"Ⱨ": "H",
							"Ⱶ": "H",
							"Ɥ": "H",
							"Ⓘ": "I",
							"Ｉ": "I",
							"Ì": "I",
							"Í": "I",
							"Î": "I",
							"Ĩ": "I",
							"Ī": "I",
							"Ĭ": "I",
							"İ": "I",
							"Ï": "I",
							"Ḯ": "I",
							"Ỉ": "I",
							"Ǐ": "I",
							"Ȉ": "I",
							"Ȋ": "I",
							"Ị": "I",
							"Į": "I",
							"Ḭ": "I",
							"Ɨ": "I",
							"Ⓙ": "J",
							"Ｊ": "J",
							"Ĵ": "J",
							"Ɉ": "J",
							"Ⓚ": "K",
							"Ｋ": "K",
							"Ḱ": "K",
							"Ǩ": "K",
							"Ḳ": "K",
							"Ķ": "K",
							"Ḵ": "K",
							"Ƙ": "K",
							"Ⱪ": "K",
							"Ꝁ": "K",
							"Ꝃ": "K",
							"Ꝅ": "K",
							"Ꞣ": "K",
							"Ⓛ": "L",
							"Ｌ": "L",
							"Ŀ": "L",
							"Ĺ": "L",
							"Ľ": "L",
							"Ḷ": "L",
							"Ḹ": "L",
							"Ļ": "L",
							"Ḽ": "L",
							"Ḻ": "L",
							"Ł": "L",
							"Ƚ": "L",
							"Ɫ": "L",
							"Ⱡ": "L",
							"Ꝉ": "L",
							"Ꝇ": "L",
							"Ꞁ": "L",
							"Ǉ": "LJ",
							"ǈ": "Lj",
							"Ⓜ": "M",
							"Ｍ": "M",
							"Ḿ": "M",
							"Ṁ": "M",
							"Ṃ": "M",
							"Ɱ": "M",
							"Ɯ": "M",
							"Ⓝ": "N",
							"Ｎ": "N",
							"Ǹ": "N",
							"Ń": "N",
							"Ñ": "N",
							"Ṅ": "N",
							"Ň": "N",
							"Ṇ": "N",
							"Ņ": "N",
							"Ṋ": "N",
							"Ṉ": "N",
							"Ƞ": "N",
							"Ɲ": "N",
							"Ꞑ": "N",
							"Ꞥ": "N",
							"Ǌ": "NJ",
							"ǋ": "Nj",
							"Ⓞ": "O",
							"Ｏ": "O",
							"Ò": "O",
							"Ó": "O",
							"Ô": "O",
							"Ồ": "O",
							"Ố": "O",
							"Ỗ": "O",
							"Ổ": "O",
							"Õ": "O",
							"Ṍ": "O",
							"Ȭ": "O",
							"Ṏ": "O",
							"Ō": "O",
							"Ṑ": "O",
							"Ṓ": "O",
							"Ŏ": "O",
							"Ȯ": "O",
							"Ȱ": "O",
							"Ö": "O",
							"Ȫ": "O",
							"Ỏ": "O",
							"Ő": "O",
							"Ǒ": "O",
							"Ȍ": "O",
							"Ȏ": "O",
							"Ơ": "O",
							"Ờ": "O",
							"Ớ": "O",
							"Ỡ": "O",
							"Ở": "O",
							"Ợ": "O",
							"Ọ": "O",
							"Ộ": "O",
							"Ǫ": "O",
							"Ǭ": "O",
							"Ø": "O",
							"Ǿ": "O",
							"Ɔ": "O",
							"Ɵ": "O",
							"Ꝋ": "O",
							"Ꝍ": "O",
							"Œ": "OE",
							"Ƣ": "OI",
							"Ꝏ": "OO",
							"Ȣ": "OU",
							"Ⓟ": "P",
							"Ｐ": "P",
							"Ṕ": "P",
							"Ṗ": "P",
							"Ƥ": "P",
							"Ᵽ": "P",
							"Ꝑ": "P",
							"Ꝓ": "P",
							"Ꝕ": "P",
							"Ⓠ": "Q",
							"Ｑ": "Q",
							"Ꝗ": "Q",
							"Ꝙ": "Q",
							"Ɋ": "Q",
							"Ⓡ": "R",
							"Ｒ": "R",
							"Ŕ": "R",
							"Ṙ": "R",
							"Ř": "R",
							"Ȑ": "R",
							"Ȓ": "R",
							"Ṛ": "R",
							"Ṝ": "R",
							"Ŗ": "R",
							"Ṟ": "R",
							"Ɍ": "R",
							"Ɽ": "R",
							"Ꝛ": "R",
							"Ꞧ": "R",
							"Ꞃ": "R",
							"Ⓢ": "S",
							"Ｓ": "S",
							"ẞ": "S",
							"Ś": "S",
							"Ṥ": "S",
							"Ŝ": "S",
							"Ṡ": "S",
							"Š": "S",
							"Ṧ": "S",
							"Ṣ": "S",
							"Ṩ": "S",
							"Ș": "S",
							"Ş": "S",
							"Ȿ": "S",
							"Ꞩ": "S",
							"Ꞅ": "S",
							"Ⓣ": "T",
							"Ｔ": "T",
							"Ṫ": "T",
							"Ť": "T",
							"Ṭ": "T",
							"Ț": "T",
							"Ţ": "T",
							"Ṱ": "T",
							"Ṯ": "T",
							"Ŧ": "T",
							"Ƭ": "T",
							"Ʈ": "T",
							"Ⱦ": "T",
							"Ꞇ": "T",
							"Ꜩ": "TZ",
							"Ⓤ": "U",
							"Ｕ": "U",
							"Ù": "U",
							"Ú": "U",
							"Û": "U",
							"Ũ": "U",
							"Ṹ": "U",
							"Ū": "U",
							"Ṻ": "U",
							"Ŭ": "U",
							"Ü": "U",
							"Ǜ": "U",
							"Ǘ": "U",
							"Ǖ": "U",
							"Ǚ": "U",
							"Ủ": "U",
							"Ů": "U",
							"Ű": "U",
							"Ǔ": "U",
							"Ȕ": "U",
							"Ȗ": "U",
							"Ư": "U",
							"Ừ": "U",
							"Ứ": "U",
							"Ữ": "U",
							"Ử": "U",
							"Ự": "U",
							"Ụ": "U",
							"Ṳ": "U",
							"Ų": "U",
							"Ṷ": "U",
							"Ṵ": "U",
							"Ʉ": "U",
							"Ⓥ": "V",
							"Ｖ": "V",
							"Ṽ": "V",
							"Ṿ": "V",
							"Ʋ": "V",
							"Ꝟ": "V",
							"Ʌ": "V",
							"Ꝡ": "VY",
							"Ⓦ": "W",
							"Ｗ": "W",
							"Ẁ": "W",
							"Ẃ": "W",
							"Ŵ": "W",
							"Ẇ": "W",
							"Ẅ": "W",
							"Ẉ": "W",
							"Ⱳ": "W",
							"Ⓧ": "X",
							"Ｘ": "X",
							"Ẋ": "X",
							"Ẍ": "X",
							"Ⓨ": "Y",
							"Ｙ": "Y",
							"Ỳ": "Y",
							"Ý": "Y",
							"Ŷ": "Y",
							"Ỹ": "Y",
							"Ȳ": "Y",
							"Ẏ": "Y",
							"Ÿ": "Y",
							"Ỷ": "Y",
							"Ỵ": "Y",
							"Ƴ": "Y",
							"Ɏ": "Y",
							"Ỿ": "Y",
							"Ⓩ": "Z",
							"Ｚ": "Z",
							"Ź": "Z",
							"Ẑ": "Z",
							"Ż": "Z",
							"Ž": "Z",
							"Ẓ": "Z",
							"Ẕ": "Z",
							"Ƶ": "Z",
							"Ȥ": "Z",
							"Ɀ": "Z",
							"Ⱬ": "Z",
							"Ꝣ": "Z",
							"ⓐ": "a",
							"ａ": "a",
							"ẚ": "a",
							"à": "a",
							"á": "a",
							"â": "a",
							"ầ": "a",
							"ấ": "a",
							"ẫ": "a",
							"ẩ": "a",
							"ã": "a",
							"ā": "a",
							"ă": "a",
							"ằ": "a",
							"ắ": "a",
							"ẵ": "a",
							"ẳ": "a",
							"ȧ": "a",
							"ǡ": "a",
							"ä": "a",
							"ǟ": "a",
							"ả": "a",
							"å": "a",
							"ǻ": "a",
							"ǎ": "a",
							"ȁ": "a",
							"ȃ": "a",
							"ạ": "a",
							"ậ": "a",
							"ặ": "a",
							"ḁ": "a",
							"ą": "a",
							"ⱥ": "a",
							"ɐ": "a",
							"ꜳ": "aa",
							"æ": "ae",
							"ǽ": "ae",
							"ǣ": "ae",
							"ꜵ": "ao",
							"ꜷ": "au",
							"ꜹ": "av",
							"ꜻ": "av",
							"ꜽ": "ay",
							"ⓑ": "b",
							"ｂ": "b",
							"ḃ": "b",
							"ḅ": "b",
							"ḇ": "b",
							"ƀ": "b",
							"ƃ": "b",
							"ɓ": "b",
							"ⓒ": "c",
							"ｃ": "c",
							"ć": "c",
							"ĉ": "c",
							"ċ": "c",
							"č": "c",
							"ç": "c",
							"ḉ": "c",
							"ƈ": "c",
							"ȼ": "c",
							"ꜿ": "c",
							"ↄ": "c",
							"ⓓ": "d",
							"ｄ": "d",
							"ḋ": "d",
							"ď": "d",
							"ḍ": "d",
							"ḑ": "d",
							"ḓ": "d",
							"ḏ": "d",
							"đ": "d",
							"ƌ": "d",
							"ɖ": "d",
							"ɗ": "d",
							"ꝺ": "d",
							"ǳ": "dz",
							"ǆ": "dz",
							"ⓔ": "e",
							"ｅ": "e",
							"è": "e",
							"é": "e",
							"ê": "e",
							"ề": "e",
							"ế": "e",
							"ễ": "e",
							"ể": "e",
							"ẽ": "e",
							"ē": "e",
							"ḕ": "e",
							"ḗ": "e",
							"ĕ": "e",
							"ė": "e",
							"ë": "e",
							"ẻ": "e",
							"ě": "e",
							"ȅ": "e",
							"ȇ": "e",
							"ẹ": "e",
							"ệ": "e",
							"ȩ": "e",
							"ḝ": "e",
							"ę": "e",
							"ḙ": "e",
							"ḛ": "e",
							"ɇ": "e",
							"ɛ": "e",
							"ǝ": "e",
							"ⓕ": "f",
							"ｆ": "f",
							"ḟ": "f",
							"ƒ": "f",
							"ꝼ": "f",
							"ⓖ": "g",
							"ｇ": "g",
							"ǵ": "g",
							"ĝ": "g",
							"ḡ": "g",
							"ğ": "g",
							"ġ": "g",
							"ǧ": "g",
							"ģ": "g",
							"ǥ": "g",
							"ɠ": "g",
							"ꞡ": "g",
							"ᵹ": "g",
							"ꝿ": "g",
							"ⓗ": "h",
							"ｈ": "h",
							"ĥ": "h",
							"ḣ": "h",
							"ḧ": "h",
							"ȟ": "h",
							"ḥ": "h",
							"ḩ": "h",
							"ḫ": "h",
							"ẖ": "h",
							"ħ": "h",
							"ⱨ": "h",
							"ⱶ": "h",
							"ɥ": "h",
							"ƕ": "hv",
							"ⓘ": "i",
							"ｉ": "i",
							"ì": "i",
							"í": "i",
							"î": "i",
							"ĩ": "i",
							"ī": "i",
							"ĭ": "i",
							"ï": "i",
							"ḯ": "i",
							"ỉ": "i",
							"ǐ": "i",
							"ȉ": "i",
							"ȋ": "i",
							"ị": "i",
							"į": "i",
							"ḭ": "i",
							"ɨ": "i",
							"ı": "i",
							"ⓙ": "j",
							"ｊ": "j",
							"ĵ": "j",
							"ǰ": "j",
							"ɉ": "j",
							"ⓚ": "k",
							"ｋ": "k",
							"ḱ": "k",
							"ǩ": "k",
							"ḳ": "k",
							"ķ": "k",
							"ḵ": "k",
							"ƙ": "k",
							"ⱪ": "k",
							"ꝁ": "k",
							"ꝃ": "k",
							"ꝅ": "k",
							"ꞣ": "k",
							"ⓛ": "l",
							"ｌ": "l",
							"ŀ": "l",
							"ĺ": "l",
							"ľ": "l",
							"ḷ": "l",
							"ḹ": "l",
							"ļ": "l",
							"ḽ": "l",
							"ḻ": "l",
							"ſ": "l",
							"ł": "l",
							"ƚ": "l",
							"ɫ": "l",
							"ⱡ": "l",
							"ꝉ": "l",
							"ꞁ": "l",
							"ꝇ": "l",
							"ǉ": "lj",
							"ⓜ": "m",
							"ｍ": "m",
							"ḿ": "m",
							"ṁ": "m",
							"ṃ": "m",
							"ɱ": "m",
							"ɯ": "m",
							"ⓝ": "n",
							"ｎ": "n",
							"ǹ": "n",
							"ń": "n",
							"ñ": "n",
							"ṅ": "n",
							"ň": "n",
							"ṇ": "n",
							"ņ": "n",
							"ṋ": "n",
							"ṉ": "n",
							"ƞ": "n",
							"ɲ": "n",
							"ŉ": "n",
							"ꞑ": "n",
							"ꞥ": "n",
							"ǌ": "nj",
							"ⓞ": "o",
							"ｏ": "o",
							"ò": "o",
							"ó": "o",
							"ô": "o",
							"ồ": "o",
							"ố": "o",
							"ỗ": "o",
							"ổ": "o",
							"õ": "o",
							"ṍ": "o",
							"ȭ": "o",
							"ṏ": "o",
							"ō": "o",
							"ṑ": "o",
							"ṓ": "o",
							"ŏ": "o",
							"ȯ": "o",
							"ȱ": "o",
							"ö": "o",
							"ȫ": "o",
							"ỏ": "o",
							"ő": "o",
							"ǒ": "o",
							"ȍ": "o",
							"ȏ": "o",
							"ơ": "o",
							"ờ": "o",
							"ớ": "o",
							"ỡ": "o",
							"ở": "o",
							"ợ": "o",
							"ọ": "o",
							"ộ": "o",
							"ǫ": "o",
							"ǭ": "o",
							"ø": "o",
							"ǿ": "o",
							"ɔ": "o",
							"ꝋ": "o",
							"ꝍ": "o",
							"ɵ": "o",
							"œ": "oe",
							"ƣ": "oi",
							"ȣ": "ou",
							"ꝏ": "oo",
							"ⓟ": "p",
							"ｐ": "p",
							"ṕ": "p",
							"ṗ": "p",
							"ƥ": "p",
							"ᵽ": "p",
							"ꝑ": "p",
							"ꝓ": "p",
							"ꝕ": "p",
							"ⓠ": "q",
							"ｑ": "q",
							"ɋ": "q",
							"ꝗ": "q",
							"ꝙ": "q",
							"ⓡ": "r",
							"ｒ": "r",
							"ŕ": "r",
							"ṙ": "r",
							"ř": "r",
							"ȑ": "r",
							"ȓ": "r",
							"ṛ": "r",
							"ṝ": "r",
							"ŗ": "r",
							"ṟ": "r",
							"ɍ": "r",
							"ɽ": "r",
							"ꝛ": "r",
							"ꞧ": "r",
							"ꞃ": "r",
							"ⓢ": "s",
							"ｓ": "s",
							"ß": "s",
							"ś": "s",
							"ṥ": "s",
							"ŝ": "s",
							"ṡ": "s",
							"š": "s",
							"ṧ": "s",
							"ṣ": "s",
							"ṩ": "s",
							"ș": "s",
							"ş": "s",
							"ȿ": "s",
							"ꞩ": "s",
							"ꞅ": "s",
							"ẛ": "s",
							"ⓣ": "t",
							"ｔ": "t",
							"ṫ": "t",
							"ẗ": "t",
							"ť": "t",
							"ṭ": "t",
							"ț": "t",
							"ţ": "t",
							"ṱ": "t",
							"ṯ": "t",
							"ŧ": "t",
							"ƭ": "t",
							"ʈ": "t",
							"ⱦ": "t",
							"ꞇ": "t",
							"ꜩ": "tz",
							"ⓤ": "u",
							"ｕ": "u",
							"ù": "u",
							"ú": "u",
							"û": "u",
							"ũ": "u",
							"ṹ": "u",
							"ū": "u",
							"ṻ": "u",
							"ŭ": "u",
							"ü": "u",
							"ǜ": "u",
							"ǘ": "u",
							"ǖ": "u",
							"ǚ": "u",
							"ủ": "u",
							"ů": "u",
							"ű": "u",
							"ǔ": "u",
							"ȕ": "u",
							"ȗ": "u",
							"ư": "u",
							"ừ": "u",
							"ứ": "u",
							"ữ": "u",
							"ử": "u",
							"ự": "u",
							"ụ": "u",
							"ṳ": "u",
							"ų": "u",
							"ṷ": "u",
							"ṵ": "u",
							"ʉ": "u",
							"ⓥ": "v",
							"ｖ": "v",
							"ṽ": "v",
							"ṿ": "v",
							"ʋ": "v",
							"ꝟ": "v",
							"ʌ": "v",
							"ꝡ": "vy",
							"ⓦ": "w",
							"ｗ": "w",
							"ẁ": "w",
							"ẃ": "w",
							"ŵ": "w",
							"ẇ": "w",
							"ẅ": "w",
							"ẘ": "w",
							"ẉ": "w",
							"ⱳ": "w",
							"ⓧ": "x",
							"ｘ": "x",
							"ẋ": "x",
							"ẍ": "x",
							"ⓨ": "y",
							"ｙ": "y",
							"ỳ": "y",
							"ý": "y",
							"ŷ": "y",
							"ỹ": "y",
							"ȳ": "y",
							"ẏ": "y",
							"ÿ": "y",
							"ỷ": "y",
							"ẙ": "y",
							"ỵ": "y",
							"ƴ": "y",
							"ɏ": "y",
							"ỿ": "y",
							"ⓩ": "z",
							"ｚ": "z",
							"ź": "z",
							"ẑ": "z",
							"ż": "z",
							"ž": "z",
							"ẓ": "z",
							"ẕ": "z",
							"ƶ": "z",
							"ȥ": "z",
							"ɀ": "z",
							"ⱬ": "z",
							"ꝣ": "z",
							"Ά": "Α",
							"Έ": "Ε",
							"Ή": "Η",
							"Ί": "Ι",
							"Ϊ": "Ι",
							"Ό": "Ο",
							"Ύ": "Υ",
							"Ϋ": "Υ",
							"Ώ": "Ω",
							"ά": "α",
							"έ": "ε",
							"ή": "η",
							"ί": "ι",
							"ϊ": "ι",
							"ΐ": "ι",
							"ό": "ο",
							"ύ": "υ",
							"ϋ": "υ",
							"ΰ": "υ",
							"ώ": "ω",
							"ς": "σ",
							"’": "'"
						};
						return e
					});
					t.define("select2/data/base", ["../utils"], function(n) {
						function i(e, t) {
							i.__super__.constructor.call(this)
						}
						n.Extend(i, n.Observable);
						i.prototype.current = function(e) {
							throw new Error("The `current` method must be defined in child classes.")
						};
						i.prototype.query = function(e, t) {
							throw new Error("The `query` method must be defined in child classes.")
						};
						i.prototype.bind = function(e, t) {};
						i.prototype.destroy = function() {};
						i.prototype.generateResultId = function(e, t) {
							var i = e.id + "-result-";
							i += n.generateChars(4);
							if (t.id != null) i += "-" + t.id.toString();
							else i += "-" + n.generateChars(4);
							return i
						};
						return i
					});
					t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, r, l) {
						function i(e, t) {
							this.$element = e;
							this.options = t;
							i.__super__.constructor.call(this)
						}
						r.Extend(i, e);
						i.prototype.current = function(e) {
							var i = [];
							var n = this;
							this.$element.find(":selected").each(function() {
								var e = l(this);
								var t = n.item(e);
								i.push(t)
							});
							e(i)
						};
						i.prototype.select = function(s) {
							var a = this;
							s.selected = true;
							if (l(s.element).is("option")) {
								s.element.selected = true;
								this.$element.trigger("input").trigger("change");
								return
							}
							if (this.$element.prop("multiple")) this.current(function(e) {
								var t = [];
								s = [s];
								s.push.apply(s, e);
								for (var i = 0; i < s.length; i++) {
									var n = s[i].id;
									if (l.inArray(n, t) === -1) t.push(n)
								}
								a.$element.val(t);
								a.$element.trigger("input").trigger("change")
							});
							else {
								var e = s.id;
								this.$element.val(e);
								this.$element.trigger("input").trigger("change")
							}
						};
						i.prototype.unselect = function(s) {
							var a = this;
							if (!this.$element.prop("multiple")) return;
							s.selected = false;
							if (l(s.element).is("option")) {
								s.element.selected = false;
								this.$element.trigger("input").trigger("change");
								return
							}
							this.current(function(e) {
								var t = [];
								for (var i = 0; i < e.length; i++) {
									var n = e[i].id;
									if (n !== s.id && l.inArray(n, t) === -1) t.push(n)
								}
								a.$element.val(t);
								a.$element.trigger("input").trigger("change")
							})
						};
						i.prototype.bind = function(e, t) {
							var i = this;
							this.container = e;
							e.on("select", function(e) {
								i.select(e.data)
							});
							e.on("unselect", function(e) {
								i.unselect(e.data)
							})
						};
						i.prototype.destroy = function() {
							this.$element.find("*").each(function() {
								r.RemoveData(this)
							})
						};
						i.prototype.query = function(n, e) {
							var s = [];
							var a = this;
							var t = this.$element.children();
							t.each(function() {
								var e = l(this);
								if (!e.is("option") && !e.is("optgroup")) return;
								var t = a.item(e);
								var i = a.matches(n, t);
								if (i !== null) s.push(i)
							});
							e({
								results: s
							})
						};
						i.prototype.addOptions = function(e) {
							r.appendMany(this.$element, e)
						};
						i.prototype.option = function(e) {
							var t;
							if (e.children) {
								t = document.createElement("optgroup");
								t.label = e.text
							} else {
								t = document.createElement("option");
								if (t.textContent !== undefined) t.textContent = e.text;
								else t.innerText = e.text
							}
							if (e.id !== undefined) t.value = e.id;
							if (e.disabled) t.disabled = true;
							if (e.selected) t.selected = true;
							if (e.title) t.title = e.title;
							var i = l(t);
							var n = this._normalizeItem(e);
							n.element = t;
							r.StoreData(t, "data", n);
							return i
						};
						i.prototype.item = function(e) {
							var t = {};
							t = r.GetData(e[0], "data");
							if (t != null) return t;
							if (e.is("option")) t = {
								id: e.val(),
								text: e.text(),
								disabled: e.prop("disabled"),
								selected: e.prop("selected"),
								title: e.prop("title")
							};
							else if (e.is("optgroup")) {
								t = {
									text: e.prop("label"),
									children: [],
									title: e.prop("title")
								};
								var i = e.children("option");
								var n = [];
								for (var s = 0; s < i.length; s++) {
									var a = l(i[s]);
									var o = this.item(a);
									n.push(o)
								}
								t.children = n
							}
							t = this._normalizeItem(t);
							t.element = e[0];
							r.StoreData(e[0], "data", t);
							return t
						};
						i.prototype._normalizeItem = function(e) {
							if (e !== Object(e)) e = {
								id: e,
								text: e
							};
							e = l.extend({}, {
								text: ""
							}, e);
							var t = {
								selected: false,
								disabled: false
							};
							if (e.id != null) e.id = e.id.toString();
							if (e.text != null) e.text = e.text.toString();
							if (e._resultId == null && e.id && this.container != null) e._resultId = this.generateResultId(this.container, e);
							return l.extend({}, t, e)
						};
						i.prototype.matches = function(e, t) {
							var i = this.options.get("matcher");
							return i(e, t)
						};
						return i
					});
					t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, p, m) {
						function n(e, t) {
							this._dataToConvert = t.get("data") || [];
							n.__super__.constructor.call(this, e, t)
						}
						p.Extend(n, e);
						n.prototype.bind = function(e, t) {
							n.__super__.bind.call(this, e, t);
							this.addOptions(this.convertToOptions(this._dataToConvert))
						};
						n.prototype.select = function(i) {
							var e = this.$element.find("option").filter(function(e, t) {
								return t.value == i.id.toString()
							});
							if (e.length === 0) {
								e = this.option(i);
								this.addOptions(e)
							}
							n.__super__.select.call(this, i)
						};
						n.prototype.convertToOptions = function(e) {
							var t = this;
							var i = this.$element.find("option");
							var n = i.map(function() {
								return t.item(m(this)).id
							}).get();
							var s = [];

							function a(e) {
								return function() {
									return m(this).val() == e.id
								}
							}
							for (var o = 0; o < e.length; o++) {
								var r = this._normalizeItem(e[o]);
								if (m.inArray(r.id, n) >= 0) {
									var l = i.filter(a(r));
									var u = this.item(l);
									var c = m.extend(true, {}, r, u);
									var h = this.option(c);
									l.replaceWith(h);
									continue
								}
								var d = this.option(r);
								if (r.children) {
									var f = this.convertToOptions(r.children);
									p.appendMany(d, f)
								}
								s.push(d)
							}
							return s
						};
						return n
					});
					t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, o) {
						function i(e, t) {
							this.ajaxOptions = this._applyDefaults(t.get("ajax"));
							if (this.ajaxOptions.processResults != null) this.processResults = this.ajaxOptions.processResults;
							i.__super__.constructor.call(this, e, t)
						}
						t.Extend(i, e);
						i.prototype._applyDefaults = function(e) {
							var t = {
								data: function(e) {
									return o.extend({}, e, {
										q: e.term
									})
								},
								transport: function(e, t, i) {
									var n = o.ajax(e);
									n.then(t);
									n.fail(i);
									return n
								}
							};
							return o.extend({}, t, e, true)
						};
						i.prototype.processResults = function(e) {
							return e
						};
						i.prototype.query = function(i, n) {
							var e = [];
							var s = this;
							if (this._request != null) {
								if (o.isFunction(this._request.abort)) this._request.abort();
								this._request = null
							}
							var t = o.extend({
								type: "GET"
							}, this.ajaxOptions);
							if (typeof t.url === "function") t.url = t.url.call(this.$element, i);
							if (typeof t.data === "function") t.data = t.data.call(this.$element, i);

							function a() {
								var e = t.transport(t, function(e) {
									var t = s.processResults(e, i);
									if (s.options.get("debug") && window.console && console.error)
										if (!t || !t.results || !o.isArray(t.results)) console.error("Select2: The AJAX results did not return an array in the " + "`results` key of the response.");
									n(t)
								}, function() {
									if ("status" in e && (e.status === 0 || e.status === "0")) return;
									s.trigger("results:message", {
										message: "errorLoading"
									})
								});
								s._request = e
							}
							if (this.ajaxOptions.delay && i.term != null) {
								if (this._queryTimeout) window.clearTimeout(this._queryTimeout);
								this._queryTimeout = window.setTimeout(a, this.ajaxOptions.delay)
							} else a()
						};
						return i
					});
					t.define("select2/data/tags", ["jquery"], function(c) {
						function e(e, t, i) {
							var n = i.get("tags");
							var s = i.get("createTag");
							if (s !== undefined) this.createTag = s;
							var a = i.get("insertTag");
							if (a !== undefined) this.insertTag = a;
							e.call(this, t, i);
							if (c.isArray(n))
								for (var o = 0; o < n.length; o++) {
									var r = n[o];
									var l = this._normalizeItem(r);
									var u = this.option(l);
									this.$element.append(u)
								}
						}
						e.prototype.query = function(e, h, d) {
							var f = this;
							this._removeOldTags();
							if (h.term == null || h.page != null) {
								e.call(this, h, d);
								return
							}

							function p(e, t) {
								var i = e.results;
								for (var n = 0; n < i.length; n++) {
									var s = i[n];
									var a = s.children != null && !p({
										results: s.children
									}, true);
									var o = (s.text || "").toUpperCase();
									var r = (h.term || "").toUpperCase();
									var l = o === r;
									if (l || a) {
										if (t) return false;
										e.data = i;
										d(e);
										return
									}
								}
								if (t) return true;
								var u = f.createTag(h);
								if (u != null) {
									var c = f.option(u);
									c.attr("data-select2-tag", true);
									f.addOptions([c]);
									f.insertTag(i, u)
								}
								e.results = i;
								d(e)
							}
							e.call(this, h, p)
						};
						e.prototype.createTag = function(e, t) {
							var i = c.trim(t.term);
							if (i === "") return null;
							return {
								id: i,
								text: i
							}
						};
						e.prototype.insertTag = function(e, t, i) {
							t.unshift(i)
						};
						e.prototype._removeOldTags = function(e) {
							var t = this.$element.find("option[data-select2-tag]");
							t.each(function() {
								if (this.selected) return;
								c(this).remove()
							})
						};
						return e
					});
					t.define("select2/data/tokenizer", ["jquery"], function(d) {
						function e(e, t, i) {
							var n = i.get("tokenizer");
							if (n !== undefined) this.tokenizer = n;
							e.call(this, t, i)
						}
						e.prototype.bind = function(e, t, i) {
							e.call(this, t, i);
							this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
						};
						e.prototype.query = function(e, t, i) {
							var s = this;

							function n(e) {
								var t = s._normalizeItem(e);
								var i = s.$element.find("option").filter(function() {
									return d(this).val() === t.id
								});
								if (!i.length) {
									var n = s.option(t);
									n.attr("data-select2-tag", true);
									s._removeOldTags();
									s.addOptions([n])
								}
								a(t)
							}

							function a(e) {
								s.trigger("select", {
									data: e
								})
							}
							t.term = t.term || "";
							var o = this.tokenizer(t, this.options, n);
							if (o.term !== t.term) {
								if (this.$search.length) {
									this.$search.val(o.term);
									this.$search.trigger("focus")
								}
								t.term = o.term
							}
							e.call(this, t, i)
						};
						e.prototype.tokenizer = function(e, t, i, n) {
							var s = i.get("tokenSeparators") || [];
							var a = t.term;
							var o = 0;
							var r = this.createTag || function(e) {
								return {
									id: e.term,
									text: e.term
								}
							};
							while (o < a.length) {
								var l = a[o];
								if (d.inArray(l, s) === -1) {
									o++;
									continue
								}
								var u = a.substr(0, o);
								var c = d.extend({}, t, {
									term: u
								});
								var h = r(c);
								if (h == null) {
									o++;
									continue
								}
								n(h);
								a = a.substr(o + 1) || "";
								o = 0
							}
							return {
								term: a
							}
						};
						return e
					});
					t.define("select2/data/minimumInputLength", [], function() {
						function e(e, t, i) {
							this.minimumInputLength = i.get("minimumInputLength");
							e.call(this, t, i)
						}
						e.prototype.query = function(e, t, i) {
							t.term = t.term || "";
							if (t.term.length < this.minimumInputLength) {
								this.trigger("results:message", {
									message: "inputTooShort",
									args: {
										minimum: this.minimumInputLength,
										input: t.term,
										params: t
									}
								});
								return
							}
							e.call(this, t, i)
						};
						return e
					});
					t.define("select2/data/maximumInputLength", [], function() {
						function e(e, t, i) {
							this.maximumInputLength = i.get("maximumInputLength");
							e.call(this, t, i)
						}
						e.prototype.query = function(e, t, i) {
							t.term = t.term || "";
							if (this.maximumInputLength > 0 && t.term.length > this.maximumInputLength) {
								this.trigger("results:message", {
									message: "inputTooLong",
									args: {
										maximum: this.maximumInputLength,
										input: t.term,
										params: t
									}
								});
								return
							}
							e.call(this, t, i)
						};
						return e
					});
					t.define("select2/data/maximumSelectionLength", [], function() {
						function e(e, t, i) {
							this.maximumSelectionLength = i.get("maximumSelectionLength");
							e.call(this, t, i)
						}
						e.prototype.bind = function(e, t, i) {
							var n = this;
							e.call(this, t, i);
							t.on("select", function() {
								n._checkIfMaximumSelected()
							})
						};
						e.prototype.query = function(e, t, i) {
							var n = this;
							this._checkIfMaximumSelected(function() {
								e.call(n, t, i)
							})
						};
						e.prototype._checkIfMaximumSelected = function(e, i) {
							var n = this;
							this.current(function(e) {
								var t = e != null ? e.length : 0;
								if (n.maximumSelectionLength > 0 && t >= n.maximumSelectionLength) {
									n.trigger("results:message", {
										message: "maximumSelected",
										args: {
											maximum: n.maximumSelectionLength
										}
									});
									return
								}
								if (i) i()
							})
						};
						return e
					});
					t.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
						function i(e, t) {
							this.$element = e;
							this.options = t;
							i.__super__.constructor.call(this)
						}
						e.Extend(i, e.Observable);
						i.prototype.render = function() {
							var e = t('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + "</span>");
							e.attr("dir", this.options.get("dir"));
							this.$dropdown = e;
							return e
						};
						i.prototype.bind = function() {};
						i.prototype.position = function(e, t) {};
						i.prototype.destroy = function() {
							this.$dropdown.remove()
						};
						return i
					});
					t.define("select2/dropdown/search", ["jquery", "../utils"], function(a, e) {
						function t() {}
						t.prototype.render = function(e) {
							var t = e.call(this);
							var i = a('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + "</span>");
							this.$searchContainer = i;
							this.$search = i.find("input");
							t.prepend(i);
							return t
						};
						t.prototype.bind = function(e, t, i) {
							var n = this;
							var s = t.id + "-results";
							e.call(this, t, i);
							this.$search.on("keydown", function(e) {
								n.trigger("keypress", e);
								n._keyUpPrevented = e.isDefaultPrevented()
							});
							this.$search.on("input", function(e) {
								a(this).off("keyup")
							});
							this.$search.on("keyup input", function(e) {
								n.handleSearch(e)
							});
							t.on("open", function() {
								n.$search.attr("tabindex", 0);
								n.$search.attr("aria-controls", s);
								n.$search.trigger("focus");
								window.setTimeout(function() {
									n.$search.trigger("focus")
								}, 0)
							});
							t.on("close", function() {
								n.$search.attr("tabindex", -1);
								n.$search.removeAttr("aria-controls");
								n.$search.removeAttr("aria-activedescendant");
								n.$search.val("");
								n.$search.trigger("blur")
							});
							t.on("focus", function() {
								if (!t.isOpen()) n.$search.trigger("focus")
							});
							t.on("results:all", function(e) {
								if (e.query.term == null || e.query.term === "") {
									var t = n.showSearch(e);
									if (t) n.$searchContainer.removeClass("select2-search--hide");
									else n.$searchContainer.addClass("select2-search--hide")
								}
							});
							t.on("results:focus", function(e) {
								if (e.data._resultId) n.$search.attr("aria-activedescendant", e.data._resultId);
								else n.$search.removeAttr("aria-activedescendant")
							})
						};
						t.prototype.handleSearch = function(e) {
							if (!this._keyUpPrevented) {
								var t = this.$search.val();
								this.trigger("query", {
									term: t
								})
							}
							this._keyUpPrevented = false
						};
						t.prototype.showSearch = function(e, t) {
							return true
						};
						return t
					});
					t.define("select2/dropdown/hidePlaceholder", [], function() {
						function e(e, t, i, n) {
							this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
							e.call(this, t, i, n)
						}
						e.prototype.append = function(e, t) {
							t.results = this.removePlaceholder(t.results);
							e.call(this, t)
						};
						e.prototype.normalizePlaceholder = function(e, t) {
							if (typeof t === "string") t = {
								id: "",
								text: t
							};
							return t
						};
						e.prototype.removePlaceholder = function(e, t) {
							var i = t.slice(0);
							for (var n = t.length - 1; n >= 0; n--) {
								var s = t[n];
								if (this.placeholder.id === s.id) i.splice(n, 1)
							}
							return i
						};
						return e
					});
					t.define("select2/dropdown/infiniteScroll", ["jquery"], function(n) {
						function e(e, t, i, n) {
							this.lastParams = {};
							e.call(this, t, i, n);
							this.$loadingMore = this.createLoadingMore();
							this.loading = false
						}
						e.prototype.append = function(e, t) {
							this.$loadingMore.remove();
							this.loading = false;
							e.call(this, t);
							if (this.showLoadingMore(t)) {
								this.$results.append(this.$loadingMore);
								this.loadMoreIfNeeded()
							}
						};
						e.prototype.bind = function(e, t, i) {
							var n = this;
							e.call(this, t, i);
							t.on("query", function(e) {
								n.lastParams = e;
								n.loading = true
							});
							t.on("query:append", function(e) {
								n.lastParams = e;
								n.loading = true
							});
							this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
						};
						e.prototype.loadMoreIfNeeded = function() {
							var e = n.contains(document.documentElement, this.$loadingMore[0]);
							if (this.loading || !e) return;
							var t = this.$results.offset().top + this.$results.outerHeight(false);
							var i = this.$loadingMore.offset().top + this.$loadingMore.outerHeight(false);
							if (t + 50 >= i) this.loadMore()
						};
						e.prototype.loadMore = function() {
							this.loading = true;
							var e = n.extend({}, {
								page: 1
							}, this.lastParams);
							e.page++;
							this.trigger("query:append", e)
						};
						e.prototype.showLoadingMore = function(e, t) {
							return t.pagination && t.pagination.more
						};
						e.prototype.createLoadingMore = function() {
							var e = n("<li " + 'class="select2-results__option select2-results__option--load-more"' + 'role="option" aria-disabled="true"></li>');
							var t = this.options.get("translations").get("loadingMore");
							e.html(t(this.lastParams));
							return e
						};
						return e
					});
					t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f, r) {
						function e(e, t, i) {
							this.$dropdownParent = f(i.get("dropdownParent") || document.body);
							e.call(this, t, i)
						}
						e.prototype.bind = function(e, t, i) {
							var n = this;
							e.call(this, t, i);
							t.on("open", function() {
								n._showDropdown();
								n._attachPositioningHandler(t);
								n._bindContainerResultHandlers(t)
							});
							t.on("close", function() {
								n._hideDropdown();
								n._detachPositioningHandler(t)
							});
							this.$dropdownContainer.on("mousedown", function(e) {
								e.stopPropagation()
							})
						};
						e.prototype.destroy = function(e) {
							e.call(this);
							this.$dropdownContainer.remove()
						};
						e.prototype.position = function(e, t, i) {
							t.attr("class", i.attr("class"));
							t.removeClass("select2");
							t.addClass("select2-container--open");
							t.css({
								position: "absolute",
								top: -999999
							});
							this.$container = i
						};
						e.prototype.render = function(e) {
							var t = f("<span></span>");
							var i = e.call(this);
							t.append(i);
							this.$dropdownContainer = t;
							return t
						};
						e.prototype._hideDropdown = function(e) {
							this.$dropdownContainer.detach()
						};
						e.prototype._bindContainerResultHandlers = function(e, t) {
							if (this._containerResultsHandlersBound) return;
							var i = this;
							t.on("results:all", function() {
								i._positionDropdown();
								i._resizeDropdown()
							});
							t.on("results:append", function() {
								i._positionDropdown();
								i._resizeDropdown()
							});
							t.on("results:message", function() {
								i._positionDropdown();
								i._resizeDropdown()
							});
							t.on("select", function() {
								i._positionDropdown();
								i._resizeDropdown()
							});
							t.on("unselect", function() {
								i._positionDropdown();
								i._resizeDropdown()
							});
							this._containerResultsHandlersBound = true
						};
						e.prototype._attachPositioningHandler = function(e, t) {
							var i = this;
							var n = "scroll.select2." + t.id;
							var s = "resize.select2." + t.id;
							var a = "orientationchange.select2." + t.id;
							var o = this.$container.parents().filter(r.hasScroll);
							o.each(function() {
								r.StoreData(this, "select2-scroll-position", {
									x: f(this).scrollLeft(),
									y: f(this).scrollTop()
								})
							});
							o.on(n, function(e) {
								var t = r.GetData(this, "select2-scroll-position");
								f(this).scrollTop(t.y)
							});
							f(window).on(n + " " + s + " " + a, function(e) {
								i._positionDropdown();
								i._resizeDropdown()
							})
						};
						e.prototype._detachPositioningHandler = function(e, t) {
							var i = "scroll.select2." + t.id;
							var n = "resize.select2." + t.id;
							var s = "orientationchange.select2." + t.id;
							var a = this.$container.parents().filter(r.hasScroll);
							a.off(i);
							f(window).off(i + " " + n + " " + s)
						};
						e.prototype._positionDropdown = function() {
							var e = f(window);
							var t = this.$dropdown.hasClass("select2-dropdown--above");
							var i = this.$dropdown.hasClass("select2-dropdown--below");
							var n = null;
							var s = this.$container.offset();
							s.bottom = s.top + this.$container.outerHeight(false);
							var a = {
								height: this.$container.outerHeight(false)
							};
							a.top = s.top;
							a.bottom = s.top + a.height;
							var o = {
								height: this.$dropdown.outerHeight(false)
							};
							var r = {
								top: e.scrollTop(),
								bottom: e.scrollTop() + e.height()
							};
							var l = r.top < s.top - o.height;
							var u = r.bottom > s.bottom + o.height;
							var c = {
								left: s.left,
								top: a.bottom
							};
							var h = this.$dropdownParent;
							if (h.css("position") === "static") h = h.offsetParent();
							var d = {
								top: 0,
								left: 0
							};
							if (f.contains(document.body, h[0]) || h[0].isConnected) d = h.offset();
							c.top -= d.top;
							c.left -= d.left;
							if (!t && !i) n = "below";
							if (!u && l && !t) n = "above";
							else if (!l && u && t) n = "below";
							if (n == "above" || t && n !== "below") c.top = a.top - d.top - o.height;
							if (n != null) {
								this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n);
								this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)
							}
							this.$dropdownContainer.css(c)
						};
						e.prototype._resizeDropdown = function() {
							var e = {
								width: this.$container.outerWidth(false) + "px"
							};
							if (this.options.get("dropdownAutoWidth")) {
								e.minWidth = e.width;
								e.position = "relative";
								e.width = "auto"
							}
							this.$dropdown.css(e)
						};
						e.prototype._showDropdown = function(e) {
							this.$dropdownContainer.appendTo(this.$dropdownParent);
							this._positionDropdown();
							this._resizeDropdown()
						};
						return e
					});
					t.define("select2/dropdown/minimumResultsForSearch", [], function() {
						function s(e) {
							var t = 0;
							for (var i = 0; i < e.length; i++) {
								var n = e[i];
								if (n.children) t += s(n.children);
								else t++
							}
							return t
						}

						function e(e, t, i, n) {
							this.minimumResultsForSearch = i.get("minimumResultsForSearch");
							if (this.minimumResultsForSearch < 0) this.minimumResultsForSearch = Infinity;
							e.call(this, t, i, n)
						}
						e.prototype.showSearch = function(e, t) {
							if (s(t.data.results) < this.minimumResultsForSearch) return false;
							return e.call(this, t)
						};
						return e
					});
					t.define("select2/dropdown/selectOnClose", ["../utils"], function(a) {
						function e() {}
						e.prototype.bind = function(e, t, i) {
							var n = this;
							e.call(this, t, i);
							t.on("close", function(e) {
								n._handleSelectOnClose(e)
							})
						};
						e.prototype._handleSelectOnClose = function(e, t) {
							if (t && t.originalSelect2Event != null) {
								var i = t.originalSelect2Event;
								if (i._type === "select" || i._type === "unselect") return
							}
							var n = this.getHighlightedResults();
							if (n.length < 1) return;
							var s = a.GetData(n[0], "data");
							if (s.element != null && s.element.selected || s.element == null && s.selected) return;
							this.trigger("select", {
								data: s
							})
						};
						return e
					});
					t.define("select2/dropdown/closeOnSelect", [], function() {
						function e() {}
						e.prototype.bind = function(e, t, i) {
							var n = this;
							e.call(this, t, i);
							t.on("select", function(e) {
								n._selectTriggered(e)
							});
							t.on("unselect", function(e) {
								n._selectTriggered(e)
							})
						};
						e.prototype._selectTriggered = function(e, t) {
							var i = t.originalEvent;
							if (i && (i.ctrlKey || i.metaKey)) return;
							this.trigger("close", {
								originalEvent: i,
								originalSelect2Event: t
							})
						};
						return e
					});
					t.define("select2/i18n/en", [], function() {
						return {
							errorLoading: function() {
								return "The results could not be loaded."
							},
							inputTooLong: function(e) {
								var t = e.input.length - e.maximum;
								var i = "Please delete " + t + " character";
								if (t != 1) i += "s";
								return i
							},
							inputTooShort: function(e) {
								var t = e.minimum - e.input.length;
								var i = "Please enter " + t + " or more characters";
								return i
							},
							loadingMore: function() {
								return "Loading more results…"
							},
							maximumSelected: function(e) {
								var t = "You can only select " + e.maximum + " item";
								if (e.maximum != 1) t += "s";
								return t
							},
							noResults: function() {
								return "No results found"
							},
							searching: function() {
								return "Searching…"
							},
							removeAllItems: function() {
								return "Remove all items"
							}
						}
					});
					t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(c, u, h, d, f, p, m, g, v, b, o, i, y, _, x, w, D, C, k, S, T, A, E, F, P, $, M, I, e) {
						function t() {
							this.reset()
						}
						t.prototype.apply = function(e) {
							e = c.extend(true, {}, this.defaults, e);
							if (e.dataAdapter == null) {
								if (e.ajax != null) e.dataAdapter = x;
								else if (e.data != null) e.dataAdapter = _;
								else e.dataAdapter = y;
								if (e.minimumInputLength > 0) e.dataAdapter = b.Decorate(e.dataAdapter, C);
								if (e.maximumInputLength > 0) e.dataAdapter = b.Decorate(e.dataAdapter, k);
								if (e.maximumSelectionLength > 0) e.dataAdapter = b.Decorate(e.dataAdapter, S);
								if (e.tags) e.dataAdapter = b.Decorate(e.dataAdapter, w);
								if (e.tokenSeparators != null || e.tokenizer != null) e.dataAdapter = b.Decorate(e.dataAdapter, D);
								if (e.query != null) {
									var t = u(e.amdBase + "compat/query");
									e.dataAdapter = b.Decorate(e.dataAdapter, t)
								}
								if (e.initSelection != null) {
									var i = u(e.amdBase + "compat/initSelection");
									e.dataAdapter = b.Decorate(e.dataAdapter, i)
								}
							}
							if (e.resultsAdapter == null) {
								e.resultsAdapter = h;
								if (e.ajax != null) e.resultsAdapter = b.Decorate(e.resultsAdapter, F);
								if (e.placeholder != null) e.resultsAdapter = b.Decorate(e.resultsAdapter, E);
								if (e.selectOnClose) e.resultsAdapter = b.Decorate(e.resultsAdapter, M)
							}
							if (e.dropdownAdapter == null) {
								if (e.multiple) e.dropdownAdapter = T;
								else {
									var n = b.Decorate(T, A);
									e.dropdownAdapter = n
								}
								if (e.minimumResultsForSearch !== 0) e.dropdownAdapter = b.Decorate(e.dropdownAdapter, $);
								if (e.closeOnSelect) e.dropdownAdapter = b.Decorate(e.dropdownAdapter, I);
								if (e.dropdownCssClass != null || e.dropdownCss != null || e.adaptDropdownCssClass != null) {
									var s = u(e.amdBase + "compat/dropdownCss");
									e.dropdownAdapter = b.Decorate(e.dropdownAdapter, s)
								}
								e.dropdownAdapter = b.Decorate(e.dropdownAdapter, P)
							}
							if (e.selectionAdapter == null) {
								if (e.multiple) e.selectionAdapter = f;
								else e.selectionAdapter = d;
								if (e.placeholder != null) e.selectionAdapter = b.Decorate(e.selectionAdapter, p);
								if (e.allowClear) e.selectionAdapter = b.Decorate(e.selectionAdapter, m);
								if (e.multiple) e.selectionAdapter = b.Decorate(e.selectionAdapter, g);
								if (e.containerCssClass != null || e.containerCss != null || e.adaptContainerCssClass != null) {
									var a = u(e.amdBase + "compat/containerCss");
									e.selectionAdapter = b.Decorate(e.selectionAdapter, a)
								}
								e.selectionAdapter = b.Decorate(e.selectionAdapter, v)
							}
							e.language = this._resolveLanguage(e.language);
							e.language.push("en");
							var o = [];
							for (var r = 0; r < e.language.length; r++) {
								var l = e.language[r];
								if (o.indexOf(l) === -1) o.push(l)
							}
							e.language = o;
							e.translations = this._processTranslations(e.language, e.debug);
							return e
						};
						t.prototype.reset = function() {
							function l(e) {
								function t(e) {
									return i[e] || e
								}
								return e.replace(/[^\u0000-\u007E]/g, t)
							}

							function u(e, t) {
								if (c.trim(e.term) === "") return t;
								if (t.children && t.children.length > 0) {
									var i = c.extend(true, {}, t);
									for (var n = t.children.length - 1; n >= 0; n--) {
										var s = t.children[n];
										var a = u(e, s);
										if (a == null) i.children.splice(n, 1)
									}
									if (i.children.length > 0) return i;
									return u(e, i)
								}
								var o = l(t.text).toUpperCase();
								var r = l(e.term).toUpperCase();
								if (o.indexOf(r) > -1) return t;
								return null
							}
							this.defaults = {
								amdBase: "./",
								amdLanguageBase: "./i18n/",
								closeOnSelect: true,
								debug: false,
								dropdownAutoWidth: false,
								escapeMarkup: b.escapeMarkup,
								language: {},
								matcher: u,
								minimumInputLength: 0,
								maximumInputLength: 0,
								maximumSelectionLength: 0,
								minimumResultsForSearch: 0,
								selectOnClose: false,
								scrollAfterSelect: false,
								sorter: function(e) {
									return e
								},
								templateResult: function(e) {
									return e.text
								},
								templateSelection: function(e) {
									return e.text
								},
								theme: "default",
								width: "resolve"
							}
						};
						t.prototype.applyFromElement = function(e, t) {
							var i = e.language;
							var n = this.defaults.language;
							var s = t.prop("lang");
							var a = t.closest("[lang]").prop("lang");
							var o = Array.prototype.concat.call(this._resolveLanguage(s), this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(a));
							e.language = o;
							return e
						};
						t.prototype._resolveLanguage = function(e) {
							if (!e) return [];
							if (c.isEmptyObject(e)) return [];
							if (c.isPlainObject(e)) return [e];
							var t;
							if (!c.isArray(e)) t = [e];
							else t = e;
							var i = [];
							for (var n = 0; n < t.length; n++) {
								i.push(t[n]);
								if (typeof t[n] === "string" && t[n].indexOf("-") > 0) {
									var s = t[n].split("-");
									var a = s[0];
									i.push(a)
								}
							}
							return i
						};
						t.prototype._processTranslations = function(e, t) {
							var i = new o;
							for (var n = 0; n < e.length; n++) {
								var s = new o;
								var a = e[n];
								if (typeof a === "string") try {
										s = o.loadPath(a)
									} catch (e) {
										try {
											a = this.defaults.amdLanguageBase + a;
											s = o.loadPath(a)
										} catch (e) {
											if (t && window.console && console.warn) console.warn('Select2: The language file for "' + a + '" could ' + "not be automatically loaded. A fallback will be used instead.")
										}
									} else if (c.isPlainObject(a)) s = new o(a);
									else s = a;
								i.extend(s)
							}
							return i
						};
						t.prototype.set = function(e, t) {
							var i = c.camelCase(e);
							var n = {};
							n[i] = t;
							var s = b._convertData(n);
							c.extend(true, this.defaults, s)
						};
						var n = new t;
						return n
					});
					t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(n, d, s, f) {
						function e(e, t) {
							this.options = e;
							if (t != null) this.fromElement(t);
							if (t != null) this.options = s.applyFromElement(this.options, t);
							this.options = s.apply(this.options);
							if (t && t.is("input")) {
								var i = n(this.get("amdBase") + "compat/inputData");
								this.options.dataAdapter = f.Decorate(this.options.dataAdapter, i)
							}
						}
						e.prototype.fromElement = function(e) {
							var t = ["select2"];
							if (this.options.multiple == null) this.options.multiple = e.prop("multiple");
							if (this.options.disabled == null) this.options.disabled = e.prop("disabled");
							if (this.options.dir == null)
								if (e.prop("dir")) this.options.dir = e.prop("dir");
								else if (e.closest("[dir]").prop("dir")) this.options.dir = e.closest("[dir]").prop("dir");
							else this.options.dir = "ltr";
							e.prop("disabled", this.options.disabled);
							e.prop("multiple", this.options.multiple);
							if (f.GetData(e[0], "select2Tags")) {
								if (this.options.debug && window.console && console.warn) console.warn("Select2: The `data-select2-tags` attribute has been changed to " + 'use the `data-data` and `data-tags="true"` attributes and will be ' + "removed in future versions of Select2.");
								f.StoreData(e[0], "data", f.GetData(e[0], "select2Tags"));
								f.StoreData(e[0], "tags", true)
							}
							if (f.GetData(e[0], "ajaxUrl")) {
								if (this.options.debug && window.console && console.warn) console.warn("Select2: The `data-ajax-url` attribute has been changed to " + "`data-ajax--url` and support for the old attribute will be removed" + " in future versions of Select2.");
								e.attr("ajax--url", f.GetData(e[0], "ajaxUrl"));
								f.StoreData(e[0], "ajax-Url", f.GetData(e[0], "ajaxUrl"))
							}
							var i = {};

							function n(e, t) {
								return t.toUpperCase()
							}
							for (var s = 0; s < e[0].attributes.length; s++) {
								var a = e[0].attributes[s].name;
								var o = "data-";
								if (a.substr(0, o.length) == o) {
									var r = a.substring(o.length);
									var l = f.GetData(e[0], r);
									var u = r.replace(/-([a-z])/g, n);
									i[u] = l
								}
							}
							if (d.fn.jquery && d.fn.jquery.substr(0, 2) == "1." && e[0].dataset) i = d.extend(true, {}, e[0].dataset, i);
							var c = d.extend(true, {}, f.GetData(e[0]), i);
							c = f._convertData(c);
							for (var h in c) {
								if (d.inArray(h, t) > -1) continue;
								if (d.isPlainObject(this.options[h])) d.extend(this.options[h], c[h]);
								else this.options[h] = c[h]
							}
							return this
						};
						e.prototype.get = function(e) {
							return this.options[e]
						};
						e.prototype.set = function(e, t) {
							this.options[e] = t
						};
						return e
					});
					t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(o, u, c, n) {
						var h = function(e, t) {
							if (c.GetData(e[0], "select2") != null) c.GetData(e[0], "select2").destroy();
							this.$element = e;
							this.id = this._generateId(e);
							t = t || {};
							this.options = new u(t, e);
							h.__super__.constructor.call(this);
							var i = e.attr("tabindex") || 0;
							c.StoreData(e[0], "old-tabindex", i);
							e.attr("tabindex", "-1");
							var n = this.options.get("dataAdapter");
							this.dataAdapter = new n(e, this.options);
							var s = this.render();
							this._placeContainer(s);
							var a = this.options.get("selectionAdapter");
							this.selection = new a(e, this.options);
							this.$selection = this.selection.render();
							this.selection.position(this.$selection, s);
							var o = this.options.get("dropdownAdapter");
							this.dropdown = new o(e, this.options);
							this.$dropdown = this.dropdown.render();
							this.dropdown.position(this.$dropdown, s);
							var r = this.options.get("resultsAdapter");
							this.results = new r(e, this.options, this.dataAdapter);
							this.$results = this.results.render();
							this.results.position(this.$results, this.$dropdown);
							var l = this;
							this._bindAdapters();
							this._registerDomEvents();
							this._registerDataEvents();
							this._registerSelectionEvents();
							this._registerDropdownEvents();
							this._registerResultsEvents();
							this._registerEvents();
							this.dataAdapter.current(function(e) {
								l.trigger("selection:update", {
									data: e
								})
							});
							e.addClass("select2-hidden-accessible");
							e.attr("aria-hidden", "true");
							this._syncAttributes();
							c.StoreData(e[0], "select2", this);
							e.data("select2", this)
						};
						c.Extend(h, c.Observable);
						h.prototype._generateId = function(e) {
							var t = "";
							if (e.attr("id") != null) t = e.attr("id");
							else if (e.attr("name") != null) t = e.attr("name") + "-" + c.generateChars(2);
							else t = c.generateChars(4);
							t = t.replace(/(:|\.|\[|\]|,)/g, "");
							t = "select2-" + t;
							return t
						};
						h.prototype._placeContainer = function(e) {
							e.insertAfter(this.$element);
							var t = this._resolveWidth(this.$element, this.options.get("width"));
							if (t != null) e.css("width", t)
						};
						h.prototype._resolveWidth = function(e, t) {
							var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
							if (t == "resolve") {
								var n = this._resolveWidth(e, "style");
								if (n != null) return n;
								return this._resolveWidth(e, "element")
							}
							if (t == "element") {
								var s = e.outerWidth(false);
								if (s <= 0) return "auto";
								return s + "px"
							}
							if (t == "style") {
								var a = e.attr("style");
								if (typeof a !== "string") return null;
								var o = a.split(";");
								for (var r = 0, l = o.length; r < l; r = r + 1) {
									var u = o[r].replace(/\s/g, "");
									var c = u.match(i);
									if (c !== null && c.length >= 1) return c[1]
								}
								return null
							}
							if (t == "computedstyle") {
								var h = window.getComputedStyle(e[0]);
								return h.width
							}
							return t
						};
						h.prototype._bindAdapters = function() {
							this.dataAdapter.bind(this, this.$container);
							this.selection.bind(this, this.$container);
							this.dropdown.bind(this, this.$container);
							this.results.bind(this, this.$container)
						};
						h.prototype._registerDomEvents = function() {
							var t = this;
							this.$element.on("change.select2", function() {
								t.dataAdapter.current(function(e) {
									t.trigger("selection:update", {
										data: e
									})
								})
							});
							this.$element.on("focus.select2", function(e) {
								t.trigger("focus", e)
							});
							this._syncA = c.bind(this._syncAttributes, this);
							this._syncS = c.bind(this._syncSubtree, this);
							if (this.$element[0].attachEvent) this.$element[0].attachEvent("onpropertychange", this._syncA);
							var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
							if (e != null) {
								this._observer = new e(function(e) {
									t._syncA();
									t._syncS(null, e)
								});
								this._observer.observe(this.$element[0], {
									attributes: true,
									childList: true,
									subtree: false
								})
							} else if (this.$element[0].addEventListener) {
								this.$element[0].addEventListener("DOMAttrModified", t._syncA, false);
								this.$element[0].addEventListener("DOMNodeInserted", t._syncS, false);
								this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, false)
							}
						};
						h.prototype._registerDataEvents = function() {
							var i = this;
							this.dataAdapter.on("*", function(e, t) {
								i.trigger(e, t)
							})
						};
						h.prototype._registerSelectionEvents = function() {
							var i = this;
							var n = ["toggle", "focus"];
							this.selection.on("toggle", function() {
								i.toggleDropdown()
							});
							this.selection.on("focus", function(e) {
								i.focus(e)
							});
							this.selection.on("*", function(e, t) {
								if (o.inArray(e, n) !== -1) return;
								i.trigger(e, t)
							})
						};
						h.prototype._registerDropdownEvents = function() {
							var i = this;
							this.dropdown.on("*", function(e, t) {
								i.trigger(e, t)
							})
						};
						h.prototype._registerResultsEvents = function() {
							var i = this;
							this.results.on("*", function(e, t) {
								i.trigger(e, t)
							})
						};
						h.prototype._registerEvents = function() {
							var i = this;
							this.on("open", function() {
								i.$container.addClass("select2-container--open")
							});
							this.on("close", function() {
								i.$container.removeClass("select2-container--open")
							});
							this.on("enable", function() {
								i.$container.removeClass("select2-container--disabled")
							});
							this.on("disable", function() {
								i.$container.addClass("select2-container--disabled")
							});
							this.on("blur", function() {
								i.$container.removeClass("select2-container--focus")
							});
							this.on("query", function(t) {
								if (!i.isOpen()) i.trigger("open", {});
								this.dataAdapter.query(t, function(e) {
									i.trigger("results:all", {
										data: e,
										query: t
									})
								})
							});
							this.on("query:append", function(t) {
								this.dataAdapter.query(t, function(e) {
									i.trigger("results:append", {
										data: e,
										query: t
									})
								})
							});
							this.on("keypress", function(e) {
								var t = e.which;
								if (i.isOpen()) {
									if (t === n.ESC || t === n.TAB || t === n.UP && e.altKey) {
										i.close(e);
										e.preventDefault()
									} else if (t === n.ENTER) {
										i.trigger("results:select", {});
										e.preventDefault()
									} else if (t === n.SPACE && e.ctrlKey) {
										i.trigger("results:toggle", {});
										e.preventDefault()
									} else if (t === n.UP) {
										i.trigger("results:previous", {});
										e.preventDefault()
									} else if (t === n.DOWN) {
										i.trigger("results:next", {});
										e.preventDefault()
									}
								} else if (t === n.ENTER || t === n.SPACE || t === n.DOWN && e.altKey) {
									i.open();
									e.preventDefault()
								}
							})
						};
						h.prototype._syncAttributes = function() {
							this.options.set("disabled", this.$element.prop("disabled"));
							if (this.isDisabled()) {
								if (this.isOpen()) this.close();
								this.trigger("disable", {})
							} else this.trigger("enable", {})
						};
						h.prototype._isChangeMutation = function(e, t) {
							var i = false;
							var n = this;
							if (e && e.target && (e.target.nodeName !== "OPTION" && e.target.nodeName !== "OPTGROUP")) return;
							if (!t) i = true;
							else if (t.addedNodes && t.addedNodes.length > 0)
								for (var s = 0; s < t.addedNodes.length; s++) {
									var a = t.addedNodes[s];
									if (a.selected) i = true
								} else if (t.removedNodes && t.removedNodes.length > 0) i = true;
								else if (o.isArray(t)) o.each(t, function(e, t) {
								if (n._isChangeMutation(e, t)) {
									i = true;
									return false
								}
							});
							return i
						};
						h.prototype._syncSubtree = function(e, t) {
							var i = this._isChangeMutation(e, t);
							var n = this;
							if (i) this.dataAdapter.current(function(e) {
								n.trigger("selection:update", {
									data: e
								})
							})
						};
						h.prototype.trigger = function(e, t) {
							var i = h.__super__.trigger;
							var n = {
								open: "opening",
								close: "closing",
								select: "selecting",
								unselect: "unselecting",
								clear: "clearing"
							};
							if (t === undefined) t = {};
							if (e in n) {
								var s = n[e];
								var a = {
									prevented: false,
									name: e,
									args: t
								};
								i.call(this, s, a);
								if (a.prevented) {
									t.prevented = true;
									return
								}
							}
							i.call(this, e, t)
						};
						h.prototype.toggleDropdown = function() {
							if (this.isDisabled()) return;
							if (this.isOpen()) this.close();
							else this.open()
						};
						h.prototype.open = function() {
							if (this.isOpen()) return;
							if (this.isDisabled()) return;
							this.trigger("query", {})
						};
						h.prototype.close = function(e) {
							if (!this.isOpen()) return;
							this.trigger("close", {
								originalEvent: e
							})
						};
						h.prototype.isEnabled = function() {
							return !this.isDisabled()
						};
						h.prototype.isDisabled = function() {
							return this.options.get("disabled")
						};
						h.prototype.isOpen = function() {
							return this.$container.hasClass("select2-container--open")
						};
						h.prototype.hasFocus = function() {
							return this.$container.hasClass("select2-container--focus")
						};
						h.prototype.focus = function(e) {
							if (this.hasFocus()) return;
							this.$container.addClass("select2-container--focus");
							this.trigger("focus", {})
						};
						h.prototype.enable = function(e) {
							if (this.options.get("debug") && window.console && console.warn) console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + " instead.");
							if (e == null || e.length === 0) e = [true];
							var t = !e[0];
							this.$element.prop("disabled", t)
						};
						h.prototype.data = function() {
							if (this.options.get("debug") && arguments.length > 0 && window.console && console.warn) console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + "should consider setting the value instead using `$element.val()`.");
							var t = [];
							this.dataAdapter.current(function(e) {
								t = e
							});
							return t
						};
						h.prototype.val = function(e) {
							if (this.options.get("debug") && window.console && console.warn) console.warn('Select2: The `select2("val")` method has been deprecated and will be' + " removed in later Select2 versions. Use $element.val() instead.");
							if (e == null || e.length === 0) return this.$element.val();
							var t = e[0];
							if (o.isArray(t)) t = o.map(t, function(e) {
								return e.toString()
							});
							this.$element.val(t).trigger("input").trigger("change")
						};
						h.prototype.destroy = function() {
							this.$container.remove();
							if (this.$element[0].detachEvent) this.$element[0].detachEvent("onpropertychange", this._syncA);
							if (this._observer != null) {
								this._observer.disconnect();
								this._observer = null
							} else if (this.$element[0].removeEventListener) {
								this.$element[0].removeEventListener("DOMAttrModified", this._syncA, false);
								this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, false);
								this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, false)
							}
							this._syncA = null;
							this._syncS = null;
							this.$element.off(".select2");
							this.$element.attr("tabindex", c.GetData(this.$element[0], "old-tabindex"));
							this.$element.removeClass("select2-hidden-accessible");
							this.$element.attr("aria-hidden", "false");
							c.RemoveData(this.$element[0]);
							this.$element.removeData("select2");
							this.dataAdapter.destroy();
							this.selection.destroy();
							this.dropdown.destroy();
							this.results.destroy();
							this.dataAdapter = null;
							this.selection = null;
							this.dropdown = null;
							this.results = null
						};
						h.prototype.render = function() {
							var e = o('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + "</span>");
							e.attr("dir", this.options.get("dir"));
							this.$container = e;
							this.$container.addClass("select2-container--" + this.options.get("theme"));
							c.StoreData(e[0], "element", this.$element);
							return e
						};
						return h
					});
					t.define("select2/compat/utils", ["jquery"], function(o) {
						function e(e, t, i) {
							var n, s = [],
								a;
							n = o.trim(e.attr("class"));
							if (n) {
								n = "" + n;
								o(n.split(/\s+/)).each(function() {
									if (this.indexOf("select2-") === 0) s.push(this)
								})
							}
							n = o.trim(t.attr("class"));
							if (n) {
								n = "" + n;
								o(n.split(/\s+/)).each(function() {
									if (this.indexOf("select2-") !== 0) {
										a = i(this);
										if (a != null) s.push(a)
									}
								})
							}
							e.attr("class", s.join(" "))
						}
						return {
							syncCssClasses: e
						}
					});
					t.define("select2/compat/containerCss", ["jquery", "./utils"], function(o, r) {
						function l(e) {
							return null
						}

						function e() {}
						e.prototype.render = function(e) {
							var t = e.call(this);
							var i = this.options.get("containerCssClass") || "";
							if (o.isFunction(i)) i = i(this.$element);
							var n = this.options.get("adaptContainerCssClass");
							n = n || l;
							if (i.indexOf(":all:") !== -1) {
								i = i.replace(":all:", "");
								var s = n;
								n = function(e) {
									var t = s(e);
									if (t != null) return t + " " + e;
									return e
								}
							}
							var a = this.options.get("containerCss") || {};
							if (o.isFunction(a)) a = a(this.$element);
							r.syncCssClasses(t, this.$element, n);
							t.css(a);
							t.addClass(i);
							return t
						};
						return e
					});
					t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(o, r) {
						function l(e) {
							return null
						}

						function e() {}
						e.prototype.render = function(e) {
							var t = e.call(this);
							var i = this.options.get("dropdownCssClass") || "";
							if (o.isFunction(i)) i = i(this.$element);
							var n = this.options.get("adaptDropdownCssClass");
							n = n || l;
							if (i.indexOf(":all:") !== -1) {
								i = i.replace(":all:", "");
								var s = n;
								n = function(e) {
									var t = s(e);
									if (t != null) return t + " " + e;
									return e
								}
							}
							var a = this.options.get("dropdownCss") || {};
							if (o.isFunction(a)) a = a(this.$element);
							r.syncCssClasses(t, this.$element, n);
							t.css(a);
							t.addClass(i);
							return t
						};
						return e
					});
					t.define("select2/compat/initSelection", ["jquery"], function(n) {
						function e(e, t, i) {
							if (i.get("debug") && window.console && console.warn) console.warn("Select2: The `initSelection` option has been deprecated in favor" + " of a custom data adapter that overrides the `current` method. " + "This method is now called multiple times instead of a single " + "time when the instance is initialized. Support will be removed " + "for the `initSelection` option in future versions of Select2");
							this.initSelection = i.get("initSelection");
							this._isInitialized = false;
							e.call(this, t, i)
						}
						e.prototype.current = function(e, t) {
							var i = this;
							if (this._isInitialized) {
								e.call(this, t);
								return
							}
							this.initSelection.call(null, this.$element, function(e) {
								i._isInitialized = true;
								if (!n.isArray(e)) e = [e];
								t(e)
							})
						};
						return e
					});
					t.define("select2/compat/inputData", ["jquery", "../utils"], function(o, n) {
						function e(e, t, i) {
							this._currentData = [];
							this._valueSeparator = i.get("valueSeparator") || ",";
							if (t.prop("type") === "hidden")
								if (i.get("debug") && console && console.warn) console.warn("Select2: Using a hidden input with Select2 is no longer " + "supported and may stop working in the future. It is recommended " + "to use a `<select>` element instead.");
							e.call(this, t, i)
						}
						e.prototype.current = function(e, t) {
							function n(e, t) {
								var i = [];
								if (e.selected || o.inArray(e.id, t) !== -1) {
									e.selected = true;
									i.push(e)
								} else e.selected = false;
								if (e.children) i.push.apply(i, n(e.children, t));
								return i
							}
							var i = [];
							for (var s = 0; s < this._currentData.length; s++) {
								var a = this._currentData[s];
								i.push.apply(i, n(a, this.$element.val().split(this._valueSeparator)))
							}
							t(i)
						};
						e.prototype.select = function(e, t) {
							if (!this.options.get("multiple")) {
								this.current(function(e) {
									o.map(e, function(e) {
										e.selected = false
									})
								});
								this.$element.val(t.id);
								this.$element.trigger("input").trigger("change")
							} else {
								var i = this.$element.val();
								i += this._valueSeparator + t.id;
								this.$element.val(i);
								this.$element.trigger("input").trigger("change")
							}
						};
						e.prototype.unselect = function(e, s) {
							var a = this;
							s.selected = false;
							this.current(function(e) {
								var t = [];
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									if (s.id == n.id) continue;
									t.push(n.id)
								}
								a.$element.val(t.join(a._valueSeparator));
								a.$element.trigger("input").trigger("change")
							})
						};
						e.prototype.query = function(e, t, i) {
							var n = [];
							for (var s = 0; s < this._currentData.length; s++) {
								var a = this._currentData[s];
								var o = this.matches(t, a);
								if (o !== null) n.push(o)
							}
							i({
								results: n
							})
						};
						e.prototype.addOptions = function(e, t) {
							var i = o.map(t, function(e) {
								return n.GetData(e[0], "data")
							});
							this._currentData.push.apply(this._currentData, i)
						};
						return e
					});
					t.define("select2/compat/matcher", ["jquery"], function(r) {
						function e(o) {
							function e(e, t) {
								var i = r.extend(true, {}, t);
								if (e.term == null || r.trim(e.term) === "") return i;
								if (t.children) {
									for (var n = t.children.length - 1; n >= 0; n--) {
										var s = t.children[n];
										var a = o(e.term, s.text, s);
										if (!a) i.children.splice(n, 1)
									}
									if (i.children.length > 0) return i
								}
								if (o(e.term, t.text, t)) return i;
								return null
							}
							return e
						}
						return e
					});
					t.define("select2/compat/query", [], function() {
						function e(e, t, i) {
							if (i.get("debug") && window.console && console.warn) console.warn("Select2: The `query` option has been deprecated in favor of a " + "custom data adapter that overrides the `query` method. Support " + "will be removed for the `query` option in future versions of " + "Select2.");
							e.call(this, t, i)
						}
						e.prototype.query = function(e, t, i) {
							t.callback = i;
							var n = this.options.get("query");
							n.call(null, t)
						};
						return e
					});
					t.define("select2/dropdown/attachContainer", [], function() {
						function e(e, t, i) {
							e.call(this, t, i)
						}
						e.prototype.position = function(e, t, i) {
							var n = i.find(".dropdown-wrapper");
							n.append(t);
							t.addClass("select2-dropdown--below");
							i.addClass("select2-container--below")
						};
						return e
					});
					t.define("select2/dropdown/stopPropagation", [], function() {
						function e() {}
						e.prototype.bind = function(e, t, i) {
							e.call(this, t, i);
							var n = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
							this.$dropdown.on(n.join(" "), function(e) {
								e.stopPropagation()
							})
						};
						return e
					});
					t.define("select2/selection/stopPropagation", [], function() {
						function e() {}
						e.prototype.bind = function(e, t, i) {
							e.call(this, t, i);
							var n = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
							this.$selection.on(n.join(" "), function(e) {
								e.stopPropagation()
							})
						};
						return e
					});
					(function(e) {
						if (typeof t.define === "function" && t.define.amd) t.define("jquery-mousewheel", ["jquery"], e);
						else if (true) n.exports = e;
						else;
					})(function(d) {
						var e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
							t = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
							f = Array.prototype.slice,
							p, m;
						if (d.event.fixHooks)
							for (var i = e.length; i;) d.event.fixHooks[e[--i]] = d.event.mouseHooks;
						var g = d.event.special.mousewheel = {
							version: "3.1.12",
							setup: function() {
								if (this.addEventListener)
									for (var e = t.length; e;) this.addEventListener(t[--e], n, false);
								else this.onmousewheel = n;
								d.data(this, "mousewheel-line-height", g.getLineHeight(this));
								d.data(this, "mousewheel-page-height", g.getPageHeight(this))
							},
							teardown: function() {
								if (this.removeEventListener)
									for (var e = t.length; e;) this.removeEventListener(t[--e], n, false);
								else this.onmousewheel = null;
								d.removeData(this, "mousewheel-line-height");
								d.removeData(this, "mousewheel-page-height")
							},
							getLineHeight: function(e) {
								var t = d(e),
									i = t["offsetParent" in d.fn ? "offsetParent" : "parent"]();
								if (!i.length) i = d("body");
								return parseInt(i.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
							},
							getPageHeight: function(e) {
								return d(e).height()
							},
							settings: {
								adjustOldDeltas: true,
								normalizeOffset: true
							}
						};
						d.fn.extend({
							mousewheel: function(e) {
								return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
							},
							unmousewheel: function(e) {
								return this.unbind("mousewheel", e)
							}
						});

						function n(e) {
							var t = e || window.event,
								i = f.call(arguments, 1),
								n = 0,
								s = 0,
								a = 0,
								o = 0,
								r = 0,
								l = 0;
							e = d.event.fix(t);
							e.type = "mousewheel";
							if ("detail" in t) a = t.detail * -1;
							if ("wheelDelta" in t) a = t.wheelDelta;
							if ("wheelDeltaY" in t) a = t.wheelDeltaY;
							if ("wheelDeltaX" in t) s = t.wheelDeltaX * -1;
							if ("axis" in t && t.axis === t.HORIZONTAL_AXIS) {
								s = a * -1;
								a = 0
							}
							n = a === 0 ? s : a;
							if ("deltaY" in t) {
								a = t.deltaY * -1;
								n = a
							}
							if ("deltaX" in t) {
								s = t.deltaX;
								if (a === 0) n = s * -1
							}
							if (a === 0 && s === 0) return;
							if (t.deltaMode === 1) {
								var u = d.data(this, "mousewheel-line-height");
								n *= u;
								a *= u;
								s *= u
							} else if (t.deltaMode === 2) {
								var c = d.data(this, "mousewheel-page-height");
								n *= c;
								a *= c;
								s *= c
							}
							o = Math.max(Math.abs(a), Math.abs(s));
							if (!m || o < m) {
								m = o;
								if (b(t, o)) m /= 40
							}
							if (b(t, o)) {
								n /= 40;
								s /= 40;
								a /= 40
							}
							n = Math[n >= 1 ? "floor" : "ceil"](n / m);
							s = Math[s >= 1 ? "floor" : "ceil"](s / m);
							a = Math[a >= 1 ? "floor" : "ceil"](a / m);
							if (g.settings.normalizeOffset && this.getBoundingClientRect) {
								var h = this.getBoundingClientRect();
								r = e.clientX - h.left;
								l = e.clientY - h.top
							}
							e.deltaX = s;
							e.deltaY = a;
							e.deltaFactor = m;
							e.offsetX = r;
							e.offsetY = l;
							e.deltaMode = 0;
							i.unshift(e, n, s, a);
							if (p) clearTimeout(p);
							p = setTimeout(v, 200);
							return (d.event.dispatch || d.event.handle).apply(this, i)
						}

						function v() {
							m = null
						}

						function b(e, t) {
							return g.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 === 0
						}
					});
					t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(s, e, a, t, o) {
						if (s.fn.select2 == null) {
							var r = ["open", "close", "destroy"];
							s.fn.select2 = function(i) {
								i = i || {};
								if (typeof i === "object") {
									this.each(function() {
										var e = s.extend(true, {}, i);
										var t = new a(s(this), e)
									});
									return this
								} else if (typeof i === "string") {
									var t;
									var n = Array.prototype.slice.call(arguments, 1);
									this.each(function() {
										var e = o.GetData(this, "select2");
										if (e == null && window.console && console.error) console.error("The select2('" + i + "') method was called on an " + "element that is not using Select2.");
										t = e[i].apply(e, n)
									});
									if (s.inArray(i, r) > -1) return this;
									return t
								} else throw new Error("Invalid arguments for Select2: " + i)
							}
						}
						if (s.fn.select2.defaults == null) s.fn.select2.defaults = t;
						return a
					});
					return {
						define: t.define,
						require: t.require
					}
				}(),
				t = e.require("jquery.select2");
			return i.fn.select2.amd = e, t
		}) ? i.apply(e, t) : i) && (n.exports = e)
	},
	74: function(e, t, i) {
		var n;
		i = [i(8)], void 0 !== (t = "function" == typeof(n = function(E) {
			var n = function() {
				function e() {
					var r = this;
					var e = function() {
						var e = ["br-wrapper"];
						if (r.options.theme !== "") e.push("br-theme-" + r.options.theme);
						r.$elem.wrap(E("<div />", {
							class: e.join(" ")
						}))
					};
					var n = function() {
						r.$elem.unwrap()
					};
					var t = function(e) {
						if (E.isNumeric(e)) e = Math.floor(e);
						return E('option[value="' + e + '"]', r.$elem)
					};
					var l = function() {
						var e = r.options.initialRating;
						if (!e) return E("option:selected", r.$elem);
						return t(e)
					};
					var u = function() {
						var e = r.$elem.find('option[value="' + r.options.emptyValue + '"]');
						if (!e.length && r.options.allowEmpty) {
							e = E("<option />", {
								value: r.options.emptyValue
							});
							return e.prependTo(r.$elem)
						}
						return e
					};
					var o = function(e) {
						var t = r.$elem.data("barrating");
						if (typeof e !== "undefined") return t[e];
						return t
					};
					var c = function(e, t) {
						if (t !== null && typeof t === "object") r.$elem.data("barrating", t);
						else r.$elem.data("barrating")[e] = t
					};
					var i = function() {
						var e = l();
						var t = u();
						var i = e.val();
						var n = e.data("html") ? e.data("html") : e.text();
						var s = r.options.allowEmpty !== null ? r.options.allowEmpty : !!t.length;
						var a = t.length ? t.val() : null;
						var o = t.length ? t.text() : null;
						c(null, {
							userOptions: r.options,
							ratingValue: i,
							ratingText: n,
							originalRatingValue: i,
							originalRatingText: n,
							allowEmpty: s,
							emptyRatingValue: a,
							emptyRatingText: o,
							readOnly: r.options.readonly,
							ratingMade: false
						})
					};
					var s = function() {
						r.$elem.removeData("barrating")
					};
					var a = function() {
						return o("ratingText")
					};
					var h = function() {
						return o("ratingValue")
					};
					var d = function() {
						var s = E("<div />", {
							class: "br-widget"
						});
						r.$elem.find("option").each(function() {
							var e, t, i, n;
							e = E(this).val();
							if (e !== o("emptyRatingValue")) {
								t = E(this).text();
								i = E(this).data("html");
								if (i) t = i;
								n = E("<a />", {
									href: "#",
									"data-rating-value": e,
									"data-rating-text": t,
									html: r.options.showValues ? t : ""
								});
								s.append(n)
							}
						});
						if (r.options.showSelectedRating) s.append(E("<div />", {
							text: "",
							class: "br-current-rating"
						}));
						if (r.options.reverse) s.addClass("br-reverse");
						if (r.options.readonly) s.addClass("br-readonly");
						return s
					};
					var f = function() {
						if (o("userOptions").reverse) return "nextAll";
						else return "prevAll"
					};
					var p = function(e) {
						t(e).prop("selected", true);
						r.$elem.change()
					};
					var m = function() {
						E("option", r.$elem).prop("selected", function() {
							return this.defaultSelected
						});
						r.$elem.change()
					};
					var g = function(e) {
						e = e ? e : a();
						if (e == o("emptyRatingText")) e = "";
						if (r.options.showSelectedRating) r.$elem.parent().find(".br-current-rating").text(e)
					};
					var v = function(e) {
						return Math.round(Math.floor(e * 10) / 10 % 1 * 100)
					};
					var b = function() {
						r.$widget.find("a").removeClass(function(e, t) {
							return (t.match(/(^|\s)br-\S+/g) || []).join(" ")
						})
					};
					var y = function() {
						var e = r.$widget.find('a[data-rating-value="' + h() + '"]');
						var t = o("userOptions").initialRating;
						var i = E.isNumeric(h()) ? h() : 0;
						var n = v(t);
						var s, a;
						b();
						e.addClass("br-selected br-current")[f()]().addClass("br-selected");
						if (!o("ratingMade") && E.isNumeric(t)) {
							if (t <= i || !n) return;
							s = r.$widget.find("a");
							a = e.length ? e[o("userOptions").reverse ? "prev" : "next"]() : s[o("userOptions").reverse ? "last" : "first"]();
							a.addClass("br-fractional");
							a.addClass("br-fractional-" + n)
						}
					};
					var _ = function(e) {
						if (!o("allowEmpty") || !o("userOptions").deselectable) return false;
						return h() == e.attr("data-rating-value")
					};
					var x = function(e) {
						e.on("click.barrating", function(e) {
							var t = E(this),
								i = o("userOptions"),
								n, s;
							e.preventDefault();
							n = t.attr("data-rating-value");
							s = t.attr("data-rating-text");
							if (_(t)) {
								n = o("emptyRatingValue");
								s = o("emptyRatingText")
							}
							c("ratingValue", n);
							c("ratingText", s);
							c("ratingMade", true);
							p(n);
							g(s);
							y();
							i.onSelect.call(r, h(), a(), e);
							return false
						})
					};
					var w = function(e) {
						e.on("mouseenter.barrating", function() {
							var e = E(this);
							b();
							e.addClass("br-active")[f()]().addClass("br-active");
							g(e.attr("data-rating-text"))
						})
					};
					var D = function(e) {
						r.$widget.on("mouseleave.barrating blur.barrating", function() {
							g();
							y()
						})
					};
					var C = function(e) {
						e.on("touchstart.barrating", function(e) {
							e.preventDefault();
							e.stopPropagation();
							E(this).click()
						})
					};
					var k = function(e) {
						e.on("click.barrating", function(e) {
							e.preventDefault()
						})
					};
					var S = function(e) {
						x(e);
						if (r.options.hoverState) {
							w(e);
							D(e)
						}
					};
					var T = function(e) {
						e.off(".barrating")
					};
					var A = function(e) {
						var t = r.$widget.find("a");
						if (C) C(t);
						if (e) {
							T(t);
							k(t)
						} else S(t)
					};
					this.show = function() {
						if (o()) return;
						e();
						i();
						r.$widget = d();
						r.$widget.insertAfter(r.$elem);
						y();
						g();
						A(r.options.readonly);
						r.$elem.hide()
					};
					this.readonly = function(e) {
						if (typeof e !== "boolean" || o("readOnly") == e) return;
						A(e);
						c("readOnly", e);
						r.$widget.toggleClass("br-readonly")
					};
					this.set = function(e) {
						var t = o("userOptions");
						if (r.$elem.find('option[value="' + e + '"]').length === 0) return;
						c("ratingValue", e);
						c("ratingText", r.$elem.find('option[value="' + e + '"]').text());
						c("ratingMade", true);
						p(h());
						g(a());
						y();
						if (!t.silent) t.onSelect.call(this, h(), a())
					};
					this.clear = function() {
						var e = o("userOptions");
						c("ratingValue", o("originalRatingValue"));
						c("ratingText", o("originalRatingText"));
						c("ratingMade", false);
						m();
						g(a());
						y();
						e.onClear.call(this, h(), a())
					};
					this.destroy = function() {
						var e = h();
						var t = a();
						var i = o("userOptions");
						T(r.$widget.find("a"));
						r.$widget.remove();
						s();
						n();
						r.$elem.show();
						i.onDestroy.call(this, e, t)
					}
				}
				e.prototype.init = function(e, t) {
					this.$elem = E(t);
					this.options = E.extend({}, E.fn.barrating.defaults, e);
					return this.options
				};
				return e
			}();
			E.fn.barrating = function(t, i) {
				return this.each(function() {
					var e = new n;
					if (!E(this).is("select")) E.error("Sorry, this plugin only works with select fields.");
					if (e.hasOwnProperty(t)) {
						e.init(i, this);
						if (t === "show") return e.show(i);
						else if (e.$elem.data("barrating")) {
							e.$widget = E(this).next(".br-widget");
							return e[t](i)
						}
					} else if (typeof t === "object" || !t) {
						i = t;
						e.init(i, this);
						return e.show()
					} else E.error("Method " + t + " does not exist on jQuery.barrating")
				})
			}, E.fn.barrating.defaults = {
				theme: "",
				initialRating: null,
				allowEmpty: null,
				emptyValue: "",
				showValues: false,
				showSelectedRating: true,
				deselectable: true,
				reverse: false,
				readonly: false,
				fastClicks: true,
				hoverState: true,
				silent: false,
				onSelect: function(e, t, i) {},
				onClear: function(e, t) {},
				onDestroy: function(e, t) {}
			}, E.fn.barrating.BarRating = n
		}) ? n.apply(t, i) : n) && (e.exports = t)
	},
	75: function(e, t, i) {
		i = [i(76), i(8)], void 0 !== (t = function(e, t) {
			return t.fn || (t.fn = {}), "function" != typeof e && e.hasOwnProperty("default") && (e = e.default), P = e, $ = t, (n = function(e, t, i) {
				var n, s, a, o;
				if (this.parentEl = "body", this.element = $(e), this.startDate = P().startOf("day"), this.endDate = P().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = P().subtract(100, "year").format("YYYY"), this.maxYear = P().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
						direction: "ltr",
						format: P.localeData().longDateFormat("L"),
						separator: " - ",
						applyLabel: "Apply",
						cancelLabel: "Cancel",
						weekLabel: "W",
						customRangeLabel: "Custom Range",
						daysOfWeek: P.weekdaysMin(),
						monthNames: P.monthsShort(),
						firstDay: P.localeData().firstDayOfWeek()
					}, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof t && null !== t || (t = {}), "string" == typeof(t = $.extend(this.element.data(), t)).template || t.template instanceof $ || (t.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = t.parentEl && $(t.parentEl).length ? $(t.parentEl) : $(this.parentEl), this.container = $(t.template).appendTo(this.parentEl), "object" == typeof t.locale && ("string" == typeof t.locale.direction && (this.locale.direction = t.locale.direction), "string" == typeof t.locale.format && (this.locale.format = t.locale.format), "string" == typeof t.locale.separator && (this.locale.separator = t.locale.separator), "object" == typeof t.locale.daysOfWeek && (this.locale.daysOfWeek = t.locale.daysOfWeek.slice()), "object" == typeof t.locale.monthNames && (this.locale.monthNames = t.locale.monthNames.slice()), "number" == typeof t.locale.firstDay && (this.locale.firstDay = t.locale.firstDay), "string" == typeof t.locale.applyLabel && (this.locale.applyLabel = t.locale.applyLabel), "string" == typeof t.locale.cancelLabel && (this.locale.cancelLabel = t.locale.cancelLabel), "string" == typeof t.locale.weekLabel && (this.locale.weekLabel = t.locale.weekLabel), "string" == typeof t.locale.customRangeLabel) && ((l = document.createElement("textarea")).innerHTML = t.locale.customRangeLabel, u = l.value, this.locale.customRangeLabel = u), this.container.addClass(this.locale.direction), "string" == typeof t.startDate && (this.startDate = P(t.startDate, this.locale.format)), "string" == typeof t.endDate && (this.endDate = P(t.endDate, this.locale.format)), "string" == typeof t.minDate && (this.minDate = P(t.minDate, this.locale.format)), "string" == typeof t.maxDate && (this.maxDate = P(t.maxDate, this.locale.format)), "object" == typeof t.startDate && (this.startDate = P(t.startDate)), "object" == typeof t.endDate && (this.endDate = P(t.endDate)), "object" == typeof t.minDate && (this.minDate = P(t.minDate)), "object" == typeof t.maxDate && (this.maxDate = P(t.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof t.applyButtonClasses && (this.applyButtonClasses = t.applyButtonClasses), "string" == typeof t.applyClass && (this.applyButtonClasses = t.applyClass), "string" == typeof t.cancelButtonClasses && (this.cancelButtonClasses = t.cancelButtonClasses), "string" == typeof t.cancelClass && (this.cancelButtonClasses = t.cancelClass), "object" == typeof t.maxSpan && (this.maxSpan = t.maxSpan), "object" == typeof t.dateLimit && (this.maxSpan = t.dateLimit), "string" == typeof t.opens && (this.opens = t.opens), "string" == typeof t.drops && (this.drops = t.drops), "boolean" == typeof t.showWeekNumbers && (this.showWeekNumbers = t.showWeekNumbers), "boolean" == typeof t.showISOWeekNumbers && (this.showISOWeekNumbers = t.showISOWeekNumbers), "string" == typeof t.buttonClasses && (this.buttonClasses = t.buttonClasses), "object" == typeof t.buttonClasses && (this.buttonClasses = t.buttonClasses.join(" ")), "boolean" == typeof t.showDropdowns && (this.showDropdowns = t.showDropdowns), "number" == typeof t.minYear && (this.minYear = t.minYear), "number" == typeof t.maxYear && (this.maxYear = t.maxYear), "boolean" == typeof t.showCustomRangeLabel && (this.showCustomRangeLabel = t.showCustomRangeLabel), "boolean" == typeof t.singleDatePicker && (this.singleDatePicker = t.singleDatePicker, this.singleDatePicker) && (this.endDate = this.startDate.clone()), "boolean" == typeof t.timePicker && (this.timePicker = t.timePicker), "boolean" == typeof t.timePickerSeconds && (this.timePickerSeconds = t.timePickerSeconds), "number" == typeof t.timePickerIncrement && (this.timePickerIncrement = t.timePickerIncrement), "boolean" == typeof t.timePicker24Hour && (this.timePicker24Hour = t.timePicker24Hour), "boolean" == typeof t.autoApply && (this.autoApply = t.autoApply), "boolean" == typeof t.autoUpdateInput && (this.autoUpdateInput = t.autoUpdateInput), "boolean" == typeof t.linkedCalendars && (this.linkedCalendars = t.linkedCalendars), "function" == typeof t.isInvalidDate && (this.isInvalidDate = t.isInvalidDate), "function" == typeof t.isCustomDate && (this.isCustomDate = t.isCustomDate), "boolean" == typeof t.alwaysShowCalendars && (this.alwaysShowCalendars = t.alwaysShowCalendars), 0 != this.locale.firstDay)
					for (var r = this.locale.firstDay; 0 < r;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), r--;
				if (void 0 === t.startDate && void 0 === t.endDate && $(this.element).is(":text") && (o = n = null, 2 == (a = (e = $(this.element).val()).split(this.locale.separator)).length ? (o = P(a[0], this.locale.format), n = P(a[1], this.locale.format)) : this.singleDatePicker && "" !== e && (o = P(e, this.locale.format), n = P(e, this.locale.format)), null !== o) && null !== n && (this.setStartDate(o), this.setEndDate(n)), "object" == typeof t.ranges) {
					for (s in t.ranges) {
						o = "string" == typeof t.ranges[s][0] ? P(t.ranges[s][0], this.locale.format) : P(t.ranges[s][0]), n = "string" == typeof t.ranges[s][1] ? P(t.ranges[s][1], this.locale.format) : P(t.ranges[s][1]), this.minDate && o.isBefore(this.minDate) && (o = this.minDate.clone());
						var l, u, c = this.maxDate;
						(c = this.maxSpan && c && o.clone().add(this.maxSpan).isAfter(c) ? o.clone().add(this.maxSpan) : c) && n.isAfter(c) && (n = c.clone()), this.minDate && n.isBefore(this.minDate, this.timepicker ? "minute" : "day") || c && o.isAfter(c, this.timepicker ? "minute" : "day") || ((l = document.createElement("textarea")).innerHTML = s, u = l.value, this.ranges[u] = [o, n])
					}
					var h = "<ul>";
					for (s in this.ranges) h += '<li data-range-key="' + s + '">' + s + "</li>";
					this.showCustomRangeLabel && (h += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), h += "</ul>", this.container.find(".ranges").prepend(h)
				}
				"function" == typeof i && (this.callback = i), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof t.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), !this.timePicker) && this.autoApply && this.container.addClass("auto-apply"), (void 0 === t.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", $.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", $.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", $.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", $.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", $.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", $.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", $.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", $.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
					"click.daterangepicker": $.proxy(this.show, this),
					"focus.daterangepicker": $.proxy(this.show, this),
					"keyup.daterangepicker": $.proxy(this.elementChanged, this),
					"keydown.daterangepicker": $.proxy(this.keydown, this)
				}) : (this.element.on("click.daterangepicker", $.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", $.proxy(this.toggle, this))), this.updateElement()
			}).prototype = {
				constructor: n,
				setStartDate: function(e) {
					"string" == typeof e && (this.startDate = P(e, this.locale.format)), "object" == typeof e && (this.startDate = P(e)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker) && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker) && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.isShowing || this.updateElement(), this.updateMonthsInView()
				},
				setEndDate: function(e) {
					"string" == typeof e && (this.endDate = P(e, this.locale.format)), "object" == typeof e && (this.endDate = P(e)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
				},
				isInvalidDate: function() {
					return !1
				},
				isCustomDate: function() {
					return !1
				},
				updateView: function() {
					this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").prop("disabled", !1).removeClass("disabled") : this.container.find(".right .calendar-time select").prop("disabled", !0).addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
				},
				updateMonthsInView: function() {
					if (this.endDate) {
						if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
						this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
					} else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
					this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
				},
				updateCalendars: function() {
					var e, t, i, n;
					this.timePicker && (this.endDate ? (t = parseInt(this.container.find(".left .hourselect").val(), 10), i = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(i) && (i = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), e = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (n = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === n && 12 === t && (t = 0))) : (t = parseInt(this.container.find(".right .hourselect").val(), 10), i = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(i) && (i = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), e = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (n = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === n && 12 === t && (t = 0))), this.leftCalendar.month.hour(t).minute(i).second(e), this.rightCalendar.month.hour(t).minute(i).second(e)), this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
				},
				renderCalendar: function(e) {
					var t = "left" == e ? this.leftCalendar : this.rightCalendar,
						i = t.month.month(),
						n = t.month.year(),
						s = t.month.hour(),
						a = t.month.minute(),
						o = t.month.second(),
						r = P([n, i]).daysInMonth(),
						l = P([n, i, 1]),
						n = P([n, i, r]),
						i = P(l).subtract(1, "month").month(),
						r = P(l).subtract(1, "month").year(),
						u = P([r, i]).daysInMonth(),
						c = l.day();
					(t = []).firstDay = l, t.lastDay = n;
					for (var h = 0; h < 6; h++) t[h] = [];
					for (var l = u - c + this.locale.firstDay + 1, d = (u < l && (l -= 7), c == this.locale.firstDay && (l = u - 6), P([r, i, l, 12, a, o])), h = 0, f = 0, p = 0; h < 42; h++, f++, d = P(d).add(24, "hour")) 0 < h && f % 7 == 0 && (f = 0, p++), t[p][f] = d.clone().hour(s).minute(a).second(o), d.hour(12), this.minDate && t[p][f].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && t[p][f].isBefore(this.minDate) && "left" == e && (t[p][f] = this.minDate.clone()), this.maxDate && t[p][f].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && t[p][f].isAfter(this.maxDate) && "right" == e && (t[p][f] = this.maxDate.clone());
					"left" == e ? this.leftCalendar.calendar = t : this.rightCalendar.calendar = t;
					var m = "left" == e ? this.minDate : this.startDate,
						g = this.maxDate,
						v = ("left" == e ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">'),
						n = (v = v + "<thead>" + "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (v += "<th></th>"), m && !m.isBefore(t.firstDay) || this.linkedCalendars && "left" != e ? v += "<th></th>" : v += '<th class="prev available"><span></span></th>', this.locale.monthNames[t[1][1].month()] + t[1][1].format(" YYYY"));
					if (this.showDropdowns) {
						for (var b = t[1][1].month(), y = t[1][1].year(), _ = g && g.year() || this.maxYear, c = m && m.year() || this.minYear, x = y == c, w = y == _, D = '<select class="monthselect">', C = 0; C < 12; C++)(!x || m && C >= m.month()) && (!w || g && C <= g.month()) ? D += "<option value='" + C + "'" + (C === b ? " selected='selected'" : "") + ">" + this.locale.monthNames[C] + "</option>" : D += "<option value='" + C + "'" + (C === b ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[C] + "</option>";
						D += "</select>";
						for (var k = '<select class="yearselect">', S = c; S <= _; S++) k += '<option value="' + S + '"' + (S === y ? ' selected="selected"' : "") + ">" + S + "</option>";
						n = D + (k += "</select>")
					}
					v += '<th colspan="5" class="month">' + n + "</th>", g && !g.isAfter(t.lastDay) || this.linkedCalendars && "right" != e && !this.singleDatePicker ? v += "<th></th>" : v += '<th class="next available"><span></span></th>', v += "</tr><tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (v += '<th class="week">' + this.locale.weekLabel + "</th>"), $.each(this.locale.daysOfWeek, function(e, t) {
						v += "<th>" + t + "</th>"
					}), v += "</tr></thead><tbody>", null == this.endDate && this.maxSpan && (u = this.startDate.clone().add(this.maxSpan).endOf("day"), g && !u.isBefore(g) || (g = u));
					for (p = 0; p < 6; p++) {
						v += "<tr>", this.showWeekNumbers ? v += '<td class="week">' + t[p][0].week() + "</td>" : this.showISOWeekNumbers && (v += '<td class="week">' + t[p][0].isoWeek() + "</td>");
						for (f = 0; f < 7; f++) {
							for (var T = [], A = (t[p][f].isSame(new Date, "day") && T.push("today"), 5 < t[p][f].isoWeekday() && T.push("weekend"), t[p][f].month() != t[1][1].month() && T.push("off", "ends"), this.minDate && t[p][f].isBefore(this.minDate, "day") && T.push("off", "disabled"), g && t[p][f].isAfter(g, "day") && T.push("off", "disabled"), this.isInvalidDate(t[p][f]) && T.push("off", "disabled"), t[p][f].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && T.push("active", "start-date"), null != this.endDate && t[p][f].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && T.push("active", "end-date"), null != this.endDate && t[p][f] > this.startDate && t[p][f] < this.endDate && T.push("in-range"), this.isCustomDate(t[p][f])), E = (!1 !== A && ("string" == typeof A ? T.push(A) : Array.prototype.push.apply(T, A)), ""), F = !1, h = 0; h < T.length; h++) E += T[h] + " ", "disabled" == T[h] && (F = !0);
							F || (E += "available"), v += '<td class="' + E.replace(/^\s+|\s+$/g, "") + '" data-title="r' + p + "c" + f + '">' + t[p][f].date() + "</td>"
						}
						v += "</tr>"
					}
					v += "</tbody></table>", this.container.find(".drp-calendar." + e + " .calendar-table").html(v)
				},
				renderTimePicker: function(e) {
					if ("right" != e || this.endDate) {
						for (var t, i, n = this.maxDate, s = (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate) || (n = this.startDate.clone().add(this.maxSpan)), "left" == e ? (t = this.startDate.clone(), i = this.minDate) : "right" == e && (t = this.endDate.clone(), i = this.startDate, "" != (s = this.container.find(".drp-calendar.right .calendar-time")).html() && (t.hour(isNaN(t.hour()) ? s.find(".hourselect option:selected").val() : t.hour()), t.minute(isNaN(t.minute()) ? s.find(".minuteselect option:selected").val() : t.minute()), t.second(isNaN(t.second()) ? s.find(".secondselect option:selected").val() : t.second()), this.timePicker24Hour || ("PM" === (s = s.find(".ampmselect option:selected").val()) && t.hour() < 12 && t.hour(t.hour() + 12), "AM" === s && 12 === t.hour() && t.hour(0))), t.isBefore(this.startDate) && (t = this.startDate.clone()), n) && t.isAfter(n) && (t = n.clone()), h = '<select class="hourselect">', this.timePicker24Hour ? 0 : 1), a = this.timePicker24Hour ? 23 : 12, o = s; o <= a; o++) {
							var r = o,
								l = (this.timePicker24Hour || (r = 12 <= t.hour() ? 12 == o ? 12 : o + 12 : 12 == o ? 0 : o), t.clone().hour(r)),
								u = !1;
							i && l.minute(59).isBefore(i) && (u = !0), n && l.minute(0).isAfter(n) && (u = !0), r != t.hour() || u ? h += u ? '<option value="' + o + '" disabled="disabled" class="disabled">' + o + "</option>" : '<option value="' + o + '">' + o + "</option>" : h += '<option value="' + o + '" selected="selected">' + o + "</option>"
						}
						for (var c, h = h + "</select> " + ': <select class="minuteselect">', o = 0; o < 60; o += this.timePickerIncrement) {
							var d = o < 10 ? "0" + o : o,
								l = t.clone().minute(o),
								u = !1;
							i && l.second(59).isBefore(i) && (u = !0), n && l.second(0).isAfter(n) && (u = !0), t.minute() != o || u ? h += u ? '<option value="' + o + '" disabled="disabled" class="disabled">' + d + "</option>" : '<option value="' + o + '">' + d + "</option>" : h += '<option value="' + o + '" selected="selected">' + d + "</option>"
						}
						if (h += "</select> ", this.timePickerSeconds) {
							h += ': <select class="secondselect">';
							for (o = 0; o < 60; o++) {
								d = o < 10 ? "0" + o : o, l = t.clone().second(o), u = !1;
								i && l.isBefore(i) && (u = !0), n && l.isAfter(n) && (u = !0), t.second() != o || u ? h += u ? '<option value="' + o + '" disabled="disabled" class="disabled">' + d + "</option>" : '<option value="' + o + '">' + d + "</option>" : h += '<option value="' + o + '" selected="selected">' + d + "</option>"
							}
							h += "</select> "
						}
						this.timePicker24Hour || (h += '<select class="ampmselect">', c = s = "", i && t.clone().hour(12).minute(0).second(0).isBefore(i) && (s = ' disabled="disabled" class="disabled"'), n && t.clone().hour(0).minute(0).second(0).isAfter(n) && (c = ' disabled="disabled" class="disabled"'), 12 <= t.hour() ? h += '<option value="AM"' + s + '>AM</option><option value="PM" selected="selected"' + c + ">PM</option>" : h += '<option value="AM" selected="selected"' + s + '>AM</option><option value="PM"' + c + ">PM</option>", h += "</select>"), this.container.find(".drp-calendar." + e + " .calendar-time").html(h)
					}
				},
				updateFormInputs: function() {
					this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").prop("disabled", !1) : this.container.find("button.applyBtn").prop("disabled", !0)
				},
				move: function() {
					var e, t = {
							top: 0,
							left: 0
						},
						i = this.drops,
						n = $(window).width();
					switch (this.parentEl.is("body") || (t = {
							top: this.parentEl.offset().top - this.parentEl.scrollTop(),
							left: this.parentEl.offset().left - this.parentEl.scrollLeft()
						}, n = this.parentEl[0].clientWidth + this.parentEl.offset().left), i) {
						case "auto":
							(e = this.element.offset().top + this.element.outerHeight() - t.top) + this.container.outerHeight() >= this.parentEl[0].scrollHeight && (e = this.element.offset().top - this.container.outerHeight() - t.top, i = "up");
							break;
						case "up":
							e = this.element.offset().top - this.container.outerHeight() - t.top;
							break;
						default:
							e = this.element.offset().top + this.element.outerHeight() - t.top
					}
					this.container.css({
						top: 0,
						left: 0,
						right: "auto"
					});
					var s, a = this.container.outerWidth();
					this.container.toggleClass("drop-up", "up" == i), "left" == this.opens ? a + (n = n - this.element.offset().left - this.element.outerWidth()) > $(window).width() ? this.container.css({
						top: e,
						right: "auto",
						left: 9
					}) : this.container.css({
						top: e,
						right: n,
						left: "auto"
					}) : "center" == this.opens ? (s = this.element.offset().left - t.left + this.element.outerWidth() / 2 - a / 2) < 0 ? this.container.css({
						top: e,
						right: "auto",
						left: 9
					}) : s + a > $(window).width() ? this.container.css({
						top: e,
						left: "auto",
						right: 0
					}) : this.container.css({
						top: e,
						left: s,
						right: "auto"
					}) : (s = this.element.offset().left - t.left) + a > $(window).width() ? this.container.css({
						top: e,
						left: "auto",
						right: 0
					}) : this.container.css({
						top: e,
						left: s,
						right: "auto"
					})
				},
				show: function(e) {
					this.isShowing || (this._outsideClickProxy = $.proxy(function(e) {
						this.outsideClick(e)
					}, this), $(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), $(window).on("resize.daterangepicker", $.proxy(function(e) {
						this.move(e)
					}, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
				},
				hide: function(e) {
					this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), $(document).off(".daterangepicker"), $(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
				},
				toggle: function(e) {
					this.isShowing ? this.hide() : this.show()
				},
				outsideClick: function(e) {
					var t = $(e.target);
					"focusin" == e.type || t.closest(this.element).length || t.closest(this.container).length || t.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
				},
				showCalendars: function() {
					this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
				},
				hideCalendars: function() {
					this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
				},
				clickRange: function(e) {
					var e = e.target.getAttribute("data-range-key");
					(this.chosenLabel = e) == this.locale.customRangeLabel ? this.showCalendars() : (e = this.ranges[e], this.startDate = e[0], this.endDate = e[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply())
				},
				clickPrev: function(e) {
					$(e.target).parents(".drp-calendar").hasClass("left") && (this.leftCalendar.month.subtract(1, "month"), !this.linkedCalendars) || this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
				},
				clickNext: function(e) {
					($(e.target).parents(".drp-calendar").hasClass("left") || (this.rightCalendar.month.add(1, "month"), this.linkedCalendars)) && this.leftCalendar.month.add(1, "month"), this.updateCalendars()
				},
				hoverDate: function(e) {
					var t, i, s, a, o, r;
					$(e.target).hasClass("available") && (t = (i = $(e.target).attr("data-title")).substr(1, 1), i = i.substr(3, 1), s = ($(e.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar : this.rightCalendar).calendar[t][i], a = this.leftCalendar, o = this.rightCalendar, r = this.startDate, this.endDate || this.container.find(".drp-calendar tbody td").each(function(e, t) {
						var i, n;
						$(t).hasClass("week") || (n = (i = $(t).attr("data-title")).substr(1, 1), i = i.substr(3, 1), (n = ($(t).parents(".drp-calendar").hasClass("left") ? a : o).calendar[n][i]).isAfter(r) && n.isBefore(s) || n.isSame(s, "day") ? $(t).addClass("in-range") : $(t).removeClass("in-range"))
					}))
				},
				clickDate: function(e) {
					var t, i, n, s, a, o;
					$(e.target).hasClass("available") && (i = (t = $(e.target).attr("data-title")).substr(1, 1), t = t.substr(3, 1), i = ($(e.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar : this.rightCalendar).calendar[i][t], this.endDate || i.isBefore(this.startDate, "day") ? (this.timePicker && (n = parseInt(this.container.find(".left .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (s = this.container.find(".left .ampmselect").val()) && n < 12 && (n += 12), "AM" === s && 12 === n && (n = 0)), a = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(a) && (a = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), o = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, i = i.clone().hour(n).minute(a).second(o)), this.endDate = null, this.setStartDate(i.clone())) : !this.endDate && i.isBefore(this.startDate) ? this.setEndDate(this.startDate.clone()) : (this.timePicker && (n = parseInt(this.container.find(".right .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (s = this.container.find(".right .ampmselect").val()) && n < 12 && (n += 12), "AM" === s && 12 === n && (n = 0)), a = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(a) && (a = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), o = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, i = i.clone().hour(n).minute(a).second(o)), this.setEndDate(i.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())), this.singleDatePicker && (this.setEndDate(this.startDate), !this.timePicker) && this.autoApply && this.clickApply(), this.updateView(), e.stopPropagation())
				},
				calculateChosenLabel: function() {
					var e, t = !0,
						i = 0;
					for (e in this.ranges) {
						if (this.timePicker) {
							var n = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
							if (this.startDate.format(n) == this.ranges[e][0].format(n) && this.endDate.format(n) == this.ranges[e][1].format(n)) {
								t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").attr("data-range-key");
								break
							}
						} else if (this.startDate.format("YYYY-MM-DD") == this.ranges[e][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[e][1].format("YYYY-MM-DD")) {
							t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").attr("data-range-key");
							break
						}
						i++
					}
					t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
				},
				clickApply: function(e) {
					this.hide(), this.element.trigger("apply.daterangepicker", this)
				},
				clickCancel: function(e) {
					this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
				},
				monthOrYearChanged: function(e) {
					var e = $(e.target).closest(".drp-calendar").hasClass("left"),
						t = this.container.find(".drp-calendar." + (e ? "left" : "right")),
						i = parseInt(t.find(".monthselect").val(), 10),
						t = t.find(".yearselect").val();
					e || (t < this.startDate.year() || t == this.startDate.year() && i < this.startDate.month()) && (i = this.startDate.month(), t = this.startDate.year()), this.minDate && (t < this.minDate.year() || t == this.minDate.year() && i < this.minDate.month()) && (i = this.minDate.month(), t = this.minDate.year()), this.maxDate && (t > this.maxDate.year() || t == this.maxDate.year() && i > this.maxDate.month()) && (i = this.maxDate.month(), t = this.maxDate.year()), e ? (this.leftCalendar.month.month(i).year(t), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(i).year(t), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
				},
				timeChanged: function(e) {
					var e = $(e.target).closest(".drp-calendar"),
						t = e.hasClass("left"),
						i = parseInt(e.find(".hourselect").val(), 10),
						n = parseInt(e.find(".minuteselect").val(), 10),
						s = (isNaN(n) && (n = parseInt(e.find(".minuteselect option:last").val(), 10)), this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0);
					this.timePicker24Hour || ("PM" === (e = e.find(".ampmselect").val()) && i < 12 && (i += 12), "AM" === e && 12 === i && (i = 0)), t ? ((e = this.startDate.clone()).hour(i), e.minute(n), e.second(s), this.setStartDate(e), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == e.format("YYYY-MM-DD") && this.endDate.isBefore(e) && this.setEndDate(e.clone())) : this.endDate && ((t = this.endDate.clone()).hour(i), t.minute(n), t.second(s), this.setEndDate(t)), this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
				},
				elementChanged: function() {
					var e, t, i;
					this.element.is("input") && this.element.val().length && (i = t = null, 2 === (e = this.element.val().split(this.locale.separator)).length && (t = P(e[0], this.locale.format), i = P(e[1], this.locale.format)), !this.singleDatePicker && null !== t && null !== i || (i = t = P(this.element.val(), this.locale.format)), t.isValid()) && i.isValid() && (this.setStartDate(t), this.setEndDate(i), this.updateView())
				},
				keydown: function(e) {
					9 !== e.keyCode && 13 !== e.keyCode || this.hide(), 27 === e.keyCode && (e.preventDefault(), e.stopPropagation(), this.hide())
				},
				updateElement: function() {
					var e;
					this.element.is("input") && this.autoUpdateInput && (e = this.startDate.format(this.locale.format), this.singleDatePicker || (e += this.locale.separator + this.endDate.format(this.locale.format)), e !== this.element.val()) && this.element.val(e).trigger("change")
				},
				remove: function() {
					this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
				}
			}, $.fn.daterangepicker = function(e, t) {
				var i = $.extend(!0, {}, $.fn.daterangepicker.defaultOptions, e);
				return this.each(function() {
					var e = $(this);
					e.data("daterangepicker") && e.data("daterangepicker").remove(), e.data("daterangepicker", new n(e, i, t))
				}), this
			}, n;
			var P, $, n
		}.apply(t, i)) && (e.exports = t)
	},
	76: function(e, t, i) {
		! function(uo) {
			var co;
			uo.exports = function() {
				"use strict";
				var H, L;

				function h() {
					return H.apply(null, arguments)
				}

				function N(e) {
					H = e
				}

				function o(e) {
					return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
				}

				function R(e) {
					return e != null && Object.prototype.toString.call(e) === "[object Object]"
				}

				function l(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}

				function j(e) {
					if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
					else {
						var t;
						for (t in e)
							if (l(e, t)) return false;
						return true
					}
				}

				function r(e) {
					return e === void 0
				}

				function u(e) {
					return typeof e === "number" || Object.prototype.toString.call(e) === "[object Number]"
				}

				function Y(e) {
					return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
				}

				function z(e, t) {
					var i = [],
						n, s = e.length;
					for (n = 0; n < s; ++n) i.push(t(e[n], n));
					return i
				}

				function B(e, t) {
					for (var i in t)
						if (l(t, i)) e[i] = t[i];
					if (l(t, "toString")) e.toString = t.toString;
					if (l(t, "valueOf")) e.valueOf = t.valueOf;
					return e
				}

				function c(e, t, i, n) {
					return Zi(e, t, i, n, true).utc()
				}

				function W() {
					return {
						empty: false,
						unusedTokens: [],
						unusedInput: [],
						overflow: -2,
						charsLeftOver: 0,
						nullInput: false,
						invalidEra: null,
						invalidMonth: null,
						invalidFormat: false,
						userInvalidated: false,
						iso: false,
						parsedDateParts: [],
						era: null,
						meridiem: null,
						rfc2822: false,
						weekdayMismatch: false
					}
				}

				function d(e) {
					if (e._pf == null) e._pf = W();
					return e._pf
				}
				if (Array.prototype.some) L = Array.prototype.some;
				else L = function(e) {
					var t = Object(this),
						i = t.length >>> 0,
						n;
					for (n = 0; n < i; n++)
						if (n in t && e.call(this, t[n], n, t)) return true;
					return false
				};

				function q(e) {
					if (e._isValid == null) {
						var t = d(e),
							i = L.call(t.parsedDateParts, function(e) {
								return e != null
							}),
							n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && i);
						if (e._strict) n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined;
						if (Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = n;
						else return n
					}
					return e._isValid
				}

				function U(e) {
					var t = c(NaN);
					if (e != null) B(d(t), e);
					else d(t).userInvalidated = true;
					return t
				}
				var V = h.momentProperties = [],
					G = false;

				function X(e, t) {
					var i, n, s, a = V.length;
					if (!r(t._isAMomentObject)) e._isAMomentObject = t._isAMomentObject;
					if (!r(t._i)) e._i = t._i;
					if (!r(t._f)) e._f = t._f;
					if (!r(t._l)) e._l = t._l;
					if (!r(t._strict)) e._strict = t._strict;
					if (!r(t._tzm)) e._tzm = t._tzm;
					if (!r(t._isUTC)) e._isUTC = t._isUTC;
					if (!r(t._offset)) e._offset = t._offset;
					if (!r(t._pf)) e._pf = d(t);
					if (!r(t._locale)) e._locale = t._locale;
					if (a > 0)
						for (i = 0; i < a; i++) {
							n = V[i];
							s = t[n];
							if (!r(s)) e[n] = s
						}
					return e
				}

				function K(e) {
					X(this, e);
					this._d = new Date(e._d != null ? e._d.getTime() : NaN);
					if (!this.isValid()) this._d = new Date(NaN);
					if (G === false) {
						G = true;
						h.updateOffset(this);
						G = false
					}
				}

				function f(e) {
					return e instanceof K || e != null && e._isAMomentObject != null
				}

				function Z(e) {
					if (h.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) console.warn("Deprecation warning: " + e)
				}

				function e(a, o) {
					var r = true;
					return B(function() {
						if (h.deprecationHandler != null) h.deprecationHandler(null, a);
						if (r) {
							var e = [],
								t, i, n, s = arguments.length;
							for (i = 0; i < s; i++) {
								t = "";
								if (typeof arguments[i] === "object") {
									t += "\n[" + i + "] ";
									for (n in arguments[0])
										if (l(arguments[0], n)) t += n + ": " + arguments[0][n] + ", ";
									t = t.slice(0, -2)
								} else t = arguments[i];
								e.push(t)
							}
							Z(a + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack);
							r = false
						}
						return o.apply(this, arguments)
					}, o)
				}
				var Q = {},
					J;

				function ee(e, t) {
					if (h.deprecationHandler != null) h.deprecationHandler(e, t);
					if (!Q[e]) {
						Z(t);
						Q[e] = true
					}
				}

				function p(e) {
					return typeof Function !== "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
				}

				function te(e) {
					var t, i;
					for (i in e)
						if (l(e, i)) {
							t = e[i];
							if (p(t)) this[i] = t;
							else this["_" + i] = t
						} this._config = e;
					this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
				}

				function ie(e, t) {
					var i = B({}, e),
						n;
					for (n in t)
						if (l(t, n))
							if (R(e[n]) && R(t[n])) {
								i[n] = {};
								B(i[n], e[n]);
								B(i[n], t[n])
							} else if (t[n] != null) i[n] = t[n];
					else delete i[n];
					for (n in e)
						if (l(e, n) && !l(t, n) && R(e[n])) i[n] = B({}, i[n]);
					return i
				}

				function ne(e) {
					if (e != null) this.set(e)
				}
				if (h.suppressDeprecationWarnings = false, h.deprecationHandler = null, Object.keys) J = Object.keys;
				else J = function(e) {
					var t, i = [];
					for (t in e)
						if (l(e, t)) i.push(t);
					return i
				};
				var se = {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L"
				};

				function ae(e, t, i) {
					var n = this._calendar[e] || this._calendar["sameElse"];
					return p(n) ? n.call(t, i) : n
				}

				function a(e, t, i) {
					var n = "" + Math.abs(e),
						s = t - n.length,
						a = e >= 0;
					return (a ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
				}
				var oe = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
					re = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
					le = {},
					ue = {};

				function n(e, t, i, n) {
					var s = n;
					if (typeof n === "string") s = function() {
						return this[n]()
					};
					if (e) ue[e] = s;
					if (t) ue[t[0]] = function() {
						return a(s.apply(this, arguments), t[1], t[2])
					};
					if (i) ue[i] = function() {
						return this.localeData().ordinal(s.apply(this, arguments), e)
					}
				}

				function ce(e) {
					if (e.match(/\[[\s\S]/)) return e.replace(/^\[|\]$/g, "");
					return e.replace(/\\/g, "")
				}

				function he(n) {
					var s = n.match(oe),
						e, a;
					for (e = 0, a = s.length; e < a; e++)
						if (ue[s[e]]) s[e] = ue[s[e]];
						else s[e] = ce(s[e]);
					return function(e) {
						var t = "",
							i;
						for (i = 0; i < a; i++) t += p(s[i]) ? s[i].call(e, n) : s[i];
						return t
					}
				}

				function de(e, t) {
					if (!e.isValid()) return e.localeData().invalidDate();
					t = fe(t, e.localeData());
					le[t] = le[t] || he(t);
					return le[t](e)
				}

				function fe(e, t) {
					var i = 5;

					function n(e) {
						return t.longDateFormat(e) || e
					}
					re.lastIndex = 0;
					while (i >= 0 && re.test(e)) {
						e = e.replace(re, n);
						re.lastIndex = 0;
						i -= 1
					}
					return e
				}
				var pe = {
					LTS: "h:mm:ss A",
					LT: "h:mm A",
					L: "MM/DD/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY h:mm A",
					LLLL: "dddd, MMMM D, YYYY h:mm A"
				};

				function me(e) {
					var t = this._longDateFormat[e],
						i = this._longDateFormat[e.toUpperCase()];
					if (t || !i) return t;
					this._longDateFormat[e] = i.match(oe).map(function(e) {
						if (e === "MMMM" || e === "MM" || e === "DD" || e === "dddd") return e.slice(1);
						return e
					}).join("");
					return this._longDateFormat[e]
				}
				var ge = "Invalid date";

				function ve() {
					return this._invalidDate
				}
				var be = "%d",
					ye = /\d{1,2}/;

				function _e(e) {
					return this._ordinal.replace("%d", e)
				}
				var xe = {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					w: "a week",
					ww: "%d weeks",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years"
				};

				function we(e, t, i, n) {
					var s = this._relativeTime[i];
					return p(s) ? s(e, t, i, n) : s.replace(/%d/i, e)
				}

				function De(e, t) {
					var i = this._relativeTime[e > 0 ? "future" : "past"];
					return p(i) ? i(t) : i.replace(/%s/i, t)
				}
				var Ce = {};

				function t(e, t) {
					var i = e.toLowerCase();
					Ce[i] = Ce[i + "s"] = Ce[t] = e
				}

				function m(e) {
					return typeof e === "string" ? Ce[e] || Ce[e.toLowerCase()] : undefined
				}

				function ke(e) {
					var t = {},
						i, n;
					for (n in e)
						if (l(e, n)) {
							i = m(n);
							if (i) t[i] = e[n]
						} return t
				}
				var Se = {};

				function i(e, t) {
					Se[e] = t
				}

				function Te(e) {
					var t = [],
						i;
					for (i in e)
						if (l(e, i)) t.push({
							unit: i,
							priority: Se[i]
						});
					t.sort(function(e, t) {
						return e.priority - t.priority
					});
					return t
				}

				function Ae(e) {
					return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
				}

				function g(e) {
					if (e < 0) return Math.ceil(e) || 0;
					else return Math.floor(e)
				}

				function v(e) {
					var t = +e,
						i = 0;
					if (t !== 0 && isFinite(t)) i = g(t);
					return i
				}

				function Ee(t, i) {
					return function(e) {
						if (e != null) {
							Pe(this, t, e);
							h.updateOffset(this, i);
							return this
						} else return Fe(this, t)
					}
				}

				function Fe(e, t) {
					return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
				}

				function Pe(e, t, i) {
					if (e.isValid() && !isNaN(i))
						if (t === "FullYear" && Ae(e.year()) && e.month() === 1 && e.date() === 29) {
							i = v(i);
							e._d["set" + (e._isUTC ? "UTC" : "") + t](i, e.month(), at(i, e.month()))
						} else e._d["set" + (e._isUTC ? "UTC" : "") + t](i)
				}

				function $e(e) {
					e = m(e);
					if (p(this[e])) return this[e]();
					return this
				}

				function Me(e, t) {
					if (typeof e === "object") {
						e = ke(e);
						var i = Te(e),
							n, s = i.length;
						for (n = 0; n < s; n++) this[i[n].unit](e[i[n].unit])
					} else {
						e = m(e);
						if (p(this[e])) return this[e](t)
					}
					return this
				}
				var Ie = /\d/,
					s = /\d\d/,
					Oe = /\d{3}/,
					He = /\d{4}/,
					Le = /[+-]?\d{6}/,
					b = /\d\d?/,
					Ne = /\d\d\d\d?/,
					Re = /\d\d\d\d\d\d?/,
					je = /\d{1,3}/,
					Ye = /\d{1,4}/,
					ze = /[+-]?\d{1,6}/,
					Be = /\d+/,
					We = /[+-]?\d+/,
					qe = /Z|[+-]\d\d:?\d\d/gi,
					Ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
					Ve = /[+-]?\d+(\.\d{1,3})?/,
					Ge = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
					Xe;

				function y(e, i, n) {
					Xe[e] = p(i) ? i : function(e, t) {
						return e && n ? n : i
					}
				}

				function Ke(e, t) {
					if (!l(Xe, e)) return new RegExp(Ze(e));
					return Xe[e](t._strict, t._locale)
				}

				function Ze(e) {
					return _(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, i, n, s) {
						return t || i || n || s
					}))
				}

				function _(e) {
					return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
				}
				var Xe = {},
					Qe = {};

				function x(e, i) {
					var t, n = i,
						s;
					if (typeof e === "string") e = [e];
					if (u(i)) n = function(e, t) {
						t[i] = v(e)
					};
					s = e.length;
					for (t = 0; t < s; t++) Qe[e[t]] = n
				}

				function Je(e, s) {
					x(e, function(e, t, i, n) {
						i._w = i._w || {};
						s(e, i._w, i, n)
					})
				}

				function et(e, t, i) {
					if (t != null && l(Qe, e)) Qe[e](t, i._a, i, e)
				}
				var w = 0,
					D = 1,
					C = 2,
					k = 3,
					S = 4,
					T = 5,
					tt = 6,
					it = 7,
					nt = 8,
					A;

				function st(e, t) {
					return (e % t + t) % t
				}
				if (Array.prototype.indexOf) A = Array.prototype.indexOf;
				else A = function(e) {
					var t;
					for (t = 0; t < this.length; ++t)
						if (this[t] === e) return t;
					return -1
				};

				function at(e, t) {
					if (isNaN(e) || isNaN(t)) return NaN;
					var i = st(t, 12);
					e += (t - i) / 12;
					return i === 1 ? Ae(e) ? 29 : 28 : 31 - i % 7 % 2
				}
				n("M", ["MM", 2], "Mo", function() {
					return this.month() + 1
				}), n("MMM", 0, 0, function(e) {
					return this.localeData().monthsShort(this, e)
				}), n("MMMM", 0, 0, function(e) {
					return this.localeData().months(this, e)
				}), t("month", "M"), i("month", 8), y("M", b), y("MM", b, s), y("MMM", function(e, t) {
					return t.monthsShortRegex(e)
				}), y("MMMM", function(e, t) {
					return t.monthsRegex(e)
				}), x(["M", "MM"], function(e, t) {
					t[D] = v(e) - 1
				}), x(["MMM", "MMMM"], function(e, t, i, n) {
					var s = i._locale.monthsParse(e, n, i._strict);
					if (s != null) t[D] = s;
					else d(i).invalidMonth = e
				});
				var ot = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					rt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					lt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
					ut = Ge,
					ct = Ge;

				function ht(e, t) {
					if (!e) return o(this._months) ? this._months : this._months["standalone"];
					return o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || lt).test(t) ? "format" : "standalone"][e.month()]
				}

				function dt(e, t) {
					if (!e) return o(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
					return o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[lt.test(t) ? "format" : "standalone"][e.month()]
				}

				function ft(e, t, i) {
					var n, s, a, o = e.toLocaleLowerCase();
					if (!this._monthsParse) {
						this._monthsParse = [];
						this._longMonthsParse = [];
						this._shortMonthsParse = [];
						for (n = 0; n < 12; ++n) {
							a = c([2e3, n]);
							this._shortMonthsParse[n] = this.monthsShort(a, "").toLocaleLowerCase();
							this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase()
						}
					}
					if (i)
						if (t === "MMM") {
							s = A.call(this._shortMonthsParse, o);
							return s !== -1 ? s : null
						} else {
							s = A.call(this._longMonthsParse, o);
							return s !== -1 ? s : null
						}
					else if (t === "MMM") {
						s = A.call(this._shortMonthsParse, o);
						if (s !== -1) return s;
						s = A.call(this._longMonthsParse, o);
						return s !== -1 ? s : null
					} else {
						s = A.call(this._longMonthsParse, o);
						if (s !== -1) return s;
						s = A.call(this._shortMonthsParse, o);
						return s !== -1 ? s : null
					}
				}

				function pt(e, t, i) {
					var n, s, a;
					if (this._monthsParseExact) return ft.call(this, e, t, i);
					if (!this._monthsParse) {
						this._monthsParse = [];
						this._longMonthsParse = [];
						this._shortMonthsParse = []
					}
					for (n = 0; n < 12; n++) {
						s = c([2e3, n]);
						if (i && !this._longMonthsParse[n]) {
							this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i");
							this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")
						}
						if (!i && !this._monthsParse[n]) {
							a = "^" + this.months(s, "") + "|^" + this.monthsShort(s, "");
							this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")
						}
						if (i && t === "MMMM" && this._longMonthsParse[n].test(e)) return n;
						else if (i && t === "MMM" && this._shortMonthsParse[n].test(e)) return n;
						else if (!i && this._monthsParse[n].test(e)) return n
					}
				}

				function mt(e, t) {
					var i;
					if (!e.isValid()) return e;
					if (typeof t === "string")
						if (/^\d+$/.test(t)) t = v(t);
						else {
							t = e.localeData().monthsParse(t);
							if (!u(t)) return e
						} i = Math.min(e.date(), at(e.year(), t));
					e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, i);
					return e
				}

				function gt(e) {
					if (e != null) {
						mt(this, e);
						h.updateOffset(this, true);
						return this
					} else return Fe(this, "Month")
				}

				function vt() {
					return at(this.year(), this.month())
				}

				function bt(e) {
					if (this._monthsParseExact) {
						if (!l(this, "_monthsRegex")) _t.call(this);
						if (e) return this._monthsShortStrictRegex;
						else return this._monthsShortRegex
					} else {
						if (!l(this, "_monthsShortRegex")) this._monthsShortRegex = ut;
						return this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
					}
				}

				function yt(e) {
					if (this._monthsParseExact) {
						if (!l(this, "_monthsRegex")) _t.call(this);
						if (e) return this._monthsStrictRegex;
						else return this._monthsRegex
					} else {
						if (!l(this, "_monthsRegex")) this._monthsRegex = ct;
						return this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
					}
				}

				function _t() {
					function e(e, t) {
						return t.length - e.length
					}
					var t = [],
						i = [],
						n = [],
						s, a;
					for (s = 0; s < 12; s++) {
						a = c([2e3, s]);
						t.push(this.monthsShort(a, ""));
						i.push(this.months(a, ""));
						n.push(this.months(a, ""));
						n.push(this.monthsShort(a, ""))
					}
					t.sort(e);
					i.sort(e);
					n.sort(e);
					for (s = 0; s < 12; s++) {
						t[s] = _(t[s]);
						i[s] = _(i[s])
					}
					for (s = 0; s < 24; s++) n[s] = _(n[s]);
					this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i");
					this._monthsShortRegex = this._monthsRegex;
					this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
					this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
				}

				function xt(e) {
					return Ae(e) ? 366 : 365
				}
				n("Y", 0, 0, function() {
					var e = this.year();
					return e <= 9999 ? a(e, 4) : "+" + e
				}), n(0, ["YY", 2], 0, function() {
					return this.year() % 100
				}), n(0, ["YYYY", 4], 0, "year"), n(0, ["YYYYY", 5], 0, "year"), n(0, ["YYYYYY", 6, true], 0, "year"), t("year", "y"), i("year", 1), y("Y", We), y("YY", b, s), y("YYYY", Ye, He), y("YYYYY", ze, Le), y("YYYYYY", ze, Le), x(["YYYYY", "YYYYYY"], w), x("YYYY", function(e, t) {
					t[w] = e.length === 2 ? h.parseTwoDigitYear(e) : v(e)
				}), x("YY", function(e, t) {
					t[w] = h.parseTwoDigitYear(e)
				}), x("Y", function(e, t) {
					t[w] = parseInt(e, 10)
				}), h.parseTwoDigitYear = function(e) {
					return v(e) + (v(e) > 68 ? 1900 : 2e3)
				};
				var wt = Ee("FullYear", true);

				function Dt() {
					return Ae(this.year())
				}

				function Ct(e, t, i, n, s, a, o) {
					var r;
					if (e < 100 && e >= 0) {
						r = new Date(e + 400, t, i, n, s, a, o);
						if (isFinite(r.getFullYear())) r.setFullYear(e)
					} else r = new Date(e, t, i, n, s, a, o);
					return r
				}

				function kt(e) {
					var t, i;
					if (e < 100 && e >= 0) {
						i = Array.prototype.slice.call(arguments);
						i[0] = e + 400;
						t = new Date(Date.UTC.apply(null, i));
						if (isFinite(t.getUTCFullYear())) t.setUTCFullYear(e)
					} else t = new Date(Date.UTC.apply(null, arguments));
					return t
				}

				function St(e, t, i) {
					var n = 7 + t - i,
						s = (7 + kt(e, 0, n).getUTCDay() - t) % 7;
					return -s + n - 1
				}

				function Tt(e, t, i, n, s) {
					var a = (7 + i - n) % 7,
						o = St(e, n, s),
						r = 1 + 7 * (t - 1) + a + o,
						l, u;
					if (r <= 0) {
						l = e - 1;
						u = xt(l) + r
					} else if (r > xt(e)) {
						l = e + 1;
						u = r - xt(e)
					} else {
						l = e;
						u = r
					}
					return {
						year: l,
						dayOfYear: u
					}
				}

				function At(e, t, i) {
					var n = St(e.year(), t, i),
						s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1,
						a, o;
					if (s < 1) {
						o = e.year() - 1;
						a = s + E(o, t, i)
					} else if (s > E(e.year(), t, i)) {
						a = s - E(e.year(), t, i);
						o = e.year() + 1
					} else {
						o = e.year();
						a = s
					}
					return {
						week: a,
						year: o
					}
				}

				function E(e, t, i) {
					var n = St(e, t, i),
						s = St(e + 1, t, i);
					return (xt(e) - n + s) / 7
				}

				function Et(e) {
					return At(e, this._week.dow, this._week.doy).week
				}
				n("w", ["ww", 2], "wo", "week"), n("W", ["WW", 2], "Wo", "isoWeek"), t("week", "w"), t("isoWeek", "W"), i("week", 5), i("isoWeek", 5), y("w", b), y("ww", b, s), y("W", b), y("WW", b, s), Je(["w", "ww", "W", "WW"], function(e, t, i, n) {
					t[n.substr(0, 1)] = v(e)
				});
				var Ft = {
					dow: 0,
					doy: 6
				};

				function Pt() {
					return this._week.dow
				}

				function $t() {
					return this._week.doy
				}

				function Mt(e) {
					var t = this.localeData().week(this);
					return e == null ? t : this.add((e - t) * 7, "d")
				}

				function It(e) {
					var t = At(this, 1, 4).week;
					return e == null ? t : this.add((e - t) * 7, "d")
				}

				function Ot(e, t) {
					if (typeof e !== "string") return e;
					if (!isNaN(e)) return parseInt(e, 10);
					e = t.weekdaysParse(e);
					if (typeof e === "number") return e;
					return null
				}

				function Ht(e, t) {
					if (typeof e === "string") return t.weekdaysParse(e) % 7 || 7;
					return isNaN(e) ? null : e
				}

				function Lt(e, t) {
					return e.slice(t, 7).concat(e.slice(0, t))
				}
				n("d", 0, "do", "day"), n("dd", 0, 0, function(e) {
					return this.localeData().weekdaysMin(this, e)
				}), n("ddd", 0, 0, function(e) {
					return this.localeData().weekdaysShort(this, e)
				}), n("dddd", 0, 0, function(e) {
					return this.localeData().weekdays(this, e)
				}), n("e", 0, 0, "weekday"), n("E", 0, 0, "isoWeekday"), t("day", "d"), t("weekday", "e"), t("isoWeekday", "E"), i("day", 11), i("weekday", 11), i("isoWeekday", 11), y("d", b), y("e", b), y("E", b), y("dd", function(e, t) {
					return t.weekdaysMinRegex(e)
				}), y("ddd", function(e, t) {
					return t.weekdaysShortRegex(e)
				}), y("dddd", function(e, t) {
					return t.weekdaysRegex(e)
				}), Je(["dd", "ddd", "dddd"], function(e, t, i, n) {
					var s = i._locale.weekdaysParse(e, n, i._strict);
					if (s != null) t.d = s;
					else d(i).invalidWeekday = e
				}), Je(["d", "e", "E"], function(e, t, i, n) {
					t[n] = v(e)
				});
				var Nt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					Rt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					Yt = Ge,
					zt = Ge,
					Bt = Ge;

				function Wt(e, t) {
					var i = o(this._weekdays) ? this._weekdays : this._weekdays[e && e !== true && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
					return e === true ? Lt(i, this._week.dow) : e ? i[e.day()] : i
				}

				function qt(e) {
					return e === true ? Lt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
				}

				function Ut(e) {
					return e === true ? Lt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
				}

				function Vt(e, t, i) {
					var n, s, a, o = e.toLocaleLowerCase();
					if (!this._weekdaysParse) {
						this._weekdaysParse = [];
						this._shortWeekdaysParse = [];
						this._minWeekdaysParse = [];
						for (n = 0; n < 7; ++n) {
							a = c([2e3, 1]).day(n);
							this._minWeekdaysParse[n] = this.weekdaysMin(a, "").toLocaleLowerCase();
							this._shortWeekdaysParse[n] = this.weekdaysShort(a, "").toLocaleLowerCase();
							this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase()
						}
					}
					if (i)
						if (t === "dddd") {
							s = A.call(this._weekdaysParse, o);
							return s !== -1 ? s : null
						} else if (t === "ddd") {
						s = A.call(this._shortWeekdaysParse, o);
						return s !== -1 ? s : null
					} else {
						s = A.call(this._minWeekdaysParse, o);
						return s !== -1 ? s : null
					} else if (t === "dddd") {
						s = A.call(this._weekdaysParse, o);
						if (s !== -1) return s;
						s = A.call(this._shortWeekdaysParse, o);
						if (s !== -1) return s;
						s = A.call(this._minWeekdaysParse, o);
						return s !== -1 ? s : null
					} else if (t === "ddd") {
						s = A.call(this._shortWeekdaysParse, o);
						if (s !== -1) return s;
						s = A.call(this._weekdaysParse, o);
						if (s !== -1) return s;
						s = A.call(this._minWeekdaysParse, o);
						return s !== -1 ? s : null
					} else {
						s = A.call(this._minWeekdaysParse, o);
						if (s !== -1) return s;
						s = A.call(this._weekdaysParse, o);
						if (s !== -1) return s;
						s = A.call(this._shortWeekdaysParse, o);
						return s !== -1 ? s : null
					}
				}

				function Gt(e, t, i) {
					var n, s, a;
					if (this._weekdaysParseExact) return Vt.call(this, e, t, i);
					if (!this._weekdaysParse) {
						this._weekdaysParse = [];
						this._minWeekdaysParse = [];
						this._shortWeekdaysParse = [];
						this._fullWeekdaysParse = []
					}
					for (n = 0; n < 7; n++) {
						s = c([2e3, 1]).day(n);
						if (i && !this._fullWeekdaysParse[n]) {
							this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i");
							this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i");
							this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")
						}
						if (!this._weekdaysParse[n]) {
							a = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, "");
							this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")
						}
						if (i && t === "dddd" && this._fullWeekdaysParse[n].test(e)) return n;
						else if (i && t === "ddd" && this._shortWeekdaysParse[n].test(e)) return n;
						else if (i && t === "dd" && this._minWeekdaysParse[n].test(e)) return n;
						else if (!i && this._weekdaysParse[n].test(e)) return n
					}
				}

				function Xt(e) {
					if (!this.isValid()) return e != null ? this : NaN;
					var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
					if (e != null) {
						e = Ot(e, this.localeData());
						return this.add(e - t, "d")
					} else return t
				}

				function Kt(e) {
					if (!this.isValid()) return e != null ? this : NaN;
					var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
					return e == null ? t : this.add(e - t, "d")
				}

				function Zt(e) {
					if (!this.isValid()) return e != null ? this : NaN;
					if (e != null) {
						var t = Ht(e, this.localeData());
						return this.day(this.day() % 7 ? t : t - 7)
					} else return this.day() || 7
				}

				function Qt(e) {
					if (this._weekdaysParseExact) {
						if (!l(this, "_weekdaysRegex")) ti.call(this);
						if (e) return this._weekdaysStrictRegex;
						else return this._weekdaysRegex
					} else {
						if (!l(this, "_weekdaysRegex")) this._weekdaysRegex = Yt;
						return this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex
					}
				}

				function Jt(e) {
					if (this._weekdaysParseExact) {
						if (!l(this, "_weekdaysRegex")) ti.call(this);
						if (e) return this._weekdaysShortStrictRegex;
						else return this._weekdaysShortRegex
					} else {
						if (!l(this, "_weekdaysShortRegex")) this._weekdaysShortRegex = zt;
						return this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
					}
				}

				function ei(e) {
					if (this._weekdaysParseExact) {
						if (!l(this, "_weekdaysRegex")) ti.call(this);
						if (e) return this._weekdaysMinStrictRegex;
						else return this._weekdaysMinRegex
					} else {
						if (!l(this, "_weekdaysMinRegex")) this._weekdaysMinRegex = Bt;
						return this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
					}
				}

				function ti() {
					function e(e, t) {
						return t.length - e.length
					}
					var t = [],
						i = [],
						n = [],
						s = [],
						a, o, r, l, u;
					for (a = 0; a < 7; a++) {
						o = c([2e3, 1]).day(a);
						r = _(this.weekdaysMin(o, ""));
						l = _(this.weekdaysShort(o, ""));
						u = _(this.weekdays(o, ""));
						t.push(r);
						i.push(l);
						n.push(u);
						s.push(r);
						s.push(l);
						s.push(u)
					}
					t.sort(e);
					i.sort(e);
					n.sort(e);
					s.sort(e);
					this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i");
					this._weekdaysShortRegex = this._weekdaysRegex;
					this._weekdaysMinRegex = this._weekdaysRegex;
					this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
					this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
					this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
				}

				function ii() {
					return this.hours() % 12 || 12
				}

				function ni() {
					return this.hours() || 24
				}

				function si(e, t) {
					n(e, 0, 0, function() {
						return this.localeData().meridiem(this.hours(), this.minutes(), t)
					})
				}

				function ai(e, t) {
					return t._meridiemParse
				}

				function oi(e) {
					return (e + "").toLowerCase().charAt(0) === "p"
				}
				n("H", ["HH", 2], 0, "hour"), n("h", ["hh", 2], 0, ii), n("k", ["kk", 2], 0, ni), n("hmm", 0, 0, function() {
					return "" + ii.apply(this) + a(this.minutes(), 2)
				}), n("hmmss", 0, 0, function() {
					return "" + ii.apply(this) + a(this.minutes(), 2) + a(this.seconds(), 2)
				}), n("Hmm", 0, 0, function() {
					return "" + this.hours() + a(this.minutes(), 2)
				}), n("Hmmss", 0, 0, function() {
					return "" + this.hours() + a(this.minutes(), 2) + a(this.seconds(), 2)
				}), si("a", true), si("A", false), t("hour", "h"), i("hour", 13), y("a", ai), y("A", ai), y("H", b), y("h", b), y("k", b), y("HH", b, s), y("hh", b, s), y("kk", b, s), y("hmm", Ne), y("hmmss", Re), y("Hmm", Ne), y("Hmmss", Re), x(["H", "HH"], k), x(["k", "kk"], function(e, t, i) {
					var n = v(e);
					t[k] = n === 24 ? 0 : n
				}), x(["a", "A"], function(e, t, i) {
					i._isPm = i._locale.isPM(e);
					i._meridiem = e
				}), x(["h", "hh"], function(e, t, i) {
					t[k] = v(e);
					d(i).bigHour = true
				}), x("hmm", function(e, t, i) {
					var n = e.length - 2;
					t[k] = v(e.substr(0, n));
					t[S] = v(e.substr(n));
					d(i).bigHour = true
				}), x("hmmss", function(e, t, i) {
					var n = e.length - 4,
						s = e.length - 2;
					t[k] = v(e.substr(0, n));
					t[S] = v(e.substr(n, 2));
					t[T] = v(e.substr(s));
					d(i).bigHour = true
				}), x("Hmm", function(e, t, i) {
					var n = e.length - 2;
					t[k] = v(e.substr(0, n));
					t[S] = v(e.substr(n))
				}), x("Hmmss", function(e, t, i) {
					var n = e.length - 4,
						s = e.length - 2;
					t[k] = v(e.substr(0, n));
					t[S] = v(e.substr(n, 2));
					t[T] = v(e.substr(s))
				});
				var ri, li = Ee("Hours", true);

				function ui(e, t, i) {
					if (e > 11) return i ? "pm" : "PM";
					else return i ? "am" : "AM"
				}
				var ci = {
						calendar: se,
						longDateFormat: pe,
						invalidDate: ge,
						ordinal: be,
						dayOfMonthOrdinalParse: ye,
						relativeTime: xe,
						months: ot,
						monthsShort: rt,
						week: Ft,
						weekdays: Nt,
						weekdaysMin: jt,
						weekdaysShort: Rt,
						meridiemParse: /[ap]\.?m?\.?/i
					},
					F = {},
					hi = {},
					di;

				function fi(e, t) {
					var i, n = Math.min(e.length, t.length);
					for (i = 0; i < n; i += 1)
						if (e[i] !== t[i]) return i;
					return n
				}

				function pi(e) {
					return e ? e.toLowerCase().replace("_", "-") : e
				}

				function mi(e) {
					var t = 0,
						i, n, s, a;
					while (t < e.length) {
						a = pi(e[t]).split("-");
						i = a.length;
						n = pi(e[t + 1]);
						n = n ? n.split("-") : null;
						while (i > 0) {
							s = vi(a.slice(0, i).join("-"));
							if (s) return s;
							if (n && n.length >= i && fi(a, n) >= i - 1) break;
							i--
						}
						t++
					}
					return di
				}

				function gi(e) {
					return e.match("^[^/\\\\]*$") != null
				}

				function vi(t) {
					var e = null,
						i;
					if (F[t] === undefined && typeof uo !== "undefined" && uo && uo.exports && gi(t)) try {
						e = di._abbr;
						i = co;
						! function e() {
							var t = new Error("Cannot find module 'undefined'");
							t.code = "MODULE_NOT_FOUND";
							throw t
						}();
						bi(e)
					} catch (e) {
						F[t] = null
					}
					return F[t]
				}

				function bi(e, t) {
					var i;
					if (e) {
						if (r(t)) i = xi(e);
						else i = yi(e, t);
						if (i) di = i;
						else if (typeof console !== "undefined" && console.warn) console.warn("Locale " + e + " not found. Did you forget to load it?")
					}
					return di._abbr
				}

				function yi(e, t) {
					if (t !== null) {
						var i, n = ci;
						t.abbr = e;
						if (F[e] != null) {
							ee("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
							n = F[e]._config
						} else if (t.parentLocale != null)
							if (F[t.parentLocale] != null) n = F[t.parentLocale]._config;
							else {
								i = vi(t.parentLocale);
								if (i != null) n = i._config;
								else {
									if (!hi[t.parentLocale]) hi[t.parentLocale] = [];
									hi[t.parentLocale].push({
										name: e,
										config: t
									});
									return null
								}
							} F[e] = new ne(ie(n, t));
						if (hi[e]) hi[e].forEach(function(e) {
							yi(e.name, e.config)
						});
						bi(e);
						return F[e]
					} else {
						delete F[e];
						return null
					}
				}

				function _i(e, t) {
					if (t != null) {
						var i, n, s = ci;
						if (F[e] != null && F[e].parentLocale != null) F[e].set(ie(F[e]._config, t));
						else {
							n = vi(e);
							if (n != null) s = n._config;
							t = ie(s, t);
							if (n == null) t.abbr = e;
							i = new ne(t);
							i.parentLocale = F[e];
							F[e] = i
						}
						bi(e)
					} else if (F[e] != null)
						if (F[e].parentLocale != null) {
							F[e] = F[e].parentLocale;
							if (e === bi()) bi(e)
						} else if (F[e] != null) delete F[e];
					return F[e]
				}

				function xi(e) {
					var t;
					if (e && e._locale && e._locale._abbr) e = e._locale._abbr;
					if (!e) return di;
					if (!o(e)) {
						t = vi(e);
						if (t) return t;
						e = [e]
					}
					return mi(e)
				}

				function wi() {
					return J(F)
				}

				function Di(e) {
					var t, i = e._a;
					if (i && d(e).overflow === -2) {
						t = i[D] < 0 || i[D] > 11 ? D : i[C] < 1 || i[C] > at(i[w], i[D]) ? C : i[k] < 0 || i[k] > 24 || i[k] === 24 && (i[S] !== 0 || i[T] !== 0 || i[tt] !== 0) ? k : i[S] < 0 || i[S] > 59 ? S : i[T] < 0 || i[T] > 59 ? T : i[tt] < 0 || i[tt] > 999 ? tt : -1;
						if (d(e)._overflowDayOfYear && (t < w || t > C)) t = C;
						if (d(e)._overflowWeeks && t === -1) t = it;
						if (d(e)._overflowWeekday && t === -1) t = nt;
						d(e).overflow = t
					}
					return e
				}
				var Ci = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
					ki = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
					Si = /Z|[+-]\d\d(?::?\d\d)?/,
					Ti = [
						["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
						["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
						["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
						["GGGG-[W]WW", /\d{4}-W\d\d/, false],
						["YYYY-DDD", /\d{4}-\d{3}/],
						["YYYY-MM", /\d{4}-\d\d/, false],
						["YYYYYYMMDD", /[+-]\d{10}/],
						["YYYYMMDD", /\d{8}/],
						["GGGG[W]WWE", /\d{4}W\d{3}/],
						["GGGG[W]WW", /\d{4}W\d{2}/, false],
						["YYYYDDD", /\d{7}/],
						["YYYYMM", /\d{6}/, false],
						["YYYY", /\d{4}/, false]
					],
					Ai = [
						["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
						["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
						["HH:mm:ss", /\d\d:\d\d:\d\d/],
						["HH:mm", /\d\d:\d\d/],
						["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
						["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
						["HHmmss", /\d\d\d\d\d\d/],
						["HHmm", /\d\d\d\d/],
						["HH", /\d\d/]
					],
					Ei = /^\/?Date\((-?\d+)/i,
					Fi = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
					Pi = {
						UT: 0,
						GMT: 0,
						EDT: -4 * 60,
						EST: -5 * 60,
						CDT: -5 * 60,
						CST: -6 * 60,
						MDT: -6 * 60,
						MST: -7 * 60,
						PDT: -7 * 60,
						PST: -8 * 60
					};

				function $i(e) {
					var t, i, n = e._i,
						s = Ci.exec(n) || ki.exec(n),
						a, o, r, l, u = Ti.length,
						c = Ai.length;
					if (s) {
						d(e).iso = true;
						for (t = 0, i = u; t < i; t++)
							if (Ti[t][1].exec(s[1])) {
								o = Ti[t][0];
								a = Ti[t][2] !== false;
								break
							} if (o == null) {
							e._isValid = false;
							return
						}
						if (s[3]) {
							for (t = 0, i = c; t < i; t++)
								if (Ai[t][1].exec(s[3])) {
									r = (s[2] || " ") + Ai[t][0];
									break
								} if (r == null) {
								e._isValid = false;
								return
							}
						}
						if (!a && r != null) {
							e._isValid = false;
							return
						}
						if (s[4])
							if (Si.exec(s[4])) l = "Z";
							else {
								e._isValid = false;
								return
							} e._f = o + (r || "") + (l || "");
						Wi(e)
					} else e._isValid = false
				}

				function Mi(e, t, i, n, s, a) {
					var o = [Ii(e), rt.indexOf(t), parseInt(i, 10), parseInt(n, 10), parseInt(s, 10)];
					if (a) o.push(parseInt(a, 10));
					return o
				}

				function Ii(e) {
					var t = parseInt(e, 10);
					if (t <= 49) return 2e3 + t;
					else if (t <= 999) return 1900 + t;
					return t
				}

				function Oi(e) {
					return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
				}

				function Hi(e, t, i) {
					if (e) {
						var n = Rt.indexOf(e),
							s = new Date(t[0], t[1], t[2]).getDay();
						if (n !== s) {
							d(i).weekdayMismatch = true;
							i._isValid = false;
							return false
						}
					}
					return true
				}

				function Li(e, t, i) {
					if (e) return Pi[e];
					else if (t) return 0;
					else {
						var n = parseInt(i, 10),
							s = n % 100,
							a = (n - s) / 100;
						return a * 60 + s
					}
				}

				function Ni(e) {
					var t = Fi.exec(Oi(e._i)),
						i;
					if (t) {
						i = Mi(t[4], t[3], t[2], t[5], t[6], t[7]);
						if (!Hi(t[1], i, e)) return;
						e._a = i;
						e._tzm = Li(t[8], t[9], t[10]);
						e._d = kt.apply(null, e._a);
						e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
						d(e).rfc2822 = true
					} else e._isValid = false
				}

				function Ri(e) {
					var t = Ei.exec(e._i);
					if (t !== null) {
						e._d = new Date(+t[1]);
						return
					}
					$i(e);
					if (e._isValid === false) delete e._isValid;
					else return;
					Ni(e);
					if (e._isValid === false) delete e._isValid;
					else return;
					if (e._strict) e._isValid = false;
					else h.createFromInputFallback(e)
				}

				function ji(e, t, i) {
					if (e != null) return e;
					if (t != null) return t;
					return i
				}

				function Yi(e) {
					var t = new Date(h.now());
					if (e._useUTC) return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()];
					return [t.getFullYear(), t.getMonth(), t.getDate()]
				}

				function zi(e) {
					var t, i, n = [],
						s, a, o;
					if (e._d) return;
					s = Yi(e);
					if (e._w && e._a[C] == null && e._a[D] == null) Bi(e);
					if (e._dayOfYear != null) {
						o = ji(e._a[w], s[w]);
						if (e._dayOfYear > xt(o) || e._dayOfYear === 0) d(e)._overflowDayOfYear = true;
						i = kt(o, 0, e._dayOfYear);
						e._a[D] = i.getUTCMonth();
						e._a[C] = i.getUTCDate()
					}
					for (t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = n[t] = s[t];
					for (; t < 7; t++) e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
					if (e._a[k] === 24 && e._a[S] === 0 && e._a[T] === 0 && e._a[tt] === 0) {
						e._nextDay = true;
						e._a[k] = 0
					}
					e._d = (e._useUTC ? kt : Ct).apply(null, n);
					a = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
					if (e._tzm != null) e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
					if (e._nextDay) e._a[k] = 24;
					if (e._w && typeof e._w.d !== "undefined" && e._w.d !== a) d(e).weekdayMismatch = true
				}

				function Bi(e) {
					var t, i, n, s, a, o, r, l, u;
					t = e._w;
					if (t.GG != null || t.W != null || t.E != null) {
						a = 1;
						o = 4;
						i = ji(t.GG, e._a[w], At(P(), 1, 4).year);
						n = ji(t.W, 1);
						s = ji(t.E, 1);
						if (s < 1 || s > 7) l = true
					} else {
						a = e._locale._week.dow;
						o = e._locale._week.doy;
						u = At(P(), a, o);
						i = ji(t.gg, e._a[w], u.year);
						n = ji(t.w, u.week);
						if (t.d != null) {
							s = t.d;
							if (s < 0 || s > 6) l = true
						} else if (t.e != null) {
							s = t.e + a;
							if (t.e < 0 || t.e > 6) l = true
						} else s = a
					}
					if (n < 1 || n > E(i, a, o)) d(e)._overflowWeeks = true;
					else if (l != null) d(e)._overflowWeekday = true;
					else {
						r = Tt(i, n, s, a, o);
						e._a[w] = r.year;
						e._dayOfYear = r.dayOfYear
					}
				}

				function Wi(e) {
					if (e._f === h.ISO_8601) {
						$i(e);
						return
					}
					if (e._f === h.RFC_2822) {
						Ni(e);
						return
					}
					e._a = [];
					d(e).empty = true;
					var t = "" + e._i,
						i, n, s, a, o, r = t.length,
						l = 0,
						u, c;
					s = fe(e._f, e._locale).match(oe) || [];
					c = s.length;
					for (i = 0; i < c; i++) {
						a = s[i];
						n = (t.match(Ke(a, e)) || [])[0];
						if (n) {
							o = t.substr(0, t.indexOf(n));
							if (o.length > 0) d(e).unusedInput.push(o);
							t = t.slice(t.indexOf(n) + n.length);
							l += n.length
						}
						if (ue[a]) {
							if (n) d(e).empty = false;
							else d(e).unusedTokens.push(a);
							et(a, n, e)
						} else if (e._strict && !n) d(e).unusedTokens.push(a)
					}
					d(e).charsLeftOver = r - l;
					if (t.length > 0) d(e).unusedInput.push(t);
					if (e._a[k] <= 12 && d(e).bigHour === true && e._a[k] > 0) d(e).bigHour = undefined;
					d(e).parsedDateParts = e._a.slice(0);
					d(e).meridiem = e._meridiem;
					e._a[k] = qi(e._locale, e._a[k], e._meridiem);
					u = d(e).era;
					if (u !== null) e._a[w] = e._locale.erasConvertYear(u, e._a[w]);
					zi(e);
					Di(e)
				}

				function qi(e, t, i) {
					var n;
					if (i == null) return t;
					if (e.meridiemHour != null) return e.meridiemHour(t, i);
					else if (e.isPM != null) {
						n = e.isPM(i);
						if (n && t < 12) t += 12;
						if (!n && t === 12) t = 0;
						return t
					} else return t
				}

				function Ui(e) {
					var t, i, n, s, a, o, r = false,
						l = e._f.length;
					if (l === 0) {
						d(e).invalidFormat = true;
						e._d = new Date(NaN);
						return
					}
					for (s = 0; s < l; s++) {
						a = 0;
						o = false;
						t = X({}, e);
						if (e._useUTC != null) t._useUTC = e._useUTC;
						t._f = e._f[s];
						Wi(t);
						if (q(t)) o = true;
						a += d(t).charsLeftOver;
						a += d(t).unusedTokens.length * 10;
						d(t).score = a;
						if (!r) {
							if (n == null || a < n || o) {
								n = a;
								i = t;
								if (o) r = true
							}
						} else if (a < n) {
							n = a;
							i = t
						}
					}
					B(e, i || t)
				}

				function Vi(e) {
					if (e._d) return;
					var t = ke(e._i),
						i = t.day === undefined ? t.date : t.day;
					e._a = z([t.year, t.month, i, t.hour, t.minute, t.second, t.millisecond], function(e) {
						return e && parseInt(e, 10)
					});
					zi(e)
				}

				function Gi(e) {
					var t = new K(Di(Xi(e)));
					if (t._nextDay) {
						t.add(1, "d");
						t._nextDay = undefined
					}
					return t
				}

				function Xi(e) {
					var t = e._i,
						i = e._f;
					e._locale = e._locale || xi(e._l);
					if (t === null || i === undefined && t === "") return U({
						nullInput: true
					});
					if (typeof t === "string") e._i = t = e._locale.preparse(t);
					if (f(t)) return new K(Di(t));
					else if (Y(t)) e._d = t;
					else if (o(i)) Ui(e);
					else if (i) Wi(e);
					else Ki(e);
					if (!q(e)) e._d = null;
					return e
				}

				function Ki(e) {
					var t = e._i;
					if (r(t)) e._d = new Date(h.now());
					else if (Y(t)) e._d = new Date(t.valueOf());
					else if (typeof t === "string") Ri(e);
					else if (o(t)) {
						e._a = z(t.slice(0), function(e) {
							return parseInt(e, 10)
						});
						zi(e)
					} else if (R(t)) Vi(e);
					else if (u(t)) e._d = new Date(t);
					else h.createFromInputFallback(e)
				}

				function Zi(e, t, i, n, s) {
					var a = {};
					if (t === true || t === false) {
						n = t;
						t = undefined
					}
					if (i === true || i === false) {
						n = i;
						i = undefined
					}
					if (R(e) && j(e) || o(e) && e.length === 0) e = undefined;
					a._isAMomentObject = true;
					a._useUTC = a._isUTC = s;
					a._l = i;
					a._i = e;
					a._f = t;
					a._strict = n;
					return Gi(a)
				}

				function P(e, t, i, n) {
					return Zi(e, t, i, n, false)
				}
				h.createFromInputFallback = e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " + "discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
					e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
				}), h.ISO_8601 = function() {}, h.RFC_2822 = function() {};
				var Qi = e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
						var e = P.apply(null, arguments);
						if (this.isValid() && e.isValid()) return e < this ? this : e;
						else return U()
					}),
					Ji = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
						var e = P.apply(null, arguments);
						if (this.isValid() && e.isValid()) return e > this ? this : e;
						else return U()
					});

				function en(e, t) {
					var i, n;
					if (t.length === 1 && o(t[0])) t = t[0];
					if (!t.length) return P();
					i = t[0];
					for (n = 1; n < t.length; ++n)
						if (!t[n].isValid() || t[n][e](i)) i = t[n];
					return i
				}

				function tn() {
					var e = [].slice.call(arguments, 0);
					return en("isBefore", e)
				}

				function nn() {
					var e = [].slice.call(arguments, 0);
					return en("isAfter", e)
				}
				var sn = function() {
						return Date.now ? Date.now() : +new Date
					},
					an = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

				function on(e) {
					var t, i = false,
						n, s = an.length;
					for (t in e)
						if (l(e, t) && !(A.call(an, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return false;
					for (n = 0; n < s; ++n)
						if (e[an[n]]) {
							if (i) return false;
							if (parseFloat(e[an[n]]) !== v(e[an[n]])) i = true
						} return true
				}

				function rn() {
					return this._isValid
				}

				function ln() {
					return $(NaN)
				}

				function un(e) {
					var t = ke(e),
						i = t.year || 0,
						n = t.quarter || 0,
						s = t.month || 0,
						a = t.week || t.isoWeek || 0,
						o = t.day || 0,
						r = t.hour || 0,
						l = t.minute || 0,
						u = t.second || 0,
						c = t.millisecond || 0;
					this._isValid = on(t);
					this._milliseconds = +c + u * 1e3 + l * 6e4 + r * 1e3 * 60 * 60;
					this._days = +o + a * 7;
					this._months = +s + n * 3 + i * 12;
					this._data = {};
					this._locale = xi();
					this._bubble()
				}

				function cn(e) {
					return e instanceof un
				}

				function hn(e) {
					if (e < 0) return Math.round(-1 * e) * -1;
					else return Math.round(e)
				}

				function dn(e, t, i) {
					var n = Math.min(e.length, t.length),
						s = Math.abs(e.length - t.length),
						a = 0,
						o;
					for (o = 0; o < n; o++)
						if (i && e[o] !== t[o] || !i && v(e[o]) !== v(t[o])) a++;
					return a + s
				}

				function fn(e, i) {
					n(e, 0, 0, function() {
						var e = this.utcOffset(),
							t = "+";
						if (e < 0) {
							e = -e;
							t = "-"
						}
						return t + a(~~(e / 60), 2) + i + a(~~e % 60, 2)
					})
				}
				fn("Z", ":"), fn("ZZ", ""), y("Z", Ue), y("ZZ", Ue), x(["Z", "ZZ"], function(e, t, i) {
					i._useUTC = true;
					i._tzm = mn(Ue, e)
				});
				var pn = /([\+\-]|\d\d)/gi;

				function mn(e, t) {
					var i = (t || "").match(e),
						n, s, a;
					if (i === null) return null;
					n = i[i.length - 1] || [];
					s = (n + "").match(pn) || ["-", 0, 0];
					a = +(s[1] * 60) + v(s[2]);
					return a === 0 ? 0 : s[0] === "+" ? a : -a
				}

				function gn(e, t) {
					var i, n;
					if (t._isUTC) {
						i = t.clone();
						n = (f(e) || Y(e) ? e.valueOf() : P(e).valueOf()) - i.valueOf();
						i._d.setTime(i._d.valueOf() + n);
						h.updateOffset(i, false);
						return i
					} else return P(e).local()
				}

				function vn(e) {
					return -Math.round(e._d.getTimezoneOffset())
				}

				function bn(e, t, i) {
					var n = this._offset || 0,
						s;
					if (!this.isValid()) return e != null ? this : NaN;
					if (e != null) {
						if (typeof e === "string") {
							e = mn(Ue, e);
							if (e === null) return this
						} else if (Math.abs(e) < 16 && !i) e = e * 60;
						if (!this._isUTC && t) s = vn(this);
						this._offset = e;
						this._isUTC = true;
						if (s != null) this.add(s, "m");
						if (n !== e)
							if (!t || this._changeInProgress) On(this, $(e - n, "m"), 1, false);
							else if (!this._changeInProgress) {
							this._changeInProgress = true;
							h.updateOffset(this, true);
							this._changeInProgress = null
						}
						return this
					} else return this._isUTC ? n : vn(this)
				}

				function yn(e, t) {
					if (e != null) {
						if (typeof e !== "string") e = -e;
						this.utcOffset(e, t);
						return this
					} else return -this.utcOffset()
				}

				function _n(e) {
					return this.utcOffset(0, e)
				}

				function xn(e) {
					if (this._isUTC) {
						this.utcOffset(0, e);
						this._isUTC = false;
						if (e) this.subtract(vn(this), "m")
					}
					return this
				}

				function wn() {
					if (this._tzm != null) this.utcOffset(this._tzm, false, true);
					else if (typeof this._i === "string") {
						var e = mn(qe, this._i);
						if (e != null) this.utcOffset(e);
						else this.utcOffset(0, true)
					}
					return this
				}

				function Dn(e) {
					if (!this.isValid()) return false;
					e = e ? P(e).utcOffset() : 0;
					return (this.utcOffset() - e) % 60 === 0
				}

				function Cn() {
					return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
				}

				function kn() {
					if (!r(this._isDSTShifted)) return this._isDSTShifted;
					var e = {},
						t;
					X(e, this);
					e = Xi(e);
					if (e._a) {
						t = e._isUTC ? c(e._a) : P(e._a);
						this._isDSTShifted = this.isValid() && dn(e._a, t.toArray()) > 0
					} else this._isDSTShifted = false;
					return this._isDSTShifted
				}

				function Sn() {
					return this.isValid() ? !this._isUTC : false
				}

				function Tn() {
					return this.isValid() ? this._isUTC : false
				}

				function An() {
					return this.isValid() ? this._isUTC && this._offset === 0 : false
				}
				h.updateOffset = function() {};
				var En = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
					Fn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

				function $(e, t) {
					var i = e,
						n = null,
						s, a, o;
					if (cn(e)) i = {
						ms: e._milliseconds,
						d: e._days,
						M: e._months
					};
					else if (u(e) || !isNaN(+e)) {
						i = {};
						if (t) i[t] = +e;
						else i.milliseconds = +e
					} else if (n = En.exec(e)) {
						s = n[1] === "-" ? -1 : 1;
						i = {
							y: 0,
							d: v(n[C]) * s,
							h: v(n[k]) * s,
							m: v(n[S]) * s,
							s: v(n[T]) * s,
							ms: v(hn(n[tt] * 1e3)) * s
						}
					} else if (n = Fn.exec(e)) {
						s = n[1] === "-" ? -1 : 1;
						i = {
							y: Pn(n[2], s),
							M: Pn(n[3], s),
							w: Pn(n[4], s),
							d: Pn(n[5], s),
							h: Pn(n[6], s),
							m: Pn(n[7], s),
							s: Pn(n[8], s)
						}
					} else if (i == null) i = {};
					else if (typeof i === "object" && ("from" in i || "to" in i)) {
						o = Mn(P(i.from), P(i.to));
						i = {};
						i.ms = o.milliseconds;
						i.M = o.months
					}
					a = new un(i);
					if (cn(e) && l(e, "_locale")) a._locale = e._locale;
					if (cn(e) && l(e, "_isValid")) a._isValid = e._isValid;
					return a
				}

				function Pn(e, t) {
					var i = e && parseFloat(e.replace(",", "."));
					return (isNaN(i) ? 0 : i) * t
				}

				function $n(e, t) {
					var i = {};
					i.months = t.month() - e.month() + (t.year() - e.year()) * 12;
					if (e.clone().add(i.months, "M").isAfter(t)) --i.months;
					i.milliseconds = +t - +e.clone().add(i.months, "M");
					return i
				}

				function Mn(e, t) {
					var i;
					if (!(e.isValid() && t.isValid())) return {
						milliseconds: 0,
						months: 0
					};
					t = gn(t, e);
					if (e.isBefore(t)) i = $n(e, t);
					else {
						i = $n(t, e);
						i.milliseconds = -i.milliseconds;
						i.months = -i.months
					}
					return i
				}

				function In(s, a) {
					return function(e, t) {
						var i, n;
						if (t !== null && !isNaN(+t)) {
							ee(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
							n = e;
							e = t;
							t = n
						}
						i = $(e, t);
						On(this, i, s);
						return this
					}
				}

				function On(e, t, i, n) {
					var s = t._milliseconds,
						a = hn(t._days),
						o = hn(t._months);
					if (!e.isValid()) return;
					n = n == null ? true : n;
					if (o) mt(e, Fe(e, "Month") + o * i);
					if (a) Pe(e, "Date", Fe(e, "Date") + a * i);
					if (s) e._d.setTime(e._d.valueOf() + s * i);
					if (n) h.updateOffset(e, a || o)
				}
				$.fn = un.prototype, $.invalid = ln;
				var Hn = In(1, "add"),
					Ln = In(-1, "subtract");

				function Nn(e) {
					return typeof e === "string" || e instanceof String
				}

				function Rn(e) {
					return f(e) || Y(e) || Nn(e) || u(e) || Yn(e) || jn(e) || e === null || e === undefined
				}

				function jn(e) {
					var t = R(e) && !j(e),
						i = false,
						n = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
						s, a, o = n.length;
					for (s = 0; s < o; s += 1) {
						a = n[s];
						i = i || l(e, a)
					}
					return t && i
				}

				function Yn(t) {
					var e = o(t),
						i = false;
					if (e) i = t.filter(function(e) {
						return !u(e) && Nn(t)
					}).length === 0;
					return e && i
				}

				function zn(e) {
					var t = R(e) && !j(e),
						i = false,
						n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
						s, a;
					for (s = 0; s < n.length; s += 1) {
						a = n[s];
						i = i || l(e, a)
					}
					return t && i
				}

				function Bn(e, t) {
					var i = e.diff(t, "days", true);
					return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
				}

				function Wn(e, t) {
					if (arguments.length === 1)
						if (!arguments[0]) {
							e = undefined;
							t = undefined
						} else if (Rn(arguments[0])) {
						e = arguments[0];
						t = undefined
					} else if (zn(arguments[0])) {
						t = arguments[0];
						e = undefined
					}
					var i = e || P(),
						n = gn(i, this).startOf("day"),
						s = h.calendarFormat(this, n) || "sameElse",
						a = t && (p(t[s]) ? t[s].call(this, i) : t[s]);
					return this.format(a || this.localeData().calendar(s, this, P(i)))
				}

				function qn() {
					return new K(this)
				}

				function Un(e, t) {
					var i = f(e) ? e : P(e);
					if (!(this.isValid() && i.isValid())) return false;
					t = m(t) || "millisecond";
					if (t === "millisecond") return this.valueOf() > i.valueOf();
					else return i.valueOf() < this.clone().startOf(t).valueOf()
				}

				function Vn(e, t) {
					var i = f(e) ? e : P(e);
					if (!(this.isValid() && i.isValid())) return false;
					t = m(t) || "millisecond";
					if (t === "millisecond") return this.valueOf() < i.valueOf();
					else return this.clone().endOf(t).valueOf() < i.valueOf()
				}

				function Gn(e, t, i, n) {
					var s = f(e) ? e : P(e),
						a = f(t) ? t : P(t);
					if (!(this.isValid() && s.isValid() && a.isValid())) return false;
					n = n || "()";
					return (n[0] === "(" ? this.isAfter(s, i) : !this.isBefore(s, i)) && (n[1] === ")" ? this.isBefore(a, i) : !this.isAfter(a, i))
				}

				function Xn(e, t) {
					var i = f(e) ? e : P(e),
						n;
					if (!(this.isValid() && i.isValid())) return false;
					t = m(t) || "millisecond";
					if (t === "millisecond") return this.valueOf() === i.valueOf();
					else {
						n = i.valueOf();
						return this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()
					}
				}

				function Kn(e, t) {
					return this.isSame(e, t) || this.isAfter(e, t)
				}

				function Zn(e, t) {
					return this.isSame(e, t) || this.isBefore(e, t)
				}

				function Qn(e, t, i) {
					var n, s, a;
					if (!this.isValid()) return NaN;
					n = gn(e, this);
					if (!n.isValid()) return NaN;
					s = (n.utcOffset() - this.utcOffset()) * 6e4;
					t = m(t);
					switch (t) {
						case "year":
							a = Jn(this, n) / 12;
							break;
						case "month":
							a = Jn(this, n);
							break;
						case "quarter":
							a = Jn(this, n) / 3;
							break;
						case "second":
							a = (this - n) / 1e3;
							break;
						case "minute":
							a = (this - n) / 6e4;
							break;
						case "hour":
							a = (this - n) / 36e5;
							break;
						case "day":
							a = (this - n - s) / 864e5;
							break;
						case "week":
							a = (this - n - s) / 6048e5;
							break;
						default:
							a = this - n
					}
					return i ? a : g(a)
				}

				function Jn(e, t) {
					if (e.date() < t.date()) return -Jn(t, e);
					var i = (t.year() - e.year()) * 12 + (t.month() - e.month()),
						n = e.clone().add(i, "months"),
						s, a;
					if (t - n < 0) {
						s = e.clone().add(i - 1, "months");
						a = (t - n) / (n - s)
					} else {
						s = e.clone().add(i + 1, "months");
						a = (t - n) / (s - n)
					}
					return -(i + a) || 0
				}

				function es() {
					return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
				}

				function ts(e) {
					if (!this.isValid()) return null;
					var t = e !== true,
						i = t ? this.clone().utc() : this;
					if (i.year() < 0 || i.year() > 9999) return de(i, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
					if (p(Date.prototype.toISOString))
						if (t) return this.toDate().toISOString();
						else return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", de(i, "Z"));
					return de(i, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
				}

				function is() {
					if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
					var e = "moment",
						t = "",
						i, n, s, a;
					if (!this.isLocal()) {
						e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
						t = "Z"
					}
					i = "[" + e + '("]';
					n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
					s = "-MM-DD[T]HH:mm:ss.SSS";
					a = t + '[")]';
					return this.format(i + n + s + a)
				}

				function ns(e) {
					if (!e) e = this.isUtc() ? h.defaultFormatUtc : h.defaultFormat;
					var t = de(this, e);
					return this.localeData().postformat(t)
				}

				function ss(e, t) {
					if (this.isValid() && (f(e) && e.isValid() || P(e).isValid())) return $({
						to: this,
						from: e
					}).locale(this.locale()).humanize(!t);
					else return this.localeData().invalidDate()
				}

				function as(e) {
					return this.from(P(), e)
				}

				function os(e, t) {
					if (this.isValid() && (f(e) && e.isValid() || P(e).isValid())) return $({
						from: this,
						to: e
					}).locale(this.locale()).humanize(!t);
					else return this.localeData().invalidDate()
				}

				function rs(e) {
					return this.to(P(), e)
				}

				function ls(e) {
					var t;
					if (e === undefined) return this._locale._abbr;
					else {
						t = xi(e);
						if (t != null) this._locale = t;
						return this
					}
				}
				h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
				var us = e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
					if (e === undefined) return this.localeData();
					else return this.locale(e)
				});

				function cs() {
					return this._locale
				}
				var hs = 1e3,
					ds = 60 * hs,
					fs = 60 * ds,
					ps = (365 * 400 + 97) * 24 * fs;

				function ms(e, t) {
					return (e % t + t) % t
				}

				function gs(e, t, i) {
					if (e < 100 && e >= 0) return new Date(e + 400, t, i) - ps;
					else return new Date(e, t, i).valueOf()
				}

				function vs(e, t, i) {
					if (e < 100 && e >= 0) return Date.UTC(e + 400, t, i) - ps;
					else return Date.UTC(e, t, i)
				}

				function bs(e) {
					var t, i;
					e = m(e);
					if (e === undefined || e === "millisecond" || !this.isValid()) return this;
					i = this._isUTC ? vs : gs;
					switch (e) {
						case "year":
							t = i(this.year(), 0, 1);
							break;
						case "quarter":
							t = i(this.year(), this.month() - this.month() % 3, 1);
							break;
						case "month":
							t = i(this.year(), this.month(), 1);
							break;
						case "week":
							t = i(this.year(), this.month(), this.date() - this.weekday());
							break;
						case "isoWeek":
							t = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
							break;
						case "day":
						case "date":
							t = i(this.year(), this.month(), this.date());
							break;
						case "hour":
							t = this._d.valueOf();
							t -= ms(t + (this._isUTC ? 0 : this.utcOffset() * ds), fs);
							break;
						case "minute":
							t = this._d.valueOf();
							t -= ms(t, ds);
							break;
						case "second":
							t = this._d.valueOf();
							t -= ms(t, hs);
							break
					}
					this._d.setTime(t);
					h.updateOffset(this, true);
					return this
				}

				function ys(e) {
					var t, i;
					e = m(e);
					if (e === undefined || e === "millisecond" || !this.isValid()) return this;
					i = this._isUTC ? vs : gs;
					switch (e) {
						case "year":
							t = i(this.year() + 1, 0, 1) - 1;
							break;
						case "quarter":
							t = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
							break;
						case "month":
							t = i(this.year(), this.month() + 1, 1) - 1;
							break;
						case "week":
							t = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
							break;
						case "isoWeek":
							t = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
							break;
						case "day":
						case "date":
							t = i(this.year(), this.month(), this.date() + 1) - 1;
							break;
						case "hour":
							t = this._d.valueOf();
							t += fs - ms(t + (this._isUTC ? 0 : this.utcOffset() * ds), fs) - 1;
							break;
						case "minute":
							t = this._d.valueOf();
							t += ds - ms(t, ds) - 1;
							break;
						case "second":
							t = this._d.valueOf();
							t += hs - ms(t, hs) - 1;
							break
					}
					this._d.setTime(t);
					h.updateOffset(this, true);
					return this
				}

				function _s() {
					return this._d.valueOf() - (this._offset || 0) * 6e4
				}

				function xs() {
					return Math.floor(this.valueOf() / 1e3)
				}

				function ws() {
					return new Date(this.valueOf())
				}

				function Ds() {
					var e = this;
					return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
				}

				function Cs() {
					var e = this;
					return {
						years: e.year(),
						months: e.month(),
						date: e.date(),
						hours: e.hours(),
						minutes: e.minutes(),
						seconds: e.seconds(),
						milliseconds: e.milliseconds()
					}
				}

				function ks() {
					return this.isValid() ? this.toISOString() : null
				}

				function Ss() {
					return q(this)
				}

				function Ts() {
					return B({}, d(this))
				}

				function As() {
					return d(this).overflow
				}

				function Es() {
					return {
						input: this._i,
						format: this._f,
						locale: this._locale,
						isUTC: this._isUTC,
						strict: this._strict
					}
				}

				function Fs(e, t) {
					var i, n, s, a = this._eras || xi("en")._eras;
					for (i = 0, n = a.length; i < n; ++i) {
						switch (typeof a[i].since) {
							case "string":
								s = h(a[i].since).startOf("day");
								a[i].since = s.valueOf();
								break
						}
						switch (typeof a[i].until) {
							case "undefined":
								a[i].until = +Infinity;
								break;
							case "string":
								s = h(a[i].until).startOf("day").valueOf();
								a[i].until = s.valueOf();
								break
						}
					}
					return a
				}

				function Ps(e, t, i) {
					var n, s, a = this.eras(),
						o, r, l;
					e = e.toUpperCase();
					for (n = 0, s = a.length; n < s; ++n) {
						o = a[n].name.toUpperCase();
						r = a[n].abbr.toUpperCase();
						l = a[n].narrow.toUpperCase();
						if (i) switch (t) {
							case "N":
							case "NN":
							case "NNN":
								if (r === e) return a[n];
								break;
							case "NNNN":
								if (o === e) return a[n];
								break;
							case "NNNNN":
								if (l === e) return a[n];
								break
						} else if ([o, r, l].indexOf(e) >= 0) return a[n]
					}
				}

				function $s(e, t) {
					var i = e.since <= e.until ? +1 : -1;
					if (t === undefined) return h(e.since).year();
					else return h(e.since).year() + (t - e.offset) * i
				}

				function Ms() {
					var e, t, i, n = this.localeData().eras();
					for (e = 0, t = n.length; e < t; ++e) {
						i = this.clone().startOf("day").valueOf();
						if (n[e].since <= i && i <= n[e].until) return n[e].name;
						if (n[e].until <= i && i <= n[e].since) return n[e].name
					}
					return ""
				}

				function Is() {
					var e, t, i, n = this.localeData().eras();
					for (e = 0, t = n.length; e < t; ++e) {
						i = this.clone().startOf("day").valueOf();
						if (n[e].since <= i && i <= n[e].until) return n[e].narrow;
						if (n[e].until <= i && i <= n[e].since) return n[e].narrow
					}
					return ""
				}

				function Os() {
					var e, t, i, n = this.localeData().eras();
					for (e = 0, t = n.length; e < t; ++e) {
						i = this.clone().startOf("day").valueOf();
						if (n[e].since <= i && i <= n[e].until) return n[e].abbr;
						if (n[e].until <= i && i <= n[e].since) return n[e].abbr
					}
					return ""
				}

				function Hs() {
					var e, t, i, n, s = this.localeData().eras();
					for (e = 0, t = s.length; e < t; ++e) {
						i = s[e].since <= s[e].until ? +1 : -1;
						n = this.clone().startOf("day").valueOf();
						if (s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since) return (this.year() - h(s[e].since).year()) * i + s[e].offset
					}
					return this.year()
				}

				function Ls(e) {
					if (!l(this, "_erasNameRegex")) Ws.call(this);
					return e ? this._erasNameRegex : this._erasRegex
				}

				function Ns(e) {
					if (!l(this, "_erasAbbrRegex")) Ws.call(this);
					return e ? this._erasAbbrRegex : this._erasRegex
				}

				function Rs(e) {
					if (!l(this, "_erasNarrowRegex")) Ws.call(this);
					return e ? this._erasNarrowRegex : this._erasRegex
				}

				function js(e, t) {
					return t.erasAbbrRegex(e)
				}

				function Ys(e, t) {
					return t.erasNameRegex(e)
				}

				function zs(e, t) {
					return t.erasNarrowRegex(e)
				}

				function Bs(e, t) {
					return t._eraYearOrdinalRegex || Be
				}

				function Ws() {
					var e = [],
						t = [],
						i = [],
						n = [],
						s, a, o = this.eras();
					for (s = 0, a = o.length; s < a; ++s) {
						t.push(_(o[s].name));
						e.push(_(o[s].abbr));
						i.push(_(o[s].narrow));
						n.push(_(o[s].name));
						n.push(_(o[s].abbr));
						n.push(_(o[s].narrow))
					}
					this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i");
					this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i");
					this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i");
					this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")", "i")
				}

				function qs(e, t) {
					n(0, [e, e.length], 0, t)
				}

				function Us(e) {
					return Qs.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
				}

				function Vs(e) {
					return Qs.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
				}

				function Gs() {
					return E(this.year(), 1, 4)
				}

				function Xs() {
					return E(this.isoWeekYear(), 1, 4)
				}

				function Ks() {
					var e = this.localeData()._week;
					return E(this.year(), e.dow, e.doy)
				}

				function Zs() {
					var e = this.localeData()._week;
					return E(this.weekYear(), e.dow, e.doy)
				}

				function Qs(e, t, i, n, s) {
					var a;
					if (e == null) return At(this, n, s).year;
					else {
						a = E(e, n, s);
						if (t > a) t = a;
						return Js.call(this, e, t, i, n, s)
					}
				}

				function Js(e, t, i, n, s) {
					var a = Tt(e, t, i, n, s),
						o = kt(a.year, 0, a.dayOfYear);
					this.year(o.getUTCFullYear());
					this.month(o.getUTCMonth());
					this.date(o.getUTCDate());
					return this
				}

				function ea(e) {
					return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
				}
				n("N", 0, 0, "eraAbbr"), n("NN", 0, 0, "eraAbbr"), n("NNN", 0, 0, "eraAbbr"), n("NNNN", 0, 0, "eraName"), n("NNNNN", 0, 0, "eraNarrow"), n("y", ["y", 1], "yo", "eraYear"), n("y", ["yy", 2], 0, "eraYear"), n("y", ["yyy", 3], 0, "eraYear"), n("y", ["yyyy", 4], 0, "eraYear"), y("N", js), y("NN", js), y("NNN", js), y("NNNN", Ys), y("NNNNN", zs), x(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, i, n) {
					var s = i._locale.erasParse(e, n, i._strict);
					if (s) d(i).era = s;
					else d(i).invalidEra = e
				}), y("y", Be), y("yy", Be), y("yyy", Be), y("yyyy", Be), y("yo", Bs), x(["y", "yy", "yyy", "yyyy"], w), x(["yo"], function(e, t, i, n) {
					var s;
					if (i._locale._eraYearOrdinalRegex) s = e.match(i._locale._eraYearOrdinalRegex);
					if (i._locale.eraYearOrdinalParse) t[w] = i._locale.eraYearOrdinalParse(e, s);
					else t[w] = parseInt(e, 10)
				}), n(0, ["gg", 2], 0, function() {
					return this.weekYear() % 100
				}), n(0, ["GG", 2], 0, function() {
					return this.isoWeekYear() % 100
				}), qs("gggg", "weekYear"), qs("ggggg", "weekYear"), qs("GGGG", "isoWeekYear"), qs("GGGGG", "isoWeekYear"), t("weekYear", "gg"), t("isoWeekYear", "GG"), i("weekYear", 1), i("isoWeekYear", 1), y("G", We), y("g", We), y("GG", b, s), y("gg", b, s), y("GGGG", Ye, He), y("gggg", Ye, He), y("GGGGG", ze, Le), y("ggggg", ze, Le), Je(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, i, n) {
					t[n.substr(0, 2)] = v(e)
				}), Je(["gg", "GG"], function(e, t, i, n) {
					t[n] = h.parseTwoDigitYear(e)
				}), n("Q", 0, "Qo", "quarter"), t("quarter", "Q"), i("quarter", 7), y("Q", Ie), x("Q", function(e, t) {
					t[D] = (v(e) - 1) * 3
				}), n("D", ["DD", 2], "Do", "date"), t("date", "D"), i("date", 9), y("D", b), y("DD", b, s), y("Do", function(e, t) {
					return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
				}), x(["D", "DD"], C), x("Do", function(e, t) {
					t[C] = v(e.match(b)[0])
				});
				var ta = Ee("Date", true);

				function ia(e) {
					var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
					return e == null ? t : this.add(e - t, "d")
				}
				n("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), t("dayOfYear", "DDD"), i("dayOfYear", 4), y("DDD", je), y("DDDD", Oe), x(["DDD", "DDDD"], function(e, t, i) {
					i._dayOfYear = v(e)
				}), n("m", ["mm", 2], 0, "minute"), t("minute", "m"), i("minute", 14), y("m", b), y("mm", b, s), x(["m", "mm"], S);
				var na = Ee("Minutes", false),
					sa = (n("s", ["ss", 2], 0, "second"), t("second", "s"), i("second", 15), y("s", b), y("ss", b, s), x(["s", "ss"], T), Ee("Seconds", false)),
					aa, oa;
				for (n("S", 0, 0, function() {
						return ~~(this.millisecond() / 100)
					}), n(0, ["SS", 2], 0, function() {
						return ~~(this.millisecond() / 10)
					}), n(0, ["SSS", 3], 0, "millisecond"), n(0, ["SSSS", 4], 0, function() {
						return this.millisecond() * 10
					}), n(0, ["SSSSS", 5], 0, function() {
						return this.millisecond() * 100
					}), n(0, ["SSSSSS", 6], 0, function() {
						return this.millisecond() * 1e3
					}), n(0, ["SSSSSSS", 7], 0, function() {
						return this.millisecond() * 1e4
					}), n(0, ["SSSSSSSS", 8], 0, function() {
						return this.millisecond() * 1e5
					}), n(0, ["SSSSSSSSS", 9], 0, function() {
						return this.millisecond() * 1e6
					}), t("millisecond", "ms"), i("millisecond", 16), y("S", je, Ie), y("SS", je, s), y("SSS", je, Oe), aa = "SSSS"; aa.length <= 9; aa += "S") y(aa, Be);

				function ra(e, t) {
					t[tt] = v(("0." + e) * 1e3)
				}
				for (aa = "S"; aa.length <= 9; aa += "S") x(aa, ra);

				function la() {
					return this._isUTC ? "UTC" : ""
				}

				function ua() {
					return this._isUTC ? "Coordinated Universal Time" : ""
				}
				oa = Ee("Milliseconds", false), n("z", 0, 0, "zoneAbbr"), n("zz", 0, 0, "zoneName");
				var M = K.prototype;
				if (M.add = Hn, M.calendar = Wn, M.clone = qn, M.diff = Qn, M.endOf = ys, M.format = ns, M.from = ss, M.fromNow = as, M.to = os, M.toNow = rs, M.get = $e, M.invalidAt = As, M.isAfter = Un, M.isBefore = Vn, M.isBetween = Gn, M.isSame = Xn, M.isSameOrAfter = Kn, M.isSameOrBefore = Zn, M.isValid = Ss, M.lang = us, M.locale = ls, M.localeData = cs, M.max = Ji, M.min = Qi, M.parsingFlags = Ts, M.set = Me, M.startOf = bs, M.subtract = Ln, M.toArray = Ds, M.toObject = Cs, M.toDate = ws, M.toISOString = ts, M.inspect = is, typeof Symbol !== "undefined" && Symbol.for != null) M[Symbol.for("nodejs.util.inspect.custom")] = function() {
					return "Moment<" + this.format() + ">"
				};

				function ca(e) {
					return P(e * 1e3)
				}

				function ha() {
					return P.apply(null, arguments).parseZone()
				}

				function da(e) {
					return e
				}
				M.toJSON = ks, M.toString = es, M.unix = xs, M.valueOf = _s, M.creationData = Es, M.eraName = Ms, M.eraNarrow = Is, M.eraAbbr = Os, M.eraYear = Hs, M.year = wt, M.isLeapYear = Dt, M.weekYear = Us, M.isoWeekYear = Vs, M.quarter = M.quarters = ea, M.month = gt, M.daysInMonth = vt, M.week = M.weeks = Mt, M.isoWeek = M.isoWeeks = It, M.weeksInYear = Ks, M.weeksInWeekYear = Zs, M.isoWeeksInYear = Gs, M.isoWeeksInISOWeekYear = Xs, M.date = ta, M.day = M.days = Xt, M.weekday = Kt, M.isoWeekday = Zt, M.dayOfYear = ia, M.hour = M.hours = li, M.minute = M.minutes = na, M.second = M.seconds = sa, M.millisecond = M.milliseconds = oa, M.utcOffset = bn, M.utc = _n, M.local = xn, M.parseZone = wn, M.hasAlignedHourOffset = Dn, M.isDST = Cn, M.isLocal = Sn, M.isUtcOffset = Tn, M.isUtc = An, M.isUTC = An, M.zoneAbbr = la, M.zoneName = ua, M.dates = e("dates accessor is deprecated. Use date instead.", ta), M.months = e("months accessor is deprecated. Use month instead", gt), M.years = e("years accessor is deprecated. Use year instead", wt), M.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", yn), M.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", kn);
				var I = ne.prototype;

				function fa(e, t, i, n) {
					var s = xi(),
						a = c().set(n, t);
					return s[i](a, e)
				}

				function pa(e, t, i) {
					if (u(e)) {
						t = e;
						e = undefined
					}
					e = e || "";
					if (t != null) return fa(e, t, i, "month");
					var n, s = [];
					for (n = 0; n < 12; n++) s[n] = fa(e, n, i, "month");
					return s
				}

				function ma(e, t, i, n) {
					if (typeof e === "boolean") {
						if (u(t)) {
							i = t;
							t = undefined
						}
						t = t || ""
					} else {
						t = e;
						i = t;
						e = false;
						if (u(t)) {
							i = t;
							t = undefined
						}
						t = t || ""
					}
					var s = xi(),
						a = e ? s._week.dow : 0,
						o, r = [];
					if (i != null) return fa(t, (i + a) % 7, n, "day");
					for (o = 0; o < 7; o++) r[o] = fa(t, (o + a) % 7, n, "day");
					return r
				}

				function ga(e, t) {
					return pa(e, t, "months")
				}

				function va(e, t) {
					return pa(e, t, "monthsShort")
				}

				function ba(e, t, i) {
					return ma(e, t, i, "weekdays")
				}

				function ya(e, t, i) {
					return ma(e, t, i, "weekdaysShort")
				}

				function _a(e, t, i) {
					return ma(e, t, i, "weekdaysMin")
				}
				I.calendar = ae, I.longDateFormat = me, I.invalidDate = ve, I.ordinal = _e, I.preparse = da, I.postformat = da, I.relativeTime = we, I.pastFuture = De, I.set = te, I.eras = Fs, I.erasParse = Ps, I.erasConvertYear = $s, I.erasAbbrRegex = Ns, I.erasNameRegex = Ls, I.erasNarrowRegex = Rs, I.months = ht, I.monthsShort = dt, I.monthsParse = pt, I.monthsRegex = yt, I.monthsShortRegex = bt, I.week = Et, I.firstDayOfYear = $t, I.firstDayOfWeek = Pt, I.weekdays = Wt, I.weekdaysMin = Ut, I.weekdaysShort = qt, I.weekdaysParse = Gt, I.weekdaysRegex = Qt, I.weekdaysShortRegex = Jt, I.weekdaysMinRegex = ei, I.isPM = oi, I.meridiem = ui, bi("en", {
					eras: [{
						since: "0001-01-01",
						until: +Infinity,
						offset: 1,
						name: "Anno Domini",
						narrow: "AD",
						abbr: "AD"
					}, {
						since: "0000-12-31",
						until: -Infinity,
						offset: 1,
						name: "Before Christ",
						narrow: "BC",
						abbr: "BC"
					}],
					dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
					ordinal: function(e) {
						var t = e % 10,
							i = v(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
						return e + i
					}
				}), h.lang = e("moment.lang is deprecated. Use moment.locale instead.", bi), h.langData = e("moment.langData is deprecated. Use moment.localeData instead.", xi);
				var xa = Math.abs;

				function wa() {
					var e = this._data;
					this._milliseconds = xa(this._milliseconds);
					this._days = xa(this._days);
					this._months = xa(this._months);
					e.milliseconds = xa(e.milliseconds);
					e.seconds = xa(e.seconds);
					e.minutes = xa(e.minutes);
					e.hours = xa(e.hours);
					e.months = xa(e.months);
					e.years = xa(e.years);
					return this
				}

				function Da(e, t, i, n) {
					var s = $(t, i);
					e._milliseconds += n * s._milliseconds;
					e._days += n * s._days;
					e._months += n * s._months;
					return e._bubble()
				}

				function Ca(e, t) {
					return Da(this, e, t, 1)
				}

				function ka(e, t) {
					return Da(this, e, t, -1)
				}

				function Sa(e) {
					if (e < 0) return Math.floor(e);
					else return Math.ceil(e)
				}

				function Ta() {
					var e = this._milliseconds,
						t = this._days,
						i = this._months,
						n = this._data,
						s, a, o, r, l;
					if (!(e >= 0 && t >= 0 && i >= 0 || e <= 0 && t <= 0 && i <= 0)) {
						e += Sa(Ea(i) + t) * 864e5;
						t = 0;
						i = 0
					}
					n.milliseconds = e % 1e3;
					s = g(e / 1e3);
					n.seconds = s % 60;
					a = g(s / 60);
					n.minutes = a % 60;
					o = g(a / 60);
					n.hours = o % 24;
					t += g(o / 24);
					l = g(Aa(t));
					i += l;
					t -= Sa(Ea(l));
					r = g(i / 12);
					i %= 12;
					n.days = t;
					n.months = i;
					n.years = r;
					return this
				}

				function Aa(e) {
					return e * 4800 / 146097
				}

				function Ea(e) {
					return e * 146097 / 4800
				}

				function Fa(e) {
					if (!this.isValid()) return NaN;
					var t, i, n = this._milliseconds;
					e = m(e);
					if (e === "month" || e === "quarter" || e === "year") {
						t = this._days + n / 864e5;
						i = this._months + Aa(t);
						switch (e) {
							case "month":
								return i;
							case "quarter":
								return i / 3;
							case "year":
								return i / 12
						}
					} else {
						t = this._days + Math.round(Ea(this._months));
						switch (e) {
							case "week":
								return t / 7 + n / 6048e5;
							case "day":
								return t + n / 864e5;
							case "hour":
								return t * 24 + n / 36e5;
							case "minute":
								return t * 1440 + n / 6e4;
							case "second":
								return t * 86400 + n / 1e3;
							case "millisecond":
								return Math.floor(t * 864e5) + n;
							default:
								throw new Error("Unknown unit " + e)
						}
					}
				}

				function Pa() {
					if (!this.isValid()) return NaN;
					return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6
				}

				function $a(e) {
					return function() {
						return this.as(e)
					}
				}
				var Ma = $a("ms"),
					Ia = $a("s"),
					Oa = $a("m"),
					Ha = $a("h"),
					La = $a("d"),
					Na = $a("w"),
					Ra = $a("M"),
					ja = $a("Q"),
					Ya = $a("y");

				function za() {
					return $(this)
				}

				function Ba(e) {
					e = m(e);
					return this.isValid() ? this[e + "s"]() : NaN
				}

				function Wa(e) {
					return function() {
						return this.isValid() ? this._data[e] : NaN
					}
				}
				var qa = Wa("milliseconds"),
					Ua = Wa("seconds"),
					Va = Wa("minutes"),
					Ga = Wa("hours"),
					Xa = Wa("days"),
					Ka = Wa("months"),
					Za = Wa("years");

				function Qa() {
					return g(this.days() / 7)
				}
				var Ja = Math.round,
					eo = {
						ss: 44,
						s: 45,
						m: 45,
						h: 22,
						d: 26,
						w: null,
						M: 11
					};

				function to(e, t, i, n, s) {
					return s.relativeTime(t || 1, !!i, e, n)
				}

				function io(e, t, i, n) {
					var s = $(e).abs(),
						a = Ja(s.as("s")),
						o = Ja(s.as("m")),
						r = Ja(s.as("h")),
						l = Ja(s.as("d")),
						u = Ja(s.as("M")),
						c = Ja(s.as("w")),
						h = Ja(s.as("y")),
						d = a <= i.ss && ["s", a] || a < i.s && ["ss", a] || o <= 1 && ["m"] || o < i.m && ["mm", o] || r <= 1 && ["h"] || r < i.h && ["hh", r] || l <= 1 && ["d"] || l < i.d && ["dd", l];
					if (i.w != null) d = d || c <= 1 && ["w"] || c < i.w && ["ww", c];
					d = d || u <= 1 && ["M"] || u < i.M && ["MM", u] || h <= 1 && ["y"] || ["yy", h];
					d[2] = t;
					d[3] = +e > 0;
					d[4] = n;
					return to.apply(null, d)
				}

				function no(e) {
					if (e === undefined) return Ja;
					if (typeof e === "function") {
						Ja = e;
						return true
					}
					return false
				}

				function so(e, t) {
					if (eo[e] === undefined) return false;
					if (t === undefined) return eo[e];
					eo[e] = t;
					if (e === "s") eo.ss = t - 1;
					return true
				}

				function ao(e, t) {
					if (!this.isValid()) return this.localeData().invalidDate();
					var i = false,
						n = eo,
						s, a;
					if (typeof e === "object") {
						t = e;
						e = false
					}
					if (typeof e === "boolean") i = e;
					if (typeof t === "object") {
						n = Object.assign({}, eo, t);
						if (t.s != null && t.ss == null) n.ss = t.s - 1
					}
					s = this.localeData();
					a = io(this, !i, n, s);
					if (i) a = s.pastFuture(+this, a);
					return s.postformat(a)
				}
				var oo = Math.abs;

				function ro(e) {
					return (e > 0) - (e < 0) || +e
				}

				function lo() {
					if (!this.isValid()) return this.localeData().invalidDate();
					var e = oo(this._milliseconds) / 1e3,
						t = oo(this._days),
						i = oo(this._months),
						n, s, a, o, r = this.asSeconds(),
						l, u, c, h;
					if (!r) return "P0D";
					n = g(e / 60);
					s = g(n / 60);
					e %= 60;
					n %= 60;
					a = g(i / 12);
					i %= 12;
					o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "";
					l = r < 0 ? "-" : "";
					u = ro(this._months) !== ro(r) ? "-" : "";
					c = ro(this._days) !== ro(r) ? "-" : "";
					h = ro(this._milliseconds) !== ro(r) ? "-" : "";
					return l + "P" + (a ? u + a + "Y" : "") + (i ? u + i + "M" : "") + (t ? c + t + "D" : "") + (s || n || e ? "T" : "") + (s ? h + s + "H" : "") + (n ? h + n + "M" : "") + (e ? h + o + "S" : "")
				}
				var O = un.prototype;
				return O.isValid = rn, O.abs = wa, O.add = Ca, O.subtract = ka, O.as = Fa, O.asMilliseconds = Ma, O.asSeconds = Ia, O.asMinutes = Oa, O.asHours = Ha, O.asDays = La, O.asWeeks = Na, O.asMonths = Ra, O.asQuarters = ja, O.asYears = Ya, O.valueOf = Pa, O._bubble = Ta, O.clone = za, O.get = Ba, O.milliseconds = qa, O.seconds = Ua, O.minutes = Va, O.hours = Ga, O.days = Xa, O.weeks = Qa, O.months = Ka, O.years = Za, O.humanize = ao, O.toISOString = lo, O.toString = lo, O.toJSON = lo, O.locale = ls, O.localeData = cs, O.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", lo), O.lang = us, n("X", 0, 0, "unix"), n("x", 0, 0, "valueOf"), y("x", We), y("X", Ve), x("X", function(e, t, i) {
					i._d = new Date(parseFloat(e) * 1e3)
				}), x("x", function(e, t, i) {
					i._d = new Date(v(e))
				}), h.version = "2.29.4", N(P), h.fn = M, h.min = tn, h.max = nn, h.now = sn, h.utc = c, h.unix = ca, h.months = ga, h.isDate = Y, h.locale = bi, h.invalid = U, h.duration = $, h.isMoment = f, h.weekdays = ba, h.parseZone = ha, h.localeData = xi, h.isDuration = cn, h.monthsShort = va, h.weekdaysMin = _a, h.defineLocale = yi, h.updateLocale = _i, h.locales = wi, h.weekdaysShort = ya, h.normalizeUnits = m, h.relativeTimeRounding = no, h.relativeTimeThreshold = so, h.calendarFormat = Bn, h.prototype = M, h.HTML5_FMT = {
					DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
					DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
					DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
					DATE: "YYYY-MM-DD",
					TIME: "HH:mm",
					TIME_SECONDS: "HH:mm:ss",
					TIME_MS: "HH:mm:ss.SSS",
					WEEK: "GGGG-[W]WW",
					MONTH: "YYYY-MM"
				}, h
			}()
		}.call(this, i(22)(e))
	},
	77: function(e, t, i) {
		var n, s;
		! function() {
			"use strict";
			s = [i(8)], void 0 !== (s = "function" == typeof(n = function(p) {
				"use strict";
				var n = function() {
						return {
							escapeRegExChars: function(e) {
								return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
							},
							createNode: function(e) {
								var t = document.createElement("div");
								t.className = e;
								t.style.position = "absolute";
								t.style.display = "none";
								return t
							}
						}
					}(),
					i = {
						ESC: 27,
						TAB: 9,
						RETURN: 13,
						LEFT: 37,
						UP: 38,
						RIGHT: 39,
						DOWN: 40
					},
					e = p.noop;

				function a(e, t) {
					var i = this;
					i.element = e;
					i.el = p(e);
					i.suggestions = [];
					i.badQueries = [];
					i.selectedIndex = -1;
					i.currentValue = i.element.value;
					i.timeoutId = null;
					i.cachedResponse = {};
					i.onChangeTimeout = null;
					i.onChange = null;
					i.isLocal = false;
					i.suggestionsContainer = null;
					i.noSuggestionsContainer = null;
					i.options = p.extend(true, {}, a.defaults, t);
					i.classes = {
						selected: "autocomplete-selected",
						suggestion: "autocomplete-suggestion"
					};
					i.hint = null;
					i.hintValue = "";
					i.selection = null;
					i.initialize();
					i.setOptions(t)
				}

				function t(e, t, i) {
					return e.value.toLowerCase().indexOf(i) !== -1
				}

				function s(e) {
					return typeof e === "string" ? p.parseJSON(e) : e
				}

				function o(e, t) {
					if (!t) return e.value;
					var i = "(" + n.escapeRegExChars(t) + ")";
					return e.value.replace(new RegExp(i, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
				}

				function r(e, t) {
					return '<div class="autocomplete-group">' + t + "</div>"
				}
				if (a.utils = n, (p.Autocomplete = a).defaults = {
						ajaxSettings: {},
						autoSelectFirst: false,
						appendTo: "body",
						serviceUrl: null,
						lookup: null,
						onSelect: null,
						width: "auto",
						minChars: 1,
						maxHeight: 300,
						deferRequestBy: 0,
						params: {},
						formatResult: o,
						formatGroup: r,
						delimiter: null,
						zIndex: 9999,
						type: "GET",
						noCache: false,
						onSearchStart: e,
						onSearchComplete: e,
						onSearchError: e,
						preserveInput: false,
						containerClass: "autocomplete-suggestions",
						tabDisabled: false,
						dataType: "text",
						currentRequest: null,
						triggerSelectOnValidInput: true,
						preventBadQueries: true,
						lookupFilter: t,
						paramName: "query",
						transformResult: s,
						showNoSuggestionNotice: false,
						noSuggestionNotice: "No results",
						orientation: "bottom",
						forceFixPosition: false
					}, a.prototype = {
						initialize: function() {
							var t = this,
								e = "." + t.classes.suggestion,
								i = t.classes.selected,
								n = t.options,
								s;
							t.element.setAttribute("autocomplete", "off");
							t.noSuggestionsContainer = p('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0);
							t.suggestionsContainer = a.utils.createNode(n.containerClass);
							s = p(t.suggestionsContainer);
							s.appendTo(n.appendTo || "body");
							if (n.width !== "auto") s.css("width", n.width);
							s.on("mouseover.autocomplete", e, function() {
								t.activate(p(this).data("index"))
							});
							s.on("mouseout.autocomplete", function() {
								t.selectedIndex = -1;
								s.children("." + i).removeClass(i)
							});
							s.on("click.autocomplete", e, function() {
								t.select(p(this).data("index"))
							});
							s.on("click.autocomplete", function() {
								clearTimeout(t.blurTimeoutId)
							});
							t.fixPositionCapture = function() {
								if (t.visible) t.fixPosition()
							};
							p(window).on("resize.autocomplete", t.fixPositionCapture);
							t.el.on("keydown.autocomplete", function(e) {
								t.onKeyPress(e)
							});
							t.el.on("keyup.autocomplete", function(e) {
								t.onKeyUp(e)
							});
							t.el.on("blur.autocomplete", function() {
								t.onBlur()
							});
							t.el.on("focus.autocomplete", function() {
								t.onFocus()
							});
							t.el.on("change.autocomplete", function(e) {
								t.onKeyUp(e)
							});
							t.el.on("input.autocomplete", function(e) {
								t.onKeyUp(e)
							})
						},
						onFocus: function() {
							var e = this;
							if (e.disabled) return;
							e.fixPosition();
							if (e.el.val().length >= e.options.minChars) e.onValueChange()
						},
						onBlur: function() {
							var e = this,
								t = e.options,
								i = e.el.val(),
								n = e.getQuery(i);
							e.blurTimeoutId = setTimeout(function() {
								e.hide();
								if (e.selection && e.currentValue !== n)(t.onInvalidateSelection || p.noop).call(e.element)
							}, 200)
						},
						abortAjax: function() {
							var e = this;
							if (e.currentRequest) {
								e.currentRequest.abort();
								e.currentRequest = null
							}
						},
						setOptions: function(e) {
							var t = this,
								i = p.extend({}, t.options, e);
							t.isLocal = Array.isArray(i.lookup);
							if (t.isLocal) i.lookup = t.verifySuggestionsFormat(i.lookup);
							i.orientation = t.validateOrientation(i.orientation, "bottom");
							p(t.suggestionsContainer).css({
								"max-height": i.maxHeight + "px",
								width: i.width + "px",
								"z-index": i.zIndex
							});
							this.options = i
						},
						clearCache: function() {
							this.cachedResponse = {};
							this.badQueries = []
						},
						clear: function() {
							this.clearCache();
							this.currentValue = "";
							this.suggestions = []
						},
						disable: function() {
							var e = this;
							e.disabled = true;
							clearTimeout(e.onChangeTimeout);
							e.abortAjax()
						},
						enable: function() {
							this.disabled = false
						},
						fixPosition: function() {
							var e = this,
								t = p(e.suggestionsContainer),
								i = t.parent().get(0);
							if (i !== document.body && !e.options.forceFixPosition) return;
							var n = e.options.orientation,
								s = t.outerHeight(),
								a = e.el.outerHeight(),
								o = e.el.offset(),
								r = {
									top: o.top,
									left: o.left
								};
							if (n === "auto") {
								var l = p(window).height(),
									u = p(window).scrollTop(),
									c = -u + o.top - s,
									h = u + l - (o.top + a + s);
								n = Math.max(c, h) === c ? "top" : "bottom"
							}
							if (n === "top") r.top += -s;
							else r.top += a;
							if (i !== document.body) {
								var d = t.css("opacity"),
									f;
								if (!e.visible) t.css("opacity", 0).show();
								f = t.offsetParent().offset();
								r.top -= f.top;
								r.top += i.scrollTop;
								r.left -= f.left;
								if (!e.visible) t.css("opacity", d).hide()
							}
							if (e.options.width === "auto") r.width = e.el.outerWidth() + "px";
							t.css(r)
						},
						isCursorAtEnd: function() {
							var e = this,
								t = e.el.val().length,
								i = e.element.selectionStart,
								n;
							if (typeof i === "number") return i === t;
							if (document.selection) {
								n = document.selection.createRange();
								n.moveStart("character", -t);
								return t === n.text.length
							}
							return true
						},
						onKeyPress: function(e) {
							var t = this;
							if (!t.disabled && !t.visible && e.which === i.DOWN && t.currentValue) {
								t.suggest();
								return
							}
							if (t.disabled || !t.visible) return;
							switch (e.which) {
								case i.ESC:
									t.el.val(t.currentValue);
									t.hide();
									break;
								case i.RIGHT:
									if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
										t.selectHint();
										break
									}
									return;
								case i.TAB:
									if (t.hint && t.options.onHint) {
										t.selectHint();
										return
									}
									if (t.selectedIndex === -1) {
										t.hide();
										return
									}
									t.select(t.selectedIndex);
									if (t.options.tabDisabled === false) return;
									break;
								case i.RETURN:
									if (t.selectedIndex === -1) {
										t.hide();
										return
									}
									t.select(t.selectedIndex);
									break;
								case i.UP:
									t.moveUp();
									break;
								case i.DOWN:
									t.moveDown();
									break;
								default:
									return
							}
							e.stopImmediatePropagation();
							e.preventDefault()
						},
						onKeyUp: function(e) {
							var t = this;
							if (t.disabled) return;
							switch (e.which) {
								case i.UP:
								case i.DOWN:
									return
							}
							clearTimeout(t.onChangeTimeout);
							if (t.currentValue !== t.el.val()) {
								t.findBestHint();
								if (t.options.deferRequestBy > 0) t.onChangeTimeout = setTimeout(function() {
									t.onValueChange()
								}, t.options.deferRequestBy);
								else t.onValueChange()
							}
						},
						onValueChange: function() {
							if (this.ignoreValueChange) {
								this.ignoreValueChange = false;
								return
							}
							var e = this,
								t = e.options,
								i = e.el.val(),
								n = e.getQuery(i);
							if (e.selection && e.currentValue !== n) {
								e.selection = null;
								(t.onInvalidateSelection || p.noop).call(e.element)
							}
							clearTimeout(e.onChangeTimeout);
							e.currentValue = i;
							e.selectedIndex = -1;
							if (t.triggerSelectOnValidInput && e.isExactMatch(n)) {
								e.select(0);
								return
							}
							if (n.length < t.minChars) e.hide();
							else e.getSuggestions(n)
						},
						isExactMatch: function(e) {
							var t = this.suggestions;
							return t.length === 1 && t[0].value.toLowerCase() === e.toLowerCase()
						},
						getQuery: function(e) {
							var t = this.options.delimiter,
								i;
							if (!t) return e;
							i = e.split(t);
							return p.trim(i[i.length - 1])
						},
						getSuggestionsLocal: function(t) {
							var e = this,
								i = e.options,
								n = t.toLowerCase(),
								s = i.lookupFilter,
								a = parseInt(i.lookupLimit, 10),
								o;
							o = {
								suggestions: p.grep(i.lookup, function(e) {
									return s(e, t, n)
								})
							};
							if (a && o.suggestions.length > a) o.suggestions = o.suggestions.slice(0, a);
							return o
						},
						getSuggestions: function(n) {
							var e, s = this,
								a = s.options,
								t = a.serviceUrl,
								i, o, r;
							a.params[a.paramName] = n;
							if (a.onSearchStart.call(s.element, a.params) === false) return;
							i = a.ignoreParams ? null : a.params;
							if (p.isFunction(a.lookup)) {
								a.lookup(n, function(e) {
									s.suggestions = e.suggestions;
									s.suggest();
									a.onSearchComplete.call(s.element, n, e.suggestions)
								});
								return
							}
							if (s.isLocal) e = s.getSuggestionsLocal(n);
							else {
								if (p.isFunction(t)) t = t.call(s.element, n);
								o = t + "?" + p.param(i || {});
								e = s.cachedResponse[o]
							}
							if (e && Array.isArray(e.suggestions)) {
								s.suggestions = e.suggestions;
								s.suggest();
								a.onSearchComplete.call(s.element, n, e.suggestions)
							} else if (!s.isBadQuery(n)) {
								s.abortAjax();
								r = {
									url: t,
									data: i,
									type: a.type,
									dataType: a.dataType
								};
								p.extend(r, a.ajaxSettings);
								s.currentRequest = p.ajax(r).done(function(e) {
									var t;
									s.currentRequest = null;
									t = a.transformResult(e, n);
									s.processResponse(t, n, o);
									a.onSearchComplete.call(s.element, n, t.suggestions)
								}).fail(function(e, t, i) {
									a.onSearchError.call(s.element, n, e, t, i)
								})
							} else a.onSearchComplete.call(s.element, n, [])
						},
						isBadQuery: function(e) {
							if (!this.options.preventBadQueries) return false;
							var t = this.badQueries,
								i = t.length;
							while (i--)
								if (e.indexOf(t[i]) === 0) return true;
							return false
						},
						hide: function() {
							var e = this,
								t = p(e.suggestionsContainer);
							if (p.isFunction(e.options.onHide) && e.visible) e.options.onHide.call(e.element, t);
							e.visible = false;
							e.selectedIndex = -1;
							clearTimeout(e.onChangeTimeout);
							p(e.suggestionsContainer).hide();
							e.signalHint(null)
						},
						suggest: function() {
							if (!this.suggestions.length) {
								if (this.options.showNoSuggestionNotice) this.noSuggestions();
								else this.hide();
								return
							}
							var e = this,
								n = e.options,
								s = n.groupBy,
								i = n.formatResult,
								a = e.getQuery(e.currentValue),
								o = e.classes.suggestion,
								t = e.classes.selected,
								r = p(e.suggestionsContainer),
								l = p(e.noSuggestionsContainer),
								u = n.beforeRender,
								c = "",
								h, d = function(e, t) {
									var i = e.data[s];
									if (h === i) return "";
									h = i;
									return n.formatGroup(e, h)
								};
							if (n.triggerSelectOnValidInput && e.isExactMatch(a)) {
								e.select(0);
								return
							}
							p.each(e.suggestions, function(e, t) {
								if (s) c += d(t, a, e);
								c += '<div class="' + o + '" data-index="' + e + '">' + i(t, a, e) + "</div>"
							});
							this.adjustContainerWidth();
							l.detach();
							r.html(c);
							if (p.isFunction(u)) u.call(e.element, r, e.suggestions);
							e.fixPosition();
							r.show();
							if (n.autoSelectFirst) {
								e.selectedIndex = 0;
								r.scrollTop(0);
								r.children("." + o).first().addClass(t)
							}
							e.visible = true;
							e.findBestHint()
						},
						noSuggestions: function() {
							var e = this,
								t = e.options.beforeRender,
								i = p(e.suggestionsContainer),
								n = p(e.noSuggestionsContainer);
							this.adjustContainerWidth();
							n.detach();
							i.empty();
							i.append(n);
							if (p.isFunction(t)) t.call(e.element, i, e.suggestions);
							e.fixPosition();
							i.show();
							e.visible = true
						},
						adjustContainerWidth: function() {
							var e = this,
								t = e.options,
								i, n = p(e.suggestionsContainer);
							if (t.width === "auto") {
								i = e.el.outerWidth();
								n.css("width", i > 0 ? i : 300)
							} else if (t.width === "flex") n.css("width", "")
						},
						findBestHint: function() {
							var e = this,
								n = e.el.val().toLowerCase(),
								s = null;
							if (!n) return;
							p.each(e.suggestions, function(e, t) {
								var i = t.value.toLowerCase().indexOf(n) === 0;
								if (i) s = t;
								return !i
							});
							e.signalHint(s)
						},
						signalHint: function(e) {
							var t = "",
								i = this;
							if (e) t = i.currentValue + e.value.substr(i.currentValue.length);
							if (i.hintValue !== t) {
								i.hintValue = t;
								i.hint = e;
								(this.options.onHint || p.noop)(t)
							}
						},
						verifySuggestionsFormat: function(e) {
							if (e.length && typeof e[0] === "string") return p.map(e, function(e) {
								return {
									value: e,
									data: null
								}
							});
							return e
						},
						validateOrientation: function(e, t) {
							e = p.trim(e || "").toLowerCase();
							if (p.inArray(e, ["auto", "bottom", "top"]) === -1) e = t;
							return e
						},
						processResponse: function(e, t, i) {
							var n = this,
								s = n.options;
							e.suggestions = n.verifySuggestionsFormat(e.suggestions);
							if (!s.noCache) {
								n.cachedResponse[i] = e;
								if (s.preventBadQueries && !e.suggestions.length) n.badQueries.push(t)
							}
							if (t !== n.getQuery(n.currentValue)) return;
							n.suggestions = e.suggestions;
							n.suggest()
						},
						activate: function(e) {
							var t = this,
								i, n = t.classes.selected,
								s = p(t.suggestionsContainer),
								a = s.find("." + t.classes.suggestion);
							s.find("." + n).removeClass(n);
							t.selectedIndex = e;
							if (t.selectedIndex !== -1 && a.length > t.selectedIndex) {
								i = a.get(t.selectedIndex);
								p(i).addClass(n);
								return i
							}
							return null
						},
						selectHint: function() {
							var e = this,
								t = p.inArray(e.hint, e.suggestions);
							e.select(t)
						},
						select: function(e) {
							var t = this;
							t.hide();
							t.onSelect(e)
						},
						moveUp: function() {
							var e = this;
							if (e.selectedIndex === -1) return;
							if (e.selectedIndex === 0) {
								p(e.suggestionsContainer).children("." + e.classes.suggestion).first().removeClass(e.classes.selected);
								e.selectedIndex = -1;
								e.ignoreValueChange = false;
								e.el.val(e.currentValue);
								e.findBestHint();
								return
							}
							e.adjustScroll(e.selectedIndex - 1)
						},
						moveDown: function() {
							var e = this;
							if (e.selectedIndex === e.suggestions.length - 1) return;
							e.adjustScroll(e.selectedIndex + 1)
						},
						adjustScroll: function(e) {
							var t = this,
								i = t.activate(e);
							if (!i) return;
							var n, s, a, o = p(i).outerHeight();
							n = i.offsetTop;
							s = p(t.suggestionsContainer).scrollTop();
							a = s + t.options.maxHeight - o;
							if (n < s) p(t.suggestionsContainer).scrollTop(n);
							else if (n > a) p(t.suggestionsContainer).scrollTop(n - t.options.maxHeight + o);
							if (!t.options.preserveInput) {
								t.ignoreValueChange = true;
								t.el.val(t.getValue(t.suggestions[e].value))
							}
							t.signalHint(null)
						},
						onSelect: function(e) {
							var t = this,
								i = t.options.onSelect,
								n = t.suggestions[e];
							t.currentValue = t.getValue(n.value);
							if (t.currentValue !== t.el.val() && !t.options.preserveInput) t.el.val(t.currentValue);
							t.signalHint(null);
							t.suggestions = [];
							t.selection = n;
							if (p.isFunction(i)) i.call(t.element, n)
						},
						getValue: function(e) {
							var t = this,
								i = t.options.delimiter,
								n, s;
							if (!i) return e;
							n = t.currentValue;
							s = n.split(i);
							if (s.length === 1) return e;
							return n.substr(0, n.length - s[s.length - 1].length) + e
						},
						dispose: function() {
							var e = this;
							e.el.off(".autocomplete").removeData("autocomplete");
							p(window).off("resize.autocomplete", e.fixPositionCapture);
							p(e.suggestionsContainer).remove()
						}
					}, p.fn.devbridgeAutocomplete = function(i, n) {
						var s = "autocomplete";
						if (!arguments.length) return this.first().data(s);
						return this.each(function() {
							var e = p(this),
								t = e.data(s);
							if (typeof i === "string") {
								if (t && typeof t[i] === "function") t[i](n)
							} else {
								if (t && t.dispose) t.dispose();
								t = new a(this, i);
								e.data(s, t)
							}
						})
					}, !p.fn.autocomplete) p.fn.autocomplete = p.fn.devbridgeAutocomplete
			}) ? n.apply(t, s) : n) && (e.exports = s)
		}()
	},
	78: function(e, t, i) {
		var n;
		i = [i(8)], void 0 !== (t = "function" == typeof(n = function(h) {
			"use strict";
			var t = h(document),
				u = h(window),
				c = "selectric",
				e = "Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel",
				i = ".sl",
				n = ["a", "e", "i", "o", "u", "n", "c", "y"],
				s = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g],
				a = function(e, t) {
					var i = this;
					i.element = e;
					i.$element = h(e);
					i.state = {
						multiple: !!i.$element.attr("multiple"),
						enabled: false,
						opened: false,
						currValue: -1,
						selectedIdx: -1,
						highlightedIdx: -1
					};
					i.eventTriggers = {
						open: i.open,
						close: i.close,
						destroy: i.destroy,
						refresh: i.refresh,
						init: i.init
					};
					i.init(t)
				};
			a.prototype = {
				utils: {
					isMobile: function() {
						return /android|ip(hone|od|ad)/i.test(navigator.userAgent)
					},
					escapeRegExp: function(e) {
						return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
					},
					replaceDiacritics: function(e) {
						var t = s.length;
						while (t--) e = e.toLowerCase().replace(s[t], n[t]);
						return e
					},
					format: function(e) {
						var n = arguments;
						return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function(e, t, i) {
							return i && n[1] ? n[1][i] : n[t]
						})
					},
					nextEnabledItem: function(e, t) {
						while (e[t = (t + 1) % e.length].disabled);
						return t
					},
					previousEnabledItem: function(e, t) {
						while (e[t = (t > 0 ? t : e.length) - 1].disabled);
						return t
					},
					toDash: function(e) {
						return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
					},
					triggerCallback: function(e, t) {
						var i = t.element;
						var n = t.options["on" + e];
						var s = [i].concat([].slice.call(arguments).slice(1));
						if (h.isFunction(n)) n.apply(i, s);
						h(i).trigger(c + "-" + this.toDash(e), s)
					},
					arrayToClassname: function(e) {
						var t = h.grep(e, function(e) {
							return !!e
						});
						return h.trim(t.join(" "))
					}
				},
				init: function(e) {
					var t = this;
					t.options = h.extend(true, {}, h.fn[c].defaults, t.options, e);
					t.utils.triggerCallback("BeforeInit", t);
					t.destroy(true);
					if (t.options.disableOnMobile && t.utils.isMobile()) {
						t.disableOnMobile = true;
						return
					}
					t.classes = t.getClassNames();
					var i = h("<input/>", {
						class: t.classes.input,
						readonly: t.utils.isMobile()
					});
					var n = h("<div/>", {
						class: t.classes.items,
						tabindex: -1
					});
					var s = h("<div/>", {
						class: t.classes.scroll
					});
					var a = h("<div/>", {
						class: t.classes.prefix,
						html: t.options.arrowButtonMarkup
					});
					var o = h("<span/>", {
						class: "label"
					});
					var r = t.$element.wrap("<div/>").parent().append(a.prepend(o), n, i);
					var l = h("<div/>", {
						class: t.classes.hideselect
					});
					t.elements = {
						input: i,
						items: n,
						itemsScroll: s,
						wrapper: a,
						label: o,
						outerWrapper: r
					};
					if (t.options.nativeOnMobile && t.utils.isMobile()) {
						t.elements.input = undefined;
						l.addClass(t.classes.prefix + "-is-native");
						t.$element.on("change", function() {
							t.refresh()
						})
					}
					t.$element.on(t.eventTriggers).wrap(l);
					t.originalTabindex = t.$element.prop("tabindex");
					t.$element.prop("tabindex", -1);
					t.populate();
					t.activate();
					t.utils.triggerCallback("Init", t)
				},
				activate: function() {
					var e = this;
					var t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow);
					var i = e.$element.width();
					t.removeClass(e.classes.tempshow);
					e.utils.triggerCallback("BeforeActivate", e);
					e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : ""]));
					if (e.options.inheritOriginalWidth && i > 0) e.elements.outerWrapper.width(i);
					e.unbindEvents();
					if (!e.$element.prop("disabled")) {
						e.state.enabled = true;
						e.elements.outerWrapper.removeClass(e.classes.disabled);
						e.$li = e.elements.items.removeAttr("style").find("li");
						e.bindEvents()
					} else {
						e.elements.outerWrapper.addClass(e.classes.disabled);
						if (e.elements.input) e.elements.input.prop("disabled", true)
					}
					e.utils.triggerCallback("Activate", e)
				},
				getClassNames: function() {
					var n = this;
					var s = n.options.customClass;
					var a = {};
					h.each(e.split(" "), function(e, t) {
						var i = s.prefix + t;
						a[t.toLowerCase()] = s.camelCase ? i : n.utils.toDash(i)
					});
					a.prefix = s.prefix;
					return a
				},
				setLabel: function() {
					var i = this;
					var t = i.options.labelBuilder;
					if (i.state.multiple) {
						var e = h.isArray(i.state.currValue) ? i.state.currValue : [i.state.currValue];
						e = e.length === 0 ? [0] : e;
						var n = h.map(e, function(t) {
							return h.grep(i.lookupItems, function(e) {
								return e.index === t
							})[0]
						});
						n = h.grep(n, function(e) {
							if (n.length > 1 || n.length === 0) return h.trim(e.value) !== "";
							return e
						});
						n = h.map(n, function(e) {
							return h.isFunction(t) ? t(e) : i.utils.format(t, e)
						});
						if (i.options.multiple.maxLabelEntries)
							if (n.length >= i.options.multiple.maxLabelEntries + 1) {
								n = n.slice(0, i.options.multiple.maxLabelEntries);
								n.push(h.isFunction(t) ? t({
									text: "..."
								}) : i.utils.format(t, {
									text: "..."
								}))
							} else n.slice(n.length - 1);
						i.elements.label.html(n.join(i.options.multiple.separator))
					} else {
						var s = i.lookupItems[i.state.currValue];
						i.elements.label.html(h.isFunction(t) ? t(s) : i.utils.format(t, s))
					}
				},
				populate: function() {
					var n = this;
					var e = n.$element.children();
					var t = n.$element.find("option");
					var i = t.filter(":selected");
					var s = t.index(i);
					var a = 0;
					var o = n.state.multiple ? [] : 0;
					if (i.length > 1 && n.state.multiple) {
						s = [];
						i.each(function() {
							s.push(h(this).index())
						})
					}
					n.state.currValue = ~s ? s : o;
					n.state.selectedIdx = n.state.currValue;
					n.state.highlightedIdx = n.state.currValue;
					n.items = [];
					n.lookupItems = [];
					if (e.length) {
						e.each(function(e) {
							var t = h(this);
							if (t.is("optgroup")) {
								var i = {
									element: t,
									label: t.prop("label"),
									groupDisabled: t.prop("disabled"),
									items: []
								};
								t.children().each(function(e) {
									var t = h(this);
									i.items[e] = n.getItemData(a, t, i.groupDisabled || t.prop("disabled"));
									n.lookupItems[a] = i.items[e];
									a++
								});
								n.items[e] = i
							} else {
								n.items[e] = n.getItemData(a, t, t.prop("disabled"));
								n.lookupItems[a] = n.items[e];
								a++
							}
						});
						n.setLabel();
						n.elements.items.append(n.elements.itemsScroll.html(n.getItemsMarkup(n.items)))
					}
				},
				getItemData: function(e, t, i) {
					var n = this;
					return {
						index: e,
						element: t,
						value: t.val(),
						className: t.prop("class"),
						text: t.html(),
						slug: h.trim(n.utils.replaceDiacritics(t.html())),
						alt: t.attr("data-alt"),
						selected: t.prop("selected"),
						disabled: i
					}
				},
				getItemsMarkup: function(e) {
					var i = this;
					var n = "<ul>";
					if (h.isFunction(i.options.listBuilder) && i.options.listBuilder) e = i.options.listBuilder(e);
					h.each(e, function(e, t) {
						if (t.label !== undefined) {
							n += i.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', i.utils.arrayToClassname([i.classes.group, t.groupDisabled ? "disabled" : "", t.element.prop("class")]), i.classes.grouplabel, t.element.prop("label"));
							h.each(t.items, function(e, t) {
								n += i.getItemMarkup(t.index, t)
							});
							n += "</ul>"
						} else n += i.getItemMarkup(t.index, t)
					});
					return n + "</ul>"
				},
				getItemMarkup: function(e, t) {
					var i = this;
					var n = i.options.optionsItemBuilder;
					var s = {
						value: t.value,
						text: t.text,
						slug: t.slug,
						index: t.index
					};
					return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>', e, i.utils.arrayToClassname([t.className, e === i.items.length - 1 ? "last" : "", t.disabled ? "disabled" : "", t.selected ? "selected" : ""]), h.isFunction(n) ? i.utils.format(n(t, this.$element, e), t) : i.utils.format(n, s))
				},
				unbindEvents: function() {
					var e = this;
					e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(i)
				},
				bindEvents: function() {
					var a = this;
					a.elements.outerWrapper.on("mouseenter" + i + " mouseleave" + i, function(e) {
						h(this).toggleClass(a.classes.hover, e.type === "mouseenter");
						if (a.options.openOnHover) {
							clearTimeout(a.closeTimer);
							if (e.type === "mouseleave") a.closeTimer = setTimeout(h.proxy(a.close, a), a.options.hoverIntentTimeout);
							else a.open()
						}
					});
					a.elements.wrapper.on("click" + i, function(e) {
						a.state.opened ? a.close() : a.open(e)
					});
					if (!(a.options.nativeOnMobile && a.utils.isMobile())) {
						a.$element.on("focus" + i, function() {
							a.elements.input.focus()
						});
						a.elements.input.prop({
							tabindex: a.originalTabindex,
							disabled: false
						}).on("keydown" + i, h.proxy(a.handleKeys, a)).on("focusin" + i, function(e) {
							a.elements.outerWrapper.addClass(a.classes.focus);
							a.elements.input.one("blur", function() {
								a.elements.input.blur()
							});
							if (a.options.openOnFocus && !a.state.opened) a.open(e)
						}).on("focusout" + i, function() {
							a.elements.outerWrapper.removeClass(a.classes.focus)
						}).on("input propertychange", function() {
							var e = a.elements.input.val();
							var s = new RegExp("^" + a.utils.escapeRegExp(e), "i");
							clearTimeout(a.resetStr);
							a.resetStr = setTimeout(function() {
								a.elements.input.val("")
							}, a.options.keySearchTimeout);
							if (e.length) h.each(a.items, function(e, t) {
								if (t.disabled) return;
								if (s.test(t.text) || s.test(t.slug)) {
									a.highlight(e);
									return
								}
								if (!t.alt) return;
								var i = t.alt.split("|");
								for (var n = 0; n < i.length; n++) {
									if (!i[n]) break;
									if (s.test(i[n].trim())) {
										a.highlight(e);
										return
									}
								}
							})
						})
					}
					a.$li.on({
						mousedown: function(e) {
							e.preventDefault();
							e.stopPropagation()
						},
						click: function() {
							a.select(h(this).data("index"));
							return false
						}
					})
				},
				handleKeys: function(e) {
					var t = this;
					var i = e.which;
					var n = t.options.keys;
					var s = h.inArray(i, n.previous) > -1;
					var a = h.inArray(i, n.next) > -1;
					var o = h.inArray(i, n.select) > -1;
					var r = h.inArray(i, n.open) > -1;
					var l = t.state.highlightedIdx;
					var u = s && l === 0 || a && l + 1 === t.items.length;
					var c = 0;
					if (i === 13 || i === 32) e.preventDefault();
					if (s || a) {
						if (!t.options.allowWrap && u) return;
						if (s) c = t.utils.previousEnabledItem(t.lookupItems, l);
						if (a) c = t.utils.nextEnabledItem(t.lookupItems, l);
						t.highlight(c)
					}
					if (o && t.state.opened) {
						t.select(l);
						if (!t.state.multiple || !t.options.multiple.keepMenuOpen) t.close();
						return
					}
					if (r && !t.state.opened) t.open()
				},
				refresh: function() {
					var e = this;
					e.populate();
					e.activate();
					e.utils.triggerCallback("Refresh", e)
				},
				setOptionsDimensions: function() {
					var e = this;
					var t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow);
					var i = e.options.maxHeight;
					var n = e.elements.items.outerWidth();
					var s = e.elements.wrapper.outerWidth() - (n - e.elements.items.width());
					if (!e.options.expandToItemText || s > n) e.finalWidth = s;
					else {
						e.elements.items.css("overflow", "scroll");
						e.elements.outerWrapper.width(9e4);
						e.finalWidth = e.elements.items.width();
						e.elements.items.css("overflow", "");
						e.elements.outerWrapper.width("")
					}
					e.elements.items.width(e.finalWidth).height() > i && e.elements.items.height(i);
					t.removeClass(e.classes.tempshow)
				},
				isInViewport: function() {
					var e = this;
					if (e.options.forceRenderAbove === true) e.elements.outerWrapper.addClass(e.classes.above);
					else if (e.options.forceRenderBelow === true) e.elements.outerWrapper.addClass(e.classes.below);
					else {
						var t = u.scrollTop();
						var i = u.height();
						var n = e.elements.outerWrapper.offset().top;
						var s = e.elements.outerWrapper.outerHeight();
						var a = n + s + e.itemsHeight <= t + i;
						var o = n - e.itemsHeight > t;
						var r = !a && o;
						var l = !r;
						e.elements.outerWrapper.toggleClass(e.classes.above, r);
						e.elements.outerWrapper.toggleClass(e.classes.below, l)
					}
				},
				detectItemVisibility: function(e) {
					var t = this;
					var i = t.$li.filter("[data-index]");
					if (t.state.multiple) {
						e = h.isArray(e) && e.length === 0 ? 0 : e;
						e = h.isArray(e) ? Math.min.apply(Math, e) : e
					}
					var n = i.eq(e).outerHeight();
					var s = i[e].offsetTop;
					var a = t.elements.itemsScroll.scrollTop();
					var o = s + n * 2;
					t.elements.itemsScroll.scrollTop(o > a + t.itemsHeight ? o - t.itemsHeight : s - n < a ? s - n : a)
				},
				open: function(e) {
					var s = this;
					if (s.options.nativeOnMobile && s.utils.isMobile()) return false;
					s.utils.triggerCallback("BeforeOpen", s);
					if (e) {
						e.preventDefault();
						if (s.options.stopPropagation) e.stopPropagation()
					}
					if (s.state.enabled) {
						s.setOptionsDimensions();
						h("." + s.classes.hideselect, "." + s.classes.open).children()[c]("close");
						s.state.opened = true;
						s.itemsHeight = s.elements.items.outerHeight();
						s.itemsInnerHeight = s.elements.items.height();
						s.elements.outerWrapper.addClass(s.classes.open);
						s.elements.input.val("");
						if (e && e.type !== "focusin") s.elements.input.focus();
						setTimeout(function() {
							t.on("click" + i, h.proxy(s.close, s)).on("scroll" + i, h.proxy(s.isInViewport, s))
						}, 1);
						s.isInViewport();
						if (s.options.preventWindowScroll) t.on("mousewheel" + i + " DOMMouseScroll" + i, "." + s.classes.scroll, function(e) {
							var t = e.originalEvent;
							var i = h(this).scrollTop();
							var n = 0;
							if ("detail" in t) n = t.detail * -1;
							if ("wheelDelta" in t) n = t.wheelDelta;
							if ("wheelDeltaY" in t) n = t.wheelDeltaY;
							if ("deltaY" in t) n = t.deltaY * -1;
							if (i === this.scrollHeight - s.itemsInnerHeight && n < 0 || i === 0 && n > 0) e.preventDefault()
						});
						s.detectItemVisibility(s.state.selectedIdx);
						s.highlight(s.state.multiple ? -1 : s.state.selectedIdx);
						s.utils.triggerCallback("Open", s)
					}
				},
				close: function() {
					var e = this;
					e.utils.triggerCallback("BeforeClose", e);
					t.off(i);
					e.elements.outerWrapper.removeClass(e.classes.open);
					e.state.opened = false;
					e.utils.triggerCallback("Close", e)
				},
				change: function() {
					var i = this;
					i.utils.triggerCallback("BeforeChange", i);
					if (i.state.multiple) {
						h.each(i.lookupItems, function(e) {
							i.lookupItems[e].selected = false;
							i.$element.find("option").prop("selected", false)
						});
						h.each(i.state.selectedIdx, function(e, t) {
							i.lookupItems[t].selected = true;
							i.$element.find("option").eq(t).prop("selected", true)
						});
						i.state.currValue = i.state.selectedIdx;
						i.setLabel();
						i.utils.triggerCallback("Change", i)
					} else if (i.state.currValue !== i.state.selectedIdx) {
						i.$element.prop("selectedIndex", i.state.currValue = i.state.selectedIdx).data("value", i.lookupItems[i.state.selectedIdx].text);
						i.setLabel();
						i.utils.triggerCallback("Change", i)
					}
				},
				highlight: function(e) {
					var t = this;
					var i = t.$li.filter("[data-index]").removeClass("highlighted");
					t.utils.triggerCallback("BeforeHighlight", t);
					if (e === undefined || e === -1 || t.lookupItems[e].disabled) return;
					i.eq(t.state.highlightedIdx = e).addClass("highlighted");
					t.detectItemVisibility(e);
					t.utils.triggerCallback("Highlight", t)
				},
				select: function(e) {
					var t = this;
					var i = t.$li.filter("[data-index]");
					t.utils.triggerCallback("BeforeSelect", t, e);
					if (e === undefined || e === -1 || t.lookupItems[e].disabled) return;
					if (t.state.multiple) {
						t.state.selectedIdx = h.isArray(t.state.selectedIdx) ? t.state.selectedIdx : [t.state.selectedIdx];
						var n = h.inArray(e, t.state.selectedIdx);
						if (n !== -1) t.state.selectedIdx.splice(n, 1);
						else t.state.selectedIdx.push(e);
						i.removeClass("selected").filter(function(e) {
							return h.inArray(e, t.state.selectedIdx) !== -1
						}).addClass("selected")
					} else i.removeClass("selected").eq(t.state.selectedIdx = e).addClass("selected");
					if (!t.state.multiple || !t.options.multiple.keepMenuOpen) t.close();
					t.change();
					t.utils.triggerCallback("Select", t, e)
				},
				destroy: function(e) {
					var t = this;
					if (t.state && t.state.enabled) {
						t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove();
						if (!e) t.$element.removeData(c).removeData("value");
						t.$element.prop("tabindex", t.originalTabindex).off(i).off(t.eventTriggers).unwrap().unwrap();
						t.state.enabled = false
					}
				}
			}, h.fn[c] = function(t) {
				return this.each(function() {
					var e = h.data(this, c);
					if (e && !e.disableOnMobile) typeof t === "string" && e[t] ? e[t]() : e.init(t);
					else h.data(this, c, new a(this, t))
				})
			}, h.fn[c].defaults = {
				onChange: function(e) {
					h(e).change()
				},
				maxHeight: 300,
				keySearchTimeout: 500,
				arrowButtonMarkup: '<b class="button">&#x25be;</b>',
				disableOnMobile: false,
				nativeOnMobile: true,
				openOnFocus: true,
				openOnHover: false,
				hoverIntentTimeout: 500,
				expandToItemText: false,
				responsive: false,
				preventWindowScroll: true,
				inheritOriginalWidth: false,
				allowWrap: true,
				forceRenderAbove: false,
				forceRenderBelow: false,
				stopPropagation: true,
				optionsItemBuilder: "{text}",
				labelBuilder: "{text}",
				listBuilder: false,
				keys: {
					previous: [37, 38],
					next: [39, 40],
					select: [9, 13, 27],
					open: [13, 32, 37, 38, 39, 40],
					close: [9, 27]
				},
				customClass: {
					prefix: c,
					camelCase: false
				},
				multiple: {
					separator: ", ",
					keepMenuOpen: true,
					maxLabelEntries: false
				}
			}
		}) ? n.apply(t, i) : n) && (e.exports = t)
	},
	79: function(e, t, i) {
		function n(e) {
			return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		$(document).on("click", ".add-item-to-shoppingcart", function() {
			var e = "Unknown",
				t = "Unknown",
				i = $(this);
			"undefined" !== n(i.attr("data-amp-location")) && !1 !== i.attr("data-amp-location") && (e = i.attr("data-amp-location")), "undefined" !== n(i.attr("data-user-status")) && !1 !== i.attr("data-user-status") && (t = i.attr("data-user-status")), "undefined" !== i.attr("data-price") && !1 !== i.attr("data-price") && "undefined" !== i.attr("data-currency") && !1 !== i.attr("data-currency") && "undefined" !== i.attr("data-language") && !1 !== i.attr("data-language") && "undefined" !== i.attr("data-rating") && !1 !== i.attr("data-rating") && "undefined" !== i.attr("data-downloads") && !1 !== i.attr("data-downloads") && "undefined" !== i.attr("data-views") && !1 !== i.attr("data-views") && "undefined" !== i.attr("data-rating") && !1 !== i.attr("data-rating") && "undefined" !== i.attr("data-content-contained-amount") && !1 !== i.attr("data-content-contained-amount") ? amplitude.getInstance().logEvent("Shopping Cart Item Added", {
				location: e,
				item_type: i.attr("data-type"),
				is_logged_in: t,
				country_seller: i.data("country-seller"),
				price: i.data("price"),
				currency: i.data("currency"),
				language: i.data("language"),
				num_downloads: i.data("downloads"),
				rating: i.data("rating"),
				contained_amount: i.data("content-contained-amount"),
				content_ids: [{
					content_id: i.data("id"),
					content_type: i.attr("data-type")
				}]
			}) : amplitude.getInstance().logEvent("Shopping Cart Item Added", {
				location: e,
				item_type: i.attr("data-type"),
				is_logged_in: t,
				country_seller: i.data("country-seller"),
				content_ids: [{
					content_id: i.data("id"),
					content_type: i.attr("data-type")
				}]
			})
		})
	},
	8: function(ln, un, e) {
		var cn;
		! function(e, t) {
			"use strict";
			"object" == typeof ln.exports ? ln.exports = e.document ? t(e, !0) : function(e) {
				if (e.document) return t(e);
				throw new Error("jQuery requires a window with a document")
			} : t(e)
		}("undefined" != typeof window ? window : this, function(x, H) {
			"use strict";

			function b(e) {
				return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
			}

			function L(e) {
				return null != e && e === e.window
			}
			var t = [],
				N = Object.getPrototypeOf,
				r = t.slice,
				R = t.flat ? function(e) {
					return t.flat.call(e)
				} : function(e) {
					return t.concat.apply([], e)
				},
				j = t.push,
				y = t.indexOf,
				Y = {},
				z = Y.toString,
				B = Y.hasOwnProperty,
				W = B.toString,
				q = W.call(Object),
				m = {},
				w = x.document,
				U = {
					type: !0,
					src: !0,
					nonce: !0,
					noModule: !0
				};

			function V(e, t, i) {
				var n, s, a = (i = i || w).createElement("script");
				if (a.text = e, t)
					for (n in U)(s = t[n] || t.getAttribute && t.getAttribute(n)) && a.setAttribute(n, s);
				i.head.appendChild(a).parentNode.removeChild(a)
			}

			function G(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[z.call(e)] || "object" : typeof e
			}
			var X = /HTML$/i,
				D = function(e, t) {
					return new D.fn.init(e, t)
				};

			function K(e) {
				var t = !!e && "length" in e && e.length,
					i = G(e);
				return !b(e) && !L(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
			}

			function _(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			}
			D.fn = D.prototype = {
				jquery: "3.7.1",
				constructor: D,
				length: 0,
				toArray: function() {
					return r.call(this)
				},
				get: function(e) {
					return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
				},
				pushStack: function(e) {
					e = D.merge(this.constructor(), e);
					return e.prevObject = this, e
				},
				each: function(e) {
					return D.each(this, e)
				},
				map: function(i) {
					return this.pushStack(D.map(this, function(e, t) {
						return i.call(e, t, e)
					}))
				},
				slice: function() {
					return this.pushStack(r.apply(this, arguments))
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				even: function() {
					return this.pushStack(D.grep(this, function(e, t) {
						return (t + 1) % 2
					}))
				},
				odd: function() {
					return this.pushStack(D.grep(this, function(e, t) {
						return t % 2
					}))
				},
				eq: function(e) {
					var t = this.length,
						e = +e + (e < 0 ? t : 0);
					return this.pushStack(0 <= e && e < t ? [this[e]] : [])
				},
				end: function() {
					return this.prevObject || this.constructor()
				},
				push: j,
				sort: t.sort,
				splice: t.splice
			}, D.extend = D.fn.extend = function() {
				var e, t, i, n, s, a = arguments[0] || {},
					o = 1,
					r = arguments.length,
					l = !1;
				for ("boolean" == typeof a && (l = a, a = arguments[o] || {}, o++), "object" == typeof a || b(a) || (a = {}), o === r && (a = this, o--); o < r; o++)
					if (null != (e = arguments[o]))
						for (t in e) i = e[t], "__proto__" !== t && a !== i && (l && i && (D.isPlainObject(i) || (n = Array.isArray(i))) ? (s = a[t], s = n && !Array.isArray(s) ? [] : n || D.isPlainObject(s) ? s : {}, n = !1, a[t] = D.extend(l, s, i)) : void 0 !== i && (a[t] = i));
				return a
			}, D.extend({
				expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function(e) {
					throw new Error(e)
				},
				noop: function() {},
				isPlainObject: function(e) {
					return !(!e || "[object Object]" !== z.call(e) || (e = N(e)) && ("function" != typeof(e = B.call(e, "constructor") && e.constructor) || W.call(e) !== q))
				},
				isEmptyObject: function(e) {
					for (var t in e) return !1;
					return !0
				},
				globalEval: function(e, t, i) {
					V(e, {
						nonce: t && t.nonce
					}, i)
				},
				each: function(e, t) {
					var i, n = 0;
					if (K(e))
						for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
					else
						for (n in e)
							if (!1 === t.call(e[n], n, e[n])) break;
					return e
				},
				text: function(e) {
					var t, i = "",
						n = 0,
						s = e.nodeType;
					if (!s)
						for (; t = e[n++];) i += D.text(t);
					return 1 === s || 11 === s ? e.textContent : 9 === s ? e.documentElement.textContent : 3 === s || 4 === s ? e.nodeValue : i
				},
				makeArray: function(e, t) {
					t = t || [];
					return null != e && (K(Object(e)) ? D.merge(t, "string" == typeof e ? [e] : e) : j.call(t, e)), t
				},
				inArray: function(e, t, i) {
					return null == t ? -1 : y.call(t, e, i)
				},
				isXMLDoc: function(e) {
					var t = e && e.namespaceURI,
						e = e && (e.ownerDocument || e).documentElement;
					return !X.test(t || e && e.nodeName || "HTML")
				},
				merge: function(e, t) {
					for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
					return e.length = s, e
				},
				grep: function(e, t, i) {
					for (var n = [], s = 0, a = e.length, o = !i; s < a; s++) !t(e[s], s) != o && n.push(e[s]);
					return n
				},
				map: function(e, t, i) {
					var n, s, a = 0,
						o = [];
					if (K(e))
						for (n = e.length; a < n; a++) null != (s = t(e[a], a, i)) && o.push(s);
					else
						for (a in e) null != (s = t(e[a], a, i)) && o.push(s);
					return R(o)
				},
				guid: 1,
				support: m
			}), "function" == typeof Symbol && (D.fn[Symbol.iterator] = t[Symbol.iterator]), D.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
				Y["[object " + t + "]"] = t.toLowerCase()
			});
			var Z = t.pop,
				Q = t.sort,
				J = t.splice,
				i = "[\\x20\\t\\r\\n\\f]",
				ee = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
				te = (D.contains = function(e, t) {
					t = t && t.parentNode;
					return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
				}, /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);

			function ie(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			}
			D.escapeSelector = function(e) {
				return (e + "").replace(te, ie)
			};
			var ne, C, se, ae, oe, k, n, S, d, re, s = w,
				le = j,
				T = le,
				A = D.expando,
				E = 0,
				ue = 0,
				ce = Ee(),
				he = Ee(),
				de = Ee(),
				fe = Ee(),
				pe = function(e, t) {
					return e === t && (oe = !0), 0
				},
				me = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				e = "(?:\\\\[\\da-fA-F]{1,6}" + i + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
				a = "\\[" + i + "*(" + e + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + e + "))|)" + i + "*\\]",
				o = ":(" + e + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + a + ")*)|.*)\\)|)",
				ge = new RegExp(i + "+", "g"),
				ve = new RegExp("^" + i + "*," + i + "*"),
				be = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
				ye = new RegExp(i + "|>"),
				_e = new RegExp(o),
				xe = new RegExp("^" + e + "$"),
				we = {
					ID: new RegExp("^#(" + e + ")"),
					CLASS: new RegExp("^\\.(" + e + ")"),
					TAG: new RegExp("^(" + e + "|[*])"),
					ATTR: new RegExp("^" + a),
					PSEUDO: new RegExp("^" + o),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + me + ")$", "i"),
					needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
				},
				De = /^(?:input|select|textarea|button)$/i,
				Ce = /^h\d$/i,
				ke = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				Se = /[+~]/,
				h = new RegExp("\\\\[\\da-fA-F]{1,6}" + i + "?|\\\\([^\\r\\n\\f])", "g"),
				f = function(e, t) {
					e = "0x" + e.slice(1) - 65536;
					return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
				},
				Te = function() {
					Ie()
				},
				Ae = Ne(function(e) {
					return !0 === e.disabled && _(e, "fieldset")
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				T.apply(t = r.call(s.childNodes), s.childNodes), t[s.childNodes.length].nodeType
			} catch (e) {
				T = {
					apply: function(e, t) {
						le.apply(e, r.call(t))
					},
					call: function(e) {
						le.apply(e, r.call(arguments, 1))
					}
				}
			}

			function F(t, e, i, n) {
				var s, a, o, r, l, u, c = e && e.ownerDocument,
					h = e ? e.nodeType : 9;
				if (i = i || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return i;
				if (!n && (Ie(e), e = e || k, S)) {
					if (11 !== h && (r = ke.exec(t)))
						if (s = r[1]) {
							if (9 === h) {
								if (!(u = e.getElementById(s))) return i;
								if (u.id === s) return T.call(i, u), i
							} else if (c && (u = c.getElementById(s)) && F.contains(e, u) && u.id === s) return T.call(i, u), i
						} else {
							if (r[2]) return T.apply(i, e.getElementsByTagName(t)), i;
							if ((s = r[3]) && e.getElementsByClassName) return T.apply(i, e.getElementsByClassName(s)), i
						} if (!(fe[t + " "] || d && d.test(t))) {
						if (u = t, c = e, 1 === h && (ye.test(t) || be.test(t))) {
							for ((c = Se.test(t) && Me(e.parentNode) || e) == e && m.scope || ((o = e.getAttribute("id")) ? o = D.escapeSelector(o) : e.setAttribute("id", o = A)), a = (l = He(t)).length; a--;) l[a] = (o ? "#" + o : ":scope") + " " + Le(l[a]);
							u = l.join(",")
						}
						try {
							return T.apply(i, c.querySelectorAll(u)), i
						} catch (e) {
							fe(t, !0)
						} finally {
							o === A && e.removeAttribute("id")
						}
					}
				}
				return We(t.replace(ee, "$1"), e, i, n)
			}

			function Ee() {
				var i = [];

				function n(e, t) {
					return i.push(e + " ") > C.cacheLength && delete n[i.shift()], n[e + " "] = t
				}
				return n
			}

			function l(e) {
				return e[A] = !0, e
			}

			function Fe(e) {
				var t = k.createElement("fieldset");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t)
				}
			}

			function Pe(t) {
				return function(e) {
					return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
				}
			}

			function $e(o) {
				return l(function(a) {
					return a = +a, l(function(e, t) {
						for (var i, n = o([], e.length, a), s = n.length; s--;) e[i = n[s]] && (e[i] = !(t[i] = e[i]))
					})
				})
			}

			function Me(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}

			function Ie(e) {
				var e = e ? e.ownerDocument || e : s;
				return e != k && 9 === e.nodeType && e.documentElement && (n = (k = e).documentElement, S = !D.isXMLDoc(k), re = n.matches || n.webkitMatchesSelector || n.msMatchesSelector, n.msMatchesSelector && s != k && (e = k.defaultView) && e.top !== e && e.addEventListener("unload", Te), m.getById = Fe(function(e) {
					return n.appendChild(e).id = D.expando, !k.getElementsByName || !k.getElementsByName(D.expando).length
				}), m.disconnectedMatch = Fe(function(e) {
					return re.call(e, "*")
				}), m.scope = Fe(function() {
					return k.querySelectorAll(":scope")
				}), m.cssHas = Fe(function() {
					try {
						k.querySelector(":has(*,:jqfake)")
					} catch (e) {
						return 1
					}
				}), m.getById ? (C.filter.ID = function(e) {
					var t = e.replace(h, f);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, C.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && S) return (t = t.getElementById(e)) ? [t] : []
				}) : (C.filter.ID = function(e) {
					var t = e.replace(h, f);
					return function(e) {
						e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return e && e.value === t
					}
				}, C.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && S) {
						var i, n, s, a = t.getElementById(e);
						if (a) {
							if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
							for (s = t.getElementsByName(e), n = 0; a = s[n++];)
								if ((i = a.getAttributeNode("id")) && i.value === e) return [a]
						}
						return []
					}
				}), C.find.TAG = function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
				}, C.find.CLASS = function(e, t) {
					if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
				}, d = [], Fe(function(e) {
					var t;
					n.appendChild(e).innerHTML = "<a id='" + A + "' href='' disabled='disabled'></a><select id='" + A + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + i + "*(?:value|" + me + ")"), e.querySelectorAll("[id~=" + A + "-]").length || d.push("~="), e.querySelectorAll("a#" + A + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = k.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), n.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = k.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + i + "*name" + i + "*=" + i + "*(?:''|\"\")")
				}), m.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), pe = function(e, t) {
					var i;
					return e === t ? (oe = !0, 0) : (i = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === i ? e === k || e.ownerDocument == s && F.contains(s, e) ? -1 : t === k || t.ownerDocument == s && F.contains(s, t) ? 1 : ae ? y.call(ae, e) - y.call(ae, t) : 0 : 4 & i ? -1 : 1)
				}), k
			}
			for (ne in F.matches = function(e, t) {
					return F(e, null, null, t)
				}, F.matchesSelector = function(e, t) {
					if (Ie(e), S && !fe[t + " "] && (!d || !d.test(t))) try {
						var i = re.call(e, t);
						if (i || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
					} catch (e) {
						fe(t, !0)
					}
					return 0 < F(t, k, null, [e]).length
				}, F.contains = function(e, t) {
					return (e.ownerDocument || e) != k && Ie(e), D.contains(e, t)
				}, F.attr = function(e, t) {
					(e.ownerDocument || e) != k && Ie(e);
					var i = C.attrHandle[t.toLowerCase()],
						i = i && B.call(C.attrHandle, t.toLowerCase()) ? i(e, t, !S) : void 0;
					return void 0 !== i ? i : e.getAttribute(t)
				}, F.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, D.uniqueSort = function(e) {
					var t, i = [],
						n = 0,
						s = 0;
					if (oe = !m.sortStable, ae = !m.sortStable && r.call(e, 0), Q.call(e, pe), oe) {
						for (; t = e[s++];) t === e[s] && (n = i.push(s));
						for (; n--;) J.call(e, i[n], 1)
					}
					return ae = null, e
				}, D.fn.uniqueSort = function() {
					return this.pushStack(D.uniqueSort(r.apply(this)))
				}, (C = D.expr = {
					cacheLength: 50,
					createPseudo: l,
					match: we,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(h, f), e[3] = (e[3] || e[4] || e[5] || "").replace(h, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || F.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && F.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, i = !e[6] && e[2];
							return we.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && _e.test(i) && (t = (t = He(i, !0)) && i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(h, f).toLowerCase();
							return "*" === e ? function() {
								return !0
							} : function(e) {
								return _(e, t)
							}
						},
						CLASS: function(e) {
							var t = ce[e + " "];
							return t || (t = new RegExp("(^|" + i + ")" + e + "(" + i + "|$)")) && ce(e, function(e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function(t, i, n) {
							return function(e) {
								e = F.attr(e, t);
								return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === n : "!=" === i ? e !== n : "^=" === i ? n && 0 === e.indexOf(n) : "*=" === i ? n && -1 < e.indexOf(n) : "$=" === i ? n && e.slice(-n.length) === n : "~=" === i ? -1 < (" " + e.replace(ge, " ") + " ").indexOf(n) : "|=" === i && (e === n || e.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function(f, e, t, p, m) {
							var g = "nth" !== f.slice(0, 3),
								v = "last" !== f.slice(-4),
								b = "of-type" === e;
							return 1 === p && 0 === m ? function(e) {
								return !!e.parentNode
							} : function(e, t, i) {
								var n, s, a, o, r, l = g != v ? "nextSibling" : "previousSibling",
									u = e.parentNode,
									c = b && e.nodeName.toLowerCase(),
									h = !i && !b,
									d = !1;
								if (u) {
									if (g) {
										for (; l;) {
											for (a = e; a = a[l];)
												if (b ? _(a, c) : 1 === a.nodeType) return !1;
											r = l = "only" === f && !r && "nextSibling"
										}
										return !0
									}
									if (r = [v ? u.firstChild : u.lastChild], v && h) {
										for (d = (o = (n = (s = u[A] || (u[A] = {}))[f] || [])[0] === E && n[1]) && n[2], a = o && u.childNodes[o]; a = ++o && a && a[l] || (d = o = 0, r.pop());)
											if (1 === a.nodeType && ++d && a === e) {
												s[f] = [E, o, d];
												break
											}
									} else if (!1 === (d = h ? o = (n = (s = e[A] || (e[A] = {}))[f] || [])[0] === E && n[1] : d))
										for (;
											(a = ++o && a && a[l] || (d = o = 0, r.pop())) && ((b ? !_(a, c) : 1 !== a.nodeType) || !++d || (h && ((s = a[A] || (a[A] = {}))[f] = [E, d]), a !== e)););
									return (d -= m) === p || d % p == 0 && 0 <= d / p
								}
							}
						},
						PSEUDO: function(e, a) {
							var t, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || F.error("unsupported pseudo: " + e);
							return o[A] ? o(a) : 1 < o.length ? (t = [e, e, "", a], C.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
								for (var i, n = o(e, a), s = n.length; s--;) e[i = y.call(e, n[s])] = !(t[i] = n[s])
							}) : function(e) {
								return o(e, 0, t)
							}) : o
						}
					},
					pseudos: {
						not: l(function(e) {
							var n = [],
								s = [],
								r = Be(e.replace(ee, "$1"));
							return r[A] ? l(function(e, t, i, n) {
								for (var s, a = r(e, null, n, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
							}) : function(e, t, i) {
								return n[0] = e, r(n, null, i, s), n[0] = null, !s.pop()
							}
						}),
						has: l(function(t) {
							return function(e) {
								return 0 < F(t, e).length
							}
						}),
						contains: l(function(t) {
							return t = t.replace(h, f),
								function(e) {
									return -1 < (e.textContent || D.text(e)).indexOf(t)
								}
						}),
						lang: l(function(i) {
							return xe.test(i || "") || F.error("unsupported lang: " + i), i = i.replace(h, f).toLowerCase(),
								function(e) {
									var t;
									do {
										if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						}),
						target: function(e) {
							var t = x.location && x.location.hash;
							return t && t.slice(1) === e.id
						},
						root: function(e) {
							return e === n
						},
						focus: function(e) {
							return e === function() {
								try {
									return k.activeElement
								} catch (e) {}
							}() && k.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: Pe(!1),
						disabled: Pe(!0),
						checked: function(e) {
							return _(e, "input") && !!e.checked || _(e, "option") && !!e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e) {
							return !C.pseudos.empty(e)
						},
						header: function(e) {
							return Ce.test(e.nodeName)
						},
						input: function(e) {
							return De.test(e.nodeName)
						},
						button: function(e) {
							return _(e, "input") && "button" === e.type || _(e, "button")
						},
						text: function(e) {
							return _(e, "input") && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
						},
						first: $e(function() {
							return [0]
						}),
						last: $e(function(e, t) {
							return [t - 1]
						}),
						eq: $e(function(e, t, i) {
							return [i < 0 ? i + t : i]
						}),
						even: $e(function(e, t) {
							for (var i = 0; i < t; i += 2) e.push(i);
							return e
						}),
						odd: $e(function(e, t) {
							for (var i = 1; i < t; i += 2) e.push(i);
							return e
						}),
						lt: $e(function(e, t, i) {
							for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n;) e.push(n);
							return e
						}),
						gt: $e(function(e, t, i) {
							for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
							return e
						})
					}
				}).pseudos.nth = C.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) C.pseudos[ne] = function(t) {
				return function(e) {
					return _(e, "input") && e.type === t
				}
			}(ne);
			for (ne in {
					submit: !0,
					reset: !0
				}) C.pseudos[ne] = function(t) {
				return function(e) {
					return (_(e, "input") || _(e, "button")) && e.type === t
				}
			}(ne);

			function Oe() {}

			function He(e, t) {
				var i, n, s, a, o, r, l, u = he[e + " "];
				if (u) return t ? 0 : u.slice(0);
				for (o = e, r = [], l = C.preFilter; o;) {
					for (a in i && !(n = ve.exec(o)) || (n && (o = o.slice(n[0].length) || o), r.push(s = [])), i = !1, (n = be.exec(o)) && (i = n.shift(), s.push({
							value: i,
							type: n[0].replace(ee, " ")
						}), o = o.slice(i.length)), C.filter) !(n = we[a].exec(o)) || l[a] && !(n = l[a](n)) || (i = n.shift(), s.push({
						value: i,
						type: a,
						matches: n
					}), o = o.slice(i.length));
					if (!i) break
				}
				return t ? o.length : o ? F.error(e) : he(e, r).slice(0)
			}

			function Le(e) {
				for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
				return n
			}

			function Ne(o, e, t) {
				var r = e.dir,
					l = e.next,
					u = l || r,
					c = t && "parentNode" === u,
					h = ue++;
				return e.first ? function(e, t, i) {
					for (; e = e[r];)
						if (1 === e.nodeType || c) return o(e, t, i);
					return !1
				} : function(e, t, i) {
					var n, s, a = [E, h];
					if (i) {
						for (; e = e[r];)
							if ((1 === e.nodeType || c) && o(e, t, i)) return !0
					} else
						for (; e = e[r];)
							if (1 === e.nodeType || c)
								if (s = e[A] || (e[A] = {}), l && _(e, l)) e = e[r] || e;
								else {
									if ((n = s[u]) && n[0] === E && n[1] === h) return a[2] = n[2];
									if ((s[u] = a)[2] = o(e, t, i)) return !0
								} return !1
				}
			}

			function Re(s) {
				return 1 < s.length ? function(e, t, i) {
					for (var n = s.length; n--;)
						if (!s[n](e, t, i)) return !1;
					return !0
				} : s[0]
			}

			function je(e, t, i, n, s) {
				for (var a, o = [], r = 0, l = e.length, u = null != t; r < l; r++) !(a = e[r]) || i && !i(a, n, s) || (o.push(a), u && t.push(r));
				return o
			}

			function Ye(f, p, m, g, v, e) {
				return g && !g[A] && (g = Ye(g)), v && !v[A] && (v = Ye(v, e)), l(function(e, t, i, n) {
					var s, a, o, r, l = [],
						u = [],
						c = t.length,
						h = e || function(e, t, i) {
							for (var n = 0, s = t.length; n < s; n++) F(e, t[n], i);
							return i
						}(p || "*", i.nodeType ? [i] : i, []),
						d = !f || !e && p ? h : je(h, l, f, i, n);
					if (m ? m(d, r = v || (e ? f : c || g) ? [] : t, i, n) : r = d, g)
						for (s = je(r, u), g(s, [], i, n), a = s.length; a--;)(o = s[a]) && (r[u[a]] = !(d[u[a]] = o));
					if (e) {
						if (v || f) {
							if (v) {
								for (s = [], a = r.length; a--;)(o = r[a]) && s.push(d[a] = o);
								v(null, r = [], s, n)
							}
							for (a = r.length; a--;)(o = r[a]) && -1 < (s = v ? y.call(e, o) : l[a]) && (e[s] = !(t[s] = o))
						}
					} else r = je(r === t ? r.splice(c, r.length) : r), v ? v(null, t, r, n) : T.apply(t, r)
				})
			}

			function ze(g, v) {
				function e(e, t, i, n, s) {
					var a, o, r, l = 0,
						u = "0",
						c = e && [],
						h = [],
						d = se,
						f = e || y && C.find.TAG("*", s),
						p = E += null == d ? 1 : Math.random() || .1,
						m = f.length;
					for (s && (se = t == k || t || s); u !== m && null != (a = f[u]); u++) {
						if (y && a) {
							for (o = 0, t || a.ownerDocument == k || (Ie(a), i = !S); r = g[o++];)
								if (r(a, t || k, i)) {
									T.call(n, a);
									break
								} s && (E = p)
						}
						b && ((a = !r && a) && l--, e) && c.push(a)
					}
					if (l += u, b && u !== l) {
						for (o = 0; r = v[o++];) r(c, h, t, i);
						if (e) {
							if (0 < l)
								for (; u--;) c[u] || h[u] || (h[u] = Z.call(n));
							h = je(h)
						}
						T.apply(n, h), s && !e && 0 < h.length && 1 < l + v.length && D.uniqueSort(n)
					}
					return s && (E = p, se = d), c
				}
				var b = 0 < v.length,
					y = 0 < g.length;
				return b ? l(e) : e
			}

			function Be(e, t) {
				var i, n = [],
					s = [],
					a = de[e + " "];
				if (!a) {
					for (i = (t = t || He(e)).length; i--;)((a = function e(t) {
						for (var n, i, s, a = t.length, o = C.relative[t[0].type], r = o || C.relative[" "], l = o ? 1 : 0, u = Ne(function(e) {
								return e === n
							}, r, !0), c = Ne(function(e) {
								return -1 < y.call(n, e)
							}, r, !0), h = [function(e, t, i) {
								return e = !o && (i || t != se) || ((n = t).nodeType ? u : c)(e, t, i), n = null, e
							}]; l < a; l++)
							if (i = C.relative[t[l].type]) h = [Ne(Re(h), i)];
							else {
								if ((i = C.filter[t[l].type].apply(null, t[l].matches))[A]) {
									for (s = ++l; s < a && !C.relative[t[s].type]; s++);
									return Ye(1 < l && Re(h), 1 < l && Le(t.slice(0, l - 1).concat({
										value: " " === t[l - 2].type ? "*" : ""
									})).replace(ee, "$1"), i, l < s && e(t.slice(l, s)), s < a && e(t = t.slice(s)), s < a && Le(t))
								}
								h.push(i)
							} return Re(h)
					}(t[i]))[A] ? n : s).push(a);
					(a = de(e, ze(s, n))).selector = e
				}
				return a
			}

			function We(e, t, i, n) {
				var s, a, o, r, l, u = "function" == typeof e && e,
					c = !n && He(e = u.selector || e);
				if (i = i || [], 1 === c.length) {
					if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (o = a[0]).type && 9 === t.nodeType && S && C.relative[a[1].type]) {
						if (!(t = (C.find.ID(o.matches[0].replace(h, f), t) || [])[0])) return i;
						u && (t = t.parentNode), e = e.slice(a.shift().value.length)
					}
					for (s = we.needsContext.test(e) ? 0 : a.length; s-- && (o = a[s], !C.relative[r = o.type]);)
						if ((l = C.find[r]) && (n = l(o.matches[0].replace(h, f), Se.test(a[0].type) && Me(t.parentNode) || t))) {
							if (a.splice(s, 1), e = n.length && Le(a)) break;
							return T.apply(i, n), i
						}
				}
				return (u || Be(e, c))(n, t, !S, i, !t || Se.test(e) && Me(t.parentNode) || t), i
			}
			Oe.prototype = C.filters = C.pseudos, C.setFilters = new Oe, m.sortStable = A.split("").sort(pe).join("") === A, Ie(), m.sortDetached = Fe(function(e) {
				return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
			}), D.find = F, D.expr[":"] = D.expr.pseudos, D.unique = D.uniqueSort, F.compile = Be, F.select = We, F.setDocument = Ie, F.tokenize = He, F.escape = D.escapeSelector, F.getText = D.text, F.isXML = D.isXMLDoc, F.selectors = D.expr, F.support = D.support, F.uniqueSort = D.uniqueSort;

			function qe(e, t, i) {
				for (var n = [], s = void 0 !== i;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (s && D(e).is(i)) break;
						n.push(e)
					} return n
			}

			function Ue(e, t) {
				for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
				return i
			}
			var Ve = D.expr.match.needsContext,
				Ge = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

			function Xe(e, i, n) {
				return b(i) ? D.grep(e, function(e, t) {
					return !!i.call(e, t, e) !== n
				}) : i.nodeType ? D.grep(e, function(e) {
					return e === i !== n
				}) : "string" != typeof i ? D.grep(e, function(e) {
					return -1 < y.call(i, e) !== n
				}) : D.filter(i, e, n)
			}
			D.filter = function(e, t, i) {
				var n = t[0];
				return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? D.find.matchesSelector(n, e) ? [n] : [] : D.find.matches(e, D.grep(t, function(e) {
					return 1 === e.nodeType
				}))
			}, D.fn.extend({
				find: function(e) {
					var t, i, n = this.length,
						s = this;
					if ("string" != typeof e) return this.pushStack(D(e).filter(function() {
						for (t = 0; t < n; t++)
							if (D.contains(s[t], this)) return !0
					}));
					for (i = this.pushStack([]), t = 0; t < n; t++) D.find(e, s[t], i);
					return 1 < n ? D.uniqueSort(i) : i
				},
				filter: function(e) {
					return this.pushStack(Xe(this, e || [], !1))
				},
				not: function(e) {
					return this.pushStack(Xe(this, e || [], !0))
				},
				is: function(e) {
					return !!Xe(this, "string" == typeof e && Ve.test(e) ? D(e) : e || [], !1).length
				}
			});
			var Ke, Ze = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
				Qe = ((D.fn.init = function(e, t, i) {
					if (e) {
						if (i = i || Ke, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== i.ready ? i.ready(e) : e(D) : D.makeArray(e, this);
						if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Ze.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || i : this.constructor(t)).find(e);
						if (n[1]) {
							if (t = t instanceof D ? t[0] : t, D.merge(this, D.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), Ge.test(n[1]) && D.isPlainObject(t))
								for (var n in t) b(this[n]) ? this[n](t[n]) : this.attr(n, t[n])
						} else(i = w.getElementById(n[2])) && (this[0] = i, this.length = 1)
					}
					return this
				}).prototype = D.fn, Ke = D(w), /^(?:parents|prev(?:Until|All))/),
				Je = {
					children: !0,
					contents: !0,
					next: !0,
					prev: !0
				};

			function et(e, t) {
				for (;
					(e = e[t]) && 1 !== e.nodeType;);
				return e
			}
			D.fn.extend({
				has: function(e) {
					var t = D(e, this),
						i = t.length;
					return this.filter(function() {
						for (var e = 0; e < i; e++)
							if (D.contains(this, t[e])) return !0
					})
				},
				closest: function(e, t) {
					var i, n = 0,
						s = this.length,
						a = [],
						o = "string" != typeof e && D(e);
					if (!Ve.test(e))
						for (; n < s; n++)
							for (i = this[n]; i && i !== t; i = i.parentNode)
								if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && D.find.matchesSelector(i, e))) {
									a.push(i);
									break
								} return this.pushStack(1 < a.length ? D.uniqueSort(a) : a)
				},
				index: function(e) {
					return e ? "string" == typeof e ? y.call(D(e), this[0]) : y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
				},
				add: function(e, t) {
					return this.pushStack(D.uniqueSort(D.merge(this.get(), D(e, t))))
				},
				addBack: function(e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
				}
			}), D.each({
				parent: function(e) {
					e = e.parentNode;
					return e && 11 !== e.nodeType ? e : null
				},
				parents: function(e) {
					return qe(e, "parentNode")
				},
				parentsUntil: function(e, t, i) {
					return qe(e, "parentNode", i)
				},
				next: function(e) {
					return et(e, "nextSibling")
				},
				prev: function(e) {
					return et(e, "previousSibling")
				},
				nextAll: function(e) {
					return qe(e, "nextSibling")
				},
				prevAll: function(e) {
					return qe(e, "previousSibling")
				},
				nextUntil: function(e, t, i) {
					return qe(e, "nextSibling", i)
				},
				prevUntil: function(e, t, i) {
					return qe(e, "previousSibling", i)
				},
				siblings: function(e) {
					return Ue((e.parentNode || {}).firstChild, e)
				},
				children: function(e) {
					return Ue(e.firstChild)
				},
				contents: function(e) {
					return null != e.contentDocument && N(e.contentDocument) ? e.contentDocument : (_(e, "template") && (e = e.content || e), D.merge([], e.childNodes))
				}
			}, function(n, s) {
				D.fn[n] = function(e, t) {
					var i = D.map(this, s, e);
					return (t = "Until" !== n.slice(-5) ? e : t) && "string" == typeof t && (i = D.filter(t, i)), 1 < this.length && (Je[n] || D.uniqueSort(i), Qe.test(n)) && i.reverse(), this.pushStack(i)
				}
			});
			var P = /[^\x20\t\r\n\f]+/g;

			function tt(e) {
				return e
			}

			function it(e) {
				throw e
			}

			function nt(e, t, i, n) {
				var s;
				try {
					e && b(s = e.promise) ? s.call(e).done(t).fail(i) : e && b(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
				} catch (e) {
					i.apply(void 0, [e])
				}
			}
			D.Callbacks = function(n) {
				var e, i;
				n = "string" == typeof n ? (e = n, i = {}, D.each(e.match(P) || [], function(e, t) {
					i[t] = !0
				}), i) : D.extend({}, n);

				function s() {
					for (r = r || n.once, o = a = !0; u.length; c = -1)
						for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && n.stopOnFalse && (c = l.length, t = !1);
					n.memory || (t = !1), a = !1, r && (l = t ? [] : "")
				}
				var a, t, o, r, l = [],
					u = [],
					c = -1,
					h = {
						add: function() {
							return l && (t && !a && (c = l.length - 1, u.push(t)), function i(e) {
								D.each(e, function(e, t) {
									b(t) ? n.unique && h.has(t) || l.push(t) : t && t.length && "string" !== G(t) && i(t)
								})
							}(arguments), t) && !a && s(), this
						},
						remove: function() {
							return D.each(arguments, function(e, t) {
								for (var i; - 1 < (i = D.inArray(t, l, i));) l.splice(i, 1), i <= c && c--
							}), this
						},
						has: function(e) {
							return e ? -1 < D.inArray(e, l) : 0 < l.length
						},
						empty: function() {
							return l = l && [], this
						},
						disable: function() {
							return r = u = [], l = t = "", this
						},
						disabled: function() {
							return !l
						},
						lock: function() {
							return r = u = [], t || a || (l = t = ""), this
						},
						locked: function() {
							return !!r
						},
						fireWith: function(e, t) {
							return r || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), a) || s(), this
						},
						fire: function() {
							return h.fireWith(this, arguments), this
						},
						fired: function() {
							return !!o
						}
					};
				return h
			}, D.extend({
				Deferred: function(e) {
					var a = [
							["notify", "progress", D.Callbacks("memory"), D.Callbacks("memory"), 2],
							["resolve", "done", D.Callbacks("once memory"), D.Callbacks("once memory"), 0, "resolved"],
							["reject", "fail", D.Callbacks("once memory"), D.Callbacks("once memory"), 1, "rejected"]
						],
						s = "pending",
						o = {
							state: function() {
								return s
							},
							always: function() {
								return r.done(arguments).fail(arguments), this
							},
							catch: function(e) {
								return o.then(null, e)
							},
							pipe: function() {
								var s = arguments;
								return D.Deferred(function(n) {
									D.each(a, function(e, t) {
										var i = b(s[t[4]]) && s[t[4]];
										r[t[1]](function() {
											var e = i && i.apply(this, arguments);
											e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
										})
									}), s = null
								}).promise()
							},
							then: function(t, i, n) {
								var l = 0;

								function u(s, a, o, r) {
									return function() {
										function e() {
											var e, t;
											if (!(s < l)) {
												if ((e = o.apply(i, n)) === a.promise()) throw new TypeError("Thenable self-resolution");
												t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? r ? t.call(e, u(l, a, tt, r), u(l, a, it, r)) : (l++, t.call(e, u(l, a, tt, r), u(l, a, it, r), u(l, a, tt, a.notifyWith))) : (o !== tt && (i = void 0, n = [e]), (r || a.resolveWith)(i, n))
											}
										}
										var i = this,
											n = arguments,
											t = r ? e : function() {
												try {
													e()
												} catch (e) {
													D.Deferred.exceptionHook && D.Deferred.exceptionHook(e, t.error), l <= s + 1 && (o !== it && (i = void 0, n = [e]), a.rejectWith(i, n))
												}
											};
										s ? t() : (D.Deferred.getErrorHook ? t.error = D.Deferred.getErrorHook() : D.Deferred.getStackHook && (t.error = D.Deferred.getStackHook()), x.setTimeout(t))
									}
								}
								return D.Deferred(function(e) {
									a[0][3].add(u(0, e, b(n) ? n : tt, e.notifyWith)), a[1][3].add(u(0, e, b(t) ? t : tt)), a[2][3].add(u(0, e, b(i) ? i : it))
								}).promise()
							},
							promise: function(e) {
								return null != e ? D.extend(e, o) : o
							}
						},
						r = {};
					return D.each(a, function(e, t) {
						var i = t[2],
							n = t[5];
						o[t[1]] = i.add, n && i.add(function() {
							s = n
						}, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), i.add(t[3].fire), r[t[0]] = function() {
							return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
						}, r[t[0] + "With"] = i.fireWith
					}), o.promise(r), e && e.call(r, r), r
				},
				when: function(e) {
					function t(t) {
						return function(e) {
							s[t] = this, a[t] = 1 < arguments.length ? r.call(arguments) : e, --i || o.resolveWith(s, a)
						}
					}
					var i = arguments.length,
						n = i,
						s = Array(n),
						a = r.call(arguments),
						o = D.Deferred();
					if (i <= 1 && (nt(e, o.done(t(n)).resolve, o.reject, !i), "pending" === o.state() || b(a[n] && a[n].then))) return o.then();
					for (; n--;) nt(a[n], t(n), o.reject);
					return o.promise()
				}
			});
			var st = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
				at = (D.Deferred.exceptionHook = function(e, t) {
					x.console && x.console.warn && e && st.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
				}, D.readyException = function(e) {
					x.setTimeout(function() {
						throw e
					})
				}, D.Deferred());

			function ot() {
				w.removeEventListener("DOMContentLoaded", ot), x.removeEventListener("load", ot), D.ready()
			}
			D.fn.ready = function(e) {
				return at.then(e).catch(function(e) {
					D.readyException(e)
				}), this
			}, D.extend({
				isReady: !1,
				readyWait: 1,
				ready: function(e) {
					(!0 === e ? --D.readyWait : D.isReady) || (D.isReady = !0) !== e && 0 < --D.readyWait || at.resolveWith(w, [D])
				}
			}), D.ready.then = at.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? x.setTimeout(D.ready) : (w.addEventListener("DOMContentLoaded", ot), x.addEventListener("load", ot));

			function c(e, t, i, n, s, a, o) {
				var r = 0,
					l = e.length,
					u = null == i;
				if ("object" === G(i))
					for (r in s = !0, i) c(e, t, r, i[r], !0, a, o);
				else if (void 0 !== n && (s = !0, b(n) || (o = !0), t = u ? o ? (t.call(e, n), null) : (u = t, function(e, t, i) {
						return u.call(D(e), i)
					}) : t))
					for (; r < l; r++) t(e[r], i, o ? n : n.call(e[r], r, t(e[r], i)));
				return s ? e : u ? t.call(e) : l ? t(e[0], i) : a
			}
			var rt = /^-ms-/,
				lt = /-([a-z])/g;

			function ut(e, t) {
				return t.toUpperCase()
			}

			function $(e) {
				return e.replace(rt, "ms-").replace(lt, ut)
			}

			function ct(e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			}

			function ht() {
				this.expando = D.expando + ht.uid++
			}
			ht.uid = 1, ht.prototype = {
				cache: function(e) {
					var t = e[this.expando];
					return t || (t = {}, ct(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
						value: t,
						configurable: !0
					}))), t
				},
				set: function(e, t, i) {
					var n, s = this.cache(e);
					if ("string" == typeof t) s[$(t)] = i;
					else
						for (n in t) s[$(n)] = t[n];
					return s
				},
				get: function(e, t) {
					return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
				},
				access: function(e, t, i) {
					return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
				},
				remove: function(e, t) {
					var i, n = e[this.expando];
					if (void 0 !== n) {
						if (void 0 !== t) {
							i = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in n ? [t] : t.match(P) || []).length;
							for (; i--;) delete n[t[i]]
						}
						void 0 !== t && !D.isEmptyObject(n) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
					}
				},
				hasData: function(e) {
					e = e[this.expando];
					return void 0 !== e && !D.isEmptyObject(e)
				}
			};
			var v = new ht,
				u = new ht,
				dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				ft = /[A-Z]/g;

			function pt(e, t, i) {
				var n, s;
				if (void 0 === i && 1 === e.nodeType)
					if (n = "data-" + t.replace(ft, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
						try {
							i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : dt.test(s) ? JSON.parse(s) : s)
						} catch (e) {}
						u.set(e, t, i)
					} else i = void 0;
				return i
			}
			D.extend({
				hasData: function(e) {
					return u.hasData(e) || v.hasData(e)
				},
				data: function(e, t, i) {
					return u.access(e, t, i)
				},
				removeData: function(e, t) {
					u.remove(e, t)
				},
				_data: function(e, t, i) {
					return v.access(e, t, i)
				},
				_removeData: function(e, t) {
					v.remove(e, t)
				}
			}), D.fn.extend({
				data: function(i, e) {
					var t, n, s, a = this[0],
						o = a && a.attributes;
					if (void 0 !== i) return "object" == typeof i ? this.each(function() {
						u.set(this, i)
					}) : c(this, function(e) {
						var t;
						if (a && void 0 === e) return void 0 !== (t = u.get(a, i)) || void 0 !== (t = pt(a, i)) ? t : void 0;
						this.each(function() {
							u.set(this, i, e)
						})
					}, null, e, 1 < arguments.length, null, !0);
					if (this.length && (s = u.get(a), 1 === a.nodeType) && !v.get(a, "hasDataAttrs")) {
						for (t = o.length; t--;) o[t] && 0 === (n = o[t].name).indexOf("data-") && (n = $(n.slice(5)), pt(a, n, s[n]));
						v.set(a, "hasDataAttrs", !0)
					}
					return s
				},
				removeData: function(e) {
					return this.each(function() {
						u.remove(this, e)
					})
				}
			}), D.extend({
				queue: function(e, t, i) {
					var n;
					if (e) return n = v.get(e, t = (t || "fx") + "queue"), i && (!n || Array.isArray(i) ? n = v.access(e, t, D.makeArray(i)) : n.push(i)), n || []
				},
				dequeue: function(e, t) {
					t = t || "fx";
					var i = D.queue(e, t),
						n = i.length,
						s = i.shift(),
						a = D._queueHooks(e, t);
					"inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete a.stop, s.call(e, function() {
						D.dequeue(e, t)
					}, a)), !n && a && a.empty.fire()
				},
				_queueHooks: function(e, t) {
					var i = t + "queueHooks";
					return v.get(e, i) || v.access(e, i, {
						empty: D.Callbacks("once memory").add(function() {
							v.remove(e, [t + "queue", i])
						})
					})
				}
			}), D.fn.extend({
				queue: function(t, i) {
					var e = 2;
					return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? D.queue(this[0], t) : void 0 === i ? this : this.each(function() {
						var e = D.queue(this, t, i);
						D._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && D.dequeue(this, t)
					})
				},
				dequeue: function(e) {
					return this.each(function() {
						D.dequeue(this, e)
					})
				},
				clearQueue: function(e) {
					return this.queue(e || "fx", [])
				},
				promise: function(e, t) {
					function i() {
						--s || a.resolveWith(o, [o])
					}
					var n, s = 1,
						a = D.Deferred(),
						o = this,
						r = this.length;
					for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = v.get(o[r], e + "queueHooks")) && n.empty && (s++, n.empty.add(i));
					return i(), a.promise(t)
				}
			});

			function mt(e, t) {
				return "none" === (e = t || e).style.display || "" === e.style.display && yt(e) && "none" === D.css(e, "display")
			}
			var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				gt = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
				vt = ["Top", "Right", "Bottom", "Left"],
				bt = w.documentElement,
				yt = function(e) {
					return D.contains(e.ownerDocument, e)
				},
				_t = {
					composed: !0
				};
			bt.getRootNode && (yt = function(e) {
				return D.contains(e.ownerDocument, e) || e.getRootNode(_t) === e.ownerDocument
			});

			function xt(e, t, i, n) {
				var s, a, o = 20,
					r = n ? function() {
						return n.cur()
					} : function() {
						return D.css(e, t, "")
					},
					l = r(),
					u = i && i[3] || (D.cssNumber[t] ? "" : "px"),
					c = e.nodeType && (D.cssNumber[t] || "px" !== u && +l) && gt.exec(D.css(e, t));
				if (c && c[3] !== u) {
					for (u = u || c[3], c = +(l /= 2) || 1; o--;) D.style(e, t, c + u), (1 - a) * (1 - (a = r() / l || .5)) <= 0 && (o = 0), c /= a;
					D.style(e, t, (c *= 2) + u), i = i || []
				}
				return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n) && (n.unit = u, n.start = c, n.end = s), s
			}
			var wt = {};

			function Dt(e, t) {
				for (var i, n, s, a, o, r = [], l = 0, u = e.length; l < u; l++)(n = e[l]).style && (i = n.style.display, t ? ("none" === i && (r[l] = v.get(n, "display") || null, r[l] || (n.style.display = "")), "" === n.style.display && mt(n) && (r[l] = (o = a = void 0, a = (s = n).ownerDocument, s = s.nodeName, (o = wt[s]) || (a = a.body.appendChild(a.createElement(s)), o = D.css(a, "display"), a.parentNode.removeChild(a), wt[s] = o = "none" === o ? "block" : o), o))) : "none" !== i && (r[l] = "none", v.set(n, "display", i)));
				for (l = 0; l < u; l++) null != r[l] && (e[l].style.display = r[l]);
				return e
			}
			D.fn.extend({
				show: function() {
					return Dt(this, !0)
				},
				hide: function() {
					return Dt(this)
				},
				toggle: function(e) {
					return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
						mt(this) ? D(this).show() : D(this).hide()
					})
				}
			});
			var Ct = /^(?:checkbox|radio)$/i,
				kt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
				St = /^$|^module$|\/(?:java|ecma)script/i,
				p = (a = w.createDocumentFragment().appendChild(w.createElement("div")), (o = w.createElement("input")).setAttribute("type", "radio"), o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), a.appendChild(o), m.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, a.innerHTML = "<option></option>", m.option = !!a.lastChild, {
					thead: [1, "<table>", "</table>"],
					col: [2, "<table><colgroup>", "</colgroup></table>"],
					tr: [2, "<table><tbody>", "</tbody></table>"],
					td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
					_default: [0, "", ""]
				});

			function g(e, t) {
				var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
				return void 0 === t || t && _(e, t) ? D.merge([e], i) : i
			}

			function Tt(e, t) {
				for (var i = 0, n = e.length; i < n; i++) v.set(e[i], "globalEval", !t || v.get(t[i], "globalEval"))
			}
			p.tbody = p.tfoot = p.colgroup = p.caption = p.thead, p.th = p.td, m.option || (p.optgroup = p.option = [1, "<select multiple='multiple'>", "</select>"]);
			var At = /<|&#?\w+;/;

			function Et(e, t, i, n, s) {
				for (var a, o, r, l, u, c = t.createDocumentFragment(), h = [], d = 0, f = e.length; d < f; d++)
					if ((a = e[d]) || 0 === a)
						if ("object" === G(a)) D.merge(h, a.nodeType ? [a] : a);
						else if (At.test(a)) {
					for (o = o || c.appendChild(t.createElement("div")), r = (kt.exec(a) || ["", ""])[1].toLowerCase(), r = p[r] || p._default, o.innerHTML = r[1] + D.htmlPrefilter(a) + r[2], u = r[0]; u--;) o = o.lastChild;
					D.merge(h, o.childNodes), (o = c.firstChild).textContent = ""
				} else h.push(t.createTextNode(a));
				for (c.textContent = "", d = 0; a = h[d++];)
					if (n && -1 < D.inArray(a, n)) s && s.push(a);
					else if (l = yt(a), o = g(c.appendChild(a), "script"), l && Tt(o), i)
					for (u = 0; a = o[u++];) St.test(a.type || "") && i.push(a);
				return c
			}
			var Ft = /^([^.]*)(?:\.(.+)|)/;

			function Pt() {
				return !0
			}

			function $t() {
				return !1
			}

			function Mt(e, t, i, n, s, a) {
				var o, r;
				if ("object" == typeof t) {
					for (r in "string" != typeof i && (n = n || i, i = void 0), t) Mt(e, r, i, n, t[r], a);
					return e
				}
				if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = $t;
				else if (!s) return e;
				return 1 === a && (o = s, (s = function(e) {
					return D().off(e), o.apply(this, arguments)
				}).guid = o.guid || (o.guid = D.guid++)), e.each(function() {
					D.event.add(this, t, s, n, i)
				})
			}

			function It(e, n, t) {
				t ? (v.set(e, n, !1), D.event.add(e, n, {
					namespace: !1,
					handler: function(e) {
						var t, i = v.get(this, n);
						if (1 & e.isTrigger && this[n]) {
							if (i)(D.event.special[n] || {}).delegateType && e.stopPropagation();
							else if (i = r.call(arguments), v.set(this, n, i), this[n](), t = v.get(this, n), v.set(this, n, !1), i !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
						} else i && (v.set(this, n, D.event.trigger(i[0], i.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Pt)
					}
				})) : void 0 === v.get(e, n) && D.event.add(e, n, Pt)
			}
			D.event = {
				global: {},
				add: function(t, e, i, n, s) {
					var a, o, r, l, u, c, h, d, f, p = v.get(t);
					if (ct(t))
						for (i.handler && (i = (a = i).handler, s = a.selector), s && D.find.matchesSelector(bt, s), i.guid || (i.guid = D.guid++), r = (r = p.events) || (p.events = Object.create(null)), o = (o = p.handle) || (p.handle = function(e) {
								return void 0 !== D && D.event.triggered !== e.type ? D.event.dispatch.apply(t, arguments) : void 0
							}), l = (e = (e || "").match(P) || [""]).length; l--;) h = f = (d = Ft.exec(e[l]) || [])[1], d = (d[2] || "").split(".").sort(), h && (u = D.event.special[h] || {}, h = (s ? u.delegateType : u.bindType) || h, u = D.event.special[h] || {}, f = D.extend({
							type: h,
							origType: f,
							data: n,
							handler: i,
							guid: i.guid,
							selector: s,
							needsContext: s && D.expr.match.needsContext.test(s),
							namespace: d.join(".")
						}, a), (c = r[h]) || ((c = r[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, d, o)) || t.addEventListener && t.addEventListener(h, o), u.add && (u.add.call(t, f), f.handler.guid || (f.handler.guid = i.guid)), s ? c.splice(c.delegateCount++, 0, f) : c.push(f), D.event.global[h] = !0)
				},
				remove: function(e, t, i, n, s) {
					var a, o, r, l, u, c, h, d, f, p, m, g = v.hasData(e) && v.get(e);
					if (g && (l = g.events)) {
						for (u = (t = (t || "").match(P) || [""]).length; u--;)
							if (f = m = (r = Ft.exec(t[u]) || [])[1], p = (r[2] || "").split(".").sort(), f) {
								for (h = D.event.special[f] || {}, d = l[f = (n ? h.delegateType : h.bindType) || f] || [], r = r[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = d.length; a--;) c = d[a], !s && m !== c.origType || i && i.guid !== c.guid || r && !r.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(a, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(e, c));
								o && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, g.handle) || D.removeEvent(e, f, g.handle), delete l[f])
							} else
								for (f in l) D.event.remove(e, f + t[u], i, n, !0);
						D.isEmptyObject(l) && v.remove(e, "handle events")
					}
				},
				dispatch: function(e) {
					var t, i, n, s, a, o = new Array(arguments.length),
						r = D.event.fix(e),
						e = (v.get(this, "events") || Object.create(null))[r.type] || [],
						l = D.event.special[r.type] || {};
					for (o[0] = r, t = 1; t < arguments.length; t++) o[t] = arguments[t];
					if (r.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, r)) {
						for (a = D.event.handlers.call(this, r, e), t = 0;
							(n = a[t++]) && !r.isPropagationStopped();)
							for (r.currentTarget = n.elem, i = 0;
								(s = n.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !1 !== s.namespace && !r.rnamespace.test(s.namespace) || (r.handleObj = s, r.data = s.data, void 0 !== (s = ((D.event.special[s.origType] || {}).handle || s.handler).apply(n.elem, o)) && !1 === (r.result = s) && (r.preventDefault(), r.stopPropagation()));
						return l.postDispatch && l.postDispatch.call(this, r), r.result
					}
				},
				handlers: function(e, t) {
					var i, n, s, a, o, r = [],
						l = t.delegateCount,
						u = e.target;
					if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
						for (; u !== this; u = u.parentNode || this)
							if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
								for (a = [], o = {}, i = 0; i < l; i++) void 0 === o[s = (n = t[i]).selector + " "] && (o[s] = n.needsContext ? -1 < D(s, this).index(u) : D.find(s, this, null, [u]).length), o[s] && a.push(n);
								a.length && r.push({
									elem: u,
									handlers: a
								})
							} return u = this, l < t.length && r.push({
						elem: u,
						handlers: t.slice(l)
					}), r
				},
				addProp: function(t, e) {
					Object.defineProperty(D.Event.prototype, t, {
						enumerable: !0,
						configurable: !0,
						get: b(e) ? function() {
							if (this.originalEvent) return e(this.originalEvent)
						} : function() {
							if (this.originalEvent) return this.originalEvent[t]
						},
						set: function(e) {
							Object.defineProperty(this, t, {
								enumerable: !0,
								configurable: !0,
								writable: !0,
								value: e
							})
						}
					})
				},
				fix: function(e) {
					return e[D.expando] ? e : new D.Event(e)
				},
				special: {
					load: {
						noBubble: !0
					},
					click: {
						setup: function(e) {
							e = this || e;
							return Ct.test(e.type) && e.click && _(e, "input") && It(e, "click", !0), !1
						},
						trigger: function(e) {
							e = this || e;
							return Ct.test(e.type) && e.click && _(e, "input") && It(e, "click"), !0
						},
						_default: function(e) {
							e = e.target;
							return Ct.test(e.type) && e.click && _(e, "input") && v.get(e, "click") || _(e, "a")
						}
					},
					beforeunload: {
						postDispatch: function(e) {
							void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
						}
					}
				}
			}, D.removeEvent = function(e, t, i) {
				e.removeEventListener && e.removeEventListener(t, i)
			}, D.Event = function(e, t) {
				if (!(this instanceof D.Event)) return new D.Event(e, t);
				e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Pt : $t, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && D.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[D.expando] = !0
			}, D.Event.prototype = {
				constructor: D.Event,
				isDefaultPrevented: $t,
				isPropagationStopped: $t,
				isImmediatePropagationStopped: $t,
				isSimulated: !1,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = Pt, e && !this.isSimulated && e.preventDefault()
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = Pt, e && !this.isSimulated && e.stopPropagation()
				},
				stopImmediatePropagation: function() {
					var e = this.originalEvent;
					this.isImmediatePropagationStopped = Pt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
				}
			}, D.each({
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: !0
			}, D.event.addProp), D.each({
				focus: "focusin",
				blur: "focusout"
			}, function(n, s) {
				function a(e) {
					var t, i;
					w.documentMode ? (t = v.get(this, "handle"), (i = D.event.fix(e)).type = "focusin" === e.type ? "focus" : "blur", i.isSimulated = !0, t(e), i.target === i.currentTarget && t(i)) : D.event.simulate(s, e.target, D.event.fix(e))
				}
				D.event.special[n] = {
					setup: function() {
						var e;
						if (It(this, n, !0), !w.documentMode) return !1;
						(e = v.get(this, s)) || this.addEventListener(s, a), v.set(this, s, (e || 0) + 1)
					},
					trigger: function() {
						return It(this, n), !0
					},
					teardown: function() {
						var e;
						if (!w.documentMode) return !1;
						(e = v.get(this, s) - 1) ? v.set(this, s, e): (this.removeEventListener(s, a), v.remove(this, s))
					},
					_default: function(e) {
						return v.get(e.target, n)
					},
					delegateType: s
				}, D.event.special[s] = {
					setup: function() {
						var e = this.ownerDocument || this.document || this,
							t = w.documentMode ? this : e,
							i = v.get(t, s);
						i || (w.documentMode ? this.addEventListener(s, a) : e.addEventListener(n, a, !0)), v.set(t, s, (i || 0) + 1)
					},
					teardown: function() {
						var e = this.ownerDocument || this.document || this,
							t = w.documentMode ? this : e,
							i = v.get(t, s) - 1;
						i ? v.set(t, s, i) : (w.documentMode ? this.removeEventListener(s, a) : e.removeEventListener(n, a, !0), v.remove(t, s))
					}
				}
			}), D.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			}, function(e, s) {
				D.event.special[e] = {
					delegateType: s,
					bindType: s,
					handle: function(e) {
						var t, i = e.relatedTarget,
							n = e.handleObj;
						return i && (i === this || D.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = s), t
					}
				}
			}), D.fn.extend({
				on: function(e, t, i, n) {
					return Mt(this, e, t, i, n)
				},
				one: function(e, t, i, n) {
					return Mt(this, e, t, i, n, 1)
				},
				off: function(e, t, i) {
					var n, s;
					if (e && e.preventDefault && e.handleObj) n = e.handleObj, D(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler);
					else {
						if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = $t), this.each(function() {
							D.event.remove(this, e, i, t)
						});
						for (s in e) this.off(s, t, e[s])
					}
					return this
				}
			});
			var Ot = /<script|<style|<link/i,
				Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Lt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

			function Nt(e, t) {
				return _(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") && D(e).children("tbody")[0] || e
			}

			function Rt(e) {
				return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
			}

			function jt(e) {
				return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
			}

			function Yt(e, t) {
				var i, n, s, a;
				if (1 === t.nodeType) {
					if (v.hasData(e) && (a = v.get(e).events))
						for (s in v.remove(t, "handle events"), a)
							for (i = 0, n = a[s].length; i < n; i++) D.event.add(t, s, a[s][i]);
					u.hasData(e) && (e = u.access(e), e = D.extend({}, e), u.set(t, e))
				}
			}

			function zt(i, n, s, a) {
				n = R(n);
				var e, t, o, r, l, u, c = 0,
					h = i.length,
					d = h - 1,
					f = n[0],
					p = b(f);
				if (p || 1 < h && "string" == typeof f && !m.checkClone && Ht.test(f)) return i.each(function(e) {
					var t = i.eq(e);
					p && (n[0] = f.call(this, e, t.html())), zt(t, n, s, a)
				});
				if (h && (t = (e = Et(n, i[0].ownerDocument, !1, i, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
					for (r = (o = D.map(g(e, "script"), Rt)).length; c < h; c++) l = e, c !== d && (l = D.clone(l, !0, !0), r) && D.merge(o, g(l, "script")), s.call(i[c], l, c);
					if (r)
						for (u = o[o.length - 1].ownerDocument, D.map(o, jt), c = 0; c < r; c++) l = o[c], St.test(l.type || "") && !v.access(l, "globalEval") && D.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? D._evalUrl && !l.noModule && D._evalUrl(l.src, {
							nonce: l.nonce || l.getAttribute("nonce")
						}, u) : V(l.textContent.replace(Lt, ""), l, u))
				}
				return i
			}

			function Bt(e, t, i) {
				for (var n, s = t ? D.filter(t, e) : e, a = 0; null != (n = s[a]); a++) i || 1 !== n.nodeType || D.cleanData(g(n)), n.parentNode && (i && yt(n) && Tt(g(n, "script")), n.parentNode.removeChild(n));
				return e
			}
			D.extend({
				htmlPrefilter: function(e) {
					return e
				},
				clone: function(e, t, i) {
					var n, s, a, o, r, l, u, c = e.cloneNode(!0),
						h = yt(e);
					if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || D.isXMLDoc(e)))
						for (o = g(c), n = 0, s = (a = g(e)).length; n < s; n++) r = a[n], l = o[n], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && Ct.test(r.type) ? l.checked = r.checked : "input" !== u && "textarea" !== u || (l.defaultValue = r.defaultValue);
					if (t)
						if (i)
							for (a = a || g(e), o = o || g(c), n = 0, s = a.length; n < s; n++) Yt(a[n], o[n]);
						else Yt(e, c);
					return 0 < (o = g(c, "script")).length && Tt(o, !h && g(e, "script")), c
				},
				cleanData: function(e) {
					for (var t, i, n, s = D.event.special, a = 0; void 0 !== (i = e[a]); a++)
						if (ct(i)) {
							if (t = i[v.expando]) {
								if (t.events)
									for (n in t.events) s[n] ? D.event.remove(i, n) : D.removeEvent(i, n, t.handle);
								i[v.expando] = void 0
							}
							i[u.expando] && (i[u.expando] = void 0)
						}
				}
			}), D.fn.extend({
				detach: function(e) {
					return Bt(this, e, !0)
				},
				remove: function(e) {
					return Bt(this, e)
				},
				text: function(e) {
					return c(this, function(e) {
						return void 0 === e ? D.text(this) : this.empty().each(function() {
							1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
						})
					}, null, e, arguments.length)
				},
				append: function() {
					return zt(this, arguments, function(e) {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Nt(this, e).appendChild(e)
					})
				},
				prepend: function() {
					return zt(this, arguments, function(e) {
						var t;
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Nt(this, e)).insertBefore(e, t.firstChild)
					})
				},
				before: function() {
					return zt(this, arguments, function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this)
					})
				},
				after: function() {
					return zt(this, arguments, function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
					})
				},
				empty: function() {
					for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (D.cleanData(g(e, !1)), e.textContent = "");
					return this
				},
				clone: function(e, t) {
					return e = null != e && e, t = null == t ? e : t, this.map(function() {
						return D.clone(this, e, t)
					})
				},
				html: function(e) {
					return c(this, function(e) {
						var t = this[0] || {},
							i = 0,
							n = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if ("string" == typeof e && !Ot.test(e) && !p[(kt.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = D.htmlPrefilter(e);
							try {
								for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (D.cleanData(g(t, !1)), t.innerHTML = e);
								t = 0
							} catch (e) {}
						}
						t && this.empty().append(e)
					}, null, e, arguments.length)
				},
				replaceWith: function() {
					var i = [];
					return zt(this, arguments, function(e) {
						var t = this.parentNode;
						D.inArray(this, i) < 0 && (D.cleanData(g(this)), t) && t.replaceChild(e, this)
					}, i)
				}
			}), D.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function(e, o) {
				D.fn[e] = function(e) {
					for (var t, i = [], n = D(e), s = n.length - 1, a = 0; a <= s; a++) t = a === s ? this : this.clone(!0), D(n[a])[o](t), j.apply(i, t.get());
					return this.pushStack(i)
				}
			});

			function Wt(e) {
				var t = e.ownerDocument.defaultView;
				return (t = t && t.opener ? t : x).getComputedStyle(e)
			}

			function qt(e, t, i) {
				var n, s = {};
				for (n in t) s[n] = e.style[n], e.style[n] = t[n];
				for (n in i = i.call(e), t) e.style[n] = s[n];
				return i
			}
			var Ut, Vt, Gt, Xt, Kt, Zt, Qt, M, Jt = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
				ei = /^--/,
				ti = new RegExp(vt.join("|"), "i");

			function ii() {
				var e;
				M && (Qt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", M.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bt.appendChild(Qt).appendChild(M), e = x.getComputedStyle(M), Ut = "1%" !== e.top, Zt = 12 === ni(e.marginLeft), M.style.right = "60%", Xt = 36 === ni(e.right), Vt = 36 === ni(e.width), M.style.position = "absolute", Gt = 12 === ni(M.offsetWidth / 3), bt.removeChild(Qt), M = null)
			}

			function ni(e) {
				return Math.round(parseFloat(e))
			}

			function si(e, t, i) {
				var n, s = ei.test(t),
					a = e.style;
				return (i = i || Wt(e)) && (n = i.getPropertyValue(t) || i[t], "" !== (n = s ? n && (n.replace(ee, "$1") || void 0) : n) || yt(e) || (n = D.style(e, t)), !m.pixelBoxStyles()) && Jt.test(n) && ti.test(t) && (s = a.width, e = a.minWidth, t = a.maxWidth, a.minWidth = a.maxWidth = a.width = n, n = i.width, a.width = s, a.minWidth = e, a.maxWidth = t), void 0 !== n ? n + "" : n
			}

			function ai(e, t) {
				return {
					get: function() {
						if (!e()) return (this.get = t).apply(this, arguments);
						delete this.get
					}
				}
			}
			Qt = w.createElement("div"), (M = w.createElement("div")).style && (M.style.backgroundClip = "content-box", M.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === M.style.backgroundClip, D.extend(m, {
				boxSizingReliable: function() {
					return ii(), Vt
				},
				pixelBoxStyles: function() {
					return ii(), Xt
				},
				pixelPosition: function() {
					return ii(), Ut
				},
				reliableMarginLeft: function() {
					return ii(), Zt
				},
				scrollboxSize: function() {
					return ii(), Gt
				},
				reliableTrDimensions: function() {
					var e, t, i;
					return null == Kt && (e = w.createElement("table"), t = w.createElement("tr"), i = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", i.style.height = "9px", i.style.display = "block", bt.appendChild(e).appendChild(t).appendChild(i), i = x.getComputedStyle(t), Kt = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, bt.removeChild(e)), Kt
				}
			}));
			var oi = ["Webkit", "Moz", "ms"],
				ri = w.createElement("div").style,
				li = {};

			function ui(e) {
				var t = D.cssProps[e] || li[e];
				return t || (e in ri ? e : li[e] = function(e) {
					for (var t = e[0].toUpperCase() + e.slice(1), i = oi.length; i--;)
						if ((e = oi[i] + t) in ri) return e
				}(e) || e)
			}
			var ci = /^(none|table(?!-c[ea]).+)/,
				hi = {
					position: "absolute",
					visibility: "hidden",
					display: "block"
				},
				di = {
					letterSpacing: "0",
					fontWeight: "400"
				};

			function fi(e, t, i) {
				var n = gt.exec(t);
				return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
			}

			function pi(e, t, i, n, s, a) {
				var o = "width" === t ? 1 : 0,
					r = 0,
					l = 0,
					u = 0;
				if (i === (n ? "border" : "content")) return 0;
				for (; o < 4; o += 2) "margin" === i && (u += D.css(e, i + vt[o], !0, s)), n ? ("content" === i && (l -= D.css(e, "padding" + vt[o], !0, s)), "margin" !== i && (l -= D.css(e, "border" + vt[o] + "Width", !0, s))) : (l += D.css(e, "padding" + vt[o], !0, s), "padding" !== i ? l += D.css(e, "border" + vt[o] + "Width", !0, s) : r += D.css(e, "border" + vt[o] + "Width", !0, s));
				return !n && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - r - .5)) || 0), l + u
			}

			function mi(e, t, i) {
				var n = Wt(e),
					s = (!m.boxSizingReliable() || i) && "border-box" === D.css(e, "boxSizing", !1, n),
					a = s,
					o = si(e, t, n),
					r = "offset" + t[0].toUpperCase() + t.slice(1);
				if (Jt.test(o)) {
					if (!i) return o;
					o = "auto"
				}
				return (!m.boxSizingReliable() && s || !m.reliableTrDimensions() && _(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === D.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === D.css(e, "boxSizing", !1, n), a = r in e) && (o = e[r]), (o = parseFloat(o) || 0) + pi(e, t, i || (s ? "border" : "content"), a, n, o) + "px"
			}

			function I(e, t, i, n, s) {
				return new I.prototype.init(e, t, i, n, s)
			}
			D.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if (t) return "" === (t = si(e, "opacity")) ? "1" : t
						}
					}
				},
				cssNumber: {
					animationIterationCount: !0,
					aspectRatio: !0,
					borderImageSlice: !0,
					columnCount: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					gridArea: !0,
					gridColumn: !0,
					gridColumnEnd: !0,
					gridColumnStart: !0,
					gridRow: !0,
					gridRowEnd: !0,
					gridRowStart: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					scale: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0,
					fillOpacity: !0,
					floodOpacity: !0,
					stopOpacity: !0,
					strokeMiterlimit: !0,
					strokeOpacity: !0
				},
				cssProps: {},
				style: function(e, t, i, n) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var s, a, o, r = $(t),
							l = ei.test(t),
							u = e.style;
						if (l || (t = ui(r)), o = D.cssHooks[t] || D.cssHooks[r], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(e, !1, n)) ? s : u[t];
						"string" === (a = typeof i) && (s = gt.exec(i)) && s[1] && (i = xt(e, t, s), a = "number"), null == i || i != i || ("number" !== a || l || (i += s && s[3] || (D.cssNumber[r] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (i = o.set(e, i, n))) || (l ? u.setProperty(t, i) : u[t] = i)
					}
				},
				css: function(e, t, i, n) {
					var s, a = $(t);
					return ei.test(t) || (t = ui(a)), "normal" === (s = void 0 === (s = (a = D.cssHooks[t] || D.cssHooks[a]) && "get" in a ? a.get(e, !0, i) : s) ? si(e, t, n) : s) && t in di && (s = di[t]), ("" === i || i) && (a = parseFloat(s), !0 === i || isFinite(a)) ? a || 0 : s
				}
			}), D.each(["height", "width"], function(e, o) {
				D.cssHooks[o] = {
					get: function(e, t, i) {
						if (t) return !ci.test(D.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? mi(e, o, i) : qt(e, hi, function() {
							return mi(e, o, i)
						})
					},
					set: function(e, t, i) {
						var n = Wt(e),
							s = !m.scrollboxSize() && "absolute" === n.position,
							a = (s || i) && "border-box" === D.css(e, "boxSizing", !1, n),
							i = i ? pi(e, o, i, a, n) : 0;
						return a && s && (i -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(n[o]) - pi(e, o, "border", !1, n) - .5)), i && (a = gt.exec(t)) && "px" !== (a[3] || "px") && (e.style[o] = t, t = D.css(e, o)), fi(0, t, i)
					}
				}
			}), D.cssHooks.marginLeft = ai(m.reliableMarginLeft, function(e, t) {
				if (t) return (parseFloat(si(e, "marginLeft")) || e.getBoundingClientRect().left - qt(e, {
					marginLeft: 0
				}, function() {
					return e.getBoundingClientRect().left
				})) + "px"
			}), D.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function(s, a) {
				D.cssHooks[s + a] = {
					expand: function(e) {
						for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[s + vt[t] + a] = n[t] || n[t - 2] || n[0];
						return i
					}
				}, "margin" !== s && (D.cssHooks[s + a].set = fi)
			}), D.fn.extend({
				css: function(e, t) {
					return c(this, function(e, t, i) {
						var n, s, a = {},
							o = 0;
						if (Array.isArray(t)) {
							for (n = Wt(e), s = t.length; o < s; o++) a[t[o]] = D.css(e, t[o], !1, n);
							return a
						}
						return void 0 !== i ? D.style(e, t, i) : D.css(e, t)
					}, e, t, 1 < arguments.length)
				}
			}), ((D.Tween = I).prototype = {
				constructor: I,
				init: function(e, t, i, n, s, a) {
					this.elem = e, this.prop = i, this.easing = s || D.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (D.cssNumber[i] ? "" : "px")
				},
				cur: function() {
					var e = I.propHooks[this.prop];
					return (e && e.get ? e : I.propHooks._default).get(this)
				},
				run: function(e) {
					var t, i = I.propHooks[this.prop];
					return this.options.duration ? this.pos = t = D.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (i && i.set ? i : I.propHooks._default).set(this), this
				}
			}).init.prototype = I.prototype, (I.propHooks = {
				_default: {
					get: function(e) {
						return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = D.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
					},
					set: function(e) {
						D.fx.step[e.prop] ? D.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !D.cssHooks[e.prop] && null == e.elem.style[ui(e.prop)] ? e.elem[e.prop] = e.now : D.style(e.elem, e.prop, e.now + e.unit)
					}
				}
			}).scrollTop = I.propHooks.scrollLeft = {
				set: function(e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
				}
			}, D.easing = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2
				},
				_default: "swing"
			}, D.fx = I.prototype.init, D.fx.step = {};
			var gi, vi, bi = /^(?:toggle|show|hide)$/,
				yi = /queueHooks$/;

			function _i() {
				vi && (!1 === w.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(_i) : x.setTimeout(_i, D.fx.interval), D.fx.tick())
			}

			function xi() {
				return x.setTimeout(function() {
					gi = void 0
				}), gi = Date.now()
			}

			function wi(e, t) {
				var i, n = 0,
					s = {
						height: e
					};
				for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = vt[n])] = s["padding" + i] = e;
				return t && (s.opacity = s.width = e), s
			}

			function Di(e, t, i) {
				for (var n, s = (O.tweeners[t] || []).concat(O.tweeners["*"]), a = 0, o = s.length; a < o; a++)
					if (n = s[a].call(i, t, e)) return n
			}

			function O(s, e, t) {
				var i, a, n, o, r, l, u, c = 0,
					h = O.prefilters.length,
					d = D.Deferred().always(function() {
						delete f.elem
					}),
					f = function() {
						if (!a) {
							for (var e = gi || xi(), e = Math.max(0, p.startTime + p.duration - e), t = 1 - (e / p.duration || 0), i = 0, n = p.tweens.length; i < n; i++) p.tweens[i].run(t);
							if (d.notifyWith(s, [p, t, e]), t < 1 && n) return e;
							n || d.notifyWith(s, [p, 1, 0]), d.resolveWith(s, [p])
						}
						return !1
					},
					p = d.promise({
						elem: s,
						props: D.extend({}, e),
						opts: D.extend(!0, {
							specialEasing: {},
							easing: D.easing._default
						}, t),
						originalProperties: e,
						originalOptions: t,
						startTime: gi || xi(),
						duration: t.duration,
						tweens: [],
						createTween: function(e, t) {
							t = D.Tween(s, p.opts, e, t, p.opts.specialEasing[e] || p.opts.easing);
							return p.tweens.push(t), t
						},
						stop: function(e) {
							var t = 0,
								i = e ? p.tweens.length : 0;
							if (!a) {
								for (a = !0; t < i; t++) p.tweens[t].run(1);
								e ? (d.notifyWith(s, [p, 1, 0]), d.resolveWith(s, [p, e])) : d.rejectWith(s, [p, e])
							}
							return this
						}
					}),
					m = p.props,
					g = m,
					v = p.opts.specialEasing;
				for (n in g)
					if (r = v[o = $(n)], l = g[n], Array.isArray(l) && (r = l[1], l = g[n] = l[0]), n !== o && (g[o] = l, delete g[n]), (u = D.cssHooks[o]) && "expand" in u)
						for (n in l = u.expand(l), delete g[o], l) n in g || (g[n] = l[n], v[n] = r);
					else v[o] = r;
				for (; c < h; c++)
					if (i = O.prefilters[c].call(p, s, m, p.opts)) return b(i.stop) && (D._queueHooks(p.elem, p.opts.queue).stop = i.stop.bind(i)), i;
				return D.map(m, Di, p), b(p.opts.start) && p.opts.start.call(s, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), D.fx.timer(D.extend(f, {
					elem: s,
					anim: p,
					queue: p.opts.queue
				})), p
			}
			D.Animation = D.extend(O, {
				tweeners: {
					"*": [function(e, t) {
						var i = this.createTween(e, t);
						return xt(i.elem, e, gt.exec(t), i), i
					}]
				},
				tweener: function(e, t) {
					for (var i, n = 0, s = (e = b(e) ? (t = e, ["*"]) : e.match(P)).length; n < s; n++) i = e[n], O.tweeners[i] = O.tweeners[i] || [], O.tweeners[i].unshift(t)
				},
				prefilters: [function(e, t, i) {
					var n, s, a, o, r, l, u, c = "width" in t || "height" in t,
						h = this,
						d = {},
						f = e.style,
						p = e.nodeType && mt(e),
						m = v.get(e, "fxshow");
					for (n in i.queue || (null == (o = D._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, r = o.empty.fire, o.empty.fire = function() {
							o.unqueued || r()
						}), o.unqueued++, h.always(function() {
							h.always(function() {
								o.unqueued--, D.queue(e, "fx").length || o.empty.fire()
							})
						})), t)
						if (s = t[n], bi.test(s)) {
							if (delete t[n], a = a || "toggle" === s, s === (p ? "hide" : "show")) {
								if ("show" !== s || !m || void 0 === m[n]) continue;
								p = !0
							}
							d[n] = m && m[n] || D.style(e, n)
						} if ((l = !D.isEmptyObject(t)) || !D.isEmptyObject(d))
						for (n in c && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = m && m.display) && (u = v.get(e, "display")), "none" === (c = D.css(e, "display")) && (u ? c = u : (Dt([e], !0), u = e.style.display || u, c = D.css(e, "display"), Dt([e]))), "inline" === c || "inline-block" === c && null != u) && "none" === D.css(e, "float") && (l || (h.done(function() {
								f.display = u
							}), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block"), i.overflow && (f.overflow = "hidden", h.always(function() {
								f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
							})), l = !1, d) l || (m ? "hidden" in m && (p = m.hidden) : m = v.access(e, "fxshow", {
							display: u
						}), a && (m.hidden = !p), p && Dt([e], !0), h.done(function() {
							for (n in p || Dt([e]), v.remove(e, "fxshow"), d) D.style(e, n, d[n])
						})), l = Di(p ? m[n] : 0, n, h), n in m || (m[n] = l.start, p && (l.end = l.start, l.start = 0))
				}],
				prefilter: function(e, t) {
					t ? O.prefilters.unshift(e) : O.prefilters.push(e)
				}
			}), D.speed = function(e, t, i) {
				var n = e && "object" == typeof e ? D.extend({}, e) : {
					complete: i || !i && t || b(e) && e,
					duration: e,
					easing: i && t || t && !b(t) && t
				};
				return D.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in D.fx.speeds ? n.duration = D.fx.speeds[n.duration] : n.duration = D.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
					b(n.old) && n.old.call(this), n.queue && D.dequeue(this, n.queue)
				}, n
			}, D.fn.extend({
				fadeTo: function(e, t, i, n) {
					return this.filter(mt).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, i, n)
				},
				animate: function(t, e, i, n) {
					function s() {
						var e = O(this, D.extend({}, t), o);
						(a || v.get(this, "finish")) && e.stop(!0)
					}
					var a = D.isEmptyObject(t),
						o = D.speed(e, i, n);
					return s.finish = s, a || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
				},
				stop: function(s, e, a) {
					function o(e) {
						var t = e.stop;
						delete e.stop, t(a)
					}
					return "string" != typeof s && (a = e, e = s, s = void 0), e && this.queue(s || "fx", []), this.each(function() {
						var e = !0,
							t = null != s && s + "queueHooks",
							i = D.timers,
							n = v.get(this);
						if (t) n[t] && n[t].stop && o(n[t]);
						else
							for (t in n) n[t] && n[t].stop && yi.test(t) && o(n[t]);
						for (t = i.length; t--;) i[t].elem !== this || null != s && i[t].queue !== s || (i[t].anim.stop(a), e = !1, i.splice(t, 1));
						!e && a || D.dequeue(this, s)
					})
				},
				finish: function(o) {
					return !1 !== o && (o = o || "fx"), this.each(function() {
						var e, t = v.get(this),
							i = t[o + "queue"],
							n = t[o + "queueHooks"],
							s = D.timers,
							a = i ? i.length : 0;
						for (t.finish = !0, D.queue(this, o, []), n && n.stop && n.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === o && (s[e].anim.stop(!0), s.splice(e, 1));
						for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
						delete t.finish
					})
				}
			}), D.each(["toggle", "show", "hide"], function(e, n) {
				var s = D.fn[n];
				D.fn[n] = function(e, t, i) {
					return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(wi(n, !0), e, t, i)
				}
			}), D.each({
				slideDown: wi("show"),
				slideUp: wi("hide"),
				slideToggle: wi("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(e, n) {
				D.fn[e] = function(e, t, i) {
					return this.animate(n, e, t, i)
				}
			}), D.timers = [], D.fx.tick = function() {
				var e, t = 0,
					i = D.timers;
				for (gi = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
				i.length || D.fx.stop(), gi = void 0
			}, D.fx.timer = function(e) {
				D.timers.push(e), D.fx.start()
			}, D.fx.interval = 13, D.fx.start = function() {
				vi || (vi = !0, _i())
			}, D.fx.stop = function() {
				vi = null
			}, D.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, D.fn.delay = function(n, e) {
				return n = D.fx && D.fx.speeds[n] || n, this.queue(e = e || "fx", function(e, t) {
					var i = x.setTimeout(e, n);
					t.stop = function() {
						x.clearTimeout(i)
					}
				})
			}, o = w.createElement("input"), a = w.createElement("select").appendChild(w.createElement("option")), o.type = "checkbox", m.checkOn = "" !== o.value, m.optSelected = a.selected, (o = w.createElement("input")).value = "t", o.type = "radio", m.radioValue = "t" === o.value;
			var Ci, ki = D.expr.attrHandle,
				Si = (D.fn.extend({
					attr: function(e, t) {
						return c(this, D.attr, e, t, 1 < arguments.length)
					},
					removeAttr: function(e) {
						return this.each(function() {
							D.removeAttr(this, e)
						})
					}
				}), D.extend({
					attr: function(e, t, i) {
						var n, s, a = e.nodeType;
						if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? D.prop(e, t, i) : (1 === a && D.isXMLDoc(e) || (s = D.attrHooks[t.toLowerCase()] || (D.expr.match.bool.test(t) ? Ci : void 0)), void 0 !== i ? null === i ? void D.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : !(s && "get" in s && null !== (n = s.get(e, t))) && null == (n = D.find.attr(e, t)) ? void 0 : n)
					},
					attrHooks: {
						type: {
							set: function(e, t) {
								var i;
								if (!m.radioValue && "radio" === t && _(e, "input")) return i = e.value, e.setAttribute("type", t), i && (e.value = i), t
							}
						}
					},
					removeAttr: function(e, t) {
						var i, n = 0,
							s = t && t.match(P);
						if (s && 1 === e.nodeType)
							for (; i = s[n++];) e.removeAttribute(i)
					}
				}), Ci = {
					set: function(e, t, i) {
						return !1 === t ? D.removeAttr(e, i) : e.setAttribute(i, i), i
					}
				}, D.each(D.expr.match.bool.source.match(/\w+/g), function(e, t) {
					var o = ki[t] || D.find.attr;
					ki[t] = function(e, t, i) {
						var n, s, a = t.toLowerCase();
						return i || (s = ki[a], ki[a] = n, n = null != o(e, t, i) ? a : null, ki[a] = s), n
					}
				}), /^(?:input|select|textarea|button)$/i),
				Ti = /^(?:a|area)$/i;

			function Ai(e) {
				return (e.match(P) || []).join(" ")
			}

			function Ei(e) {
				return e.getAttribute && e.getAttribute("class") || ""
			}

			function Fi(e) {
				return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
			}
			D.fn.extend({
				prop: function(e, t) {
					return c(this, D.prop, e, t, 1 < arguments.length)
				},
				removeProp: function(e) {
					return this.each(function() {
						delete this[D.propFix[e] || e]
					})
				}
			}), D.extend({
				prop: function(e, t, i) {
					var n, s, a = e.nodeType;
					if (3 !== a && 8 !== a && 2 !== a) return 1 === a && D.isXMLDoc(e) || (t = D.propFix[t] || t, s = D.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
				},
				propHooks: {
					tabIndex: {
						get: function(e) {
							var t = D.find.attr(e, "tabindex");
							return t ? parseInt(t, 10) : Si.test(e.nodeName) || Ti.test(e.nodeName) && e.href ? 0 : -1
						}
					}
				},
				propFix: {
					for: "htmlFor",
					class: "className"
				}
			}), m.optSelected || (D.propHooks.selected = {
				get: function(e) {
					e = e.parentNode;
					return e && e.parentNode && e.parentNode.selectedIndex, null
				},
				set: function(e) {
					e = e.parentNode;
					e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
				}
			}), D.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
				D.propFix[this.toLowerCase()] = this
			}), D.fn.extend({
				addClass: function(t) {
					var e, i, n, s, a, o;
					return b(t) ? this.each(function(e) {
						D(this).addClass(t.call(this, e, Ei(this)))
					}) : (e = Fi(t)).length ? this.each(function() {
						if (n = Ei(this), i = 1 === this.nodeType && " " + Ai(n) + " ") {
							for (a = 0; a < e.length; a++) s = e[a], i.indexOf(" " + s + " ") < 0 && (i += s + " ");
							o = Ai(i), n !== o && this.setAttribute("class", o)
						}
					}) : this
				},
				removeClass: function(t) {
					var e, i, n, s, a, o;
					return b(t) ? this.each(function(e) {
						D(this).removeClass(t.call(this, e, Ei(this)))
					}) : arguments.length ? (e = Fi(t)).length ? this.each(function() {
						if (n = Ei(this), i = 1 === this.nodeType && " " + Ai(n) + " ") {
							for (a = 0; a < e.length; a++)
								for (s = e[a]; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
							o = Ai(i), n !== o && this.setAttribute("class", o)
						}
					}) : this : this.attr("class", "")
				},
				toggleClass: function(t, i) {
					var e, n, s, a, o = typeof t,
						r = "string" == o || Array.isArray(t);
					return b(t) ? this.each(function(e) {
						D(this).toggleClass(t.call(this, e, Ei(this), i), i)
					}) : "boolean" == typeof i && r ? i ? this.addClass(t) : this.removeClass(t) : (e = Fi(t), this.each(function() {
						if (r)
							for (a = D(this), s = 0; s < e.length; s++) n = e[s], a.hasClass(n) ? a.removeClass(n) : a.addClass(n);
						else void 0 !== t && "boolean" != o || ((n = Ei(this)) && v.set(this, "__className__", n), this.setAttribute && this.setAttribute("class", !n && !1 !== t && v.get(this, "__className__") || ""))
					}))
				},
				hasClass: function(e) {
					for (var t, i = 0, n = " " + e + " "; t = this[i++];)
						if (1 === t.nodeType && -1 < (" " + Ai(Ei(t)) + " ").indexOf(n)) return !0;
					return !1
				}
			});

			function Pi(e) {
				e.stopPropagation()
			}
			var $i = /\r/g,
				Mi = (D.fn.extend({
					val: function(t) {
						var i, e, n, s = this[0];
						return arguments.length ? (n = b(t), this.each(function(e) {
							1 !== this.nodeType || (null == (e = n ? t.call(this, e, D(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = D.map(e, function(e) {
								return null == e ? "" : e + ""
							})), (i = D.valHooks[this.type] || D.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value")) || (this.value = e)
						})) : s ? (i = D.valHooks[s.type] || D.valHooks[s.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(s, "value")) ? e : "string" == typeof(e = s.value) ? e.replace($i, "") : null == e ? "" : e : void 0
					}
				}), D.extend({
					valHooks: {
						option: {
							get: function(e) {
								var t = D.find.attr(e, "value");
								return null != t ? t : Ai(D.text(e))
							}
						},
						select: {
							get: function(e) {
								for (var t, i = e.options, n = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], o = s ? n + 1 : i.length, r = n < 0 ? o : s ? n : 0; r < o; r++)
									if (((t = i[r]).selected || r === n) && !t.disabled && (!t.parentNode.disabled || !_(t.parentNode, "optgroup"))) {
										if (t = D(t).val(), s) return t;
										a.push(t)
									} return a
							},
							set: function(e, t) {
								for (var i, n, s = e.options, a = D.makeArray(t), o = s.length; o--;)((n = s[o]).selected = -1 < D.inArray(D.valHooks.option.get(n), a)) && (i = !0);
								return i || (e.selectedIndex = -1), a
							}
						}
					}
				}), D.each(["radio", "checkbox"], function() {
					D.valHooks[this] = {
						set: function(e, t) {
							if (Array.isArray(t)) return e.checked = -1 < D.inArray(D(e).val(), t)
						}
					}, m.checkOn || (D.valHooks[this].get = function(e) {
						return null === e.getAttribute("value") ? "on" : e.value
					})
				}), x.location),
				Ii = {
					guid: Date.now()
				},
				Oi = /\?/,
				Hi = (D.parseXML = function(e) {
					var t, i;
					if (!e || "string" != typeof e) return null;
					try {
						t = (new x.DOMParser).parseFromString(e, "text/xml")
					} catch (e) {}
					return i = t && t.getElementsByTagName("parsererror")[0], t && !i || D.error("Invalid XML: " + (i ? D.map(i.childNodes, function(e) {
						return e.textContent
					}).join("\n") : e)), t
				}, /^(?:focusinfocus|focusoutblur)$/),
				Li = (D.extend(D.event, {
					trigger: function(e, t, i, n) {
						var s, a, o, r, l, u, c, h = [i || w],
							d = B.call(e, "type") ? e.type : e,
							f = B.call(e, "namespace") ? e.namespace.split(".") : [],
							p = c = a = i = i || w;
						if (3 !== i.nodeType && 8 !== i.nodeType && !Hi.test(d + D.event.triggered) && (-1 < d.indexOf(".") && (d = (f = d.split(".")).shift(), f.sort()), r = d.indexOf(":") < 0 && "on" + d, (e = e[D.expando] ? e : new D.Event(d, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : D.makeArray(t, [e]), u = D.event.special[d] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, t))) {
							if (!n && !u.noBubble && !L(i)) {
								for (o = u.delegateType || d, Hi.test(o + d) || (p = p.parentNode); p; p = p.parentNode) h.push(p), a = p;
								a === (i.ownerDocument || w) && h.push(a.defaultView || a.parentWindow || x)
							}
							for (s = 0;
								(p = h[s++]) && !e.isPropagationStopped();) c = p, e.type = 1 < s ? o : u.bindType || d, (l = (v.get(p, "events") || Object.create(null))[e.type] && v.get(p, "handle")) && l.apply(p, t), (l = r && p[r]) && l.apply && ct(p) && (e.result = l.apply(p, t), !1 === e.result) && e.preventDefault();
							return e.type = d, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !ct(i) || r && b(i[d]) && !L(i) && ((a = i[r]) && (i[r] = null), D.event.triggered = d, e.isPropagationStopped() && c.addEventListener(d, Pi), i[d](), e.isPropagationStopped() && c.removeEventListener(d, Pi), D.event.triggered = void 0, a) && (i[r] = a), e.result
						}
					},
					simulate: function(e, t, i) {
						i = D.extend(new D.Event, i, {
							type: e,
							isSimulated: !0
						});
						D.event.trigger(i, null, t)
					}
				}), D.fn.extend({
					trigger: function(e, t) {
						return this.each(function() {
							D.event.trigger(e, t, this)
						})
					},
					triggerHandler: function(e, t) {
						var i = this[0];
						if (i) return D.event.trigger(e, t, i, !0)
					}
				}), /\[\]$/),
				Ni = /\r?\n/g,
				Ri = /^(?:submit|button|image|reset|file)$/i,
				ji = /^(?:input|select|textarea|keygen)/i;
			D.param = function(e, t) {
				function i(e, t) {
					t = b(t) ? t() : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
				}
				var n, s = [];
				if (null == e) return "";
				if (Array.isArray(e) || e.jquery && !D.isPlainObject(e)) D.each(e, function() {
					i(this.name, this.value)
				});
				else
					for (n in e) ! function i(n, e, s, a) {
						if (Array.isArray(e)) D.each(e, function(e, t) {
							s || Li.test(n) ? a(n, t) : i(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, s, a)
						});
						else if (s || "object" !== G(e)) a(n, e);
						else
							for (var t in e) i(n + "[" + t + "]", e[t], s, a)
					}(n, e[n], t, i);
				return s.join("&")
			}, D.fn.extend({
				serialize: function() {
					return D.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map(function() {
						var e = D.prop(this, "elements");
						return e ? D.makeArray(e) : this
					}).filter(function() {
						var e = this.type;
						return this.name && !D(this).is(":disabled") && ji.test(this.nodeName) && !Ri.test(e) && (this.checked || !Ct.test(e))
					}).map(function(e, t) {
						var i = D(this).val();
						return null == i ? null : Array.isArray(i) ? D.map(i, function(e) {
							return {
								name: t.name,
								value: e.replace(Ni, "\r\n")
							}
						}) : {
							name: t.name,
							value: i.replace(Ni, "\r\n")
						}
					}).get()
				}
			});
			var Yi = /%20/g,
				zi = /#.*$/,
				Bi = /([?&])_=[^&]*/,
				Wi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
				qi = /^(?:GET|HEAD)$/,
				Ui = /^\/\//,
				Vi = {},
				Gi = {},
				Xi = "*/".concat("*"),
				Ki = w.createElement("a");

			function Zi(a) {
				return function(e, t) {
					"string" != typeof e && (t = e, e = "*");
					var i, n = 0,
						s = e.toLowerCase().match(P) || [];
					if (b(t))
						for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t)
				}
			}

			function Qi(t, n, s, a) {
				var o = {},
					r = t === Gi;

				function l(e) {
					var i;
					return o[e] = !0, D.each(t[e] || [], function(e, t) {
						t = t(n, s, a);
						return "string" != typeof t || r || o[t] ? r ? !(i = t) : void 0 : (n.dataTypes.unshift(t), l(t), !1)
					}), i
				}
				return l(n.dataTypes[0]) || !o["*"] && l("*")
			}

			function Ji(e, t) {
				var i, n, s = D.ajaxSettings.flatOptions || {};
				for (i in t) void 0 !== t[i] && ((s[i] ? e : n = n || {})[i] = t[i]);
				return n && D.extend(!0, e, n), e
			}
			Ki.href = Mi.href, D.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: Mi.href,
					type: "GET",
					isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Mi.protocol),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": Xi,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": !0,
						"text json": JSON.parse,
						"text xml": D.parseXML
					},
					flatOptions: {
						url: !0,
						context: !0
					}
				},
				ajaxSetup: function(e, t) {
					return t ? Ji(Ji(e, D.ajaxSettings), t) : Ji(D.ajaxSettings, e)
				},
				ajaxPrefilter: Zi(Vi),
				ajaxTransport: Zi(Gi),
				ajax: function(e, t) {
					"object" == typeof e && (t = e, e = void 0);
					var l, u, c, i, h, d, f, n, p = D.ajaxSetup({}, t = t || {}),
						m = p.context || p,
						g = p.context && (m.nodeType || m.jquery) ? D(m) : D.event,
						v = D.Deferred(),
						b = D.Callbacks("once memory"),
						y = p.statusCode || {},
						s = {},
						a = {},
						o = "canceled",
						_ = {
							readyState: 0,
							getResponseHeader: function(e) {
								var t;
								if (d) {
									if (!i)
										for (i = {}; t = Wi.exec(c);) i[t[1].toLowerCase() + " "] = (i[t[1].toLowerCase() + " "] || []).concat(t[2]);
									t = i[e.toLowerCase() + " "]
								}
								return null == t ? null : t.join(", ")
							},
							getAllResponseHeaders: function() {
								return d ? c : null
							},
							setRequestHeader: function(e, t) {
								return null == d && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
							},
							overrideMimeType: function(e) {
								return null == d && (p.mimeType = e), this
							},
							statusCode: function(e) {
								if (e)
									if (d) _.always(e[_.status]);
									else
										for (var t in e) y[t] = [y[t], e[t]];
								return this
							},
							abort: function(e) {
								e = e || o;
								return l && l.abort(e), r(0, e), this
							}
						};
					if (v.promise(_), p.url = ((e || p.url || Mi.href) + "").replace(Ui, Mi.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
						e = w.createElement("a");
						try {
							e.href = p.url, e.href = e.href, p.crossDomain = Ki.protocol + "//" + Ki.host != e.protocol + "//" + e.host
						} catch (e) {
							p.crossDomain = !0
						}
					}
					if (p.data && p.processData && "string" != typeof p.data && (p.data = D.param(p.data, p.traditional)), Qi(Vi, p, t, _), !d) {
						for (n in (f = D.event && p.global) && 0 == D.active++ && D.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !qi.test(p.type), u = p.url.replace(zi, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Yi, "+")) : (e = p.url.slice(u.length), p.data && (p.processData || "string" == typeof p.data) && (u += (Oi.test(u) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (u = u.replace(Bi, "$1"), e = (Oi.test(u) ? "&" : "?") + "_=" + Ii.guid++ + e), p.url = u + e), p.ifModified && (D.lastModified[u] && _.setRequestHeader("If-Modified-Since", D.lastModified[u]), D.etag[u]) && _.setRequestHeader("If-None-Match", D.etag[u]), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xi + "; q=0.01" : "") : p.accepts["*"]), p.headers) _.setRequestHeader(n, p.headers[n]);
						if (p.beforeSend && (!1 === p.beforeSend.call(m, _, p) || d)) return _.abort();
						if (o = "abort", b.add(p.complete), _.done(p.success), _.fail(p.error), l = Qi(Gi, p, t, _)) {
							if (_.readyState = 1, f && g.trigger("ajaxSend", [_, p]), d) return _;
							p.async && 0 < p.timeout && (h = x.setTimeout(function() {
								_.abort("timeout")
							}, p.timeout));
							try {
								d = !1, l.send(s, r)
							} catch (e) {
								if (d) throw e;
								r(-1, e)
							}
						} else r(-1, "No Transport")
					}
					return _;

					function r(e, t, i, n) {
						var s, a, o, r = t;
						d || (d = !0, h && x.clearTimeout(h), l = void 0, c = n || "", _.readyState = 0 < e ? 4 : 0, n = 200 <= e && e < 300 || 304 === e, i && (o = function(e, t, i) {
							for (var n, s, a, o, r = e.contents, l = e.dataTypes;
								"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
							if (n)
								for (s in r)
									if (r[s] && r[s].test(n)) {
										l.unshift(s);
										break
									} if (l[0] in i) a = l[0];
							else {
								for (s in i) {
									if (!l[0] || e.converters[s + " " + l[0]]) {
										a = s;
										break
									}
									o = o || s
								}
								a = a || o
							}
							if (a) return a !== l[0] && l.unshift(a), i[a]
						}(p, _, i)), !n && -1 < D.inArray("script", p.dataTypes) && D.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), o = function(e, t, i, n) {
							var s, a, o, r, l, u = {},
								c = e.dataTypes.slice();
							if (c[1])
								for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
							for (a = c.shift(); a;)
								if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
									if ("*" === a) a = l;
									else if ("*" !== l && l !== a) {
								if (!(o = u[l + " " + a] || u["* " + a]))
									for (s in u)
										if ((r = s.split(" "))[1] === a && (o = u[l + " " + r[0]] || u["* " + r[0]])) {
											!0 === o ? o = u[s] : !0 !== u[s] && (a = r[0], c.unshift(r[1]));
											break
										} if (!0 !== o)
									if (o && e.throws) t = o(t);
									else try {
										t = o(t)
									} catch (e) {
										return {
											state: "parsererror",
											error: o ? e : "No conversion from " + l + " to " + a
										}
									}
							}
							return {
								state: "success",
								data: t
							}
						}(p, o, _, n), n ? (p.ifModified && ((i = _.getResponseHeader("Last-Modified")) && (D.lastModified[u] = i), i = _.getResponseHeader("etag")) && (D.etag[u] = i), 204 === e || "HEAD" === p.type ? r = "nocontent" : 304 === e ? r = "notmodified" : (r = o.state, s = o.data, n = !(a = o.error))) : (a = r, !e && r || (r = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || r) + "", n ? v.resolveWith(m, [s, r, _]) : v.rejectWith(m, [_, r, a]), _.statusCode(y), y = void 0, f && g.trigger(n ? "ajaxSuccess" : "ajaxError", [_, p, n ? s : a]), b.fireWith(m, [_, r]), f && (g.trigger("ajaxComplete", [_, p]), --D.active || D.event.trigger("ajaxStop")))
					}
				},
				getJSON: function(e, t, i) {
					return D.get(e, t, i, "json")
				},
				getScript: function(e, t) {
					return D.get(e, void 0, t, "script")
				}
			}), D.each(["get", "post"], function(e, s) {
				D[s] = function(e, t, i, n) {
					return b(t) && (n = n || i, i = t, t = void 0), D.ajax(D.extend({
						url: e,
						type: s,
						dataType: n,
						data: t,
						success: i
					}, D.isPlainObject(e) && e))
				}
			}), D.ajaxPrefilter(function(e) {
				for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
			}), D._evalUrl = function(e, t, i) {
				return D.ajax({
					url: e,
					type: "GET",
					dataType: "script",
					cache: !0,
					async: !1,
					global: !1,
					converters: {
						"text script": function() {}
					},
					dataFilter: function(e) {
						D.globalEval(e, t, i)
					}
				})
			}, D.fn.extend({
				wrapAll: function(e) {
					return this[0] && (b(e) && (e = e.call(this[0])), e = D(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
						for (var e = this; e.firstElementChild;) e = e.firstElementChild;
						return e
					}).append(this)), this
				},
				wrapInner: function(i) {
					return b(i) ? this.each(function(e) {
						D(this).wrapInner(i.call(this, e))
					}) : this.each(function() {
						var e = D(this),
							t = e.contents();
						t.length ? t.wrapAll(i) : e.append(i)
					})
				},
				wrap: function(t) {
					var i = b(t);
					return this.each(function(e) {
						D(this).wrapAll(i ? t.call(this, e) : t)
					})
				},
				unwrap: function(e) {
					return this.parent(e).not("body").each(function() {
						D(this).replaceWith(this.childNodes)
					}), this
				}
			}), D.expr.pseudos.hidden = function(e) {
				return !D.expr.pseudos.visible(e)
			}, D.expr.pseudos.visible = function(e) {
				return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
			}, D.ajaxSettings.xhr = function() {
				try {
					return new x.XMLHttpRequest
				} catch (e) {}
			};
			var en = {
					0: 200,
					1223: 204
				},
				tn = D.ajaxSettings.xhr(),
				nn = (m.cors = !!tn && "withCredentials" in tn, m.ajax = tn = !!tn, D.ajaxTransport(function(s) {
					var a, o;
					if (m.cors || tn && !s.crossDomain) return {
						send: function(e, t) {
							var i, n = s.xhr();
							if (n.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
								for (i in s.xhrFields) n[i] = s.xhrFields[i];
							for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
							a = function(e) {
								return function() {
									a && (a = o = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(en[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
										binary: n.response
									} : {
										text: n.responseText
									}, n.getAllResponseHeaders()))
								}
							}, n.onload = a(), o = n.onerror = n.ontimeout = a("error"), void 0 !== n.onabort ? n.onabort = o : n.onreadystatechange = function() {
								4 === n.readyState && x.setTimeout(function() {
									a && o()
								})
							}, a = a("abort");
							try {
								// console.log("")
								// n.send(s.hasContent && s.data || null)
							} catch (e) {
								if (a) throw e
							}
						},
						abort: function() {
							a && a()
						}
					}
				}), D.ajaxPrefilter(function(e) {
					e.crossDomain && (e.contents.script = !1)
				}), D.ajaxSetup({
					accepts: {
						script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
					},
					contents: {
						script: /\b(?:java|ecma)script\b/
					},
					converters: {
						"text script": function(e) {
							return D.globalEval(e), e
						}
					}
				}), D.ajaxPrefilter("script", function(e) {
					void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
				}), D.ajaxTransport("script", function(i) {
					var n, s;
					if (i.crossDomain || i.scriptAttrs) return {
						send: function(e, t) {
							n = D("<script>").attr(i.scriptAttrs || {}).prop({
								charset: i.scriptCharset,
								src: i.url
							}).on("load error", s = function(e) {
								n.remove(), s = null, e && t("error" === e.type ? 404 : 200, e.type)
							}), w.head.appendChild(n[0])
						},
						abort: function() {
							s && s()
						}
					}
				}), []),
				sn = /(=)\?(?=&|$)|\?\?/,
				an = (D.ajaxSetup({
					jsonp: "callback",
					jsonpCallback: function() {
						var e = nn.pop() || D.expando + "_" + Ii.guid++;
						return this[e] = !0, e
					}
				}), D.ajaxPrefilter("json jsonp", function(e, t, i) {
					var n, s, a, o = !1 !== e.jsonp && (sn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && sn.test(e.data) && "data");
					if (o || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(sn, "$1" + n) : !1 !== e.jsonp && (e.url += (Oi.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
						return a || D.error(n + " was not called"), a[0]
					}, e.dataTypes[0] = "json", s = x[n], x[n] = function() {
						a = arguments
					}, i.always(function() {
						void 0 === s ? D(x).removeProp(n) : x[n] = s, e[n] && (e.jsonpCallback = t.jsonpCallback, nn.push(n)), a && b(s) && s(a[0]), a = s = void 0
					}), "script"
				}), m.createHTMLDocument = ((e = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === e.childNodes.length), D.parseHTML = function(e, t, i) {
					var n;
					return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (m.createHTMLDocument ? ((n = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(n)) : t = w), n = !i && [], (i = Ge.exec(e)) ? [t.createElement(i[1])] : (i = Et([e], t, n), n && n.length && D(n).remove(), D.merge([], i.childNodes)))
				}, D.fn.load = function(e, t, i) {
					var n, s, a, o = this,
						r = e.indexOf(" ");
					return -1 < r && (n = Ai(e.slice(r)), e = e.slice(0, r)), b(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < o.length && D.ajax({
						url: e,
						type: s || "GET",
						dataType: "html",
						data: t
					}).done(function(e) {
						a = arguments, o.html(n ? D("<div>").append(D.parseHTML(e)).find(n) : e)
					}).always(i && function(e, t) {
						o.each(function() {
							i.apply(this, a || [e.responseText, t, e])
						})
					}), this
				}, D.expr.pseudos.animated = function(t) {
					return D.grep(D.timers, function(e) {
						return t === e.elem
					}).length
				}, D.offset = {
					setOffset: function(e, t, i) {
						var n, s, a, o, r = D.css(e, "position"),
							l = D(e),
							u = {};
						"static" === r && (e.style.position = "relative"), a = l.offset(), n = D.css(e, "top"), o = D.css(e, "left"), r = ("absolute" === r || "fixed" === r) && -1 < (n + o).indexOf("auto") ? (s = (r = l.position()).top, r.left) : (s = parseFloat(n) || 0, parseFloat(o) || 0), null != (t = b(t) ? t.call(e, i, D.extend({}, a)) : t).top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + r), "using" in t ? t.using.call(e, u) : l.css(u)
					}
				}, D.fn.extend({
					offset: function(t) {
						var e, i;
						return arguments.length ? void 0 === t ? this : this.each(function(e) {
							D.offset.setOffset(this, t, e)
						}) : (i = this[0]) ? i.getClientRects().length ? (e = i.getBoundingClientRect(), i = i.ownerDocument.defaultView, {
							top: e.top + i.pageYOffset,
							left: e.left + i.pageXOffset
						}) : {
							top: 0,
							left: 0
						} : void 0
					},
					position: function() {
						if (this[0]) {
							var e, t, i, n = this[0],
								s = {
									top: 0,
									left: 0
								};
							if ("fixed" === D.css(n, "position")) t = n.getBoundingClientRect();
							else {
								for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === D.css(e, "position");) e = e.parentNode;
								e && e !== n && 1 === e.nodeType && ((s = D(e).offset()).top += D.css(e, "borderTopWidth", !0), s.left += D.css(e, "borderLeftWidth", !0))
							}
							return {
								top: t.top - s.top - D.css(n, "marginTop", !0),
								left: t.left - s.left - D.css(n, "marginLeft", !0)
							}
						}
					},
					offsetParent: function() {
						return this.map(function() {
							for (var e = this.offsetParent; e && "static" === D.css(e, "position");) e = e.offsetParent;
							return e || bt
						})
					}
				}), D.each({
					scrollLeft: "pageXOffset",
					scrollTop: "pageYOffset"
				}, function(t, s) {
					var a = "pageYOffset" === s;
					D.fn[t] = function(e) {
						return c(this, function(e, t, i) {
							var n;
							if (L(e) ? n = e : 9 === e.nodeType && (n = e.defaultView), void 0 === i) return n ? n[s] : e[t];
							n ? n.scrollTo(a ? n.pageXOffset : i, a ? i : n.pageYOffset) : e[t] = i
						}, t, e, arguments.length)
					}
				}), D.each(["top", "left"], function(e, i) {
					D.cssHooks[i] = ai(m.pixelPosition, function(e, t) {
						if (t) return t = si(e, i), Jt.test(t) ? D(e).position()[i] + "px" : t
					})
				}), D.each({
					Height: "height",
					Width: "width"
				}, function(o, r) {
					D.each({
						padding: "inner" + o,
						content: r,
						"": "outer" + o
					}, function(n, a) {
						D.fn[a] = function(e, t) {
							var i = arguments.length && (n || "boolean" != typeof e),
								s = n || (!0 === e || !0 === t ? "margin" : "border");
							return c(this, function(e, t, i) {
								var n;
								return L(e) ? 0 === a.indexOf("outer") ? e["inner" + o] : e.document.documentElement["client" + o] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + o], n["scroll" + o], e.body["offset" + o], n["offset" + o], n["client" + o])) : void 0 === i ? D.css(e, t, s) : D.style(e, t, i, s)
							}, r, i ? e : void 0, i)
						}
					})
				}), D.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
					D.fn[t] = function(e) {
						return this.on(t, e)
					}
				}), D.fn.extend({
					bind: function(e, t, i) {
						return this.on(e, null, t, i)
					},
					unbind: function(e, t) {
						return this.off(e, null, t)
					},
					delegate: function(e, t, i, n) {
						return this.on(t, e, i, n)
					},
					undelegate: function(e, t, i) {
						return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
					},
					hover: function(e, t) {
						return this.on("mouseenter", e).on("mouseleave", t || e)
					}
				}), D.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
					D.fn[i] = function(e, t) {
						return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
					}
				}), /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
				on = (D.proxy = function(e, t) {
					var i, n;
					if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = r.call(arguments, 2), (n = function() {
						return e.apply(t || this, i.concat(r.call(arguments)))
					}).guid = e.guid = e.guid || D.guid++, n
				}, D.holdReady = function(e) {
					e ? D.readyWait++ : D.ready(!0)
				}, D.isArray = Array.isArray, D.parseJSON = JSON.parse, D.nodeName = _, D.isFunction = b, D.isWindow = L, D.camelCase = $, D.type = G, D.now = Date.now, D.isNumeric = function(e) {
					var t = D.type(e);
					return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
				}, D.trim = function(e) {
					return null == e ? "" : (e + "").replace(an, "$1")
				}, void 0 !== (cn = function() {
					return D
				}.apply(un, [])) && (ln.exports = cn), x.jQuery),
				rn = x.$;
			return D.noConflict = function(e) {
				return x.$ === D && (x.$ = rn), e && x.jQuery === D && (x.jQuery = on), D
			}, void 0 === H && (x.jQuery = x.$ = D), D
		})
	},
	80: function(e, t) {
		var c = window.jQuery,
			i = c.fn.select2.amd.require("select2/defaults");
		c.extend(i.defaults, {
			dropdownPosition: "auto"
		}), (i = c.fn.select2.amd.require("select2/dropdown/attachBody")).prototype._positionDropdown, i.prototype._positionDropdown = function() {
			var e = c(window),
				t = this.$dropdown.hasClass("select2-dropdown--above"),
				i = this.$dropdown.hasClass("select2-dropdown--below"),
				n = null,
				s = this.$container.offset(),
				a = (s.bottom = s.top + this.$container.outerHeight(!1), {
					height: this.$container.outerHeight(!1)
				});
			a.top = s.top, a.bottom = s.top + a.height;
			var o = this.$dropdown.outerHeight(!1),
				r = e.scrollTop(),
				e = e.scrollTop() + e.height(),
				r = r < s.top - o,
				e = e > s.bottom + o,
				s = {
					left: s.left,
					top: a.bottom
				},
				l = this.$dropdownParent,
				l = (l = "static" === l.css("position") ? l.offsetParent() : l).offset(),
				u = (s.top -= l.top, s.left -= l.left, this.options.get("dropdownPosition"));
			"above" === u || "below" === u ? n = u : (t || i || (n = "below"), e || !r || t ? !r && e && t && (n = "below") : n = "above"), ("above" == n || t && "below" !== n) && (s.top = a.top - l.top - o), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(s)
		}
	}
});