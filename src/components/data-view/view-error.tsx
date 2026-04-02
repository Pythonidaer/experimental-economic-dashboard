type ViewErrorProps = {
  title?: string;
  description?: string;
};

export function ViewError({
  title = "Something went wrong",
  description,
}: ViewErrorProps) {
  return (
    <div
      className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-3 text-sm leading-relaxed text-destructive sm:px-4"
      role="alert"
    >
      <p className="font-medium">{title}</p>
      {description ? (
        <p className="mt-1 text-destructive/90">{description}</p>
      ) : null}
    </div>
  );
}
