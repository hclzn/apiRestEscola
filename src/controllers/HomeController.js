class HomeController {
  index(req, res) {
    res.send('Olá! Você está na home :)');
  }
}

export default new HomeController();
