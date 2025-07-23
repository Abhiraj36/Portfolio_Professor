// src/app/publications/page.tsx
'use client';
import { motion } from "framer-motion";


type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
};

const publications: Publication[] = [
  {
    title: "Evolution of solar driven desiccant systems for energy-efficient air conditioning: A review",
    authors: "Juri Sonowal, B.Kiran Naik, DVN. Lakshmi, P. Muthukumar, R. Anandalakshmi",
    journal: "Solar Compass, Volume 14, June 2025, 100115",
    year: "2025",
    doi: "https://doi.org/10.1016/j.solcom.2025.100115"
  },
  {
    title: "Analysis of Physical and Chemical Ignition Delay with Di-tert Butyl Peroxide in Diesel Engine using Hydrogen as Gaseous Fuel",
    authors: "Harsh Vardhan, Chandra Bhusan and V.N. Lakshmi Durga",
    journal: "J. Environ. Nanotechnol., Volume 13, No 4 (2024) pp. 272-280 (SCOPUS)",
    year: "2024",
    doi: "https://doi.org/10.13074/jent.2024.12.243914"
  },
  {
    title: "Effect of Di Tert Butyl Peroxide on Performance and Emissions and Vibration Characteristics of Diesel Fuel with HHO Gas as Secondary Fuel",
    authors: "Harsh Vardhan, Chandra Bhusan and V.N. Lakshmi Durga",
    journal: "International Journal of Hydrogen Energy, Volume 99, Jan 2025, Pages 769-784 (Q1, SCI & SCOPUS, IF 8.1)",
    year: "2025",
    doi: "https://doi.org/10.1016/j.ijhydene.2024.12.130"
  },
  {
    title: "Maxwell–Cattaneo double-diffusive convection of Kuvshiniski viscoelastic nanofluid in a Brinkman–Darcy porous medium",
    authors: "Monal Bharty, Atul K. Srivastava, Hrishikesh Mahato and V. N. Lakshmi Durga",
    journal: "Zeitschrift für Naturforschung A Journal of Physical Sciences (Scopus)",
    year: "2024",
    doi: "https://doi.org/10.1515/zna-2024-0145"
  },
  {
    title: "Experimental investigation of modified indirect solar dryer with integrated thermal storage material for drying of dhekia (Diplazium esculentum) fern",
    authors: "Deepanka Saikia, Prakash Kumar Nayak, Kesavan Radha Krishnan, Rajesh Kondareddy, Durga Venkata Naga Lakshmi",
    journal: "Environmental Science and Pollution Research (Q1, SCI & SCOPUS, IF 5.19)",
    year: "2023",
    doi: "https://doi.org/10.1007/s11356-023-25310-3"
  },
  {
    title: "Effect of drying air temperature on the drying characteristics and quality aspects of black ginger",
    authors: "P Muthukumar, DVN Lakshmi, Puja Koch, Mukesh Gupta, G Srinivasan",
    journal: "Journal of Stored Products Research, Volume 97, May 2022 (Q2, SCI, IF 2.83)",
    year: "2022",
    doi: "https://doi.org/10.1016/j.jspr.2022.101966"
  },
  {
    title: "Development of indirect type solar dryer and experiments for estimation of drying parameters of dhekia (Diplazium esculentum)",
    authors: "Deepanka Saikia, Prakash Kumar Nayak, K Radha Krishnan, Rajesh Kondareddy, DVN Lakshmi",
    journal: "Materials Today Proceedings, Volume 56, Part 2, 2022, Pages 774-780 (Scopus)",
    year: "2022",
    doi: "https://doi.org/10.1016/j.matpr.2022.02.255"
  },
  {
    title: "Experimental investigations on active solar dryers integrated with thermal energy storage for drying of black pepper",
    authors: "D.V.N. Lakshmi, P. Muthukumar, P.K. Nayak",
    journal: "Renewable Energy, Volume 167, April 2021, 728-739 (Q1, Scopus & SCI, IF 8.7)",
    year: "2021",
    doi: "https://doi.org/10.1016/j.renene.2020.11.144"
  },
  {
    title: "Performance comparison of mixed mode and indirect mode parallel flow forced convection solar dryers for drying of Curcuma Zedoaria",
    authors: "D.V.N. Lakshmi, P. Muthukumar, J.P. Ekka, Apurba Layek, P.K. Nayak",
    journal: "Journal of Food Process Engineering, Volume 42, Issue 4, 2019 (Q2, Scopus & SCI, IF 2.356)",
    year: "2019",
    doi: "https://doi.org/10.1111/jfpe.130454"
  },
  {
    title: "Performance analysis of mixed mode forced convection solar dryer for drying of stevia leaves",
    authors: "D.V.N. Lakshmi, P. Muthukumar, Apurba Layek, P.K. Nayak",
    journal: "Solar Energy, Volume 188, August 2019, Pages 507-518 (Q1, Scopus & SCI, IF 7.18)",
    year: "2019",
    doi: "https://doi.org/10.1016/j.solener.2019.06.009"
  },
  {
    title: "Drying kinetics and quality analysis of black turmeric in a mixed mode forced convection solar dryer with thermal energy storage",
    authors: "D.V.N. Lakshmi, P. Muthukumar, Apurba Layek, P.K. Nayak",
    journal: "Renewable Energy, Volume 120, May 2018, Pages 23-34 (Q1, Scopus & SCI, IF 8.0)",
    year: "2018",
    doi: "https://doi.org/10.1016/j.renene.2017.12.053"
  },
  {
    title: "Performance analysis of Trapezoidal corrugated solar air heater with sensible heat storage material",
    authors: "D.V.N. Lakshmi, P. Muthukumar, Apurba Layek",
    journal: "Energy Procedia, Vol 109, March 2017, pp 463-470 (Scopus)",
    year: "2017",
    doi: "https://doi.org/10.1016/j.egypro.2017.03.069"
  },
  {
    title: "Nucleation Enhancement Studies on Aqueous Salt Solution",
    authors: "P. Muthukumar, D.V.N. Lakshmi",
    journal: "Energy Procedia, Vol 109, March 2017, pp 174-180 (Scopus)",
    year: "2017",
    doi: "https://doi.org/10.1016/j.egypro.2017.03.089"
  },
  {
    title: "An Experimental Study on Natural Convection Biomass Dryer with Different Sensible Heat Storage Materials",
    authors: "D.V.N. Lakshmi, S.S. Mohapatra, H.C. Das",
    journal: "Applied Mechanics and Materials, Vol. 852, 2016, pp 707-711",
    year: "2016",
    doi: "https://doi.org/10.4028/www.scientific.net/AMM.852.707"
  },
  {
    title: "Design and development of V grooved natural convection solar air heater for Odisha",
    authors: "D.V.N. Lakshmi, S.S. Mohapatra, A. Satheesh, H. Das",
    journal: "Applied Mechanics and Materials, Vols 813-814 (2015) pp-668-673",
    year: "2015"
  },
  {
    title: "Development of a Novel Process to Produce Bio-diesel and its Use as Fuel in CI Engine Performance Study and Exhaust Analysis",
    authors: "P. Mishra, D.V.N. Lakshmi, D.K. Sahu",
    journal: "IOSR-JMCE, Volume 11, Issue 4 Ver. IV (Jul-Aug 2014), pp 39-44",
    year: "2014"
  },
  {
    title: "Finite Element Analysis on Multi-hole Extrusion Process with Various Parameters",
    authors: "Ratnakar Das, Aninidata Sharma, D.V.N. Lakshmi, A. Sood",
    journal: "Procedia Engineering, Volume 97, 2014, pp 1247–1253",
    year: "2014"
  },
  {
    title: "Thermodynamic analysis of thermally operated cascade sorption heat pump for continuous cold generation",
    authors: "D.V.N. Lakshmi, Muthukumar P",
    journal: "International Journal of Energy and Environment, 2012, Volume 4, pp 161-174",
    year: "2012"
  }
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen animated-gradient bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-slate-900 dark:text-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white border-b border-slate-300 dark:border-gray-700 pb-4 mb-8">
          Research Publications
        </h1>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                {pub.title}
              </h2>
              <p className="mt-1 text-sm italic text-slate-600 dark:text-gray-400">
                {pub.authors}
              </p>
              <p className="text-sm text-slate-700 dark:text-gray-400">
                <span className="font-medium text-slate-800 dark:text-gray-300">
                  Published in:
                </span>{" "}
                {pub.journal} ({pub.year})
              </p>
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  🔗 View Publication
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
