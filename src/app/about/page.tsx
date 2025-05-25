// src/app/about/page.tsx
export const dynamic = 'force-static'; // ✅ 静的エクスポートを強制

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page using App Router + static export.</p>
    </main>
  );
}
