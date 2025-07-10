'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  CATEGORY_CONFIG,
  LinkCategory,
  LinkWithCategory,
  searchLinks,
} from '@/constants/links';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Link from './link';

interface CommandMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function CommandMenu({
  open: openCommandMenu,
  setOpen: setOpenCommandMenu,
}: CommandMenuProps) {
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
    setOpenCommandMenu(false);

    await new Promise((resolve) => setTimeout(resolve, 150));
    setSearchQuery('');

    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCommandMenu((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <CommandDialog open={openCommandMenu} onOpenChange={setOpenCommandMenu}>
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
  );
}
