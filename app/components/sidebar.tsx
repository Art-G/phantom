import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { IPhantoms } from '../types/phantoms'
import { Item } from './item'

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

const filters = [{ name: 'Caterogy', items: ['Category 1', 'Category 2'] }];

export const Sidebar = () => {

  return (
    <div>
        {filters.map(({name, items}) => (
            <h3>{name}</h3>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        ))}
    </div>
  )
}
