import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface LinkProps {
    title: string
    url: string
}

const parseUrl = (url: string, removeSubdomain = false) => {
  const cleaned = url
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/g, '');

  const [rawHost, ...pathParts] = cleaned.split('/');
  let host = rawHost;

  host = host.replace(/^www\./i, '');

  if (removeSubdomain) {
    const segments = host.split('.');

    if (segments.length > 2) {
      host = segments.slice(-2).join('.');
    }
  }

  const path = pathParts.join('/');

  return path ? `${host}/${path}` : host;
}

const Link = ({ title, url }: LinkProps) => {
  return (
    <div className="flex gap-4 w-full justify-start items-center">
      <Image
        src={`https://www.google.com/s2/favicons?domain=${parseUrl(url, true)}&sz=128`}
        alt={`${title}'s favicon`}
        width={128}
        height={128}
        className="size-6 rounded-sm"
      />
      <h3>{title}</h3>
      <p className="text-muted-foreground">{parseUrl(url)}</p>
    </div>
  );
};

export default Link;
