import React,  { useState, useEffect }  from 'react'
import { Button, Form, FormGroup, Label, Input, Tooltip } from "reactstrap";
import { create as ipfsClient } from 'ipfs-http-client'
import {
  contractAddress1,
  contractabi1,
  contractAddress2,
  contractabi2,
  // tokenAddress, tokenabi
} from "../../constants/constants";
import DateTimePicker from 'react-datetime-picker';



const CreatePage = ({bscWeb3, ethWeb3,lloadWeb3,data, walletvalue, loadWeb3,bnbcost, getbnbData}) => {
    const [fileUrl, setFileUrl] = useState("")
    const [formInput, updateFormInput] = useState({
        name: "",
        description: "",
        category: "ART",
       // custom_attribute: "[]",
        network: "Binance",
        //price: "",
      });
      const [petsValue, setPetsValue] = useState('');
      const [petsPrice, setPetsPrice] = useState('');
      const [contractadd, setcontractadd] = useState(contractAddress1);
      const [value, setvalue] = useState(false);
      const [vallue, setvallue] = useState(true);
      const [isChecked, setIsChecked] = useState(false);
      const [showclosetime, setshowclosetime] = useState(false);
      const [closetime, setclosetime] = useState(false);
      const [bnbvalue, setbnbValue] = useState();

      const sellinputbnb = async (e) => {
        try {
          const web3 = window.web3;
          // console.log("bscAddress true", typeof e.target.value);
          // console.log("bscAddress true", e.target.value === "");
          // console.log("bscAddress", window.web3.utils.toWei(e.target.value))
          setbnbValue(web3.utils.toWei(e.target.value));
          console.log("mmm", bnbvalue);
          console.log("nn", walletvalue)
        } catch (e) {
          console.log("error", e);
        }
      };


      const inputtime = async (e) => {
         setclosetime(e.target.value*86400)
         console.log(closetime)
      };

      const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
  
      const handlePlaceChange = (e) => {
  
          let { value } = e.target;
          setPetsValue(value);
  
          if (value === 'Auction') {
            setvalue(true)
            setvallue(false)
            setshowclosetime(true)
             
          }
          else if(value === 'Instant Sale') {
          setvallue(true)
          setvalue(false)
          setshowclosetime(false)
          
          }
         
  
  
      }

      const handleNetworkChange = (e) => {
  
        let { value } = e.target;
        //setPetsValue(value);

        if (value === 'Binance') {
          bscWeb3()
          setcontractadd(contractAddress1)
           console.log("add",contractadd)
        }
        else if(value === 'Ethereum') {
          ethWeb3()
          setcontractadd(contractAddress2)
          console.log("add",contractadd)
        }
       


    }

      const handlevalue = (e) => {
  
        let { value } = e.target;
        //setvalue(value);

        if (value === 'Auction') {
            setvalue(true)
            setvallue(false)
            
        }
       


    }

    const handlevallue = (e) => {
  
      let { value } = e.target;
      //setPetsValue(value);

      if (value === 'Instant Sale') {
          setvallue(true)
          setvalue(false)
         
      }
     


  }

      const projectId = '2C88IB0rGBQN4CwoHaduYLfh5fL'
const projectSecret = '59103593b5ce00280196d1a86fc8d69c'
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const client = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  //path:'QmUgdRuGDzMfCowje1DZSfuzkrCVJDmKbfTTJA4gVviiuc',
  headers: {
    authorization: auth
  }
})

