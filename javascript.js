            
let data;
let leadSaved;
let theme;
let theWheel;
let ROULETE_ID="72720a86-85a3-4a85-b915-df9ab2e0930e"
let ROULETE_TOKEN="fpzj0zgzlkb"

const request = axios.create({
    baseURL: 'http://localhost:8021',
});

const handleCreateTemplate = () => {
    var container = document.createElement("div");
        container.classList.add('kodex-roullete');
        container.setAttribute("id", 'kodex-roullete-id');

    var content = document.createElement("div");
        content.classList.add('kodex-content');

    var containerRow = document.createElement("div");
        containerRow.classList.add('kodex-container-row');

    var contentRoullete = document.createElement("div");
        contentRoullete.classList.add('kodex-content-roullete')

    var formRow = document.createElement("div");
        formRow.classList.add('kodex-form-row');

    var formRow = document.createElement("div");
        formRow.classList.add('kodex-form-row');

    var objectElement = document.createElement('object');
        objectElement.setAttribute('type', 'image/svg+xml');
        objectElement.setAttribute('width', '50');
        objectElement.setAttribute('height', '50');
        objectElement.setAttribute('data', 'spin.svg');
        objectElement.setAttribute('id', 'kodex-logo-main');

    var containerRoullete = document.createElement("div");
        containerRoullete.classList.add('kodex-container-roullete');

    var canvas = document.createElement("canvas");
        canvas.setAttribute('id', 'canvas');
        canvas.setAttribute('width', '440');
        canvas.setAttribute('height', '440');


    var containerLogoRoullete = document.createElement("div");
        containerLogoRoullete.classList.add('kodex-container-logo-roullete');

    var containerLogoRoulleteImage = document.createElement("div");
        containerLogoRoulleteImage.classList.add('kodex-container-logo-roullete-image');

    var containerContentForm = document.createElement("div");
        containerContentForm.classList.add('kodex-content-form');
        containerContentForm.setAttribute("id", 'kodex-content-form');
        
    var containerContentFormTitle = document.createElement("h5");
        containerContentFormTitle.classList.add('kodex-content-form-title');
        containerContentFormTitle.setAttribute("id", 'kodex-content-form-title');

    var containerContentFormSubtitle = document.createElement("p");
        containerContentFormSubtitle.classList.add('kodex-content-form-subtitle');
        containerContentFormSubtitle.setAttribute("id", 'kodex-content-form-subtitle');

    var containerForm = document.createElement("form");
        containerForm.setAttribute("id", 'form');
        containerForm.setAttribute("name", 'myForm');
        containerForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            handleSubmit(event); 
        });
        

    var containerButtonSubmit = document.createElement("div");
        containerButtonSubmit.classList.add('kodex-container-button-submit');

    var buttonSubmit = document.createElement("button");
        buttonSubmit.classList.add('kodex-button-submit');
        buttonSubmit.setAttribute("id", 'kodex-spinButton');
        buttonSubmit.setAttribute("type", 'submit');
        buttonSubmit.setAttribute("form", 'form');

    var containerContentResult = document.createElement("div");
        containerContentResult.setAttribute("id", 'kodex-content-result');
        containerContentResult.classList.add('kodex-content-result');
        containerContentResult.classList.add('kodex-no-visibility');

    var containerResultTitle = document.createElement("h5");
        containerResultTitle.setAttribute("id", 'kodex-result-title');
        containerResultTitle.classList.add('kodex-content-form-title');

    var containerResultSubtitle = document.createElement("p");
        containerResultSubtitle.setAttribute("id", 'kodex-result-subtitle');
        containerResultSubtitle.classList.add('kodex-content-form-subtitle');

    var footer = document.createElement("footer");
        footer.classList.add('kodex-container-footer');

    var footerAnchor = document.createElement("a");
        footerAnchor.setAttribute("href", 'https://www.kodex.dev.br/');
        footerAnchor.setAttribute("target", '_blank');

    var footerImg = document.createElement("img");
        footerImg.classList.add('kodex-logo');
        footerImg.setAttribute("src", 'https://drive.google.com/thumbnail?id=1PENrpGnBFuupSg_npwz2cIh1A28teWv4');

    
    container.appendChild(content);
    content.appendChild(containerRow);
    containerRow.appendChild(contentRoullete);
    contentRoullete.appendChild(formRow);
    formRow.appendChild(objectElement);

    contentRoullete.appendChild(containerRoullete);
    containerRoullete.appendChild(canvas);

    containerRoullete.appendChild(containerLogoRoullete);
    containerLogoRoullete.appendChild(containerLogoRoulleteImage);

    containerRow.appendChild(containerContentForm);
    containerContentForm.appendChild(containerContentFormTitle);
    containerContentForm.appendChild(containerContentFormSubtitle);
    containerContentForm.appendChild(containerForm);
    containerContentForm.appendChild(containerButtonSubmit);
    containerButtonSubmit.appendChild(buttonSubmit);

    containerRow.appendChild(containerContentResult);
    containerContentResult.appendChild(containerResultTitle);
    containerContentResult.appendChild(containerResultSubtitle);

    content.appendChild(footer);
    footer.appendChild(footerAnchor);
    footerAnchor.appendChild(footerImg);
    

    const body = document.getElementsByTagName('body')[0];
    body.appendChild(container);
}


