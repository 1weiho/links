import { PaintbrushVertical } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryButtonProps {
  title: string
  icon: LucideIcon
  iconColorClassname?: string
}

const CategoryButton = ({ title, icon: Icon, iconColorClassname }: CategoryButtonProps) => {
  return (
    <Button
      variant="ghost"
      className="flex items-center w-full justify-between p-1.5 rounded-lg -ml-1.5 h-fit font-normal"
    >
      <div className="flex items-center gap-4">
        <div className={cn("size-9 rounded-lg border-2 text-muted-foreground flex justify-center items-center bg-white", iconColorClassname)}>
          <Icon className="size-5" />
        </div>
        <span className="text-lg">{title}</span>
      </div>

      <span className="bg-neutral-200/50 size-6 flex justify-center items-center rounded-md mr-2">
        1
      </span>
    </Button>
  );
};

export default CategoryButton;
