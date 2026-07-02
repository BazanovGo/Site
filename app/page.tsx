import Emblem from "@/components/Emblem";
import Reveal from "@/components/Reveal";
import VolatilityChart from "@/components/VolatilityChart";

const PHONE_DISPLAY = "+7-995-985-36-66";
const TELEGRAM_URL = "https://t.me/+79959853666";
const WHATSAPP_URL = "https://wa.me/79959853666";

const TIMEFRAMES = ["4H", "1H", "15M", "5M", "1M", "5S"];

const HOW_IT_WORKS = [
  {
    title: "Исполнение",
    text: "Торговля ведётся вручную и полуавтоматизированно — по заранее рассчитанным сценариям.",
  },
  {
    title: "Инструменты",
    text: "Ближние фьючерсы на природный газ. Зимой возможна работа с дальними контрактами.",
  },
  {
    title: "Источник решений",
    text: "Статистика, вероятностные модели, анализ цены, объёма, уровней и волатильности.",
  },
  {
    title: "Фундаментал",
    text: "Фундаментальные факторы учитываются, но не являются главным источником сигнала.",
  },
  {
    title: "Режим рынка",
    text: "Стратегия рассчитана на внутридневные колебания и периоды высокой волатильности.",
  },
];

const RISK_MATH = [
  {
    title: "Статистический анализ",
    text: "Решения опираются на измеримые закономерности, а не на интуицию.",
  },
  {
    title: "Оценка вероятностей по Байесу",
    text: "Вероятность сценария пересчитывается по мере поступления новых данных.",
  },
  {
    title: "Размер позиции по формуле Келли",
    text: "Объём сделки рассчитывается от математического ожидания, а не от желания заработать.",
  },
  {
    title: "Дробление объёма в 2–4 раза",
    text: "Расчётный объём делится на части из-за высокой волатильности газа.",
  },
  {
    title: "Жёсткие стопы",
    text: "Позиция закрывается при отклонении рынка от прогноза — без исключений.",
  },
  {
    title: "Перевод в безубыток",
    text: "Прибыльные позиции переводятся в безубыток при подтверждении сценария.",
  },
  {
    title: "Сопровождение позиции",
    text: "Стопы подтягиваются под локальные экстремумы по ходу движения.",
  },
  {
    title: "Контролируемое усреднение",
    text: "Усреднение допускается только в заранее рассчитанном диапазоне.",
  },
];

function DeltaMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 88"
      className={className}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 10px rgba(35,224,140,0.55))" }}
    >
      <path
        d="M50 6 L94 82 L6 82 Z"
        fill="none"
        stroke="#23e08c"
        strokeWidth="7"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-baseline font-display font-bold ${
        compact ? "gap-1.5 text-2xl" : "gap-2 text-6xl sm:gap-3 sm:text-8xl"
      }`}
    >
      <DeltaMark
        className={compact ? "h-[0.72em] w-auto self-center" : "h-[0.74em] w-auto self-center"}
      />
      <span className="text-metal">RH</span>
      <span className="text-ember glow-ember">6</span>
      <span className="text-metal">Ng</span>
      <span className="text-ember glow-ember">1</span>
    </span>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4">
      <span className="font-mono text-xs tracking-[0.25em] text-flame">{index}</span>
      <h2 className="text-metal text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function ContactButtons({ label, center = false }: { label: string; center?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-center ${
        center ? "items-center sm:justify-center" : "items-start"
      }`}
    >
      <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_28px_rgba(35,224,140,0.45)]"
        >
          {label} Telegram
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-steel px-6 py-3 text-sm font-medium text-frost transition-colors duration-300 hover:border-flame hover:text-flame"
        >
          {label} WhatsApp
        </a>
      </div>
      <a
        href="tel:+79959853666"
        className="font-mono text-sm tracking-wider text-mist transition-colors duration-300 hover:text-flame"
      >
        {PHONE_DISPLAY}
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* ── 01 Hero ─────────────────────────────────────────── */}
      <section className="bg-grid relative flex min-h-screen flex-col items-center justify-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 34%, rgba(35,224,140,0.10), transparent 65%)",
          }}
          aria-hidden="true"
        />
        <VolatilityChart className="pointer-events-none absolute bottom-0 left-0 h-56 w-full opacity-60 sm:h-72" />

        {/* Side labels, as on the emblem */}
        <div className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.4em] text-mist/60">
            Natural
            <br />
            Gas
          </p>
        </div>
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 text-right lg:block">
          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.4em] text-mist/60">
            Energy
            <br />
            Flow
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-20 text-center sm:px-10">
          <Reveal>
            <Emblem className="pointer-events-none -mb-4 w-72 max-w-full select-none sm:-mb-6 sm:w-[24rem]" />
          </Reveal>
          <Reveal delay={100}>
            <h1>
              <Wordmark />
            </h1>
          </Reveal>
          <Reveal delay={200} className="w-full">
            <div className="mx-auto mt-7 w-full max-w-md">
              <div className="ornament" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.35em] text-flame/80">
                Systematic Natural-Gas Trading
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-2xl text-xl font-medium text-frost/90 sm:text-2xl">
              Системная спекулятивная стратегия на фьючерсах природного газа.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-4 max-w-2xl leading-relaxed text-mist">
              Цель стратегии — рациональное извлечение торговой альфы за счёт
              анализа цены, объёма, уровней, волатильности и вероятностных моделей.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-10">
              <ContactButtons label="Связаться в" center />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 02 Философия ────────────────────────────────────── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Reveal>
            <SectionLabel index="01" title="Философия торговли" />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-3xl text-2xl font-light leading-snug tracking-tight text-frost sm:text-3xl">
              Думать вне рынка.{" "}
              <span className="text-ember glow-ember font-normal">
                Действовать внутри рынка.
              </span>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-3xl leading-relaxed text-mist">
              Торговые решения не принимаются импульсивно. Сначала
              разрабатываются, тестируются и оптимизируются торговые системы.
              Во время сделки задача трейдера — не спорить с рынком и не
              поддаваться эмоциям, а исполнять заранее рассчитанный сценарий.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 03 Как работает ─────────────────────────────────── */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Reveal>
            <SectionLabel index="02" title="Как работает стратегия" />
          </Reveal>
          <div className="mt-4 divide-y divide-line border-y border-line">
            {HOW_IT_WORKS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                  <h3 className="text-sm font-medium uppercase tracking-wider text-frost">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-mist">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Таймфреймы ───────────────────────────────────── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Reveal>
            <SectionLabel index="03" title="Таймфреймы" />
          </Reveal>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
            {TIMEFRAMES.map((tf, i) => (
              <Reveal key={tf} delay={i * 60}>
                <div className="group flex aspect-square items-center justify-center rounded-lg border border-line bg-panel transition-all duration-300 hover:border-flame-dim hover:shadow-[0_0_24px_rgba(35,224,140,0.12)]">
                  <span className="font-mono text-lg font-medium tracking-wider text-frost transition-colors duration-300 group-hover:text-flame sm:text-xl">
                    {tf}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 max-w-3xl leading-relaxed text-mist">
              Для разных рыночных режимов используются разные торговые системы.
              Они чередуются в зависимости от волатильности, трендовости,
              ликвидности и доступного времени для торговли.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 05 Математика и риск ────────────────────────────── */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Reveal>
            <SectionLabel index="04" title="Математика и риск" />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {RISK_MATH.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-lg border border-line bg-ink p-6 transition-all duration-300 hover:border-flame-dim hover:shadow-[0_0_24px_rgba(35,224,140,0.1)]">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-xs text-flame">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-medium text-frost">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-mist">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Торговый цикл ────────────────────────────────── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Reveal>
            <SectionLabel index="05" title="Торговый цикл" />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <Reveal>
              <div className="rounded-lg border border-line bg-panel p-8">
                <p className="text-ember glow-ember font-mono text-5xl font-medium tracking-tight sm:text-6xl">
                  ≤ 600
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  циклов сделок в год — ориентир при активной работе
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-lg border border-line bg-panel p-8">
                <p className="text-metal font-mono text-5xl font-medium tracking-tight sm:text-6xl">
                  ~ 120
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  активных торговых дней в году
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="mt-10 max-w-3xl leading-relaxed text-mist">
              Стратегия рассчитана на большое количество торговых циклов —
              статистическое преимущество реализуется на дистанции, а не в
              отдельной сделке.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 07 Рыночные условия ─────────────────────────────── */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Reveal>
            <SectionLabel index="06" title="Рыночные условия" />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-3xl leading-relaxed text-mist">
              Наилучшие условия для стратегии — направленный тренд и высокая
              волатильность. В боковом рынке стратегия сохраняет рабочий
              потенциал за счёт количества сделок, управления объёмом и
              адаптации таймфреймов.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 08 Инвестиционный горизонт ──────────────────────── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Reveal>
            <SectionLabel index="07" title="Инвестиционный горизонт" />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              {
                term: "1 квартал",
                text: "Минимальный разумный горизонт оценки стратегии.",
              },
              {
                term: "1 год",
                text: "Оптимальный горизонт — полный годовой цикл с учётом сезонности природного газа.",
              },
              {
                term: "Длинная дистанция",
                text: "Максимальный эффект раскрывается за счёт сложного процента.",
              },
            ].map((item, i) => (
              <Reveal key={item.term} delay={i * 80}>
                <div className="h-full rounded-lg border border-line bg-panel p-6">
                  <p className="text-ember font-mono text-lg font-medium">
                    {item.term}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={250}>
            <p className="mt-10 max-w-3xl leading-relaxed text-mist">
              Целевой ориентир стратегии — годовая доходность не менее ×6 от
              ключевой ставки ЦБ. Это расчётная цель, а не гарантия результата.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 09 Аудит ────────────────────────────────────────── */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Reveal>
            <SectionLabel index="08" title="Аудит и прозрачность" />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-3xl leading-relaxed text-mist">
              При необходимости торговые системы могут быть предоставлены для
              независимого аудита. Цель — подтвердить логику, риск-параметры и
              воспроизводимость подхода.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 10 Финальный CTA ────────────────────────────────── */}
      <section className="relative border-t border-line">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(35,224,140,0.07), transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center sm:px-10">
          <Reveal>
            <h2 className="text-metal text-4xl font-semibold tracking-tight sm:text-5xl">
              Обсудить стратегию
            </h2>
          </Reveal>
          <Reveal delay={100} className="w-full">
            <div className="mx-auto mt-6 max-w-md">
              <div className="ornament" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl leading-relaxed text-mist">
              Для инвесторов, партнёров и профессионального аудита торговой
              системы.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-10">
              <ContactButtons label="Написать в" center />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer / Disclaimer ─────────────────────────────── */}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10">
          <Wordmark compact />
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-mist/70">
            Информация на сайте не является индивидуальной инвестиционной
            рекомендацией. Торговля фьючерсами связана с высоким риском потери
            капитала. Прошлые результаты и целевые ориентиры не гарантируют
            доходность в будущем.
          </p>
          <p className="mt-6 font-mono text-xs tracking-[0.25em] text-mist/50">
            ΔRH6Ng1 · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
