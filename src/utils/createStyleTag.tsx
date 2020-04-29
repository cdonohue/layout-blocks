import React from 'react'

export default function createStyleTag(
  strings: TemplateStringsArray,
  ...values: any[]
) {
  const styles = strings
    .map((str, i) => `${str}${values[i] || ''}`)
    .join('')
    .replace(/\s\s+/g, ' ')
  return <style dangerouslySetInnerHTML={{ __html: styles }} />
}
