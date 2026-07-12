import Image from "next/image";
import { Testimonial } from "@/lib/seed-types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps): React.ReactElement {
  const avatarSrc = testimonial.imageSrc
    ? testimonial.imageSrc
    : `https://picsum.photos/seed/${testimonial.avatarSeed ?? testimonial.id}/80/80`;
  const avatarAlt = testimonial.imageAlt ?? testimonial.author;

  return (
    <article
      className={`flex flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-7 ${className}`}
    >
      <span className="mb-5 inline-flex w-fit rounded-full border border-neutral-200 bg-[#f7f7f5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-800">
        {testimonial.company}
      </span>

      <blockquote className="flex-1 text-sm leading-relaxed text-neutral-700 sm:text-[15px]">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          unoptimized
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-neutral-900">
            {testimonial.author}
          </p>
          {testimonial.role ? (
            <p className="text-sm text-neutral-600">{testimonial.role}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
