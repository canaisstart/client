import Link from 'next/link'
import Button from 'components/Button'
import CourseItem from 'components/CourseItem'

import * as S from './styles'
import Empty from 'components/Empty'
import { useCart } from 'hooks/use-cart'
import Loader from 'components/Loader'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading, totalInCents } = useCart()

  if (loading) {
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    )
  }

  return (
    <S.Wrapper isEmpty={!items.length} data-cy="cart-list">
      {items.length ? (
        <>
          <S.GamesList>
            {items.map((item) => (
              <CourseItem key={item.title} {...item} />
            ))}
          </S.GamesList>

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart" passHref>
                <Button as="a">
                  {totalInCents == 0 ? 'Resgatar' : 'Compre agora'}
                </Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Seu carrinho esta vazio"
          description="Volte para a loja e explore os ótimos cursos e ofertas."
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
