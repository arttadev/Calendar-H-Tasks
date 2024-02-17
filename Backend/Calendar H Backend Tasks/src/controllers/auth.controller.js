import authService from "../services/auth.service.js";

class authController {
  async login(req, res) {
    const response = await authService.login(req.body);
    if (response.error) {
      return res.status(401).json({ error: response.error });
    }
    res.status(200).json({ message: response.message, token: response.token });
  }

  async register(req, res) {
    const response = await authService.register(req.body);
    if (response.error) {
      return res.status(400).json({ error: response.error });
    }
    res.status(201).json({ message: response.message });
  }
}


export default new authController();