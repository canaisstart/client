import Link from 'next/link'

import { useEffect, useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import UserDropdown from 'components/UserDropdown'
import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

const Menu = ({ username, loading }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    const body = document.querySelector('body')

    if (isOpen && body) {
      body.classList.add('removeScrollMobile')
    } else if (!isOpen && body) {
      body.classList.remove('removeScrollMobile')
    }
  }, [isOpen])

  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/courses" passHref>
            <S.MenuLink>Cursos</S.MenuLink>
          </Link>

          {/* <Link href="/corporate" passHref>
            <S.MenuLink>Para Empresas</S.MenuLink>
          </Link> */}
        </S.MenuNav>
      </MediaMatch>

      {!loading && (
        <>
          <S.MenuGroup>
            <MediaMatch greaterThan="medium">
              <S.Gap>
                <S.IconWrapper>
                  <SearchIcon aria-label="Search" />
                </S.IconWrapper>
                <S.IconWrapper>
                  <MediaMatch greaterThan="medium">
                    <CartDropdown />
                  </MediaMatch>
                  <MediaMatch lessThan="medium">
                    <Link href="/cart">
                      <a>
                        <CartIcon />
                      </a>
                    </Link>
                  </MediaMatch>
                </S.IconWrapper>
              </S.Gap>
            </MediaMatch>
            <MediaMatch greaterThan="medium">
              {!username ? (
                <S.Gap>
                  <Link href="/sign-in" passHref>
                    <Button as="a">Entrar</Button>
                  </Link>
                  <Link href="/sign-up" passHref>
                    <Button as="a" outline>
                      Cadastrar
                    </Button>
                  </Link>
                </S.Gap>
              ) : (
                <UserDropdown username={username} />
              )}
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <S.Content>
              <CloseIcon
                aria-label="Close Menu"
                color="white"
                onClick={() => setIsOpen(false)}
              />
              <S.MenuNav>
                <Link href="/" passHref>
                  <S.MenuLink>Home</S.MenuLink>
                </Link>
                <Link href="/courses" passHref>
                  <S.MenuLink>Cursos</S.MenuLink>
                </Link>
                {/* <Link href="/corporate" passHref>
                <S.MenuLink>Para Empresas</S.MenuLink>
              </Link> */}

                {!!username && (
                  <>
                    <Link href="/profile/me" passHref>
                      <S.MenuLink>Minha conta</S.MenuLink>
                    </Link>
                    <Link href="/wishlist" passHref>
                      <S.MenuLink>Favoritos</S.MenuLink>
                    </Link>
                    <Link href="/profile/courses" passHref>
                      <S.MenuLink>Meus cursos</S.MenuLink>
                    </Link>
                    <Link href="#" passHref>
                      <S.MenuLink
                        onClick={async () => {
                          const data = await signOut({
                            redirect: false,
                            callbackUrl: '/'
                          })
                          push(data.url)
                        }}
                      >
                        Sair
                      </S.MenuLink>
                    </Link>
                  </>
                )}
                {!username && (
                  <>
                    <Link href="/sign-in" passHref>
                      <S.MenuLink>Entrar</S.MenuLink>
                    </Link>
                  </>
                )}
              </S.MenuNav>
            </S.Content>
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
