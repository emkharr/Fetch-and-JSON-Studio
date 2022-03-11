// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            let numberOfAstronauts = document.getElementById("numberOfAstronauts");
            numberOfAstronauts.innerHTML = `Astronaut count: ${json.length}`
            
            let div = document.getElementById("container");
            for(const key of json) {
                let color = "red";
                if (key.active == true){
                    color = "green"
                };

                div.innerHTML += 
                    `<div class="astronaut">
                    <div class="bio">
                    <h3>${key.firstName} ${key.lastName}</h3>
                    <ul>
                    <li> Hours in Space: ${key.hoursInSpace}</li> 
                    <li style="color:${color}">Active: ${key.active}</li>
                    <li> Skills: ${key.skills}
                    </ul>
                    </div>
                    <img class="avatar" src="${key.picture}">
                    </div>
                    `
            };

            // for (let i = 0; i < json.length; i++) {
            
                
            //     div.innerHTML += 
            //     `<div class="astronaut">
            //     <div class="bio">
            //     <h3>${json[i].firstName} ${json[i].lastName}</h3>
            //     <ul>
            //     <li> Hours in Space: ${json[i].hoursInSpace}</li> 
            //     <li id= "activeTrue">Active: ${json[i].active}</li>

            //     <li> Skills: ${json[i].skills}
            //     </ul>
            //     </div>
            //     <img class="avatar" src="${json[i].picture}">
            //     </div>
            //     `
            // };
        });
    });
});