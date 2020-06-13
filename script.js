$(document).ready(function(){

  getDate();

  createAllHours();

  $(".savebtn").on("click", saveBtnClicked );

})


function saveBtnClicked(){

  var scheduleText = $(this).siblings(".form-control").val();
  var scheduleTime = $(this).attr("hour");

  //localStorage.setItem("hour", scheduleTime);
  localStorage.setItem(scheduleTime, scheduleText);

}


function createAllHours(){
  for(var i = 0; i < 9; i ++){
    createHour(i);
  }
}


function createHour(index){
  var hour;

  var container = $(".container");

  //assign each hour of each hour block
  hour = assignHour(index, hour);

  // assign a color to each div based on hour os the day
  var currentHour = moment().format("HH");
  var color = "";

  if((index + 9) === currentHour ){
    color = "red";

  }else if ((index + 9) < currentHour ){
    color = "lightgray";
  }else{
    color ="green";
  }

  //Get Local storage Data and assign text area
  var storedData = "";

  if( localStorage.getItem(index + 9) != undefined ){
    storedData = localStorage.getItem(index + 9);
  }


  var divHTML = '<div hour="'+ (index + 9) +'" class="d-flex flex-row hourarea">' +
  '<div class ="col-1 time">' + hour + ' </div>'+
  '<textarea class="form-control col-9 justify-content-start" style="background-color: '+ color +';">' + storedData + '</textarea>'+
  '<button hour="'+ (index + 9) +'" type="button" class="savebtn btn btn-primary col-2 justify-content-end"> Save </button>'+
  '</div>';

  container.append(divHTML);

  //Get Local storage Data and assign text area
  var storedData;

  if( localStorage.getItem(index + 9) != undefined ){
    storedData = localStorage.getItem(index + 9);
  }
}


function getDate(){
    $("#todaysinfo").text( moment().format('LL') );
}


function assignHour(index){
  switch(index) {
    case 0: 
      hour = "9:00am";
      break;
    case 1:
      hour = "10:00am";
      break;

    case 2: 
      hour = "11:00am";
      break;

    case 3:
      hour = "12:00pm";
      break;

    case 4: 
      hour = "1:00pm";
      break;

    case 5:
      hour = "2:00pm";
      break;

    case 6: 
      hour = "3:00pm";
      break;

    case 7:
      hour = "4:00pm";
      break;

    case 8:
      hour = "5:00pm";
  }

  return hour;
}







