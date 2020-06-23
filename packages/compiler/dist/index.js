"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var babel = require("@babel/core");
var compileConf = {
    // 博客附加脚本的编译默认配置
    blog: {
        presets: [["@babel/preset-env", { targets: { ie: "11" } }]]
    }
};
var proxy = new Proxy({}, {
    get: function (target, propKey) {
        return function (sourceCode, opt) {
            return babel.transform(sourceCode, __assign(__assign({}, compileConf[propKey]), opt));
        };
    }
});
exports["default"] = proxy;
