import { PaintbrushVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategoryButton = () => {
  return (
    <Button
      variant="ghost"
      className="flex items-center w-full justify-between p-1.5 rounded-lg -ml-1.5 h-fit font-normal"
    >
      <div className="flex items-center gap-4">
        <div className="size-9 rounded-lg border-2 text-cyan-400 flex justify-center items-center bg-white">
          <PaintbrushVertical className="size-5" />
        </div>
        <span className="text-lg">Design</span>
      </div>

      <span className="bg-neutral-200/50 size-6 flex justify-center items-center rounded-md">
        1
      </span>
    </Button>
  );
};

export default CategoryButton;
