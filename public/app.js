function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    var enKey= theEvent.keyCode==13 || theEvent.which==13;
    if(!enKey){
      key = String.fromCharCode( key );
      var regex = /[0-9]/;
      if( !regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
      }
    }
}

$(document).ready(function(){
/*  $('#number').on('click', function(){

    if($('#number').val()!=null){
      $('.carousel').carousel('next');
    }else{
      return false;
    }

  });*/

  $('#numform').on('submit',function(e){
      e.preventDefault();
      console.log(e.currentTarget[0].value);
  });
});
