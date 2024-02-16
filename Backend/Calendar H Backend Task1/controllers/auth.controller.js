import authService from "../services/auth.service.js";

class authController {
  async login(req, res) {
    const { usernameOrEmail, password } = req.body;
    const message = await authService.login({ usernameOrEmail, password });
    res.status(200).json({ message });
  }

  async register(req, res) {
    const message = await authService.register(req.body);
    res.status(201).json({ message });
  }
}

export default new authController();
