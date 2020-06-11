function createHour(index){

  var hour;
  var isPast;
  var iscurrent;
  var isfuture;

  function assignHour(){

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
  }





  var beginningTime = moment("12:00pm", 'h:mma');
  var endTime = moment(hour, 'h:mma');
  console.log(beginningTime.isBefore(endTime));

  assignHour();

  $(".container").append('<div class="d-flex flex-row hourarea"><div class ="col-1 time" class="areatime"> '+ hour +' </div><textarea class="form-control col-9 justify-content-start" style="background-color: green;"></textarea><button type="button" class="savebtn btn btn-primary col-2 justify-content-end"> Save </button</div>');


}


function getDate(){

    $("#todaysinfo").text( moment().format('LL') );

}


function saveBtnClicked(){

  var btnObj = $(this);

  var dataToSave = $( "#hourarea textarea").val();
  //var timeTosave =  $( "#hourarea .time" ).;

  console.log(timeTosave);


  //localStorage.setItem("hour", );

  localStorage.setItem("task", dataToSave);


}


function createAllHours(){

  for(var i = 0; i < 9; i ++){
    createHour(i);

  }
}

$(document).ready(function(){

  getDate();


  //$("#hourarea .savebtn").on("click", saveBtnClicked );

  createAllHours();


})


console.log( moment().startOf('day').fromNow() );








