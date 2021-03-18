import { Account, resultOfAppDebotBrowserGetSigningBox, TonClient } from '@tonclient/core';
import { libWeb } from '@tonclient/lib-web';
import {ContestContract} from "./ContestContract";

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({
    network: { 
        endpoints: ['main.ton.dev'] 
    } 
});

var result8 =[];
var result1 =[];
var index;
var asc;



window.addEventListener("load", async () => {

    $("#contest_result").css("display","none");
    var unix = Math.round(Date.now()/1000);
    
    
    
    
    while(1){
    var result0 = (await client.net.query_collection({
        collection: "accounts",
        filter: {
            code_hash: {
                eq: "5daea8b855140d110ab07d430883bfecdd4cba9bcded8968fae7fa6cdb5adfbd",
            },
            last_paid: {
                lt: unix
            }
        },
        order: [{ path: "last_paid", direction: "DESC" }],
        result: "id last_paid"
    })).result;
    result1 = result1.concat(result0);
    if(result0.length<50){
        break;
    }
    else{
      unix = result0[49].last_paid;
    }
    }

    

   


    for (var i = 0; i < result1.length; i++){
       
        const address = result1[i].id;
        
        const acc = new Account({abi:ContestContract},{address});
        const result2 = await (await acc.runLocal("getContestInfo",{})).decoded.output;
        

        

        $("#accordion").html($("#accordion").html()+'<div class="card chosen"><div class="card-header p-0 " id="heading'+i+'" ><a class="collapsed setcontent" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'"><div class="contest-heading">'+new TextDecoder().decode(hex2a(result2.title))+'</div></a></div><div id="collapse'+i+'" class="collapse" aria-labelledby="heading'+i+'" data-parent="#accordion"><div class="lds-ring"><div></div><div></div><div></div><div></div></div><div class="card-body" id="content'+i+'"></div><div id="timer_countdown"></div></div></div>');
        
        

    }


    

    
    $(".loading .lds-ring").css("display","none");
    $("#contest_result").css("display","block");
    
     
    function hex2a(hex) {
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i !== bytes.length; i++) {
            bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
        }
        return bytes;
    }



    $(".setcontent").click(async () => {

      
    
        loading_content();
        function loading_content(){
        
           setTimeout(check,1000);
    
           async function check(){
           var id_be =""+ $(".chosen .show").attr('id');
           if(typeof id_be!=='undefined'){
           
           i = id_be.substr(8,);
           index=i;
           $("#collapse"+i+" .lds-ring").css("display","block");
           $("#content"+i+"").css("display","none");
           $("#content"+i+" #timer_countdown").css("display","none");
            
    
            const address = result1[i].id;
        
            const acc = new Account({abi:ContestContract},{address});
    
            
       
           const result3 = await (await acc.runLocal("getContestProgress",{})).decoded.output;
           
       
           var contestunix = result3.contestDeadline;
           var votingunix = result3.votingDeadline;
           var unix_now = Math.round(Date.now()/1000);
       
           if(unix_now<votingunix && unix_now>contestunix){
               
            $("#content"+i+"").html('<h4 class="m-3"><b>Voting in progress. Ends in :</b></h4>');
               timer(votingunix-contestunix,votingunix-unix_now,i);
               
           }
           else if(unix_now<contestunix){

            const result4 = await (await acc.runLocal("contestStartCountdown",{})).decoded.output;  
            var contest_start_time= result4["secondsLeft"];

               if(contest_start_time<0){
                $("#content"+i+"").html('<h4 class="m-3"><b>Contest in progress. Ends in :</b></h4>');
               $("#collapse"+i+" .lds-ring").css("display","none");
               $("#content"+i+"").css("display","block");
                  
               
               
               var contest_total_time = parseInt(contestunix)-(parseInt(unix_now)+parseInt(contest_start_time));
               
               timer(contest_total_time,contestunix-unix_now,i);
                }
           
                else {
                $("#content"+i+"").html('<h4 class="m-3"><b>Contest not started. Starts in :</b></h4>');
                $("#collapse"+i+" .lds-ring").css("display","none");
                $("#content"+i+"").css("display","block");
                timer(1.35*(parseInt(result4.secondsLeft)),parseInt(result4.secondsLeft),i);
                }
           
            }

           else{
              
               var result6 = await (await acc.runLocal("listContenders",{})).decoded.output;
               result8=[];
               asc="false";
               
               for(var j = 0; j < result6.ids.length; j++){
                   var result7 = await (await acc.runLocal("getStatsFor",{"id":result6.ids[j]})).decoded.output;
                   result7["address"]=result6.addresses[j];
                   result8[j] = result7;
                }
                   result8.sort(sortByProperty("avgHi","avgLo","desc"));
                   result8.reverse();
                   $("#content"+i).html('<div class="row"> <div class="form-group col"> <label for="field-name">Field</label> <select id="field-name" class="form-control"> <option value="1">Average</option> <option value="2">Accepted</option> <option value="3">Abstained</option> <option value="4">Rejected</option> </select> </div> <div class="form-group col"> <label for="field-order">Order</label> <select id="field-order" class="form-control"> <option value="1">Descending</option> <option value="2">Ascending</option> </select> </div><button type="button" class="btn btn-primary btnReorder col">Reorder</button></div> <button type="button" class="btn btn-primary btnExport">Export Table</button>');
                   $("#content"+i).html($("#content"+i).html()+'<table id="tblExportGrid'+i+'" class="table"> <thead> <tr> <th scope="col">Address</th> <th scope="col">Average</th> <th scope="col">Accepted</th> <th scope="col">Abstained</th> <th scope="col">Rejected</th> <th scope="col">Reward</th></tr> </thead> <tbody></tbody></table>');
                   insert(result8,i);
                   
           }
           
           
         
        }
       
         
         $("#collapse"+i+" .lds-ring").css("display","none");
         $("#content"+i+"").css("display","block");
    
        }
       
    }

    
       
       });

  

   function reorder(){

    
    var i = index;
    
    var field_name = $("#collapse"+i+" #field-name").val();
    var field_order = $("#collapse"+i+" #field-order").val();



    switch( parseInt(field_name)){
      case 1: result8.sort(sortByProperty("avgHi","avgLo","desc"));
             break;
      case 2: result8.sort(sortByProperty("accepted","accepted","desc"));
             break;
      case 3: result8.sort(sortByProperty("abstained","abstained","asc"));
      break;
      case 4: result8.sort(sortByProperty("rejected","rejected","asc"));
      break;
    }    

    switch( parseInt(field_order)){
      case 1: result8.reverse();
    }
    
    
    insert(result8,i);

  }   

  function insert(result8,i){
    var i=index;
    for(var j = 0; j < result8.length; j++){
        if(j==0){
          $("#content"+i+" tbody").html('<tr><td class="contestant-address" data-title="'+result8[j].address+'">'+result8[j].address.substr(0,10)+'</td><td class="ExportLabelTD">'+result8[j].avgHi+"."+result8[j].avgLo+'</td><td class="ExportLabelTD">'+result8[j].accepted+'</td><td class="ExportLabelTD">'+result8[j].abstained+'</td><td class="ExportLabelTD">'+result8[j].rejected+'</td><td><input type="text" class="form-control ExportValueTD" id="'+i+'/'+j+'"></td></tr>');
        }
        else{
        $("#content"+i+" tbody").html($("#content"+i+" tbody").html()+'<tr><td class="contestant-address" data-title="'+result8[j].address+'">'+result8[j].address.substr(0,10)+'</td><td class="ExportLabelTD">'+result8[j].avgHi+"."+result8[j].avgLo+'</td><td class="ExportLabelTD">'+result8[j].accepted+'</td><td class="ExportLabelTD">'+result8[j].abstained+'</td><td class="ExportLabelTD">'+result8[j].rejected+'</td><td><input type="text" class="form-control ExportValueTD" id="'+i+'/'+j+'"></td></tr>')
        }
     
}
if(j==0){
 $("#content"+i+"").text("No participants");
}
}

  


       
       
    
    function timer(total_time,time_remaining,i){
      

          
        
       const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 432000;
    const ALERT_THRESHOLD = 86400;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    const TIME_LIMIT = total_time;
    
    let timeLeft = time_remaining;
    let timerInterval=null;
    
    let timePassed= TIME_LIMIT - timeLeft;
    let remainingPathColor = COLOR_CODES.info.color;
    
    $("#collapse"+i+" #timer_countdown").html('<div class="base-timer"> <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <g class="base-timer__circle"> <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle> <path id="base-timer-path-remaining" stroke-dasharray="283" class="base-timer__path-remaining '+remainingPathColor+'" d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 " /></g> </svg> <span id="base-timer-label" class="base-timer__label"></span> </div> ');
    $("#content"+i+" #timer_countdown").css("display","block");
    startTimer();
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed + 1;
        timeLeft = TIME_LIMIT - timePassed;
        $("#collapse"+i+" #timer_countdown #base-timer-label").text(formatTime(
          timeLeft
        ));
        setCircleDasharray();
        setRemainingPathColor(timeLeft);
    
        if (timeLeft === 0) {
            loading_content();
        }
        if($("#heading"+i+" a").attr("aria-expanded")=="false"){
            return;
        }
      }, 1000);
    }
    
    function formatTime(time) {
        var days = Math.floor(time / (60 * 60 * 24));
        var hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((time % (60 * 60)) / (60));
        var seconds = Math.floor(time % (60));

      
    
      if(days>0){
        return (days+" days");
      }
    
      if (seconds < 10) {
        seconds = '0'+seconds;
      }
    
      if (minutes < 10) {
        minutes = '0'+minutes;
      }
    
      if (hours < 10) {
        hours = '0'+hours;
      }
    
      return (hours+':'+minutes+':'+seconds);
    }
    
    function setRemainingPathColor(timeLeft) {

        
      
      if (timeLeft <= COLOR_CODES.alert.threshold) {
          
        $("#collapse"+i+" #base-timer-path-remaining")
        .removeClass(COLOR_CODES.warning.color);
        $("#collapse"+i+" #base-timer-path-remaining")
        .removeClass(COLOR_CODES.info.color);
          $("#collapse"+i+" #base-timer-path-remaining")
          .addClass(COLOR_CODES.alert.color);
      } else if (timeLeft <= COLOR_CODES.warning.threshold) {
        $("#collapse"+i+" #base-timer-path-remaining")
        .removeClass(COLOR_CODES.info.color);
          $("#collapse"+i+" #base-timer-path-remaining")
          .addClass(COLOR_CODES.warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      var ret = rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
     
      return ret;
    }
    
    function setCircleDasharray() {
      const circleDasharray = (calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)+ ' 283';
    
      $("#collapse"+i+" #base-timer-path-remaining")
        .attr("stroke-dasharray", circleDasharray);
    }
    
    }

    $("#accordion").on('click','.btnReorder',function(){
      
      reorder();
     });

   $("#accordion").on('click','.btnExport',function(){
    
    var id_be =""+ $(".chosen .show").attr('id');
    var i = id_be.substr(8,);
    var $table = $("#tblExportGrid"+i);
    ExportHTMLTableToExcel($table);
 });

function ExportHTMLTableToExcel($table) {
    
  var tab_text = ""
  var final_text = "";
  var filename = $table.attr('export-excel-filename'); // attribute to be 
                                                       // applied on Table tag
  filename = isNullOrUndefinedWithEmpty(filename)? "Excel Document" : filename;
  var index = $table.find("tbody tr").length;
  if (Number(index) > 0) {
      $.each($table, function (index, item) {
          var element = $(item);
          var headertext = $("#" + element[0].id).closest
                           (":has(label.HeaderLabel)").find('label').text().trim();
          if (headertext == "") {
              tab_text = "<table border='2px'><tr>";
          }
          else {
              tab_text = "<table border='2px'><tr> " + headertext + "</tr><tr>";
          }

          // Create column header
          element.find("thead tr th").each(function () {
              if (!$(this).hasClass("NoExport"))
                  tab_text = tab_text + "<td bgcolor='#87AFC6'>" + 
                             $(this)[0].innerHTML + "</td>";
          });

          //Close column header
          tab_text = tab_text + "</tr>";

          // Create body column
          element.find(" tbody tr").each(function () {
              tab_text = tab_text + "<tr>";
              $(this).find("td").each(function () {
                  if ($(this).hasClass("ExportLabelTD"))
                  {
                      var value = $(this).html();
                       tab_text = tab_text + "<th>" + value + "</th>";
                  }

                  else if($(this).hasClass("contestant-address")){

                       var value = $(this).attr("data-title");
                       tab_text = tab_text + "<th>" + value + "</th>";
                  }
                  else {
                      $(this).find("input,select").each(function () {
                          var value = "";

                          if ($(this).prop("type") == 'select-one') {
                              value = $('option:selected', this).text();
                          } else {
                              value = $(this).val();
                          }

                          if (!$(this).closest("td").hasClass("NoExport") && 
                              !$(this).hasClass("NoExport")) { // NoExport is used for TD 
                                      // or tan input tag that not needs to be exported
                              tab_text = tab_text + "<th>" + value + "</th>";
                          }
                      });
                  }
              });
              tab_text = tab_text + "</tr>";
          });

          // Create colum footer
          element.find("tfoot tr td").each(function () {
              var colspan = $(this).attr("colspan");
              var rowspan = $(this).attr("rowspan");

              colspan = colspan == undefined ? 1 : colspan;
              rowspan = rowspan == undefined ? 1 : rowspan;

              if ($(this).hasClass("NoExport")) {
                  tab_text = tab_text + "";
              }
              else if ($(this).hasClass("ExportValueTD")) // Footer class that needs 
                                                    // to be no td that have input tags
              {
                  $(this).find("input,select").each(function () {
                      var value = "";

                      if ($(this).prop("type") == 'select-one') {
                          value = $('option:selected', this).text();
                      } else {
                          value = $(this).val();
                      }

                      if (!$(this).closest("td").hasClass("NoExport") && 
                          !$(this).hasClass("NoExport")) {
                          tab_text = tab_text + "<td colspan=" + colspan + "rowspan=" + rowspan + ">" + value + "</th>";
                      }
                  });
              }
              else
                  tab_text = tab_text + "<td colspan=" + colspan + " rowspan=" + rowspan + ">" + $(this).html() + "</td>";
          });

          tab_text = tab_text + "<tr></tr></table>";

          if (index == 0) {
              final_text = tab_text;
          }
          else {
              final_text = final_text + tab_text;
          }
      });

      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match
                   (/Trident.*rv\:11\./))      // If Internet Explorer
      {
          txtArea1 = window.open();
          txtArea1.document.open("txt/html", "replace");
          txtArea1.document.write(final_text);
          txtArea1.document.close();
          txtArea1.focus();
          sa = txtArea1.document.execCommand("SaveAs", true, filename+".xls");
          return (sa);
      }
      else                 //other browser not tested on IE 11
      {
          //sa = window.open('data:application/vnd.ms-excel,' + 
          //         encodeURIComponent(final_text));
          var anchor = document.createElement('a');
          anchor.setAttribute('href', 'data:application/vnd.ms-excel,' + 
                               encodeURIComponent(final_text));
          anchor.setAttribute('download', filename);
          anchor.style.display = 'none';
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
      }
  }
}

