import { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import "./styles/styles.scss";
import AOS from "aos";
import WalletConnectProvider from "@walletconnect/web3-provider";
import AlertModal from "./AlertModal";

import Web3 from "web3";
import axios from "axios";
import {
  contractAddress1,
  contractabi1,
  contractAddress2,
  contractabi2,
  // tokenAddress, tokenabi
} from "./constants/constants";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from './Pages/HomePage'
import ExplorePage from "./Pages/ExplorePage";
import AuctionPage from "./Pages/AuctionPage";
import SoldPage from "./Pages/SoldPage";
import CreatePage from "./Pages/CreatePage";
import Account from "./Pages/Account";
import CreatorsPage from "./Pages/CreatorsPage";



export const ActiveContext = createContext();

const App = () => {
  //const [active, setActive] = useState(1);
  const [active, setActive] = useState(1);
  const [value, setValue] = useState(20);
  const [nftprice, nftsetprice] = useState([]);
  const [nftitems, nftsetitems] = useState([]);
  const [mnftprice, mnftsetprice] = useState([]);
  const [mnftitems, mnftsetitems] = useState([]);
  const [bnbnfts, setBnbNfts] = useState([])
  const [ethnfts, setEthNfts] = useState([])
  const [bnbAnfts, setBnbANfts] = useState([])
  const [ethAnfts, setEthANfts] = useState([])
  const [ethSnfts, setEthSNfts] = useState([])
  const [bnbSnfts, setBnbSNfts] = useState([])
  const [bnbmyOnfts, setBnbMyONfts] = useState([])
  const [ethmyOnfts, setEthMyONfts] = useState([])
  const [bnbmyLnfts, setBnbMyLNfts] = useState([])
  const [ethmyLnfts, setEthMyLNfts] = useState([])
  const [bnbmySnfts, setBnbMySNfts] = useState([])
  const [ethmySnfts, setEthMySNfts] = useState([])
  const [bnbmyAnfts, setBnbMyANfts] = useState([])
  const [ethmyAnfts, setEthMyANfts] = useState([])
  const [listednfts, setListedNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  const [walletvalue, setWalletValue] = useState("");
  const [balance, setBalance] = useState("token");
  const [ticket, setticketBalance] = useState("nft");
  const [inputval, setInputVal] = useState();
  var [fff, setfff] = useState([]);
  var [nnn, setnnn] = useState([]);
  const [account, setAccount] = useState("Metamask");
  const [Connect, setConnect] = useState("WalletConnect");
  const [connected, setconnected] = useState(false);
  const [connectWallet, setConnectWallet] = useState("WalletConnect");
  const [show, setShow] = useState(false);
  const [showmeta, setShowMeta] = useState(false);
  const [showwallet, setShowWallet] = useState(false);
  const [hi, sethin] = useState(false);
  const [supply, setsupply] = useState([]);
  const [address, setaddress] = useState("Connect");
  const [hideconnect, sethideconnect]= useState(true);
  const [hidenetwork, sethidenetwork]= useState(false);
  const [hidewalletnetwork, sethidewalletnetwork]= useState(false);
  const [bnbcost, setbnbcost]= useState();
  const [ethcost, setethcost]= useState();
  const [alertModal, setAlertModal] = useState(false);
  const [bsc, setbsc] = useState(false);
  const [eth, seteth] = useState(false);



  let addresvalue;

  let accountAd;
  let item;

  const lloadWeb3 = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
    }    
  }

  const ethWeb3 = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x4' }],
        
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
    } 
    seteth(true)   
  }

  const bscWeb3 = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }],
        
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
    } 
    setbsc(true)   
  }

  const loadWeb3 = async () => {
    setShowMeta(true);
    setShow(false);
    setShowWallet(false);
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
        setconnected(false);
        console.log(
          "Metamask is not installed, please install it on your browser to connect."
        );
        alert(
          "Metamask is not installed, please install it on your browser to connect."
        );
      }
      if (isConnected === true) {
        let accounts = await getAccounts();
        setAccount(accounts[0]);
        accountAd = accounts[0];
        setConnect("Connected");
        setWalletValue(accounts[0]);
        addresvalue = accountAd.substring(0, accountAd.length - 31) + "...";

        setaddress(addresvalue);
        if(bsc == false && eth == false){
          bscWeb3()
        }
       
        loadBnbNFTs()
        loadEthNFTs()
        loadBnbANFTs()
        loadEthANFTs()
        loadBnbSNFTs()
        loadEthSNFTs()
        loadMyBnbONFTs()
        loadMyEthONFTs()
        loadMyBnbLNFTs()
        loadMyEthLNFTs()
        loadMyBnbSNFTs();
        loadMyEthSNFTs();
        loadMyBnbANFTs()
        loadMyEthANFTs();
        sethideconnect(false)
        sethidenetwork(true)

        setconnected(true);
        // getMasterData();

        let accountDetails = null;
        window.ethereum.on("accountsChanged", function (accounts) {
          setAccount(accounts[0]);
          accountAd = accounts[0];
          setConnect("Connected");
          setWalletValue(accounts[0]);
          addresvalue = accountAd.substring(0, accountAd.length - 31) + "...";

          setaddress(addresvalue);
          // console.log(accounts);
        });
      }
    } catch (error) {
      console.log("Error while connecting metamask", error);
      // alert("Error while connecting metamask");
    }
  };

  const getAccounts = async () => {
    const web3 = window.web3;
    try {
      let accounts = await web3.eth.getAccounts();
      console.log(accounts);
      return accounts;
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
      return null;
    }
  };

  // eslint-disable-next-line
  const isLockedAccount = async () => {
    try {
      let accounts = await getAccounts();
      if (accounts.length > 0) {
        console.log("Metamask is unlocked");
      } else {
        console.log("Metamask is locked");
      }
    } catch (error) {
      alert("Error while checking locked account");
    }
  };

  const loadBnbNFTs = async () => {
    //loadMyNFTs();   
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    const data = await contract.methods.fetchMarketItems().call();
    //console.log("market", data)

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.methods.tokenURI(i.tokenId).call();
      //console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      //console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
       // times: meta.data.times,
       // rarity: meta.data.rarity,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setBnbNfts(items)
    console.log("listedbnbmarket", bnbnfts)
    setLoadingState('loaded')
  }

  const loadEthNFTs = async () => {
    //loadMyNFTs();   
    const web3 =   new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    //let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    //console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    console.log("kkkk", contract1)
    const tokenUr = await contract1.methods.tokenURI(1).call();
    console.log("market", tokenUr)

    const data1 = await contract1.methods.fetchMarketItems().call();
    console.log("market", data1)

    const items1 = await Promise.all(data1.map(async i => {
      const tokenUri = await contract1.methods.tokenURI(i.tokenId).call();
      console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setEthNfts(items1)
    console.log("listedethmarket", ethnfts)
    setLoadingState('loaded')
  }

  const loadBnbANFTs = async () => {
    //loadMyNFTs();   
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    const data2 = await contract.methods.fetchItemsAuction().call();
    //console.log("market", data)

    const items2 = await Promise.all(data2.map(async i => {
      const tokenUri = await contract.methods.tokenURI(i.tokenId).call();
      //console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      //console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        closetime:i.closetime,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setBnbANfts(items2)
    console.log("auctionbnbmarket", bnbAnfts)
    setLoadingState('loaded')
  }

  const loadEthANFTs = async () => {
    //loadMyNFTs();   
    const web3 =   new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    //let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    //console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    console.log("kkkk", contract1)
    const tokenUr = await contract1.methods.tokenURI(1).call();
    console.log("market", tokenUr)

    const data3 = await contract1.methods.fetchItemsAuction().call();
    console.log("market", data3)

    const items3 = await Promise.all(data3.map(async i => {
      const tokenUri = await contract1.methods.tokenURI(i.tokenId).call();
      console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        closetime:i.closetime,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setEthANfts(items3)
    console.log("auctionethmarket", ethAnfts)
    setLoadingState('loaded')
  }

  const loadBnbSNFTs = async () => {
    //loadMyNFTs();   
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    const data4 = await contract.methods.fetchItemsSold().call();
    //console.log("market", data)

    const items4 = await Promise.all(data4.map(async i => {
      const tokenUri = await contract.methods.tokenURI(i.tokenId).call();
      //console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      //console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setBnbSNfts(items4)
    console.log("market", bnbSnfts)
    setLoadingState('loaded')
  }

  const loadEthSNFTs = async () => {
    //loadMyNFTs();   
    const web3 =   new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    //let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    //console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    console.log("kkkk", contract1)
    const tokenUr = await contract1.methods.tokenURI(1).call();
    console.log("market", tokenUr)

    const data5 = await contract1.methods.fetchItemsSold().call();
    console.log("market", data5)

    const items5 = await Promise.all(data5.map(async i => {
      const tokenUri = await contract1.methods.tokenURI(i.tokenId).call();
      console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setEthSNfts(items5)
    console.log("market", ethSnfts)
    setLoadingState('loaded')
  }

  const loadMyBnbONFTs = async () => {
    //loadMyNFTs();   
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    const data6 = await contract.methods.fetchMyNFTs(accountAd).call();
    //console.log("market", data)

    const items6 = await Promise.all(data6.map(async i => {
      const tokenUri = await contract.methods.tokenURI(i.tokenId).call();
      //console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      //console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setBnbMyONfts(items6)
    console.log("market", bnbmyOnfts)
    setLoadingState('loaded')
  }

  const loadMyEthONFTs = async () => {
    //loadMyNFTs();   
    const web3 =   new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    //let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    //console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    console.log("kkkk", contract1)
    const tokenUr = await contract1.methods.tokenURI(1).call();
    console.log("market", tokenUr)

    const data7 = await contract1.methods.fetchMyNFTs(accountAd).call();
    console.log("market", data7)

    const items7 = await Promise.all(data7.map(async i => {
      const tokenUri = await contract1.methods.tokenURI(i.tokenId).call();
      console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setEthMyONfts(items7)
    console.log("market", ethmyOnfts)
    setLoadingState('loaded')
  }

  
  const loadMyBnbSNFTs = async () => {
    //loadMyNFTs();   
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    const data8 = await contract.methods.fetchMyItemsSold(accountAd).call();
    //console.log("market", data)

    const items8 = await Promise.all(data8.map(async i => {
      const tokenUri = await contract.methods.tokenURI(i.tokenId).call();
      //console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      //console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setBnbMySNfts(items8)
    console.log("market", bnbmySnfts)
    setLoadingState('loaded')
  }

  const loadMyEthSNFTs = async () => {
    //loadMyNFTs();   
    const web3 =   new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    //let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    //console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    console.log("kkkk", contract1)
    const tokenUr = await contract1.methods.tokenURI(1).call();
    console.log("market", tokenUr)

    const data9 = await contract1.methods.fetchMyItemsSold(accountAd).call();
    console.log("market", data9)

    const items9 = await Promise.all(data9.map(async i => {
      const tokenUri = await contract1.methods.tokenURI(i.tokenId).call();
      console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setEthMySNfts(items9)
    console.log("market", ethmySnfts)
    setLoadingState('loaded')
  }

  const loadMyBnbLNFTs = async () => {
    //loadMyNFTs();   
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    const data10 = await contract.methods.fetchItemsListed(accountAd).call();
    //console.log("market", data)

    const items10 = await Promise.all(data10.map(async i => {
      const tokenUri = await contract.methods.tokenURI(i.tokenId).call();
      //console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      //console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setBnbMyLNfts(items10)
    console.log("market", bnbmyLnfts)
    setLoadingState('loaded')
  }

  const loadMyEthLNFTs = async () => {
    //loadMyNFTs();   
    const web3 =   new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    //let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    //console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    console.log("kkkk", contract1)
    const tokenUr = await contract1.methods.tokenURI(1).call();
    console.log("market", tokenUr)

    const data11 = await contract1.methods.fetchItemsListed(accountAd).call();
    console.log("market", data11)

    const items11 = await Promise.all(data11.map(async i => {
      const tokenUri = await contract1.methods.tokenURI(i.tokenId).call();
      console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setEthMyLNfts(items11)
    console.log("market", ethmyLnfts)
    setLoadingState('loaded')
  }

  const loadMyBnbANFTs = async () => {
    //loadMyNFTs();   
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    const data12 = await contract.methods.fetchMyItemsAuction(accountAd).call();
    //console.log("market", data)

    const items12 = await Promise.all(data12.map(async i => {
      const tokenUri = await contract.methods.tokenURI(i.tokenId).call();
      //console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      //console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //var closetime =  i.closetime > 0 ? new Date(i.closetime * 1000).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ") : 'Never';
      //console.log("time",closetime)
      //let price = i.price;
      let item = {
        pricee,
        price,
        closetime: i.cloetime,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setBnbMyANfts(items12)
    console.log("market", bnbmyAnfts)
    setLoadingState('loaded')
  }

  const loadMyEthANFTs = async () => {
    //loadMyNFTs();   
    const web3 =   new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    //let contract = new web3.eth.Contract(contractabi1, contractAddress1);
    //console.log("kkkk", contract)
    let contract1 = new web3.eth.Contract(contractabi2, contractAddress2);
    console.log("kkkk", contract1)
    const tokenUr = await contract1.methods.tokenURI(1).call();
    console.log("market", tokenUr)

    const data13 = await contract1.methods.fetchMyItemsAuction(accountAd).call();
    console.log("market", data13)

    const items13 = await Promise.all(data13.map(async i => {
      const tokenUri = await contract1.methods.tokenURI(i.tokenId).call();
      console.log("market", tokenUri)
      const meta = await axios.get(tokenUri)
      console.log("market", meta)
      //let priceee = web3.utils.fromWei(i.priceee);
      let price = i.price;
      let pricee = web3.utils.fromWei(price, 'ether');
      //let price = i.price;
      let item = {
        pricee,
        price,
        itemIdd: i.itemId,
        itemId: i.itemId,
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        category: meta.data.category,
        network: meta.data.network,
      }
      return item
    }))
    setEthMyANfts(items13)
    console.log("market", ethmyAnfts)
    setLoadingState('loaded')
  }
  
  


  var getethData = async () => {
    try {
      console.log("contract", "getData");
      const web3 = new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
      //console.log("contract", contract);
      let contract2 = new web3.eth.Contract(contractabi2, contractAddress2);
      console.log("contract", contract2);

      //let contractsupply = await contract2.methods.totalSupply().call();
      //console.log("mmm", contractsupply)
      //setsupply(contractsupply)

      let contractethcost = await contract2.methods.cost().call();
      console.log("mmm", contractethcost)
      setethcost(contractethcost)

      


    } catch (e) {
      console.log("error", e);
    }
  };

  var getbnbData = async () => {
    try {
      console.log("contract", "getData");
      const web3 =new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
      //console.log("contract", contract);
      let contract1 = new web3.eth.Contract(contractabi1, contractAddress1);
      console.log("contract", contract1);

      

      let contractbnbcost = await contract1.methods.cost().call();
      //let contractbnbcost1 = web3.utils.fromWei(contractbnbcost, 'ether');
      console.log("mmm", contractbnbcost)
      setbnbcost(contractbnbcost)




    } catch (e) {
      console.log("error", e);
    }
  };

  const walletconnect = async () => {
    setShowWallet(true);
    let isConnected = false;
    try {
      // setErrorState(false);
      console.log("This is   setErrorState(false);");
      // const provider = new WalletConnectProvider({
      //     infuraId: "6d2b77cc1e1d45a7a12b25035aa39ce2",
      // });

      const provider = new WalletConnectProvider({
        chainId: 56,
        rpc: {
          56: "https://bsc-dataseed.binance.org",
        },
      });

      //  Enable session (triggers QR Code modal)
      await provider.enable();

      if (provider) {
        window.web3 = new Web3(provider);
        isConnected = true;
      } else {
        isConnected = false;
        setconnected(false);
        // setErrorState(true);
        console.log("This is setErrorState(true)");
        // let options = {};
        // options = {
        //   place: "tr",
        //   message: "wallet connect is not connected",
        //   type: "primary",
        //   icon: "",
        //   autoDismiss: 7,
        // };
        // notificationAlertRef.current.notificationAlert(options);
        // // "Metamask is not installed, please install it on your browser to connect.",
      }
      if (isConnected === true) {
        setconnected(true);
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        web3.eth.net.getId().then((netId) => {
          // console.log("(accounts[0], 2)", (accounts))
          setWalletValue(accounts[0]); 
          setAccount(accounts[0]);
          setConnectWallet(accounts[0]);
          accountAd = accounts[0];
          addresvalue = accountAd.substring(0, accountAd.length - 31) + "...";

          setaddress(addresvalue);
          sethideconnect(false)
          sethidewalletnetwork(true)
          //getData();
          //loadNFTs();
          //loadMyNFTs()
          //loadListedNFTs();

          switch (netId) {
            case 1:
              console.log("(accounts[0], 2)", (accounts[0], 2));
              console.log("This is mainnet");
              break;
            case 2:
              console.log("This is the deprecated Morden test network.");
              break;
            case 3:
              console.log("This is the ropsten test network.");
              break;
            default:
              console.log("(accounts[0], 2)", (accounts[0], 1));

            // console.log("This is an unknown network.");
          }
        });
        // this.props.dispatch(login(accounts[0]));

        window.ethereum.on("accountsChanged", function (accounts) {
          // this.props.dispatch(login(accounts[0]));
          web3.eth.net.getId().then((netId) => {
            switch (netId) {
              case 1:
                console.log("This is mainnet");
                break;
              case 2:
                console.log("This is the deprecated Morden test network.");
                break;
              case 3:
                console.log("This is the ropsten test network.");
                break;
              default:
                console.log("This is an unknown network.");
            }
          });
        });
      }
    } catch (error) {
      console.log("error", error);
      setconnected(false);
    }
  };

  const walletethconnect = async () => {
    setShowWallet(true);
    let isConnected = false;
    try {
      // setErrorState(false);
      console.log("This is   setErrorState(false);");
      // const provider = new WalletConnectProvider({
      //     infuraId: "6d2b77cc1e1d45a7a12b25035aa39ce2",
      // });

      const provider = new WalletConnectProvider({
        chainId: 1,
        rpc: {
          1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        },
      });

      //  Enable session (triggers QR Code modal)
      await provider.enable();

      if (provider) {
        window.web3 = new Web3(provider);
        isConnected = true;
      } else {
        isConnected = false;
        setconnected(false);
        // setErrorState(true);
        console.log("This is setErrorState(true)");
        // let options = {};
        // options = {
        //   place: "tr",
        //   message: "wallet connect is not connected",
        //   type: "primary",
        //   icon: "",
        //   autoDismiss: 7,
        // };
        // notificationAlertRef.current.notificationAlert(options);
        // // "Metamask is not installed, please install it on your browser to connect.",
      }
      if (isConnected === true) {
        setconnected(true);
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        web3.eth.net.getId().then((netId) => {
          // console.log("(accounts[0], 2)", (accounts))
          setWalletValue(accounts[0]); 
          setAccount(accounts[0]);
          setConnectWallet(accounts[0]);
          accountAd = accounts[0];
          addresvalue = accountAd.substring(0, accountAd.length - 31) + "...";

          setaddress(addresvalue);
          sethideconnect(false)
          sethidewalletnetwork(true)
          //getData();
          //loadNFTs();
          //loadMyNFTs()
          //loadListedNFTs();

          switch (netId) {
            case 1:
              console.log("(accounts[0], 2)", (accounts[0], 2));
              console.log("This is mainnet");
              break;
            case 2:
              console.log("This is the deprecated Morden test network.");
              break;
            case 3:
              console.log("This is the ropsten test network.");
              break;
            default:
              console.log("(accounts[0], 2)", (accounts[0], 1));

            // console.log("This is an unknown network.");
          }
        });
        // this.props.dispatch(login(accounts[0]));

        window.ethereum.on("accountsChanged", function (accounts) {
          // this.props.dispatch(login(accounts[0]));
          web3.eth.net.getId().then((netId) => {
            switch (netId) {
              case 1:
                console.log("This is mainnet");
                break;
              case 2:
                console.log("This is the deprecated Morden test network.");
                break;
              case 3:
                console.log("This is the ropsten test network.");
                break;
              default:
                console.log("This is an unknown network.");
            }
          });
        });
      }
    } catch (error) {
      console.log("error", error);
      setconnected(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
 
    <ActiveContext.Provider
      value={{
        active, setActive, address,
        supply,
        //loadNFTs,
        walletconnect,walletethconnect, lloadWeb3, hideconnect, hidenetwork,hidewalletnetwork, bscWeb3,ethWeb3,
        loadWeb3, connectWallet, show, showmeta, showwallet, setShow, account,  walletvalue,  listednfts
     
      }}
    >
      <Router>
        <Layout>
          <div className="app">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/explore" element={<ExplorePage  address ={address} bscWeb3={bscWeb3} ethWeb3={ethWeb3} walletvalue={walletvalue} loadWeb3={loadWeb3} loadEthNFTs= {loadEthNFTs} bnbnfts = {bnbnfts} loadBnbNFTs= {loadBnbNFTs}  ethnfts = {ethnfts}/>} />
              <Route exact path="/auction" element={<AuctionPage  address ={address} bscWeb3={bscWeb3} ethWeb3={ethWeb3} getbnbData={getbnbData} bnbcost={bnbcost}  walletvalue={walletvalue} loadWeb3={loadWeb3} loadEthANFTs= {loadEthANFTs} bnbAnfts = {bnbAnfts} loadBnbANFTs= {loadBnbANFTs} ethAnfts = {ethAnfts}/>} />
              <Route exact path="/sold" element={<SoldPage  address ={address} walletvalue={walletvalue} loadWeb3={loadWeb3} loadEthSNFTs= {loadEthSNFTs} bnbSnfts = {bnbSnfts} loadBnbSNFTs= {loadBnbSNFTs} ethSnfts = {ethSnfts}/>} />
              <Route exact path="/create" element={<CreatePage  address ={address} bscWeb3={bscWeb3} ethWeb3={ethWeb3} getbnbData={getbnbData} bnbcost={bnbcost} walletvalue={walletvalue} loadWeb3={loadWeb3} lloadWeb3={lloadWeb3} walletvalue={walletvalue}/>} />
              <Route exact path="/Account" element={<Account  address ={address} bscWeb3={bscWeb3} ethWeb3={ethWeb3} address={address} walletvalue={walletvalue} loadWeb3={loadWeb3} bnbmyLnfts={bnbmyLnfts} ethmyLnfts={ethmyLnfts} bnbmySnfts={bnbmySnfts} ethmySnfts={ethmySnfts} bnbmyOnfts={bnbmyOnfts} ethmyOnfts={ethmyOnfts} ethmyAnfts=  {ethmyAnfts} bnbmyAnfts={bnbmyAnfts} loadMyBnbONFTs={loadMyBnbONFTs} loadMyEthONFTs={loadMyEthONFTs}  loadMyBnbLNFTs={loadMyBnbLNFTs} loadMyEthLNFTs={loadMyEthLNFTs}  loadMyBnbSNFTs={loadMyBnbSNFTs} loadMyEthSNFTs={loadMyEthSNFTs}  loadMyBnbANFTs={loadMyBnbANFTs} loadMyEthANFTs={loadMyEthANFTs}/>} />
              <Route path="/explore/creators/:id" element={<CreatorsPage />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ActiveContext.Provider>
   
  );
};

export default App;
