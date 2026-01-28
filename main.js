// ---------------------------
//      MENU MOBILE RESPONSIVO E FUNÇÕES
// ---------------------------
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Menu Mobile (Hambúrguer)
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

    // Opcional: Fecha o menu ao clicar em um link (melhor experiência)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // 2. Cookie bar
  const cookieBar = document.getElementById('cookieBar');
  const acceptCookies = document.getElementById('acceptCookies');
  
  if (localStorage.getItem('cookiesAccepted')) {
    if (cookieBar) cookieBar.style.display = 'none';
  }
  
  if (acceptCookies && cookieBar) {
    acceptCookies.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', '1');
      cookieBar.style.display = 'none';
    });
  }

  // 3. Ano do rodapé
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // 4. WhatsApp (Corrigido aspas/crases)
  const phone = '11994283919';
  const waLink = phone ? `https://wa.me/${phone}` : '#';
  const waButton = document.getElementById('whatsappLink');
  if (waButton) waButton.setAttribute('href', waLink);

  // 5. Formulário de contato (Corrigido aspas/crases)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nome = data.get('nome');
      const email = data.get('email');
      const mensagem = data.get('mensagem');
      
      const subject = encodeURIComponent('Contato pelo site - Arte de Cuidar');
      const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
      
      // Substitua 'seuemail@exemplo.com' pelo seu e-mail real
      window.location.href = `mailto:contato@artedecuidar.com?subject=${subject}&body=${body}`;
    });
  }
});