const List = ({ clickHandler }) => {
    const cities = ['Helsinki', 'Tampere', 'Oulu', 'Turku', 'Rovaniemi']
    const buttons = cities.map(city=><button onClick={clickHandler} key={city} data-name={city}>{city}</button>) 
    return (
        <ul>
            {buttons}
        </ul>
    )
}

export default List