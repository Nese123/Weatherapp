const CityInput = ({ setInput, input, inputSearch }) => {
    return (
        <div>
            <label>
                Name:
                <input onChange={(event) => setInput(event.target.value)} type="text" name="name" value={input} />
            </label>
            <button onClick={inputSearch}>Hae</button> 
        </div>
    )
}

export default CityInput