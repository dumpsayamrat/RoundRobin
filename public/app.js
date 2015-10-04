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

function printInputProcess(num){

  for(var i=0;i<num;i++){
    var p = "<div class='row rowp'><div class='col-lg-4'><input id='name"+i+"' class='form-control' type='text' placeholder='Input Process Name'  /></div><div class='col-lg-4'><input id='arr"+i+"' class='form-control' type='text' placeholder='Input Arrival Time' onKeyPress='validate(event)'  /></div><div class='col-lg-4'><input id='exe"+i+"' class='form-control' type='text' placeholder='Input Execute Time' onKeyPress='validate(event)'  /></div></div>";
    $('#process').append(p);
  }
}

function rrobin(name,arr,exe,num,q,allExeTime) {


  for(var i=1;i<arr.length;i++){
			for(var j=i-1;j>=0;j--){
				if(arr[j]>arr[j+1]){	// มากไปหาน้อยใช้ < ถ้าน้อยไปมากใช้ >

					var arrTmp = arr[j];
					var sTmp = name[j];
					var exeTmp = exe[j];

					arr[j] = arr[j+1];
					name[j] = name[j+1];
					exe[j] = exe[j+1];

					arr[j+1] = arrTmp;
					name[j+1] = sTmp;
					exe[j+1] = exeTmp;

				}else break;
			}
		}

    var proces = [],
        t=[];
    console.log(allExeTime);
    console.log("-----");
    var currentQTime = 0;
    for(var i=0;i<=allExeTime;i++){
      //console.log(i);

			for(var j=0;j<num;j++){
				if(exe[j] != 0){
					if(arr[j] == i){
						proces.push(j);
						t.push(i+"--check arr");
            console.log(proces + i);
            outArrival(proces,i,name);
					}
				}
			}

			if(exe[proces[0]] > q && parseInt(currentQTime)+parseInt(q) == i){
				exe[proces[0]] -= q;
				var tmp = proces[0];
				proces.shift();
				proces.push(tmp);
				currentQTime = parseInt(currentQTime)+parseInt(q);
				t.push(i+"--check q >");
				console.log(proces+i);
        outOutG(proces,i,name);
			}else if(exe[proces[0]] <= q && parseInt(currentQTime)+parseInt(exe[proces[0]]) == i){
				currentQTime += exe[proces[0]];
				exe[proces[0]] -= exe[proces[0]];
				proces.shift();
				t.push(i+"--check exe <=");
				console.log(proces+i);
        outComplt(proces,i,name);
			}

      //console.log(i+","+name[proces[0]]+","+arr[proces[0]]+","+exe[proces[0]]+","+currentQTime+","+q);

		}

    console.log(t);

}

function outArrival(proces,i,name){
  var t = "<h4>"+i+"</h4>";
  var e = "<div class='btn-group' role='group' aria-label='Basic example'>";
  for(var j=0;j<proces.length;j++){
    e += "<button type='button' class='btn btn-default'>"+name[proces[j]]+"</button>";
  }
  e += "</div>";
  $('#exetime').append(t);
  $('#schedule').append(e);
}

function outOutG(proces,i,name){
  var t = "<h4>"+i+"</h4>";
  var e = "<div class='btn-group' role='group' aria-label='Basic example'>";
  for(var j=0;j<proces.length;j++){
    e += "<button type='button' class='btn btn-default'>"+name[proces[j]]+"</button>";
  }
  e += "</div>";
  $('#exetime').append(t);
  $('#schedule').append(e);
}

function outComplt(proces,i,name){
  var t = "<h4>"+i+"</h4>";
  var e = "<div class='btn-group' role='group' aria-label='Basic example'>";
  for(var j=0;j<proces.length;j++){
    e += "<button type='button' class='btn btn-default'>"+name[proces[j]]+"</button>";
  }
  e += "</div>";
  $('#exetime').append(t);
  $('#schedule').append(e);
}




$(document).ready(function(){

  //console.log($('tableinput'));
  $('#back,#back2').on('click', function(){
    $('#exetime').empty();
    $('#schedule').empty();
    $('.carousel').carousel('prev');
  })

  $('#numform').on('submit',function(e){
      e.preventDefault();
      var num = e.currentTarget[0].value
    //  console.log(num);

      if(num != ""){

        $('#process').empty();
        console.log(num);
        printInputProcess(num);

        $('#showNum').text(num);
        $('.carousel').carousel('next');
      }


  });

  $('#processform').on('submit',function(e){
    e.preventDefault();

    var
     name = [],
     arr = [],
     exe = [];
     var allExeTime = 0;
    var check = true;
    if($('#q').val() == "") check = false;

    for(var i=0;i<$('#showNum').text();i++){
      name.push($('#name'+i).val());
      arr.push(parseInt($('#arr'+i).val()));
      exe.push(parseInt($('#exe'+i).val()));
      allExeTime = allExeTime+parseInt($('#exe'+i).val());
      if($('#name'+i).val()==""){
        check = false;
      }
      if($('#arr'+i).val()==""){
        check = false;
      }
      if($('#exe'+i).val()==""){
        check = false;
      }
    }



    if(check){
      rrobin(name,arr,exe,$('#showNum').text(),$('#q').val(),allExeTime);
      $('.carousel').carousel('next');
    }

  });
});
