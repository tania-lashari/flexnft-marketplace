import React from 'react'

const Filters = () => {
    return (
        <div className='filters'>
            <div className='filers__heading'>Filters</div>
            <form className='filters__form'>
                <button className='form--apply'>Apply</button>
                <label for="chain">Chain:</label><br />

                <select name="chain" id="chain">
                    <option value="Ethereum">Ethereum</option>
                    <option value="Binance">Binance</option>
                    <option value="Polygon">Polygon</option>
                </select><br />
               {/*} <label for="price">Price:</label><br />
                <select name="price" id="price">
                    <option value="BNB">BNB</option>
                    <option value="MATIC">MATIC</option>
                    <option value="ETH">ETH</option>
                    <option value="BUSD">BUSD</option>
                    <option value="SFMv2">SFMv2</option>
    </select><br />*/}
                <div className='form__range'>
                    <input placeholder='Min' name='min' />
                    <div>to</div>
                    <input placeholder='Mix' name="max" />
                </div><br />
                <label>Categories</label><br />
                <input type="checkbox" id="art" name="art" value="ART" />
                <label for="art" className='ml--10'> ART</label><br />
                <input type="checkbox" id="meme" name="meme" value="MEME" />
                <label for="meme" className='ml--10'>MEME</label><br />
                <input type="checkbox" id="photography" name="photography" value="PHOTOGRAPHY" />
                <label for="photography" className='ml--10'>PHOTOGRAPHY</label><br />
                <input type="checkbox" id="audio" name="audio" value="AUDIO" />
                <label for="audio" className='ml--10'>AUDIO</label><br />
                <input type="checkbox" id="video" name="video" value="VIDEO" />
                <label for="video" className='ml--10'>VIDEO</label><br />
            </form>
        </div>
    )
}

export default Filters;