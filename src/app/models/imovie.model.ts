export class IMovie {
    //you need to give it some default values to the object so it doesn´t give you an error
    constructor(_id= 0, title = '', genre = '', status = '', poster = ''){
        this._id = _id;
        this.title = title;
        this.genre = genre;
        this.status = status;
        this.poster = poster;
    }
    _id: Number;
    title: String;
    genre: String;
    status: String;
    poster: String;
}

