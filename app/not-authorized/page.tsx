export default function NotAuthorizedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-6 font-serif">
      <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm text-center">
        <h1 className="text-3xl font-bold text-slate-900">Access Denied</h1>
        <p className="mt-3 text-slate-600">You do not have permission to view this page. Please log in with an admin account.</p>
      </div>
    </main>
  );
}
