export const getPersonJsonLd = () => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    url: 'https://parthdesai.site/',
    affiliation: [
      {
        '@type': 'Organization',
        '@id': '',
        url: 'https://www.netflix.com/',
        name: 'Netflix',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.wikidata.org/wiki/Q907311',
        url: 'https://www.glassdoor.com/',
        name: 'Glassdoor',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.wikidata.org/wiki/Q338825',
        url: 'https://www.accenture.com/us-en',
        name: 'Accenture',
      },
    ],
    description:
      'Parth Desai is a passionate Data Engineer, having architected and executed integrative solutions across AWS, GCP, and Kubernetes. He is currently pursuing his data engineering internship at Netflix. Before this he used to work as a Data Engineer at Accenture & Glassdoor.',
    image: 'https://imgur.com/a/H23XPrn',
    name: 'Victor Sabare',
    givenName: 'Victor',
    familyName: 'Sabare',
    gender: 'Male',
    birthPlace: 'Migori, Kenya',
    birthDate: '2001-10-28',
    jobTitle: 'Data Engineer',
    sameAs: [
      'https://www.wikidata.org/wiki/Q123921198',
      'https://www.google.com/search?q=Victor+Sabare',
      'https://www.linkedin.com/in/parthdesai',
      'https://x.com/victorsabare_',
      'https://www.instagram.com/victorsabare/',
      'https://github.com/sabareh',
    ],
    knowsAbout: [
      {
        '@type': 'Organization',
        '@id': 'https://www.wikidata.org/wiki/Q15954148',
        name: 'Glassdoor',
      },
      {
        '@type': 'Thing',
        '@id': 'https://www.wikidata.org/wiki/Q80993',
        name: 'Software Engineering',
      },
      {
        '@type': 'Thing',
        '@id': 'https://www.wikidata.org/wiki/Q1254596',
        name: 'Software as a Service',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.wikidata.org/wiki/Q2616400',
        name: 'Y Combinator',
      },
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q1860',
        name: 'English',
      },
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q733944',
        name: 'Gujarati',
      },
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q1568',
        name: 'Hindi',
      },
    ],
    nationality: [
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q30',
        name: 'United States of America',
      },
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q668',
        name: 'India',
      },
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.wikidata.org/wiki/Q1256981',
        name: 'San Francisco State University',
        url: 'https://www.sfsu.edu/',
        startDate: '2023',
        endDate: '2025',
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.wikidata.org/wiki/Q2763240',
        name: 'Nirma University',
        url: 'https://nirmauni.ac.in/',
        startDate: '2018',
        endDate: '2022',
        major: [
          {
            '@type': 'DefinedTerm',
            name: 'Computer Science',
          },
        ],
      },
    ],
  }
}