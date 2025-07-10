'use client';

import CategoryButton from '@/components/category-button';
import { CommandMenu } from '@/components/command-menu';
import Link from '@/components/link';
import {
  getCategoriesWithCount,
  getLinksByCategory,
  LinkCategory,
} from '@/constants/links';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const LinkManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<LinkCategory>(
    LinkCategory.DESIGN
  );

  const categories = getCategoriesWithCount();
  const links = getLinksByCategory(selectedCategory);

  return (
    <div className="flex mx-32 mt-24">
      <div className="w-[360px] shrink-0">
        <div className="flex items-center gap-5">
          <Image
            src="/assets/avatar.jpeg"
            alt="Avatar"
            width={260}
            height={260}
            className="rounded-lg size-12 border-2"
          />
          <h1 className="text-2xl">Links</h1>
        </div>

        <div className="mt-12 w-full grid gap-4">
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

      <div className="w-full">
        <div className="w-4/5 mx-auto">
          <CommandMenu />

          <div className="mt-8 grid gap-3 -mx-4">
            {links.length > 0 ? (
              links.map((link) => (
                <Button variant="ghost" key={link.id}>
                  <Link title={link.name} url={link.url} />
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
