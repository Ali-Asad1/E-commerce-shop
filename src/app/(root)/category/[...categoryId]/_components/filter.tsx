"use client";

import { PopoverTrigger } from "@radix-ui/react-popover";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useState } from "react";

import { ColorType, SizeType } from "@/types";

import { cn } from "@/utils/utils";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent } from "@/components/ui/popover";

interface FilterProps {
  data: (SizeType | ColorType)[];
  valueKey: string;
  name: string;
}

const Filter: React.FC<FilterProps> = ({ data, valueKey, name }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const currentValue = searchParams.get(valueKey);

  const selectHandler = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query: { [x: string]: string | null } = {
      [valueKey]: current[valueKey] !== id ? id : null,
    };

    const url = qs.stringifyUrl({ url: window.location.href, query }, { skipNull: true });

    replace(url);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[150px]">
          {currentValue ? data.find((value) => value.id === currentValue)?.name : name}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0" align="start">
        <Command>
          <CommandEmpty>No {name} found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {data.map((value) => (
                <CommandItem
                  key={value.id}
                  onSelect={() => {
                    selectHandler(value.id);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between"
                >
                  {value.name}
                  <Check className={cn("size-4", value.id === currentValue ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default Filter;
