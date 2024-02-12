import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'

export const Menus = [
    {
        title: 'Mes produits',
        path: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Mes commandes',
        path: '/orders',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Mon balance',
        path: '/balance',
        icon: <FaIcons.FaMoneyBillAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Mes benefices',
        path: '/benefits',
        icon: <FaIcons.FaHandHoldingUsd />,
        cName: 'nav-text'
    },
    {
        title: 'Historique',
        path: '/history',
        icon: <FaIcons.FaHistory />,
        cName: 'nav-text'
    },
    {
        title: 'Deconnexion',
        path: '/logout',
        icon: <FaIcons.FaPowerOff />,
        cName: 'nav-text'
    },
]