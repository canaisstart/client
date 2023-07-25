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
        price: formatPrice(course.price),
        slug: course.slug
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Curso gratuito',
            purchaseDate: `Compra feita em ${new Intl.DateTimeFormat('pt-BR', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          courses: order.courses.map((course) => ({
            id: course.id,
            title: course.name,
            img: `${getImageUrl(course.cover?.url)}`,
            price: formatPrice(course.price),
            slug: course.slug
          }))
        }
      })
    : []
}