function isNullOrUndefinedWithEmpty(text){
 if(text==undefined)
    return true;
 else if(text == null)
    return true;
 else if(text == null)
    return true;
 else
    false;
}

function sortByProperty(property1,property2,logic){  
    return function(a,b){  
      if(property1!="avgHi"){
        var a2=parseInt(a["avgHi"]+"."+a["avgLo"]);
        var b2=parseInt(b["avgHi"]+"."+b["avgLo"]);
        var b1=parseInt(b[property1]);
        var a1=parseInt(a[property1]);
      }
      else{
      var a1=parseInt(a[property1]);
      var a2=parseInt(a[property2]);
      var b1=parseInt(b[property1]);
      var b2=parseInt(b[property2]);
      }
       if(a1>b1)  
          return 1;  
       else if(a1<b1)  
          return -1; 
        else if(property1=="avgHi" || logic=="desc"){
            if(a2>b2)  
          return 1;  
          else if(a2<b2)  
          return -1;
        
          else if(property1=="avgHi" ){
             
            if(a["rejected"]>b["rejected"])  
          return -1;  
          else if(a["rejected"]<b["rejected"])  
          return 1;

          }
        }
        
        else if(logic=="asc"){
          if(a2<b2)  
        return 1;  
        else if(a2>b2)  
        return -1;

        else if(property1=="avgHi"){
             
          if(a["rejected"]>b["rejected"])  
        return -1;  
        else if(a["rejected"]<b["rejected"])  
        return 1;

        }
      }  


   
       return 0;  
    }  
 }


 $("#myInput").keyup(function(){
    // Declare variables
    var input, filter, card_div, card_body, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    card_div = document.getElementsByClassName("chosen");
    
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < card_div.length; i++) {
        card_body =  card_div[i].getElementsByClassName('contest-heading')[0];
      txtValue = card_body.textContent || card_body.innerText;
      
      if (txtValue.toUpperCase().indexOf(filter) ==0) {
        card_div[i].style.display = "";
      } else {
        card_div[i].style.display = "none";
      }
    }
 


   


});

});






