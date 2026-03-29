import { useLanguage } from '../context/LanguageContext'

const TOTAL_QUARTERS = 13
const LABEL_WIDTH = 200

const QUARTER_LABELS = [
  "Q4'25", "Q1'26", "Q2'26", "Q3'26", "Q4'26",
  "Q1'27", "Q2'27", "Q3'27", "Q4'27",
  "Q1'28", "Q2'28", "Q3'28", "Q4'28",
]

// Quarter index mapping (0-based):
// 0:Q4'25  1:Q1'26  2:Q2'26  3:Q3'26  4:Q4'26
// 5:Q1'27  6:Q2'27  7:Q3'27  8:Q4'27
// 9:Q1'28  10:Q2'28  11:Q3'28  12:Q4'28

interface Milestone {
  nl: string
  en: string
  start: number
  end: number
  done?: boolean
  type?: 'default' | 'spanning'
}

interface Phase {
  nl: string
  en: string
  milestones: Milestone[]
}

const PHASES: Phase[] = [
  {
    nl: 'Initiatief',
    en: 'Initiative',
    milestones: [
      { nl: 'Pitch gemeente', en: 'Municipality pitch', start: 0, end: 0, done: true },
      { nl: 'Goedkeuring gemeente', en: 'Municipal approval', start: 0, end: 0, done: true },
      { nl: 'Architect pitch & selectie', en: 'Architect pitch & selection', start: 1, end: 1, done: true },
    ],
  },
  {
    nl: 'Ontwerp',
    en: 'Design',
    milestones: [
      { nl: 'SO — Schetsontwerp', en: 'SO — Schematic design', start: 2, end: 2 },
      { nl: 'Adviseurs', en: 'Advisors', start: 2, end: 6, type: 'spanning' },
      { nl: 'VO — Voorlopig ontwerp', en: 'VO — Preliminary design', start: 4, end: 4 },
      { nl: 'DO — Definitief ontwerp', en: 'DO — Final design', start: 6, end: 6 },
    ],
  },
  {
    nl: 'Vergunning & Contract',
    en: 'Permit & Contract',
    milestones: [
      { nl: 'Aanvraag omgevingsvergunning', en: 'Permit application', start: 6, end: 6 },
      { nl: 'Individuele woningindelingen', en: 'Individual floor plans', start: 6, end: 6 },
      { nl: 'Contractvorming aannemer', en: 'Contractor agreement', start: 6, end: 6 },
      { nl: 'Legeskosten', en: 'Permit fees', start: 7, end: 7 },
    ],
  },
  {
    nl: 'Technische uitwerking',
    en: 'Technical development',
    milestones: [
      { nl: 'Technisch ontwerp', en: 'Technical design', start: 7, end: 8 },
      { nl: 'Uitvoeringsgereed ontwerp', en: 'Construction-ready design', start: 8, end: 8 },
    ],
  },
  {
    nl: 'Bouw',
    en: 'Construction',
    milestones: [
      { nl: 'Bouw', en: 'Construction', start: 9, end: 12 },
    ],
  },
]

function barColor(done: boolean, type?: string): string {
  if (done) return '#16a34a'
  if (type === 'spanning') return '#7c3aed'
  return '#0b6efd'
}

