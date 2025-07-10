'use client';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from './link';
import {
  CATEGORY_CONFIG,
  LinkCategory,
  LinkWithCategory,
  searchLinks,
} from '@/constants/links';
import { cn } from '@/lib/utils';

interface CommandMenuProps {
  className?: string
}

export function CommandMenu({ className }: CommandMenuProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allMatchingLinks = searchLinks(searchQuery);
  const linksByCategory = Object.values(LinkCategory).reduce(
    (acc, category) => {
      const categoryLinks = allMatchingLinks.filter(
        (link) => link.category === category
      );
      if (categoryLinks.length > 0) {
        acc[category] = categoryLinks;
      }
      return acc;
    },
    {} as Record<LinkCategory, LinkWithCategory[]>
  );

  const handleSelectLink = async (link: LinkWithCategory) => {
    setOpen(false);

    await new Promise((resolve) => setTimeout(resolve, 150));
    setSearchQuery('');

    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

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
      {/* Desktop Search Button */}
      <div className={cn("sticky top-0 hidden md:block", className)}>
        <div className="relative">
          <Button
            className="w-full py-6 rounded-2xl justify-start z-10 bg-white/20 backdrop-blur-sm"
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

          {/* Overlay */}
          <span className="absolute bg-gradient-to-b from-[#FBFBFB] to-transparent h-20 w-full block -z-10 top-0" />
        </div>
      </div>

      {/* Mobile Search Button */}
      <Button
        variant="outline"
        className={cn("md:hidden! h-auto rounded-[.75rem]", className)}
        onClick={() => setOpen(true)}
      >
        <Search />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search links..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {Object.entries(linksByCategory).map(([category, links]) => (
            <CommandGroup
              key={category}
              heading={
                <div className="flex items-center gap-2">
                  <span>{CATEGORY_CONFIG[category as LinkCategory].name}</span>
                  <span className="text-xs text-muted-foreground">
                    {links.length}
                  </span>
                </div>
              }
            >
              {links.map((link) => (
                <CommandItem
                  key={link.id}
                  value={`${link.name} ${link.url}`}
                  onSelect={() => handleSelectLink(link)}
                >
                  <Link title={link.name} url={link.url} />
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
