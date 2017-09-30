import React from 'react';

export default class User {
    constructor (userName, isLogin, hasToken) {
        this.userName = userName;
        this.isLogin = isLogin;
        this.hasToken = hasToken;
    }
}
