export default function SiteFooter() {
  return (
    <footer className="mx-auto mt-8 max-w-6xl px-6 pb-10 md:px-8 md:pb-14">
      <div className="border-t border-[#ccb9a8] pt-5 text-sm text-[#7c675b]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p>Алла Таскаева · Художественный переплет и авторская вышивка</p>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#8a7468]">
            <a
              href="https://www.youtube.com/@allataskaeva"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#ccb9a8] px-3 py-1 transition hover:bg-[#f1e8de]"
            >
              YouTube
            </a>
            <a
              href="https://instagram.com/allataskaeva"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#ccb9a8] px-3 py-1 transition hover:bg-[#f1e8de]"
            >
              @allataskaeva
            </a>
            <a
              href="https://vk.com/allataskaevamk"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#ccb9a8] px-3 py-1 transition hover:bg-[#f1e8de]"
            >
              VK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
