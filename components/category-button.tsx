import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface CategoryButtonProps {
  title: string;
  icon: LucideIcon;
  count: number;
  selected: boolean;
  onClick: () => void;
  iconColorClassname?: string;
}

const CategoryButton = ({
  title,
  icon: Icon,
  count,
  selected,
  onClick,
  iconColorClassname,
}: CategoryButtonProps) => {
  return (
    <Button
      variant={selected ? 'secondary' : 'ghost'}
      className="flex items-center w-full justify-between p-1.5 rounded-lg md:-ml-1.5 h-fit font-normal"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <div
          className={cn(
            'size-7 md:size-9 rounded-lg border-2 text-muted-foreground flex justify-center items-center bg-white',
            iconColorClassname
          )}
        >
          <Icon className="size-4 md:size-5" />
        </div>
        <span className="md:text-lg">{title}</span>
      </div>

      <span className="bg-neutral-200/50 size-5 md:size-6 flex justify-center items-center rounded-md mr-2">
        {count}
      </span>
    </Button>
  );
};

export default CategoryButton;
