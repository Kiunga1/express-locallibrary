const mongoose = require("mongoose");

const Schema =mongoose.Schema;

const GenreSchema = new Schema({
    name: {type:String, required: true, minLength: 3, maxLength: 100}
});

//Virtual for genre's url
GenreSchema.virtual("url").get(function () {
    //don't use arrow function as object will be neede later
    return `/catalog/genre/${this._id}`;
});

//Export model
module.exports = mongoose.model("Genre", GenreSchema)
