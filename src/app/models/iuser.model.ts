export class IUser {
    //you need to give it some default values to the object so it doesn´t give you an error
    constructor(_id= '', username = '', password = '', moviesId = [], avatar = ''){
        this._id = _id;
        this.username = username;
        this.password = password;
        this.moviesId = moviesId;
        this.avatar = avatar;
    }
    _id: String;
    username: String;
    password: String;
    moviesId: Array<any>;
    avatar: String;
}

