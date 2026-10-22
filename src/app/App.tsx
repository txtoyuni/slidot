import { useEffect, useRef, useState } from "react"
import {
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

const PRODUCT_PARTS = ["스마트폰", "카드판", "키보드"]

const CHALLENGES = [
  {
    title: "반복은 지루해요",
    desc: "같은 연습을 매일 하다 보면 점자 만지기 자체를 싫어하게 되기도 해요.",
  },
  {
    title: "연습할 기회가 적어요",
    desc: "일상에서 점자를 읽어볼 일이 많지 않아요.",
  },
  {
    title: "집에서 봐주기 어려워요",
    desc: "보호자가 점자를 모르면 정답을 확인해 주기 어려워요.",
  },
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
            href={RENTAL_URL}
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

function Challenges() {
  return (
    <section aria-labelledby="challenges-title" className={`${sectionClass} bg-background`}>
      <div className={containerClass}>
        <div className="mb-10 max-w-3xl">
          <h2 id="challenges-title" className={`${headingClass} mb-4`}>
            점자, 배운 다음이 더 어려우니까
          </h2>
          <p className="text-base leading-[1.7] text-muted-foreground lg:text-lg">
            <span className="block">글자는 배웠지만, 실생활에서 사용하기 어렵다면</span>
            <span className="block">슬라이닷으로 반복하면서 연습해 보세요.</span>
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {CHALLENGES.map((item) => (
            <li key={item.title} className="border-t-2 border-primary pt-5">
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="leading-[1.7] text-muted-foreground">{item.desc}</p>
            </li>
          ))}
        </ul>
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

function TutorialVideo() {
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { id, title, start } = TUTORIAL_VIDEO
  const params = new URLSearchParams({
    start: String(start),
    autoplay: "1",
    rel: "0",
    cc_load_policy: "1",
    cc_lang_pref: "ko",
    hl: "ko",
  })

  // 재생 버튼이 iframe으로 바뀌면 키보드 포커스를 영상으로 옮김
  useEffect(() => {
    if (playing) iframeRef.current?.focus()
  }, [playing])

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-3xl bg-secondary">
        {playing ? (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
            title={`${title} (YouTube 영상)`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            aria-label={`튜토리얼 영상 재생: ${title}`}
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-primary"
          >
            <img
              src="/images/slidot-in-use.webp"
              alt=""
              loading="lazy"
              width="2048"
              height="1152"
              className="size-full object-cover object-[65%_center]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/30"
            >
              <span className="flex size-18 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105 lg:size-20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-8">
                  <path d="M8 5.5v13l10.5-6.5z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span>{title} · 음성 해설, 한국어 자막</span>
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

function HowItWorks() {
  return (
    <section
      id="about"
      className={`${sectionClass} bg-background scroll-mt-20`}
    >
      <div className={containerClass}>
        <div className="mb-16 grid items-start gap-8 lg:mb-20 lg:grid-cols-2 lg:gap-14">
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
          <figure>
            <div className="overflow-hidden rounded-lg bg-white">
              <img
                src="/images/slidot-product.webp"
                alt="블록으로 만든 슬라이닷 본체. 위쪽 거치대에 스마트폰이 있고, 아래쪽에 노란 키보드와 점자 카드를 올리는 카드판이 있어요."
                loading="lazy"
                width="1267"
                height="799"
                className="w-full"
              />
            </div>
            <figcaption className="mt-4">
              <span className="sr-only">슬라이닷 구성:</span>
              <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {PRODUCT_PARTS.map((part) => (
                  <li
                    key={part}
                    className="rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-primary"
                  >
                    {part}
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </div>

        <h3 className="mb-8 text-center text-2xl leading-[1.4] font-extrabold lg:text-left lg:text-[28px]">
          슬라이닷, 이렇게 사용해요
        </h3>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-10">
          <TutorialVideo />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {HOW_STEPS.map((step) => (
              <li key={step.num} className="flex items-start gap-4 rounded-2xl bg-secondary p-5">
                <span className="font-display text-2xl leading-none font-extrabold text-primary">
                  {step.num}
                </span>
                <div>
                  <h4 className="mb-1 text-lg font-bold">
                    <span aria-hidden="true" className="mr-1.5">
                      {step.icon}
                    </span>
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
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
        <div className="mb-10">
          <h2 id="features-title" className={`${headingClass} mb-4`}>
            아이 수준에 맞게, 매일 재미있게
          </h2>
          <p className="text-base leading-[1.7] text-muted-foreground lg:text-lg">
            슬라이닷, 이런 기능이 있어요.
          </p>
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <li key={feature.title} className="flex items-start gap-4 border-t border-border py-6">
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl"
              >
                {feature.icon}
              </span>
              <div>
                <h3 className="mb-1 text-lg font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            </li>
          ))}
        </ul>
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
        <h2 id="rental-cta-title" className={`${headingClass} mb-5`}>
          슬라이닷, 무료로 대여해드립니다
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground lg:text-lg">
          배송과 반납까지 모두 무료로 빌려드려요.
        </p>
        <div className="mt-9 flex justify-center">
          <a
            href={RENTAL_URL}
            className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground"
          >
            대여 프로그램 알아보기
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
      <HowItWorks />
      <Challenges />
      <About />
      <Features />
      <RentalCta />
    </PageLayout>
  )
}
