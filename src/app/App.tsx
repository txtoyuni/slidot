import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import {
  DEVELOPMENT_URL,
  LevelsSection,
  PageLayout,
  RENTAL_URL,
  containerClass,
  headingClass,
  sectionClass,
} from "./shared"

const TUTORIAL_VIDEO = {
  id: "PH2aniv_LvU",
  title: "슬라이닷 튜토리얼 ⑤ 점자카드 사용하기",
  start: 24,
}

const CHALLENGES = [
  {
    title: "반복은 지루해요",
    desc: "같은 연습을 매일 하다 보면 점자 만지기를 싫어하게 되기도 해요.",
    solution: "점자 카드를 읽고 답을 맞힐 때마다 점수가 쌓이고, 신기록에 도전해요",
  },
  {
    title: "연습할 기회가 적어요",
    desc: "일상에서 점자를 읽어볼 일이 많지 않아요.",
    solution: "앱이 매일 오늘의 미션을 알려줘서, 집에서 매일 연습할 기회가 생겨요",
  },
  {
    title: "집에서 봐주기 어려워요",
    desc: "보호자가 점자를 모르면 정답을 확인해 주기 어려워요.",
    solution: "카드에 한글이 함께 적혀 있고 정답 여부를 소리로 알려줘서, 점자를 몰라도 함께할 수 있어요",
  },
]

const HOW_STEPS = [
  { title: "카드 태그", desc: "점자 카드를 스마트폰에 대면 자동으로 인식돼요." },
  { title: "음성 안내", desc: "앱이 문제 안내를 소리로 들려줘요." },
  { title: "점자 읽기", desc: "손끝으로 점자를 읽어요." },
  { title: "키보드 입력", desc: "답을 입력하면 맞았는지 바로 알려줘요." },
]

const FEATURES: Array<{ icon: ReactNode; title: string; desc: string }> = [
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3.5" />
      </>
    ),
    title: "오늘의 미션",
    desc: "앱이 매일 할 연습을 알려줘요.",
  },
  {
    icon: <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />,
    title: "콤보와 신기록",
    desc: "연속으로 맞히면 콤보, 같은 카드를 더 빨리 풀면 신기록이에요.",
  },
  {
    icon: (
      <>
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
      </>
    ),
    title: "주간 랭킹",
    desc: "일주일 동안 모은 점수로 친구들과 순위를 확인해요.",
  },
  {
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
    title: "나만의 문제카드",
    desc: "아이가 좋아하는 단어를 추가하고 정답을 녹음해 연습해요.",
  },
]

const REVIEWS = [
  "점자를 만지는 걸 안 좋아했는데, 슬라이닷과 함께 하니 거부감 없이 연습할 수 있었어요.",
  "슬라이닷으로 연습한 이후 점자 단어 읽기가 많이 늘었어요. 덕분에 이제 책·문장 읽기로 넘어갈 수 있게 되었어요.",
]

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden bg-brand px-6 pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12`}>
        <div>
          <h1
            id="hero-title"
            className="text-[34px] leading-[1.3] font-extrabold text-white lg:text-[56px]"
          >
            슬라이닷
          </h1>
          <p className="mt-3 text-[22px] leading-[1.4] font-bold text-white lg:mt-4 lg:text-[32px]">
            <span className="block">시각장애 아동을 위한</span>
            <span className="block">점자 읽기 연습 교구</span>
          </p>
          <p className="mt-4 text-[17px] leading-[1.6] text-white lg:mt-6 lg:text-lg">
            점자 카드를 손끝으로 읽고 키보드로 답하는 퀴즈 방식으로, 집에서 매일 재미있게 연습해요.
          </p>
          <div className="mt-6 lg:mt-9">
            <a
              href={RENTAL_URL}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-background px-7 py-3.5 text-base font-bold text-primary transition-colors hover:bg-secondary sm:w-auto"
            >
              무료 대여 신청하기
            </a>
          </div>
        </div>
        <img
          src="/images/slidot-line-art.webp"
          alt=""
          width="895"
          height="851"
          className="mx-auto w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[480px]"
        />
      </div>
    </section>
  )
}

const revealClass = "motion-safe:lg:transition-[opacity,translate] motion-safe:lg:duration-500 motion-safe:lg:ease-out"

const REVEAL_INTERVAL_MS = 700

function ChallengeRow({
  title,
  desc,
  solution,
  visible,
  onReach,
}: typeof CHALLENGES[number] & { visible: boolean; onReach: () => void }) {
  const ref = useRef<HTMLLIElement>(null)

  // 화면에 들어오면 어려움 → 화살표 → 해결책 순서로 나타남 (한 번만 재생)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 이미 지나친 줄이 빈 공간으로 남지 않도록 화면 위쪽에 걸린 경우도 포함
        if (entry.intersectionRatio >= 0.4 || entry.boundingClientRect.top < 0) {
          onReach()
          observer.disconnect()
        }
      },
      { threshold: [0, 0.4], rootMargin: "0px 0px -15% 0px" },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [onReach])

  return (
    <li
      ref={ref}
      className="grid items-stretch gap-2 lg:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] lg:gap-2"
    >
      <div
        className={`rounded-2xl bg-secondary px-5 py-4 lg:px-6 lg:py-5 ${revealClass} ${visible ? "" : "motion-safe:lg:-translate-x-6 motion-safe:lg:opacity-0"}`}
      >
        <h3 className="mb-1 text-lg font-bold lg:text-xl">{title}</h3>
        <p className="leading-[1.6] text-muted-foreground">{desc}</p>
      </div>
      <div
        aria-hidden="true"
        className={`flex items-center justify-center text-primary ${revealClass} motion-safe:lg:delay-150 ${visible ? "" : "motion-safe:lg:opacity-0"}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 rotate-90 lg:size-8 lg:rotate-0"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
      <div
        className={`flex items-center rounded-2xl bg-primary px-5 py-4 text-primary-foreground lg:px-6 lg:py-5 ${revealClass} motion-safe:lg:delay-300 ${visible ? "" : "motion-safe:lg:translate-x-6 motion-safe:lg:opacity-0"}`}
      >
        <p className="leading-[1.6] font-medium">{solution}</p>
      </div>
    </li>
  )
}

