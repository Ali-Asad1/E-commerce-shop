const ProductCardLoading = () => {
  return (
    <div className="aspect-square space-y-2 rounded-xl border bg-card p-3 shadow-md transition-colors">
      <div className="mb-4 aspect-square animate-pulse rounded-xl bg-slate-300"></div>
      <div className="h-2 w-full animate-pulse rounded-[2px] bg-slate-300"></div>
      <div className="h-2 w-1/3 animate-pulse rounded-[2px] bg-slate-300"></div>
      <div className="h-2 w-1/6 animate-pulse rounded-[2px] bg-slate-300"></div>
    </div>
  );
};
export default ProductCardLoading;
