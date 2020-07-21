import React, { ReactNode } from 'react'

import { HStack, VStack, Spacer, Screen } from '.'

import {
  Maximize,
  DollarSign,
  BarChart2,
  Clock,
  CreditCard,
  Delete,
  Activity,
  Command,
  Monitor,
  HardDrive,
  LifeBuoy,
  Settings,
  X,
  Save,
} from 'react-feather'

export default {
  title: 'Layout Examples',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const CashApp = () => {
  return (
    // <Screen className="bg-green-600 text-white">
    <VStack className="h-screen bg-green-600 text-white">
      <HStack className="p-4">
        <Maximize />
        <Spacer />
        <img
          className="w-6 h-6 rounded-full border-2 border-white shadow"
          src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1690&q=80"
        />
      </HStack>
      <Spacer />
      <HStack className="text-6xl p-4">
        <span>$0</span>
      </HStack>
      <Spacer />
      <VStack className="text-2xl">
        <HStack>
          <button className="w-20 h-20">1</button>
          <button className="w-20 h-20">2</button>
          <button className="w-20 h-20">3</button>
        </HStack>
        <HStack>
          <button className="w-20 h-20">4</button>
          <button className="w-20 h-20">5</button>
          <button className="w-20 h-20">6</button>
        </HStack>
        <HStack>
          <button className="w-20 h-20">7</button>
          <button className="w-20 h-20">8</button>
          <button className="w-20 h-20">9</button>
        </HStack>
        <HStack>
          <button className="w-20 h-20">.</button>
          <button className="w-20 h-20">0</button>
          <button className="w-20 h-20">
            <Delete className="m-auto" />
          </button>
        </HStack>
      </VStack>
      <HStack alignment="center" className="space-x-4 p-4 text-xl w-full">
        <button className="bg-green-500 px-6 py-2 rounded-full shadow-md flex-1">
          Request
        </button>
        <button className="bg-green-500 px-6 py-2 rounded-full shadow-md flex-1">
          Pay
        </button>
      </HStack>
      <HStack alignment="center" className="p-4 pt-0 w-full">
        <button className="p-4 text-lg text-green-300">
          <Activity />
        </button>
        <Spacer />
        <button className="p-4 text-green-300">
          <CreditCard />
        </button>
        <Spacer />
        <button className="p-4 text-white">
          <DollarSign />
        </button>
        <Spacer />
        <button className="p-4 text-green-300">
          <BarChart2 />
        </button>
        <Spacer />
        <button className="p-4 text-green-300">
          <Clock />
        </button>
      </HStack>
    </VStack>
    // </Screen>
  )
}

const NavItem = ({
  label,
  Icon,
  isSelected = false,
}: {
  label: string
  Icon: React.FC<{ className?: string }>
  isSelected?: boolean
}) => (
  <button
    className={`p-2 ${
      isSelected
        ? 'bg-indigo-600 text-white rounded-lg w-full shadow-lg'
        : 'text-indigo-600'
    }`}
  >
    <HStack alignment="center" className="space-x-2">
      <Icon className="w-4 h-4" />
      <div className={`flex-1 text-left ${!isSelected ? 'text-gray-800' : ''}`}>
        {label}
      </div>
    </HStack>
  </button>
)

export const AboutThisMac = () => {
  return (
    <Screen
      className="p-16 bg-contain"
      style={{
        background:
          'url(https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_1600/m16jl9z22q0qkbgslzkx.jpg)',
      }}
    >
      <HStack className="text-gray-900 rounded-lg overflow-hidden shadow-2xl">
        <VStack
          className="w-48"
          style={{
            backgroundColor: 'rgba(226, 232, 240, .7)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <HStack className="controls p-6 space-x-2">
            <button className="w-3 h-3 rounded-full bg-red-500"></button>
            <button className="w-3 h-3 rounded-full bg-yellow-500"></button>
            <button className="w-3 h-3 rounded-full bg-green-500"></button>
            <Spacer />
          </HStack>
          <VStack className="p-4 flex-1 text-sm" alignment="leading">
            <NavItem label="Overview" Icon={Command} isSelected />
            <NavItem label="Displays" Icon={Monitor} />
            <NavItem label="Storage" Icon={HardDrive} />
            <NavItem label="Support" Icon={LifeBuoy} />
            <NavItem label="Service" Icon={Settings} />
            <Spacer />
          </VStack>
        </VStack>
        <VStack className="flex-1 bg-gray-200">
          <header className="p-4 bg-white text-lg">Overview</header>
          <VStack className="flex-1 p-16 space-y-4 text-sm overflow-scroll">
            <VStack className="space-y-1">
              <Command className="w-16 h-16 text-indigo-600" />
              <h2 className="text-2xl">macOS Big Sur</h2>
              <span>Version 11.0</span>
            </VStack>
            <VStack alignment="leading" className="space-y-1 text-xs">
              <p className="font-bold">
                MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports)
              </p>
              <HStack className="space-x-2">
                <dt className="font-bold">Processor</dt>
                <dd>2 GHz Quad-Core Intel Core i5</dd>
              </HStack>
              <HStack className="space-x-2">
                <dt className="font-bold">Memory</dt>
                <dd>16 GB 3733 MHz LPDDR4X</dd>
              </HStack>
              <HStack className="space-x-2">
                <dt className="font-bold">Graphics</dt>
                <dd>Intel Iris Plus Graphics 1536 MB</dd>
              </HStack>
              <HStack className="space-x-2">
                <dt className="font-bold">Serial Number</dt>
                <dd>JHBHVJYKU78</dd>
              </HStack>
            </VStack>
            <Spacer />
          </VStack>
        </VStack>
      </HStack>
    </Screen>
  )
}

const Button = (props: { children: ReactNode; className?: string }) => (
  <HStack {...props} as="button" alignment="center">
    {props.children}
  </HStack>
)

export const SimpleModal = () => {
  return (
    <Screen className="bg-gray-800">
      <VStack className="bg-gray-100 rounded-lg overflow-hidden w-1/2 shadow-2xl">
        <HStack className="p-4" alignment="center">
          <h3 className="font-bold">Some Title</h3>
          <Spacer />
          <X className="w-4 h-4" />
        </HStack>
        <p className="px-4">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <HStack className="p-4 space-x-2" alignment="center">
          <Button className="bg-gray-300 px-4 py-2 rounded">Close</Button>
          <Spacer />
          <Button className="bg-indigo-600 text-white px-4 py-2 rounded space-x-1 shadow">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </Button>
        </HStack>
      </VStack>
    </Screen>
  )
}