export default function ProjectTimeline() {
  const { lang } = useLanguage()

  const minWidth = LABEL_WIDTH + TOTAL_QUARTERS * 68

  return (
    <section id="timeline" style={{ margin: '40px 0' }}>
      <h2 style={{ marginBottom: '16px' }}>
        {lang === 'nl' ? 'Planning' : 'Project timeline'}
      </h2>
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: '8px', border: '1px solid #e6e6e9' }}>
        <div style={{ minWidth, fontFamily: 'inherit' }}>

          {/* Year header */}
          <div style={{ display: 'flex', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e6e6e9' }}>
            <div style={{ width: LABEL_WIDTH, flexShrink: 0 }} />
            <div style={{ flex: 1, display: 'flex' }}>
              {[
                { label: '2025', span: 1 },
                { label: '2026', span: 4 },
                { label: '2027', span: 4 },
                { label: '2028', span: 4 },
              ].map(({ label, span }) => (
                <div key={label} style={{
                  flex: span,
                  textAlign: 'center',
                  padding: '7px 0',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#333',
                  borderLeft: '1px solid #e6e6e9',
                }}>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Quarter header */}
          <div style={{ display: 'flex', backgroundColor: '#f8f9fa', borderBottom: '2px solid #d1d5db' }}>
            <div style={{ width: LABEL_WIDTH, flexShrink: 0 }} />
            <div style={{ flex: 1, display: 'flex' }}>
              {QUARTER_LABELS.map((q) => (
                <div key={q} style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '4px 2px',
                  fontSize: '11px',
                  color: '#666',
                  borderLeft: '1px solid #e6e6e9',
                }}>
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Phases */}
          {PHASES.map((phase) => (
            <div key={phase.nl}>
              {/* Phase label */}
              <div style={{
                padding: '6px 12px',
                backgroundColor: '#eef2ff',
                fontSize: '11px',
                fontWeight: 700,
                color: '#3730a3',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                borderBottom: '1px solid #e6e6e9',
              }}>
                {lang === 'nl' ? phase.nl : phase.en}
              </div>

              {/* Milestone rows */}
              {phase.milestones.map((m, i) => (
                <div key={m.nl} style={{
                  display: 'flex',
                  borderBottom: i < phase.milestones.length - 1 ? '1px solid #f3f4f6' : '1px solid #e6e6e9',
                }}>
                  {/* Label */}
                  <div style={{
                    width: LABEL_WIDTH,
                    flexShrink: 0,
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '13px',
                    color: '#374151',
                    height: '38px',
                    borderRight: '1px solid #e6e6e9',
                    lineHeight: 1.3,
                  }}>
                    {lang === 'nl' ? m.nl : m.en}
                  </div>

                  {/* Bar area */}
                  <div style={{ flex: 1, position: 'relative', height: '38px' }}>
                    {/* Alternating column backgrounds + grid lines */}
                    {QUARTER_LABELS.map((_, qi) => (
                      <div key={qi} style={{
                        position: 'absolute',
                        left: `${(qi / TOTAL_QUARTERS) * 100}%`,
                        width: `${(1 / TOTAL_QUARTERS) * 100}%`,
                        top: 0,
                        bottom: 0,
                        backgroundColor: qi % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.018)',
                        borderLeft: '1px solid #f3f4f6',
                      }} />
                    ))}

                    {/* Milestone bar */}
                    <div style={{
                      position: 'absolute',
                      left: `${(m.start / TOTAL_QUARTERS) * 100}%`,
                      width: `calc(${((m.end - m.start + 1) / TOTAL_QUARTERS) * 100}% - 4px)`,
                      top: '7px',
                      bottom: '7px',
                      borderRadius: '4px',
                      backgroundColor: barColor(!!m.done, m.type),
                      opacity: m.done ? 1 : 0.82,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Legend */}
          <div style={{
            display: 'flex',
            gap: '20px',
            padding: '10px 14px',
            fontSize: '12px',
            color: '#6b7280',
            borderTop: '1px solid #e6e6e9',
            backgroundColor: '#fafafa',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: 14, height: 10, borderRadius: 2, backgroundColor: '#16a34a' }} />
              {lang === 'nl' ? 'Afgerond' : 'Completed'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: 14, height: 10, borderRadius: 2, backgroundColor: '#0b6efd', opacity: 0.82 }} />
              {lang === 'nl' ? 'Gepland' : 'Planned'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: 14, height: 10, borderRadius: 2, backgroundColor: '#7c3aed', opacity: 0.82 }} />
              {lang === 'nl' ? 'Doorlopend traject' : 'Ongoing track'}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
