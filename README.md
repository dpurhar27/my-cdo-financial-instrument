#### About

I designed, built and tested the smart contracts to create this _**revamped**_ CDO financial instrument on the Dharma Protocol and Ethereum (in 1 week due to time restraints from school).

A generic, scalable, extendable, trust-less and efficient *glass* CDO credit derivative built on the Dharma Protocol and Ethereum. It serves as a Traditional, Synthetic or Squared CDO.

Designed to be fully trust-less, transparent and automated on the blockchain using smart contracts. It is a *glass* CDO because anyone can transparently see the underlying assets that back it solving the problem with traditional CDO vehicles. This problem was a huge part of the 2008 financial crisis.

It is written in Solidity 0.4.18 because Dharma Protocol uses that version currently. Contracts include the **^** (a minor security flaw) *for now* because my native Solidity compiler is the latest version which isn't compatible with Dharma's version, including **^** is a quick work-around.

#### Functionality

- CDO shares or bonds are represented as **ERC721** *Tranche* tokens. Each share belongs to a unique CDO and a tranche. Different tranches can have different risk exposure and interest rates.
- *Tranche* tokens are unique through their priority, the CDO they belong too and the repayment value they are owed.
- Any ERC20 token can be used as principal **including BTC soon** (WBTC).
- *Scalable* to **any number** of tranches, shares, investors, or underlying instruments with an efficient storage and logic approach.
- *Generic*, any number of tranches, differing interest rates, tranche shares etc.
- *Un-opinionated*, can use any ERC721 token as a payment vehicle. This enables it to be used as other credit derivatives including Synthetic and Squared CDO's.
- *Efficient*, it only tracks and stores what it needs. Ex. Stores a single balance per Tranche, not all the individual CDO investors separate balances.
- Abstraction of storage and parameters that make each CDO unique and the master logic = Can support a (CDOCloneFactory -> CDO Storage -> Proxy -> CDO Logic) design = Code re-use, gas efficient, scalable and upgradeable.
- *Extendable* into other financial instruments.
- *Trustless* creation of CDO's (verifies the CDO and it's debts), and repayments / risk.
- Supports creation of **secondary markets** for further risk-management (can trade Tranche Tokens and CDO's).
- *Inter-operability* with anything on the Dharma Protocol such as Relayers and dApps and wallets built for the ERC721 standard.
- Supports underwriting of CDO's and tranches.

#### Future Work

- Trustless upgradeability of contracts.
- Gas testing and optimization (variables re-ordering and testing in production environment, weigh running functions cost vs. deployment cost then choose a new design).
- Metadata for Relayers / dApps.
- Build in ability to buy partial insurance or a partial credit default swap on a tranche share.
- Ability for the CDO to accept other types of interest rates (compounding, floating).
- Ability for the CDO to liquidate and distribute collateral in the event of a default. Currently the smart contract receives the collateral and then it must be manually liquidated.

### Setup
---------------
##### Dependencies

Install dependencies:
```
yarn
```
or
```
npm install
```

##### Testing (two different consoles navigated to this project directory)

1. Start `testrpc` in console 1:
```
yarn chain
```
or
```
npm run chain
```

2. `migrate` contracts in console 2:
```
truffle migrate
```

3. Run `Truffle` tests in console 2:
```
truffle test
```
