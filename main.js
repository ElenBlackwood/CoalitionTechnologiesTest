document.addEventListener('DOMContentLoaded', () => {

     const username = 'coalition';
     const password = 'skills-test';
     const auth = btoa(`${username}:${password}`);
     
     fetch('https://fedskillstest.coalitiontechnologies.workers.dev', 
          {
               headers: {
                    'Authorization': `Basic ${auth}` 
               }
          })
          .then(function (response) {
               if (response.ok) {
                    return response.json();
               }
               throw response;
          }).then(data => {
               console.log(data);
               const wrapper = document.getElementById('user-data');
               console.log(wrapper);

               const content = `
               <div class="img-wrapper">
                    <img src=${data[3].profile_picture} />
               </div>
               <h1 class="title">${data[3].name}</h1>
               <div class="user-info" >
                    <div class="user-info-img">
                         <img src="./img/birthIcon.svg" alt="birth icon" />
                    </div>
                    <div class="user-info-text">
                         <p>Date of birth:</p>
                         <p class="user-info-text-weight">${data[3].date_of_birth}</p>
                    </div>
                    
               </div>
               <div class="user-info" >
                    <div class="user-info-img">
                         <img src="./img/genderIcon.svg" alt="gender icon" />
                    </div>
                    <div class="user-info-text">
                         <p>Gender:</p>
                         <p class="user-info-text-weight">${data[3].gender}</p>
                    </div>
                    
               </div>
               <div class="user-info" >
                    <div class="user-info-img">
                         <img src="./img/phoneIcon.svg" alt="phone icon" />
                    </div>
                    <div class="user-info-text">
                         <p>Contact:</p>
                         <p class="user-info-text-weight">${data[3].phone_number}</p>
                    </div>
                    
               </div>
               <div class="user-info" >
                    <div class="user-info-img">
                         <img src="./img/phoneIcon.svg" alt="phone icon" />
                    </div>
                    <div class="user-info-text">
                         <p>Emergency contact:</p>
                         <p class="user-info-text-weight">${data[3].emergency_contact}</p>
                    </div>
                    
               </div>
               <div class="user-info" >
                    <div class="user-info-img">
                         <img src="./img/genderIcon.svg" alt="gender icon" />
                    </div>
                    <div class="user-info-text">
                         <p>nsurance Provider:</p>
                         <p class="user-info-text-weight">${data[3].insurance_type}</p>
                    </div>
                    
               </div>
            `;
               wrapper.insertAdjacentHTML('beforeend', content)
          }).catch(function (error) {
               console.warn(error);
          });
});


 