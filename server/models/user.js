var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
    fname: {
    	type: String,
    	required: [true, "Frist Name can't be empty"]
    },
    lname: {
    	type: String,
    	required: [true, "Last Name can't be empty"]
    },
    email: {
    	type: String,
    	required: [true, "Email can't be empty"]
    },
    bio: {
        type:String
    },
    location:{
    	type: String,
    	required: [true, "Location can't be empty"]
    },
    password:{
    	type:String,
    	required: [true, "Password can't be empty"],
    	minlength: 8,
    	maxlength: 32,
    	// validate: {
    	// 	validator: function(value){
    	// 		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
    	// 	},
    	// 	message: "Password failed Validation, You must have at least 1 number, uppercase and special character"
    	// }
    }

},{timestamps: true});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

mongoose.model('User', userSchema);
