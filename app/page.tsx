import CategoryButton from '@/components/category-button';
import Link from '@/components/link';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex mx-32 mt-24">
      <div className="w-[400px] shrink-0">
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
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
        </div>
      </div>

      <div className="w-full">
        <div className="w-4/5 mx-auto">
          <Button
            className="w-full py-6 rounded-2xl justify-start"
            variant="outline"
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

          <div className="mt-8 grid gap-3 -mx-4">
            <Link title='Vercel' url='vercel.com' />
            <Link title='Raycast' url='raycast.com' />
            <Link title='Shadcn' url='ui.shadcn.com' />
          </div>
        </div>
      </div>
    </div>
  );
}
