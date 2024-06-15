const btnSearch = document.getElementById('btnSearch');
const patients = [];


function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";


    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const dat = data[input]
        if(dat){
            if(input == "countries"){                
                data[input].forEach(country =>{
                    country["cities"].forEach(element =>{
                        resultDiv.innerHTML += `<h2>${element.name}</h2>`;
                        resultDiv.innerHTML += `<img src="${element.imageUrl}" alt="hjh">`; 
                        const options = { timeZone: element.timezone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };   
                        const cTime = new Date().toLocaleTimeString('en-US', options);  
                        resultDiv.innerHTML += `<p><strong>Current time:</strong> ${cTime}</p>`;
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${element.description}</p>`;
                    });
                });
            } else{
                data[input].forEach(element => {
                    resultDiv.innerHTML += `<h2>${element.name}</h2>`;
                    resultDiv.innerHTML += `<img src="${element.imageUrl}" alt="hjh">`;     
                    const options = { timeZone: element.timezone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                    const cTime = new Date().toLocaleTimeString('en-US', options); 
                    resultDiv.innerHTML += `<p><strong>Current time:</strong> ${cTime}</p>`; 
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${element.description}</p>`;
                    
                });
            }
            
            
        } else{
            resultDiv.innerHTML = 'Condition not found.';
        }
                  
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });

    
    
}

function clearCondition() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', clearCondition);