import CartList from "./_components/cart-list";
import Summary from "./_components/summary";

const Page = () => {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CartList />
        <Summary />
      </div>
    </div>
  );
};

export default Page;
