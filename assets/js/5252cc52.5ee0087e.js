"use strict";(self.webpackChunkstatus_network_docs=self.webpackChunkstatus_network_docs||[]).push([[900],{4210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(4848),s=n(8453);const i={},o="Using Hardhat to Deploy Smart Contracts",a={id:"tutorials/deploying-contracts/using-hardhat",title:"Using Hardhat to Deploy Smart Contracts",description:"This tutorial will guide you through the process of deploying a smart contract on Status Network's Ethereum Layer 2 using Hardhat and TypeScript.",source:"@site/docs/tutorials/deploying-contracts/using-hardhat.md",sourceDirName:"tutorials/deploying-contracts",slug:"/tutorials/deploying-contracts/using-hardhat",permalink:"/tutorials/deploying-contracts/using-hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/status-im/status-network-docs/tree/main/docs/tutorials/deploying-contracts/using-hardhat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Ethers Tutorial",permalink:"/tutorials/ethers-tutorial"},next:{title:"\ud83c\udf10 Using Thirdweb",permalink:"/tutorials/deploying-contracts/using-thirdweb"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What You&#39;ll Accomplish",id:"what-youll-accomplish",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Initialize a Hardhat TypeScript Project",id:"1-initialize-a-hardhat-typescript-project",level:3},{value:"2. Writing the Smart Contract",id:"2-writing-the-smart-contract",level:3},{value:"3. Configuring Hardhat for Status Network",id:"3-configuring-hardhat-for-status-network",level:3},{value:"4. Compilation",id:"4-compilation",level:3},{value:"5. Deployment",id:"5-deployment",level:3},{value:"Deploy the smart contract to the Status Network Testnet:",id:"deploy-the-smart-contract-to-the-status-network-testnet",level:4},{value:"6. Verify Your Contract on the Block Explorer",id:"6-verify-your-contract-on-the-block-explorer",level:3},{value:"7. Interacting with Your Smart Contract",id:"7-interacting-with-your-smart-contract",level:3},{value:"Example: Interacting via a Script",id:"example-interacting-via-a-script",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"using-hardhat-to-deploy-smart-contracts",children:"Using Hardhat to Deploy Smart Contracts"})}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial will guide you through the process of deploying a smart contract on ",(0,r.jsx)(t.strong,{children:"Status Network's Ethereum Layer 2"})," using ",(0,r.jsx)(t.strong,{children:"Hardhat"})," and ",(0,r.jsx)(t.strong,{children:"TypeScript"}),"."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Before you begin, ensure you have the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Node.js and npm"}),": Download and install from the ",(0,r.jsx)(t.a,{href:"https://nodejs.org/",children:"official Node.js website"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Ethereum Wallet"}),": A private key for the ",(0,r.jsx)(t.strong,{children:"Status Network Testnet"})," that has testnet ETH.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Obtain testnet ETH from the ",(0,r.jsx)(t.a,{href:"/tools/testnet-faucets",children:"Status Network Testnet Faucet"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Important"}),": Use a new wallet without real funds to ensure security in case the private key gets compromised."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Basic Knowledge"}),": Familiarity with ",(0,r.jsx)(t.strong,{children:"Solidity"}),", ",(0,r.jsx)(t.strong,{children:"Hardhat"}),", and the command line is helpful but not mandatory."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"what-youll-accomplish",children:"What You'll Accomplish"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Initialize a TypeScript-based Hardhat project."}),"\n",(0,r.jsx)(t.li,{children:"Write a basic Ethereum smart contract."}),"\n",(0,r.jsx)(t.li,{children:"Configure Hardhat for Status Network Testnet deployment."}),"\n",(0,r.jsx)(t.li,{children:"Deploy your smart contract on Status Network."}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(t.h3,{id:"1-initialize-a-hardhat-typescript-project",children:"1. Initialize a Hardhat TypeScript Project"}),"\n",(0,r.jsx)(t.p,{children:"Open your terminal and create a new directory for your project, then navigate into it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir my-hardhat-project && cd my-hardhat-project\n"})}),"\n",(0,r.jsx)(t.p,{children:"Initialize an npm project:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm init -y\n"})}),"\n",(0,r.jsx)(t.p,{children:"Install the necessary packages for Hardhat and TypeScript:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers @typechain/ethers-v5 @typechain/hardhat typechain\n"})}),"\n",(0,r.jsx)(t.p,{children:"Start a new Hardhat project with TypeScript:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx hardhat\n"})}),"\n",(0,r.jsx)(t.p,{children:"When prompted, make the following selections:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Choose ",(0,r.jsx)(t.strong,{children:'"Create a TypeScript project"'}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["For the ",(0,r.jsx)(t.code,{children:".gitignore"})," prompt, select ",(0,r.jsx)(t.strong,{children:'"Yes"'}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["For installing the project's dependencies, select ",(0,r.jsx)(t.strong,{children:'"Yes"'}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Example interaction:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"888    888                      888 888               888\n888    888                      888 888               888\n888    888                      888 888               888\n8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888\n888    888      88b 888P   d88  888 888  88b      88b 888\n888    888 .d888888 888    888  888 888  888 .d888888 888\n888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.\n888    888  Y888888 888      Y88888 888  888  Y888888  Y888\n\n\ud83d\udc77 Welcome to Hardhat v2.18.2 \ud83d\udc77\u200d\n\n\u2714 What do you want to do? \xb7 Create a TypeScript project\n\u2714 Hardhat project root: \xb7 /Users/username/my-hardhat-project\n\u2714 Do you want to add a .gitignore? (Y/n) \xb7 y\n\u2714 Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)? (Y/n) \xb7 y\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"2-writing-the-smart-contract",children:"2. Writing the Smart Contract"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"contracts"})," directory, delete the sample smart contract ",(0,r.jsx)(t.code,{children:"Lock.sol"})," and create a new file named ",(0,r.jsx)(t.code,{children:"HelloWorld.sol"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract HelloWorld {\n    string public greet = "Hello, Status Network!";\n\n    function setGreet(string memory _greet) public {\n        greet = _greet;\n    }\n\n    function getGreet() public view returns (string memory) {\n        return greet;\n    }\n}\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"3-configuring-hardhat-for-status-network",children:"3. Configuring Hardhat for Status Network"}),"\n",(0,r.jsxs)(t.p,{children:["Edit the ",(0,r.jsx)(t.code,{children:"hardhat.config.ts"})," file to include Status Network Testnet settings:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { HardhatUserConfig } from "hardhat/config";\nimport "@nomicfoundation/hardhat-toolbox";\n\nconst config: HardhatUserConfig = {\n  networks: {\n    statusTestnet: {\n      url: "https://testnet.status.network",\n      chainId: 2020,\n      accounts: ["YOUR_PRIVATE_KEY_HERE"], // BE VERY CAREFUL, DO NOT SHARE THIS\n    },\n  },\n  solidity: "0.8.24",\n};\n\nexport default config;\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR_PRIVATE_KEY_HERE"})," with your Status Network Testnet private key (without quotes)."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Important:"})," Do not push your ",(0,r.jsx)(t.code,{children:"hardhat.config.ts"})," file to any public repository or share your private key with anyone. To prevent accidental exposure, ensure your ",(0,r.jsx)(t.code,{children:".gitignore"})," file includes ",(0,r.jsx)(t.code,{children:"hardhat.config.ts"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"4-compilation",children:"4. Compilation"}),"\n",(0,r.jsx)(t.p,{children:"Compile the smart contract:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx hardhat compile\n"})}),"\n",(0,r.jsx)(t.p,{children:"You should see output indicating that the compilation was successful."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"5-deployment",children:"5. Deployment"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"scripts"})," directory, create a new file named ",(0,r.jsx)(t.code,{children:"deploy.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { ethers } from "hardhat";\n\nasync function main() {\n  const HelloWorld = await ethers.getContractFactory("HelloWorld");\n\n  const helloWorld = await HelloWorld.deploy();\n\n  await helloWorld.deployed();\n\n  console.log("HelloWorld deployed to:", helloWorld.address);\n}\n\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If you encounter gas-related issues, you can specify ",(0,r.jsx)(t.code,{children:"gasPrice"})," and ",(0,r.jsx)(t.code,{children:"gasLimit"})," when deploying:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const gasPrice = ethers.utils.parseUnits('10', 'gwei'); // Adjust as needed\nconst gasLimit = 500000; // Adjust based on your contract\n\nconst helloWorld = await HelloWorld.deploy({ gasPrice, gasLimit });\n"})}),"\n",(0,r.jsx)(t.h4,{id:"deploy-the-smart-contract-to-the-status-network-testnet",children:"Deploy the smart contract to the Status Network Testnet:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx hardhat run scripts/deploy.ts --network statusTestnet\n"})}),"\n",(0,r.jsx)(t.p,{children:"Upon successful deployment, you should see an output similar to:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"HelloWorld deployed to: 0xYourContractAddressHere\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"6-verify-your-contract-on-the-block-explorer",children:"6. Verify Your Contract on the Block Explorer"}),"\n",(0,r.jsxs)(t.p,{children:["Visit the ",(0,r.jsx)(t.a,{href:"https://testnet.statusscan.io/",children:"Status Network Testnet Explorer"})," and search for your contract address to view its details."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"7-interacting-with-your-smart-contract",children:"7. Interacting with Your Smart Contract"}),"\n",(0,r.jsx)(t.p,{children:"You can interact with your deployed contract using Hardhat scripts, tests, or via a frontend application."}),"\n",(0,r.jsx)(t.h4,{id:"example-interacting-via-a-script",children:"Example: Interacting via a Script"}),"\n",(0,r.jsxs)(t.p,{children:["Create a new script ",(0,r.jsx)(t.code,{children:"interact.ts"})," in the ",(0,r.jsx)(t.code,{children:"scripts"})," directory:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { ethers } from "hardhat";\n\nasync function main() {\n  const contractAddress = "0xYourContractAddressHere"; // Replace with your contract address\n\n  const HelloWorld = await ethers.getContractFactory("HelloWorld");\n  const helloWorld = HelloWorld.attach(contractAddress);\n\n  // Read the current greeting\n  const currentGreet = await helloWorld.getGreet();\n  console.log("Current Greet:", currentGreet);\n\n  // Update the greeting\n  const tx = await helloWorld.setGreet("Hello from Hardhat!");\n  await tx.wait();\n\n  // Read the updated greeting\n  const newGreet = await helloWorld.getGreet();\n  console.log("Updated Greet:", newGreet);\n}\n\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n'})}),"\n",(0,r.jsx)(t.p,{children:"Run the script:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx hardhat run scripts/interact.ts --network statusTestnet\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["Congratulations! You've successfully deployed a smart contract on the ",(0,r.jsx)(t.strong,{children:"Status Network Testnet"})," using ",(0,r.jsx)(t.strong,{children:"Hardhat"})," and ",(0,r.jsx)(t.strong,{children:"TypeScript"}),"."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Explore More Tutorials"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Check out other tutorials in the ",(0,r.jsx)(t.a,{href:"/tutorials/ethers-tutorial",children:"Status Network Documentation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Deploy to Mainnet"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Once you're comfortable with the testnet, consider deploying to the Status Network Mainnet. Update your ",(0,r.jsx)(t.code,{children:"hardhat.config.ts"})," with the mainnet RPC URL and Chain ID."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Secure Your Private Keys"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Use environment variables to store your private keys securely."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Install ",(0,r.jsx)(t.code,{children:"dotenv"})," package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install dotenv\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update your ",(0,r.jsx)(t.code,{children:"hardhat.config.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { HardhatUserConfig } from "hardhat/config";\nimport "@nomicfoundation/hardhat-toolbox";\nimport * as dotenv from "dotenv";\n\ndotenv.config();\n\nconst config: HardhatUserConfig = {\n  networks: {\n    statusTestnet: {\n      url: "https://testnet.status.network",\n      chainId: 2020,\n      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n  },\n  solidity: "0.8.24",\n};\n\nexport default config;\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.code,{children:".env"})," file in the root of your project:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"PRIVATE_KEY=your_private_key_without_quotes\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update your ",(0,r.jsx)(t.code,{children:".gitignore"})," to include ",(0,r.jsx)(t.code,{children:".env"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://status.network/",children:"Status Network Official Website"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.status.network/",children:"Status Network Documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://hardhat.org/getting-started/",children:"Hardhat Documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/",children:"TypeScript Documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.ethers.io/",children:"Ethers.js Documentation"})}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Need Help?"})}),"\n",(0,r.jsx)(t.p,{children:"If you encounter any issues or have questions, feel free to reach out:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Community Discord"}),": ",(0,r.jsx)(t.a,{href:"https://discord.gg/status_im",children:"Join Our Discord"})]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Happy Coding!"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);