const handleVisibilityRoullete = () => {
    document.getElementsByName('body')[0].style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function() {
    // console.log('asdasdas')
    // const body = document.getElementsByTagName('body')[0];
    
    // var container = document.createElement("div");
    // container.classList.add('kodex-container')
    
    handleCreateTemplate()
    body.appendChild(container)
  });

// document.addEventListener('DOMContentLoaded', function() {
//     // Código que será executado quando o DOM estiver completamente carregado
//     console.log('DOM completamente carregado e analisado');
//     console.log('aquii')
//     console.log('document.getElementsByName()', document.getElementsByTagName('body'))
//     document.getElementsByTagName('body')[0].style.display = 'block'
//   });

const getBrightnessSegment = async (color) => {
    var hex = color;
    var nib = hex.split(''); 

    var r = parseInt(nib[1]+nib[2],16);
    var g = parseInt(nib[3]+nib[4],16);
    var b = parseInt(nib[5]+nib[6],16);

    var brightness = await ( r * 299 + g * 587 + b * 114) / 1000;

    if (brightness > 128) {
        return '#000000'
    }

    return '#FFFFFF'
}

const handleAddThemePage = () => {
    document.getElementsByTagName("button")[0].style.background = theme.secondary;
    document.getElementsByClassName("kodex-roullete")[0].style.background = theme.background;
}

const handleConfigInput = (properties, field) => {
    var container = document.createElement("div");
        container.classList.add('container-input')

        var input = document.createElement("input");
        properties.forEach(element => {
            input[element.label] = element.value
        });

        var paragraphError = document.createElement("p");
        paragraphError.setAttribute("id", `${field}-error`);

        
        container.appendChild(input);
        container.appendChild(paragraphError);

        document.getElementById('form').appendChild(container);
}

const handleCreateInput = (fields) => {

    if (fields.hasOwnProperty('exigeNome')) {
        handleConfigInput([
            {label: 'type', value: 'text'},
            {label: 'name', value: 'name'},
            {label: 'placeholder', value: 'Nome'},
            {label: 'minLength', value: '3'},
            {label: 'id', value: 'nameInput'},
            {label: 'onblur', value: (event) =>  handleValidation(event, 'name')},
        ], 'name')
    }

    if (fields.hasOwnProperty('exigeEmail')) {
        handleConfigInput([
            {label: 'type', value: 'email'},
            {label: 'name', value: 'email'},
            {label: 'placeholder', value: 'E-mail'},
            {label: 'maxLength', value: '60'},
            {label: 'id', value: 'emailInput'},
            {label: 'onblur', value: (event) =>  handleValidation(event, 'email')},
        ], 'email')
    }

    if (fields.hasOwnProperty('exigeTelefone')) {
        handleConfigInput([
            {label: 'type', value: 'phone'},
            {label: 'name', value: 'phone'},
            {label: 'placeholder', value: 'Telefone'},
            {label: 'maxLength', value: '15'},
            {label: 'id', value: 'phoneInput'},
            {label: 'onblur', value: (event) =>  checkPhone(event)},
            {label: 'onkeyup', value: (event) =>  handleValidation(event, 'phone')},
        ], 'phone')
    }

    if (fields.hasOwnProperty('exigeDoc')) {
        handleConfigInput([
            {label: 'type', value: 'text'},
            {label: 'name', value: 'cpf'},
            {label: 'placeholder', value: 'CPF'},
            {label: 'maxLength', value: '14'},
            {label: 'id', value: 'cpfInput'},
            {label: 'onblur', value: (event) =>  checkCPF(event.target.value, event.target)},
            {label: 'onkeyup', value: (event) =>  handleValidation(event, 'cpf')},
        ], 'cpf')
    }
}

const handleConfigForm = () => {
    const form = data.configRoleta.formulario;
    document.getElementById("kodex-content-form-title").textContent = form.titulo;
    document.getElementById("kodex-content-form-subtitle").textContent = form.descricao;
    document.getElementById("kodex-spinButton").textContent = form.labelBotao;

    handleCreateInput(data.configRoleta.camposExigidos)
}

