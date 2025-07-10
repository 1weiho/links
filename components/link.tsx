import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface LinkProps {
    title: string
    url: string
}

const Link = ({ title, url }: LinkProps) => {
  return (
    <Button variant="ghost" className="gap-4 w-full justify-start">
      <Image
        src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
        alt={`${title}'s favicon`}
        width={128}
        height={128}
        className="size-6 rounded-sm"
      />
      <h3>{title}</h3>
      <p className="text-muted-foreground">{url}</p>
    </Button>
  );
};

export default Link;
