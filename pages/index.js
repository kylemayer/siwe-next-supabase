import Head from 'next/head'
import { useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [loginState, setLoginState] = useState();

  const login = async () => {
    setLoginState("Connecting to your wallet...");
    if (!window.ethereum) {
      setLoginState("No MetaMask wallet... Please install it");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const walletAddr = await signer.getAddress();
    const signature = await signer.signMessage("gm ser");
    console.log("sig:", signature);

  }


  return (
    <div className="bg-gray-800 flex flex-col justify-center min-h-screen py-2">
      <Head>
        <title>SIWE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <p className="mb-4 text-xs text-gray-100">{loginState}</p>
        <button className="px-6 py-4 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-gray-900 bg-yellow-300 hover:bg-yellow-200 focus:ring-gray-100" onClick={login}>
          Connect Wallet
        </button>


      </main>


    </div>
  )
}