const handleVisibleLeadAlreadyCaptured = () => {
    const hasMessageLeadCaptured = document.getElementById('message-lead-captured');
    if (!hasMessageLeadCaptured) {
        const paragraph = document.createElement("p");
        paragraph.classList.add('kodex-lead-invalid');
        paragraph.setAttribute('id', 'message-lead-captured');

        paragraph.innerHTML = 'Email ou celular já utilizado';

        const containerForm = document.getElementById('kodex-content-form')

        containerForm.appendChild(paragraph);
    }
}


const handleSaveLead = async (info) => {
    const lead = {
        nome: info.name,
        email: info.email,
        telefone: info.phone,
        documento: info.cpf,
        ip: "127.0.0.1",
        device: "chrome desktop",
        token: ROULETE_TOKEN,
    }

    try {
        const response = await request.post('/lead', lead, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        if (error.response.status === 400) {
            console.log('boa')
            handleVisibleLeadAlreadyCaptured()
        }
        console.log('error', error)
    }
}

const handleCheckCookie = () => {
    console.log('data ja', data)
    // document.cookie = "token=data.token; expires=Fri, 26 Jul 2024 14:19:50 UTC; path=/";
    console.log('cookie2', document.cookie.indexOf("gravado") > 0)

    if (document.cookie.indexOf("kodex-token-roullete") < 0) {
        console.log('entrou if')
        document.cookie = `kodex-token-roullete=${data.tokenDoCookie}; expires=Fri, 11 Ago 2024 14:19:50 UTC; path=/`;
    }
}


window.onload = async function() {
    try {
        const response = await request.get(`/roleta/token/${ROULETE_TOKEN}`);
        data = response.data;
        console.log('data', data)
        const colors = response.data.configRoleta.colors;
        theme = {
            primary: colors.roleta[0],
            secondary: colors.roleta[1],
            complementary: colors.roleta[2],
            background: colors.fundo
        }
        handleCheckCookie()
        handleAddThemePage()
        handleConfigForm()
        handleConfigRoullete()
    } catch (error) {
        console.log('error', error)
    }
}

const getColorSegment = async (index, color) => {
    const maxColor = 3;
    const rest = index % maxColor;
    switch (rest) {
    case 0:
        return color[0];
    case 1:
        return color[1];
    case 2:
        return color[2];
    default:
        return color[0];
    }
}

const createSegments = async () => {
    const segments = [];
    await Promise.all(data.fatiasRoleta.map(async (item, index) => {
        const colorSegment = await getColorSegment(index, data.configRoleta.colors.roleta)
        const brightnessSegment = await getBrightnessSegment(colorSegment)
        segments.push({
            'fillStyle' : colorSegment,
            'text' : item.label, 
            'textFillStyle': brightnessSegment,
            'textLineWidth': 2,
            'lineWidth': 5,
            'strokeStyle' : '#fff',
        })
    }))

    return segments
}

const roulleteInformations = (segments) => {
    theWheel = new Winwheel({
        'numSegments'  : data.fatiasRoleta.length,         // Number of segments
        'textFontSize' : 18,
        'lineWidth'   : 2,
        'innerRadius' : 40,
        'fillStyle'       : '#FFF',
        'textFontSize'    : 20,             // hollow space inside the wheel.
        'textMargin'      : 0,
        segments,
        'animation' :               // Definition of the animation
        {
            'type'     : 'spinToStop',
            'duration' : 8,
            'spins'    : data.fatiasRoleta.length,
            'callbackFinished' : onFishedRoullete,
            'callbackSound' : playSound,	// Specify function to call when sound is to be triggered.
        },
    });

    return theWheel
}

const handleConfigRoullete = async () => {
    const segments = await createSegments();
    roulleteInformations(segments);
}

let audio = new Audio('tick.mp3');  // Create audio object and load desired file.
let success = new Audio('success-song.mp3');  // Create audio object and load desired file.

function startRoullete(result) {
    var stopAt = theWheel.getRandomForSegment(result.id);
    theWheel.animation.stopAngle = stopAt;
    theWheel.startAnimation()
}

function playSound(){
    // Stop and rewind the sound (stops it if already playing).
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}


function handleConfigResult(text) {
    const configResult = leadSaved.win ? data.configRoleta.telaVencedor : data.configRoleta.telaPerdedor

    const contentForm = document.getElementById('kodex-content-form')
    const contentResult = document.getElementById('kodex-content-result')

    document.getElementById('kodex-result-title').innerHTML = configResult.titulo
    document.getElementById('kodex-result-subtitle').innerHTML = configResult.descricao

    contentForm.classList.add('kodex-no-visibility')
    contentResult.classList.remove('kodex-no-visibility')
}

function onFishedRoullete(indicatedSegment) {
    handleConfigResult(indicatedSegment);
    
    if (leadSaved.win) {
        success.play();
        startConfetti();
    }
}

function startConfetti() {
    const end = Date.now() + 15 * 1000;

    const colors = ["#bb0000", "#ffffff"];

    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        fullScreen: {
            zIndex: 10000
        },
    });

    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        fullScreen: {
            zIndex: 10000
        },
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    })();
}

