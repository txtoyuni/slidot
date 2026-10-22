import { useEffect, useState, type ReactNode } from "react"
import slidotLogo from "../imports/slidot_2_________0205.png"

export const HOME_URL = import.meta.env.BASE_URL
export const RENTAL_URL = `${HOME_URL}rental/`
export const APPLY_FORM_URL = "https://tally.so/r/mOZG2p"

const NAV_LINKS = [
  { label: "슬라이닷은", href: `${HOME_URL}#about` },
  { label: "대여 프로그램", href: RENTAL_URL },
  { label: "자주 묻는 질문", href: `${RENTAL_URL}#faq` },
]

const FOOTER_LINKS = [
  { label: "슬라이닷은", href: `${HOME_URL}#about` },
  { label: "슬라이닷 사용법", href: "https://www.youtube.com/playlist?list=PLdonruSYetBY", external: true },
  { label: "대여 프로그램", href: RENTAL_URL },
  { label: "슬라이닷 개발기", href: "https://rndlab.figma.site/project/slidot", external: true },
  { label: "자주 묻는 질문", href: `${RENTAL_URL}#faq` },
]

export const buttonClass =
  "inline-flex min-h-14 items-center justify-center gap-5 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground"
export const headingClass = "text-[32px] leading-[1.35] font-extrabold lg:text-[44px]"
export const sectionClass = "px-6 py-20 lg:py-24"
export const containerClass = "mx-auto max-w-[1160px]"

function Brand() {
  return (
    <img
      src={slidotLogo}
      alt="슬라이닷"
      width="847"
      height="364"
      className="block h-8 w-auto object-contain sm:h-9"
    />
  )
}

function NavBar({ ctaHref, currentHref }: { ctaHref: string; currentHref?: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <nav
        aria-label="주요 메뉴"
        className={`${containerClass} flex h-20 items-center justify-between gap-6 px-6 lg:h-22`}
      >
        <a href={HOME_URL} aria-label="슬라이닷 홈" onClick={() => setOpen(false)}>
          <Brand />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === currentHref ? "page" : undefined}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:underline hover:underline-offset-4 aria-[current=page]:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground"
          >
            무료 신청하기
          </a>
        </div>
        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-xl border border-border text-primary lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="block size-6 shrink-0"
          >
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="flex flex-col gap-2 border-t border-border bg-background p-6 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === currentHref ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-medium text-foreground hover:bg-secondary aria-[current=page]:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setOpen(false)}
            className={buttonClass}
          >
            <span>무료 신청하기</span>
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="bg-primary px-6 py-10 text-primary-foreground">
        <div className={`${containerClass} grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12`}>
          <h2 className="whitespace-nowrap text-xl leading-[1.4] font-bold">
            더 궁금한 점이 있으신가요?
          </h2>
          <dl className="grid gap-5 text-sm sm:grid-cols-3 sm:gap-8">
            <div>
              <dt className="mb-1 text-white/75">운영시간</dt>
              <dd className="font-medium text-white">평일 오전 10시 ~ 오후 6시</dd>
            </div>
            <div>
              <dt className="mb-1 text-white/75">이메일</dt>
              <dd>
                <a className="font-medium text-white underline underline-offset-4 hover:text-white/80" href="mailto:yes_all_@skhappiness.org">yes_all_@skhappiness.org</a>
              </dd>
            </div>
            <div>
              <dt className="mb-1 text-white/75">전화번호</dt>
              <dd>
                <a className="font-medium text-white underline underline-offset-4 hover:text-white/80" href="tel:07076014409">070-7601-4409</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="bg-white px-6 pt-10 pb-16 sm:pb-20">
        <div className={containerClass}>
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <div>
              <div className="flex flex-wrap items-start gap-x-5 gap-y-3">
                <a href={HOME_URL} aria-label="슬라이닷 홈">
                  <Brand />
                </a>
                <span aria-hidden="true" className="hidden h-10 w-px bg-border sm:block" />
                <a
                  href="https://skhappiness.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="행복나눔재단 홈페이지, 새 탭에서 열기"
                  className="relative block h-[50px] w-[102px] shrink-0 overflow-hidden rounded-sm"
                >
                  <img
                    src="/images/sk-happiness-foundation-logo.png"
                    alt=""
                    width="842"
                    height="595"
                    className="absolute -left-[21px] -top-[27px] w-[142px] max-w-none"
                  />
                </a>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">© 2026 Slidot</p>
            </div>
          <nav
            aria-label="하단 메뉴"
            className="grid grid-cols-2 content-start gap-x-8 gap-y-3 lg:mr-16"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.external ? `${link.label}, 새 탭에서 열기` : undefined}
                className="text-sm text-muted-foreground hover:text-primary hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function PageLayout({
  ctaHref,
  currentHref,
  children,
}: {
  ctaHref: string
  currentHref?: string
  children: ReactNode
}) {
  // 다른 페이지에서 앵커(예: /rental/#faq)로 들어오면 렌더링 후 해당 섹션으로 이동
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" })
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-xl bg-background px-5 py-3 font-bold text-primary focus:translate-y-0"
      >
        본문 바로가기
      </a>
      <NavBar ctaHref={ctaHref} currentHref={currentHref} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
