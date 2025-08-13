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
export const currentRoute = RouteType['HOME'];
console.log('CURRENT ROUTE', currentRoute);
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    // ...
}
respond('Princess Caroline', UserResponse.No);
const myPet = 'cat';
const printMyPet = (type) => {
    if (type === 'cat') {
    }
};
printMyPet(myPet);
