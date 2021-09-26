import { Injectable } from "@nestjs/common";
import Web3 from "web3";
import fs from "fs";

@Injectable()
export class PollService {
    web3: Web3;
    constructor() { this.web3 = new Web3(process.env.SMART_CONTRACT_SERVER); }
    async getPollInfo(poll: number) {
        let abi = JSON.parse(fs.readFileSync(process.env.CONTRACT_ABI, 'utf-8')).abi;
        let contract = new this.web3.eth.Contract(abi, process.env.COTRANCT_ADDRESS);
        contract.options.address = process.env.CONTRACT_ADDRESS;
        let { candidates }: { candidates: string[] }
            = await contract.methods.getPollInfo(poll).call({ from: process.env.DEPLOYER_ADDRESS, gas: 6721975 });
        console.log(candidates.map(x => this.web3.utils.hexToAscii(x).replace(/\0/g, '')));
    }

    async makePoll(candidates: string[]) {
        let abi = JSON.parse(fs.readFileSync(process.env.CONTRACT_ABI, 'utf-8')).abi;
        let contract = new this.web3.eth.Contract(abi, process.env.COTRANCT_ADDRESS);
        contract.options.address = process.env.CONTRACT_ADDRESS;
        let arg = candidates.map(x => this.web3.utils.asciiToHex(x));
        let info = await contract.methods.makePoll(arg).send({ from: process.env.DEPLOYER_ADDRESS, gas: 6721975 });
    }

}