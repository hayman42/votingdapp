import React, { Component } from "react";
import styles from "./Manager.module.css";
import Web3 from "web3";

class Manager extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    this.setState({ account: accounts[0] });
    // Smart Contract Code를 여기다가 연결시키면 된다!
  }

  render() {
    return (
      <div className={styles.button}>
        <span className={styles.text}>Hello World!</span>
      </div>
    );
  }
}

export default Manager;
