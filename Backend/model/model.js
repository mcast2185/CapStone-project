const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const {slugify, slug} = require('slugify');

const LoginInfo = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  pwd: {
    type: String,
    required: true
  }
});

const BlogPostField = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});



// BlogPostField.pre('validate', function() {
//   if (this.title){
//     this.slug = slugify(this.title, {remove: /[*+~.()'"!:@]/, strict: true})
//   } 
// });



const User = mongoose.model("usercredentials", LoginInfo);
const BlogPost = mongoose.model("blogposts", BlogPostField)
const mySchemas = {'BlogPost': BlogPost, 'User': User}
module.exports = mySchemas;