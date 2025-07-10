import CategoryButton from '@/components/category-button';
import { CommandMenu } from '@/components/command-menu';
import Link from '@/components/link';
import { BookText, Cloud, Figma, PaintbrushVertical, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
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
          <CategoryButton title="Design" icon={PaintbrushVertical} />
          <CategoryButton title="Tool" icon={Wrench} iconColorClassname='text-blue-400' />
          <CategoryButton title="Cloud" icon={Cloud} iconColorClassname='text-yellow-400' />
          <CategoryButton title="Docs" icon={BookText} iconColorClassname='text-orange-400' />
          <CategoryButton title="UI" icon={Figma} iconColorClassname='text-sky-400' />
        </div>
      </div>

      <div className="w-full">
        <div className="w-4/5 mx-auto">
          <CommandMenu />

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
