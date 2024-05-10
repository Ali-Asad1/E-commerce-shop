"use client";

import { usePreviewModal } from "@/hooks/use-preview-modal";

import { formatter } from "@/utils/utils";

import Gallery from "@/components/gallery/gallery";

import AddToCartBtn from "../add-to-cart-btn";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";

const PreviewModal = () => {
  const { data, isOpen, onClose, onOpen } = usePreviewModal();

  const changeHandler = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <>
      {data && (
        <Dialog open={isOpen} onOpenChange={changeHandler}>
          <DialogContent className="max-h-[400px] w-full min-w-[250px] max-w-[720px] overflow-auto sm:max-h-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Gallery images={data.images} />
              <div className="space-y-2">
                <h2 className="font-poppins text-xl font-semibold">{data.name}</h2>
                <p className="text-lg font-medium">{formatter.format(data.price)}</p>
                <Separator className="!my-4" />
                <div className="flex items-center gap-x-4">
                  <h3 className="font-semibold">Size:</h3>
                  <span>{data.size.name}</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <h3 className="font-semibold">Color:</h3>
                  <div className="size-6 rounded-full border-2" style={{ backgroundColor: data.color.value }} />
                </div>
                <AddToCartBtn className="!mt-10" data={data} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
export default PreviewModal;
