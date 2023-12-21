let mainContent = document.querySelector(".main__content");
let inputTheme = document.querySelector("#theme");
let body = document.querySelector("body")

let inputTitle = document.querySelector(".input-title");
let inputLocation = document.querySelector(".input-location");
let inputWorkType = document.querySelector(".input-checkbox");

let form = document.querySelector("form");

let result = [];

let detailsImg = document.querySelector(".header__content-img img");
let detailsParFirst = document.querySelector(".header__content-info-first");
let detailsParLast = document.querySelector(".header__content-info-last");
let jobContainer = document.querySelector(".job-details");


let addForm = document.querySelector("#form");
let editForm = document.querySelector("#edit-form");

let jobId = document.querySelector("#job-id");
let jobTitle = document.querySelector("#job-title");
let jobImg = document.querySelector("#job-img");
let jobSelect = document.querySelector("#job-select");
let jobCompany = document.querySelector("#job-company");
let jobLocation = document.querySelector("#job-location");


let addBtn = document.querySelector(".add-btn")

let data = [

]

let jobsData = localStorage.getItem("jobsData");

let mainData = [];

if (jobsData) {
     try {
          mainData = JSON.parse(jobsData)
     } catch (error) {
          console.error(error);
     }
}
data = mainData;


let page = getCurrentUrl();

if (page.pathName == "index.html") {
     getData(data);
     function deleteJob(id) {
          event.preventDefault();
          let dataIndex = data.findIndex(item => item.id == id)

          if (dataIndex !== -1) {
               beforeData = [...data]
               beforeData.splice(dataIndex, 1);
               localStorage.setItem("jobsData", JSON.stringify(beforeData));
               getData(beforeData);
          }
     }


}

function checkEmpthyFields(data) {
     let requerdFields = ['id', 'title', 'img', 'time', 'loaction'];
     let emptyFields = [];
     for (let field of requerdFields) {
          if (!data[field]) {
               emptyFields.push(field)
          }
     }
     return emptyFields;
}
if (page.pathName == "edit.html") {
     let editData = getDataById(page.id, data);

     jobId.value = editData.id
     jobTitle.value = editData.title
     jobImg.value = editData.img
     jobSelect.value = editData.workType
     jobCompany.value = editData.company
     jobLocation.value = editData.loaction

     editForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const newData = {
               id: jobId.value,
               title: jobTitle.value,
               img: jobImg.value,
               time: "5h ago .",
               workType: jobSelect.value,
               company: jobCompany.value,
               loaction: jobLocation.value
          }

          console.log(newData.loaction);

          let updateData = data.map(item => {
               if (item.id == page.id) {
                    return {
                         ...item,
                         ...newData
                    }
               } else {
                    return item
               }
          })

          let emptyFields = checkEmpthyFields(newData)
          if (emptyFields.length > 0) {
               // jobLocation.style.border = "1px solid red";
               alert(`Bu xanaları doldurun ${emptyFields.join(', ')}`)
          } else {
               data.push(newData)
               localStorage.setItem("jobsData", JSON.stringify(updateData));
               alert("Edit Data");
               window.location.href = '/index.html';
          }

          // let empthyValue = [];
          // let objectKey = Object.entries(newData)
          // console.log(objectKey);

          // objectKey.find(item => {
          //      if (item[1] == "") {
          //           empthyValue.push(item[0]);
          //      }
          // })
          // alert(empthyValue + " Bosdur")
     })

}



function getData(data) {
     let dataHtml = '';

     data.map(item => {
          dataHtml += `
                    <div class="main__content-card">
                         <div class="main__card-img">
                              <img src="${item.img}" alt="">
                         </div>
                         <div class="main__card-info-title">
                              <p>${item.time}</p>
                              <p>${item.workType}</p>
                         </div>
                         <div class="main__card-info-main">
                              <a href="/inner.html?id=${item.id}">${item.title}</a>
                              <p>${item.company}</p>
                         </div>
                         <div class="main__card-info-footer">
                              <a href="#">${item.loaction}</a>
                              <a href="edit.html?id=${item.id}">Edit</a>
                              <a href="#" id="delete__job" onClick="deleteJob(${item.id})">Delete</a>
                         </div>
                    </div>
          `
     })

     mainContent.innerHTML = dataHtml;

}
function search(inputValue, whatSearch, data) {
     inputValue = inputValue.toLowerCase();
     let filteredData = data.filter(item => {
          let currentDataValue = item[whatSearch].toLowerCase();
          return currentDataValue.includes(inputValue)
     });
     return filteredData;
}
form?.addEventListener("submit", function (e) {
     e.preventDefault();
     result = search(inputTitle.value, "title", data)
     result = search(inputLocation.value, "loaction", result)

     if (inputWorkType.checked) {
          result = search("Full Time", "workType", result)
          getData(result)
     }

     if (result.length <= 0) {
          mainContent.innerHTML = `<p class="empty">No Result</p>`
     } else {
          getData(result)
     }
})


