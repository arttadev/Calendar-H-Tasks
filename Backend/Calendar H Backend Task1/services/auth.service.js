import RegisterSchema from "../model/UserModel.js";

class authService {
  async login(data) {
    const { usernameOrEmail, password } = data;
    try {
      const user = await RegisterSchema.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      });

      if (!user) {
        res.status(401).json({ message: "no user with this email" });
      }
      if (user.password !== password) {
        res.status(401).json({ message: "Invalid credentials" });
      }
      return "Login successful";
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async register(data) {
    const {
      firstName,
      lastName,
      username,
      email,
      gender,
      password,
      confirmPassword,
    } = data;
    try {
      const newUser = new RegisterSchema({
        firstName,
        lastName,
        username,
        email,
        gender,
        password,
        confirmPassword,
      });
      await newUser.save();

      return "User successfully registered.";
    } catch (error) {
      console.error("Failed to save the user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new authService();
