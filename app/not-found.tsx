import Button from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-35 mt-20 flex flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="heading-4-italic text-foreground mb-4">404 — Page Not Found</h1>
      <h2 className="heading-3 max-w-[670px] text-foreground mb-4">This page is currently unavailable.</h2>
      <p className="text-base text-foreground/50 mb-8 max-w-xl text-center">
        The link you followed may be broken or the page may have been moved.<br />
        Please use the navigation menu to continue browsing or return to the homepage.
      </p>
      <div className='flex flex-col md:flex-row gap-4'>
        <Link href="https://calendly.com/p01consulting/30min" target='_blank'>
          <Button size="default" variant="ghost">
            Book Your Experience <ChevronRight className="stroke-foreground/50" height={16} width={16} />
          </Button>
        </Link>
        <Link href="/">
          <Button size="default" variant="secondary">
            Return to Homepage <ChevronRight className="stroke-background" height={16} width={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
} 