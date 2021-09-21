const Poll = artifacts.require("Poll");

contract("Poll", ([deployer, user1, user2]) => {
    let poll;
    beforeEach(async () => {
        poll = await Poll.new();
    });

    it("should return res", async () => {
        let arg = ["a", "b", "c"].map(x => web3.utils.toHex(x));
        await poll.makePoll(arg, { from: deployer });
        await poll.vote(0, web3.utils.toHex("b"), { from: user1 });
        let res = await poll.getResult(0, { from: deployer });
        console.log(res[1]);
    });

})