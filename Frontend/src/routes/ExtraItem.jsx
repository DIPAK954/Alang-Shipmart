import { useSelector } from "react-redux";
import ExtraItemImage from "../components/ExtraItemImage";
import ExtraSummary from "../components/ExtraSummary";
const ExtraItem = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((items) => {
    const itemIndex = bagItems.indexOf(items.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <ExtraItemImage  item={item} />
            ))}
          </div>
          <div className="bag-summary"></div>
          {/* <ExtraSummary/> */}
        </div>
      </main>
    </>
  );
};

export default ExtraItem;