function Challenges() {
  const [reached, setReached] = useState(0)
  const [shown, setShown] = useState(0)
  const reachHandlers = useMemo(
    () => CHALLENGES.map((_, index) => () => setReached((count) => Math.max(count, index + 1))),
    [],
  )

  // 스크롤이 빨라도 앞줄이 끝난 뒤 다음 줄이 나타나도록 한 줄씩 진행
  useEffect(() => {
    if (shown >= reached) return
    const timer = window.setTimeout(
      () => setShown((count) => count + 1),
      shown === 0 ? 0 : REVEAL_INTERVAL_MS,
    )
    return () => window.clearTimeout(timer)
  }, [reached, shown])

  return (
    <section aria-labelledby="challenges-title" className={`${sectionClass} bg-background`}>
      <div className={containerClass}>
        <div className="mb-10 max-w-3xl lg:mb-14">
          <h2 id="challenges-title" className={`${headingClass} mb-4`}>
            <span className="block lg:inline">점자, 매일 연습하기가 </span>
            <span className="block lg:inline">어려우니까</span>
          </h2>
          <p className="text-base leading-[1.7] text-muted-foreground lg:text-lg">
            배운 점자를 손끝에 익히려면 꾸준한 반복이 필요해요.
          </p>
        </div>
        <ul className="grid gap-6 lg:gap-14">
          {CHALLENGES.map((item, index) => (
            <ChallengeRow
              key={item.title}
              {...item}
              visible={index < shown}
              onReach={reachHandlers[index]}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

function TutorialVideo() {
  const { id, title, start } = TUTORIAL_VIDEO
  const params = new URLSearchParams({
    start: String(start),
    rel: "0",
    cc_load_policy: "1",
    cc_lang_pref: "ko",
    hl: "ko",
  })

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-3xl bg-secondary">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
          title={`${title} (YouTube 영상)`}
          loading="lazy"
          allow="encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full"
        />
      </div>
      <figcaption className="mt-3 flex justify-end text-sm">
        <a
          href={`https://www.youtube.com/watch?v=${id}&t=${start}s`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="유튜브에서 보기, 새 탭에서 열기"
          className="font-medium text-primary underline underline-offset-4 hover:text-foreground"
        >
          유튜브에서 보기
        </a>
      </figcaption>
    </figure>
  )
}

function Product() {
  return (
    <section
      id="about"
      aria-labelledby="product-title"
      className={`${sectionClass} scroll-mt-20 bg-background`}
    >
      <div className={containerClass}>
        <div className="mb-14 grid items-center gap-6 lg:mb-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 id="product-title" className={headingClass}>
              슬라이닷, 이렇게 생겼어요
            </h2>
            <p className="mt-5 hidden text-lg leading-[1.7] text-muted-foreground lg:block">
              스마트폰 · 키보드 · 카드판에 아이 단계에 맞는 점자 카드 세트가 함께 가요.
            </p>
          </div>
          <figure>
            <div className="overflow-hidden rounded-2xl bg-white">
              <img
                src="/images/slidot-product.webp"
                alt="블록으로 만든 슬라이닷 본체. 위쪽 거치대에 스마트폰이 있고, 아래쪽에 노란 키보드와 점자 카드를 올리는 카드판이 있어요."
                loading="lazy"
                width="1267"
                height="799"
                className="w-full"
              />
            </div>
            <figcaption className="mt-4 leading-[1.6] text-muted-foreground lg:hidden">
              스마트폰 · 키보드 · 카드판에 아이 단계에 맞는 점자 카드 세트가 함께 가요.
            </figcaption>
          </figure>
        </div>

        <h3 className="mb-6 text-xl leading-[1.4] font-extrabold lg:mb-8 lg:text-[28px]">
          이렇게 사용해요
        </h3>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
          <TutorialVideo />
          <ol className="grid gap-4 lg:gap-6">
            {HOW_STEPS.map((step, index) => (
              <li key={step.title} className="flex items-start gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-[15px] font-extrabold text-accent-foreground"
                >
                  {index + 1}
                </span>
                <p className="mt-1 leading-[1.55] lg:text-lg">
                  <b>{step.title}</b> {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section aria-labelledby="features-title" className={`${sectionClass} bg-background`}>
      <div className={containerClass}>
        <h2 id="features-title" className={`${headingClass} mb-8 lg:mb-10`}>
          매일 재미있게 연습하도록
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
          {FEATURES.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3.5 lg:flex-col lg:gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand lg:size-12">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-[22px]"
                >
                  {feature.icon}
                </svg>
              </span>
              <div>
                <h3 className="text-[17px] font-bold lg:mb-1 lg:text-lg">{feature.title}</h3>
                <p className="mt-1 leading-[1.55] text-muted-foreground">{feature.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Validation() {
  return (
    <section
      id="validation"
      aria-labelledby="validation-title"
      className={`${sectionClass} bg-background`}
    >
      <div className={`${containerClass} grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-14`}>
        <div>
          <h2 id="validation-title" className={headingClass}>
            <span className="block">아이와 함께 검증한</span>
            <span className="block">학습 교구</span>
          </h2>
          <p className="mt-4 leading-[1.65] text-muted-foreground lg:mt-5 lg:text-lg">
            SK행복나눔재단이 직접 기획·개발했어요. 2023년부터 시각장애 아동 19명과 4차례 테스트를 거쳐 다듬었고, 2026년 미국 CSUN 보조공학 컨퍼런스에서도 소개했어요.
          </p>
          <a
            href={DEVELOPMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="개발 과정 보기, 새 탭에서 열기"
            className="mt-2 inline-flex min-h-11 items-center gap-1.5 font-bold text-primary hover:text-foreground lg:mt-3"
          >
            개발 과정 보기
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-[18px]"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div>
          <section
            aria-label="이용 후기"
            className="divide-y divide-border rounded-2xl bg-secondary p-5 lg:p-7"
          >
            {REVIEWS.map((review) => (
              <blockquote key={review} className="py-4 leading-[1.6] first:pt-0 last:pb-0 lg:text-lg">
                <p>“{review}”</p>
              </blockquote>
            ))}
          </section>
          <p className="mt-4 text-sm text-muted-foreground">
            이용 경험과 학습 변화는 아이마다 다를 수 있어요.
          </p>
        </div>
      </div>
    </section>
  )
}

function RentalCta() {
  return (
    <section
      aria-labelledby="rental-cta-title"
      className={`${sectionClass} bg-secondary`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="rental-cta-title"
          className="mb-3 text-2xl leading-[1.35] font-extrabold lg:mb-5 lg:text-[44px]"
        >
          슬라이닷, 무료로 대여해드려요
        </h2>
        <p className="text-base leading-[1.6] text-muted-foreground lg:text-lg">
          본체·스마트폰·점자 카드부터 배송·반납까지 모두 무료예요.
        </p>
        <div className="mt-6 flex justify-center lg:mt-9">
          <a
            href={RENTAL_URL}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground sm:w-auto"
          >
            무료 대여 신청하기
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <PageLayout ctaHref={RENTAL_URL}>
      <Hero />
      <Challenges />
      <Product />
      <LevelsSection />
      <Features />
      <Validation />
      <RentalCta />
    </PageLayout>
  )
}
