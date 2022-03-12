
async function main(){
  
    const  [deployer ]   = await ethers.getSigners ();
  
    
  
    console.log("Transactions deployed to:", 
    deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("Erc20");
    const token = await Token.deploy();

    console.log("Token addres:", token.address);
    
  }

  
   main()
    .then(() =>  process.exit(0))
     .catch (error => {
    console.error(error);
    process.exit(1);
      
  });
  