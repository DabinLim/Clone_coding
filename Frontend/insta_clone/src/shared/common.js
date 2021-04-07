export const idCheck = (id) => {
    // ^ (첫글자) 0-9까지 a-z까지 A-Z까지 , ([-_.의 특수문자 및 숫자 알파벳 여러개])*
    let _reg = /^[a-zA-z0-9].{4,12}$/;
    return _reg.test(id);
}

export const pwdCheck = (pwd) => {
    let _reg = /^[!@#-_.*a-zA-z0-9].{7,16}$/;
    return _reg.test(pwd)
}