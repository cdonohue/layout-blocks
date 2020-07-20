import React from 'react'

export default function createStyleTag(styles: string) {
  return <style dangerouslySetInnerHTML={{ __html: styles }} />
}
