import mongoose from 'mongoose';
const UserSchema = mongoose.Schema;

const UserModel = new UserSchema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    shop: {type: String, required: true},
});

const User = mongoose.model("user",UserModel);

export default User;