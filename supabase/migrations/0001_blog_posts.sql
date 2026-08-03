create table public.blog_posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  title         text not null,
  subtitle      text,
  meta_title    text,
  meta_description text,
  excerpt       text,
  body_html     text not null,
  category      text not null default 'Marketing',
  tags          text[] not null default '{}',
  author_name   text not null default 'Alex Ashcroft',
  author_role   text not null default 'Founder',
  hero_image_url text,
  hero_image_alt text,
  og_image_url  text,
  featured_video text,
  video_heading text,
  video_date    text,
  read_time     integer,
  status        text not null default 'published'
                check (status in ('draft','published','archived')),
  published_at  timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  source        text not null default 'n8n',
  external_id   text,
  created_at    timestamptz not null default now()
);

create index blog_posts_status_published_idx
  on public.blog_posts (status, published_at desc);

alter table public.blog_posts enable row level security;
-- No policies. Access is service-role only from server routes.
