type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-3 py-4 sm:px-4 sm:py-5 md:px-8 md:py-6">
      {children}
    </div>
  );
}
