import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.rediff.com%2Fcricket%2Freport%2Fplayers-barred-from-using-india-logo-in-domestic-cricket%2F20141207.htm&psig=AOvVaw34l394i0TyIiZqgD9mzSri&ust=1721228888726000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIi_l7rrq4cDFQAAAAAdAAAAABAE',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;