import React from "react";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col bg-[#0E0B64] text-white md:flex">
        <div className="p-5 text-xl font-bold">
          Dashboard
        </div>

        <nav className="flex flex-col gap-2 p-4">
          <a className="rounded-lg px-3 py-2 hover:bg-white/10">
            Home
          </a>
          <a className="rounded-lg px-3 py-2 hover:bg-white/10">
            Users
          </a>
          <a className="rounded-lg px-3 py-2 hover:bg-white/10">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h1 className="text-lg font-semibold">
            Dashboard
          </h1>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-300" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;