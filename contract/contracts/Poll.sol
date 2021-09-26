// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Poll {
    struct PollInfo {
        bytes32[] candidates;
        mapping(bytes32 => uint8) counts;
        bool open;
    }
    address public owner;
    uint256 private _head;
    uint256 private _tail;
    mapping(uint256 => PollInfo) _polls;

    constructor() public {
        owner = msg.sender;
        _head = 0;
        _tail = 0;
    }

    function vote(uint256 poll, bytes32 name) public {
        PollInfo storage p = _polls[poll];
        require(p.open == true, "the poll is not open");
        require(checkCandidate(poll, name), "invalid candidate name");
        p.counts[name] += 1;
    } // 유저가 vote 하는 함수

    function makePoll(bytes32[] memory candidates) public {
        require(msg.sender == owner, "this method is for owner only");
        PollInfo memory p;
        p.candidates = candidates;
        p.open = true;
        _polls[_tail] = p;
        _tail++;
    } // 새로운 여론조사를 만드는 함수

    function setPollStatus(uint256 poll, bool open) public {
        require(msg.sender == owner, "this method is for owner only");
        _polls[poll].open = open;
    } // 특정 조사의 상태를 변환하는 함수

    function getResult(uint256 poll)
        public
        view
        returns (bytes32[] memory candidates, uint8[] memory result)
    {
        require(msg.sender == owner, "this method is for owner only");
        PollInfo storage p = _polls[poll];
        result = new uint8[](p.candidates.length);
        for (uint256 i; i < p.candidates.length; i++) {
            result[i] = p.counts[p.candidates[i]];
        }
        candidates = p.candidates;
    } // 여론조사 리스트를 가져오는 함수

    function getPollInfo(uint256 poll)
        public
        view
        returns (bytes32[] memory candidates, bool open)
    {
        require(msg.sender == owner, "this method is for owner only");
        candidates = _polls[poll].candidates;
        open = _polls[poll].open;
    } // 여론조사 정보를 가져오는 함수

    function checkCandidate(uint256 poll, bytes32 name)
        internal
        view
        returns (bool)
    {
        PollInfo memory p = _polls[poll];
        for (uint256 i = 0; i < p.candidates.length; i++) {
            if (p.candidates[i] == name) return true;
        }
        return false;
    }

    function getPollNumber() public view returns (uint256) {
        return _tail;
    }
}
