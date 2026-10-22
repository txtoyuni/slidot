import { useEffect, useState } from "react"
import slidotLogo from "../imports/slidot_2_________0205.png"

const NAV_LINKS = [
  { label: "슬라이닷은", href: "#about" },
  { label: "대여 프로그램", href: "#rental" },
  { label: "자주 묻는 질문", href: "#faq" },
]

const FOOTER_LINKS = [
  { label: "슬라이닷은", href: "#about" },
  { label: "슬라이닷 사용법", href: "https://www.youtube.com/playlist?list=PLdonruSYetBY", external: true },
  { label: "대여 프로그램", href: "#rental" },
  { label: "슬라이닷 개발기", href: "https://rndlab.figma.site/project/slidot", external: true },
  { label: "자주 묻는 질문", href: "#faq" },
]

const HOW_STEPS = [
  {
    num: "01",
    icon: "📲",
    title: "카드 태그",
    desc: "점자 카드를 스마트폰에 가져다 대면 자동으로 인식돼요.",
  },
  {
    num: "02",
    icon: "🔊",
    title: "음성 안내",
    desc: "앱이 자동으로 오디오 가이드를 재생해 아이를 안내해요.",
  },
  {
    num: "03",
    icon: "✋",
    title: "점자 읽기",
    desc: "손가락으로 점자를 느끼며 점의 위치와 모양을 익혀요.",
  },
  {
    num: "04",
    icon: "⌨️",
    title: "키보드 입력",
    desc: "키보드로 답을 입력하면 즉시 피드백을 받을 수 있어요.",
  },
]

const FEATURES = [
  {
    icon: "🎯",
    title: "오늘의 미션",
    desc: "앱이 매일 학습 과제를 알려줘요. 무엇을 연습할지 고민하지 않고 바로 시작할 수 있어요.",
  },
  {
    icon: "⚡️",
    title: "콤보와 신기록",
    desc: "연속으로 맞히면 콤보, 같은 카드를 더 빠르게 풀면 신기록을 달성할 수 있어요.",
  },
  {
    icon: "🏆",
    title: "랭킹 시스템",
    desc: "점자 카드를 풀면 점수가 쌓여요. 일주간 모은 점수로 다른 친구들과 순위를 확인해 보세요.",
  },
  {
    icon: "⏱️",
    title: "시간 제한 모드",
    desc: "정해진 시간 안에 몇 문제를 풀 수 있는지 도전해요.",
  },
  {
    icon: "🎨",
    title: "나만의 문제카드",
    desc: "앱에 단어를 추가하고 정답을 녹음하면, 아이가 좋아하는 단어로도 연습할 수 있어요.\u00a0\u00a0\u00a0\u00a0",
  },
]

const REVIEWS = [
  "점자를 만지는 걸 안 좋아했는데, 슬라이닷과 함께 하니 거부감 없이 연습할 수 있었어요.",
  "슬라이닷으로 연습한 이후 점자 단어 읽기가 많이 늘었어요. 덕분에 이제 책/문장 읽기로 넘어갈 수 있게 되었어요.",
  "레고 모양의 블럭으로 호기심을 자극하고 흥미를 유발할 수 있어 매우 좋아요. 특히 자기 목소리 녹음해서 사용하는 것을 많이 즐거워했어요.",
]

const STATS = [
  { value: "19명", label: "함께 개발한 어린이" },
  { value: "4회", label: "사용성 테스트 반복" },
]

const LEVELS = [
  {
    step: "1단계",
    title: "점자 모양 구별",
    desc: "점자를 배우기 전, 손끝으로 점 위치와 모양을 구별하는 단계",
    color: "bg-accent/20",
  },
  {
    step: "2단계",
    title: "정자 점자 읽기",
    desc: "자음·모음을 하나씩 쓰는 정자 점자를 배우는 단계",
    color: "bg-accent/50",
  },
  {
    step: "3단계",
    title: "약자 점자 읽기",
    desc: "정자 점자를 읽을 수 있고, 약자 점자를 배우는 단계",
    color: "bg-accent",
  },
]

