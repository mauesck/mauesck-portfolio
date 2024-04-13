// ----- titulo
document.addEventListener('DOMContentLoaded', function () {
    mostrarLetraPorLetra("Olá, Seja bem-vindo ao meu portfólio!");
});

function mostrarLetraPorLetra(elemento) {
    const titulo = document.getElementById('titulo-intro');
    const texto = document.getElementById("intro-texto");
    let i = 0;

    function mostrarProximaLetra() {
        if (i < elemento.length) {
            titulo.textContent += elemento.charAt(i);
            i++;
            setTimeout(mostrarProximaLetra, 80); // Intervalo de 0.1 segundo
        } else {
            setTimeout(() => {
                texto.style.display = "flex";
                setTimeout(() => {
                    texto.style.opacity = "1";
                }, 100);
            }, 500);
        }
    }
    mostrarProximaLetra();
}

// ----- efeito na logo
function efeito() {
    var receba;
    const myname = document.getElementById('myname');
    setInterval(() => {

        receba = 200;
        if (receba === 200) {
            myname.style.opacity = 0;
        }

        setTimeout(() => {
            if (myname.textContent === 'Thiago Mauesck') {
                myname.textContent = 'Desenvolvedor Web';
                myname.style.marginLeft = 0;
                myname.style.opacity = 1;
            } else {
                myname.textContent = 'Thiago Mauesck';
                myname.style.marginLeft = 0;
                myname.style.opacity = 1;
            }
        }, 300);

        myname.style.marginLeft = receba + 'px';

    }, 5000);
}
efeito();

// ----- trajetoria
var textoAnt = '';
function trajetoria(element, ano) {
    document.querySelectorAll('.circulo').forEach(function (el) {
        el.classList.remove('circulo-ativo');
    });

    element.classList.add('circulo-ativo');

    if (window.innerWidth > 800) {
        document.querySelector('.div-trajetoria').style.width = '80%';
        document.querySelector('.div-trajetoria').style.height = '200px';
    } else {
        document.querySelector('.div-trajetoria').style.height = '570px';
        document.querySelector('.div-trajetoria').style.justifyContent = 'start';
    }

    const texto = document.getElementById(ano);
    if (texto != textoAnt) {
        //texto.classList.add('trajetoria-ativa');
        texto.style.display = 'flex';
        setTimeout(() => {
            texto.style.opacity = '1';
        }, 1);
        if (textoAnt != '') {
            textoAnt.style.display = 'none';
            textoAnt.style.opacity = '0';
        }
        textoAnt = texto;
    }
}

// ---------- valida formulario
function validaFormulario() {
    // Validação do campo Nome
    var nome = document.getElementById('fale-nome').value;
    if (nome.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    // Validação do campo E-mail
    var email = document.getElementById('fale-email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    // Validação do campo Telefone (opcional, apenas números)
    var telefone = document.getElementById('fale-telefone').value;
    var telefoneRegex = /^\d*$/;
    if (telefone.trim() !== '' && !telefoneRegex.test(telefone)) {
        alert('Por favor, insira apenas números no campo Telefone.');
        return false;
    }

    // Validação do campo Mensagem
    var mensagem = document.getElementById('mensagem').value;
    if (mensagem.trim() === '') {
        alert('Por favor, preencha o campo Mensagem.');
        return false;
    }

    // Se todas as validações passarem, o formulário será enviado
    return true;
}