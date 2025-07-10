import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface CategoryInfoProps {
  title: string;
  icon: LucideIcon;
  count: number;
  iconColorClassname?: string;
}

const CategoryInfo = ({
  title,
  icon: Icon,
  count,
  iconColorClassname,
}: CategoryInfoProps) => {
  return (
    <div className="flex items-center w-full justify-between rounded-lg h-fit font-normal">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            'size-7 rounded-lg border text-muted-foreground flex justify-center items-center bg-white',
            iconColorClassname
          )}
        >
          <Icon className="size-4" />
        </div>
        <span>{title}</span>
      </div>

      <span className="bg-neutral-200/50 size-5 text-xs flex justify-center items-center rounded-md">
        {count}
      </span>
    </div>
  );
};

export default CategoryInfo;
