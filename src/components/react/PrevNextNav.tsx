import React from 'react';
import { LinkButton } from './LinkButton';

type PostMeta = {
  slug: string;
  title: string;
  date: Date;
};

type PrevNextNavProps = {
  posts: PostMeta[];
  currentSlug: string;
};

export const PrevNextNav: React.FC<PrevNextNavProps> = ({ posts, currentSlug }) => {
  const index = posts.findIndex((p) => p.slug === currentSlug);
  const prev = posts[index + 1]; // 日付降順なら次のインデックスが古い
  const next = posts[index - 1];

  return (
    <div className="flex justify-between mt-8 border-t pt-6">
      {prev ? (
        <LinkButton
          href={`articles/${prev.slug}`}
          label={`< ${prev.title}`}
          variant="secondary"
        />
      ) : <span />}
      {next ? (
        <LinkButton
          href={`articles/${next.slug}`}
          label={`${next.title} >`}
          variant="secondary"
        />
      ) : <span />}
    </div>
  );
};

