import { QueryLandingBySlug } from 'graphql/generated/QueryLandingBySlug'
import { QueryLandings } from 'graphql/generated/QueryLandings'
import { QUERY_LANDINGS, QUERY_LANDING_BY_SLUG } from 'graphql/queries/landings'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Landing, { LandingTemplateProps } from 'templates/Landing'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'

const apolloClient = initializeApollo()

export default function Index(props: LandingTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <Landing {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryLandings>({
    query: QUERY_LANDINGS
  })

  const paths = data.landings.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<QueryLandingBySlug>({
    query: QUERY_LANDING_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  const landing = data.landings[0]
  return {
    props: {
      ...landing,
      banner: {
        url: `${getImageUrl(landing.banner?.url)}`
      },
      forYou: landing.forYou?.map((fy) => ({
        ...fy,
        icon: {
          url: `${getImageUrl(fy?.icon?.url)}` || ''
        }
      })),
      learnItems: landing.learnItem?.map((item) => ({
        ...item,
        icon: {
          url: `${getImageUrl(item?.icon?.url)}` || ''
        }
      })),
      course: {
        name: landing.name,
        demo: landing.demo
      },
      installment: {
        ...landing.installment
      }
    },
    revalidate: 10800
  }
}
