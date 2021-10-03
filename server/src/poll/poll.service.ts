import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import fs from 'fs';
import { voteRequestDto } from './dto/vote.request.dto';
import { setStatusRequestDto } from './dto/setstatus.request.dto';
import { makePollRequestDto } from './dto/makepoll.request.dto';

@Injectable()
export class PollService {
  web3: Web3;
  contract: Contract;
  constructor() {
    this.web3 = new Web3(process.env.SMART_CONTRACT_SERVER);
    let abi = JSON.parse(
      fs.readFileSync(process.env.CONTRACT_ABI, 'utf-8'),
    ).abi;
    this.contract = new this.web3.eth.Contract(
      abi,
      process.env.COTRANCT_ADDRESS,
    );
    this.contract.options.address = process.env.CONTRACT_ADDRESS;
  }

  async getPollNumber(): Promise<number> {
    let cnt: number = parseInt(
      await this.contract.methods
        .getPollNumber()
        .call({ from: process.env.DEPLOYER_ADDRESS, gas: 6721975 }),
    );
    return cnt;
  }

  async getPollList(): Promise<[string[], string, boolean][]> {
    let cnt: number = await this.getPollNumber();
    let pollList: [string[], string, boolean][] = await Promise.all(
      [...Array(cnt).keys()].map(async (i) => await this.getPollInfo(i)),
    );
    return pollList;
  }

  async getPollInfo(poll: number): Promise<[string[], string, boolean]> {
    let {
      candidates,
      content,
      open,
    }: { candidates: string[]; content: string; open: string } =
      await this.contract.methods
        .getPollInfo(poll)
        .call({ from: process.env.DEPLOYER_ADDRESS, gas: 6721975 });
    candidates = candidates.map((x) =>
      this.web3.utils.hexToAscii(x).replace(/\0/g, ''),
    );
    content = this.web3.utils.hexToAscii(content).replace(/\0/g, '');
    return [candidates, content, Boolean(open)];
  }

  async makePoll(requestDto: makePollRequestDto): Promise<string> {
    let { candidates, content }: { candidates: string[]; content: string } =
      requestDto;
    let arg = candidates.map((x) => this.web3.utils.asciiToHex(x));
    let { blockHash } = await this.contract.methods
      .makePoll(arg, this.web3.utils.asciiToHex(content))
      .send({ from: process.env.DEPLOYER_ADDRESS, gas: 6721975 });
    return blockHash;
  }

  async vote(requestDto: voteRequestDto): Promise<string> {
    let { poll, voter, candidate } = requestDto;
    let { blockHash } = await this.contract.methods
      .vote(poll, this.web3.utils.asciiToHex(candidate))
      .send({ from: voter, gas: 6721975 });
    return blockHash;
  }

  async setStatus(requestDto: setStatusRequestDto): Promise<string> {
    let { poll, open } = requestDto;
    let { blockHash } = await this.contract.methods
      .setPollStatus(poll, open)
      .send({ from: process.env.DEPLOYER_ADDRESS, gas: 6721975 });
    return blockHash;
  }

  async getResult(poll: number): Promise<[string[], number[]]> {
    let { candidates, result }: { candidates: string[]; result: number[] } =
      await this.contract.methods
        .getResult(poll)
        .call({ from: process.env.DEPLOYER_ADDRESS });
    return [
      candidates.map((x) => this.web3.utils.hexToAscii(x).replace(/\0/g, '')),
      result,
    ];
  }
}
