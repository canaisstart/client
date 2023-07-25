import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted,
  School
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter()

  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span>Meu dados</span>
        </S.Link>
      </Link>

      <Link href="/profile/courses" passHref>
        <S.Link isActive={activeLink === '/profile/courses'} title="My courses">
          <School size={24} />
          <span>Meus cursos</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <span>Minhas compras</span>
        </S.Link>
      </Link>

      <S.Link
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          push(data.url)
        }}
      >
        <ExitToApp size={24} title="Sign out" />
        <span>Sair</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
