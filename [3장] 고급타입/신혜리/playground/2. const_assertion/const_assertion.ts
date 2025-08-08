// const assertion으로 객체 선언
const ROUTES = {
  LOGIN: '/login',
  SIGN_UP: '/signup',
  HOME: '/',
  MYPAGE: '/my',
} as const;

// 1. 자동완성 가능.
export const currentRoute = ROUTES['HOME'];
console.log('CURRENT ROUTE', currentRoute);

// 2. 새로운 속성 추가불가
// ROUTES['SIGN_IN'] = '/signin';
// ㄴ> tsconfig strict true일때만 에러, false일때는 가능
// ROUTES.NEW_PAGE = '/new';
// ㄴ> 항상 에러 :Property 'NEW_PAGE' does not exist on type '{ readonly LOGIN: "/login"; readonly SIGN_UP: "/signup"; readonly HOME: "/"; readonly MYPAGE: "/my"; }'.
console.log('NEW ROUTE CANT BE ADDED', ROUTES);

// 3. 속성 변경 불가능
// ROUTES['MYPAGE'] = '/mypage';
// ㄴ> 에러발생 :  Cannot assign to 'MYPAGE' because it is a read-only property.ts(2540)
console.log('MYPAGE ROUTE CANT BE MODIFIED', ROUTES);

// 4. 속성 타입 = 특정 값으로 제한 (literal type)
type RouteType = (typeof ROUTES)['MYPAGE']; // RouteType = '/my'
