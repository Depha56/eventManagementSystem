const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
 name: { type: String, required: true },
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
});

// Hash the password before saving the user model
UserSchema.pre('save', async function (next) {
 if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
 }
 next();
});

// Compare the incoming password with the hashed password
UserSchema.methods.comparePassword = function (candidatePassword) {
 return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
