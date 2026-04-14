function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12">
        <h2 className="text-3xl font-bold sm:text-5xl">KeenKeeper</h2>

        <p className="mx-auto mt-4 max-w-3xl text-xs leading-6 text-emerald-100 sm:text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <h3 className="mt-7 text-xl font-semibold sm:mt-8 sm:text-2xl">Social Links</h3>

        <div className="mt-5 flex justify-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-950 sm:h-10 sm:w-10"
          >
            <i className="fa-brands fa-instagram" />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-950 sm:h-10 sm:w-10"
          >
            <i className="fa-brands fa-facebook" />
          </a>

          <a
            href="#"
            aria-label="X"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-950 sm:h-10 sm:w-10"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
        </div>

        <div className="mt-8 border-t border-emerald-800 pt-5 md:mt-10 md:pt-6 md:flex md:items-center md:justify-between">
          <p className="text-xs text-emerald-100 sm:text-sm">
            &copy; 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 md:mt-0">
            <a href="#" className="text-xs text-emerald-100 hover:text-white sm:text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-emerald-100 hover:text-white sm:text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-emerald-100 hover:text-white sm:text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