async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      var url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
      console.log("bb",fileUrl)
     {/*} const { title, description } = formInput
   
      var data = JSON.stringify({
      title, description ,image: url })
      const adde = await client.add(data)
      const adder = await supabase.from('post').insert([{title, description ,image: url},])

      const urrl = `https://ipfs.infura.io/ipfs/${adde.path}`
      console.log("b",urrl)*/}
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

   const nftmint = async (url) => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(contractabi1, contractadd);
      let accountDetails = await contract.methods
        .createsellToken(url,bnbvalue)
        .send({
          from: walletvalue,
          gasLimit: 3000000,
          value:bnbcost

        })
        .on("transactionHash", async (hash) => {
          console.log("Your transaction is pending");
        })
        .on("receipt", async (receipt) => {
          console.log("Your transaction is confirmed", receipt);
          //toast.success("Your transaction is confirmed");
          loadWeb3()
        })
        .on("error", async (error) => {
          console.log("User denied transaction", error);
        });
    } catch (e) {
      console.log("error", e);
    }
  };

  const nftauction = async (url) => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(contractabi1, contractadd);
      let accountDetails = await contract.methods
        .createAuctionToken(url,bnbvalue,closetime)
        .send({
          from: walletvalue,
          gasLimit: 3000000,
          value:bnbcost

        })
        .on("transactionHash", async (hash) => {
          console.log("Your transaction is pending");
        })
        .on("receipt", async (receipt) => {
          console.log("Your transaction is confirmed", receipt);
          //toast.success("Your transaction is confirmed");
          loadWeb3()
        })
        .on("error", async (error) => {
          console.log("User denied transaction", error);
        });
    } catch (e) {
      console.log("error", e);
    }
  };
 

  async function createMarket() {
    const { name, description, category, network } = formInput
   
   var data = JSON.stringify({
    name, description, category, network, image: fileUrl
    })
    try {
      
     const added = await client.add(data)
     const urrl = `https://ipfs.infura.io/ipfs/${added.path}`
     nftmint(urrl)
     // const adder = await supabase.from('post').insert([{title, description ,image: fileUrl},])
     // console.log("mmm",`https://stjzezwxgnqxmfoyiajj.supabase.co/${adder.path}`)
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
    //nftmint(fileUrl,recipient)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  console.log(formInput);

  async function createAuction() {
    const { name, description, category, network} = formInput
   
   var data = JSON.stringify({
    name, description, category, network, image: fileUrl
    })
    try {
      
     const added = await client.add(data)
     const urrl = `https://ipfs.infura.io/ipfs/${added.path}`
     nftauction(urrl)
     // const adder = await supabase.from('post').insert([{title, description ,image: fileUrl},])
     // console.log("mmm",`https://stjzezwxgnqxmfoyiajj.supabase.co/${adder.path}`)
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
    //nftmint(fileUrl,recipient)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  console.log(formInput);

  useEffect(() => {
    getbnbData()
    //loadBnbANFTs()
}, []);
 

    return (
        <div className='create-page'>
            <div className='page__started-text'>GET STARTED</div>
            <div className='page__heading'>Create Item</div>
            <form className='page__form'>
                <input className='form__file' type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg, video/mp4, audio/*" onChange={onChange}/> <br />
                <label for="itemName">Item Name</label><br />
                <input type="tex"
                    id="itemName" name="itemName"
                    onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
                /><br />
                <label for="description">Description</label> <br />
                <input type="tex"
                    id="description" name="description"
                    onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
                /><br />
                <label for="category">Category:</label><br />
                <select name="category" id="category"
                 onChange={e => updateFormInput({ ...formInput, category: e.target.value })} >
                    <option value="ART">ART</option>
                    <option value="PHOTOGRAPHY">PHOTOGRAPHY</option>
                    <option value="MEME">MEME</option>
                    <option value="AUDIO">AUDIO</option>
                    <option value="VIDEO">VIDEO</option>
                    <option value="MOVIE">MOVIE</option>
                </select><br />
                <div className='page__select'>
                    <div className='select__wrapper'>
                        <label>Contract</label>
                        <select name="contract" id="contract">
                            <option value="Unique (ERC721)">Unique (ERC721)</option>
                        </select>
                    </div>
                    <div className='select__wrapper'>
                        <label>Network</label>
                        <select name="network" id="network"
                         onChange={e => updateFormInput({ ...formInput, network: e.target.value }) } onChange={handleNetworkChange} >
                            <option value="Binance">Binance</option>
                            <option value="Ethereum">Ethereum</option>
                            {/*<option value="Polygon">Polygon</option>*/}
                        </select>
                    </div>

                </div>
                <label for="itemPrice">Item Price:</label><br />
                <input type='text' placeholder='Price In BNB' name='price' 
                 onChange={sellinputbnb}/>
                {/*}  <div className='page__radio'>
                    <input className='radio' type="checkbox" id="instantSale" name="instantSale" value="Instant Sale"  checked={isChecked}
          onChange={handleOnChange} onChange={handlevallue} />
                    <label for="instantSale" className='ml--10'>Instant Sale</label>
                    <input className='radio ml--200' type="checkbox" id="auction" name="auction" value="Auction"  checked={isChecked}
          onChange={handleOnChange} onChange={handlevalue}/>
                    <label for="auction" className='ml--10'>Auction</label>
    </div>*/}
               {/*} <div className='page__radio'>
                    <input className='radio' type="radio" id="instantSale" name="instantSale" value="instantSale" />
                    <label className='ml--10'>Instant Sale</label>
                    <input className='radio ml--200' type="radio" id="auction" name="auction" value="auction" />
                    <label className='ml--10'>Auction</label>
    </div>*/}
                 <label for="Place On">Place On:</label><br />
                <select name="Place On" id="Place On"
                 onChange={handlePlaceChange}>
                    
                    <option value="Instant Sale">Instant Sale</option>
                    <option value="Auction">Auction</option>
                    
                   
                </select><br />
              {showclosetime? <div> <label for="itemPrice">Days:</label><br />
                <input type='text' placeholder='Price In BNB' name='price' 
                 onChange={inputtime}/></div>:null}
                {/*<div className='page--additional-token'>Additional Token</div>*/}
               {value? <div className='page--create' onClick={createAuction} >Create and Auction</div>:null}
               {vallue? <div className='page--create' onClick={createMarket} >Create and List</div>:null}
            </form>
        </div>
    )
}

export default CreatePage;