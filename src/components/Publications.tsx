import { publications } from "@/data/publications";
import type { Author } from "@/data/publications";

function AuthorList({ authors }: { authors: Author[] }) {
  return (
    <p className="text-sm text-muted">
      {authors.map((author, index) => (
        <span key={author.name}>
          {index > 0 && ", "}
          {author.isSelf ? (
            <span className="underline underline-offset-2">{author.name}</span>
          ) : (
            author.name
          )}
        </span>
      ))}
    </p>
  );
}

export default function Publications() {
  return (
    <section className="px-6 py-12">
      <h2 className="mb-10 text-3xl font-bold tracking-tight">
        Blogs and Publications
      </h2>

      <ul className="space-y-8">
        {publications.map((publication) => (
          <li key={publication.href}>
            <a
              href={publication.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-foreground"
            >
              {publication.title}
            </a>
            <p className="mt-1.5 text-sm italic text-muted">
              {publication.venue}
            </p>
            <div className="mt-1.5">
              <AuthorList authors={publication.authors} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
