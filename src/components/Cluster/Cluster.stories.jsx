import React from 'react'

import { Cluster } from './Cluster'

export default {
  title: 'Layout/Cluster',
  component: Cluster,
  argTypes: {},
}

const Template = (args) => (
  <Cluster {...args}>
    <div
      style={{
        padding: '1rem',
        background: 'var(--gray-7)',
        color: 'var(--gray-1)',
      }}
    >
      One
    </div>
    <div
      style={{
        padding: '1rem',
        background: 'var(--gray-7)',
        color: 'var(--gray-1)',
      }}
    >
      Two
    </div>
    <div
      style={{
        padding: '1rem',
        background: 'var(--gray-7)',
        color: 'var(--gray-1)',
      }}
    >
      Three
    </div>
  </Cluster>
)

const Link = ({ children }) => (
  <a
    style={{
      color: 'var(--gray-1)',
    }}
    href="#"
  >
    {children}
  </a>
)

const NavbarExample = (args) => (
  <Cluster justify="space-between">
    <div
      style={{
        padding: '1rem 3rem',
        border: 'var(--border-size-2) solid var(--gray-1)',
      }}
    ></div>
    <Cluster>
      <Link>About</Link>
      <Link>Blog</Link>
      <Link>Contact</Link>
    </Cluster>
  </Cluster>
)

export const Default = Template.bind({})
Default.args = {}

export const Navbar = NavbarExample.bind({})
Navbar.args = {}
