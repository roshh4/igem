// import { Slide } from 'react-slideshow-image';

import { useRef } from "react";
import TableOfContent from "../components/TableOfContent";


/* 
  const divStyle = {
    display: 'flex',
    alignItems: 'bottom',
    justifyContent: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "85vh"
  }
  const slideImages = [
    {
      url: 'https://static.igem.wiki/teams/5227/description/image5.png',
      caption: 'Slide 1'
    },
    {
      url: 'https://static.igem.wiki/teams/5227/description/image6.png',
      caption: 'Slide 2'
    },
    {
      url: 'https://static.igem.wiki/teams/5227/description/image7.png',
      caption: 'Slide 3'
    },
    {
      url: 'https://static.igem.wiki/teams/5227/description/image8.png',
      caption: 'Slide 4'
    },
    {
      url: 'https://static.igem.wiki/teams/5227/description/image9.png',
      caption: 'Slide 5'
    },
    {
      url: 'https://static.igem.wiki/teams/5227/description/image10.png',
      caption: 'Slide 6'
    },
    {
      url: 'https://static.igem.wiki/teams/5227/description/image11.png',
      caption: 'Slide 7'
    },
  ];
*/

  // const tocContent = [
  //   {
  //     title: 'What are microplastics?',
  //     id: 'what-are-microplastics'
  //   },
  //   {
  //     title: 'Why focus on isolation and segregation of microplastics?',
  //     id: 'why-focus-on-isolation-and-segregation-of-microplastics'
  //   },
  //   {
  //     title: 'Harmful effects of microplastics',
  //     id: 'harmful-effects-of-microplastics'
  //   },
  //   {
  //     title: 'What is the ongoing research on microplastics?',
  //     id: 'what-is-the-ongoing-research-on-microplastics'
  //   },
  //   {
  //     title: 'What is our project?',
  //     id: 'what-is-our-project'
  //   },
  //   {
  //     title: 'Applications',
  //     id: 'applications'
  //   },
  //   {
  //     title: 'References',
  //     id: 'references'
  //   }
  // ]

