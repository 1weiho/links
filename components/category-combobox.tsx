'use client';

import { ChevronsUpDownIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { getCategoriesWithCount, LinkCategory } from '@/constants/links';
import CategoryButton from './category-button';
import CategoryInfo from './category-info';
import { useState } from 'react';

interface CategoryComboboxProps {
  selectedCategory: LinkCategory;
  setSelectedCategory: (category: LinkCategory) => void;
}

const CategoryCombobox = ({
  selectedCategory,
  setSelectedCategory,
}: CategoryComboboxProps) => {
  const [open, setOpen] = useState(false);

  const categories = getCategoriesWithCount();

  const currentCategory = categories.find(
    (category) => category.id === selectedCategory
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="grow justify-between h-fit p-2 rounded-[.75rem]"
        >
          {currentCategory ? (
            <CategoryInfo
              title={currentCategory.name}
              icon={currentCategory.icon}
              count={currentCategory.count}
              iconColorClassname={currentCategory.iconColorClassname}
            />
          ) : (
            'Select framework...'
          )}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 bg-white/10 backdrop-blur-md mt-1 rounded-[.75rem]"
        style={{ width: 'var(--radix-popover-trigger-width)' }}
      >
        <Command className="bg-transparent">
          <CommandInput placeholder="Search category..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.id}
                  value={category.id}
                  onSelect={() => {
                    setSelectedCategory(category.id);
                    setOpen(false);
                  }}
                  asChild
                >
                  <CategoryButton
                    title={category.name}
                    icon={category.icon}
                    count={category.count}
                    selected={false}
                    onClick={() => {}}
                    iconColorClassname={category.iconColorClassname}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryCombobox;
