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

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond('Princess Caroline', UserResponse.No);

type Pet = 'cat' | 'dog';
const myPet: Pet = 'cat';

const printMyPet = (type: Pet) => {
  if (type === 'cat') {
  }
};

printMyPet(myPet);
