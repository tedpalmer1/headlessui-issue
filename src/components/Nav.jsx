import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'

import FlyoutMenu from '../components/FlyoutMenu.jsx'

const testList = [
  {
    name: 'Link 1',
    href: '/link-1',
  },
  {
    name: 'Link 2',
    href: '/link-2',
  },
  { name: 'Link 3',
    href: '/link-3',
  },
  {
    name: 'Link 4',
    href: '/link-4',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Popover>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-8 xl:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="">
              <span className="sr-only">Workflow</span>
            </a>
          </div>
          <div className="-mr-2 -my-2">
            <Popover.Button className="bg-gray-400 rounded-md p-2 inline-flex items-center justify-center text-white">
              <span className="sr-only">Open menu</span>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="lg:flex items-center lg:space-x-7 xl:space-x-10">
            <FlyoutMenu menuTitle="Test" menuLink="/test" linksArray={testList}/>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  )
}
