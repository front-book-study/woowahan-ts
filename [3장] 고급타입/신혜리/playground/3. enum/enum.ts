// enum으로 객체 선언
enum RouteType {
  LOGIN = '/login',
  SIGN_UP = '/signup',
  HOME = '/',
  MYPAGE = '/my',
}

enum ProgrammingLanguage {
  Typescript,
  Javascript,
  Python,
}

// 1. 자동완성
export const currentRoute = RouteType['HOME'];
console.log('CURRENT ROUTE', currentRoute);
