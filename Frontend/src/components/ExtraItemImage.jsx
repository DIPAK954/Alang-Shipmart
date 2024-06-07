
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { RiAddBoxLine } from "react-icons/ri";
import { FaRegSquareMinus } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const ExtraItemImage = ({ item }) => {
  const dispatch = useDispatch();

  const handleNewItem = () => {
    dispatch(bagActions.addToBag(item.id));

}
  const handleRemoveItem = () => {
      dispatch(bagActions.removeFromBag(item.id));
 
  }
  return (
    <div className="bag-item-container2">
      <div className="item-left-part2">
        <img className="bag-item-img2"  src={item.image} />
      </div>
      <div className="item-right-part2">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>
      
      {/* <div className="remove-from-cart" onClick={handleRemoveItem}>
      <MdDeleteForever />
      </div>
       */}
        <button
            type="button"
            className="btn-add-bag1 "
            onClick={handleNewItem}
          ><FaPlus />
          </button>
      
          <button
            type="button"
            className=" btn-add-bag2 "
            onClick={handleRemoveItem}
          >
            <FaMinus />
          </button>
    </div>
  );
};

export default ExtraItemImage;
