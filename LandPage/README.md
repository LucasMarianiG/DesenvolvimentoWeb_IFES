LandPage — Guia de Chás Detox

Página estática simples que apresenta um guia gratuito de chás detox. O objetivo é capturar e-mails dos visitantes e descrever benefícios do guia.

O que tem aqui
- `index.html` — arquivo principal da landing page.
- `style.css` — estilos da página.
- `cha.png` — imagem usada como logo/favicone.

Como visualizar

1) Abrir diretamente no navegador
   - Abra a pasta `LandPage` e dê um duplo-clique em `index.html`.

2) Rodar um servidor local (recomendado):

```powershell
cd 'C:\Users\lucas\DesenvolvimentoWeb_IFES\LandPage'
python -m http.server 8000
# depois abra http://localhost:8000
```

Observações
- O formulário é estático (action="#"). Para captar e-mails é necessário conectar um backend ou serviço externo.
- Edite `style.css` para personalizar cores e layout.
