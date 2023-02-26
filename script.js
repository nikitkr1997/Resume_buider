function submitForm(e){
    e.preventDefault()
    const image_url = document.querySelector("#image-url").value
    const name = document.querySelector("#name-field").value
    const address = document.querySelector("#address-field").value
    const phone = document.querySelector("#phone-field").value
    const email = document.querySelector("#email-field").value
    const website = document.querySelector("#website-field").value

    // //add image url
    const imageEle = document.querySelector(".image-container img")
    imageEle.src = image_url
    
    //change name
    const nameEle = document.querySelector(".name")
    nameEle.innerText = name

    // add skills
    const skills = document.querySelector("#skills-field").value
    const skillsArr = skills.split(',')
    console.log(skillsArr);
    let str=""
    for(let i=0;i<skillsArr.length;i++){
        str=str+`<div class="value">${skillsArr[i]}</div>`
    }
    document.querySelector(".skills-details").innerHTML=str

    //add experiences
    const experienceCompanyEle = document.getElementsByClassName("company-name-field")
    const experienceRoleEle = document.getElementsByClassName("role-field")
    const experienceProjectEle = document.getElementsByClassName("project-desc-field")
    console.log(experienceCompanyEle,experienceRoleEle, experienceProjectEle);
    const expHolderEle = document.getElementById("experiences-holder")
    expHolderEle.innerHTML=""
    for(let i=0;i<experienceCompanyEle.length;i++){
        const newDiv = document.createElement("div")
        newDiv.className = "work-ex-details"
        newDiv.innerHTML = `<div class="company-name">${experienceCompanyEle[i].value}</div>
        <div class="role">${experienceRoleEle[i].value}</div>
        <div class="project">
        ${experienceProjectEle[i].value}
        </div>`
        expHolderEle.appendChild(newDiv)
    }


}
function addExperienceField(){
    const expHolder = document.createElement("div")
    expHolder.className = "experience-holder"
    expHolder.innerHTML = `<input  type="text" class="experience-input-field company-name-field" placeholder="Company Name">
    <input  type="text" class="experience-input-field role-field" placeholder="Role">
    <input  type="text" class="experience-input-field project-desc-field" placeholder="Project Description">
`
    document.getElementById("experience-container-form").appendChild(expHolder)
}
function addEducationField(){

}