const handleValidation = (event, type) => {
    let input = event.target
    if (type === 'phone') {
        input.value = phoneMask(input.value);
    } else if (type === 'email') {
        emailMask(input.value, input);
    } else if (type === 'name') {
        nameValidation(input.value, input);
    } else if (type === 'cpf') {
        input.value = cpfMask(input.value);
    }
}


const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

const cpfMask = (value) => {
    value = value.replace(/\D/g, "");    
    value = value.replace(/^(\d{3})/g, "$1.");
    value = value.replace(/(\d{3})(\d{3})/g, "$1.$2-");        
    return value
}

const checkPhone = (event) => {
    addInputNotValid(event.target, "Celular inválido")

    const paragraphLeadCaptured = document.getElementById('message-lead-captured');

    if (paragraphLeadCaptured) {
        paragraphLeadCaptured.remove();
    }

    if (event.target.value.length == 15) {
        return addInputValid(event.target)
    }
    
}

const handleCheckCPF = (value) => {
    var sumCPF;
    var rest;
    sumCPF = 0;
    if (value == "00000000000") return false;

    for (i=1; i<=9; i++) sumCPF = sumCPF + parseInt(value.substring(i-1, i)) * (11 - i);
    rest = (sumCPF * 10) % 11;

        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(value.substring(9, 10)) ) return false;

    sumCPF = 0;
        for (i = 1; i <= 10; i++) sumCPF = sumCPF + parseInt(value.substring(i-1, i)) * (12 - i);
        rest = (sumCPF * 10) % 11;

        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(value.substring(10, 11) ) ) return false;
        return true;
}

const checkCPF = (value, field) => {
    const cpfWithoutMask = value.replace(/\D/g, '');
    const isValid = handleCheckCPF(cpfWithoutMask)

    if (isValid) {
        return addInputValid(field)
    }
    
    addInputNotValid(field, "CPF inválido")
} 

const emailMask = (value, field) => {
    const paragraphLeadCaptured = document.getElementById('message-lead-captured');

    if (paragraphLeadCaptured) {
        paragraphLeadCaptured.remove();
    }

    if (/.+@.+\.[A-Za-z]+$/.test(value)) {
        return addInputValid(field)
    }
    
    addInputNotValid(field, "E-mail inválido")

}

const nameValidation = (value, field) => {
    if (value.length > 2) {
        return addInputValid(field)
    }
    
    addInputNotValid(field, "Digite um nome maior que 2 caracteres")
}

const addInputValid = (field) => {
    field.nextElementSibling.textContent = '';
    field.nextElementSibling.classList.remove('message-invalid')
    field.classList.remove('input-not-valid')
}

const addInputNotValid = (field, message) => {
    field.nextElementSibling.textContent = message;
    field.nextElementSibling.classList.add('message-invalid')
    field.classList.add('input-not-valid')
}

const handleSubmit = async (event) => {
    // startConfetti(); 
    console.log('baooooo')
    event.preventDefault();
    const isValidForm = handleValidateForm(event);
    
    if (isValidForm.isValid) {
        leadSaved = await handleSaveLead(isValidForm.data)
        startRoullete(leadSaved)
    }
}

const handleValidateForm = (event) => {
    const name = document.getElementById("nameInput");
    const email = document.getElementById("emailInput");
    const phone = document.getElementById("phoneInput");
    const cpf = document.getElementById("cpfInput");

    let isValid = true;

    if (name && name.value === '') {
        addInputNotValid(name, "Digite um nome válido.")
        isValid = false;
    }

    if (email && email.value === '' || !(/.+@.+\.[A-Za-z]+$/.test(email.value))) {
        addInputNotValid(email, "Digite um e-mail válido.")
        isValid = false;
    }

    if (phone && phone.value === '' || phone.value.length < 15) {
        addInputNotValid(phone, "Digite um telefone válido.")
        isValid = false;
    }

    if (cpf && cpf.value === '' || cpf.value.length < 14 || !handleCheckCPF(cpf.value.replace(/\D/g, ''))) {
        addInputNotValid(cpf, "Digite um CPF válido.")
        isValid = false;
    }
    
    return {
        isValid,
        data: {
            name: name.value || '',
            email: email.value || '',
            phone: phone.value.replace(/\D/g, '') || '',
            cpf: cpf.value.replace(/\D/g, '') || '',
        }
    }
}