const btnSearch = document.getElementById('btnSearch');
const patients = [];


function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";


    fetch('travel_recommendation_api.json')
      .then(response => response.json());

    
    console.log(resultDiv);
}
btnSearch.addEventListener('click', searchCondition);