import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            家具/家電採購清單（MVP）
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            公開前台可瀏覽；管理者登入後可新增/編輯/標記已購買。
          </p>
        </header>

        <section className="rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="text-base font-medium">下一步（開發中）</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>串接 Supabase（items 資料表 + RLS：公開讀、admin 可寫）</li>
            <li>清單頁：搜尋 / 篩選 / 排序 / 依 room 分組</li>
            <li>登入後在同頁顯示新增/編輯按鈕（不做獨立後台）</li>
          </ul>

          <div className="mt-4 text-sm">
            <span className="text-slate-600">需求規格：</span>
            <Link
              className="text-blue-600 underline hover:text-blue-800"
              href="https://github.com/Davisanity-TW/Furniture_Purchase_Web/blob/main/docs/requirements.md"
              target="_blank"
              rel="noreferrer"
            >
              docs/requirements.md
            </Link>
          </div>
        </section>

        <footer className="mt-10 text-xs text-slate-500">
          Deployed on Vercel (staging). Data via Supabase.
        </footer>
      </div>
    </main>
  );
}
