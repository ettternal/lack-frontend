import {UserType} from "../models/user";
//写了一套get，set方法，使用currentUser变量存储当前变量的值

let currentUser:UserType;

const setCurrentUserState = (user:UserType) =>{
    currentUser = user;

}


const getCurrentUserState = () : UserType =>{
    return currentUser;

}

export {
    setCurrentUserState,
    getCurrentUserState,
}


