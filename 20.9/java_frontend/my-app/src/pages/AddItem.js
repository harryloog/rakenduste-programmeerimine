import AddItemForm from "../components/AddItemForm";

function AddItem (props) {
    function itemSubmitHandler(item) {
        console.log(itme);
    }

    return (
        <div>
            <h1>Lisa uus ese!</h1>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    );
}

export default AddItem;