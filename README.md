# BaseVaultProject - MultiSig Wallet

A secure, optimized, and developer-grade Multi-Signature Wallet smart contract deployed on the **Base Network**. This project leverages the Hardhat development environment for compiling, testing, and deploying robust multi-sig infrastructure.

---

## 🚀 Overview

This repository contains a professional implementation of a Multi-Signature Asset Vault. It provides decentralized governance over funds by requiring a threshold of predefined cryptographic signatures before any transaction can be executed on-chain.

### Key Features
* **Multi-Ownership Support:** Configurable array of secure owner addresses.
* **Custom Thresholds:** Dynamic consensus requirement (`numConfirmationsRequired`).
* **On-Chain Multi-Step Lifecycle:** Full support for transaction submission, confirmation tracking, execution, and confirmation revoking.
* **Gas Optimized:** Built using Solidity `^0.8.20` with code optimization enabled.

---

## 📁 Project Structure

```text
BaseVaultProject/
├── contracts/
│   └── MultiSigWallet.sol     # Core MultiSig Smart Contract
├── scripts/
│   └── deploy.js              # Hardhat Deployment Script
├── .gitignore                 # Secure Git Exclusion Rules
├── hardhat.config.js          # Hardhat Configuration for Base Network
├── package.json               # Node.js Dependencies & Scripts
└── README.md                  # Project Documentation