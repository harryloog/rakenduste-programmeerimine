import Item from '../components/Item'

function Home (props) {
    return (
        <div>   
            Tere!
            <Item name="Item1" price="10" category="mobiles" />
            <Item name="Item2" price="20"  category="laptops" />
        </div>
    )
}

export default Home;