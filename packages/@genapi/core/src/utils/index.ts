/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path'
import { cwd } from 'process'
import type { ApiPipeline } from '@genapi/config'

export function inPipeline(pipe: string): ApiPipeline.Pipeline | undefined {
  const inputs = [`apipgen-${pipe}`, absolutePath(pipe)]

  for (const input of inputs) {
    const inputModule = require('jiti')(__filename)(input)
    const pipeline = inputModule.default || inputModule
    if (pipeline)
      return pipeline
  }
}

export function absolutePath(_path: string) {
  if (path.isAbsolute(_path))
    return _path
  else
    return path.resolve(cwd(), _path)
}
