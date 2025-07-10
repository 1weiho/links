'use client';

import CategoryButton from '@/components/category-button';
import { CommandMenu } from '@/components/command-menu';
import Link from '@/components/link';
import NextLink from 'next/link';
import {
  getCategoriesWithCount,
  getLinksByCategory,
  LinkCategory,
} from '@/constants/links';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CategoryCombobox from './category-combobox';

const LinkManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<LinkCategory>(
    LinkCategory.DESIGN
  );

  const categories = getCategoriesWithCount();
  const links = getLinksByCategory(selectedCategory);

  return (
    <div className="md:flex mx-8 md:mx-12 xl:mx-32 mt-16 xl:mt-24">
      <div className="w-60 xl:w-[360px] shrink-0">
        <div className="flex items-center gap-3 md:gap-5">
          <Image
            src="/assets/avatar.jpeg"
            alt="Avatar"
            width={260}
            height={260}
            className="rounded-lg size-10 md:size-12 border-2"
          />
          <h1 className="text-xl md:text-2xl">Links</h1>
        </div>

        <div className="mt-12 w-full hidden md:grid gap-4">
          {categories.map((category) => (
            <CategoryButton
              title={category.name}
              key={category.id}
              count={category.count}
              icon={category.icon}
              selected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
              iconColorClassname={category.iconColorClassname}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:max-h-[calc(100vh-4rem)] xl:max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="md:w-4/5 mx-auto">
          {/* Desktop Search Button */}
          <CommandMenu className="hidden md:block" />

          {/* Mobile Categories Switcher & Search Button */}
          <div className="md:hidden mt-8 w-full flex gap-2">
            <CategoryCombobox
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <CommandMenu />
          </div>

          <div className="my-8 grid gap-6 md:gap-3 -ms-4 md:-mx-4">
            {links.length > 0 ? (
              links.map((link) => (
                <Button variant="ghost" key={link.id} asChild>
                  <NextLink href={link.url} target="_blank">
                    <Link title={link.name} url={link.url} />
                  </NextLink>
                </Button>
              ))
            ) : (
              <p className="mx-4">Empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkManager;
