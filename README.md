# GridEHR

The Demo Link: https://drive.google.com/file/d/1dRCfRTIIc_7kE5NI6LB8mRgKNoohuC5d/view?usp=sharing
The PPT Link: https://drive.google.com/file/d/1nTjJZnGicf_dWtzjA5TmQR1KFWUF8sTi/view?usp=sharing

Steps to run the project:

1. Go to the code directory and run "npm install"
2. Open ganache	and create a new workspace, then add the truffle.config.js in your projects.
3. Change the server port number in the server tab to 8545 in that newly created workspace
4. Run truffle migrate in the code directory
5. Copy the contract address of Agent from the Contracts tab of ganache and paste it into src/js/app.js in 

```var agentContractAddress = "";```

6. Run lite-server in the terminal.
7. Connect the Metamask to local 8545 ganache and import accounts for patients and doctors.
8. The website will run.

