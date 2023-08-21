// question 1
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');


fileInput.addEventListener('change', function(event) {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    
    const reader = new FileReader();

    reader.onload = function(e) {
      
      const imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.classList.add('preview-image');
       

      imagePreview.innerHTML = '';
      imagePreview.appendChild(imgElement);
      imagePreview.style.width = '30rem'
    };

    reader.readAsDataURL(selectedFile);
  } else {
    imagePreview.innerHTML = '';
  }
});


// question 2
const toggleButton = document.querySelector('#btn')
const body = document.querySelector('body')
const themeStylesheet = document.querySelector('#themeDisplay')

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeDisplay.textContent = 'Light Mode';
        const color2 = toggleButton.style.background = 'white'
        body.style.background = color2
        body.style.color = 'black'
      }
      else {
        body.classList.add('dark-mode');
        themeDisplay.textContent = 'Dark Mode';
        const color = toggleButton.style.background = 'black'
        body.style.background = color
        body.style.color = 'white'
      }
})

// question 3

const plus = document.querySelector('#btn2')
const minus = document.querySelector('#btn3')
const displayNumber = document.querySelector('#counterId')

let counterValue = 0;

function updateCounterDisplay() {
    displayNumber.textContent = counterValue
}

plus.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
})

minus.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--
        updateCounterDisplay()
    }else{
       alert("You can't go below zero")
    }
})


// question 4
const userName = document.querySelector('#name')
const userEmail = document.querySelector('#email')
const userPassword = document.querySelector('#Password')
const submit = document.querySelector('#submitForm')

submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (userName.value.length >= 3 && userPassword.value.length >= 8) {
    alert("Form Validation Sucessfull")
  }else{
    alert("Form Validation failed")
  }
} )
 
// question 5
const hideAndVisible = document.querySelector('#hAndV')
const toggleButton2= document.querySelector('#buttonImage')
const displayImage = document.querySelector('#imageDisplay')

let imageIsVisible = false

toggleButton2.addEventListener('click', () => {
  
  imageIsVisible =! imageIsVisible

  if (imageIsVisible) {
    displayImage.style.display = 'block'
    hideAndVisible.textContent = 'visible'
  } else{
    displayImage.style.display = 'none'
    hideAndVisible.textContent = 'hidden'
  }
})

// question 6
const dropDown = document.querySelector('#selectInput')

let dropDownArr = ["JavaScript", "Java", "Python", "C++"]

for (const a of dropDownArr) {
  const optionElement =document.createElement ('option');
  optionElement.textContent = a
  dropDown.appendChild(optionElement)
}

// question 7
const searchFilter = document.querySelector('#searchFilter')
const itemsArr = ["HTML", "CSS", "Tailwind CSS", "GitHub", "JavaScript"]
const searchBtn = document.querySelector('#searchBtn')
let inputValue = [];



searchBtn.addEventListener('click', () => {
  inputValue = searchFilter.value
  const mathchingItem = itemsArr.find(item => 
  item.toLowerCase() === inputValue.toLowerCase())

    if (mathchingItem) {
      document.querySelector('#result').textContent = `Found: ${mathchingItem}`
    } else {
      document.querySelector('#result').textContent = `Cannot find search again`
    }
})


// question 8
function updateTime() {

  let date = new Date()

  const hours = date.getHours().toString().padStart(2,'0')
  const minutes = date.getMinutes().toString().padStart(2,'0')
  const seconds = date.getSeconds().toString().padStart(2,'0')
  const patentBox = document.querySelector('#parentTime')
  const timer = document.querySelector('#watch')


  const hexColor = `#${hours}${minutes}${seconds}`

  patentBox.style.background = hexColor

  timer.textContent = `${hours}:${minutes}:${seconds}`
  setTimeout(updateTime, 1000)
}
updateTime()


// question 9
let isUserLogin = document.querySelector('#userLogin')
let isUserLogut = document.querySelector('#userLogout')
let userState = document.querySelector('#userState')

updateStatus()

isUserLogin.addEventListener('click', () => {
  localStorage.setItem("loginStatus","true")
  updateStatus()
})

isUserLogut.addEventListener('click', () => {
  localStorage.removeItem("loginStatus")
  updateStatus()
})

function updateStatus() {
  const loginStatus = localStorage.getItem('loginStatus') === 'true'
  console.log(loginStatus);
  if (loginStatus) {
    userState.textContent = "User logged in"
  } else {
    userState.textContent = "User Has not logged in"
  }
}