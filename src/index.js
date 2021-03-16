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

    
    var unix = Math.round(Date.now()/1000);
    console.log(unix);
   
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

    

    console.log(JSON.stringify(result1));


    for (var i = 0; i < result1.length; i++){
       
        const address = result1[i].id;
        
        const acc = new Account({abi:ContestContract},{address});
        const result2 = await (await acc.runLocal("getContestInfo",{})).decoded.output;
        const result3 = await (await acc.runLocal("contestCountdown",{})).decoded.output;
        const result4 = await (await acc.runLocal("votingCountdown",{})).decoded.output;

        console.log(JSON.stringify(result3));

        $("#contest_result").html($("#contest_result").html()+'<div  class="card d-flex justify-content-center" style="width:100%;">            <div class="card-body">            <h5 class="card-title">'+  new TextDecoder().decode(hex2a(result2.title)) +'</h5>            <p class="card-text"></p>            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample'+i+'" role="button" aria-expanded="false" aria-controls="collapseExample">                View Results            </a>            <div class="collapse" id="collapseExample'+i+'">                <div id="card'+i+'" class="card card-body m-3">                                </div>            </div>        </div>    </div>');
          
        var contestsec = result3.secondsLeft;
        var votingsec = result4.secondsLeft;


        if(contestsec<0 && votingsec>0){
   
            $("#card"+i+"").text("Voting in progress");
            
        }
        else if(contestsec>0 && votingsec>0){
             
            const result5 = await (await acc.runLocal("getContestProgress",{})).decoded.output;
            var contestOpen = result5.contestOpen;

            if(contestOpen)
            $("#card"+i+"").text("Contest in progress");
        
            else
            $("#card"+i+"").text("Contest not started");
        }
        else{
            
        }

        
        
        


    }

    function hex2a(hex) {
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i !== bytes.length; i++) {
            bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
        }
        return bytes;
    }

    

    


});