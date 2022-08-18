const firstField = document.querySelector('.firstfields');
const secondField = document.querySelector('.secondFields');

const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const emailField = document.querySelector('#email');
const dobField = document.querySelector('#dob');
const profilePictureDisplay = document.querySelector('#profilePictureDisplay');
const profilePicture = document.querySelector('#profile_picture');
const currentYear = new Date().getFullYear;

nextBtn = document.querySelector('#nextBtn');
backBtn = document.querySelector('#backBtn');

nextBtn.addEventListener('click', e => {
    e.preventDefault();

    if (usernameField.value.length < 8) {
        console.log('Too short username')
        return
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField.value))) {
        console.log("You have entered an invalid email address!")
        return
    }
    else if (passwordField.value.length < 8) {
        console.log('Too short password')
        return
    }

    firstField.classList.remove('show');
    secondField.classList.add('show');
    secondField.classList.remove('hide')
})

backBtn.addEventListener('click', e => {
    e.preventDefault();

    firstField.classList.add('show');
    secondField.classList.remove('show');
    secondField.classList.add('hide')
})


dobField.addEventListener('change', e => {
    userYear = dobField.value.slice(0, 4)
    age = currentYear - userYear 
    if (age > 13) {
        return
    }
})

profilePicture.addEventListener('change', e => {
    picture = profilePicture.files[0];
    url = URL.createObjectURL(picture);
    profilePictureDisplay.src = url;
})