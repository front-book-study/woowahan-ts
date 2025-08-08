"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentRoute = void 0;
// 객체로 선언
var ROUTES = {
    LOGIN: '/login',
    SIGN_UP: '/signup',
    HOME: '/',
    MYPAGE: '/my',
};
// 1. 자동완성 가능.
exports.currentRoute = ROUTES['HOME'];
// 2. 새로운 속성 추가가능
ROUTES['SIGN_IN'] = '/signin';
console.log('NEW ROUTE ADDED TO ROUTES', ROUTES);
// 3. 속성 변경 가능
ROUTES['MYPAGE'] = '/mypage';
console.log('MYPAGE ROUTE MODIFIED', ROUTES);
