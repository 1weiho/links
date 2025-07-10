'use client';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from './link';

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        className="w-full py-6 rounded-2xl justify-start"
        variant="outline"
        onClick={() => setOpen(true)}
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
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search links..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Design">
            <CommandItem>
              <Link title="Vercel" url="vercel.com" />
            </CommandItem>
            <CommandItem>
              <Link title="Raycast" url="raycast.com" />
            </CommandItem>
            <CommandItem>
              <Link title="Shadcn" url="ui.shadcn.com" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
