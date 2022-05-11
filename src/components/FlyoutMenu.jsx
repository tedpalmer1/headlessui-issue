import { Fragment, useRef, useState, useEffect } from "react"
import { Popover, Transition } from "@headlessui/react"


function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function FlyoutMenu({
    menuTitle = "Hover Popover",
    menuLink = null,
    linksArray = [],
}) {
    let timeout 
    const timeoutDuration = 100

    const buttonRef = useRef(null)
    const [openState, setOpenState] = useState(false)

    const toggleMenu = (open) => {
        setOpenState((openState) => !openState)
        buttonRef?.current?.click() 
    }

    // Open the menu after a delay of timeoutDuration
    const onHover = (open, action) => {
        if (
            (!open && !openState && action === "onMouseEnter") ||
            (open && openState && action === "onMouseLeave")
        ) {
            clearTimeout(timeout)
            timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
        }
    }

    const handleClick = (open) => {
        setOpenState(!open) 
        clearTimeout(timeout) 
    }

    const LINK_STYLES = classNames(
        "py-5 px-1 w-48",
        "text-base text-gray-400",
        "transition duration-500 ease-in-out",
    )
    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            event.stopPropagation()
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })
    return (
        <div>
            <Popover className="relative">
              {({ open }) => (
                <div
                onMouseEnter={() => onHover(open, "onMouseEnter")}
                onMouseLeave={() => onHover(open, "onMouseLeave")}
                className="flex flex-col hover:border-b border-white"
                >
                  <Popover.Button
                    ref={buttonRef}
                    className={classNames(
                      open ? 'text-white' : 'text-white',
                      'group z-11 inline-flex items-center text-sm font-normal focus:outline-none py-1'
                    )}
                  >
                    <a href={menuLink}>{menuTitle}</a>
                  </Popover.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 transform px-2 w-max max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-6">
                      <div className="">
                        <div className="relative rounded-lg shadow-xl grid gap-4 bg-white px-5 py-6 sm:gap-4 mt-6">
                          {linksArray.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-row items-center rounded-lg text-gray-400"
                            >
                              
                              <div className="ml-4 text-sm font-medium">
                                {item.name}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              )}
            </Popover>
        </div>
    )
}