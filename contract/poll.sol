// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Poll {
    struct PollInfo {
        uint256 uploader;
    }

    function vote() public {} // 유저가 vote 하는 함수

    function distribute() public {} // 금액을 분배하는 함수

    function makePoll() public {} // 새로운 여론조사를 만드는 함수

    function checkVaildUser() public {} // 해당 유저가 특정 여론조사에 이미 참여 했는지 확인 하는 함수

    function getPollList() public {} // 여론조사 리스트를 가져오는 함수

    function getResult() public {} // 여론조사 결과를 가져오는 함수

    function getCandidates() public {} // 특정 여론조사의 후보들을 가져오는 함수

    function getUserInfo() public {} // 유저정보(승률, 누적 상금 등)를 가져오는 함수 *굳이 블록체인으로 할 필요가 있을까?

    function refreshPollList() public {} // 여론조사 리스트 갱신하는 함수
}
