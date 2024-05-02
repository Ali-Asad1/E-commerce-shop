import { BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="mt-4 overflow-hidden rounded-xl">
      <div className="aspect-square bg-cover sm:aspect-[8/3]" style={{ backgroundImage: `url(${data.imageUrl})` }}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 rounded-xl text-center">
          <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-4xl lg:text-6xl">{data.label}</div>
        </div>
      </div>
    </div>
  );
};
export default Billboard;
