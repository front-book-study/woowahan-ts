"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentRoute = void 0;
// enum으로 객체 선언
var RouteType;
(function (RouteType) {
    RouteType["LOGIN"] = "/login";
    RouteType["SIGN_UP"] = "/signup";
    RouteType["HOME"] = "/";
    RouteType["MYPAGE"] = "/my";
})(RouteType || (RouteType = {}));
var ProgrammingLanguage;
(function (ProgrammingLanguage) {
    ProgrammingLanguage[ProgrammingLanguage["Typescript"] = 0] = "Typescript";
    ProgrammingLanguage[ProgrammingLanguage["Javascript"] = 1] = "Javascript";
    ProgrammingLanguage[ProgrammingLanguage["Python"] = 2] = "Python";
})(ProgrammingLanguage || (ProgrammingLanguage = {}));
// 1. 자동완성
exports.currentRoute = RouteType['HOME'];
console.log('CURRENT ROUTE', exports.currentRoute);