const FAQS = [
  {
    q: "점자를 처음 배우는 아이도 사용할 수 있나요?",
    a: "네! 점자 글자를 배우기 전이라도 1~6점의 번호를 알고 있다면 '점자 모양 구별' 레벨로 시작할 수 있어요. 손끝으로 점의 개수와 위치를 구별하고, 서로 다른 모양을 찾는 연습을 해요.",
  },
  {
    q: "보호자가 점자를 몰라도 괜찮나요?",
    a: "네! 문제 안내와 정답 확인을 앱이 음성으로 해줘서, 보호자가 점자를 몰라도 옆에서 함께할 수 있어요.",
  },
  {
    q: "초등학교 고학년 이상도 신청할 수 있나요?",
    a: "네! 학습 단계가 맞으면 연령과 관계없이 신청할 수 있어요.",
  },
  {
    q: "핸드폰이나 와이파이가 따로 필요한가요?",
    a: "핸드폰은 구성품에 포함되어 있어요. 앱을 쓰려면 인터넷 연결이 필요해요. 와이파이 연결이 어려우면 보호자 휴대폰의 핫스팟으로도 연결할 수 있어요.",
  },
  {
    q: "앱 사용 기록은 어떻게 쓰이나요?",
    a: "문제 풀이 수, 사용 시간 같은 기록은 슬라이닷을 개선하고 학습 현황을 확인하는 데 사용해요.",
  },
  { q: "분실되거나 파손되면 어떻게 하나요?", a: "일상적인 사용 중 생기는 마모나 가벼운 손상은 괜찮아요. 분실이나 파손으로 부품 교체가 필요하면 아래 문의처로 연락해 주세요." },
  { q: "학교나 기관에서도 신청할 수 있나요?", a: "무료 대여는 가정을 대상으로 해요. 학교나 기관에서 사용하고 싶으시면 아래 문의처로 연락해 주세요." },
  {
    q: "정말 무료인가요?",
    a: "네. 가정에는 대여료, 배송비, 반납 택배비 모두 무료예요.",
  },
]

const APPLICATION_STEPS: Array<[string, string | string[]]> = [
  [
    "온라인 신청서 작성",
    "학습 단계에 맞는 레벨을 골라 신청서를 작성해 주세요.",
  ],
  [
    "배송 및 수령",
    [
      "신청서 접수 후 5일 이내에 배송을 안내해 드려요.",
      "신청서가 접수된 순서대로 안내해 드리고 있어요.",
    ],
  ],
  [
    "슬라이닷 사용",
    [
      "하루 10분 이상 꾸준히 연습해 보세요.",
      "주기적으로 참여할 수 있는 미션 인증 이벤트도 준비하고 있어요.",
    ],
  ],
  [
    "대여 종료 및 반납",
    [
      "대여 기간이 끝나기 2주 전 미리 알림을 보내드려요.",
      "반납 신청서를 작성한 뒤 보내주세요.",
      "추가 3개월까지 연장도 가능해요.",
    ],
  ],
]

const buttonClass =
  "inline-flex min-h-14 items-center justify-center gap-5 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground"
const headingClass = "text-[32px] leading-[1.35] font-extrabold lg:text-[44px]"
const sectionClass = "px-6 py-20 lg:py-24"
const containerClass = "mx-auto max-w-[1160px]"

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

