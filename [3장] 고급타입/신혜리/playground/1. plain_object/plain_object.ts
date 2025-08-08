// 객체로 선언
const ROUTES = {
  LOGIN: '/login',
  SIGN_UP: '/signup',
  HOME: '/',
  MYPAGE: '/my',
};

// 1. 자동완성 가능.
export const currentRoute = ROUTES['HOME'];
console.log('CURRENT ROUTE', currentRoute);

// 2. 새로운 속성 추가가능
// ROUTES['SIGN_IN'] = '/signin';
// ㄴ> strict mode일때는 에러발생 : Element implicitly has an 'any' type because expression of type '"SIGN_IN"' can't be used to index type '{ LOGIN: string; SIGN_UP: string; HOME: string; MYPAGE: string; }'. Property 'SIGN_IN' does not exist on type '{ LOGIN: string; SIGN_UP: string; HOME: string; MYPAGE: string; }'.ts(7053)
// ㄴ> strict mode가 아닐때는 정상동작
console.log('NEW ROUTE ADDED TO ROUTES', ROUTES);

// 3. 속성 변경 가능
ROUTES['MYPAGE'] = '/mypage';
console.log('MYPAGE ROUTE MODIFIED', ROUTES);

// 4. 속성 타입 = 범용적으로 적용 (widened type)
type RouteType = (typeof ROUTES)['MYPAGE']; // RouteType = string
