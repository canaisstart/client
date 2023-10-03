import { QueryCourses_courses } from 'graphql/generated/QueryCourses'
import {
  QueryHome_banners,
  QueryHome_sections_freeCourses_highlight
} from 'graphql/generated/QueryHome'

import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

import formatPrice from 'utils/format-price'
import { getImageUrl } from 'utils/getImageUrl'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `${getImageUrl(banner.image?.url)}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeCourses_highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `${getImageUrl(highlight.background?.url)}`,
        floatImage: `${getImageUrl(highlight.floatImage?.url)}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (courses: QueryCourses_courses[] | undefined) => {
  return courses
    ? courses.map((course) => ({
        id: course.id,
        img: `${getImageUrl(course.cover?.url)}`,
        title: course.name,
        price: formatPrice(course?.price || 0),
        slug: course.slug
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => {
        const messages: {
          paid: string
          pending: string
          canceled: string
        } = {
          paid: 'Compra paga em',
          pending: 'Compra em processamento',
          canceled: 'Compra negada'
        }
        return {
          id: order.id,
          status: order.status,
          paymentInfo: {
            purchaseDate: `${
              messages[(order.status as keyof typeof messages) || 'pending']
            } ${new Intl.DateTimeFormat('pt-BR', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          courses: order.courses.map((course) => ({
            id: course.id,
            title: course.name,
            img: `${getImageUrl(course.cover?.url)}`,
            price: formatPrice(course.price || 0),
            slug: course.slug
          }))
        }
      })
    : []
}
