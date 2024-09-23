const caseStudies: CaseStudy[] = [
    {
        name: 'Patch Consultancy',
        url: 'https://patch-consultancy-8p6hlgsw8-pumpy.vercel.app',
    },
    {
        name: 'Elev8 FX',
        url: 'https://elev8exchange.com',
    },
    {
        name: 'Gigabyte Software',
        url: 'https://gigabyte.software',
    },
];

export default caseStudies;

export interface CaseStudy {
  url: string;
  name: string;
}