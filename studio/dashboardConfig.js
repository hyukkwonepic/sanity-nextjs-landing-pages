export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4b52ffe43967b620c4f940',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ui9s3nns',
                  apiId: '0cbb1f9f-6f55-4910-bafe-d18316419aff'
                },
                {
                  buildHookId: '5e4b5300d32c9eb8e41c3e28',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r1q8gp7e',
                  apiId: '79a3656f-0984-47e3-8aa3-97bef7959db8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexKwonIsAwesome/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r1q8gp7e.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
