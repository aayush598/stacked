import type { ReactNode } from "react";

export default function FormsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <div className="forms-lab-bs">{children}</div>
    </>
  );
}