addForm?.addEventListener("submit", (e) => {
     e.preventDefault();

     const newData = {
          id: jobId.value,
          title: jobTitle.value,
          img: jobImg.value,
          time: "5h ago .",
          workType: jobSelect.value,
          company: jobCompany.value,
          loaction: jobLocation.value,
          innerData: {
               jobLogo: "./assets/img/Group 19.png",
               jobUrl: "scoot.com",
               jobInfo:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
               requertmen: {
                    info: "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.   ",
                    list: [
                         {
                              id: 1,
                              text: "Morbi interdum mollis sapien. Sed",
                         },
                         {
                              id: 2,
                              text: "Morbi interdum mollis sapien.",
                         },
                         {
                              id: 3,
                              text: "Morbi interdum mollis sapi",
                         },
                         {
                              id: 4,
                              text: "Morbi interdum mollis",
                         },
                    ],
               },
               whatYouWillDo: {
                    info: "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.   ",
                    list: [
                         {
                              id: 1,
                              text: "Morbi interdum mollis sapien.",
                         },
                         {
                              id: 2,
                              text: "Morbi interdum mollis sapien",
                         },
                         {
                              id: 3,
                              text: "Morbi interdum mollis sap",
                         },
                         {
                              id: 4,
                              text: "Morbi interdum mollis",
                         },
                    ],
               },
          },
     }

     data.push(newData);
     localStorage.setItem("jobsData", JSON.stringify(data));
     alert("Added Data");
     window.location.href = "/index.html"
})





function getCurrentUrl() {
     let newSearchParams = new URLSearchParams(window.location.search);
     let id = newSearchParams.get("id")
     let pathName = window.location.pathname.split("/").pop()
     return {
          id: id,
          pathName: pathName
     }
}

function getDataById(id, data) {
     return data.find(item => {
          return item.id == id
     })
}

inputTheme.addEventListener("click", function (e) {
     let inputValue = e.target.checked
     if (inputValue) {
          localStorage.setItem("theme", "dark")
     }
     else {
          localStorage.setItem("theme", "light")
     }

     body.classList.toggle("dark");

})

window.onload = function () {
     let pageTheme = localStorage.getItem("theme");
     if (pageTheme == "dark") {
          body.classList.add("dark")
          inputTheme.checked = true;
     } else {
          body.classList.remove("dark")
     }
     getData(data);
}


let newSearch = new URLSearchParams(window.location.search)
let id = newSearch.get("id")

let findById = data.find(item => {
     return item.id == id
})

generateInnerPage(findById);

function generateInnerPage(findById) {
     detailsImg.src = findById.innerData.jobLogo;
     detailsParFirst.innerHTML = findById.company;
     detailsParLast.innerHTML = findById.innerData.jobUrl;
     jobContainer.innerHTML = `
     <div class="job-title">
     <div class="job-left">
          <div class="job-date">
               <p>1w ago .</p>
               <p>${findById.workType}</p>
          </div>
          <div class="job-name">${findById.title}</div>
          <div class="job-loaction">${findById.loaction}</div>
     </div>
     <div class="job-right">
          <div class="btn-primary">Apply Now</div>
     </div>
     </div>
     <div class="job-description">
     <p>${findById.innerData.jobInfo}</p>
     </div>
     <div class="job-requertmens">
     <h2>Requertmens</h2>
     <p>${findById.innerData.requertmen.info}</p>
     <ul>
          <li>${findById.innerData.requertmen.list[0].text}</li>
          <li>${findById.innerData.requertmen.list[1].text}</li>
          <li>${findById.innerData.requertmen.list[2].text}</li>
          <li>${findById.innerData.requertmen.list[3].text}</li>
     </ul>
     </div>

     <div class="job-requertmens">
     <h2>What You Will Do</h2>
     <p>${findById.innerData.whatYouWillDo.info}</p>
     <ol>
          <li>${findById.innerData.whatYouWillDo.list[0].text}</li>
          <li>${findById.innerData.whatYouWillDo.list[1].text}</li>
          <li>${findById.innerData.whatYouWillDo.list[2].text}</li>
          <li>${findById.innerData.whatYouWillDo.list[3].text}</li>
     </ol>
     </div>
  `;
}



