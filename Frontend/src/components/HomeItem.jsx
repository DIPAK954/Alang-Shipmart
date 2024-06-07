import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);

  //const elementFound = bagItems.indexOf(item.id) >= 0;


  // const handleAddToBag = () => {
  //   dispatch(bagActions.addToBag(item.id)); 
  // };

  const NewhandleAddToBag = () =>{
    dispatch(bagActions.addToBagNew(item.id));
  }
  // const handleRemove= () => {
  //   dispatch(bagActions.removeFromBag(item.id));
  // };


  return (
    <>
      <div className="item-container">
        <Link to="/extraItems"><img className="item-image" src={item.image} alt="item image"  onClick={NewhandleAddToBag}/></Link>
      
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
    
        {/*elementFound ? (
          <button
            type="button"
            className="btn btn-add-bag btn-success"
            onClick={handleAddToBag}
          >
            <IoMdAddCircleOutline /> Add to bag
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-add-bag btn-danger"
            onClick={handleRemove}
          >
            <IoMdRemoveCircleOutline /> Remove
          </button>
        )*/}
         
          {/* <button
            type="button"
            className="btn-add-bag "
            onClick={handleAddToBag}
          >
           <FaPlus /> 
          </button>
      
          <button
            type="button"
            className=" btn-add-bag "
            onClick={handleRemove}
          >
            <FaMinus /> 
          </button>
         */}
      </div>
    </>
  );
};

export default HomeItem;
