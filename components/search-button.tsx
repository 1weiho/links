'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

interface SearchButtonProps {
  onClick: () => void;
  className?: string;
}

export function SearchButton({ onClick, className }: SearchButtonProps) {
  return (
    <>
      {/* Desktop Search Button */}
      <div className={cn('sticky top-0 hidden md:block', className)}>
        <div className="relative">
          <Button
            className="w-full py-6 rounded-2xl justify-start z-10 bg-white/20 backdrop-blur-sm"
            variant="outline"
            onClick={onClick}
          >
            <Search />
            Search
            <div className="ml-auto flex gap-1">
              <span className="size-6 bg-accent flex items-center justify-center rounded-md">
                ⌘
              </span>
              <span className="size-6 bg-accent flex items-center justify-center rounded-md">
                K
              </span>
            </div>
          </Button>

          {/* Overlay */}
          <span className="absolute bg-gradient-to-b from-[#FBFBFB] to-transparent h-20 w-full block -z-10 top-0" />
        </div>
      </div>

      {/* Mobile Search Button */}
      <Button
        variant="outline"
        className={cn('md:hidden! h-auto rounded-[.75rem]', className)}
        onClick={onClick}
      >
        <Search />
      </Button>
    </>
  );
}
