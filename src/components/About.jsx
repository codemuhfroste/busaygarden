import Reveal from './Reveal'

const POINTS = [
  {
    title: 'Hydroponic NFT system',
    detail:
      'Our greens grow in nutrient film technique channels, using less water and space than soil farming while keeping roots clean.',
  },
  {
    title: 'Cut fresh, not stockpiled',
    detail:
      'We harvest close to order time, so what reaches you was still growing a short while before.',
  },
  {
    title: 'Local to Daraga, Albay',
    detail:
      'Based in Busay, Daraga, we supply households, market vendors, and food businesses around Albay.',
  },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <Reveal className="about-copy">
          <span className="section-eyebrow">Our Farm</span>
          <h2 className="section-heading">
            A small hydroponic garden growing big, healthy leaves
          </h2>
          <p className="section-sub">
            Busay Garden is a family-run hydroponic farm in Busay, Daraga,
            Albay, focused on doing two things well: lettuce and arugula. We
            keep our operation small so every channel gets attention and
            every harvest stays consistent.
          </p>
        </Reveal>

        <ul className="about-points">
          {POINTS.map((point, index) => (
            <Reveal
              as="li"
              key={point.title}
              className="about-point"
              delay={index * 100}
            >
              <h3>{point.title}</h3>
              <p>{point.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
