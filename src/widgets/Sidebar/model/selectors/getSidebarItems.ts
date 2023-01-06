import { createSelector } from '@reduxjs/toolkit'
import { getAuthUserData } from 'entities/User'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import Articles from 'shared/assets/icons/articles.svg'
import { SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(getAuthUserData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: 'Главная',
      Icon: MainIcon,
    },
    {
      path: RoutePath.about,
      text: 'О нас',
      Icon: AboutIcon,
    },
  ]

  if (userData) {
    sidebarItemList.push(
      {
        path: `${RoutePath.profile}${userData?.id}`,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: Articles,
        authOnly: true,
      }
    )
  }

  return sidebarItemList
})
