import { useState } from "react"
import {
  APPLY_FORM_URL,
  PageLayout,
  RENTAL_URL,
  containerClass,
  headingClass,
  sectionClass,
} from "./shared"

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

const applyLinkProps = {
  href: APPLY_FORM_URL,
  target: "_blank",
  rel: "noopener noreferrer",
  "aria-label": "신청서 작성하기, 새 탭에서 신청서 열기",
}

function RentalHero() {
  return (
    <section
      aria-labelledby="rental-title"
      className="bg-brand px-6 pt-36 pb-20 text-center lg:pt-44 lg:pb-24"
    >
      <div className="mx-auto max-w-[820px]">
        <h1
          id="rental-title"
          className="mb-6 text-[36px] leading-[1.25] font-extrabold text-white sm:text-[44px] lg:text-[56px]"
        >
          슬라이닷, 무료로 대여해드립니다
        </h1>
        <p className="mx-auto max-w-[680px] text-base leading-[1.8] text-white lg:text-xl">
          배송과 반납까지 모두 무료로 빌려드려요.
        </p>
        <div className="mt-9 flex justify-center">
          <a
            {...applyLinkProps}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground sm:w-auto"
          >
            신청서 작성하기
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
            신청서에서 아이에게 맞는 레벨을 골라 주세요.
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

function RentalSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className={`${sectionClass} scroll-mt-20 bg-secondary`}
    >
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="process-title" className={headingClass}>
            대여는 이렇게 진행돼요
          </h2>
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
            {...applyLinkProps}
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
    <section id="faq" className={`${sectionClass} scroll-mt-20 bg-background`}>
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

export default function RentalPage() {
  return (
    <PageLayout ctaHref="#apply" currentHref={RENTAL_URL}>
      <RentalHero />
      <Overview />
      <LearningLevels />
      <RentalSection />
      <FAQ />
    </PageLayout>
  )
}
