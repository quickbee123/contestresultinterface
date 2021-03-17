import { Account, TonClient } from '@tonclient/core';
import { libWeb } from '@tonclient/lib-web';
import {ContestContract} from "./ContestContract";

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({
    network: { 
        endpoints: ['main.ton.dev'] 
    } 
});



window.addEventListener("load", async () => {

    $("#contest_result").css("display","none");
    var unix = Math.round(Date.now()/1000);
    
    var result1 =[];
    
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
        

        

        $("#accordion").html($("#accordion").html()+'<div class="card chosen"><div class="card-header p-0 " id="heading'+i+'" ><a class="collapsed setcontent" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'"><div class="contest-heading">'+new TextDecoder().decode(hex2a(result2.title))+'</div></a></div><div id="collapse'+i+'" class="collapse" aria-labelledby="heading'+i+'" data-parent="#accordion"><div class="lds-ring"><div></div><div></div><div></div><div></div></div><div class="card-body" id="content'+i+'"></div></div></div>');
        
        

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
    $("#collapse"+i+" .lds-ring").css("display","block");
       setTimeout(check,1000);

       async function check(){
       var id_be =""+ $(".chosen .show").attr('id');
       
       console.log(id_be);
       var i = id_be.substr(8,);
       $("#content"+i+"").css("display","none");

          
       console.log(i);
       console.log($("#content"+i).text().length);
       
       if(!($("#content"+i).text().length>0)){
           console.log("hiii");

        const address = result1[i].id;
    
        const acc = new Account({abi:ContestContract},{address});

        
   
       const result3 = await (await acc.runLocal("contestCountdown",{})).decoded.output;
       const result4 = await (await acc.runLocal("votingCountdown",{})).decoded.output;
   
       var contestsec = result3.secondsLeft;
       var votingsec = result4.secondsLeft;
   
   
       if(contestsec<0 && votingsec>0){
           
           $("#content"+i+"").text("Voting in progress");
           
       }
       else if(contestsec>0 && votingsec>0){
            
           const result5 = await (await acc.runLocal("getContestProgress",{})).decoded.output;
           var contestOpen = result5.contestOpen;
   
           if(contestOpen)
           $("#content"+i+"").text("Contest in progress");
       
           else
           $("#content"+i+"").text("Contest not started");
       }
       else{
           const result6 = await (await acc.runLocal("listContenders",{})).decoded.output;
           var result8 = [];
           for(var j = 0; j < result6.ids.length; j++){
               const result7 = await (await acc.runLocal("getStatsFor",{"id":result6.ids[j]})).decoded.output;
               result7["address"]=result6.addresses[j];
               result8 = result8.concat(result7);
            }
               result8.sort(sortByProperty("avgHi","avgLo"));
               result8.reverse();
               for(var j = 0; j < result6.ids.length; j++){
               if(j==0){
                $("#content"+i).html('<button type="button" class="btn btn-primary btnExport">Export</button>');
                   $("#content"+i).html($("#content"+i).html()+'<table id="tblExportGrid'+i+'" class="table"> <thead> <tr> <th scope="col">Address</th> <th scope="col">Average</th> <th scope="col">Accepted</th> <th scope="col">Abstained</th> <th scope="col">Rejected</th> <th scope="col">Reward</th></tr> </thead> <tbody></tbody></table>');
               }
               
                   $("#content"+i+" tbody").html( $("#content"+i+" tbody").html()+'<tr><td class="contestant-address" data-title="'+result8[j].address+'">'+result6.addresses[j].substr(0,10)+'</td><td class="ExportLabelTD">'+result8[j].avgHi+"."+result8[j].avgLo+'</td><td class="ExportLabelTD">'+result8[j].accepted+'</td><td class="ExportLabelTD">'+result8[j].abstained+'</td><td class="ExportLabelTD">'+result8[j].rejected+'</td><td><input type="text" class="form-control ExportValueTD" id="'+i+'/'+j+'"></td></tr>')
                   
                
           }
       }
       
       
     }
   
     
     $("#collapse"+i+" .lds-ring").css("display","none");
     $("#content"+i+"").css("display","block");

    }
    
   
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

function sortByProperty(property1,property2){  
    return function(a,b){  
       if(a[property1] > b[property1])  
          return 1;  
       else if(a[property1] < b[property1])  
          return -1; 
        else{
            if(a[property2] > b[property2])  
          return 1;  
          else if(a[property2] < b[property2])  
          return -1;
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
      console.log(txtValue);
      if (txtValue.toUpperCase().indexOf(filter) ==0) {
        card_div[i].style.display = "";
      } else {
        card_div[i].style.display = "none";
      }
    }
  });


   


});






