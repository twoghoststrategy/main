import React from 'react'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const features = [
    {
        name: `Analytics`,
        href: `#`,
        description: `Get a better understanding of where your traffic is coming from.`,
        icon: ChartBarIcon,
    },
    {
        name: `Engagement`,
        href: `#`,
        description: `Speak directly to your customers in a more meaningful way.`,
        icon: CursorClickIcon,
    },
    { name: `Security`, href: `#`, description: `Your customers' data will be safe and secure.`, icon: ShieldCheckIcon },
    {
        name: `Integrations`,
        href: `#`,
        description: `Connect with third-party tools that you're already using.`,
        icon: ViewGridIcon,
    },
    {
        name: `Automations`,
        href: `#`,
        description: `Build strategic funnels that will drive your customers to convert`,
        icon: RefreshIcon,
    },
]
const callsToAction = [
    { name: `Watch Demo`, href: `#`, icon: PlayIcon },
    { name: `Contact Sales`, href: `#`, icon: PhoneIcon },
]
const resources = [
    {
        name: `Help Center`,
        description: `Get all of your questions answered in our forums or contact support.`,
        href: `#`,
        icon: SupportIcon,
    },
    {
        name: `Guides`,
        description: `Learn how to maximize our platform to get the most out of it.`,
        href: `#`,
        icon: BookmarkAltIcon,
    },
    {
        name: `Events`,
        description: `See what meet-ups and other events we might be planning near you.`,
        href: `#`,
        icon: CalendarIcon,
    },
    { name: `Security`, description: `Understand how we take your privacy seriously.`, href: `#`, icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: `Boost your conversion rate`, href: `#` },
    { id: 2, name: `How to use search engine optimization to drive traffic to your site`, href: `#` },
    { id: 3, name: `Improve your customer experience`, href: `#` },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(` `)
}

export default function Example() {
    return (

        <>

            <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block xl:inline">Data to enrich your</span>{` `}
                        <span className="block text-indigo-600 xl:inline">online business</span>
                    </h1>
                    <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
                    </p>

                </div>
            </div>

        </>
    )
}
