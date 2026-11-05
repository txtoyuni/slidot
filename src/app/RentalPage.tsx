import { useState, type ReactNode } from "react"
import {
  APPLY_FORM_URL,
  LevelsSection,
  PageLayout,
  RENTAL_URL,
  containerClass,
  headingClass,
  sectionClass,
} from "./shared"

const FAQS = [
  {
    q: "보호자가 점자를 몰라도 괜찮나요?",
    a: "네! 점자 카드에 한글이 함께 적혀 있고, 입력한 답과 정답 여부를 앱이 음성으로 알려줘서 보호자가 점자를 몰라도 옆에서 함께할 수 있어요.",
  },
  {
    q: "점자를 처음 배우는 아이도 사용할 수 있나요?",
    a: "네! 점자 글자를 배우기 전이라도 1~6점의 번호를 알고 있다면 '점자 모양 구별' 레벨로 시작할 수 있어요. 손끝으로 점의 개수와 위치를 구별하고, 서로 다른 모양을 찾는 연습을 해요.",
  },
  {
    q: "스마트폰이나 와이파이가 따로 필요한가요?",
    a: "스마트폰은 구성품에 포함되어 있어요. 앱을 쓰려면 인터넷 연결이 필요해요. 와이파이 연결이 어려우면 보호자 휴대폰의 핫스팟으로도 연결할 수 있어요.",
  },
  { q: "학교나 기관에서도 신청할 수 있나요?", a: "무료 대여는 가정을 대상으로 해요. 학교나 기관에서 사용하고 싶으시면 아래 문의처로 연락해 주세요." },
]

const OVERVIEW: Array<{ title: string; description: string; icon: ReactNode }> = [
  {
    title: "신청 대상",
    description: "점자를 배우는 시각장애 아동이 있는 가정",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
      </>
    ),
  },
  {
    title: "구성",
    description: "슬라이닷(케이스, 스마트폰, 키보드) + 점자 카드",
    icon: (
      <>
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
  },
  {
    title: "비용",
    description: "기기 대여부터 배송·반납까지 모두 무료",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.5 12.5l2.5 2.5 4.5-5" />
      </>
    ),
  },
]

const APPLICATION_STEPS = [
  ["온라인 신청서 작성", "아이 학습 단계에 맞는 카드를 골라 신청서를 작성해 주세요. 약 3분이면 돼요."],
  ["배송 및 수령", "신청서 접수 후 5일 이내에 배송을 안내해 드려요. 접수된 순서대로 안내해 드리고 있어요."],
  ["슬라이닷 사용", "하루 10분 이상 꾸준히 연습해 보세요."],
  ["대여 종료 및 반납", "대여 기간이 끝나기 2주 전에 미리 알림을 보내드려요. 반납 신청서를 작성한 뒤 보내주세요. 3개월 단위로 연장할 수 있어요."],
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
          className="mb-4 text-[30px] leading-[1.35] font-extrabold text-white sm:text-[44px] lg:mb-6 lg:text-[56px] lg:leading-[1.25]"
        >
          <span className="block lg:inline">슬라이닷, </span>
          <span className="block lg:inline">무료로 대여해드립니다</span>
        </h1>
        <p className="mx-auto max-w-[680px] text-[17px] leading-[1.6] text-white lg:text-xl">
          배송과 반납까지 모두 무료로 빌려드려요.
        </p>
        <div className="mt-9 flex justify-center">
          <a
            {...applyLinkProps}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-background px-7 py-3.5 text-base font-bold text-primary transition-colors hover:bg-secondary sm:w-auto"
          >
            신청서 작성하기
          </a>
        </div>
        <p className="mt-4 text-sm text-white">신청서 작성 약 3분</p>
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
      <dl className={`${containerClass} grid gap-5 lg:grid-cols-3 lg:gap-10`}>
        {OVERVIEW.map(({ title, description, icon }) => (
          <div key={title} className="flex items-start gap-3.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                {icon}
              </svg>
            </span>
            <div>
              <dt className="mb-0.5 text-sm font-bold text-white/85">{title}</dt>
              <dd className="text-base leading-[1.5] font-medium text-white">{description}</dd>
            </div>
          </div>
        ))}
      </dl>
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
        <h2 id="process-title" className={`${headingClass} lg:text-center`}>
          대여는 이렇게 진행돼요
        </h2>

        <div className="mx-auto mt-6 max-w-[920px] rounded-3xl bg-background px-5 py-2 sm:px-10 sm:py-4 lg:mt-12">
          <ol className="divide-y divide-border">
            {APPLICATION_STEPS.map(([title, description], index) => (
              <li key={title} className="py-5 lg:py-7">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-accent-foreground lg:size-10 lg:text-base"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-extrabold lg:text-xl">{title}</p>
                </div>
                <p className="mt-2 leading-[1.6] text-muted-foreground lg:pl-[52px]">{description}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside aria-labelledby="rental-notice-title" className="mx-auto mt-6 max-w-[920px] px-1 lg:mt-8 lg:px-10">
          <h3 id="rental-notice-title" className="font-bold text-primary">
            미리 확인해 주세요
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-[1.6] text-muted-foreground">
            <li>문제 풀이 수와 사용 시간이 앱에 자동으로 저장돼요.</li>
            <li>대여 중 짧은 설문이나 의견을 요청드려요.</li>
            <li>사진·영상 공유는 선택이에요. 활용 범위는 따로 여쭤볼게요.</li>
          </ul>
        </aside>

        <div className="mt-6 flex justify-center lg:mt-9">
          <a
            id="apply"
            {...applyLinkProps}
            className="inline-flex min-h-14 w-full scroll-mt-28 items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-foreground sm:w-auto"
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
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className={`${sectionClass} scroll-mt-20 bg-background`}>
      <div className="mx-auto max-w-[840px]">
        <div className="mb-6 lg:mb-10 lg:text-center">
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
      <LevelsSection description="신청서에서 아이 학습 단계에 맞는 카드를 골라주세요." />
      <RentalSection />
      <FAQ />
    </PageLayout>
  )
}
