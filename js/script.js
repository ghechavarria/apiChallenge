// this function will retrieve the data from the form -> uInput
var input = document.querySelector("form").elements;
// console.log(input);

function getData(){

  // select-option
  input
}


var doc_div = document.querySelector("#stuff");
var btn = document.querySelector("#rand_btn");

//async means do your thing in the background so everything can continue to work
async function generateData(){
    //fetch data
    var response = await fetch("https://www.boredapi.com/api/activity");
    var data = await response.json();
    console.log(data);
    
    const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
    doc_div.innerHTML = "<div id='leftAlign'><strong>Activity:</strong> " + data.activity + "<br><strong>Accessibility:</strong> " + relabelData(1, data.accessibility) + "<br><strong>Type:</strong> " + typeUpper + "<br><strong>Participants:</strong> " + data.participants + "<br><strong>Price:</strong> " + relabelData(0, data.price) + "</div>";

}

btn.addEventListener('click', generateData);
<<<<<<< HEAD
>>>>>>> baf899b8fdca7c7adffed7c769d9137170901c28
=======

function relabelData(dataName, dataValue){
    //parameters
    // dataName = price, accessibility
    // dataValue = data.price, data.accessibility

    // call function = relabelData(0, data.price);

    var label = "";

    switch(dataName){
        case 0: //price
            if (dataValue == 0){
                label = "Free";
            } else if (dataValue > 0 && dataValue < 0.2){
                label = "$1.00-$15.00";
            }else if (dataValue >= 0.2 && dataValue < 0.3){
                label = "$15.00-$25.00";
            }else if (dataValue >= 0.3 && dataValue < 0.5){
                label = "$25.00-$35.00";
            }else if (dataValue >= 0.5 && dataValue < 0.75){
                label = "$35.00-$45.00";
            }else if (dataValue >= 0.75 && dataValue < 1.0){
                label = "$55.00-$65.00";
            }else{
                label = "$65.00+";
            }
            break;
        case 1: //accessibility
            if(dataValue >= 0 && dataValue <=0.25){
                label = "Effortless";
            }else if(dataValue > 0.25 && dataValue <=0.5){
                label = "Moderate";
            }else{
                label = "Concentrated";
            }
            break;
        default:
            label = "Renaming Error"
            console.log("data naming error");
    }

    return label;

}
>>>>>>> cae5ed8f00a9ee1ad1be5fc9513a22e6944ac122
