function isAuthenticated(req, res, next) {
  if (usuarioEstáAutenticado) {
    return next();
  }
  res.redirect('/login');
}

app.get('/login', (req, res) => {
  if (usuarioEstáAutenticado) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

app.get('/minha-rota-protegida', isAuthenticated, (req, res) => {
  res.render('paginaProtegida');
});

app.get('/logout', (req, res) => {
  res.redirect('/login');
});
