# GridEHR

Steps to run the project:

1. Go to the code directory an run "rpm install"
2. Open ganache	and create a new workspace, then add the truffle.config.js in your projects.
3. Change server port number in the server tab to 8545 in that newly created workspace
4. Run truffle migrate in the code directory
5. Copy the contract address of Agent from Contracts tab of ganache and paste it in src/js/app.js in 

```var agentContractAddress = "";```

6. Run lite-server in terminal.
7. Connect metamask to local 8545 ganache and import accounts.
8. The website will run.
