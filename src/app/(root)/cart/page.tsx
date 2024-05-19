import CartList from "./_components/cart-list";
import Summary from "./_components/summary";

const Page = () => {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <CartList className="col-span-1 space-y-4 lg:col-span-2" />
        <Summary className="col-span-1" />
      </div>
    </div>
  );
};

export default Page;
