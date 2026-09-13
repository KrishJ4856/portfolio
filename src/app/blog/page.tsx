import ExternalBlogList from '@/components/blog/ExternalBlogList';
import { EditorialPage } from '@/components/common/EditorialPage';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { writing } from '@/config/Writing';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/blog');

export default function WritingPage() {
  return (
    <EditorialPage
      title="Blog"
      description="Notes and tutorials from things I've learned while building."
    >
      <ExternalBlogList posts={writing} initialCount={6} />
    </EditorialPage>
  );
}
