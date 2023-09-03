let maindata
let maindata1
let maindata2
let maindata3
// ==============================================================







(async function getData(){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let finalresponse =await response.json();
    maindata=finalresponse.meals
    let injecsion=``
    for (let i = 0; i < maindata.length; i++) {
        
        injecsion +=`
        <div class="col-md-3 rounded-2" onclick="displaymeals(${i})">
            <div class="position-relative meal rounded-2 overflow-hidden">
            <div class="meal-layer position-absolute d-flex align-items-center">
                <h3 class="">${maindata[i].strMeal}</h3>
            </div>
            <img src="${maindata[i].strMealThumb}" alt="" class="w-100">
            </div>
            </div>
        `
        
    }
        document.querySelector(".row").innerHTML=injecsion
})()

// ===================================================================================


$(".Categories").click(function(){
    (async function getData(){
        let response1= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let finalresponse1 =await response1.json();
        maindata1=finalresponse1.categories
        })()
        let injecsion=``
    for (let i = 0; i < maindata1.length; i++) {
        
        injecsion +=`
        <div class="col-md-3 rounded-2">
            <div class="position-relative meal rounded-2 overflow-hidden">
            <div class="meal-layer position-absolute text-center">
                <h3 class="">${maindata1[i].strCategory}</h3>
                <p>${maindata1[i].strCategoryDescription}</p>
            </div>
            <img src="${maindata1[i].strCategoryThumb}" alt="" class="w-100">
            </div>
            </div>
        `
        
    }
        document.querySelector(".row").innerHTML=injecsion
})

// ===================================================================================

$(".Area").click(function(){
    (async function getData(){
        let response2= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let finalresponse2 =await response2.json();
        maindata2=finalresponse2.meals
})()
        let injecsion=``
    for (let i = 0; i < maindata2.length; i++) {
        
        injecsion +=`
        <div class="col-md-2 text-white">
        <div><i class="fa-solid fa-house-laptop fa-5x"></i></div>
        <div><h3 class="">${maindata2[i].strArea}</h3></div>
            </div>
        `
        
    }
        document.querySelector(".row").innerHTML=injecsion
})


// ===================================================================================

$(".Ingredients").click(function(){
    (async function getData(){
        let response1= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let finalresponse1 =await response1.json();
        maindata3=finalresponse1.meals
})()
        let injecsion=``
    for (let i = 0; i < 20; i++) {
        
        injecsion +=`
        <div class="col-md-3 text-white height300px overflow-hidden mb-5 text-center"  >
        <div><i class="fa-solid fa-drumstick-bite fa-4x"></i></div>
        <div><h3 class="">${maindata3[i].strIngredient}</h3></div>
        <div><p class="">${maindata3[i].strDescription}</p></div>
            </div>
        `
        
    }
        document.querySelector(".row").innerHTML=injecsion
})



// ===================================================================================
$(".ContactUs").click(function(){
        document.querySelector(".row").innerHTML=
        `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
        
        
})


let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}
// ===================================================================
$(".overlay1").animate({left:-200},0)
$(".close").click(function(){
    let innerwidth=$(".try").innerWidth();
    if($(".overlay1").css('left')=="0px"){
    $(".try").animate({width:"200px"},1000)  
    $(".overlay1").animate({left:-innerwidth},1000)
    $(".close").html(`<i class="fa-solid fa-list"></i>`);
    $(".ul1").slideUp(1000);
}
    else{
    $(".overlay1").animate({left:"0px"},1000)
    $(".close").html(`<i class="fa-solid fa-xmark fs-2"></i>`);
    $(".ul1").slideDown(1500); 
    }
})
// ===================================================================



function displaymeals(i){
    console.log(i)
    document.querySelector(".row").innerHTML=`
    <div class="col-md-4 text-white">
    <div class="">
        <img src="${maindata[i].strMealThumb}" alt="" class="w-100 rounded-2">
    </div>
    <h2>${maindata[i].strMeal}</h2>
</div>
<div class="col-md-8 text-white">
    <div>
        <h2>Instructions</h2>
        <p>${maindata[i].strInstructions}</p>
    </div>
    <h2>Area: <span>${maindata[i].strArea}</span></h2>
    <h2>Category: <span>${maindata[i].strCategory}</span></h2>
    <div>
        <h2>Recipes:</h2>
    </div>
    <div>
        <h2>tags:</h2>
        <div class="box px-2 rounded-2 ">${maindata[i].strTags}</div>
        
       
    </div>
    <div class="mt-3">
        <a href="${maindata[i].strSource}" target="_blank"><button class="btn btn-success">Source</button></a>
        <a href="${maindata[i]. strYoutube}" target="_blank"><button class="btn btn-danger">Youtube</button></a>

    </div>
</div>



    `




}


