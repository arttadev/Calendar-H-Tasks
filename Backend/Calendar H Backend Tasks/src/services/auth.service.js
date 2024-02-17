import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import RegisterModel from '../model/UserModel.js'

const jwtSecret = process.env.JWT_SECRET || 'Y3QzMIG+2knFsgk/9LWz2MjL4I+Hj8wJ+Mj3V+7+Ijk=';

class authService {
  async login(data) {
    const { usernameOrEmail, password } = data;
    try {
      const user = await RegisterModel.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      });

      if (!user) {
        return { error: "No user found with this email or username" };
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return { error: "Invalid credentials" };
      }

      const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
      return { message: "Login successful", token };
    } catch (error) {
      console.error("Login error:", error);
      return { error: "Internal server error" };
    }
  }

  async register(data) {
    const { username, email, password } = data;
    try {
      const userExists = await RegisterModel.findOne({ $or: [{ username }, { email }] });
      if (userExists) {
        return { error: "User already exists" };
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new RegisterModel({
        ...data,
        password: hashedPassword,
      });
      await newUser.save();

      return "User successfully registered.";
    } catch (error) {
      console.error("Registration error:", error);
      return { error: "Failed to register user" };
    }
  }
}

export default new authService();