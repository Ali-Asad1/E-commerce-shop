import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-y-4">
      <h1 className="text-3xl font-bold duration-300 animate-in">Page Not Found 404</h1>
      <Button variant="link" asChild className="text-xl">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};
export default NotFound;
