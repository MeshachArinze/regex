const inputs = document.querySelectorAll('input');

// const patterns = {
//     telephone: /^\d{11}$/,
//     username: /^\w{15, 20}$/i,
//     email: ''
// };

const patterns = [
    {
        telephone: /^\d{11}$/,
        username: /^\w{15, 20}$/i, 
        email: /^\a-zA-Z\d\s{20, 25}$/
    }
]

const validate = (field, regex)=> {
    //console.log(regex.test(field.value));
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach( (input)=> {
    input.addEventListener('keyup', (e)=> {
        console.log(e.target.attributes.name.value);
        validate(e.target, patterns[0].telephone);
    })
});

const pattern = patterns.find(pattern => {
    console.log(pattern);
});

