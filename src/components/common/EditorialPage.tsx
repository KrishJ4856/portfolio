export function EditorialPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <header className="mb-8 space-y-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-secondary text-base">{description}</p>
        </header>
        {children}
      </div>
    </main>
  );
}
