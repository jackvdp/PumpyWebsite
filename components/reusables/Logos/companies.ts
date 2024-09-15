interface Company {
    name: string;
    imageUrl: string;
    animate: boolean;
}

const companies: Company[] = [
    {
        name: 'Met Office',
        imageUrl:
            'https://www.metoffice.gov.uk/webfiles/1725362600156/images/logos/mo-green-white.svg',
        animate: false,
    },
    {
        name: 'Department for Business & Trade',
        imageUrl:
            'https://ukskillspartnership.org.uk/moogryce/2023/03/DBT_Red-transparent-background.png',
        animate: true,
    },
    {
        name: 'Gigabyte Software',
        imageUrl: 'https://www.gigabyte.software/assets/images/logo/logo-dark.svg',
        animate: true,
    },
    {
        name: 'Elev8 Exchange',
        imageUrl: 'https://www.elev8exchange.com/assets/images/logo.webp',
        animate: true,
    },
    {
        name: 'Vanderpump FX',
        imageUrl: 'https://www.vanderpumpfx.com/img/logo%20medium.png',
        animate: false,
    },
    {
        name: "International Centre for Parliamentary Studies",
        imageUrl: "https://www.electoralnetwork.org/img/logos/ICPSLogo-White.png",
        animate: false
    }
];

export default companies;