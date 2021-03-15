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

    const address="0:505476d958a6699bcd1824de767e11e53a59e427608a1d45b80d7642d9d29375";
    
    console.log(await TonClient.default.client.version());

    const acc = new Account({abi:ContestContract},{address});

    const result = await acc.runLocal("getContestInfo",{});
    console.log(JSON.stringify(result.decoded.output));


});