function MetricValue({ value }: { value: string }) {
  return value.split(/(\d+(?:\.\d+)?%?)/).map((part, index) =>
    /\d/.test(part) ? (
      <span key={index} className="font-display">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  )
}

function NavBar() {
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
        <a href="#" aria-label="슬라이닷 홈" onClick={() => setOpen(false)}>
          <Brand />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
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
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-medium text-foreground hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
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

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-brand px-6 pt-36 pb-20 text-center lg:pt-44 lg:pb-24"
    >
      <div className="mx-auto max-w-[820px]">
        <p className="mb-6 text-base font-medium leading-[1.6] text-white/90 lg:text-lg">
          매일 해야 하는 점자 연습, 꾸준히 하기 쉽지 않죠?
        </p>
        <h1
          id="hero-title"
          className="mb-6 text-[36px] leading-[1.25] font-extrabold text-white sm:text-[44px] lg:text-[56px]"
        >
          점자를 놀이처럼 익히는 장난감
        </h1>
        <p className="mx-auto max-w-[680px] text-base leading-[1.8] text-white lg:text-xl">
          <span className="block">
            집에서 하루 10분 이상, 즐겁게 점자 읽기를 연습할 수 있어요.
          </span>
          <span className="block">
            SK행복나눔재단에서 시각장애 아동 가정에 무료로 대여해 드립니다.
          </span>
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#apply"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground sm:w-auto"
          >
            무료로 신청하기
          </a>
          <a
            href="#about"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-background px-7 py-3.5 text-base font-bold text-primary transition-colors hover:bg-secondary sm:w-auto"
          >
            더 알아보기
          </a>
        </div>
        <p className="mt-4 text-sm text-white/85">신청서 작성 약 3분</p>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section
      aria-label="신청 전 한눈에 보기"
      className="bg-primary px-6 py-9 text-primary-foreground"
    >
      <dl className={`${containerClass} grid gap-6 lg:grid-cols-3 lg:gap-10`}>
        {[
          ["신청 대상", "점자 교육이 필요한 시각장애 아동"],
          ["구성", "슬라이닷(케이스, 핸드폰, 키보드) + 점자 카드"],
          ["비용", "기기 대여부터 배송·반납까지 모두 무료"],
        ].map(([title, description], index) => (
          <div key={title} className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 font-display text-base font-extrabold text-white"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <dt className="mb-1 text-sm font-bold text-white/75">{title}</dt>
              <dd className="text-base font-medium text-white">{description}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}

function LearningLevels() {
  return (
    <section className={`${sectionClass} bg-background`} aria-labelledby="learning-levels-title">
      <div className={containerClass}>
        <div className="mb-10 max-w-3xl">
          <h2 id="learning-levels-title" className={`${headingClass} mb-4`}>
            학습 단계에 맞춰 연습해요
          </h2>
          <p className="text-base leading-[1.7] text-muted-foreground lg:text-lg">
            <span className="block">글자는 배웠지만, 실생활에서 사용하기 어렵다면</span>
            <span className="block">슬라이닷으로 반복하면서 연습해 보세요.</span>
          </p>
        </div>
        <ol className="grid gap-4 lg:grid-cols-3">
          {LEVELS.map((level) => (
            <li
              key={level.step}
              className={`rounded-2xl p-6 text-accent-foreground lg:p-7 ${level.color}`}
            >
              <h3 className="mb-2 text-xl font-bold">{level.title}</h3>
              <p className="text-base leading-[1.7]">{level.desc}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm leading-[1.7] text-muted-foreground lg:text-right">
          학습 단계가 맞다면 나이에 관계없이, 전맹·저시력 모두 사용할 수 있어요.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="validation" className={`${sectionClass} bg-background`}>
      <div className={containerClass}>
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
          <div>
            <h2 className={`${headingClass} whitespace-pre-line`}>
              {"아이와 함께 검증한\n학습 장난감"}
            </h2>
          </div>
          <div className="text-muted-foreground">
            <p>
              시각장애 아동의 학습에 관심을 갖고, 다양한 솔루션을 개발해 온 SK행복나눔재단이 직접 기획하고 개발했어요. 2023년부터 시각장애 아동들이 사용하고 있으며, 2026년 미국 CSUN 보조공학 컨퍼런스를 통해 미국 아동들도 만나고 있답니다.
            </p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-12">
          <div>
            <dl className="grid grid-cols-2 gap-3 lg:max-w-[480px] lg:gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex h-fit flex-col justify-center rounded-2xl bg-secondary px-4 py-7 lg:p-7"
                >
                  <dd className="mb-2 text-[30px] font-extrabold text-primary lg:text-[38px]">
                    <MetricValue value={stat.value} />
                  </dd>
                  <dt className="text-sm text-muted-foreground sm:text-base">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-muted-foreground">2023~2026년</p>
          </div>
          <section
            aria-label="이용 후기"
            className="bg-card px-5 pb-5 lg:px-7 lg:pb-7"
          >
            <div className="divide-y divide-border">
              {REVIEWS.map((review) => (
                <blockquote
                  key={review}
                  className="flex items-start gap-3 py-5 first:pt-0 last:pb-0 before:shrink-0 before:font-display before:text-4xl before:leading-none before:font-extrabold before:text-primary before:content-['“']"
                >
                  <p className="text-base leading-[1.65] font-medium text-foreground lg:text-lg">
                    {review}
                  </p>
                </blockquote>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground/90 lg:text-right">
              이용 경험과 학습 변화는 아이마다 다를 수 있어요.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section
      id="about"
      className={`${sectionClass} bg-background scroll-mt-20`}
    >
      <div className={containerClass}>
        <div className="mb-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <h2 id="how" className={`${headingClass} scroll-mt-28`}>
              놀이로 반복하는 점자 학습
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.7] text-muted-foreground lg:mx-0 lg:max-w-[448px] lg:text-lg">
              슬라이닷은 반복해서 연습해야 하는 점자를
              <br />
              재미있게 학습할 수 있도록 돕는 장난감이에요.
              <br />
              아이들 스스로 사용할 수 있도록 쉽게 구성했어요.
            </p>
          </div>
          <figure className="overflow-hidden rounded-3xl bg-secondary">
            <img
              src="/images/slidot-in-use.webp"
              alt="아이가 슬라이닷의 점자 키보드를 누르며 연습하는 모습"
              loading="lazy"
              width="2048"
              height="1152"
              className="aspect-[4/3] w-full object-cover object-[65%_center]"
            />
          </figure>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_STEPS.map((step) => (
            <li key={step.num} className="rounded-2xl bg-secondary p-6 lg:p-7">
              <div className="mb-7 flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-primary">
                  {step.num}
                </span>
                <span aria-hidden="true" className="text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className={`${sectionClass} bg-background`}>
      <div className={containerClass}>
        <div className="mb-12">
          <h2 className={headingClass}>매일, 스스로 연습을 돕는 기능들</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className={`rounded-2xl bg-secondary p-7 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              } ${index === 4 ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <span
                aria-hidden="true"
                className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-background text-2xl"
              >
                {feature.icon}
              </span>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RentalSection() {
  return (
    <section id="rental" className={`${sectionClass} scroll-mt-20 bg-secondary`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`${headingClass} mb-5`}>슬라이닷, 무료로 대여해드립니다</h2>
          <p className="text-base leading-[1.7] text-muted-foreground lg:text-lg">
            배송과 반납까지 모두 무료로 빌려드려요.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[920px] rounded-3xl bg-background p-7 sm:p-10">
          <ol className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {APPLICATION_STEPS.map(([title, subtitle], index) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-extrabold text-accent-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="pt-1 font-bold">{title}</p>
                  {Array.isArray(subtitle) ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-[1.6] text-muted-foreground">
                      {subtitle.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : (
                    <p className="mt-1 text-sm leading-[1.6] text-muted-foreground">
                      {subtitle}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside aria-labelledby="rental-notice-title" className="mx-auto mt-8 max-w-[410px] lg:max-w-[560px]">
          <h3 id="rental-notice-title" className="text-base font-bold text-primary">
            💡 미리 확인해 주세요
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-[1.6] text-muted-foreground">
            <li>앱 사용 기록을 수집하고 있어요. 문제 풀이 수와 사용 시간이 앱에 자동으로 저장돼요.</li>
            <li>대여 중 짧은 설문이나 의견을 요청드리고 있어요.</li>
            <li>사진·영상 공유는 선택 사항이에요. 활용 범위는 따로 여쭤볼게요.</li>
          </ul>
        </aside>

        <div className="mt-9 flex justify-center">
          <a
            id="apply"
            href="https://tally.so/r/mOZG2p"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="신청서 작성하기, 새 탭에서 신청서 열기"
            className="inline-flex min-h-14 scroll-mt-28 items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground"
          >
            신청서 작성하기
          </a>
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof FAQS[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div>
      <h3>
        <button
          id={`faq-question-${index}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          className="flex min-h-20 w-full items-center justify-between gap-5 px-1 py-5 text-left text-base font-bold transition-colors hover:text-primary focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:text-lg"
          onClick={onToggle}
        >
          <span>{faq.q}</span>
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center text-2xl font-medium text-primary"
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        hidden={!isOpen}
        className="px-1 pb-6 pr-12 leading-[1.7] text-muted-foreground"
      >
        <p>{faq.a}</p>
      </div>
    </div>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className={`${sectionClass} bg-background`}>
      <div className="mx-auto max-w-[840px]">
        <div className="mb-10 text-center">
          <h2 className={headingClass}>자주 묻는 질문</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={`faq-${index}`}
              faq={faq}
              index={index}
              isOpen={open === index}
              onToggle={() => setOpen(open === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
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
                <a href="#" aria-label="슬라이닷 홈">
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

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-xl bg-background px-5 py-3 font-bold text-primary focus:translate-y-0"
      >
        본문 바로가기
      </a>
      <NavBar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Overview />
        <HowItWorks />
        <LearningLevels />
        <About />
        <Features />
        <RentalSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
