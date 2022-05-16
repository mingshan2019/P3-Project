//https://mongoosejs.com/docs/guide.html
const mongoose = require('mongooose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    isPremium: {type: Boolean, default:false},
    plan_endDate: Date,
    portfolio:{
      template: {
        palette:String,
        css:String,
      },
      link:[{
        tag: String,
        description: String,
        url: String,
        time_to_post: Date,
        post_end:Date,
      }],

    },},
    {
    collection: 'users',
    },
);

const User=mongoose.model('user', userSchema);