export function Description() {
    const contentRef = useRef<HTMLDivElement | null>(null);
    // const [tocContent, setTocContent] = useState<TocItem[]>([]);

    // useEffect(() => {
    //   if(!contentRef.current)
    //     return
    //   const ele = contentRef.current.querySelectorAll('h2');
    //   const newTocContent: TocItem[] = []
    //   ele.forEach(ele => newTocContent.push(
    //     {
    //       title: ele.innerText,
    //       id: ele.id
    //     }
    //   ));
    //   setTocContent(newTocContent);
    //   }, []);

  return (
    <>
            <div ref={contentRef} className="description-page-container">
              <p>“Plastic pollution is a serious threat to our health, economy, and
            environment that requires rapid attention”. Global plastic manufacturing
            has expanded tremendously in recent decades, reaching a startling 400
            million tons per year, with only 9% recycled and 12% burnt. On June 5,
            2023, the World Health Organization declared that if we do not act
            strategically, the influx of plastic debris into our oceans will triple
            by 2040. These plastic particles in ocean and land undergo various
            changes due to sunlight, photo-oxidation (UV light), Thermal
            degradation, Ozone induced degradation, and Mechano-chemical degradation
            such as friction and free radical formation that result in the
            generation of microplastics (Shaista Manzoor et al, 2022). The WHO also
            reported that microplastics have an impact beyond marine life and create
            enormous economic losses, with disruption of marine ecosystem services
            valued between US$ 500 billion to US$ 2,500 billion per year.
            Furthermore, the health consequences of plastics, particularly
            microplastics, are serious. Exposure to microplastic particles raises
            health risks, and research is ongoing to better understand the
            associated dangers.</p>

          <section className="newspaper">
            <img src="https://static.igem.wiki/teams/5227/description/collage-final.jpg" />
          </section>

          <h2 id="what-are-microplastics">What are microplastics?</h2>
          <p>Microplastics are tiny plastic fragments formed by the breakdown of
            bigger polymers and during the industrial development of products. These
            tiny particles, which are typically less than 5 millimeters, are
            ubiquitous in the ecosystem and are impacting both wildlife and mankind.
            They have been identified in aquatic species, drinking water, and
            several foods notably salt and honey as stated by the United Nations
            Environment Programme (UNEP), 2021. Additionally, microplastics can be
            inhaled (Ziani et al., 2023). Once absorbed by animals, microplastics
            can be distributed to various organs, including the liver, spleen,
            heart, lungs, and brain, potentially causing significant health issues,
            as reported by the National Oceanic and Atmospheric Administration in
            2008. Microplastics can carry persistent organic pollutants and heavy
            metals, disrupting biological processes, and causing endocrine, immune,
            reproductive, and developmental problems, as well as cancer (UNEP,
            2021). The COVID-19 pandemic exacerbated microplastic pollution due to
            the increased use of polypropylene-based face masks and poor waste
            management (UNEP, 2020). Based on their origin, microplastics can be
            divided into primary and secondary categories. Primary microplastics are
            those that are released in their natural forms while secondary
            microplastics are derived by weathering or breakdown of large plastics
            (Espinosa et al., 2016). The abundant rise in the use of microplastics,
            mainly in cosmetics starting from the 1980s has been associated with the
            extensive presence of microplastics in the environment.</p>
          <figure>
            <img src="https://static.igem.wiki/teams/5227/description/image1.png"
              alt="Fig.1 illustrates the origination of microplastics" />
            <figcaption aria-hidden="true">Fig.1 illustrates the origination of
              microplastics</figcaption>
          </figure>
          <h2 id="why-focus-on-isolation-and-segregation-of-microplastics">Why
            focus on isolation and segregation of microplastics?</h2>
          <ul>
            <li>
              <p>The driving force to isolate and segregate microplastics is the
                profound impacts that they have on the environment as well as
                humans.</p>
            </li>
            <li>
              <p>As production ramps up and degradation continues, these tiny
                particles accumulate, wreaking havoc on aquatic systems.</p>
            </li>
            <li>
              <p>Once plastics (polyethylene (PE), polypropylene (PP), and
                polyethylene terephthalate (PET)) enter the marine ecosystem, they
                persist for hundreds to thousands of years, breaking down through
                mechanical or photochemical processes into microplastics (particles less
                than 5mm) or nanoplastics (particles less than 1 µm) (Merlin and
                Balasubramanian, 2021), requiring meticulous research to effectively
                remove them from the surroundings, as their tiny size and lack of
                uniformity make it particularly challenging to extract them from
                polluted areas (Leng et al., 2018).</p>
            </li>
          </ul>
          <h2 id="harmful-effects-of-microplastics">Harmful effects of
            microplastics:</h2>
          <p>Microplastics cause various harmful effects on both human health and
            the environment. Microplastics have been identified across several
            sequential stages in a food chain starting from lower levels like
            zooplankton and copepods to higher levels like fish, seabirds and
            mammals (Cverenkárová et al., 2021). Ingestion of microplastics by these
            organisms through the food web cascade can cause inflammation, physical
            blockages, and decreased feeding capacity. Other common sources of
            microplastics in the food chain include soil poisoning due to irrigation
            using wastewater, landfills, treatment of soil and usage of sewage
            sludge as fertilizers. This leads to decreased soil quality,
            consequently entering the food chain (Czapska et al., 2022). The
            ingestion of contaminated food or water, inhalation and dermal can be en
            route sources of microplastics in humans. As they enter the human body,
            they may tend to cause oxidative stress, deplete energy balance, and
            disturb normal metabolism and the immune system which can lead to
            respiratory and gastrointestinal problems (Jenner et al., 2022).</p>
          <p>Microplastics are common in both aquatic and earthbound systems.
            These are found in deep seas, oceans, soil and household systems. The
            sources of microplastics from households include food containers,
            fabrics and other plastic products (Geueke et al., 2018). Studies have
            found an enormous amount of microplastic contagion in tap and bottled
            water, tea, wine, beer, soft drinks and various food items that include
            fish, spices and other products from terrestrial animals (Kosuth et al.,
            2018).</p>
          <h2 id="what-is-the-ongoing-research-on-microplastics">What is the
            ongoing research on microplastics?</h2>
          <p>There are many research groups as well as private sector initiatives
            that are either focused on the mitigation of the effects of
            microplastics or the removal of microplastics.</p>
          <p>This is the list of some of the current research work:</p>
          <ul>
            <li>
              <p>Researchers at the University of Waterloo have created a novel
                method that uses activated carbon generated from epoxy resin to remove
                nanoplastics from water, with a reported efficacy of 94%. This method
                allows for the reuse of epoxy, which is commonly regarded as
                non-renewable. Professor Tizazu Mekonnen of the University of Waterloo
                emphasized the importance of taking a circular strategy to address
                plastic waste.</p>
            </li>
            <li>
              <p>According to a research study published in Nanoscale in 2024, a
                group from the Indian Institute of Science designed a multiple-layered
                hydrogel that eliminates microplastics from water by adsorption. When
                exposed to UV light, this hydrogel can be utilized to break down
                microplastics and enable reuse.</p>
            </li>
            <li>
              <p>A bio-based thermoplastic polyurethane was developed as an
                alternative to conventional plastics by researchers at the University of
                California San Diego, which can decompose within seven months even at
                the microplastic level to reduce the impact on the environment and
                health.</p>
            </li>
            <li>
              <p>There are ongoing studies that are focused on utilizing
                microorganisms such as bacteria, fungi and algae to degrade
                microplastics and produce less harmful byproducts.</p>
            </li>
            <li>
              <p>Nanotechnology can solve microplastic degradation challenges.
                Functionalized carbon nano springs, for example, have demonstrated
                increased catalytic performance and stability, resulting in a
                considerable reduction in the activation energy for microplastic
                removal. Photocatalytic systems employing zinc oxide nanorods and
                zinc-cadmium photocatalysts have also shown an effective breakdown of
                microplastics under visible light (Jino, 2024).</p>
            </li>
          </ul>
          <h2 id="what-is-our-project">What is our project?</h2>
          <h3 id="overview-of-project">Overview of project:</h3>
          <p>Traditional methods for removing microplastics from water are often
            limited by their complexity, cost, and efficiency. Our project
            introduces a novel, eco-friendly solution utilizing affinity tag
            peptides immobilized on resins to capture and remove microplastics
            efficiently. <strong>The novelty of our proposed solution lies in
              synthesizing peptides with specific affinity tags that have a high
              binding affinity for various types of microplastics (e.g., polyethylene,
              polypropylene, polystyrene).</strong> This targeted binding ensures
            effective agglomeration of microplastic particles compared to other
            existing methods. <strong>The peptides can be tailored for optimal
              interaction with different microplastic types, enhancing the versatility
              and efficiency of the method (Woo et al., 2022).</strong></p>
          <p>Our eco-friendly approach uses biologically derived peptides and
            benign resins, minimizing environmental harm compared to traditional
            chemical methods. The simplicity of peptide synthesis and resin
            immobilization allows for easy scalability, making this method ideal for
            large-scale deployment in diverse water treatment scenarios, balancing
            sustainability and efficiency.</p>
          <p>Our goal is to engineer <em>E. coli</em> to synthesize peptides
            capable of removing microplastics from the contaminated area. By
            targeting specific types of microplastics such as polystyrene,
            polypropylene, polyethylene, polycarbonate, and polyethylene
            terephthalate, we ensure efficient capture of these particles. The
            peptides and associated microplastics are then separated using a resin
            complex. This method not only enhances the speed and ease of isolation
            but also reduces sample contamination and minimizes the use of harsh
            chemicals. Moreover, this innovative approach offers scalability and
            adaptability, providing a versatile tool for addressing microplastic
            pollution in various conditions.</p>
          <h3 id="role-of-resins">Role of Resins:</h3>
          <p>Due to their small size, peptides bound to microplastics are
            challenging to separate from the environment. To address this, we use a
            resin complex that binds to residues with high affinity His tags located
            at one end of the peptide sequence. Once these His-tagged peptides are
            produced, the Ni-NTA resin is introduced, forming a resin-peptide
            complex. This complex is then applied to the contaminated area where
            microplastics need to be removed, resulting in a
            resin-peptide-microplastic complex. The resin, along with the bound
            microplastics, is subsequently removed through filtration or
            centrifugation, effectively eliminating the microplastics from the
            system.</p>
          <h3 id="use-of-peptides">Use of Peptides:</h3>
          <p>Peptides with specific binding affinities for various types of
            plastics have been employed in the separation of microplastics. Strong
            affinities for both oxidized and unoxidized forms of microplastics are
            shown by these peptides. Conventional techniques for breaking down
            microplastics with enzymes such as METase and PETase frequently result
            in difficulty in managing byproducts. Whereas, peptides allow
            microplastics to be eliminated from specific surroundings without
            causing any negative consequences.</p>
          <p>The stability, selectivity, and sensitivity of peptides toward
            microplastics can be efficiently controlled by carefully designing the
            amino acid sequences. Peptides can effectively attach to microplastics
            and aid in their removal thanks to their precise engineering, providing
            a more sustainable and hygienic way to combat pollution.</p>
          <figure>
            <img src="https://static.igem.wiki/teams/5227/description/image2.png" alt="Fig.2 Overview of our project" />
            <figcaption aria-hidden="true">Fig.2 Overview of our
              project</figcaption>
          </figure>
          <h2 id="applications">Applications:</h2>
          <h3 id="sewage-wastewater-treatment">Sewage wastewater treatment</h3>
          <p>A typical sewage treatment plant uses a series of tanks to treat the
            wastewater, the process usually contains 6 steps and generally involves
            three stages, called primary, secondary and tertiary treatment, besides
            pre-treatments (Team:ASTWS-China/Implementation - 2020.igem.org, n.d.).
            After grate and grit screening, wastewater will usually be treated by
            our peptide immobilized resins which can remove microplastics from the
            water which usually tend to accumulate and magnify in the food chain,
            causing endocrine disruption, inflammation and damage to the
            gastrointestinal tract. (New Study Links Microplastics to Serious Health
            Harms in Humans, 2024).</p>
          <h3 id="marine-water-treatment">Marine water treatment</h3>
          <p>Environmental pollution caused by inert anthropogenic stressors such
            as microplastic in aquatic media is constantly increasing due to the
            dumping of plastic waste into the sea. Through the proliferating use of
            microplastic products in daily life, more and more plastic particles
            enter water as primary microplastics, even through the degradation of
            large-scale plastic items such as plastic bottles and bags, that
            generate large microplastics and nano plastics (Herbort &amp; Schuhen,
            2016). This can be captured effectively by the resins after treating
            batches of seawater in tanks.</p>
          <h3 id="soil-treatment">Soil treatment:</h3>
          <p>A substantial proportion of plastic pollution is expected to enter
            and remain permanently in the soil column. One entryway for
            microplastics into soils is the mismanagement of waste, and also common
            agricultural practices are known to introduce microplastics directly
            into soil systems, such as using treated wastewater for irrigation,
            applying sewage sludge and certain compost types as fertilizers, or
            practicing plastic-film mulching. However, non-agricultural soils have
            also been shown to contain microplastics, such as floodplain soils,
            soils on industrial sites, and soils in home gardens (Möller et al.,
            2021).</p>
          <p>The resins help to remove the fine micro and nano plastics from the
            soil and enhance the plastic accumulation-free plant growth in
            crops.</p>
          <h3 id="treat-textile-effluent">Treat textile effluent:</h3>
          <p>In the marine ecosystem, microplastic fibers (MPFs) account for ∼91%
            of MP pollution and originate from a variety of sources, including
            carpeting, textiles, upholstery, and ropes. Up to 60% of textiles
            produced globally are synthetic, with the main polymers used being
            polyester (PET), acrylic (polyacrylonitrile; PAN) and nylon (polyamide;
            PA)). Although PET, PA and PAN garments release fibers during domestic
            washing (Sait et al., 2021). The hydrophobic peptide immobilized on the
            resin helps to capture the fiber particles on treatment (Woo et al.,
            2022) and the resins can be filtered out after use.</p>
          <figure>
            <img src="https://static.igem.wiki/teams/5227/description/image3.png" />
          </figure>
          <figure>
            <img src="https://static.igem.wiki/teams/5227/description/image4.png"
              alt="Fig.3 Application of resin-bonded peptides in the removal of microplastics" />
            <figcaption aria-hidden="true">Fig.3 Application of resin-bonded
              peptides in the removal of microplastics</figcaption>
          </figure>


              <h2 id="references">References</h2>
              <div>
                <a href="https://doi.org/10.3390/nu15030617" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Ziani, K., Ioniță-Mîndrican, C. B., Mititelu, M., Neacșu, S. M.,
                    Negrei, C., Moroșan, E., Drăgănescu, D., &amp; Preda, O. T. (2023).
                    Microplastics: A Real Global Threat for Environment and Food Safety: A
                    State of the Art Review. <em>Nutrients</em>, <em>15</em>(3), 617.
                  </span>
                </a>
                <a href="https://doi.org/10.1007/s11356-021-13184-2" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                  Issac, M. N., &amp; Kandasubramanian, B. (2021). Effect of
                    microplastics in water and aquatic systems. <em>Environmental Science
                      and Pollution Research International</em>, <em>28</em>(16), 19544–19562.
                  </span>
                </a>
                <a href="https://doi.org/10.1016/j.jclepro.2018.01.171" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                  Leng, Z., Padhan, R. K., &amp; Sreeram, A. (2018). Production of
                    a sustainable paving material through chemical recycling of waste PET
                    into crumb rubber modified asphalt. <em>Journal of Cleaner
                      Production</em>, <em>180</em>, 682–688.
                  </span>
                </a>
                <a href="https://doi.org/10.5772/64815" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Espinosa, C., Esteban, M. N., &amp; Cuesta, A. (2016).
                    Microplastics in Aquatic Environments and Their Toxicological
                    Implications for Fish. In <em>InTech eBooks</em>.
                  </span>
                </a>
                <a href="https://doi.org/10.3390/life11121349" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Cverenkárová, K., Valachovičová, M., Mackul’ak, T., Žemlička, L.,
                    &amp; Bírošová, L. (2021). Microplastics in the Food Chain.
                    <em>Life</em>, <em>11</em>(12), 1349.
                  </span>
                </a>
                <a href="https://doi.org/10.1080/10408398.2022.2132212" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                  Kadac-Czapska, K., Knez, E., &amp; Grembecka, M. (2022). Food and
                    human safety: the impact of microplastics. <em>Critical Reviews in Food
                      Science and Nutrition</em>, 1–20.
                  </span>
                </a>
                <a href="https://doi.org/10.1016/j.scitotenv.2022.154907" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Jenner, L. C., Rotchell, J. M., Bennett, R. T., Cowen, M.,
                    Tentzeris, V., &amp; Sadofsky, L. R. (2022). Detection of microplastics
                    in human lung tissue using μFTIR spectroscopy. <em>Science of the Total
                      Environment</em>, <em>831</em>, 154907.
                  </span>
                </a>
                <a href="https://doi.org/10.1016/j.jclepro.2018.05.005" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Geueke, B., Groh, K., &amp; Muncke, J. (2018). Food packaging in
                    the circular economy: Overview of chemical safety aspects for commonly
                    used materials. <em>Journal of Cleaner Production</em>, <em>193</em>,
                    491–505.
                  </span>
                </a>
                <a href="https://doi.org/10.1371/journal.pone.0194970" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                  Kosuth, M., Mason, S. A., &amp; Wattenberg, E. V. (2018).
                    Anthropogenic contamination of tap water, beer, and sea salt. <em>PloS
                      One</em>, <em>13</em>(4), e0194970.
                  </span>
                </a>
                <a href="https://doi.org/10.1007/s44273-024-00026-z" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                  Jino Affrald R. (2024). Microplastic menace: a path forward with
                    innovative solutions to reduce pollution. <em>Asian Journal of
                      Atmospheric Environment</em>, <em>18</em>(1).
                  </span>
                </a>
                <a href="https://doi.org/10.1007/s11356-016-7216-x" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Herbort, A. F., &amp; Schuhen, K. (2016). A concept for the
                    removal of microplastics from the marine environment with innovative
                    host-guest relationships. Environmental Science and Pollution Research
                    International, 24(12), 11061–11065.
                  </span>
                </a>
                <a href="https://doi.org/10.1002/etc.5024" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Möller, J. N., Heisel, I., Satzger, A., Vizsolyi, E. C., Oster,
                    S. J., Agarwal, S., Laforsch, C., &amp; Löder, M. G. (2021). Tackling
                    the Challenge of Extracting Microplastics from Soils: A Protocol to
                    Purify Soil Samples for Spectroscopic Analysis. Environmental Toxicology
                    and Chemistry, 41(4), 844–857.
                  </span>
                </a>
                <a href="https://doi.org/10.1016/j.envpol.2020.115745" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Sait, S. T., Sørensen, L., Kubowicz, S., Vike-Jonas, K.,
                    Gonzalez, S. V., Asimakopoulos, A. G., &amp; Booth, A. M. (2021).
                    Microplastic fibres from synthetic textiles: Environmental degradation
                    and additive chemical content. Environmental Pollution, 268, 115745.
                  </span>
                </a>
                <a href="https://doi.org/10.1039/d1ra08701k" target="_" className="ref-container">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </span>
                  <span>
                    Woo, H., Kang, S. H., Kwon, Y., Choi, Y., Kim, J., Ha, D. H.,
                    Tanaka, M., Okochi, M., Kim, J. S., Kim, H. K., &amp; Choi, J. (2022).
                    Sensitive and specific capture of polystyrene and polypropylene
                    microplastics using engineered peptide biosensors. RSC Advances, 12(13),
                    7680–7688.
                  </span>
                </a>
              </div>
            </div>
            <TableOfContent
              pageRef={contentRef}
            />
    </>
  );
}
