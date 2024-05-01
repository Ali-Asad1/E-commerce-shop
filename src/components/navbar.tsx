import { getCategories } from "@/actions/get-categories";
import { getStore } from "@/actions/get-store";
import Link from "next/link";

import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();
  const store = await getStore();
  return (
    <div className="border-b">
      <div className="container">
        <div className="flex h-16 items-center">
          <Link href="/" className="flex gap-x-2 lg:ml-0">
            <p className="font-poppins text-xl font-bold">{store.name}</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
