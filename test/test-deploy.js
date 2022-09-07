const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage;

    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    // grep: $ yarn hardhat test --grep store - run test with word "store" in description
    // only: it.only(...) - run only tests with "only" word after it
    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        // expect, assert
        expect(currentValue.toString()).to.equal(expectedValue);
        // assert.equal(currentValue.toString(), expectedValue);
    });
    it("Should update when we call store function", async function () {
        const expectedValue = "7";
        const transactionResponse = await simpleStorage.store(expectedValue);
        await transactionResponse.wait(1);

        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), expectedValue);
    });
    it("Should work correctly with the people struct and array", async function () {
        const expectedPersonName = "Dariusz";
        const expectedFavoriteNumber = "33";
        const transactionResponse = await simpleStorage.addPerson(
            expectedPersonName,
            expectedFavoriteNumber
        );
        await transactionResponse.wait(1);

        // We can do it like this:
        // const person = await simpleStorage.people(0);
        // const pName = person.name;
        // const favNumber = person.favoriteNumber;
        // expect(pName).to.equal(expectedPersonName);
        // expect(favNumber).to.equal(expectedFavoriteNumber);
        // assert.equal(pName, expectedPersonName);
        // assert.equal(favNumber, expectedFavoriteNumber);

        // // We can also do it like this:
        const { name, favoriteNumber } = await simpleStorage.people(0);
        expect(name).to.equal(expectedPersonName);
        expect(favoriteNumber).to.equal(expectedFavoriteNumber);
        // assert.equal(name, expectedPersonName);
        // assert.equal(favoriteNumber, expectedFavoriteNumber);
    });
});
